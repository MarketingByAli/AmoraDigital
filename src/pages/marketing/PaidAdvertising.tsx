import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, Target, TrendingUp, BarChart3, DollarSign, MousePointer2, Eye,
  Users, Search, ShoppingBag, Video, Image, Megaphone, Star, Phone, Mail, PieChart, Gauge,
  RefreshCw, Settings, LineChart, Layers
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'Paid Ads',
    headPre: 'Get ', headHighlight: 'Instant Results', headPost: ' with Paid Ads',
    sub: 'Stop waiting for organic traffic. Our data-driven paid advertising campaigns put your brand in front of ready-to-buy customers on Google, Meta, LinkedIn, and more.',
    ctaAudit: 'Get Free Ad Audit', ctaPlatforms: 'View Platforms',
    quickStat1: { value: '4.2x', label: 'Avg. ROAS' }, quickStat2: { value: '€5M+', label: 'Managed' },
    dash: { title: 'Campaign Performance', live: '● Live', conv: 'Conversions (7 days)', change: '+23%' },
    metrics: [
      { label: 'Impressions', value: '2.4M' },
      { label: 'Clicks', value: '89K' },
      { label: 'Conversions', value: '3,240' },
      { label: 'ROAS', value: '5.2x' }
    ],
    floats: { ctr: '+127% CTR', cpc: '€0.42 CPC', cpa: '€12 CPA', roas: '5.2x ROAS' },
    stats: [
      { value: '€5M+', label: 'Ad Spend Managed', description: 'Across all platforms' },
      { value: '4.2x', label: 'Average ROAS', description: 'Return on ad spend' },
      { value: '-47%', label: 'Cost Per Lead', description: 'Average reduction' },
      { value: '200+', label: 'Campaigns Launched', description: 'Successful campaigns' }
    ],
    why: { badge: 'Why Paid Ads', headPre: 'Why Invest in ', headHighlight: 'Paid Advertising?' },
    whyPaidAds: [
      { title: 'Instant Traffic', description: 'Start getting visitors immediately, not months from now' },
      { title: 'Precise Targeting', description: 'Reach exactly who you want based on intent, demographics, and behavior' },
      { title: 'Measurable ROI', description: "Track every euro spent and know exactly what you are getting back" },
      { title: 'Scalable Growth', description: 'Once you find what works, scale it up for exponential growth' }
    ],
    platformsSection: { badge: 'Ad Platforms', headPre: 'Advertise Where Your ', headHighlight: 'Customers Are', sub: "We're certified experts on all major advertising platforms." },
    platforms: [
      { name: 'Google Ads', description: 'Search, Display, Shopping & YouTube campaigns that capture high-intent buyers.', features: ['Search Ads', 'Display Network', 'Shopping Ads', 'YouTube Ads'] },
      { name: 'Meta Ads', description: 'Facebook & Instagram advertising to reach your ideal audience at scale.', features: ['Feed Ads', 'Stories', 'Reels', 'Messenger'] },
      { name: 'LinkedIn Ads', description: 'B2B advertising to reach decision-makers and professionals.', features: ['Sponsored Content', 'InMail', 'Text Ads', 'Lead Gen Forms'] },
      { name: 'TikTok Ads', description: 'Reach younger audiences with engaging video content.', features: ['In-Feed Ads', 'TopView', 'Branded Effects', 'Spark Ads'] }
    ],
    adTypesSection: { badge: 'Ad Formats', headPre: 'Every Ad Format ', headHighlight: 'You Need', sub: 'From search to social to video, we create ads that capture attention and drive action.' },
    adTypes: [
      { name: 'Search Ads', description: 'Capture high-intent searches' },
      { name: 'Display Ads', description: 'Visual ads across the web' },
      { name: 'Video Ads', description: 'Engaging video content' },
      { name: 'Shopping Ads', description: 'Product-focused campaigns' },
      { name: 'Social Ads', description: 'Platform-specific formats' },
      { name: 'Retargeting', description: 'Re-engage past visitors' }
    ],
    servicesSection: { badge: 'Our Services', headPre: 'Full-Service ', headHighlight: 'PPC Management', sub: 'From strategy to execution to optimization, we handle everything.' },
    services: [
      { title: 'Campaign Strategy', description: 'Data-driven ad strategies aligned with your business goals and target audience.' },
      { title: 'Ad Creative', description: 'Scroll-stopping ad designs and compelling copy that drives clicks and conversions.' },
      { title: 'Audience Targeting', description: 'Precision targeting to reach the right people at the right time with the right message.' },
      { title: 'A/B Testing', description: 'Continuous testing of ads, audiences, and landing pages to improve performance.' },
      { title: 'Bid Management', description: 'Smart bidding strategies to maximize results while controlling costs.' },
      { title: 'Reporting & Analytics', description: 'Transparent reporting with actionable insights and clear ROI tracking.' }
    ],
    process: { badge: 'Our Process', headPre: 'How We ', headHighlight: 'Drive Results' },
    processItems: [
      { step: '01', title: 'Audit & Strategy', description: 'We analyze your current ads, competitors, and market to build a winning strategy.' },
      { step: '02', title: 'Campaign Setup', description: 'We create campaigns with optimized targeting, bidding, and tracking.' },
      { step: '03', title: 'Creative & Launch', description: 'We design high-converting ads and launch your campaigns.' },
      { step: '04', title: 'Optimize & Scale', description: 'We continuously optimize and scale what works for maximum ROI.' }
    ],
    caseStudy: {
      badge: 'Case Study', heading: 'E-Commerce Brand: 5.2x ROAS in 90 Days',
      sub: 'We helped an e-commerce client scale their Google and Meta ads while maintaining profitability and reducing cost per acquisition.',
      tiles: [
        { value: '€127K', label: 'Revenue Generated' },
        { value: '5.2x', label: 'Return on Ad Spend' },
        { value: '-52%', label: 'Cost Per Acquisition' },
        { value: '+340%', label: 'Conversion Volume' }
      ],
      quote: '"We were burning money on ads before working with Amora Digital. Now every euro we spend brings back five. They truly understand paid advertising."',
      author: 'Emma Visser', role: 'Founder, StyleNL'
    },
    lead: {
      heading: 'Ready to Scale Your Ads?',
      sub: 'Get a free ad account audit and discover how to improve your ROAS and drive more profitable conversions.',
      bullets: ['Complete ad account audit', 'Competitor ad analysis', 'Budget recommendations', 'Custom growth strategy'],
      title: 'Get Your Free Ad Audit', subject: 'Paid Advertising Audit Request',
      button: 'Get My Free Ad Audit', footnote: 'Free audit with actionable recommendations.',
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com',
      budget: 'Monthly Ad Budget', budgetPh: 'Select your budget',
      budgetOpts: ['€1,000 - €5,000', '€5,000 - €10,000', '€10,000 - €25,000', '€25,000+'],
      platforms: 'Current Platforms', platformsPh: 'Select platforms you use',
      platformOpts: ['Google Ads only', 'Meta Ads only', 'Google + Meta', 'Multiple platforms', 'Not running ads yet']
    },
    quick: { heading: 'Ready to maximize your ad spend?', sub: "Let's discuss your paid advertising goals today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'Online adverteren',
    headPre: 'Direct ', headHighlight: 'resultaat', headPost: ' met online adverteren',
    sub: 'Stop met wachten op organisch verkeer. Onze datagedreven advertentiecampagnes plaatsen je merk voor koopklare klanten op Google, Meta, LinkedIn en meer.',
    ctaAudit: 'Gratis ad-audit', ctaPlatforms: 'Bekijk platforms',
    quickStat1: { value: '4.2x', label: 'Gem. ROAS' }, quickStat2: { value: '€5M+', label: 'In beheer' },
    dash: { title: 'Campagneprestatie', live: '● Live', conv: 'Conversies (7 dagen)', change: '+23%' },
    metrics: [
      { label: 'Vertoningen', value: '2.4M' },
      { label: 'Clicks', value: '89K' },
      { label: 'Conversies', value: '3.240' },
      { label: 'ROAS', value: '5.2x' }
    ],
    floats: { ctr: '+127% CTR', cpc: '€0,42 CPC', cpa: '€12 CPA', roas: '5.2x ROAS' },
    stats: [
      { value: '€5M+', label: 'Beheerde advertentiebudget', description: 'Over alle platforms' },
      { value: '4.2x', label: 'Gem. ROAS', description: 'Rendement op advertentie' },
      { value: '-47%', label: 'Kosten per lead', description: 'Gem. besparing' },
      { value: '200+', label: 'Gelanceerde campagnes', description: 'Succesvolle campagnes' }
    ],
    why: { badge: 'Waarom adverteren', headPre: 'Waarom investeren in ', headHighlight: 'online adverteren?' },
    whyPaidAds: [
      { title: 'Direct verkeer', description: 'Krijg direct bezoekers, niet pas over maanden' },
      { title: 'Precieze targeting', description: 'Bereik exact wie je wilt op basis van intentie, demografie en gedrag' },
      { title: 'Meetbare ROI', description: 'Volg elke euro die je uitgeeft en weet precies wat het oplevert' },
      { title: 'Schaalbare groei', description: 'Als je weet wat werkt, schaal je het op voor exponentiële groei' }
    ],
    platformsSection: { badge: 'Advertentieplatforms', headPre: 'Adverteer waar je ', headHighlight: 'klanten zijn', sub: 'We zijn gecertificeerde experts op alle grote advertentieplatforms.' },
    platforms: [
      { name: 'Google Ads', description: 'Search-, Display-, Shopping- & YouTube-campagnes die koopklare bezoekers vangen.', features: ['Search Ads', 'Display Network', 'Shopping Ads', 'YouTube Ads'] },
      { name: 'Meta Ads', description: 'Facebook- en Instagram-advertenties om je ideale doelgroep op schaal te bereiken.', features: ['Feed Ads', 'Stories', 'Reels', 'Messenger'] },
      { name: 'LinkedIn Ads', description: 'B2B-advertenties om beslissers en professionals te bereiken.', features: ['Sponsored Content', 'InMail', 'Tekstadvertenties', 'Lead Gen-formulieren'] },
      { name: 'TikTok Ads', description: 'Bereik jongere doelgroepen met meeslepende videocontent.', features: ['In-Feed Ads', 'TopView', 'Branded Effects', 'Spark Ads'] }
    ],
    adTypesSection: { badge: 'Advertentieformats', headPre: 'Elk advertentieformat ', headHighlight: 'dat je nodig hebt', sub: 'Van search tot social tot video \u2014 we maken advertenties die aandacht trekken en actie uitlokken.' },
    adTypes: [
      { name: 'Search Ads', description: 'Vang koopgerichte zoekopdrachten' },
      { name: 'Display Ads', description: 'Visuele advertenties op het web' },
      { name: 'Video Ads', description: 'Boeiende videocontent' },
      { name: 'Shopping Ads', description: 'Productgerichte campagnes' },
      { name: 'Social Ads', description: 'Platform-specifieke formats' },
      { name: 'Retargeting', description: 'Re-engage eerdere bezoekers' }
    ],
    servicesSection: { badge: 'Onze diensten', headPre: 'Volledig ', headHighlight: 'PPC-beheer', sub: 'Van strategie tot uitvoering en optimalisatie \u2014 wij regelen alles.' },
    services: [
      { title: 'Campagnestrategie', description: 'Datagedreven ad-strategieën afgestemd op je doelen en doelgroep.' },
      { title: 'Ad-creatives', description: 'Scroll-stopping ontwerpen en pakkende teksten die clicks en conversies opleveren.' },
      { title: 'Doelgroep-targeting', description: 'Precieze targeting om de juiste mensen op het juiste moment met de juiste boodschap te bereiken.' },
      { title: 'A/B-testen', description: 'Continu testen van advertenties, doelgroepen en landingspagina\u2019s voor betere prestaties.' },
      { title: 'Biedingbeheer', description: 'Slimme biedingsstrategieën om resultaat te maximaliseren en kosten te beheersen.' },
      { title: 'Rapportage & analytics', description: 'Transparante rapportages met bruikbare inzichten en heldere ROI-tracking.' }
    ],
    process: { badge: 'Onze werkwijze', headPre: 'Zo ', headHighlight: 'leveren we resultaat' },
    processItems: [
      { step: '01', title: 'Audit & strategie', description: 'We analyseren huidige advertenties, concurrenten en markt voor een winnende strategie.' },
      { step: '02', title: 'Campagne-opzet', description: 'We zetten campagnes op met geoptimaliseerde targeting, biedingen en tracking.' },
      { step: '03', title: 'Creatives & lancering', description: 'We ontwerpen hoog converterende advertenties en lanceren je campagnes.' },
      { step: '04', title: 'Optimaliseren & opschalen', description: 'We optimaliseren continu en schalen op wat werkt voor maximale ROI.' }
    ],
    caseStudy: {
      badge: 'Case study', heading: 'E-commerce-merk: 5.2x ROAS in 90 dagen',
      sub: 'We hielpen een e-commerceklant zijn Google- en Meta-ads opschalen, met behoud van winstgevendheid en lagere CPA.',
      tiles: [
        { value: '€127K', label: 'Gegenereerde omzet' },
        { value: '5.2x', label: 'ROAS' },
        { value: '-52%', label: 'Kosten per acquisitie' },
        { value: '+340%', label: 'Conversievolume' }
      ],
      quote: '"We verbrandden geld aan ads voor we met Amora Digital werkten. Nu levert elke euro vijf op. Ze begrijpen online adverteren écht."',
      author: 'Emma Visser', role: 'Oprichter, StyleNL'
    },
    lead: {
      heading: 'Klaar om je advertenties op te schalen?',
      sub: 'Vraag een gratis ad-account-audit aan en ontdek hoe je je ROAS verbetert en winstgevender converteert.',
      bullets: ['Complete ad-account-audit', 'Concurrent-advertentieanalyse', 'Budgetadvies', 'Groeistrategie op maat'],
      title: 'Vraag je gratis ad-audit', subject: 'Aanvraag ad-audit',
      button: 'Vraag mijn ad-audit', footnote: 'Gratis audit met concrete aanbevelingen.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      budget: 'Maandelijks ad-budget', budgetPh: 'Kies je budget',
      budgetOpts: ['€1.000 - €5.000', '€5.000 - €10.000', '€10.000 - €25.000', '€25.000+'],
      platforms: 'Huidige platforms', platformsPh: 'Kies welke platforms je gebruikt',
      platformOpts: ['Alleen Google Ads', 'Alleen Meta Ads', 'Google + Meta', 'Meerdere platforms', 'Nog geen ads draaiende']
    },
    quick: { heading: 'Klaar om het maximale uit je ad-budget te halen?', sub: 'Laten we vandaag je advertentiedoelen bespreken.', email: 'Mail ons' }
  }
} as const

