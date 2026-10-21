/** @type {import('next').NextConfig} */

// Widget del asistente de agendamiento (bot AboVirtual) que se carga en el layout
const BOT_ORIGIN = "https://abovirtual-ecosistema-1.vercel.app"

// Política de contenido: solo se cargan recursos del propio sitio y de los
// servicios que usamos (bot de agendamiento, Google Calendar y Vercel Analytics).
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${BOT_ORIGIN} https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self' ${BOT_ORIGIN} https://va.vercel-scripts.com https://vitals.vercel-insights.com`,
  `frame-src ${BOT_ORIGIN} https://calendar.google.com https://calendar.app.google https://www.google.com`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }]
  },
}

export default nextConfig
