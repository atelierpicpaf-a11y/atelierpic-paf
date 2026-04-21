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

const PAGE_URL = 'https://atelierpicpaf.fr/anniversaire-couture-enfant'

export const metadata: Metadata = {
  title: 'Anniversaire couture enfant · Vienne (86) & Deux-Sèvres (79) 🎂',
  description:
    "🎂 Organisez un anniversaire couture original pour votre enfant (6-12 ans) en Vienne (86) et Deux-Sèvres (79). Je me déplace à Poitiers, Niort, Fontaine-le-Comte, Vouillé, Châtellerault. Formule clé en main, chaque enfant repart avec un objet cousu. Tarifs sur devis.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Anniversaire couture enfant · Vienne & Deux-Sèvres',
    description:
      'Formule anniversaire couture clé en main, dès 6 ans. Je me déplace partout en Vienne (86) et Deux-Sèvres (79). Tarifs sur devis.',
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'website',
  },
}

const FAQS = [
  {
    q: "À partir de quel âge organiser un anniversaire couture ?",
    r: "Dès 6 ans, quand les petites mains savent tenir une aiguille. Les formats vont jusqu'à 12 ans, et les projets sont adaptés à l'âge du groupe.",
  },
  {
    q: "Combien d'enfants peuvent participer ?",
    r: "En général entre 5 et 10 enfants, pour que chacun puisse être accompagné individuellement sur la machine à coudre. Pour des groupes plus grands, on peut prévoir une organisation adaptée. On en parle ensemble.",
  },
  {
    q: "Combien de temps dure un anniversaire couture ?",
    r: "Environ 2h, le temps que chaque enfant couse son objet, goûte, et reparte fier de sa création. Le format est adaptable selon votre envie (plus long pour un projet plus ambitieux, plus court pour un atelier découverte).",
  },
  {
    q: "Où se déroule l'anniversaire ?",
    r: "Je me déplace : à domicile, en salle des fêtes, en médiathèque ou tout autre lieu que vous avez réservé. Toutes les villes de la Vienne (86) et des Deux-Sèvres (79) peuvent être envisagées. Contactez-moi pour en discuter.",
  },
  {
    q: "Qu'apporte chaque enfant ? Qu'est-ce qui est fourni ?",
    r: "Rien ! Je viens avec tout le matériel : machines à coudre, tissus, fils, gabarits, exemples. Les enfants arrivent juste avec leurs petites mains et leur envie de créer.",
  },
  {
    q: "Quel objet les enfants cousent-ils ?",
    r: "On choisit ensemble en fonction de l'âge et du temps disponible : trousse, pochette, doudou, tote-bag, chouchou cheveux, porte-clés… Chaque enfant repart avec son objet cousu, un cadeau original dont il est fier.",
  },
  {
    q: "Quel est le tarif d'un anniversaire couture ?",
    r: "Les tarifs dépendent du nombre d'enfants, du lieu, de l'objet cousu et du format choisi. C'est pour ça que je fonctionne sur devis personnalisé : vous me racontez votre projet, je vous envoie une proposition claire et adaptée. Contactez-moi, je serai ravie d'en discuter avec vous.",
  },
]

