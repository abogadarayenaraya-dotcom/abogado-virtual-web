import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-foreground/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-foreground/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
            ¿Listo para resolver tu caso legal?
          </h2>
          <p className="text-primary-foreground/80 mt-4 text-lg">
            Agenda tu consulta virtual hoy. Atención inmediata por WhatsApp.
            Consultas desde $20.000.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacto">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <a
                href="https://wa.me/56941165158"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="https://wa.me/56941165158"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                +56 9 4116 5158
              </a>
              <a
                href="mailto:abogadarayenaraya@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                abogadarayenaraya@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
