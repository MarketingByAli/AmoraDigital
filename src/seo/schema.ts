/**
 * Central schema.org JSON-LD builders.
 *
 * All schemas reference shared `@id` anchors so Google (and AI crawlers like
 * ChatGPT, Perplexity, Gemini) can connect entities into a single knowledge
 * graph: `#organization`, `#website`, `#logo`, `#contact`.
 *
 * Keep output stable (no timestamps, no random ids) so rendered JSON-LD is
 * deterministic for pre-rendering and caching.
 */

import {
  ALTERNATE_LOCALE,
  BUSINESS_COUNTRY,
  BUSINESS_FOUNDING_DATE,
  BUSINESS_GEO_POSITION,
  BUSINESS_KVK,
  BUSINESS_REGION,
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
  CONTENT_LANGUAGE,
  DEFAULT_LOCALE,
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  SITE_CANONICAL_ORIGIN,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_SLOGAN,
  SOCIAL_PROFILES
} from '../siteConfig'

export const ORG_ID = `${SITE_CANONICAL_ORIGIN}/#organization`
export const WEBSITE_ID = `${SITE_CANONICAL_ORIGIN}/#website`
export const LOGO_ID = `${SITE_CANONICAL_ORIGIN}/#logo`
export const CONTACT_ID = `${SITE_CANONICAL_ORIGIN}/#contact`

export type JsonObject = Record<string, unknown>

/** Absolute URL helper — prefixes the canonical origin when needed. */
export function absoluteUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return SITE_CANONICAL_ORIGIN
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) return pathOrUrl
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${SITE_CANONICAL_ORIGIN}${path === '/' ? '' : path}`
}

/** ImageObject for the site logo — used by Organization + Publisher references. */
function buildLogoImage(): JsonObject {
  return {
    '@type': 'ImageObject',
    '@id': LOGO_ID,
    inLanguage: CONTENT_LANGUAGE,
    url: LOGO_URL,
    contentUrl: LOGO_URL,
    width: 512,
    height: 512,
    caption: SITE_NAME
  }
}

/**
 * Organization schema — sitewide. Defines the core brand entity that every
 * other schema references. Includes contact, address, identifiers and
 * social profiles that help search engines and AI assistants identify
 * and trust the brand.
 */
export function buildOrganizationSchema(): JsonObject {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    alternateName: 'Amora',
    url: SITE_CANONICAL_ORIGIN,
    logo: buildLogoImage(),
    image: { '@id': LOGO_ID },
    description: SITE_DESCRIPTION,
    slogan: SITE_SLOGAN,
    foundingDate: BUSINESS_FOUNDING_DATE,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_E164,
    knowsAbout: [...SITE_KEYWORDS],
    knowsLanguage: ['en', 'nl'],
    areaServed: [
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Place', name: 'European Union' },
      { '@type': 'Place', name: 'Worldwide' }
    ],
    identifier: {
      '@type': 'PropertyValue',
      name: 'KVK',
      value: BUSINESS_KVK
    },
    vatID: BUSINESS_KVK,
    address: {
      '@type': 'PostalAddress',
      addressCountry: BUSINESS_COUNTRY,
      addressRegion: BUSINESS_REGION
    },
    contactPoint: {
      '@type': 'ContactPoint',
      '@id': CONTACT_ID,
      contactType: 'customer support',
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE_E164,
      url: `${SITE_CANONICAL_ORIGIN}/contact`,
      areaServed: ['NL', 'EU', 'Worldwide'],
      availableLanguage: ['English', 'Dutch']
    },
    sameAs: [...SOCIAL_PROFILES]
  }
}

/**
 * WebSite schema — sitewide. Defines the site as an entity with a search
 * action, which can produce a sitelinks search box in Google and helps AI
 * assistants discover internal search intent.
 */
export function buildWebSiteSchema(): JsonObject {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_CANONICAL_ORIGIN,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: CONTENT_LANGUAGE,
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CANONICAL_ORIGIN}/?s={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

/**
 * ProfessionalService schema for the Contact page. Provides
 * localBusiness-style signals (geo, opening hours, contact) that power
 * "near me" and local-intent results.
 */
export function buildProfessionalServiceSchema(): JsonObject {
  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE_CANONICAL_ORIGIN}/#localbusiness`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_CANONICAL_ORIGIN,
    logo: LOGO_URL,
    image: DEFAULT_OG_IMAGE,
    telephone: CONTACT_PHONE_E164,
    email: CONTACT_EMAIL,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: BUSINESS_COUNTRY,
      addressRegion: BUSINESS_REGION
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: Number(BUSINESS_GEO_POSITION.split(';')[0]),
      longitude: Number(BUSINESS_GEO_POSITION.split(';')[1])
    },
    areaServed: [
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Place', name: 'Worldwide' }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    parentOrganization: { '@id': ORG_ID },
    sameAs: [...SOCIAL_PROFILES]
  }
}

