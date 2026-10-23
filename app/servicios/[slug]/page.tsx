import { whatsappNumbers, whatsappMessageUrl, BOOKING_URL, office } from "@/lib/contact"
import { landingPages, getLandingPage, formatCLP } from "@/lib/landing-pages"
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { JsonLd } from "@/components/json-ld"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MessageCircle, Calendar, CheckCircle, ChevronRight, MapPin, Video } from "lucide-react"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getLandingPage(slug)
  if (!page) return {}
  const path = `/servicios/${page.slug}`
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: path,
      type: "website",
      locale: "es_CL",
      siteName: "AboVirtual",
      images: [{ url: "/images/abogada.jpg", alt: page.h1 }],
    },
  }
}

export default async function ServiceLandingPage({ params }: Props) {
  const { slug } = await params
  const page = getLandingPage(slug)
  if (!page) notFound()

  const path = `/servicios/${page.slug}`
  const whatsappUrl = whatsappMessageUrl(whatsappNumbers.primary.number, page.whatsappMessage)
  const related = page.related.map(getLandingPage).filter((p) => p !== undefined)

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.name,
    serviceType: page.name,
    description: page.metaDescription,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#estudio` },
    areaServed: { "@type": "Country", name: "Chile" },
    ...(page.price && {
      offers: {
        "@type": "Offer",
        priceCurrency: "CLP",
        ...(page.price.from
          ? { priceSpecification: { "@type": "PriceSpecification", minPrice: page.price.amount, priceCurrency: "CLP" } }
          : { price: page.price.amount }),
        description: page.price.payment,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}${path}`,
      },
    }),
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  const breadcrumbs = [
    { name: "Inicio", path: "/" },
    { name: "Servicios Legales", path: "/servicios" },
    { name: page.name, path },
  ]

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <nav aria-label="Ruta de navegación" className="max-w-4xl mx-auto mb-8">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.path} className="flex items-center gap-1">
                    {index > 0 && <ChevronRight className="w-4 h-4" />}
                    {index < breadcrumbs.length - 1 ? (
                      <Link href={crumb.path} className="hover:text-primary transition-colors">
                        {crumb.name}
                      </Link>
                    ) : (
                      <span className="text-foreground" aria-current="page">
                        {crumb.name}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-0">{page.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">{page.h1}</h1>
              <p className="text-muted-foreground mt-4 text-lg">{page.lead}</p>
              {page.price && (
                <p className="mt-6 text-3xl font-bold text-primary">
                  {page.price.from && <span className="text-base font-medium text-muted-foreground mr-2">Desde</span>}
                  {formatCLP(page.price.amount)}
                  <span className="block text-sm font-medium text-muted-foreground mt-1">{page.price.payment}</span>
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button asChild size="lg">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consultar por WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Consulta
                  </a>
                </Button>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 mt-10 text-left">
                {page.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto space-y-12">
              {page.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="text-muted-foreground mt-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">¿Cómo trabajamos?</h2>
                <ol className="grid sm:grid-cols-2 gap-4 mt-6">
                  {page.steps.map((step, index) => (
                    <li key={step.title} className="rounded-2xl border border-border bg-card p-5">
                      <span className="text-sm font-semibold text-primary">Paso {index + 1}</span>
                      <h3 className="font-semibold text-foreground mt-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <p className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Video className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Atención online por WhatsApp y Google Meet en todo Chile.
                </p>
                <p className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Presencial con hora agendada: {office.address} ({office.reference}). {office.hours}
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Preguntas frecuentes</h2>
                <div className="mt-6 space-y-3">
                  {page.faqs.map((faq) => (
                    <details key={faq.q} className="group rounded-2xl border border-border bg-card p-5">
                      <summary className="cursor-pointer list-none font-semibold text-foreground flex items-center justify-between gap-4">
                        <h3 className="text-base">{faq.q}</h3>
                        <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              {related.length > 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">Servicios relacionados</h2>
                  <ul className="grid sm:grid-cols-2 gap-3 mt-6">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/servicios/${item.slug}`}
                          className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 text-foreground hover:border-primary/50 transition-colors"
                        >
                          {item.name}
                          <ChevronRight className="w-4 h-4 text-primary" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-xs text-muted-foreground">
                La información de esta página es orientación general y no reemplaza una asesoría legal sobre tu caso.
              </p>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground">¿Hablamos de tu caso?</h2>
            <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
              Escríbenos por WhatsApp o agenda una consulta. Atención online en todo Chile.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" variant="secondary" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp {whatsappNumbers.primary.display}
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
