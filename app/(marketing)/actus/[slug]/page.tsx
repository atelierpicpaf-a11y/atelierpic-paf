import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { ACTUS, getActuBySlug, actuPhotos } from '@/content/actus'
import { getVilleBySlug } from '@/content/villes'
import { ArticleBlocks, RichText } from '@/components/blog/article-blocks'
import { YouTubeLite } from '@/components/sections/youtube-lite'
import { ActuList, frDateActu } from '@/components/actus/actu-card'
import { InstagramLinks } from '@/components/actus/instagram-links'
import { CrossPromo } from '@/components/sections/cross-promo'
import { DoodleScissors, DoodleSpool, DoodleFlower, DoodleNeedle, StitchDivider } from '@/components/brand/doodles'

const SITE = 'https://atelierpicpaf.fr'

export const revalidate = 3600

export function generateStaticParams() {
  return ACTUS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = getActuBySlug(slug)
  if (!a) return {}
  const url = `${SITE}/actus/${a.slug}`
  const image = a.ogImage
    ? { url: a.ogImage, width: 1200, height: 630, alt: a.heroImage.alt }
    : { url: a.heroImage.src, width: a.heroImage.width, height: a.heroImage.height, alt: a.heroImage.alt }
  return {
    title: { absolute: a.metaTitle },
    description: a.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: a.metaTitle,
      description: a.metaDescription,
      url,
      type: 'article',
      publishedTime: a.date,
      modifiedTime: a.dateModified ?? a.date,
      images: [image],
    },
    twitter: { card: 'summary_large_image', title: a.metaTitle, description: a.metaDescription, images: [image.url] },
  }
}

