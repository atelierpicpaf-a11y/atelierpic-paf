import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { CrossPromo } from '@/components/sections/cross-promo'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journée créative couture débutante — Apprendre sans pression à Poitiers (Vienne 86)',
  description: '🧵 Tu n\'as jamais cousu ? Une journée créative pensée pour les vraies débutantes : couture ou punch needle, 5 min de Poitiers. Tout fourni, 90€ tout compris. Pas de niveau requis, juste l\'envie.',
  alternates: { canonical: 'https://atelierpicpaf.fr/journee-creative-debutante' },
  openGraph: {
    title: 'Journée créative débutante — L\'atelier Pic & Paf',
    description: 'Apprendre sans pression. Couture ou punch needle, journée tout compris à Fontaine-le-Comte (Vienne 86).',
    url: 'https://atelierpicpaf.fr/journee-creative-debutante',
    type: 'website',
  },
}

const PROGRAMME = [
  { heure: '10h', titre: 'On arrive en douceur', desc: 'Café, viennoiseries. On fait connaissance. Je te montre le matériel sans pression.' },
  { heure: '10h30 – 12h30', titre: 'Premier projet', desc: 'On choisit ensemble un projet adapté à ton niveau (zéro à confirmé). Je t\'accompagne pas à pas.' },
  { heure: '12h30 – 14h', titre: 'Repas partagé', desc: 'Repas maison cuisiné par mes soins, on mange ensemble. Tu poses tes questions, on rigole.' },
  { heure: '14h – 17h', titre: 'Finitions & fierté', desc: 'On termine, on photographie ta création. Tu repars avec, et tu repars avec la confiance que tu peux le refaire.' },
]

const RASSURANT = [
  { e: '🤚', t: 'Zéro pression', d: 'Pas de jugement, pas d\'évaluation. Juste ton rythme et ton plaisir.' },
  { e: '🪡', t: 'Accompagnement pas-à-pas', d: 'Je te montre, je guide tes mains s\'il faut. Tu ne fais jamais quelque chose sans aide.' },
  { e: '🛠️', t: 'Tout est fourni', d: 'Matériel, tissu, mercerie, laine. Tu n\'as rien à acheter, rien à prévoir.' },
  { e: '🌱', t: 'Projet adapté', d: 'On choisit ton projet à ton niveau. Pas de mission impossible, que des réussites.' },
]

const PROJETS = [
  { e: '🎀', t: 'Trousse / pochette', d: 'Le projet débutante par excellence : zip cousu, doublure, finitions propres.' },
  { e: '📖', t: 'Marque-page (couture)', d: 'Petit projet rapide en tissu, idéal pour découvrir la couture sans pression. Fini en 1-2h.' },
  { e: '🪡', t: 'Initiation punch needle', d: "L'aiguille magique avec laine colorée sur tambour : motif simple, technique tendance, résultat bluffant." },
  { e: '🌸', t: 'Coussin déco simple', d: 'Tissu choisi, couture droite, fermeture invisible. Tu repars avec un objet utile.' },
  { e: '👒', t: 'Bandeau magique', d: 'Un accessoire qu\'on porte tout de suite. Couture rapide et résultat valorisant.' },
]

const FAQS = [
  {
    q: "Je n'ai vraiment jamais cousu de ma vie, c'est possible ?",
    r: "Oui, c'est même la majorité des participantes. Cette journée est conçue exactement pour ça : démystifier la couture, te faire toucher le matériel sans pression, et te montrer que c'est plus accessible que tu crois. Tu repartiras avec un projet fini ET la confiance que tu peux recommencer."
  },
  {
    q: "Quel projet je vais coudre ?",
    r: "Tu choisis à l'arrivée parmi des projets adaptés au niveau débutant : trousse, pochette, marque-page en couture, initiation punch needle, coussin simple, bandeau magique. Je te conseille selon ton envie et ce qui te parle."
  },
  {
    q: "Est-ce que je peux faire du punch needle plutôt que de la couture ?",
    r: "Oui ! Le punch needle (aiguille magique avec laine colorée sur tambour) est l'autre activité phare de l'atelier. Très accessible, résultat bluffant, parfait pour les vraies débutantes. Tu choisis le matin entre couture et punch needle selon tes envies."
  },
  {
    q: "Combien ça coûte ?",
    r: "90€ pour une journée tout compris : matériel (tissu, mercerie, laine), repas du midi maison, café, viennoiseries, goûter. Possibilité de paiement en 3× sans frais avec Klarna. Si tu viens à deux, c'est 150€ pour les deux (-30€ de promo)."
  },
  {
    q: "Et si je suis intimidée par la machine à coudre ?",
    r: "C'est normal et fréquent. Je te montre, on prend le temps, on essaie sur des chutes. La machine fait peur tant qu'on ne l'a pas en main. Au bout de 30 minutes, tu seras à l'aise. Tu peux aussi choisir le punch needle qui ne nécessite que de la laine et un tambour."
  },
  {
    q: "Où c'est et comment on vient ?",
    r: "À Fontaine-le-Comte (Vienne 86), à 5 minutes au sud de Poitiers. Adresse précise envoyée à la réservation. Parking gratuit. Accessible depuis Châtellerault (30 min), Niort (45 min), Loudun (45 min)."
  },
  {
    q: "Comment je réserve ?",
    r: "Sur la page Journées créatives, tu choisis la date qui te va et tu confirmes ta place. Paiement en ligne sécurisé. Si tu as une question avant de réserver, contacte-moi, je te réponds en moins de 24h."
  },
]

