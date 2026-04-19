'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { AtelierEnfantRow, Session, ConfigAtelier } from '@/types/supabase'

// ── Auth guard ─────────────────────────────────────────────
async function requireAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')
  return user
}

// ── Logout ─────────────────────────────────────────────────
export async function adminLogout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}

// ── ATELIERS ENFANTS ───────────────────────────────────────
export async function createAtelierEnfant(): Promise<AtelierEnfantRow> {
  await requireAdmin()
  const db = createAdminClient()
  // Get current max ordre
  const { data: existing } = await db
    .from('ateliers_enfants')
    .select('ordre')
    .order('ordre', { ascending: false })
    .limit(1)
  const nextOrdre = existing && existing.length > 0 ? (existing[0].ordre + 1) : 0
  const emojis = ['🧵', '✂️', '🪡', '🌸', '🎀', '🎨', '🪢', '💫']
  const { data, error } = await db
    .from('ateliers_enfants')
    .insert({
      titre: 'Nouvel atelier',
      categorie: 'hebdo',
      badge_texte: 'Dès 6 ans',
      badge_couleur: 'menthe',
      ville: '',
      emoji: emojis[nextOrdre % emojis.length],
      ordre: nextOrdre,
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function updateAtelierEnfant(id: string, updates: Partial<AtelierEnfantRow>) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db
    .from('ateliers_enfants')
    .update(updates)
    .eq('id', id)
  if (error) throw new Error(error.message)
}

export async function deleteAtelierEnfant(id: string) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db
    .from('ateliers_enfants')
    .delete()
    .eq('id', id)
  if (error) throw new Error(error.message)
}

// ── JOURNEES CREATIVES ─────────────────────────────────────
const JOURNEE_DEFAULTS = {
  type: 'journee_creative' as const,
  lieu: 'Fontaine-le-Comte',
  places_max: 6,
  places_reservees: 0,
  prix_centimes: 9000,
  statut: 'ouvert' as const,
}

export async function createJournee(): Promise<Session> {
  await requireAdmin()
  const db = createAdminClient()
  const today = new Date().toISOString().split('T')[0]
  const { data, error } = await db
    .from('sessions')
    .insert({
      ...JOURNEE_DEFAULTS,
      titre: 'Nouvelle journée créative',
      date_debut: today + 'T09:30:00+01:00',
      date_fin: today + 'T17:30:00+01:00',
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function updateJournee(id: string, updates: Partial<Session>) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db
    .from('sessions')
    .update(updates)
    .eq('id', id)
  if (error) throw new Error(error.message)
}

export async function deleteJournee(id: string) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db.from('sessions').delete().eq('id', id)
  if (error) throw new Error(error.message)
}

// ── RETRAITES CREATIVES ────────────────────────────────────
const RETRAITE_DEFAULTS = {
  type: 'retraite_creative' as const,
  lieu: 'Gîte, Deux-Sèvres (79)',
  places_max: 8,
  places_reservees: 0,
  prix_centimes: 39000,
  statut: 'ouvert' as const,
}

export async function createRetraite(): Promise<Session> {
  await requireAdmin()
  const db = createAdminClient()
  const today = new Date().toISOString().split('T')[0]
  const sunday = new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0]
  const { data, error } = await db
    .from('sessions')
    .insert({
      ...RETRAITE_DEFAULTS,
      titre: 'Nouvelle retraite créative',
      date_debut: today + 'T18:00:00+01:00',
      date_fin: sunday + 'T12:00:00+01:00',
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function updateRetraite(id: string, updates: Partial<Session>) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db
    .from('sessions')
    .update(updates)
    .eq('id', id)
  if (error) throw new Error(error.message)
}

export async function deleteRetraite(id: string) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db.from('sessions').delete().eq('id', id)
  if (error) throw new Error(error.message)
}

// ── CONFIG ─────────────────────────────────────────────────
export async function updateConfig(type: string, updates: Partial<ConfigAtelier>) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db
    .from('config_ateliers')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('type', type)
  if (error) throw new Error(error.message)
}
