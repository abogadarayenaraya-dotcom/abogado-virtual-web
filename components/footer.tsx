import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const navItems = [
  { href: "/servicios", label: "Servicios Legales" },
  { href: "/agentes-ia", label: "Agentes IA" },
  { href: "/marketing", label: "Marketing Pro" },
  { href: "/ley-karin", label: "App Ley Karin" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
]

const legalServices = [
  "Herencias",
  "Trámites Legales",
  "Escrituras",
  "Testamentos",
  "Familia",
  "Inmigración",
  "Acoso Laboral",
  "Derecho Laboral",
  "Ley Karin",
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.jpg"
                alt="AboVirtual Logo"
                width={48}
                height={48}
                className="rounded"
              />
              <div>
                <span className="text-lg font-serif font-bold text-foreground">Abo</span>
                <span className="text-lg font-serif font-bold text-primary">Virtual</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Abogados Siempre Conectados. Servicios legales virtuales en Chile.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2">
              {legalServices.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/56941165158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +56 9 4116 5158
                </a>
              </li>
              <li>
                <a
                  href="mailto:abogadarayenaraya@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  abogadarayenaraya@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Chile
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AboVirtual. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
