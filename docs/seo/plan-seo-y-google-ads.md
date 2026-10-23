# Plan SEO y Google Ads: AboVirtual (abogadovirtualchile.cl)

Fecha: 23-10-2026. Foco: derecho de familia (divorcios, pensión de alimentos, visitas), luego laboral, Ley Karin y sociedades.
Metodología: skills `claude-seo` (auditoría técnica, schema, sitemap, local, contenido) y `claude-ads` (Google Ads) del GitHub de Gonzalo.

> Los volúmenes de búsqueda y CPC no se inventan aquí: no hay una fuente de datos conectada (Ahrefs no conectó y DataForSEO no está configurado).
> La prioridad de cada palabra clave sale de la intención de búsqueda y del catálogo de precios. Antes de fijar presupuesto, valida volúmenes en
> Google Ads > Herramientas > Planificador de palabras clave, con ubicación Chile e idioma español.

## 1. Auditoría inicial (antes de este cambio)

| Problema | Impacto | Estado |
|---|---|---|
| Sin `sitemap.xml` ni `robots.txt` | Google descubre las páginas más lento | Resuelto |
| Sin datos estructurados (schema) | Google no entiende que es un estudio jurídico con dirección, horario y precios | Resuelto: `LegalService`, `WebSite`, `Service` + `Offer`, `FAQPage`, `BreadcrumbList` |
| Sin URL canónica ni `metadataBase` | Riesgo de duplicados (con y sin www) y Open Graph con URLs relativas | Resuelto |
| Título de inicio genérico ("Abogados Siempre Conectados") | No apunta a ninguna búsqueda real | Resuelto: "Abogado de Familia Online en Chile \| Divorcio y Pensión de Alimentos" |
| H1 del inicio cambia con el carrusel | Google no tiene un tema claro para la portada | Resuelto: H1 fijo con la keyword principal |
| No había una página por servicio | Imposible rankear "divorcio mutuo acuerdo", "pensión de alimentos", etc. con una sola página | Resuelto: 8 páginas nuevas |
| Footer con servicios sin enlaces | Se perdía enlazado interno | Resuelto |
| `lang="es"` genérico | Señal de país débil | Resuelto: `es-CL` |

## 2. Mapa de palabras clave → páginas

Cada página apunta a un grupo de búsquedas. Prioridad A = alta intención de contratar + servicio con precio publicado.

| Prioridad | Página | Keyword principal | Secundarias |
|---|---|---|---|
| A | `/servicios/divorcio-mutuo-acuerdo` | divorcio mutuo acuerdo | divorcio de mutuo acuerdo chile, divorcio mutuo acuerdo precio, cuánto cuesta un divorcio en chile, divorcio express, divorcio online, requisitos divorcio mutuo acuerdo |
| A | `/servicios/pension-de-alimentos` | abogado pensión de alimentos | demanda de pensión de alimentos, aumento de pensión, rebaja de pensión, cobro / deuda de pensión de alimentos, registro nacional de deudores |
| A | `/servicios/divorcio-unilateral` | divorcio unilateral | divorcio unilateral chile, requisitos, precio, divorcio sin acuerdo, divorcio por culpa, "mi esposo no quiere divorciarse" |
| A | `/servicios/derecho-de-familia` | abogado de familia | abogado de familia online, abogado familia santiago / providencia, abogado tribunal de familia |
| B | `/servicios/relacion-directa-y-regular` | régimen de visitas | relación directa y regular, demanda de visitas, incumplimiento régimen de visitas, cuidado personal / tuición |
| B | `/servicios/abogado-laboral` | abogado laboral | despido injustificado, revisión de finiquito, demanda laboral, tutela laboral, indemnización por años de servicio |
| B | `/servicios/protocolo-ley-karin` | protocolo ley karin | ley karin empresas, ley karin pymes, implementación ley karin, reglamento interno ley karin |
| C | `/servicios/constitucion-de-sociedades` | constitución de sociedades | crear empresa chile, constituir spa, abogado para crear empresa |

Búsquedas informativas para el blog (traen tráfico y enlazan a las páginas de servicio). Prioridad para los próximos artículos:

1. ¿Cuánto cuesta un divorcio en Chile? (enlaza a mutuo acuerdo y unilateral)
2. Pensión de alimentos mínima: cómo se calcula (enlaza a pensión de alimentos)
3. ¿Qué hacer si no me pagan la pensión de alimentos? Registro de deudores y Ley 21.484
4. Cese de convivencia: cómo se acredita
5. Compensación económica en el divorcio
6. Mediación familiar: cómo funciona y cuándo es obligatoria
7. Plazo para demandar por despido injustificado
8. Ley Karin para pymes: qué deben tener

Regla: un artículo por semana, de 900 a 1.500 palabras, con la abogada autora identificada (nombre y biografía corta), fecha y enlaces a la página de servicio. Revisar cada texto legal antes de publicar.

## 3. Qué se cambió en el código

