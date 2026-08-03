/**
 * Bilingual routing table.
 *
 * A single `RouteKey` represents one logical page; each key maps to one
 * pathname per supported locale. Most English paths keep their original slugs;
 * the industries silo uses English EN paths (`/industries/...`) paired with
 * Dutch NL paths (`/nl/branches/...`). Dutch lives under `/nl/...` with
 * translated slugs for native-feel SEO.
 *
 * Helpers:
 *   - `localeFromPath` → infer locale from current pathname
 *   - `getRouteKey` → resolve any pathname (en or nl) to its `RouteKey`
 *   - `pathFor` → build a pathname for a `RouteKey` in any locale
 *   - `swapLocale` → return the equivalent pathname in the other locale
 */

export type Locale = 'en' | 'nl'

export const LOCALES: readonly Locale[] = ['en', 'nl'] as const
export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: 'en',
  nl: 'nl'
}

/** Open Graph locale for each language. */
export const LOCALE_OG: Record<Locale, string> = {
  en: 'en_US',
  nl: 'nl_NL'
}

export const LOCALE_HREFLANG: Record<Locale, string> = {
  en: 'en',
  nl: 'nl'
}

export const LOCALE_LABEL: Record<Locale, string> = {
  en: 'English',
  nl: 'Nederlands'
}

export type RouteKey =
  | 'home'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'marketing'
  | 'website-design'
  | 'crm-solutions'
  | 'social-media-marketing'
  | 'paid-advertising'
  | 'seo-services'
  | 'ai-seo'
  | 'local-seo'
  | 'email-marketing'
  | 'conversion-optimization'
  | 'brand-strategy'
  | 'development'
  | 'react'
  | 'php'
  | 'java'
  | 'mobile-apps'
  | 'ecommerce'
  | 'ai-automation'
  | 'full-stack'
  | 'web-applications'
  | 'auto-form-builder'
  | 'auto-form-crm'
  | 'hi-fan'
  | 'pinkpeck'
  | 'unbox-deal'
  | 'royal-casino-hub'
  | 'branches'
  | 'branches-restaurants'
  | 'branches-tandartsen'
  | 'branches-fysiotherapeuten'
  | 'branches-kappers-schoonheidssalons'
  | 'branches-makelaars'
  | 'branches-aannemers'
  | 'branches-installateurs'
  | 'branches-advocaten-notarissen'
  | 'branches-advocaten-notarissen-website-laten-maken'
  | 'branches-advocaten-notarissen-lokale-seo'
  | 'branches-boekhouders'
  | 'branches-boekhouders-website-laten-maken'
  | 'branches-boekhouders-lokale-seo'
  | 'branches-autobedrijven'
  | 'branches-autobedrijven-website-laten-maken'
  | 'branches-autobedrijven-lokale-seo'
  | 'branches-webshops'
  | 'branches-webshops-website-laten-maken'
  | 'branches-webshops-lokale-seo'
  | 'branches-sportscholen'
  | 'branches-sportscholen-website-laten-maken'
  | 'branches-sportscholen-lokale-seo'
  | 'branches-schoonmaakbedrijven'
  | 'branches-schoonmaakbedrijven-website-laten-maken'
  | 'branches-schoonmaakbedrijven-lokale-seo'
  | 'branches-eventplanners'
  | 'branches-eventplanners-website-laten-maken'
  | 'branches-eventplanners-lokale-seo'
  | 'branches-fotografen'
  | 'branches-fotografen-website-laten-maken'
  | 'branches-fotografen-lokale-seo'
  | 'branches-rijscholen'
  | 'branches-rijscholen-website-laten-maken'
  | 'branches-rijscholen-lokale-seo'
  | 'branches-installateurs-website-laten-maken'
  | 'branches-installateurs-lokale-seo'
  | 'branches-aannemers-website-laten-maken'
  | 'branches-aannemers-lokale-seo'
  | 'branches-restaurants-website-laten-maken'
  | 'branches-restaurants-lokale-seo'
  | 'branches-restaurants-social-media'
  | 'branches-tandartsen-website-laten-maken'
  | 'branches-tandartsen-lokale-seo'
  | 'branches-fysiotherapeuten-website-laten-maken'
  | 'branches-fysiotherapeuten-lokale-seo'
  | 'branches-kappers-schoonheidssalons-website-laten-maken'
  | 'branches-kappers-schoonheidssalons-lokale-seo'
  | 'branches-makelaars-website-laten-maken'
  | 'branches-makelaars-lokale-seo'
  | 'branches-makelaars-social-media'

/**
 * Localized pathnames per route. Outside the industries silo, English keeps
 * established slugs; Dutch slugs are translated for native search intent
 * (e.g. `seo-services` → `seo-diensten`). Industry hubs/spokes localize both.
 */
