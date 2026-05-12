# 🎀 L'atelier Pic & Paf — Brand Design System

Référence visuelle et tonale complète. Mise à jour : 2026-05.

---

## 1. ESSENCE DE LA MARQUE

**Mission** : Ludivine, magicienne des tissus, transmet la couture créative aux enfants dès 6 ans et aux femmes adultes en Vienne (86) et Deux-Sèvres (79).

**Positionnement** : Cocon créatif, chaleureux, sans pression. « Pas de niveau requis, juste l'envie de créer et de se sentir bien. »

**Promesse** : « Deviens toi aussi une magicienne ! »

**Émotions cibles** : douceur, complicité, émerveillement, fierté, ressourcement.

**Contact** : atelierpicpaf@gmail.com · 06 21 07 35 36 · @atelier_picpaf · 3 Rue des Rosiers, 86110 Craon

---

## 2. COULEURS — PALETTE EXACTE

```
PRIMAIRES
─────────────────────────────────────────────
🔴 --framboise        #C8365C   Action, accents, titres
🟥 --framboise-dark   #A82948   Hover, profondeur
🌸 --framboise-soft   #E07A95   Variantes douces

NEUTRES
─────────────────────────────────────────────
🟡 --creme            #FBF4E4   Fond principal (chaud, non-blanc)
🟡 --creme-pale       #FFFAF0   Sections alternées
⚫️ --ink              #2A1313   Texte (brun-noir doux)

ACCENTS (à usage parcimonieux)
─────────────────────────────────────────────
🟢 --menthe           #A8D5CC   Badges "ouvert", succès
🩷 --rose             #F5C5C5   Badges secondaires, "complet"
```

**Ombres signature** :
```css
--shadow-framboise: 0 10px 30px -12px rgba(200,54,92,.35);  /* CTA, hero */
--shadow-card:      0 8px 24px -10px rgba(200,54,92,.25);   /* cards */
```

**Règles d'usage** :
- Le **crème** (`#FBF4E4`) est le fond. JAMAIS blanc pur `#FFFFFF`.
- Le **framboise** est l'accent, pas le fond dominant (sauf CTA sections finales).
- La **menthe** et le **rose** servent UNIQUEMENT pour les badges et micro-accents (max 5% de la surface).

---

## 3. TYPOGRAPHIE

```
DISPLAY (titres, logo, gros chiffres)
─────────────────────────────────────────
Fredoka — weight 400 et 700
Variable CSS : --font-fredoka
Classe : .h-fredoka
Caractère : ronde, jouette, lisible
Usage : H1, H2, H3, badges, boutons

SCRIPT (slogans, signatures)
─────────────────────────────────────────
Pacifico — weight 400
Variable CSS : --font-pacifico
Classe : .h-script
Caractère : flowing, joyeux, rétro
Usage : slogan "Deviens magicienne !", URL en fin de pub

HANDWRITING (ornement)
─────────────────────────────────────────
Caveat — weight 400/600/700
Variable CSS : --font-caveat
Classe : .h-caveat
Caractère : manuscrit, complice, naturel
Usage : kickers ("~ Votre hôte ~"), sub-titres, mots flottants

CORPS DE TEXTE
─────────────────────────────────────────
Inter — variable
Variable CSS : --font-inter
Usage : paragraphes, descriptions
Line-height : 1.6 à 1.7 (aéré)
```

**Combinaisons usuelles** :
- Section title : Caveat 18-26px (kicker) + Fredoka 32-50px (H2)
- Hero : Fredoka 44-76px (H1) + Caveat 28px (sub-line)
- Card : Fredoka 20-24px (titre) + Inter 14-15px (description)

**Important** :
- Font name dans `next/font/google` : `Fredoka` (PAS `Fredoka_One`)
- Variables CSS prefixées `--ff-fredoka`, exposées dans `@theme` comme `--font-fredoka`

---

## 4. LOGO

