import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { ACTUS } from '@/content/actus'
import { ActuList } from '@/components/actus/actu-card'
import { InstagramLinks } from '@/components/actus/instagram-links'
import { CrossPromo } from '@/components/sections/cross-promo'
import { DoodleSpool, DoodleScissors, DoodleFlower, DoodleHeart } from '@/components/brand/doodles'

const SITE = 'https://atelierpicpaf.fr'
const PAGE_URL = `${SITE}/actus`
const DESCRIPTION =
  "Salons, marchés de créateurs, nouveautés de l'atelier : les actus de L'atelier Pic & Paf en Vienne (86) et en Deux-Sèvres (79), en photos et en vidéo."

export const metadata: Metadata = {
  title: "Les actus de l'atelier : salons, marchés de créateurs et nouveautés",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Les actus de L'atelier Pic & Paf",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    ...(ACTUS[0]?.ogImage && { images: [{ url: ACTUS[0].ogImage, width: 1200, height: 630 }] }),
  },
}

export default function ActusPage() {
  return (
    <div className="route-enter">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Accueil', url: `${SITE}/` },
            { name: 'Actus', url: PAGE_URL },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': `${PAGE_URL}#collection`,
            url: PAGE_URL,
            name: "Les actus de L'atelier Pic & Paf",
            description: DESCRIPTION,
            inLanguage: 'fr-FR',
            isPartOf: { '@id': `${SITE}/#website` },
            publisher: { '@id': `${SITE}/#organization` },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: ACTUS.map((a, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${SITE}/actus/${a.slug}`,
                name: a.h1,
              })),
            },
          },
        ]}
      />

      <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 0 50px', background: 'var(--creme-pale)', textAlign: 'center' }}>
        <div className="hidden-mobile" aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <DoodleSpool size={66} className="floaty" style={{ position: 'absolute', top: 70, left: '8%', transform: 'rotate(-10deg)', opacity: 0.9 }} />
          <DoodleScissors size={58} className="floaty" style={{ position: 'absolute', top: 84, right: '9%', transform: 'rotate(12deg)', opacity: 0.9 }} />
          <DoodleFlower size={44} style={{ position: 'absolute', bottom: 30, left: '14%', opacity: 0.85 }} />
          <DoodleHeart size={40} style={{ position: 'absolute', bottom: 40, right: '15%', opacity: 0.85 }} />
        </div>
        <div className="container" style={{ position: 'relative', maxWidth: 780 }}>
          <div className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Salons, marchés, nouveautés ~</div>
          <h1 className="sticker-title" style={{ fontSize: 'clamp(42px,6vw,72px)', margin: '10px 0 20px' }}>Les actus de l&apos;atelier</h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
            Salons, marchés de créateurs, nouveautés de l&apos;atelier : les actus de L&apos;atelier Pic &amp; Paf en Vienne (86) et en Deux-Sèvres (79), en photos et en vidéo.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: ACTUS.length > 1 ? 1240 : 1000 }}>
          <ActuList actus={ACTUS} as="h2" />

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <p className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)', margin: '0 0 18px' }}>Les coulisses de l&apos;atelier, au quotidien</p>
            <InstagramLinks />
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ateliers" className="cta-pill">Voir les prochains ateliers</Link>
              <Link href="/blog" className="cta-ghost">Lire le blog</Link>
            </div>
          </div>
        </div>
      </section>

      <CrossPromo bg="var(--creme-pale)" />
    </div>
  )
}
