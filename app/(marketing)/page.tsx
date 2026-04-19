import { Fee } from '@/components/brand/fee'
import { Bobines } from '@/components/brand/bobines'
import { Logo } from '@/components/brand/logo'
import { SectionTitle } from '@/components/sections/section-title'
import { AtelierCard } from '@/components/sections/atelier-card'
import { HomeNewsletter } from '@/components/sections/home-newsletter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ateliers couture créatifs en Vienne et Deux-Sèvres",
  description: "Ateliers couture enfants dès 6 ans, journées créatives et retraites pour adultes. Deviens toi aussi une magicienne !",
}

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section style={{ position:'relative', overflow:'hidden' }}>
        <div className="stripes-vertical" style={{ position:'absolute', inset:0, opacity:1 }} />
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center, var(--creme) 0%, var(--creme) 32%, rgba(251,244,228,0) 75%)' }} />
        <div className="container" style={{ position:'relative', padding:'80px 28px 100px', textAlign:'center' }}>
          <div style={{ position:'absolute', left:40, top:90 }} className="hidden-mobile"><Bobines size={140} /></div>
          <div style={{ position:'absolute', right:30, top:120 }} className="hidden-mobile"><Fee size={200} /></div>
          <div style={{ marginBottom:28 }}><Logo size={88} /></div>
          <div style={{ marginBottom:24 }}>
            <span className="slogan" style={{ fontSize:'clamp(36px,5.5vw,62px)' }}>Deviens toi aussi une magicienne&nbsp;!</span>
          </div>
          <p style={{ fontSize:'clamp(17px,1.4vw,20px)', maxWidth:620, margin:'0 auto 36px', lineHeight:1.55 }}>
            Ateliers couture pour enfants dès 6 ans, journées créatives et retraites pour adultes, partout en Vienne et en Deux-Sèvres.
          </p>
          <div style={{ display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="/ateliers-enfants" className="cta-pill">Voir les ateliers</a>
            <a href="/ateliers-adultes/journees-creatives" className="cta-ghost">Réserver une session</a>
          </div>
          <div style={{ marginTop:56, display:'flex', gap:40, justifyContent:'center', flexWrap:'wrap' }}>
            {[{n:'+250',l:'petits créateurs'},{n:'4',l:"villes d'atelier"},{n:'6 ans',l:'âge minimum'},{n:'100%',l:'fait main & magique'}].map((s,i) => (
              <div key={i} style={{ textAlign:'center' }}>
                <div className="h-fredoka" style={{ fontSize:30, color:'var(--framboise)', lineHeight:1 }}>{s.n}</div>
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
          <p style={{ textAlign:'center', maxWidth:640, margin:'22px auto 50px', fontSize:17, opacity:.8 }}>Dès 6 ans, vos petits apprennent à dompter le fil et l&apos;aiguille. Poitiers, Vouillé, Fontaine-le-Comte et Châtellerault.</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:28 }}>
            <AtelierCard badge="Dès 6 ans" badgeColor="mint" title="Couture du mercredi" desc="Chaque semaine, ma petite troupe découvre une nouvelle pépite à coudre. Trousses, doudous, coussins…" meta={['14h — 16h','1h30 / séance','Trimestre']} price="18€" city="Poitiers" emoji="🧵" />
            <AtelierCard badge="Stage vacances" badgeColor="rose" title="Stages vacances scolaires" desc="Trois après-midis d'aventure créative pendant les vacances. On coud, on joue, on invente." meta={['3 séances','3x 2h','Goûter inclus']} price="65€" city="Vouillé" emoji="✂️" />
            <AtelierCard badge="Anniversaire" title="Anniversaires créatifs" desc="Une fête pas comme les autres. Les enfants repartent fiers avec leur première création cousue." meta={['6 à 10 enfants','2h atelier','À domicile']} price="dès 180€" city="Vienne 86" emoji="🎂" />
          </div>
          <div style={{ textAlign:'center', marginTop:48 }}>
            <a href="/ateliers-enfants" className="cta-ghost">Voir tous les ateliers enfants →</a>
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
            <div className="card" style={{ padding:0, overflow:'hidden' }}>
              <div style={{ position:'relative', padding:'38px 36px', background:'var(--framboise)', color:'var(--creme)', minHeight:220 }}>
                <div style={{ position:'absolute', right:-10, top:-10, transform:'rotate(15deg)' }}><Fee size={130} /></div>
                <span className="badge" style={{ background:'var(--menthe)', color:'#1a4a42' }}>Journée</span>
                <h3 className="h-fredoka" style={{ fontSize:36, margin:'14px 0 12px', color:'var(--creme)', maxWidth:'70%', lineHeight:1.05 }}>Journées créatives</h3>
                <p style={{ margin:0, fontSize:15, maxWidth:'70%', opacity:.95 }}>Une journée entière pour coudre un projet qui vous tient à cœur.</p>
              </div>
              <div style={{ padding:'28px 32px', display:'flex', flexDirection:'column', gap:16 }}>
                <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                  {['Fontaine-le-Comte (86)','9h30 → 17h, repas partagé inclus','6 participantes maximum','Machines & mercerie fournies'].map((it,i) => (
                    <li key={i} style={{ display:'flex', gap:10, fontSize:15 }}><span style={{ color:'var(--framboise)' }}>✦</span> {it}</li>
                  ))}
                </ul>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:10 }}>
                  <div><div className="h-fredoka" style={{ fontSize:40, color:'var(--framboise)', lineHeight:1 }}>90€</div><div style={{ fontSize:12, opacity:.6 }}>/ personne, tout compris</div></div>
                  <a href="/ateliers-adultes/journees-creatives" className="cta-pill">Je réserve</a>
                </div>
              </div>
            </div>
            <div className="card" style={{ padding:0, overflow:'hidden' }}>
              <div style={{ position:'relative', padding:'38px 36px', background:'linear-gradient(135deg, var(--menthe), #7fb8ae)', color:'#1a4a42', minHeight:220 }}>
                <span className="badge" style={{ background:'var(--creme)', color:'var(--framboise)' }}>Weekend</span>
                <h3 className="h-fredoka" style={{ fontSize:36, margin:'14px 0 12px', color:'#0f3b33', maxWidth:'70%', lineHeight:1.05 }}>Retraites créatives</h3>
                <p style={{ margin:0, fontSize:15, maxWidth:'70%', opacity:.85 }}>Un weekend pour vous ressourcer dans un lieu d&apos;exception.</p>
              </div>
              <div style={{ padding:'28px 32px', display:'flex', flexDirection:'column', gap:16 }}>
                <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                  {['Gîte 4 chambres / 8 lits, Deux-Sèvres','Vendredi soir → Dimanche 16h','Repas bio, yoga doux, balades','Projet couture guidé inclus'].map((it,i) => (
                    <li key={i} style={{ display:'flex', gap:10, fontSize:15 }}><span style={{ color:'var(--framboise)' }}>✦</span> {it}</li>
                  ))}
                </ul>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:10 }}>
                  <div><div className="h-fredoka" style={{ fontSize:40, color:'var(--framboise)', lineHeight:1 }}>390€</div><div style={{ fontSize:12, opacity:.6 }}>/ personne, weekend complet</div></div>
                  <a href="/ateliers-adultes/retraites-creatives" className="cta-pill">Je réserve</a>
                </div>
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
              {[{e:'🏡',t:'ALSH & Centres de loisirs',d:"Interventions sur vos thématiques, groupes d'enfants 6-12 ans."},{e:'📚',t:'Médiathèques',d:'Ateliers ponctuels ou cycles, autour du livre et du tissu.'},{e:'🌟',t:"Associations & écoles",d:"Projets sur-mesure, fêtes d'école, kermesses créatives."}].map((it,i) => (
                <div key={i} className="card" style={{ padding:'22px 24px', display:'flex', gap:18, alignItems:'center' }}>
                  <div style={{ fontSize:36, width:60, height:60, borderRadius:20, background:'var(--rose)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{it.e}</div>
                  <div><h4 className="h-fredoka" style={{ margin:0, fontSize:19, color:'var(--framboise)' }}>{it.t}</h4><p style={{ margin:'4px 0 0', fontSize:14, opacity:.8 }}>{it.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section style={{ padding:'100px 0', background:'var(--creme-pale)' }}>
        <div className="container">
          <SectionTitle kicker="Elles en parlent mieux que moi" align="center">Paroles de magiciennes</SectionTitle>
          <div style={{ marginTop:60, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:34 }}>
            {[
              {who:"Camille, maman de Jeanne (8 ans)",where:"Poitiers",text:"Jeanne ressort rayonnante de chaque atelier. Elle a cousu un doudou pour sa petite sœur — immense fierté !",color:'var(--menthe)'},
              {who:"Hélène",where:"Journée créative, Fontaine-le-Comte",text:"Une bulle de douceur. J'ai cousu une blouse dont je rêvais depuis deux ans.",color:'var(--rose)'},
              {who:"Médiathèque de Vouillé",where:"Partenariat 2025",text:"Ludivine a captivé nos petits lecteurs. Professionnelle, adaptable, on recommande chaudement.",color:'var(--menthe)'},
            ].map((q,i) => (
              <div key={i} style={{ display:'flex', flexDirection:'column', gap:22 }}>
                <div className="bubble" style={{ background: q.color }}>
                  <p className="h-caveat" style={{ margin:0, fontSize:22, color:'var(--ink)', lineHeight:1.4 }}>« {q.text} »</p>
                </div>
                <div style={{ display:'flex', gap:14, alignItems:'center', paddingLeft:16 }}>
                  <div style={{ width:48, height:48, borderRadius:999, background:'var(--framboise)', color:'var(--creme)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-fredoka)', fontSize:20, flexShrink:0 }}>{q.who[0]}</div>
                  <div><div className="h-fredoka" style={{ fontSize:15, color:'var(--framboise)' }}>{q.who}</div><div style={{ fontSize:13, opacity:.7 }}>{q.where}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeNewsletter />
    </div>
  )
}
