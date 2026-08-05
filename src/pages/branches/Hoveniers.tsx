import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  Sparkles,
  Trees
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.hoveniers
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Landscapers',
    badge: 'Landscaper marketing',
    h1: 'Online marketing for landscapers',
    heroSub:
      'We help landscapers win more garden design and planting projects — and steady maintenance contracts — in the towns they actually cover. With 1,500+ completed projects, we know how before/after garden proof, seasonal demand and regional findability turn into quote requests from homeowners, VvEs and business parks.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for landscapers',
    servicesSub:
      'Work shaped around visual garden portfolios, one-off aanleg briefs and recurring onderhoud routes — not a builder’s kitchen renovation funnel and not a gym membership calendar. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why landscapers choose us',
    whySub:
      'Garden work sells on aesthetics, craft and seasonal timing. We market green outdoor space and maintenance routes without recycling a contractor renovation playbook.',
    whyItems: [
      {
        title: 'Before/after gardens as the close',
        desc: 'Terraces, planting beds and ponds shown as finished outdoor rooms — the proof homeowners scroll before they ask for a design quote.'
      },
      {
        title: 'Projects and maintenance as two engines',
        desc: 'One-off garden builds fill the spring peak; recurring mowing and pruning keep winter quieter months alive. Messaging covers both revenue models.'
      },
      {
        title: 'Regional catchment, not a shop pin',
        desc: 'Clients search landscaper plus town or radius. We tune findability for the service area you drive — including VvE and commercial grounds.'
      },
      {
        title: 'Seasonal timing built in',
        desc: 'Spring and summer peak; winter slows. We plan visibility ahead of planting season so calendars fill before competitors book every plot.'
      }
    ],
    ctaHeading: 'Ready for more garden projects and maintenance routes this season?',
    ctaSub:
      'Tell us which services you offer, which towns you cover, and how clients find you today. We will sketch how website, local search and Google Ads bring design quotes and onderhoud contracts before peak spring demand goes elsewhere.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Hoveniers',
    badge: 'Hoveniersmarketing',
    h1: 'Online marketing voor hoveniers',
    heroSub:
      'Wij helpen hoveniers meer tuinontwerp- en beplantingsprojecten binnen te halen — én stabiele onderhoudscontracten — in de plaatsen die ze écht bedienen. Met 1.500+ afgeronde projecten weten we hoe voor/na-tuinbewijs, seizoensvraag en regionale vindbaarheid uitgroeien tot offerteaanvragen van huiseigenaren, VvE’s en bedrijventerreinen.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor hoveniers',
    servicesSub:
      'Werk rond visuele tuinportfolio’s, eenmalige aanlegbriefs en terugkerende onderhoudsrondes — geen aannemers-keukenrenovatietrechter en geen sportschool-abonnementskalender. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom hoveniers voor ons kiezen',
    whySub:
      'Tuinen verkopen op esthetiek, vakmanschap en seizoenstiming. Wij marketen groen buitenruimte en onderhoudsrondes zonder een aannemers-verbouwplaybook te hergebruiken.',
    whyItems: [
      {
        title: 'Voor/na-tuinen als closermiddel',
        desc: 'Terrassen, borders en vijvers als afgeronde buitenruimtes — het bewijs dat huiseigenaren scrollen vóór ze een ontwerpofferte vragen.'
      },
      {
        title: 'Projecten en onderhoud als twee motoren',
        desc: 'Eenmalige tuinaanleg vult de voorjaarspiek; terugkerend maaien en snoeien houdt stillere wintermaanden levend. Boodschappen dekken beide verdienmodellen.'
      },
      {
        title: 'Regionaal werkgebied, geen winkelpin',
        desc: 'Klanten zoeken hovenier plus plaats of straal. We stemmen vindbaarheid af op het gebied dat je rijdt — inclusief VvE en zakelijke terreinen.'
      },
      {
        title: 'Seizoenstiming ingebouwd',
        desc: 'Voorjaar en zomer pieken; winter vertraagt. We plannen zichtbaarheid vóór het plantseizoen zodat agenda’s vollopen vóór concurrenten elk perceel boeken.'
      }
    ],
    ctaHeading: 'Klaar voor meer tuinprojecten en onderhoudsrondes dit seizoen?',
    ctaSub:
      'Vertel welke diensten je aanbiedt, welke plaatsen je dekt, en hoe klanten je vandaag vinden. We schetsen hoe website, lokaal zoeken en Google Ads ontwerpoffertes en onderhoudscontracten brengen vóór piekvraag in het voorjaar elders landt.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Hoveniers() {
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
              <Trees className="w-4 h-4" aria-hidden />
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
                industrySlug="hoveniers"
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
