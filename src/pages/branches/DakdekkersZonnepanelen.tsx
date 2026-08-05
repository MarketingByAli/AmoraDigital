import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  Sparkles,
  Sun
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES['dakdekkers-zonnepanelen']
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Roofers & solar',
    badge: 'Roofing & solar marketing',
    h1: 'Online marketing for roofers & solar installers',
    heroSub:
      'We help roofers and solar installers win more high-value jobs and quote requests — roof renewals, leak repairs, insulation and panel systems homeowners treat as a major investment. With 1,500+ completed projects, we know how warranties, certifications and regional findability turn into dated quotes before a storm or subsidy window sends demand elsewhere.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for roofers & solar installers',
    servicesSub:
      'Work shaped around high-ticket roof and solar quotes, trust signals and subsidy-aware solar search — not a broad plumber call-out funnel and not a contractor kitchen renovation playbook. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why roofers and solar installers choose us',
    whySub:
      'Roof and solar work sells on trust, guarantees and return framing. We market dak + zon investment decisions without recycling a broad installer or builder playbook.',
    whyItems: [
      {
        title: 'Trust before the large cheque',
        desc: 'Warranties, recognised installer marks and homeowner reviews sit where people scan before they request a roof or panel quote.'
      },
      {
        title: 'Roof work and solar as two intents',
        desc: 'Leak and storm urgency differs from planned renovations and verduurzaming. Messaging covers emergency dakwerk and investment-led solar without mixing them into one vague “energy services” blob.'
      },
      {
        title: 'Subsidy and payback language for solar',
        desc: 'Homeowners search return periods, netting rules and savings — we frame findability and content around that investment conversation, not only a call-now button.'
      },
      {
        title: 'Regional catchment for high-ticket jobs',
        desc: 'Clients search roofer or solar installer plus town. We tune visibility for the radius you actually cover for both dak and zon projects.'
      }
    ],
    ctaHeading: 'Ready for more roof and solar quotes from your region?',
    ctaSub:
      'Tell us whether you focus on dakwerk, zonnepanelen or both, which towns you cover, and how clients find you today. We will sketch how website, local search and Google Ads bring high-value quotes before storm season or subsidy interest goes elsewhere.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Dakdekkers & zonnepanelen',
    badge: 'Dak- & zonmarketing',
    h1: 'Online marketing voor dakdekkers & zonnepanelen-installateurs',
    heroSub:
      'Wij helpen dakdekkers en zonnepanelen-installateurs meer high-value klussen en offerteaanvragen binnen te halen — dakvernieuwingen, lekkagereparaties, isolatie en panelsystemen die huiseigenaren als grote investering zien. Met 1.500+ afgeronde projecten weten we hoe garanties, certificeringen en regionale vindbaarheid uitgroeien tot gedateerde offertes vóór een storm of subsidievenster vraag elders stuurt.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor dakdekkers & zonnepanelen-installateurs',
    servicesSub:
      'Werk rond high-ticket dak- en zonoffertes, vertrouwenssignalen en subsidiebewust zonnezoeken — geen brede loodgieter-spoedtrechter en geen aannemers-keukenrenovatieplaybook. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom dakdekkers en zon-installateurs voor ons kiezen',
    whySub:
      'Dak- en zonwerk verkopen op vertrouwen, garanties en terugverdienframing. Wij marketen dak + zon investeringsbeslissingen zonder een breed installateurs- of aannemersplaybook te hergebruiken.',
    whyItems: [
      {
        title: 'Vertrouwen vóór de grote cheque',
        desc: 'Garanties, erkenningen en reviews van huiseigenaren staan waar mensen scannen vóór ze een dak- of paneelofferte vragen.'
      },
      {
        title: 'Dakwerk en zon als twee intenties',
        desc: 'Lekkage- en stormurgentie verschilt van geplande renovatie en verduurzaming. Boodschappen dekken spoed-dakwerk en investeringsgedreven zon zonder ze tot één vage “energiediensten”-blob te mengen.'
      },
      {
        title: 'Subsidie- en terugverdientaal voor zon',
        desc: 'Huiseigenaren zoeken terugverdientijd, saldering en besparing — we framen vindbaarheid en content rond dat investeringsgesprek, niet alleen een bel-nu-knop.'
      },
      {
        title: 'Regionaal werkgebied voor high-ticket klussen',
        desc: 'Klanten zoeken dakdekker of zonnepanelen-installateur plus plaats. We stemmen zichtbaarheid af op de straal die je écht dekt voor zowel dak- als zonprojecten.'
      }
    ],
    ctaHeading: 'Klaar voor meer dak- en zonoffertes uit jouw regio?',
    ctaSub:
      'Vertel of je focust op dakwerk, zonnepanelen of beide, welke plaatsen je dekt, en hoe klanten je vandaag vinden. We schetsen hoe website, lokaal zoeken en Google Ads high-value offertes brengen vóór stormseizoen of subsidie-interesse elders landt.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function DakdekkersZonnepanelen() {
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
              <Sun className="w-4 h-4" aria-hidden />
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
                industrySlug="dakdekkers-zonnepanelen"
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
