-- 004 — Intégration Stripe : paiements sur ateliers enfants
-- À appliquer dans le SQL Editor Supabase

-- Ajout du prix en centimes sur ateliers_enfants (Stripe travaille en centimes)
ALTER TABLE ateliers_enfants
  ADD COLUMN IF NOT EXISTS prix_centimes INTEGER NOT NULL DEFAULT 0;

-- Ajout du lien vers un atelier enfant sur reservations
ALTER TABLE reservations
  ADD COLUMN IF NOT EXISTS atelier_enfant_id UUID REFERENCES ateliers_enfants(id) ON DELETE CASCADE;

-- session_id devient nullable (une résa vise soit session, soit atelier_enfant)
ALTER TABLE reservations
  ALTER COLUMN session_id DROP NOT NULL;

-- Contrainte : exactement l'un des deux est renseigné
ALTER TABLE reservations
  DROP CONSTRAINT IF EXISTS reservations_target_check;
ALTER TABLE reservations
  ADD CONSTRAINT reservations_target_check CHECK (
    (session_id IS NOT NULL AND atelier_enfant_id IS NULL)
    OR (session_id IS NULL AND atelier_enfant_id IS NOT NULL)
  );

-- Index pour les lookups par stripe_session_id (webhook)
CREATE INDEX IF NOT EXISTS reservations_stripe_session_idx
  ON reservations(stripe_session_id);

-- Index pour les réservations par atelier enfant
CREATE INDEX IF NOT EXISTS reservations_atelier_enfant_idx
  ON reservations(atelier_enfant_id);
