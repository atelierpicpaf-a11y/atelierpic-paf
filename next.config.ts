import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'iyjntqwjteahyujsojen.supabase.co' },
    ],
  },
  // Redirections SEO 301 — récupère le PageRank des vieilles URLs Lovable
  // indexées par Google avant la migration vers Next.js
  async redirects() {
    return [
      // Anciennes URLs ville → nouvelle structure /[ville]
      { source: '/atelier-couture-poitiers', destination: '/poitiers', permanent: true },
      { source: '/atelier-couture-vouille', destination: '/vouille', permanent: true },
      { source: '/atelier-couture-chatellerault', destination: '/chatellerault', permanent: true },
      { source: '/atelier-couture-niort', destination: '/niort', permanent: true },
      { source: '/atelier-couture-fontaine-le-comte', destination: '/fontaine-le-comte', permanent: true },
      // Anciennes URLs enfants régionales → page enfants unique
      { source: '/atelier-couture-enfants-vienne-86', destination: '/ateliers-enfants', permanent: true },
      { source: '/atelier-couture-enfants-deux-sevres-79', destination: '/ateliers-enfants', permanent: true },
      { source: '/atelier-couture-enfants', destination: '/ateliers-enfants', permanent: true },
      { source: '/atelier-couture', destination: '/ateliers-enfants', permanent: true },
      { source: '/cours-couture-enfant', destination: '/ateliers-enfants', permanent: true },
      // Anciennes URLs adultes
      { source: '/atelier-couture-adulte', destination: '/ateliers-adultes/journees-creatives', permanent: true },
      { source: '/journee-couture', destination: '/ateliers-adultes/journees-creatives', permanent: true },
      { source: '/retraite-couture', destination: '/ateliers-adultes/retraites-creatives', permanent: true },
      // Anniversaires
      { source: '/anniversaire-couture', destination: '/anniversaire-couture-enfant', permanent: true },
      // Note : pas de redirection www → apex ici. Vercel gère ça
      // au niveau des Domains du projet (config dans le dashboard).
      // Une règle Next.js + alias Vercel = boucle de redirection.
    ]
  },
}
export default nextConfig
