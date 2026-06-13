import { MetadataRoute } from 'next'
import { VILLES } from '@/content/villes'
import { CANTONS } from '@/content/cantons'
import { ARTICLES } from '@/content/articles'
import { createAdminClient } from '@/lib/supabase/admin'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://atelierpicpaf.fr'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/ateliers`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/ateliers-enfants`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/ateliers-adultes/journees-creatives`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/ateliers-adultes/retraites-creatives`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/journee-creative-poitiers`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/retraite-creative-poitiers`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/anniversaire-couture-enfant`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/punch-needle`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/interventions-structures`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/ou-nous-trouver`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/tuto-video`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/journee-creative-mere-fille`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/se-reconnecter-avec-ma-fille`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/journee-creative-entre-copines`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/journee-creative-debutante`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/cadeau-femme-atelier-creatif`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/weekend-couture-yoga-femme`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/retraite-creative-entre-filles`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/weekend-bien-etre-couture-poitiers`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/boutique`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/cgv`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/politique-confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const villeRoutes: MetadataRoute.Sitemap = VILLES.map((v) => ({
    url: `${base}/${v.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: v.wave === 1 ? 0.8 : 0.6,
  }))

  // Produits boutique (dynamique). Try/catch : ne casse pas le build si Supabase indispo.
  let produitRoutes: MetadataRoute.Sitemap = []
  try {
    const db = createAdminClient()
    const { data } = await db.from('produits').select('slug, updated_at').eq('actif', true)
    produitRoutes = (data ?? []).map((p) => ({
      url: `${base}/boutique/${p.slug}`,
      lastModified: p.updated_at ? new Date(p.updated_at) : now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  } catch {
    produitRoutes = []
  }

  const cantonRoutes: MetadataRoute.Sitemap = CANTONS.map((c) => ({
    url: `${base}/secteur/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...villeRoutes, ...cantonRoutes, ...blogRoutes, ...produitRoutes]
}
