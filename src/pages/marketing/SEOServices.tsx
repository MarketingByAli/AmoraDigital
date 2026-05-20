import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, Search, TrendingUp, Globe, FileText, Link2, BarChart3,
  Target, Award, Settings, Layers, Eye, Star, Phone, Mail, MapPin, Bot, Gauge
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'SEO Services',
    headPre: 'Get Found on ', headHighlight: 'Google', headPost: ' & Drive Organic Growth',
    sub: 'Rank higher, drive more traffic, and convert visitors into customers with our data-driven SEO strategies. We help businesses dominate search results.',
    ctaAudit: 'Get Free SEO Audit', ctaExplore: 'Explore Services',
    trust1: 'Google Partner', trust2: '500%+ Avg. Growth',
    dashTitle: 'Keyword Rankings', dashLive: 'Live',
    rankings: [
      { keyword: 'Digital marketing agency', position: '1', change: '+5' },
      { keyword: 'Web design services', position: '2', change: '+8' },
      { keyword: 'SEO company Netherlands', position: '1', change: '+12' },
      { keyword: 'Social media marketing', position: '3', change: '+6' },
      { keyword: 'E-commerce development', position: '2', change: '+9' }
    ],
    floats: { traffic: '+247% Traffic', impressions: '15K Impressions', page1: '32 Page 1 Keywords', speed: '98 Speed Score' },
    stats: [
      { value: '150+', label: 'Keywords Ranked #1', description: 'First page positions' },
      { value: '500%', label: 'Avg. Traffic Growth', description: 'Within 12 months' },
      { value: '89%', label: 'Client Retention', description: 'Long-term partnerships' },
      { value: '3x', label: 'ROI Average', description: 'Return on investment' }
    ],
    servicesSection: { badge: 'What We Do', headPre: 'Complete SEO ', headHighlight: 'Solutions', sub: 'From technical audits to content creation, we handle every aspect of search engine optimization.' },
    services: [
      { title: 'Keyword Research', description: 'In-depth analysis to find high-value keywords your customers are actually searching for.' },
      { title: 'On-Page SEO', description: 'Optimize your content, meta tags, headings, and structure for maximum search visibility.' },
      { title: 'Technical SEO', description: 'Fix crawl errors, improve site speed, mobile optimization, and core web vitals.' },
      { title: 'Link Building', description: 'Earn high-quality backlinks from authoritative sites to boost your domain authority.' },
      { title: 'Content Strategy', description: 'Create SEO-optimized content that ranks, engages, and converts visitors.' },
      { title: 'Analytics & Reporting', description: 'Track rankings, traffic, and conversions with detailed monthly reports.' }
    ],
    typesSection: { badge: 'SEO Specializations', headPre: 'SEO Solutions for ', headHighlight: 'Every Need', sub: "Whether you need local visibility, national reach, or AI-ready optimization, we've got you covered." },
    seoTypes: [
      { title: 'Traditional SEO', description: 'Comprehensive organic search optimization for sustainable long-term growth.', features: ['Keyword optimization', 'Content strategy', 'Technical audits', 'Link building'] },
      { title: 'Local SEO', description: 'Dominate local search results and Google Maps in your service area.', features: ['Google Business Profile', 'Local citations', 'Review management', 'Local content'] },
      { title: 'AI SEO', description: 'Future-proof your visibility for AI-powered search and voice assistants.', features: ['AI search optimization', 'Structured data', 'Voice search', 'Featured snippets'] }
    ],
    learnMore: 'Learn More',
    process: { badge: 'Our Process', headPre: 'How We ', headHighlight: 'Boost Your Rankings' },
    processItems: [
      { step: '01', title: 'SEO Audit', description: 'Complete analysis of your website, competitors, and market opportunities.' },
      { step: '02', title: 'Strategy Development', description: 'Custom SEO roadmap based on your goals, industry, and competition level.' },
      { step: '03', title: 'Implementation', description: 'Execute on-page, technical, and off-page optimizations systematically.' },
      { step: '04', title: 'Monitor & Optimize', description: 'Continuous tracking, testing, and refinement for ongoing improvement.' }
    ],
    results: {
      badge: 'Real Results', heading: 'Results That Speak for Themselves',
      sub: 'Our clients see real, measurable improvements in their search rankings, organic traffic, and most importantly, leads and revenue.',
      tiles: [
        { value: '+320%', label: 'Organic Traffic' },
        { value: '47', label: 'Page 1 Keywords' },
        { value: '65%', label: 'More Leads' },
        { value: '4.2x', label: 'ROI Achieved' }
      ],
      quote: '"We went from page 5 to position 1 for our main keywords. Our organic leads increased by 300% and we have had to hire more staff to handle the growth!"',
      author: 'Sarah van der Berg', role: 'CEO, TechStart Solutions'
    },
    included: {
      headPre: "What's Included in ", headHighlight: 'Our SEO Service',
      items: [
        'Comprehensive SEO audit', 'Competitor analysis', 'Keyword research & mapping', 'On-page optimization',
        'Technical SEO fixes', 'Content recommendations', 'Link building strategy', 'Google Search Console setup',
        'Google Analytics tracking', 'Monthly ranking reports', 'Traffic analysis', 'Conversion tracking'
      ]
    },
    lead: {
      heading: 'Ready to Rank #1?',
      sub: "Get a free SEO audit and discover exactly what's holding your website back from ranking on the first page of Google.",
      bullets: ['Complete website SEO audit', 'Competitor analysis', 'Keyword opportunities', 'Custom action plan'],
      title: 'Get Your Free SEO Audit', subject: 'SEO Services Audit Request',
      button: 'Get My Free SEO Audit', footnote: '100% free audit. No strings attached.',
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com', website: 'Website URL', websitePh: 'https://yourwebsite.com',
      goals: 'What are your SEO goals?', goalsPh: 'Select your primary goal',
      goalOpts: ['Increase organic traffic', 'Improve keyword rankings', 'Dominate local search', 'Generate more leads', 'Boost e-commerce sales']
    },
    quick: { heading: 'Ready to dominate Google?', sub: "Let's discuss your SEO goals today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'SEO-diensten',
    headPre: 'Goed vindbaar in ', headHighlight: 'Google', headPost: ' \u2014 organisch groeien',
    sub: 'Hoger ranken, meer verkeer en bezoekers omzetten in klanten met onze datagedreven SEO-strategieën. We helpen bedrijven de zoekresultaten te domineren.',
    ctaAudit: 'Gratis SEO-audit', ctaExplore: 'Bekijk diensten',
    trust1: 'Google Partner', trust2: '500%+ gem. groei',
    dashTitle: 'Keyword-posities', dashLive: 'Live',
    rankings: [
      { keyword: 'Digital marketing bureau', position: '1', change: '+5' },
      { keyword: 'Webdesign diensten', position: '2', change: '+8' },
      { keyword: 'SEO-bureau Nederland', position: '1', change: '+12' },
      { keyword: 'Social media marketing', position: '3', change: '+6' },
      { keyword: 'E-commerce ontwikkeling', position: '2', change: '+9' }
    ],
    floats: { traffic: '+247% verkeer', impressions: '15K vertoningen', page1: '32 keywords op pagina 1', speed: '98 snelheidsscore' },
    stats: [
      { value: '150+', label: 'Keywords op #1', description: 'Eerste-pagina-posities' },
      { value: '500%', label: 'Gem. verkeersgroei', description: 'Binnen 12 maanden' },
      { value: '89%', label: 'Klantretentie', description: 'Langdurige samenwerkingen' },
      { value: '3x', label: 'Gem. ROI', description: 'Rendement op investering' }
    ],
    servicesSection: { badge: 'Wat we doen', headPre: 'Complete SEO-', headHighlight: 'oplossingen', sub: 'Van technische audits tot contentcreatie \u2014 we regelen elk aspect van zoekmachine-optimalisatie.' },
    services: [
      { title: 'Zoekwoordonderzoek', description: 'Diepgaande analyse om waardevolle zoekwoorden te vinden waar jouw klanten écht op zoeken.' },
      { title: 'On-page SEO', description: 'Optimaliseer content, metatags, headings en structuur voor maximale zichtbaarheid.' },
      { title: 'Technische SEO', description: 'Crawl-fouten oplossen, sitesnelheid verbeteren, mobiele optimalisatie en core web vitals.' },
      { title: 'Linkbuilding', description: 'Bouw kwalitatieve backlinks op van gezaghebbende sites om je domain authority te verhogen.' },
      { title: 'Contentstrategie', description: 'Creëer SEO-geoptimaliseerde content die rankt, boeit en converteert.' },
      { title: 'Analytics & rapportage', description: 'Volg posities, verkeer en conversies met gedetailleerde maandrapportages.' }
    ],
    typesSection: { badge: 'SEO-specialisaties', headPre: 'SEO-oplossingen voor ', headHighlight: 'elke behoefte', sub: 'Of je nu lokale zichtbaarheid, landelijk bereik of AI-klare optimalisatie wilt \u2014 wij regelen het.' },
    seoTypes: [
      { title: 'Klassieke SEO', description: 'Complete organische zoekoptimalisatie voor duurzame, lange-termijngroei.', features: ['Zoekwoordoptimalisatie', 'Contentstrategie', 'Technische audits', 'Linkbuilding'] },
      { title: 'Lokale SEO', description: 'Domineer lokale zoekresultaten en Google Maps in jouw werkgebied.', features: ['Google Bedrijfsprofiel', 'Lokale citations', 'Reviewmanagement', 'Lokale content'] },
      { title: 'AI-SEO', description: 'Maak je zichtbaarheid futureproof voor AI-zoeken en spraakassistenten.', features: ['AI-zoekoptimalisatie', 'Gestructureerde data', 'Voice search', 'Featured snippets'] }
    ],
    learnMore: 'Meer informatie',
    process: { badge: 'Onze werkwijze', headPre: 'Zo ', headHighlight: 'verhogen we je posities' },
    processItems: [
      { step: '01', title: 'SEO-audit', description: 'Complete analyse van je website, concurrenten en marktkansen.' },
      { step: '02', title: 'Strategieontwikkeling', description: 'SEO-roadmap op maat, op basis van je doelen, branche en concurrentieniveau.' },
      { step: '03', title: 'Implementatie', description: 'Systematische uitvoering van on-page, technische en off-page optimalisaties.' },
      { step: '04', title: 'Monitoren & optimaliseren', description: 'Doorlopend volgen, testen en verfijnen voor continue verbetering.' }
    ],
    results: {
      badge: 'Echte resultaten', heading: 'Resultaten die voor zich spreken',
      sub: 'Onze klanten zien echte, meetbare verbeteringen in posities, organisch verkeer en \u2014 het belangrijkste \u2014 leads en omzet.',
      tiles: [
        { value: '+320%', label: 'Organisch verkeer' },
        { value: '47', label: 'Keywords op pagina 1' },
        { value: '65%', label: 'Meer leads' },
        { value: '4.2x', label: 'Behaalde ROI' }
      ],
      quote: '"We gingen van pagina 5 naar positie 1 voor onze belangrijkste zoekwoorden. Onze organische leads stegen met 300% \u2014 we moesten extra mensen aannemen!"',
      author: 'Sarah van der Berg', role: 'CEO, TechStart Solutions'
    },
    included: {
      headPre: 'Wat zit er in ', headHighlight: 'onze SEO-dienst',
      items: [
        'Complete SEO-audit', 'Concurrentieanalyse', 'Zoekwoordonderzoek & mapping', 'On-page optimalisatie',
        'Technische SEO-fixes', 'Contentaanbevelingen', 'Linkbuilding-strategie', 'Google Search Console-setup',
        'Google Analytics-tracking', 'Maandelijkse rapportage', 'Verkeersanalyse', 'Conversie-tracking'
      ]
    },
    lead: {
      heading: 'Klaar om #1 te ranken?',
      sub: 'Vraag een gratis SEO-audit aan en ontdek precies wat je website tegenhoudt om op pagina 1 van Google te komen.',
      bullets: ['Complete website-audit', 'Concurrentieanalyse', 'Kansrijke zoekwoorden', 'Actieplan op maat'],
      title: 'Vraag je gratis SEO-audit', subject: 'SEO-audit aanvraag',
      button: 'Vraag mijn gratis audit', footnote: '100% gratis audit. Geen verplichtingen.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl', website: 'Website-URL', websitePh: 'https://jouwwebsite.nl',
      goals: 'Wat zijn je SEO-doelen?', goalsPh: 'Kies je hoofddoel',
      goalOpts: ['Meer organisch verkeer', 'Betere zoekwoordposities', 'Lokale zoekresultaten domineren', 'Meer leads genereren', 'E-commerce-omzet verhogen']
    },
    quick: { heading: 'Klaar om Google te domineren?', sub: 'Laten we vandaag je SEO-doelen bespreken.', email: 'Mail ons' }
  }
} as const

