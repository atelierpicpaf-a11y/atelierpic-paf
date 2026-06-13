import type { Metadata } from 'next'
import Link from 'next/link'
import { CrossPromo } from '@/components/sections/cross-promo'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { ARTICLES } from '@/content/articles'

const PAGE_URL = 'https://atelierpicpaf.fr/blog'

export const metadata: Metadata = {
  title: 'Blog couture & créatif — conseils, astuces & idées | L’atelier Pic & Paf',
  description:
    "🧵 Le blog de L'atelier Pic & Paf : le punch needle expliqué, à quel âge débuter la couture, idées d'activités créatives pour les enfants en Vienne, conseils pour bien commencer à coudre. Des réponses simples par Ludivine.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Le blog couture & créatif de Pic & Paf',
    description: 'Conseils, astuces et idées créatives autour de la couture et du punch needle, par Ludivine.',
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <div className="route-enter">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr/' },
            { name: 'Blog', url: PAGE_URL },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Le blog de L’atelier Pic & Paf',
            url: PAGE_URL,
            publisher: { '@id': 'https://atelierpicpaf.fr/#organization' },
            blogPost: ARTICLES.map((a) => ({
              '@type': 'BlogPosting',
              headline: a.h1,
              url: `https://atelierpicpaf.fr/blog/${a.slug}`,
              description: a.metaDescription,
            })),
          },
        ]}
      />

      {/* HERO */}
      <section style={{ padding: '90px 0 50px', background: 'var(--creme-pale)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Conseils &amp; idées créatives ~</span>
          <h1 className="sticker-title" style={{ fontSize: 'clamp(42px,6vw,72px)', margin: '12px 0 16px' }}>Le blog</h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, opacity: 0.85, maxWidth: 600, margin: '0 auto' }}>
            Le punch needle expliqué, à quel âge coudre, des idées d&apos;activités pour les enfants… Mes réponses simples pour te lancer dans la couture créative.
          </p>
        </div>
      </section>

      {/* GRILLE ARTICLES */}
      <section style={{ padding: '60px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 26 }}>
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', padding: '28px 26px', gap: 12 }}>
                <div style={{ fontSize: 44, lineHeight: 1 }}>{a.emoji}</div>
                <h2 className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)', margin: 0, lineHeight: 1.25 }}>{a.h1}</h2>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, opacity: 0.82, margin: 0, flex: 1 }}>{a.chapo}</p>
                <span className="h-fredoka" style={{ fontSize: 14, fontWeight: 600, color: 'var(--framboise)', marginTop: 4 }}>Lire l&apos;article →</span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 50, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/ateliers" className="cta-pill">Voir nos ateliers</Link>
            <Link href="/contact" className="cta-ghost">Me contacter</Link>
          </div>
        </div>
      </section>

      <CrossPromo bg="var(--creme-pale)" />
    </div>
  )
}
