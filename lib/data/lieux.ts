/**
 * Adresses exactes des lieux habituels, données par l'atelier.
 * Servent dans l'e-mail de confirmation quand l'adresse n'est pas saisie dans l'admin
 * (le champ « Adresse exacte » de l'admin reste prioritaire).
 * Ne jamais ajouter une adresse qui n'a pas été donnée par l'atelier.
 */
const ADRESSES: { commune: string; adresse: string }[] = [
  // Donnée par l'atelier le 17/11/2026 ; voie « Route de Béruges » vérifiée dans la Base Adresse Nationale.
  { commune: 'fontaine-le-comte', adresse: '2 bis route de Béruges, 86240 Fontaine-le-Comte' },
  // Donnée par l'atelier le 17/11/2026 ; « 8 Rue Raoul Mortier 86190 Vouillé » trouvée telle quelle dans la Base Adresse Nationale.
  { commune: 'vouille', adresse: 'Espace Entreprises, 8 rue Raoul Mortier, 86190 Vouillé (devant le GEDIMAT)' },
]

/** « Fontaine le comte », « Fontaine-le-Comte » → « fontaine-le-comte » */
export function normaliserLieu(t: string): string {
  return t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\(\d+\)/g, '').trim().replace(/[\s_]+/g, '-').replace(/-+/g, '-')
}

/** Adresse connue pour une commune, sauf pour le gîte des retraites (lieu différent). */
export function adresseParDefaut(lieu: string | null | undefined): string | null {
  if (!lieu) return null
  const n = normaliserLieu(lieu)
  if (n.includes('gite')) return null
  return ADRESSES.find((a) => n === a.commune || n.endsWith(`-${a.commune}`))?.adresse ?? null
}
