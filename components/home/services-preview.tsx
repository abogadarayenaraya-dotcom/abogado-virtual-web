"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  FileText,
  Home,
  ScrollText,
  Users,
  Plane,
  ShieldAlert,
  Briefcase,
  Gavel,
  ArrowRight,
} from "lucide-react"

const services = [
  { icon: Scale, title: "Herencias", description: "Posesión efectiva y gestión hereditaria", color: "bg-primary/10 text-primary" },
  { icon: FileText, title: "Trámites Legales", description: "Gestión de documentos y procesos", color: "bg-secondary/10 text-secondary" },
  { icon: Home, title: "Escrituras", description: "Compraventa e inscripciones", color: "bg-accent/10 text-accent" },
  { icon: ScrollText, title: "Testamentos", description: "Redacción y validación", color: "bg-primary/10 text-primary" },
  { icon: Users, title: "Familia", description: "Divorcios, tuiciones y pensiones", color: "bg-secondary/10 text-secondary" },
  { icon: Plane, title: "Inmigración", description: "Visas y residencias", color: "bg-accent/10 text-accent" },
  { icon: ShieldAlert, title: "Acoso Laboral", description: "Defensa y denuncia", color: "bg-destructive/10 text-destructive" },
  { icon: Briefcase, title: "Derecho Laboral", description: "Despidos y finiquitos", color: "bg-primary/10 text-primary" },
  { icon: Gavel, title: "Ley Karin", description: "Protocolo y cumplimiento", color: "bg-secondary/10 text-secondary" },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">
            Servicios Legales
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Áreas de Práctica
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Consultas desde $20.000. Atención virtual y presencial en toda Chile.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={service.title} href={`/servicios#${service.title.toLowerCase().replace(' ', '-')}`}>
              <Card
                className="group hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 bg-background cursor-pointer h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`p-3 rounded-xl ${service.color} w-fit mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="group">
            <Link href="/servicios">
              Ver todos los servicios
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
