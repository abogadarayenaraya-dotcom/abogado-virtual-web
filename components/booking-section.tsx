"use client"

import { useEffect, useState } from "react"
import { es } from "date-fns/locale"
import {
  CalendarDays,
  Check,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Video,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CONSULTATION_TYPES } from "@/lib/catalog"
import {
  BOOKING_SLOTS,
  CONTACT_EMAIL,
  OFFICE,
  WHATSAPP_LINES,
  WHATSAPP_PRIMARY,
  waLink,
} from "@/lib/contact"
import { cn } from "@/lib/utils"

type Mode = "presencial" | "online"

const EMPTY_FORM = { nombre: "", email: "", telefono: "", tipo: "", hora: "", mensaje: "" }

function isWeekend(date: Date) {
  return date.getDay() === 0 || date.getDay() === 6
}

/** Tarjeta de modalidad: funciona como opción de un radiogroup. */
function ModeCard({
  selected,
  onSelect,
  icon: Icon,
  title,
  children,
  footer,
}: {
  selected: boolean
  onSelect: () => void
  icon: LucideIcon
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card transition-all duration-300",
        selected
          ? "border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/40"
          : "border-border shadow-md hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-xl",
      )}
    >
      <button
        type="button"
        role="radio"
        aria-checked={selected}
        onClick={onSelect}
        className="flex w-full flex-1 items-start gap-4 rounded-2xl p-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      >
        <span
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
            selected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary",
          )}
        >
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-serif text-lg font-bold text-foreground">{title}</span>
          <span className="mt-2 block space-y-1 text-sm text-muted-foreground">{children}</span>
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
            selected ? "border-primary bg-primary text-primary-foreground" : "border-border",
          )}
        >
          {selected && <Check className="size-3.5" />}
        </span>
      </button>
      {footer && <div className="px-6 pb-5 pl-[5.5rem]">{footer}</div>}
    </div>
  )
}

