import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, Code, Layers, Rocket, RefreshCw, Shield, Gauge, Smartphone,
  Globe, Database, Star, Phone, Mail, Box, GitBranch, Terminal, Cpu, Cloud, Settings
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbDev: 'Development', crumbCurrent: 'React',
    headPre: 'Build Modern Apps with ', headHighlight: 'React',
    sub: "Create fast, scalable, and interactive web applications with React. From simple websites to complex enterprise platforms\u2014we build React apps that users love and businesses rely on.",
    ctaStart: 'Start Your Project', ctaStack: 'View Tech Stack',
    trust1: '100+ React Projects', trust2: 'TypeScript First',
    floats: { fast: 'Blazing Fast', safe: 'Type Safe', comp: 'Components', hot: 'Hot Reload' },
    stats: [
      { value: '100+', label: 'React Projects', description: 'Successfully delivered' },
      { value: '60%', label: 'Faster Load', description: 'Than traditional sites' },
      { value: '99%', label: 'Client Satisfaction', description: 'Happy customers' },
      { value: '24/7', label: 'Support', description: 'Ongoing maintenance' }
    ],
    whySection: { badge: 'Why React', headPre: 'Why Build With ', headHighlight: 'React?', sub: "React powers some of the world's most successful applications. Here's why." },
    benefits: [
      { title: 'Lightning Fast', description: 'Virtual DOM ensures minimal re-renders and blazing performance.' },
      { title: 'Reusable Components', description: 'Build once, use everywhere. Consistent UI across your entire application.' },
      { title: 'Scalable Architecture', description: 'Clean code structure that grows with your business needs.' },
      { title: 'Enterprise Ready', description: 'Battle-tested by Facebook, Instagram, Netflix, and thousands more.' }
    ],
    servicesSection: { badge: 'Our Services', headPre: 'React Development ', headHighlight: 'Services' },
    services: [
      { title: 'Single Page Applications', description: 'Fast, fluid SPAs with seamless navigation and instant page transitions.' },
      { title: 'Component Libraries', description: 'Reusable UI component systems that ensure consistency across your products.' },
      { title: 'Progressive Web Apps', description: 'Web apps that work offline and feel like native mobile applications.' },
      { title: 'State Management', description: 'Complex state handling with Redux, Zustand, or React Query for scalable apps.' },
      { title: 'API Integration', description: 'Seamless integration with REST APIs, GraphQL, and third-party services.' },
      { title: 'Performance Optimization', description: 'Lightning-fast apps with code splitting, lazy loading, and caching strategies.' }
    ],
    stackSection: { badge: 'Tech Stack', headPre: 'Modern React ', headHighlight: 'Ecosystem', sub: 'We use the latest tools and best practices from the React ecosystem.' },
    stack: [
      { name: 'React 18', description: 'Latest features & concurrent rendering' },
      { name: 'Next.js', description: 'Server-side rendering & static generation' },
      { name: 'TypeScript', description: 'Type-safe code for fewer bugs' },
      { name: 'Tailwind CSS', description: 'Rapid UI development' },
      { name: 'Redux/Zustand', description: 'State management solutions' },
      { name: 'React Query', description: 'Server state & caching' }
    ],
    typesSection: { badge: 'Project Types', headPre: 'What We ', headHighlight: 'Build' },
    projectTypes: [
      'SaaS Dashboards', 'Admin Panels', 'E-commerce Frontends', 'Social Platforms',
      'Real-time Apps', 'Data Visualization', 'Customer Portals', 'Mobile-First Apps',
      'Enterprise Tools', 'Content Platforms', 'Booking Systems', 'Analytics Dashboards'
    ],
    processSection: { badge: 'Our Process', headPre: 'How We ', headHighlight: 'Build Your App' },
    process: [
      { step: '01', title: 'Discovery & Planning', description: 'We analyze your requirements, define the architecture, and plan the development roadmap.' },
      { step: '02', title: 'UI/UX Design', description: 'Create wireframes, mockups, and interactive prototypes before coding begins.' },
      { step: '03', title: 'Development', description: 'Agile sprints with regular demos. See progress weekly, not monthly.' },
      { step: '04', title: 'Testing & Launch', description: 'Rigorous testing, performance optimization, and smooth deployment.' }
    ],
    testimonial: {
      quote: '"They built our entire SaaS dashboard in React. It\'s fast, beautiful, and our users love it. The code quality is exceptional."',
      author: 'Peter van den Berg', role: 'CTO, CloudMetrics B.V.'
    },
    lead: {
      heading: 'Ready to Build Your React App?',
      sub: "Let's discuss your project and create something amazing together. Get a free consultation and project estimate.",
      bullets: ['Free project consultation', 'Technical architecture review', 'Timeline & cost estimate', 'No obligation proposal'],
      title: 'Start Your React Project', subject: 'React Development Inquiry',
      button: 'Get Free Consultation', footnote: "Free consultation. We'll respond within 24 hours.",
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com',
      project: 'Project Type', projectPh: 'Select project type',
      projectOpts: ['Single Page Application', 'Dashboard / Admin Panel', 'Progressive Web App', 'E-commerce Frontend', 'SaaS Platform', 'Other'],
      desc: 'Project Description', descPh: 'Tell us about your project...'
    },
    quick: { heading: 'Ready to start building?', sub: "Let's discuss your React project today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbDev: 'Ontwikkeling', crumbCurrent: 'React',
    headPre: 'Bouw moderne apps met ', headHighlight: 'React',
    sub: 'Bouw snelle, schaalbare en interactieve webapplicaties met React. Van eenvoudige websites tot complexe enterprise-platforms \u2014 wij maken React-apps waar gebruikers van houden en bedrijven op vertrouwen.',
    ctaStart: 'Start je project', ctaStack: 'Bekijk tech stack',
    trust1: '100+ React-projecten', trust2: 'TypeScript-first',
    floats: { fast: 'Razendsnel', safe: 'Type-safe', comp: 'Componenten', hot: 'Hot reload' },
    stats: [
      { value: '100+', label: 'React-projecten', description: 'Succesvol opgeleverd' },
      { value: '60%', label: 'Sneller laden', description: 'Dan traditionele sites' },
      { value: '99%', label: 'Klanttevredenheid', description: 'Tevreden klanten' },
      { value: '24/7', label: 'Support', description: 'Doorlopend onderhoud' }
    ],
    whySection: { badge: 'Waarom React', headPre: 'Waarom bouwen met ', headHighlight: 'React?', sub: "React draait achter \u00e9\u00e9n van 's werelds succesvolste apps. Hierom werkt het zo goed." },
    benefits: [
      { title: 'Razendsnel', description: 'De Virtual DOM zorgt voor minimale re-renders en topprestaties.' },
      { title: 'Herbruikbare componenten', description: 'Eén keer bouwen, overal inzetten. Consistente UI in je hele applicatie.' },
      { title: 'Schaalbare architectuur', description: 'Een schone codestructuur die meegroeit met je business.' },
      { title: 'Enterprise-proof', description: 'Bewezen bij Facebook, Instagram, Netflix en duizenden anderen.' }
    ],
    servicesSection: { badge: 'Onze diensten', headPre: 'React-development ', headHighlight: 'diensten' },
    services: [
      { title: 'Single page applications', description: 'Snelle, vloeiende SPA\'s met naadloze navigatie en directe paginawisselingen.' },
      { title: 'Componentbibliotheken', description: 'Herbruikbare UI-componenten voor consistentie door je hele product.' },
      { title: 'Progressive Web Apps', description: 'Webapps die offline werken en aanvoelen als native mobiele apps.' },
      { title: 'State management', description: 'Complex state-beheer met Redux, Zustand of React Query voor schaalbare apps.' },
      { title: 'API-integraties', description: 'Naadloze koppelingen met REST-API\'s, GraphQL en third-party services.' },
      { title: 'Performance-optimalisatie', description: 'Bliksemsnelle apps met code splitting, lazy loading en caching.' }
    ],
    stackSection: { badge: 'Tech stack', headPre: 'Het moderne React-', headHighlight: 'ecosysteem', sub: 'We gebruiken de nieuwste tools en best practices uit het React-ecosysteem.' },
    stack: [
      { name: 'React 18', description: 'Nieuwste features & concurrent rendering' },
      { name: 'Next.js', description: 'Server-side rendering & static generation' },
      { name: 'TypeScript', description: 'Type-safe code voor minder bugs' },
      { name: 'Tailwind CSS', description: 'Razendsnelle UI-ontwikkeling' },
      { name: 'Redux/Zustand', description: 'State-management-oplossingen' },
      { name: 'React Query', description: 'Server state & caching' }
    ],
    typesSection: { badge: 'Soorten projecten', headPre: 'Wat we ', headHighlight: 'bouwen' },
    projectTypes: [
      'SaaS-dashboards', 'Admin-panels', 'E-commerce-frontends', 'Social platforms',
      'Realtime apps', 'Datavisualisatie', 'Klantportals', 'Mobile-first apps',
      'Enterprise tools', 'Contentplatformen', 'Booking-systemen', 'Analytics-dashboards'
    ],
    processSection: { badge: 'Onze werkwijze', headPre: 'Zo bouwen we ', headHighlight: 'jouw app' },
    process: [
      { step: '01', title: 'Discovery & planning', description: 'We analyseren je requirements, definiëren de architectuur en plannen de roadmap.' },
      { step: '02', title: 'UI/UX-ontwerp', description: 'Wireframes, mock-ups en interactieve prototypes vóór we coderen.' },
      { step: '03', title: 'Ontwikkeling', description: 'Agile sprints met regelmatige demo\'s. Wekelijks resultaat, geen maandenlange black box.' },
      { step: '04', title: 'Testen & lancering', description: 'Grondig testen, performance-optimalisatie en soepele deployment.' }
    ],
    testimonial: {
      quote: '"Ze hebben ons volledige SaaS-dashboard in React gebouwd. Het is snel, mooi en onze gebruikers zijn er dol op. De codekwaliteit is uitzonderlijk."',
      author: 'Peter van den Berg', role: 'CTO, CloudMetrics B.V.'
    },
    lead: {
      heading: 'Klaar om je React-app te bouwen?',
      sub: 'Laten we je project bespreken en samen iets fantastisch maken. Vraag een gratis consult en projectinschatting aan.',
      bullets: ['Gratis projectconsult', 'Review van de technische architectuur', 'Tijdlijn- & kostenraming', 'Vrijblijvend voorstel'],
      title: 'Start je React-project', subject: 'Aanvraag React-development',
      button: 'Vraag gratis consult', footnote: 'Gratis consult. We reageren binnen 24 uur.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      project: 'Type project', projectPh: 'Kies projecttype',
      projectOpts: ['Single page application', 'Dashboard / admin-panel', 'Progressive web app', 'E-commerce-frontend', 'SaaS-platform', 'Anders'],
      desc: 'Projectomschrijving', descPh: 'Vertel ons over je project...'
    },
    quick: { heading: 'Klaar om te starten met bouwen?', sub: 'Laten we vandaag je React-project bespreken.', email: 'Mail ons' }
  }
} as const

