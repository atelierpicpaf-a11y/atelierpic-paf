import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { CrossPromo } from '@/components/sections/cross-promo'
import { DoodleSpool, DoodleHeart, DoodleFlower } from '@/components/brand/doodles'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd, personJsonLd } from '@/lib/seo/json-ld'

const PAGE_URL = 'https://atelierpicpaf.fr/a-propos'

export const metadata: Metadata = {
  title: 'Qui est Ludivine ? — L’atelier Pic & Paf, couture créative en Vienne & Deux-Sèvres',
  description:
    "Fais connaissance avec Ludivine, fondatrice de L'atelier Pic & Paf : couturière passionnée et diplômée (BPJEPS), elle anime des ateliers couture et punch needle pour enfants et adultes, partout en Vienne (86) et Deux-Sèvres (79). Sans jugement, on repart toujours avec sa création.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Qui est Ludivine ? — L’atelier Pic & Paf',
    description:
      'La couturière itinérante qui transmet le fait-main aux enfants comme aux adultes en Vienne et Deux-Sèvres.',
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'profile',
    images: [{ url: 'https://atelierpicpaf.fr/images/brand/ludivine-portrait.jpg' }],
  },
}

const VALEURS = [
  { emoji: '💗', titre: 'Sans jugement', desc: 'Jamais touché une machine ou couturière confirmée : tu es la bienvenue, à ton rythme.' },
  { emoji: '🧵', titre: 'On repart avec sa création', desc: 'À chaque atelier, tu repars avec un objet que tu as cousu toi-même. La vraie fierté.' },
  { emoji: '🚗', titre: 'Je me déplace', desc: 'Écoles, médiathèques, salles communales, à domicile : je viens à toi, partout en 86 et 79.' },
  { emoji: '📦', titre: 'Tout est fourni', desc: 'Machines, tissus, fils, laine, aiguilles : tu arrives les mains vides, tu repars avec ta pépite.' },
]

export default function AProposPage() {
  return (
    <div className="route-enter">
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            url: PAGE_URL,
            name: 'Qui est Ludivine ? — L’atelier Pic & Paf',
            about: { '@id': 'https://atelierpicpaf.fr/#founder' },
            mainEntity: { '@id': 'https://atelierpicpaf.fr/#organization' },
          },
          personJsonLd(),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr/' },
            { name: 'Qui est Ludivine', url: PAGE_URL },
          ]),
        ]}
      />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 0 60px', background: 'var(--creme-pale)' }}>
        <div className="hidden-mobile" aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <DoodleSpool size={58} className="floaty" style={{ position: 'absolute', top: 50, right: '6%', transform: 'rotate(10deg)', opacity: 0.8 }} />
          <DoodleFlower size={40} style={{ position: 'absolute', bottom: 40, right: '12%', opacity: 0.75 }} />
          <DoodleHeart size={28} style={{ position: 'absolute', top: 120, right: '20%', opacity: 0.7 }} />
        </div>
        <div className="container" style={{ position: 'relative', maxWidth: 1040 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: 32, overflow: 'hidden', boxShadow: 'var(--shadow-framboise)', maxWidth: 440, margin: '0 auto', width: '100%' }}>
              <Image
                src="/images/brand/ludivine-portrait.jpg"
                alt="Ludivine Sénéchaud, fondatrice et animatrice de L'atelier Pic & Paf en Vienne et Deux-Sèvres"
                fill
                sizes="(max-width: 768px) 90vw, 440px"
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ La magicienne des tissus ~</span>
              <h1 className="sticker-title" style={{ fontSize: 'clamp(38px,5.5vw,64px)', margin: '12px 0 20px', textAlign: 'left' }}>
                Moi, c&apos;est Ludivine
              </h1>
              <p style={{ fontSize: 17.5, lineHeight: 1.8, opacity: 0.88, marginBottom: 16 }}>
                La couture, ça fait partie de moi depuis toujours : j&apos;aime créer de mes mains, transformer un bout de tissu
                en quelque chose d&apos;unique, et surtout transmettre cette passion. En 2020, j&apos;ai lancé
                <strong> L&apos;atelier Pic &amp; Paf</strong> pour partager ça avec le plus de monde possible.
              </p>
              <p style={{ fontSize: 17.5, lineHeight: 1.8, opacity: 0.88 }}>
                Diplômée <strong>BPJEPS</strong>, j&apos;anime des ateliers couture et punch needle pour les enfants dès 6 ans
                comme pour les adultes débutants, partout en <strong>Vienne (86)</strong> et <strong>Deux-Sèvres (79)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section style={{ padding: '70px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <SectionTitle kicker="Ma façon de faire" align="center">L&apos;atelier qui vient à toi</SectionTitle>
          <p style={{ fontSize: 17, lineHeight: 1.8, marginTop: 34 }}>
            Plutôt que d&apos;attendre les élèves dans un local fixe, je préfère me déplacer : écoles, médiathèques,
            salles communales, à domicile, ou dans un gîte à Fontaine-le-Comte (5 minutes au sud de Poitiers) pour mes
            journées créatives et mes retraites week-end. L&apos;idée, c&apos;est que la couture créative arrive jusque
            dans les communes qui n&apos;ont pas toujours ce genre d&apos;activité.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            Ma règle d&apos;or ? <strong>Pas de jugement, pas de niveau requis.</strong> Que tu n&apos;aies jamais touché une
            machine à coudre ou que tu couses depuis dix ans, tu es la bienvenue. On prend le temps, on rigole, et on repart
            toujours avec sa création. Pour moi, voir un enfant brandir fièrement le doudou qu&apos;il a cousu, c&apos;est la
            plus belle des récompenses.
          </p>
        </div>
      </section>

      {/* VALEURS */}
      <section style={{ padding: '70px 0', background: 'var(--creme-pale)' }}>
        <div className="container">
          <SectionTitle kicker="Ce à quoi je tiens" align="center">Mes engagements</SectionTitle>
          <div style={{ marginTop: 46, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 22, maxWidth: 1000, margin: '46px auto 0' }}>
            {VALEURS.map((v) => (
              <div key={v.titre} className="card" style={{ padding: '26px 22px', textAlign: 'center', background: '#fff' }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>{v.emoji}</div>
                <h3 className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)', margin: '0 0 8px' }}>{v.titre}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.82, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 40, fontSize: 14, opacity: 0.65 }}>
            Diplômée BPJEPS LTP · L&apos;atelier Pic &amp; Paf depuis 2020 · SIRET 883 640 419 00015
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '90px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(28px,4vw,42px)', color: 'var(--creme)', margin: '0 0 16px', lineHeight: 1.1 }}>
            On crée quelque chose ensemble ?
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 30 }}>
            Raconte-moi ton envie (un cours pour ton enfant, une journée entre copines, un anniversaire, une animation
            pour ta structure), je construis le format qui te ressemble.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '16px 34px', borderRadius: 999, background: 'var(--creme)', color: 'var(--framboise)', fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 24px -10px rgba(0,0,0,.3)' }}>Écrivez-moi, on discute</Link>
            <Link href="/ateliers" style={{ display: 'inline-block', padding: '15px 30px', borderRadius: 999, background: 'transparent', color: 'var(--creme)', border: '2px solid var(--creme)', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Voir tous les ateliers</Link>
          </div>
        </div>
      </section>

      <CrossPromo bg="var(--creme)" />
    </div>
  )
}
