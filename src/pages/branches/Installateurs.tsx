import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  Sparkles,
  Wrench
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.installateurs
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Plumbers, electricians & installers',
    badge: 'Installer marketing',
    h1: 'Online marketing for plumbers, electricians & installers',
    heroSub:
      'We help plumbers, electricians and installers win more service calls and installation jobs online — through a clear website, local findability and campaigns that reach homeowners when heat fails, power trips or a heat pump is on the shopping list. With 1,500+ completed projects, we know what works between the van and Google.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for installers',
    servicesSub:
      'Work shaped around emergency reachability, installation enquiries and trade + city searches — not renovation portfolios or salon booking flows. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why installers choose us',
    whySub:
      'Installation work is urgent, local and phone-first. We plan around how homeowners call a plumber at night or shortlist who installs their heat pump.',
    whyItems: [
      {
        title: 'Call-out aware marketing',
        desc: 'We speak leak, outage and install language: boilers, fuse boards, heat pumps, solar — not kitchen extensions or dinner covers.'
      },
      {
        title: 'Catchment that matches the van',
        desc: 'Homeowners search by trade and town when something breaks. We tune Google Business Profile and regional pages for that radius.'
      },
      {
        title: 'Speed-to-contact focus',
        desc: 'We steer on phone taps and installation quote forms that answer fast — because a cold house does not wait for a brochure download.'
      },
      {
        title: 'One partner from Maps to the van',
        desc: 'Call-ready site, local SEO and later ads share one brief — so your emergency number and install offers look as sharp in search as on the door.'
      }
    ],
    ctaHeading: 'Ready for more service calls and install enquiries?',
    ctaSub:
      'Tell us your trades, whether you take night call-outs and the towns you cover. We will sketch how homeowners find a plumber or electrician before they dial the next van.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Loodgieters, elektriciens & installateurs',
    badge: 'Installateursmarketing',
    h1: 'Online marketing voor loodgieters, elektriciens & installateurs',
    heroSub:
      'Wij helpen loodgieters, elektriciens en installateurs meer service-ritten en installatieklussen online binnen te halen — via een duidelijke website, lokale vindbaarheid en campagnes die huiseigenaren bereiken wanneer de cv uitvalt, de stroom eruit ligt of een warmtepomp op de lijst staat. Met 1.500+ afgeronde projecten weten we wat werkt tussen de bus en Google.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor installateurs',
    servicesSub:
      'Werk rond spoedbereikbaarheid, installatieaanvragen en vak + stad-zoekopdrachten — geen verbouwportfolio’s of salonboekflows. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom installateurs voor ons kiezen',
    whySub:
      'Installatiewerk is spoedgevoelig, lokaal en telefoon-eerst. Wij plannen rond hoe huiseigenaren ’s nachts een loodgieter bellen of shortlisten wie hun warmtepomp plaatst.',
    whyItems: [
      {
        title: 'Spoedbewuste marketing',
        desc: 'We spreken lekkage-, storing- en installatietaal: cv’s, groepenkasten, warmtepompen, zonnepanelen — geen keukenuitbouwen of dinercovers.'
      },
      {
        title: 'Werkgebied dat bij de bus past',
        desc: 'Huiseigenaren zoeken op vak en plaats als iets stuk is. We stemmen Google Bedrijfsprofiel en regiopagina’s af op die straal.'
      },
      {
        title: 'Focus op snel contact',
        desc: 'We sturen op beltiks en installatie-offerteforms die snel antwoorden — een koud huis wacht niet op een brochure-download.'
      },
      {
        title: 'Één partner van Maps tot de bus',
        desc: 'Belklare site, lokale SEO en later ads delen één briefing — zodat je spoednummer en installatie-aanbod even scherp oogt in zoeken als op de deur.'
      }
    ],
    ctaHeading: 'Klaar voor meer service-ritten en installatieaanvragen?',
    ctaSub:
      'Vertel je vakken, of je nachtritten doet en welke gemeenten je bedient. We schetsen hoe huiseigenaren een loodgieter of elektricien vinden vóór ze het volgende busje bellen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Installateurs() {
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
              <Wrench className="w-4 h-4" aria-hidden />
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
                industrySlug="installateurs"
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
