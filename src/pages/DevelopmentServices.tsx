import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../components/LeadForm'
import {
  ArrowRight,
  Code,
  Smartphone,
  ShoppingCart,
  Bot,
  Layers,
  Globe,
  CheckCircle2,
  Terminal,
  Phone,
  Mail,
  TrendingUp,
  Server,
  Database,
  Cpu,
  Rocket,
  Shield,
  Clock
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale, type RouteKey } from '../i18n/routes'

const T = {
  en: {
    breadcrumb: 'Development',
    heroBadge: 'Development Services',
    headPre: 'Code That ',
    headHighlight: 'Powers Growth',
    heroSub:
      'Custom software development that transforms your ideas into powerful digital solutions. From web apps to mobile, e-commerce to AI \u2014 we build technology that drives business results.',
    ctaPrimary: 'Start Your Project',
    ctaSecondary: 'Explore Services',
    stats: [
      { value: '200+', label: 'Projects Delivered' },
      { value: '15+', label: 'Technologies' },
      { value: '99%', label: 'Client Satisfaction' }
    ],
    codeCaptionA: 'Building amazing',
    codeCaptionB: 'products...',
    floats: { node: 'Node.js', python: 'Python', java: 'Java', db: 'PostgreSQL', ai: 'AI' },
    badges: { build: 'Build Successful', deploy: 'Deployed' },
    trust: { secure: 'Secure & Scalable', onTime: 'On-Time Delivery', growth: 'Built for Growth' },
    services: {
      badge: 'Our Services',
      headPre: 'Development ',
      headHighlight: 'Solutions',
      sub: 'From concept to deployment, we build custom software solutions that solve real business problems.',
      learnMore: 'Learn more'
    },
    techTitle: 'Technologies We Master',
    techSub: 'Modern tech stack for modern solutions',
    why: {
      headPre: 'Why Choose ',
      headHighlight: 'Amora Digital',
      sub: "We\u2019re not just developers. We\u2019re problem solvers who build technology that drives business results.",
      items: [
        { title: 'Clean Code', desc: 'Maintainable, well-documented code that your team can understand and extend.' },
        { title: 'Fast Delivery', desc: 'Agile development with regular updates. See progress weekly, not monthly.' },
        { title: 'Built to Scale', desc: 'Architecture designed to grow with your business. No rebuilding required.' }
      ]
    },
    leadHeading: "Let's Build Something Amazing",
    leadSub:
      "Have a project in mind? Let's discuss how we can bring your ideas to life with custom software development.",
    leadBullets: [
      'Free project consultation',
      'Technical feasibility assessment',
      'Timeline & budget estimate',
      'No obligation proposal'
    ],
    leadForm: {
      title: 'Start Your Project',
      subject: 'Development Services Inquiry',
      button: 'Get Free Consultation',
      footnote: "Free consultation. We'll respond within 24 hours.",
      first: 'First Name',
      firstPh: 'John',
      last: 'Last Name',
      lastPh: 'Doe',
      email: 'Email',
      emailPh: 'john@company.com',
      type: 'Project Type',
      typePh: 'Select project type',
      types: ['Web Application', 'Mobile App', 'E-Commerce', 'AI & Automation', 'Custom Development', 'Other'],
      desc: 'Project Description',
      descPh: 'Tell us about your project...'
    },
    quickHeading: 'Ready to start building?',
    quickSub: "Let's discuss your development project today.",
    emailUs: 'Email Us'
  },
  nl: {
    breadcrumb: 'Ontwikkeling',
    heroBadge: 'Softwareontwikkeling',
    headPre: 'Code die ',
    headHighlight: 'groei aanjaagt',
    heroSub:
      'Softwareontwikkeling op maat die jouw ideeën omzet in krachtige digitale oplossingen. Van webapp tot mobiel, van e-commerce tot AI \u2014 wij bouwen technologie die je business resultaten oplevert.',
    ctaPrimary: 'Start je project',
    ctaSecondary: 'Bekijk onze diensten',
    stats: [
      { value: '200+', label: 'Opgeleverde projecten' },
      { value: '15+', label: 'Technologieën' },
      { value: '99%', label: 'Klanttevredenheid' }
    ],
    codeCaptionA: 'Wij bouwen geweldige',
    codeCaptionB: 'producten...',
    floats: { node: 'Node.js', python: 'Python', java: 'Java', db: 'PostgreSQL', ai: 'AI' },
    badges: { build: 'Build geslaagd', deploy: 'Live' },
    trust: { secure: 'Veilig & schaalbaar', onTime: 'Op tijd opgeleverd', growth: 'Gebouwd voor groei' },
    services: {
      badge: 'Onze diensten',
      headPre: 'Software ',
      headHighlight: 'op maat',
      sub: 'Van concept tot oplevering bouwen we maatwerk software die echte zakelijke problemen oplost.',
      learnMore: 'Meer informatie'
    },
    techTitle: 'Technologieën die we beheersen',
    techSub: 'Een moderne stack voor moderne oplossingen',
    why: {
      headPre: 'Waarom kiezen voor ',
      headHighlight: 'Amora Digital',
      sub: 'We zijn meer dan developers. We zijn probleemoplossers die technologie bouwen die je business vooruit helpt.',
      items: [
        { title: 'Schone code', desc: 'Onderhoudbare, goed gedocumenteerde code die jouw team begrijpt en kan uitbreiden.' },
        { title: 'Snelle oplevering', desc: 'Agile development met wekelijkse updates. Zie voortgang per week, niet per maand.' },
        { title: 'Schaalbaar gebouwd', desc: 'Architectuur die meegroeit met je bedrijf. Geen herbouw nodig.' }
      ]
    },
    leadHeading: 'Laten we samen iets moois bouwen',
    leadSub:
      'Heb je een project in gedachten? Laten we bespreken hoe we je idee tot leven brengen met maatwerk softwareontwikkeling.',
    leadBullets: [
      'Gratis projectadvies',
      'Technische haalbaarheidsanalyse',
      'Tijdlijn- en budgetinschatting',
      'Vrijblijvend voorstel'
    ],
    leadForm: {
      title: 'Start je project',
      subject: 'Aanvraag softwareontwikkeling',
      button: 'Gratis adviesgesprek',
      footnote: 'Gratis adviesgesprek. We reageren binnen 24 uur.',
      first: 'Voornaam',
      firstPh: 'Jan',
      last: 'Achternaam',
      lastPh: 'Jansen',
      email: 'E-mail',
      emailPh: 'jan@bedrijf.nl',
      type: 'Type project',
      typePh: 'Kies een type',
      types: ['Webapplicatie', 'Mobiele app', 'E-commerce', 'AI & automatisering', 'Maatwerk development', 'Anders'],
      desc: 'Projectomschrijving',
      descPh: 'Vertel ons over je project...'
    },
    quickHeading: 'Klaar om te bouwen?',
    quickSub: 'Laten we vandaag je developmentproject bespreken.',
    emailUs: 'Mail ons'
  }
} as const

