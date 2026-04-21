import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="route-enter">
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:760 }}>
          <h1 className="sticker-title" style={{ fontSize:'clamp(36px,5vw,56px)', marginBottom:40 }}>Mentions légales</h1>

          <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>Éditeur du site</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                <strong>L&apos;atelier Pic &amp; Paf</strong> (nom commercial)<br />
                Ludivine Sénéchaud — Entrepreneur individuel (micro-entreprise)<br />
                Siège social : 3 rue des Rosiers, 86110 Craon<br />
                SIREN : 883 640 419<br />
                SIRET (siège) : 883 640 419 00015<br />
                Code NAF : 1413Z — Fabrication de vêtements de dessus<br />
                Email : atelierpicpaf@gmail.com<br />
                Téléphone : 06 21 07 35 36<br />
                Directrice de la publication : Ludivine Sénéchaud
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>Hébergement</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Vercel Inc.<br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723, États-Unis<br />
                <a href="https://vercel.com" style={{ color:'var(--framboise)' }}>vercel.com</a>
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>Propriété intellectuelle</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                L&apos;ensemble des contenus présents sur ce site (textes, images, visuels) est la propriété exclusive de L&apos;atelier Pic &amp; Paf, sauf mention contraire. Toute reproduction est interdite sans autorisation préalable.
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>Responsabilité</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                L&apos;atelier Pic &amp; Paf s&apos;efforce de maintenir les informations de ce site à jour. Cependant, la responsabilité de l&apos;éditeur ne peut être engagée en cas d&apos;erreurs ou d&apos;omissions dans le contenu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
