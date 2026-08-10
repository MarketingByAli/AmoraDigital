import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  Sparkles,
  Users
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.uitzendbureaus
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Staffing agencies',
    badge: 'Staffing marketing',
    h1: 'Online marketing for staffing agencies',
    heroSub:
      'We help staffing agencies attract both sides of the market — candidates who want to apply fast, and client companies that need flexible talent. With 1,500+ completed projects, we know how vacancy SEO, sector paths and clear employer leads fill desks before a rival bureau wins the next placement.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for staffing agencies',
    servicesSub:
      'Work shaped around a two-sided marketplace: vacancy-driven candidate inflow and B2B employer acquisition — not a single-audience clinic funnel and not a restaurant reservation playbook. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why staffing agencies choose us',
    whySub:
      'Uitzendbureaus sell placements to two audiences at once. We market candidates and employers without collapsing them into one confused homepage.',
    whyItems: [
      {
        title: 'Two audiences, one clear brand',
        desc: 'Job seekers get fast apply paths; employers get sector expertise and hire requests — each journey stays distinct on the same site.'
      },
      {
        title: 'Vacancy-led candidate inflow',
        desc: 'Filtered job boards and JobPosting-ready structure turn “vacancies [sector] [town]” searches into applications, not dead brochure pages.'
      },
      {
        title: 'Sector and region as doorways',
        desc: 'Techniek, logistics, care, hospitality, admin or international talent each get paths — so specialists find you, not a generic staffing blob.'
      },
      {
        title: 'Employer leads beside candidate SEO',
        desc: 'B2B hire-intent pages sit next to vacancy discovery — flexschil demand and candidate volume grow as two engines, not one afterthought.'
      }
    ],
    ctaHeading: 'Ready for more applications and more employer briefs?',
    ctaSub:
      'Tell us which sectors you cover, how vacancies are published today, and how client companies find you. We will sketch how website, local search and Google Ads feed both sides of the desk before another bureau wins the placement.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Uitzendbureaus',
    badge: 'Uitzendmarketing',
    h1: 'Online marketing voor uitzendbureaus',
    heroSub:
      'Wij helpen uitzendbureaus beide kanten van de markt aantrekken — kandidaten die snel willen solliciteren, en opdrachtgevers die flexibel talent nodig hebben. Met 1.500+ afgeronde projecten weten we hoe vacature-SEO, sectorpaden en heldere werkgeversleads bureaus vullen vóór een concurrent de volgende plaatsing wint.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor uitzendbureaus',
    servicesSub:
      'Werk rond een tweezijdige markt: vacaturegedreven kandidaatinstroom en B2B-opdrachtgeversacquisitie — geen enkelvoudige kliniekfunnel en geen restaurantreserveringsplaybook. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom uitzendbureaus voor ons kiezen',
    whySub:
      'Uitzendbureaus verkopen plaatsingen aan twee doelgroepen tegelijk. Wij marketen kandidaten én opdrachtgevers zonder ze tot één verwarrende homepage te maken.',
    whyItems: [
      {
        title: 'Twee doelgroepen, één helder merk',
        desc: 'Werkzoekenden krijgen snelle solliciteerpaden; opdrachtgevers krijgen sectorexpertise en inhuurverzoeken — elke journey blijft apart op dezelfde site.'
      },
      {
        title: 'Vacaturegedreven kandidaatinstroom',
        desc: 'Gefilterde vacatureborden en JobPosting-klare structuur maken van “vacatures [sector] [plaats]”-zoeken sollicitaties, geen dode brochurepagina’s.'
      },
      {
        title: 'Sector en regio als ingangen',
        desc: 'Techniek, logistiek, zorg, horeca, administratief of internationaal talent krijgen elk paden — zodat specialisten jou vinden, geen generieke uitzendblob.'
      },
      {
        title: 'Opdrachtgeversleads naast kandidaat-SEO',
        desc: 'B2B-inhuurintentiepagina’s staan naast vacatureontdekking — flexschilvraag en kandidatenvolume groeien als twee motoren, geen bijzaak.'
      }
    ],
    ctaHeading: 'Klaar voor meer sollicitaties en meer opdrachtgeverbriefs?',
    ctaSub:
      'Vertel welke sectoren je dekt, hoe vacatures vandaag online staan, en hoe opdrachtgevers je vinden. We schetsen hoe website, lokaal zoeken en Google Ads beide kanten van het bureau voeden vóór een ander bureau de plaatsing wint.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Uitzendbureaus() {
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
              <Users className="w-4 h-4" aria-hidden />
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
                industrySlug="uitzendbureaus"
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
