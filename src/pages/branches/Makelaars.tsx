import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Home,
  MapPin,
  Megaphone,
  Sparkles,
  Target
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.makelaars
const SPOKE_ICONS = [Globe, MapPin, Target, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Real estate agents',
    badge: 'Real estate marketing',
    h1: 'Online marketing for real estate agents',
    heroSub:
      'We help estate agents win more listings and buyer/seller leads online through websites, local SEO, Google Ads and social media. With 1,500+ completed projects, we know what works for real estate.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for estate agents',
    servicesSub:
      'Practical services that match how sellers and buyers search, choose an agent and enquire. Choose a service for more detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why estate agents choose us',
    whySub: 'No generic marketing. An approach built for real estate.',
    whyItems: [
      {
        title: 'Industry experience',
        desc: 'We know agency marketing: listings, valuations, local trust and high-intent seller leads.'
      },
      {
        title: 'Local focus',
        desc: 'Clients search by city and neighbourhood. We optimise for local visibility and Google Business Profile.'
      },
      {
        title: 'Measurable results',
        desc: 'We steer on enquiries, valuations and listing leads — not vanity metrics alone.'
      },
      {
        title: 'Everything under one roof',
        desc: 'Website, SEO, ads and social in one plan so channels reinforce each other.'
      }
    ],
    ctaHeading: 'Ready for more listing leads?',
    ctaSub:
      'Tell us about your agency. We will review your website, visibility and campaigns that fit your market.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Makelaars',
    badge: 'Makelaarsmarketing',
    h1: 'Online marketing voor makelaars',
    heroSub:
      'Wij helpen makelaars meer opdrachten en koper-/verkoperleads online binnen te halen via websites, lokale SEO, Google Ads en social media. Met 1.500+ afgeronde projecten weten we wat werkt in de vastgoedmarkt.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor makelaars',
    servicesSub:
      'Concrete diensten die aansluiten op hoe verkopers en kopers zoeken, een makelaar kiezen en contact opnemen. Kies een dienst voor meer detail.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom makelaars voor ons kiezen',
    whySub: 'Geen generieke marketing. Wel aanpak die past bij vastgoed.',
    whyItems: [
      {
        title: 'Branche-ervaring',
        desc: 'We kennen makelaarsmarketing: woningen, taxaties, lokaal vertrouwen en leads met hoge intentie.'
      },
      {
        title: 'Lokale focus',
        desc: 'Klanten zoeken op stad en buurt. Wij optimaliseren voor lokale zichtbaarheid en Google Bedrijfsprofiel.'
      },
      {
        title: 'Meetbare resultaten',
        desc: 'We sturen op aanvragen, taxaties en opdrachtleads — niet alleen vanity metrics.'
      },
      {
        title: 'Alles onder één dak',
        desc: 'Website, SEO, ads en social in één plan, zodat kanalen elkaar versterken.'
      }
    ],
    ctaHeading: 'Klaar voor meer opdrachtleads?',
    ctaSub:
      'Vertel ons over je kantoor. We kijken mee naar website, vindbaarheid en campagnes die bij jouw markt passen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Makelaars() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-makelaars'][locale]

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
              <Home className="w-4 h-4" aria-hidden />
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
                industrySlug="makelaars"
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
