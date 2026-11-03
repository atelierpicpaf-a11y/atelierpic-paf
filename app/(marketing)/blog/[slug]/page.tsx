import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CrossPromo } from '@/components/sections/cross-promo'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { ArticleBlocks, RichText, type BlogProduct } from '@/components/blog/article-blocks'
import { breadcrumbJsonLd, faqPageJsonLd, howToJsonLd } from '@/lib/seo/json-ld'
import { ARTICLES, getArticleBySlug, type Article, type ArticleBlock } from '@/content/articles'
import { createAdminClient } from '@/lib/supabase/admin'
import { DoodleScissors, DoodleSpool, DoodleFlower, DoodleNeedle, StitchDivider } from '@/components/brand/doodles'

const PUBLISHED = '2026-06-13'
const SITE = 'https://atelierpicpaf.fr'

export const revalidate = 3600

// Vraies photos du projet, par article (ancien format uniquement)
const ARTICLE_IMAGES: Record<string, { src: string; alt: string; caption?: string }[]> = {
  'activites-enfants-vacances-poitiers': [
    { src: '/images/ateliers/cours-couture-enfants.jpg', alt: 'Stage créatif de couture pour enfants pendant les vacances scolaires', caption: 'Un stage créatif qui change des écrans' },
  ],
  // debuter-couture-adulte : pas d'image éditoriale adaptée (la carte promo carrée
  // ludivine-portrait.jpg se recadrait en bandeau 16:10 illisible). On laisse l'article
  // en texte + séparateurs couture jusqu'à avoir une vraie photo de journée créative adulte.
}

function slugify(s: string) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function isPillar(a: Article) {
  return Boolean(a.enBref && a.sections.some((s) => s.blocks))
}

function blockText(b: ArticleBlock): string {
  switch (b.type) {
    case 'p': case 'h3': case 'callout': case 'quote': return b.text
    case 'ul': case 'ol': return b.items.join(' ')
    case 'table': return [...b.head, ...b.rows.flat()].join(' ')
    default: return ''
  }
}

function wordCount(a: Article) {
  const txt = [
    a.chapo,
    ...(a.enBref ?? []),
    ...a.sections.flatMap((s) => [s.h2, ...(s.paragraphs ?? []), ...(s.blocks ?? []).map(blockText)]),
    ...a.faq.flatMap((f) => [f.q, f.r]),
  ].join(' ')
  return txt.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/\s+/).filter(Boolean).length
}

function frDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' })
}

