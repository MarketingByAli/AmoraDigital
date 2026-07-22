/**
 * Industry hubs for the /branches SEO silo.
 * Add or remove entries here — the index page maps over this list.
 *
 * `LIVE_BRANCH_HUBS` lists hubs that already have a RouteKey + page.
 * Header/Footer nav map over this list so new hubs appear automatically.
 */
import type { Locale, RouteKey } from '../i18n/routes'

export type LocalizedString = Record<Locale, string>

export type BranchIndustry = {
  slug: string
  name: LocalizedString
  benefit: LocalizedString
}

export const BRANCH_INDUSTRIES: readonly BranchIndustry[] = [
  {
    slug: 'restaurants',
    name: { en: 'Restaurants & cafés', nl: 'Restaurants & cafés' },
    benefit: {
      en: 'More reservations and returning guests through local visibility.',
      nl: 'Meer reserveringen en terugkerende gasten via lokale vindbaarheid.'
    }
  },
  {
    slug: 'tandartsen',
    name: { en: 'Dentists', nl: 'Tandartsen' },
    benefit: {
      en: 'Attract new patients with a strong local online presence.',
      nl: 'Nieuwe patiënten aantrekken met een sterke lokale online aanwezigheid.'
    }
  },
  {
    slug: 'fysiotherapeuten',
    name: { en: 'Physiotherapists', nl: 'Fysiotherapeuten' },
    benefit: {
      en: 'Get found by people searching for care in your area.',
      nl: 'Word gevonden door mensen die zoeken naar zorg in jouw regio.'
    }
  },
  {
    slug: 'kappers-schoonheidssalons',
    name: { en: 'Hairdressers & beauty salons', nl: 'Kappers & schoonheidssalons' },
    benefit: {
      en: 'Fill your calendar with bookings via SEO, Google Ads and social.',
      nl: 'Vul je agenda met afspraken via SEO, Google Ads en social.'
    }
  },
  {
    slug: 'makelaars',
    name: { en: 'Real estate agents', nl: 'Makelaars' },
    benefit: {
      en: 'More viewings and leads from search traffic and campaigns.',
      nl: 'Meer bezichtigingen en leads uit zoekverkeer en campagnes.'
    }
  },
  {
    slug: 'aannemers',
    name: { en: 'Contractors', nl: 'Aannemers & klusbedrijven' },
    benefit: {
      en: 'Win more quote requests from local clients.',
      nl: 'Krijg meer offerteaanvragen van lokale opdrachtgevers.'
    }
  },
  {
    slug: 'installateurs',
    name: {
      en: 'Plumbers, electricians & installers',
      nl: 'Loodgieters, elektriciens & installateurs'
    },
    benefit: {
      en: 'Win emergency jobs and projects with local marketing.',
      nl: 'Spoedklussen en projecten binnenhalen met lokale marketing.'
    }
  },
  {
    slug: 'advocaten-notarissen',
    name: { en: 'Lawyers & notaries', nl: 'Advocaten & notarissen' },
    benefit: {
      en: 'Position your firm as an authority and attract qualified cases.',
      nl: 'Positioneer je kantoor als autoriteit en trek gekwalificeerde zaken.'
    }
  },
  {
    slug: 'boekhouders',
    name: { en: 'Accountants & bookkeepers', nl: 'Boekhouders & accountants' },
    benefit: {
      en: 'Grow your client base with focused B2B online marketing.',
      nl: 'Groei je klantenbestand met gerichte B2B online marketing.'
    }
  },
  {
    slug: 'autobedrijven',
    name: { en: 'Car dealers & garages', nl: 'Autobedrijven & garages' },
    benefit: {
      en: 'More workshop bookings and vehicle sales through digital channels.',
      nl: 'Meer werkplaatsafspraken en autoverkopen via digitale kanalen.'
    }
  },
  {
    slug: 'webshops',
    name: { en: 'Webshops & e-commerce', nl: 'Webshops & e-commerce' },
    benefit: {
      en: 'Scale revenue with SEO, ads and conversion-focused optimisation.',
      nl: 'Schaal je omzet met SEO, ads en conversiegerichte optimalisatie.'
    }
  },
  {
    slug: 'sportscholen',
    name: { en: 'Gyms & personal trainers', nl: 'Sportscholen & personal trainers' },
    benefit: {
      en: 'More members and trial sessions via local visibility and ads.',
      nl: 'Meer leden en proeflessen via lokale vindbaarheid en ads.'
    }
  },
  {
    slug: 'schoonmaakbedrijven',
    name: { en: 'Cleaning companies', nl: 'Schoonmaakbedrijven' },
    benefit: {
      en: 'Win a steady flow of commercial and residential jobs.',
      nl: 'Structureel nieuwe zakelijke en particuliere opdrachten binnenhalen.'
    }
  },
  {
    slug: 'eventplanners',
    name: { en: 'Wedding & event planners', nl: 'Trouw- & eventplanners' },
    benefit: {
      en: 'Get found by couples and companies planning an event.',
      nl: 'Word gevonden door stellen en bedrijven die een event plannen.'
    }
  },
  {
    slug: 'fotografen',
    name: { en: 'Photographers & videographers', nl: 'Fotografen & videografen' },
    benefit: {
      en: 'Let your portfolio work harder and attract better bookings.',
      nl: 'Laat je portfolio werken en trek betere boekingen aan.'
    }
  },
  {
    slug: 'rijscholen',
    name: { en: 'Driving schools', nl: 'Rijscholen' },
    benefit: {
      en: 'Fill lessons and exams with local SEO and targeted campaigns.',
      nl: 'Vul lessen en examens met lokale SEO en gerichte campagnes.'
    }
  },
  {
    slug: 'hoveniers',
    name: { en: 'Landscapers', nl: 'Hoveniers' },
    benefit: {
      en: 'More garden design and maintenance jobs in your service area.',
      nl: 'Meer tuinaanleg- en onderhoudsopdrachten uit jouw werkgebied.'
    }
  },
  {
    slug: 'dakdekkers-zonnepanelen',
    name: { en: 'Roofers & solar installers', nl: 'Dakdekkers & zonnepanelen' },
    benefit: {
      en: 'Generate leads for roofing work and energy projects.',
      nl: 'Genereer leads voor dakwerken en energieprojecten.'
    }
  },
  {
    slug: 'dierenartsen',
    name: { en: 'Veterinary clinics', nl: 'Dierenartsen' },
    benefit: {
      en: 'Attract pet owners in your region with reliable local marketing.',
      nl: 'Trek baasjes in je regio aan met betrouwbare lokale marketing.'
    }
  },
  {
    slug: 'uitzendbureaus',
    name: { en: 'Staffing agencies', nl: 'Uitzendbureaus' },
    benefit: {
      en: 'More candidates and clients through targeted online acquisition.',
      nl: 'Meer kandidaten en opdrachtgevers via gerichte online acquisitie.'
    }
  }
]

