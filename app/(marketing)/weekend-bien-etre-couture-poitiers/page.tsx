import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weekend bien-être & couture près de Poitiers — Retraite créative Vienne 86',
  description: '🌿 Un weekend bien-être local : couture, yoga, repas maison à 5 min de Poitiers. 3 jours dans un gîte à Fontaine-le-Comte. 390€ tout compris, paiement 3× sans frais Klarna. 9 places max.',
  alternates: { canonical: 'https://atelierpicpaf.fr/weekend-bien-etre-couture-poitiers' },
  openGraph: {
    title: 'Weekend bien-être & couture près de Poitiers',
    description: 'Pas besoin de partir loin. À 5 min de Poitiers, un weekend pour ralentir vraiment.',
    url: 'https://atelierpicpaf.fr/weekend-bien-etre-couture-poitiers',
    type: 'website',
  },
}

const POURQUOI = [
  { e: '📍', t: "À 5 min de Poitiers", d: "Pas besoin de partir loin. Le bien-être à 10 minutes de chez toi, dans la Vienne." },
  { e: '🌿', t: 'Gîte au calme', d: 'Un cadre apaisant à Fontaine-le-Comte. La nature autour, pas le bruit de la ville.' },
  { e: '🚗', t: 'Facile à organiser', d: 'Pas besoin de poser des jours, pas besoin de TGV. Tu pars vendredi 18h, tu rentres dimanche 17h.' },
  { e: '👯', t: 'Une vraie communauté locale', d: 'D\'autres femmes de la région (86, 79, 16, 87) qui veulent ralentir. Tu te fais des amies de chez toi.' },
]

const PROGRAMME = [
  { jour: 'Vendredi 18h', desc: "Arrivée au gîte à Fontaine-le-Comte. Apéro de bienvenue, dîner cuisiné maison, soirée tranquille." },
  { jour: 'Samedi matin', desc: "Réveil en douceur avec un temps bien-être (yoga, balade ou autre selon la retraite). Petit déjeuner. Premier atelier créatif guidé (couture ou punch needle)." },
  { jour: 'Samedi après-midi', desc: "Déjeuner partagé. Temps libre : continuer son projet, balader, lire, dormir. Atelier en début de soirée." },
  { jour: 'Dimanche', desc: "Réveil bien-être (yoga, massage ou balade), petit déjeuner, finitions du projet, déjeuner, départ vers 16-17h." },
]

const FAQS = [
  {
    q: "Pourquoi rester près de Poitiers plutôt que partir plus loin ?",
    r: "Parce que le ressourcement n'a pas besoin de kilomètres. À 5 min au sud de Poitiers, dans un gîte chaleureux à Fontaine-le-Comte, tu trouves le calme, la nature et tout l'esprit retraite, sans la fatigue du transport. Tu pars vendredi 18h, tu rentres dimanche après-midi, sans avoir bougé loin."
  },
  {
    q: "C'est combien et qu'est-ce qui est inclus ?",
    r: "390€ par personne, tout compris : hébergement en chambre partagée, tous les repas du vendredi soir au dimanche midi, ateliers créatifs (couture / punch needle), volet bien-être (yoga, massage, balade en forêt selon la retraite), matériel. Possible en 3× sans frais Klarna (130€/mois)."
  },
  {
    q: "C'est ouvert à toutes les habitantes de la Vienne et alentour ?",
    r: "Oui. Les retraites sont ouvertes à toutes les femmes qui veulent ralentir. La plupart des participantes viennent de Vienne (86), Deux-Sèvres (79), Charente (16), Haute-Vienne (87). Mais on a aussi des participantes parisiennes qui prennent le TGV (1h30 jusqu'à Poitiers, puis 5 min en voiture)."
  },
  {
    q: "Je n'ai jamais cousu, et le bien-être me fait peur, c'est pour moi ?",
    r: "Oui. Les ateliers sont conçus pour les débutantes complètes. Je t'accompagne pas-à-pas, on prend le temps. Le volet bien-être (yoga doux, massage, balade selon la retraite) est toujours accessible à toutes et optionnel : si tu veux passer une séance, c'est OK."
  },
  {
    q: "Le gîte, c'est confortable ?",
    r: "Oui. 4 chambres avec lits simples (2 par chambre), un salon convivial, une grande cuisine équipée, un jardin avec terrasse. C'est un cadre familial chaleureux, pas un hôtel. Mais propre, confortable, lumineux."
  },
  {
    q: "9 places, c'est volontaire ?",
    r: "Oui. C'est volontaire pour préserver l'ambiance intime. À 9, on se connaît toutes le dimanche soir. À 20 ou 30, ça devient un stage anonyme."
  },
  {
    q: "Comment je réserve ?",
    r: "Sur la page Retraites créatives, choisis ta date et réserve. Paiement sécurisé en ligne, 3× sans frais avec Klarna. Tu peux aussi me contacter directement avant si tu veux échanger."
  },
]

