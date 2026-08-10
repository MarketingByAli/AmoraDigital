import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  PawPrint,
  Sparkles
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.dierenartsen
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Veterinary clinics',
    badge: 'Veterinary marketing',
    h1: 'Online marketing for veterinary clinics',
    heroSub:
      'We help veterinary clinics attract new pet owners and fill the appointment book — with trust, species clarity and local findability when a family is anxious about an animal they love. With 1,500+ completed projects, we know how reviews, emergency access and online booking turn into lasting clinic relationships before a neighbouring practice wins the first visit.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for veterinary clinics',
    servicesSub:
      'Work shaped around pet-owner trust, emergency reachability and recurring care (vaccines, check-ups, dentistry) — not a human dental recall funnel and not a physiotherapist intake playbook. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why veterinary clinics choose us',
    whySub:
      'Pet care is emotionally charged and local. We market compassion, species scope and emergency access without recycling human healthcare templates.',
    whyItems: [
      {
        title: 'Trust when a family member is furry',
        desc: 'Reviews, team faces and calm care language sit where anxious owners scan before they book a first visit or drive to emergency.'
      },
      {
        title: 'Species and service clarity',
        desc: 'Dogs and cats, rodents, exotics or farm animals each get clear paths — so the wrong species never lands in the wrong consult hour.'
      },
      {
        title: 'Emergency beside planned care',
        desc: 'Spoed and out-of-hours signals sit next to vaccines, sterilisation and dental care — two tempos, one clinic brand.'
      },
      {
        title: 'Local “vet near me” catchment',
        desc: 'Owners search dierenarts plus town. We tune findability for the neighbourhoods and towns you actually serve.'
      }
    ],
    ctaHeading: 'Ready for more first visits and a fuller appointment book?',
    ctaSub:
      'Tell us which species you treat, whether you offer emergency cover, and how new owners find you today. We will sketch how website, local search and Google Ads bring pet owners before they shortlist another clinic.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Dierenartsen',
    badge: 'Dierenartsenmarketing',
    h1: 'Online marketing voor dierenartsen',
    heroSub:
      'Wij helpen dierenartsenpraktijken nieuwe baasjes aantrekken en de agenda te vullen — met vertrouwen, diersoorthelderheid en lokale vindbaarheid wanneer een gezin zich zorgen maakt om een dier dat ze liefhebben. Met 1.500+ afgeronde projecten weten we hoe reviews, spoedtoegang en online afspraken uitgroeien tot duurzame praktijkrelaties vóór een buurtpraktijk het eerste bezoek wint.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor dierenartsen',
    servicesSub:
      'Werk rond vertrouwen van baasjes, spoedbereikbaarheid en terugkerende zorg (vaccins, controles, gebit) — geen menselijke tandarts-recalltrechter en geen fysiotherapeut-intakeplaybook. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom dierenartsenpraktijken voor ons kiezen',
    whySub:
      'Dierenzorg is emotioneel geladen en lokaal. Wij marketen compassie, diersoortbereik en spoedtoegang zonder menselijke zorgtemplates te hergebruiken.',
    whyItems: [
      {
        title: 'Vertrouwen wanneer een gezinslid vacht heeft',
        desc: 'Reviews, teamgezichten en kalme zorgtaal staan waar gestreste baasjes scannen vóór ze een eerste bezoek boeken of naar spoed rijden.'
      },
      {
        title: 'Diersoort- en diensthelderheid',
        desc: 'Honden en katten, knaagdieren, exoten of landbouwhuisdieren krijgen elk heldere paden — zodat de verkeerde soort nooit in het verkeerde consultuur belandt.'
      },
      {
        title: 'Spoed naast geplande zorg',
        desc: 'Spoed- en avondsignalen staan naast vaccins, sterilisatie en gebitszorg — twee tempo’s, één praktijksmerk.'
      },
      {
        title: 'Lokaal “dierenarts bij mij”-catchment',
        desc: 'Baasjes zoeken dierenarts plus plaats. We stemmen vindbaarheid af op de wijken en plaatsen die je écht bedient.'
      }
    ],
    ctaHeading: 'Klaar voor meer eerste bezoeken en een vollere agenda?',
    ctaSub:
      'Vertel welke diersoorten je behandelt, of je spoeddekking biedt, en hoe nieuwe baasjes je vandaag vinden. We schetsen hoe website, lokaal zoeken en Google Ads baasjes brengen vóór ze een andere praktijk shortlisten.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Dierenartsen() {
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
              <PawPrint className="w-4 h-4" aria-hidden />
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
                industrySlug="dierenartsen"
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
