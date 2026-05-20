import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, ShoppingCart, CreditCard, Package, Truck, BarChart3, Shield,
  Star, Phone, Mail, Globe, Smartphone, Search, TrendingUp, Settings, Layers, RefreshCw
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbDev: 'Development', crumbCurrent: 'E-Commerce',
    headPre: 'Online Stores That ', headHighlight: 'Sell',
    sub: 'Build a powerful online store that converts visitors into customers. From WooCommerce to Shopify to fully custom solutions\u2014we create e-commerce experiences that drive revenue.',
    ctaStart: 'Start Your Store', ctaPlatforms: 'View Platforms',
    trust1: '€10M+ Sales Generated', trust2: 'Secure & PCI Compliant',
    floats: { ordered: 'Order Placed!', pay: 'Secure Pay', ship: 'Fast Shipping', reviews: '5-Star Reviews' },
    cart: { items: '2 items' },
    stats: [
      { value: '€10M+', label: 'Sales Generated', description: 'For our clients' },
      { value: '150+', label: 'Stores Built', description: 'Successfully launched' },
      { value: '3x', label: 'Avg. Sales Increase', description: 'After optimization' },
      { value: '99.9%', label: 'Uptime', description: 'Store reliability' }
    ],
    featuresSection: { badge: 'Why Us', headPre: 'E-Commerce Built for ', headHighlight: 'Success', sub: 'Every store we build is optimized for conversions, speed, and growth.' },
    features: [
      { title: 'Mobile-First Design', description: '70% of shoppers buy on mobile' },
      { title: 'SEO Optimized', description: 'Built-in search visibility' },
      { title: 'Lightning Fast', description: 'Speed = more conversions' },
      { title: 'Secure Checkout', description: 'PCI compliant & SSL secured' },
      { title: 'Conversion Focused', description: 'Optimized for sales' },
      { title: 'Easy Management', description: 'User-friendly admin panel' }
    ],
    servicesSection: { badge: 'Our Services', headPre: 'E-Commerce ', headHighlight: 'Services' },
    services: [
      { title: 'Custom E-Commerce', description: 'Fully custom online stores built from scratch to match your unique business requirements.' },
      { title: 'WooCommerce', description: 'Powerful WordPress-based stores with unlimited customization possibilities.' },
      { title: 'Shopify Development', description: 'Custom Shopify themes and apps for a premium shopping experience.' },
      { title: 'Payment Integration', description: 'Secure payment gateways including Stripe, PayPal, iDEAL, and more.' },
      { title: 'Inventory Management', description: 'Real-time stock tracking, automated reordering, and warehouse integration.' },
      { title: 'Shipping & Fulfillment', description: 'Automated shipping rates, tracking, and fulfillment integrations.' }
    ],
    platformsSection: { badge: 'Platforms', headPre: 'Choose Your ', headHighlight: 'Platform', sub: 'We work with all major e-commerce platforms. Pick what works best for your business.' },
    platforms: [
      { name: 'WooCommerce', description: 'WordPress-powered flexibility', color: 'from-purple-500 to-purple-600' },
      { name: 'Shopify', description: 'Hosted simplicity', color: 'from-green-500 to-green-600' },
      { name: 'Magento', description: 'Enterprise power', color: 'from-orange-500 to-orange-600' },
      { name: 'Custom Built', description: 'Total control', color: 'from-blue-500 to-blue-600' }
    ],
    storeFeaturesSection: { badge: 'Features', headPre: 'Everything You Need to ', headHighlight: 'Sell Online', sub: 'Our e-commerce solutions come packed with all the features you need to run a successful online store, from day one.' },
    ecommerceFeatures: [
      'Product catalog management', 'Shopping cart & checkout', 'Customer accounts', 'Order management',
      'Discount & coupon codes', 'Wishlist functionality', 'Product reviews & ratings', 'Multi-currency support',
      'Tax calculation', 'Shipping integrations', 'Email notifications', 'Analytics dashboard'
    ],
    dash: { heading: 'Your Sales Dashboard', revenue: "Today's Revenue", orders: 'Orders', visitors: 'Visitors', conv: 'Conversion Rate' },
    integrationsSection: { badge: 'Integrations', headPre: 'Connect With Your ', headHighlight: 'Favorite Tools' },
    integrations: [
      { name: 'Stripe', category: 'Payment' }, { name: 'PayPal', category: 'Payment' },
      { name: 'iDEAL', category: 'Payment' }, { name: 'Klarna', category: 'Payment' },
      { name: 'PostNL', category: 'Shipping' }, { name: 'DHL', category: 'Shipping' },
      { name: 'Mailchimp', category: 'Marketing' }, { name: 'Klaviyo', category: 'Marketing' },
      { name: 'Google Analytics', category: 'Analytics' }, { name: 'Facebook Pixel', category: 'Analytics' },
      { name: 'Exact Online', category: 'Accounting' }, { name: 'Lightspeed', category: 'POS' }
    ],
    processSection: { badge: 'Our Process', headPre: 'How We Build Your ', headHighlight: 'Online Store' },
    process: [
      { step: '01', title: 'Discovery', description: 'We analyze your products, target audience, and business goals to plan the perfect store.' },
      { step: '02', title: 'Design', description: 'Create beautiful, conversion-optimized designs that reflect your brand.' },
      { step: '03', title: 'Development', description: 'Build your store with all features, integrations, and customizations.' },
      { step: '04', title: 'Launch & Grow', description: 'Go live with ongoing optimization to maximize sales and growth.' }
    ],
    testimonial: {
      quote: '"Our new WooCommerce store increased our online sales by 340%. The checkout process is smooth and we get far fewer abandoned carts."',
      author: 'Maria Bakker', role: 'Owner, Dutch Fashion Store'
    },
    lead: {
      heading: 'Ready to Sell Online?',
      sub: "Let's build an online store that grows your business. Get a free consultation and store proposal.",
      bullets: ['Free e-commerce consultation', 'Platform recommendation', 'Feature planning', 'No obligation quote'],
      title: 'Start Your Online Store', subject: 'E-Commerce Solutions Inquiry',
      button: 'Get Free Consultation', footnote: "Free consultation. We'll respond within 24 hours.",
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com',
      platform: 'Preferred Platform', platformPh: 'Select platform',
      platformOpts: ['WooCommerce', 'Shopify', 'Magento', 'Custom Built', 'Not sure yet'],
      products: 'Number of Products', productsPh: 'Select range',
      productsOpts: ['1 - 50 products', '51 - 200 products', '201 - 1,000 products', '1,000+ products']
    },
    quick: { heading: 'Ready to start selling online?', sub: "Let's discuss your e-commerce project today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbDev: 'Ontwikkeling', crumbCurrent: 'E-commerce',
    headPre: 'Webshops die ', headHighlight: 'verkopen',
    sub: 'Bouw een krachtige webshop die bezoekers in klanten verandert. Van WooCommerce tot Shopify tot volledig maatwerk \u2014 wij maken e-commerce-ervaringen die omzet opleveren.',
    ctaStart: 'Start je webshop', ctaPlatforms: 'Bekijk platforms',
    trust1: '€10M+ omzet gegenereerd', trust2: 'Veilig & PCI-compliant',
    floats: { ordered: 'Bestelling geplaatst!', pay: 'Veilig betalen', ship: 'Snelle verzending', reviews: '5-sterren-reviews' },
    cart: { items: '2 items' },
    stats: [
      { value: '€10M+', label: 'Omzet gegenereerd', description: 'Voor onze klanten' },
      { value: '150+', label: 'Webshops gebouwd', description: 'Succesvol gelanceerd' },
      { value: '3x', label: 'Gem. omzetstijging', description: 'Na optimalisatie' },
      { value: '99,9%', label: 'Uptime', description: 'Betrouwbaarheid van je shop' }
    ],
    featuresSection: { badge: 'Waarom wij', headPre: 'E-commerce gebouwd voor ', headHighlight: 'succes', sub: 'Elke shop die we bouwen is geoptimaliseerd voor conversie, snelheid en groei.' },
    features: [
      { title: 'Mobile-first ontwerp', description: '70% van de shoppers koopt op mobiel' },
      { title: 'SEO-geoptimaliseerd', description: 'Standaard goed vindbaar' },
      { title: 'Razendsnel', description: 'Snelheid = meer conversies' },
      { title: 'Veilige checkout', description: 'PCI-compliant & SSL-beveiligd' },
      { title: 'Conversiegericht', description: 'Geoptimaliseerd om te verkopen' },
      { title: 'Eenvoudig beheer', description: 'Gebruiksvriendelijk admin-paneel' }
    ],
    servicesSection: { badge: 'Onze diensten', headPre: 'E-commerce-', headHighlight: 'diensten' },
    services: [
      { title: 'Custom e-commerce', description: 'Volledig op maat gebouwde webshops, perfect afgestemd op jouw business.' },
      { title: 'WooCommerce', description: 'Krachtige WordPress-shops met onbeperkte maatwerkmogelijkheden.' },
      { title: 'Shopify-development', description: 'Custom Shopify-themes en apps voor een premium shopervaring.' },
      { title: 'Betaalintegraties', description: 'Veilige payment gateways: Stripe, PayPal, iDEAL en meer.' },
      { title: 'Voorraadbeheer', description: 'Realtime voorraad, automatisch bestellen en magazijnkoppelingen.' },
      { title: 'Verzending & fulfilment', description: 'Geautomatiseerde verzendkosten, tracking en fulfilment-koppelingen.' }
    ],
    platformsSection: { badge: 'Platforms', headPre: 'Kies je ', headHighlight: 'platform', sub: 'We werken met alle grote e-commerce-platforms. Kies wat het beste past bij je business.' },
    platforms: [
      { name: 'WooCommerce', description: 'WordPress-flexibiliteit', color: 'from-purple-500 to-purple-600' },
      { name: 'Shopify', description: 'Gehoste eenvoud', color: 'from-green-500 to-green-600' },
      { name: 'Magento', description: 'Enterprise-kracht', color: 'from-orange-500 to-orange-600' },
      { name: 'Custom-built', description: 'Volledige controle', color: 'from-blue-500 to-blue-600' }
    ],
    storeFeaturesSection: { badge: 'Features', headPre: 'Alles wat je nodig hebt om ', headHighlight: 'online te verkopen', sub: 'Onze e-commerce-oplossingen bevatten alle features om vanaf dag één een succesvolle webshop te runnen.' },
    ecommerceFeatures: [
      'Productcatalogusbeheer', 'Winkelmandje & checkout', 'Klantaccounts', 'Orderbeheer',
      'Kortings- & couponcodes', 'Wishlist-functionaliteit', 'Productreviews & beoordelingen', 'Multi-valuta-ondersteuning',
      'Btw-berekening', 'Verzendintegraties', 'E-mailmeldingen', 'Analytics-dashboard'
    ],
    dash: { heading: 'Jouw verkoop-dashboard', revenue: 'Omzet vandaag', orders: 'Bestellingen', visitors: 'Bezoekers', conv: 'Conversie' },
    integrationsSection: { badge: 'Integraties', headPre: 'Verbind met je ', headHighlight: 'favoriete tools' },
    integrations: [
      { name: 'Stripe', category: 'Betalen' }, { name: 'PayPal', category: 'Betalen' },
      { name: 'iDEAL', category: 'Betalen' }, { name: 'Klarna', category: 'Betalen' },
      { name: 'PostNL', category: 'Verzending' }, { name: 'DHL', category: 'Verzending' },
      { name: 'Mailchimp', category: 'Marketing' }, { name: 'Klaviyo', category: 'Marketing' },
      { name: 'Google Analytics', category: 'Analytics' }, { name: 'Facebook Pixel', category: 'Analytics' },
      { name: 'Exact Online', category: 'Boekhouding' }, { name: 'Lightspeed', category: 'POS' }
    ],
    processSection: { badge: 'Onze werkwijze', headPre: 'Zo bouwen we je ', headHighlight: 'webshop' },
    process: [
      { step: '01', title: 'Discovery', description: 'We analyseren je producten, doelgroep en doelen om de perfecte shop te plannen.' },
      { step: '02', title: 'Ontwerp', description: 'Mooie, conversiegerichte ontwerpen die je merk uitstralen.' },
      { step: '03', title: 'Ontwikkeling', description: 'We bouwen je shop met alle features, integraties en maatwerk.' },
      { step: '04', title: 'Lancering & groei', description: 'Live gaan met doorlopende optimalisatie voor meer omzet en groei.' }
    ],
    testimonial: {
      quote: '"Onze nieuwe WooCommerce-shop verhoogde onze online omzet met 340%. Het checkout-proces is soepel en we hebben veel minder verlaten winkelwagentjes."',
      author: 'Maria Bakker', role: 'Eigenaar, Nederlandse modeshop'
    },
    lead: {
      heading: 'Klaar om online te verkopen?',
      sub: 'Laten we een webshop bouwen die je business laat groeien. Vraag een gratis consult en voorstel aan.',
      bullets: ['Gratis e-commerce-consult', 'Platformadvies', 'Feature-planning', 'Vrijblijvende offerte'],
      title: 'Start je webshop', subject: 'Aanvraag e-commerce-oplossingen',
      button: 'Vraag gratis consult', footnote: 'Gratis consult. We reageren binnen 24 uur.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      platform: 'Voorkeursplatform', platformPh: 'Kies platform',
      platformOpts: ['WooCommerce', 'Shopify', 'Magento', 'Custom-built', 'Weet ik nog niet'],
      products: 'Aantal producten', productsPh: 'Kies aantal',
      productsOpts: ['1 - 50 producten', '51 - 200 producten', '201 - 1.000 producten', '1.000+ producten']
    },
    quick: { heading: 'Klaar om online te verkopen?', sub: 'Laten we vandaag je e-commerce-project bespreken.', email: 'Mail ons' }
  }
} as const

