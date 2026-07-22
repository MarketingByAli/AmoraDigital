import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  Sparkles,
  Target,
  UtensilsCrossed
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.restaurants
const SPOKE_ICONS = [Globe, MapPin, Megaphone, Target] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Restaurants & cafés',
    badge: 'Hospitality marketing',
    h1: 'Online marketing for restaurants & cafés',
    heroSub:
      'We help hospitality businesses win more guests and reservations through websites, local SEO, social media and Google Ads. With 1,500+ completed projects, we know what works for restaurants and cafés.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for restaurants',
    servicesSub:
      'Practical services that match how guests search, book and return. Choose a service for more detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why restaurants choose us',
    whySub: 'No generic marketing. An approach built for hospitality.',
    whyItems: [
      {
        title: 'Industry experience',
        desc: 'We know hospitality: peak hours, reviews, menus and the need for fast reservations.'
      },
      {
        title: 'Local focus',
        desc: 'Guests search nearby. We optimise for local visibility and Google Business Profile.'
      },
      {
        title: 'Measurable results',
        desc: 'We steer on reservations, calls and visits — not likes or impressions alone.'
      },
      {
        title: 'Everything under one roof',
        desc: 'Website, SEO, social and ads in one plan so channels reinforce each other.'
      }
    ],
    ctaHeading: 'Ready for more guests at the table?',
    ctaSub:
      'Tell us about your venue. We will review your website, visibility and campaigns that fit your restaurant.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Restaurants & cafés',
    badge: 'Horeca marketing',
    h1: 'Online marketing voor restaurants & cafés',
    heroSub:
      'Wij helpen horecaondernemers meer gasten en reserveringen te krijgen via websites, lokale SEO, social media en Google Ads. Met 1.500+ afgeronde projecten weten we wat werkt voor restaurants en cafés.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor restaurants',
    servicesSub:
      'Concrete diensten die aansluiten op hoe gasten zoeken, boeken en terugkomen. Kies een dienst voor meer detail.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom restaurants voor ons kiezen',
    whySub: 'Geen generieke marketing. Wel aanpak die past bij de horeca.',
    whyItems: [
      {
        title: 'Branche-ervaring',
        desc: 'We kennen de horeca: piekmomenten, reviews, menu’s en het belang van snelle reserveringen.'
      },
      {
        title: 'Lokale focus',
        desc: 'Gasten zoeken dichtbij. Wij optimaliseren voor lokale zichtbaarheid en Google Bedrijfsprofiel.'
      },
      {
        title: 'Meetbare resultaten',
        desc: 'We sturen op reserveringen, belacties en bezoek — niet alleen likes of impressies.'
      },
      {
        title: 'Alles onder één dak',
        desc: 'Website, SEO, social en ads in één plan, zodat kanalen elkaar versterken.'
      }
    ],
    ctaHeading: 'Klaar voor meer gasten aan tafel?',
    ctaSub:
      'Vertel ons over je zaak. We kijken mee naar website, vindbaarheid en campagnes die bij jouw restaurant passen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Restaurants() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-restaurants'][locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-8 flex-wrap" aria-label="Breadcrumb">
              <Link to={ROUTES.home[locale]} className="text-white/60 hover:text-white transition-colors">
                {t.crumbHome}
              </Link>
              <span className="text-white/40" aria-hidden>/</span>
              <Link to={ROUTES.branches[locale]} className="text-white/60 hover:text-white transition-colors">
                {t.crumbBranches}
              </Link>
              <span className="text-white/40" aria-hidden>/</span>
              <span className="text-white">{t.crumbCurrent}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <UtensilsCrossed className="w-4 h-4" aria-hidden />
              <span>{t.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.h1}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">{t.heroSub}</p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/90">
              <Sparkles className="w-4 h-4 text-secondary-300" aria-hidden />
              <span>{t.trust}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Globe className="w-4 h-4" aria-hidden />
              <span>{t.servicesBadge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">{t.servicesHead}</h2>
            <p className="section-subheading mx-auto">{t.servicesSub}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {SPOKES.map((spoke, i) => (
              <BranchSpokeCard
                key={spoke.slug}
                industrySlug="restaurants"
                hubPath={hubPath}
                spoke={spoke}
                locale={locale}
                ctaLabel={t.learnMore}
                icon={SPOKE_ICONS[i] ?? Globe}
                variant="hub"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" aria-hidden />
              <span>{t.whyBadge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">{t.whyHead}</h2>
            <p className="section-subheading mx-auto">{t.whySub}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {t.whyItems.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading text-slate-900 mb-4">{t.ctaHeading}</h2>
          <p className="section-subheading mx-auto mb-8">{t.ctaSub}</p>
          <Link to={ROUTES.contact[locale]} className="btn-primary group">
            {t.ctaButton}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  )
}
