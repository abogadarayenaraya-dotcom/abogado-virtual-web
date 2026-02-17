"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, FileSignature, AlertTriangle, MessageSquare, ArrowRight, Sparkles } from "lucide-react"

const agents = [
  {
    icon: Bot,
    title: "IA Ley Karin",
    description: "Asistente especializado en normativa de acoso laboral y sexual",
    features: ["Análisis de casos", "Generación de denuncias", "Seguimiento"],
  },
  {
    icon: FileSignature,
    title: "IA para Contratos",
    description: "Revisión y generación de contratos legales",
    features: ["Contratos laborales", "Arrendamiento", "Compraventa"],
  },
  {
    icon: AlertTriangle,
    title: "IA para Denuncias",
    description: "Redacción y gestión de denuncias legales",
    features: ["Formato correcto", "Pruebas sugeridas", "Plazos"],
  },
  {
    icon: MessageSquare,
    title: "IA Consultas Rápidas",
    description: "Respuestas inmediatas a dudas legales básicas",
    features: ["24/7 disponible", "Respuesta inmediata", "Orientación"],
  },
]

export function AIAgentsPreview() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Tech Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Tecnología Legal
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Agentes Jurídicos IA
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Suscripción desde $250.000. Inteligencia artificial aplicada a tus casos legales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {agents.map((agent, index) => (
            <Card
              key={agent.title}
              className="group bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <agent.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-0">
                    IA Pro
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground">{agent.title}</CardTitle>
                <CardDescription>{agent.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {agent.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant="outline"
                      className="text-xs text-muted-foreground"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
            <Link href="/agentes-ia">
              Contratar Agente IA
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
