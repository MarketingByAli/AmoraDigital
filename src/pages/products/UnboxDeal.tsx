import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Sparkles, ShoppingCart, Lock, Truck, CreditCard, Search,
  BarChart3, Globe, Smartphone, Package, Shield, Users, TrendingUp, Settings, Database,
  Code2, ExternalLink, Layers, RefreshCw, Mail, Percent, Gift
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbProducts: 'Products', crumbCurrent: 'Unbox.deal',
    badge: 'Unboxing & Deals Marketplace',
    headPre: 'Unboxed Products at ', headHighlight: '50% Off',
    sub: 'Unbox.deal is an e-commerce platform built around the unboxing experience. We sell premium products that have been unboxed at 50% off\u2014giving customers incredible value while showcasing products through engaging unboxing content.',
    ctaVisit: 'Visit Unbox.deal', ctaCase: 'View Case Study',
    trust1: 'Secure Platform', trust2: '50% Off Deals', trust3: 'Managed by Amora Digital',
    dash: { title: 'Unbox.deal Dashboard', savings: 'Average Savings', deals: 'Unboxed Deals', conv: 'Deal Conversion', sat: 'Customer Satisfaction' },
    floats: { fifty: '50% Off', secure: 'Secure', mobile: 'Mobile First', unboxing: 'Unboxing' },
    achSection: { badge: 'Project Highlights', headPre: 'Building a Unique ', headHighlight: 'Unboxing Marketplace', sub: 'From concept to launch, we developed an e-commerce platform that combines the excitement of unboxing with unbeatable 50% off deals.' },
    achievements: [
      { title: 'Value-Driven Platform', description: 'Built a marketplace where customers discover premium unboxed products at 50% off retail prices.', stat: '50%', statLabel: 'Savings' },
      { title: 'Engaging Unboxing Content', description: 'Product presentation focused on the unboxing experience with video and imagery that drives conversions.', stat: '2.5x', statLabel: 'Engagement' },
      { title: 'Trusted Marketplace', description: 'Secure platform with verified products and reliable fulfillment for customer confidence.', stat: '100%', statLabel: 'Secure' }
    ],
    featuresSection: { badge: 'Platform Features', headPre: 'Built for ', headHighlight: 'Unboxing & Deals', sub: 'Unbox.deal is designed with features that showcase unboxed products and deliver exceptional value to customers.' },
    features: [
      { title: 'Unboxing Experience', description: 'Showcase unboxed products with high-quality visuals, video content, and detailed product presentations.' },
      { title: '50% Off Deals', description: 'Exclusive pricing on unboxed products\u2014customers get premium items at half the price.' },
      { title: 'Product Discovery', description: 'Smart search, category filtering, and curated collections of unboxed deals.' },
      { title: 'Secure Checkout', description: 'Integrated payment gateways with secure processing for seamless purchases.' },
      { title: 'Analytics & Insights', description: 'Sales tracking, inventory management, and performance reporting for unboxed inventory.' },
      { title: 'Efficient Fulfillment', description: 'Streamlined shipping, tracking integration, and reliable delivery for unboxed products.' },
      { title: 'Mobile-First Design', description: 'Fully responsive design optimized for browsing and buying on all devices.' },
      { title: 'Customer Management', description: 'User accounts, order history, wishlists, and personalized deal recommendations.' }
    ],
    processSection: { badge: 'Development Process', headPre: 'How We Built ', headHighlight: 'Unbox.deal' },
    process: [
      { step: '01', title: 'Platform Strategy', description: 'Market research and defining the unique unboxing + deals marketplace concept.' },
      { step: '02', title: 'Custom Development', description: 'Built on WooCommerce with custom features for unboxed product presentation and 50% pricing.' },
      { step: '03', title: 'Payment & Security', description: 'Integrated secure payment gateways with smooth checkout for deal purchases.' },
      { step: '04', title: 'Launch & Growth', description: 'Ongoing optimization, SEO, content marketing, and continuous feature enhancements.' }
    ],
    stackSection: { badge: 'Technology Stack', headPre: 'Built with Modern ', headHighlight: 'Technologies', sub: 'We leveraged powerful technologies and custom development to create a robust unboxing marketplace platform.' },
    techStack: [
      { name: 'WooCommerce', description: 'Powerful e-commerce platform' },
      { name: 'WordPress', description: 'Flexible CMS foundation' },
      { name: 'Custom Development', description: 'Tailored unboxing features' },
      { name: 'Payment Integration', description: 'Secure payment processing' },
      { name: 'Cloud Hosting', description: 'Fast and reliable infrastructure' },
      { name: 'SEO Optimization', description: 'Search engine visibility' }
    ],
    servicesSection: { badge: 'Services Provided', headPre: 'Complete Marketplace ', headHighlight: 'Management' },
    services: [
      'Custom WooCommerce Development', 'Unboxing Product Presentation', 'Deal & Pricing Management', 'Payment Gateway Integration',
      'Inventory Management', 'SEO & Content Strategy', 'Email Marketing Automation', 'Customer Analytics',
      'Mobile Optimization', 'Security & Compliance', 'Performance Optimization', 'Ongoing Maintenance'
    ],
    cta1: { heading: 'See Unbox.deal in Action', sub: 'Visit Unbox.deal to discover unboxed products at 50% off\u2014a perfect example of our e-commerce development expertise for unique marketplaces.', button: 'Visit Unbox.deal', footnote: 'Developed & managed by Amora Digital' },
    cta2: { heading: 'Need Your Own E-Commerce Platform?', sub: 'We can build a custom online store for your business with the same level of quality, security, and performance as Unbox.deal.', bullets: ['Custom WooCommerce development', 'Secure payment integration', 'Mobile-optimized design', 'Ongoing support & management'], button: 'Build Your Own E-Commerce Store' },
    quick: { heading: 'Ready to build your e-commerce platform?', sub: "Let's discuss how we can help grow your online business.", visit: 'Visit Platform', contact: 'Contact Us' }
  },
  nl: {
    crumbHome: 'Home', crumbProducts: 'Producten', crumbCurrent: 'Unbox.deal',
    badge: 'Unboxing- & deals-marktplaats',
    headPre: 'Unboxed producten met ', headHighlight: '50% korting',
    sub: "Unbox.deal is een e-commerce-platform rond de unboxing-ervaring. We verkopen premium producten die zijn unboxed met 50% korting \u2014 ongekend veel waarde voor klanten, mooi getoond via boeiende unboxing-content.",
    ctaVisit: 'Bezoek Unbox.deal', ctaCase: 'Bekijk case study',
    trust1: 'Veilig platform', trust2: '50% korting-deals', trust3: 'Beheerd door Amora Digital',
    dash: { title: 'Unbox.deal-dashboard', savings: 'Gemiddelde besparing', deals: 'Unboxed deals', conv: 'Deal-conversie', sat: 'Klanttevredenheid' },
    floats: { fifty: '50% korting', secure: 'Veilig', mobile: 'Mobile first', unboxing: 'Unboxing' },
    achSection: { badge: 'Project-hoogtepunten', headPre: 'Een unieke ', headHighlight: 'unboxing-marktplaats bouwen', sub: 'Van concept tot lancering: wij ontwikkelden een e-commerce-platform dat de spanning van unboxing combineert met onverslaanbare 50%-korting-deals.' },
    achievements: [
      { title: 'Waarde-gedreven platform', description: 'Een marktplaats waar klanten premium unboxed producten ontdekken met 50% korting op de retailprijs.', stat: '50%', statLabel: 'Besparing' },
      { title: 'Boeiende unboxing-content', description: "Productpresentatie rond de unboxing-ervaring met video en beelden die conversie aanjagen.", stat: '2,5x', statLabel: 'Engagement' },
      { title: 'Vertrouwde marktplaats', description: 'Veilig platform met geverifieerde producten en betrouwbare fulfillment voor maximaal klantvertrouwen.', stat: '100%', statLabel: 'Veilig' }
    ],
    featuresSection: { badge: 'Platform-features', headPre: 'Gebouwd voor ', headHighlight: 'unboxing & deals', sub: 'Unbox.deal is ontworpen met features die unboxed producten in de spotlight zetten en uitzonderlijke waarde aan klanten leveren.' },
    features: [
      { title: 'Unboxing-ervaring', description: 'Unboxed producten in de spotlight met hoge-kwaliteit-visuals, video-content en gedetailleerde productpresentaties.' },
      { title: '50% korting-deals', description: 'Exclusieve prijzen op unboxed producten \u2014 klanten krijgen premium artikelen voor de helft van de prijs.' },
      { title: 'Product-discovery', description: 'Slimme zoekfunctie, categoriefilters en gecureerde collecties unboxed deals.' },
      { title: 'Veilige checkout', description: 'Geïntegreerde payment gateways met veilige verwerking voor soepele aankopen.' },
      { title: 'Analytics & inzichten', description: 'Sales-tracking, voorraadbeheer en performance-rapportage voor unboxed voorraad.' },
      { title: 'Efficiënte fulfillment', description: 'Gestroomlijnde verzending, track & trace-integratie en betrouwbare levering van unboxed producten.' },
      { title: 'Mobile-first-design', description: 'Volledig responsive en geoptimaliseerd voor browsen en kopen op elk device.' },
      { title: 'Klantbeheer', description: 'User-accounts, bestelhistorie, wishlists en gepersonaliseerde deal-aanbevelingen.' }
    ],
    processSection: { badge: 'Ontwikkelproces', headPre: 'Zo bouwden we ', headHighlight: 'Unbox.deal' },
    process: [
      { step: '01', title: 'Platformstrategie', description: 'Marktonderzoek en uitwerken van het unieke unboxing- en deals-marktplaats-concept.' },
      { step: '02', title: 'Custom development', description: 'Op WooCommerce gebouwd met custom features voor unboxed-presentatie en 50%-pricing.' },
      { step: '03', title: 'Betaling & security', description: 'Veilige payment gateways geïntegreerd met een soepele checkout voor deal-aankopen.' },
      { step: '04', title: 'Launch & groei', description: 'Doorlopende optimalisatie, SEO, contentmarketing en continue feature-uitbreidingen.' }
    ],
    stackSection: { badge: 'Tech stack', headPre: 'Gebouwd met moderne ', headHighlight: 'technologieën', sub: 'We zetten krachtige technologieën en maatwerkontwikkeling in voor een robuust unboxing-marktplaats-platform.' },
    techStack: [
      { name: 'WooCommerce', description: 'Krachtig e-commerce-platform' },
      { name: 'WordPress', description: 'Flexibele CMS-basis' },
      { name: 'Custom development', description: 'Unboxing-features op maat' },
      { name: 'Payment-integratie', description: 'Veilige betalingsverwerking' },
      { name: 'Cloud-hosting', description: 'Snelle en betrouwbare infrastructuur' },
      { name: 'SEO-optimalisatie', description: 'Zichtbaarheid in zoekmachines' }
    ],
    servicesSection: { badge: 'Geleverde diensten', headPre: 'Volledig marktplaats-', headHighlight: 'beheer' },
    services: [
      'Custom WooCommerce-development', 'Unboxing-productpresentatie', 'Deal- & pricing-beheer', 'Payment-gateway-integratie',
      'Voorraadbeheer', 'SEO & content-strategie', 'E-mailmarketing-automatisering', 'Klant-analytics',
      'Mobiele optimalisatie', 'Security & compliance', 'Performance-optimalisatie', 'Doorlopend onderhoud'
    ],
    cta1: { heading: 'Zie Unbox.deal in actie', sub: 'Bezoek Unbox.deal en ontdek unboxed producten met 50% korting \u2014 een perfect voorbeeld van onze e-commerce-expertise voor unieke marktplaatsen.', button: 'Bezoek Unbox.deal', footnote: 'Ontwikkeld & beheerd door Amora Digital' },
    cta2: { heading: 'Een eigen e-commerce-platform nodig?', sub: 'Wij bouwen een online winkel op maat voor jouw business met dezelfde kwaliteit, security en performance als Unbox.deal.', bullets: ['Custom WooCommerce-development', 'Veilige betalings-integratie', 'Mobiel-geoptimaliseerd design', 'Doorlopende support & beheer'], button: 'Bouw je eigen e-commerce-winkel' },
    quick: { heading: 'Klaar om je e-commerce-platform te bouwen?', sub: 'Laten we bespreken hoe wij jouw online business kunnen laten groeien.', visit: 'Bezoek platform', contact: 'Contact' }
  }
} as const

