import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, BarChart3, MousePointer2, Eye, FlaskConical,
  LineChart, ArrowUpRight, RefreshCw, Lightbulb, Star, Phone, Mail, PieChart, Gauge,
  SplitSquareVertical, FormInput, Layout
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'CRO',
    headPre: 'Turn More Visitors Into ', headHighlight: 'Customers',
    sub: "Stop losing potential customers. Our data-driven CRO strategies optimize every step of your funnel to maximize conversions and revenue\u2014without spending more on ads.",
    ctaAudit: 'Get Free CRO Audit', ctaCase: 'See Case Study',
    quick1: { value: '127%', label: 'Avg. Lift' }, quick2: { value: '1500+', label: 'Tests Run' },
    funnel: { visitors: 'Visitors', engaged: 'Engaged', leads: 'Leads', customers: 'Customers' },
    floats: { ctr: '+52% CTR', conv: '5.8% Conv.', cpl: '-62% CPL', roi: '3.2x ROI' },
    stats: [
      { value: '127%', label: 'Avg. Conversion Lift', description: 'For our clients' },
      { value: '50+', label: 'Tests Run Monthly', description: 'Data-driven decisions' },
      { value: '3.2x', label: 'ROI Increase', description: 'From same traffic' },
      { value: '89%', label: 'Client Retention', description: 'Long-term results' }
    ],
    problem: { badge: 'The Problem', headPre: "You're Losing Money ", headHighlight: 'Every Day' },
    problemBody: 'Most websites convert only 1-3% of visitors. That means 97% of your traffic\u2014and your marketing budget\u2014is wasted. Even small improvements can have massive impact.',
    math: {
      title: 'The Math:', visitors: 'Monthly visitors:', visitorsVal: '10,000',
      current: 'Current conversion rate:', currentVal: '2%',
      leads: 'Current leads:', leadsVal: '200/month',
      after: 'After CRO (5% rate):', afterVal: '500/month (+150%)'
    },
    areas: [
      { title: 'Call-to-Action Buttons', description: 'Optimize button text, colors, placement, and design for maximum clicks.', improvement: '+34%' },
      { title: 'Lead Capture Forms', description: 'Streamline forms to reduce abandonment and increase submissions.', improvement: '+52%' },
      { title: 'Page Layout & Design', description: 'Structure content and visual hierarchy to guide visitors to convert.', improvement: '+28%' },
      { title: 'Value Proposition', description: 'Clarify your messaging to instantly communicate benefits.', improvement: '+45%' }
    ],
    servicesSection: { badge: 'Our Services', headPre: 'Data-Driven ', headHighlight: 'CRO Services', sub: 'We use proven methodologies and rigorous testing to systematically improve your conversion rates.' },
    services: [
      { title: 'Conversion Audit', description: 'Deep analysis of your website to identify conversion blockers and opportunities.' },
      { title: 'A/B Testing', description: 'Data-driven experiments to find what works best for your specific audience.' },
      { title: 'Heatmap Analysis', description: 'Understand exactly how visitors interact with your pages using click and scroll maps.' },
      { title: 'Form Optimization', description: 'Reduce friction and increase form completions with optimized fields and layouts.' },
      { title: 'Landing Page Design', description: 'High-converting landing pages designed specifically to maximize conversions.' },
      { title: 'Analytics Setup', description: 'Proper tracking and reporting to measure every conversion touchpoint.' }
    ],
    testSection: { badge: 'A/B Testing', headPre: 'What We ', headHighlight: 'Test & Optimize', sub: 'Every element on your website can impact conversions. We test them all to find winning combinations.' },
    whatWeTest: [
      'Headlines & copy', 'Button colors & text', 'Form fields & layout', 'Page structure',
      'Images & videos', 'Social proof placement', 'Pricing presentation', 'Navigation elements',
      'Mobile experience', 'Checkout flow', 'Trust signals', 'Exit intent offers'
    ],
    processSection: { badge: 'Our Process', headPre: 'The CRO ', headHighlight: 'Framework' },
    process: [
      { step: '01', title: 'Research & Audit', description: 'Analyze your current conversion funnel, user behavior, and identify quick wins.' },
      { step: '02', title: 'Hypothesis Creation', description: 'Develop data-backed hypotheses for improvements based on research findings.' },
      { step: '03', title: 'Test & Experiment', description: 'Run controlled A/B tests to validate what actually improves conversions.' },
      { step: '04', title: 'Implement & Scale', description: 'Roll out winning variations and continue optimizing for ongoing growth.' }
    ],
    caseSection: { badge: 'Case Study', headPre: 'Real Results: ', headHighlight: 'E-Commerce Client', sub: 'See how we helped an e-commerce client nearly triple their conversion rate in 90 days.' },
    caseStudy: [
      { label: 'Conversion Rate', before: '2.1%', after: '5.8%', change: '+176%' },
      { label: 'Leads per Month', before: '145', after: '412', change: '+184%' },
      { label: 'Cost per Lead', before: '€47', after: '€18', change: '-62%' },
      { label: 'Revenue', before: '€23K', after: '€67K', change: '+191%' }
    ],
    caseLabels: { before: 'Before', after: 'After' },
    testimonial: {
      quote: '"We were skeptical about CRO at first, but the results speak for themselves. Same traffic, triple the leads. It\'s like finding money we didn\'t know we had."',
      author: 'Lisa Bakker', role: 'Marketing Director, TechFlow B.V.'
    },
    lead: {
      heading: 'Ready to Convert More Visitors?',
      sub: "Get a free conversion audit and discover exactly where you're losing potential customers\u2014and how to fix it.",
      bullets: ['Full conversion funnel audit', 'Competitor benchmark', 'Quick win opportunities', 'Custom CRO roadmap'],
      title: 'Get Your Free CRO Audit', subject: 'CRO Audit Request',
      button: 'Get My Free CRO Audit', footnote: 'Free audit with actionable recommendations.',
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com',
      website: 'Website URL', websitePh: 'https://yourwebsite.com',
      traffic: 'Monthly Website Traffic', trafficPh: 'Select traffic range',
      trafficOpts: ['1,000 - 5,000 visitors', '5,000 - 20,000 visitors', '20,000 - 50,000 visitors', '50,000+ visitors']
    },
    quick: { heading: 'Ready to maximize your conversions?', sub: "Let's discuss your CRO goals today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'CRO',
    headPre: 'Maak van meer bezoekers ', headHighlight: 'klanten',
    sub: 'Stop met het verliezen van potentiële klanten. Onze datagedreven CRO-strategieën optimaliseren elke stap van je funnel om conversies en omzet te maximaliseren \u2014 zonder dat je meer aan ads uitgeeft.',
    ctaAudit: 'Vraag gratis CRO-audit', ctaCase: 'Bekijk case study',
    quick1: { value: '127%', label: 'Gem. stijging' }, quick2: { value: '1500+', label: 'Tests gedaan' },
    funnel: { visitors: 'Bezoekers', engaged: 'Betrokken', leads: 'Leads', customers: 'Klanten' },
    floats: { ctr: '+52% CTR', conv: '5,8% conv.', cpl: '-62% CPL', roi: '3,2x ROI' },
    stats: [
      { value: '127%', label: 'Gem. conversiestijging', description: 'Voor onze klanten' },
      { value: '50+', label: 'Tests per maand', description: 'Datagedreven beslissingen' },
      { value: '3,2x', label: 'Meer ROI', description: 'Uit hetzelfde verkeer' },
      { value: '89%', label: 'Klantretentie', description: 'Resultaat op lange termijn' }
    ],
    problem: { badge: 'Het probleem', headPre: 'Je laat elke dag ', headHighlight: 'geld liggen' },
    problemBody: 'De meeste websites converteren slechts 1-3% van hun bezoekers. Dat betekent dat 97% van je verkeer \u2014 en je marketingbudget \u2014 verloren gaat. Zelfs kleine verbeteringen hebben een enorme impact.',
    math: {
      title: 'De rekensom:', visitors: 'Bezoekers per maand:', visitorsVal: '10.000',
      current: 'Huidige conversie:', currentVal: '2%',
      leads: 'Huidige leads:', leadsVal: '200/maand',
      after: 'Na CRO (5%):', afterVal: '500/maand (+150%)'
    },
    areas: [
      { title: 'Call-to-action-knoppen', description: 'Optimaliseer knoptekst, kleuren, plaatsing en ontwerp voor maximale clicks.', improvement: '+34%' },
      { title: 'Lead-formulieren', description: 'Stroomlijn formulieren om afhakers te verminderen en inzendingen te verhogen.', improvement: '+52%' },
      { title: 'Paginalayout & ontwerp', description: 'Structureer content en visuele hiërarchie om bezoekers naar conversie te leiden.', improvement: '+28%' },
      { title: 'Value proposition', description: 'Maak je boodschap glashelder en communiceer direct de voordelen.', improvement: '+45%' }
    ],
    servicesSection: { badge: 'Onze diensten', headPre: 'Datagedreven ', headHighlight: 'CRO-diensten', sub: 'We gebruiken bewezen methodieken en grondig testen om je conversie systematisch te verbeteren.' },
    services: [
      { title: 'Conversie-audit', description: 'Diepgaande analyse van je website om conversiebarrières en kansen te vinden.' },
      { title: 'A/B-testen', description: 'Datagedreven experimenten om uit te vinden wat het beste werkt voor jouw publiek.' },
      { title: 'Heatmap-analyse', description: 'Zie precies hoe bezoekers met je pagina interacteren via click- en scroll-maps.' },
      { title: 'Formulieroptimalisatie', description: 'Verminder frictie en verhoog inzendingen met geoptimaliseerde velden en layouts.' },
      { title: 'Landingspagina-ontwerp', description: 'Hoog converterende landingspagina\'s, specifiek gemaakt om conversie te maximaliseren.' },
      { title: 'Analytics-setup', description: 'Correcte tracking en rapportages om elk conversie-touchpoint te meten.' }
    ],
    testSection: { badge: 'A/B-testen', headPre: 'Wat we ', headHighlight: 'testen & optimaliseren', sub: 'Elk element op je website kan conversie beïnvloeden. We testen ze allemaal om winnende combinaties te vinden.' },
    whatWeTest: [
      'Headlines & copy', 'Knopkleuren & tekst', 'Formuliervelden & layout', 'Paginastructuur',
      'Afbeeldingen & video\'s', 'Plaatsing social proof', 'Presentatie van prijzen', 'Navigatie-elementen',
      'Mobiele ervaring', 'Checkout-flow', 'Trust-signalen', 'Exit-intent-aanbiedingen'
    ],
    processSection: { badge: 'Onze werkwijze', headPre: 'Het CRO-', headHighlight: 'framework' },
    process: [
      { step: '01', title: 'Onderzoek & audit', description: 'Analyseer je huidige conversiefunnel, gebruikersgedrag en identificeer quick wins.' },
      { step: '02', title: 'Hypothesen opstellen', description: 'Onderbouwde hypothesen ontwikkelen op basis van onderzoeksdata.' },
      { step: '03', title: 'Testen & experimenteren', description: 'Gecontroleerde A/B-tests om te valideren wat conversie écht verhoogt.' },
      { step: '04', title: 'Uitrollen & opschalen', description: 'Winnende varianten implementeren en doorgaan met optimaliseren.' }
    ],
    caseSection: { badge: 'Case study', headPre: 'Echte resultaten: ', headHighlight: 'e-commerce-klant', sub: 'Zie hoe we een e-commerce-klant in 90 dagen bijna verdrievoudigden in conversie.' },
    caseStudy: [
      { label: 'Conversie', before: '2,1%', after: '5,8%', change: '+176%' },
      { label: 'Leads per maand', before: '145', after: '412', change: '+184%' },
      { label: 'Kosten per lead', before: '€47', after: '€18', change: '-62%' },
      { label: 'Omzet', before: '€23K', after: '€67K', change: '+191%' }
    ],
    caseLabels: { before: 'Voor', after: 'Na' },
    testimonial: {
      quote: '"We waren eerst sceptisch over CRO, maar de resultaten spreken voor zich. Hetzelfde verkeer, drie keer zoveel leads. Het voelt alsof we geld vinden waar we niet wisten dat het was."',
      author: 'Lisa Bakker', role: 'Marketing Director, TechFlow B.V.'
    },
    lead: {
      heading: 'Klaar om meer bezoekers te converteren?',
      sub: 'Vraag een gratis conversie-audit aan en ontdek precies waar je potentiële klanten verliest \u2014 en hoe je dat oplost.',
      bullets: ['Volledige funnel-audit', 'Concurrentie-benchmark', 'Quick-win-kansen', 'CRO-roadmap op maat'],
      title: 'Vraag je gratis CRO-audit', subject: 'Aanvraag CRO-audit',
      button: 'Vraag mijn audit', footnote: 'Gratis audit met praktische aanbevelingen.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      website: 'Website-URL', websitePh: 'https://jouwwebsite.nl',
      traffic: 'Maandelijks websiteverkeer', trafficPh: 'Kies bezoekersaantal',
      trafficOpts: ['1.000 - 5.000 bezoekers', '5.000 - 20.000 bezoekers', '20.000 - 50.000 bezoekers', '50.000+ bezoekers']
    },
    quick: { heading: 'Klaar om je conversie te maximaliseren?', sub: 'Laten we vandaag je CRO-doelen bespreken.', email: 'Mail ons' }
  }
} as const

