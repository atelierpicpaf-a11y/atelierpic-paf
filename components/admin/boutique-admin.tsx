'use client'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import {
  createProduit,
  updateProduit,
  deleteProduit,
  createVariante,
  updateVariante,
  deleteVariante,
} from '@/app/(admin)/admin/actions'
import { ImageUploader } from '@/components/admin/image-uploader'
import type { Produit, VarianteProduit } from '@/types/supabase'

type ProduitAvecVariantes = Produit & { variantes: VarianteProduit[] }

export function BoutiqueAdmin({ initial }: { initial: ProduitAvecVariantes[] }) {
  const router = useRouter()
  const [produits, setProduits] = useState<ProduitAvecVariantes[]>(initial)
  const [pending, startTransition] = useTransition()
  const [savedId, setSavedId] = useState<string | null>(null)

  function patchProduit(id: string, patch: Partial<Produit>) {
    setProduits((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)))
  }
  function patchVariante(pid: string, vid: string, patch: Partial<VarianteProduit>) {
    setProduits((prev) =>
      prev.map((p) =>
        p.id === pid ? { ...p, variantes: p.variantes.map((v) => (v.id === vid ? { ...v, ...patch } : v)) } : p
      )
    )
  }

  // Persiste immédiatement un champ image (sans attendre "Enregistrer")
  function persistImage(id: string, patch: Partial<Produit>) {
    startTransition(async () => {
      await updateProduit(id, patch)
    })
  }
  function onUploadPrincipale(pid: string, url: string) {
    patchProduit(pid, { image_principale: url })
    persistImage(pid, { image_principale: url })
  }
  function onAddGallery(pid: string, url: string) {
    setProduits((prev) =>
      prev.map((p) => {
        if (p.id !== pid) return p
        const next = [...(p.images || []), url]
        persistImage(pid, { images: next })
        return { ...p, images: next }
      })
    )
  }
  function onRemoveGallery(pid: string, idx: number) {
    setProduits((prev) =>
      prev.map((p) => {
        if (p.id !== pid) return p
        const next = (p.images || []).filter((_, i) => i !== idx)
        persistImage(pid, { images: next })
        return { ...p, images: next }
      })
    )
  }

  function saveProduit(p: ProduitAvecVariantes) {
    startTransition(async () => {
      await updateProduit(p.id, {
        nom: p.nom,
        description: p.description,
        description_longue: p.description_longue,
        niveau: p.niveau,
        image_principale: p.image_principale,
        tuto_video_id: p.tuto_video_id,
        actif: p.actif,
        ordre: p.ordre,
      })
      for (const v of p.variantes) {
        await updateVariante(v.id, { nom: v.nom, prix_centimes: v.prix_centimes, stock: v.stock, actif: v.actif, ordre: v.ordre })
      }
      setSavedId(p.id)
      setTimeout(() => setSavedId(null), 2500)
      router.refresh()
    })
  }

  function handleAddProduit() {
    startTransition(async () => {
      await createProduit()
      router.refresh()
    })
  }
  function handleDeleteProduit(id: string) {
    if (!confirm('Supprimer définitivement ce coffret et ses variantes ?')) return
    startTransition(async () => {
      await deleteProduit(id)
      setProduits((prev) => prev.filter((p) => p.id !== id))
      router.refresh()
    })
  }
  function handleAddVariante(pid: string) {
    startTransition(async () => {
      await createVariante(pid)
      router.refresh()
    })
  }
  function handleDeleteVariante(vid: string) {
    if (!confirm('Supprimer cette variante ?')) return
    startTransition(async () => {
      await deleteVariante(vid)
      router.refresh()
    })
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <h1 className="h-fredoka" style={{ fontSize: 32, color: 'var(--framboise)', margin: 0 }}>Boutique · Coffrets</h1>
        <button onClick={handleAddProduit} disabled={pending} className="cta-pill" style={{ border: 'none', cursor: 'pointer', fontSize: 14, padding: '12px 22px' }}>
          + Ajouter un coffret
        </button>
      </div>

      {produits.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', opacity: 0.6 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎁</div>
          <p className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)' }}>Aucun coffret. Ajoute le premier !</p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {produits.map((p) => (
          <div key={p.id} className="card" style={{ padding: 22, opacity: p.actif ? 1 : 0.7 }}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
              <input className="input-admin" style={{ flex: 1, minWidth: 220, fontWeight: 600 }} value={p.nom} onChange={(e) => patchProduit(p.id, { nom: e.target.value })} placeholder="Nom du coffret" />
              <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
                <input type="checkbox" checked={p.actif} onChange={(e) => patchProduit(p.id, { actif: e.target.checked })} /> En ligne
              </label>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <input className="input-admin" value={p.niveau} onChange={(e) => patchProduit(p.id, { niveau: e.target.value })} placeholder="Niveau (Débutant…)" />
              <input className="input-admin" value={p.tuto_video_id || ''} onChange={(e) => patchProduit(p.id, { tuto_video_id: e.target.value })} placeholder="ID vidéo YouTube du tuto" />
            </div>
            {/* Photo principale */}
            <div style={{ background: 'var(--creme-pale)', borderRadius: 12, padding: 14, marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--framboise)', marginBottom: 8 }}>Photo principale</div>
              <ImageUploader value={p.image_principale} onUploaded={(url) => onUploadPrincipale(p.id, url)} label="photo" />
            </div>

            {/* Galerie (photos secondaires) */}
            <div style={{ background: 'var(--creme-pale)', borderRadius: 12, padding: 14, marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--framboise)', marginBottom: 8 }}>Galerie (photos en plus)</div>
              {(p.images || []).length > 0 && (
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                  {(p.images || []).map((img, idx) => (
                    <div key={idx} style={{ position: 'relative' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt="" style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 8, border: '2px solid var(--creme)' }} />
                      <button type="button" onClick={() => onRemoveGallery(p.id, idx)} title="Retirer" style={{ position: 'absolute', top: -6, right: -6, width: 20, height: 20, borderRadius: '50%', border: 'none', background: 'var(--framboise)', color: '#fff', fontSize: 12, cursor: 'pointer', lineHeight: 1 }}>✕</button>
                    </div>
                  ))}
                </div>
              )}
              <ImageUploader value={null} onUploaded={(url) => onAddGallery(p.id, url)} label="photo galerie" />
            </div>

            <textarea className="input-admin" style={{ marginBottom: 12, minHeight: 50 }} value={p.description || ''} onChange={(e) => patchProduit(p.id, { description: e.target.value })} placeholder="Description courte (carte boutique)" />
            <textarea className="input-admin" style={{ marginBottom: 16, minHeight: 70 }} value={p.description_longue || ''} onChange={(e) => patchProduit(p.id, { description_longue: e.target.value })} placeholder="Description longue (page produit)" />

            {/* Variantes */}
            <div style={{ background: 'var(--creme-pale)', borderRadius: 12, padding: 14, marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <strong style={{ fontSize: 14, color: 'var(--framboise)' }}>Variantes (prix &amp; stock)</strong>
                <button onClick={() => handleAddVariante(p.id)} disabled={pending} style={smallBtn}>+ variante</button>
              </div>
              {p.variantes.map((v) => (
                <div key={v.id} style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                  <input className="input-admin" style={{ flex: 1, minWidth: 140 }} value={v.nom} onChange={(e) => patchVariante(p.id, v.id, { nom: e.target.value })} placeholder="Nom variante" />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <input className="input-admin" style={{ width: 90 }} type="number" value={(v.prix_centimes / 100).toString()} onChange={(e) => patchVariante(p.id, v.id, { prix_centimes: Math.round(parseFloat(e.target.value || '0') * 100) })} placeholder="Prix €" />
                    <span style={{ fontSize: 13, opacity: 0.6 }}>€</span>
                  </div>
                  <input className="input-admin" style={{ width: 80 }} type="number" value={v.stock} onChange={(e) => patchVariante(p.id, v.id, { stock: parseInt(e.target.value || '0', 10) })} placeholder="Stock" title="Stock" />
                  <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13 }}>
                    <input type="checkbox" checked={v.actif} onChange={(e) => patchVariante(p.id, v.id, { actif: e.target.checked })} /> active
                  </label>
                  <button onClick={() => handleDeleteVariante(v.id)} disabled={pending} style={{ ...smallBtn, color: '#b00', borderColor: '#b00' }}>✕</button>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => saveProduit(p)} disabled={pending} className="cta-pill" style={{ border: 'none', cursor: 'pointer', fontSize: 14, padding: '10px 20px' }}>
                {savedId === p.id ? '✓ Enregistré' : '💾 Enregistrer'}
              </button>
              <a href={`/boutique/${p.slug}`} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: 'var(--framboise)' }}>Voir la page ↗</a>
              <button onClick={() => handleDeleteProduit(p.id)} disabled={pending} style={{ ...smallBtn, color: '#b00', borderColor: '#b00', marginLeft: 'auto' }}>Supprimer le coffret</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const smallBtn: React.CSSProperties = {
  padding: '6px 12px', borderRadius: 8, border: '1.5px solid var(--framboise)',
  background: '#fff', color: 'var(--framboise)', fontSize: 13, cursor: 'pointer', fontFamily: 'var(--font-fredoka)',
}
