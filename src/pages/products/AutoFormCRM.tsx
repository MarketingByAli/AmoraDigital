import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Sparkles, Code2, Users, BarChart3, Mail, Zap, MessageSquare,
  Bell, Database, Settings
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbProducts: 'Products', crumbCurrent: 'Auto Form CRM',
    badge: 'Coming Soon - Under Development',
    headPre: 'CRM Made Simple, ', headHighlight: 'Built for WordPress',
    sub: "We're building Auto Form CRM\u2014a powerful customer relationship management plugin designed specifically for WordPress. Manage leads, track interactions, and grow your business without leaving your WordPress dashboard.",
    statusTitle: 'In Development', statusSub: 'Building something amazing for you',
    buildSection: { badge: "What We're Building", headPre: 'WordPress CRM ', headHighlight: 'Done Right', sub: 'Auto Form CRM will bring enterprise-level customer relationship management features directly into WordPress, making it easy to manage and grow your business.' },
    features: [
      { title: 'Contact Management', description: 'Centralized database to manage all your leads and customers in one place.' },
      { title: 'Lead Tracking', description: 'Track every interaction and monitor your sales pipeline from first contact to close.' },
      { title: 'Email Integration', description: 'Send and track emails directly from WordPress. Never miss a follow-up.' },
      { title: 'Activity Timeline', description: 'Complete history of all customer interactions, notes, and communications.' },
      { title: 'Smart Notifications', description: 'Automated reminders for follow-ups, tasks, and important customer milestones.' },
      { title: 'Auto Form Integration', description: 'Seamless integration with Auto Form Builder to capture and manage leads automatically.' }
    ],
    whySection: { badge: "Why We're Building This", headPre: 'CRM Without the ', headHighlight: 'Complexity', p1: "Most CRM solutions are either too expensive, too complicated, or require you to leave WordPress. We're building Auto Form CRM to solve these problems\u2014giving you powerful CRM features right inside your WordPress dashboard.", p2: 'Perfect for small businesses, agencies, and entrepreneurs who want to manage customer relationships without the hassle of external tools and monthly subscriptions.' },
    benefitsCard: "What You'll Get",
    benefits: [
      'Manage customer relationships directly in WordPress',
      'No monthly fees for basic CRM features',
      'Seamless integration with Auto Form Builder',
      'Track leads from submission to conversion',
      'Built with WordPress best practices',
      'GDPR compliant data management'
    ],
    timeline: { heading: 'Crafted with Care', sub: "We're taking our time to build Auto Form CRM the right way\u2014following WordPress best practices, ensuring top-notch security, and creating an intuitive user experience. Quality takes time, and we're committed to delivering a CRM solution you'll love.", status: 'Development in Progress' },
    cta: {
      heading: 'Need a Custom CRM Solution Now?',
      sub: "Can't wait for Auto Form CRM? We can build a custom CRM solution tailored to your specific business needs today. From simple lead tracking to complex customer management systems\u2014we've got you covered.",
      btn1: 'Build Custom CRM Solution', btn2: 'View CRM Services',
      footnote: 'We specialize in custom WordPress development and CRM integrations'
    },
    quick: { heading: 'Interested in Auto Form CRM?', sub: "Let's discuss your CRM needs and find the perfect solution.", contact: 'Contact Us' }
  },
  nl: {
    crumbHome: 'Home', crumbProducts: 'Producten', crumbCurrent: 'Auto Form CRM',
    badge: 'Binnenkort beschikbaar \u2013 in ontwikkeling',
    headPre: 'CRM eenvoudig gemaakt, ', headHighlight: 'gebouwd voor WordPress',
    sub: 'We bouwen Auto Form CRM \u2014 een krachtige CRM-plugin speciaal voor WordPress. Beheer leads, volg interacties en laat je bedrijf groeien zonder je WordPress-dashboard te verlaten.',
    statusTitle: 'In ontwikkeling', statusSub: 'We bouwen iets fantastisch voor jou',
    buildSection: { badge: 'Wat we bouwen', headPre: 'WordPress-CRM ', headHighlight: 'goed gedaan', sub: 'Auto Form CRM brengt enterprise-grade CRM-functionaliteit direct in WordPress, waardoor je je business eenvoudig kunt beheren en laten groeien.' },
    features: [
      { title: 'Contactbeheer', description: 'Gecentraliseerde database om al je leads en klanten op één plek te beheren.' },
      { title: 'Lead-tracking', description: 'Volg elke interactie en monitor je sales-pipeline van eerste contact tot afsluiting.' },
      { title: 'E-mail-integratie', description: "E-mails versturen en tracken direct vanuit WordPress. Mis nooit een follow-up." },
      { title: 'Activiteiten-tijdlijn', description: 'Volledige historie van alle klantinteracties, notities en communicatie.' },
      { title: 'Slimme notificaties', description: 'Geautomatiseerde reminders voor follow-ups, taken en belangrijke klant-mijlpalen.' },
      { title: 'Auto Form-integratie', description: 'Naadloze integratie met Auto Form Builder om leads automatisch te vangen en te beheren.' }
    ],
    whySection: { badge: 'Waarom wij dit bouwen', headPre: 'CRM zonder de ', headHighlight: 'complexiteit', p1: "De meeste CRM's zijn óf te duur, óf te ingewikkeld, óf vereisen dat je WordPress verlaat. Auto Form CRM lost dit op door krachtige CRM-features direct in je WordPress-dashboard te bieden.", p2: 'Perfect voor kleine bedrijven, agencies en ondernemers die klantrelaties willen beheren zonder gedoe met externe tools en maandelijkse abonnementen.' },
    benefitsCard: 'Wat je krijgt',
    benefits: [
      'Beheer klantrelaties direct in WordPress',
      'Geen maandelijkse kosten voor basis-CRM-functies',
      'Naadloze integratie met Auto Form Builder',
      'Volg leads van inzending tot conversie',
      'Gebouwd volgens WordPress-best-practices',
      'AVG-conform databeheer'
    ],
    timeline: { heading: 'Met zorg gemaakt', sub: "We nemen de tijd om Auto Form CRM goed te bouwen \u2014 volgens WordPress-best-practices, met topsecurity en een intuïtieve gebruikerservaring. Kwaliteit kost tijd, en we zijn vastberaden om een CRM te leveren waar je écht blij van wordt.", status: 'Ontwikkeling loopt' },
    cta: {
      heading: 'Direct een CRM-oplossing op maat nodig?',
      sub: 'Wacht je niet op Auto Form CRM? Wij kunnen vandaag al een CRM bouwen die aansluit bij jouw specifieke business. Van simpele lead-tracking tot complexe customer-management-systemen \u2014 wij regelen het.',
      btn1: 'Bouw een CRM op maat', btn2: 'Bekijk CRM-diensten',
      footnote: 'Wij zijn gespecialiseerd in maatwerk WordPress-development en CRM-integraties'
    },
    quick: { heading: 'Interesse in Auto Form CRM?', sub: 'Laten we je CRM-behoeften bespreken en de perfecte oplossing vinden.', contact: 'Contact' }
  }
} as const

