-- 010 — Réparation complète boutique (idempotente)
-- Force le bon état final des 6 produits : noms, prix des variantes, et crée une
-- variante Standard pour tout produit qui n'en aurait aucune.
-- Sans danger à ré-exécuter. À coller dans le SQL Editor Supabase.

-- 1) Noms corrects
UPDATE produits SET nom = 'Sticker en tissu à fabriquer' WHERE slug = 'sticker-textile';
UPDATE produits SET nom = 'Kit bandeau'          WHERE slug = 'kit-bandeau';
UPDATE produits SET nom = 'Kit chouchou'         WHERE slug = 'kit-chouchou';
UPDATE produits SET nom = 'Kit marque-page'      WHERE slug = 'kit-marque-page';
UPDATE produits SET nom = 'Kit lingette lavable' WHERE slug = 'kit-lingette';
UPDATE produits SET nom = 'Coffret punch needle' WHERE slug = 'coffret-punch-needle';

-- 2) Forcer le bon prix sur les variantes existantes
UPDATE variantes_produit v SET prix_centimes = 2490 FROM produits p WHERE v.produit_id = p.id AND p.slug = 'coffret-punch-needle';
UPDATE variantes_produit v SET prix_centimes = 990  FROM produits p WHERE v.produit_id = p.id AND p.slug = 'sticker-textile';
UPDATE variantes_produit v SET prix_centimes = 1290 FROM produits p WHERE v.produit_id = p.id AND p.slug = 'kit-chouchou';
UPDATE variantes_produit v SET prix_centimes = 1290 FROM produits p WHERE v.produit_id = p.id AND p.slug = 'kit-marque-page';
UPDATE variantes_produit v SET prix_centimes = 1490 FROM produits p WHERE v.produit_id = p.id AND p.slug = 'kit-lingette';
-- (kit-bandeau : 3 coloris déjà à 1290 via migration 007, on n'y touche pas)

-- 3) Créer une variante Standard pour tout produit qui n'en a AUCUNE (corrige les 0,00 €)
INSERT INTO variantes_produit (produit_id, nom, prix_centimes, stock, ordre, actif)
SELECT p.id, 'Standard',
  CASE p.slug
    WHEN 'coffret-punch-needle' THEN 2490
    WHEN 'sticker-textile'      THEN 990
    WHEN 'kit-lingette'         THEN 1490
    ELSE 1290
  END,
  20, 0, true
FROM produits p
WHERE NOT EXISTS (SELECT 1 FROM variantes_produit v WHERE v.produit_id = p.id);

-- 4) Descriptions (re-assertion, au cas où 008/009 n'auraient pas été appliquées)
UPDATE produits SET
  description = 'Initie-toi au punch needle : aiguille magique, laine, toile, tambour et tutoriel. Tu n''as plus qu''à créer ton dessin !',
  description_longue = E'Ce kit contient :\n• Le tutoriel\n• Le tambour\n• La toile\n• Une aiguille\n• Un enfile-aiguille\n• De la laine\n• Un pinceau\n• De la colle\n\nTu n''as plus qu''à créer ton dessin !'
WHERE slug = 'coffret-punch-needle';

UPDATE produits SET
  description = 'Des stickers en tissu à fabriquer toi-même pour personnaliser tes affaires.',
  description_longue = E'Le kit pour créer tes propres stickers en tissu :\n• Le tutoriel\n• Les feuilles adhésives / tissu\n\nÀ toi de suivre le tuto, dessiner et découper la forme que tu souhaites. Personnalise tes photos, tes cahiers, tes affaires…'
WHERE slug = 'sticker-textile';

UPDATE produits SET description_longue = E'Ce kit contient :\n• Un tutoriel\n• Un patron\n• Le tissu\n• Les épingles\n• Le fil d''aluminium' WHERE slug = 'kit-bandeau';
UPDATE produits SET description_longue = E'Ce kit contient :\n• Un tutoriel\n• Un patron\n• Le tissu\n• Les épingles\n• L''épingle à nourrice\n• L''élastique' WHERE slug = 'kit-chouchou';
UPDATE produits SET description_longue = E'Ce kit contient :\n• Un tutoriel\n• Un patron\n• Le tissu\n• Les épingles\n• Le ruban' WHERE slug = 'kit-marque-page';
UPDATE produits SET description_longue = E'4 lingettes lavables ultra douces à coudre.\n\nCe kit contient :\n• Un tutoriel\n• Un patron\n• Les tissus\n• Les épingles' WHERE slug = 'kit-lingette';
