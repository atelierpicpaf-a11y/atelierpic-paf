import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SectionTitle } from '@/components/sections/section-title'
import { CrossPromo } from '@/components/sections/cross-promo'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { CANTONS, getCantonBySlug } from '@/content/cantons'

const fmt = (n: number) => n.toLocaleString('fr-FR')
const deptLabel = (depts: string[]) =>
  depts.map((d) => (d === '86' ? 'Vienne (86)' : 'Deux-Sèvres (79)')).join(' & ')

export function generateStaticParams() {
  return CANTONS.map((c) => ({ slug: c.slug }))
}

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const c = getCantonBySlug(slug)
  if (!c) return { title: 'Secteur introuvable' }
  const url = `https://atelierpicpaf.fr/secteur/${c.slug}`
  return {
    title: `Atelier couture & créatif · ${c.nomClean} (${c.depts.join('/')}) — ${c.nbCommunes} communes ⭐`,
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: c.titreH1, description: c.metaDescription, url, siteName: "L'atelier Pic & Paf", locale: 'fr_FR', type: 'website' },
    twitter: { card: 'summary_large_image', title: c.titreH1, description: c.metaDescription },
  }
}

const pill: React.CSSProperties = {
  display: 'inline-block', padding: '7px 14px', borderRadius: 999,
  fontSize: 13.5, fontFamily: 'var(--font-fredoka)', textDecoration: 'none',
}