const ETAPES = [
  {
    n: '1',
    t: 'On discute ensemble',
    d: "Vous me racontez : âge des enfants, nombre de participants, lieu, date, objet que vous aimeriez coudre. Je vous fais une proposition sur mesure avec un devis clair.",
  },
  {
    n: '2',
    t: "J'arrive avec tout le matériel",
    d: "Le jour J, je débarque avec machines à coudre, tissus, fils, gabarits, exemples. Rien à prévoir de votre côté (sauf le gâteau d'anniversaire !).",
  },
  {
    n: '3',
    t: "Les enfants cousent leur cadeau",
    d: "Chaque enfant est accompagné individuellement. On prend le temps, on rigole, on apprend à utiliser la machine à coudre en toute sécurité. Résultat : ils repartent avec un objet fait main, fiers comme tout.",
  },
  {
    n: '4',
    t: 'Souvenir inoubliable',
    d: "Pas juste un goûter de plus : une vraie expérience créative qui marque les esprits. Les parents adorent, les enfants redemandent.",
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

export default function AnniversairePage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-anniversaire"
        data={[
          serviceJsonLd({
            name: 'Anniversaire couture enfant',
            description:
              "Formule anniversaire couture clé en main pour enfants de 6 à 12 ans en Vienne (86) et Deux-Sèvres (79). Je me déplace avec tout le matériel, chaque enfant repart avec un objet cousu. Tarif sur devis.",
            url: PAGE_URL,
            minAge: 6,
            maxAge: 12,
            audience: 'Enfants',
            category: 'Anniversaire créatif enfant',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Anniversaire couture enfant', url: PAGE_URL },
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
          style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18, opacity: 1 }}
        />
        <div
          className="container"
          style={{ position: 'relative', textAlign: 'center', maxWidth: 880 }}
        >
          <div style={{ marginBottom: 14 }}>
            <span className="h-caveat" style={{ fontSize: 26, color: 'var(--framboise)' }}>
              ~ Pour les 6-12 ans ~
            </span>
          </div>
          <h1
            className="sticker-title"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '0 0 18px' }}
          >
            Anniversaire couture enfant 🎂
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
            Clé en main · Vienne (86) &amp; Deux-Sèvres (79)
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              maxWidth: 640,
              margin: '0 auto 34px',
              opacity: 0.85,
            }}
          >
            Un anniversaire qu&apos;on n&apos;oublie pas : chaque enfant coud son propre cadeau,
            reparti fier avec un objet fait main. Je me déplace partout en Vienne et en
            Deux-Sèvres, j&apos;apporte tout le matériel. Vous n&apos;avez qu&apos;à préparer le gâteau.
          </p>
          <Link
            href="/contact?sujet=Anniversaire+%2F+%C3%89v%C3%A9nement"
            className="cta-pill"
          >
            Me contacter pour organiser l&apos;anniversaire 🎂
          </Link>
          <p style={{ marginTop: 16, fontSize: 14, opacity: 0.65 }}>
            Tarifs sur devis personnalisé · Réponse rapide
          </p>
        </div>
      </section>

      <div className="stripes-band" />

      {/* POURQUOI */}
      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionTitle kicker="Pourquoi choisir un anniversaire couture" align="center">
            Un vrai souvenir, pas un anniversaire de plus
          </SectionTitle>
          <div
            style={{
              marginTop: 50,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 22,
            }}
          >
            {[
              {
                e: '🎨',
                t: 'Une activité créative',
                d: "Les enfants utilisent une vraie machine à coudre, choisissent leurs tissus, décident de leurs couleurs. Un loisir créatif qui marque.",
              },
              {
                e: '🎁',
                t: 'Un cadeau original',
                d: "Chaque enfant repart avec l'objet qu'il a cousu lui-même. Un souvenir tangible, bien plus qu'un sachet de bonbons.",
              },
              {
                e: '🧘',
                t: 'Zéro stress pour vous',
                d: "J'arrive avec tout. Vous vous occupez du gâteau et des parents, je gère les petites mains. Simple, efficace.",
              },
              {
                e: '✨',
                t: 'Une activité manuelle qui apprend',
                d: "Ce n'est pas du bricolage express : les enfants repartent avec une vraie petite compétence et l'envie de continuer.",
              },
            ].map((b, i) => (
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

      {/* COMMENT ÇA SE PASSE */}
      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionTitle kicker="Comment ça se passe" align="center">
            Quatre étapes, zéro prise de tête
          </SectionTitle>
          <div
            style={{
              marginTop: 50,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 24,
            }}
          >
            {ETAPES.map((e) => (
              <div
                key={e.n}
                className="card"
                style={{ padding: '28px 26px', position: 'relative' }}
              >
                <div
                  className="h-fredoka"
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 20,
                    fontSize: 54,
                    color: 'var(--framboise)',
                    opacity: 0.15,
                    lineHeight: 1,
                  }}
                >
                  {e.n}
                </div>
                <h3
                  className="h-fredoka"
                  style={{ fontSize: 20, color: 'var(--framboise)', margin: '0 0 10px' }}
                >
                  {e.t}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, opacity: 0.85 }}>
                  {e.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section style={{ padding: '80px 0 70px', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <SectionTitle kicker="Petit aperçu" align="center">
            Des sourires, des pépites cousues main
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
                src: '/images/ateliers/cours-couture-enfants.jpg',
                alt: "Anniversaire couture enfant avec Ludivine, L'atelier Pic & Paf",
                cap: 'Les petites mains en action ❤️',
                rot: -2,
              },
              {
                src: '/images/punch-needle/arc-en-ciel.jpg',
                alt: 'Création arc-en-ciel en punch needle pour anniversaire créatif',
                cap: 'Arc-en-ciel en laine ✨',
                rot: 2,
              },
              {
                src: '/images/punch-needle/renard.jpg',
                alt: 'Renard cousu en punch needle lors d\'un atelier créatif enfants',
                cap: 'Petit renard tout doux 🦊',
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
          <SectionTitle kicker="Je me déplace partout" align="center">
            Où organiser votre anniversaire couture ?
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
            Toutes les villes de la Vienne (86) et des Deux-Sèvres (79) peuvent être
            envisagées. Voici les secteurs où j&apos;interviens régulièrement :
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
          <SectionTitle kicker="Vos questions" align="center">
            Tout ce qu&apos;on me demande avant de caler une date
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
        <div
          className="container"
          style={{ textAlign: 'center', maxWidth: 720 }}
        >
          <h2
            className="h-fredoka"
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              margin: '0 0 18px',
              color: 'var(--creme)',
            }}
          >
            On cale l&apos;anniversaire ?
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              opacity: 0.92,
              margin: '0 0 30px',
            }}
          >
            Racontez-moi : âge, nombre d&apos;enfants, date envisagée, ville. Je reviens vers
            vous rapidement avec une proposition sur mesure et un devis clair.
          </p>
          <Link
            href="/contact?sujet=Anniversaire+%2F+%C3%89v%C3%A9nement"
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
