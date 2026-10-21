"use client"

import { MessageCircle } from "lucide-react"
import { whatsappNumbers } from "@/lib/contact"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Secondary number */}
      <a
        href={whatsappNumbers.secondary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 h-11 pl-3 pr-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
        aria-label={`Contactar por WhatsApp al ${whatsappNumbers.secondary.display}`}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">WhatsApp 2</span>
      </a>

      {/* Primary number */}
      <a
        href={whatsappNumbers.primary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200 animate-pulse hover:animate-none"
        aria-label={`Contactar por WhatsApp al ${whatsappNumbers.primary.display}`}
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  )
}
