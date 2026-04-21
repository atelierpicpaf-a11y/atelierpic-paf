import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from '@/lib/seo/json-ld'

const PAGE_URL = 'https://atelierpicpaf.fr/punch-needle'

export const metadata: Metadata = {
  title: 'Atelier punch needle · Vienne (86) & Deux-Sèvres (79) 🪡',
  description:
    "🪡 Atelier punch needle pour enfants dès 6 ans et adultes débutants en Vienne (86) et Deux-Sèvres (79). Cours, journées créatives, anniversaires, interventions en structure. Poitiers, Niort, Fontaine-le-Comte, Châtellerault, Vouillé. Tout le matériel fourni.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Atelier punch needle en Vienne et Deux-Sèvres',
    description:
      "Découvrir le punch needle dès 6 ans ou adulte débutante. Ateliers, journées créatives et anniversaires en Vienne (86) et Deux-Sèvres (79).",
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'website',
  },
}

const FAQS = [
  {
    q: "C'est quoi exactement le punch needle ?",
    r: "Le punch needle (ou aiguille magique) est une technique de broderie en relief : on pousse de la laine au travers d'une toile tendue sur un tambour, et le motif apparaît en volume, tout doux. C'est accessible, rapide à apprendre, et le résultat est bluffant.",
  },
  {
    q: "À partir de quel âge ?",
    r: "Dès 6 ans pour les enfants (c'est même souvent plus facile que la couture à la machine pour débuter), et jusqu'à 99 ans côté adultes. Le punch needle convient parfaitement aux grandes débutantes.",
  },
  {
    q: "Faut-il savoir coudre pour faire du punch needle ?",
    r: "Non, aucun prérequis. Si vous n'avez jamais touché une aiguille, c'est parfait. La technique s'apprend en quelques minutes, et on passe tout de suite au plaisir de créer.",
  },
  {
    q: "Qu'est-ce qu'on crée en atelier punch needle ?",
    r: "Petits tableaux, coussins, trousses, porte-clés, suspensions murales, doudous… Selon l'âge et le temps disponible, chacun repart avec une création personnelle, un cadeau original fait de ses mains.",
  },
  {
    q: "Faut-il apporter du matériel ?",
    r: "Non, je fournis tout : tambours, aiguilles punch needle, laines colorées, toiles, gabarits de motifs. Vous arrivez les mains vides et l'envie de créer.",
  },
  {
    q: "Où se déroulent les ateliers punch needle ?",
    r: "Toutes les villes de la Vienne (86) et des Deux-Sèvres (79) peuvent être envisagées : Poitiers, Niort, Fontaine-le-Comte, Vouillé, Châtellerault, Parthenay, Bressuire… Selon votre projet (atelier individuel, anniversaire, intervention en structure), on trouve le format adapté.",
  },
  {
    q: "Vous proposez des anniversaires punch needle ?",
    r: "Oui, c'est même l'une des formules chouchou des enfants : spectaculaire, accessible, chacun repart avec sa création. Contactez-moi pour organiser.",
  },
  {
    q: "Vous intervenez en école, ALSH ou médiathèque ?",
    r: "Oui, le punch needle est une technique idéale pour les interventions en structure : peu de matériel dangereux, résultat rapide, tout le monde y arrive. Devis gratuit sur demande.",
  },
]

const POURQUOI = [
  {
    e: '⚡',
    t: 'Ça marche tout de suite',
    d: "La technique s'apprend en 10 minutes. Même les plus sceptiques repartent bluffées par leur création.",
  },
  {
    e: '🧘',
    t: "C'est ultra apaisant",
    d: "Le geste répétitif, la laine qui coule, le motif qui apparaît : un vrai moment de décompression. Le loisir créatif qu'il vous faut.",
  },
  {
    e: '🌈',
    t: 'Un résultat spectaculaire',
    d: "Motifs en relief, couleurs franches, tout doux au toucher. Vos amis vont vouloir essayer à leur tour.",
  },
  {
    e: '👧',
    t: 'Accessible dès 6 ans',
    d: "Pas de machine, pas d'aiguille dangereuse : parfait pour initier les enfants à une activité manuelle gratifiante.",
  },
]

const FORMULES = [
  {
    emoji: '🧒',
    titre: 'Atelier punch needle enfants',
    pitch: 'Dès 6 ans. Cours, stages vacances, projets à ramener à la maison.',
    sujet: 'Atelier enfants',
  },
  {
    emoji: '✂️',
    titre: 'Journée créative adultes',
    pitch: "Une journée entière pour réaliser un projet punch needle complet, dans une ambiance douce.",
    sujet: 'Journée créative',
  },
  {
    emoji: '🎂',
    titre: 'Anniversaire punch needle',
    pitch: "La formule spectaculaire pour les 6-12 ans : chaque enfant repart avec sa création.",
    sujet: 'Anniversaire / Événement',
  },
  {
    emoji: '🏫',
    titre: 'Intervention en structure',
    pitch: "Écoles, ALSH, médiathèques, associations : animation clé en main, accessible à tous.",
    sujet: 'Structure / Devis',
  },
]

