import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, Database, Server, Globe, Layers, Shield, Star, Phone, Mail,
  Settings, Package, RefreshCw, Lock, Rocket, BarChart3, ShoppingCart, FileCode, Wrench
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbDev: 'Development', crumbCurrent: 'PHP',
    headPre: 'PHP That Powers ', headHighlight: 'The Web',
    sub: 'From Laravel to WordPress, we build robust PHP applications that scale. Join 80% of the web running on PHP\u2014the language that powers billions of websites.',
    ctaStart: 'Start Your Project', ctaStack: 'View Frameworks',
    trust1: '80% of Web Uses PHP', trust2: 'Enterprise-Ready',
    stats: [
      { value: '300+', label: 'PHP Projects', description: 'Successfully delivered' },
      { value: '12+', label: 'Years Experience', description: 'In PHP development' },
      { value: '80%', label: 'Web Runs PHP', description: 'Of all websites' },
      { value: '99.9%', label: 'Uptime', description: 'System reliability' }
    ],
    whySection: { badge: 'Why PHP', headPre: 'Why Choose ', headHighlight: 'PHP', sub: 'PHP has powered the web for decades and continues to evolve with modern features.' },
    whyPHP: [
      { title: 'Battle-Tested', description: 'Powers 80% of websites including Facebook, Wikipedia, and WordPress.' },
      { title: 'Cost-Effective', description: 'Large talent pool and extensive libraries reduce development costs.' },
      { title: 'Fast Development', description: 'Rapid prototyping and quick time-to-market with mature frameworks.' },
      { title: 'Scalable', description: 'Handles millions of requests\u2014proven at enterprise scale.' },
      { title: 'Great Hosting', description: 'Supported by virtually every web host, often at lower costs.' },
      { title: 'Rich Ecosystem', description: 'Thousands of packages, plugins, and integrations available.' }
    ],
    servicesSection: { badge: 'Our Services', headPre: 'PHP Development ', headHighlight: 'Services' },
    services: [
      { title: 'Custom PHP Development', description: 'Tailor-made PHP applications built to your exact specifications and business needs.' },
      { title: 'E-Commerce Solutions', description: 'WooCommerce, Magento, and custom PHP shopping cart development.' },
      { title: 'WordPress Development', description: 'Custom themes, plugins, and full WordPress solutions.' },
      { title: 'API Development', description: 'RESTful APIs and microservices with Laravel, Symfony, or custom PHP.' },
      { title: 'Legacy Modernization', description: 'Upgrade and modernize your existing PHP applications.' },
      { title: 'Maintenance & Support', description: 'Ongoing support, security updates, and performance optimization.' }
    ],
    frameworksSection: { badge: 'Frameworks', headPre: 'PHP ', headHighlight: 'Frameworks', sub: 'We work with all major PHP frameworks. Choose the right tool for your project.' },
    frameworks: [
      { name: 'Laravel', description: 'Modern, elegant syntax', color: 'from-red-500 to-red-600', popularity: 'Most Popular' },
      { name: 'Symfony', description: 'Enterprise-grade', color: 'from-slate-700 to-slate-800', popularity: 'Enterprise' },
      { name: 'WordPress', description: 'CMS & websites', color: 'from-blue-500 to-blue-600', popularity: '43% of Web' },
      { name: 'CodeIgniter', description: 'Lightweight & fast', color: 'from-orange-500 to-orange-600', popularity: 'Lightweight' }
    ],
    stackSection: { badge: 'Tech Stack', headPre: 'Our PHP ', headHighlight: 'Tech Stack' },
    techStack: [
      { category: 'Frameworks', items: ['Laravel', 'Symfony', 'CodeIgniter', 'Yii', 'CakePHP'] },
      { category: 'CMS', items: ['WordPress', 'Drupal', 'Joomla', 'Magento', 'PrestaShop'] },
      { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MariaDB', 'Redis', 'MongoDB'] },
      { category: 'Tools', items: ['Composer', 'PHPUnit', 'Docker', 'Git', 'CI/CD'] }
    ],
    useCasesSection: { badge: 'Use Cases', headPre: 'What We ', headHighlight: 'Build' },
    useCases: [
      { title: 'Corporate Websites', description: 'Professional websites with CMS for easy content management.' },
      { title: 'E-Commerce Stores', description: 'Online shops with WooCommerce, Magento, or custom solutions.' },
      { title: 'Web Applications', description: 'CRM, ERP, booking systems, and custom business tools.' },
      { title: 'APIs & Backends', description: 'RESTful APIs and backend services for web and mobile apps.' }
    ],
    processSection: { badge: 'Our Process', headPre: 'Development ', headHighlight: 'Process' },
    process: [
      { step: '01', title: 'Requirements', description: 'We analyze your needs, choose the right framework, and plan the architecture.' },
      { step: '02', title: 'Design', description: 'Database design, API specifications, and UI/UX planning.' },
      { step: '03', title: 'Development', description: 'Agile development with regular demos and feedback cycles.' },
      { step: '04', title: 'Testing', description: 'Comprehensive testing: unit tests, integration tests, and security audits.' },
      { step: '05', title: 'Launch', description: 'Deployment, performance optimization, and go-live support.' }
    ],
    includedSection: { badge: "What's Included", headPre: 'Every Project ', headHighlight: 'Includes', sub: "We don't cut corners. Every PHP project we deliver includes these essentials for a production-ready application." },
    features: [
      'Clean, maintainable code', 'PSR standards compliance', 'Comprehensive documentation',
      'Security best practices', 'Performance optimization', 'Database optimization',
      'Caching strategies', 'API documentation', 'Unit & integration tests',
      'CI/CD pipeline setup', 'Server configuration', 'Ongoing support options'
    ],
    quality: {
      heading: 'Code Quality Standards',
      items: [
        { label: 'PSR-12 Compliance', value: '100%' },
        { label: 'Test Coverage', value: '80%+' },
        { label: 'Security Audit', value: 'Passed' },
        { label: 'Performance Grade', value: 'A+' },
        { label: 'Documentation', value: 'Complete' }
      ]
    },
    testimonial: {
      quote: '"They modernized our legacy PHP application with Laravel, improving performance by 10x and making it maintainable for years to come. Excellent work!"',
      author: 'Peter de Vries', role: 'Director, Dutch Software Company'
    },
    lead: {
      heading: 'Ready for PHP Development?',
      sub: "Whether you need a new application, WordPress site, or legacy modernization\u2014we're your PHP experts. Let's discuss your project.",
      bullets: ['Free technical consultation', 'Framework recommendation', 'Architecture planning', 'No obligation quote'],
      title: 'Start Your PHP Project', subject: 'PHP Development Inquiry',
      button: 'Get Free Consultation', footnote: "Free consultation. We'll respond within 24 hours.",
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com',
      framework: 'Preferred Framework', frameworkPh: 'Select framework',
      frameworkOpts: ['Laravel', 'Symfony', 'WordPress', 'CodeIgniter', 'Custom PHP', 'Not sure yet'],
      project: 'Project Type', projectPh: 'Select project type',
      projectOpts: ['New Development', 'Legacy Modernization', 'E-Commerce', 'API Development', 'Maintenance & Support']
    },
    quick: { heading: 'Ready to start your PHP project?', sub: "Let's discuss your requirements today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbDev: 'Ontwikkeling', crumbCurrent: 'PHP',
    headPre: 'PHP die ', headHighlight: 'het web aandrijft',
    sub: 'Van Laravel tot WordPress \u2014 wij bouwen robuuste PHP-applicaties die schalen. Sluit je aan bij de 80% van het web dat op PHP draait \u2014 de taal achter miljarden websites.',
    ctaStart: 'Start je project', ctaStack: 'Bekijk frameworks',
    trust1: '80% van het web gebruikt PHP', trust2: 'Enterprise-proof',
    stats: [
      { value: '300+', label: 'PHP-projecten', description: 'Succesvol opgeleverd' },
      { value: '12+', label: 'Jaar ervaring', description: 'In PHP-ontwikkeling' },
      { value: '80%', label: 'Web draait op PHP', description: 'Van alle websites' },
      { value: '99,9%', label: 'Uptime', description: 'Systeembetrouwbaarheid' }
    ],
    whySection: { badge: 'Waarom PHP', headPre: 'Waarom kiezen voor ', headHighlight: 'PHP', sub: 'PHP draait al decennia het web en blijft zich vernieuwen met moderne features.' },
    whyPHP: [
      { title: 'Bewezen technologie', description: 'Draait 80% van alle websites \u2014 inclusief Facebook, Wikipedia en WordPress.' },
      { title: 'Kostenefficiënt', description: 'Groot talentpool en uitgebreide bibliotheken verlagen je development-kosten.' },
      { title: 'Snelle ontwikkeling', description: 'Snelle prototyping en korte time-to-market met volwassen frameworks.' },
      { title: 'Schaalbaar', description: 'Verwerkt miljoenen requests \u2014 bewezen op enterprise-schaal.' },
      { title: 'Brede hosting-ondersteuning', description: 'Wordt ondersteund door vrijwel elke webhost, vaak tegen lagere kosten.' },
      { title: 'Rijk ecosysteem', description: 'Duizenden packages, plugins en integraties beschikbaar.' }
    ],
    servicesSection: { badge: 'Onze diensten', headPre: 'PHP-development ', headHighlight: 'diensten' },
    services: [
      { title: 'Maatwerk PHP-development', description: 'PHP-applicaties op maat, exact afgestemd op je specificaties en business.' },
      { title: 'E-commerce-oplossingen', description: 'WooCommerce, Magento en custom PHP-webshops.' },
      { title: 'WordPress-development', description: 'Custom themes, plugins en complete WordPress-oplossingen.' },
      { title: 'API-development', description: 'RESTful API\'s en microservices met Laravel, Symfony of custom PHP.' },
      { title: 'Legacy-modernisering', description: 'Bestaande PHP-applicaties upgraden en moderniseren.' },
      { title: 'Onderhoud & support', description: 'Doorlopende support, security-updates en performance-optimalisatie.' }
    ],
    frameworksSection: { badge: 'Frameworks', headPre: 'PHP-', headHighlight: 'frameworks', sub: 'We werken met alle grote PHP-frameworks. Kies de juiste tool voor jouw project.' },
    frameworks: [
      { name: 'Laravel', description: 'Modern, elegante syntax', color: 'from-red-500 to-red-600', popularity: 'Meest populair' },
      { name: 'Symfony', description: 'Enterprise-grade', color: 'from-slate-700 to-slate-800', popularity: 'Enterprise' },
      { name: 'WordPress', description: 'CMS & websites', color: 'from-blue-500 to-blue-600', popularity: '43% van het web' },
      { name: 'CodeIgniter', description: 'Lichtgewicht & snel', color: 'from-orange-500 to-orange-600', popularity: 'Lichtgewicht' }
    ],
    stackSection: { badge: 'Tech stack', headPre: 'Onze PHP-', headHighlight: 'tech stack' },
    techStack: [
      { category: 'Frameworks', items: ['Laravel', 'Symfony', 'CodeIgniter', 'Yii', 'CakePHP'] },
      { category: 'CMS', items: ['WordPress', 'Drupal', 'Joomla', 'Magento', 'PrestaShop'] },
      { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MariaDB', 'Redis', 'MongoDB'] },
      { category: 'Tools', items: ['Composer', 'PHPUnit', 'Docker', 'Git', 'CI/CD'] }
    ],
    useCasesSection: { badge: 'Toepassingen', headPre: 'Wat we ', headHighlight: 'bouwen' },
    useCases: [
      { title: 'Bedrijfswebsites', description: 'Professionele websites met CMS voor eenvoudig contentbeheer.' },
      { title: 'E-commerce-winkels', description: 'Webshops met WooCommerce, Magento of custom-oplossingen.' },
      { title: 'Webapplicaties', description: 'CRM, ERP, boekingssystemen en zakelijke tools op maat.' },
      { title: "API's & backends", description: "RESTful API's en backend-services voor web- en mobiele apps." }
    ],
    processSection: { badge: 'Onze werkwijze', headPre: 'Ontwikkel-', headHighlight: 'proces' },
    process: [
      { step: '01', title: 'Requirements', description: 'We analyseren je wensen, kiezen het juiste framework en plannen de architectuur.' },
      { step: '02', title: 'Ontwerp', description: 'Database-ontwerp, API-specificaties en UI/UX-planning.' },
      { step: '03', title: 'Ontwikkeling', description: 'Agile development met regelmatige demo\'s en feedbackrondes.' },
      { step: '04', title: 'Testen', description: 'Grondig testen: unit tests, integratietests en security-audits.' },
      { step: '05', title: 'Lancering', description: 'Deployment, performance-optimalisatie en go-live-support.' }
    ],
    includedSection: { badge: 'Wat is inbegrepen', headPre: 'Elk project ', headHighlight: 'bevat', sub: 'We nemen geen shortcuts. Elk PHP-project dat we opleveren bevat de essentiële zaken voor een productie-klare applicatie.' },
    features: [
      'Schone, onderhoudbare code', 'PSR-standaarden', 'Uitgebreide documentatie',
      'Security best practices', 'Performance-optimalisatie', 'Database-optimalisatie',
      'Caching-strategieën', 'API-documentatie', 'Unit- & integratietests',
      'CI/CD-pipeline-setup', 'Serverconfiguratie', 'Doorlopende support-opties'
    ],
    quality: {
      heading: 'Codekwaliteit-standaarden',
      items: [
        { label: 'PSR-12-compliance', value: '100%' },
        { label: 'Testdekking', value: '80%+' },
        { label: 'Security-audit', value: 'Geslaagd' },
        { label: 'Performance-cijfer', value: 'A+' },
        { label: 'Documentatie', value: 'Compleet' }
      ]
    },
    testimonial: {
      quote: '"Ze hebben onze legacy-PHP-applicatie gemoderniseerd met Laravel \u2014 10x snellere performance en jaren onderhoudbaar. Uitstekend werk!"',
      author: 'Peter de Vries', role: 'Director, Nederlands softwarebedrijf'
    },
    lead: {
      heading: 'Klaar voor PHP-development?',
      sub: 'Of je nu een nieuwe applicatie, WordPress-site of legacy-modernisering nodig hebt \u2014 wij zijn je PHP-experts. Laten we je project bespreken.',
      bullets: ['Gratis technisch consult', 'Frameworkadvies', 'Architectuurplanning', 'Vrijblijvende offerte'],
      title: 'Start je PHP-project', subject: 'Aanvraag PHP-development',
      button: 'Vraag gratis consult', footnote: 'Gratis consult. We reageren binnen 24 uur.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      framework: 'Voorkeursframework', frameworkPh: 'Kies framework',
      frameworkOpts: ['Laravel', 'Symfony', 'WordPress', 'CodeIgniter', 'Custom PHP', 'Weet ik nog niet'],
      project: 'Type project', projectPh: 'Kies projecttype',
      projectOpts: ['Nieuwe ontwikkeling', 'Legacy-modernisering', 'E-commerce', 'API-development', 'Onderhoud & support']
    },
    quick: { heading: 'Klaar om je PHP-project te starten?', sub: 'Laten we vandaag je requirements bespreken.', email: 'Mail ons' }
  }
} as const

const SERVICE_ICONS = [Globe, ShoppingCart, FileCode, Lock, RefreshCw, Wrench]
const USE_CASE_ICONS = [Globe, ShoppingCart, Database, Lock]

export default function PHPDevelopment() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white">
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
                {t.headPre}<span className="text-indigo-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-indigo-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaStart}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#frameworks" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaStack}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-indigo-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-96 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-xs text-slate-400">UserController.php</span>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <div className="text-slate-500">{'<?php'}</div>
                    <div className="mt-2"><span className="text-purple-400">namespace</span><span className="text-white"> App\Http\Controllers;</span></div>
                    <div className="mt-4"><span className="text-purple-400">class</span><span className="text-yellow-300"> UserController</span></div>
                    <div className="text-white">{'{'}</div>
                    <div className="pl-4"><span className="text-purple-400">public function</span><span className="text-blue-300"> index</span><span className="text-white">()</span></div>
                    <div className="pl-4 text-white">{'{'}</div>
                    <div className="pl-8"><span className="text-purple-400">return</span><span className="text-white"> User::</span><span className="text-blue-300">all</span><span className="text-white">();</span></div>
                    <div className="pl-4 text-white">{'}'}</div>
                    <div className="text-white">{'}'}</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-400/30 backdrop-blur-sm">
                  <Layers className="w-4 h-4 text-red-300" aria-hidden />
                  <span className="text-sm font-medium text-white">Laravel</span>
                </div>
              </div>
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Globe className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">WordPress</span>
                </div>
              </div>
              <div className="absolute bottom-24 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/20 border border-slate-400/30 backdrop-blur-sm">
                  <Server className="w-4 h-4 text-slate-300" aria-hidden />
                  <span className="text-sm font-medium text-white">Symfony</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Database className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">MySQL</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.whySection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.whySection.headPre}<span className="gradient-text">{t.whySection.headHighlight}</span>?
            </h2>
            <p className="section-subheading mx-auto">{t.whySection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyPHP.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:shadow-lg transition-all border border-transparent hover:border-indigo-100">
                <CheckCircle2 className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section id="frameworks" className="py-20 lg:py-28 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
              <span>{t.frameworksSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.frameworksSection.headPre}<span className="text-indigo-300">{t.frameworksSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.frameworksSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.frameworks.map((framework) => (
              <div key={framework.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${framework.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{framework.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{framework.name}</h3>
                <p className="text-sm text-white/70 mb-2">{framework.description}</p>
                <span className="inline-block px-3 py-1 text-xs bg-white/10 rounded-full text-white/80">{framework.popularity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              <Package className="w-4 h-4" aria-hidden />
              <span>{t.stackSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.stackSection.headPre}<span className="gradient-text">{t.stackSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.techStack.map((stack) => (
              <div key={stack.category} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500" aria-hidden />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" aria-hidden />
              <span>{t.useCasesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.useCasesSection.headPre}<span className="gradient-text">{t.useCasesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.useCases.map((useCase, i) => {
              const Icon = USE_CASE_ICONS[i]
              return (
                <div key={useCase.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-slate-600">{useCase.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" aria-hidden />
              <span>{t.processSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.processSection.headPre}<span className="gradient-text">{t.processSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < t.process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent -z-10" />
                )}
                <div className="text-5xl font-bold text-indigo-100 mb-4">{step.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" aria-hidden />
                <span>{t.includedSection.badge}</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                {t.includedSection.headPre}<span className="gradient-text">{t.includedSection.headHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">{t.includedSection.sub}</p>

              <div className="grid grid-cols-2 gap-3">
                {t.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" aria-hidden />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-4">{t.quality.heading}</h4>
              <div className="space-y-4">
                {t.quality.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm">{item.label}</span>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
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
          <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 p-8 md:p-12 lg:p-16 overflow-hidden">
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
                      <CheckCircle2 className="w-5 h-5 text-indigo-200 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ph-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="ph-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="ph-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="ph-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="ph-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="ph-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="ph-framework" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.framework}</label>
                  <select id="ph-framework" name="framework" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors">
                    <option value="">{t.lead.frameworkPh}</option>
                    {t.lead.frameworkOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ph-project" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.project}</label>
                  <select id="ph-project" name="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors">
                    <option value="">{t.lead.projectPh}</option>
                    {t.lead.projectOpts.map((opt) => (
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
