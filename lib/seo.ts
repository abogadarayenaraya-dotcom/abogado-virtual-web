import { whatsappNumbers, office } from "@/lib/contact"

export const SITE_URL = "https://www.abogadovirtualchile.cl"
export const SITE_NAME = "AboVirtual"

// Datos del estudio para el marcado estructurado (schema.org) que lee Google
export const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#estudio`,
  name: "AboVirtual - Abogado Virtual Chile",
  alternateName: "Abogado Virtual Chile",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.jpg`,
  image: `${SITE_URL}/images/abogada.jpg`,
  description:
    "Abogados de familia, laborales y de empresas en Chile. Divorcio de mutuo acuerdo y unilateral, pensión de alimentos, relación directa y regular (visitas), derecho laboral para trabajadores, civil, penal, inmobiliario, Ley Karin, sociedades y asesoría a empresas e inversionistas. Estudio legaltech. Atención online en todo Chile y presencial en Providencia.",
  telephone: `+${whatsappNumbers.primary.number}`,
  email: "abogadarayenaraya@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "CLP",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Almirante Zegers 764",
    addressLocality: "Providencia",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  hasMap: office.mapsUrl,
  areaServed: { "@type": "Country", name: "Chile" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:30",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `+${whatsappNumbers.primary.number}`,
      contactType: "customer service",
      areaServed: "CL",
      availableLanguage: "Spanish",
    },
  ],
  knowsAbout: [
    "Derecho de familia",
    "Divorcio de mutuo acuerdo",
    "Divorcio unilateral",
    "Pensión de alimentos",
    "Relación directa y regular",
    "Derecho laboral",
    "Ley Karin",
    "Constitución de sociedades",
    "Derecho civil",
    "Derecho penal",
    "Derecho inmobiliario",
    "Asesoría legal a empresas",
    "Asesoría a inversionistas",
    "Legaltech",
  ],
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#sitio`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "es-CL",
  publisher: { "@id": `${SITE_URL}/#estudio` },
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
