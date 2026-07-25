import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Car,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  Sparkles
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.autobedrijven
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Car dealers & garages',
    badge: 'Automotive marketing',
    h1: 'Online marketing for car dealers & garages',
    heroSub:
      'We help car businesses fill the workshop and move stock — more maintenance appointments, APK bookings and vehicle enquiries — with a clear online presence, local findability and campaigns that match how drivers search. With 1,500+ completed projects, we know what builds trust before someone books a garage or views an occasion.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for car dealers and garages',
    servicesSub:
      'Work shaped around two revenue engines: occasion sales and recurring workshop income — not salon bookings or bookkeeping niches. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why automotive businesses choose us',
    whySub:
      'Drivers fear opaque garage bills and stale stock photos. We plan around transparent workshop trust, live inventory signals and local APK urgency — not how someone shortlists a lawyer or switches accountant.',
    whyItems: [
      {
        title: 'Workshop and sales as equal engines',
        desc: 'We structure messaging for APK, maintenance and tyres alongside occasion stock, finance and trade-in — so neither side of the business hides behind the other.'
      },
      {
        title: 'Trust that calms price fear',
        desc: 'Reviews, clear service pages and honest workshop tone reduce the “will they overcharge me?” reflex before someone books an appointment.'
      },
      {
        title: 'Stock and platform-aware selling',
        desc: 'Where relevant we align site and campaigns with how occasions sit next to AutoScout24, Marktplaats or Gaspedaal — so your own channels still capture enquiry.'
      },
      {
        title: 'Season-aware local demand',
        desc: 'Website, local SEO and later ads share one brief around tyre changes, holiday checks and airco season — when drivers actually search garage and APK near them.'
      }
    ],
    ctaHeading: 'Ready for a fuller workshop and faster-moving stock?',
    ctaSub:
      'Tell us whether you lean workshop, occasion sales or both, and which cities you serve. We will sketch how drivers find you for APK, maintenance and vehicles before they pick the next garage.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Autobedrijven & garages',
    badge: 'Automotive marketing',
    h1: 'Online marketing voor autobedrijven & garages',
    heroSub:
      'Wij helpen autobedrijven de werkplaats te vullen en voorraad te laten lopen — meer onderhoudsafspraken, APK-boekingen en voertuigaanvragen — met een duidelijke online aanwezigheid, lokale vindbaarheid en campagnes die aansluiten bij hoe automobilisten zoeken. Met 1.500+ afgeronde projecten weten we wat vertrouwen wekt vóór iemand een garage boekt of een occasion bekijkt.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor autobedrijven en garages',
    servicesSub:
      'Werk rond twee omzetmotoren: occasionverkoop en terugkerende werkplaatsinkomsten — geen salonboekingen of boekhoudniches. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom autobedrijven voor ons kiezen',
    whySub:
      'Automobilisten wantrouwen ondoorzichtige garagenota’s en verouderde voorraadsfoto’s. Wij plannen rond transparant werkplaatsvertrouwen, actuele voorraadsignalen en lokale APK-urgentie — niet hoe iemand een advocaat shortlist of van boekhouder wisselt.',
    whyItems: [
      {
        title: 'Werkplaats en verkoop als gelijke motoren',
        desc: 'We structureren boodschap voor APK, onderhoud en banden naast occasionvoorraad, financiering en inruil — zodat geen van beide kanten van het bedrijf de ander verstopt.'
      },
      {
        title: 'Vertrouwen dat prijsangst dempt',
        desc: 'Reviews, heldere dienstpagina’s en eerlijke werkplaatstoon verminderen de reflex “rekenen ze me te veel” vóór iemand een afspraak boekt.'
      },
      {
        title: 'Voorraad- en platformbewust verkopen',
        desc: 'Waar relevant stemmen we site en campagnes af op hoe occasions naast AutoScout24, Marktplaats of Gaspedaal staan — zodat je eigen kanalen nog steeds aanvragen vangen.'
      },
      {
        title: 'Seizoensbewuste lokale vraag',
        desc: 'Website, lokale SEO en later ads delen één briefing rond bandenwissel, vakantiecheck en airco-seizoen — wanneer automobilisten écht garage en APK bij hen zoeken.'
      }
    ],
    ctaHeading: 'Klaar voor een vollere werkplaats en sneller lopende voorraad?',
    ctaSub:
      'Vertel of je leunt op werkplaats, occasionverkoop of beide, en welke steden je bedient. We schetsen hoe automobilisten je vinden voor APK, onderhoud en voertuigen vóór ze de volgende garage kiezen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Autobedrijven() {
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
              <Car className="w-4 h-4" aria-hidden />
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
                industrySlug="autobedrijven"
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
