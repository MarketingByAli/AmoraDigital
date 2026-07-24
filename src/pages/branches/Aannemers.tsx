import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  HardHat,
  MapPin,
  Megaphone,
  Sparkles
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.aannemers
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Contractors',
    badge: 'Contractor marketing',
    h1: 'Online marketing for contractors',
    heroSub:
      'We help contractors and trades businesses win more project enquiries and better-quality jobs online — through a clear website, local findability and campaigns that reach homeowners ready to renovate. With 1,500+ completed projects, we know what works on the building site and in Google.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for contractors',
    servicesSub:
      'Work shaped around quote requests, project portfolios and trade + city searches — not salon booking flows or restaurant menus. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why contractors choose us',
    whySub:
      'Building work is local, seasonal and trust-heavy. We plan around how homeowners compare quotes and decide who gets on the roof or in the kitchen.',
    whyItems: [
      {
        title: 'Trade-aware marketing',
        desc: 'We speak renovation and build language: extensions, kitchens, roofs, bathrooms — not clinic intakes or dinner covers.'
      },
      {
        title: 'Local job catchment',
        desc: 'Homeowners search by trade and town. We tune Google Business Profile and regional pages for that catchment.'
      },
      {
        title: 'Quote-quality focus',
        desc: 'We steer on project enquiries you can price — photos, scope clarity and contact paths that filter tyre-kickers.'
      },
      {
        title: 'One partner from site to search',
        desc: 'Portfolio site, local SEO and later ads share one brief — so your before/after work looks as sharp on Maps as on the van.'
      }
    ],
    ctaHeading: 'Ready for more project enquiries from your area?',
    ctaSub:
      'Tell us your trades, typical job size and towns you cover. We will sketch how homeowners find a contractor before they shortlist three quotes.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Aannemers & klusbedrijven',
    badge: 'Aannemersmarketing',
    h1: 'Online marketing voor aannemers & klusbedrijven',
    heroSub:
      'Wij helpen aannemers en klusbedrijven meer projectaanvragen en betere klussen online binnen te halen — via een duidelijke website, lokale vindbaarheid en campagnes die huiseigenaren bereiken die willen verbouwen. Met 1.500+ afgeronde projecten weten we wat werkt op de bouwplaats én in Google.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor aannemers',
    servicesSub:
      'Werk rond offerteaanvragen, projectportfolio’s en vak + stad-zoekopdrachten — geen salonboekflows of restaurantmenu’s. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom aannemers voor ons kiezen',
    whySub:
      'Bouwwerk is lokaal, seizoensgebonden en vertrouwensgevoelig. Wij plannen rond hoe huiseigenaren offertes vergelijken en kiezen wie op het dak of in de keuken komt.',
    whyItems: [
      {
        title: 'Vakbewuste marketing',
        desc: 'We spreken verbouw- en bouwtaal: uitbouwen, keukens, daken, badkamers — geen kliniekintakes of dinercovers.'
      },
      {
        title: 'Lokaal werkgebied',
        desc: 'Huiseigenaren zoeken op vak en plaats. We stemmen Google Bedrijfsprofiel en regiopagina’s af op dat verzorgingsgebied.'
      },
      {
        title: 'Focus op offertekwaliteit',
        desc: 'We sturen op projectaanvragen die je kunt begroten — foto’s, scope-duidelijkheid en contactpaden die shoppers filteren.'
      },
      {
        title: 'Één partner van site tot zoektocht',
        desc: 'Portfoliosite, lokale SEO en later ads delen één briefing — zodat je voor/na-werk even scherp oogt in Maps als op de bus.'
      }
    ],
    ctaHeading: 'Klaar voor meer projectaanvragen uit jouw regio?',
    ctaSub:
      'Vertel je vakken, typische klusgrootte en gemeenten die je bedient. We schetsen hoe huiseigenaren een aannemer vinden vóór ze drie offertes naast elkaar leggen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Aannemers() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

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
              <HardHat className="w-4 h-4" aria-hidden />
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
                industrySlug="aannemers"
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
