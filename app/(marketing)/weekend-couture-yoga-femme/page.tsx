import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weekend couture & yoga femme — Retraite créative à Fontaine-le-Comte (Vienne 86)',
  description: '🌿 Un weekend pour ralentir : couture + punch needle + yoga + repas maison à 5 min de Poitiers. 3 jours dans un gîte avec Ludivine. 390€ tout compris, paiement 3× sans frais Klarna.',
  alternates: { canonical: 'https://atelierpicpaf.fr/weekend-couture-yoga-femme' },
  openGraph: {
    title: 'Weekend couture & yoga — L\'atelier Pic & Paf',
    description: '3 jours pour ralentir, créer, respirer. Gîte à Fontaine-le-Comte (Vienne 86). 390€ tout compris.',
    url: 'https://atelierpicpaf.fr/weekend-couture-yoga-femme',
    type: 'website',
  },
}

const PROGRAMME = [
  { jour: 'Vendredi soir', desc: "Arrivée au gîte à partir de 18h. Apéro de bienvenue, présentation du weekend, premier dîner cuisiné maison. Ambiance posée." },
  { jour: 'Samedi matin', desc: "Yoga doux au réveil. Petit déjeuner. Atelier créatif guidé par Ludivine : couture ou punch needle selon le projet du weekend." },
  { jour: 'Samedi midi & après-midi', desc: "Repas partagé. Temps libre : continuer son projet en autonomie, balade dans la nature, sieste. Puis nouvel atelier en début de soirée." },
  { jour: 'Dimanche matin', desc: "Yoga ou balade au réveil. Petit déjeuner. Finitions du projet, dernières créations." },
  { jour: 'Dimanche midi', desc: "Repas. Photos finales fières des créations. Au revoir et départ vers 16h." },
]

const INCLUS = [
  { e: '🛏️', t: 'Hébergement', d: 'Chambre partagée (2 lits simples) dans un gîte chaleureux à Fontaine-le-Comte.' },
  { e: '🍽️', t: 'Tous les repas', d: 'Du vendredi soir au dimanche midi. Cuisinés maison par mes soins, en local.' },
  { e: '🧘‍♀️', t: 'Yoga', d: '2 séances de yoga doux, accessible à toutes (même les vraies débutantes).' },
  { e: '🧵', t: 'Atelier créatif guidé', d: 'Couture ou punch needle, matériel et patron fournis, accompagnement par Ludivine.' },
]

const FAQS = [
  {
    q: "Combien coûte le weekend tout compris ?",
    r: "390€ par personne, tout compris : hébergement en chambre partagée, tous les repas du vendredi soir au dimanche midi, matériel créatif, 2 séances de yoga, accompagnement. Paiement possible en 3× sans frais avec Klarna (130€/mois)."
  },
  {
    q: "C'est combien de participantes ?",
    r: "9 places maximum pour préserver une ambiance intime et un accompagnement de qualité. C'est volontaire : on se connaît tous le dimanche soir."
  },
  {
    q: "Je n'ai jamais fait de yoga, c'est gênant ?",
    r: "Pas du tout. Le yoga proposé est doux et accessible à toutes les morphologies et tous les niveaux, débutantes comprises. C'est aussi optionnel : si tu préfères dormir ou te balader pendant la séance, c'est OK."
  },
  {
    q: "Je n'ai jamais cousu, est-ce que c'est pour moi ?",
    r: "Oui. Les ateliers sont conçus pour être accessibles aux débutantes complètes. Je t'accompagne pas-à-pas, on prend le temps. La fierté du projet fini est garantie."
  },
  {
    q: "Le gîte, c'est où exactement ?",
    r: "À Fontaine-le-Comte (Vienne 86), à 5 minutes au sud de Poitiers. Un gîte au calme, dans la nature. Adresse précise envoyée à la réservation. Parking gratuit. Accessible facilement depuis le Grand Poitiers, Châtellerault, Niort."
  },
  {
    q: "C'est entre femmes uniquement ?",
    r: "Oui, c'est volontaire. Les retraites créatives sont des moments entre femmes : ça change l'ambiance, ça permet de baisser la garde, de parler vrai. C'est précisé dans la philosophie de ces weekends."
  },
  {
    q: "Comment je réserve ?",
    r: "Sur la page Retraites créatives, tu vois les dates et tu choisis. Paiement sécurisé en ligne, possible en 3× sans frais avec Klarna. Tu peux aussi me contacter directement pour échanger avant de réserver."
  },
]

