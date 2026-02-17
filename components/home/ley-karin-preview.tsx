import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileCheck, Bot, Video, BarChart, ArrowRight } from "lucide-react"

const features = [
  {
    icon: FileCheck,
    title: "Adaptación de Software",
    description: "Sistema personalizado para tu empresa",
  },
  {
    icon: Bot,
    title: "IA Aplicada",
    description: "Inteligencia artificial para análisis de casos",
  },
  {
    icon: Video,
    title: "Contenido y Anuncios",
    description: "Material de capacitación y difusión",
  },
  {
    icon: BarChart,
    title: "Cumplimiento Normativo",
    description: "Garantía de cumplimiento legal",
  },
]

export function LeyKarinPreview() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                Para Empresas
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              App Ley Karin
            </h2>
            <p className="text-muted-foreground text-lg">
              Suscripciones desde $650.990. Cumple con la normativa de prevención 
              de acoso laboral y sexual en tu empresa con nuestra solución integral.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/ley-karin">
                  Solicitar Demo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contacto">
                  Contratar App
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card border-border hover:border-secondary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-secondary/10 text-secondary w-fit mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
