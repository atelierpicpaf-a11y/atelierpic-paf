import Image from 'next/image'
import { Fee } from '@/components/brand/fee'
import { Bobines } from '@/components/brand/bobines'
import { Logo } from '@/components/brand/logo'
import { SectionTitle } from '@/components/sections/section-title'
import { HomeEnfantsGrid } from '@/components/sections/home-enfants-grid'
import { HomeNewsletter } from '@/components/sections/home-newsletter'
import { KlarnaBadge } from '@/components/sections/klarna-badge'
import { AvisForm } from '@/components/sections/avis-form'
import { CrossPromo } from '@/components/sections/cross-promo'
import { DoodleHeart, DoodleFlower } from '@/components/brand/doodles'
import { createClient } from '@/lib/supabase/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ateliers créatifs à Poitiers · Couture, punch needle, journées et retraites",
  description: "🧵 Atelier créatif Poitiers : couture enfants dès 6 ans en Vienne (86) et Deux-Sèvres (79), journées créatives et retraites weekend pour adultes à Fontaine-le-Comte (5 min de Poitiers). Punch needle, anniversaires, interventions écoles. Réservation en ligne, paiement 3× sans frais.",
}

export default async function HomePage() {
  const supabase = await createClient()
  const nowIso = new Date().toISOString()
  const { data: ateliers } = await supabase
    .from('ateliers_enfants')
    .select('*')
    .eq('actif', true)
    .gte('date_atelier', nowIso)
    .order('date_atelier', { ascending: true })
    .limit(3)

  const enfantsSource = ateliers ?? []

  // Avis publiés (modérés). Si aucun, on garde 3 témoignages de référence.
  const { data: avisPublies } = await supabase
    .from('temoignages')
    .select('*')
    .eq('publie', true)
    .order('created_at', { ascending: false })
    .limit(6)

  const COULEURS = ['var(--menthe)', 'var(--rose)', 'var(--menthe)', 'var(--rose)']
  const temoignagesDefaut = [
    { who: 'Camille, maman de Jeanne (8 ans)', where: 'Poitiers', text: "Jeanne ressort rayonnante de chaque atelier. Elle a cousu un doudou pour sa petite sœur — immense fierté !", color: 'var(--menthe)', note: 5 },
    { who: 'Hélène', where: 'Journée créative, Fontaine-le-Comte', text: "Une bulle de douceur. J'ai cousu une blouse dont je rêvais depuis deux ans.", color: 'var(--rose)', note: 5 },
    { who: 'Médiathèque de Vouillé', where: 'Partenariat 2025', text: 'Ludivine a captivé nos petits lecteurs. Professionnelle, adaptable, on recommande chaudement.', color: 'var(--menthe)', note: 5 },
  ]
  const temoignages = (avisPublies && avisPublies.length > 0)
    ? avisPublies.map((a, i) => ({ who: a.nom, where: [a.type_atelier, a.ville].filter(Boolean).join(' · '), text: a.texte, color: COULEURS[i % COULEURS.length], note: a.note ?? 5 }))
    : temoignagesDefaut

  return (
    <div>
      {/* HERO */}
      <section style={{ position:'relative', overflow:'hidden' }}>
        <div className="stripes-vertical" style={{ position:'absolute', inset:0, opacity:1 }} />
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center, var(--creme) 0%, var(--creme) 32%, rgba(251,244,228,0) 75%)' }} />
        <DoodleHeart size={28} className="hidden-mobile" aria-hidden style={{ position:'absolute', left:'8%', bottom:'9%', opacity:.7 }} />
        <DoodleFlower size={42} className="hidden-mobile" aria-hidden style={{ position:'absolute', right:'8%', bottom:'11%', opacity:.7 }} />
        <div className="container" style={{ position:'relative', padding:'80px 28px 100px', textAlign:'center' }}>
          <div style={{ position:'absolute', left:40, top:90 }} className="hidden-mobile"><Bobines size={140} /></div>
          <div style={{ position:'absolute', right:30, top:120 }} className="hidden-mobile"><Fee size={200} /></div>
          <div style={{ marginBottom:28 }}><Logo size={88} /></div>
          <div style={{ marginBottom:24 }}>
            <span className="slogan" style={{ fontSize:'clamp(36px,5.5vw,62px)' }}>Deviens toi aussi une magicienne&nbsp;!</span>
          </div>
          <p style={{ fontSize:'clamp(17px,1.4vw,20px)', maxWidth:620, margin:'0 auto 36px', lineHeight:1.55 }}>
            Ateliers créatifs pour enfants dès 6 ans et adultes partout en Vienne et en Deux-Sèvres, journées créatives et retraites pour adultes à Fontaine-le-Comte.
          </p>
          <div style={{ display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="/ateliers" className="cta-pill">Voir les ateliers</a>
            <a href="/ateliers-adultes/journees-creatives" className="cta-ghost">Réserver une session</a>
          </div>
          <div style={{ marginTop:56, display:'flex', gap:40, justifyContent:'center', flexWrap:'wrap' }}>
            {[{n:'+250',l:'petits créateurs'},{n:'86·79',l:'Vienne & Deux-Sèvres'},{n:'6 ans',l:'âge minimum'},{n:'100%',l:'fait main & magique'}].map((s,i) => (
              <div key={i} style={{ textAlign:'center' }}>
                <div className="h-fredoka" style={{ fontSize:'clamp(42px,5vw,54px)', fontWeight:700, color:'var(--framboise)', lineHeight:1 }}>{s.n}</div>
                <div style={{ fontSize:13, opacity:.7, marginTop:4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIERS ENFANTS */}
      <section style={{ padding:'100px 0 80px', background:'var(--creme)' }}>
        <div className="container">
          <SectionTitle kicker="Pour les petits créateurs" align="center">Ateliers enfants</SectionTitle>
          <p style={{ textAlign:'center', maxWidth:640, margin:'22px auto 50px', fontSize:17, opacity:.8 }}>
            Dès 6 ans, vos petits apprennent à créer de leurs mains. Poitiers, Vouillé, Fontaine-le-Comte et Châtellerault.
          </p>
          <HomeEnfantsGrid ateliers={enfantsSource} />
          <div style={{ textAlign:'center', marginTop:48, display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="/ateliers-enfants" className="cta-pill">Voir tous les ateliers enfants</a>
            <a href="/contact" className="cta-ghost">Inscrire mon enfant</a>
          </div>
        </div>
      </section>

      {/* ATELIERS ADULTES */}
      <section style={{ position:'relative', padding:'100px 0', background:'var(--creme-pale)' }}>
        <div className="stripes-band" style={{ position:'absolute', top:0, left:0, right:0 }} />
        <div className="container" style={{ marginTop:20 }}>
          <SectionTitle kicker="Pour les grandes magiciennes" align="center">Ateliers adultes</SectionTitle>
          <p style={{ textAlign:'center', maxWidth:620, margin:'22px auto 50px', fontSize:17, opacity:.8 }}>Deux façons de vous offrir une vraie parenthèse créative, loin du quotidien.</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', gap:32 }}>

            {/* JOURNÉES CRÉATIVES */}
            <div className="card" style={{ padding:0, overflow:'hidden' }}>
              <div style={{ position:'relative', padding:'38px 36px', background:'var(--framboise)', color:'var(--creme)', minHeight:220 }}>
                <div style={{ position:'absolute', right:-10, top:-10, transform:'rotate(15deg)' }}><Fee size={130} /></div>
                <span className="badge" style={{ background:'var(--menthe)', color:'#1a4a42' }}>Journée</span>
                <h3 className="h-fredoka" style={{ fontSize:36, margin:'14px 0 12px', color:'var(--creme)', maxWidth:'70%', lineHeight:1.05 }}>Journées créatives</h3>
                <p style={{ margin:0, fontSize:15, maxWidth:'70%', opacity:.95 }}>Une journée entière pour se reconnecter à sa créativité.</p>
              </div>
              <div style={{ padding:'28px 32px', display:'flex', flexDirection:'column', gap:16 }}>
                <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                  {[
                    'Fontaine-le-Comte (86)',
                    '10h → 17h, repas partagé inclus',
                    'Matériel fourni',
                  ].map((it,i) => (
                    <li key={i} style={{ display:'flex', gap:10, fontSize:15 }}><span style={{ color:'var(--framboise)' }}>✦</span> {it}</li>
                  ))}
                </ul>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:10 }}>
                  <div><div className="h-fredoka" style={{ fontSize:40, color:'var(--framboise)', lineHeight:1 }}>90€</div><div style={{ fontSize:12, opacity:.6 }}>/ personne, tout compris</div></div>
                  <a href="/ateliers-adultes/journees-creatives" className="cta-pill">Je réserve</a>
                </div>
                <KlarnaBadge prixCentimes={9000} variant="light" size="sm" />
              </div>
            </div>

            {/* RETRAITES CRÉATIVES */}
            <div className="card" style={{ padding:0, overflow:'hidden' }}>
              <div style={{ position:'relative', padding:'38px 36px', background:'linear-gradient(135deg, var(--menthe), #7fb8ae)', color:'#1a4a42', minHeight:220 }}>
                <span className="badge" style={{ background:'var(--creme)', color:'var(--framboise)' }}>Weekend</span>
                <h3 className="h-fredoka" style={{ fontSize:36, margin:'14px 0 12px', color:'#0f3b33', maxWidth:'70%', lineHeight:1.05 }}>Retraites créatives</h3>
                <p style={{ margin:0, fontSize:15, maxWidth:'70%', opacity:.85 }}>Un weekend pour vous ressourcer.</p>
              </div>
              <div style={{ padding:'28px 32px', display:'flex', flexDirection:'column', gap:16 }}>
                <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                  {[
                    'Gîte 4 chambres / 8 lits, Fontaine-le-Comte (86)',
                    'Vendredi soir → Dimanche 16h',
                    'Repas, linge de lit, serviette inclus',
                    'Un programme riche que je préfère te laisser découvrir sur place',
                  ].map((it,i) => (
                    <li key={i} style={{ display:'flex', gap:10, fontSize:15 }}><span style={{ color:'var(--framboise)' }}>✦</span> {it}</li>
                  ))}
                </ul>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:10 }}>
                  <div><div className="h-fredoka" style={{ fontSize:40, color:'var(--framboise)', lineHeight:1 }}>390€</div><div style={{ fontSize:12, opacity:.6 }}>/ personne, weekend complet</div></div>
                  <a href="/ateliers-adultes/retraites-creatives" className="cta-pill">Je réserve</a>
                </div>
                <KlarnaBadge prixCentimes={39000} variant="light" size="sm" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MOI C'EST LUDIVINE */}
      <section style={{ padding:'90px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:1040 }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:48, alignItems:'center' }}>
            <div style={{ position:'relative', aspectRatio:'1 / 1', borderRadius:32, overflow:'hidden', boxShadow:'var(--shadow-framboise)', maxWidth:440, margin:'0 auto', width:'100%' }}>
              <Image src="/images/brand/ludivine-portrait.jpg" alt="Ludivine, fondatrice de L'atelier Pic & Paf en Vienne et Deux-Sèvres" fill sizes="(max-width: 768px) 90vw, 440px" style={{ objectFit:'cover' }} />
            </div>
            <div>
              <span className="h-caveat" style={{ fontSize:26, color:'var(--framboise)' }}>~ Qui suis-je ~</span>
              <h2 className="h-fredoka" style={{ fontSize:'clamp(30px,3.8vw,44px)', color:'var(--framboise)', margin:'10px 0 20px', lineHeight:1.1 }}>Moi, c&apos;est Ludivine</h2>
              <p style={{ fontSize:17, opacity:.88, lineHeight:1.75, marginBottom:16 }}>Couturière passionnée et diplômée (BPJEPS), j&apos;ai créé L&apos;atelier Pic &amp; Paf pour transmettre ce qui me fait vibrer : créer de ses mains, prendre le temps, partager. Je me déplace partout en Vienne (86) et Deux-Sèvres (79).</p>
              <p style={{ fontSize:17, opacity:.88, lineHeight:1.75, marginBottom:22 }}>Pas de niveau requis, pas de jugement : juste l&apos;envie de créer ensemble, et de repartir fier de sa création.</p>
              <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <a href="/a-propos" className="cta-pill">Faire connaissance</a>
                <a href="/contact" className="cta-ghost">Me contacter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURES */}
      <section style={{ padding:'100px 0', background:'var(--creme)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))', gap:50, alignItems:'center' }}>
            <div>
              <span className="h-caveat" style={{ fontSize:26, color:'var(--framboise)' }}>~ Vous êtes une structure ? ~</span>
              <h2 className="sticker-title" style={{ fontSize:'clamp(32px,4.5vw,52px)', margin:'10px 0 20px', textAlign:'left' }}>Je me déplace<br/>chez vous</h2>
              <p style={{ fontSize:17, opacity:.85, maxWidth:520, marginBottom:24 }}>J&apos;interviens auprès des ALSH, médiathèques, écoles et associations en Vienne (86) et Deux-Sèvres (79). Devis gratuit.</p>
              <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <a href="/contact" className="cta-pill">Demander un devis</a>
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              {[
                {e:'🏡',t:'ALSH & Centres de loisirs',d:"Interventions sur vos thématiques, groupes d'enfants 6-12 ans."},
                {e:'📚',t:'Médiathèques',d:'Ateliers ponctuels ou cycles, autour du livre et du tissu.'},
                {e:'🌟',t:'Associations & écoles',d:"Projets sur-mesure, fêtes d'école, kermesses créatives."},
              ].map((it,i) => (
                <div key={i} className="card" style={{ padding:'22px 24px', display:'flex', gap:18, alignItems:'center' }}>
                  <div style={{ fontSize:36, width:60, height:60, borderRadius:20, background:'var(--rose)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{it.e}</div>
                  <div><h4 className="h-fredoka" style={{ margin:0, fontSize:19, color:'var(--framboise)' }}>{it.t}</h4><p style={{ margin:'4px 0 0', fontSize:14, opacity:.8 }}>{it.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CE QU'ON VIT EN ATELIER — PROOF BLOC */}
      <section style={{ padding:'100px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:1100 }}>
          <SectionTitle kicker="Petit aperçu" align="center">Ce qu&apos;on vit en atelier</SectionTitle>
          <p style={{ textAlign:'center', maxWidth:620, margin:'22px auto 0', fontSize:17, opacity:.8 }}>
            Des petites mains concentrées, de la laine colorée, des sourires fiers. Voilà ce que donnent concrètement les ateliers couture et punch needle.
          </p>
          <div
            style={{
              marginTop: 56,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 40,
              justifyItems: 'center',
            }}
          >
            {[
              { src:'/images/ateliers/cours-couture-enfants.jpg', alt:"Cours de couture enfants avec Ludivine, L'atelier Pic & Paf (Vienne 86 et Deux-Sèvres 79)", cap:'Atelier couture enfants ❤️', rot:-2 },
              { src:'/images/punch-needle/arc-en-ciel.jpg', alt:"Enfant réalisant un arc-en-ciel en punch needle lors d'un atelier créatif", cap:'Un arc-en-ciel tout en laine ✨', rot:2 },
              { src:'/images/punch-needle/renard.jpg', alt:"Création d'un renard en punch needle lors d'un atelier créatif", cap:'Un petit renard tout doux 🦊', rot:-1 },
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
                <div style={{ position:'relative', width:'100%', aspectRatio:'3/4', borderRadius:14, overflow:'hidden', background:'var(--creme)' }}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 340px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <figcaption className="h-caveat" style={{ textAlign:'center', fontSize:22, color:'var(--framboise)', marginTop:12 }}>
                  {p.cap}
                </figcaption>
              </figure>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:48 }}>
            <a href="/ateliers" className="cta-pill">Voir tous les ateliers</a>
          </div>
        </div>
      </section>

      {/* DÉCOUVRIR AUSSI — tutos vidéos / photos Instagram / boutique */}
      <CrossPromo bg="var(--creme)" />

      {/* TEMOIGNAGES (avis publiés dynamiques + formulaire) */}
      <section style={{ padding:'100px 0', background:'var(--creme-pale)' }}>
        <div className="container">
          <SectionTitle kicker="Elles en parlent mieux que moi" align="center">Paroles de magiciennes</SectionTitle>
          <div style={{ marginTop:60, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:34 }}>
            {temoignages.map((q,i) => (
              <div key={i} style={{ display:'flex', flexDirection:'column', gap:22 }}>
                <div className="bubble" style={{ background: q.color }}>
                  {q.note ? <div style={{ fontSize:16, color:'#FFC83D', marginBottom:6, letterSpacing:2 }}>{'★'.repeat(q.note)}<span style={{ color:'rgba(0,0,0,.12)' }}>{'★'.repeat(5 - q.note)}</span></div> : null}
                  <p className="h-caveat" style={{ margin:0, fontSize:22, color:'var(--ink)', lineHeight:1.4 }}>« {q.text} »</p>
                </div>
                <div style={{ display:'flex', gap:14, alignItems:'center', paddingLeft:16 }}>
                  <div style={{ width:48, height:48, borderRadius:999, background:'var(--framboise)', color:'var(--creme)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-fredoka)', fontSize:20, flexShrink:0 }}>{q.who[0]}</div>
                  <div><div className="h-fredoka" style={{ fontSize:15, color:'var(--framboise)' }}>{q.who}</div>{q.where ? <div style={{ fontSize:13, opacity:.7 }}>{q.where}</div> : null}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Laisser un avis : Google (priorité SEO) OU formulaire sur le site */}
          <div style={{ marginTop:70, textAlign:'center' }}>
            <h3 className="h-fredoka" style={{ fontSize:'clamp(24px,3vw,32px)', color:'var(--framboise)', marginBottom:12 }}>Tu as participé à un atelier ?</h3>
            <p style={{ fontSize:16, opacity:.82, maxWidth:560, margin:'0 auto 24px', lineHeight:1.6 }}>
              Ton avis aide d&apos;autres familles et passionnées à se lancer. Laisse-le sur Google (le plus utile pour me faire connaître) ou directement ici 👇
            </p>
            <a
              href="https://g.page/r/CduaCQBuWIIsECE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill"
              style={{ marginBottom:36, display:'inline-block' }}
            >
              ⭐ Laisser un avis Google
            </a>
            <div style={{ display:'flex', alignItems:'center', gap:14, maxWidth:420, margin:'0 auto 36px' }}>
              <span style={{ flex:1, height:1, background:'rgba(200,54,92,.2)' }} />
              <span style={{ fontSize:13, opacity:.6 }}>ou ici sans compte Google</span>
              <span style={{ flex:1, height:1, background:'rgba(200,54,92,.2)' }} />
            </div>
            <AvisForm />
          </div>
        </div>
      </section>

      {/* NOUS TROUVER — Google Maps embed + GBP CTA */}
      <section style={{ padding:'100px 0', background:'var(--creme)' }}>
        <div className="container">
          <SectionTitle kicker="Nous trouver" align="center">L&apos;atelier Pic &amp; Paf à Craon</SectionTitle>
          <p style={{ textAlign:'center', maxWidth:680, margin:'22px auto 50px', fontSize:17, opacity:.8 }}>
            Basée à Craon (Vienne 86), Ludivine intervient partout en Vienne et Deux-Sèvres : ateliers en école, ALSH, médiathèques, anniversaires couture, journées créatives et retraites à Fontaine-le-Comte (5 min au sud de Poitiers).
          </p>

          <div
            style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',
              gap:40,
              alignItems:'stretch',
            }}
          >
            {/* MAP EMBED */}
            <div
              style={{
                borderRadius:24,
                overflow:'hidden',
                boxShadow:'var(--shadow-card)',
                border:'2px solid rgba(200,54,92,.18)',
                minHeight:420,
              }}
            >
              <iframe
                src="https://www.google.com/maps?q=L%27atelier+Pic+%26+Paf,+3+Rue+des+Rosiers,+86110+Craon&output=embed"
                width="100%"
                height="100%"
                style={{ border:0, display:'block', minHeight:420 }}
                loading="lazy"
                title="Localisation de L'atelier Pic & Paf à Craon (Vienne 86)"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* CONTACT INFOS + CTAs */}
            <div style={{ display:'flex', flexDirection:'column', gap:22, justifyContent:'center' }}>
              <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
                <span style={{ fontSize:26, lineHeight:1 }} aria-hidden>📍</span>
                <div>
                  <h3 className="h-fredoka" style={{ margin:0, fontSize:18, color:'var(--framboise)' }}>Adresse</h3>
                  <address style={{ margin:'4px 0 0', fontSize:15, fontStyle:'normal', lineHeight:1.5 }}>
                    3 Rue des Rosiers<br />
                    86110 Craon, Vienne
                  </address>
                </div>
              </div>

              <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
                <span style={{ fontSize:26, lineHeight:1 }} aria-hidden>📞</span>
                <div>
                  <h3 className="h-fredoka" style={{ margin:0, fontSize:18, color:'var(--framboise)' }}>Téléphone</h3>
                  <a href="tel:+33621073536" style={{ fontSize:15, color:'var(--ink)' }}>06 21 07 35 36</a>
                </div>
              </div>

              <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
                <span style={{ fontSize:26, lineHeight:1 }} aria-hidden>✉️</span>
                <div>
                  <h3 className="h-fredoka" style={{ margin:0, fontSize:18, color:'var(--framboise)' }}>Email</h3>
                  <a href="mailto:atelierpicpaf@gmail.com" style={{ fontSize:15, color:'var(--ink)' }}>atelierpicpaf@gmail.com</a>
                </div>
              </div>

              <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginTop:14 }}>
                <a
                  href="https://maps.app.goo.gl/XXzDFzLEFNSjmNy79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-pill"
                  aria-label="Voir L'atelier Pic & Paf sur Google Maps (nouvelle fenêtre)"
                >
                  ⭐ Voir sur Google
                </a>
                <a
                  href="https://g.page/r/CduaCQBuWIIsECE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-ghost"
                  aria-label="Laisser un avis Google sur L'atelier Pic & Paf (nouvelle fenêtre)"
                >
                  ✏️ Laisser un avis
                </a>
              </div>

              <p style={{ fontSize:13, opacity:.65, marginTop:4, lineHeight:1.55 }}>
                Vos avis Google sont précieux pour nous aider à toucher d&apos;autres familles et passionnées de couture 🙏
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeNewsletter />
    </div>
  )
}
