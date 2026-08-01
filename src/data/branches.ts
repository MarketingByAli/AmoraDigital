/**
 * Industry hubs for the /branches SEO silo.
 * Add or remove entries here — the index page maps over this list.
 *
 * `LIVE_BRANCH_HUBS` lists hubs that already have a RouteKey + page.
 * Header/Footer nav map over this list so new hubs appear automatically.
 */
import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Calculator,
  Camera,
  Car,
  CarFront,
  Dumbbell,
  Hammer,
  Home,
  PartyPopper,
  PawPrint,
  Scale,
  Scissors,
  ShoppingCart,
  Smile,
  SprayCan,
  Sun,
  Trees,
  Users,
  UtensilsCrossed,
  Wrench
} from 'lucide-react'
import type { Locale, RouteKey } from '../i18n/routes'

export type LocalizedString = Record<Locale, string>

export type BranchIndustry = {
  slug: string
  name: LocalizedString
  benefit: LocalizedString
  /** Industry-specific lucide icon — used by nav, index cards, etc. */
  icon: LucideIcon
}

export const BRANCH_INDUSTRIES: readonly BranchIndustry[] = [
  {
    slug: 'restaurants',
    name: { en: 'Restaurants & cafés', nl: 'Restaurants & cafés' },
    benefit: {
      en: 'More reservations and returning guests through local visibility.',
      nl: 'Meer reserveringen en terugkerende gasten via lokale vindbaarheid.'
    },
    icon: UtensilsCrossed
  },
  {
    slug: 'tandartsen',
    name: { en: 'Dentists', nl: 'Tandartsen' },
    benefit: {
      en: 'Attract new patients with a strong local online presence.',
      nl: 'Nieuwe patiënten aantrekken met een sterke lokale online aanwezigheid.'
    },
    icon: Smile
  },
  {
    slug: 'fysiotherapeuten',
    name: { en: 'Physiotherapists', nl: 'Fysiotherapeuten' },
    benefit: {
      en: 'Get found by people searching for care in your area.',
      nl: 'Word gevonden door mensen die zoeken naar zorg in jouw regio.'
    },
    icon: Activity
  },
  {
    slug: 'kappers-schoonheidssalons',
    name: { en: 'Hairdressers & beauty salons', nl: 'Kappers & schoonheidssalons' },
    benefit: {
      en: 'Fill your calendar with bookings via SEO, Google Ads and social.',
      nl: 'Vul je agenda met afspraken via SEO, Google Ads en social.'
    },
    icon: Scissors
  },
  {
    slug: 'makelaars',
    name: { en: 'Real estate agents', nl: 'Makelaars' },
    benefit: {
      en: 'More viewings and leads from search traffic and campaigns.',
      nl: 'Meer bezichtigingen en leads uit zoekverkeer en campagnes.'
    },
    icon: Home
  },
  {
    slug: 'aannemers',
    name: { en: 'Contractors', nl: 'Aannemers & klusbedrijven' },
    benefit: {
      en: 'Win more quote requests from local clients.',
      nl: 'Krijg meer offerteaanvragen van lokale opdrachtgevers.'
    },
    icon: Hammer
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
    },
    icon: Wrench
  },
  {
    slug: 'advocaten-notarissen',
    name: { en: 'Lawyers & notaries', nl: 'Advocaten & notarissen' },
    benefit: {
      en: 'Position your firm as an authority and attract qualified cases.',
      nl: 'Positioneer je kantoor als autoriteit en trek gekwalificeerde zaken.'
    },
    icon: Scale
  },
  {
    slug: 'boekhouders',
    name: { en: 'Accountants & bookkeepers', nl: 'Boekhouders & accountants' },
    benefit: {
      en: 'Grow your client base with focused B2B online marketing.',
      nl: 'Groei je klantenbestand met gerichte B2B online marketing.'
    },
    icon: Calculator
  },
  {
    slug: 'autobedrijven',
    name: { en: 'Car dealers & garages', nl: 'Autobedrijven & garages' },
    benefit: {
      en: 'More workshop bookings and vehicle sales through digital channels.',
      nl: 'Meer werkplaatsafspraken en autoverkopen via digitale kanalen.'
    },
    icon: Car
  },
  {
    slug: 'webshops',
    name: { en: 'Webshops & e-commerce', nl: 'Webshops & e-commerce' },
    benefit: {
      en: 'Scale revenue with SEO, ads and conversion-focused optimisation.',
      nl: 'Schaal je omzet met SEO, ads en conversiegerichte optimalisatie.'
    },
    icon: ShoppingCart
  },
  {
    slug: 'sportscholen',
    name: { en: 'Gyms & personal trainers', nl: 'Sportscholen & personal trainers' },
    benefit: {
      en: 'More members and trial sessions via local visibility and ads.',
      nl: 'Meer leden en proeflessen via lokale vindbaarheid en ads.'
    },
    icon: Dumbbell
  },
  {
    slug: 'schoonmaakbedrijven',
    name: { en: 'Cleaning companies', nl: 'Schoonmaakbedrijven' },
    benefit: {
      en: 'Win a steady flow of commercial and residential jobs.',
      nl: 'Structureel nieuwe zakelijke en particuliere opdrachten binnenhalen.'
    },
    icon: SprayCan
  },
  {
    slug: 'eventplanners',
    name: { en: 'Wedding & event planners', nl: 'Trouw- & eventplanners' },
    benefit: {
      en: 'Get found by couples and companies planning an event.',
      nl: 'Word gevonden door stellen en bedrijven die een event plannen.'
    },
    icon: PartyPopper
  },
  {
    slug: 'fotografen',
    name: { en: 'Photographers & videographers', nl: 'Fotografen & videografen' },
    benefit: {
      en: 'Let your portfolio work harder and attract better bookings.',
      nl: 'Laat je portfolio werken en trek betere boekingen aan.'
    },
    icon: Camera
  },
  {
    slug: 'rijscholen',
    name: { en: 'Driving schools', nl: 'Rijscholen' },
    benefit: {
      en: 'Fill lessons and exams with local SEO and targeted campaigns.',
      nl: 'Vul lessen en examens met lokale SEO en gerichte campagnes.'
    },
    icon: CarFront
  },
  {
    slug: 'hoveniers',
    name: { en: 'Landscapers', nl: 'Hoveniers' },
    benefit: {
      en: 'More garden design and maintenance jobs in your service area.',
      nl: 'Meer tuinaanleg- en onderhoudsopdrachten uit jouw werkgebied.'
    },
    icon: Trees
  },
  {
    slug: 'dakdekkers-zonnepanelen',
    name: { en: 'Roofers & solar installers', nl: 'Dakdekkers & zonnepanelen' },
    benefit: {
      en: 'Generate leads for roofing work and energy projects.',
      nl: 'Genereer leads voor dakwerken en energieprojecten.'
    },
    icon: Sun
  },
  {
    slug: 'dierenartsen',
    name: { en: 'Veterinary clinics', nl: 'Dierenartsen' },
    benefit: {
      en: 'Attract pet owners in your region with reliable local marketing.',
      nl: 'Trek baasjes in je regio aan met betrouwbare lokale marketing.'
    },
    icon: PawPrint
  },
  {
    slug: 'uitzendbureaus',
    name: { en: 'Staffing agencies', nl: 'Uitzendbureaus' },
    benefit: {
      en: 'More candidates and clients through targeted online acquisition.',
      nl: 'Meer kandidaten en opdrachtgevers via gerichte online acquisitie.'
    },
    icon: Users
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
  { industrySlug: 'makelaars', routeKey: 'branches-makelaars' },
  { industrySlug: 'aannemers', routeKey: 'branches-aannemers' },
  { industrySlug: 'installateurs', routeKey: 'branches-installateurs' },
  { industrySlug: 'advocaten-notarissen', routeKey: 'branches-advocaten-notarissen' },
  { industrySlug: 'boekhouders', routeKey: 'branches-boekhouders' },
  { industrySlug: 'autobedrijven', routeKey: 'branches-autobedrijven' },
  { industrySlug: 'webshops', routeKey: 'branches-webshops' },
  { industrySlug: 'sportscholen', routeKey: 'branches-sportscholen' },
  { industrySlug: 'schoonmaakbedrijven', routeKey: 'branches-schoonmaakbedrijven' },
  { industrySlug: 'eventplanners', routeKey: 'branches-eventplanners' },
  { industrySlug: 'fotografen', routeKey: 'branches-fotografen' }
]

/** True when the industry hub has a live RouteKey + page. */
export function isLiveBranchHub(industrySlug: string): boolean {
  return LIVE_BRANCH_HUBS.some((hub) => hub.industrySlug === industrySlug)
}

export function getLiveBranchHub(industrySlug: string): LiveBranchHub | undefined {
  return LIVE_BRANCH_HUBS.find((hub) => hub.industrySlug === industrySlug)
}

export type ResolvedLiveBranchHub = LiveBranchHub & {
  name: LocalizedString
  benefit: LocalizedString
  icon: LucideIcon
}

/** Resolve live hubs with localized names/benefits/icons from BRANCH_INDUSTRIES. */
export function getLiveBranchHubs(): ResolvedLiveBranchHub[] {
  return LIVE_BRANCH_HUBS.flatMap((hub) => {
    const industry = BRANCH_INDUSTRIES.find((item) => item.slug === hub.industrySlug)
    if (!industry) return []
    return [
      {
        ...hub,
        name: industry.name,
        benefit: industry.benefit,
        icon: industry.icon
      }
    ]
  })
}