export function BookingSection() {
  const [mode, setMode] = useState<Mode>("presencial")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [form, setForm] = useState(EMPTY_FORM)
  const [error, setError] = useState<string | null>(null)

  // Prellena el servicio cuando se llega desde una tarjeta de precios (?servicio=...)
  useEffect(() => {
    const servicio = new URLSearchParams(window.location.search).get("servicio")
    if (servicio && CONSULTATION_TYPES.includes(servicio)) {
      setForm((prev) => ({ ...prev, tipo: servicio }))
    }
  }, [])

  const slots = BOOKING_SLOTS[mode]

  const isDateDisabled = (day: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (day < today) return true
    return mode === "presencial" && isWeekend(day)
  }

  const isSlotPast = (slot: string) => {
    if (!date) return false
    const now = new Date()
    if (date.toDateString() !== now.toDateString()) return false
    const [hours, minutes] = slot.split(":").map(Number)
    return hours * 60 + minutes <= now.getHours() * 60 + now.getMinutes()
  }

  const changeMode = (next: Mode) => {
    setMode(next)
    setError(null)
    setForm((prev) => ({ ...prev, hora: "" }))
    setDate((prev) => (prev && next === "presencial" && isWeekend(prev) ? undefined : prev))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.tipo) return setError("Selecciona el tipo de consulta.")
    if (!date) return setError("Elige una fecha para tu consulta.")
    if (!form.hora) return setError("Elige una hora para tu consulta.")
    setError(null)

    const modalidad = mode === "presencial" ? `Presencial (${OFFICE.address})` : "Online (Google Meet)"
    const fecha = date.toLocaleDateString("es-CL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    const message = [
      "Hola, me gustaría agendar una consulta:",
      "",
      `Modalidad: ${modalidad}`,
      `Tipo de consulta: ${form.tipo}`,
      `Fecha preferida: ${fecha}`,
      `Hora preferida: ${form.hora} hrs`,
      "",
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.telefono}`,
      form.mensaje ? `\nMensaje: ${form.mensaje}` : "",
    ].join("\n")

    window.open(waLink(WHATSAPP_PRIMARY.number, message), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="agendar" className="scroll-mt-24 bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <Badge className="mb-4 border-0 bg-primary/10 text-primary">Reserva tu hora</Badge>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Elige cómo quieres ser atendido
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Selecciona la modalidad, tu fecha y hora preferidas. Te contactaremos para confirmar.
            </p>
          </div>

          {/* Modalidad de atención */}
          <div role="radiogroup" aria-label="Modalidad de atención" className="grid gap-6 md:grid-cols-2">
            <ModeCard
              selected={mode === "presencial"}
              onSelect={() => changeMode("presencial")}
              icon={MapPin}
              title="Atención Presencial (con reserva)"
              footer={
                <a
                  href={OFFICE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Ver ubicación en Google Maps
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              }
            >
              <span className="block font-medium text-foreground">{OFFICE.address}</span>
              <span className="block">{OFFICE.reference}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-primary" aria-hidden="true" />
                {OFFICE.schedule}
              </span>
            </ModeCard>

            <ModeCard
              selected={mode === "online"}
              onSelect={() => changeMode("online")}
              icon={Video}
              title="Atención Online (Google Meet)"
              footer={
                <a
                  href={waLink(WHATSAPP_PRIMARY.number, "Hola, tengo una urgencia legal y necesito atención online.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  ¿Es una urgencia? Escríbenos ahora
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              }
            >
              <span className="block font-medium text-foreground">
                Exclusivo para urgencias o fuera de horario (después de 18:30 hrs)
              </span>
              <span className="block">Te contactaremos para confirmar y enviarte el enlace.</span>
            </ModeCard>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Formulario */}
            <Card className="rounded-2xl border-border bg-card shadow-xl shadow-black/20 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <CalendarDays className="size-5 text-primary" aria-hidden="true" />
                  Solicitar hora
                </CardTitle>
                <CardDescription>
                  Modalidad seleccionada:{" "}
                  <strong className="font-semibold text-primary">
                    {mode === "presencial" ? "Presencial" : "Online (Google Meet)"}
                  </strong>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        className="h-11 rounded-xl"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-11 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="+56 9 XXXX XXXX"
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        className="h-11 rounded-xl"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de consulta *</Label>
                      <Select value={form.tipo} onValueChange={(value) => setForm({ ...form, tipo: value })}>
                        <SelectTrigger id="tipo" className="h-11 w-full rounded-xl">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          {CONSULTATION_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Fecha preferida *</Label>
                      <div className="mx-auto w-fit rounded-xl border border-border bg-background/40 shadow-sm md:mx-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={es}
                          weekStartsOn={1}
                          disabled={isDateDisabled}
                          className="rounded-xl"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {mode === "presencial"
                          ? "Atención presencial: lunes a viernes."
                          : "Atención online disponible todos los días."}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Hora preferida *</Label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {slots.map((slot) => {
                          const selected = form.hora === slot
                          return (
                            <Button
                              key={slot}
                              type="button"
                              size="sm"
                              variant={selected ? "default" : "outline"}
                              aria-pressed={selected}
                              disabled={isSlotPast(slot)}
                              onClick={() => setForm({ ...form, hora: slot })}
                              className={cn(
                                "h-9 w-full rounded-lg",
                                !selected && "hover:border-primary/60 hover:bg-primary/10 hover:text-primary",
                              )}
                            >
                              <Clock className="size-3" aria-hidden="true" />
                              {slot}
                            </Button>
                          )
                        })}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {mode === "presencial"
                          ? "Horario presencial: 10:00 a 18:30 hrs."
                          : "Horario online: después de las 18:30 hrs."}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Describe brevemente tu caso o consulta..."
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      rows={4}
                      className="rounded-xl"
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground"
                    >
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 w-full rounded-xl text-base font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
                  >
                    <Send className="size-5" aria-hidden="true" />
                    Enviar solicitud por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contacto rápido */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <Card className="rounded-2xl border-border bg-card shadow-xl shadow-black/20">
                <CardHeader>
                  <CardTitle className="text-foreground">¿Prefieres agendar directo?</CardTitle>
                  <CardDescription>Elige una línea y te atendemos por WhatsApp.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {WHATSAPP_LINES.map((line) => (
                    <a
                      key={line.id}
                      href={waLink(line.number, "Hola, me gustaría agendar una consulta.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group flex items-center gap-3 rounded-xl p-3 outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/60",
                        line.id === "principal"
                          ? "bg-[#25D366] text-white shadow-md shadow-[#25D366]/25 hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-lg"
                          : "border border-[#25D366]/50 bg-[#25D366]/10 text-foreground hover:-translate-y-0.5 hover:bg-[#25D366]/20",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-full",
                          line.id === "principal" ? "bg-white/20" : "bg-[#25D366] text-white",
                        )}
                      >
                        <MessageCircle className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{line.label}</span>
                        <span
                          className={cn(
                            "block text-sm",
                            line.id === "principal" ? "text-white/90" : "text-muted-foreground",
                          )}
                        >
                          {line.display}
                        </span>
                      </span>
                    </a>
                  ))}
                  <p className="pt-1 text-xs text-muted-foreground">WhatsApp disponible 24/7 para mensajes.</p>
                </CardContent>
              </Card>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-xl"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">Email</span>
                  <span className="block truncate text-sm text-muted-foreground">{CONTACT_EMAIL}</span>
                </span>
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