const SERVICE_ICONS = [BarChart3, SplitSquareVertical, Eye, FormInput, Layout, LineChart]
const AREA_ICONS = [MousePointer2, FormInput, Layout, Lightbulb]

export default function ConversionOptimization() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white">
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
                {t.headPre}<span className="text-yellow-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-amber-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaAudit}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#case-study" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaCase}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-yellow-200" aria-hidden />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{t.quick1.value}</div>
                    <div className="text-xs text-white/60">{t.quick1.label}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-yellow-200" aria-hidden />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{t.quick2.value}</div>
                    <div className="text-xs text-white/60">{t.quick2.label}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="space-y-2">
                    <div className="w-72 h-16 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-between px-4">
                      <span className="text-sm font-medium text-white">{t.funnel.visitors}</span>
                      <span className="text-lg font-bold text-white">10,000</span>
                    </div>
                    <div className="w-64 h-16 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-between px-4 mx-auto">
                      <span className="text-sm font-medium text-white">{t.funnel.engaged}</span>
                      <span className="text-lg font-bold text-white">4,200</span>
                    </div>
                    <div className="w-56 h-16 bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-between px-4 mx-auto">
                      <span className="text-sm font-medium text-white">{t.funnel.leads}</span>
                      <span className="text-lg font-bold text-white">890</span>
                    </div>
                    <div className="w-48 h-16 bg-gradient-to-r from-green-400/30 to-emerald-400/30 backdrop-blur-sm rounded-lg border border-green-400/40 flex items-center justify-between px-4 mx-auto">
                      <span className="text-sm font-medium text-white">{t.funnel.customers}</span>
                      <span className="text-lg font-bold text-green-300">312</span>
                    </div>
                  </div>

                  <div className="absolute -right-20 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <ArrowUpRight className="w-8 h-8 text-green-300" aria-hidden />
                    <div className="text-green-300 font-bold text-xl">+127%</div>
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
                  <Gauge className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.conv}</span>
                </div>
              </div>
              <div className="absolute bottom-16 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <PieChart className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.cpl}</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <RefreshCw className="w-4 h-4 text-yellow-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.roi}</span>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4" aria-hidden />
                <span>{t.problem.badge}</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                {t.problem.headPre}<span className="gradient-text">{t.problem.headHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">{t.problemBody}</p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">{t.math.title}</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">{t.math.visitors}</span>
                    <span className="font-medium text-slate-900">{t.math.visitorsVal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">{t.math.current}</span>
                    <span className="font-medium text-slate-900">{t.math.currentVal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">{t.math.leads}</span>
                    <span className="font-medium text-slate-900">{t.math.leadsVal}</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 mt-3">
                    <div className="flex justify-between text-green-600">
                      <span>{t.math.after}</span>
                      <span className="font-bold">{t.math.afterVal}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {t.areas.map((area, i) => {
                const Icon = AREA_ICONS[i]
                return (
                  <div key={area.title} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                        <Icon className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" aria-hidden />
                      </div>
                      <span className="text-green-600 font-bold text-sm">{area.improvement}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1 text-sm">{area.title}</h4>
                    <p className="text-xs text-slate-500">{area.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
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
                <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section className="py-20 lg:py-28 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <FlaskConical className="w-4 h-4" aria-hidden />
              <span>{t.testSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.testSection.headPre}<span className="text-amber-300">{t.testSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.testSection.sub}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {t.whatWeTest.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" aria-hidden />
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
              <RefreshCw className="w-4 h-4" aria-hidden />
              <span>{t.processSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.processSection.headPre}<span className="gradient-text">{t.processSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < t.process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-amber-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-study" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" aria-hidden />
              <span>{t.caseSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.caseSection.headPre}<span className="gradient-text">{t.caseSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.caseSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.caseStudy.map((metric) => (
              <div key={metric.label} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h4 className="text-sm font-medium text-slate-500 mb-4">{metric.label}</h4>
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <div className="text-xs text-slate-400 mb-1">{t.caseLabels.before}</div>
                    <div className="text-lg font-medium text-slate-400">{metric.before}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 mb-2" aria-hidden />
                  <div>
                    <div className="text-xs text-slate-400 mb-1">{t.caseLabels.after}</div>
                    <div className="text-lg font-bold text-slate-900">{metric.after}</div>
                  </div>
                </div>
                <div className={`text-center py-2 rounded-lg font-bold ${metric.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{metric.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">{t.testimonial.quote}</blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500" />
              <div className="text-left">
                <div className="font-semibold text-white">{t.testimonial.author}</div>
                <div className="text-slate-400 text-sm">{t.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-8 md:p-12 lg:p-16 overflow-hidden">
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
                      <CheckCircle2 className="w-5 h-5 text-yellow-200 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cro-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="cro-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="cro-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="cro-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="cro-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="cro-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="cro-website" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.website}</label>
                  <input type="url" id="cro-website" name="website" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder={t.lead.websitePh} />
                </div>
                <div>
                  <label htmlFor="cro-traffic" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.traffic}</label>
                  <select id="cro-traffic" name="traffic" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors">
                    <option value="">{t.lead.trafficPh}</option>
                    {t.lead.trafficOpts.map((opt) => (
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
