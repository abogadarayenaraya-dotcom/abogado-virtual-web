import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'AboVirtual | Abogados Siempre Conectados',
  description: 'Servicios legales virtuales en Chile. Consultas desde $20.000. Herencias, trámites legales, escrituras, testamentos, familia, inmigración, acoso laboral, derecho laboral y Ley Karin.',
  keywords: ['abogado virtual', 'abogado online', 'servicios legales Chile', 'Ley Karin', 'herencias', 'derecho laboral', 'inmigración Chile'],
  authors: [{ name: 'AboVirtual' }],
  openGraph: {
    title: 'AboVirtual | Abogados Siempre Conectados',
    description: 'Servicios legales virtuales en Chile. Consultas desde $20.000.',
    type: 'website',
    locale: 'es_CL',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