export default function DebutantePage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-debutante"
        data={[
          serviceJsonLd({
            name: 'Journée créative débutante — Couture & punch needle',
            description: "Une journée pensée pour les vraies débutantes en couture ou punch needle, à Fontaine-le-Comte (Vienne 86), 5 min au sud de Poitiers. Accompagnement pas-à-pas par Ludivine. 90€ tout compris.",
            url: 'https://atelierpicpaf.fr/journee-creative-debutante',
            priceCentimes: 9000,
            audience: 'Adultes débutantes',
            location: 'Fontaine-le-Comte',
            category: 'Atelier débutant',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Journée débutante', url: 'https://atelierpicpaf.fr/journee-creative-debutante' },
          ]),
        ]}
      />

      <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 0 70px', background: 'var(--creme-pale)' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ maxWidth: 880, textAlign: 'center', position: 'relative' }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Tu n&apos;as jamais cousu ? Parfait. ~</span>
            <h1 className="sticker-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '14px 0 22px', lineHeight: 1.05 }}>
              Journée créative<br/>débutante
            </h1>
            <p style={{ fontSize: 19, color: 'var(--framboise)', fontWeight: 600, marginBottom: 26, opacity: 0.88 }}>
              Couture &amp; punch needle accessibles à toutes. Aucun niveau requis.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px', opacity: 0.86 }}>
              Une journée pensée pour celles qui ont envie de commencer sans savoir par où. Tu arrives, je t&apos;accompagne pas à pas, tu repars à 17h avec une création faite de tes mains et la fierté qui va avec.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse">Voir les dates &amp; réserver ✨</Link>
              <Link href="/contact?sujet=Journée%20débutante" className="cta-ghost">J&apos;ai une question</Link>
            </div>
            <p className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', margin: '24px 0 0' }}>
              ~ 90€ tout compris · paiement 3× sans frais ~
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="stripes-band" />

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Pour les vraies débutantes" align="center">
              <span className="anim-title-underline">Tu te dis que c&apos;est pas pour toi ?</span>
            </SectionTitle>
            <div style={{ fontSize: 17, lineHeight: 1.85, marginTop: 36, opacity: 0.88 }}>
              <p style={{ marginBottom: 16 }}>
                Tu rêves d&apos;apprendre à coudre depuis longtemps, mais tu te dis que c&apos;est compliqué. Que tu vas être nulle. Que tout le monde sera plus à l&apos;aise que toi. Que le matériel coûte cher et que tu vas le payer pour le ranger dans un placard.
              </p>
              <p style={{ marginBottom: 16 }}>
                Cette journée existe exactement pour casser cette barrière. <strong style={{ color: 'var(--framboise)', fontWeight: 600 }}>Aucun niveau requis</strong>. La majorité des participantes commence ici sa première création. Je t&apos;accompagne pas à pas, le matériel est fourni, tu n&apos;as rien à acheter, rien à prévoir. Juste à venir et te laisser guider.
              </p>
              <p style={{ marginBottom: 16, fontStyle: 'italic', color: 'var(--framboise)' }}>
                À la fin de la journée, tu repars avec ta création finie. Et avec quelque chose de plus précieux : la confiance que tu peux recommencer chez toi.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Ce qui te rassure" align="center">
              <span className="anim-title-underline">Pourquoi tu peux y arriver</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 22 }}>
            {RASSURANT.map((p, i) => (
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
              <span className="anim-title-underline">Ta première journée pas à pas</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {PROGRAMME.map((p, i) => (
              <AnimateOnScroll key={p.heure} delay={i * 90}>
                <div className="anim-card-hover" style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 24, padding: '20px 24px', background: 'var(--creme-pale)', borderRadius: 18, border: '1.5px solid rgba(200,54,92,.18)', alignItems: 'start' }}>
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
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Quels projets" align="center">
              <span className="anim-title-underline">Tu choisis ton projet</span>
            </SectionTitle>
            <p style={{ fontSize: 16, opacity: 0.82, textAlign: 'center', marginTop: 24, lineHeight: 1.7 }}>
              Tu choisis à l&apos;arrivée parmi des projets accessibles aux vraies débutantes. Voici les classiques :
            </p>
          </AnimateOnScroll>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22 }}>
            {PROJETS.map((p, i) => (
              <AnimateOnScroll key={p.t} delay={i * 90}>
                <div className="card anim-card-hover" style={{ padding: '26px 22px', textAlign: 'center' }}>
                  <div style={{ fontSize: 38, marginBottom: 10 }}>{p.e}</div>
                  <h3 className="h-fredoka" style={{ fontSize: 17, color: 'var(--framboise)', margin: '0 0 8px' }}>{p.t}</h3>
                  <p style={{ margin: 0, fontSize: 13.5, opacity: 0.82, lineHeight: 1.55 }}>{p.d}</p>
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
              Prête à te lancer ?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 32 }}>
              Choisis ta date, réserve ta place. Je t&apos;attends à 10h avec le matériel prêt et tout ce qu&apos;il faut pour te faire passer une journée dont tu seras fière.
            </p>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse" style={{ boxShadow: '0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>
                Voir les dates &amp; réserver →
              </Link>
              <Link href="/contact?sujet=Journée%20débutante" className="cta-ghost" style={{ background: 'transparent', color: 'var(--creme)', borderColor: 'var(--creme)' }}>
                J&apos;ai une question
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
