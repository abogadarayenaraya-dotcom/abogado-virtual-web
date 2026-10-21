import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BookingSection } from "@/components/booking-section"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reserva tu hora | AboVirtual",
  description:
    "Agenda tu consulta legal: atención presencial en Providencia (Metro Salvador) u online por Google Meet. Lunes a Viernes, 10:00 a 18:30 hrs.",
}

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4 border-0 bg-primary/10 text-primary">Contacto</Badge>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Reserva tu hora</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Consultas desde $20.000. Atención presencial en Providencia u online por Google Meet.
              </p>
            </div>
          </div>
        </section>

        <BookingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
