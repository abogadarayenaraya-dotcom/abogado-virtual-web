import { NextResponse } from "next/server"
import { z } from "zod"

// Recibe el formulario del sitio y lo reenvía al Apps Script del Google Sheet de
// leads desde el servidor, para que LEADS_TOKEN nunca llegue al navegador.
// Variables de entorno (Vercel): GOOGLE_SHEETS_WEBHOOK_URL, LEADS_TOKEN y
// opcionalmente ALLOWED_ORIGINS (lista separada por comas).

const MAX_BODY_BYTES = 10_000
const RATE_LIMIT = 5 // envíos por IP
const RATE_WINDOW_MS = 10 * 60 * 1000

const DEFAULT_ORIGINS = ["https://www.abogadovirtualchile.cl", "https://abogadovirtualchile.cl"]

const text = (max: number) => z.string().trim().max(max).optional()

const leadSchema = z
  .object({
    nombre: z.string().trim().min(2).max(120),
    rut: z
      .string()
      .trim()
      .regex(/^[0-9.\-kK ]{7,12}$/)
      .optional()
      .or(z.literal("")),
    correo: z.string().trim().email().max(160).optional().or(z.literal("")),
    telefono: z
      .string()
      .trim()
      .regex(/^\+?[0-9 ()\-]{8,20}$/)
      .optional()
      .or(z.literal("")),
    region: text(60),
    comuna: text(60),
    servicio: text(80),
    materia: text(120),
    descripcion: text(2000),
    urgencia: text(40),
    pagina: text(200),
    utm_source: text(100),
    utm_medium: text(100),
    utm_campaign: text(150),
    fuente: z.enum(["web", "reserva"]).default("web"),
    fecha_cita: text(20),
    hora_cita: text(10),
    modalidad: text(40),
    tipo_consulta: text(80),
    acepta_datos: z.literal(true),
    // Honeypot: campo oculto que una persona nunca completa
    website: z.string().max(0).optional(),
  })
  .refine((d) => d.correo || d.telefono, { message: "correo o telefono requerido" })

// Límite por IP en memoria. Es un freno básico (cada instancia lleva su propia
// cuenta); el límite fuerte va en el firewall de Vercel o Cloudflare.
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > RATE_LIMIT
}

function allowedOrigin(req: Request) {
  const origin = req.headers.get("origin")
  if (!origin) return false
  const allowed = process.env.ALLOWED_ORIGINS?.split(",").map((o) => o.trim()) || DEFAULT_ORIGINS
  // Las previsualizaciones de Vercel usan su propio dominio
  return allowed.includes(origin) || origin === `https://${process.env.VERCEL_URL}`
}

export async function POST(req: Request) {
  if (!allowedOrigin(req)) {
    return NextResponse.json({ ok: false }, { status: 403 })
  }

  const ip = req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown"
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "too_many_requests" }, { status: 429 })
  }

  const raw = await req.text()
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false }, { status: 413 })
  }

  let body: unknown
  try {
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    // Un bot que llenó el honeypot recibe "ok" para que no reintente
    if ((body as { website?: string })?.website) return NextResponse.json({ ok: true })
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 })
  }

  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  const token = process.env.LEADS_TOKEN
  if (!url || !token) {
    return NextResponse.json({ ok: false }, { status: 503 })
  }

  const { website: _honeypot, acepta_datos, ...lead } = parsed.data
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, acepta_datos: acepta_datos ? "Sí" : "No", token }),
      redirect: "follow",
      signal: AbortSignal.timeout(10_000),
    })
    const result = (await res.json()) as { ok?: boolean; id?: string }
    // Nunca se devuelve al navegador el detalle de errores del Apps Script
    return NextResponse.json(result.ok ? { ok: true, id: result.id } : { ok: false }, { status: result.ok ? 200 : 502 })
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 })
  }
}
