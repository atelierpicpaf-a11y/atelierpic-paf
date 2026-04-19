import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { AdminDashboard } from '@/components/admin/admin-dashboard'
import type { Metadata } from 'next'
import type { ConfigAtelier } from '@/types/supabase'

export const metadata: Metadata = { title: 'Espace Ludivine' }

const DEFAULT_CFG_JOURNEES: ConfigAtelier = {
  type: 'journees', prix_centimes: 9000, prix_texte: '90€',
  description: 'Une journée complète de couture créative dans une ambiance chaleureuse et bienveillante.',
  inclus: 'Matériel et tissu fourni|Déjeuner tiré du sac|Collations|Maximum 6 participantes',
  duree: '9h30 → 17h30', lieu: 'Fontaine-le-Comte (86)',
  updated_at: new Date().toISOString(),
}
const DEFAULT_CFG_RETRAITES: ConfigAtelier = {
  type: 'retraites', prix_centimes: 39000, prix_texte: '390€',
  description: 'Un week-end ressourçant alliant couture, yoga et convivialité dans un gîte en Deux-Sèvres.',
  inclus: 'Hébergement en gîte|Tous les repas|2 séances de yoga|Matériel couture fourni|Maximum 8 participantes',
  duree: 'Vendredi soir → Dimanche midi', lieu: 'Deux-Sèvres (79)',
  updated_at: new Date().toISOString(),
}

export default async function AdminPage() {
  // Auth check
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Load all data with admin client
  const db = createAdminClient()

  const [
    { data: enfants },
    { data: journees },
    { data: retraites },
    { data: configs },
  ] = await Promise.all([
    db.from('ateliers_enfants').select('*').eq('actif', true).order('ordre'),
    db.from('sessions').select('*').eq('type', 'journee_creative').order('date_debut'),
    db.from('sessions').select('*').eq('type', 'retraite_creative').order('date_debut'),
    db.from('config_ateliers').select('*'),
  ])

  const cfgJournees = configs?.find(c => c.type === 'journees') ?? DEFAULT_CFG_JOURNEES
  const cfgRetraites = configs?.find(c => c.type === 'retraites') ?? DEFAULT_CFG_RETRAITES

  return (
    <AdminDashboard
      initialEnfants={enfants ?? []}
      initialJournees={journees ?? []}
      initialRetraites={retraites ?? []}
      initialConfigJournees={cfgJournees}
      initialConfigRetraites={cfgRetraites}
    />
  )
}
