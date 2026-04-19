'use client'

import { useState, useCallback, useTransition, useRef } from 'react'
import { useRouter } from 'next/navigation'
import type { AtelierEnfantRow, Session, ConfigAtelier } from '@/types/supabase'
import {
  adminLogout,
  createAtelierEnfant, updateAtelierEnfant, deleteAtelierEnfant,
  createJournee, updateJournee, deleteJournee,
  createRetraite, updateRetraite, deleteRetraite,
  updateConfig,
} from '@/app/(admin)/admin/actions'

type Tab = 'enfants' | 'journees_dates' | 'journees_config' | 'retraites_dates' | 'retraites_config'

const CATEGORIES = [
  { val: 'hebdo', label: 'Hebdo' },
  { val: 'stage', label: 'Stage vacances' },
  { val: 'anniversaire', label: 'Anniversaire' },
  { val: 'scolaire', label: 'Scolaire' },
  { val: 'evenement', label: "Fête / événement" },
]
const BADGE_COLORS = [
  { val: 'menthe', label: 'Menthe' },
  { val: 'rose', label: 'Rose' },
  { val: 'framboise', label: 'Framboise' },
  { val: 'outline', label: 'Contour' },
]
const STATUTS = [
  { val: 'ouvert', label: 'Ouvert' },
  { val: 'complet', label: 'Complet' },
  { val: 'annule', label: 'Annulé' },
]

interface Props {
  initialEnfants: AtelierEnfantRow[]
  initialJournees: Session[]
  initialRetraites: Session[]
  initialConfigJournees: ConfigAtelier
  initialConfigRetraites: ConfigAtelier
}