const SERVICE_ICONS = [Search, FileText, Settings, Link2, FileText, BarChart3]
const TYPE_ICONS = [Globe, MapPin, Bot]
const TYPE_COLORS = ['from-primary-500 to-primary-700', 'from-green-500 to-emerald-600', 'from-purple-500 to-violet-600']

export default function SEOServices() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-accent-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
                <Link to={ROUTES.home[locale]} className="text-white/60 hover:text-white transition-colors">{t.crumbHome}</Link>
                <span className="text-white/40" aria-hidden>/</span>
                <Link to={ROUTES.marketing[locale]} className="text-white/60 hover:text-white transition-colors">{t.crumbMarketing}</Link>
                <span className="text-white/40" aria-hidden>/</span>
                <span className="text-white">{t.crumbCurrent}</span>
              </nav>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t.headPre}<span className="text-accent-300">{t.headHighlight}</span>{t.headPost}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaAudit}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#seo-types" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaExplore}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-300" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">{t.dashTitle}</h4>
                    <span className="text-xs text-accent-300 font-medium">{t.dashLive}</span>
                  </div>
                  <div className="space-y-3">
                    {t.rankings.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">{item.position}</span>
                          <span className="text-sm text-white/80 truncate max-w-[140px]">{item.keyword}</span>
                        </div>
                        <span className="text-xs font-medium text-green-400">↑{item.change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute top-8 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.traffic}</span>
                </div>
              </div>
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/20 border border-accent-400/30 backdrop-blur-sm">
                  <Eye className="w-4 h-4 text-accent-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.impressions}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Target className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.page1}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-400/30 backdrop-blur-sm">
                  <Gauge className="w-4 h-4 text-secondary-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.speed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-white/90">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.servicesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.servicesSection.headPre}<span className="gradient-text">{t.servicesSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.servicesSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i]
              return (
                <div key={service.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="seo-types" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
              <span>{t.typesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.typesSection.headPre}<span className="gradient-text">{t.typesSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.typesSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.seoTypes.map((type, i) => {
              const Icon = TYPE_ICONS[i]
              return (
                <div key={type.title} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${TYPE_COLORS[i]} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" aria-hidden />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact-form" className="inline-flex items-center gap-2 mt-6 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
                    {t.learnMore}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" aria-hidden />
              <span>{t.process.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.process.headPre}<span className="gradient-text">{t.process.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.processItems.map((step, index) => (
              <div key={step.step} className="relative">
                {index < t.processItems.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-primary-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4" aria-hidden />
                <span>{t.results.badge}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">{t.results.heading}</h2>
              <p className="text-lg text-slate-300 mb-8">{t.results.sub}</p>
              <div className="grid grid-cols-2 gap-6">
                {t.results.tiles.map((tile, i) => (
                  <div key={tile.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className={`text-3xl font-bold mb-1 ${['text-green-400', 'text-accent-400', 'text-purple-400', 'text-secondary-400'][i]}`}>{tile.value}</div>
                    <div className="text-sm text-slate-400">{tile.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="text-xl text-white mb-6 leading-relaxed">{t.results.quote}</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500" />
                <div>
                  <div className="font-semibold text-white">{t.results.author}</div>
                  <div className="text-slate-400 text-sm">{t.results.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              {t.included.headPre}<span className="gradient-text">{t.included.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.included.items.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t.lead.heading}</h2>
                <p className="text-lg text-white/90 mb-8">{t.lead.sub}</p>
                <ul className="space-y-3">
                  {t.lead.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="seo-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="seo-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="seo-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="seo-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="seo-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="seo-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="seo-website" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.website}</label>
                  <input type="url" id="seo-website" name="website" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.lead.websitePh} />
                </div>
                <div>
                  <label htmlFor="seo-goals" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.goals}</label>
                  <select id="seo-goals" name="goals" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                    <option value="">{t.lead.goalsPh}</option>
                    {t.lead.goalOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
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
              <h3 className="text-xl font-bold text-white mb-1">{t.quick.heading}</h3>
              <p className="text-slate-400">{t.quick.sub}</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+31625580415" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" aria-hidden />
                +31 6 25580415
              </a>
              <a href="mailto:info@amoradigital.nl" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors">
                <Mail className="w-4 h-4" aria-hidden />
                {t.quick.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
