import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { CrossPromo } from '@/components/sections/cross-promo'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journée créative entre copines — Sortie femme couture & punch needle à Poitiers (Vienne 86)',
  description: '💞 Une journée entre copines à Fontaine-le-Comte (5 min Poitiers) : couture, punch needle, repas maison. Idéale EVJF, anniversaire, sortie filles. 75€ par personne en duo. Réservation en ligne.',
  alternates: { canonical: 'https://atelierpicpaf.fr/journee-creative-entre-copines' },
  openGraph: {
    title: 'Journée créative entre copines — L\'atelier Pic & Paf',
    description: 'Une journée à Poitiers pour les sorties filles : couture, punch needle, repas inclus. À partir de 90€/personne.',
    url: 'https://atelierpicpaf.fr/journee-creative-entre-copines',
    type: 'website',
  },
}

const PROGRAMME = [
  { heure: '10h', titre: 'Accueil café', desc: 'Café, viennoiseries. Les retrouvailles, les rires, les nouvelles.' },
  { heure: '10h30 – 12h30', titre: 'Matin créatif', desc: 'On crée. Chacune avance à son rythme. Je vous accompagne, on rigole.' },
  { heure: '12h30 – 14h', titre: 'Repas partagé', desc: 'Repas maison, tablée conviviale, le moment où les conversations sont les meilleures.' },
  { heure: '14h – 17h', titre: 'Après-midi & photos', desc: 'On termine les détails, on prend des photos fières (oui, pour Insta aussi). Vous repartez chacune avec votre création.' },
]

const POURQUOI = [
  { e: '🫶', t: 'Sans charge mentale', d: 'Tu poses tout dehors : boulot, conjoint, enfants, courses. Une journée pour toi (et vous).' },
  { e: '🤣', t: 'Du vrai rire', d: 'Le genre de fous rires qu\'on n\'a plus le temps d\'avoir. Garantis sur facture.' },
  { e: '🍷', t: 'Une vraie pause', d: 'Pas un café entre deux rendez-vous. 6 heures hors du quotidien.' },
  { e: '✨', t: 'Un souvenir', d: 'Une création faite ensemble. Un moment partagé. Une photo de groupe. Tout y est.' },
]

const OCCASIONS = [
  { e: '👰', t: "EVJF (enterrement de vie de jeune fille)", d: "Une alternative classe et originale aux formules bruyantes. Créatif, calme, beau souvenir." },
  { e: '🎂', t: "Anniversaire d'une copine", d: "Le cadeau qui marque : un moment à vivre ensemble. Bien plus qu'un coffret de plus." },
  { e: '🌷', t: "Sortie filles printemps / été", d: "Une demi-journée hors quotidien, dans un cadre détendu, sans organiser quoi que ce soit." },
  { e: '🎉', t: "Fête de fin d'année", d: "Sortie d'équipe, sortie d'amies, sortie de mères au pair. Un moment qui change vraiment." },
]

const FAQS = [
  {
    q: "On peut venir à plusieurs copines, vous avez de la place ?",
    r: "Oui ! Les journées créatives accueillent 8 personnes max, ce qui laisse de la place pour des groupes de 4 à 8 copines. Si vous êtes plus, contactez-moi, je peux organiser une session privatisée rien que pour vous."
  },
  {
    q: "C'est combien par personne ?",
    r: "90€ par personne en solo, ou 75€ par personne en duo (150€ pour deux). Pour un groupe de 4-8, vous pouvez choisir l'une ou l'autre formule selon vos préférences. Tout est compris : matériel, repas du midi, café, goûter."
  },
  {
    q: "On peut privatiser la journée pour notre groupe ?",
    r: "Oui, sur demande. Si vous êtes 6 à 8 copines et que vous voulez avoir la journée pour vous seules, je peux organiser une session privée à une date qui vous arrange. Tarif identique, ambiance personnalisée. Contactez-moi avec votre projet."
  },
  {
    q: "On n'a jamais cousu, c'est gênant ?",
    r: "Pas du tout, c'est même le cas le plus fréquent. Je vous accompagne pas à pas, vous ne faites jamais quelque chose sans aide. La majorité des participantes débute. La fierté de la première création, c'est exactement ce qu'on cherche."
  },
  {
    q: "Pour un EVJF, vous avez des formules spéciales ?",
    r: "Oui. Pour un EVJF, je peux personnaliser : projet thématique (couronne, accessoire de mariée), choix du repas, surprises pour la future mariée. Contactez-moi en amont avec les détails de votre groupe et de la date, je construis l'offre avec vous."
  },
  {
    q: "Où c'est, comment on vient ?",
    r: "À Fontaine-le-Comte (Vienne 86), à 5 min au sud de Poitiers. Parking gratuit. Accessible depuis tout le Grand Poitiers, Châtellerault, Niort. Adresse précise envoyée à la réservation."
  },
  {
    q: "Comment on réserve à plusieurs ?",
    r: "Sur la page Journées créatives, tu choisis la date et le nombre de places (jusqu'à 8). Paiement en ligne. Si tu veux organiser un EVJF ou une privatisation, contacte-moi directement, je m'occupe du reste."
  },
]

