'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/components/boutique/cart-context'

export default function CommandeSuccesPage() {
  const { clear } = useCart()

  // Vide le panier dès l'arrivée sur la page de succès
  useEffect(() => {
    clear()
  }, [clear])

  return (
    <section style={{ padding: '80px 0 100px', background: 'var(--creme)', minHeight: '60vh' }}>
      <div className="container" style={{ maxWidth: 680, textAlign: 'center' }}>
        <div style={{ fontSize: 72, marginBottom: 20 }}>🎉</div>
        <h1 className="sticker-title h-fredoka" style={{ fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: 18 }}>
          Merci, ta commande est confirmée !
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 28, opacity: 0.85 }}>
          Ton paiement a bien été reçu. Je prépare ton coffret avec soin et tu recevras un email dès qu&apos;il sera expédié vers ton point relais.
        </p>
        <div style={{ background: 'var(--creme-pale)', border: '2px dashed rgba(200,54,92,.25)', borderRadius: 20, padding: 28, marginBottom: 32 }}>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
            📧 Un email de confirmation a été envoyé à ton adresse.<br />
            🎬 Le tuto vidéo est offert avec ton coffret.<br />
            📞 Une question ? Écris-moi ou appelle le <strong>06 21 07 35 36</strong>.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="cta-pill">Retour à l&apos;accueil</Link>
          <Link href="/boutique" className="cta-ghost">Continuer mes achats</Link>
        </div>
      </div>
    </section>
  )
}
