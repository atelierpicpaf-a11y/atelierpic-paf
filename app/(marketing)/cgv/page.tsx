import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  robots: { index: false },
}

export default function CgvPage() {
  return (
    <div className="route-enter">
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:760 }}>
          <h1 className="sticker-title" style={{ fontSize:'clamp(36px,5vw,56px)', marginBottom:40 }}>Conditions Générales de Vente</h1>

          <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>Article 1 — Objet</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Les présentes conditions générales de vente régissent les relations contractuelles entre L&apos;atelier Pic &amp; Paf (ci-après « le Prestataire ») et toute personne physique ou morale souhaitant bénéficier des services proposés (ci-après « le Client »).
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>Article 2 — Réservation et paiement</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Toute réservation est confirmée après versement d&apos;un acompte de 30% du montant total. Le solde est réglé au plus tard 7 jours avant la date de la prestation. En cas d&apos;annulation par le Client plus de 15 jours avant la date, l&apos;acompte est remboursé intégralement.
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>Article 3 — Annulation par le Prestataire</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                En cas d&apos;annulation par le Prestataire (nombre de participants insuffisant, cas de force majeure), les sommes versées sont intégralement remboursées dans un délai de 7 jours ouvrés.
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>Article 4 — Prix</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Les prix indiqués sur le site sont en euros TTC. Le Prestataire se réserve le droit de modifier ses tarifs à tout moment. Les prix applicables sont ceux en vigueur au moment de la réservation.
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>Article 5 — Responsabilité</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Le Prestataire prend toutes les précautions nécessaires pour assurer la sécurité des participants. Les enfants mineurs restent sous la responsabilité de leurs parents pendant les ateliers. Le Prestataire décline toute responsabilité en cas de perte ou détérioration d&apos;objets personnels.
              </p>
            </div>

            <div>
              <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:12 }}>Article 6 — Droit applicable</h2>
              <p style={{ margin:0, lineHeight:1.7 }}>
                Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
