-- 006 — Produits réels de la boutique (prix TTC, micro-entreprise non assujettie TVA)
-- Idempotent : à appliquer SEULEMENT si tu as déjà appliqué 005 AVANT cette correction
-- (c.-à-d. si ta table produits contient les anciens coffrets placeholder à 19,90€).
-- Si tu appliques 005 pour la première fois maintenant, elle contient déjà les bons produits :
-- tu peux ignorer ce fichier.

-- 1) Renommer / corriger les 4 produits déjà seedés par l'ancienne 005
UPDATE produits SET
  slug = 'kit-bandeau', nom = 'Kit bandeau',
  description = 'Tout le matériel pour coudre ton bandeau, avec le tuto vidéo offert.',
  ordre = 0
WHERE slug = 'coffret-bandeau-magique';

UPDATE produits SET
  slug = 'kit-chouchou', nom = 'Kit chouchou', ordre = 1
WHERE slug = 'coffret-chouchou';

UPDATE produits SET
  slug = 'kit-marque-page', nom = 'Kit marque-page', ordre = 2
WHERE slug = 'coffret-marque-page';

UPDATE produits SET
  slug = 'kit-lingette', nom = 'Kit lingette lavable', ordre = 3
WHERE slug = 'coffret-lingettes-lavables';

-- 2) Ajouter les 2 nouveaux produits (punch needle, sticker)
INSERT INTO produits (slug, nom, description, description_longue, niveau, tuto_video_id, ordre, actif)
VALUES
  ('coffret-punch-needle', 'Coffret punch needle',
   'Initie-toi au punch needle : aiguille magique, laine, tambour et tutoriel.',
   E'Le coffret pour découvrir le punch needle :\n• Le tutoriel\n• L''aiguille magique (punch needle)\n• La laine colorée\n• La toile et le tambour\n\nTout pour créer ton premier motif en relief, une technique tendance et bluffante.',
   'Débutant', '', 4, true),
  ('sticker-textile', 'Sticker textile',
   'Des stickers textiles thermocollants pour personnaliser tes créations.',
   E'Des stickers textiles thermocollants pour customiser tes vêtements, tote-bags et créations couture. Faciles à poser au fer à repasser.',
   'Débutant', '', 5, true)
ON CONFLICT (slug) DO NOTHING;

-- 3) Mettre à jour le prix de la variante Standard de chaque produit
UPDATE variantes_produit v SET prix_centimes = 1290 FROM produits p WHERE v.produit_id = p.id AND p.slug = 'kit-bandeau';
UPDATE variantes_produit v SET prix_centimes = 1290 FROM produits p WHERE v.produit_id = p.id AND p.slug = 'kit-chouchou';
UPDATE variantes_produit v SET prix_centimes = 1290 FROM produits p WHERE v.produit_id = p.id AND p.slug = 'kit-marque-page';
UPDATE variantes_produit v SET prix_centimes = 1490 FROM produits p WHERE v.produit_id = p.id AND p.slug = 'kit-lingette';

-- 4) Créer la variante Standard des 2 nouveaux produits (si absente)
INSERT INTO variantes_produit (produit_id, nom, prix_centimes, stock, ordre, actif)
SELECT id, 'Standard', CASE slug WHEN 'coffret-punch-needle' THEN 2490 WHEN 'sticker-textile' THEN 990 END, 20, 0, true
FROM produits
WHERE slug IN ('coffret-punch-needle','sticker-textile')
  AND NOT EXISTS (SELECT 1 FROM variantes_produit v WHERE v.produit_id = produits.id);
