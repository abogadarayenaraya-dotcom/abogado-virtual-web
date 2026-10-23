// Marcado estructurado para buscadores. El tipo application/ld+json no se ejecuta,
// así que no requiere cambios en la política de contenido (CSP).
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
