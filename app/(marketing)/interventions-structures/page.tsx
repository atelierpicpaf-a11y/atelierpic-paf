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

const PAGE_URL = 'https://atelierpicpaf.fr/interventions-structures'

export const metadata: Metadata = {
  title: 'Interventions couture · Écoles, ALSH, médiathèques (86 & 79) 🏫',
  description:
    "🏫 Interventions créatives clé en main pour écoles, ALSH, médiathèques, associations en Vienne (86) et Deux-Sèvres (79). Ateliers couture et punch needle, devis sur mesure selon votre projet. Chaque demande étudiée avec Ludivine.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Interventions couture en structure · Vienne & Deux-Sèvres',
    description:
      'Ateliers couture et punch needle pour écoles, ALSH, médiathèques, associations en Vienne (86) et Deux-Sèvres (79). Devis sur mesure.',
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'website',
  },
}

const FAQS = [
  {
    q: "Quels types de structures accompagnez-vous ?",
    r: "Écoles (maternelle, primaire, parfois collège), ALSH et centres de loisirs, médiathèques, centres sociaux, associations, comités d'entreprise, crèches, MJC, IME. Si vous hésitez sur la faisabilité, le plus simple est d'en discuter directement avec Ludivine : beaucoup de formats sont possibles.",
  },
  {
    q: "Quelle est la zone d'intervention ?",
    r: "Toute la Vienne (86) et les Deux-Sèvres (79) : Poitiers, Niort, Châtellerault, Parthenay, Bressuire, Thouars, Vouillé, Fontaine-le-Comte et toutes les communes du département. Les secteurs limitrophes peuvent aussi être étudiés.",
  },
  {
    q: "Combien de temps dure une intervention ?",
    r: "Très variable : d'une animation de 1h en médiathèque à un cycle de plusieurs séances en ALSH, en passant par des journées créatives en école. Le format s'adapte à votre projet, votre public et votre budget.",
  },
  {
    q: "Combien de participants peuvent être accueillis ?",
    r: "En général des groupes de 6 à 12 enfants pour un encadrement individuel de qualité sur la machine à coudre. Pour le punch needle, les groupes peuvent être plus grands (moins de matériel technique). Pour des classes complètes, on imagine ensemble l'organisation (rotation, demi-groupes).",
  },
  {
    q: "Faut-il prévoir du matériel de votre côté ?",
    r: "Non, j'arrive avec tout : machines à coudre, tissus, fils, tambours, aiguilles punch needle, laines, gabarits. Il faut juste un espace avec des tables, des chaises et des prises électriques pour les machines.",
  },
  {
    q: "Comment se passe le devis ?",
    r: "Vous m'expliquez votre projet (public, objectifs pédagogiques, nombre de séances, budget, contraintes de calendrier), et je vous envoie une proposition détaillée avec un tarif clair. Beaucoup de choses sont possibles, donc le mieux est d'en parler directement avec Ludivine pour construire l'offre qui colle à votre structure.",
  },
  {
    q: "Avez-vous les assurances nécessaires ?",
    r: "Oui, je suis auto-entrepreneure avec une assurance responsabilité civile professionnelle. SIREN 883 640 419. Tous les documents administratifs sont disponibles sur demande.",
  },
  {
    q: "Quels projets pédagogiques peut-on monter ensemble ?",
    r: "Projet autour du livre en médiathèque, atelier parents-enfants en école, cycle créatif en ALSH pendant les vacances, temps fort pour une kermesse, animation pour une journée portes ouvertes, intervention sur le développement durable (upcycling textile)… Les possibilités sont nombreuses : le mieux est d'en discuter avec Ludivine directement.",
  },
]

