'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import type { AtelierEnfantRow, Session, ConfigAtelier, Produit, VarianteProduit, Commande } from '@/types/supabase'

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
  // Liste curated pour les ateliers couture / punch needle / kids.
  // Ludivine peut changer l'emoji depuis l'admin via le picker (cf. components/admin/admin-dashboard.tsx).
  const emojis = ['🧵', '✂️', '🪡', '🧶', '🌸', '🎀', '🪢', '💫']
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
  lieu: 'Gîte, Fontaine-le-Comte (86)',
  places_max: 9,
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

// ══════════════════════════════════════════════════════════
//  BOUTIQUE — produits, variantes, commandes
// ══════════════════════════════════════════════════════════
function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// ── PRODUITS ───────────────────────────────────────────────
export async function createProduit(): Promise<Produit & { variantes: VarianteProduit[] }> {
  await requireAdmin()
  const db = createAdminClient()
  const { data: existing } = await db.from('produits').select('ordre').order('ordre', { ascending: false }).limit(1)
  const nextOrdre = existing && existing.length > 0 ? existing[0].ordre + 1 : 0
  const slug = `nouveau-coffret-${Date.now().toString(36)}`
  const { data, error } = await db
    .from('produits')
    .insert({ slug, nom: 'Nouveau coffret', niveau: 'Débutant', categorie: 'coffret', ordre: nextOrdre, actif: false })
    .select()
    .single()
  if (error) throw new Error(error.message)
  // Créer une variante "Standard" par défaut
  const { data: variante } = await db
    .from('variantes_produit')
    .insert({ produit_id: data.id, nom: 'Standard', prix_centimes: 0, stock: 0, ordre: 0 })
    .select()
    .single()
  revalidatePath('/boutique')
  return { ...data, variantes: variante ? [variante] : [] }
}

export async function updateProduit(id: string, updates: Partial<Produit>) {
  await requireAdmin()
  const db = createAdminClient()
  // Re-slugify si le nom change (et pas de slug explicite fourni)
  const patch: Partial<Produit> = { ...updates }
  if (updates.nom && !updates.slug) patch.slug = slugify(updates.nom)
  const { error } = await db.from('produits').update(patch).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/boutique')
  if (patch.slug) revalidatePath(`/boutique/${patch.slug}`)
}

export async function deleteProduit(id: string) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db.from('produits').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/boutique')
}

// ── VARIANTES ──────────────────────────────────────────────
export async function createVariante(produitId: string): Promise<VarianteProduit> {
  await requireAdmin()
  const db = createAdminClient()
  const { data: existing } = await db.from('variantes_produit').select('ordre').eq('produit_id', produitId).order('ordre', { ascending: false }).limit(1)
  const nextOrdre = existing && existing.length > 0 ? existing[0].ordre + 1 : 0
  const { data, error } = await db
    .from('variantes_produit')
    .insert({ produit_id: produitId, nom: 'Nouvelle option', prix_centimes: 0, stock: 0, ordre: nextOrdre })
    .select()
    .single()
  if (error) throw new Error(error.message)
  revalidatePath('/boutique')
  return data
}

export async function updateVariante(id: string, updates: Partial<VarianteProduit>) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db.from('variantes_produit').update(updates).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/boutique')
}

export async function deleteVariante(id: string) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db.from('variantes_produit').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/boutique')
}

// ── AVIS / TÉMOIGNAGES ─────────────────────────────────────
export async function setTemoignagePublie(id: string, publie: boolean) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db.from('temoignages').update({ publie }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/')
}

export async function deleteTemoignage(id: string) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db.from('temoignages').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/')
}

// ── COMMANDES ──────────────────────────────────────────────
export async function updateCommandeStatut(id: string, statut: Commande['statut']) {
  await requireAdmin()
  const db = createAdminClient()
  const { error } = await db.from('commandes').update({ statut }).eq('id', id)
  if (error) throw new Error(error.message)
}

// ── UPLOAD IMAGE PRODUIT (Supabase Storage, bucket "produits") ──
// Reçoit un FormData { file }, upload via service role, renvoie l'URL publique.
export async function uploadProduitImage(formData: FormData): Promise<{ url: string } | { error: string }> {
  await requireAdmin()
  try {
    const file = formData.get('file')
    if (!file || typeof file === 'string') return { error: 'Aucun fichier reçu' }
    const f = file as File
    if (f.size > 12 * 1024 * 1024) return { error: 'Image trop lourde (max 12 Mo)' }

    const db = createAdminClient()
    const ext = (f.name?.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg'
    const rand = Math.random().toString(36).slice(2, 9)
    const path = `${Date.now()}-${rand}.${ext}`
    const bytes = new Uint8Array(await f.arrayBuffer())

    const { error } = await db.storage.from('produits').upload(path, bytes, {
      contentType: f.type || 'image/jpeg',
      upsert: false,
    })
    if (error) {
      return { error: `Upload échoué : ${error.message}. (Le bucket "produits" existe-t-il et est-il public ?)` }
    }
    const { data } = db.storage.from('produits').getPublicUrl(path)
    return { url: data.publicUrl }
  } catch (e) {
    console.error('[uploadProduitImage]', e)
    return { error: e instanceof Error ? e.message : 'Erreur inconnue à l\'upload' }
  }
}
