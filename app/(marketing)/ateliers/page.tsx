import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { CrossPromo } from '@/components/sections/cross-promo'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd } from '@/lib/seo/json-ld'

const PAGE_URL = 'https://atelierpicpaf.fr/ateliers'

export const metadata: Metadata = {
  title: 'Tous nos ateliers couture & créatifs — enfants, adultes, journées, retraites',
  description:
    "🧵 Découvre toutes les formules de L'atelier Pic & Paf : ateliers couture enfants dès 6 ans, journées créatives adultes (90€), retraites créatives week-end (390€), punch needle, anniversaires couture, interventions en structures. Partout en Vienne (86) et Deux-Sèvres (79). Pas la bonne date ? On crée un atelier sur-mesure.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tous nos ateliers couture & créatifs — Pic & Paf',
    description:
      'Ateliers enfants, journées créatives, retraites, punch needle, anniversaires, interventions. Une vue d’ensemble de tout ce qu’il est possible de faire avec Ludivine en Vienne et Deux-Sèvres.',
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'website',
  },
}

type Offre = {
  emoji: string
  tag: string
  tagColor: string
  titre: string
  desc: string
  meta: string
  prix: string
  href: string
  cta: string
}

const OFFRES: Offre[] = [
  {
    emoji: '🧵', tag: 'Enfants dès 6 ans', tagColor: 'var(--menthe)',
    titre: 'Ateliers couture enfants',
    desc: 'Cours réguliers et stages pendant les vacances. Machine à coudre apprivoisée, projets concrets, et la fierté de repartir avec sa création.',
    meta: 'Poitiers · Vouillé · Châtellerault · ou à domicile',
    prix: 'Sur demande',
    href: '/ateliers-enfants', cta: 'Voir les ateliers enfants',
  },
  {
    emoji: '✂️', tag: 'Adultes · tous niveaux', tagColor: 'var(--rose)',
    titre: 'Journées créatives',
    desc: 'Une journée entière de couture et de punch needle, entre copines, dans une ambiance douce. Tissu, laine et matériel fournis.',
    meta: 'Fontaine-le-Comte · 10h-17h · max 8 personnes',
    prix: '90€ (150€ en duo)',
    href: '/ateliers-adultes/journees-creatives', cta: 'Voir les dates',
  },
  {
    emoji: '🌿', tag: 'Entre femmes · week-end', tagColor: 'var(--menthe)',
    titre: 'Retraites créatives',
    desc: 'Un week-end dans un gîte pour se ressourcer : couture, yoga, repas maison et déconnexion totale. La parenthèse que tu mérites.',
    meta: 'Fontaine-le-Comte · max 9 · repas + yoga inclus',
    prix: '390€',
    href: '/ateliers-adultes/retraites-creatives', cta: 'Voir les retraites',
  },
  {
    emoji: '🪡', tag: 'Dès 6 ans & adultes', tagColor: 'var(--rose)',
    titre: 'Atelier punch needle',
    desc: 'La technique chouchou de l’atelier : une aiguille magique, de la laine colorée, des motifs en relief. Bluffant et accessible à tous.',
    meta: 'En cours, stage, journée ou anniversaire',
    prix: 'Selon le format',
    href: '/punch-needle', cta: 'Découvrir le punch needle',
  },
  {
    emoji: '🎂', tag: 'Fête · 7-12 ans', tagColor: 'var(--menthe)',
    titre: 'Anniversaire couture',
    desc: 'Une fête qui change des goûters classiques : chaque enfant repart avec un objet cousu de ses mains. Le cadeau qui dure.',
    meta: 'À domicile, salle des fêtes ou médiathèque',
    prix: 'Sur devis',
    href: '/anniversaire-couture-enfant', cta: 'Organiser un anniversaire',
  },
  {
    emoji: '🏫', tag: 'Structures & entreprises', tagColor: 'var(--rose)',
    titre: 'Interventions',
    desc: 'Écoles, ALSH, médiathèques, associations, comités d’entreprise : une animation couture clé en main, adaptée à ton public.',
    meta: 'Partout en Vienne (86) & Deux-Sèvres (79)',
    prix: 'Devis gratuit',
    href: '/interventions-structures', cta: 'Voir les interventions',
  },
  {
    emoji: '🎁', tag: 'À faire chez toi', tagColor: 'var(--menthe)',
    titre: 'Coffrets DIY + tutos',
    desc: 'Tout le matériel réuni et un tuto vidéo offert, livré en point relais. Tu couds quand tu veux, à ton rythme.',
    meta: 'Livraison Mondial Relay partout en France',
    prix: 'dès 9,90€',
    href: '/boutique', cta: 'Voir la boutique',
  },
]

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
            itemListElement: OFFRES.map((o, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: o.titre,
              url: `https://atelierpicpaf.fr${o.href}`,
            })),
          },
        ]}
      />

      {/* HERO */}
      <section style={{ padding: '90px 0 60px', background: 'var(--creme-pale)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Une vue d&apos;ensemble ~</span>
          <h1 className="sticker-title" style={{ fontSize: 'clamp(40px,6vw,72px)', margin: '14px 0 18px' }}>
            Tous les ateliers Pic &amp; Paf
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, opacity: 0.85, maxWidth: 680, margin: '0 auto 30px' }}>
            Couture pour les enfants comme pour les adultes, punch needle, journées créatives, retraites week-end,
            anniversaires, interventions en structures… Voici <strong>tout ce qu&apos;il est possible de faire</strong> avec moi,
            partout en Vienne (86) et Deux-Sèvres (79). Tu trouves la formule qui te parle, et on en discute&nbsp;!
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#offres" className="cta-pill">Choisir mon atelier ↓</a>
            <Link href="/contact" className="cta-ghost">Écrivez-moi, on discute</Link>
          </div>
        </div>
      </section>

      {/* GRILLE DES OFFRES */}
      <section id="offres" style={{ padding: '70px 0', background: 'var(--creme)' }}>
        <div className="container">
          <SectionTitle kicker="Pour qui ? Quel format ?" align="center">Choisis ta formule</SectionTitle>
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 26, maxWidth: 1100, margin: '50px auto 0' }}>
            {OFFRES.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', padding: 0, overflow: 'hidden' }}
              >
                <div style={{ background: o.tagColor, padding: '22px 24px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: 40, lineHeight: 1 }}>{o.emoji}</span>
                  <span className="h-fredoka" style={{ fontSize: 13.5, color: '#3a1818', background: 'rgba(255,255,255,.7)', padding: '4px 12px', borderRadius: 999 }}>{o.tag}</span>
                </div>
                <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  <h3 className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)', margin: 0 }}>{o.titre}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, opacity: 0.85, margin: 0, flex: 1 }}>{o.desc}</p>
                  <div style={{ fontSize: 13.5, opacity: 0.7, display: 'flex', gap: 8 }}><span style={{ color: 'var(--framboise)' }}>📍</span> {o.meta}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, paddingTop: 14, borderTop: '1.5px dashed rgba(200,54,92,.2)' }}>
                    <span className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)' }}>{o.prix}</span>
                    <span className="h-fredoka" style={{ fontSize: 14, fontWeight: 600, color: 'var(--framboise)' }}>{o.cta} →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BAND — ATELIER PERSONNALISÉ (si aucune date ne convient) */}
      <section style={{ padding: '90px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <span className="h-caveat" style={{ fontSize: 26, color: 'var(--creme)', opacity: 0.9 }}>~ Rien ne te correspond ? ~</span>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(28px,4vw,42px)', color: 'var(--creme)', margin: '10px 0 16px', lineHeight: 1.1 }}>
            Aucune date ne te convient ? On s&apos;adapte.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 30 }}>
            Tu veux un atelier rien que pour toi, ton groupe ou ta structure, à la date et au lieu qui t&apos;arrangent ?
            Je crée des ateliers <strong>100% sur-mesure</strong>, partout en Vienne et Deux-Sèvres. Dis-moi ton envie, je construis le format.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact?sujet=Atelier%20personnalis%C3%A9"
              style={{ display: 'inline-block', padding: '16px 34px', borderRadius: 999, background: 'var(--creme)', color: 'var(--framboise)', fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 24px -10px rgba(0,0,0,.3)' }}
            >
              Organiser un atelier personnalisé ✨
            </Link>
            <a
              href="tel:+33621073536"
              style={{ display: 'inline-block', padding: '15px 30px', borderRadius: 999, background: 'transparent', color: 'var(--creme)', border: '2px solid var(--creme)', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}
            >
              📞 06&nbsp;21&nbsp;07&nbsp;35&nbsp;36
            </a>
          </div>
        </div>
      </section>

      <CrossPromo bg="var(--creme)" />
    </div>
  )
}
