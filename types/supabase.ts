export type Session = {
  id: string; type: 'atelier_enfant' | 'journee_creative' | 'retraite_creative' | 'structure'
  titre: string; description: string | null; date_debut: string; date_fin: string
  lieu: string; ville: string | null; code_postal: string | null; adresse: string | null
  places_max: number; places_reservees: number; prix_centimes: number
  acompte_centimes: number | null; age_min: number | null; age_max: number | null
  statut: 'ouvert' | 'complet' | 'annule' | 'termine'
  image_url: string | null; slug: string | null; meta_title: string | null
  meta_description: string | null; prix_texte: string | null
  created_at: string; updated_at: string
}

export type AtelierEnfantRow = {
  id: string
  titre: string
  categorie: string
  badge_texte: string | null
  badge_couleur: string
  ville: string
  description: string | null
  infos: string | null
  prix_texte: string | null
  places_max: number | null
  places_dispo: number | null
  emoji: string
  ordre: number
  actif: boolean
  created_at: string
  updated_at: string
}

export type ConfigAtelier = {
  type: string
  prix_centimes: number
  prix_texte: string | null
  description: string | null
  inclus: string | null
  duree: string | null
  lieu: string | null
  updated_at: string
}

export type Reservation = {
  id: string; session_id: string; nom: string; prenom: string; email: string
  telephone: string | null; nb_personnes: number; nom_participant: string | null
  prenom_participant: string | null; age_participant: number | null; message: string | null
  regime_alimentaire: string | null; stripe_session_id: string | null
  stripe_payment_intent_id: string | null; montant_paye_centimes: number | null
  statut_paiement: 'en_attente' | 'paye_acompte' | 'paye_total' | 'rembourse' | 'annule'
  created_at: string
}
export type MessageContact = { id: string; nom: string; email: string; sujet: string | null; message: string; lu: boolean; created_at: string }
export type NewsletterAbonne = { id: string; email: string; nom: string | null; consentement: boolean; date_inscription: string; actif: boolean }
export type Temoignage = { id: string; nom: string; ville: string | null; note: number | null; texte: string; type_atelier: string | null; publie: boolean; created_at: string }
export type Article = { id: string; slug: string; titre: string; extrait: string | null; contenu_mdx: string | null; image_cover: string | null; categorie: string | null; meta_title: string | null; meta_description: string | null; publie: boolean; date_publication: string | null; auteur: string; created_at: string }
export type Database = {
  public: {
    Tables: {
      sessions: { Row: Session; Insert: { id?: string; type: Session['type']; titre: string; date_debut: string; date_fin: string; lieu: string; places_max: number; prix_centimes: number; statut?: Session['statut']; description?: string | null; ville?: string | null; code_postal?: string | null; adresse?: string | null; places_reservees?: number; acompte_centimes?: number | null; age_min?: number | null; age_max?: number | null; image_url?: string | null; slug?: string | null; meta_title?: string | null; meta_description?: string | null; prix_texte?: string | null; created_at?: string; updated_at?: string }; Update: Partial<Session>; Relationships: [] }
      ateliers_enfants: { Row: AtelierEnfantRow; Insert: { id?: string; titre: string; categorie?: string; badge_texte?: string | null; badge_couleur?: string; ville?: string; description?: string | null; infos?: string | null; prix_texte?: string | null; places_max?: number | null; places_dispo?: number | null; emoji?: string; ordre?: number; actif?: boolean; created_at?: string; updated_at?: string }; Update: Partial<AtelierEnfantRow>; Relationships: [] }
      config_ateliers: { Row: ConfigAtelier; Insert: ConfigAtelier; Update: Partial<ConfigAtelier>; Relationships: [] }
      reservations: { Row: Reservation; Insert: Omit<Reservation, 'id'|'created_at'> & { id?: string; created_at?: string }; Update: Partial<Reservation>; Relationships: [] }
      newsletter_abonnes: { Row: NewsletterAbonne; Insert: Omit<NewsletterAbonne, 'id'|'date_inscription'|'consentement'|'actif'> & { id?: string; date_inscription?: string; consentement?: boolean; actif?: boolean }; Update: Partial<NewsletterAbonne>; Relationships: [] }
      messages_contact: { Row: MessageContact; Insert: Omit<MessageContact, 'id'|'created_at'|'lu'> & { id?: string; created_at?: string; lu?: boolean }; Update: Partial<MessageContact>; Relationships: [] }
      temoignages: { Row: Temoignage; Insert: Omit<Temoignage, 'id'|'created_at'|'publie'> & { id?: string; created_at?: string; publie?: boolean }; Update: Partial<Temoignage>; Relationships: [] }
      articles: { Row: Article; Insert: Omit<Article, 'id'|'created_at'|'publie'|'auteur'> & { id?: string; created_at?: string; publie?: boolean; auteur?: string }; Update: Partial<Article>; Relationships: [] }
    }
    Views: Record<string, never>; Functions: Record<string, never>; Enums: Record<string, never>; CompositeTypes: Record<string, never>
  }
}
