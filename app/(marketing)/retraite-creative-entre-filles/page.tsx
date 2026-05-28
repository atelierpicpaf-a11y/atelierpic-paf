import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retraite créative entre filles — Weekend couture & bien-être à Poitiers (Vienne 86)',
  description: '💞 Un weekend entre filles pour souffler vraiment : couture, punch needle, yoga, repas maison à Fontaine-le-Comte (5 min Poitiers). 9 places, 3 jours, 390€ tout compris, paiement 3× Klarna.',
  alternates: { canonical: 'https://atelierpicpaf.fr/retraite-creative-entre-filles' },
  openGraph: {
    title: 'Retraite créative entre filles — L\'atelier Pic & Paf',
    description: 'Un weekend entre femmes pour ralentir : couture, yoga, repas inclus, gîte à Fontaine-le-Comte (Vienne 86). 390€ tout compris.',
    url: 'https://atelierpicpaf.fr/retraite-creative-entre-filles',
    type: 'website',
  },
}

const POURQUOI = [
  { e: '👯', t: 'Que des femmes', d: 'Choix volontaire : ambiance plus détendue, conversations plus vraies, on baisse la garde.' },
  { e: '🛌', t: 'On dort sur place', d: 'Un gîte chaleureux à Fontaine-le-Comte. 4 chambres avec lits simples, jusqu\'à 2 par chambre.' },
  { e: '🍽️', t: 'Tous les repas inclus', d: 'Vendredi soir à dimanche midi, repas maison cuisinés par mes soins. Tu n\'as rien à apporter.' },
  { e: '⏳', t: '3 jours hors du temps', d: 'Pas une demi-journée. Trois jours pour vraiment décrocher, et ressortir transformée.' },
]

const OCCASIONS = [
  { e: '👰', t: "EVJF d'exception", d: "Pour une future mariée qui veut autre chose qu'une nuit en boîte : un vrai moment, un souvenir, une création." },
  { e: '🎂', t: "Anniversaire qui marque", d: "30, 40, 50 ans. Le weekend qu'elle se souviendra des années plus tard, à offrir entre amies." },
  { e: '🤝', t: "Retrouvailles d'amies", d: "Vous étiez 4-5 inséparables, et la vie vous a éloignées. Un weekend pour reconnecter." },
  { e: '💫', t: 'Anniversaire d\'amitié', d: "10 ans, 20 ans d'amitié. Ça se fête. Ça se marque. Ça se vit ensemble." },
]

const FAQS = [
  {
    q: "On peut venir à plusieurs amies, vous avez de la place ?",
    r: "Oui. Les retraites accueillent 9 participantes max. Si vous êtes 4-5 amies, vous pouvez réserver vos places ensemble. Pour un groupe de 6+ qui veut privatiser tout le weekend, contactez-moi, on peut organiser une session privée."
  },
  {
    q: "C'est combien et qu'est-ce qui est inclus ?",
    r: "390€ par personne, tout compris : hébergement en chambre partagée (4 chambres de 2 lits simples), tous les repas du vendredi soir au dimanche midi, ateliers créatifs (couture / punch needle), volet bien-être (yoga, massage, balade en forêt selon la retraite), matériel. Possible en 3× sans frais avec Klarna (130€/mois)."
  },
  {
    q: "On peut privatiser un weekend pour notre groupe ?",
    r: "Oui, sur demande. Si vous êtes 6 à 9 amies et que vous voulez le gîte rien que pour vous, je peux organiser une session privée à la date qui vous arrange. Contactez-moi avec votre projet."
  },
  {
    q: "Et si on a des niveaux différents en couture ou pour les activités bien-être ?",
    r: "Pas de souci. Les ateliers créatifs sont conçus pour accueillir tous les niveaux : débutantes complètes, intermédiaires, confirmées. Je m'adapte à chacune. Le volet bien-être (yoga doux, massage, balade selon la retraite) est toujours accessible à toutes. Et tout est optionnel : on peut zapper une séance pour dormir ou se balader."
  },
  {
    q: "Le gîte, c'est où exactement ?",
    r: "À Fontaine-le-Comte (Vienne 86), à 5 minutes au sud de Poitiers. Au calme, dans la nature. Adresse précise envoyée à la réservation. Parking gratuit. Accessible facilement depuis le Grand Poitiers, Châtellerault, Niort, et même Paris (3h en voiture, 1h30 en TGV jusqu'à Poitiers)."
  },
  {
    q: "Si une copine annule à la dernière minute ?",
    r: "Si l'annulation est plus de 14 jours avant, elle peut reporter sur une autre date. À moins de 14 jours, c'est plus compliqué (je dois quand même payer le gîte et les courses). Tu peux la remplacer par une autre amie si elle se libère."
  },
  {
    q: "Comment on réserve à plusieurs ?",
    r: "Sur la page Retraites créatives, choisis la date et réserve plusieurs places. Paiement sécurisé. Si vous êtes un grand groupe ou que vous voulez privatiser, contactez-moi directement, je gère."
  },
]

