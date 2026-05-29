'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/components/boutique/cart-context'
import { MondialRelayPicker, type RelayPoint } from '@/components/boutique/mondial-relay-picker'

const LIVRAISON_CENTIMES = 490

function euros(centimes: number): string {
  return (centimes / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

export default function PanierPage() {
  const { items, setQty, removeItem, totalCentimes, count, hydrated } = useCart()
  const [relais, setRelais] = useState<RelayPoint | null>(null)
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', telephone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const totalAvecLivraison = totalCentimes + (count > 0 ? LIVRAISON_CENTIMES : 0)

  function update(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  async function handleCheckout() {
    setError(null)
    if (count === 0) return
    if (!form.prenom || !form.nom || !form.email || !form.telephone) {
      setError('Merci de remplir tes coordonnées (prénom, nom, email, téléphone).')
      return
    }
    if (!relais) {
      setError('Merci de choisir un point relais Mondial Relay pour la livraison.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/boutique/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({ varianteId: i.varianteId, quantite: i.quantite })),
          prenom: form.prenom,
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          message: form.message,
          relais,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Une erreur est survenue.')
        setLoading(false)
        return
      }
      window.location.href = data.url
    } catch {
      setError('Erreur de connexion. Réessaie dans un instant.')
      setLoading(false)
    }
  }

  if (!hydrated) {
    return (
      <section style={{ padding: '80px 0', background: 'var(--creme)', minHeight: '50vh' }}>
        <div className="container" style={{ textAlign: 'center' }}><p style={{ opacity: 0.6 }}>Chargement du panier…</p></div>
      </section>
    )
  }

  if (count === 0) {
    return (
      <section style={{ padding: '90px 0 100px', background: 'var(--creme)', minHeight: '55vh' }}>
        <div className="container" style={{ maxWidth: 600, textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🛒</div>
          <h1 className="sticker-title h-fredoka" style={{ fontSize: 'clamp(30px,5vw,48px)', marginBottom: 16 }}>Ton panier est vide</h1>
          <p style={{ fontSize: 17, opacity: 0.82, marginBottom: 28 }}>Va craquer pour un coffret créatif, on les a tous avec leur tuto vidéo offert 🎁</p>
          <Link href="/boutique" className="cta-pill">Voir la boutique</Link>
        </div>
      </section>
    )
  }

  return (
    <div className="route-enter">
      <section style={{ padding: '60px 0 100px', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <h1 className="sticker-title h-fredoka" style={{ fontSize: 'clamp(32px,5vw,52px)', marginBottom: 36, textAlign: 'center' }}>Mon panier</h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'start' }}>
            {/* COLONNE GAUCHE : articles + formulaire + relais */}
            <div>
              {/* Articles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
                {items.map((it) => (
                  <div key={it.varianteId} style={{ display: 'flex', gap: 14, padding: 14, background: 'var(--creme-pale)', borderRadius: 16, border: '1.5px solid rgba(200,54,92,.15)', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: 64, height: 64, borderRadius: 12, overflow: 'hidden', background: 'var(--creme)', flexShrink: 0 }}>
                      {it.image ? <Image src={it.image} alt={it.produitNom} fill sizes="64px" style={{ objectFit: 'cover' }} unoptimized /> : <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>🎁</div>}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="h-fredoka" style={{ fontSize: 16, color: 'var(--framboise)', lineHeight: 1.2 }}>{it.produitNom}</div>
                      {it.varianteNom && it.varianteNom !== 'Standard' && <div style={{ fontSize: 13, opacity: 0.7 }}>{it.varianteNom}</div>}
                      <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{euros(it.prixCentimes)}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button type="button" onClick={() => setQty(it.varianteId, it.quantite - 1)} style={qtyBtn} aria-label="Moins">−</button>
                      <span style={{ minWidth: 22, textAlign: 'center', fontWeight: 600 }}>{it.quantite}</span>
                      <button type="button" onClick={() => setQty(it.varianteId, it.quantite + 1)} disabled={it.quantite >= it.stock} style={{ ...qtyBtn, opacity: it.quantite >= it.stock ? 0.4 : 1 }} aria-label="Plus">+</button>
                    </div>
                    <button type="button" onClick={() => removeItem(it.varianteId)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--framboise)', fontSize: 18, opacity: 0.6 }} aria-label="Retirer">✕</button>
                  </div>
                ))}
              </div>

              {/* Coordonnées */}
              <h2 className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)', marginBottom: 16 }}>Tes coordonnées</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <input style={inp} placeholder="Prénom *" value={form.prenom} onChange={(e) => update('prenom', e.target.value)} />
                <input style={inp} placeholder="Nom *" value={form.nom} onChange={(e) => update('nom', e.target.value)} />
              </div>
              <input style={{ ...inp, marginBottom: 12 }} type="email" placeholder="Email *" value={form.email} onChange={(e) => update('email', e.target.value)} />
              <input style={{ ...inp, marginBottom: 12 }} type="tel" placeholder="Téléphone *" value={form.telephone} onChange={(e) => update('telephone', e.target.value)} />
              <textarea style={{ ...inp, minHeight: 70, resize: 'vertical' }} placeholder="Un mot pour ta commande (facultatif)" value={form.message} onChange={(e) => update('message', e.target.value)} />

              {/* Point relais */}
              <h2 className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)', margin: '28px 0 16px' }}>Choisis ton point relais 📦</h2>
              {relais && (
                <div style={{ marginBottom: 14, padding: 14, background: 'var(--menthe)', borderRadius: 12, color: '#1a4a42' }}>
                  <strong>✓ {relais.nom}</strong><br />
                  <span style={{ fontSize: 14 }}>{relais.adresse}, {relais.cp} {relais.ville}</span>
                </div>
              )}
              <MondialRelayPicker onSelect={setRelais} />
            </div>

            {/* COLONNE DROITE : récap + paiement (sticky) */}
            <div style={{ position: 'sticky', top: 100 }}>
              <div style={{ background: 'var(--creme-pale)', borderRadius: 24, padding: 28, border: '2px solid rgba(200,54,92,.18)' }}>
                <h2 className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)', marginBottom: 18 }}>Récapitulatif</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 15 }}>
                  <span>Sous-total ({count} article{count > 1 ? 's' : ''})</span>
                  <span style={{ fontWeight: 600 }}>{euros(totalCentimes)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, fontSize: 15 }}>
                  <span>Livraison Mondial Relay</span>
                  <span style={{ fontWeight: 600 }}>{euros(LIVRAISON_CENTIMES)}</span>
                </div>
                <div style={{ borderTop: '1px dashed rgba(200,54,92,.3)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
                  <span className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)' }}>Total</span>
                  <span className="h-fredoka" style={{ fontSize: 26, color: 'var(--framboise)' }}>{euros(totalAvecLivraison)}</span>
                </div>

                {error && <p style={{ color: '#b00', fontSize: 14, marginBottom: 14, lineHeight: 1.5 }}>{error}</p>}

                <button type="button" onClick={handleCheckout} disabled={loading} className="cta-pill" style={{ width: '100%', padding: '16px', fontSize: 16, border: 'none', cursor: loading ? 'wait' : 'pointer', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Redirection…' : 'Payer ma commande →'}
                </button>
                <p style={{ fontSize: 12, opacity: 0.65, textAlign: 'center', marginTop: 12, lineHeight: 1.5 }}>
                  Paiement sécurisé Stripe · carte ou 3× sans frais Klarna
                </p>
                <Link href="/boutique" style={{ display: 'block', textAlign: 'center', marginTop: 14, fontSize: 14, color: 'var(--framboise)', textDecoration: 'none' }}>← Continuer mes achats</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const qtyBtn: React.CSSProperties = {
  width: 28, height: 28, borderRadius: 8, border: '1.5px solid var(--framboise)',
  background: 'var(--creme)', color: 'var(--framboise)', fontSize: 16, cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1,
}
const inp: React.CSSProperties = {
  width: '100%', padding: '12px 14px', borderRadius: 12,
  border: '1.5px solid rgba(200,54,92,.3)', background: '#fff',
  fontFamily: 'inherit', fontSize: 15, outline: 'none',
}
