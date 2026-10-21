/**
 * Catálogo de ofertas (tarjetas de precios). Datos puros, sin JSX,
 * para reutilizarlos en las tarjetas y en el formulario de agendamiento.
 */

export type PricingItem = {
  id: string
  title: string
  description: string
  /** Precio destacado, p. ej. "$99.990" o "GRATIS". Si falta, se muestra "Consultar valor". */
  price?: string
  /** Texto previo al precio, p. ej. "Desde". */
  pricePrefix?: string
  /** Modalidad de pago, p. ej. "Pago único". */
  paymentNote?: string
  /** Lista de prestaciones (para ofertas sin precio fijo). */
  includes?: string[]
  badge?: string
  highlight?: boolean
}

export type PricingGroup = {
  id: "familia" | "empresas" | "laboral-civil"
  title: string
  subtitle: string
  items: PricingItem[]
}

export const PRICING_GROUPS: PricingGroup[] = [
  {
    id: "familia",
    title: "Área Familia",
    subtitle: "Divorcios, visitas y pensión de alimentos con acompañamiento legal.",
    items: [
      {
        id: "divorcio-mutuo-acuerdo",
        title: "Divorcio Mutuo Acuerdo",
        description: "Para cónyuges que acuerdan poner término al matrimonio. Te guiamos en el proceso.",
        price: "$99.990",
        paymentNote: "Pago único",
      },
      {
        id: "divorcio-unilateral-visitas",
        title: "Divorcio Unilateral / Visitas",
        description: "Divorcio solicitado por uno de los cónyuges y regulación de relación directa y regular (visitas).",
        price: "$199.990",
        paymentNote: "Pago en 2 cuotas",
      },
      {
        id: "pension-de-alimentos",
        title: "Pensión de Alimentos",
        description: "Asesoría y representación en materias de pensión de alimentos.",
        price: "$359.990",
        paymentNote: "Pago en 3 cuotas",
      },
    ],
  },
  {
    id: "empresas",
    title: "Empresas y Pymes",
    subtitle: "Cumplimiento normativo y formalización de tu negocio.",
    items: [
      {
        id: "ley-karin",
        title: "Ley Karin",
        description: "Implementación de protocolos de la Ley Karin para tu empresa.",
        pricePrefix: "Desde",
        price: "$99.990",
        paymentNote: "Implementación de protocolos",
      },
      {
        id: "sociedades",
        title: "Sociedades",
        description: "Constitución de sociedades para emprendedores y pymes.",
        pricePrefix: "Desde",
        price: "$250.000",
        paymentNote: "50% al inicio / 50% al finalizar",
      },
    ],
  },
  {
    id: "laboral-civil",
    title: "Área Laboral y Civil",
    subtitle: "Defiende tus derechos como trabajador y resguarda tu patrimonio.",
    items: [
      {
        id: "laboral",
        title: "Laboral",
        description: "Antes de firmar tu finiquito, que un abogado lo revise sin costo.",
        price: "GRATIS",
        paymentNote: "Revisión de finiquito",
        includes: ["Revisión de finiquito sin costo", "Defensa por despido injustificado"],
        badge: "Sin costo",
        highlight: true,
      },
      {
        id: "civil",
        title: "Civil",
        description: "Soluciones civiles rápidas y seguras para tu patrimonio.",
        includes: ["Posesión efectiva exprés", "Arriendos blindados", "Desalojos"],
      },
    ],
  },
]

/** Otras materias que se pueden consultar y que no tienen tarjeta de precio. */
const OTHER_CONSULTATION_TYPES = [
  "Familia (otra materia)",
  "Herencias",
  "Trámites Legales",
  "Escrituras",
  "Testamentos",
  "Inmigración",
  "Acoso Laboral",
  "Agentes IA",
  "Marketing Pro",
  "Otro",
]

/** Opciones del selector "Tipo de consulta" del formulario de agendamiento. */
export const CONSULTATION_TYPES: string[] = [
  ...PRICING_GROUPS.flatMap((group) => group.items.map((item) => item.title)),
  ...OTHER_CONSULTATION_TYPES,
]
