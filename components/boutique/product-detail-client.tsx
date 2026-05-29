'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useCart } from './cart-context'
import type { Produit, VarianteProduit } from '@/types/supabase'

function euros(centimes: number): string {
  return (centimes / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

export function ProductDetailClient({
  produit,
  variantes,
  baseGalerie,
}: {
  produit: Produit
  variantes: VarianteProduit[]
  baseGalerie: string[]
}) {
  const { addItem } = useCart()
  const dispo = variantes.filter((v) => v.actif)
  const [selectedId, setSelectedId] = useState<string>(dispo[0]?.id ?? '')
  const [added, setAdded] = useState(false)
  const [activeImg, setActiveImg] = useState(0)

  const selected = dispo.find((v) => v.id === selectedId) ?? dispo[0]
  const rupture = !selected || selected.stock <= 0
  const showVariantes = dispo.length > 1

  // Galerie effective : la photo de la variante (coloris) en 1er si elle existe, puis la galerie produit
  const galerie = useMemo(() => {
    const imgs = [...baseGalerie]
    if (selected?.image) {
      // place la photo de la variante en tête (sans doublon)
      const filtered = imgs.filter((i) => i !== selected.image)
      return [selected.image, ...filtered]
    }
    return imgs
  }, [baseGalerie, selected])

  const mainImg = galerie[activeImg] ?? galerie[0] ?? null

  function selectVariante(id: string) {
    setSelectedId(id)
    setActiveImg(0) // revient sur la photo du coloris choisi
  }

  function handleAdd() {
    if (!selected || rupture) return
    addItem({
      varianteId: selected.id,
      produitSlug: produit.slug,
      produitNom: produit.nom,
      varianteNom: selected.nom,
      prixCentimes: selected.prix_centimes,
      image: selected.image || produit.image_principale,
      stock: selected.stock,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 3500)
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 44, alignItems: 'start' }}>
      {/* GALERIE */}
      <div>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', borderRadius: 28, overflow: 'hidden', background: 'var(--creme-pale)', boxShadow: 'var(--shadow-card)' }}>
          {mainImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={mainImg} alt={`${produit.nom}${selected ? ' — ' + selected.nom : ''}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 96 }}>🎁</div>
          )}
        </div>
        {galerie.length > 1 && (
          <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
            {galerie.map((img, i) => (
              <button
                key={img + i}
                type="button"
                onClick={() => setActiveImg(i)}
                style={{ position: 'relative', width: 72, height: 72, borderRadius: 12, overflow: 'hidden', border: `2px solid ${i === activeImg ? 'var(--framboise)' : 'var(--creme)'}`, cursor: 'pointer', padding: 0, background: 'none' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* INFOS + ACHAT */}
      <div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
          <span className="badge" style={{ background: 'var(--rose)', color: '#7a2d2d', fontSize: 12 }}>{produit.niveau}</span>
          {produit.tuto_video_id && <span className="badge mint" style={{ background: 'var(--menthe)', color: '#1a4a42', fontSize: 12 }}>🎬 Tuto vidéo offert</span>}
        </div>
        <h1 className="h-fredoka" style={{ fontSize: 'clamp(30px,4vw,44px)', color: 'var(--framboise)', margin: '0 0 16px', lineHeight: 1.1 }}>{produit.nom}</h1>
        {produit.description && <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85, marginBottom: 22 }}>{produit.description}</p>}

        <div className="h-fredoka" style={{ fontSize: 38, color: 'var(--framboise)', marginBottom: 18 }}>
          {selected ? euros(selected.prix_centimes) : '—'}
        </div>

        {showVariantes && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10, opacity: 0.8 }}>Choisis ton coloris :</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {dispo.map((v) => {
                const isSel = v.id === selectedId
                const vRupture = v.stock <= 0
                return (
                  <button
                    key={v.id}
                    type="button"
                    disabled={vRupture}
                    onClick={() => selectVariante(v.id)}
                    style={{
                      padding: '10px 18px', borderRadius: 999,
                      border: `2px solid ${isSel ? 'var(--framboise)' : 'rgba(200,54,92,.3)'}`,
                      background: isSel ? 'var(--framboise)' : 'var(--creme)',
                      color: isSel ? 'var(--creme)' : 'var(--framboise)',
                      fontFamily: 'var(--font-fredoka)', fontSize: 14, fontWeight: 600,
                      cursor: vRupture ? 'not-allowed' : 'pointer', opacity: vRupture ? 0.45 : 1,
                      textDecoration: vRupture ? 'line-through' : 'none',
                    }}
                  >
                    {v.nom}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {selected && !rupture && selected.stock <= 5 && (
          <p style={{ fontSize: 13.5, color: 'var(--framboise)', fontWeight: 600, marginBottom: 14 }}>🔥 Plus que {selected.stock} en stock</p>
        )}

        {rupture ? (
          <div style={{ padding: '14px 24px', borderRadius: 999, background: 'var(--rose)', color: '#7a2d2d', fontFamily: 'var(--font-fredoka)', fontWeight: 700, display: 'inline-block' }}>
            Bientôt de retour
          </div>
        ) : added ? (
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="h-fredoka" style={{ color: 'var(--framboise)', fontSize: 15 }}>✓ Ajouté au panier !</span>
            <Link href="/panier" className="cta-pill" style={{ padding: '12px 24px', fontSize: 14 }}>Voir mon panier →</Link>
          </div>
        ) : (
          <button type="button" onClick={handleAdd} className="cta-pill anim-cta-pulse" style={{ padding: '14px 30px', fontSize: 16, border: 'none', cursor: 'pointer' }}>
            🛒 Ajouter au panier
          </button>
        )}

        <p style={{ marginTop: 18, fontSize: 13, opacity: 0.65, lineHeight: 1.6 }}>
          📦 Livraison Mondial Relay 4,90 € · 💳 Paiement carte ou 3× sans frais Klarna
        </p>
      </div>
    </div>
  )
}
