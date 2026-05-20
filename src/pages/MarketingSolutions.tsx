import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../components/LeadForm'
import {
  ArrowRight,
  Globe,
  Users,
  Megaphone,
  Target,
  Search,
  Sparkles,
  MapPin,
  Mail,
  TrendingUp,
  Palette,
  CheckCircle2,
  Zap,
  BarChart3,
  MousePointerClick,
  Phone
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale, type RouteKey } from '../i18n/routes'

const T = {
  en: {
    breadcrumb: 'Marketing',
    heroBadge: 'Marketing Solutions',
    headPre: 'Marketing That ',
    headHighlight: 'Drives Results',
    heroSub:
      'Comprehensive digital marketing services designed to generate leads, increase conversions, and grow your business. Data-driven strategies that deliver measurable ROI.',
    ctaPrimary: 'Get Free Marketing Audit',
    ctaSecondary: 'Explore Services',
    stats: [
      { value: '1500+', label: 'Campaigns Launched' },
      { value: '10M+', label: 'Leads Generated' },
      { value: '150%', label: 'Avg. ROI' }
    ],
    dashboard: {
      title: 'Marketing Analytics',
      subtitle: 'Real-time performance',
      traffic: 'Website Traffic',
      conv: 'Lead Conversion',
      rev: 'Revenue Growth'
    },
    floats: { seo: 'SEO', paid: 'Paid Ads', social: 'Social Media', email: 'Email', web: 'Web Design', ai: 'AI SEO' },
    badges: { leads: '+52 Leads Today', roi: 'ROI: 10.5x' },
    trust: { data: 'Data-Driven Strategies', conv: 'Conversion Focused', meas: 'Measurable Results' },
    services: {
      badge: 'Our Services',
      headPre: 'Complete Marketing ',
      headHighlight: 'Solutions',
      sub: 'Everything you need to dominate your market and generate qualified leads consistently.',
      learnMore: 'Learn more'
    },
    why: {
      headPre: 'Why Choose ',
      headHighlight: 'Amora Digital',
      sub: 'We\u2019re not just another marketing agency. We\u2019re your growth partner.',
      items: [
        { title: 'Data-Driven', desc: 'Every decision backed by analytics. No guesswork, just results that you can measure and track.' },
        { title: 'ROI Focused', desc: 'We obsess over your return on investment. Every campaign is optimized for maximum conversions.' },
        { title: 'Fast Results', desc: 'See improvements within weeks, not months. We move fast and iterate faster.' }
      ]
    },
    leadHeading: 'Get Your Free Marketing Audit',
    leadSub:
      'Discover untapped opportunities to grow your business. Our experts will analyze your current marketing and provide actionable recommendations.',
    leadBullets: [
      'Complete website & SEO analysis',
      'Competitor benchmarking',
      'Custom growth roadmap',
      'No obligation consultation'
    ],
    leadForm: {
      title: 'Request Your Free Audit',
      subject: 'Marketing Solutions Audit Request',
      button: 'Get My Free Audit',
      footnote: 'No spam. By submitting, you agree to our Privacy Policy.',
      name: 'Full Name',
      namePh: 'John Doe',
      email: 'Work Email',
      emailPh: 'john@company.com',
      website: 'Website URL',
      websitePh: 'https://yourwebsite.com',
      phone: 'Phone Number',
      phonePh: '+31 6 12345678'
    },
    quickHeading: 'Ready to grow your business?',
    quickSub: "Let's discuss your marketing goals today.",
    emailUs: 'Email Us'
  },
  nl: {
    breadcrumb: 'Marketing',
    heroBadge: 'Marketingoplossingen',
    headPre: 'Marketing die ',
    headHighlight: 'echt resultaat oplevert',
    heroSub:
      'Complete digitale marketing om leads te genereren, conversies te verhogen en je bedrijf te laten groeien. Datagedreven strategieën met meetbare ROI.',
    ctaPrimary: 'Gratis marketing-audit',
    ctaSecondary: 'Bekijk onze diensten',
    stats: [
      { value: '1500+', label: 'Gelanceerde campagnes' },
      { value: '10M+', label: 'Gegenereerde leads' },
      { value: '150%', label: 'Gem. ROI' }
    ],
    dashboard: {
      title: 'Marketing analytics',
      subtitle: 'Realtime prestaties',
      traffic: 'Websiteverkeer',
      conv: 'Leadconversie',
      rev: 'Omzetgroei'
    },
    floats: { seo: 'SEO', paid: 'Adverteren', social: 'Social media', email: 'E-mail', web: 'Webdesign', ai: 'AI SEO' },
    badges: { leads: '+52 leads vandaag', roi: 'ROI: 10,5x' },
    trust: { data: 'Datagedreven strategie', conv: 'Conversie-focus', meas: 'Meetbare resultaten' },
    services: {
      badge: 'Onze diensten',
      headPre: 'Complete ',
      headHighlight: 'marketingoplossingen',
      sub: 'Alles wat je nodig hebt om je markt te domineren en consistent kwalitatieve leads te genereren.',
      learnMore: 'Meer informatie'
    },
    why: {
      headPre: 'Waarom kiezen voor ',
      headHighlight: 'Amora Digital',
      sub: 'Wij zijn geen standaard marketingbureau. Wij zijn jouw groeipartner.',
      items: [
        { title: 'Datagedreven', desc: 'Elke beslissing onderbouwd met analytics. Geen onderbuik, alleen resultaten die je kunt meten en volgen.' },
        { title: 'ROI-gericht', desc: 'Wij draaien om jouw rendement. Elke campagne wordt geoptimaliseerd voor maximale conversie.' },
        { title: 'Snel resultaat', desc: 'Verbeteringen binnen weken, niet maanden. We werken snel en itereren nog sneller.' }
      ]
    },
    leadHeading: 'Vraag je gratis marketing-audit aan',
    leadSub:
      'Ontdek onbenutte groeikansen voor je bedrijf. Onze experts analyseren je huidige marketing en geven concrete aanbevelingen.',
    leadBullets: [
      'Complete website- en SEO-analyse',
      'Concurrentievergelijking',
      'Persoonlijke groei-roadmap',
      'Vrijblijvend adviesgesprek'
    ],
    leadForm: {
      title: 'Vraag je gratis audit aan',
      subject: 'Aanvraag marketing audit',
      button: 'Vraag mijn audit aan',
      footnote: 'Geen spam. Door te verzenden ga je akkoord met ons privacybeleid.',
      name: 'Volledige naam',
      namePh: 'Jan Jansen',
      email: 'Zakelijk e-mailadres',
      emailPh: 'jan@bedrijf.nl',
      website: 'Website-URL',
      websitePh: 'https://jouwwebsite.nl',
      phone: 'Telefoonnummer',
      phonePh: '+31 6 12345678'
    },
    quickHeading: 'Klaar om je bedrijf te laten groeien?',
    quickSub: 'Laten we vandaag je marketingdoelen bespreken.',
    emailUs: 'Mail ons'
  }
} as const

