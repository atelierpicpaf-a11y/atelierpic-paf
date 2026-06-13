import type { Metadata } from 'next'
import Link from 'next/link'
import { CrossPromo } from '@/components/sections/cross-promo'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd } from '@/lib/seo/json-ld'

const PAGE_URL = 'https://atelierpicpaf.fr/ateliers'

export const metadata: Metadata = {
  title: 'Tous nos ateliers couture & créatifs — enfants, adultes, journées, retraites',
  description:
    "🧵 Toutes les formules de L'atelier Pic & Paf en un coup d'œil : ateliers couture enfants dès 6 ans, journées créatives adultes (90€), retraites week-end (390€), punch needle, anniversaires, interventions en structures. Partout en Vienne (86) et Deux-Sèvres (79). Pas la bonne date ? On crée un atelier sur-mesure.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tous nos ateliers couture & créatifs — Pic & Paf',
    description: 'Choisis pour qui : un enfant, un adulte, un groupe ou une structure. Couture, punch needle, journées, retraites.',
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'website',
  },
}

type Carte = { emoji: string; pour: string; titre: string; desc: string; prix: string; href: string; cta: string }

const ENFANTS: Carte[] = [
  { emoji: '🧵', pour: 'Dès 6 ans', titre: 'Ateliers couture enfants', desc: 'Cours réguliers ou stages pendant les vacances. Machine à coudre, projets concrets, fierté garantie.', prix: 'Sur demande', href: '/ateliers-enfants', cta: 'Découvrir' },
  { emoji: '🎂', pour: 'Fête · 7-12 ans', titre: 'Anniversaire couture', desc: 'Une fête qui change : chacun repart avec sa création. À domicile ou en salle.', prix: 'Sur devis', href: '/anniversaire-couture-enfant', cta: 'Découvrir' },
]
const ADULTES: Carte[] = [
  { emoji: '✂️', pour: 'Adultes · ou enfant accompagné', titre: 'Journées créatives', desc: 'Une journée couture + punch needle, tout fourni, à Fontaine-le-Comte. Les enfants sont les bienvenus accompagnés d’un adulte.', prix: '90€', href: '/ateliers-adultes/journees-creatives', cta: 'Voir les dates' },
  { emoji: '🌿', pour: 'Entre femmes · week-end', titre: 'Retraites créatives', desc: 'Un week-end en gîte : couture, yoga, repas maison. Pour souffler et créer.', prix: '390€', href: '/ateliers-adultes/retraites-creatives', cta: 'Voir les retraites' },
]
const TOUS: Carte[] = [
  { emoji: '🪡', pour: 'Enfants & adultes', titre: 'Atelier punch needle', desc: 'La broderie en relief tendance : aiguille magique, laine colorée. Aussi simple pour les enfants que bluffant pour les adultes.', prix: 'Selon le format', href: '/punch-needle', cta: 'Découvrir' },
]
const STRUCTURES: Carte[] = [
  { emoji: '🏫', pour: 'Écoles · ALSH · CE…', titre: 'Interventions en structures', desc: 'Écoles, ALSH, médiathèques, associations, comités d’entreprise. Animation clé en main.', prix: 'Devis gratuit', href: '/interventions-structures', cta: 'Découvrir' },
]

