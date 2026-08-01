import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Globe,
  MapPin,
  Share2,
  Sparkles
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.fotografen
const SPOKE_ICONS = [Globe, MapPin, Share2] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Photographers & videographers',
    badge: 'Photographer & videographer marketing',
    h1: 'Online marketing for photographers & videographers',
    heroSub:
      'We help photographers and videographers get booked for the work they want — more enquiries from clients who already love their eye, colour and pacing. With 1,500+ completed projects, we know how to turn a fast portfolio and clear specialisations into serious booking conversations before the right date goes to someone else.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for photographers & videographers',
    servicesSub:
      'Work built around the maker of the image: a site that loads heavy galleries without killing the vibe, local findability for “wedding photographer [city]” and niche specialisations, and Instagram-led discovery that points back to packages and delivery galleries — not an event organiser’s vendor network and not a salon chair calendar. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why photographers & videographers choose us',
    whySub:
      'Clients hire your eye and style, not a coordination plan. We market the craft of making images — specialisation, speed under heavy files, and booking paths that ask for date, package and delivery — without recycling planner or salon playbooks.',
    whyItems: [
      {
        title: 'Your portfolio is the product',
        desc: 'Style, colour grade and edit rhythm shortlist you before price. We structure galleries so the click lands on craft first, not a vague “about us” wall of text.'
      },
      {
        title: 'Heavy files that still feel fast',
        desc: 'Photographers ship megapixels and video; planners mostly curate other people’s work. Compression, lazy load and gallery patterns keep mobile scanners from bouncing.'
      },
      {
        title: 'Specialisations that filter the brief',
        desc: 'Wedding, portrait, commercial, product, real estate, newborn, events and video production each need their own proof and keywords — so the wrong brief never wastes a shoot day.'
      },
      {
        title: 'Booking to delivery in one path',
        desc: 'Availability, packages and client galleries belong in the same journey. Couples and brands shortlist makers who look ready to shoot and ready to deliver.'
      }
    ],
    ctaHeading: 'Ready for clients who already love your style?',
    ctaSub:
      'Tell us which specialisations you shoot, which cities or regions you cover, and how clients find your work today. We will sketch how a fast portfolio site, local search and Instagram discovery bring the right booking enquiries.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Fotografen & videografen',
    badge: 'Fotograaf- & videograafmarketing',
    h1: 'Online marketing voor fotografen & videografen',
    heroSub:
      'Wij helpen fotografen en videografen geboekt te worden voor het werk dat ze willen — meer aanvragen van klanten die hun oog, kleur en pacing al voelen. Met 1.500+ afgeronde projecten weten we hoe een snel portfolio en heldere specialisaties uitgroeien tot serieuze boekingsgesprekken vóór de juiste datum naar iemand anders gaat.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor fotografen & videografen',
    servicesSub:
      'Werk rond de maker van het beeld: een site die zware galerijen laadt zonder de sfeer te breken, lokale vindbaarheid op “trouwfotograaf [stad]” en nichespecialisaties, en Instagram-gedreven ontdekking die terugwijst naar pakketten en leveringsgalerijen — geen leveranciersnetwerk van een eventorganisator en geen salonstoelkalender. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom fotografen & videografen voor ons kiezen',
    whySub:
      'Klanten huren jouw oog en stijl, geen regieplan. Wij marketen het ambacht van beeld maken — specialisatie, snelheid onder zware bestanden, en boekingspaden die datum, pakket en levering vragen — zonder planner- of salonplaybooks te hergebruiken.',
    whyItems: [
      {
        title: 'Jouw portfolio is het product',
        desc: 'Stijl, kleurgrade en editrritme shortlisten je vóór prijs. We structureren galerijen zodat de klik eerst op craft landt, niet op een vage “over ons”-tekstmuur.'
      },
      {
        title: 'Zware bestanden die toch snel aanvoelen',
        desc: 'Fotografen leveren megapixels en video; planners cureren vooral andermans werk. Compressie, lazy load en galerijpatronen houden mobiele scanners van bounce.'
      },
      {
        title: 'Specialisaties die het briefje filteren',
        desc: 'Bruiloft, portret, zakelijk, product, vastgoed, newborn, evenementen en videoproductie vragen elk eigen bewijs en zoekwoorden — zodat het verkeerde briefje geen shootdag verspilt.'
      },
      {
        title: 'Van boeking tot levering in één pad',
        desc: 'Beschikbaarheid, pakketten en klantgalerijen horen in dezelfde journey. Stellen en merken shortlisten makers die klaar ogen om te shooten én te leveren.'
      }
    ],
    ctaHeading: 'Klaar voor klanten die jouw stijl al voelen?',
    ctaSub:
      'Vertel welke specialisaties je shoot, welke steden of regio’s je dekt, en hoe klanten je werk vandaag vinden. We schetsen hoe een snelle portfoliosite, lokaal zoeken en Instagram-ontdekking de juiste boekingsaanvragen brengen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Fotografen() {
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
              <Camera className="w-4 h-4" aria-hidden />
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
                industrySlug="fotografen"
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
