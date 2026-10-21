import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarCheck,
  Check,
  CreditCard,
  Users,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PRICING_GROUPS, type PricingGroup, type PricingItem } from "@/lib/catalog"
import { WHATSAPP_PRIMARY, waLink } from "@/lib/contact"
import { cn } from "@/lib/utils"

const GROUP_ICONS: Record<PricingGroup["id"], LucideIcon> = {
  familia: Users,
  empresas: Building2,
  "laboral-civil": Briefcase,
}

const GROUP_GRID: Record<PricingGroup["id"], string> = {
  familia: "md:grid-cols-2 lg:grid-cols-3",
  empresas: "md:grid-cols-2 max-w-4xl mx-auto",
  "laboral-civil": "md:grid-cols-2 max-w-4xl mx-auto",
}

function bookingHref(item: PricingItem) {
  return `/contacto?servicio=${encodeURIComponent(item.title)}#agendar`
}

function PricingCard({ item }: { item: PricingItem }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border bg-card p-7 shadow-lg shadow-black/20 transition-all duration-300",
        "hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10",
        item.highlight
          ? "border-primary/60 bg-gradient-to-b from-primary/10 to-card"
          : "border-border hover:border-primary/50",
      )}
    >
      {item.badge && (
        <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
          {item.badge}
        </span>
      )}

      <h4 className="font-serif text-xl font-bold text-foreground">{item.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

      {/* Precio */}
      <div className="mt-6 border-t border-border/70 pt-6">
        {item.price ? (
          <>
            {item.pricePrefix && (
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {item.pricePrefix}
              </span>
            )}
            <p className="font-serif text-4xl font-bold tracking-tight text-primary">{item.price}</p>
          </>
        ) : (
          <p className="font-serif text-2xl font-semibold text-foreground">Consultar valor</p>
        )}

        {item.paymentNote && (
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <CreditCard className="size-3.5" aria-hidden="true" />
            {item.paymentNote}
          </span>
        )}
      </div>

      {/* Prestaciones */}
      {item.includes && (
        <ul className="mt-5 space-y-2.5">
          {item.includes.map((line) => (
            <li key={line} className="flex items-start gap-2.5 text-sm text-foreground/90">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="size-3" aria-hidden="true" />
              </span>
              {line}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="mt-auto pt-7">
        <Button
          asChild
          size="lg"
          className="group/cta h-11 w-full rounded-xl font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
        >
          <Link href={bookingHref(item)} aria-label={`Agendar ahora: ${item.title}`}>
            <CalendarCheck aria-hidden="true" />
            Agendar Ahora
            <ArrowRight
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/cta:translate-x-1"
            />
          </Link>
        </Button>
      </div>
    </article>
  )
}

export function PricingSection() {
  return (
    <section id="precios" aria-labelledby="precios-title" className="relative overflow-hidden bg-background py-20">
      {/* Resplandor decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 border-0 bg-primary/10 text-primary">Servicios y Precios</Badge>
          <h2 id="precios-title" className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Precios claros para resolver tu caso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Elige tu servicio, revisa los valores y agenda tu hora en minutos.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {PRICING_GROUPS.map((group) => {
            const Icon = GROUP_ICONS[group.id]
            return (
              <div key={group.id}>
                <div className="mb-8 flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{group.title}</h3>
                    <p className="text-sm text-muted-foreground">{group.subtitle}</p>
                  </div>
                </div>

                <div className={cn("grid gap-6", GROUP_GRID[group.id])}>
                  {group.items.map((item) => (
                    <PricingCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-14 text-center text-sm text-muted-foreground">
          Valores en pesos chilenos (CLP). ¿Tienes dudas?{" "}
          <a
            href={waLink(WHATSAPP_PRIMARY.number, "Hola, tengo una consulta sobre los servicios y valores.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Escríbenos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
