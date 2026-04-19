import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Réservation confirmée · L\'atelier Pic & Paf',
  description: 'Votre réservation a bien été prise en compte.',
  robots: { index: false, follow: false },
}

export default function ReservationSuccesPage() {
  return (
    <section style={{ padding: '80px 0 100px', background: 'var(--creme)', minHeight: '60vh' }}>
      <div className="container" style={{ maxWidth: 680, textAlign: 'center' }}>
        <div style={{ fontSize: 72, marginBottom: 20 }}>🎉</div>
        <h1 className="sticker-title h-fredoka" style={{ fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: 18 }}>
          Merci, ta place est réservée !
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 28, opacity: 0.85 }}>
          Ton paiement a bien été reçu. Tu vas recevoir un email de confirmation d&apos;ici quelques minutes avec tous les détails de ton atelier.
        </p>
        <div style={{ background: 'var(--creme-pale)', border: '2px dashed rgba(200,54,92,.25)', borderRadius: 20, padding: 28, marginBottom: 32 }}>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
            📧 Un email a été envoyé à l&apos;adresse indiquée.<br />
            📞 Si tu ne le reçois pas dans les 10 minutes, vérifie tes spams ou contacte-moi au <strong>06 21 07 35 36</strong>.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="cta-pill">Retour à l&apos;accueil</Link>
          <Link href="/ateliers-enfants" className="cta-ghost">Voir les autres ateliers</Link>
        </div>
      </div>
    </section>
  )
}
