import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  robots: { index: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="route-enter">
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:760 }}>
          <h1 className="sticker-title" style={{ fontSize:'clamp(36px,5vw,56px)', marginBottom:40 }}>Politique de confidentialité</h1>

          <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>1. Responsable du traitement</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                L&apos;atelier Pic &amp; Paf — Ludivine Gauvrit<br />
                Email : atelierpicpaf@gmail.com
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>2. Données collectées</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Lors de vos inscriptions ou prises de contact, nous collectons : nom, prénom, adresse email, numéro de téléphone, et le cas échéant, les informations relatives aux participants (âge, régime alimentaire). Ces données sont utilisées exclusivement dans le cadre de la gestion de vos inscriptions et de notre communication.
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>3. Newsletter</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                L&apos;inscription à notre newsletter est basée sur votre consentement explicite. Vous pouvez vous désinscrire à tout moment en cliquant sur le lien de désinscription présent dans chaque email.
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>4. Durée de conservation</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Vos données sont conservées pendant 3 ans après votre dernier contact avec nous, puis supprimées sauf obligation légale contraire.
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>5. Vos droits</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous à atelierpicpaf@gmail.com.
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>6. Hébergement des données</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Les données sont hébergées via Supabase (infrastructure AWS en Europe) et Vercel. Aucune donnée n&apos;est vendue ou transmise à des tiers à des fins commerciales.
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>7. Cookies</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement (authentification, session). Aucun cookie de tracking ou publicitaire n&apos;est utilisé.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
