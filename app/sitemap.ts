import type { MetadataRoute } from "next"
import { landingPages } from "@/lib/landing-pages"
import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/servicios", priority: 0.9 },
    { path: "/contacto", priority: 0.8 },
    { path: "/ley-karin", priority: 0.7 },
    { path: "/blog", priority: 0.6 },
    { path: "/agentes-ia", priority: 0.5 },
    { path: "/marketing", priority: 0.4 },
    { path: "/portafolio", priority: 0.4 },
  ]

  return [
    ...staticPages.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...landingPages.map((page) => ({
      url: `${SITE_URL}/servicios/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.category === "Familia" ? 0.9 : 0.8,
    })),
  ]
}
