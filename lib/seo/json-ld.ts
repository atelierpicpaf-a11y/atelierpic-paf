/**
 * Helpers JSON-LD pour L'atelier Pic & Paf.
 *
 * Source de vérité métier :
 * - Raison sociale INSEE : SENECHAUD LUDIVINE (nom commercial : ATELIER PIC&PAF)
 * - SIREN : 883 640 419
 * - SIRET siège : 883 640 419 00015
 * - Forme juridique : Entrepreneur individuel (micro-entreprise)
 * - Siège : 3 rue des Rosiers, 86110 Craon (Vienne)
 * - Activité déclarée : Fabrication de vêtements de dessus (code NAF)
 * - Création : 29/05/2020
 *
 * Zones desservies : Poitiers, Fontaine-le-Comte, Vouillé, Châtellerault, Niort.
 * Lieu principal des ateliers adultes : Fontaine-le-Comte (5 min sud de Poitiers).
 */

const SITE_URL = 'https://atelierpicpaf.fr'

export const BUSINESS_IDENTITY = {
  name: "L'atelier Pic & Paf",
  legalName: 'Ludivine Sénéchaud',
  legalForm: 'Entrepreneur individuel',
  siren: '883640419',
  siret: '88364041900015',
  founder: 'Ludivine',
  founded: '2020-05-29',
  email: 'atelierpicpaf@gmail.com',
  telephone: '+33621073536',
  telephoneDisplay: '06 21 07 35 36',
  streetAddress: '3 rue des Rosiers',
  postalCode: '86110',
  addressLocality: 'Craon',
  addressRegion: 'Nouvelle-Aquitaine',
  addressCountry: 'FR',
  instagram: 'https://www.instagram.com/atelier_picpaf/',
  facebook: 'https://www.facebook.com/profile.php?id=100063693513024',
  areasServed: [
    'Poitiers',
    'Fontaine-le-Comte',
    'Vouillé',
    'Châtellerault',
    'Niort',
    'Vienne',
    'Deux-Sèvres',
  ],
  priceRange: '€€',
} as const

// ────────────────────────────────────────────────────────────────
// LocalBusiness (à injecter site-wide dans le layout racine)
// ────────────────────────────────────────────────────────────────
export function localBusinessJsonLd() {
  const b = BUSINESS_IDENTITY
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EducationalOrganization'],
    '@id': `${SITE_URL}/#organization`,
    name: b.name,
    legalName: b.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/logo-og.png`,
    image: `${SITE_URL}/images/brand/logo-og.png`,
    description:
      'Ateliers couture créatifs pour enfants dès 6 ans, journées créatives et retraites pour adultes en Vienne (86) et Deux-Sèvres (79).',
    email: b.email,
    telephone: b.telephone,
    priceRange: b.priceRange,
    foundingDate: b.founded,
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#founder`,
      name: 'Ludivine',
      jobTitle: 'Fondatrice & animatrice d\'ateliers couture',
    },
    taxID: b.siret,
    vatID: `FR${b.siren}`,
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'SIREN', value: b.siren },
      { '@type': 'PropertyValue', propertyID: 'SIRET', value: b.siret },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.streetAddress,
      postalCode: b.postalCode,
      addressLocality: b.addressLocality,
      addressRegion: b.addressRegion,
      addressCountry: b.addressCountry,
    },
    areaServed: b.areasServed.map((name) => ({ '@type': 'Place', name })),
    sameAs: [b.instagram, b.facebook],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: b.email,
      telephone: b.telephone,
      areaServed: 'FR',
      availableLanguage: 'French',
    },
  }
}

// ────────────────────────────────────────────────────────────────
// Person — Ludivine (fondatrice)
// ────────────────────────────────────────────────────────────────
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#founder`,
    name: 'Ludivine',
    alternateName: "La Magicienne des tissus",
    jobTitle: "Animatrice d'ateliers couture",
    worksFor: { '@id': `${SITE_URL}/#organization` },
    url: SITE_URL,
    sameAs: [BUSINESS_IDENTITY.instagram],
  }
}

// ────────────────────────────────────────────────────────────────
// FAQPage — pour la page ateliers-enfants
// ────────────────────────────────────────────────────────────────
export function faqPageJsonLd(faqs: Array<{ q: string; r: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, r }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: r },
    })),
  }
}

// ────────────────────────────────────────────────────────────────
// ContactPage — pour /contact
// ────────────────────────────────────────────────────────────────
export function contactPageJsonLd() {
  const b = BUSINESS_IDENTITY
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE_URL}/contact`,
    name: "Contacter L'atelier Pic & Paf",
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: b.name,
      email: b.email,
      telephone: b.telephone,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: b.email,
        telephone: b.telephone,
        availableLanguage: 'French',
      },
    },
  }
}

// ────────────────────────────────────────────────────────────────
// Service — ateliers enfants / journées / retraites
// ────────────────────────────────────────────────────────────────
export interface ServiceInput {
  name: string
  description: string
  url: string
  priceCentimes?: number
  priceText?: string
  minAge?: number
  maxAge?: number
  audience?: string
  location?: string
  category?: string
}

export function serviceJsonLd(input: ServiceInput) {
  const priceEuros = input.priceCentimes ? (input.priceCentimes / 100).toFixed(2) : undefined
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: input.url,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: BUSINESS_IDENTITY.areasServed.map((name) => ({ '@type': 'Place', name })),
    serviceType: input.category ?? 'Cours de couture',
    ...(input.audience && {
      audience: {
        '@type': 'PeopleAudience',
        name: input.audience,
        ...(input.minAge !== undefined && { suggestedMinAge: input.minAge }),
        ...(input.maxAge !== undefined && { suggestedMaxAge: input.maxAge }),
      },
    }),
    ...(priceEuros && {
      offers: {
        '@type': 'Offer',
        price: priceEuros,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: input.url,
        ...(input.location && {
          areaServed: { '@type': 'Place', name: input.location },
        }),
      },
    }),
  }
}

// ────────────────────────────────────────────────────────────────
// Service par ville — pages /[ville]
// On re-déclare un Service dédié à chaque ville (sans dupliquer le
// LocalBusiness, on référence l'organisation par son @id).
// ────────────────────────────────────────────────────────────────
export interface VilleServiceInput {
  ville: string
  dept: '86' | '79'
  deptNom: string
  url: string
  codePostal: string
}

export function villeServiceJsonLd(input: VilleServiceInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Ateliers couture à ${input.ville}`,
    description: `Cours de couture enfants dès 6 ans, journées créatives adultes, anniversaires couture et interventions en structure (écoles, ALSH, médiathèques) à ${input.ville} (${input.codePostal}), ${input.deptNom} (${input.dept}).`,
    url: input.url,
    provider: { '@id': `${SITE_URL}/#organization` },
    serviceType: 'Cours de couture',
    areaServed: [
      {
        '@type': 'City',
        name: input.ville,
        address: {
          '@type': 'PostalAddress',
          postalCode: input.codePostal,
          addressLocality: input.ville,
          addressRegion: input.deptNom,
          addressCountry: 'FR',
        },
      },
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${SITE_URL}/contact?ville=${encodeURIComponent(input.ville)}`,
      name: `Me contacter pour organiser un atelier à ${input.ville}`,
    },
  }
}

// ────────────────────────────────────────────────────────────────
// BreadcrumbList — helper générique
// ────────────────────────────────────────────────────────────────
export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

// ────────────────────────────────────────────────────────────────
// WebSite — pour activer la sitelink search box (optionnel)
// ────────────────────────────────────────────────────────────────
export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "L'atelier Pic & Paf",
    inLanguage: 'fr-FR',
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}
