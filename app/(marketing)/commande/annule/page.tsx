import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commande annulée · L\'atelier Pic & Paf',
  description: 'Votre commande n\'a pas été finalisée.',
  robots: { index: false, follow: false },
}

export default function CommandeAnnulePage() {
  return (
    <section style={{ padding: '80px 0 100px', background: 'var(--creme)', minHeight: '55vh' }}>
      <div className="container" style={{ maxWidth: 640, textAlign: 'center' }}>
        <div style={{ fontSize: 64, marginBottom: 18 }}>🛒</div>
        <h1 className="sticker-title h-fredoka" style={{ fontSize: 'clamp(30px, 5vw, 48px)', marginBottom: 16 }}>
          Commande non finalisée
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 28, opacity: 0.85 }}>
          Pas de souci, rien n&apos;a été débité. Ton panier est toujours là si tu veux reprendre, ou écris-moi si tu as une question.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/panier" className="cta-pill">Reprendre ma commande</Link>
          <Link href="/contact" className="cta-ghost">Me contacter</Link>
        </div>
      </div>
    </section>
  )
}
