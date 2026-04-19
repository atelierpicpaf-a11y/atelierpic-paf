export type AtelierEnfant = {
  id: string; cat: 'hebdo' | 'stage' | 'evenement'; badge: string; badgeColor?: string
  title: string; desc: string; meta: string[]; price: string; city: string; emoji: string
  places: number | null; placesMax: number | null
}
export type DateJournee = { id: string; jour: string; num: string; mois: string; theme: string; places: number; placesMax: number }
export type DateRetraite = { id: string; dates: string; theme: string; statut: string; complet: boolean }

export const DEFAULT_ATELIERS_ENFANTS: AtelierEnfant[] = [
  { id:'ae1', cat:'hebdo', badge:'Dès 6 ans', badgeColor:'mint', title:'Couture du mercredi — Poitiers', desc:"Mon rendez-vous phare. Chaque mercredi après-midi, on avance ensemble sur des projets variés, à leur rythme.", meta:['Mercredi 14h-16h','7-12 enfants','Trimestre'], price:'180€ / trimestre', city:'Poitiers', emoji:'🧵', places: 8, placesMax: 10 },
  { id:'ae2', cat:'hebdo', badge:'Dès 8 ans', badgeColor:'mint', title:'Samedi des grands', desc:"Pour les plus grands qui veulent aller plus loin : patronage simple, premières machines, petits vêtements.", meta:['Samedi 10h-12h30','6 enfants max','Trimestre'], price:'240€ / trimestre', city:'Vouillé', emoji:'✂️', places: 2, placesMax: 6 },
  { id:'ae3', cat:'stage', badge:'Stage vacances', badgeColor:'rose', title:"Stage Toussaint — Monstres & compagnie", desc:"Trois après-midis pour coudre un monstre-doudou et son univers. On pique, on rigole, on repart avec sa pépite.", meta:['3 après-midis','14h-16h30','Goûter inclus'], price:'65€', city:'Fontaine-le-Comte', emoji:'👹', places: 4, placesMax: 8 },
  { id:'ae4', cat:'stage', badge:'Stage vacances', badgeColor:'rose', title:"Stage Pâques — Ma trousse dorée", desc:"Deux jours d'atelier, une trousse personnalisée et brodée.", meta:['2 journées','10h-16h','Repas tiré du sac'], price:'95€', city:'Châtellerault', emoji:'✏️', places: 6, placesMax: 8 },
  { id:'ae5', cat:'evenement', badge:'Anniversaire', title:"Anniversaire créatif à domicile", desc:"Je viens chez vous avec tout le matériel. Les enfants repartent avec leur création cousue entre copains.", meta:["6 à 10 enfants","2h d'atelier","À domicile"], price:'dès 180€', city:'Vienne 86', emoji:'🎂', places: null, placesMax: null },
  { id:'ae6', cat:'evenement', badge:"Fête d'école", title:"Kermesses & fêtes d'école", desc:"Stand animation couture pour les fêtes d'école et événements associatifs.", meta:['Stand complet','3h minimum','Mobile'], price:'sur devis', city:'86 / 79', emoji:'🎪', places: null, placesMax: null },
]

export const DEFAULT_DATES_JOURNEES: DateJournee[] = [
  { id:'dj1', jour:'Sam', num:'12', mois:'Avril', theme:"Blouse d'été — patron Mars & Co", places: 3, placesMax: 6 },
  { id:'dj2', jour:'Dim', num:'27', mois:'Avril', theme:'Sac tote revisité', places: 1, placesMax: 6 },
  { id:'dj3', jour:'Sam', num:'10', mois:'Mai', theme:'Jupe midi — carte blanche', places: 5, placesMax: 6 },
]

export const DEFAULT_DATES_RETRAITES: DateRetraite[] = [
  { id:'dr1', dates:'16 — 18 mai', theme:'Retraite printanière', statut:'Plus que 2 places', complet: false },
  { id:'dr2', dates:'13 — 15 juin', theme:'Retraite solstice', statut:'Complet', complet: true },
  { id:'dr3', dates:'26 — 28 sept.', theme:'Retraite rentrée douce', statut:'Ouverture réservations', complet: false },
]

export const JOURNEES_CONFIG = { prix: 90, lieu: 'Fontaine-le-Comte', placesMax: 6, horaire: '9h30 → 17h' }
export const RETRAITES_CONFIG = { prix: 390, lieu: 'Deux-Sèvres (79)', nbLits: 8, duree: 'Vendredi soir → Dimanche 16h' }