const PUBLICS = [
  {
    e: '🏫',
    t: 'Écoles',
    d: "Maternelle, primaire, parfois collège. Ateliers ponctuels, temps forts autour du livre ou du développement durable, kermesses créatives, fêtes d'école.",
  },
  {
    e: '🏕️',
    t: 'ALSH & centres de loisirs',
    d: "Animations vacances, cycles hebdomadaires, mini-camps créatifs, projets sur la demi-journée ou la journée complète.",
  },
  {
    e: '📚',
    t: 'Médiathèques',
    d: "Ateliers autour d'un album, animations tout-public, semaines thématiques, partenariats au long cours.",
  },
  {
    e: '🤝',
    t: 'Associations & centres sociaux',
    d: "Projets parents-enfants, ateliers inclusifs, temps forts, événements annuels. Adaptation au public spécifique (tout-petits, seniors, etc.).",
  },
  {
    e: '💼',
    t: "Comités d'entreprise & team-building",
    d: "Journées créatives entre collègues, moments de cohésion, arbre de Noël. Le loisir créatif qui change des bowling.",
  },
  {
    e: '💡',
    t: 'Autres structures',
    d: "Crèches, MJC, IME, maisons de quartier… Si votre structure n'apparaît pas ici, contactez Ludivine : beaucoup de choses sont possibles.",
  },
]

