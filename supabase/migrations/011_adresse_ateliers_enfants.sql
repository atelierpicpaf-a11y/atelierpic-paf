-- 011 : adresse exacte d'un atelier enfant (affichée dans l'e-mail de confirmation).
-- À exécuter dans Supabase : Dashboard > SQL Editor > coller > Run, AVANT de déployer le code.
-- Les sessions (journées, retraites) ont déjà une colonne « adresse ».

ALTER TABLE ateliers_enfants
  ADD COLUMN IF NOT EXISTS adresse TEXT;