const METRIC_ICONS = [Eye, MousePointer2, Target, TrendingUp]
const SERVICE_ICONS = [Target, Image, Users, RefreshCw, LineChart, BarChart3]
const PLATFORM_ICONS = [Search, Users, Megaphone, Video]
const PLATFORM_COLORS = ['from-blue-500 to-blue-600', 'from-blue-600 to-indigo-600', 'from-blue-700 to-blue-800', 'from-slate-800 to-slate-900']
const AD_TYPE_ICONS = [Search, Image, Video, ShoppingBag, Users, RefreshCw]

export default function PaidAdvertising() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-rose-600 to-pink-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
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
                {t.headPre}<span className="text-rose-200">{t.headHighlight}</span>{t.headPost}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-rose-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaAudit}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#platforms" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaPlatforms}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-rose-200" aria-hidden />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{t.quickStat1.value}</div>
                    <div className="text-xs text-white/60">{t.quickStat1.label}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-rose-200" aria-hidden />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{t.quickStat2.value}</div>
                    <div className="text-xs text-white/60">{t.quickStat2.label}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-5 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">{t.dash.title}</h4>
                    <span className="text-xs text-green-300 font-medium">{t.dash.live}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {t.metrics.map((metric, i) => {
                      const Icon = METRIC_ICONS[i]
                      return (
                        <div key={metric.label} className="bg-white/10 rounded-lg p-3">
                          <Icon className="w-4 h-4 text-rose-300 mb-1" aria-hidden />
                          <div className="text-lg font-bold text-white">{metric.value}</div>
                          <div className="text-xs text-white/60">{metric.label}</div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-white/60">{t.dash.conv}</span>
                      <span className="text-xs text-green-300">{t.dash.change}</span>
                    </div>
                    <div className="flex items-end gap-1 h-12">
                      {[40, 55, 45, 60, 75, 65, 85].map((height, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-rose-500 to-pink-400 rounded-sm" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.ctr}</span>
                </div>
              </div>
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <MousePointer2 className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.cpc}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Target className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.cpa}</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <DollarSign className="w-4 h-4 text-yellow-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.roas}</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.why.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.why.headPre}<span className="gradient-text">{t.why.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyPaidAds.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-rose-50 hover:shadow-lg transition-all border border-transparent hover:border-rose-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platforms" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
              <span>{t.platformsSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.platformsSection.headPre}<span className="gradient-text">{t.platformsSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.platformsSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.platforms.map((platform, i) => {
              const Icon = PLATFORM_ICONS[i]
              return (
                <div key={platform.name} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${PLATFORM_COLORS[i]} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" aria-hidden />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{platform.name}</h3>
                      <p className="text-slate-600 mb-4">{platform.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {platform.features.map((feature) => (
                          <span key={feature} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">{feature}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Image className="w-4 h-4" aria-hidden />
              <span>{t.adTypesSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.adTypesSection.headPre}<span className="text-rose-300">{t.adTypesSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.adTypesSection.sub}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.adTypes.map((type, i) => {
              const Icon = AD_TYPE_ICONS[i]
              return (
                <div key={type.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors text-center">
                  <Icon className="w-8 h-8 text-rose-300 mx-auto mb-3" aria-hidden />
                  <h4 className="font-semibold text-white mb-1">{type.name}</h4>
                  <p className="text-xs text-white/60">{type.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" aria-hidden />
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              <Gauge className="w-4 h-4" aria-hidden />
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
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-rose-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-rose-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <PieChart className="w-4 h-4" aria-hidden />
                <span>{t.caseStudy.badge}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{t.caseStudy.heading}</h2>
              <p className="text-lg text-slate-300 mb-8">{t.caseStudy.sub}</p>

              <div className="grid grid-cols-2 gap-4">
                {t.caseStudy.tiles.map((tile, i) => (
                  <div key={tile.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className={`text-2xl font-bold mb-1 ${['text-green-400', 'text-rose-400', 'text-blue-400', 'text-purple-400'][i]}`}>{tile.value}</div>
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
              <blockquote className="text-xl text-white mb-6 leading-relaxed">{t.caseStudy.quote}</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-600" />
                <div>
                  <div className="font-semibold text-white">{t.caseStudy.author}</div>
                  <div className="text-slate-400 text-sm">{t.caseStudy.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-red-500 via-rose-600 to-pink-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t.lead.heading}</h2>
                <p className="text-lg text-white/90 mb-8">{t.lead.sub}</p>
                <ul className="space-y-3">
                  {t.lead.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-rose-200 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg shadow-rose-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pa-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="pa-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="pa-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="pa-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="pa-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="pa-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="pa-budget" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.budget}</label>
                  <select id="pa-budget" name="budget" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors">
                    <option value="">{t.lead.budgetPh}</option>
                    {t.lead.budgetOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="pa-platforms" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.platforms}</label>
                  <select id="pa-platforms" name="platforms" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors">
                    <option value="">{t.lead.platformsPh}</option>
                    {t.lead.platformOpts.map((opt) => (
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
