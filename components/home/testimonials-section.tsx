"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "María González",
    role: "Cliente - Derecho Laboral",
    content: "Excelente atención. La abogada Rayén me ayudó con mi caso de despido injustificado y logré una indemnización justa. Todo de forma virtual, muy conveniente.",
    rating: 5,
  },
  {
    name: "Carlos Muñoz",
    role: "Cliente - Herencias",
    content: "Proceso de posesión efectiva fue mucho más fácil de lo esperado gracias a la asesoría de AboVirtual. Muy profesionales y siempre disponibles.",
    rating: 5,
  },
  {
    name: "Andrea Pérez",
    role: "Empresa - Ley Karin",
    content: "Implementamos el protocolo de Ley Karin con AboVirtual y el proceso fue impecable. Capacitación excelente y documentación completa.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Cliente - Familia",
    content: "Me ayudaron con mi proceso de divorcio de manera sensible y profesional. Siempre me mantuvieron informado del avance.",
    rating: 5,
  },
  {
    name: "Patricia Lagos",
    role: "Cliente - Inmigración",
    content: "Tramité mi residencia definitiva con su ayuda. Proceso claro y sin contratiempos. Muy recomendados.",
    rating: 5,
  },
  {
    name: "Fernando Rojas",
    role: "Empresa - Agentes IA",
    content: "El agente IA para contratos ha sido una inversión increíble. Ahorramos horas de trabajo y reducimos errores. Tecnología de punta.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const visibleCount = 3
  const maxIndex = testimonials.length - visibleCount

  const next = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">
            Testimonios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Más de 500 clientes satisfechos confían en AboVirtual
          </p>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Quote icon */}
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <p className="text-muted-foreground flex-1 mb-4">
                        "{testimonial.content}"
                      </p>
                      
                      {/* Author */}
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir a testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
