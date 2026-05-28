import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journée créative mère-fille — Couture & punch needle à Poitiers (Vienne 86)',
  description: '🎀 Une journée mère-fille pour reconnecter sans écran : couture, punch needle, repas partagé à Fontaine-le-Comte (5 min de Poitiers). 150€ pour deux (au lieu de 180€). Cadeau original pour anniversaire, fête des mères ou simplement profiter.',
  alternates: { canonical: 'https://atelierpicpaf.fr/journee-creative-mere-fille' },
  openGraph: {
    title: 'Journée créative mère-fille — L\'atelier Pic & Paf',
    description: 'Une journée pour vous deux. Couture, punch needle, repas inclus. 150€ duo à Fontaine-le-Comte (5 min Poitiers).',
    url: 'https://atelierpicpaf.fr/journee-creative-mere-fille',
    type: 'website',
  },
}

const PROGRAMME = [
  { heure: '10h', titre: 'On arrive', desc: 'Café + viennoiseries, on respire, on fait connaissance. Vous découvrez votre projet du jour.' },
  { heure: '10h30 – 12h30', titre: 'Matin créatif', desc: 'Vous commencez votre création, couture ou punch needle au choix. Je vous accompagne pas à pas, chacune à son rythme.' },
  { heure: '12h30 – 14h', titre: 'Repas partagé', desc: 'Repas maison fait par mes soins, vous n\'avez rien à apporter. Un moment chaleureux entre toutes.' },
  { heure: '14h – 17h', titre: 'Après-midi & finitions', desc: 'On termine les détails, on fait des photos fières de vos créations. Vous repartez chacune avec votre pépite.' },
]

const POURQUOI = [
  { e: '📵', t: 'Sans écran', d: 'Une journée entière où vos téléphones restent dans le sac. Juste vos deux mains qui créent.' },
  { e: '⏳', t: 'Du vrai temps', d: '6 heures côte à côte sans course. Pas une demi-heure entre deux rendez-vous.' },
  { e: '🎀', t: 'Un cadeau qui dure', d: 'Un moment partagé. Une création faite ensemble. Un souvenir qui reste.' },
  { e: '💞', t: 'Reconnecter', d: 'L\'occasion de parler, rire, se retrouver. Sans le quotidien qui nous coupe.' },
]

const OCCASIONS = [
  { e: '🎂', t: "Anniversaire de ta fille (10/12/14 ans)", d: "Une vraie alternative à la fête à 15 invitées : un moment fort à deux qu'elle se souviendra des années plus tard." },
  { e: '🌷', t: 'Fête des mères', d: 'Le cadeau que ta fille peut t\'offrir (ou que tu peux lui offrir). Plus original qu\'un parfum, plus durable qu\'un dîner.' },
  { e: '☀️', t: 'Vacances scolaires', d: 'Un point fort des vacances : sortir du quotidien, créer ensemble, repartir avec un projet fini.' },
  { e: '✨', t: 'Sans prétexte', d: 'Parce que vous le valez bien, et que les occasions on les fabrique. La plus belle raison, c\'est aucune raison.' },
]