const FEATURE_ICONS = [Gift, Percent, Search, CreditCard, BarChart3, Truck, Smartphone, Users]
const TECH_ICONS = [ShoppingCart, Globe, Code2, CreditCard, Database, TrendingUp]

export default function UnboxDeal() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-600 to-rose-600 text-white">
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
                <span className="text-white/60">{t.crumbProducts}</span>
                <span className="text-white/40" aria-hidden>/</span>
                <span className="text-white">{t.crumbCurrent}</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Gift className="w-4 h-4" aria-hidden />
                <span>{t.badge}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t.headPre}<span className="text-amber-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://unbox.deal/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-amber-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaVisit}
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#case-study" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaCase}
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-300" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-amber-300" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-300" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust3}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-400/30 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                  <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                    <Gift className="w-5 h-5" aria-hidden />
                    <span className="font-semibold">{t.dash.title}</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">50%</div>
                        <div className="text-xs text-slate-600">{t.dash.savings}</div>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-xl">
                        <div className="text-2xl font-bold text-amber-600">892</div>
                        <div className="text-xs text-slate-600">{t.dash.deals}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">{t.dash.conv}</span>
                        <span className="font-semibold text-slate-900">4.1%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-amber-500 to-orange-600" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">{t.dash.sat}</span>
                        <span className="font-semibold text-slate-900">4.7/5.0</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[94%] bg-gradient-to-r from-amber-500 to-orange-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Percent className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.fifty}</span>
                </div>
              </div>
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Lock className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.secure}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Smartphone className="w-4 h-4 text-cyan-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.mobile}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <Gift className="w-4 h-4 text-yellow-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.unboxing}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" aria-hidden />
              <span>{t.achSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.achSection.headPre}<span className="gradient-text">{t.achSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.achSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.achievements.map((achievement) => (
              <div key={achievement.title} className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all group">
                <div className="text-5xl font-bold text-orange-400 mb-4 group-hover:text-orange-500 transition-colors">{achievement.stat}</div>
                <div className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-3">{achievement.statLabel}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{achievement.title}</h3>
                <p className="text-slate-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" aria-hidden />
              <span>{t.featuresSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.featuresSection.headPre}<span className="gradient-text">{t.featuresSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.featuresSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div key={feature.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="case-study" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
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
                <div className="text-6xl font-bold text-orange-400 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" aria-hidden />
              <span>{t.stackSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.stackSection.headPre}<span className="text-amber-400">{t.stackSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.stackSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.techStack.map((tech, i) => {
              const Icon = TECH_ICONS[i]
              return (
                <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                      <p className="text-sm text-white/70">{tech.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <RefreshCw className="w-4 h-4" aria-hidden />
              <span>{t.servicesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.servicesSection.headPre}<span className="gradient-text">{t.servicesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {t.services.map((service) => (
              <div key={service} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white hover:bg-amber-50 hover:border-amber-200 border border-slate-100 transition-colors shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" aria-hidden />
                <span className="text-sm text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-amber-500 via-orange-600 to-rose-600 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <Gift className="w-12 h-12 text-amber-200 mb-6" aria-hidden />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t.cta1.heading}</h3>
                <p className="text-lg text-white/90 mb-8">{t.cta1.sub}</p>
                <a href="https://unbox.deal/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-amber-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.cta1.button}
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <p className="mt-6 text-sm text-white/70">{t.cta1.footnote}</p>
              </div>
            </div>

            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 md:p-12 overflow-hidden border border-slate-700">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <Code2 className="w-12 h-12 text-amber-400 mb-6" aria-hidden />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t.cta2.heading}</h3>
                <p className="text-lg text-slate-300 mb-8">{t.cta2.sub}</p>
                <ul className="space-y-3 mb-8">
                  {t.cta2.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={ROUTES.contact[locale]} className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg group">
                  {t.cta2.button}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </Link>
              </div>
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
              <a href="https://unbox.deal/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4" aria-hidden />
                {t.quick.visit}
              </a>
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