type Service = {
  key: RouteKey
  icon: typeof Globe
  title: { en: string; nl: string }
  description: { en: string; nl: string }
  features: { en: string[]; nl: string[] }
  color: 'primary' | 'secondary' | 'accent'
  stats: { value: string; label: { en: string; nl: string } }
}

const SERVICES: Service[] = [
  {
    key: 'website-design',
    icon: Globe,
    color: 'primary',
    title: { en: 'Website Design', nl: 'Webdesign' },
    description: {
      en: 'Stunning, conversion-focused websites that captivate visitors and turn them into paying customers. Mobile-first design with lightning-fast performance.',
      nl: 'Indrukwekkende, conversiegerichte websites die bezoekers boeien en omzetten in betalende klanten. Mobile-first en razendsnel.'
    },
    features: {
      en: ['Custom Design', 'Mobile-First', 'Lightning Fast', 'SEO Ready', 'CMS Integration'],
      nl: ['Maatwerk ontwerp', 'Mobile-first', 'Razendsnel', 'SEO-klaar', 'CMS-koppeling']
    },
    stats: { value: '3x', label: { en: 'Higher Conversions', nl: 'meer conversies' } }
  },
  {
    key: 'crm-solutions',
    icon: Users,
    color: 'secondary',
    title: { en: 'CRM Solutions', nl: 'CRM-oplossingen' },
    description: {
      en: 'Streamline your customer relationships with powerful CRM integrations. Track leads, automate follow-ups, and close more deals.',
      nl: 'Stroomlijn klantrelaties met krachtige CRM-koppelingen. Volg leads, automatiseer opvolging en sluit meer deals.'
    },
    features: {
      en: ['Lead Tracking', 'Automation', 'Analytics', 'Email Integration', 'Pipeline Management'],
      nl: ['Lead-tracking', 'Automatisering', 'Analytics', 'E-mailkoppeling', 'Pipeline-beheer']
    },
    stats: { value: '40%', label: { en: 'More Sales', nl: 'meer omzet' } }
  },
  {
    key: 'social-media-marketing',
    icon: Megaphone,
    color: 'accent',
    title: { en: 'Social Media Marketing', nl: 'Social media marketing' },
    description: {
      en: 'Build your brand presence and engage your audience across all social platforms. Create viral content that drives engagement.',
      nl: 'Bouw je merkaanwezigheid en betrek je publiek op alle social platformen met content die engagement aanjaagt.'
    },
    features: {
      en: ['Content Strategy', 'Community Management', 'Influencer Outreach', 'Paid Social', 'Analytics'],
      nl: ['Contentstrategie', 'Community management', 'Influencer outreach', 'Paid social', 'Analytics']
    },
    stats: { value: '200%', label: { en: 'Engagement Growth', nl: 'meer engagement' } }
  },
  {
    key: 'paid-advertising',
    icon: Target,
    color: 'primary',
    title: { en: 'Paid Advertising', nl: 'Online adverteren' },
    description: {
      en: 'Maximize ROI with data-driven PPC campaigns across Google, Facebook, LinkedIn, and more. Get qualified leads on autopilot.',
      nl: 'Maximaliseer ROI met datagedreven PPC-campagnes op Google, Facebook, LinkedIn en meer. Kwalitatieve leads op de automatische piloot.'
    },
    features: {
      en: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting', 'A/B Testing'],
      nl: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting', 'A/B-testing']
    },
    stats: { value: '10x', label: { en: 'ROAS Average', nl: 'gemiddelde ROAS' } }
  },
  {
    key: 'seo-services',
    icon: Search,
    color: 'secondary',
    title: { en: 'SEO Services', nl: 'SEO-diensten' },
    description: {
      en: 'Dominate search rankings with our proven SEO strategies. Get found by customers actively searching for your services.',
      nl: 'Scoor bovenaan in Google met bewezen SEO-strategieën. Word gevonden door klanten die actief naar je dienst zoeken.'
    },
    features: {
      en: ['On-Page SEO', 'Link Building', 'Technical SEO', 'Content Strategy', 'Keyword Research'],
      nl: ['On-page SEO', 'Linkbuilding', 'Technische SEO', 'Contentstrategie', 'Zoekwoordonderzoek']
    },
    stats: { value: '147%', label: { en: 'Traffic Increase', nl: 'meer verkeer' } }
  },
  {
    key: 'ai-seo',
    icon: Sparkles,
    color: 'accent',
    title: { en: 'AI SEO', nl: 'AI SEO' },
    description: {
      en: 'Leverage cutting-edge AI technology to supercharge your search performance. Stay ahead with predictive analytics and smart optimization.',
      nl: 'Zet de nieuwste AI-technologie in om je zoekprestaties op te schalen. Blijf voor met predictive analytics en slimme optimalisatie.'
    },
    features: {
      en: ['AI Content', 'Predictive Analytics', 'Smart Optimization', 'Trend Detection', 'Auto-Optimization'],
      nl: ['AI-content', 'Predictive analytics', 'Slimme optimalisatie', 'Trenddetectie', 'Auto-optimalisatie']
    },
    stats: { value: '5x', label: { en: 'Faster Results', nl: 'sneller resultaat' } }
  },
  {
    key: 'local-seo',
    icon: MapPin,
    color: 'primary',
    title: { en: 'Local SEO', nl: 'Lokale SEO' },
    description: {
      en: 'Get found by local customers searching for your services. Dominate Google Maps and local search results in your area.',
      nl: 'Word gevonden door lokale klanten. Domineer Google Maps en lokale zoekresultaten in jouw regio.'
    },
    features: {
      en: ['Google Business Profile', 'Local Citations', 'Review Management', 'Local Link Building', 'NAP Optimization'],
      nl: ['Google-bedrijfsprofiel', 'Lokale vermeldingen', 'Reviewbeheer', 'Lokale linkbuilding', 'NAP-optimalisatie']
    },
    stats: { value: '300%', label: { en: 'Local Visibility', nl: 'meer lokale zichtbaarheid' } }
  },
  {
    key: 'email-marketing',
    icon: Mail,
    color: 'secondary',
    title: { en: 'Email Marketing', nl: 'E-mailmarketing' },
    description: {
      en: 'Nurture leads and boost conversions with targeted email campaigns. Automated sequences that convert subscribers into customers.',
      nl: 'Houd leads warm en verhoog conversies met gerichte e-mailcampagnes. Automatische flows die abonnees omzetten in klanten.'
    },
    features: {
      en: ['Campaign Strategy', 'Automation', 'A/B Testing', 'Segmentation', 'Analytics'],
      nl: ['Campagnestrategie', 'Automatisering', 'A/B-testing', 'Segmentatie', 'Analytics']
    },
    stats: { value: '42x', label: { en: 'ROI Average', nl: 'gemiddelde ROI' } }
  },
  {
    key: 'conversion-optimization',
    icon: TrendingUp,
    color: 'accent',
    title: { en: 'Conversion Optimization', nl: 'Conversie-optimalisatie' },
    description: {
      en: 'Turn more visitors into customers with data-driven CRO strategies. Optimize every step of your customer journey.',
      nl: 'Zet meer bezoekers om in klanten met datagedreven CRO. Optimaliseer elke stap van de customer journey.'
    },
    features: {
      en: ['Landing Pages', 'User Research', 'Funnel Optimization', 'Heat Maps', 'Split Testing'],
      nl: ['Landingspagina\u2019s', 'Gebruikersonderzoek', 'Funnel-optimalisatie', 'Heat maps', 'Split-testing']
    },
    stats: { value: '89%', label: { en: 'Conversion Lift', nl: 'meer conversie' } }
  },
  {
    key: 'brand-strategy',
    icon: Palette,
    color: 'primary',
    title: { en: 'Brand Strategy', nl: 'Merkstrategie' },
    description: {
      en: 'Build a powerful brand identity that resonates with your target audience. Stand out from competitors with memorable branding.',
      nl: 'Bouw een sterke merkidentiteit die aansluit bij je doelgroep. Val op tussen de concurrentie met memorabele branding.'
    },
    features: {
      en: ['Brand Identity', 'Visual Design', 'Brand Guidelines', 'Messaging', 'Positioning'],
      nl: ['Merkidentiteit', 'Visueel ontwerp', 'Merkrichtlijnen', 'Messaging', 'Positionering']
    },
    stats: { value: '2x', label: { en: 'Brand Recall', nl: 'meer merkherinnering' } }
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    primary: { border: 'border-primary-200', hover: 'hover:border-primary-300', gradient: 'from-primary-500 to-primary-600', light: 'bg-primary-50', text: 'text-primary-600' },
    secondary: { border: 'border-secondary-200', hover: 'hover:border-secondary-300', gradient: 'from-secondary-500 to-secondary-600', light: 'bg-secondary-50', text: 'text-secondary-600' },
    accent: { border: 'border-accent-200', hover: 'hover:border-accent-300', gradient: 'from-accent-500 to-accent-600', light: 'bg-accent-50', text: 'text-accent-600' }
  }
  return colors[color as keyof typeof colors]
}

