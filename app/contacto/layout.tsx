import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto y Agenda tu Consulta",
  description:
    "Contacta a AboVirtual por WhatsApp +56 9 5450 9331 o agenda tu consulta. Atención online en todo Chile y presencial con hora en Almirante Zegers 764, Providencia (Metro Salvador).",
  alternates: { canonical: "/contacto" },
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}
