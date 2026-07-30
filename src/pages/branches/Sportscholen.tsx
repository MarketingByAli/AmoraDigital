import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  Globe,
  MapPin,
  Megaphone,
  Sparkles
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.sportscholen
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Gyms & personal trainers',
    badge: 'Fitness marketing',
    h1: 'Online marketing for gyms & personal trainers',
    heroSub:
      'We help gyms and trainers fill memberships and coaching spots — more sign-ups and fewer empty slots — with a clear online presence, local findability and social proof that matches how people choose a club or coach. With 1,500+ completed projects, we know what builds confidence before someone books a trial or intake.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for gyms and personal trainers',
    servicesSub:
      'Work shaped around two buyer types: clubs filling memberships and group classes, and trainers growing a personal brand with 1-on-1 or small-group coaching — not workshop APK urgency or catalogue checkout. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why fitness businesses choose us',
    whySub:
      'People join where they feel community and proof, then churn when motivation fades. We plan around trial conversion, seasonal peaks and retention signals — not how someone books a salon cut or shortlists an accountant.',
    whyItems: [
      {
        title: 'Club floor and coach brand together',
        desc: 'Subscription offers, group-class calendars and trial flows sit next to personal-trainer positioning, transformation stories and online coaching — each buyer type gets its own clear path.'
      },
      {
        title: 'Proof that beats empty promises',
        desc: 'Before-after stories, member energy and clear intake paths reduce “will this work for me?” hesitation before someone commits to a membership or package.'
      },
      {
        title: 'Local search plus social weight',
        desc: 'Maps and “gym [city]” still matter, yet Instagram and short video carry community and transformation proof that search alone rarely shows.'
      },
      {
        title: 'Retention beside acquisition',
        desc: 'January resolutions and summer-body spikes fill diaries; we also plan content and journeys that keep members showing up after the first rush fades.'
      }
    ],
    ctaHeading: 'Ready for fuller memberships and booked coaching slots?',
    ctaSub:
      'Share whether you run a club, a PT practice or both, plus the cities you cover. Together we map how locals discover trials, classes and coaching before they choose another gym.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Sportscholen & personal trainers',
    badge: 'Fitnessmarketing',
    h1: 'Online marketing voor sportscholen & personal trainers',
    heroSub:
      'Wij helpen sportscholen en trainers om abonnementen en coachingplekken te vullen — meer inschrijvingen en minder lege slots — met een duidelijke online aanwezigheid, lokale vindbaarheid en social proof die aansluit bij hoe mensen een club of coach kiezen. Die aanpak steunt op 1.500+ afgeronde projecten: we weten wat iemand overtuigt vóór een proefles of coachingintake.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor sportscholen en personal trainers',
    servicesSub:
      'Werk rond twee kopers: clubs die leden en groepslessen vullen, en trainers die een persoonlijk merk bouwen met 1-op-1 of small-group coaching — geen werkplaats-APK of cataloguscheckout. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom fitnessbedrijven voor ons kiezen',
    whySub:
      'Mensen kiezen waar community en bewijs voelbaar zijn, en zeggen op wanneer motivatie wegzakt. Wij plannen rond proeflesconversie, seizoenspieken en retentiesignalen — niet hoe iemand een knipbeurt boekt of een boekhouder shortlist.',
    whyItems: [
      {
        title: 'Clubvloer en coachmerk naast elkaar',
        desc: 'Abonnementsaanbod, groepsleskalenders en proeflesflows staan naast personal-trainerpositionering, transformatieverhalen en online coaching — elk type koper krijgt een eigen helder pad.'
      },
      {
        title: 'Bewijs dat holle beloftes verslaat',
        desc: 'Before-after verhalen, ledenenergie en heldere intakepaden verminderen de twijfel “werkt dit voor mij?” vóór iemand zich vastlegt op een abonnement of pakket.'
      },
      {
        title: 'Lokaal zoeken plus social gewicht',
        desc: 'Maps en “sportschool [stad]” blijven tellen, maar Instagram en korte video dragen community- en transformatiebewijs dat zoeken alleen zelden toont.'
      },
      {
        title: 'Retentie naast werving',
        desc: 'Goede voornemens in januari en summer-body pieken vullen agenda’s; we plannen ook content en journeys die leden laten blijven komen nadat de eerste rush wegzakt.'
      }
    ],
    ctaHeading: 'Klaar voor vollere abonnementen en geboekte coachingplekken?',
    ctaSub:
      'Deel of je een club runt, een PT-praktijk of beide, plus de steden die je dekt. Samen zetten we uit hoe locals proeflessen, lessen en coaching ontdekken vóór ze een andere sportschool kiezen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Sportscholen() {
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
              <Dumbbell className="w-4 h-4" aria-hidden />
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
                industrySlug="sportscholen"
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