/**
 * BreadcrumbList schema for a path trail. Produces breadcrumb rich
 * results in Google and helps crawlers understand hierarchy.
 */
export function buildBreadcrumbSchema(
  items: ReadonlyArray<{ name: string; path: string }>
): JsonObject {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  }
}

/**
 * WebPage schema — per-page wrapper that ties a specific URL back to the
 * WebSite/Organization graph. Marks content as `inLanguage` and records
 * primary image and breadcrumb references.
 */
export function buildWebPageSchema(options: {
  path: string
  name: string
  description: string
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ItemPage' | 'FAQPage'
  breadcrumbId?: string
  image?: string
  datePublished?: string
  dateModified?: string
}): JsonObject {
  const url = absoluteUrl(options.path)
  return {
    '@type': options.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: options.name,
    description: options.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: CONTENT_LANGUAGE,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: options.image ?? DEFAULT_OG_IMAGE
    },
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    breadcrumb: options.breadcrumbId ? { '@id': options.breadcrumbId } : undefined,
    potentialAction: [
      {
        '@type': 'ReadAction',
        target: [url]
      }
    ]
  }
}

/**
 * Service schema — for individual marketing or development service pages.
 * Used to describe offered services with provider, area served, service
 * type and pricing hints.
 */
export function buildServiceSchema(options: {
  path: string
  name: string
  description: string
  serviceType: string
  category: 'Digital Marketing' | 'Software Development' | 'Web Development'
  offers?: Array<{ name: string; description?: string }>
  image?: string
}): JsonObject {
  const url = absoluteUrl(options.path)
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: options.name,
    description: options.description,
    serviceType: options.serviceType,
    category: options.category,
    url,
    image: options.image ?? DEFAULT_OG_IMAGE,
    provider: { '@id': ORG_ID },
    brand: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Place', name: 'European Union' },
      { '@type': 'Place', name: 'Worldwide' }
    ],
    availableLanguage: ['English', 'Dutch'],
    hasOfferCatalog: options.offers
      ? {
          '@type': 'OfferCatalog',
          name: options.name,
          itemListElement: options.offers.map((o) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: o.name,
              description: o.description
            }
          }))
        }
      : undefined
  }
}

/**
 * Product/SoftwareApplication schema for product pages.
 */
export function buildProductSchema(options: {
  path: string
  name: string
  description: string
  category?: string
  applicationCategory?: string
  operatingSystem?: string
  image?: string
  externalUrl?: string
  offers?: { price?: string; priceCurrency?: string; availability?: string }
}): JsonObject {
  const url = absoluteUrl(options.path)
  return {
    '@type': options.applicationCategory ? 'SoftwareApplication' : 'Product',
    '@id': `${url}#product`,
    name: options.name,
    description: options.description,
    url,
    sameAs: options.externalUrl,
    image: options.image ?? DEFAULT_OG_IMAGE,
    applicationCategory: options.applicationCategory,
    operatingSystem: options.operatingSystem,
    category: options.category,
    brand: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    offers: options.offers
      ? {
          '@type': 'Offer',
          price: options.offers.price ?? '0',
          priceCurrency: options.offers.priceCurrency ?? 'EUR',
          availability: options.offers.availability ?? 'https://schema.org/InStock',
          url
        }
      : undefined
  }
}

/**
 * FAQPage schema — critical for AI SEO. ChatGPT, Perplexity, Google AI
 * Overviews and Gemini actively pull FAQ content to compose answers and
 * often cite the source.
 */
export function buildFaqSchema(
  questions: ReadonlyArray<{ question: string; answer: string }>
): JsonObject {
  return {
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  }
}

/**
 * HowTo schema — for process / step-by-step content. Helps AI answer
 * "how do I..." queries by citing your site.
 */
export function buildHowToSchema(options: {
  name: string
  description: string
  steps: ReadonlyArray<{ name: string; text: string }>
  totalTime?: string
}): JsonObject {
  return {
    '@type': 'HowTo',
    name: options.name,
    description: options.description,
    totalTime: options.totalTime,
    step: options.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text
    }))
  }
}

/** Combine a set of schema fragments under a single `@graph` root. */
export function buildGraph(nodes: ReadonlyArray<JsonObject | null | undefined>): JsonObject {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean) as JsonObject[]
  }
}

/** Locale helpers for Open Graph tags. */
export const OG_LOCALE = DEFAULT_LOCALE
export const OG_ALTERNATE_LOCALE = ALTERNATE_LOCALE
