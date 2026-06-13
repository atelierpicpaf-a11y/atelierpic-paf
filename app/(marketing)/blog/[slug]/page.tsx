import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CrossPromo } from '@/components/sections/cross-promo'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { ARTICLES, getArticleBySlug } from '@/content/articles'
import { DoodleScissors, DoodleSpool, DoodleFlower, DoodleNeedle, StitchDivider } from '@/components/brand/doodles'

const PUBLISHED = '2026-06-13'

// Vraies photos du projet, par article (authentique > illustration générée)
const ARTICLE_IMAGES: Record<string, { src: string; alt: string; caption?: string }[]> = {
  'punch-needle-c-est-quoi': [
    { src: '/images/punch-needle/arc-en-ciel.jpg', alt: 'Arc-en-ciel réalisé en punch needle lors d’un atelier de L’atelier Pic & Paf', caption: 'Un arc-en-ciel tout en laine, en punch needle ✨' },
    { src: '/images/punch-needle/renard.jpg', alt: 'Petit renard en relief réalisé en punch needle', caption: 'Un petit renard tout doux 🦊' },
  ],
  'a-quel-age-enfant-couture': [
    { src: '/images/ateliers/cours-couture-enfants.jpg', alt: 'Enfants en cours de couture avec Ludivine, L’atelier Pic & Paf', caption: 'En atelier couture enfants, dès 6 ans ❤️' },
  ],
  'activites-enfants-vacances-poitiers': [
    { src: '/images/ateliers/cours-couture-enfants.jpg', alt: 'Stage créatif de couture pour enfants pendant les vacances scolaires', caption: 'Un stage créatif qui change des écrans' },
  ],
  'debuter-couture-adulte': [
    { src: '/images/brand/ludivine-portrait.jpg', alt: 'Ludivine, animatrice des journées créatives couture en Vienne et Deux-Sèvres', caption: 'Ludivine t’accompagne pas à pas, sans jugement' },
  ],
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const a = getArticleBySlug(slug)
  if (!a) return { title: 'Article introuvable' }
  const url = `https://atelierpicpaf.fr/blog/${a.slug}`
  return {
    title: a.title,
    description: a.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: a.title, description: a.metaDescription, url, siteName: "L'atelier Pic & Paf", locale: 'fr_FR', type: 'article' },
    twitter: { card: 'summary_large_image', title: a.title, description: a.metaDescription },
  }
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const a = getArticleBySlug(slug)
  if (!a) notFound()
  const url = `https://atelierpicpaf.fr/blog/${a.slug}`
  const autres = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3)
  const images = ARTICLE_IMAGES[a.slug] || []

  return (
    <div className="route-enter">
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: a.h1,
            description: a.metaDescription,
            author: { '@id': 'https://atelierpicpaf.fr/#founder' },
            publisher: { '@id': 'https://atelierpicpaf.fr/#organization' },
            datePublished: PUBLISHED,
            dateModified: PUBLISHED,
            inLanguage: 'fr-FR',
            mainEntityOfPage: url,
          },
          faqPageJsonLd(a.faq),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr/' },
            { name: 'Blog', url: 'https://atelierpicpaf.fr/blog' },
            { name: a.h1, url },
          ]),
        ]}
      />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 40px', background: 'var(--creme-pale)' }}>
        <div className="hidden-mobile" aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <DoodleScissors size={60} className="floaty" style={{ position: 'absolute', top: 56, left: '7%', transform: 'rotate(-12deg)', opacity: 0.9 }} />
          <DoodleSpool size={68} className="floaty" style={{ position: 'absolute', top: 80, right: '8%', transform: 'rotate(10deg)', opacity: 0.9 }} />
          <DoodleFlower size={44} style={{ position: 'absolute', bottom: 26, left: '12%', opacity: 0.85 }} />
          <DoodleNeedle size={52} style={{ position: 'absolute', bottom: 36, right: '13%', transform: 'rotate(8deg)', opacity: 0.85 }} />
        </div>
        <div className="container" style={{ position: 'relative', maxWidth: 760, textAlign: 'center' }}>
          <Link href="/blog" className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', textDecoration: 'none' }}>~ Le blog Pic &amp; Paf ~</Link>
          <h1 className="sticker-title" style={{ fontSize: 'clamp(34px,4.6vw,56px)', margin: '14px 0 22px' }}>{a.emoji} {a.h1}</h1>
          {/* Chapô — réponse directe citable (featured snippet / IA) */}
          <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--ink)', background: '#fff', borderRadius: 20, padding: '22px 26px', border: '2px solid rgba(200,54,92,.18)', boxShadow: 'var(--shadow-card)', textAlign: 'left' }}>
            {a.chapo}
          </p>
        </div>
      </section>

      {/* CORPS DE L'ARTICLE */}
      <section style={{ padding: '50px 0 60px', background: 'var(--creme)' }}>
        <article className="container" style={{ maxWidth: 720 }}>
          {images[0] && (
            <figure style={{ margin: '0 0 36px' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
                <Image src={images[0].src} alt={images[0].alt} fill sizes="(max-width: 768px) 92vw, 720px" style={{ objectFit: 'cover' }} priority />
              </div>
              {images[0].caption && <figcaption className="h-caveat" style={{ textAlign: 'center', fontSize: 20, color: 'var(--framboise)', marginTop: 10 }}>{images[0].caption}</figcaption>}
            </figure>
          )}
          {a.sections.map((s, i) => (
            <div key={i}>
              <div style={{ marginBottom: 28 }}>
                <h2 className="h-fredoka" style={{ fontSize: 'clamp(24px,3vw,30px)', color: 'var(--framboise)', margin: '0 0 16px', lineHeight: 1.2 }}>{s.h2}</h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} style={{ fontSize: 17, lineHeight: 1.85, margin: '0 0 16px' }}>{p}</p>
                ))}
              </div>
              {i === 1 && images[1] && (
                <figure style={{ margin: '6px 0 30px' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
                    <Image src={images[1].src} alt={images[1].alt} fill sizes="(max-width: 768px) 92vw, 720px" style={{ objectFit: 'cover' }} />
                  </div>
                  {images[1].caption && <figcaption className="h-caveat" style={{ textAlign: 'center', fontSize: 20, color: 'var(--framboise)', marginTop: 10 }}>{images[1].caption}</figcaption>}
                </figure>
              )}
              {i < a.sections.length - 1 && (
                <StitchDivider motif={(['spool', 'flower', 'heart', 'scissors'] as const)[i % 4]} style={{ margin: '10px 0 30px' }} />
              )}
            </div>
          ))}

          {/* CTA inline */}
          <div style={{ background: 'var(--creme-pale)', borderRadius: 24, padding: '30px 28px', textAlign: 'center', border: '2px dashed rgba(200,54,92,.25)', margin: '12px 0 8px' }}>
            <p className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)', margin: '0 0 16px' }}>Envie de passer à la pratique ?</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={a.ctaHref} className="cta-pill">{a.ctaText}</Link>
              <a href="tel:+33621073536" className="cta-ghost">📞 06&nbsp;21&nbsp;07&nbsp;35&nbsp;36</a>
            </div>
          </div>
        </article>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(26px,3.2vw,34px)', color: 'var(--framboise)', textAlign: 'center', margin: '0 0 30px' }}>Questions fréquentes</h2>
          {a.faq.map((f, i) => <FaqItem key={i} q={f.q} r={f.r} />)}
        </div>
      </section>

      {/* SOURCES */}
      {a.sources.length > 0 && (
        <section style={{ padding: '24px 0 8px', background: 'var(--creme)' }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <h2 className="h-fredoka" style={{ fontSize: 15, color: 'var(--framboise)', opacity: 0.85, margin: '0 0 10px' }}>Sources</h2>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, opacity: 0.65, lineHeight: 1.9 }}>
              {a.sources.map((s, i) => {
                let host = s
                try { host = new URL(s).hostname.replace(/^www\./, '') } catch { /* garde l'URL brute */ }
                return (
                  <li key={i}>
                    <a href={s} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--framboise)' }}>{host}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}

      {/* AUTRES ARTICLES */}
      <section style={{ padding: '60px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(24px,3vw,30px)', color: 'var(--framboise)', textAlign: 'center', margin: '0 0 34px' }}>À lire aussi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {autres.map((x) => (
              <Link key={x.slug} href={`/blog/${x.slug}`} className="card" style={{ textDecoration: 'none', color: 'inherit', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontSize: 34 }}>{x.emoji}</div>
                <h3 className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)', margin: 0, lineHeight: 1.25 }}>{x.h1}</h3>
                <span className="h-fredoka" style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--framboise)', marginTop: 4 }}>Lire l&apos;article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CrossPromo bg="var(--creme-pale)" />
    </div>
  )
}