export default function WeekendCoutureYogaPage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-weekend-yoga"
        data={[
          serviceJsonLd({
            name: 'Weekend couture & yoga femme — Retraite créative',
            description: "Un weekend de ressourcement créatif entre femmes à Fontaine-le-Comte (Vienne 86), 5 min au sud de Poitiers. Couture, punch needle, yoga, repas maison, 9 participantes maximum. 390€ tout compris.",
            url: 'https://atelierpicpaf.fr/weekend-couture-yoga-femme',
            priceCentimes: 39000,
            audience: 'Adultes femmes',
            location: 'Fontaine-le-Comte',
            category: 'Retraite créative weekend',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Weekend couture & yoga', url: 'https://atelierpicpaf.fr/weekend-couture-yoga-femme' },
          ]),
        ]}
      />

      <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 0 70px', background: 'var(--creme-pale)' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ maxWidth: 880, textAlign: 'center', position: 'relative' }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Pour ralentir, créer, respirer ~</span>
            <h1 className="sticker-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '14px 0 22px', lineHeight: 1.05 }}>
              Weekend<br/>couture &amp; yoga
            </h1>
            <p style={{ fontSize: 19, color: 'var(--framboise)', fontWeight: 600, marginBottom: 26, opacity: 0.88 }}>
              3 jours entre femmes à Fontaine-le-Comte (Vienne 86) · 5 min au sud de Poitiers
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px', opacity: 0.86 }}>
              Du vendredi soir au dimanche 16h, dans un gîte au calme. Couture, punch needle, yoga doux, repas maison cuisinés ensemble, vraies pauses. Pas une demi-journée. Trois jours pour ralentir vraiment.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
              <Link href="/ateliers-adultes/retraites-creatives" className="cta-pill anim-cta-pulse">Voir les dates &amp; réserver ✨</Link>
              <Link href="/contact?sujet=Retraite%20weekend%20couture%20yoga" className="cta-ghost">Me contacter</Link>
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
            <SectionTitle kicker="Pourquoi ce weekend" align="center">
              <span className="anim-title-underline">Tu as besoin de souffler ?</span>
            </SectionTitle>
            <div style={{ fontSize: 17, lineHeight: 1.85, marginTop: 36, opacity: 0.88 }}>
              <p style={{ marginBottom: 16 }}>
                Tu sens que tu cours après le temps. Que tu donnes beaucoup et que tu te retrouves peu. Que les soirées sont avalées par les écrans et les weekends par les courses.
              </p>
              <p style={{ marginBottom: 16 }}>
                Un weekend, ce n&apos;est pas long, mais c&apos;est <strong style={{ color: 'var(--framboise)', fontWeight: 600 }}>trois jours hors du temps</strong>. Trois jours dans un gîte chaleureux à 5 min de Poitiers, avec 8 autres femmes qui ont envie de la même chose : ralentir, créer, respirer, manger bon, dormir bien.
              </p>
              <p style={{ marginBottom: 16 }}>
                Au programme : yoga doux le matin, ateliers créatifs guidés (couture ou punch needle), repas cuisinés maison par mes soins, balades dans la nature, soirées tranquilles. Pas de planning serré, pas de contrainte. Du temps pour soi, en bonne compagnie.
              </p>
              <p style={{ marginBottom: 16, fontStyle: 'italic', color: 'var(--framboise)' }}>
                Pas besoin d&apos;avoir cousu de ta vie. Pas besoin de savoir faire le yoga. Juste l&apos;envie d&apos;une vraie pause.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Ce qui est inclus" align="center">
              <span className="anim-title-underline">Tout est prévu</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 22 }}>
            {INCLUS.map((p, i) => (
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
            <SectionTitle kicker="Le déroulé du weekend" align="center">
              <span className="anim-title-underline">3 jours pour ralentir</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {PROGRAMME.map((p, i) => (
              <AnimateOnScroll key={p.jour} delay={i * 90}>
                <div className="anim-card-hover" style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, padding: '20px 24px', background: 'var(--creme-pale)', borderRadius: 18, border: '1.5px solid rgba(200,54,92,.18)', alignItems: 'start' }}>
                  <div className="h-fredoka" style={{ fontSize: 17, color: 'var(--framboise)', fontWeight: 700 }}>{p.jour}</div>
                  <p style={{ margin: 0, fontSize: 15, opacity: 0.85, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 820, textAlign: 'center' }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Le tarif" align="center">
              <span className="anim-title-underline">390€ tout compris</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 40, padding: '40px 32px', background: 'var(--framboise)', color: 'var(--creme)', borderRadius: 28, maxWidth: 460, margin: '40px auto 0' }}>
            <div className="h-fredoka" style={{ fontSize: 72, lineHeight: 1 }}>390€</div>
            <div style={{ fontSize: 15, marginTop: 8, opacity: 0.95 }}>par personne · 3 jours tout compris</div>
            <div style={{ fontSize: 14, marginTop: 18, opacity: 0.9, padding: '12px 18px', background: 'rgba(251,244,228,.15)', borderRadius: 12, display: 'inline-block' }}>
              ou 3× 130€/mois avec Klarna
            </div>
          </div>
          <p style={{ fontSize: 15, opacity: 0.78, lineHeight: 1.7, marginTop: 28, maxWidth: 580, margin: '28px auto 0' }}>
            Hébergement, repas, yoga, ateliers créatifs, matériel : tout est inclus. Tu n&apos;as rien à apporter.
          </p>
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
              Prête à débrancher trois jours ?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 32 }}>
              9 places seulement par retraite. Réserve la tienne avant qu&apos;il soit complet.
            </p>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ateliers-adultes/retraites-creatives" className="cta-pill anim-cta-pulse" style={{ boxShadow: '0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>
                Voir les dates &amp; réserver →
              </Link>
              <Link href="/contact?sujet=Retraite%20weekend%20couture%20yoga" className="cta-ghost" style={{ background: 'transparent', color: 'var(--creme)', borderColor: 'var(--creme)' }}>
                J&apos;ai une question
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