export default function EntreFillesPage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-entre-filles"
        data={[
          serviceJsonLd({
            name: 'Retraite créative entre filles — Weekend couture & bien-être',
            description: "Un weekend de ressourcement entre filles à Fontaine-le-Comte (Vienne 86), 5 min au sud de Poitiers. Couture, punch needle, yoga, repas inclus, 9 participantes max, 3 jours. 390€ tout compris.",
            url: 'https://atelierpicpaf.fr/retraite-creative-entre-filles',
            priceCentimes: 39000,
            audience: 'Adultes femmes (entre amies)',
            location: 'Fontaine-le-Comte',
            category: 'Retraite créative entre filles',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Retraite entre filles', url: 'https://atelierpicpaf.fr/retraite-creative-entre-filles' },
          ]),
        ]}
      />

      <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 0 70px', background: 'var(--creme-pale)' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ maxWidth: 880, textAlign: 'center', position: 'relative' }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Un weekend rien qu&apos;à nous ~</span>
            <h1 className="sticker-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '14px 0 22px', lineHeight: 1.05 }}>
              Retraite créative<br/>entre filles
            </h1>
            <p style={{ fontSize: 19, color: 'var(--framboise)', fontWeight: 600, marginBottom: 26, opacity: 0.88 }}>
              3 jours pour souffler entre amies. Couture, bien-être, repas maison, gîte. À 5 min de Poitiers.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px', opacity: 0.86 }}>
              Vous étiez inséparables. Puis la vie. Le boulot. Les enfants. Les déménagements. Aujourd&apos;hui vous vous voyez quoi, deux fois par an ? Et si on changeait ça avec un weekend qui vous ressemble ?
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
              <Link href="/ateliers-adultes/retraites-creatives" className="cta-pill anim-cta-pulse">Voir les dates &amp; réserver ✨</Link>
              <Link href="/contact?sujet=Retraite%20privatisée%20entre%20filles" className="cta-ghost">Privatiser pour notre groupe</Link>
            </div>
            <p className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', margin: '24px 0 0' }}>
              ~ 390€ par personne · paiement 3× sans frais Klarna ~
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="stripes-band" />

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Tu te reconnais ?" align="center">
              <span className="anim-title-underline">Vous vous voyez plus assez</span>
            </SectionTitle>
            <div style={{ fontSize: 17, lineHeight: 1.85, marginTop: 36, opacity: 0.88 }}>
              <p style={{ marginBottom: 16 }}>
                Vous étiez inséparables. Vous racontiez tout. Vous saviez tout les unes des autres. Et puis la vie : un déménagement, un boulot, un mari, des enfants, une distance. Aujourd&apos;hui vous vous voyez quoi, deux fois par an pour un apéro qui passe trop vite.
              </p>
              <p style={{ marginBottom: 16 }}>
                Une retraite créative entre filles, c&apos;est <strong style={{ color: 'var(--framboise)', fontWeight: 600 }}>3 jours pour vous rattraper</strong>. Pas un dîner pressé. Pas une visite à la sauvette. Trois jours dans un gîte chaleureux, à créer ensemble, manger ensemble, dormir sous le même toit. Comme avant. Mais avec en plus une activité qui vous donne un projet commun, des fous rires, des photos, une création à ramener.
              </p>
              <p style={{ marginBottom: 16, fontStyle: 'italic', color: 'var(--framboise)' }}>
                À 5 min de Poitiers, dans un cadre qui se prête au cocon. Pour 4-5 amies qui veulent vraiment se retrouver, ou pour un EVJF, un anniversaire qui marque, des retrouvailles qui durent.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Ce qui fait la magie" align="center">
              <span className="anim-title-underline">Ce qui rend ces 3 jours uniques</span>
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
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Les bonnes occasions" align="center">
              <span className="anim-title-underline">Quand vivre ça ensemble</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
            {OCCASIONS.map((o, i) => (
              <AnimateOnScroll key={o.t} delay={i * 90}>
                <div className="card anim-card-hover" style={{ padding: '28px 24px', height: '100%' }}>
                  <div style={{ fontSize: 42, marginBottom: 14 }}>{o.e}</div>
                  <h3 className="h-fredoka" style={{ fontSize: 19, color: 'var(--framboise)', margin: '0 0 10px', lineHeight: 1.25 }}>{o.t}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, opacity: 0.82, lineHeight: 1.6 }}>{o.d}</p>
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
              On organise ça avec vos copines ?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 32 }}>
              Réservez plusieurs places sur une date publique, ou demandez une privatisation pour un EVJF ou un anniversaire.
            </p>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ateliers-adultes/retraites-creatives" className="cta-pill anim-cta-pulse" style={{ boxShadow: '0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>
                Voir les dates &amp; réserver →
              </Link>
              <Link href="/contact?sujet=Retraite%20privatisée%20entre%20filles" className="cta-ghost" style={{ background: 'transparent', color: 'var(--creme)', borderColor: 'var(--creme)' }}>
                Privatiser pour notre groupe
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