/** Hubs with a live route. Add an entry when the hub page ships. */
export type LiveBranchHub = {
  /** Must match a `slug` in BRANCH_INDUSTRIES. */
  industrySlug: string
  routeKey: RouteKey
}

export const LIVE_BRANCH_HUBS: readonly LiveBranchHub[] = [
  { industrySlug: 'restaurants', routeKey: 'branches-restaurants' },
  { industrySlug: 'tandartsen', routeKey: 'branches-tandartsen' },
  { industrySlug: 'fysiotherapeuten', routeKey: 'branches-fysiotherapeuten' },
  { industrySlug: 'kappers-schoonheidssalons', routeKey: 'branches-kappers-schoonheidssalons' },
  { industrySlug: 'makelaars', routeKey: 'branches-makelaars' }
]

export type ResolvedLiveBranchHub = LiveBranchHub & {
  name: LocalizedString
  benefit: LocalizedString
}

/** Resolve live hubs with localized names/benefits from BRANCH_INDUSTRIES. */
export function getLiveBranchHubs(): ResolvedLiveBranchHub[] {
  return LIVE_BRANCH_HUBS.flatMap((hub) => {
    const industry = BRANCH_INDUSTRIES.find((item) => item.slug === hub.industrySlug)
    if (!industry) return []
    return [{ ...hub, name: industry.name, benefit: industry.benefit }]
  })
}
