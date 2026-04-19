import { Fee } from '@/components/brand/fee'
import { Bobines } from '@/components/brand/bobines'
import { SectionTitle } from '@/components/sections/section-title'
import { DEFAULT_DATES_JOURNEES, JOURNEES_CONFIG } from '@/lib/data/defaults'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journées créatives couture adultes',
  description: 'Une journée entière pour coudre le projet de vos rêves à Fontaine-le-Comte. 90€ tout compris, 6 participantes maximum.',
}

const PROGRAMME = [
  { n:'1', titre:"Accueil & café", desc:"On se retrouve à 9h30 autour d'un café et de viennoiseries. Présentation du projet du jour.", heure:'9h30' },
  { n:'2', titre:'Matin couture', desc:"Découpe du tissu, assemblage, premières coutures. Chacune avance à son rythme avec mon accompagnement.", heure:'10h – 12h30' },
  { n:'3', titre:"Repas partagé", desc:"Pause déjeuner conviviale. Chacune apporte quelque chose, on mange ensemble dans la bonne humeur.", heure:'12h30 – 14h' },
  { n:'4', titre:"Après-midi & finitions", desc:"On reprend, on finit les détails, on prend les dernières photos fières de sa création !", heure:'14h – 17h' },
]

const CE_QU_ON_PEUT_COUDRE = [
  { e:'👗', t:'Vêtements', d:'Blouse, jupe, robe, top… avec un patron ou en carte blanche.' },
  { e:'👜', t:'Sacs & accessoires', d:'Tote bag, sac à main, trousse, pochette.' },
  { e:'🏠', t:'Déco maison', d:'Coussin, nappe, rideau, linge de maison.' },
  { e:'🎁', t:'Cadeaux personnalisés', d:'Créations sur-mesure pour offrir à vos proches.' },
]

const INCLUS = [
  'Machine à coudre & surjeteuse',
  'Tissus & mercerie fournis',
  'Patron ou aide au patron',
  'Repas du midi partagé',
  'Café, thé & petits gâteaux',
  "Goûter de l'après-midi",
]