- `app/layout.tsx`: `metadataBase`, título por defecto + plantilla `%s | AboVirtual`, descripción con precios, Open Graph, Twitter, robots, verificación de Search Console por variable de entorno, JSON-LD `LegalService` y `WebSite`, `lang="es-CL"`.
- `app/sitemap.ts` y `app/robots.ts`: generan `/sitemap.xml` y `/robots.txt` (bloquea `/api/`).
- `app/servicios/[slug]/page.tsx` + `lib/landing-pages.ts`: 8 páginas con H1, contenido, pasos, preguntas frecuentes, servicios relacionados y botones de WhatsApp/agenda con mensaje prellenado.
- Canonical y títulos en todas las páginas existentes; `app/contacto/layout.tsx` agrega metadatos a Contacto (que es un componente de cliente).
- Enlaces internos: catálogo de precios ("Ver detalles y requisitos"), página Servicios, tarjetas del inicio y footer.
- CSP del PR #4 sin cambios: el JSON-LD es `application/ld+json` y no se ejecuta. No aparece el número antiguo.

Nota sobre FAQ: desde mayo de 2026 Google ya no muestra resultados enriquecidos de FAQ. El marcado `FAQPage` se deja porque ayuda a que los buscadores con IA (AI Overviews, ChatGPT, Perplexity) citen las respuestas; no esperar estrellas ni desplegables en Google.

## 4. Google Search Console (lo hace Gonzalo o Rayen, 10 minutos)

1. Entrar a https://search.google.com/search-console con la cuenta de Google del sitio.
2. Agregar propiedad tipo **Dominio** `abogadovirtualchile.cl` (verifica con un registro TXT en el DNS) o tipo **Prefijo de URL** `https://www.abogadovirtualchile.cl/`.
3. Si se usa Prefijo de URL con etiqueta HTML: copiar solo el valor de `content="..."` y guardarlo en Vercel > Proyecto > Settings > Environment Variables como `GOOGLE_SITE_VERIFICATION`, luego volver a desplegar y presionar Verificar.
4. En **Sitemaps**, enviar `sitemap.xml`.
5. En **Inspección de URLs**, pedir indexación de estas URLs, una por una:
   - https://www.abogadovirtualchile.cl/
   - https://www.abogadovirtualchile.cl/servicios/divorcio-mutuo-acuerdo
   - https://www.abogadovirtualchile.cl/servicios/pension-de-alimentos
   - https://www.abogadovirtualchile.cl/servicios/divorcio-unilateral
   - https://www.abogadovirtualchile.cl/servicios/derecho-de-familia
   - https://www.abogadovirtualchile.cl/servicios/relacion-directa-y-regular
6. Revisar en 7 a 14 días: Indexación de páginas (que no haya "Descubierta, no indexada") y Rendimiento > Consultas.
7. Probar el schema en https://search.google.com/test/rich-results con la URL de divorcio de mutuo acuerdo.

## 5. SEO local (sube mucho las consultas de "abogado de familia Providencia / Santiago")

- Crear o reclamar el **Perfil de Empresa de Google** con: el nombre real del negocio, "AboVirtual", sin agregarle palabras clave de relleno, categoría principal "Abogado de familia", secundarias "Abogado laboral" y "Abogado"; dirección Almirante Zegers 764, Providencia; horario L-V 10:00-18:30; teléfono +56 9 5450 9331; web con UTM `?utm_source=google&utm_medium=organic&utm_campaign=gbp`.
- Agregar los servicios con precio (los mismos del catálogo) y fotos reales de la oficina y la abogada.
- Pedir reseñas a cada cliente al cerrar su caso (enlace corto del perfil por WhatsApp). Responder todas.
- Mismos nombre, dirección y teléfono en directorios: Páginas Amarillas Chile, Cylex, Yelp Chile; LinkedIn de la abogada y de AboVirtual; Instagram y Facebook.

## 6. Google Ads: recomendaciones para estas palabras clave

Basado en el skill `ads-google` de claude-ads. Todo queda como **borrador**: nada se activa sin aprobación de Gonzalo.

### Antes de gastar
1. **Conversiones**: medir clic en WhatsApp, clic en "Agendar" (Google Calendar) y envío de formulario de contacto. Se hace con Google Tag Manager o etiqueta de Google; ojo: requiere agregar `https://www.googletagmanager.com` y `https://www.google-analytics.com` a la CSP del PR #4 (script-src, connect-src, img-src). Hacerlo en un PR aparte cuando se cree la cuenta.
2. Vincular Google Ads con Search Console y Google Analytics 4.

### Estructura sugerida (Red de Búsqueda, Chile, español)

