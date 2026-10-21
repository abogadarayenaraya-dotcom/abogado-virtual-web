import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Building2, Briefcase, Home, CheckCircle, MessageCircle, CalendarDays } from "lucide-react"
import { WHATSAPP_URL, BOOKING_URL } from "@/lib/contact"

type CatalogItem = {
  name: string
  price?: string
  payment?: string
}

const catalog: { icon: typeof Users; area: string; items: CatalogItem[] }[] = [
  {
    icon: Users,
    area: "Área Familia",
    items: [
      { name: "Divorcio Mutuo Acuerdo", price: "$99.990", payment: "Pago único" },
      { name: "Divorcio Unilateral / Visitas", price: "$199.990", payment: "Pago en 2 cuotas" },
      { name: "Pensión de Alimentos", price: "$359.990", payment: "Pago en 3 cuotas" },
    ],
  },
  {
    icon: Building2,
    area: "Área Empresas y Pymes",
    items: [
      { name: "Implementación Protocolos Ley Karin", price: "Desde $99.990" },
      {
        name: "Constitución de Sociedades",
        price: "Desde $250.000",
        payment: "50% al inicio y 50% contra entrega",
      },
      { name: "Asesoría corporativa, marcas y contratos" },
    ],
  },
  {
    icon: Briefcase,
    area: "Área Laboral",
    items: [
      { name: "Revisión de Finiquito", price: "GRATIS" },
      { name: "Defensa por Despido Injustificado, Autodespidos y Tutelas Laborales" },
    ],
  },
  {
    icon: Home,
    area: "Área Civil, Herencias e Inmobiliario",
    items: [
      { name: "Tramitación ágil de Posesión Efectiva y Juicios de Partición" },
      { name: "Arriendos blindados, redacción de contratos y demandas de desalojo (Precario)" },
    ],
  },
]

export function PricingCatalog() {
  return (
    <section id="valores" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">Catálogo y Valores</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Servicios, valores y facilidades de pago
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {catalog.map((group) => (
            <Card key={group.area} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <group.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-foreground">{group.area}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                          <span className="text-foreground">{item.name}</span>
                          {item.price && <span className="font-bold text-primary whitespace-nowrap">{item.price}</span>}
                        </div>
                        {item.payment && <p className="text-xs text-muted-foreground mt-0.5">{item.payment}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Button asChild size="lg" variant="outline">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <CalendarDays className="w-5 h-5 mr-2" />
              Reservar hora
            </a>
          </Button>
          <Button asChild size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Cotizar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
