import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  Sparkles,
  SprayCan
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.schoonmaakbedrijven
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Cleaning companies',
    badge: 'Cleaning marketing',
    h1: 'Online marketing for cleaning companies',
    heroSub:
      'We help cleaning companies win more recurring contracts and quote requests — commercial and residential — with a clear online presence, local findability and campaigns that match how facility managers and households shortlist a cleaner. With 1,500+ completed projects, we know what builds trust before someone hands over keys or a multi-site schedule.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for cleaning companies',
    servicesSub:
      'Work shaped around lifetime contract value: office cleaning, window cleaning, floor care, move-out cleans and facade work — not one-off renovation quotes or emergency call-outs. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why cleaning companies choose us',
    whySub:
      'Buyers hand over keys and trust strangers in their building. We plan around reliability signals, insured teams and recurring contract economics — not how someone books a gym trial or shortlists a bathroom remodel.',
    whyItems: [
      {
        title: 'Recurring contracts over one-off jobs',
        desc: 'We design paths for weekly office rounds and multi-year facility agreements — lead quality matters because lifetime value dwarfs a single deep clean.'
      },
      {
        title: 'Commercial and residential kept distinct',
        desc: 'Facility managers comparing VvE, school or care cleaning get a different journey from households seeking window cleaning or move-out help — so neither market feels like the wrong audience.'
      },
      {
        title: 'Service and radius clarity',
        desc: 'Office cleaning, glass, floors, handover cleans and facade work sit next to the towns you actually cover — a service-area story, not a fake shopfront address.'
      },
      {
        title: 'Trust that unlocks keys',
        desc: 'Insurance, vetted staff and reliable schedules reduce “will they show up and treat the building right?” hesitation before a contract is signed.'
      }
    ],
    ctaHeading: 'Ready for fuller contract diaries and sharper quote flow?',
    ctaSub:
      'Tell us whether you lean commercial, residential or both, which services you sell, and the radius you cover. We will sketch how buyers find you for office rounds, glass and handover cleans before they pick the next cleaner.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Schoonmaakbedrijven',
    badge: 'Schoonmaakmarketing',
    h1: 'Online marketing voor schoonmaakbedrijven',
    heroSub:
      'Wij helpen schoonmaakbedrijven meer terugkerende contracten en offerteaanvragen binnen te halen — zakelijk én particulier — met een duidelijke online aanwezigheid, lokale vindbaarheid en campagnes die aansluiten bij hoe facility managers en huishoudens een schoonmaker shortlisten. Met 1.500+ afgeronde projecten weten we wat vertrouwen wekt vóór iemand sleutels of een multi-site rooster overdraagt.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor schoonmaakbedrijven',
    servicesSub:
      'Werk rond lifetime contractwaarde: kantoorschoonmaak, glasbewassing, vloeronderhoud, opleverschoonmaak en gevelreiniging — geen eenmalige verbouwoffertes of spoedklussen. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom schoonmaakbedrijven voor ons kiezen',
    whySub:
      'Kopers geven sleutels af en laten vreemden in hun pand. Wij plannen rond betrouwbaarheidssignalen, verzekerde teams en terugkerende contracteconomie — niet hoe iemand een proefles boekt of een badkamerrenovatie shortlist.',
    whyItems: [
      {
        title: 'Terugkerende contracten boven eenmalige klussen',
        desc: 'We ontwerpen paden voor wekelijkse kantoorroutes en meerjarige facility-afspraken — leadkwaliteit telt omdat lifetime value een enkele grote schoonmaak overstijgt.'
      },
      {
        title: 'Zakelijk en particulier apart gehouden',
        desc: 'Facility managers die VvE-, school- of zorgschoonmaak vergelijken krijgen een andere journey dan huishoudens die glas of oplevering zoeken — zodat geen van beide markten voelt als het verkeerde publiek.'
      },
      {
        title: 'Dienst- en werkgebiedhelderheid',
        desc: 'Kantoorschoonmaak, glas, vloeren, oplevering en gevelreiniging staan naast de plaatsen die je écht dekt — een straalverhaal, geen nep-winkeladres.'
      },
      {
        title: 'Vertrouwen dat sleutels ontgrendelt',
        desc: 'Verzekering, gescreend personeel en betrouwbare roosters verminderen de twijfel “komen ze wel en behandelen ze het pand goed?” vóór een contract getekend wordt.'
      }
    ],
    ctaHeading: 'Klaar voor vollere contractagenda’s en scherpere offerteflow?',
    ctaSub:
      'Vertel of je leunt op zakelijk, particulier of beide, welke diensten je verkoopt, en welke straal je dekt. We schetsen hoe kopers je vinden voor kantoorroutes, glas en oplevering vóór ze de volgende schoonmaker kiezen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Schoonmaakbedrijven() {
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
              <SprayCan className="w-4 h-4" aria-hidden />
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
                industrySlug="schoonmaakbedrijven"
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