| Campaña | Grupo de anuncios | Palabras clave (concordancia de frase y exacta) | Página de destino |
|---|---|---|---|
| Familia - Divorcios | Mutuo acuerdo | "divorcio mutuo acuerdo", "divorcio de mutuo acuerdo precio", "abogado divorcio mutuo acuerdo", [divorcio express chile] | /servicios/divorcio-mutuo-acuerdo |
| Familia - Divorcios | Unilateral | "divorcio unilateral", "abogado divorcio unilateral", "divorcio sin acuerdo" | /servicios/divorcio-unilateral |
| Familia - Alimentos | Pensión | "abogado pensión de alimentos", "demanda pensión de alimentos", "aumento pensión de alimentos", "cobro pensión de alimentos" | /servicios/pension-de-alimentos |
| Familia - Visitas | Visitas | "demanda régimen de visitas", "abogado relación directa y regular" | /servicios/relacion-directa-y-regular |
| Laboral (fase 2) | Finiquito / despido | "revisión de finiquito", "abogado despido injustificado" | /servicios/abogado-laboral |
| Empresas (fase 2) | Ley Karin | "protocolo ley karin", "implementar ley karin" | /servicios/protocolo-ley-karin |

- Empezar solo con las 4 campañas de familia. Laboral y empresas cuando familia tenga conversiones medidas.
- Puja: empezar con **Maximizar clics con CPC máximo** o **Maximizar conversiones** solo cuando las conversiones estén midiendo bien. Pasar a CPA objetivo cuando haya historial suficiente.
- Ubicación: Chile, "presencia" (personas en Chile), no "interés". Horario: todo el día (WhatsApp responde fuera de horario por Meet).
- **Palabras clave negativas**: no se arma una lista genérica. Tras 1 a 2 semanas, revisar el informe de términos de búsqueda y excluir lo que no sea contratable (por ejemplo, búsquedas de trámites que la persona hace sola). Lo revisamos juntos con datos reales.
- Presupuesto: definirlo con el Planificador de palabras clave (CPC estimado × clics deseados al día). No se fija un número aquí sin datos.

### Anuncios de búsqueda adaptables (borradores, ya validados en largo)

**Divorcio mutuo acuerdo** – títulos (máx. 30): Divorcio Mutuo Acuerdo · Divorcio por $99.990 · Pago Único $99.990 · Abogado de Familia Online · Trámite 100% Online · Atención en Todo Chile · Agenda Tu Consulta Hoy · Abogados en Providencia · Requisitos: 1 Año Separados · Acuerdo Completo y Suficiente · Respuesta por WhatsApp · Precio Publicado y Claro
Descripciones (máx. 90):
- Divorcio de mutuo acuerdo con abogado por $99.990 pago único. Atención online en Chile.
- Redactamos el acuerdo completo y suficiente y te acompañamos hasta la subinscripción.
- Consulta por WhatsApp o agenda por videollamada. Presencial con hora en Providencia.

**Divorcio unilateral** – títulos: Divorcio Unilateral · Divorcio Sin Acuerdo · $199.990 en 2 Cuotas · Divorcio por Culpa · 3 Años Sin Convivir · Abogado de Familia Online · Atención en Todo Chile · Agenda Tu Consulta Hoy · Te Representamos en Audiencias · Escríbenos por WhatsApp
Descripción: Divorcio unilateral por cese de convivencia o por culpa. $199.990 en 2 cuotas.

**Pensión de alimentos** – títulos: Abogado Pensión de Alimentos · Demanda de Alimentos · Aumento de Pensión · Cobro de Pensión Adeudada · $359.990 en 3 Cuotas · Registro de Deudores · Ley Responsabilidad Parental · Rebaja o Cese de Pensión · Atención en Todo Chile · Agenda Tu Consulta Hoy
Descripciones:
- Demanda, aumento, rebaja y cobro de pensión de alimentos. $359.990 en 3 cuotas.
- Usamos el Registro de Deudores y la Ley de Responsabilidad Parental para cobrar.

**Visitas** – títulos: Régimen de Visitas · Relación Directa y Regular · $199.990 en 2 Cuotas · Demanda de Visitas · Abogado de Familia Online · Agenda Tu Consulta Hoy
Descripción: Fija, modifica o haz cumplir el régimen de visitas. $199.990 en 2 cuotas.

Extensiones (recursos): llamada (+56 9 5450 9331), ubicación (vinculando el Perfil de Empresa), enlaces de sitio a las 4 páginas de familia, textos destacados ("Pago en cuotas", "Atención online", "Precio publicado").

Cumplimiento: no prometer resultados ("divorcio garantizado", "ganamos tu juicio"). La publicidad de abogados en Chile debe ser veraz según las normas de ética profesional; los precios publicados son honorarios y deben coincidir con lo que se cobra.

## 7. Cómo sabremos si funcionó

| Indicador | Dónde | Meta a 90 días |
|---|---|---|
| Páginas de servicio indexadas | Search Console > Páginas | 8 de 8 |
| Impresiones de "divorcio mutuo acuerdo", "pensión de alimentos" | Search Console > Rendimiento | Aparecer en el top 30 y subiendo |
| Clics en WhatsApp desde páginas de servicio | Vercel Analytics / GA4 | Medirlo desde que se active la etiqueta |
| Reseñas en Perfil de Empresa | Google | 10 o más |

Si a los 60 días una página sigue sin impresiones, revisar si está indexada y reforzar su contenido o sus enlaces internos antes de crear más páginas.
