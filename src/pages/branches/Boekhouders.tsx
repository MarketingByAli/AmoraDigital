import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  Sparkles
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.boekhouders
const SPOKE_ICONS = [Globe, MapPin, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Accountants & bookkeepers',
    badge: 'Accounting firm marketing',
    h1: 'Online marketing for accountants & bookkeepers',
    heroSub:
      'We help accounting and bookkeeping firms attract more of the right clients — freelancers and SMEs you want to keep for years — with a clear online presence, local findability and campaigns timed around tax and annual accounts seasons. With 1,500+ completed projects, we know what builds trust before someone switches bookkeeper.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for accountants and bookkeepers',
    servicesSub:
      'Work shaped around ongoing client relationships, branch niches and software stack — not one-off emergency jobs or courtroom urgency. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why accounting firms choose us',
    whySub:
      'Accountancy buyers choose who will handle their books for years. We plan around trust, reliability and niche fit — not how someone books a salon or shortlists counsel after a dispute.',
    whyItems: [
      {
        title: 'Relationship-value over lead volume',
        desc: 'Each new client often stays for years, so we design for quality fits — zzp, mkb, hospitality or e-commerce niches — not anonymous form spam that wastes onboarding time.'
      },
      {
        title: 'Trust and reliability on the surface',
        desc: 'Tone, team faces and service clarity signal a steady practice someone can hand their VAT and payroll to — calm proof, not flashy “get rich” ads.'
      },
      {
        title: 'Software and niche clarity',
        desc: 'We surface Exact, Twinfield, Moneybird and sector specialisms so the right entrepreneur self-selects before the first intake call.'
      },
      {
        title: 'Season-aware findability',
        desc: 'Website, local SEO and later ads share one brief around aangifte and jaarrekening peaks — so you are findable when freelancers actually switch.'
      }
    ],
    ctaHeading: 'Ready for clients who stay on your books?',
    ctaSub:
      'Tell us who you serve best — zzp, mkb, a sector niche — and which software you run. We will sketch how the right entrepreneurs find you before they pick the next bookkeeper.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Boekhouders & accountants',
    badge: 'Marketing voor accountantskantoren',
    h1: 'Online marketing voor boekhouders & accountants',
    heroSub:
      'Wij helpen boekhoud- en accountantskantoren meer van de juiste klanten aantrekken — zzp’ers en mkb’ers die je jaren wilt houden — met een duidelijke online aanwezigheid, lokale vindbaarheid en campagnes rond aangifte- en jaarrekeningperiodes. Met 1.500+ afgeronde projecten weten we wat vertrouwen wekt vóór iemand van boekhouder wisselt.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor boekhouders en accountants',
    servicesSub:
      'Werk rond lopende klantrelaties, branchespecialisaties en softwarestack — geen eenmalige spoedklus of rechtszaalurgentie. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom accountantskantoren voor ons kiezen',
    whySub:
      'Accountancykopers kiezen wie jarenlang hun cijfers beheert. Wij plannen rond vertrouwen, betrouwbaarheid en nichefit — niet hoe iemand een salon boekt of na een conflict een advocaat shortlist.',
    whyItems: [
      {
        title: 'Relatiewaarde boven leadvolume',
        desc: 'Elke nieuwe klant blijft vaak jaren, dus we ontwerpen voor kwaliteitfits — zzp, mkb, horeca of e-commerce — geen anonieme formulierspam die onboardingtijd verspilt.'
      },
      {
        title: 'Vertrouwen en betrouwbaarheid vooraan',
        desc: 'Toon, gezichten van het team en dienstenhelderheid signaleren een stabiele praktijk waaraan iemand btw en loon kan toevertrouwen — rustig bewijs, geen flashy “snel rijk”-ads.'
      },
      {
        title: 'Software- en nichehelderheid',
        desc: 'We zetten Exact, Twinfield, Moneybird en sectorspecialismen zichtbaar, zodat de juiste ondernemer zichzelf selecteert vóór het eerste intakegesprek.'
      },
      {
        title: 'Seizoensbewuste vindbaarheid',
        desc: 'Website, lokale SEO en later ads delen één briefing rond aangifte- en jaarrekeningpieken — zodat je vindbaar bent wanneer freelancers écht wisselen.'
      }
    ],
    ctaHeading: 'Klaar voor klanten die op je boeken blijven?',
    ctaSub:
      'Vertel wie je het beste bedient — zzp, mkb, een brancheniche — en welke software je draait. We schetsen hoe de juiste ondernemers je vinden vóór ze de volgende boekhouder kiezen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Boekhouders() {
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
              <Calculator className="w-4 h-4" aria-hidden />
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
                industrySlug="boekhouders"
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
