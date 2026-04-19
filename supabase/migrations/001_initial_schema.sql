-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- SESSIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL CHECK (type IN ('atelier_enfant', 'journee_creative', 'retraite_creative', 'structure')),
  titre TEXT NOT NULL,
  description TEXT,
  date_debut TIMESTAMPTZ NOT NULL,
  date_fin TIMESTAMPTZ NOT NULL,
  lieu TEXT NOT NULL,
  ville TEXT,
  code_postal TEXT,
  adresse TEXT,
  places_max INTEGER NOT NULL DEFAULT 6,
  places_reservees INTEGER NOT NULL DEFAULT 0,
  prix_centimes INTEGER NOT NULL DEFAULT 0,
  acompte_centimes INTEGER,
  age_min INTEGER,
  age_max INTEGER,
  statut TEXT NOT NULL DEFAULT 'ouvert' CHECK (statut IN ('ouvert', 'complet', 'annule', 'termine')),
  image_url TEXT,
  slug TEXT UNIQUE,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Trigger: updated_at on sessions
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sessions_updated_at
  BEFORE UPDATE ON sessions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- RESERVATIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS reservations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  nb_personnes INTEGER NOT NULL DEFAULT 1,
  nom_participant TEXT,
  prenom_participant TEXT,
  age_participant INTEGER,
  message TEXT,
  regime_alimentaire TEXT,
  stripe_session_id TEXT,
  stripe_payment_intent_id TEXT,
  montant_paye_centimes INTEGER,
  statut_paiement TEXT NOT NULL DEFAULT 'en_attente' CHECK (statut_paiement IN ('en_attente', 'paye_acompte', 'paye_total', 'rembourse', 'annule')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- NEWSLETTER ABONNES
-- ============================================================
CREATE TABLE IF NOT EXISTS newsletter_abonnes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  nom TEXT,
  consentement BOOLEAN NOT NULL DEFAULT TRUE,
  date_inscription TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  actif BOOLEAN NOT NULL DEFAULT TRUE
);

-- ============================================================
-- MESSAGES CONTACT
-- ============================================================
CREATE TABLE IF NOT EXISTS messages_contact (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  sujet TEXT,
  message TEXT NOT NULL,
  lu BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- TEMOIGNAGES
-- ============================================================
CREATE TABLE IF NOT EXISTS temoignages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nom TEXT NOT NULL,
  ville TEXT,
  note INTEGER CHECK (note BETWEEN 1 AND 5),
  texte TEXT NOT NULL,
  type_atelier TEXT,
  publie BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- ARTICLES
-- ============================================================
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  titre TEXT NOT NULL,
  extrait TEXT,
  contenu_mdx TEXT,
  image_cover TEXT,
  categorie TEXT,
  meta_title TEXT,
  meta_description TEXT,
  publie BOOLEAN NOT NULL DEFAULT FALSE,
  date_publication TIMESTAMPTZ,
  auteur TEXT NOT NULL DEFAULT 'Ludivine',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_abonnes ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages_contact ENABLE ROW LEVEL SECURITY;
ALTER TABLE temoignages ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Sessions: public read for ouvert sessions
CREATE POLICY "Sessions publiques lisibles" ON sessions
  FOR SELECT USING (statut IN ('ouvert', 'complet'));

-- Sessions: admin full access (service role bypasses RLS)
CREATE POLICY "Sessions admin" ON sessions
  FOR ALL USING (auth.role() = 'service_role');

-- Reservations: users can insert their own
CREATE POLICY "Reservations insert" ON reservations
  FOR INSERT WITH CHECK (true);

-- Reservations: admin read
CREATE POLICY "Reservations admin" ON reservations
  FOR SELECT USING (auth.role() = 'service_role');

-- Newsletter: public insert
CREATE POLICY "Newsletter insert" ON newsletter_abonnes
  FOR INSERT WITH CHECK (true);

-- Newsletter: admin
CREATE POLICY "Newsletter admin" ON newsletter_abonnes
  FOR ALL USING (auth.role() = 'service_role');

-- Messages: public insert
CREATE POLICY "Messages insert" ON messages_contact
  FOR INSERT WITH CHECK (true);

-- Messages: admin
CREATE POLICY "Messages admin" ON messages_contact
  FOR ALL USING (auth.role() = 'service_role');

-- Temoignages: public read if published
CREATE POLICY "Temoignages publics" ON temoignages
  FOR SELECT USING (publie = true);

-- Temoignages: public insert (moderated)
CREATE POLICY "Temoignages insert" ON temoignages
  FOR INSERT WITH CHECK (true);

-- Temoignages: admin
CREATE POLICY "Temoignages admin" ON temoignages
  FOR ALL USING (auth.role() = 'service_role');

-- Articles: public read if published
CREATE POLICY "Articles publics" ON articles
  FOR SELECT USING (publie = true);

-- Articles: admin
CREATE POLICY "Articles admin" ON articles
  FOR ALL USING (auth.role() = 'service_role');