export default function MarketingSolutions() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
                <Link to={ROUTES.home[locale]} className="text-white/60 hover:text-white transition-colors">Home</Link>
                <span className="text-white/40" aria-hidden>/</span>
                <span className="text-white">{t.breadcrumb}</span>
              </nav>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t.headPre}
                <span className="text-secondary-300">{t.headHighlight}</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl">{t.heroSub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg">
                {t.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold">{s.value}</div>
                    <div className="text-sm text-white/70">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 w-80 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" aria-hidden />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t.dashboard.title}</div>
                      <div className="text-xs text-white/60">{t.dashboard.subtitle}</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-sm text-white/80">{t.dashboard.traffic}</span>
                      <span className="text-sm font-bold text-green-400">+147%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-sm text-white/80">{t.dashboard.conv}</span>
                      <span className="text-sm font-bold text-green-400">+89%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-sm text-white/80">{t.dashboard.rev}</span>
                      <span className="text-sm font-bold text-green-400">+234%</span>
                    </div>
                  </div>
                </div>
              </div>

              {[
                { Icon: Search, label: t.floats.seo, cls: 'top-4 left-4', delay: '0s', grad: 'from-primary-400 to-primary-500' },
                { Icon: Target, label: t.floats.paid, cls: 'top-8 right-0', delay: '0.5s', grad: 'from-secondary-400 to-secondary-500' },
                { Icon: Megaphone, label: t.floats.social, cls: 'top-1/3 -left-2', delay: '1s', grad: 'from-accent-400 to-accent-500' },
                { Icon: Mail, label: t.floats.email, cls: 'bottom-1/3 right-4', delay: '1.5s', grad: 'from-primary-400 to-primary-500' },
                { Icon: Globe, label: t.floats.web, cls: 'bottom-12 left-8', delay: '2s', grad: 'from-secondary-400 to-secondary-500' },
                { Icon: Sparkles, label: t.floats.ai, cls: 'bottom-4 right-12', delay: '2.5s', grad: 'from-accent-400 to-accent-500' }
              ].map(({ Icon, label, cls, delay, grad }) => (
                <div key={label} className={`absolute ${cls} animate-float z-20`} style={{ animationDelay: delay }}>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${grad} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" aria-hidden />
                    </div>
                    <span className="text-sm font-medium text-white">{label}</span>
                  </div>
                </div>
              ))}

              <div className="absolute top-16 left-1/2 animate-float z-20" style={{ animationDelay: '0.8s' }}>
                <div className="px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-green-300">{t.badges.leads}</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-float z-20" style={{ animationDelay: '1.8s' }}>
                <div className="px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-400/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-secondary-300" aria-hidden />
                    <span className="text-sm font-medium text-secondary-300">{t.badges.roi}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2 text-slate-400">
              <BarChart3 className="w-5 h-5 text-primary-500" aria-hidden />
              <span className="text-sm">{t.trust.data}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400">
              <MousePointerClick className="w-5 h-5 text-secondary-500" aria-hidden />
              <span className="text-sm">{t.trust.conv}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400">
              <TrendingUp className="w-5 h-5 text-accent-500" aria-hidden />
              <span className="text-sm">{t.trust.meas}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" aria-hidden />
              <span>{t.services.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.services.headPre}
              <span className="gradient-text">{t.services.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.services.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map((service) => {
              const c = getColorClasses(service.color)
              return (
                <Link
                  key={service.key}
                  to={ROUTES[service.key][locale]}
                  className={`group relative bg-white rounded-2xl border-2 ${c.border} ${c.hover} p-6 lg:p-8 transition-all hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className={`absolute top-6 right-6 px-3 py-1.5 rounded-full ${c.light} ${c.text} text-xs font-bold`}>
                    {service.stats.value} {service.stats.label[locale]}
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7 text-white" aria-hidden />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{service.title[locale]}</h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description[locale]}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features[locale].map((feature) => (
                          <span key={feature} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                            <CheckCircle2 className="w-3 h-3 text-green-500" aria-hidden />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700">{t.services.learnMore}</span>
                    <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" aria-hidden />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              {t.why.headPre}
              <span className="gradient-text">{t.why.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.why.sub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[BarChart3, Target, Zap].map((Icon, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-white shadow-lg border border-slate-100">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${i === 0 ? 'from-primary-500 to-primary-600' : i === 1 ? 'from-secondary-500 to-secondary-600' : 'from-accent-500 to-accent-600'} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t.why.items[i].title}</h3>
                <p className="text-slate-600">{t.why.items[i].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t.leadHeading}</h2>
                <p className="text-lg text-white/90 mb-8">{t.leadSub}</p>
                <ul className="space-y-3">
                  {t.leadBullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-secondary-300 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.leadForm.title}
                subject={t.leadForm.subject}
                buttonText={t.leadForm.button}
                buttonClass="from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 shadow-lg shadow-primary-500/25"
                footnote={t.leadForm.footnote}
              >
                <div>
                  <label htmlFor="ms-name" className="block text-sm font-medium text-slate-700 mb-1">{t.leadForm.name}</label>
                  <input type="text" id="ms-name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.leadForm.namePh} />
                </div>
                <div>
                  <label htmlFor="ms-email" className="block text-sm font-medium text-slate-700 mb-1">{t.leadForm.email}</label>
                  <input type="email" id="ms-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.leadForm.emailPh} />
                </div>
                <div>
                  <label htmlFor="ms-website" className="block text-sm font-medium text-slate-700 mb-1">{t.leadForm.website}</label>
                  <input type="url" id="ms-website" name="website" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.leadForm.websitePh} />
                </div>
                <div>
                  <label htmlFor="ms-phone" className="block text-sm font-medium text-slate-700 mb-1">{t.leadForm.phone}</label>
                  <input type="tel" id="ms-phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.leadForm.phonePh} />
                </div>
              </LeadForm>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">{t.quickHeading}</h3>
              <p className="text-slate-400">{t.quickSub}</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+31625580415" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" aria-hidden />
                +31 6 25580415
              </a>
              <a href="mailto:info@amoradigital.nl" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors">
                <Mail className="w-4 h-4" aria-hidden />
                {t.emailUs}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
