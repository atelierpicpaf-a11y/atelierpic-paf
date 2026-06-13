import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { CrossPromo } from '@/components/sections/cross-promo'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { getVillesByDept, type Ville } from '@/content/villes'
import { CANTONS } from '@/content/cantons'

const PAGE_URL = 'https://atelierpicpaf.fr/ou-nous-trouver'

export const metadata: Metadata = {
  title: 'Ateliers couture & loisirs créatifs en Vienne (86) et Deux-Sèvres (79)',
  description:
    "🧵 Atelier couture & créatif près de chez toi en Vienne (86) et Deux-Sèvres (79) : Poitiers, Châtellerault, Niort, Bressuire, Parthenay, Thouars… Cours de couture enfants dès 6 ans, punch needle, journées créatives adultes, anniversaires, interventions écoles/ALSH. Ludivine se déplace partout en Poitou-Charentes / Nouvelle-Aquitaine.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Ateliers couture & loisirs créatifs en Vienne (86) et Deux-Sèvres (79)',
    description:
      "Atelier couture & créatif près de chez toi : Poitiers, Châtellerault, Niort, Bressuire, Parthenay, Thouars et 30+ communes. Ludivine se déplace partout en Vienne et Deux-Sèvres.",
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'website',
  },
}

const byNom = (a: Ville, b: Ville) => a.nom.localeCompare(b.nom, 'fr')
const villes86 = getVillesByDept('86').sort(byNom)
const villes79 = getVillesByDept('79').sort(byNom)

function VillePill({ v }: { v: Ville }) {
  return (
    <Link
      href={`/${v.slug}`}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '9px 16px', borderRadius: 999, background: '#fff',
        border: '1.5px solid rgba(200,54,92,.25)', color: 'var(--framboise)',
        fontFamily: 'var(--font-fredoka)', fontSize: 14.5, textDecoration: 'none',
        boxShadow: 'var(--shadow-card)',
      }}
      className="wiggle"
    >
      <span aria-hidden>📍</span> {v.nom}
    </Link>
  )
}

function DeptBlock({ titre, sousTitre, villes, bg }: { titre: string; sousTitre: string; villes: Ville[]; bg: string }) {
  return (
    <section style={{ padding: '70px 0', background: bg }}>
      <div className="container">
        <SectionTitle kicker={sousTitre} align="center">{titre}</SectionTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 980, margin: '44px auto 0' }}>
          {villes.map((v) => <VillePill key={v.slug} v={v} />)}
        </div>
      </div>
    </section>
  )
}

export default function OuNousTrouverPage() {
  return (
    <div className="route-enter">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Accueil', url: 'https://atelierpicpaf.fr/' },
          { name: 'Où nous trouver', url: PAGE_URL },
        ])}
      />

      {/* HERO */}
      <section style={{ padding: '90px 0 70px', background: 'var(--creme-pale)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Ludivine se déplace chez toi ~</span>
          <h1 className="sticker-title" style={{ fontSize: 'clamp(38px,5.5vw,68px)', margin: '14px 0 18px' }}>
            Atelier couture &amp; créatif près de chez toi
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, opacity: 0.85, margin: '0 auto', maxWidth: 720 }}>
            Je propose mes <strong style={{ color: 'var(--framboise)' }}>ateliers couture</strong> et <strong style={{ color: 'var(--framboise)' }}>loisirs créatifs</strong> dans toute la <strong>Vienne (86)</strong> et les <strong>Deux-Sèvres (79)</strong>, en Poitou-Charentes (Nouvelle-Aquitaine) : cours de couture enfants dès 6 ans, punch needle, journées créatives adultes, anniversaires couture, stages vacances et interventions en écoles, ALSH et médiathèques. Trouve ta commune ci-dessous — et si elle n&apos;y est pas, écris-moi quand même : je me déplace partout autour de Poitiers et de Niort.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 30 }}>
            <Link href="/contact" className="cta-pill">Organiser un atelier près de chez moi →</Link>
            <Link href="/ateliers-enfants" className="cta-ghost">Voir tous les ateliers</Link>
          </div>
          <p style={{ marginTop: 26, fontSize: 15, opacity: 0.7 }}>
            <strong>{villes86.length + villes79.length} communes</strong> couvertes · {villes86.length} en Vienne · {villes79.length} en Deux-Sèvres
          </p>
        </div>
      </section>

      {/* PAR SECTEUR (intercommunalités) */}
      <section style={{ padding: '60px 0', background: 'var(--creme)' }}>
        <div className="container">
          <SectionTitle kicker="Par secteur" align="center">Les intercommunalités du 86 &amp; 79</SectionTitle>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, textAlign: 'center', opacity: 0.8, maxWidth: 680, margin: '22px auto 0' }}>
            Chaque secteur regroupe ses communes (même les petits villages). Clique sur le tien :
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 960, margin: '34px auto 0' }}>
            {CANTONS.map((c) => (
              <Link
                key={c.slug}
                href={`/secteur/${c.slug}`}
                className="wiggle"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 999, background: '#fff', border: '1.5px solid rgba(200,54,92,.25)', color: 'var(--framboise)', fontFamily: 'var(--font-fredoka)', fontSize: 14.5, textDecoration: 'none', boxShadow: 'var(--shadow-card)' }}
              >
                🗺️ {c.nomClean}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DeptBlock
        titre="Vienne (86)"
        sousTitre="Atelier couture & créatif · Vienne 86"
        villes={villes86}
        bg="var(--creme)"
      />
      <DeptBlock
        titre="Deux-Sèvres (79)"
        sousTitre="Atelier couture & créatif · Deux-Sèvres 79"
        villes={villes79}
        bg="var(--creme-pale)"
      />

      {/* CTA */}
      <section style={{ padding: '90px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(28px,4vw,42px)', color: 'var(--creme)', margin: '0 0 16px', lineHeight: 1.15 }}>
            Ta ville n&apos;est pas dans la liste ?
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 30 }}>
            Aucun souci — je rayonne dans toute la Vienne et les Deux-Sèvres, et je peux organiser un atelier couture, une journée créative ou une animation pour ta structure là où tu es. Dis-moi ton projet, je te réponds vite.
          </p>
          <Link href="/contact" className="cta-pill anim-cta-pulse" style={{ boxShadow: '0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>
            Me contacter →
          </Link>
        </div>
      </section>

      <CrossPromo bg="var(--creme)" />
    </div>
  )
}