type Service = {
  key: RouteKey
  icon: typeof Code
  title: { en: string; nl: string }
  description: { en: string; nl: string }
  features: { en: string[]; nl: string[] }
  color: 'primary' | 'secondary' | 'accent'
  stats: { value: string; label: { en: string; nl: string } }
}

const SERVICES: Service[] = [
  {
    key: 'react',
    icon: Code,
    color: 'primary',
    title: { en: 'React Development', nl: 'React Development' },
    description: {
      en: 'Build fast, scalable, and interactive web applications with React. Modern architecture, reusable components, and exceptional user experiences.',
      nl: 'Bouw snelle, schaalbare en interactieve webapplicaties met React. Moderne architectuur, herbruikbare componenten en uitstekende gebruikservaring.'
    },
    features: {
      en: ['Single Page Apps', 'Component Libraries', 'State Management', 'API Integration', 'Performance Optimized'],
      nl: ["Single page apps", 'Componentbibliotheken', 'State management', 'API-koppeling', 'Performance-geoptimaliseerd']
    },
    stats: { value: '60%', label: { en: 'Faster Load Times', nl: 'snellere laadtijden' } }
  },
  {
    key: 'php',
    icon: Terminal,
    color: 'secondary',
    title: { en: 'PHP Development', nl: 'PHP Development' },
    description: {
      en: 'Custom PHP solutions from simple websites to complex enterprise applications. Laravel, WordPress, and custom frameworks.',
      nl: 'Maatwerk PHP-oplossingen, van eenvoudige sites tot complexe enterprise-applicaties. Laravel, WordPress en maatwerk frameworks.'
    },
    features: {
      en: ['Laravel', 'WordPress', 'Custom CMS', 'API Development', 'Legacy Modernization'],
      nl: ['Laravel', 'WordPress', 'Maatwerk CMS', 'API-ontwikkeling', 'Legacy modernisatie']
    },
    stats: { value: '1500+', label: { en: 'Projects Delivered', nl: 'opgeleverde projecten' } }
  },
  {
    key: 'java',
    icon: Cpu,
    color: 'accent',
    title: { en: 'Java Development', nl: 'Java Development' },
    description: {
      en: 'Enterprise-grade Java applications built for scale, security, and performance. Backend systems, APIs, and microservices.',
      nl: 'Enterprise-Java-applicaties gebouwd voor schaal, security en performance. Backendsystemen, API\u2019s en microservices.'
    },
    features: {
      en: ['Spring Boot', 'Microservices', 'Enterprise Apps', 'REST APIs', 'Cloud Native'],
      nl: ['Spring Boot', 'Microservices', 'Enterprise apps', "REST API's", 'Cloud-native']
    },
    stats: { value: '99.9%', label: { en: 'Uptime Achieved', nl: 'uptime gerealiseerd' } }
  },
  {
    key: 'mobile-apps',
    icon: Smartphone,
    color: 'primary',
    title: { en: 'Mobile App Development', nl: 'Mobiele app-ontwikkeling' },
    description: {
      en: 'Native and cross-platform mobile apps for iOS and Android. Beautiful interfaces and seamless functionality.',
      nl: 'Native en cross-platform mobiele apps voor iOS en Android. Mooie interfaces en naadloze functionaliteit.'
    },
    features: {
      en: ['React Native', 'iOS Apps', 'Android Apps', 'Cross-Platform', 'App Store Launch'],
      nl: ['React Native', 'iOS-apps', 'Android-apps', 'Cross-platform', 'App store launch']
    },
    stats: { value: '4.8', label: { en: 'Avg. App Rating', nl: 'gemiddelde appbeoordeling' } }
  },
  {
    key: 'ecommerce',
    icon: ShoppingCart,
    color: 'secondary',
    title: { en: 'E-Commerce Solutions', nl: 'E-commerce oplossingen' },
    description: {
      en: 'Build online stores that sell. Custom e-commerce platforms, payment integrations, and conversion-optimized shopping experiences.',
      nl: 'Webshops die echt verkopen. Maatwerk e-commerceplatformen, betalingsintegraties en conversiegerichte koopreizen.'
    },
    features: {
      en: ['WooCommerce', 'Shopify', 'Custom Carts', 'Payment Gateway', 'Inventory Management'],
      nl: ['WooCommerce', 'Shopify', 'Maatwerk checkout', 'Betaalproviders', 'Voorraadbeheer']
    },
    stats: { value: '3x', label: { en: 'Sales Increase', nl: 'meer omzet' } }
  },
  {
    key: 'ai-automation',
    icon: Bot,
    color: 'accent',
    title: { en: 'AI & Automation', nl: 'AI & automatisering' },
    description: {
      en: 'Leverage artificial intelligence to automate processes, gain insights, and create intelligent applications.',
      nl: 'Zet kunstmatige intelligentie in om processen te automatiseren, inzicht te krijgen en slimme applicaties te bouwen.'
    },
    features: {
      en: ['ChatGPT Integration', 'Process Automation', 'Machine Learning', 'Custom AI Tools', 'Data Analysis'],
      nl: ['ChatGPT-integratie', 'Procesautomatisering', 'Machine learning', 'Maatwerk AI-tools', 'Data-analyse']
    },
    stats: { value: '80%', label: { en: 'Time Saved', nl: 'tijdbesparing' } }
  },
  {
    key: 'full-stack',
    icon: Layers,
    color: 'primary',
    title: { en: 'Full-Stack Development', nl: 'Full-stack development' },
    description: {
      en: 'End-to-end web application development. Frontend, backend, database, and everything in between.',
      nl: 'End-to-end webapplicatie-ontwikkeling. Frontend, backend, database en alles daartussen.'
    },
    features: {
      en: ['Node.js', 'Python', 'Databases', 'Cloud Hosting', 'DevOps'],
      nl: ['Node.js', 'Python', 'Databases', 'Cloud hosting', 'DevOps']
    },
    stats: { value: '100%', label: { en: 'Ownership', nl: 'eigenaarschap' } }
  },
  {
    key: 'web-applications',
    icon: Globe,
    color: 'secondary',
    title: { en: 'Web Applications', nl: 'Webapplicaties' },
    description: {
      en: 'Custom web applications tailored to your business needs. CRMs, dashboards, SaaS platforms, and internal tools.',
      nl: 'Maatwerk webapplicaties afgestemd op je business: CRM-systemen, dashboards, SaaS-platformen en interne tools.'
    },
    features: {
      en: ['SaaS Platforms', 'Custom Dashboards', 'Internal Tools', 'CRM Systems', 'Portals'],
      nl: ['SaaS-platformen', 'Maatwerk dashboards', 'Interne tools', 'CRM-systemen', 'Portalen']
    },
    stats: { value: '50%', label: { en: 'Efficiency Boost', nl: 'meer efficiëntie' } }
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

const technologies = [
  { name: 'React', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Terminal },
  { name: 'PHP', icon: Code },
  { name: 'Java', icon: Cpu },
  { name: 'PostgreSQL', icon: Database }
]

export default function DevelopmentServices() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-accent-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
                <Link to={ROUTES.home[locale]} className="text-white/60 hover:text-white transition-colors">Home</Link>
                <span className="text-white/40" aria-hidden>/</span>
                <span className="text-white">{t.breadcrumb}</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                <Code className="w-4 h-4" aria-hidden />
                <span>{t.heroBadge}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t.headPre}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">{t.headHighlight}</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl">{t.heroSub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 w-80 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-slate-400">App.tsx</span>
                  </div>
                  <div className="font-mono text-sm space-y-1">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">App</span> <span className="text-white">=</span> <span className="text-yellow-400">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-yellow-400">{'{'}</span></div>
                    <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-yellow-400">(</span></div>
                    <div className="pl-8"><span className="text-green-400">&lt;div&gt;</span></div>
                    <div className="pl-12"><span className="text-cyan-400">{t.codeCaptionA}</span></div>
                    <div className="pl-12"><span className="text-cyan-400">{t.codeCaptionB}</span></div>
                    <div className="pl-8"><span className="text-green-400">&lt;/div&gt;</span></div>
                    <div className="pl-4"><span className="text-yellow-400">)</span></div>
                    <div><span className="text-yellow-400">{'}'}</span></div>
                  </div>
                </div>
              </div>

              {[
                { Icon: Code, label: 'React', cls: 'top-4 left-4', delay: '0s', grad: 'from-cyan-400 to-cyan-500' },
                { Icon: Server, label: t.floats.node, cls: 'top-8 right-0', delay: '0.5s', grad: 'from-green-400 to-green-500' },
                { Icon: Terminal, label: t.floats.python, cls: 'top-1/3 -left-2', delay: '1s', grad: 'from-purple-400 to-purple-500' },
                { Icon: Cpu, label: t.floats.java, cls: 'bottom-1/3 right-4', delay: '1.5s', grad: 'from-orange-400 to-orange-500' },
                { Icon: Database, label: t.floats.db, cls: 'bottom-12 left-8', delay: '2s', grad: 'from-blue-400 to-blue-500' },
                { Icon: Bot, label: t.floats.ai, cls: 'bottom-4 right-12', delay: '2.5s', grad: 'from-pink-400 to-pink-500' }
              ].map(({ Icon, label, cls, delay, grad }) => (
                <div key={label} className={`absolute ${cls} animate-float z-20`} style={{ animationDelay: delay }}>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-700 shadow-lg">
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
                    <span className="text-sm font-medium text-green-300">{t.badges.build}</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-float z-20" style={{ animationDelay: '1.8s' }}>
                <div className="px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-primary-300" aria-hidden />
                    <span className="text-sm font-medium text-primary-300">{t.badges.deploy}</span>
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
              <Shield className="w-5 h-5 text-primary-500" aria-hidden />
              <span className="text-sm">{t.trust.secure}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-5 h-5 text-secondary-500" aria-hidden />
              <span className="text-sm">{t.trust.onTime}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400">
              <TrendingUp className="w-5 h-5 text-accent-500" aria-hidden />
              <span className="text-sm">{t.trust.growth}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
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

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.techTitle}</h2>
            <p className="text-slate-600">{t.techSub}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <tech.icon className="w-6 h-6 text-primary-600" aria-hidden />
                <span className="font-medium text-slate-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              {t.why.headPre}
              <span className="gradient-text">{t.why.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.why.sub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[Code, Rocket, Shield].map((Icon, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow border border-slate-100">
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

      <section id="contact-form" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t.leadHeading}</h2>
                <p className="text-lg text-white/90 mb-8">{t.leadSub}</p>
                <ul className="space-y-3">
                  {t.leadBullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.leadForm.title}
                subject={t.leadForm.subject}
                buttonText={t.leadForm.button}
                buttonClass="from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25"
                footnote={t.leadForm.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ds-first" className="block text-sm font-medium text-slate-700 mb-1">{t.leadForm.first}</label>
                    <input type="text" id="ds-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.leadForm.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="ds-last" className="block text-sm font-medium text-slate-700 mb-1">{t.leadForm.last}</label>
                    <input type="text" id="ds-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.leadForm.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="ds-email" className="block text-sm font-medium text-slate-700 mb-1">{t.leadForm.email}</label>
                  <input type="email" id="ds-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.leadForm.emailPh} />
                </div>
                <div>
                  <label htmlFor="ds-type" className="block text-sm font-medium text-slate-700 mb-1">{t.leadForm.type}</label>
                  <select id="ds-type" name="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                    <option value="">{t.leadForm.typePh}</option>
                    {t.leadForm.types.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ds-desc" className="block text-sm font-medium text-slate-700 mb-1">{t.leadForm.desc}</label>
                  <textarea id="ds-desc" name="description" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.leadForm.descPh} />
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
