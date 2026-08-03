import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  Sparkles
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.rijscholen
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Driving schools',
    badge: 'Driving school marketing',
    h1: 'Online marketing for driving schools',
    heroSub:
      'We help driving schools fill their lesson calendar with new students — more sign-ups from learners in their area who already trust your pass rate, packages and trial lesson. With 1,500+ completed projects, we know how to turn local search and clear CBR proof into enrolments before a comparison site sends them elsewhere.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for driving schools',
    servicesSub:
      'Work built around a young, price- and review-sensitive audience (and parents who often research and pay): a site that shows pass rates, packages and trial lessons, local findability for “driving school [city]”, and Google Ads that capture high-intent lesson searches — not a salon chair calendar and not a photographer portfolio. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why driving schools choose us',
    whySub:
      'Learners and parents shortlist on pass rates, reviews, price packages, trial lessons and pickup — not on a pretty logo alone. We market continuous local enrolment against comparison sites without recycling other industry playbooks.',
    whyItems: [
      {
        title: 'Pass rate as hard trust',
        desc: 'CBR success figures and student reviews sit where parents scan first — the signal that beats a vague “friendly instructors” claim on a comparison listing.'
      },
      {
        title: 'Packages and trial lesson first',
        desc: 'Young drivers compare price bands and want a low-friction trial. We structure paths so the pack and proefles are obvious before they bounce to another school.'
      },
      {
        title: 'Parents and learners both spoken to',
        desc: 'Seventeen-to-twenty-five-year-olds discover on Instagram and TikTok; parents often pay and dig into reviews. Messaging covers both decision-makers without talking down to either.'
      },
      {
        title: 'Local and paid working together',
        desc: '“Driving school [city]” and lesson-price intent need Maps and ads in the same catchment — one team that already knows how comparison sites compete for that click.'
      }
    ],
    ctaHeading: 'Ready for a fuller lesson calendar in your town?',
    ctaSub:
      'Tell us which licences you teach, which towns you cover, and how students find you today. We will sketch how website, local search and Google Ads bring enrolments before peak comparison traffic goes elsewhere.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Rijscholen',
    badge: 'Rijschoolmarketing',
    h1: 'Online marketing voor rijscholen',
    heroSub:
      'Wij helpen rijscholen hun lessenagenda te vullen met nieuwe leerlingen — meer inschrijvingen van leerlingen in de buurt die je slagingspercentage, pakketten en proefles al vertrouwen. Met 1.500+ afgeronde projecten weten we hoe lokaal zoeken en helder CBR-bewijs uitgroeien tot inschrijvingen vóór een vergelijkingssite hen elders stuurt.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor rijscholen',
    servicesSub:
      'Werk rond een jonge, prijs- en reviewgevoelige doelgroep (en ouders die vaak researchen en betalen): een site die slagingspercentages, pakketten en proefles toont, lokale vindbaarheid op “rijschool [stad]”, en Google Ads die high-intent leszoeken vangen — geen salonstoelkalender en geen fotografenportfolio. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom rijscholen voor ons kiezen',
    whySub:
      'Leerlingen en ouders shortlisten op slagingspercentage, reviews, prijs/pakketten, proefles en ophaalservice — niet op een mooi logo alleen. Wij marketen continue lokale instroom tegen vergelijkingssites zonder andere brancheplaybooks te hergebruiken.',
    whyItems: [
      {
        title: 'Slagingspercentage als hard vertrouwen',
        desc: 'CBR-cijfers en leerlingreviews staan waar ouders eerst scannen — het signaal dat een vaag “vriendelijke instructeurs”-claim op een vergelijkingslisting verslaat.'
      },
      {
        title: 'Pakketten en proefles voorop',
        desc: 'Jonge bestuurders vergelijken prijsbanden en willen een lage-frictie proefles. We structureren paden zodat pakket en proefles duidelijk zijn vóór ze naar een andere school bouncen.'
      },
      {
        title: 'Ouders en leerlingen allebei aangesproken',
        desc: 'Zeventien- tot vijfentwintigjarigen ontdekken op Instagram en TikTok; ouders betalen vaak en graven in reviews. Boodschappen dekken beide beslissers zonder neerbuigend te klinken.'
      },
      {
        title: 'Lokaal en betaald samen',
        desc: '“Rijschool [stad]” en lesprijs-intentie vragen Maps en ads in hetzelfde catchment — één team dat al weet hoe vergelijkingssites om die klik concurreren.'
      }
    ],
    ctaHeading: 'Klaar voor een vollere lessenagenda in jouw stad?',
    ctaSub:
      'Vertel welke rijbewijzen je geeft, welke plaatsen je dekt, en hoe leerlingen je vandaag vinden. We schetsen hoe website, lokaal zoeken en Google Ads inschrijvingen brengen vóór piekvergelijkingsverkeer elders landt.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Rijscholen() {
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
              <CarFront className="w-4 h-4" aria-hidden />
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
                industrySlug="rijscholen"
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
