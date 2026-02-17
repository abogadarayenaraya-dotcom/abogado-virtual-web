"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Scale,
  FileText,
  Home,
  ScrollText,
  Users,
  Plane,
  AlertTriangle,
  Briefcase,
  Shield,
  Bot,
  Megaphone,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    id: "herencias",
    title: "Herencias",
    description: "Posesión efectiva, partición de bienes, testamentos",
    icon: Scale,
    color: "bg-primary/10 text-primary",
    href: "/servicios#herencias",
    keywords: ["herencia", "posesión efectiva", "partición", "bienes", "sucesión"],
  },
  {
    id: "tramites",
    title: "Trámites Legales",
    description: "Gestiones ante organismos públicos y privados",
    icon: FileText,
    color: "bg-secondary/10 text-secondary",
    href: "/servicios#tramites",
    keywords: ["trámite", "documento", "gestión", "público", "privado"],
  },
  {
    id: "escrituras",
    title: "Escrituras",
    description: "Compraventa, donaciones, permutas, hipotecas",
    icon: Home,
    color: "bg-accent/10 text-accent",
    href: "/servicios#escrituras",
    keywords: ["escritura", "compraventa", "donación", "hipoteca", "propiedad"],
  },
  {
    id: "testamentos",
    title: "Testamentos",
    description: "Redacción y asesoría en testamentos",
    icon: ScrollText,
    color: "bg-primary/10 text-primary",
    href: "/servicios#testamentos",
    keywords: ["testamento", "voluntad", "última voluntad", "legado"],
  },
  {
    id: "familia",
    title: "Derecho Familia",
    description: "Divorcios, pensiones, tuiciones, adopciones",
    icon: Users,
    color: "bg-secondary/10 text-secondary",
    href: "/servicios#familia",
    keywords: ["familia", "divorcio", "pensión", "tuición", "adopción", "custodia"],
  },
  {
    id: "inmigracion",
    title: "Inmigración",
    description: "Visas, residencias, nacionalización",
    icon: Plane,
    color: "bg-accent/10 text-accent",
    href: "/servicios#inmigracion",
    keywords: ["inmigración", "visa", "residencia", "nacionalidad", "extranjero"],
  },
  {
    id: "acoso",
    title: "Acoso Laboral",
    description: "Defensa contra mobbing y acoso",
    icon: AlertTriangle,
    color: "bg-destructive/10 text-destructive",
    href: "/servicios#acoso",
    keywords: ["acoso", "mobbing", "laboral", "hostigamiento", "maltrato"],
  },
  {
    id: "laboral",
    title: "Derecho Laboral",
    description: "Despidos, contratos, finiquitos, demandas",
    icon: Briefcase,
    color: "bg-primary/10 text-primary",
    href: "/servicios#laboral",
    keywords: ["laboral", "despido", "contrato", "finiquito", "demanda", "trabajo"],
  },
  {
    id: "ley-karin",
    title: "Ley Karin",
    description: "Cumplimiento normativo empresarial",
    icon: Shield,
    color: "bg-secondary/10 text-secondary",
    href: "/ley-karin",
    keywords: ["ley karin", "acoso", "empresa", "cumplimiento", "normativo", "protocolo"],
  },
  {
    id: "agentes-ia",
    title: "Agentes IA",
    description: "Automatización legal con inteligencia artificial",
    icon: Bot,
    color: "bg-accent/10 text-accent",
    href: "/agentes-ia",
    keywords: ["ia", "inteligencia artificial", "bot", "automatización", "tecnología"],
  },
  {
    id: "marketing",
    title: "Marketing Pro",
    description: "Marketing digital para abogados",
    icon: Megaphone,
    color: "bg-primary/10 text-primary",
    href: "/marketing",
    keywords: ["marketing", "digital", "redes sociales", "publicidad", "contenido"],
  },
]

export function ServicesSearch() {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const filteredServices = query
    ? services.filter(
        (service) =>
          service.title.toLowerCase().includes(query.toLowerCase()) ||
          service.description.toLowerCase().includes(query.toLowerCase()) ||
          service.keywords.some((k) => k.toLowerCase().includes(query.toLowerCase()))
      )
    : services

  const popularServices = services.slice(0, 6)

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">
            Búsqueda Rápida
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            ¿Qué tipo de servicio necesitas?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Busca por área legal o palabra clave y encuentra el servicio que necesitas
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-2xl mx-auto mb-12">
          <div
            className={`relative transition-all duration-300 ${
              isFocused ? "scale-105" : ""
            }`}
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar: Ley Karin, familia, herencias, laboral..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="pl-12 pr-4 py-6 text-lg bg-card border-border rounded-xl shadow-lg focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="text-sm text-muted-foreground">Búsquedas populares:</span>
            {["Ley Karin", "Laboral", "Familia", "Herencias", "IA"].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="text-sm px-3 py-1 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {(query ? filteredServices : popularServices).map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={service.id} href={service.href}>
                <Card
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer h-full"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${service.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {service.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {query && filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No encontramos resultados para "{query}"
            </p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => setQuery("")}
            >
              Ver todos los servicios
            </Button>
          </div>
        )}

        {!query && (
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/servicios">
                Ver todos los servicios
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