export default async function ActuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = getActuBySlug(slug)
  if (!a) notFound()

  const url = `${SITE}/actus/${a.slug}`
  const modified = a.dateModified ?? a.date
  const ville = a.villeSlug ? getVilleBySlug(a.villeSlug) : undefined
  const autres = ACTUS.filter((x) => x.slug !== a.slug).slice(0, 3)
  const photos = actuPhotos(a)

  const place = a.event && {
    '@type': 'Place',
    name: a.event.placeName,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.event.streetAddress,
      postalCode: a.event.postalCode,
      addressLocality: a.event.locality,
      addressRegion: 'Nouvelle-Aquitaine',
      addressCountry: 'FR',
    },
  }

  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: a.h1,
      description: a.metaDescription,
      image: [...(a.ogImage ? [`${SITE}${a.ogImage}`] : []), ...photos.map((p) => `${SITE}${p.src}`)],
      author: {
        '@type': 'Person',
        '@id': `${SITE}/#founder`,
        name: 'Ludivine',
        jobTitle: 'Animatrice couture et punch needle, diplômée BPJEPS',
        url: `${SITE}/a-propos`,
      },
      publisher: { '@id': `${SITE}/#organization` },
      datePublished: a.date,
      dateModified: modified,
      inLanguage: 'fr-FR',
      mainEntityOfPage: url,
      ...(place && { contentLocation: place }),
      ...(a.event && {
        about: {
          '@type': 'Event',
          name: a.event.name,
          startDate: a.event.startDate,
          endDate: a.event.endDate,
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          location: place,
          description: a.metaDescription,
          image: `${SITE}${a.heroImage.src}`,
          url: a.event.url,
        },
      }),
      ...(a.video && { video: { '@id': `${url}#video` } }),
    },
    ...(a.video
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            '@id': `${url}#video`,
            name: a.video.title,
            description: a.video.description,
            thumbnailUrl: `https://i.ytimg.com/vi/${a.video.videoId}/maxresdefault.jpg`,
            uploadDate: a.video.uploadDate,
            duration: a.video.duration,
            contentUrl: `https://www.youtube.com/watch?v=${a.video.videoId}`,
            embedUrl: `https://www.youtube.com/embed/${a.video.videoId}`,
            publisher: { '@id': `${SITE}/#organization` },
            inLanguage: 'fr',
            isFamilyFriendly: true,
          },
        ]
      : []),
    breadcrumbJsonLd([
      { name: 'Accueil', url: `${SITE}/` },
      { name: 'Actus', url: `${SITE}/actus` },
      { name: a.title, url },
    ]),
  ]

  const hero = a.heroImage
  const portrait = hero.height > hero.width

  return (
    <div className="route-enter">
      <JsonLd data={jsonLd} />
      {a.video && (
        <>
          <link rel="preconnect" href="https://www.youtube-nocookie.com" />
          <link rel="preconnect" href="https://i.ytimg.com" />
        </>
      )}

      <section style={{ position: 'relative', overflow: 'hidden', padding: '70px 0 36px', background: 'var(--creme-pale)' }}>
        <div className="hidden-mobile" aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <DoodleScissors size={60} className="floaty" style={{ position: 'absolute', top: 56, left: '7%', transform: 'rotate(-12deg)', opacity: 0.9 }} />
          <DoodleSpool size={68} className="floaty" style={{ position: 'absolute', top: 80, right: '8%', transform: 'rotate(10deg)', opacity: 0.9 }} />
          <DoodleFlower size={44} style={{ position: 'absolute', bottom: 26, left: '12%', opacity: 0.85 }} />
          <DoodleNeedle size={52} style={{ position: 'absolute', bottom: 36, right: '13%', transform: 'rotate(8deg)', opacity: 0.85 }} />
        </div>
        <div className="container" style={{ position: 'relative', maxWidth: 820, textAlign: 'center' }}>
          <Link href="/actus" className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', textDecoration: 'none' }}>~ Les actus de l&apos;atelier ~</Link>
          <h1 className="sticker-title" style={{ fontSize: 'clamp(34px,4.6vw,56px)', margin: '14px 0 22px' }}>{a.h1}</h1>
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>
            Publié le <time dateTime={a.date}>{frDateActu(a.date)}</time>
            {modified !== a.date && <> · mis à jour le <time dateTime={modified}>{frDateActu(modified)}</time></>}
            {' · 📍 '}
            {ville ? <Link href={`/${ville.slug}`} style={{ color: 'var(--framboise)', fontWeight: 700 }}>{a.lieu}</Link> : a.lieu}
          </p>
        </div>
        <figure className="container" style={{ position: 'relative', maxWidth: portrait ? 520 : 960, margin: '34px auto 0' }}>
          <Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} priority sizes={portrait ? '(max-width: 768px) 94vw, 520px' : '(max-width: 768px) 94vw, 960px'} style={{ width: '100%', height: 'auto', borderRadius: 26, boxShadow: 'var(--shadow-framboise)' }} />
          {hero.caption && <figcaption className="h-caveat" style={{ textAlign: 'center', fontSize: 20, color: 'var(--framboise)', marginTop: 12 }}>{hero.caption}</figcaption>}
        </figure>
      </section>

      <section style={{ padding: '44px 0 60px', background: 'var(--creme)' }}>
        <article className="container" style={{ maxWidth: 760 }}>
          <p style={{ fontSize: 19.5, lineHeight: 1.8, margin: '0 0 34px', fontWeight: 500 }}><RichText text={a.chapo} /></p>

          {a.sections.map((s, i) => (
            <div key={s.id ?? i}>
              <h2 id={s.id} className="h-fredoka" style={{ fontSize: 'clamp(24px,3vw,30px)', color: 'var(--framboise)', margin: '0 0 16px', lineHeight: 1.2, scrollMarginTop: 120 }}>{s.h2}</h2>
              <ArticleBlocks blocks={s.blocks} />
              {s.showVideo && a.video && (
                <>
                  <div style={{ margin: '10px auto 22px', maxWidth: a.video.aspect === '9:16' ? 340 : undefined }}>
                    <YouTubeLite videoId={a.video.videoId} title={a.video.title} aspect={a.video.aspect} />
                  </div>
                  <InstagramLinks reelUrl={a.video.instagramUrl} />
                </>
              )}
              {i < a.sections.length - 1 && <StitchDivider motif={(['spool', 'flower', 'heart', 'scissors'] as const)[i % 4]} style={{ margin: '14px 0 34px' }} />}
            </div>
          ))}

          {a.sources.length > 0 && (
            <>
              <h2 id="sources" className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)', margin: '40px 0 10px', scrollMarginTop: 120 }}>Sources</h2>
              <ol style={{ margin: 0, paddingLeft: 20, fontSize: 14, opacity: 0.8, lineHeight: 1.9, listStyleType: 'decimal' }}>
                {a.sources.map((s, i) => {
                  const [label, href] = s.includes(' | ') ? s.split(' | ') : [null, s]
                  let host = href
                  try { host = new URL(href).hostname.replace(/^www\./, '') } catch { /* URL brute */ }
                  return <li key={i}><a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--framboise)' }}>{label ?? host}</a>{label && <span style={{ opacity: 0.7 }}> ({host})</span>}</li>
                })}
              </ol>
            </>
          )}

          <p style={{ margin: '40px 0 0', textAlign: 'center' }}>
            <Link href="/actus" className="cta-ghost">← Toutes les actus</Link>
          </p>
        </article>
      </section>

      {autres.length > 0 && (
        <section style={{ padding: '60px 0', background: 'var(--creme-pale)' }}>
          <div className="container" style={{ maxWidth: 1100 }}>
            <h2 className="h-fredoka" style={{ fontSize: 'clamp(26px,3.2vw,34px)', color: 'var(--framboise)', textAlign: 'center', margin: '0 0 30px' }}>Les autres actus</h2>
            <ActuList actus={autres} as="h3" />
          </div>
        </section>
      )}

      <CrossPromo bg={autres.length > 0 ? 'var(--creme)' : 'var(--creme-pale)'} />
    </div>
  )
}