export const ROUTES: Record<RouteKey, Record<Locale, string>> = {
  home: { en: '/', nl: '/nl' },

  about: { en: '/about', nl: '/nl/over-ons' },
  contact: { en: '/contact', nl: '/nl/contact' },
  privacy: { en: '/privacy-policy', nl: '/nl/privacybeleid' },

  marketing: { en: '/marketing', nl: '/nl/marketing' },
  'website-design': { en: '/marketing/website-design', nl: '/nl/marketing/webdesign' },
  'crm-solutions': { en: '/marketing/crm-solutions', nl: '/nl/marketing/crm-oplossingen' },
  'social-media-marketing': {
    en: '/marketing/social-media-marketing',
    nl: '/nl/marketing/social-media-marketing'
  },
  'paid-advertising': { en: '/marketing/paid-advertising', nl: '/nl/marketing/online-adverteren' },
  'seo-services': { en: '/marketing/seo-services', nl: '/nl/marketing/seo-diensten' },
  'ai-seo': { en: '/marketing/ai-seo', nl: '/nl/marketing/ai-seo' },
  'local-seo': { en: '/marketing/local-seo', nl: '/nl/marketing/lokale-seo' },
  'email-marketing': { en: '/marketing/email-marketing', nl: '/nl/marketing/e-mailmarketing' },
  'conversion-optimization': {
    en: '/marketing/conversion-optimization',
    nl: '/nl/marketing/conversie-optimalisatie'
  },
  'brand-strategy': { en: '/marketing/brand-strategy', nl: '/nl/marketing/merkstrategie' },

  development: { en: '/development', nl: '/nl/ontwikkeling' },
  react: { en: '/development/react', nl: '/nl/ontwikkeling/react-development' },
  php: { en: '/development/php', nl: '/nl/ontwikkeling/php-development' },
  java: { en: '/development/java', nl: '/nl/ontwikkeling/java-development' },
  'mobile-apps': { en: '/development/mobile-apps', nl: '/nl/ontwikkeling/mobiele-apps' },
  ecommerce: { en: '/development/ecommerce', nl: '/nl/ontwikkeling/e-commerce' },
  'ai-automation': { en: '/development/ai-automation', nl: '/nl/ontwikkeling/ai-automatisering' },
  'full-stack': { en: '/development/full-stack', nl: '/nl/ontwikkeling/full-stack' },
  'web-applications': {
    en: '/development/web-applications',
    nl: '/nl/ontwikkeling/webapplicaties'
  },

  'auto-form-builder': {
    en: '/products/auto-form-builder',
    nl: '/nl/producten/auto-form-builder'
  },
  'auto-form-crm': { en: '/products/auto-form-crm', nl: '/nl/producten/auto-form-crm' },
  'hi-fan': { en: '/products/hi-fan', nl: '/nl/producten/hi-fan' },
  pinkpeck: { en: '/products/pinkpeck', nl: '/nl/producten/pinkpeck' },
  'unbox-deal': { en: '/products/unbox-deal', nl: '/nl/producten/unbox-deal' },
  'royal-casino-hub': {
    en: '/products/royal-casino-hub',
    nl: '/nl/producten/royal-casino-hub'
  },

  branches: { en: '/industries', nl: '/nl/branches' },
  'branches-restaurants': {
    en: '/industries/restaurants',
    nl: '/nl/branches/restaurants'
  },
  'branches-tandartsen': {
    en: '/industries/dentists',
    nl: '/nl/branches/tandartsen'
  },
  'branches-fysiotherapeuten': {
    en: '/industries/physiotherapists',
    nl: '/nl/branches/fysiotherapeuten'
  },
  'branches-kappers-schoonheidssalons': {
    en: '/industries/hair-beauty-salons',
    nl: '/nl/branches/kappers-schoonheidssalons'
  },
  'branches-makelaars': {
    en: '/industries/real-estate-agents',
    nl: '/nl/branches/makelaars'
  },
  'branches-aannemers': {
    en: '/industries/contractors',
    nl: '/nl/branches/aannemers'
  },
  'branches-installateurs': {
    en: '/industries/installers',
    nl: '/nl/branches/installateurs'
  },
  'branches-advocaten-notarissen': {
    en: '/industries/lawyers-notaries',
    nl: '/nl/branches/advocaten-notarissen'
  },
  'branches-advocaten-notarissen-website-laten-maken': {
    en: '/industries/lawyers-notaries/website-design',
    nl: '/nl/branches/advocaten-notarissen/website-laten-maken'
  },
  'branches-advocaten-notarissen-lokale-seo': {
    en: '/industries/lawyers-notaries/local-seo',
    nl: '/nl/branches/advocaten-notarissen/lokale-seo'
  },
  'branches-boekhouders': {
    en: '/industries/accountants',
    nl: '/nl/branches/boekhouders'
  },
  'branches-boekhouders-website-laten-maken': {
    en: '/industries/accountants/website-design',
    nl: '/nl/branches/boekhouders/website-laten-maken'
  },
  'branches-boekhouders-lokale-seo': {
    en: '/industries/accountants/local-seo',
    nl: '/nl/branches/boekhouders/lokale-seo'
  },
  'branches-autobedrijven': {
    en: '/industries/car-dealers-garages',
    nl: '/nl/branches/autobedrijven'
  },
  'branches-autobedrijven-website-laten-maken': {
    en: '/industries/car-dealers-garages/website-design',
    nl: '/nl/branches/autobedrijven/website-laten-maken'
  },
  'branches-autobedrijven-lokale-seo': {
    en: '/industries/car-dealers-garages/local-seo',
    nl: '/nl/branches/autobedrijven/lokale-seo'
  },
  'branches-webshops': {
    en: '/industries/webshops',
    nl: '/nl/branches/webshops'
  },
  'branches-webshops-website-laten-maken': {
    en: '/industries/webshops/website-design',
    nl: '/nl/branches/webshops/website-laten-maken'
  },
  'branches-webshops-lokale-seo': {
    en: '/industries/webshops/local-seo',
    nl: '/nl/branches/webshops/lokale-seo'
  },
  'branches-sportscholen': {
    en: '/industries/gyms-personal-trainers',
    nl: '/nl/branches/sportscholen'
  },
  'branches-sportscholen-website-laten-maken': {
    en: '/industries/gyms-personal-trainers/website-design',
    nl: '/nl/branches/sportscholen/website-laten-maken'
  },
  'branches-sportscholen-lokale-seo': {
    en: '/industries/gyms-personal-trainers/local-seo',
    nl: '/nl/branches/sportscholen/lokale-seo'
  },
  'branches-schoonmaakbedrijven': {
    en: '/industries/cleaning-companies',
    nl: '/nl/branches/schoonmaakbedrijven'
  },
  'branches-schoonmaakbedrijven-website-laten-maken': {
    en: '/industries/cleaning-companies/website-design',
    nl: '/nl/branches/schoonmaakbedrijven/website-laten-maken'
  },
  'branches-schoonmaakbedrijven-lokale-seo': {
    en: '/industries/cleaning-companies/local-seo',
    nl: '/nl/branches/schoonmaakbedrijven/lokale-seo'
  },
  'branches-eventplanners': {
    en: '/industries/wedding-event-planners',
    nl: '/nl/branches/eventplanners'
  },
  'branches-eventplanners-website-laten-maken': {
    en: '/industries/wedding-event-planners/website-design',
    nl: '/nl/branches/eventplanners/website-laten-maken'
  },
  'branches-eventplanners-lokale-seo': {
    en: '/industries/wedding-event-planners/local-seo',
    nl: '/nl/branches/eventplanners/lokale-seo'
  },
  'branches-fotografen': {
    en: '/industries/photographers-videographers',
    nl: '/nl/branches/fotografen'
  },
  'branches-fotografen-website-laten-maken': {
    en: '/industries/photographers-videographers/website-design',
    nl: '/nl/branches/fotografen/website-laten-maken'
  },
  'branches-fotografen-lokale-seo': {
    en: '/industries/photographers-videographers/local-seo',
    nl: '/nl/branches/fotografen/lokale-seo'
  },
  'branches-rijscholen': {
    en: '/industries/driving-schools',
    nl: '/nl/branches/rijscholen'
  },
  'branches-rijscholen-website-laten-maken': {
    en: '/industries/driving-schools/website-design',
    nl: '/nl/branches/rijscholen/website-laten-maken'
  },
  'branches-rijscholen-lokale-seo': {
    en: '/industries/driving-schools/local-seo',
    nl: '/nl/branches/rijscholen/lokale-seo'
  },
  'branches-installateurs-website-laten-maken': {
    en: '/industries/installers/website-design',
    nl: '/nl/branches/installateurs/website-laten-maken'
  },
  'branches-installateurs-lokale-seo': {
    en: '/industries/installers/local-seo',
    nl: '/nl/branches/installateurs/lokale-seo'
  },
  'branches-aannemers-website-laten-maken': {
    en: '/industries/contractors/website-design',
    nl: '/nl/branches/aannemers/website-laten-maken'
  },
  'branches-aannemers-lokale-seo': {
    en: '/industries/contractors/local-seo',
    nl: '/nl/branches/aannemers/lokale-seo'
  },
  'branches-restaurants-website-laten-maken': {
    en: '/industries/restaurants/website-design',
    nl: '/nl/branches/restaurants/website-laten-maken'
  },
  'branches-restaurants-lokale-seo': {
    en: '/industries/restaurants/local-seo',
    nl: '/nl/branches/restaurants/lokale-seo'
  },
  'branches-restaurants-social-media': {
    en: '/industries/restaurants/social-media',
    nl: '/nl/branches/restaurants/social-media'
  },
  'branches-tandartsen-website-laten-maken': {
    en: '/industries/dentists/website-design',
    nl: '/nl/branches/tandartsen/website-laten-maken'
  },
  'branches-tandartsen-lokale-seo': {
    en: '/industries/dentists/local-seo',
    nl: '/nl/branches/tandartsen/lokale-seo'
  },
  'branches-fysiotherapeuten-website-laten-maken': {
    en: '/industries/physiotherapists/website-design',
    nl: '/nl/branches/fysiotherapeuten/website-laten-maken'
  },
  'branches-fysiotherapeuten-lokale-seo': {
    en: '/industries/physiotherapists/local-seo',
    nl: '/nl/branches/fysiotherapeuten/lokale-seo'
  },
  'branches-kappers-schoonheidssalons-website-laten-maken': {
    en: '/industries/hair-beauty-salons/website-design',
    nl: '/nl/branches/kappers-schoonheidssalons/website-laten-maken'
  },
  'branches-kappers-schoonheidssalons-lokale-seo': {
    en: '/industries/hair-beauty-salons/local-seo',
    nl: '/nl/branches/kappers-schoonheidssalons/lokale-seo'
  },
  'branches-makelaars-website-laten-maken': {
    en: '/industries/real-estate-agents/website-design',
    nl: '/nl/branches/makelaars/website-laten-maken'
  },
  'branches-makelaars-lokale-seo': {
    en: '/industries/real-estate-agents/local-seo',
    nl: '/nl/branches/makelaars/lokale-seo'
  },
  'branches-makelaars-social-media': {
    en: '/industries/real-estate-agents/social-media',
    nl: '/nl/branches/makelaars/social-media'
  }
}