const VILLES_LINKS = [
  { slug: 'poitiers', nom: 'Poitiers' },
  { slug: 'niort', nom: 'Niort' },
  { slug: 'fontaine-le-comte', nom: 'Fontaine-le-Comte' },
  { slug: 'vouille', nom: 'Vouillé' },
  { slug: 'chatellerault', nom: 'Châtellerault' },
  { slug: 'saint-benoit', nom: 'Saint-Benoît' },
  { slug: 'buxerolles', nom: 'Buxerolles' },
  { slug: 'jaunay-marigny', nom: 'Jaunay-Marigny' },
  { slug: 'mirebeau', nom: 'Mirebeau' },
  { slug: 'lusignan', nom: 'Lusignan' },
  { slug: 'chauvigny', nom: 'Chauvigny' },
  { slug: 'parthenay', nom: 'Parthenay' },
  { slug: 'bressuire', nom: 'Bressuire' },
  { slug: 'thouars', nom: 'Thouars' },
]

export default function PunchNeedlePage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-punch-needle"
        data={[
          serviceJsonLd({
            name: 'Atelier punch needle',
            description:
              "Ateliers punch needle pour enfants dès 6 ans et adultes débutantes en Vienne (86) et Deux-Sèvres (79) : cours, journées créatives, anniversaires, interventions en structure. Tout le matériel fourni.",
            url: PAGE_URL,
            minAge: 6,
            category: 'Atelier punch needle',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Atelier punch needle', url: PAGE_URL },
          ]),
        ]}
      />

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          padding: '90px 0 70px',
          background: 'var(--creme)',
          overflow: 'hidden',
        }}
      >
        <div
          className="stripes-thin"
          style={{ position: 'absolute', inset: 0, opacity: 0.35 }}
        />
        <div
          className="container"
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 40,
            alignItems: 'center',
          }}
        >
          <div>
            <span className="h-caveat" style={{ fontSize: 26, color: 'var(--framboise)' }}>
              ~ La technique chouchou de l&apos;atelier ~
            </span>
            <h1
              className="sticker-title"
              style={{
                fontSize: 'clamp(42px, 6vw, 72px)',
                textAlign: 'left',
                margin: '10px 0 14px',
              }}
            >
              Atelier<br />punch needle 🪡
            </h1>
            <h2
              className="h-fredoka"
              style={{
                fontSize: 'clamp(20px, 2.6vw, 28px)',
                color: 'var(--framboise)',
                margin: '0 0 22px',
                fontWeight: 600,
              }}
            >
              Dès 6 ans · Vienne (86) &amp; Deux-Sèvres (79)
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 520, opacity: 0.85 }}>
              Une aiguille magique, de la laine colorée, un tambour, et des motifs en
              relief qui plaisent autant aux enfants qu&apos;aux adultes. Ludique, accessible
              dès 6 ans, résultat bluffant dès la première séance.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact?sujet=Atelier+enfants" className="cta-pill">
                Organiser un atelier ✨
              </Link>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <figure
              style={{
                margin: 0,
                padding: 14,
                background: 'var(--creme-pale)',
                borderRadius: 22,
                boxShadow: 'var(--shadow-card)',
                transform: 'rotate(-2deg)',
                maxWidth: 320,
                width: '100%',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3/4',
                  borderRadius: 14,
                  overflow: 'hidden',
                  background: 'var(--creme)',
                }}
              >
                <Image
                  src="/images/punch-needle/arc-en-ciel.jpg"
                  alt="Enfant réalisant un arc-en-ciel en punch needle"
                  fill
                  sizes="(max-width: 768px) 90vw, 320px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <figcaption
                className="h-caveat"
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                  color: 'var(--framboise)',
                  marginTop: 12,
                }}
              >
                Un arc-en-ciel en laine ✨
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="stripes-band" />

      {/* POURQUOI */}
      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionTitle kicker="Pourquoi le punch needle cartonne" align="center">
            La technique qui rend tout le monde accro
          </SectionTitle>
          <div
            style={{
              marginTop: 50,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 22,
            }}
          >
            {POURQUOI.map((b, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: '26px 22px', textAlign: 'center' }}
              >
                <div style={{ fontSize: 40, marginBottom: 10 }}>{b.e}</div>
                <h3
                  className="h-fredoka"
                  style={{ fontSize: 18, color: 'var(--framboise)', margin: '0 0 8px' }}
                >
                  {b.t}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, opacity: 0.85 }}>
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container">
          <SectionTitle kicker="Comment s'y mettre" align="center">
            Quatre façons de découvrir le punch needle
          </SectionTitle>
          <div
            style={{
              marginTop: 50,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 22,
            }}
          >
            {FORMULES.map((f) => (
              <Link
                key={f.titre}
                href={`/contact?sujet=${encodeURIComponent(f.sujet)}`}
                className="card"
                style={{
                  textDecoration: 'none',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  color: 'inherit',
                }}
              >
                <div style={{ fontSize: 38 }}>{f.emoji}</div>
                <h3
                  className="h-fredoka"
                  style={{ fontSize: 20, color: 'var(--framboise)', margin: 0 }}
                >
                  {f.titre}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    opacity: 0.85,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {f.pitch}
                </p>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--framboise)',
                    marginTop: 6,
                  }}
                >
                  Me contacter →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section style={{ padding: '80px 0 70px', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <SectionTitle kicker="Des créations faites en atelier" align="center">
            Le résultat, à chaque fois bluffant
          </SectionTitle>
          <div
            style={{
              marginTop: 56,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 40,
              justifyItems: 'center',
            }}
          >
            {[
              {
                src: '/images/punch-needle/arc-en-ciel.jpg',
                alt: 'Arc-en-ciel en punch needle réalisé en atelier créatif',
                cap: 'Un arc-en-ciel tout doux ✨',
                rot: -2,
              },
              {
                src: '/images/punch-needle/renard.jpg',
                alt: 'Renard en punch needle réalisé par un enfant en atelier',
                cap: 'Un petit renard 🦊',
                rot: 2,
              },
              {
                src: '/images/ateliers/cours-couture-enfants.jpg',
                alt: "Atelier créatif enfants avec Ludivine, L'atelier Pic & Paf",
                cap: 'Petites mains concentrées ❤️',
                rot: -1,
              },
            ].map((p, i) => (
              <figure
                key={i}
                style={{
                  margin: 0,
                  padding: 14,
                  background: 'var(--creme)',
                  borderRadius: 22,
                  boxShadow: 'var(--shadow-card)',
                  transform: `rotate(${p.rot}deg)`,
                  maxWidth: 340,
                  width: '100%',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3/4',
                    borderRadius: 14,
                    overflow: 'hidden',
                    background: 'var(--creme-pale)',
                  }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 340px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <figcaption
                  className="h-caveat"
                  style={{
                    textAlign: 'center',
                    fontSize: 22,
                    color: 'var(--framboise)',
                    marginTop: 12,
                  }}
                >
                  {p.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VILLES */}
      <section style={{ padding: '70px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 920, textAlign: 'center' }}>
          <SectionTitle kicker="Partout en Vienne & Deux-Sèvres" align="center">
            Où faire du punch needle près de chez vous ?
          </SectionTitle>
          <p
            style={{
              marginTop: 22,
              fontSize: 16,
              opacity: 0.8,
              maxWidth: 640,
              margin: '22px auto 0',
            }}
          >
            Je me déplace pour vos ateliers punch needle. Toutes les villes de la Vienne
            (86) et des Deux-Sèvres (79) peuvent être envisagées :
          </p>
          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: 36,
            }}
          >
            {VILLES_LINKS.map((v) => (
              <Link
                key={v.slug}
                href={`/${v.slug}`}
                style={{
                  padding: '10px 20px',
                  borderRadius: 999,
                  border: '1.5px solid var(--framboise)',
                  color: 'var(--framboise)',
                  fontSize: 14.5,
                  fontWeight: 600,
                  textDecoration: 'none',
                  background: 'var(--creme-pale)',
                }}
              >
                📍 {v.nom}
              </Link>
            ))}
          </div>
          <p
            className="h-caveat"
            style={{ marginTop: 30, fontSize: 22, color: 'var(--framboise)' }}
          >
            Votre ville n&apos;y est pas&nbsp;? Écrivez-moi, je me déplace !
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionTitle kicker="Vos questions sur le punch needle" align="center">
            Les questions qu&apos;on me pose souvent
          </SectionTitle>
          <div
            style={{
              marginTop: 40,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {FAQS.map((f, i) => (
              <FaqItem key={i} q={f.q} r={f.r} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          padding: '80px 0',
          background: 'var(--framboise)',
          color: 'var(--creme)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <h2
            className="h-fredoka"
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              margin: '0 0 18px',
              color: 'var(--creme)',
            }}
          >
            On essaie le punch needle ensemble ?
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              opacity: 0.92,
              margin: '0 0 30px',
            }}
          >
            Dites-moi ce qui vous tente (un atelier découverte, un anniversaire, un stage
            vacances, une intervention pour votre structure), je reviens rapidement avec
            une proposition adaptée.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '16px 34px',
              borderRadius: 999,
              background: 'var(--creme)',
              color: 'var(--framboise)',
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 8px 24px -10px rgba(0,0,0,.3)',
            }}
          >
            Me contacter ✨
          </Link>
        </div>
      </section>
    </div>
  )
}