async function loadProducts(a: Article): Promise<Record<string, BlogProduct>> {
  const slugs = a.sections.flatMap((s) => (s.blocks ?? []).flatMap((b) => (b.type === 'products' ? b.slugs : [])))
  if (slugs.length === 0) return {}
  try {
    const db = createAdminClient()
    const { data: produits } = await db.from('produits').select('id, slug, nom, image_principale, description').in('slug', slugs).eq('actif', true)
    if (!produits?.length) return {}
    const { data: variantes } = await db.from('variantes_produit').select('produit_id, prix_centimes').in('produit_id', produits.map((p) => p.id)).eq('actif', true)
    const out: Record<string, BlogProduct> = {}
    for (const p of produits) {
      const prix = (variantes ?? []).filter((v) => v.produit_id === p.id).map((v) => v.prix_centimes)
      if (!prix.length) continue
      out[p.slug] = { slug: p.slug, nom: p.nom, image: p.image_principale, description: p.description, prixCentimes: Math.min(...prix) }
    }
    return out
  } catch {
    return {}
  }
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const a = getArticleBySlug(slug)
  if (!a) return { title: 'Article introuvable' }
  const url = `${SITE}/blog/${a.slug}`
  // Image de partage : visuel OG dédié, sinon la couverture de l'article.
  const og = a.ogImage
    ? [{ url: `${SITE}${a.ogImage}`, width: 1200, height: 630, alt: a.h1 }]
    : a.heroImage ? [{ url: `${SITE}${a.heroImage.src}`, width: a.heroImage.width, height: a.heroImage.height, alt: a.heroImage.alt }] : undefined
  return {
    title: a.title,
    description: a.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: a.title, description: a.metaDescription, url, siteName: "L'atelier Pic & Paf", locale: 'fr_FR', type: 'article',
      ...(og && { images: og }),
      ...(a.datePublished && { publishedTime: a.datePublished, modifiedTime: a.dateModified ?? a.datePublished }),
    },
    twitter: { card: 'summary_large_image', title: a.title, description: a.metaDescription, ...(og && { images: [og[0].url] }) },
  }
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const a = getArticleBySlug(slug)
  if (!a) notFound()
  const url = `${SITE}/blog/${a.slug}`
  const autres = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3)
  const pillar = isPillar(a)
  const published = a.datePublished ?? PUBLISHED
  const modified = a.dateModified ?? published
  const words = wordCount(a)
  const minutes = Math.max(1, Math.round(words / 220))
  const products = pillar ? await loadProducts(a) : {}
  const sections = a.sections.map((s) => ({ ...s, id: s.id ?? slugify(s.h2) }))

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: a.h1,
      description: a.metaDescription,
      ...(a.heroImage && { image: [`${SITE}${a.heroImage.src}`, ...(a.ogImage ? [`${SITE}${a.ogImage}`] : [])] }),
      author: {
        '@type': 'Person',
        '@id': `${SITE}/#founder`,
        name: 'Ludivine',
        jobTitle: 'Animatrice couture et punch needle, diplômée BPJEPS',
        url: `${SITE}/a-propos`,
      },
      publisher: { '@id': `${SITE}/#organization` },
      datePublished: published,
      dateModified: modified,
      inLanguage: 'fr-FR',
      mainEntityOfPage: url,
      ...(pillar && { wordCount: words }),
    },
    faqPageJsonLd(a.faq),
    breadcrumbJsonLd([
      { name: 'Accueil', url: `${SITE}/` },
      { name: 'Blog', url: `${SITE}/blog` },
      { name: a.h1, url },
    ]),
    ...(a.howTo ? [howToJsonLd({ ...a.howTo, url, image: a.heroImage ? `${SITE}${a.heroImage.src}` : undefined })] : []),
  ]

  const hero = (
    <section style={{ position: 'relative', overflow: 'hidden', padding: pillar ? '70px 0 36px' : '80px 0 40px', background: 'var(--creme-pale)' }}>
      <div className="hidden-mobile" aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <DoodleScissors size={60} className="floaty" style={{ position: 'absolute', top: 56, left: '7%', transform: 'rotate(-12deg)', opacity: 0.9 }} />
        <DoodleSpool size={68} className="floaty" style={{ position: 'absolute', top: 80, right: '8%', transform: 'rotate(10deg)', opacity: 0.9 }} />
        <DoodleFlower size={44} style={{ position: 'absolute', bottom: 26, left: '12%', opacity: 0.85 }} />
        <DoodleNeedle size={52} style={{ position: 'absolute', bottom: 36, right: '13%', transform: 'rotate(8deg)', opacity: 0.85 }} />
      </div>
      <div className="container" style={{ position: 'relative', maxWidth: 820, textAlign: 'center' }}>
        <Link href="/blog" className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', textDecoration: 'none' }}>~ Le blog Pic &amp; Paf ~</Link>
        <h1 className="sticker-title" style={{ fontSize: 'clamp(34px,4.6vw,56px)', margin: '14px 0 22px' }}>
          {pillar ? <><span aria-hidden>{a.emoji} </span>{a.h1}</> : <>{a.emoji} {a.h1}</>}
        </h1>
        {pillar ? (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textAlign: 'left', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ position: 'relative', width: 50, height: 50, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--framboise)', background: 'var(--framboise)' }}>
              <Image src="/images/brand/ludivine-portrait.jpg" alt="" width={170} height={170} style={{ position: 'absolute', left: -25, top: -70, maxWidth: 'none' }} />
            </span>
            <span style={{ fontSize: 14.5, lineHeight: 1.5 }}>
              Par <Link href="/a-propos" style={{ color: 'var(--framboise)', fontWeight: 700 }}>Ludivine</Link>, animatrice couture et punch needle diplômée BPJEPS
              <br />
              <span style={{ opacity: 0.7 }}>Mis à jour le <time dateTime={modified}>{frDate(modified)}</time> · {minutes} min de lecture</span>
            </span>
          </div>
        ) : (
          <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--ink)', background: '#fff', borderRadius: 20, padding: '22px 26px', border: '2px solid rgba(200,54,92,.18)', boxShadow: 'var(--shadow-card)', textAlign: 'left' }}>
            {a.chapo}
          </p>
        )}
      </div>
      {pillar && a.heroImage && (
        <div className="container" style={{ position: 'relative', maxWidth: 960, marginTop: 34 }}>
          <Image src={a.heroImage.src} alt={a.heroImage.alt} width={a.heroImage.width} height={a.heroImage.height} priority sizes="(max-width: 768px) 94vw, 960px" style={{ width: '100%', height: 'auto', borderRadius: 26, boxShadow: 'var(--shadow-framboise)' }} />
        </div>
      )}
    </section>
  )

  return (
    <div className="route-enter">
      <JsonLd data={jsonLd} />
      {hero}

      {pillar ? (
        <section style={{ padding: '44px 0 60px', background: 'var(--creme)' }}>
          <article className="container" style={{ maxWidth: 760 }}>
            {/* Réponse directe (extrait Google / IA) */}
            <p style={{ fontSize: 19.5, lineHeight: 1.8, margin: '0 0 24px', fontWeight: 500 }}><RichText text={a.chapo} /></p>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 14, background: 'var(--framboise)', color: 'var(--creme)', borderRadius: 20, padding: '16px 20px', margin: '0 0 30px' }}>
              <span className="h-fredoka" style={{ fontSize: 17 }}>🪡 Envie d&apos;essayer avec Ludivine, en Vienne ou en Deux-Sèvres ?</span>
              <Link href={a.ctaHref} className="cta-pill" style={{ background: 'var(--creme)', color: 'var(--framboise)', padding: '10px 18px', fontSize: 14.5 }}>{a.ctaText}</Link>
            </div>

            {/* En bref */}
            <div style={{ background: '#fff', borderRadius: 24, padding: '24px 26px', border: '2px solid rgba(200,54,92,.18)', boxShadow: 'var(--shadow-card)', margin: '0 0 30px' }}>
              <h2 className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)', margin: '0 0 12px' }}>En bref</h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
                {a.enBref!.map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 16, lineHeight: 1.6 }}>
                    <span aria-hidden style={{ color: 'var(--framboise)', fontWeight: 700 }}>✓</span>
                    <span><RichText text={t} /></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sommaire */}
            <nav aria-label="Sommaire" style={{ background: 'var(--creme-pale)', borderRadius: 20, padding: '20px 24px', margin: '0 0 40px', border: '2px dashed rgba(200,54,92,.25)' }}>
              <p className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)', margin: '0 0 10px' }}>Sommaire</p>
              <ol style={{ margin: 0, paddingLeft: 22, fontSize: 15.5, lineHeight: 1.9, listStyleType: 'decimal' }}>
                {sections.map((s) => <li key={s.id}><a href={`#${s.id}`} style={{ color: 'var(--ink)' }}>{s.h2}</a></li>)}
                <li><a href="#faq" style={{ color: 'var(--ink)' }}>Questions fréquentes</a></li>
                <li><a href="#sources" style={{ color: 'var(--ink)' }}>Sources</a></li>
              </ol>
            </nav>

            {sections.map((s, i) => (
              <div key={s.id}>
                <h2 id={s.id} className="h-fredoka" style={{ fontSize: 'clamp(24px,3vw,30px)', color: 'var(--framboise)', margin: '0 0 16px', lineHeight: 1.2, scrollMarginTop: 120 }}>{s.h2}</h2>
                {s.blocks ? <ArticleBlocks blocks={s.blocks} products={products} /> : (s.paragraphs ?? []).map((p, j) => <p key={j} style={{ fontSize: 17, lineHeight: 1.85, margin: '0 0 16px' }}>{p}</p>)}
                {i < sections.length - 1 && <StitchDivider motif={(['spool', 'flower', 'heart', 'scissors'] as const)[i % 4]} style={{ margin: '14px 0 34px' }} />}
              </div>
            ))}

            {/* FAQ visible (H3 + réponse dans le HTML : lisible par Google et les IA) */}
            <h2 id="faq" className="h-fredoka" style={{ fontSize: 'clamp(24px,3vw,30px)', color: 'var(--framboise)', margin: '40px 0 18px', scrollMarginTop: 120 }}>Questions fréquentes</h2>
            <div style={{ display: 'grid', gap: 14 }}>
              {a.faq.map((f, i) => (
                <div key={i} className="card" style={{ padding: '18px 22px' }}>
                  <h3 className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)', margin: '0 0 8px', lineHeight: 1.3 }}>{f.q}</h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}><RichText text={f.r} /></p>
                </div>
              ))}
            </div>

            {/* Sources */}
            <h2 id="sources" className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)', margin: '40px 0 10px', scrollMarginTop: 120 }}>Sources</h2>
            <ol style={{ margin: 0, paddingLeft: 20, fontSize: 14, opacity: 0.8, lineHeight: 1.9, listStyleType: 'decimal' }}>
              {a.sources.map((s, i) => {
                const [label, href] = s.includes(' | ') ? s.split(' | ') : [null, s]
                let host = href
                try { host = new URL(href).hostname.replace(/^www\./, '') } catch { /* URL brute */ }
                return <li key={i}><a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--framboise)' }}>{label ?? host}</a>{label && <span style={{ opacity: 0.7 }}> ({host})</span>}</li>
              })}
            </ol>

            {/* Encadré auteur (E-E-A-T) */}
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', background: '#fff', borderRadius: 24, padding: '22px 24px', margin: '44px 0 10px', boxShadow: 'var(--shadow-card)', border: '2px solid rgba(200,54,92,.12)', flexWrap: 'wrap' }}>
              <span style={{ position: 'relative', width: 84, height: 84, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid var(--framboise)', background: 'var(--framboise)' }}>
                <Image src="/images/brand/ludivine-portrait.jpg" alt="Ludivine, fondatrice de L'atelier Pic & Paf" width={290} height={290} style={{ position: 'absolute', left: -45, top: -122, maxWidth: 'none' }} />
              </span>
              <div style={{ flex: '1 1 300px' }}>
                <p className="h-fredoka" style={{ margin: '0 0 6px', fontSize: 19, color: 'var(--framboise)' }}>Écrit par Ludivine</p>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, opacity: 0.88 }}>
                  Couturière et animatrice diplômée (BPJEPS), fondatrice de L&apos;atelier Pic &amp; Paf depuis 2020. Elle anime des ateliers de couture et de punch needle pour enfants et adultes en Vienne (86) et en Deux-Sèvres (79). <Link href="/a-propos" style={{ color: 'var(--framboise)', fontWeight: 600 }}>En savoir plus</Link> · <a href="https://www.instagram.com/atelier_picpaf/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--framboise)', fontWeight: 600 }}>Instagram</a>
                </p>
              </div>
            </div>
          </article>
        </section>
      ) : (
        <>
          {/* CORPS DE L'ARTICLE (ancien format) */}
          <section style={{ padding: '50px 0 60px', background: 'var(--creme)' }}>
            <article className="container" style={{ maxWidth: 720 }}>
              {(() => {
                const images = ARTICLE_IMAGES[a.slug] || []
                return (
                  <>
                    {images[0] && (
                      <figure style={{ margin: '0 0 36px' }}>
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
                          <Image src={images[0].src} alt={images[0].alt} fill sizes="(max-width: 768px) 92vw, 720px" style={{ objectFit: 'cover' }} priority />
                        </div>
                        {images[0].caption && <figcaption className="h-caveat" style={{ textAlign: 'center', fontSize: 20, color: 'var(--framboise)', marginTop: 10 }}>{images[0].caption}</figcaption>}
                      </figure>
                    )}
                    {sections.map((s, i) => (
                      <div key={i}>
                        <div style={{ marginBottom: 28 }}>
                          <h2 className="h-fredoka" style={{ fontSize: 'clamp(24px,3vw,30px)', color: 'var(--framboise)', margin: '0 0 16px', lineHeight: 1.2 }}>{s.h2}</h2>
                          {(s.paragraphs ?? []).map((p, j) => (
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
                        {i < sections.length - 1 && (
                          <StitchDivider motif={(['spool', 'flower', 'heart', 'scissors'] as const)[i % 4]} style={{ margin: '10px 0 30px' }} />
                        )}
                      </div>
                    ))}
                  </>
                )
              })()}

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
        </>
      )}

      {/* AUTRES ARTICLES */}
      <section style={{ padding: '60px 0', background: pillar ? 'var(--creme-pale)' : 'var(--creme)' }}>
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

      <CrossPromo bg={pillar ? 'var(--creme)' : 'var(--creme-pale)'} />
    </div>
  )
}