export const ROUTE_KEYS: readonly RouteKey[] = Object.keys(ROUTES) as RouteKey[]

/** Reverse index: pathname → RouteKey. Built once at module load. */
const PATH_TO_KEY: Record<string, RouteKey> = (() => {
  const map: Record<string, RouteKey> = {}
  for (const key of ROUTE_KEYS) {
    map[ROUTES[key].en] = key
    map[ROUTES[key].nl] = key
  }
  return map
})()

/**
 * Collapse trailing-slash variants onto the slashless ROUTES shape.
 * Preserves `/` (EN home). `/nl/` → `/nl` (NL home). Empty → `/`.
 */
export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  return pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname
}

/** Infer locale from pathname. Anything starting with `/nl` is Dutch. */
export function localeFromPath(pathname: string): Locale {
  const path = normalizePathname(pathname)
  if (path === '/nl' || path.startsWith('/nl/')) return 'nl'
  return 'en'
}

/** Resolve a pathname to its logical RouteKey, or null when unknown. */
export function getRouteKey(pathname: string): RouteKey | null {
  return PATH_TO_KEY[normalizePathname(pathname)] ?? null
}

/** Build the pathname for a RouteKey in the requested locale. */
export function pathFor(key: RouteKey, locale: Locale): string {
  return ROUTES[key][locale]
}

/**
 * Given any pathname, return the equivalent pathname in `target` locale.
 * Falls back to that locale's home when the pathname can't be mapped.
 */
export function swapLocale(pathname: string, target: Locale): string {
  const key = getRouteKey(pathname)
  if (key) return ROUTES[key][target]
  return ROUTES.home[target]
}

/** All English pathnames (used by the prerender script). */
export const ALL_EN_PATHS: readonly string[] = ROUTE_KEYS.map((k) => ROUTES[k].en)
/** All Dutch pathnames (used by the prerender script). */
export const ALL_NL_PATHS: readonly string[] = ROUTE_KEYS.map((k) => ROUTES[k].nl)

/** Every indexable pathname across all locales — used by robots/index gating. */
export const INDEXABLE_PATHS: ReadonlySet<string> = new Set([
  ...ALL_EN_PATHS,
  ...ALL_NL_PATHS
])

/** Whether a pathname (with or without trailing slash) is an indexable route. */
export function isIndexablePath(pathname: string): boolean {
  return INDEXABLE_PATHS.has(normalizePathname(pathname))
}