const SERVICE_ICONS = [ShoppingCart, Globe, Layers, CreditCard, Package, Truck]
const FEATURE_ICONS = [Smartphone, Search, Zap, Shield, TrendingUp, RefreshCw]

export default function ECommerceSolutions() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 text-white">
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
                <Link to={ROUTES.development[locale]} className="text-white/60 hover:text-white transition-colors">{t.crumbDev}</Link>
                <span className="text-white/40" aria-hidden>/</span>
                <span className="text-white">{t.crumbCurrent}</span>
              </nav>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t.headPre}<span className="text-emerald-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-green-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaStart}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#platforms" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaPlatforms}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="flex-1 mx-4 px-3 py-1 bg-white/10 rounded text-xs text-white/60">yourstore.com</div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="h-16 bg-white/20 rounded mb-2" />
                        <div className="h-2 bg-white/30 rounded w-3/4 mb-1" />
                        <div className="text-xs text-emerald-300 font-bold">€49.99</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="h-16 bg-white/20 rounded mb-2" />
                        <div className="h-2 bg-white/30 rounded w-3/4 mb-1" />
                        <div className="text-xs text-emerald-300 font-bold">€79.99</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-emerald-500/30 rounded-lg border border-emerald-400/30">
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4 text-white" aria-hidden />
                        <span className="text-sm text-white">{t.cart.items}</span>
                      </div>
                      <span className="text-sm font-bold text-emerald-200">€129.98</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.ordered}</span>
                </div>
              </div>
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <CreditCard className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.pay}</span>
                </div>
              </div>
              <div className="absolute bottom-24 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Truck className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.ship}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-yellow-300 fill-current" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.reviews}</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.featuresSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.featuresSection.headPre}<span className="gradient-text">{t.featuresSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.featuresSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div key={feature.title} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:shadow-lg transition-all border border-transparent hover:border-emerald-100">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" aria-hidden />
              <span>{t.servicesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.servicesSection.headPre}<span className="gradient-text">{t.servicesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i]
              return (
                <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section id="platforms" className="py-20 lg:py-28 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
              <span>{t.platformsSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.platformsSection.headPre}<span className="text-emerald-300">{t.platformsSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.platformsSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.platforms.map((platform) => (
              <div key={platform.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <ShoppingCart className="w-8 h-8 text-white" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-white/70">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
                <Package className="w-4 h-4" aria-hidden />
                <span>{t.storeFeaturesSection.badge}</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                {t.storeFeaturesSection.headPre}<span className="gradient-text">{t.storeFeaturesSection.headHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">{t.storeFeaturesSection.sub}</p>

              <div className="grid grid-cols-2 gap-3">
                {t.ecommerceFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" aria-hidden />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <h4 className="font-bold text-slate-900 mb-6">{t.dash.heading}</h4>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-500">{t.dash.revenue}</span>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">+23%</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">€4,892.50</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-sm text-slate-500 mb-1">{t.dash.orders}</div>
                    <div className="text-xl font-bold text-slate-900">47</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-sm text-slate-500 mb-1">{t.dash.visitors}</div>
                    <div className="text-xl font-bold text-slate-900">1,284</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm text-slate-500 mb-2">{t.dash.conv}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '37%' }} />
                    </div>
                    <span className="text-sm font-bold text-emerald-600">3.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <RefreshCw className="w-4 h-4" aria-hidden />
              <span>{t.integrationsSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.integrationsSection.headPre}<span className="gradient-text">{t.integrationsSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.integrations.map((integration) => (
              <div key={integration.name} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-md hover:border-emerald-200 transition-all text-center">
                <div className="text-sm font-medium text-slate-900">{integration.name}</div>
                <div className="text-xs text-slate-500">{integration.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" aria-hidden />
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
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-emerald-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600" />
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
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 p-8 md:p-12 lg:p-16 overflow-hidden">
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
                      <CheckCircle2 className="w-5 h-5 text-emerald-200 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-lg shadow-emerald-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ec-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="ec-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="ec-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="ec-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="ec-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="ec-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="ec-platform" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.platform}</label>
                  <select id="ec-platform" name="storePlatform" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors">
                    <option value="">{t.lead.platformPh}</option>
                    {t.lead.platformOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ec-products" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.products}</label>
                  <select id="ec-products" name="products" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors">
                    <option value="">{t.lead.productsPh}</option>
                    {t.lead.productsOpts.map((opt) => (
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