const FAQS = [
  {
    q: "À partir de quel âge ma fille peut venir ?",
    r: "Pour les journées créatives, je conseille à partir de 10-12 ans (concentration sur 6h, vraie autonomie créative). Pour les plus jeunes (6-9 ans), je propose plutôt des ateliers parent-enfant plus courts ou des anniversaires couture sur 2-3h. Écris-moi, on trouve le bon format."
  },
  {
    q: "Et si on est plutôt mère-ado (16-25 ans) ?",
    r: "Parfait, c'est même l'âge idéal. À l'adolescence et au début de l'âge adulte, ces moments à deux sont rares et précieux. La journée créative offre un cadre détendu pour reconnecter sans confrontation : on crée côte à côte, on parle, on rit. C'est une formule qui marche très bien pour les mères-filles d'âge adulte."
  },
  {
    q: "On n'a jamais cousu ni l'une ni l'autre, c'est grave ?",
    r: "Pas du tout. La majorité des participantes débute. Je vous montre tout pas à pas, on prend le temps, vous ne faites jamais quelque chose sans accompagnement. La fierté de la première création, c'est exactement ce qu'on cherche."
  },
  {
    q: "Combien ça coûte exactement ?",
    r: "150€ pour vous deux, tout compris. Soit 75€ par personne (au lieu de 90€ en solo, c'est 30€ de promo \"duo\"). Sont inclus : matériel, machine, tissu, repas du midi, café, viennoiseries, goûter de l'après-midi. Possible en paiement 3× sans frais avec Klarna."
  },
  {
    q: "C'est où exactement et comment on arrive ?",
    r: "À Fontaine-le-Comte (Vienne 86), à 5 minutes au sud de Poitiers. Adresse précise envoyée à la réservation. Parking gratuit. Si vous venez de plus loin (Châtellerault, Niort, Loudun), c'est à 30-50 min selon votre point de départ."
  },
  {
    q: "On repart avec quoi concrètement ?",
    r: "Chacune sa création finie. Selon votre projet du jour : trousse, pochette, marque-page en couture, initiation punch needle (coussin ou déco murale), mini coussin, top simple... Je propose une sélection de projets accessibles à toutes, vous choisissez à l'arrivée selon vos envies."
  },
  {
    q: "Comment je réserve pour deux ?",
    r: "Sur la page Journées créatives ci-dessous, tu sélectionnes la date qui te va et tu indiques 2 places. Paiement sécurisé en ligne, possibilité de payer en 3× sans frais avec Klarna. Tu peux aussi me contacter directement si tu veux qu'on en parle avant."
  },
]

