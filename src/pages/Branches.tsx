import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Building2, Sparkles } from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../i18n/routes'
import { BRANCH_INDUSTRIES, isLiveBranchHub } from '../data/branches'
import BranchHubCard from '../components/BranchHubCard'

const T = {
  en: {
    crumbHome: 'Home',
    crumbCurrent: 'Industries',
    badge: 'Industry hubs',
    h1: 'Online marketing by industry',
    intro:
      'Amora Digital builds websites and delivers SEO and online marketing tailored to specific industries. We speak your customers\u2019 language and target the search terms that matter. With 1,500+ completed projects, we know what works in practice.',
    gridBadge: 'Choose your industry',
    gridHead: 'Marketing that fits your sector',
    gridSub:
      'Open your industry hub to see how we use websites, SEO and campaigns to generate more enquiries.',
    viewIndustry: 'View industry',
    comingSoon: 'Coming soon',
    ctaHeading: 'Ready to grow in your industry?',
    ctaSub:
      'Tell us about your business. We are happy to advise on websites, SEO and online marketing that fit your sector.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbCurrent: 'Branches',
    badge: 'Branchehubs',
    h1: 'Online marketing per branche',
    intro:
      'Amora Digital bouwt websites en verzorgt SEO en online marketing gericht op specifieke branches. Zo spreken we de taal van jouw klanten en scoren we op zoektermen die ertoe doen. Met 1.500+ afgeronde projecten weten we wat werkt in de praktijk.',
    gridBadge: 'Kies jouw branche',
    gridHead: 'Marketing die past bij jouw sector',
    gridSub:
      'Bekijk de hub voor jouw branche en ontdek hoe we websites, SEO en campagnes inzetten voor meer aanvragen.',
    viewIndustry: 'Bekijk branche',
    comingSoon: 'Binnenkort',
    ctaHeading: 'Klaar om te groeien in jouw branche?',
    ctaSub:
      'Vertel ons over je bedrijf. We denken graag mee over websites, SEO en online marketing die bij jouw sector passen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Branches() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  const industries = useMemo(
    () =>
      [...BRANCH_INDUSTRIES].sort((a, b) => {
        const aLive = isLiveBranchHub(a.slug) ? 0 : 1
        const bLive = isLiveBranchHub(b.slug) ? 0 : 1
        return aLive - bLive
      }),
    []
  )

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
              <Link to={ROUTES.home[locale]} className="text-white/60 hover:text-white transition-colors">
                {t.crumbHome}
              </Link>
              <span className="text-white/40" aria-hidden>/</span>
              <span className="text-white">{t.crumbCurrent}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" aria-hidden />
              <span>{t.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.h1}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">{t.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" aria-hidden />
              <span>{t.gridBadge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">{t.gridHead}</h2>
            <p className="section-subheading mx-auto">{t.gridSub}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry) => (
              <BranchHubCard
                key={industry.slug}
                industry={industry}
                locale={locale}
                ctaLabel={t.viewIndustry}
                comingSoonLabel={t.comingSoon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
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
