import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  PartyPopper,
  Share2,
  Sparkles
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.eventplanners
const SPOKE_ICONS = [Globe, MapPin, Share2] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Wedding & event planners',
    badge: 'Event planner marketing',
    h1: 'Online marketing for wedding & event planners',
    heroSub:
      'We help wedding and event planners get booked for the dates that matter — more enquiries from couples and companies who already love their style, portfolio and calm coordination. With 1,500+ completed projects, we know what turns inspiration into a serious planning conversation before the calendar fills for someone else.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for wedding & event planners',
    servicesSub:
      'Work shaped around one-off days and high-stakes company events: portfolio that proves taste, local findability for “wedding planner [city]”, and social that feeds Instagram and Pinterest inspiration — not a salon booking grid for weekly appointments. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why wedding & event planners choose us',
    whySub:
      'Clients hand over a wedding day or a board-level company event. We plan around taste, trust and a vendor network — not how a barber fills Tuesday slots or a cleaner wins weekly office rounds.',
    whyItems: [
      {
        title: 'Portfolio sells the feeling first',
        desc: 'Atmosphere shots, real tablescapes and honest event stories do the shortlisting — we structure sites and feeds so style is obvious before a couple or host asks for a quote.'
      },
      {
        title: 'Weddings and corporate kept distinct',
        desc: 'Seasonal bridal demand on Instagram differs from longer B2B cycles for launches and congresses — so neither market lands in the wrong enquiry form.'
      },
      {
        title: 'Quote forms that capture the brief',
        desc: 'Date, venue, guest count and style fields turn inspiration taps into plannable requests your team can scope with venues, photographers and catering partners.'
      },
      {
        title: 'Calendar and vendor network in view',
        desc: 'Availability and collaboration signals reduce “will they still be free?” fear — buyers compare planners who look organised, not only pretty.'
      }
    ],
    ctaHeading: 'Ready for enquiries that match your dates and style?',
    ctaSub:
      'Tell us whether you lean weddings, corporate events or both, which regions you cover, and how couples or hosts find you today. We will sketch how portfolio, local search and social bring the right briefs before peak season books out.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Trouw- & eventplanners',
    badge: 'Eventplanner-marketing',
    h1: 'Online marketing voor trouw- & eventplanners',
    heroSub:
      'Wij helpen trouw- en eventplanners geboekt te worden op de data die ertoe doen — meer aanvragen van stellen en bedrijven die hun stijl, portfolio en rustige regie al voelen. Met 1.500+ afgeronde projecten weten we wat inspiratie omzet in een serieus planningsgesprek vóór de agenda voor iemand anders volloopt.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor trouw- & eventplanners',
    servicesSub:
      'Werk rond unieke dagen en zakelijke high-stakes events: portfolio dat smaak bewijst, lokale vindbaarheid op “trouwplanner [stad]”, en social die Instagram- en Pinterest-inspiratie voedt — geen salonrooster voor wekelijkse knipbeurten. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom trouw- & eventplanners voor ons kiezen',
    whySub:
      'Klanten geven een trouwdag of een board-level bedrijfsevent uit handen. Wij plannen rond smaak, vertrouwen en een leveranciersnetwerk — niet hoe een kapper dinsdagslots vult of een schoonmaker wekelijkse kantoorroutes wint.',
    whyItems: [
      {
        title: 'Portfolio verkoopt eerst het gevoel',
        desc: 'Sfeerbeelden, echte tafelschikkingen en eerlijke eventverhalen doen de shortlist — we structureren site en feed zodat stijl duidelijk is vóór een stel of host om een offerte vraagt.'
      },
      {
        title: 'Bruiloften en zakelijk apart gehouden',
        desc: 'Seizoensgebonden bridal-vraag op Instagram verschilt van langere B2B-cycli voor lanceringen en congressen — zodat geen van beide markten in het verkeerde aanvraagformulier landt.'
      },
      {
        title: 'Offerteforms die het briefje vangen',
        desc: 'Velden voor datum, locatie, gastenaantal en stijl zetten inspiratieklikken om in planningsklare aanvragen die je met venues, fotografen en catering kunt scopten.'
      },
      {
        title: 'Agenda en leveranciersnetwerk in beeld',
        desc: 'Beschikbaarheid en samenwerkingsignalen verminderen de angst “zijn ze nog vrij?” — kopers vergelijken planners die georganiseerd ogen, niet alleen mooi.'
      }
    ],
    ctaHeading: 'Klaar voor aanvragen die bij jouw data en stijl passen?',
    ctaSub:
      'Vertel of je leunt op bruiloften, zakelijke events of beide, welke regio’s je dekt, en hoe stellen of hosts je vandaag vinden. We schetsen hoe portfolio, lokaal zoeken en social de juiste briefs brengen vóór het hoogseizoen volloopt.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Eventplanners() {
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
              <PartyPopper className="w-4 h-4" aria-hidden />
              <span>{t.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.h1}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">{t.heroSub}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={ROUTES.contact[locale]}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-700 bg-white rounded-lg hover:bg-slate-100 transition-all shadow-lg group"
              >
                {t.ctaButton}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/90">
                <Sparkles className="w-4 h-4 text-secondary-300" aria-hidden />
                <span>{t.trust}</span>
              </div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SPOKES.map((spoke, i) => (
              <BranchSpokeCard
                key={spoke.slug}
                industrySlug="eventplanners"
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
