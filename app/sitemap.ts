import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://atelierpicpaf.fr'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/ateliers-enfants`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/ateliers-adultes/journees-creatives`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/ateliers-adultes/retraites-creatives`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
