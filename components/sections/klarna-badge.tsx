/**
 * Badge Klarna « Paiement en 3× sans frais »
 *
 * Klarna est activé en backend via Stripe Checkout
 * (voir app/api/stripe/checkout/route.ts — payment_method_types: ['card', 'klarna']).
 *
 * Ce composant met en avant l'option 3× sur les pages marketing
 * pour lever le frein à la réservation (surtout sur les retraites à 390€).
 *
 * Props :
 * - prixCentimes : prix total en centimes (utilisé pour calculer 3×)
 * - variant : 'light' (fond crème, sur sections claires) ou 'dark' (sur fond framboise)
 */

interface KlarnaBadgeProps {
  prixCentimes: number
  variant?: 'light' | 'dark'
  size?: 'md' | 'sm'
}

export function KlarnaBadge({ prixCentimes, variant = 'light', size = 'md' }: KlarnaBadgeProps) {
  if (!prixCentimes || prixCentimes <= 0) return null
  const per3 = Math.round(prixCentimes / 3 / 100)

  const isDark = variant === 'dark'
  const isSm = size === 'sm'

  const wrapStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'stretch',
    gap: isSm ? 12 : 18,
    background: isDark ? 'rgba(251,244,228,0.12)' : 'var(--creme)',
    border: isDark ? '2px dashed rgba(251,244,228,0.55)' : '2px dashed var(--framboise)',
    borderRadius: isSm ? 16 : 22,
    padding: isSm ? '8px 14px' : '14px 22px',
    boxShadow: isDark ? 'none' : 'var(--shadow-card)',
    position: 'relative',
    overflow: 'hidden',
  }

  const textPrimary = isDark ? 'var(--creme)' : 'var(--framboise)'
  const textSecondary = isDark ? 'rgba(251,244,228,0.85)' : 'rgba(42,19,19,0.75)'
  const divider = isDark ? 'rgba(251,244,228,0.32)' : 'rgba(200,54,92,0.2)'

  return (
    <div style={wrapStyle} role="group" aria-label={`Paiement en 3 fois sans frais de ${per3} euros par mois avec Klarna`}>
      {/* Petit flash menthe "NOUVEAU" si besoin d'attirer l'œil — commenté pour rester sobre */}
      {/* <span style={{ position:'absolute', top:-8, right:12, background:'var(--menthe)', color:'#1a4a42', fontSize:10, fontWeight:700, padding:'3px 10px', borderRadius:999, letterSpacing:1 }}>NOUVEAU</span> */}

      {/* Bloc gauche — gros "3×" */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingRight: isSm ? 12 : 18,
          borderRight: `1px solid ${divider}`,
          minWidth: isSm ? 52 : 72,
        }}
      >
        <div
          className="h-fredoka"
          style={{
            fontSize: isSm ? 30 : 42,
            color: textPrimary,
            lineHeight: 0.95,
            fontWeight: 700,
          }}
        >
          3×
        </div>
        <div style={{ fontSize: isSm ? 9 : 11, opacity: 0.8, marginTop: 2, letterSpacing: 0.5, textTransform: 'uppercase', color: textSecondary }}>
          sans frais
        </div>
      </div>

      {/* Bloc droit — montant mensuel + Klarna */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          className="h-fredoka"
          style={{
            fontSize: isSm ? 18 : 24,
            color: textPrimary,
            lineHeight: 1.05,
            fontWeight: 700,
          }}
        >
          {per3}€ <span style={{ fontSize: isSm ? 12 : 16, opacity: 0.85, fontWeight: 500 }}>/ mois</span>
        </div>
        <div style={{ fontSize: isSm ? 11 : 12.5, color: textSecondary, marginTop: isSm ? 2 : 4, lineHeight: 1.3 }}>
          Paiement en 3 fois avec <strong style={{ color: textPrimary, fontWeight: 700 }}>Klarna</strong>
        </div>
      </div>
    </div>
  )
}
