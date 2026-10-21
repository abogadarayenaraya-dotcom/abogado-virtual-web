/**
 * Fuente única de datos de contacto y agendamiento de AboVirtual.
 * Cualquier cambio de teléfonos, dirección u horarios se hace SOLO aquí.
 */

export type WhatsAppLine = {
  id: "principal" | "secundaria"
  label: string
  /** Formato internacional sin "+", tal como lo exige wa.me */
  number: string
  /** Formato legible para mostrar en pantalla */
  display: string
}

export const WHATSAPP_LINES: readonly WhatsAppLine[] = [
  {
    id: "principal",
    label: "Línea Principal",
    number: "56923865953",
    display: "+56 9 2386 5953",
  },
  {
    id: "secundaria",
    label: "Línea Secundaria",
    number: "56954509331",
    display: "+56 9 5450 9331",
  },
]

export const WHATSAPP_PRIMARY = WHATSAPP_LINES[0]
export const WHATSAPP_SECONDARY = WHATSAPP_LINES[1]

/** Construye un enlace wa.me, con mensaje prellenado opcional. */
export function waLink(number: string, text?: string) {
  const base = `https://wa.me/${number}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

/** Enlace directo a la línea principal (botones simples del sitio). */
export const WHATSAPP_PRIMARY_URL = waLink(WHATSAPP_PRIMARY.number)

export const CONTACT_EMAIL = "abogadarayenaraya@gmail.com"

export const OFFICE = {
  address: "Almirante Zegers #764, Providencia",
  reference: "Metro Salvador",
  schedule: "Lunes a Viernes, 10:00 a 18:30 hrs",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Almirante Zegers 764, Providencia, Santiago, Chile",
  )}`,
} as const

/** Horas ofrecidas en el formulario de agendamiento (ajustables). */
export const BOOKING_SLOTS = {
  presencial: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  online: ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00"],
} as const