export default function JourneesCreativesPage() {
  return (
    <div className="route-enter">
      {/* HERO */}
      <section style={{ position:'relative', overflow:'hidden' }}>
        <div className="stripes-vertical" style={{ position:'absolute', inset:0, opacity:1 }} />
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 30% 50%, var(--creme) 0%, var(--creme) 38%, rgba(251,244,228,0) 72%)' }} />
        <div className="container" style={{ position:'relative', padding:'80px 28px 100px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:40, alignItems:'center' }}>
          <div>
            <span className="badge" style={{ background:'var(--menthe)', color:'#1a4a42', marginBottom:20 }}>Journée créative</span>
            <h1 className="sticker-title" style={{ fontSize:'clamp(44px,6vw,72px)', textAlign:'left', margin:'12px 0 22px' }}>Journées<br/>créatives</h1>
            <p style={{ fontSize:18, maxWidth:520, lineHeight:1.6, opacity:.85, marginBottom:28 }}>
              Une journée entière pour vous offrir une parenthèse cousue. Projets guidés ou carte blanche, dans une ambiance chaleureuse à {JOURNEES_CONFIG.lieu}.
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:36 }}>
              <a href="#dates" className="cta-pill">Voir les prochaines dates</a>
              <a href="/contact" className="cta-ghost">Une question ?</a>
            </div>
            <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
              {[{n:`${JOURNEES_CONFIG.prix}€`,l:'tout compris'},{n:`${JOURNEES_CONFIG.placesMax} places`,l:'max par journée'},{n:JOURNEES_CONFIG.horaire,l:'horaire'}].map((s,i) => (
                <div key={i}>
                  <div className="h-fredoka" style={{ fontSize:26, color:'var(--framboise)', lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontSize:13, opacity:.7 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:20 }}>
            <Fee size={220} />
            <Bobines size={120} />
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container">
          <SectionTitle kicker="Le déroulé de la journée" align="center">Programme</SectionTitle>
          <div style={{ marginTop:50, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:24 }}>
            {PROGRAMME.map((p) => (
              <div key={p.n} className="card" style={{ padding:'28px 24px' }}>
                <div style={{ display:'flex', gap:14, alignItems:'center', marginBottom:16 }}>
                  <div style={{ width:44, height:44, borderRadius:999, background:'var(--framboise)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-fredoka)', fontSize:22, flexShrink:0 }}>{p.n}</div>
                  <div>
                    <div className="h-fredoka" style={{ fontSize:18, color:'var(--framboise)', lineHeight:1.1 }}>{p.titre}</div>
                    <div style={{ fontSize:12, color:'var(--framboise)', opacity:.7 }}>{p.heure}</div>
                  </div>
                </div>
                <p style={{ margin:0, fontSize:14, opacity:.8, lineHeight:1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE QU'ON PEUT COUDRE */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container">
          <SectionTitle kicker="Vos idées sont les bienvenues" align="center">Ce qu&apos;on peut coudre</SectionTitle>
          <div style={{ marginTop:50, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:24 }}>
            {CE_QU_ON_PEUT_COUDRE.map((it, i) => (
              <div key={i} className="card" style={{ padding:'28px 24px', textAlign:'center' }}>
                <div style={{ fontSize:48, marginBottom:16 }}>{it.e}</div>
                <h3 className="h-fredoka" style={{ fontSize:20, color:'var(--framboise)', margin:'0 0 10px' }}>{it.t}</h3>
                <p style={{ margin:0, fontSize:14, opacity:.8, lineHeight:1.6 }}>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUI EST INCLUS */}
      <section style={{ padding:'80px 0', background:'var(--framboise)', color:'var(--creme)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', bottom:-60, right:-60, opacity:.1 }}><Bobines size={300} /></div>
        <div className="container" style={{ position:'relative' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:50, alignItems:'center' }}>
            <div>
              <span className="h-caveat" style={{ fontSize:26, color:'var(--creme)', opacity:.9 }}>~ Tout est prévu ~</span>
              <h2 className="h-fredoka" style={{ fontSize:'clamp(36px,5vw,60px)', color:'var(--creme)', margin:'10px 0 20px', lineHeight:1 }}>Ce qui est inclus</h2>
              <div style={{ marginBottom:30 }}>
                <div className="h-fredoka" style={{ fontSize:64, color:'var(--creme)', lineHeight:1 }}>{JOURNEES_CONFIG.prix}€</div>
                <div style={{ fontSize:15, opacity:.8 }}>par personne, tout compris</div>
              </div>
              <a href="#dates" className="cta-pill" style={{ boxShadow:'0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>Je réserve ma place</a>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {INCLUS.map((item, i) => (
                <div key={i} style={{ background:'rgba(251,244,228,.15)', borderRadius:20, padding:'18px 20px', display:'flex', gap:12, alignItems:'center' }}>
                  <span style={{ color:'var(--creme)', fontSize:20 }}>✦</span>
                  <span style={{ fontSize:15, color:'var(--creme)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIEU */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:50, alignItems:'center' }}>
            <div>
              <span className="h-caveat" style={{ fontSize:26, color:'var(--framboise)' }}>~ L&apos;atelier ~</span>
              <h2 className="sticker-title" style={{ fontSize:'clamp(32px,4.5vw,52px)', margin:'10px 0 20px', textAlign:'left' }}>Fontaine-le-Comte</h2>
              <p style={{ fontSize:17, opacity:.85, lineHeight:1.65, marginBottom:20 }}>
                Un atelier chaleureux à {JOURNEES_CONFIG.lieu}, à 15 minutes au sud de Poitiers. Facile d&apos;accès, parking, ambiance cosy garantie.
              </p>
              <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                {['15 min au sud de Poitiers','Parking gratuit sur place','Accès PMR','Atelier lumineux et bien équipé'].map((it,i) => (
                  <li key={i} style={{ display:'flex', gap:10, fontSize:15 }}><span style={{ color:'var(--framboise)' }}>📍</span> {it}</li>
                ))}
              </ul>
            </div>
            <div className="ph" style={{ height:320, borderRadius:28 }}>
              <span>Photo de l&apos;atelier à venir</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCHAINES DATES */}
      <section id="dates" style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container">
          <SectionTitle kicker="Rejoignez-nous" align="center">Prochaines dates</SectionTitle>
          <div style={{ marginTop:50, display:'flex', flexDirection:'column', gap:18, maxWidth:680, margin:'50px auto 0' }}>
            {DEFAULT_DATES_JOURNEES.map((d) => {
              const placesLeft = d.placesMax - d.places
              const complet = placesLeft === 0
              return (
                <div key={d.id} className="card" style={{ padding:'24px 28px', display:'flex', alignItems:'center', gap:24, flexWrap:'wrap' }}>
                  <div style={{ textAlign:'center', minWidth:70 }}>
                    <div style={{ fontSize:13, color:'var(--framboise)', fontWeight:600 }}>{d.jour}</div>
                    <div className="h-fredoka" style={{ fontSize:40, color:'var(--framboise)', lineHeight:1 }}>{d.num}</div>
                    <div style={{ fontSize:13, color:'var(--framboise)', opacity:.8 }}>{d.mois}</div>
                  </div>
                  <div style={{ flex:1, minWidth:180 }}>
                    <div className="h-fredoka" style={{ fontSize:20, color:'var(--ink)' }}>{d.theme}</div>
                    <div style={{ fontSize:13, opacity:.7, marginTop:4 }}>{JOURNEES_CONFIG.horaire} · {JOURNEES_CONFIG.lieu}</div>
                  </div>
                  <div style={{ display:'flex', gap:14, alignItems:'center' }}>
                    <span className={`badge ${complet ? '' : 'mint'}`} style={complet ? {} : { background:'var(--menthe)', color:'#1a4a42' }}>
                      {complet ? 'Complet' : `${placesLeft} place${placesLeft > 1 ? 's' : ''}`}
                    </span>
                    {!complet && <a href="/contact" className="cta-pill" style={{ padding:'10px 20px', fontSize:14 }}>Réserver</a>}
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ textAlign:'center', marginTop:36 }}>
            <a href="/contact" className="cta-ghost">Être prévenue des prochaines dates →</a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding:'80px 0', background:'var(--creme)', textAlign:'center' }}>
        <div className="container" style={{ maxWidth:680 }}>
          <h2 className="sticker-title" style={{ fontSize:'clamp(32px,5vw,56px)', marginBottom:20 }}>Prête à coudre quelque chose de beau&nbsp;?</h2>
          <p style={{ fontSize:17, opacity:.8, marginBottom:36 }}>Une question, une envie ? Je réponds toujours sous 24h.</p>
          <div style={{ display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="#dates" className="cta-pill">Voir les dates</a>
            <a href="/contact" className="cta-ghost">Me contacter</a>
          </div>
        </div>
      </section>
    </div>
  )
}
