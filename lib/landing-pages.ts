// Contenido de las páginas por servicio (/servicios/[slug]).
// Cada página apunta a un grupo de búsquedas en Google Chile; ver docs/seo/plan-seo-y-google-ads.md.

export type LandingSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LandingPage = {
  slug: string
  category: "Familia" | "Laboral" | "Empresas" | "Civil" | "Penal" | "Inmobiliario" | "Legaltech"
  name: string
  metaTitle: string
  metaDescription: string
  h1: string
  lead: string
  keywords: string[]
  price?: {
    amount: number
    from?: boolean
    payment: string
  }
  highlights: string[]
  sections: LandingSection[]
  steps: { title: string; text: string }[]
  faqs: { q: string; a: string }[]
  related: string[]
  whatsappMessage: string
}

export const landingPages: LandingPage[] = [
  {
    slug: "derecho-de-familia",
    category: "Familia",
    name: "Abogado de familia",
    metaTitle: "Abogado de Familia Online en Chile | Divorcios y Pensión de Alimentos",
    metaDescription:
      "Abogados de familia en Chile: divorcio de mutuo acuerdo desde $99.990, divorcio unilateral, pensión de alimentos y visitas. Atención online en todo Chile y presencial en Providencia.",
    h1: "Abogado de familia online en Chile",
    lead:
      "Te acompañamos en divorcios, pensión de alimentos, relación directa y regular (visitas) y cuidado personal, con valores publicados, pago en cuotas y atención por videollamada desde cualquier región.",
    keywords: [
      "abogado de familia",
      "abogado de familia online",
      "abogado familia santiago",
      "abogado de familia providencia",
      "abogado tribunal de familia",
    ],
    highlights: [
      "Divorcio de mutuo acuerdo $99.990 pago único",
      "Divorcio unilateral o visitas $199.990 en 2 cuotas",
      "Pensión de alimentos $359.990 en 3 cuotas",
      "Atención online en todo Chile",
    ],
    sections: [
      {
        heading: "¿Qué casos de familia atendemos?",
        paragraphs: [
          "Los asuntos de familia se tramitan ante los Tribunales de Familia y casi siempre requieren patrocinio de abogado. Nuestro trabajo es ordenar tu caso, explicarte cada etapa en lenguaje simple y representarte hasta que la sentencia quede firme.",
        ],
        bullets: [
          "Divorcio de mutuo acuerdo y divorcio unilateral (por cese de convivencia o por culpa).",
          "Pensión de alimentos: demanda, aumento, rebaja, cese y cobro de pensiones adeudadas.",
          "Relación directa y regular (régimen de visitas) y su cumplimiento.",
          "Cuidado personal (tuición) de hijos e hijas.",
          "Compensación económica y acuerdos completos y suficientes.",
        ],
      },
      {
        heading: "Mediación familiar: el paso previo obligatorio",
        paragraphs: [
          "Antes de demandar alimentos, cuidado personal o relación directa y regular, la ley exige pasar por una mediación familiar previa. En el sistema licitado por el Ministerio de Justicia la mediación es gratuita. Si se llega a acuerdo, se somete a aprobación del tribunal; si no, el certificado de mediación frustrada permite presentar la demanda.",
          "Te orientamos para llegar a la mediación con una propuesta clara y, si no hay acuerdo, preparamos la demanda con los antecedentes que el tribunal necesita.",
        ],
      },
      {
        heading: "Atención online y presencial",
        paragraphs: [
          "Puedes hacer todo el proceso por WhatsApp y Google Meet, desde cualquier región de Chile. Si prefieres reunirte en persona, te recibimos con hora agendada en Almirante Zegers 764, Providencia, a pasos de Metro Salvador.",
        ],
      },
    ],
    steps: [
      { title: "Consulta inicial", text: "Nos cuentas tu caso por WhatsApp o videollamada y te decimos qué camino legal corresponde." },
      { title: "Propuesta y valor", text: "Te confirmamos el valor publicado del servicio y la forma de pago antes de empezar." },
      { title: "Tramitación", text: "Redactamos los escritos, presentamos la causa y te representamos en las audiencias." },
      { title: "Sentencia y cierre", text: "Te acompañamos hasta que la sentencia queda firme y, en divorcios, hasta su subinscripción." },
    ],
    faqs: [
      {
        q: "¿Necesito abogado para un juicio de familia?",
        a: "En la mayoría de las causas de familia sí, porque la ley exige comparecer patrocinado por abogado. Algunas gestiones simples pueden iniciarse sin abogado, pero contar con asesoría evita errores que retrasan el juicio.",
      },
      {
        q: "¿Atienden fuera de Santiago?",
        a: "Sí. Atendemos online en todo Chile. Las audiencias se pueden realizar por videoconferencia cuando el tribunal lo permite.",
      },
      {
        q: "¿Puedo pagar en cuotas?",
        a: "Sí. El divorcio unilateral y la relación directa y regular se pagan en 2 cuotas, y la pensión de alimentos en 3 cuotas. El divorcio de mutuo acuerdo es pago único.",
      },
      {
        q: "¿Cuánto cuesta la primera consulta?",
        a: "Las consultas parten desde $20.000. Escríbenos por WhatsApp y te indicamos el valor según tu caso.",
      },
    ],
    related: ["divorcio-mutuo-acuerdo", "divorcio-unilateral", "pension-de-alimentos", "relacion-directa-y-regular"],
    whatsappMessage: "Hola, necesito asesoría con un abogado de familia.",
  },
  {
    slug: "divorcio-mutuo-acuerdo",
    category: "Familia",
    name: "Divorcio de mutuo acuerdo",
    metaTitle: "Divorcio de Mutuo Acuerdo en Chile $99.990 | Abogado Online",
    metaDescription:
      "Divorcio de mutuo acuerdo con abogado por $99.990 pago único. Requisitos, acuerdo completo y suficiente, plazos y trámite online en todo Chile. Agenda tu consulta.",
    h1: "Divorcio de mutuo acuerdo en Chile",
    lead:
      "Si ambos están de acuerdo en divorciarse y llevan al menos un año sin convivir, te ayudamos a tramitar el divorcio de forma rápida y ordenada por $99.990, pago único.",
    keywords: [
      "divorcio mutuo acuerdo",
      "divorcio de mutuo acuerdo chile",
      "divorcio mutuo acuerdo precio",
      "divorcio mutuo acuerdo online",
      "requisitos divorcio mutuo acuerdo",
      "cuanto cuesta un divorcio en chile",
      "divorcio express chile",
    ],
    price: { amount: 99990, payment: "Pago único" },
    highlights: [
      "$99.990 pago único",
      "Trámite 100% online o presencial",
      "Redactamos el acuerdo completo y suficiente",
      "Te acompañamos hasta la subinscripción",
    ],
    sections: [
      {
        heading: "Requisitos del divorcio de mutuo acuerdo",
        paragraphs: [
          "La Ley de Matrimonio Civil (Ley 19.947) permite el divorcio de común acuerdo cuando ambos cónyuges lo solicitan y acreditan que el cese de la convivencia ha durado más de un año.",
        ],
        bullets: [
          "Que ambos cónyuges estén de acuerdo en divorciarse.",
          "Que hayan dejado de convivir hace más de un año.",
          "Que presenten un acuerdo completo y suficiente que regule sus relaciones mutuas y las relaciones con sus hijos.",
        ],
      },
      {
        heading: "¿Qué es el acuerdo completo y suficiente?",
        paragraphs: [
          "Es el documento que regula lo que ocurrirá después del divorcio. El tribunal lo revisa para asegurar que proteja el interés superior de los hijos y al cónyuge más débil. Nosotros lo redactamos con ustedes para que el tribunal no lo objete.",
        ],
        bullets: [
          "Alimentos entre cónyuges, si corresponden, y compensación económica.",
          "Régimen de bienes y su liquidación.",
          "Si hay hijos: pensión de alimentos, cuidado personal y relación directa y regular.",
        ],
      },
      {
        heading: "¿Cuánto demora y cuánto cuesta?",
        paragraphs: [
          "El divorcio de mutuo acuerdo es el más rápido porque no hay controversia. El plazo depende de la carga del tribunal de familia y de que el acuerdo esté bien redactado desde el inicio.",
          "Nuestros honorarios son $99.990, pago único. Antes de empezar te informamos si tu caso requiere algún gasto adicional, como certificados.",
        ],
      },
    ],
    steps: [
      { title: "Revisión de requisitos", text: "Confirmamos el cese de convivencia y reunimos certificados de matrimonio y nacimiento." },
      { title: "Acuerdo completo y suficiente", text: "Redactamos el acuerdo con ambos cónyuges." },
      { title: "Presentación de la demanda", text: "Ingresamos la solicitud al Tribunal de Familia que corresponda." },
      { title: "Audiencia y sentencia", text: "Te representamos en la audiencia y gestionamos la subinscripción en el Registro Civil." },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta un divorcio de mutuo acuerdo?",
        a: "Con AboVirtual los honorarios son $99.990, pago único. El valor no varía si el trámite se hace online.",
      },
      {
        q: "¿Cómo acredito que no convivimos hace más de un año?",
        a: "La ley permite acreditar el cese de convivencia con distintos medios de prueba. En la consulta revisamos tu situación y te decimos cuáles antecedentes sirven en tu caso.",
      },
      {
        q: "¿Tenemos que ir los dos al tribunal?",
        a: "Ambos deben manifestar su voluntad de divorciarse. Las audiencias pueden realizarse por videoconferencia cuando el tribunal lo autoriza.",
      },
      {
        q: "¿Podemos usar un solo abogado?",
        a: "Sí, en el divorcio de mutuo acuerdo ambos cónyuges pueden ser patrocinados por el mismo abogado, siempre que estén de acuerdo en todo.",
      },
      {
        q: "¿Qué pasa si no estamos de acuerdo en la pensión o en las visitas?",
        a: "En ese caso no procede el mutuo acuerdo en esos términos. Se puede intentar una mediación o tramitar un divorcio unilateral.",
      },
    ],
    related: ["divorcio-unilateral", "pension-de-alimentos", "relacion-directa-y-regular", "derecho-de-familia"],
    whatsappMessage: "Hola, quiero cotizar un divorcio de mutuo acuerdo ($99.990).",
  },
  {
    slug: "divorcio-unilateral",
    category: "Familia",
    name: "Divorcio unilateral",
    metaTitle: "Divorcio Unilateral en Chile $199.990 en 2 Cuotas | Abogado",
    metaDescription:
      "Divorcio unilateral por cese de convivencia de 3 años o por culpa. Abogado online por $199.990 en 2 cuotas. Requisitos, notificación y plazos. Consulta hoy.",
    h1: "Divorcio unilateral en Chile",
    lead:
      "Si tu cónyuge no quiere divorciarse o no sabes dónde está, puedes pedir el divorcio de forma unilateral. Te representamos por $199.990 en 2 cuotas.",
    keywords: [
      "divorcio unilateral",
      "divorcio unilateral chile",
      "divorcio unilateral requisitos",
      "divorcio unilateral precio",
      "divorcio sin acuerdo",
      "divorcio por culpa",
      "como divorciarme si mi esposo no quiere",
    ],
    price: { amount: 199990, payment: "Pago en 2 cuotas" },
    highlights: [
      "$199.990 en 2 cuotas",
      "Divorcio por cese de convivencia o por culpa",
      "Atención online en todo Chile",
      "Representación en todas las audiencias",
    ],
    sections: [
      {
        heading: "¿Cuándo procede el divorcio unilateral?",
        paragraphs: [
          "La Ley de Matrimonio Civil contempla dos caminos cuando no hay acuerdo:",
        ],
        bullets: [
          "Divorcio por cese de convivencia: cualquiera de los cónyuges puede pedirlo si la convivencia terminó hace al menos tres años.",
          "Divorcio por culpa: procede ante una falta grave del otro cónyuge que haga intolerable la vida en común, como violencia, abandono o infidelidad grave, sin exigir un plazo de separación.",
        ],
      },
      {
        heading: "Pensión de alimentos y oposición al divorcio",
        paragraphs: [
          "Si quien pide el divorcio por cese de convivencia no ha cumplido reiteradamente su obligación de pagar alimentos al cónyuge o a los hijos pudiendo hacerlo, el tribunal puede rechazar la demanda. Revisamos este punto antes de presentarla.",
        ],
      },
      {
        heading: "¿Qué pasa si no encuentro a mi cónyuge?",
        paragraphs: [
          "El juicio requiere notificar a la otra parte. Si no conoces su domicilio, existen mecanismos legales para buscarlo y notificarlo. Te explicamos cuál conviene en tu caso.",
        ],
      },
      {
        heading: "Compensación económica",
        paragraphs: [
          "El cónyuge que se dedicó al cuidado de los hijos o del hogar y por eso no pudo trabajar o trabajó menos puede pedir una compensación económica en el juicio de divorcio. Te asesoramos tanto si la pides como si te la piden.",
        ],
      },
    ],
    steps: [
      { title: "Análisis del caso", text: "Definimos si corresponde divorcio por cese de convivencia o por culpa." },
      { title: "Demanda", text: "Redactamos la demanda y reunimos la prueba del cese de convivencia." },
      { title: "Notificación", text: "Gestionamos la notificación a tu cónyuge." },
      { title: "Audiencias y sentencia", text: "Te representamos hasta la sentencia firme y su subinscripción." },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta un divorcio unilateral?",
        a: "Nuestros honorarios son $199.990, pagaderos en 2 cuotas.",
      },
      {
        q: "¿Me puedo divorciar si mi cónyuge no quiere?",
        a: "Sí. Con tres años de cese de convivencia, o con una causal de culpa, puedes pedir el divorcio aunque la otra persona no esté de acuerdo.",
      },
      {
        q: "¿Cuánto demora un divorcio unilateral?",
        a: "Suele tomar más que uno de mutuo acuerdo, porque requiere notificar a la otra parte y rendir prueba. El plazo depende del tribunal y de si hay oposición.",
      },
      {
        q: "¿Puedo pedir pensión y visitas en el mismo juicio?",
        a: "Sí, en el divorcio se pueden regular materias relacionadas como alimentos, cuidado personal y relación directa y regular.",
      },
    ],
    related: ["divorcio-mutuo-acuerdo", "pension-de-alimentos", "relacion-directa-y-regular", "derecho-de-familia"],
    whatsappMessage: "Hola, quiero cotizar un divorcio unilateral ($199.990 en 2 cuotas).",
  },
  {
    slug: "pension-de-alimentos",
    category: "Familia",
    name: "Pensión de alimentos",
    metaTitle: "Abogado Pensión de Alimentos en Chile | Demanda, Aumento y Cobro",
    metaDescription:
      "Abogado de pensión de alimentos: demanda, aumento, rebaja y cobro de deuda. $359.990 en 3 cuotas. Montos mínimos, Registro de Deudores y Ley de Responsabilidad Parental.",
    h1: "Abogado de pensión de alimentos",
    lead:
      "Te ayudamos a demandar, aumentar, rebajar o cobrar una pensión de alimentos, usando las herramientas de la Ley de Responsabilidad Parental y el Registro Nacional de Deudores. $359.990 en 3 cuotas.",
    keywords: [
      "pension de alimentos",
      "abogado pension de alimentos",
      "demanda de pension de alimentos",
      "aumento de pension de alimentos",
      "rebaja de pension de alimentos",
      "cobro de pension de alimentos",
      "deuda pension de alimentos",
      "registro nacional de deudores de pensiones de alimentos",
    ],
    price: { amount: 359990, payment: "Pago en 3 cuotas" },
    highlights: [
      "$359.990 en 3 cuotas",
      "Demanda, aumento, rebaja y cese",
      "Cobro de pensiones adeudadas",
      "Te acompañamos desde la mediación",
    ],
    sections: [
      {
        heading: "¿Cuánto es la pensión de alimentos mínima?",
        paragraphs: [
          "La Ley 14.908 fija un piso para los hijos menores de edad: si es un hijo, la pensión no puede ser inferior al 40% del ingreso mínimo remuneracional; si son dos o más, al 30% por cada uno. Además, la pensión no puede superar el 50% de las rentas de quien paga.",
          "Dentro de esos límites, el tribunal considera las necesidades de los hijos y la capacidad económica de ambos padres.",
        ],
      },
      {
        heading: "¿Hasta qué edad se paga?",
        paragraphs: [
          "Por regla general, hasta los 21 años, o hasta los 28 si el hijo o hija estudia una profesión u oficio. No hay límite de edad cuando existe una incapacidad física o mental que impida subsistir por sí mismo.",
        ],
      },
      {
        heading: "¿Qué hacemos por ti?",
        bullets: [
          "Demanda de alimentos y solicitud de alimentos provisorios.",
          "Aumento de la pensión cuando cambian las necesidades o los ingresos.",
          "Rebaja o cese de la pensión cuando corresponde.",
          "Cobro de pensiones adeudadas y liquidación de la deuda.",
          "Inscripción en el Registro Nacional de Deudores de Pensiones de Alimentos (Ley 21.389).",
          "Búsqueda de fondos y pago de la deuda con las herramientas de la Ley de Responsabilidad Parental y Pago Efectivo de Deudas de Pensiones de Alimentos (Ley 21.484).",
        ],
      },
      {
        heading: "Mediación previa",
        paragraphs: [
          "Antes de demandar alimentos hay que pasar por una mediación familiar, que es gratuita en el sistema licitado. Si no hay acuerdo, con el certificado de mediación frustrada presentamos la demanda.",
        ],
      },
    ],
    steps: [
      { title: "Diagnóstico", text: "Revisamos gastos de los hijos e ingresos de ambos padres." },
      { title: "Mediación", text: "Te preparamos para la mediación previa obligatoria." },
      { title: "Demanda", text: "Si no hay acuerdo, demandamos y pedimos alimentos provisorios." },
      { title: "Sentencia y cobro", text: "Si la pensión no se paga, activamos las medidas de cobro." },
    ],
    faqs: [
      {
        q: "¿Cuánto cobra un abogado por una pensión de alimentos?",
        a: "Con AboVirtual los honorarios son $359.990, en 3 cuotas. En la primera consulta te confirmamos qué incluye según tu caso.",
      },
      {
        q: "¿Qué pasa si no me pagan la pensión?",
        a: "Se puede pedir la liquidación de la deuda, la inscripción del deudor en el Registro Nacional de Deudores, la retención de fondos y otras medidas de apremio que contempla la ley.",
      },
      {
        q: "¿Puedo pedir aumento de la pensión?",
        a: "Sí, cuando cambian las circunstancias, por ejemplo mayores gastos de los hijos o mayores ingresos de quien paga.",
      },
      {
        q: "¿La mediación es obligatoria?",
        a: "Sí, para demandar alimentos debes pasar primero por mediación familiar. En el sistema licitado es gratuita.",
      },
    ],
    related: ["relacion-directa-y-regular", "divorcio-unilateral", "divorcio-mutuo-acuerdo", "derecho-de-familia"],
    whatsappMessage: "Hola, necesito un abogado para una pensión de alimentos.",
  },
  {
    slug: "relacion-directa-y-regular",
    category: "Familia",
    name: "Relación directa y regular (visitas)",
    metaTitle: "Régimen de Visitas en Chile | Relación Directa y Regular | Abogado",
    metaDescription:
      "Abogado para fijar, modificar o hacer cumplir el régimen de visitas (relación directa y regular). $199.990 en 2 cuotas. Atención online en todo Chile.",
    h1: "Relación directa y regular (régimen de visitas)",
    lead:
      "Si no vives con tus hijos, tienes el derecho y el deber de mantener una relación directa y regular con ellos. Te ayudamos a fijar, modificar o hacer cumplir el régimen de visitas por $199.990 en 2 cuotas.",
    keywords: [
      "regimen de visitas",
      "relacion directa y regular",
      "demanda de visitas",
      "abogado visitas hijos",
      "incumplimiento regimen de visitas",
      "cuidado personal tuicion",
    ],
    price: { amount: 199990, payment: "Pago en 2 cuotas" },
    highlights: [
      "$199.990 en 2 cuotas",
      "Fijación, modificación y cumplimiento",
      "Acuerdos aprobados por el tribunal",
      "Atención online en todo Chile",
    ],
    sections: [
      {
        heading: "¿Qué es la relación directa y regular?",
        paragraphs: [
          "Es el contacto periódico y estable entre el padre o la madre que no tiene el cuidado personal y sus hijos. El Código Civil la regula pensando en el interés superior del niño, niña o adolescente, y puede incluir visitas, salidas, fines de semana, vacaciones y contacto por videollamada.",
        ],
      },
      {
        heading: "¿Cómo se fija?",
        bullets: [
          "Por acuerdo entre los padres, que puede aprobar el tribunal para que sea obligatorio.",
          "En mediación familiar, que es obligatoria antes de demandar.",
          "Por sentencia del Tribunal de Familia, si no hay acuerdo.",
        ],
      },
      {
        heading: "¿Qué hacer si no se cumple?",
        paragraphs: [
          "Si el otro padre impide las visitas o quien debe visitar no cumple, se puede pedir al tribunal el cumplimiento del régimen y la aplicación de las medidas que contempla la ley. También se puede pedir la modificación del régimen si cambian las circunstancias.",
        ],
      },
      {
        heading: "Cuidado personal (tuición)",
        paragraphs: [
          "El cuidado personal define con quién viven los hijos. Puede ser compartido o unilateral, por acuerdo o por resolución judicial. Si necesitas fijarlo o modificarlo, lo revisamos en la consulta.",
        ],
      },
    ],
    steps: [
      { title: "Consulta", text: "Revisamos la situación actual y lo que necesitas." },
      { title: "Mediación", text: "Te preparamos con una propuesta concreta de régimen." },
      { title: "Demanda o aprobación", text: "Presentamos la demanda o pedimos aprobar el acuerdo." },
      { title: "Cumplimiento", text: "Si no se cumple, solicitamos las medidas al tribunal." },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta una demanda de visitas?",
        a: "Nuestros honorarios son $199.990, en 2 cuotas.",
      },
      {
        q: "¿Me pueden negar las visitas si no pago la pensión?",
        a: "No. La pensión de alimentos y la relación directa y regular son obligaciones distintas; una no se condiciona a la otra.",
      },
      {
        q: "¿Las visitas pueden ser por videollamada?",
        a: "Sí, el régimen puede incluir contacto a distancia, especialmente si los padres viven en ciudades distintas.",
      },
      {
        q: "¿Se puede modificar un régimen de visitas ya fijado?",
        a: "Sí, cuando cambian las circunstancias del niño o de los padres se puede pedir su modificación.",
      },
    ],
    related: ["pension-de-alimentos", "divorcio-unilateral", "divorcio-mutuo-acuerdo", "derecho-de-familia"],
    whatsappMessage: "Hola, necesito asesoría por régimen de visitas (relación directa y regular).",
  },
  {
    slug: "abogado-laboral",
    category: "Laboral",
    name: "Abogado laboral",
    metaTitle: "Abogado Laboral Online | Despido Injustificado y Finiquito Gratis",
    metaDescription:
      "Abogado laboral para trabajadores: despido injustificado, tutela laboral y revisión de finiquito GRATIS. Plazos para demandar e indemnizaciones. Atención online.",
    h1: "Abogado laboral para trabajadores",
    lead:
      "¿Te despidieron o te ofrecen un finiquito que no te cuadra? Revisamos tu finiquito gratis y te representamos si el despido fue injustificado.",
    keywords: [
      "abogado laboral",
      "abogado laboral online",
      "despido injustificado",
      "revision de finiquito",
      "demanda laboral",
      "tutela laboral",
      "indemnizacion por años de servicio",
    ],
    highlights: [
      "Revisión de finiquito GRATIS",
      "Despido injustificado e indebido",
      "Tutela de derechos fundamentales",
      "Atención online en todo Chile",
    ],
    sections: [
      {
        heading: "Revisión de finiquito gratis",
        paragraphs: [
          "Antes de firmar, envíanos tu finiquito por WhatsApp. Revisamos que estén bien calculadas las indemnizaciones, vacaciones proporcionales y remuneraciones pendientes. Si algo no cuadra, puedes firmar con reserva de derechos para reclamar después.",
        ],
      },
      {
        heading: "Plazo para demandar por despido injustificado",
        paragraphs: [
          "El Código del Trabajo da 60 días hábiles desde la separación para demandar. Ese plazo se suspende si presentas un reclamo ante la Inspección del Trabajo, pero en ningún caso puede superar los 90 días hábiles. Por eso conviene consultar cuanto antes.",
        ],
      },
      {
        heading: "¿Qué puedes reclamar?",
        bullets: [
          "Indemnización por años de servicio e indemnización sustitutiva del aviso previo.",
          "Recargo legal sobre la indemnización si el despido es injustificado, indebido o improcedente.",
          "Remuneraciones, cotizaciones y vacaciones adeudadas.",
          "Tutela laboral cuando se vulneran derechos fundamentales.",
        ],
      },
    ],
    steps: [
      { title: "Envíanos tus documentos", text: "Carta de despido, contrato, liquidaciones y finiquito." },
      { title: "Revisión gratis", text: "Te decimos si los montos están bien y si hay caso." },
      { title: "Reclamo o demanda", text: "Presentamos el reclamo o la demanda dentro de plazo." },
      { title: "Juicio o acuerdo", text: "Te representamos en la conciliación y en el juicio." },
    ],
    faqs: [
      {
        q: "¿La revisión del finiquito tiene costo?",
        a: "No, la revisión del finiquito es gratis.",
      },
      {
        q: "¿Cuánto tiempo tengo para demandar por despido injustificado?",
        a: "60 días hábiles desde el despido, que pueden extenderse hasta 90 días hábiles si antes reclamas ante la Inspección del Trabajo.",
      },
      {
        q: "¿Puedo firmar el finiquito y demandar igual?",
        a: "Sí, si lo firmas con reserva de derechos indicando lo que vas a reclamar.",
      },
    ],
    related: ["protocolo-ley-karin", "constitucion-de-sociedades", "derecho-de-familia"],
    whatsappMessage: "Hola, quiero revisar mi finiquito gratis.",
  },
  {
    slug: "protocolo-ley-karin",
    category: "Empresas",
    name: "Protocolo Ley Karin",
    metaTitle: "Protocolo Ley Karin para Empresas desde $99.990 | Abogados",
    metaDescription:
      "Implementamos el protocolo de prevención de la Ley Karin (Ley 21.643) para pymes y empresas desde $99.990: reglamento interno, procedimiento de denuncia e investigación.",
    h1: "Protocolo Ley Karin para empresas y pymes",
    lead:
      "La Ley 21.643 (Ley Karin) obliga a todos los empleadores a prevenir, investigar y sancionar el acoso laboral, el acoso sexual y la violencia en el trabajo. Implementamos tu protocolo desde $99.990.",
    keywords: [
      "protocolo ley karin",
      "ley karin empresas",
      "ley karin pymes",
      "implementacion ley karin",
      "reglamento interno ley karin",
      "investigacion ley karin",
    ],
    price: { amount: 99990, from: true, payment: "Según tamaño de la empresa" },
    highlights: [
      "Desde $99.990",
      "Protocolo de prevención a medida",
      "Procedimiento de denuncia e investigación",
      "Actualización del reglamento interno",
    ],
    sections: [
      {
        heading: "¿Qué exige la Ley Karin?",
        paragraphs: [
          "La Ley 21.643 está vigente desde el 1 de agosto de 2024 y modificó el Código del Trabajo. Todos los empleadores, sin importar su tamaño, deben contar con un protocolo de prevención y con un procedimiento de investigación y sanción de las denuncias.",
        ],
        bullets: [
          "Protocolo de prevención del acoso sexual, laboral y la violencia en el trabajo.",
          "Procedimiento de denuncia, investigación y sanción, con plazos y resguardos para quien denuncia.",
          "Incorporación de estas materias en el reglamento interno, cuando la empresa debe tenerlo.",
          "Información y capacitación a los trabajadores.",
        ],
      },
      {
        heading: "¿Qué incluye nuestro servicio?",
        bullets: [
          "Diagnóstico de riesgos según tu rubro y tamaño.",
          "Redacción del protocolo y del procedimiento de investigación.",
          "Actualización del reglamento interno de orden, higiene y seguridad.",
          "Capacitación y apoyo en investigaciones cuando llegue una denuncia.",
        ],
      },
    ],
    steps: [
      { title: "Diagnóstico", text: "Revisamos tu empresa y lo que ya tienes implementado." },
      { title: "Documentos", text: "Redactamos protocolo, procedimiento y cambios al reglamento." },
      { title: "Implementación", text: "Te ayudamos a difundirlo entre los trabajadores." },
      { title: "Acompañamiento", text: "Te apoyamos si recibes una denuncia." },
    ],
    faqs: [
      {
        q: "¿La Ley Karin aplica a pymes?",
        a: "Sí, aplica a todos los empleadores, cualquiera sea su tamaño.",
      },
      {
        q: "¿Cuánto cuesta implementar la Ley Karin?",
        a: "Nuestro servicio parte desde $99.990 y el valor final depende del tamaño de la empresa y de lo que ya tenga implementado.",
      },
      {
        q: "¿Qué pasa si mi empresa no tiene protocolo?",
        a: "La Dirección del Trabajo puede fiscalizar y multar el incumplimiento, además del riesgo de demandas de los trabajadores afectados.",
      },
    ],
    related: ["abogado-laboral", "constitucion-de-sociedades"],
    whatsappMessage: "Hola, quiero cotizar el protocolo Ley Karin para mi empresa.",
  },
  {
    slug: "constitucion-de-sociedades",
    category: "Empresas",
    name: "Constitución de sociedades",
    metaTitle: "Constitución de Sociedades en Chile desde $250.000 | SpA, EIRL, Ltda",
    metaDescription:
      "Abogado para crear tu empresa: SpA, EIRL o Limitada desde $250.000 (50% al inicio y 50% al finalizar). Estatutos, inscripción e inicio de actividades.",
    h1: "Constitución de sociedades en Chile",
    lead:
      "Creamos tu SpA, EIRL o sociedad de responsabilidad limitada con estatutos a la medida de tu negocio. Desde $250.000, 50% al inicio y 50% al finalizar.",
    keywords: [
      "constitucion de sociedades",
      "crear empresa chile",
      "constituir spa",
      "abogado para crear empresa",
      "crear sociedad chile",
    ],
    price: { amount: 250000, from: true, payment: "50% al inicio / 50% al finalizar" },
    highlights: [
      "Desde $250.000",
      "50% al inicio / 50% al finalizar",
      "SpA, EIRL y Limitada",
      "Estatutos a la medida",
    ],
    sections: [
      {
        heading: "¿Qué tipo de sociedad me conviene?",
        bullets: [
          "SpA: flexible, puede tener uno o más accionistas y facilita sumar socios o inversionistas.",
          "EIRL: para un solo dueño que quiere separar su patrimonio personal del de la empresa.",
          "Sociedad de responsabilidad limitada: para socios que quieren reglas claras sobre la administración y la entrada de nuevos socios.",
        ],
      },
      {
        heading: "¿Qué incluye?",
        bullets: [
          "Asesoría para elegir el tipo de sociedad.",
          "Redacción de estatutos a la medida: administración, aportes y salida de socios.",
          "Constitución por el Registro de Empresas y Sociedades o por escritura pública, según convenga.",
          "Orientación para el inicio de actividades ante el SII.",
        ],
      },
    ],
    steps: [
      { title: "Reunión", text: "Conversamos sobre tu negocio y los socios." },
      { title: "Estatutos", text: "Redactamos los estatutos y los revisas." },
      { title: "Constitución", text: "Constituimos e inscribimos la sociedad." },
      { title: "Puesta en marcha", text: "Te orientamos en el inicio de actividades." },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta constituir una sociedad?",
        a: "Desde $250.000, pagando 50% al inicio y 50% al finalizar.",
      },
      {
        q: "¿Puedo crear la empresa yo mismo en línea?",
        a: "Sí, existe el Registro de Empresas y Sociedades, pero los estatutos tipo no siempre se ajustan a tu negocio. Un abogado evita conflictos futuros entre socios.",
      },
    ],
    related: ["protocolo-ley-karin", "abogado-laboral"],
    whatsappMessage: "Hola, quiero constituir una sociedad.",
  },
  {
    slug: "derecho-civil",
    category: "Civil",
    name: "Abogado civil",
    metaTitle: "Abogado Civil en Chile | Posesión Efectiva, Arriendos y Desalojos",
    metaDescription:
      "Abogado civil en Chile: posesión efectiva exprés, arriendos blindados, desalojos, cobranzas y contratos. Atención online en todo Chile y presencial en Providencia.",
    h1: "Abogado civil en Chile",
    lead:
      "Resolvemos herencias, arriendos, desalojos, cobros y contratos entre personas. Te explicamos el camino más corto y te representamos ante el tribunal o la notaría que corresponda.",
    keywords: [
      "abogado civil",
      "posesion efectiva",
      "abogado desalojo",
      "demanda de desalojo",
      "arriendo con abogado",
      "ley devuelveme mi casa",
      "cobro de deudas abogado",
    ],
    highlights: [
      "Posesión efectiva exprés",
      "Arriendos blindados y desalojos",
      "Cobranzas y contratos",
      "Atención online en todo Chile",
    ],
    sections: [
      {
        heading: "Posesión efectiva",
        paragraphs: [
          "Es el trámite que reconoce a los herederos y les permite disponer de los bienes de la persona fallecida. Si no hubo testamento, se tramita ante el Registro Civil; si hubo testamento, ante el tribunal civil. Te ayudamos a reunir los antecedentes, hacer el inventario de bienes y terminar las inscripciones.",
        ],
      },
      {
        heading: "Arriendos y desalojos",
        paragraphs: [
          "Redactamos contratos de arriendo con las cláusulas que protegen al propietario (arriendo blindado) y, si el arrendatario deja de pagar, demandamos la restitución del inmueble y el cobro de las rentas. La Ley 21.461, conocida como \"Devuélveme mi casa\", agregó un procedimiento monitorio más rápido para estos casos.",
        ],
      },
      {
        heading: "Otros asuntos civiles",
        bullets: [
          "Cobro de deudas, pagarés y cheques.",
          "Redacción y revisión de contratos.",
          "Indemnización de perjuicios.",
          "Testamentos y partición de herencias.",
        ],
      },
    ],
    steps: [
      { title: "Consulta", text: "Nos cuentas el caso y revisamos tus documentos." },
      { title: "Estrategia", text: "Te decimos si conviene un trámite administrativo, notarial o un juicio." },
      { title: "Tramitación", text: "Presentamos la solicitud o la demanda y la seguimos." },
      { title: "Cierre", text: "Te entregamos el resultado y las inscripciones al día." },
    ],
    faqs: [
      {
        q: "¿La posesión efectiva requiere abogado?",
        a: "La posesión efectiva sin testamento se puede pedir directamente en el Registro Civil, pero un abogado evita errores en el inventario y en las inscripciones que después retrasan la venta o partición de los bienes.",
      },
      {
        q: "¿Cuánto demora un desalojo?",
        a: "Depende del procedimiento y del tribunal. Con la Ley 21.461 existe un procedimiento monitorio para cobrar rentas y recuperar el inmueble más rápido que el juicio ordinario.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Depende del trámite. Escríbenos por WhatsApp y te damos el valor antes de empezar; las consultas parten desde $20.000.",
      },
    ],
    related: ["derecho-inmobiliario", "derecho-de-familia", "abogado-laboral"],
    whatsappMessage: "Hola, necesito un abogado civil.",
  },
  {
    slug: "derecho-penal",
    category: "Penal",
    name: "Abogado penal",
    metaTitle: "Abogado Penal en Chile | Defensa Penal y Querellas | AboVirtual",
    metaDescription:
      "Abogado penalista en Chile: defensa en formalizaciones y juicios, querellas para víctimas y medidas cautelares. Atención urgente por WhatsApp y videollamada.",
    h1: "Abogado penal en Chile",
    lead:
      "Si te investigan o fuiste víctima de un delito, necesitas asesoría desde el primer momento. Te defendemos como imputado o te representamos como víctima con una querella.",
    keywords: [
      "abogado penal",
      "abogado penalista",
      "defensa penal",
      "querella",
      "abogado formalizacion",
      "abogado penal urgente",
    ],
    highlights: [
      "Defensa de imputados",
      "Querellas para víctimas",
      "Audiencias de control y formalización",
      "Atención urgente fuera de horario por Meet",
    ],
    sections: [
      {
        heading: "Defensa penal",
        paragraphs: [
          "Desde la detención o la citación a declarar, tienes derecho a un abogado. Te acompañamos en la audiencia de control de detención y de formalización, discutimos las medidas cautelares y buscamos la mejor salida para tu caso: absolución, salidas alternativas como la suspensión condicional o el acuerdo reparatorio, o un procedimiento abreviado cuando conviene.",
          "La Defensoría Penal Pública entrega defensa gratuita; también puedes elegir un defensor privado que conozca tu caso en detalle y te atienda directamente.",
        ],
      },
      {
        heading: "Querellas para víctimas",
        paragraphs: [
          "La víctima puede presentar una querella para ser parte activa del proceso: pedir diligencias a la Fiscalía, participar en las audiencias y solicitar la reparación del daño. Redactamos la querella y la seguimos hasta el término del juicio.",
        ],
      },
    ],
    steps: [
      { title: "Contacto urgente", text: "Escríbenos por WhatsApp; para urgencias atendemos por Meet fuera de horario." },
      { title: "Revisión", text: "Analizamos la carpeta investigativa y los antecedentes." },
      { title: "Estrategia", text: "Definimos la defensa o la querella y las diligencias a pedir." },
      { title: "Audiencias", text: "Te representamos ante el Juzgado de Garantía y el Tribunal Oral." },
    ],
    faqs: [
      {
        q: "¿Qué hago si me citan a declarar?",
        a: "Busca asesoría antes de declarar. Tienes derecho a guardar silencio y a contar con un abogado desde la primera actuación.",
      },
      {
        q: "¿Puedo cambiar al defensor público por uno privado?",
        a: "Sí, puedes designar un abogado privado en cualquier etapa del proceso.",
      },
      {
        q: "¿Qué es una querella?",
        a: "Es el escrito con que la víctima se hace parte en el proceso penal, para impulsar la investigación y pedir sanción y reparación.",
      },
    ],
    related: ["derecho-civil", "derecho-de-familia", "abogado-laboral"],
    whatsappMessage: "Hola, necesito un abogado penal.",
  },
  {
    slug: "asesoria-legal-empresas",
    category: "Empresas",
    name: "Asesoría legal para empresas",
    metaTitle: "Asesoría Legal para Empresas y Pymes en Chile | Abogados Online",
    metaDescription:
      "Asesoría legal permanente para empresas y pymes: contratos, laboral, Ley Karin, cobranzas, sociedades y cumplimiento. Abogados online en todo Chile.",
    h1: "Asesoría legal para empresas y pymes",
    lead:
      "Un equipo legal externo para tu empresa: contratos, temas laborales, Ley Karin, cobranzas y sociedades, con atención online y respuesta rápida por WhatsApp.",
    keywords: [
      "asesoria legal empresas",
      "abogado para empresas",
      "abogado pymes",
      "asesoria juridica empresas",
      "abogado corporativo",
      "compliance empresas chile",
    ],
    highlights: [
      "Contratos comerciales y laborales",
      "Ley Karin y reglamento interno",
      "Cobranza judicial y extrajudicial",
      "Sociedades y modificaciones",
    ],
    sections: [
      {
        heading: "¿En qué ayudamos a tu empresa?",
        bullets: [
          "Redacción y revisión de contratos con clientes, proveedores y trabajadores.",
          "Asesoría laboral para empleadores: contratos, despidos, finiquitos y fiscalizaciones.",
          "Implementación de la Ley Karin y del reglamento interno.",
          "Cobranza de facturas y deudas.",
          "Constitución, modificación y regularización de sociedades.",
          "Modelos de prevención de delitos para personas jurídicas (Ley 20.393, ampliada por la Ley de Delitos Económicos).",
        ],
      },
      {
        heading: "Asesoría permanente o por proyecto",
        paragraphs: [
          "Puedes contratarnos para un tema puntual o como asesoría mensual, con consultas incluidas. Te proponemos el formato según el tamaño y las necesidades de tu empresa.",
        ],
      },
    ],
    steps: [
      { title: "Diagnóstico", text: "Revisamos contratos, reglamento y riesgos legales actuales." },
      { title: "Propuesta", text: "Te enviamos alcance y valor, por proyecto o mensual." },
      { title: "Ejecución", text: "Redactamos, corregimos e implementamos." },
      { title: "Acompañamiento", text: "Quedamos disponibles para consultas del día a día." },
    ],
    faqs: [
      {
        q: "¿Atienden a pymes pequeñas?",
        a: "Sí, trabajamos con pymes y emprendedores, con formatos ajustados a su tamaño.",
      },
      {
        q: "¿Cómo se cobra la asesoría permanente?",
        a: "Con un valor mensual que depende de las consultas y servicios incluidos. Te lo cotizamos tras el diagnóstico.",
      },
    ],
    related: ["protocolo-ley-karin", "constitucion-de-sociedades", "asesoria-inversionistas"],
    whatsappMessage: "Hola, quiero cotizar asesoría legal para mi empresa.",
  },
  {
    slug: "asesoria-inversionistas",
    category: "Empresas",
    name: "Asesoría legal para inversionistas",
    metaTitle: "Abogado para Inversionistas en Chile | Due Diligence y Pactos",
    metaDescription:
      "Asesoría legal para inversionistas en Chile: due diligence, pactos de accionistas, estructuras societarias, contratos de inversión e inversión inmobiliaria.",
    h1: "Asesoría legal para inversionistas",
    lead:
      "Antes de invertir en una empresa, un proyecto o una propiedad en Chile, revisamos los riesgos legales y dejamos tus derechos por escrito.",
    keywords: [
      "abogado inversionistas",
      "due diligence legal chile",
      "pacto de accionistas",
      "invertir en chile abogado",
      "abogado inversion inmobiliaria",
    ],
    highlights: [
      "Due diligence legal",
      "Pactos de accionistas y de socios",
      "Estructura societaria para invertir",
      "Inversión inmobiliaria",
    ],
    sections: [
      {
        heading: "¿Qué revisamos antes de invertir?",
        bullets: [
          "Due diligence: sociedad, deudas, juicios, contratos, trabajadores y permisos.",
          "Títulos de dominio y gravámenes cuando la inversión es inmobiliaria.",
          "Riesgos laborales, tributarios y regulatorios a derivar con especialistas cuando corresponde.",
        ],
      },
      {
        heading: "Documentos que protegen tu inversión",
        bullets: [
          "Pacto de accionistas o de socios: gobierno, salida, arrastre y acompañamiento.",
          "Contratos de inversión, préstamos convertibles y aumentos de capital.",
          "Constitución de la sociedad vehículo (SpA u otra) para invertir.",
        ],
      },
      {
        heading: "Inversionistas extranjeros",
        paragraphs: [
          "Si inviertes desde el extranjero, te orientamos en la obtención de RUT, la designación de representante y la estructura más simple para operar en Chile, coordinando con asesores tributarios cuando se requiere.",
        ],
      },
    ],
    steps: [
      { title: "Reunión", text: "Conocemos la oportunidad de inversión y tus objetivos." },
      { title: "Due diligence", text: "Revisamos la información y te entregamos un informe de riesgos." },
      { title: "Documentos", text: "Negociamos y redactamos los contratos." },
      { title: "Cierre", text: "Acompañamos la firma, inscripciones y registros." },
    ],
    faqs: [
      {
        q: "¿Qué es un due diligence legal?",
        a: "Es la revisión de la situación legal de una empresa o bien antes de invertir, para detectar deudas, juicios o contingencias que afecten el precio o la decisión.",
      },
      {
        q: "¿Atienden a inversionistas fuera de Chile?",
        a: "Sí, trabajamos por videollamada y documentos electrónicos con inversionistas de cualquier país.",
      },
    ],
    related: ["constitucion-de-sociedades", "derecho-inmobiliario", "asesoria-legal-empresas"],
    whatsappMessage: "Hola, necesito asesoría legal para una inversión.",
  },
  {
    slug: "derecho-inmobiliario",
    category: "Inmobiliario",
    name: "Abogado inmobiliario",
    metaTitle: "Abogado Inmobiliario en Chile | Estudio de Títulos y Compraventa",
    metaDescription:
      "Abogado inmobiliario: estudio de títulos, promesa y compraventa, inscripción en el Conservador de Bienes Raíces, arriendos blindados y asesoría a inmobiliarias.",
    h1: "Abogado inmobiliario en Chile",
    lead:
      "Comprar, vender o arrendar una propiedad es una de las decisiones más grandes. Revisamos los títulos y redactamos los contratos para que la operación sea segura.",
    keywords: [
      "abogado inmobiliario",
      "estudio de titulos",
      "abogado compraventa propiedad",
      "promesa de compraventa",
      "inscripcion conservador de bienes raices",
      "asesoria legal inmobiliaria",
    ],
    highlights: [
      "Estudio de títulos",
      "Promesa y compraventa",
      "Inscripción en el Conservador",
      "Asesoría a inmobiliarias y corredores",
    ],
    sections: [
      {
        heading: "Compraventa segura",
        bullets: [
          "Estudio de títulos de los últimos años y certificados de hipotecas, gravámenes y prohibiciones.",
          "Redacción de la promesa de compraventa y de la escritura definitiva.",
          "Coordinación con notaría, banco y Conservador de Bienes Raíces hasta la inscripción a tu nombre.",
        ],
      },
      {
        heading: "Arriendos y administración",
        paragraphs: [
          "Redactamos contratos de arriendo blindados y te representamos si el arrendatario deja de pagar. Ver también nuestra página de derecho civil sobre desalojos.",
        ],
      },
      {
        heading: "Inmobiliarias y corredores",
        paragraphs: [
          "Asesoramos a inmobiliarias, corredores y administradores en contratos tipo, promesas, reservas y regularización de propiedades.",
        ],
      },
    ],
    steps: [
      { title: "Antecedentes", text: "Nos envías los datos de la propiedad y de las partes." },
      { title: "Estudio de títulos", text: "Revisamos la historia legal de la propiedad." },
      { title: "Contratos", text: "Redactamos promesa y compraventa." },
      { title: "Inscripción", text: "Seguimos la inscripción en el Conservador." },
    ],
    faqs: [
      {
        q: "¿Para qué sirve un estudio de títulos?",
        a: "Para confirmar que quien vende es el dueño, que la propiedad no tiene embargos, hipotecas o litigios ocultos, y que puede transferirse sin problemas.",
      },
      {
        q: "¿El banco no hace el estudio de títulos?",
        a: "Si compras con crédito hipotecario el banco hace su propio estudio para protegerse a sí mismo; uno independiente protege tus intereses como comprador.",
      },
    ],
    related: ["derecho-civil", "asesoria-inversionistas", "constitucion-de-sociedades"],
    whatsappMessage: "Hola, necesito un abogado inmobiliario.",
  },
  {
    slug: "abogado-online-legaltech",
    category: "Legaltech",
    name: "Abogado online (legaltech)",
    metaTitle: "Abogado Online en Chile | Estudio Legaltech con IA | AboVirtual",
    metaDescription:
      "Estudio legaltech: abogados online por WhatsApp y videollamada, agenda en línea, agentes jurídicos con IA y app Ley Karin. Atención en todo Chile.",
    h1: "Abogado online: un estudio legaltech",
    lead:
      "AboVirtual combina abogados reales con tecnología: consulta por WhatsApp, agenda en línea, reuniones por videollamada y herramientas de inteligencia artificial para resolver más rápido.",
    keywords: [
      "abogado online",
      "abogado online chile",
      "abogado virtual",
      "legaltech chile",
      "consulta legal online",
      "abogado por whatsapp",
    ],
    highlights: [
      "Consulta por WhatsApp",
      "Agenda en línea con Google Calendar",
      "Reuniones por Google Meet",
      "Agentes jurídicos con IA",
    ],
    sections: [
      {
        heading: "Cómo funciona el abogado online",
        paragraphs: [
          "Nos escribes por WhatsApp, agendas una hora en línea y nos reunimos por Google Meet. Revisamos tus documentos en formato digital y te mantenemos al tanto del avance de tu causa sin que tengas que ir a una oficina. Si prefieres, también te atendemos presencialmente en Providencia con hora agendada.",
        ],
      },
      {
        heading: "Tecnología al servicio de tu caso",
        bullets: [
          "Agentes jurídicos con IA para consultas rápidas, contratos y denuncias.",
          "App Ley Karin para que las empresas gestionen su protocolo y canal de denuncias.",
          "Precios publicados y pago en cuotas en los servicios de familia.",
        ],
      },
      {
        heading: "Siempre con un abogado responsable",
        paragraphs: [
          "La tecnología acelera el trabajo, pero cada caso lo revisa y firma un abogado habilitado. La IA no reemplaza la asesoría legal sobre tu situación concreta.",
        ],
      },
    ],
    steps: [
      { title: "Escríbenos", text: "Por WhatsApp o desde el formulario de contacto." },
      { title: "Agenda", text: "Elige tu hora en línea." },
      { title: "Videollamada", text: "Revisamos tu caso por Google Meet." },
      { title: "Seguimiento", text: "Te informamos cada avance por WhatsApp." },
    ],
    faqs: [
      {
        q: "¿Un abogado online es igual de válido?",
        a: "Sí. Los escritos se presentan por la Oficina Judicial Virtual y muchas audiencias se realizan por videoconferencia; el abogado es el mismo, cambia solo la forma de atenderte.",
      },
      {
        q: "¿Atienden en regiones?",
        a: "Sí, atendemos online en todo Chile.",
      },
    ],
    related: ["derecho-de-familia", "asesoria-legal-empresas", "protocolo-ley-karin", "proveedores-de-casos"],
    whatsappMessage: "Hola, quiero una consulta legal online.",
  },
  {
    slug: "proveedores-de-casos",
    category: "Legaltech",
    name: "Derivación de casos para abogados",
    metaTitle: "Casos para Abogados en Chile | Derivación de Clientes | AboVirtual",
    metaDescription:
      "¿Eres abogado o estudio jurídico? AboVirtual capta y deriva casos calificados en familia, laboral, civil y más, con marketing legal y tecnología. Únete a la red.",
    h1: "Derivación de casos para abogados y estudios jurídicos",
    lead:
      "Captamos y calificamos casos a través de nuestros canales digitales y los derivamos a abogados y estudios colaboradores según su especialidad y zona.",
    keywords: [
      "casos para abogados",
      "clientes para abogados",
      "derivacion de casos abogados",
      "red de abogados chile",
      "marketing para abogados",
    ],
    highlights: [
      "Casos calificados por especialidad",
      "Familia, laboral, civil, penal y empresas",
      "Captación con marketing digital y IA",
      "Red de abogados colaboradores",
    ],
    sections: [
      {
        heading: "¿Cómo funciona?",
        paragraphs: [
          "Las personas llegan a AboVirtual por Google, redes sociales y WhatsApp. Un primer filtro identifica la materia, la urgencia y la región, y derivamos el caso a un abogado de la red que pueda tomarlo. El cliente siempre sabe a quién se deriva y el abogado decide si acepta el caso.",
        ],
      },
      {
        heading: "Para abogados y estudios",
        bullets: [
          "Recibe casos de tu especialidad y zona.",
          "Herramientas de marketing legal: contenido, anuncios y agentes de IA.",
          "Condiciones de colaboración por escrito y conforme a las normas de ética profesional.",
        ],
      },
    ],
    steps: [
      { title: "Postula", text: "Cuéntanos tu especialidad, región y capacidad." },
      { title: "Acuerdo", text: "Definimos por escrito cómo trabajaremos." },
      { title: "Derivación", text: "Te enviamos casos calificados." },
      { title: "Seguimiento", text: "Medimos la atención y la satisfacción del cliente." },
    ],
    faqs: [
      {
        q: "¿Qué tipo de casos derivan?",
        a: "Principalmente familia, laboral, civil, penal y asesoría a empresas, según la demanda en cada región.",
      },
      {
        q: "¿Cómo me uno a la red?",
        a: "Escríbenos por WhatsApp indicando tu especialidad y región, y te enviamos la información.",
      },
    ],
    related: ["abogado-online-legaltech", "asesoria-legal-empresas"],
    whatsappMessage: "Hola, soy abogado/a y quiero recibir casos de AboVirtual.",
  },
]

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug)
}

export function formatCLP(amount: number) {
  return `$${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
}