export function AdminDashboard({ initialEnfants, initialJournees, initialRetraites, initialConfigJournees, initialConfigRetraites }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('enfants')
  const [enfants, setEnfants] = useState<AtelierEnfantRow[]>(initialEnfants)
  const [journees, setJournees] = useState<Session[]>(initialJournees)
  const [retraites, setRetraites] = useState<Session[]>(initialRetraites)
  const [cfgJournees, setCfgJournees] = useState<ConfigAtelier>(initialConfigJournees)
  const [cfgRetraites, setCfgRetraites] = useState<ConfigAtelier>(initialConfigRetraites)
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'error'>('saved')
  const [isPending, startTransition] = useTransition()
  const saveTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map())
  const router = useRouter()

  // ── Auto-save helpers ────────────────────────────────────
  function scheduleSave(key: string, fn: () => Promise<void>) {
    const existing = saveTimers.current.get(key)
    if (existing) clearTimeout(existing)
    setSaveStatus('saving')
    const t = setTimeout(async () => {
      try {
        await fn()
        setSaveStatus('saved')
      } catch {
        setSaveStatus('error')
      }
    }, 1200)
    saveTimers.current.set(key, t)
  }

  // ── Ateliers enfants ─────────────────────────────────────
  function updateEnfantField(id: string, field: keyof AtelierEnfantRow, value: string | number | null) {
    setEnfants(prev => prev.map(a => a.id === id ? { ...a, [field]: value } : a))
    scheduleSave(`enfant-${id}`, () => updateAtelierEnfant(id, { [field]: value }))
  }

  function handleAddEnfant() {
    startTransition(async () => {
      try {
        const newA = await createAtelierEnfant()
        setEnfants(prev => [...prev, newA])
        setSaveStatus('saved')
      } catch { setSaveStatus('error') }
    })
  }

  function handleDeleteEnfant(id: string) {
    if (!confirm('Supprimer cet atelier ?')) return
    startTransition(async () => {
      await deleteAtelierEnfant(id)
      setEnfants(prev => prev.filter(a => a.id !== id))
    })
  }

  // ── Journées ─────────────────────────────────────────────
  function updateJourneeField(id: string, field: keyof Session, value: string | number | null) {
    setJournees(prev => prev.map(j => j.id === id ? { ...j, [field]: value } : j))
    scheduleSave(`journee-${id}`, () => updateJournee(id, { [field]: value }))
  }

  function handleAddJournee() {
    startTransition(async () => {
      try {
        const j = await createJournee()
        setJournees(prev => [...prev, j])
        setSaveStatus('saved')
      } catch { setSaveStatus('error') }
    })
  }

  function handleDeleteJournee(id: string) {
    if (!confirm('Supprimer cette date ?')) return
    startTransition(async () => {
      await deleteJournee(id)
      setJournees(prev => prev.filter(j => j.id !== id))
    })
  }

  // ── Retraites ────────────────────────────────────────────
  function updateRetraiteField(id: string, field: keyof Session, value: string | number | null) {
    setRetraites(prev => prev.map(r => r.id === id ? { ...r, [field]: value } : r))
    scheduleSave(`retraite-${id}`, () => updateRetraite(id, { [field]: value }))
  }

  function handleAddRetraite() {
    startTransition(async () => {
      try {
        const r = await createRetraite()
        setRetraites(prev => [...prev, r])
        setSaveStatus('saved')
      } catch { setSaveStatus('error') }
    })
  }

  function handleDeleteRetraite(id: string) {
    if (!confirm('Supprimer cette retraite ?')) return
    startTransition(async () => {
      await deleteRetraite(id)
      setRetraites(prev => prev.filter(r => r.id !== id))
    })
  }

  // ── Config ───────────────────────────────────────────────
  function updateCfgJournees(field: keyof ConfigAtelier, value: string | number) {
    setCfgJournees(prev => ({ ...prev, [field]: value }))
    scheduleSave('cfg-journees', () => updateConfig('journees', { [field]: value }))
  }

  function updateCfgRetraites(field: keyof ConfigAtelier, value: string | number) {
    setCfgRetraites(prev => ({ ...prev, [field]: value }))
    scheduleSave('cfg-retraites', () => updateConfig('retraites', { [field]: value }))
  }

  // ── Shared styles ────────────────────────────────────────
  const S = {
    page: { minHeight: '100vh', background: 'var(--creme-pale)', fontFamily: "var(--ff-inter, system-ui)" } as React.CSSProperties,
    header: { background: 'var(--framboise)', color: 'var(--creme)', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', gap: 16 } as React.CSSProperties,
    tabBar: { background: '#fff', borderBottom: '2px solid rgba(200,54,92,.12)', padding: '0 28px', display: 'flex', gap: 6, overflowX: 'auto' as const },
    tabBtn: (active: boolean): React.CSSProperties => ({
      padding: '14px 18px', borderRadius: '12px 12px 0 0', border: 'none', cursor: 'pointer',
      fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 15, letterSpacing: '.3px',
      background: active ? 'var(--framboise)' : 'transparent',
      color: active ? '#fff' : 'var(--ink)',
      transition: 'all .15s', whiteSpace: 'nowrap' as const,
    }),
    content: { padding: '32px 28px', maxWidth: 900, margin: '0 auto' } as React.CSSProperties,
    sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 } as React.CSSProperties,
    sectionTitle: { fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 26, color: 'var(--ink)', margin: 0 } as React.CSSProperties,
    card: { background: '#fff', border: '2px solid rgba(200,54,92,.15)', borderRadius: 20, padding: '20px 22px', marginBottom: 16 } as React.CSSProperties,
    cardTitle: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 } as React.CSSProperties,
    emojiBox: { width: 44, height: 44, background: 'rgba(200,54,92,.08)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 } as React.CSSProperties,
    titleInput: { flex: 1, fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 20, color: 'var(--framboise)', background: 'none', border: '2px solid transparent', borderRadius: 10, padding: '6px 10px', outline: 'none', width: '100%' } as React.CSSProperties,
    deleteBtn: { padding: '7px 16px', borderRadius: 999, border: '1.5px solid var(--framboise)', background: 'none', color: 'var(--framboise)', fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 14, cursor: 'pointer', whiteSpace: 'nowrap' as const } as React.CSSProperties,
    row: { display: 'grid', gap: 12, marginBottom: 12 } as React.CSSProperties,
    label: { fontSize: 12, fontWeight: 600, color: 'var(--framboise)', marginBottom: 4, display: 'block', fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", letterSpacing: '.3px' } as React.CSSProperties,
    input: { width: '100%', padding: '9px 12px', border: '1.5px solid rgba(200,54,92,.25)', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit', background: '#fafafa' } as React.CSSProperties,
    select: { width: '100%', padding: '9px 12px', border: '1.5px solid rgba(200,54,92,.25)', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit', background: '#fafafa' } as React.CSSProperties,
    textarea: { width: '100%', padding: '9px 12px', border: '1.5px solid rgba(200,54,92,.25)', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit', background: '#fafafa', resize: 'vertical' as const, minHeight: 72 } as React.CSSProperties,
    bottomBar: { position: 'fixed' as const, bottom: 0, left: 0, right: 0, background: 'var(--creme)', borderTop: '2px solid rgba(200,54,92,.15)', padding: '10px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 30 } as React.CSSProperties,
    addBtn: { fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 15, color: '#fff', background: 'var(--framboise)', padding: '10px 22px', borderRadius: 999, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 } as React.CSSProperties,
  }

  const FieldGroup = ({ label, children, style }: { label: string; children: React.ReactNode; style?: React.CSSProperties }) => (
    <div style={style}>
      <span style={S.label}>{label}</span>
      {children}
    </div>
  )

  // ── Tabs ─────────────────────────────────────────────────
  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: 'enfants', label: 'Ateliers enfants', count: enfants.length },
    { id: 'journees_dates', label: 'Dates journées', count: journees.length },
    { id: 'journees_config', label: 'Config journées' },
    { id: 'retraites_dates', label: 'Dates retraites', count: retraites.length },
    { id: 'retraites_config', label: 'Config retraites' },
  ]

  // ── Date helper ──────────────────────────────────────────
  function toDateInput(iso: string) {
    return iso ? iso.split('T')[0] : ''
  }
  function fromDateInput(val: string, time = '09:30') {
    return val ? `${val}T${time}:00+01:00` : ''
  }

  return (
    <div style={S.page}>
      {/* ── Header ── */}
      <header style={S.header}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 20, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
          L
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 20, lineHeight: 1.2 }}>Espace Ludivine</div>
          <div style={{ fontSize: 13, opacity: .75 }}>Gérer tes ateliers, dates et disponibilités</div>
        </div>
        <form action={adminLogout}>
          <button type="submit" style={{ padding: '8px 18px', borderRadius: 999, border: '1.5px solid rgba(255,255,255,.5)', background: 'none', color: '#fff', fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 14, cursor: 'pointer' }}>
            Déconnexion
          </button>
        </form>
        <a href="/" style={{ width: 34, height: 34, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, textDecoration: 'none', flexShrink: 0 }}>
          ×
        </a>
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
      <div style={{ ...S.content, paddingBottom: 80 }}>

        {/* ── Ateliers enfants ── */}
        {activeTab === 'enfants' && (
          <>
            <div style={S.sectionHeader}>
              <h1 style={S.sectionTitle}>Ateliers enfants ({enfants.length})</h1>
              <button style={S.addBtn} onClick={handleAddEnfant} disabled={isPending}>
                + Ajouter un atelier
              </button>
            </div>
            {enfants.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 0', opacity: .5 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🧵</div>
                <p style={{ fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 20, color: 'var(--framboise)' }}>
                  Aucun atelier pour le moment
                </p>
              </div>
            )}
            {enfants.map(a => (
              <div key={a.id} style={S.card}>
                {/* Title row */}
                <div style={S.cardTitle}>
                  <div style={S.emojiBox}>{a.emoji}</div>
                  <input
                    style={S.titleInput}
                    value={a.titre}
                    onChange={e => updateEnfantField(a.id, 'titre', e.target.value)}
                    onFocus={e => (e.target.style.borderColor = 'rgba(200,54,92,.35)')}
                    onBlur={e => (e.target.style.borderColor = 'transparent')}
                  />
                  <button style={S.deleteBtn} onClick={() => handleDeleteEnfant(a.id)}>Supprimer</button>
                </div>
                {/* Row 1 */}
                <div style={{ ...S.row, gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                  <FieldGroup label="Catégorie">
                    <select style={S.select} value={a.categorie} onChange={e => updateEnfantField(a.id, 'categorie', e.target.value)}>
                      {CATEGORIES.map(c => <option key={c.val} value={c.val}>{c.label}</option>)}
                    </select>
                  </FieldGroup>
                  <FieldGroup label="Badge">
                    <input style={S.input} value={a.badge_texte ?? ''} onChange={e => updateEnfantField(a.id, 'badge_texte', e.target.value)} placeholder="Dès 6 ans" />
                  </FieldGroup>
                  <FieldGroup label="Couleur badge">
                    <select style={S.select} value={a.badge_couleur} onChange={e => updateEnfantField(a.id, 'badge_couleur', e.target.value)}>
                      {BADGE_COLORS.map(c => <option key={c.val} value={c.val}>{c.label}</option>)}
                    </select>
                  </FieldGroup>
                  <FieldGroup label="Ville">
                    <input style={S.input} value={a.ville} onChange={e => updateEnfantField(a.id, 'ville', e.target.value)} placeholder="Poitiers" />
                  </FieldGroup>
                </div>
                {/* Description */}
                <FieldGroup label="Description" style={{ marginBottom: 12 }}>
                  <textarea style={S.textarea} value={a.description ?? ''} onChange={e => updateEnfantField(a.id, 'description', e.target.value)} placeholder="Description de l'atelier..." />
                </FieldGroup>
                {/* Row 2 */}
                <div style={{ ...S.row, gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>
                  <FieldGroup label="Infos (séparées par |)">
                    <input style={S.input} value={a.infos ?? ''} onChange={e => updateEnfantField(a.id, 'infos', e.target.value)} placeholder="Mercredi 14h-16h | 7-12 enfants | Trimestre" />
                  </FieldGroup>
                  <FieldGroup label="Prix">
                    <input style={S.input} value={a.prix_texte ?? ''} onChange={e => updateEnfantField(a.id, 'prix_texte', e.target.value)} placeholder="180€ / trimestre" />
                  </FieldGroup>
                  <FieldGroup label="Places dispo">
                    <input style={S.input} type="number" min={0} value={a.places_dispo ?? ''} onChange={e => updateEnfantField(a.id, 'places_dispo', e.target.value === '' ? null : Number(e.target.value))} placeholder="8" />
                  </FieldGroup>
                  <FieldGroup label="Places max">
                    <input style={S.input} type="number" min={1} value={a.places_max ?? ''} onChange={e => updateEnfantField(a.id, 'places_max', e.target.value === '' ? null : Number(e.target.value))} placeholder="10" />
                  </FieldGroup>
                </div>
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
                <p style={{ fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 20, color: 'var(--framboise)' }}>Aucune date programmée</p>
              </div>
            )}
            {journees.map(j => (
              <div key={j.id} style={S.card}>
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
                    <input style={S.input} type="date" value={toDateInput(j.date_debut)} onChange={e => updateJourneeField(j.id, 'date_debut', fromDateInput(e.target.value, '09:30'))} />
                  </FieldGroup>
                  <FieldGroup label="Lieu">
                    <input style={S.input} value={j.lieu} onChange={e => updateJourneeField(j.id, 'lieu', e.target.value)} placeholder="Fontaine-le-Comte" />
                  </FieldGroup>
                  <FieldGroup label="Places max">
                    <input style={S.input} type="number" min={1} value={j.places_max} onChange={e => updateJourneeField(j.id, 'places_max', Number(e.target.value))} />
                  </FieldGroup>
                  <FieldGroup label="Places dispo">
                    <input style={S.input} type="number" min={0} value={j.places_max - j.places_reservees} onChange={e => updateJourneeField(j.id, 'places_reservees', j.places_max - Number(e.target.value))} />
                  </FieldGroup>
                  <FieldGroup label="Statut">
                    <select style={S.select} value={j.statut} onChange={e => updateJourneeField(j.id, 'statut', e.target.value)}>
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
            <div style={S.card}>
              <div style={{ ...S.row, gridTemplateColumns: '1fr 1fr', marginBottom: 12 }}>
                <FieldGroup label="Prix affiché">
                  <input style={S.input} value={cfgJournees.prix_texte ?? ''} onChange={e => updateCfgJournees('prix_texte', e.target.value)} placeholder="90€" />
                </FieldGroup>
                <FieldGroup label="Durée">
                  <input style={S.input} value={cfgJournees.duree ?? ''} onChange={e => updateCfgJournees('duree', e.target.value)} placeholder="9h30 → 17h30" />
                </FieldGroup>
              </div>
              <FieldGroup label="Lieu par défaut" style={{ marginBottom: 12 }}>
                <input style={S.input} value={cfgJournees.lieu ?? ''} onChange={e => updateCfgJournees('lieu', e.target.value)} placeholder="Fontaine-le-Comte (86)" />
              </FieldGroup>
              <FieldGroup label="Description" style={{ marginBottom: 12 }}>
                <textarea style={S.textarea} value={cfgJournees.description ?? ''} onChange={e => updateCfgJournees('description', e.target.value)} />
              </FieldGroup>
              <FieldGroup label="Ce qui est inclus (séparés par |)">
                <input style={S.input} value={cfgJournees.inclus ?? ''} onChange={e => updateCfgJournees('inclus', e.target.value)} placeholder="Matériel fourni | Déjeuner | Max 6 personnes" />
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
                <p style={{ fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 20, color: 'var(--framboise)' }}>Aucune retraite programmée</p>
              </div>
            )}
            {retraites.map(r => (
              <div key={r.id} style={S.card}>
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
                    <input style={S.input} type="date" value={toDateInput(r.date_debut)} onChange={e => updateRetraiteField(r.id, 'date_debut', fromDateInput(e.target.value, '18:00'))} />
                  </FieldGroup>
                  <FieldGroup label="Fin">
                    <input style={S.input} type="date" value={toDateInput(r.date_fin)} onChange={e => updateRetraiteField(r.id, 'date_fin', fromDateInput(e.target.value, '12:00'))} />
                  </FieldGroup>
                  <FieldGroup label="Lieu">
                    <input style={S.input} value={r.lieu} onChange={e => updateRetraiteField(r.id, 'lieu', e.target.value)} placeholder="Gîte, Deux-Sèvres" />
                  </FieldGroup>
                  <FieldGroup label="Places max">
                    <input style={S.input} type="number" min={1} value={r.places_max} onChange={e => updateRetraiteField(r.id, 'places_max', Number(e.target.value))} />
                  </FieldGroup>
                  <FieldGroup label="Places dispo">
                    <input style={S.input} type="number" min={0} value={r.places_max - r.places_reservees} onChange={e => updateRetraiteField(r.id, 'places_reservees', r.places_max - Number(e.target.value))} />
                  </FieldGroup>
                  <FieldGroup label="Statut">
                    <select style={S.select} value={r.statut} onChange={e => updateRetraiteField(r.id, 'statut', e.target.value)}>
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
            <div style={S.card}>
              <div style={{ ...S.row, gridTemplateColumns: '1fr 1fr', marginBottom: 12 }}>
                <FieldGroup label="Prix affiché">
                  <input style={S.input} value={cfgRetraites.prix_texte ?? ''} onChange={e => updateCfgRetraites('prix_texte', e.target.value)} placeholder="390€" />
                </FieldGroup>
                <FieldGroup label="Durée">
                  <input style={S.input} value={cfgRetraites.duree ?? ''} onChange={e => updateCfgRetraites('duree', e.target.value)} placeholder="Vendredi soir → Dimanche midi" />
                </FieldGroup>
              </div>
              <FieldGroup label="Lieu" style={{ marginBottom: 12 }}>
                <input style={S.input} value={cfgRetraites.lieu ?? ''} onChange={e => updateCfgRetraites('lieu', e.target.value)} placeholder="Deux-Sèvres (79)" />
              </FieldGroup>
              <FieldGroup label="Description" style={{ marginBottom: 12 }}>
                <textarea style={S.textarea} value={cfgRetraites.description ?? ''} onChange={e => updateCfgRetraites('description', e.target.value)} />
              </FieldGroup>
              <FieldGroup label="Ce qui est inclus (séparés par |)">
                <input style={S.input} value={cfgRetraites.inclus ?? ''} onChange={e => updateCfgRetraites('inclus', e.target.value)} placeholder="Hébergement | Repas | Yoga | Matériel" />
              </FieldGroup>
            </div>
          </>
        )}
      </div>

      {/* ── Bottom bar ── */}
      <div style={S.bottomBar}>
        <span style={{ fontSize: 13, color: 'var(--framboise)', opacity: .8, display: 'flex', alignItems: 'center', gap: 8 }}>
          {saveStatus === 'saving' && <><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: 'var(--framboise)', animation: 'floaty 1s ease infinite' }} />Sauvegarde en cours…</>}
          {saveStatus === 'saved'  && <>✦ Enregistrement automatique · Toutes les modifications sont sauvegardées</>}
          {saveStatus === 'error'  && <>⚠ Erreur de sauvegarde — vérifier la connexion</>}
        </span>
        <button
          onClick={() => router.refresh()}
          style={{ padding: '8px 18px', borderRadius: 999, border: '1.5px dashed var(--framboise)', background: 'none', color: 'var(--framboise)', fontFamily: "var(--ff-fredoka, 'Fredoka One', cursive)", fontSize: 14, cursor: 'pointer' }}
        >
          Actualiser
        </button>
      </div>
    </div>
  )
}