function Cartes({ items }: { items: Carte[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22, maxWidth: 1000, margin: '0 auto' }}>
      {items.map((c) => (
        <Link key={c.href} href={c.href} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', padding: '26px 24px', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 36, lineHeight: 1 }}>{c.emoji}</span>
            <span className="h-fredoka" style={{ fontSize: 12, fontWeight: 700, color: 'var(--framboise)', background: 'rgba(200,54,92,.1)', padding: '4px 12px', borderRadius: 999 }}>{c.pour}</span>
          </div>
          <h3 className="h-fredoka" style={{ fontSize: 21, color: 'var(--framboise)', margin: 0 }}>{c.titre}</h3>
          <p style={{ fontSize: 14.5, lineHeight: 1.55, opacity: 0.82, margin: 0, flex: 1 }}>{c.desc}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6, paddingTop: 14, borderTop: '1.5px dashed rgba(200,54,92,.18)' }}>
            <span className="h-fredoka" style={{ fontSize: 17, color: 'var(--framboise)' }}>{c.prix}</span>
            <span className="h-fredoka" style={{ fontSize: 14, fontWeight: 600, color: 'var(--framboise)' }}>{c.cta} →</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

function GroupTitle({ emoji, children, id }: { emoji: string; children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="h-fredoka" style={{ scrollMarginTop: 90, fontSize: 'clamp(26px,3.2vw,34px)', color: 'var(--framboise)', textAlign: 'center', margin: '0 0 32px' }}>
      <span style={{ fontSize: '1.2em', marginRight: 8 }}>{emoji}</span>{children}
    </h2>
  )
}

export default function AteliersPage() {
  return (
    <div className="route-enter">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr/' },
            { name: 'Tous les ateliers', url: PAGE_URL },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Ateliers couture & créatifs — L’atelier Pic & Paf',
            itemListElement: [...ENFANTS, ...ADULTES, ...TOUS, ...STRUCTURES].map((o, i) => ({
              '@type': 'ListItem', position: i + 1, name: o.titre, url: `https://atelierpicpaf.fr${o.href}`,
            })),
          },
        ]}
      />

      {/* HERO — orientation immédiate */}
      <section style={{ padding: '88px 0 50px', background: 'var(--creme-pale)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Toutes mes formules ~</span>
          <h1 className="sticker-title" style={{ fontSize: 'clamp(42px,6vw,72px)', margin: '12px 0 16px' }}>
            Quel atelier pour toi ?
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, opacity: 0.85, maxWidth: 560, margin: '0 auto 32px' }}>
            Couture, punch needle, journées, retraites… Dis-moi <strong>pour qui c&apos;est</strong>, je t&apos;emmène à la bonne formule.
          </p>
          {/* 3 choix nets */}
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#enfants" className="cta-ghost">👶 Pour un enfant</a>
            <a href="#adultes" className="cta-ghost">✨ Pour un adulte</a>
            <a href="#structures" className="cta-ghost">🏫 Pour un groupe / une structure</a>
          </div>
        </div>
      </section>

      {/* ENFANTS */}
      <section style={{ padding: '66px 0', background: 'var(--creme)' }}>
        <div className="container">
          <GroupTitle emoji="👶" id="enfants">Pour les enfants</GroupTitle>
          <Cartes items={ENFANTS} />
        </div>
      </section>

      {/* ADULTES */}
      <section style={{ padding: '66px 0', background: 'var(--creme-pale)' }}>
        <div className="container">
          <GroupTitle emoji="✨" id="adultes">Pour les adultes</GroupTitle>
          <Cartes items={ADULTES} />
        </div>
      </section>

      {/* TOUS — enfants & adultes */}
      <section style={{ padding: '66px 0', background: 'var(--creme)' }}>
        <div className="container">
          <GroupTitle emoji="🪡" id="tous">Couture &amp; punch needle, pour tous les âges</GroupTitle>
          <p style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 30px', fontSize: 15.5, lineHeight: 1.6, opacity: 0.8 }}>
            La couture comme le punch needle se partagent à tout âge : les enfants dès 6 ans comme les adultes débutants y trouvent leur compte.
          </p>
          <Cartes items={TOUS} />
        </div>
      </section>

      {/* STRUCTURES */}
      <section style={{ padding: '66px 0', background: 'var(--creme-pale)' }}>
        <div className="container">
          <GroupTitle emoji="🏫" id="structures">Pour un groupe ou une structure</GroupTitle>
          <Cartes items={STRUCTURES} />
        </div>
      </section>

      {/* BAND — ATELIER PERSONNALISÉ */}
      <section style={{ padding: '88px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(28px,4vw,42px)', color: 'var(--creme)', margin: '0 0 16px', lineHeight: 1.1 }}>
            Rien ne correspond ? On crée ton atelier sur-mesure.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 30 }}>
            Aucune date ne te convient, ou tu veux un format rien que pour toi, ton groupe ou ta structure ?
            Dis-moi ton envie, je m&apos;adapte, partout en Vienne et Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact?sujet=Atelier%20personnalis%C3%A9" style={{ display: 'inline-block', padding: '16px 34px', borderRadius: 999, background: 'var(--creme)', color: 'var(--framboise)', fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 24px -10px rgba(0,0,0,.3)' }}>Organiser un atelier personnalisé ✨</Link>
            <a href="tel:+33621073536" style={{ display: 'inline-block', padding: '15px 30px', borderRadius: 999, background: 'transparent', color: 'var(--creme)', border: '2px solid var(--creme)', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>📞 06&nbsp;21&nbsp;07&nbsp;35&nbsp;36</a>
          </div>
        </div>
      </section>

      <CrossPromo bg="var(--creme)" />
    </div>
  )
}
