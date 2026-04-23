-- ============================================================
-- ATELIERS ENFANTS
-- Table dédiée aux cours hebdo, stages, événements enfants
-- ============================================================
CREATE TABLE IF NOT EXISTS ateliers_enfants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  titre TEXT NOT NULL DEFAULT 'Nouvel atelier',
  categorie TEXT NOT NULL DEFAULT 'hebdo',
  badge_texte TEXT,
  badge_couleur TEXT NOT NULL DEFAULT 'menthe',
  ville TEXT NOT NULL DEFAULT '',
  description TEXT,
  infos TEXT,           -- valeurs séparées par | ex: "Mercredi 14h-16h | 7-12 enfants | Trimestre"
  prix_texte TEXT,      -- ex: "180€ / trimestre"
  places_max INTEGER,
  places_dispo INTEGER,
  emoji TEXT NOT NULL DEFAULT '🧵',
  ordre INTEGER NOT NULL DEFAULT 0,
  actif BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER ateliers_enfants_updated_at
  BEFORE UPDATE ON ateliers_enfants
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- CONFIG ATELIERS (journées créatives + retraites)
-- ============================================================
CREATE TABLE IF NOT EXISTS config_ateliers (
  type TEXT PRIMARY KEY,     -- 'journees' | 'retraites'
  prix_centimes INTEGER NOT NULL DEFAULT 0,
  prix_texte TEXT,
  description TEXT,
  inclus TEXT,               -- valeurs séparées par |
  duree TEXT,
  lieu TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Prix_texte column on sessions (for display in public pages)
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS prix_texte TEXT;

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE ateliers_enfants ENABLE ROW LEVEL SECURITY;
ALTER TABLE config_ateliers ENABLE ROW LEVEL SECURITY;

-- Public: read active ateliers
CREATE POLICY "Ateliers enfants publics" ON ateliers_enfants
  FOR SELECT USING (actif = true);

-- Admin: full access
CREATE POLICY "Ateliers enfants admin" ON ateliers_enfants
  FOR ALL USING (auth.role() = 'service_role');

-- Public: read config
CREATE POLICY "Config publique" ON config_ateliers
  FOR SELECT USING (true);

-- Admin: full access
CREATE POLICY "Config admin" ON config_ateliers
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================================
-- DONNÉES PAR DÉFAUT
-- ============================================================
INSERT INTO config_ateliers (type, prix_centimes, prix_texte, description, inclus, duree, lieu) VALUES
  ('journees', 9000, '90€',
   'Une journée complète de couture créative dans une ambiance chaleureuse et bienveillante. Tous les niveaux sont les bienvenus.',
   'Matériel et tissu fourni|Déjeuner tiré du sac|Collations|Maximum 8 participantes',
   '9h30 → 17h30',
   'Fontaine-le-Comte (86)'),
  ('retraites', 39000, '390€',
   'Un week-end ressourçant alliant couture, yoga et convivialité dans un gîte en Deux-Sèvres. Venez vous reconnecter à votre créativité.',
   'Hébergement en gîte|Tous les repas|2 séances de yoga|Matériel couture fourni|Maximum 8 participantes',
   'Vendredi soir → Dimanche midi',
   'Deux-Sèvres (79)')
ON CONFLICT (type) DO NOTHING;
