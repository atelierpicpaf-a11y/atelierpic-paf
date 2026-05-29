'use client'
import { useState, useTransition } from 'react'
import { updateCommandeStatut } from '@/app/(admin)/admin/actions'
import type { Commande, LigneCommande } from '@/types/supabase'

type CommandeAvecLignes = Commande & { lignes: LigneCommande[] }

const STATUTS: Commande['statut'][] = ['paye', 'preparee', 'expediee', 'livree', 'annulee']
const STATUT_LABEL: Record<string, string> = {
  en_attente_paiement: 'En attente paiement',
  paye: '✅ Payée',
  preparee: '📦 Préparée',
  expediee: '🚚 Expédiée',
  livree: '🎉 Livrée',
  annulee: '✕ Annulée',
}
const STATUT_COLOR: Record<string, string> = {
  en_attente_paiement: '#eee',
  paye: 'var(--menthe)',
  preparee: '#FFE08A',
  expediee: '#A8C5E0',
  livree: 'var(--rose)',
  annulee: '#ddd',
}

function euros(c: number): string {
  return (c / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

export function CommandesAdmin({ initial }: { initial: CommandeAvecLignes[] }) {
  const [commandes, setCommandes] = useState(initial)
  const [pending, startTransition] = useTransition()

  function changeStatut(id: string, statut: Commande['statut']) {
    setCommandes((prev) => prev.map((c) => (c.id === id ? { ...c, statut } : c)))
    startTransition(async () => {
      await updateCommandeStatut(id, statut)
    })
  }

  if (commandes.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0', opacity: 0.6 }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🛍️</div>
        <p className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)' }}>Aucune commande pour le moment</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {commandes.map((c) => (
        <div key={c.id} className="card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
            <div>
              <div className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)' }}>{c.numero}</div>
              <div style={{ fontSize: 13, opacity: 0.7 }}>{new Date(c.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
            </div>
            <select
              value={c.statut}
              onChange={(e) => changeStatut(c.id, e.target.value as Commande['statut'])}
              disabled={pending || c.statut === 'en_attente_paiement'}
              style={{ padding: '8px 14px', borderRadius: 999, border: 'none', background: STATUT_COLOR[c.statut] || '#eee', fontFamily: 'var(--font-fredoka)', fontSize: 14, cursor: 'pointer' }}
            >
              {c.statut === 'en_attente_paiement' && <option value="en_attente_paiement">{STATUT_LABEL.en_attente_paiement}</option>}
              {STATUTS.map((s) => (
                <option key={s} value={s}>{STATUT_LABEL[s]}</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {/* Client */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--framboise)', marginBottom: 4 }}>CLIENT</div>
              <div style={{ fontSize: 14 }}>{c.prenom} {c.nom}</div>
              <div style={{ fontSize: 13 }}><a href={`mailto:${c.email}`} style={{ color: 'var(--ink)' }}>{c.email}</a></div>
              {c.telephone && <div style={{ fontSize: 13 }}><a href={`tel:${c.telephone}`} style={{ color: 'var(--ink)' }}>{c.telephone}</a></div>}
            </div>
            {/* Point relais */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--framboise)', marginBottom: 4 }}>📦 POINT RELAIS</div>
              {c.mondial_relay_nom ? (
                <div style={{ fontSize: 13, lineHeight: 1.5 }}>
                  <strong>{c.mondial_relay_nom}</strong> <span style={{ opacity: 0.6 }}>({c.mondial_relay_id})</span><br />
                  {c.mondial_relay_adresse}<br />
                  {c.mondial_relay_cp} {c.mondial_relay_ville}
                </div>
              ) : <div style={{ fontSize: 13, opacity: 0.6 }}>—</div>}
            </div>
            {/* Articles */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--framboise)', marginBottom: 4 }}>ARTICLES</div>
              {c.lignes.map((l) => (
                <div key={l.id} style={{ fontSize: 13 }}>
                  {l.produit_nom}{l.variante_nom && l.variante_nom !== 'Standard' ? ` — ${l.variante_nom}` : ''} <span style={{ opacity: 0.6 }}>× {l.quantite}</span>
                </div>
              ))}
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--framboise)', marginTop: 6 }}>Total : {euros(c.montant_total_centimes)}</div>
            </div>
          </div>
          {c.message && <div style={{ marginTop: 12, fontSize: 13, fontStyle: 'italic', opacity: 0.8, background: 'var(--creme-pale)', padding: 10, borderRadius: 8 }}>« {c.message} »</div>}
        </div>
      ))}
    </div>
  )
}
