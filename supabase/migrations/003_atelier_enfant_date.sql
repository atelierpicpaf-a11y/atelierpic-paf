-- 003 — Colonne date_atelier pour ateliers enfants individuels
-- À appliquer dans le SQL Editor Supabase AVANT d'utiliser l'admin pour les ateliers enfants.
-- Dashboard Supabase → SQL Editor → coller et exécuter.

ALTER TABLE ateliers_enfants
  ADD COLUMN IF NOT EXISTS date_atelier TIMESTAMPTZ;
