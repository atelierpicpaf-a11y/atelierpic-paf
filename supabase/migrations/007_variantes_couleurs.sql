-- 007 — Photo par variante (couleur de tissu) + coloris du Kit bandeau
-- À appliquer dans le SQL Editor Supabase.

-- Chaque variante (coloris) peut avoir sa propre photo
ALTER TABLE variantes_produit
  ADD COLUMN IF NOT EXISTS image TEXT;

-- Kit bandeau : 3 coloris au lieu d'une variante "Standard"
-- (on supprime la Standard puis on crée les 3 — Ludivine ajoutera les photos en admin)
DO $$
DECLARE
  v_produit_id UUID;
BEGIN
  SELECT id INTO v_produit_id FROM produits WHERE slug = 'kit-bandeau';
  IF v_produit_id IS NOT NULL THEN
    -- Supprime l'unique variante Standard si c'est la seule
    DELETE FROM variantes_produit
    WHERE produit_id = v_produit_id AND nom = 'Standard';

    -- Crée les 3 coloris seulement s'ils n'existent pas déjà
    INSERT INTO variantes_produit (produit_id, nom, prix_centimes, stock, ordre, actif)
    SELECT v_produit_id, c.nom, 1290, 20, c.ordre, true
    FROM (VALUES
      ('Corail à fleurs', 0),
      ('Rayé turquoise', 1),
      ('Multicolore fleuri', 2)
    ) AS c(nom, ordre)
    WHERE NOT EXISTS (
      SELECT 1 FROM variantes_produit v WHERE v.produit_id = v_produit_id AND v.nom = c.nom
    );
  END IF;
END $$;