const SERVICE_ICONS = [Globe, Layers, Smartphone, Database, Cloud, Gauge]
const BENEFIT_ICONS = [Zap, Box, GitBranch, Shield]
const STACK_ICONS = [Code, Rocket, Shield, Layers, Database, RefreshCw]

export default function ReactDevelopment() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white">
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
                {t.headPre}<span className="text-cyan-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaStart}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#tech-stack" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaStack}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-cyan-300" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-300" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-slate-400">Component.tsx</span>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <div><span className="text-purple-400">import</span> <span className="text-cyan-300">{'{ useState }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span></div>
                    <div className="mt-2"><span className="text-purple-400">export const</span> <span className="text-yellow-300">Button</span> <span className="text-white">=</span> <span className="text-cyan-300">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-yellow-300">{'{'}</span></div>
                    <div className="pl-4"><span className="text-purple-400">const</span> <span className="text-white">[</span><span className="text-cyan-300">count</span><span className="text-white">,</span> <span className="text-cyan-300">setCount</span><span className="text-white">]</span> <span className="text-white">=</span></div>
                    <div className="pl-8"><span className="text-yellow-300">useState</span><span className="text-white">(</span><span className="text-orange-400">0</span><span className="text-white">)</span></div>
                    <div className="mt-2 pl-4"><span className="text-purple-400">return</span> <span className="text-white">(</span></div>
                    <div className="pl-8"><span className="text-blue-400">&lt;button</span> <span className="text-cyan-300">onClick</span><span className="text-white">=</span><span className="text-yellow-300">{'{() =>'}</span></div>
                    <div className="pl-12"><span className="text-yellow-300">{'setCount(c => c + 1)}'}</span><span className="text-blue-400">&gt;</span></div>
                    <div className="pl-12"><span className="text-white">Clicked {'{'}</span><span className="text-cyan-300">count</span><span className="text-white">{'}'} times</span></div>
                    <div className="pl-8"><span className="text-blue-400">&lt;/button&gt;</span></div>
                    <div className="pl-4"><span className="text-white">)</span></div>
                    <div><span className="text-yellow-300">{'}'}</span></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-cyan-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.fast}</span>
                </div>
              </div>
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.safe}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Box className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.comp}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <RefreshCw className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.hot}</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.whySection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.whySection.headPre}<span className="gradient-text">{t.whySection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.whySection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, i) => {
              const Icon = BENEFIT_ICONS[i]
              return (
                <div key={benefit.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-cyan-50 hover:shadow-lg transition-all border border-transparent hover:border-cyan-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section id="tech-stack" className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Terminal className="w-4 h-4" aria-hidden />
              <span>{t.stackSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.stackSection.headPre}<span className="text-cyan-400">{t.stackSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.stackSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.stack.map((tech, i) => {
              const Icon = STACK_ICONS[i]
              return (
                <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
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

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
              <span>{t.typesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.typesSection.headPre}<span className="gradient-text">{t.typesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {t.projectTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 hover:bg-cyan-50 hover:border-cyan-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" aria-hidden />
                <span className="text-sm text-slate-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Cpu className="w-4 h-4" aria-hidden />
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
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-cyan-100 mb-4">{step.step}</div>
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
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
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-8 md:p-12 lg:p-16 overflow-hidden">
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
                      <CheckCircle2 className="w-5 h-5 text-cyan-200 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="rd-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="rd-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="rd-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="rd-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="rd-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="rd-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="rd-project" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.project}</label>
                  <select id="rd-project" name="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors">
                    <option value="">{t.lead.projectPh}</option>
                    {t.lead.projectOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="rd-desc" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.desc}</label>
                  <textarea id="rd-desc" name="description" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder={t.lead.descPh} />
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
