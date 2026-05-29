-- 005 — Boutique e-commerce : coffrets DIY, variantes, commandes, lignes
-- À appliquer dans le SQL Editor Supabase.
-- Dépend de 001 (extension uuid-ossp + fonction update_updated_at déjà créées).

-- ============================================================
-- PRODUITS (coffrets DIY)
-- ============================================================
CREATE TABLE IF NOT EXISTS produits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  nom TEXT NOT NULL,
  description TEXT,
  description_longue TEXT,
  niveau TEXT NOT NULL DEFAULT 'Débutant',
  categorie TEXT NOT NULL DEFAULT 'coffret',
  image_principale TEXT,
  images TEXT[] NOT NULL DEFAULT '{}',
  tuto_video_id TEXT,
  actif BOOLEAN NOT NULL DEFAULT TRUE,
  ordre INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER produits_updated_at
  BEFORE UPDATE ON produits
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- VARIANTES PRODUIT (SKU achetable : prix + stock vivent ici)
-- ============================================================
CREATE TABLE IF NOT EXISTS variantes_produit (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  produit_id UUID NOT NULL REFERENCES produits(id) ON DELETE CASCADE,
  nom TEXT NOT NULL DEFAULT 'Standard',
  prix_centimes INTEGER NOT NULL DEFAULT 0,
  stock INTEGER NOT NULL DEFAULT 0,
  sku TEXT,
  actif BOOLEAN NOT NULL DEFAULT TRUE,
  ordre INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS variantes_produit_produit_idx ON variantes_produit(produit_id);

-- ============================================================
-- COMMANDES
-- ============================================================
CREATE TABLE IF NOT EXISTS commandes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  numero TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  telephone TEXT,
  -- Point relais Mondial Relay choisi par le client
  mondial_relay_id TEXT,
  mondial_relay_nom TEXT,
  mondial_relay_adresse TEXT,
  mondial_relay_cp TEXT,
  mondial_relay_ville TEXT,
  montant_total_centimes INTEGER NOT NULL DEFAULT 0,
  montant_livraison_centimes INTEGER NOT NULL DEFAULT 0,
  stripe_session_id TEXT,
  stripe_payment_intent_id TEXT,
  statut_paiement TEXT NOT NULL DEFAULT 'en_attente' CHECK (statut_paiement IN ('en_attente', 'paye_total', 'rembourse', 'annule')),
  statut TEXT NOT NULL DEFAULT 'en_attente_paiement' CHECK (statut IN ('en_attente_paiement', 'paye', 'preparee', 'expediee', 'livree', 'annulee')),
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER commandes_updated_at
  BEFORE UPDATE ON commandes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE INDEX IF NOT EXISTS commandes_stripe_session_idx ON commandes(stripe_session_id);

-- ============================================================
-- LIGNES COMMANDE (snapshots du produit/variante au moment de l'achat)
-- ============================================================
CREATE TABLE IF NOT EXISTS lignes_commande (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  commande_id UUID NOT NULL REFERENCES commandes(id) ON DELETE CASCADE,
  variante_id UUID REFERENCES variantes_produit(id) ON DELETE SET NULL,
  produit_nom TEXT NOT NULL,
  variante_nom TEXT NOT NULL,
  prix_unitaire_centimes INTEGER NOT NULL,
  quantite INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS lignes_commande_commande_idx ON lignes_commande(commande_id);

-- ============================================================
-- DÉCRÉMENT DE STOCK ATOMIQUE (appelé par le webhook après paiement)
-- Empêche un stock négatif via GREATEST(stock - qty, 0).
-- ============================================================
CREATE OR REPLACE FUNCTION decrementer_stock(p_variante_id UUID, p_qty INTEGER)
RETURNS VOID AS $$
BEGIN
  UPDATE variantes_produit
  SET stock = GREATEST(stock - p_qty, 0)
  WHERE id = p_variante_id;
END;
$$ LANGUAGE plpgsql;

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE produits ENABLE ROW LEVEL SECURITY;
ALTER TABLE variantes_produit ENABLE ROW LEVEL SECURITY;
ALTER TABLE commandes ENABLE ROW LEVEL SECURITY;
ALTER TABLE lignes_commande ENABLE ROW LEVEL SECURITY;

-- Produits : lecture publique des produits actifs
CREATE POLICY "Produits publics lisibles" ON produits
  FOR SELECT USING (actif = true);
CREATE POLICY "Produits admin" ON produits
  FOR ALL USING (auth.role() = 'service_role');

-- Variantes : lecture publique des variantes actives
CREATE POLICY "Variantes publiques lisibles" ON variantes_produit
  FOR SELECT USING (actif = true);
CREATE POLICY "Variantes admin" ON variantes_produit
  FOR ALL USING (auth.role() = 'service_role');

-- Commandes : service role uniquement (créées + lues via webhook/admin)
CREATE POLICY "Commandes admin" ON commandes
  FOR ALL USING (auth.role() = 'service_role');

-- Lignes commande : service role uniquement
CREATE POLICY "Lignes commande admin" ON lignes_commande
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================================
-- SEED — 6 produits réels (prix TTC, micro-entreprise non assujettie TVA)
-- Photos à finaliser en admin (image_principale vide pour l'instant).
-- ============================================================
INSERT INTO produits (slug, nom, description, description_longue, niveau, tuto_video_id, image_principale, ordre, actif)
VALUES
  ('kit-bandeau', 'Kit bandeau',
   'Tout le matériel pour coudre ton bandeau, avec le tuto vidéo offert.',
   E'Ce kit contient tout pour réaliser ton bandeau :\n• Le tutoriel vidéo\n• Le patron\n• Le tissu\n• Les épingles et le fil\n\nSuis Ludivine pas à pas, même si tu n''as jamais cousu. Le projet idéal pour débuter en douceur.',
   'Débutant', 'Fpg-_glbkNY', '', 0, true),
  ('kit-chouchou', 'Kit chouchou',
   'Le kit complet pour coudre ton chouchou, tuto vidéo inclus.',
   E'Ce kit contient tout pour réaliser ton chouchou :\n• Le tutoriel vidéo\n• Le patron\n• Le tissu\n• L''élastique et le fil\n\nLe projet débutante par excellence : en quelques minutes, tu repars avec un accessoire fait main.',
   'Débutant', 'nTHbXs896FM', '', 1, true),
  ('kit-marque-page', 'Kit marque-page',
   'Crée ton marque-page en couture avec ce kit et son tuto.',
   E'Ce kit contient tout pour réaliser ton marque-page :\n• Le tutoriel vidéo\n• Le patron\n• Le tissu\n• La mercerie\n\nIdéal cadeau, accessible aux débutantes et aux enfants dès 6 ans.',
   'Débutant', '_-RvDJwpIxg', '', 2, true),
  ('kit-lingette', 'Kit lingette lavable',
   'Couds tes lingettes lavables zéro déchet, tuto vidéo inclus.',
   E'Ce kit contient tout pour réaliser tes lingettes lavables :\n• Le tutoriel vidéo\n• Le patron\n• Le tissu éponge et coton\n• Le fil\n\nGeste malin et écolo, réutilisable à l''infini. Parfait pour débuter.',
   'Débutant', 'BVnOkm172sU', '', 3, true),
  ('coffret-punch-needle', 'Coffret punch needle',
   'Initie-toi au punch needle : aiguille magique, laine, tambour et tutoriel.',
   E'Le coffret pour découvrir le punch needle :\n• Le tutoriel\n• L''aiguille magique (punch needle)\n• La laine colorée\n• La toile et le tambour\n\nTout pour créer ton premier motif en relief, une technique tendance et bluffante, accessible dès le premier essai.',
   'Débutant', '', '', 4, true),
  ('sticker-textile', 'Sticker textile',
   'Des stickers textiles thermocollants pour personnaliser tes créations.',
   E'Des stickers textiles thermocollants pour customiser tes vêtements, tote-bags et créations couture. Faciles à poser au fer à repasser, ils donnent une touche unique à tes projets.',
   'Débutant', '', '', 5, true)
ON CONFLICT (slug) DO NOTHING;

-- Variante "Standard" par produit avec le bon prix TTC + stock initial 20
INSERT INTO variantes_produit (produit_id, nom, prix_centimes, stock, ordre, actif)
SELECT id, 'Standard',
  CASE slug
    WHEN 'kit-bandeau' THEN 1290
    WHEN 'kit-chouchou' THEN 1290
    WHEN 'kit-marque-page' THEN 1290
    WHEN 'kit-lingette' THEN 1490
    WHEN 'coffret-punch-needle' THEN 2490
    WHEN 'sticker-textile' THEN 990
  END,
  20, 0, true
FROM produits
WHERE slug IN ('kit-bandeau','kit-chouchou','kit-marque-page','kit-lingette','coffret-punch-needle','sticker-textile')
  AND NOT EXISTS (SELECT 1 FROM variantes_produit v WHERE v.produit_id = produits.id);
