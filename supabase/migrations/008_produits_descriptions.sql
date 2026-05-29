-- 008 — Mise à jour des descriptions produits (contenu réel des kits)
-- À appliquer dans le SQL Editor Supabase.

-- Coffret punch needle : contenu complet
UPDATE produits SET
  description = 'Initie-toi au punch needle : aiguille magique, laine, toile, tambour et tutoriel. Tu n''as plus qu''à créer ton dessin !',
  description_longue = E'Le coffret pour découvrir le punch needle :\n• Le tutoriel\n• L''aiguille magique (punch needle)\n• L''enfile-aiguille\n• La laine colorée\n• La toile\n• Le tambour\n• La colle\n• Le pinceau\n\nTu n''as plus qu''à créer ton dessin !'
WHERE slug = 'coffret-punch-needle';

-- Sticker en tissu à fabriquer (renommé, sans "thermocollant")
UPDATE produits SET
  nom = 'Sticker en tissu à fabriquer',
  description = 'Des stickers en tissu à fabriquer toi-même pour personnaliser tes affaires.',
  description_longue = E'Le kit pour créer tes propres stickers en tissu :\n• Le tutoriel\n• Les feuilles adhésives / tissu\n\nÀ toi de suivre le tuto, dessiner et découper la forme que tu souhaites. Personnalise tes photos, tes cahiers, tes affaires… et bien plus encore !'
WHERE slug = 'sticker-textile';

-- Kit lingette lavable : 4 lingettes ultra douces
UPDATE produits SET
  description = 'Couds 4 lingettes lavables ultra douces, zéro déchet, tuto vidéo inclus.',
  description_longue = E'Ce kit contient tout pour réaliser 4 lingettes lavables ultra douces :\n• Le tutoriel vidéo\n• Le patron\n• Le tissu éponge et coton\n• Le fil\n\nGeste malin et écolo, réutilisable à l''infini. Parfait pour débuter.'
WHERE slug = 'kit-lingette';
