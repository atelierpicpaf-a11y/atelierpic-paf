import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Réservation annulée · L\'atelier Pic & Paf',
  description: 'Votre réservation n\'a pas été finalisée.',
  robots: { index: false, follow: false },
}

export default function ReservationAnnulePage() {
  return (
    <section style={{ padding: '80px 0 100px', background: 'var(--creme)', minHeight: '60vh' }}>
      <div className="container" style={{ maxWidth: 680, textAlign: 'center' }}>
        <div style={{ fontSize: 72, marginBottom: 20 }}>🧵</div>
        <h1 className="sticker-title h-fredoka" style={{ fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: 18 }}>
          Paiement annulé
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 28, opacity: 0.85 }}>
          Ta place n&apos;a pas été réservée — aucun montant n&apos;a été débité. Tu peux réessayer quand tu veux !
        </p>
        <div style={{ background: 'var(--creme-pale)', border: '2px dashed rgba(200,54,92,.25)', borderRadius: 20, padding: 28, marginBottom: 32 }}>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
            Une question ou un souci avec le paiement ?<br />
            Écris-moi à <strong>atelierpicpaf@gmail.com</strong> ou appelle le <strong>06 21 07 35 36</strong>.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/ateliers-enfants" className="cta-pill">Réessayer</Link>
          <Link href="/contact" className="cta-ghost">Me contacter</Link>
        </div>
      </div>
    </section>
  )
}