**Construction** : pur typographique (pas d'image PNG fiable). Composant React : `components/brand/logo.tsx`.

```
Structure :
  ┌───────────┐
  │ L'atelier │  ← Fredoka 700, fontSize = 0.5x, rotate(-4deg)
  │           │     stroke 0.7x, paint-order: stroke fill
  │ Pic & Paf │  ← Fredoka 700, fontSize = 0.95x, rotate(2deg)
  │           │     stroke 1x, paint-order: stroke fill
  └───────────┘
```

**Variantes** :
| Variante | Texte | Stroke | Fond |
|----------|-------|--------|------|
| `color` | framboise | crème | sur fond crème |
| `creme` | crème | framboise-dark | sur fond framboise |

**Tailles standards** : 56px (header), 64px (footer), 120-260px (hero/CTA).

**Effet sticker** : la classe `.sticker-title` reproduit le même paint-order pour les gros titres.

---

## 5. ASSETS BRAND

```
/public/images/brand/
├── fee.png              Fée illustrée (PNG transparent) — animation floaty
├── bobines.png          Bobines de fil (PNG transparent) — animation wiggle
└── ludivine-portrait.jpg Photo Ludivine (avec logo rayé fond)

/public/images/lieu/
├── hero-retraite-motifs.jpg   Fond aquarelle floral (signature retraite)
├── gite-welcome.jpg, gite-cuisine.jpg, gite-salle-manger.jpg
```

**Mots flottants signature** (animation hero retraite) :
```
"Détente"   "Weekend"   "Relax"   "Cocooning"
"Pause entre filles"   "Ressourcement"
→ Font Caveat, framboise-soft, rotation aléatoire, float infinite
```

---

## 6. TON & VOIX

**Adresse** : **TUTOIEMENT** systématique. Jamais "vous" sauf cas légal/formel.

**Vocabulaire signature** :
| Mots-clés | Quand utiliser |
|-----------|----------------|
| « Parenthèse », « bulle de douceur » | Retraites, bien-être |
| « Hors du temps » | Évasion, rupture du quotidien |
| « Magicienne » | Brand promise, transformation créative |
| « Pas de pression », « pas de niveau requis » | Lever objection débutantes |
| « Entre filles », « entre femmes » | Retraites adultes |
| « Petites mains, grands projets » | Ateliers enfants |
| « Pic & Paf » | Onomatopée — fun, accessible |
| « Pépites » | Réalisations, créations |

**Émojis autorisés** (sparingly) :
🧵 🪡 ✂️ 🌸 ✨ 💫 🌿 🏡 🪢 🎀 — couture + nature + magie.
❌ Pas de 🎨 (peinture — hors scope), pas de ❤️ (trop générique).

**Style de phrases** :
- Courtes, rythmées, complices
- Tildes décoratifs `~ texte ~` (en Caveat, encadrement de phrases-clés)
- Questions rhétoriques : « Besoin de ralentir ? », « T'as ri quand pour la dernière fois ? »
- Apostrophes en JSX : `&apos;` ou string en `"…"`
- **Pas de bold** dans le corps de texte (préférence Willy)

---

## 7. ÉLÉMENTS VISUELS SIGNATURE

### 7a. Rayures (signature absolue)

```css
/* Rayures verticales pleines (fond hero) */
.stripes-vertical {
  background: repeating-linear-gradient(
    180deg,
    var(--framboise) 0 70px,
    var(--creme) 70px 100px
  );
}

/* Bande fine top de section (16-18px) */
.stripes-thin

/* Bande séparatrice 16px entre sections */
.stripes-band
```

### 7b. Effet sticker (titres avec contour)

```css
.sticker-title {
  color: var(--framboise);
  -webkit-text-stroke: 8px var(--creme);
  paint-order: stroke fill;
  display: inline-block;
}
```

→ Donne l'impression que le texte est un sticker collé.

### 7c. Bulles de dialogue (`.bubble`)

```
┌─────────────────┐
│  Texte ici      │
│              ╲  │
└──────────────╲──┘
                ▽  ← queue de la bulle
```

Fond crème, bordure framboise, queue triangulaire, rotation -2 ou +2deg.

### 7d. Étoiles ornementales

- `✦` (caractère unicode) en framboise, fontSize 18-22px
- Animation `anim-twinkle` (pulse opacity + scale 3.2s loop)
- Délais variés `.anim-twinkle-d1/-d2/-d3` pour effet cascade

### 7e. Slogans rotatés

```css
.slogan {
  font-family: var(--font-pacifico);
  transform: rotate(-6deg);
  color: var(--framboise); /* sur crème */
  /* OU */
  color: var(--creme); /* sur framboise */
}
```

Exemples : « Deviens toi aussi une magicienne ! », « ~ J'ai hâte de vous rencontrer ✨ ~ »

---

## 8. COMPOSANTS UI

### 8a. Boutons

```
CTA PRIMARY (.cta-pill)
─────────────────────────
Fond : framboise
Texte : crème
Forme : pill (border-radius: 999px)
Padding : 12-16px × 22-32px
Font : Fredoka 600-700, 14-16px
Hover : framboise-dark + scale(1.05)
Animation optionnelle : .anim-cta-pulse (glow rythmique)

CTA SECONDARY (.cta-ghost)
─────────────────────────
Fond : transparent (ou crème sur framboise)
Bordure : dashed framboise 2px
Texte : framboise
Forme : pill
Padding : idem
Hover : fond framboise/10
```

### 8b. Cards (`.card`)

```css
background: var(--creme-pale);
border-radius: 24-32px;
padding: 24-30px;
box-shadow: var(--shadow-card);
border: 2px solid rgba(200,54,92,.18);  /* optionnel */

/* Hover (anim-card-hover) */
transform: scale(1.02) translateY(-2px);
box-shadow: 0 20px 50px -12px rgba(200,54,92,.42);
```

### 8c. Badges (`.badge`)

```
Variant standard : framboise + crème
Variant .mint     : menthe + ink (succès, "ouvert")
Variant .rose     : rose + brun foncé (info, "complet")
Variant .outline  : transparent + bordure framboise

Forme : pill
Padding : 6-10px × 14-22px
Font : Fredoka 700, 12-14px
```

### 8d. Inputs

```css
border: 1.5px solid rgba(200,54,92,.3);
border-radius: 12-16px;
padding: 10-14px;
font-family: var(--font-inter);
focus: outline framboise, shadow framboise-soft
```

---

## 9. ANIMATIONS

| Nom | Effet | Durée | Usage |
|-----|-------|-------|-------|
| `.floaty` | translateY ±10px loop | 4s | Fée |
| `.wiggle` | rotate ±5deg loop | 0.5s | Bobines au hover |
| `.route-enter` | fade + slide-up à l'entrée page | 600ms | Toutes les pages |
| `.float-word` | translate aléatoire | 8-12s | Mots flottants hero retraite |
| `.anim-twinkle` | opacity 0.55↔1 + scale 1↔1.18 | 3.2s | Étoiles ✦ |
| `.anim-cta-pulse` | shadow glow rythmique | 2.6s | CTA important |
| `.anim-on-scroll` | fade-up à l'apparition viewport | 800ms | Sections au scroll |
| `.anim-title-underline` | width 0→100% sur scroll | 1100ms | H2 |
| `.anim-card-hover` | scale 1.02 + shadow boost | 320ms | Cards interactives |
| `.anim-shimmer` | reflet blanc qui traverse | 2.4s | Progress bars retraites |
| `.anim-badge-pulse` | ring glow framboise loop | 1.8s | Badge urgent "🔥 X places" |

**Règle absolue** : toutes respectent `@media (prefers-reduced-motion: reduce)`.

Composant utilitaire : `components/ui/animate-on-scroll.tsx` (IntersectionObserver natif).

---

## 10. LAYOUT

```
Container width    : max-width 1240px (.container)
Container padding  : 24px (mobile 18px)
Section padding    : 80-100px haut/bas
Section background : alterne creme ↔ creme-pale
Grid gap           : 20-48px selon densité
Border radius      : 12 (small) / 24 (medium) / 32 (large)
                     999px (pills, buttons, badges)
```

---

## 11. PHOTOGRAPHIE

**Style attendu** :
- Lumière chaude, golden hour
- Plans serrés sur mains qui cousent / créent
- Sourires authentiques (pas posés)
- Tissus colorés framboise + crème + menthe + rose
- Lieu : gîte chaleureux, jardin, terrasse, lumière fenêtre

**À éviter** : studio froid, blanc clinique, sur-saturation, makeup forcé.

---

## 12. LES DEUX DÉCLINAISONS

### 12a. **Déclinaison ORIGINALE** (enfants + accueil + journées)
Joyeuse, énergique, sticker-style :
- Rayures pleines en fond hero
- Fée + bobines visibles
- Slogan « Deviens magicienne ! »
- Logo gros et coloré
- Photos cartoon-like + emojis libéralement
- Bulles de dialogue
- Mots Pacifico rotatés

### 12b. **Déclinaison POSÉE** (retraites)
Adulte, sereine, ressourcement :
- Rayures uniquement en fine bande décorative (10-20px)
- Fond aquarelle floral (`hero-retraite-motifs.jpg`)
- Mots flottants Caveat (Détente, Weekend, Cocooning…)
- Pas de fée ni bobines
- Pas de slogan "magicienne"
- Framboise en accent seulement (titres, CTA), fond majoritairement crème
- Photos réelles du gîte
- Ton : « parenthèse », « bulle de douceur », « hors du temps »

---

## 13. EXEMPLES D'USAGE

### Hero (déclinaison originale)
```
Fond : rayures verticales framboise/creme
H1   : sticker-title Fredoka 76px "Ateliers créatifs"
Sub  : Caveat 28px "~ Dès 6 ans ~"
CTA  : .cta-pill "Inscription"
Déco : Fée floaty (à droite), bobines wiggle (coin)
```

### Hero (déclinaison posée)
```
Fond : aquarelle florale, voile crème 55% opacity
Mots : Caveat float aléatoire (Détente, Weekend…)
H1   : Fredoka 76px framboise "Retraite créative près de Poitiers"
Sub  : Inter 18px framboise 600 "Weekend créatif & bien-être"
Date : Caveat 28px "~ Vendredi soir → Dimanche 16h ~"
CTA  : .cta-pill .anim-cta-pulse "Voir les dates"
Klarna : badge subtil sous CTA
```

### Card session retraite (current design)
```
┌──┬───────────┬─────────────────────────────┬────────┐
│ ║│ DATE BIG  │ Édition été 2026 (Caveat)   │ Badge  │
│ ║│ 3 → 5     │ Retraite créative (Fredoka) │ CTA    │
│ ║│ JUIL.     │ Vendredi → Dimanche         │ Klarna │
│ ║│ 2026      │ Chips activités             │        │
│ ║├───────────────────────────────────────────────────┤
│ ║│ ▰▰▰▰▰▰░░░░ 6/9 places réservées (FOMO)           │
└──┴───────────────────────────────────────────────────┘
↑ Stripe gradient framboise vertical (8px)
```

---

## 14. RÈGLES ABSOLUES

1. **Le crème n'est pas blanc** — toujours `#FBF4E4`
2. **Tutoiement** — jamais "vous" sauf légal
3. **Pas de bold** dans le corps de texte (préférence Willy)
4. **Inline styles + CSS variables** — pas de Tailwind utilitaires sur les pages marketing
5. **Polices via `--ff-fredoka`** etc., exposées via `@theme` en `--font-*`
6. **Apostrophes JSX** : `&apos;` ou string en `"…"`
7. **Animations** : toujours fallback `prefers-reduced-motion`
8. **Logo** : variante `color` sur fond clair, `creme` sur fond framboise. JAMAIS l'inverse.
9. **Pas de `tailwind.config.ts`** — Tailwind v4 utilise `@theme` dans `globals.css`
10. **Pas de mix `'use client'` + `export metadata`** — séparer en server wrapper + client child

---

## 15. ASSETS À CRÉER (TODO)

- [ ] Photo Ludivine "propre" (sans logo bakée) pour pubs et reseaux
- [ ] Plus de photos du gîte (chambres, salon, terrasse, jardin)
- [ ] Photos atelier en action (mains qui cousent, enfants concentrés)
- [ ] Vidéo "à propos" 30s pour landing pages
- [ ] Pack social media (templates posts Insta Pic & Paf)

---

*Maintenu en cohérence avec `CLAUDE.md`, `styles/globals.css` et `components/brand/`.*
