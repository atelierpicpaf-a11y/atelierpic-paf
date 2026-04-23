'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import type { AtelierEnfantRow, Session, ConfigAtelier, Reservation } from '@/types/supabase'

export type ReservationWithAtelier = Reservation & {
  atelier_titre: string | null
  atelier_date: string | null
  atelier_ville: string | null
}
import {
  adminLogout,
  createAtelierEnfant, updateAtelierEnfant, deleteAtelierEnfant,
  createJournee, updateJournee, deleteJournee,
  createRetraite, updateRetraite, deleteRetraite,
  updateConfig,
} from '@/app/(admin)/admin/actions'

type Tab = 'reservations' | 'enfants' | 'journees_dates' | 'journees_config' | 'retraites_dates' | 'retraites_config'
type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

const CATEGORIES_ENFANT = [
  { val: 'hebdo', label: 'Atelier ponctuel' },
  { val: 'stage', label: 'Stage vacances' },
  { val: 'anniversaire', label: 'Anniversaire' },
  { val: 'scolaire', label: 'Scolaire' },
  { val: 'evenement', label: "Fête / événement" },
]
const STATUTS = [
  { val: 'ouvert', label: 'Ouvert' },
  { val: 'complet', label: 'Complet' },
  { val: 'annule', label: 'Annulé' },
]

// ── Styles partagés (statiques, définis hors du composant) ──
const INPUT_S: React.CSSProperties = {
  width: '100%', padding: '9px 12px', border: '1.5px solid rgba(200,54,92,.25)',
  borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit', background: '#fafafa',
}
const SELECT_S: React.CSSProperties = { ...INPUT_S }
const TEXTAREA_S: React.CSSProperties = { ...INPUT_S, resize: 'vertical', minHeight: 72 }
const LABEL_S: React.CSSProperties = {
  fontSize: 12, fontWeight: 600, color: 'var(--framboise)', marginBottom: 4,
  display: 'block', fontFamily: "var(--font-fredoka)", letterSpacing: '.3px',
}

// ── FieldGroup en dehors du composant — évite la perte de focus à chaque frappe ──
function FieldGroup({ label, children, style }: { label: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={style}>
      <span style={LABEL_S}>{label}</span>
      {children}
    </div>
  )
}

interface Props {
  initialEnfants: AtelierEnfantRow[]
  initialJournees: Session[]
  initialRetraites: Session[]
  initialConfigJournees: ConfigAtelier
  initialConfigRetraites: ConfigAtelier
  initialReservations: ReservationWithAtelier[]
}