export default async function SecteurPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const c = getCantonBySlug(slug)
  if (!c) notFound()

  const url = `https://atelierpicpaf.fr/secteur/${c.slug}`
  const nbPages = c.communes.filter((x) => x.hasPage).length
  const contactHref = `/contact?sujet=${encodeURIComponent('Atelier ' + c.nomClean)}`

  return (
    <div className="route-enter">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr/' },
            { name: 'Où nous trouver', url: 'https://atelierpicpaf.fr/ou-nous-trouver' },
            { name: c.nomClean, url },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Ateliers couture & créatifs — ${c.nomClean}`,
            description: c.metaDescription,
            url,
            provider: { '@id': 'https://atelierpicpaf.fr/#organization' },
            serviceType: ['Atelier couture', 'Atelier punch needle', 'Cours de couture'],
            areaServed: c.communes.slice(0, 30).map((v) => ({ '@type': 'City', name: v.nom })),
          },
        ]}
      />

      {/* HERO */}
      <section style={{ position: 'relative', padding: '90px 0 64px', background: 'var(--creme)', overflow: 'hidden' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 880 }}>
          <span className="h-caveat" style={{ fontSize: 26, color: 'var(--framboise)' }}>~ {c.kicker} ~</span>
          <h1 className="sticker-title" style={{ fontSize: 'clamp(38px, 5.5vw, 66px)', margin: '12px 0 16px' }}>{c.titreH1}</h1>
          <p style={{ fontSize: 18.5, lineHeight: 1.6, maxWidth: 660, margin: '0 auto 30px', opacity: 0.85 }}>
            Couture, punch needle, journées créatives, retraites… Je me déplace dans les <strong>{c.nbCommunes} communes</strong> du secteur {c.nomClean}, en {deptLabel(c.depts)}.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/ateliers" className="cta-pill">Voir nos ateliers</Link>
            <Link href={contactHref} className="cta-ghost">Me contacter</Link>
          </div>
        </div>
      </section>

      <div className="stripes-band" />

      {/* INTRO SEO */}
      <section style={{ padding: '70px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <SectionTitle kicker={`${c.nomClean} · ${deptLabel(c.depts)}`} align="center">Couture &amp; créatif · {c.nomClean}</SectionTitle>
          <p style={{ fontSize: 17, lineHeight: 1.8, marginTop: 34 }}>{c.intro}</p>
        </div>
      </section>

      {/* CHIFFRES */}
      <section style={{ padding: '50px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 820, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 18 }}>
          {[
            { n: fmt(c.nbCommunes), l: 'communes desservies' },
            { n: fmt(c.population), l: 'habitants du secteur' },
            { n: `${nbPages}`, l: 'communes avec leur page' },
          ].map((s) => (
            <div key={s.l} className="card" style={{ padding: '22px 16px', textAlign: 'center', background: '#fff' }}>
              <div className="h-fredoka" style={{ fontSize: 34, color: 'var(--framboise)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 13.5, opacity: 0.72, marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TOUTES LES COMMUNES */}
      <section style={{ padding: '60px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <SectionTitle kicker="Je viens jusqu'à toi" align="center">Les {c.nbCommunes} communes du secteur {c.nomClean}</SectionTitle>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, textAlign: 'center', opacity: 0.8, maxWidth: 680, margin: '22px auto 0' }}>
            J&apos;interviens dans toutes ces communes, des plus grandes aux petits villages. En framboise, celles qui ont déjà leur page dédiée.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 34 }}>
            {c.communes.map((v) =>
              v.hasPage ? (
                <Link key={v.slug} href={`/${v.slug}`} style={{ ...pill, border: '1.5px solid var(--framboise)', color: 'var(--framboise)', background: '#fff', boxShadow: 'var(--shadow-card)' }}>{v.nom}</Link>
              ) : (
                <span key={v.slug} style={{ ...pill, border: '1.5px solid rgba(200,54,92,.18)', color: 'var(--ink)', background: '#fff', opacity: 0.78 }}>{v.nom}</span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section style={{ padding: '64px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <span className="h-caveat" style={{ fontSize: 26, color: 'var(--framboise)' }}>~ On en parle ? ~</span>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(26px,3.4vw,38px)', color: 'var(--framboise)', margin: '8px 0 14px', lineHeight: 1.15 }}>Un atelier près de chez toi, sur le secteur {c.nomClean}</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, opacity: 0.85, maxWidth: 600, margin: '0 auto 26px' }}>
            Un cours pour ton enfant, une journée entre copines, un anniversaire, une animation pour ta structure ? Dis-moi ton projet, je m&apos;adapte.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={contactHref} className="cta-pill">Écrivez-moi, on discute</Link>
            <a href="tel:+33621073536" className="cta-ghost">📞 06&nbsp;21&nbsp;07&nbsp;35&nbsp;36</a>
          </div>
        </div>
      </section>

      {/* MAILLAGE */}
      <section style={{ padding: '56px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 920, textAlign: 'center' }}>
          <SectionTitle kicker="Tout l'univers Pic & Paf" align="center">À explorer aussi</SectionTitle>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 34 }}>
            {[
              { href: '/ateliers', t: '✨ Tous les ateliers' },
              { href: '/ateliers-enfants', t: 'Ateliers enfants' },
              { href: '/ateliers-adultes/journees-creatives', t: 'Journées créatives' },
              { href: '/ateliers-adultes/retraites-creatives', t: 'Retraites créatives' },
              { href: '/punch-needle', t: 'Punch needle' },
              { href: '/anniversaire-couture-enfant', t: 'Anniversaire couture' },
              { href: '/interventions-structures', t: 'Interventions structures' },
              { href: '/a-propos', t: 'Qui est Ludivine ?' },
              { href: '/ou-nous-trouver', t: 'Toutes les communes (86 & 79)' },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ ...pill, padding: '10px 18px', fontSize: 14, background: '#fff', border: '1.5px solid rgba(200,54,92,.25)', color: 'var(--framboise)' }}>{l.t}</Link>
            ))}
          </div>
          <p style={{ marginTop: 28, fontSize: 15.5, lineHeight: 1.7, opacity: 0.85 }}>
            Pour organiser un atelier sur le secteur {c.nomClean} :{' '}
            <a href="tel:+33621073536" style={{ color: 'var(--framboise)', fontWeight: 700 }}>06&nbsp;21&nbsp;07&nbsp;35&nbsp;36</a>
            {' · '}
            <a href="mailto:atelierpicpaf@gmail.com" style={{ color: 'var(--framboise)', fontWeight: 700 }}>atelierpicpaf@gmail.com</a>
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '88px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(28px,4vw,42px)', color: 'var(--creme)', margin: '0 0 16px', lineHeight: 1.1 }}>On crée quelque chose ensemble sur le secteur {c.nomClean} ?</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 30 }}>
            Je me déplace dans les {c.nbCommunes} communes du secteur. Raconte-moi ton envie, je te réponds vite avec une proposition adaptée.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/ateliers" style={{ display: 'inline-block', padding: '16px 34px', borderRadius: 999, background: 'var(--creme)', color: 'var(--framboise)', fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 24px -10px rgba(0,0,0,.3)' }}>Voir nos ateliers</Link>
            <a href="tel:+33621073536" style={{ display: 'inline-block', padding: '15px 30px', borderRadius: 999, background: 'transparent', color: 'var(--creme)', border: '2px solid var(--creme)', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>📞 06&nbsp;21&nbsp;07&nbsp;35&nbsp;36</a>
          </div>
        </div>
      </section>

      <CrossPromo bg="var(--creme)" />
    </div>
  )
}
