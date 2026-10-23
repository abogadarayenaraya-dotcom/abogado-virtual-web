// Contenido de las páginas por servicio (/servicios/[slug]).
// Cada página apunta a un grupo de búsquedas en Google Chile; ver docs/seo/plan-seo-y-google-ads.md.

export type LandingSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LandingPage = {
  slug: string
  category: "Familia" | "Laboral" | "Empresas"
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
    metaTitle: "Abogado Laboral Online en Chile | Despido Injustificado y Finiquito Gratis",
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
]

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug)
}

export function formatCLP(amount: number) {
  return `$${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
}