const FEATURE_ICONS = [Users, BarChart3, Mail, MessageSquare, Bell, Database]

export default function AutoFormCRM() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
              <Link to={ROUTES.home[locale]} className="text-white/60 hover:text-white transition-colors">{t.crumbHome}</Link>
              <span className="text-white/40" aria-hidden>/</span>
              <span className="text-white/60">{t.crumbProducts}</span>
              <span className="text-white/40" aria-hidden>/</span>
              <span className="text-white">{t.crumbCurrent}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" aria-hidden />
              <span>{t.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.headPre}<span className="text-rose-200">{t.headHighlight}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto">{t.sub}</p>

            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-yellow-400 animate-ping" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">{t.statusTitle}</div>
                <div className="text-xs text-white/70">{t.statusSub}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" aria-hidden />
              <span>{t.buildSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.buildSection.headPre}<span className="gradient-text">{t.buildSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.buildSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div key={feature.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" aria-hidden />
                <span>{t.whySection.badge}</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                {t.whySection.headPre}<span className="gradient-text">{t.whySection.headHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">{t.whySection.p1}</p>
              <p className="text-lg text-slate-600 mb-8">{t.whySection.p2}</p>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{t.benefitsCard}</h3>
                <ul className="space-y-4">
                  {t.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" aria-hidden />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Settings className="w-16 h-16 text-rose-400 mx-auto mb-6 animate-spin" style={{ animationDuration: '3s' }} aria-hidden />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t.timeline.heading}</h2>
            <p className="text-lg text-white/80 mb-8">{t.timeline.sub}</p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">{t.timeline.status}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t.cta.heading}</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">{t.cta.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to={ROUTES.contact[locale]} className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-rose-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.cta.btn1}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </Link>
                <Link to={ROUTES['crm-solutions'][locale]} className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.cta.btn2}
                </Link>
              </div>

              <p className="text-sm text-white/70">{t.cta.footnote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">{t.quick.heading}</h3>
              <p className="text-slate-400">{t.quick.sub}</p>
            </div>
            <div className="flex items-center gap-4">
              <Link to={ROUTES.contact[locale]} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors">
                <Mail className="w-4 h-4" aria-hidden />
                {t.quick.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
