"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronRight, MessageCircle, X } from "lucide-react"
import { WHATSAPP_LINES, waLink } from "@/lib/contact"
import { cn } from "@/lib/utils"

const DEFAULT_MESSAGE =
  "Hola, necesito orientación legal. Les escribo desde el sitio web de AboVirtual."

/**
 * Botón flotante de WhatsApp con doble línea de contacto.
 * - Escritorio: el menú se despliega al pasar el cursor; un clic lo deja fijo.
 * - Móvil / teclado: se abre y cierra con toque o Enter/Espacio.
 * - Se cierra con Escape o al hacer clic fuera.
 */
export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const [pinned, setPinned] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const open = hovered || pinned

  const close = useCallback(() => {
    setPinned(false)
    setHovered(false)
  }, [])

  const handlePointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setHovered(true)
  }

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    leaveTimer.current = setTimeout(() => setHovered(false), 180)
  }

  const handleToggle = () => {
    if (pinned) close()
    else setPinned(true)
  }

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close()
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open, close])

  useEffect(
    () => () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current)
    },
    [],
  )

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* Menú de líneas */}
      <div
        id="whatsapp-menu"
        inert={!open}
        className={cn(
          "absolute bottom-[4.25rem] right-0 w-[min(20rem,calc(100vw-2.5rem))] origin-bottom-right overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40 transition-all duration-200 ease-out",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0",
        )}
      >
        <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] px-5 py-4 text-white">
          <p className="font-serif text-lg font-bold leading-tight">¿Hablamos?</p>
          <p className="mt-1 text-sm text-white/90">
            Elige la línea con la que prefieres escribirnos por WhatsApp.
          </p>
        </div>

        <div className="space-y-1 p-2">
          {WHATSAPP_LINES.map((line) => (
            <a
              key={line.id}
              href={waLink(line.number, DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl p-3 outline-none transition-colors hover:bg-primary/10 focus-visible:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] transition-colors duration-200 group-hover:bg-[#25D366] group-hover:text-white">
                <MessageCircle className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-foreground">{line.label}</span>
                <span className="block text-sm text-muted-foreground">{line.display}</span>
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          ))}
        </div>

        <p className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
          Respuesta en menos de 24 horas
        </p>
      </div>

      {/* Botón flotante */}
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Contactar por WhatsApp"
        aria-expanded={open}
        aria-controls="whatsapp-menu"
        className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-xl shadow-[#25D366]/30 outline-none ring-4 ring-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#25D366]/40 focus-visible:ring-primary/70"
      >
        {!open && (
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 motion-reduce:hidden"
          />
        )}
        <MessageCircle
          className={cn(
            "absolute size-7 transition-all duration-300",
            open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100",
          )}
        />
        <X
          className={cn(
            "absolute size-6 transition-all duration-300",
            open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0",
          )}
        />
      </button>
    </div>
  )
}
