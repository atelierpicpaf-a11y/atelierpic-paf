export type SessionType = 'atelier_enfant' | 'journee_creative' | 'retraite_creative' | 'structure'
export type SessionStatut = 'ouvert' | 'complet' | 'annule' | 'termine'
export type StatutPaiement = 'en_attente' | 'paye_acompte' | 'paye_total' | 'rembourse' | 'annule'

export interface Session {
  id: string
  type: SessionType
  titre: string
  description: string | null
  date_debut: string
  date_fin: string
  lieu: string
  ville: string | null
  code_postal: string | null
  adresse: string | null
  places_max: number
  places_reservees: number
  prix_centimes: number
  acompte_centimes: number | null
  age_min: number | null
  age_max: number | null
  statut: SessionStatut
  image_url: string | null
  slug: string | null
  meta_title: string | null
  meta_description: string | null
  created_at: string
  updated_at: string
}

export interface Reservation {
  id: string
  session_id: string
  nom: string
  prenom: string
  email: string
  telephone: string | null
  nb_personnes: number
  nom_participant: string | null
  prenom_participant: string | null
  age_participant: number | null
  message: string | null
  regime_alimentaire: string | null
  stripe_session_id: string | null
  stripe_payment_intent_id: string | null
  montant_paye_centimes: number | null
  statut_paiement: StatutPaiement
  created_at: string
}

export interface NewsletterAbonne {
  id: string
  email: string
  nom: string | null
  consentement: boolean
  date_inscription: string
  actif: boolean
}

export interface MessageContact {
  id: string
  nom: string
  email: string
  sujet: string | null
  message: string
  lu: boolean
  created_at: string
}

export interface Temoignage {
  id: string
  nom: string
  ville: string | null
  note: number | null
  texte: string
  type_atelier: string | null
  publie: boolean
  created_at: string
}

export interface Article {
  id: string
  slug: string
  titre: string
  extrait: string | null
  contenu_mdx: string | null
  image_cover: string | null
  categorie: string | null
  meta_title: string | null
  meta_description: string | null
  publie: boolean
  date_publication: string | null
  auteur: string
  created_at: string
}

export type Database = {
  public: {
    Tables: {
      sessions: {
        Row: Session
        Insert: Omit<Session, 'id' | 'created_at' | 'updated_at'> & { id?: string; created_at?: string; updated_at?: string }
        Update: Partial<Omit<Session, 'id'>>
      }
      reservations: {
        Row: Reservation
        Insert: Omit<Reservation, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<Omit<Reservation, 'id'>>
      }
      newsletter_abonnes: {
        Row: NewsletterAbonne
        Insert: Omit<NewsletterAbonne, 'id' | 'date_inscription'> & { id?: string; date_inscription?: string }
        Update: Partial<Omit<NewsletterAbonne, 'id'>>
      }
      messages_contact: {
        Row: MessageContact
        Insert: Omit<MessageContact, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<Omit<MessageContact, 'id'>>
      }
      temoignages: {
        Row: Temoignage
        Insert: Omit<Temoignage, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<Omit<Temoignage, 'id'>>
      }
      articles: {
        Row: Article
        Insert: Omit<Article, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<Omit<Article, 'id'>>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
