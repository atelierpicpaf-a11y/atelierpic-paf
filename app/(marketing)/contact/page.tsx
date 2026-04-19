import type { Metadata } from 'next'
import { ContactForm } from './contact-form'
import { SectionTitle } from '@/components/sections/section-title'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez L\'atelier Pic & Paf pour une inscription, un devis ou toute question sur nos ateliers couture.',
}

export default function ContactPage() {
  return (
    <div className="route-enter">
      <section style={{ padding:'80px 0 60px', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:880 }}>
          <SectionTitle kicker="On se parle ?" align="center">Contactez-moi</SectionTitle>
          <p style={{ textAlign:'center', fontSize:18, opacity:.8, maxWidth:560, margin:'20px auto 60px' }}>
            Une question sur un atelier, une envie de réserver, un projet pour votre structure ? Je réponds toujours sous 24h !
          </p>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:50 }}>
            {/* INFOS */}
            <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
              <h2 className="h-fredoka" style={{ fontSize:28, color:'var(--framboise)', margin:0 }}>Mes coordonnées</h2>
              {[
                { e:'📧', t:'Email', v:'atelierpicpaf@gmail.com' },
                { e:'📞', t:'Téléphone', v:'06 21 07 35 36' },
                { e:'📍', t:"Zone d'intervention", v:'Vienne (86) & Deux-Sèvres (79)' },
                { e:'📸', t:'Instagram', v:'@atelier_picpaf' },
              ].map((it, i) => (
                <div key={i} style={{ display:'flex', gap:18, alignItems:'flex-start' }}>
                  <div style={{ fontSize:28, width:50, height:50, borderRadius:16, background:'var(--rose)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{it.e}</div>
                  <div>
                    <div className="h-fredoka" style={{ fontSize:15, color:'var(--framboise)' }}>{it.t}</div>
                    <div style={{ fontSize:15, opacity:.85 }}>{it.v}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop:16, padding:'22px 24px', background:'var(--creme-pale)', borderRadius:24, border:'2px dashed rgba(200,54,92,.25)' }}>
                <p className="h-caveat" style={{ margin:0, fontSize:22, color:'var(--framboise)', lineHeight:1.4 }}>
                  Vous êtes une structure (école, médiathèque, ALSH) ? Mentionnez-le dans le message, je ferai un devis gratuit !
                </p>
              </div>
            </div>

            {/* FORMULAIRE */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