export default function JourneeMereFillePage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-mere-fille"
        data={[
          serviceJsonLd({
            name: 'Journée créative mère-fille — Couture & punch needle',
            description: "Une journée créative entre une mère et sa fille à Fontaine-le-Comte (Vienne 86), 5 min au sud de Poitiers. Couture ou punch needle au choix, repas inclus, accompagnement par Ludivine. 150€ pour deux personnes.",
            url: 'https://atelierpicpaf.fr/journee-creative-mere-fille',
            priceCentimes: 15000,
            audience: 'Mère-fille (ado ou adulte)',
            location: 'Fontaine-le-Comte',
            category: 'Atelier créatif mère-fille',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Journée mère-fille', url: 'https://atelierpicpaf.fr/journee-creative-mere-fille' },
          ]),
        ]}
      />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 0 70px', background: 'var(--creme-pale)' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ maxWidth: 880, textAlign: 'center', position: 'relative' }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Une journée rien que pour vous deux ~</span>
            <h1 className="sticker-title" style={{ fontSize: 'clamp(40px, 6vw, 76px)', margin: '14px 0 22px', lineHeight: 1.05 }}>
              Journée mère-fille créative
            </h1>
            <p style={{ fontSize: 19, color: 'var(--framboise)', fontWeight: 600, marginBottom: 26, opacity: 0.88 }}>
              Couture &amp; punch needle à Fontaine-le-Comte (Vienne 86) · 5 min au sud de Poitiers
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px', opacity: 0.86 }}>
              Sans écran. Sans course. Sans la to do list. Juste vous deux, vos deux mains, et le temps de créer ensemble. Pendant 6 heures, vous êtes les seules personnes qui comptent.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse">Voir les dates &amp; réserver ✨</Link>
              <Link href="/contact?sujet=Journée%20mère-fille" className="cta-ghost">Me contacter</Link>
            </div>
            <p className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', margin: '24px 0 0' }}>
              ~ 150€ à deux (au lieu de 180€) · 75€ par personne ~
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="stripes-band" />

      {/* INTRO ÉMOTIONNELLE */}
      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Pourquoi cette journée existe" align="center">
              <span className="anim-title-underline">Tu sens que ta fille grandit trop vite ?</span>
            </SectionTitle>
            <div style={{ fontSize: 17, lineHeight: 1.85, marginTop: 36, opacity: 0.88 }}>
              <p style={{ marginBottom: 16 }}>
                Tu sens que les écrans prennent toute la place. Que les conversations à table se sont raccourcies. Que ces moments à deux où tout est simple sont devenus rares.
              </p>
              <p style={{ marginBottom: 16 }}>
                Tu te dis qu&apos;un jour, tu vas vraiment prendre le temps. Mais le quotidien revient toujours plus vite que prévu.
              </p>
              <p style={{ marginBottom: 16 }}>
                À L&apos;atelier Pic &amp; Paf, j&apos;organise des <strong style={{ color: 'var(--framboise)', fontWeight: 600 }}>journées créatives mère-fille</strong> pensées pour ces moments-là. Une journée entière dans un lieu calme et chaleureux, à 5 minutes de Poitiers. Vous arrivez le matin, on coud, on prend le temps de manger ensemble, vous repartez à 17h avec une création faite de vos mains. Et surtout avec un souvenir partagé que les écrans ne pourront pas vous voler.
              </p>
              <p style={{ marginBottom: 16, fontStyle: 'italic', color: 'var(--framboise)' }}>
                Pas besoin d&apos;avoir cousu de votre vie. Pas besoin d&apos;être douée. Juste l&apos;envie de partager 6 heures où vous êtes les seules personnes qui comptent.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* POURQUOI CETTE JOURNÉE */}
      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="L'esprit Pic &amp; Paf" align="center">
              <span className="anim-title-underline">Ce qui fait la différence</span>
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

      {/* PROGRAMME DE LA JOURNÉE */}
      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Le déroulé d'une journée" align="center">
              <span className="anim-title-underline">À quoi ça ressemble ?</span>
            </SectionTitle>
            <p style={{ fontSize: 16, opacity: 0.82, textAlign: 'center', marginTop: 24, lineHeight: 1.7 }}>
              Une journée structurée mais détendue. Vous arrivez à 10h, vous repartez à 17h avec votre création.
            </p>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {PROGRAMME.map((p, i) => (
              <AnimateOnScroll key={p.heure} delay={i * 90}>
                <div className="anim-card-hover" style={{
                  display: 'grid',
                  gridTemplateColumns: '110px 1fr',
                  gap: 24,
                  padding: '20px 24px',
                  background: 'var(--creme-pale)',
                  borderRadius: 18,
                  border: '1.5px solid rgba(200,54,92,.18)',
                  alignItems: 'start',
                }}>
                  <div className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)', fontWeight: 700, lineHeight: 1.2 }}>{p.heure}</div>
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

      {/* TARIF — ARGUMENT CLÉ */}
      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 820, textAlign: 'center' }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Combien ça coûte ?" align="center">
              <span className="anim-title-underline">Le tarif duo, imbattable</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 22, maxWidth: 680, margin: '50px auto 0' }}>
            <AnimateOnScroll variant="scale-in">
              <div style={{
                padding: '32px 24px',
                background: 'var(--creme)',
                borderRadius: 24,
                border: '2px solid rgba(200,54,92,.2)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 13, opacity: 0.65, fontWeight: 600, marginBottom: 8 }}>SOLO</div>
                <div className="h-fredoka" style={{ fontSize: 52, color: 'var(--framboise)', lineHeight: 1 }}>90€</div>
                <div style={{ fontSize: 13.5, opacity: 0.7, marginTop: 8 }}>par personne</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={120} variant="scale-in">
              <div style={{
                padding: '32px 24px',
                background: 'var(--framboise)',
                color: 'var(--creme)',
                borderRadius: 24,
                textAlign: 'center',
                boxShadow: 'var(--shadow-framboise)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--creme)',
                  color: 'var(--framboise)',
                  fontFamily: 'var(--font-fredoka)',
                  fontWeight: 700,
                  fontSize: 13,
                  padding: '6px 14px',
                  borderRadius: 999,
                  border: '2px solid var(--framboise)',
                  whiteSpace: 'nowrap',
                }}>🎀 DUO MÈRE-FILLE</div>
                <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 600, marginBottom: 8, marginTop: 6 }}>DUO</div>
                <div className="h-fredoka" style={{ fontSize: 52, color: 'var(--creme)', lineHeight: 1 }}>150€</div>
                <div style={{ fontSize: 13.5, opacity: 0.9, marginTop: 8 }}>pour deux personnes</div>
                <div style={{ marginTop: 14, fontSize: 12.5, opacity: 0.85 }}>= <strong>75€ / personne</strong> (au lieu de 90€)</div>
              </div>
            </AnimateOnScroll>
          </div>
          <p style={{ fontSize: 16, opacity: 0.82, lineHeight: 1.7, marginTop: 36, maxWidth: 640, margin: '36px auto 0' }}>
            Tout est compris dans le tarif : matériel (tissu, mercerie, laine punch needle), repas du midi maison, café, viennoiseries, goûter de l&apos;après-midi. Tu n&apos;as rien à apporter.
          </p>
          <p className="h-caveat" style={{ fontSize: 24, color: 'var(--framboise)', marginTop: 20 }}>
            ~ Paiement possible en 3× sans frais avec Klarna ~
          </p>
        </div>
      </section>

      {/* QUAND OFFRIR / VIVRE CE MOMENT */}
      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="C'est quand le bon moment ?" align="center">
              <span className="anim-title-underline">Les occasions parfaites</span>
            </SectionTitle>
            <p style={{ fontSize: 16, opacity: 0.82, textAlign: 'center', marginTop: 24, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Une journée mère-fille, c&apos;est aussi un cadeau qu&apos;on peut offrir. Quelques idées :
            </p>
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

      {/* AVEC LUDIVINE */}
      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
            <AnimateOnScroll variant="scale-in">
              <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: 32, overflow: 'hidden', boxShadow: 'var(--shadow-framboise)', maxWidth: 460, margin: '0 auto', width: '100%' }}>
                <Image
                  src="/images/brand/ludivine-portrait.jpg"
                  alt="Ludivine, fondatrice de L'atelier Pic & Paf, à Fontaine-le-Comte près de Poitiers"
                  fill
                  sizes="(max-width: 768px) 90vw, 460px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <span className="h-caveat" style={{ fontSize: 26, color: 'var(--framboise)' }}>~ Votre hôte ~</span>
              <h2 className="h-fredoka" style={{ fontSize: 'clamp(30px,3.8vw,42px)', color: 'var(--framboise)', margin: '10px 0 22px', lineHeight: 1.1 }}>
                <span className="anim-title-underline">Avec Ludivine</span>
              </h2>
              <p style={{ fontSize: 17, opacity: 0.88, lineHeight: 1.75, marginBottom: 16 }}>
                Je suis Ludivine. Couturière depuis toujours, j&apos;ai créé L&apos;atelier Pic &amp; Paf pour transmettre ce qui me fait vibrer : créer de ses mains, prendre le temps, partager.
              </p>
              <p style={{ fontSize: 17, opacity: 0.88, lineHeight: 1.75, marginBottom: 16 }}>
                Les journées mère-fille, je les anime avec un soin particulier, parce que je sais ce que ces moments représentent. Pas de pression, pas de niveau requis, juste l&apos;envie de partager 6 heures où vous comptez l&apos;une pour l&apos;autre.
              </p>
              <p className="h-caveat" style={{ fontSize: 24, color: 'var(--framboise)', margin: '18px 0 0' }}>~ J&apos;ai hâte de vous accueillir ✨ ~</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Les questions qu'on me pose souvent" align="center">
              <span className="anim-title-underline">Vos questions, mes réponses</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQS.map((f, i) => (
              <FaqItem key={i} q={f.q} r={f.r} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '90px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 className="h-fredoka" style={{ fontSize: 'clamp(30px,4vw,44px)', color: 'var(--creme)', margin: '0 0 18px', lineHeight: 1.1 }}>
              Prête à lui offrir ce moment ?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 32 }}>
              Réserve votre journée mère-fille en quelques clics. Choisis la date, indique 2 places, paye en sécurité (3× sans frais possible). Je vous accueille à 10h le jour J.
            </p>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse" style={{ boxShadow: '0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>
                Voir les dates &amp; réserver →
              </Link>
              <Link href="/contact?sujet=Journée%20mère-fille" className="cta-ghost" style={{ background: 'transparent', color: 'var(--creme)', borderColor: 'var(--creme)' }}>
                J&apos;ai une question
              </Link>
            </div>
            <p className="h-caveat" style={{ fontSize: 20, color: 'var(--creme)', opacity: 0.85, margin: '28px 0 0' }}>
              ~ 150€ pour vous deux · paiement 3× sans frais avec Klarna ~
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