export default function WeekendBienEtreLocalPage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-weekend-local"
        data={[
          serviceJsonLd({
            name: 'Weekend bien-être & couture près de Poitiers',
            description: "Une retraite créative bien-être à Fontaine-le-Comte (Vienne 86), à 5 min au sud de Poitiers. Couture, punch needle, yoga, repas maison, 9 participantes max, 3 jours. 390€ tout compris.",
            url: 'https://atelierpicpaf.fr/weekend-bien-etre-couture-poitiers',
            priceCentimes: 39000,
            audience: 'Adultes femmes Vienne 86 et alentour',
            location: 'Fontaine-le-Comte',
            category: 'Retraite bien-être créative locale',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Weekend bien-être Poitiers', url: 'https://atelierpicpaf.fr/weekend-bien-etre-couture-poitiers' },
          ]),
        ]}
      />

      <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 0 70px', background: 'var(--creme-pale)' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ maxWidth: 880, textAlign: 'center', position: 'relative' }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Pas besoin de partir loin ~</span>
            <h1 className="sticker-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '14px 0 22px', lineHeight: 1.05 }}>
              Weekend bien-être<br/>à 5 min de Poitiers
            </h1>
            <p style={{ fontSize: 19, color: 'var(--framboise)', fontWeight: 600, marginBottom: 26, opacity: 0.88 }}>
              Couture, bien-être, repas maison à Fontaine-le-Comte (Vienne 86). 3 jours pour souffler.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px', opacity: 0.86 }}>
              Tu rêves d&apos;une vraie pause mais tu n&apos;as ni l&apos;envie ni les jours pour partir 4h en voiture. Bonne nouvelle : le bien-être est à 5 minutes de chez toi. Dans un gîte chaleureux, entre femmes, avec couture, bien-être (yoga, massage, balade selon la retraite) et repas maison.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
              <Link href="/ateliers-adultes/retraites-creatives" className="cta-pill anim-cta-pulse">Voir les dates &amp; réserver ✨</Link>
              <Link href="/contact?sujet=Weekend%20bien-être%20Poitiers" className="cta-ghost">Me contacter</Link>
            </div>
            <p className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', margin: '24px 0 0' }}>
              ~ 390€ tout compris · paiement 3× sans frais Klarna ~
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="stripes-band" />

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Le bien-être local" align="center">
              <span className="anim-title-underline">À 5 min de chez toi</span>
            </SectionTitle>
            <div style={{ fontSize: 17, lineHeight: 1.85, marginTop: 36, opacity: 0.88 }}>
              <p style={{ marginBottom: 16 }}>
                Les retraites bien-être, on les imagine toujours loin. Ardèche, Bretagne, Provence, Côte d&apos;Azur. Et finalement, tu n&apos;y vas jamais : trop loin, trop cher, trop d&apos;organisation.
              </p>
              <p style={{ marginBottom: 16 }}>
                Et si je te disais que la même qualité de retraite existe <strong style={{ color: 'var(--framboise)', fontWeight: 600 }}>à 5 minutes au sud de Poitiers</strong> ? À Fontaine-le-Comte, dans un gîte au calme, dans la nature, j&apos;organise des weekends qui combinent tout ce qu&apos;on cherche dans une vraie retraite : ralentir, créer, manger bon, dormir bien, échanger avec d&apos;autres femmes qui ont la même envie que toi.
              </p>
              <p style={{ marginBottom: 16 }}>
                Tu pars vendredi 18h. Tu n&apos;as pas besoin de poser des jours. Tu n&apos;as pas besoin de t&apos;organiser pendant des semaines. Et tu rentres dimanche 17h aussi détendue qu&apos;après deux semaines de vacances.
              </p>
              <p style={{ marginBottom: 16, fontStyle: 'italic', color: 'var(--framboise)' }}>
                Pour les habitantes de Vienne (86), Deux-Sèvres (79), Charente (16), Haute-Vienne (87) : c&apos;est ta retraite locale. Pour les Parisiennes qui veulent souffler : 1h30 de TGV jusqu&apos;à Poitiers, et tu es chez nous.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Pourquoi local" align="center">
              <span className="anim-title-underline">Les avantages du proche</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 22 }}>
            {POURQUOI.map((p, i) => (
              <AnimateOnScroll key={p.t} delay={i * 100} variant="scale-in">
                <div className="card anim-card-hover" style={{ padding: '28px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: 46, marginBottom: 14 }}>{p.e}</div>
                  <h3 className="h-fredoka" style={{ fontSize: 19, color: 'var(--framboise)', margin: '0 0 10px' }}>{p.t}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, opacity: 0.82, lineHeight: 1.55 }}>{p.d}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Ton weekend" align="center">
              <span className="anim-title-underline">Comment ça se passe</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {PROGRAMME.map((p, i) => (
              <AnimateOnScroll key={p.jour} delay={i * 90}>
                <div className="anim-card-hover" style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, padding: '20px 24px', background: 'var(--creme-pale)', borderRadius: 18, border: '1.5px solid rgba(200,54,92,.18)', alignItems: 'start' }}>
                  <div className="h-fredoka" style={{ fontSize: 17, color: 'var(--framboise)', fontWeight: 700 }}>{p.jour}</div>
                  <p style={{ margin: 0, fontSize: 15, opacity: 0.85, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Tes questions" align="center">
              <span className="anim-title-underline">Tout ce qu&apos;on me demande</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQS.map((f, i) => (<FaqItem key={i} q={f.q} r={f.r} />))}
          </div>
        </div>
      </section>

      <section style={{ padding: '90px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 className="h-fredoka" style={{ fontSize: 'clamp(30px,4vw,44px)', color: 'var(--creme)', margin: '0 0 18px', lineHeight: 1.1 }}>
              Prête à souffler près de chez toi ?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 32 }}>
              9 places seulement. Réserve la tienne avant qu&apos;il soit complet.
            </p>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ateliers-adultes/retraites-creatives" className="cta-pill anim-cta-pulse" style={{ boxShadow: '0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>
                Voir les dates &amp; réserver →
              </Link>
              <Link href="/contact?sujet=Weekend%20bien-être%20Poitiers" className="cta-ghost" style={{ background: 'transparent', color: 'var(--creme)', borderColor: 'var(--creme)' }}>
                J&apos;ai une question
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
