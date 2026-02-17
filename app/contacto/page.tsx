"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CalendarDays,
  Clock,
  Send,
} from "lucide-react"

const consultationTypes = [
  "Herencias",
  "Trámites Legales",
  "Escrituras",
  "Testamentos",
  "Familia",
  "Inmigración",
  "Acoso Laboral",
  "Derecho Laboral",
  "Ley Karin",
  "Agentes IA",
  "Marketing Pro",
  "Otro",
]

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
]

export default function ContactoPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipo: "",
    hora: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Hola, me gustaría agendar una consulta:\n\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nTipo de consulta: ${formData.tipo}\nFecha preferida: ${date ? date.toLocaleDateString("es-CL") : "Por definir"}\nHora: ${formData.hora}\n\nMensaje: ${formData.mensaje}`
    
    window.open(`https://wa.me/56941165158?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-0">
                Contacto
              </Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Agenda tu Consulta
              </h1>
              <p className="text-muted-foreground mt-4 text-lg">
                Consultas desde $20.000. Selecciona fecha, hora y tipo de consulta.
                Te contactaremos para confirmar.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Información de Contacto</CardTitle>
                    <CardDescription>Contáctanos por cualquier medio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a
                      href="https://wa.me/56941165158"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
                    >
                      <div className="p-2 rounded-full bg-[#25D366] text-white">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">+56 9 4116 5158</p>
                      </div>
                    </a>

                    <a
                      href="tel:+56941165158"
                      className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <div className="p-2 rounded-full bg-primary text-primary-foreground">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Teléfono</p>
                        <p className="text-sm text-muted-foreground">+56 9 4116 5158</p>
                      </div>
                    </a>

                    <a
                      href="mailto:abogadarayenaraya@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors"
                    >
                      <div className="p-2 rounded-full bg-secondary text-secondary-foreground">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">abogadarayenaraya@gmail.com</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <div className="p-2 rounded-full bg-muted-foreground/20 text-muted-foreground">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Ubicación</p>
                        <p className="text-sm text-muted-foreground">Chile (Atención Virtual)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Horario de Atención</h3>
                    <div className="space-y-2 text-sm text-primary-foreground/80">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes</span>
                        <span>09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado</span>
                        <span>09:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo</span>
                        <span>Cerrado</span>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-primary-foreground/60">
                      WhatsApp disponible 24/7 para mensajes
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <CalendarDays className="w-5 h-5 text-primary" />
                      Agendar Consulta
                    </CardTitle>
                    <CardDescription>
                      Completa el formulario y te contactaremos para confirmar
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nombre">Nombre completo *</Label>
                          <Input
                            id="nombre"
                            placeholder="Tu nombre"
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="telefono">Teléfono *</Label>
                          <Input
                            id="telefono"
                            type="tel"
                            placeholder="+56 9 XXXX XXXX"
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Tipo de consulta *</Label>
                          <Select
                            value={formData.tipo}
                            onValueChange={(value) => setFormData({ ...formData, tipo: value })}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                            <SelectContent>
                              {consultationTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Fecha preferida</Label>
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                            disabled={(date) => date < new Date() || date.getDay() === 0}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Hora preferida</Label>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                type="button"
                                variant={formData.hora === time ? "default" : "outline"}
                                size="sm"
                                onClick={() => setFormData({ ...formData, hora: time })}
                                className="w-full"
                              >
                                <Clock className="w-3 h-3 mr-1" />
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                        <Textarea
                          id="mensaje"
                          placeholder="Describe brevemente tu caso o consulta..."
                          value={formData.mensaje}
                          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                          rows={4}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Solicitud
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
