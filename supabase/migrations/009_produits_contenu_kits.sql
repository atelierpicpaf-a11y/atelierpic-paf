-- 009 — Contenu exact des kits (listes "Ce kit contient") fournies par Ludivine
-- À appliquer dans le SQL Editor Supabase.

UPDATE produits SET description_longue =
  E'Ce kit contient :\n• Un tutoriel\n• Un patron\n• Le tissu\n• Les épingles\n• L''épingle à nourrice\n• L''élastique'
WHERE slug = 'kit-chouchou';

UPDATE produits SET description_longue =
  E'4 lingettes lavables ultra douces à coudre.\n\nCe kit contient :\n• Un tutoriel\n• Un patron\n• Les tissus\n• Les épingles'
WHERE slug = 'kit-lingette';

UPDATE produits SET description_longue =
  E'Ce kit contient :\n• Un tutoriel\n• Un patron\n• Le tissu\n• Les épingles\n• Le fil d''aluminium'
WHERE slug = 'kit-bandeau';

UPDATE produits SET description_longue =
  E'Ce kit contient :\n• Un tutoriel\n• Un patron\n• Le tissu\n• Les épingles\n• Le ruban'
WHERE slug = 'kit-marque-page';

UPDATE produits SET description_longue =
  E'Ce kit contient :\n• Le tutoriel\n• Le tambour\n• La toile\n• Une aiguille\n• Un enfile-aiguille\n• De la laine\n• Un pinceau\n• De la colle\n\nTu n''as plus qu''à créer ton dessin !'
WHERE slug = 'coffret-punch-needle';
