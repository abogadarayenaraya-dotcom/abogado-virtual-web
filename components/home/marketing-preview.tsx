import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Video, Bot, Palette, Megaphone } from "lucide-react"

const plans = [
  {
    name: "Plan Básico",
    price: "$550.990",
    description: "Perfecto para iniciar tu presencia digital",
    icon: Palette,
    features: [
      "Avatares personalizados",
      "Agentes IA básicos",
      "Creadores de contenido",
      "Videos para empresas",
      "Plan de contenido",
      "Contenido semanal",
    ],
    popular: false,
  },
  {
    name: "Plan Pro",
    price: "$850.990",
    description: "Mayor alcance y producción",
    icon: Video,
    features: [
      "Todo del Plan Básico",
      "Más contenido semanal",
      "Más agentes IA",
      "Producción ampliada",
      "Estrategia de marketing",
      "Reportes mensuales",
    ],
    popular: true,
  },
  {
    name: "Plan Premium",
    price: "$1.290.000",
    description: "Producción completa y estrategia avanzada",
    icon: Megaphone,
    features: [
      "Todo del Plan Pro",
      "Producción completa",
      "Videos premium",
      "Estrategia avanzada",
      "IA aplicada a marca",
      "Soporte prioritario",
    ],
    popular: false,
  },
]

export function MarketingPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            Marketing Pro
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Planes de Marketing Digital
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Avatares, agentes IA y creadores de contenido para tu estudio jurídico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-background ${
                plan.popular ? "border-secondary shadow-lg shadow-secondary/20" : "border-border"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground">
                  Más Popular
                </Badge>
              )}
              <CardHeader>
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary w-fit">
                  <plan.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-foreground">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/marketing">Contratar Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="link" className="text-secondary">
            <Link href="/marketing">
              Ver todos los detalles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
