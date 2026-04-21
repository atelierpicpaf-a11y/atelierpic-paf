import { MetadataRoute } from 'next'
import { VILLES } from '@/content/villes'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://atelierpicpaf.fr'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/ateliers-enfants`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/ateliers-adultes/journees-creatives`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/ateliers-adultes/retraites-creatives`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/anniversaire-couture-enfant`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/punch-needle`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/interventions-structures`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const villeRoutes: MetadataRoute.Sitemap = VILLES.map((v) => ({
    url: `${base}/${v.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: v.wave === 1 ? 0.8 : 0.6,
  }))

  return [...staticRoutes, ...villeRoutes]
}