export default function InterventionsPage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-interventions-structures"
        data={[
          serviceJsonLd({
            name: 'Interventions couture et punch needle en structure',
            description:
              "Ateliers couture et punch needle clé en main pour écoles, ALSH, médiathèques, associations, CE en Vienne (86) et Deux-Sèvres (79). Devis sur mesure après échange avec Ludivine.",
            url: PAGE_URL,
            audience: 'Structures éducatives, culturelles et associatives',
            category: 'Intervention couture en structure',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Interventions en structure', url: PAGE_URL },
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
              ~ Pour les écoles, ALSH, médiathèques &amp; associations ~
            </span>
          </div>
          <h1
            className="sticker-title"
            style={{ fontSize: 'clamp(38px, 6vw, 68px)', margin: '0 0 18px' }}
          >
            Interventions couture en structure 🏫
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
            Ateliers clé en main · Vienne (86) &amp; Deux-Sèvres (79)
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              maxWidth: 680,
              margin: '0 auto 34px',
              opacity: 0.85,
            }}
          >
            Je me déplace dans vos murs avec tout le matériel pour animer des ateliers
            couture ou punch needle adaptés à votre public. Beaucoup de formats sont
            possibles (ponctuel, cycle, projet pédagogique, événement)&nbsp;: le plus
            simple est d&apos;en parler directement avec Ludivine pour construire
            ensemble la proposition qui colle à votre structure.
          </p>
          <Link href="/contact?sujet=Structure+%2F+Devis" className="cta-pill">
            Parler de votre projet à Ludivine 📞
          </Link>
          <p style={{ marginTop: 16, fontSize: 14, opacity: 0.65 }}>
            Devis gratuit sur mesure · Réponse rapide
          </p>
        </div>
      </section>

      <div className="stripes-band" />

      {/* PUBLICS */}
      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <SectionTitle kicker="Pour qui j'interviens" align="center">
            Une approche adaptée à votre structure
          </SectionTitle>
          <p
            style={{
              textAlign: 'center',
              maxWidth: 640,
              margin: '22px auto 0',
              fontSize: 16.5,
              opacity: 0.85,
              lineHeight: 1.6,
            }}
          >
            Chaque structure a ses contraintes, son public, son projet. Voici les cadres
            les plus fréquents, mais la liste n&apos;est pas exhaustive&nbsp;: si vous
            avez une idée, même floue, contactez Ludivine directement.
          </p>
          <div
            style={{
              marginTop: 50,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 22,
            }}
          >
            {PUBLICS.map((b, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: '26px 22px' }}
              >
                <div style={{ fontSize: 40, marginBottom: 10 }}>{b.e}</div>
                <h3
                  className="h-fredoka"
                  style={{ fontSize: 20, color: 'var(--framboise)', margin: '0 0 8px' }}
                >
                  {b.t}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, opacity: 0.85 }}>
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOC DIRECT — DISCUTER AVEC LUDIVINE */}
      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div
            className="card"
            style={{
              padding: '40px 36px',
              textAlign: 'center',
              background: 'var(--menthe)',
              border: '2px dashed var(--framboise)',
            }}
          >
            <div style={{ fontSize: 44, marginBottom: 10 }}>💬</div>
            <h2
              className="h-fredoka"
              style={{
                fontSize: 'clamp(26px, 3.5vw, 34px)',
                color: '#0f3b33',
                margin: '0 0 14px',
              }}
            >
              Chaque projet est unique
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: '#1a4a42',
                margin: '0 0 24px',
              }}
            >
              Beaucoup de choses sont possibles&nbsp;: formats variés, durées, publics,
              budgets, projets pédagogiques. Plutôt que de vous imposer un catalogue, je
              préfère qu&apos;on en discute directement. Vous m&apos;expliquez ce que
              vous cherchez, je vous propose ce qui colle le mieux à votre structure,
              et je vous envoie un devis clair.
            </p>
            <Link href="/contact?sujet=Structure+%2F+Devis" className="cta-pill">
              Échanger avec Ludivine ✨
            </Link>
          </div>
        </div>
      </section>

      {/* EXEMPLES */}
      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionTitle kicker="Exemples d'interventions" align="center">
            À quoi ça peut ressembler concrètement
          </SectionTitle>
          <div
            style={{
              marginTop: 50,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 22,
            }}
          >
            {[
              {
                titre: 'Atelier punch needle en médiathèque',
                d: "Animation 2h autour d'un album, 8 enfants, chacun repart avec sa création. Parfait pour une semaine thématique ou un temps fort.",
              },
              {
                titre: 'Cycle couture en ALSH',
                d: 'Plusieurs séances pendant les vacances scolaires, projet qui se construit au fil des jours, valorisation lors du goûter des familles.',
              },
              {
                titre: 'Fête des écoles',
                d: "Stand couture créatif sur une journée, les enfants cousent un petit objet qu'ils ramènent à la maison. Animation mémorable.",
              },
              {
                titre: 'Team-building en entreprise',
                d: "Demi-journée punch needle entre collègues, ambiance douce, projet individuel à ramener. Le loisir créatif qui rapproche vraiment.",
              },
              {
                titre: 'Atelier parents-enfants',
                d: "Duo parent-enfant, un projet commun à coudre ensemble. Un moment de complicité rare, très apprécié par les associations familiales.",
              },
              {
                titre: 'Projet pédagogique à l\'année',
                d: "Séances mensuelles en école, projet qui évolue sur l'année scolaire, restitution lors d'un événement final. Sur devis.",
              },
            ].map((ex, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: '22px 24px' }}
              >
                <h3
                  className="h-fredoka"
                  style={{ fontSize: 17, color: 'var(--framboise)', margin: '0 0 8px' }}
                >
                  {ex.titre}
                </h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, opacity: 0.85 }}>
                  {ex.d}
                </p>
              </div>
            ))}
          </div>
          <p
            className="h-caveat"
            style={{
              textAlign: 'center',
              marginTop: 40,
              fontSize: 22,
              color: 'var(--framboise)',
            }}
          >
            Vous avez une autre idée ? Parlons-en !
          </p>
        </div>
      </section>

      {/* GALERIE */}
      <section style={{ padding: '80px 0 70px', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <SectionTitle kicker="Petit aperçu" align="center">
            Ce que ça donne sur le terrain
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
                alt: "Intervention couture enfants avec Ludivine, L'atelier Pic & Paf",
                cap: 'Atelier couture en structure ❤️',
                rot: -2,
              },
              {
                src: '/images/punch-needle/arc-en-ciel.jpg',
                alt: "Intervention punch needle en médiathèque, atelier créatif enfants",
                cap: 'Arc-en-ciel en médiathèque ✨',
                rot: 2,
              },
              {
                src: '/images/punch-needle/renard.jpg',
                alt: "Création punch needle en ALSH lors d'un cycle créatif",
                cap: "Renard réalisé en ALSH 🦊",
                rot: -1,
              },
            ].map((p, i) => (
              <figure
                key={i}
                style={{
                  margin: 0,
                  padding: 14,
                  background: 'var(--creme-pale)',
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
                    background: 'var(--creme)',
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

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionTitle kicker="Vos questions" align="center">
            Ce que les structures me demandent souvent
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
            On construit votre projet ensemble ?
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              opacity: 0.92,
              margin: '0 0 30px',
            }}
          >
            Racontez-moi votre structure, votre public, votre idée (même floue !), et
            votre calendrier. Je reviens rapidement avec une proposition sur mesure et
            un devis clair.
          </p>
          <Link
            href="/contact?sujet=Structure+%2F+Devis"
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
            Demander un devis ✨
          </Link>
        </div>
      </section>
    </div>
  )
}