export default function EntreCopinesPage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-copines"
        data={[
          serviceJsonLd({
            name: 'Journée créative entre copines — Couture & punch needle',
            description: "Une journée entre copines à Fontaine-le-Comte (Vienne 86), 5 min au sud de Poitiers. Couture ou punch needle, repas inclus, 8 places max. EVJF, anniversaire, sortie filles. 90€ solo / 150€ duo / privatisation possible.",
            url: 'https://atelierpicpaf.fr/journee-creative-entre-copines',
            priceCentimes: 9000,
            audience: 'Adultes femmes (entre copines)',
            location: 'Fontaine-le-Comte',
            category: 'Atelier créatif entre copines',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Journée entre copines', url: 'https://atelierpicpaf.fr/journee-creative-entre-copines' },
          ]),
        ]}
      />

      <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 0 70px', background: 'var(--creme-pale)' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ maxWidth: 880, textAlign: 'center', position: 'relative' }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Pour les sorties entre filles ~</span>
            <h1 className="sticker-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '14px 0 22px', lineHeight: 1.05 }}>
              Journée entre<br/>copines
            </h1>
            <p style={{ fontSize: 19, color: 'var(--framboise)', fontWeight: 600, marginBottom: 26, opacity: 0.88 }}>
              Couture &amp; punch needle à 5 min de Poitiers. Repas inclus. Rires garantis.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px', opacity: 0.86 }}>
              Une vraie sortie entre filles, sans la charge mentale, sans la to do list, sans la course. 6 heures pour créer, manger, rire, sans avoir à organiser quoi que ce soit. EVJF, anniversaire, sortie de fin d&apos;année, ou juste parce que.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse">Voir les dates &amp; réserver ✨</Link>
              <Link href="/contact?sujet=Journée%20entre%20copines" className="cta-ghost">Privatiser pour mon groupe</Link>
            </div>
            <p className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', margin: '24px 0 0' }}>
              ~ 90€ solo · 75€/pers en duo · privatisation possible ~
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="stripes-band" />

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Pour tes copines (et toi)" align="center">
              <span className="anim-title-underline">Une vraie sortie qui change</span>
            </SectionTitle>
            <div style={{ fontSize: 17, lineHeight: 1.85, marginTop: 36, opacity: 0.88 }}>
              <p style={{ marginBottom: 16 }}>
                Tu sais ce que c&apos;est. La to do list. Le boulot qui déborde. Le conjoint, les enfants, les courses, le linge. Et nous, dans tout ça ?
              </p>
              <p style={{ marginBottom: 16 }}>
                Une sortie entre copines, ça devrait être simple. Mais c&apos;est souvent l&apos;une qui organise tout, l&apos;autre qui réserve, une troisième qui annule. Au final, ça devient une charge de plus.
              </p>
              <p style={{ marginBottom: 16 }}>
                À L&apos;atelier Pic &amp; Paf, je vous propose une <strong style={{ color: 'var(--framboise)', fontWeight: 600 }}>journée créative clé en main</strong>. Vous arrivez à 10h, vous repartez à 17h. Entre temps : couture ou punch needle, repas maison fait par mes soins, café, viennoiseries, goûter, et surtout 6 heures sans organisation, sans interruption, juste vous.
              </p>
              <p style={{ marginBottom: 16, fontStyle: 'italic', color: 'var(--framboise)' }}>
                Idéale pour un EVJF, un anniversaire de copine, une sortie de fin d&apos;année, ou simplement parce qu&apos;il est temps de se voir.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Pourquoi ça marche" align="center">
              <span className="anim-title-underline">Ce qui rend la journée spéciale</span>
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
            <SectionTitle kicker="Le déroulé" align="center">
              <span className="anim-title-underline">Une journée type</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {PROGRAMME.map((p, i) => (
              <AnimateOnScroll key={p.heure} delay={i * 90}>
                <div className="anim-card-hover" style={{
                  display: 'grid', gridTemplateColumns: '110px 1fr', gap: 24,
                  padding: '20px 24px', background: 'var(--creme-pale)', borderRadius: 18,
                  border: '1.5px solid rgba(200,54,92,.18)', alignItems: 'start',
                }}>
                  <div className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)', fontWeight: 700 }}>{p.heure}</div>
                  <div>
                    <h3 className="h-fredoka" style={{ fontSize: 19, color: 'var(--framboise)', margin: '0 0 6px' }}>{p.titre}</h3>
                    <p style={{ margin: 0, fontSize: 15, opacity: 0.85, lineHeight: 1.55 }}>{p.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 820, textAlign: 'center' }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Les tarifs" align="center">
              <span className="anim-title-underline">Selon votre format</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 18, maxWidth: 680, margin: '40px auto 0' }}>
            <div style={{ padding: '28px 22px', background: 'var(--creme)', borderRadius: 22, border: '2px solid rgba(200,54,92,.2)' }}>
              <div style={{ fontSize: 13, opacity: 0.65, fontWeight: 600 }}>SOLO</div>
              <div className="h-fredoka" style={{ fontSize: 44, color: 'var(--framboise)', lineHeight: 1, margin: '6px 0' }}>90€</div>
              <div style={{ fontSize: 13, opacity: 0.7 }}>par personne</div>
            </div>
            <div style={{ padding: '28px 22px', background: 'var(--framboise)', color: 'var(--creme)', borderRadius: 22 }}>
              <div style={{ fontSize: 13, opacity: 0.9, fontWeight: 600 }}>EN DUO</div>
              <div className="h-fredoka" style={{ fontSize: 44, color: 'var(--creme)', lineHeight: 1, margin: '6px 0' }}>75€</div>
              <div style={{ fontSize: 13, opacity: 0.9 }}>par personne (150€ duo)</div>
            </div>
            <div style={{ padding: '28px 22px', background: 'var(--creme)', borderRadius: 22, border: '2px solid rgba(200,54,92,.2)' }}>
              <div style={{ fontSize: 13, opacity: 0.65, fontWeight: 600 }}>GROUPE PRIVÉ</div>
              <div className="h-fredoka" style={{ fontSize: 28, color: 'var(--framboise)', lineHeight: 1.1, margin: '10px 0' }}>Sur devis</div>
              <div style={{ fontSize: 12.5, opacity: 0.7 }}>6-8 personnes, journée privatisée</div>
            </div>
          </div>
          <p style={{ fontSize: 15, opacity: 0.78, lineHeight: 1.7, marginTop: 28 }}>
            Tarifs tout compris : matériel, repas, café, goûter. Paiement en 3× sans frais avec Klarna.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Les bonnes occasions" align="center">
              <span className="anim-title-underline">Quand venir entre copines</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
            {OCCASIONS.map((o, i) => (
              <AnimateOnScroll key={o.t} delay={i * 100}>
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

      <CrossPromo />
      <section style={{ padding: '90px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 className="h-fredoka" style={{ fontSize: 'clamp(30px,4vw,44px)', color: 'var(--creme)', margin: '0 0 18px', lineHeight: 1.1 }}>
              On cale ça avec vos copines ?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 32 }}>
              Pour une journée publique, choisis la date et le nombre de places. Pour une privatisation (EVJF, anniversaire, fête de groupe), contacte-moi directement.
            </p>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse" style={{ boxShadow: '0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>
                Voir les dates &amp; réserver →
              </Link>
              <Link href="/contact?sujet=Privatisation%20entre%20copines" className="cta-ghost" style={{ background: 'transparent', color: 'var(--creme)', borderColor: 'var(--creme)' }}>
                Privatiser pour mon groupe
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
