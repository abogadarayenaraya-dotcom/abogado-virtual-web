import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { SITE_URL, SITE_NAME, legalServiceJsonLd, websiteJsonLd } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

const homeTitle = "Abogado de Familia Online en Chile | Divorcio y Pensión de Alimentos"
const homeDescription =
  "Abogados de familia en Chile: divorcio de mutuo acuerdo $99.990, divorcio unilateral, pensión de alimentos y visitas. También laboral, Ley Karin y sociedades. Atención online y en Providencia."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: "%s | AboVirtual",
  },
  description: homeDescription,
  keywords: [
    'abogado de familia',
    'divorcio mutuo acuerdo',
    'divorcio unilateral',
    'pensión de alimentos',
    'régimen de visitas',
    'abogado online Chile',
    'abogado laboral',
    'Ley Karin',
    'constitución de sociedades',
    'abogado civil',
    'abogado penal',
    'abogado inmobiliario',
    'asesoría legal empresas',
    'legaltech',
  ],
  authors: [{ name: 'AboVirtual' }],
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: '/',
    siteName: SITE_NAME,
    type: 'website',
    locale: 'es_CL',
    images: [{ url: '/images/abogada.jpg', alt: 'AboVirtual, abogados de familia online en Chile' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: ['/images/abogada.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Código de verificación de Google Search Console (variable de entorno en Vercel)
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  generator: 'v0.app',
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
    <html lang="es-CL">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <JsonLd data={legalServiceJsonLd} />
        <JsonLd data={websiteJsonLd} />
        {children}
        <Analytics />
        {/* Asistente de agendamiento (bot AboVirtual): botón flotante "Agenda tu consulta" */}
        <Script
          src="https://abovirtual-ecosistema-1.vercel.app/widget.js"
          strategy="afterInteractive"
          data-label="Agenda tu consulta"
        />
      </body>
    </html>
  )
}
