@AGENTS.md

# L'atelier Pic & Paf — CLAUDE.md

## Project context

L'atelier Pic & Paf is run by **Ludivine**, a sewing workshop instructor based in **Vienne (86)** and **Deux-Sèvres (79)**, Nouvelle-Aquitaine, France. She offers:

- **Ateliers enfants** — weekly sewing classes for kids 6-12 (Poitiers, Vouillé, Fontaine-le-Comte, Châtellerault), holiday stages, birthday parties, school events
- **Journées créatives** — full-day adult sewing workshops at Fontaine-le-Comte, 90€, max 6 participants, everything included
- **Retraites créatives** — weekend sewing retreats in a gîte in Deux-Sèvres, 390€, max 8 participants, meals + yoga included
- **Structure interventions** — visiting ALSH, libraries, schools, associations

Contact: atelierpicpaf@gmail.com / 06 21 07 35 36 / @atelier_picpaf

## Tech stack

- **Framework**: Next.js 16.x (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 with `@import "tailwindcss"` in globals.css (NOT v3 directives)
- **Fonts**: next/font/google — Fredoka (weight 400/700), Pacifico (400), Caveat (400/600/700), Inter
- **Database**: Supabase (Postgres + Auth + Storage)
- **Auth**: Supabase SSR with `@supabase/ssr`
- **Email**: Resend (planned)
- **Deploy**: Vercel
- **Package manager**: npm

## Critical rules

- NEVER hardcode secrets — use `process.env.*` only
- ALWAYS run `npm run build` (or `node node_modules/next/dist/bin/next build`) and fix ALL errors before finishing
- Font name in next/font is `Fredoka` NOT `Fredoka_One`
- Use `'use client'` only where needed (useState, useEffect, event handlers)
- All imports use `@/` path alias
- Tailwind v4: uses CSS `@theme` block in globals.css, NOT `tailwind.config.ts` extend
- The middleware file is deprecated in Next.js 16 — use `/proxy.ts` if needed in future
- Do not export metadata from Client Components (`'use client'` files)
- Inline styles + CSS variables for all design — do NOT convert to Tailwind classes

## Design system

All design is implemented via **inline styles** referencing CSS variables defined in `styles/globals.css`.

### CSS variables
```
--framboise: #C8365C      (primary pink-red)
--framboise-dark: #A82948
--framboise-soft: #E07A95
--creme: #FBF4E4           (warm off-white background)
--creme-pale: #FFFAF0
--menthe: #A8D5CC          (mint green accent)
--rose: #F5C5C5            (soft rose accent)
--ink: #2A1313             (dark ink for text)
--shadow-framboise: 0 10px 30px -12px rgba(200,54,92,.35)
--shadow-card: 0 8px 24px -10px rgba(200,54,92,.25)
```

### Key CSS utility classes
- `.sticker-title` — large heading with paint-order stroke effect (framboise color, creme outline)
- `.h-fredoka` — Fredoka font family
- `.h-script` — Pacifico font family
- `.h-caveat` — Caveat font family (bold)
- `.cta-pill` — primary filled pill button
- `.cta-ghost` — dashed border ghost button
- `.badge` — small pill badge (variants: `.mint`, `.rose`, `.outline`)
- `.card` — rounded card with shadow and hover effect
- `.container` — max-width 1240px centered wrapper
- `.bubble` — speech bubble with tail (for testimonials)
- `.ph` — striped placeholder block for images
- `.slogan` — Pacifico rotated text
- `.stripes-vertical` — full background diagonal stripes
- `.stripes-thin` — thin stripes top border
- `.stripes-band` — 16px stripe separator
- `.site-header` — sticky header
- `.nav-link` — navigation link
- `.input-admin` — admin form input
- `.wiggle` — hover wiggle animation
- `.floaty` — continuous float animation
- `.route-enter` — page fade-in animation
- `.hidden-mobile` / `.mobile-only` — responsive display
- `.burger-panel` — full-screen mobile menu

### Logo
The logo is pure CSS/JSX — `components/brand/logo.tsx`. It renders two `<span>` with Fredoka font, WebkitTextStroke, and rotation. No image file. Variants: `'color'` (framboise on creme) and `'creme'` (creme on framboise-dark).

### Brand assets
- `/public/images/brand/fee.png` — fairy illustration (floaty animation)
- `/public/images/brand/bobines.png` — thread bobbins (wiggle animation)

## File structure

```
app/
  layout.tsx                    Root layout (fonts, metadata)
  sitemap.ts                    SEO sitemap
  robots.ts                     Robots.txt
  (marketing)/
    layout.tsx                  Header + Footer wrapper
    page.tsx                    Home page
    ateliers-enfants/page.tsx   Kids workshops
    ateliers-adultes/
      journees-creatives/page.tsx
      retraites-creatives/page.tsx
    contact/
      page.tsx                  Server component with metadata
      contact-form.tsx          Client component (form state)
    mentions-legales/page.tsx
    cgv/page.tsx
    politique-confidentialite/page.tsx
  (admin)/
    admin/
      layout.tsx                Admin layout (no index robots)
      page.tsx                  Dashboard (server, Supabase fetch)
      login/page.tsx            Auth form (client)
      sessions/page.tsx         Sessions list (server)

components/
  brand/
    logo.tsx                    CSS logo (client)
    fee.tsx                     Fairy image component
    bobines.tsx                 Bobbins image component
  layout/
    header.tsx                  Site header (server)
    footer.tsx                  Site footer (server)
    desktop-nav.tsx             Desktop nav with dropdown (client)
    mobile-nav.tsx              Mobile burger menu (client)
  sections/
    section-title.tsx           Reusable section heading
    atelier-card.tsx            Workshop card
    faq-item.tsx                Accordion FAQ item (client)
    enfants-filters.tsx         Kids workshops filter tabs (client)
    home-newsletter.tsx         Newsletter signup (client)

lib/
  data/defaults.ts              Static demo data (AtelierEnfant, DateJournee, etc.)
  supabase/
    client.ts                   Browser Supabase client
    server.ts                   Server Supabase client (cookies)
    admin.ts                    Service role client
    middleware.ts               Session updater for middleware
  utils/
    cn.ts                       clsx + tailwind-merge helper

types/
  supabase.ts                   Full Database type + row types
  index.ts                      Re-exports

middleware.ts                   Route protection for /admin/*
styles/globals.css              All CSS variables + utility classes
supabase/migrations/
  001_initial_schema.sql        Full schema with RLS policies
```

## Supabase schema

Six tables: `sessions`, `reservations`, `newsletter_abonnes`, `messages_contact`, `temoignages`, `articles`.

RLS is enabled on all tables. Public users can:
- Read `sessions` with status `ouvert` or `complet`
- Insert `reservations`, `newsletter_abonnes`, `messages_contact`, `temoignages`
- Read published `temoignages` and `articles`

The admin uses the service role key (bypasses RLS) via `createAdminClient()`.

## Admin access

URL: `/admin/login` → redirects to `/admin` on success.
Auth is Supabase email/password. Middleware in `middleware.ts` (proxied) protects all `/admin/*` routes except `/admin/login`.

Ludivine's admin email: `atelierpicpaf@gmail.com`

## Static data vs Supabase

Currently, workshop pages use static demo data from `lib/data/defaults.ts`. The roadmap is to replace this with live Supabase queries as sessions are entered in the admin.

## Roadmap

1. Connect contact form to Supabase `messages_contact` table + Resend email notification
2. Newsletter form → Supabase `newsletter_abonnes` + welcome email
3. Admin CRUD for sessions (create/edit/delete)
4. Stripe payment integration for reservations
5. Blog/articles section
6. Dynamic session pages with `/sessions/[slug]`
7. Replace static demo data with live Supabase queries

## Absolute rules

1. Never hardcode API keys or secrets anywhere
2. Always run the build and fix ALL errors before finishing work
3. Do not add `tailwind.config.ts` — this project uses Tailwind v4 CSS config
4. Font import: `Fredoka` not `Fredoka_One`
5. Do not mix `export metadata` with `'use client'` in the same file
6. Do not pass event handler functions (`onClick`, `onSubmit`, etc.) from Server Components to Client Components as props
7. Keep `'use client'` directive minimal — only add it when using hooks or event listeners
8. The `/middleware.ts` convention is deprecated in Next.js 16 — use `/proxy.ts` for new middleware
9. All image imports use `next/image` with explicit `width` and `height`
10. CSS apostrophes: always use double quotes `"` for strings containing apostrophes (French text)