export function AdminDashboard({ initialEnfants, initialJournees, initialRetraites, initialConfigJournees, initialConfigRetraites, initialReservations }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('reservations')
  const [reservations] = useState<ReservationWithAtelier[]>(initialReservations)
  const [enfants, setEnfants] = useState<AtelierEnfantRow[]>(initialEnfants)
  const [journees, setJournees] = useState<Session[]>(initialJournees)
  const [retraites, setRetraites] = useState<Session[]>(initialRetraites)
  const [cfgJournees, setCfgJournees] = useState<ConfigAtelier>(initialConfigJournees)
  const [cfgRetraites, setCfgRetraites] = useState<ConfigAtelier>(initialConfigRetraites)

  // Dirty tracking — sauvegarde manuelle
  const [dirtyEnfants, setDirtyEnfants] = useState<Set<string>>(new Set())
  const [dirtyJournees, setDirtyJournees] = useState<Set<string>>(new Set())
  const [dirtyRetraites, setDirtyRetraites] = useState<Set<string>>(new Set())
  const [dirtyCfgJournees, setDirtyCfgJournees] = useState(false)
  const [dirtyCfgRetraites, setDirtyCfgRetraites] = useState(false)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const hasChanges = dirtyEnfants.size > 0 || dirtyJournees.size > 0 || dirtyRetraites.size > 0 || dirtyCfgJournees || dirtyCfgRetraites

  // ── Sauvegarde globale ───────────────────────────────────
  async function handleSave() {
    if (!hasChanges) return
    setSaveStatus('saving')
    try {
      const toSaveEnfants = enfants.filter(a => dirtyEnfants.has(a.id))
      const toSaveJournees = journees.filter(j => dirtyJournees.has(j.id))
      const toSaveRetraites = retraites.filter(r => dirtyRetraites.has(r.id))

      await Promise.all([
        ...toSaveEnfants.map(a => updateAtelierEnfant(a.id, a)),
        ...toSaveJournees.map(j => updateJournee(j.id, j)),
        ...toSaveRetraites.map(r => updateRetraite(r.id, r)),
        ...(dirtyCfgJournees ? [updateConfig('journees', cfgJournees)] : []),
        ...(dirtyCfgRetraites ? [updateConfig('retraites', cfgRetraites)] : []),
      ])

      setDirtyEnfants(new Set())
      setDirtyJournees(new Set())
      setDirtyRetraites(new Set())
      setDirtyCfgJournees(false)
      setDirtyCfgRetraites(false)
      setSaveStatus('saved')
      setTimeout(() => setSaveStatus('idle'), 2500)
    } catch {
      setSaveStatus('error')
    }
  }

  // ── Ateliers enfants ─────────────────────────────────────
  function updateEnfantField(id: string, field: keyof AtelierEnfantRow, value: string | number | boolean | null) {
    setEnfants(prev => prev.map(a => a.id === id ? { ...a, [field]: value } : a))
    setDirtyEnfants(prev => new Set(prev).add(id))
  }

  function handleAddEnfant() {
    startTransition(async () => {
      try {
        const newA = await createAtelierEnfant()
        setEnfants(prev => [...prev, newA])
      } catch { setSaveStatus('error') }
    })
  }

  function handleDeleteEnfant(id: string) {
    if (!confirm('Supprimer cet atelier ?')) return
    startTransition(async () => {
      await deleteAtelierEnfant(id)
      setEnfants(prev => prev.filter(a => a.id !== id))
      setDirtyEnfants(prev => { const s = new Set(prev); s.delete(id); return s })
    })
  }

  // ── Journées ─────────────────────────────────────────────
  function updateJourneeField(id: string, field: keyof Session, value: string | number | null) {
    setJournees(prev => prev.map(j => j.id === id ? { ...j, [field]: value } : j))
    setDirtyJournees(prev => new Set(prev).add(id))
  }

  function handleAddJournee() {
    startTransition(async () => {
      try {
        const j = await createJournee()
        setJournees(prev => [...prev, j])
      } catch { setSaveStatus('error') }
    })
  }

  function handleDeleteJournee(id: string) {
    if (!confirm('Supprimer cette date ?')) return
    startTransition(async () => {
      await deleteJournee(id)
      setJournees(prev => prev.filter(j => j.id !== id))
      setDirtyJournees(prev => { const s = new Set(prev); s.delete(id); return s })
    })
  }

  // ── Retraites ────────────────────────────────────────────
  function updateRetraiteField(id: string, field: keyof Session, value: string | number | null) {
    setRetraites(prev => prev.map(r => r.id === id ? { ...r, [field]: value } : r))
    setDirtyRetraites(prev => new Set(prev).add(id))
  }

  function handleAddRetraite() {
    startTransition(async () => {
      try {
        const r = await createRetraite()
        setRetraites(prev => [...prev, r])
      } catch { setSaveStatus('error') }
    })
  }

  function handleDeleteRetraite(id: string) {
    if (!confirm('Supprimer cette retraite ?')) return
    startTransition(async () => {
      await deleteRetraite(id)
      setRetraites(prev => prev.filter(r => r.id !== id))
      setDirtyRetraites(prev => { const s = new Set(prev); s.delete(id); return s })
    })
  }

  // ── Config ───────────────────────────────────────────────
  function updateCfgJournees(field: keyof ConfigAtelier, value: string | number) {
    setCfgJournees(prev => ({ ...prev, [field]: value }))
    setDirtyCfgJournees(true)
  }

  function updateCfgRetraites(field: keyof ConfigAtelier, value: string | number) {
    setCfgRetraites(prev => ({ ...prev, [field]: value }))
    setDirtyCfgRetraites(true)
  }

  // ── Helpers date ─────────────────────────────────────────
  function toDateInput(iso: string | null | undefined) { return iso ? iso.split('T')[0] : '' }
  function fromDateInput(val: string, time = '09:30') { return val ? `${val}T${time}:00+01:00` : '' }

  // ── Styles locaux (dans le composant, pas de composant enfant → pas de bug de focus) ──
  const S = {
    page: { minHeight: '100vh', background: 'var(--creme-pale)', fontFamily: "var(--font-body)" } as React.CSSProperties,
    header: { background: 'var(--framboise)', color: 'var(--creme)', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', gap: 16 } as React.CSSProperties,
    tabBar: { background: '#fff', borderBottom: '2px solid rgba(200,54,92,.12)', padding: '0 28px', display: 'flex', gap: 6, overflowX: 'auto' as const },
    tabBtn: (active: boolean): React.CSSProperties => ({
      padding: '14px 18px', borderRadius: '12px 12px 0 0', border: 'none', cursor: 'pointer',
      fontFamily: "var(--font-fredoka)", fontSize: 15, letterSpacing: '.3px',
      background: active ? 'var(--framboise)' : 'transparent',
      color: active ? '#fff' : 'var(--ink)', transition: 'all .15s', whiteSpace: 'nowrap' as const,
    }),
    content: { padding: '32px 28px', maxWidth: 900, margin: '0 auto' } as React.CSSProperties,
    sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 } as React.CSSProperties,
    sectionTitle: { fontFamily: "var(--font-fredoka)", fontSize: 26, color: 'var(--ink)', margin: 0 } as React.CSSProperties,
    card: { background: '#fff', border: '2px solid rgba(200,54,92,.15)', borderRadius: 20, padding: '20px 22px', marginBottom: 16 } as React.CSSProperties,
    cardTitle: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 } as React.CSSProperties,
    emojiBox: { width: 44, height: 44, background: 'rgba(200,54,92,.08)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 } as React.CSSProperties,
    titleInput: { flex: 1, fontFamily: "var(--font-fredoka)", fontSize: 20, color: 'var(--framboise)', background: 'none', border: '2px solid transparent', borderRadius: 10, padding: '6px 10px', outline: 'none', width: '100%' } as React.CSSProperties,
    deleteBtn: { padding: '7px 16px', borderRadius: 999, border: '1.5px solid var(--framboise)', background: 'none', color: 'var(--framboise)', fontFamily: "var(--font-fredoka)", fontSize: 14, cursor: 'pointer', whiteSpace: 'nowrap' as const } as React.CSSProperties,
    row: { display: 'grid', gap: 12, marginBottom: 12 } as React.CSSProperties,
    addBtn: { fontFamily: "var(--font-fredoka)", fontSize: 15, color: '#fff', background: 'var(--framboise)', padding: '10px 22px', borderRadius: 999, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 } as React.CSSProperties,
    bottomBar: { position: 'fixed' as const, bottom: 0, left: 0, right: 0, background: 'var(--creme)', borderTop: '2px solid rgba(200,54,92,.15)', padding: '10px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 30 } as React.CSSProperties,
  }

  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: 'reservations', label: 'Réservations', count: reservations.length },
    { id: 'enfants', label: 'Ateliers enfants', count: enfants.length },
    { id: 'journees_dates', label: 'Dates journées', count: journees.length },
    { id: 'journees_config', label: 'Config journées' },
    { id: 'retraites_dates', label: 'Dates retraites', count: retraites.length },
    { id: 'retraites_config', label: 'Config retraites' },
  ]

  return (
    <div style={S.page}>
      {/* ── Header ── */}
      <header style={S.header}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "var(--font-fredoka)", fontSize: 20, fontWeight: 700, color: '#fff', flexShrink: 0 }}>L</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-fredoka)", fontSize: 20, lineHeight: 1.2 }}>Espace Ludivine</div>
          <div style={{ fontSize: 13, opacity: .75 }}>Gérer tes ateliers, dates et disponibilités</div>
        </div>
        <form action={adminLogout}>
          <button type="submit" style={{ padding: '8px 18px', borderRadius: 999, border: '1.5px solid rgba(255,255,255,.5)', background: 'none', color: '#fff', fontFamily: "var(--font-fredoka)", fontSize: 14, cursor: 'pointer' }}>Déconnexion</button>
        </form>
        <a href="/" style={{ width: 34, height: 34, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, textDecoration: 'none', flexShrink: 0 }}>×</a>
      </header>

      {/* ── Tab bar ── */}
      <nav style={S.tabBar}>
        {tabs.map(t => (
          <button key={t.id} style={S.tabBtn(activeTab === t.id)} onClick={() => setActiveTab(t.id)}>
            {t.label}{t.count !== undefined ? ` · ${t.count}` : ''}
          </button>
        ))}
      </nav>

      {/* ── Content ── */}
      <div style={{ ...S.content, paddingBottom: 80, maxWidth: activeTab === 'reservations' ? 1100 : 900 }}>

        {/* ── Réservations ── */}
        {activeTab === 'reservations' && (
          <ReservationsPanel reservations={reservations} />
        )}

        {/* ── Ateliers enfants ── */}
        {activeTab === 'enfants' && (
          <>
            <div style={S.sectionHeader}>
              <h1 style={S.sectionTitle}>Ateliers enfants ({enfants.length})</h1>
              <button style={S.addBtn} onClick={handleAddEnfant} disabled={isPending}>+ Ajouter un atelier</button>
            </div>
            {enfants.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 0', opacity: .5 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🧵</div>
                <p style={{ fontFamily: "var(--font-fredoka)", fontSize: 20, color: 'var(--framboise)' }}>Aucun atelier — clique sur &quot;+ Ajouter&quot; pour commencer</p>
              </div>
            )}
            {enfants.map(a => (
              <div key={a.id} style={{ ...S.card, ...(dirtyEnfants.has(a.id) ? { borderColor: 'rgba(200,54,92,.45)' } : {}) }}>
                {/* Titre + actif + supprimer */}
                <div style={S.cardTitle}>
                  <div style={S.emojiBox}>{a.emoji || '🧵'}</div>
                  <input
                    style={S.titleInput}
                    value={a.titre}
                    onChange={e => updateEnfantField(a.id, 'titre', e.target.value)}
                    onFocus={e => (e.target.style.borderColor = 'rgba(200,54,92,.35)')}
                    onBlur={e => (e.target.style.borderColor = 'transparent')}
                    placeholder="Nom / thème de l'atelier"
                  />
                  <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontFamily: "var(--font-fredoka)", fontSize: 14, color: a.actif ? 'var(--framboise)' : '#999', flexShrink: 0 }}>
                    <input
                      type="checkbox"
                      checked={a.actif}
                      onChange={e => updateEnfantField(a.id, 'actif', e.target.checked)}
                      style={{ width: 18, height: 18, accentColor: 'var(--framboise)', cursor: 'pointer' }}
                    />
                    Visible
                  </label>
                  <button style={S.deleteBtn} onClick={() => handleDeleteEnfant(a.id)}>Supprimer</button>
                </div>

                {/* Date | Lieu | Catégorie | Prix */}
                <div style={{ ...S.row, gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                  <FieldGroup label="Date de l'atelier">
                    <input
                      style={INPUT_S}
                      type="date"
                      value={toDateInput(a.date_atelier)}
                      onChange={e => updateEnfantField(a.id, 'date_atelier', fromDateInput(e.target.value, '14:00'))}
                    />
                  </FieldGroup>
                  <FieldGroup label="Lieu / Ville">
                    <input
                      style={INPUT_S}
                      value={a.ville}
                      onChange={e => updateEnfantField(a.id, 'ville', e.target.value)}
                      placeholder="Poitiers"
                    />
                  </FieldGroup>
                  <FieldGroup label="Type">
                    <select
                      style={SELECT_S}
                      value={a.categorie}
                      onChange={e => updateEnfantField(a.id, 'categorie', e.target.value)}
                    >
                      {CATEGORIES_ENFANT.map(c => <option key={c.val} value={c.val}>{c.label}</option>)}
                    </select>
                  </FieldGroup>
                  <FieldGroup label="Prix affiché">
                    <input
                      style={INPUT_S}
                      value={a.prix_texte ?? ''}
                      onChange={e => updateEnfantField(a.id, 'prix_texte', e.target.value)}
                      placeholder="25€ / 1h30"
                    />
                  </FieldGroup>
                </div>

                {/* Prix Stripe (€) | Places dispo | Places max */}
                <div style={{ ...S.row, gridTemplateColumns: '1fr 1fr 1fr', marginBottom: 12 }}>
                  <FieldGroup label="Prix Stripe (€)">
                    <input
                      style={INPUT_S}
                      type="number"
                      min={0}
                      step={0.01}
                      value={a.prix_centimes > 0 ? (a.prix_centimes / 100).toString() : ''}
                      onChange={e => updateEnfantField(a.id, 'prix_centimes', e.target.value === '' ? 0 : Math.round(Number(e.target.value) * 100))}
                      placeholder="25"
                    />
                  </FieldGroup>
                  <FieldGroup label="Places dispo">
                    <input
                      style={INPUT_S}
                      type="number"
                      min={0}
                      max={100}
                      value={a.places_dispo ?? ''}
                      onChange={e => updateEnfantField(a.id, 'places_dispo', e.target.value === '' ? null : Number(e.target.value))}
                      placeholder="8"
                    />
                  </FieldGroup>
                  <FieldGroup label="Places max (≤ 100)">
                    <input
                      style={INPUT_S}
                      type="number"
                      min={1}
                      max={100}
                      value={a.places_max ?? ''}
                      onChange={e => updateEnfantField(a.id, 'places_max', e.target.value === '' ? null : Number(e.target.value))}
                      placeholder="10"
                    />
                  </FieldGroup>
                </div>

                {/* Description */}
                <FieldGroup label="Description">
                  <textarea
                    style={TEXTAREA_S}
                    value={a.description ?? ''}
                    onChange={e => updateEnfantField(a.id, 'description', e.target.value)}
                    placeholder="Décris l'atelier, ce qu'on va créer..."
                  />
                </FieldGroup>
              </div>
            ))}
          </>
        )}

        {/* ── Dates journées ── */}
        {activeTab === 'journees_dates' && (
          <>
            <div style={S.sectionHeader}>
              <h1 style={S.sectionTitle}>Dates journées ({journees.length})</h1>
              <button style={S.addBtn} onClick={handleAddJournee} disabled={isPending}>+ Ajouter une date</button>
            </div>
            {journees.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 0', opacity: .5 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>📅</div>
                <p style={{ fontFamily: "var(--font-fredoka)", fontSize: 20, color: 'var(--framboise)' }}>Aucune date — clique sur &quot;+ Ajouter&quot;</p>
              </div>
            )}
            {journees.map(j => (
              <div key={j.id} style={{ ...S.card, ...(dirtyJournees.has(j.id) ? { borderColor: 'rgba(200,54,92,.45)' } : {}) }}>
                <div style={S.cardTitle}>
                  <div style={S.emojiBox}>📅</div>
                  <input
                    style={S.titleInput}
                    value={j.titre}
                    onChange={e => updateJourneeField(j.id, 'titre', e.target.value)}
                    onFocus={e => (e.target.style.borderColor = 'rgba(200,54,92,.35)')}
                    onBlur={e => (e.target.style.borderColor = 'transparent')}
                    placeholder="Thème de la journée"
                  />
                  <button style={S.deleteBtn} onClick={() => handleDeleteJournee(j.id)}>Supprimer</button>
                </div>
                <div style={{ ...S.row, gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr' }}>
                  <FieldGroup label="Date">
                    <input style={INPUT_S} type="date" value={toDateInput(j.date_debut)} onChange={e => updateJourneeField(j.id, 'date_debut', fromDateInput(e.target.value, '09:30'))} />
                  </FieldGroup>
                  <FieldGroup label="Lieu">
                    <input style={INPUT_S} value={j.lieu} onChange={e => updateJourneeField(j.id, 'lieu', e.target.value)} placeholder="Fontaine-le-Comte" />
                  </FieldGroup>
                  <FieldGroup label="Places max">
                    <input style={INPUT_S} type="number" min={1} max={100} value={j.places_max} onChange={e => updateJourneeField(j.id, 'places_max', Number(e.target.value))} />
                  </FieldGroup>
                  <FieldGroup label="Places dispo">
                    <input style={INPUT_S} type="number" min={0} value={j.places_max - j.places_reservees} onChange={e => updateJourneeField(j.id, 'places_reservees', j.places_max - Number(e.target.value))} />
                  </FieldGroup>
                  <FieldGroup label="Statut">
                    <select style={SELECT_S} value={j.statut} onChange={e => updateJourneeField(j.id, 'statut', e.target.value)}>
                      {STATUTS.map(s => <option key={s.val} value={s.val}>{s.label}</option>)}
                    </select>
                  </FieldGroup>
                </div>
              </div>
            ))}
          </>
        )}

        {/* ── Config journées ── */}
        {activeTab === 'journees_config' && (
          <>
            <div style={S.sectionHeader}>
              <h1 style={S.sectionTitle}>Config journées créatives</h1>
            </div>
            <div style={{ ...S.card, ...(dirtyCfgJournees ? { borderColor: 'rgba(200,54,92,.45)' } : {}) }}>
              <div style={{ ...S.row, gridTemplateColumns: '1fr 1fr 1fr', marginBottom: 12 }}>
                <FieldGroup label="Prix facturé (€)">
                  <input
                    style={INPUT_S}
                    type="number"
                    min={0}
                    step="0.01"
                    placeholder="90"
                    value={cfgJournees.prix_centimes > 0 ? (cfgJournees.prix_centimes / 100).toString() : ''}
                    onChange={e => updateCfgJournees('prix_centimes', e.target.value === '' ? 0 : Math.round(Number(e.target.value) * 100))}
                  />
                </FieldGroup>
                <FieldGroup label="Prix affiché (texte)">
                  <input style={INPUT_S} value={cfgJournees.prix_texte ?? ''} onChange={e => updateCfgJournees('prix_texte', e.target.value)} placeholder="90€" />
                </FieldGroup>
                <FieldGroup label="Durée / horaire">
                  <input style={INPUT_S} value={cfgJournees.duree ?? ''} onChange={e => updateCfgJournees('duree', e.target.value)} placeholder="10h → 17h" />
                </FieldGroup>
              </div>
              <FieldGroup label="Lieu par défaut" style={{ marginBottom: 12 }}>
                <input style={INPUT_S} value={cfgJournees.lieu ?? ''} onChange={e => updateCfgJournees('lieu', e.target.value)} placeholder="Fontaine-le-Comte (86)" />
              </FieldGroup>
              <FieldGroup label="Description" style={{ marginBottom: 12 }}>
                <textarea style={TEXTAREA_S} value={cfgJournees.description ?? ''} onChange={e => updateCfgJournees('description', e.target.value)} />
              </FieldGroup>
              <FieldGroup label="Ce qui est inclus (séparés par |)">
                <input style={INPUT_S} value={cfgJournees.inclus ?? ''} onChange={e => updateCfgJournees('inclus', e.target.value)} placeholder="Matériel fourni | Déjeuner | Max 8 personnes" />
              </FieldGroup>
            </div>
          </>
        )}

        {/* ── Dates retraites ── */}
        {activeTab === 'retraites_dates' && (
          <>
            <div style={S.sectionHeader}>
              <h1 style={S.sectionTitle}>Dates retraites ({retraites.length})</h1>
              <button style={S.addBtn} onClick={handleAddRetraite} disabled={isPending}>+ Ajouter une retraite</button>
            </div>
            {retraites.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 0', opacity: .5 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🏡</div>
                <p style={{ fontFamily: "var(--font-fredoka)", fontSize: 20, color: 'var(--framboise)' }}>Aucune retraite — clique sur &quot;+ Ajouter&quot;</p>
              </div>
            )}
            {retraites.map(r => (
              <div key={r.id} style={{ ...S.card, ...(dirtyRetraites.has(r.id) ? { borderColor: 'rgba(200,54,92,.45)' } : {}) }}>
                <div style={S.cardTitle}>
                  <div style={S.emojiBox}>🏡</div>
                  <input
                    style={S.titleInput}
                    value={r.titre}
                    onChange={e => updateRetraiteField(r.id, 'titre', e.target.value)}
                    onFocus={e => (e.target.style.borderColor = 'rgba(200,54,92,.35)')}
                    onBlur={e => (e.target.style.borderColor = 'transparent')}
                    placeholder="Titre de la retraite"
                  />
                  <button style={S.deleteBtn} onClick={() => handleDeleteRetraite(r.id)}>Supprimer</button>
                </div>
                <div style={{ ...S.row, gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr' }}>
                  <FieldGroup label="Début">
                    <input style={INPUT_S} type="date" value={toDateInput(r.date_debut)} onChange={e => updateRetraiteField(r.id, 'date_debut', fromDateInput(e.target.value, '18:00'))} />
                  </FieldGroup>
                  <FieldGroup label="Fin">
                    <input style={INPUT_S} type="date" value={toDateInput(r.date_fin)} onChange={e => updateRetraiteField(r.id, 'date_fin', fromDateInput(e.target.value, '16:00'))} />
                  </FieldGroup>
                  <FieldGroup label="Lieu">
                    <input style={INPUT_S} value={r.lieu} onChange={e => updateRetraiteField(r.id, 'lieu', e.target.value)} placeholder="Gîte, Deux-Sèvres" />
                  </FieldGroup>
                  <FieldGroup label="Places max">
                    <input style={INPUT_S} type="number" min={1} max={100} value={r.places_max} onChange={e => updateRetraiteField(r.id, 'places_max', Number(e.target.value))} />
                  </FieldGroup>
                  <FieldGroup label="Places dispo">
                    <input style={INPUT_S} type="number" min={0} value={r.places_max - r.places_reservees} onChange={e => updateRetraiteField(r.id, 'places_reservees', r.places_max - Number(e.target.value))} />
                  </FieldGroup>
                  <FieldGroup label="Statut">
                    <select style={SELECT_S} value={r.statut} onChange={e => updateRetraiteField(r.id, 'statut', e.target.value)}>
                      {STATUTS.map(s => <option key={s.val} value={s.val}>{s.label}</option>)}
                    </select>
                  </FieldGroup>
                </div>
              </div>
            ))}
          </>
        )}

        {/* ── Config retraites ── */}
        {activeTab === 'retraites_config' && (
          <>
            <div style={S.sectionHeader}>
              <h1 style={S.sectionTitle}>Config retraites créatives</h1>
            </div>
            <div style={{ ...S.card, ...(dirtyCfgRetraites ? { borderColor: 'rgba(200,54,92,.45)' } : {}) }}>
              <div style={{ ...S.row, gridTemplateColumns: '1fr 1fr 1fr', marginBottom: 12 }}>
                <FieldGroup label="Prix facturé (€)">
                  <input
                    style={INPUT_S}
                    type="number"
                    min={0}
                    step="0.01"
                    placeholder="390"
                    value={cfgRetraites.prix_centimes > 0 ? (cfgRetraites.prix_centimes / 100).toString() : ''}
                    onChange={e => updateCfgRetraites('prix_centimes', e.target.value === '' ? 0 : Math.round(Number(e.target.value) * 100))}
                  />
                </FieldGroup>
                <FieldGroup label="Prix affiché (texte)">
                  <input style={INPUT_S} value={cfgRetraites.prix_texte ?? ''} onChange={e => updateCfgRetraites('prix_texte', e.target.value)} placeholder="390€" />
                </FieldGroup>
                <FieldGroup label="Durée">
                  <input style={INPUT_S} value={cfgRetraites.duree ?? ''} onChange={e => updateCfgRetraites('duree', e.target.value)} placeholder="Vendredi soir → Dimanche 16h" />
                </FieldGroup>
              </div>
              <FieldGroup label="Lieu" style={{ marginBottom: 12 }}>
                <input style={INPUT_S} value={cfgRetraites.lieu ?? ''} onChange={e => updateCfgRetraites('lieu', e.target.value)} placeholder="Deux-Sèvres (79)" />
              </FieldGroup>
              <FieldGroup label="Description" style={{ marginBottom: 12 }}>
                <textarea style={TEXTAREA_S} value={cfgRetraites.description ?? ''} onChange={e => updateCfgRetraites('description', e.target.value)} />
              </FieldGroup>
              <FieldGroup label="Ce qui est inclus (séparés par |)">
                <input style={INPUT_S} value={cfgRetraites.inclus ?? ''} onChange={e => updateCfgRetraites('inclus', e.target.value)} placeholder="Hébergement | Repas | Yoga | Matériel" />
              </FieldGroup>
            </div>
          </>
        )}
      </div>

      {/* ── Barre de sauvegarde ── */}
      <div style={S.bottomBar}>
        <span style={{ fontSize: 13, color: 'var(--framboise)', opacity: .8 }}>
          {saveStatus === 'saving' && '⏳ Sauvegarde en cours…'}
          {saveStatus === 'saved'  && '✓ Modifications sauvegardées'}
          {saveStatus === 'error'  && '⚠ Erreur — vérifier la connexion'}
          {saveStatus === 'idle' && hasChanges && <span style={{ color: '#b05020' }}>● Modifications non sauvegardées</span>}
        </span>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => router.refresh()} style={{ padding: '8px 18px', borderRadius: 999, border: '1.5px dashed var(--framboise)', background: 'none', color: 'var(--framboise)', fontFamily: "var(--font-fredoka)", fontSize: 14, cursor: 'pointer' }}>
            Actualiser
          </button>
          <button
            onClick={handleSave}
            disabled={!hasChanges || saveStatus === 'saving'}
            style={{
              padding: '10px 28px', borderRadius: 999, border: 'none',
              background: hasChanges ? 'var(--framboise)' : 'rgba(200,54,92,.25)',
              color: '#fff', fontFamily: "var(--font-fredoka)", fontSize: 15,
              cursor: hasChanges ? 'pointer' : 'default',
              fontWeight: 600, transition: 'background .15s',
            }}
          >
            {saveStatus === 'saving' ? 'Sauvegarde…' : 'Sauvegarder'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Panel Réservations (hors composant principal) ────────────
function formatDateTime(iso: string | null | undefined): string {
  if (!iso) return '—'
  const d = new Date(iso)
  const jours = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam']
  const mois = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
  const h = d.getHours().toString().padStart(2, '0')
  const m = d.getMinutes().toString().padStart(2, '0')
  return `${jours[d.getDay()]} ${d.getDate()} ${mois[d.getMonth()]} ${d.getFullYear()} · ${h}h${m}`
}

function formatEuros(centimes: number | null | undefined): string {
  if (centimes == null) return '—'
  return (centimes / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

const STATUT_COLORS: Record<string, { bg: string; fg: string; label: string }> = {
  paye_total:   { bg: '#d6f2e3', fg: '#1a6b3a', label: 'Payé' },
  paye_acompte: { bg: '#fff2c9', fg: '#7a5a00', label: 'Acompte' },
  en_attente:   { bg: '#f4e4e4', fg: '#8a4c4c', label: 'En attente' },
  rembourse:    { bg: '#e4e4f4', fg: '#4c4c8a', label: 'Remboursée' },
  annule:       { bg: '#f0e0e0', fg: '#8a3a3a', label: 'Annulée' },
}

function ReservationsPanel({ reservations }: { reservations: ReservationWithAtelier[] }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontFamily: "var(--font-fredoka)", fontSize: 26, color: 'var(--ink)', margin: 0 }}>
          Réservations ({reservations.length})
        </h1>
      </div>

      {reservations.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', opacity: .5 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎫</div>
          <p style={{ fontFamily: "var(--font-fredoka)", fontSize: 20, color: 'var(--framboise)' }}>
            Aucune réservation pour le moment
          </p>
          <p style={{ fontSize: 14, opacity: .7, marginTop: 6 }}>
            Les paiements Stripe apparaîtront ici dès qu&apos;un parent réservera.
          </p>
        </div>
      )}

      {reservations.map(r => {
        const statut = STATUT_COLORS[r.statut_paiement] ?? { bg: '#eee', fg: '#555', label: r.statut_paiement }
        const enfantInfos = [r.prenom_participant, r.nom_participant].filter(Boolean).join(' ')
        const age = r.age_participant ? ` (${r.age_participant} ans)` : ''
        return (
          <div key={r.id} style={{
            background: '#fff', border: '2px solid rgba(200,54,92,.15)', borderRadius: 20,
            padding: '20px 22px', marginBottom: 14,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 14, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ fontFamily: "var(--font-fredoka)", fontSize: 18, color: 'var(--framboise)', marginBottom: 4 }}>
                  {r.prenom} {r.nom}
                </div>
                <div style={{ fontSize: 13, opacity: .75, lineHeight: 1.5 }}>
                  <a href={`mailto:${r.email}`} style={{ color: 'inherit' }}>{r.email}</a>
                  {r.telephone && <> · <a href={`tel:${r.telephone}`} style={{ color: 'inherit' }}>{r.telephone}</a></>}
                </div>
                <div style={{ fontSize: 12, opacity: .55, marginTop: 4 }}>
                  Réservé le {formatDateTime(r.created_at)}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: "var(--font-fredoka)", fontSize: 20, color: 'var(--framboise)' }}>
                  {formatEuros(r.montant_paye_centimes)}
                </div>
                <span style={{
                  display: 'inline-block', marginTop: 4, padding: '3px 10px', borderRadius: 999,
                  fontSize: 12, fontWeight: 600, background: statut.bg, color: statut.fg,
                }}>
                  {statut.label}
                </span>
              </div>
            </div>

            <div style={{ background: 'rgba(200,54,92,.05)', borderRadius: 12, padding: '12px 14px', fontSize: 14, display: 'grid', gap: 6 }}>
              <div><strong>Atelier :</strong> {r.atelier_titre ?? '—'}{r.atelier_ville ? ` · ${r.atelier_ville}` : ''}</div>
              {r.atelier_date && <div><strong>Date :</strong> {formatDateTime(r.atelier_date)}</div>}
              {enfantInfos && <div><strong>Enfant :</strong> {enfantInfos}{age}</div>}
              {r.message && <div><strong>Message :</strong> <span style={{ opacity: .85 }}>{r.message}</span></div>}
              {r.stripe_session_id && (
                <div style={{ fontSize: 11, opacity: .55, marginTop: 4, fontFamily: 'monospace', wordBreak: 'break-all' }}>
                  Stripe : {r.stripe_session_id}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
