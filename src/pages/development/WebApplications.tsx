import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Globe, Layers, Database, Server, Shield, Star, Phone, Mail,
  Settings, BarChart3, Users, Lock, Zap, Monitor, Cloud, RefreshCw, Cpu, Layout, PieChart, Boxes
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbDev: 'Development', crumbCurrent: 'Web Apps',
    headPre: 'Powerful Web Apps ', headHighlight: 'Built to Scale',
    sub: 'From SaaS platforms to enterprise dashboards, we build custom web applications that handle millions of users. Modern, secure, and built for growth.',
    ctaStart: 'Start Your Project', ctaTypes: 'View App Types',
    trust1: '99.9% Uptime', trust2: 'Enterprise Security',
    floats: { saas: 'SaaS', multiUser: 'Multi-User', realtime: 'Real-Time', cloud: 'Cloud' },
    stats: [
      { value: '150+', label: 'Web Apps Built', description: 'Production deployed' },
      { value: '99.9%', label: 'Uptime', description: 'System reliability' },
      { value: '50K+', label: 'Daily Users', description: 'Across our apps' },
      { value: '<1s', label: 'Load Time', description: 'Performance optimized' }
    ],
    featuresSection: { badge: 'Features', headPre: 'Built for ', headHighlight: 'Performance', sub: 'Every web application we build includes these essential features.' },
    features: [
      { title: 'Secure by Design', description: 'Authentication, authorization, and data encryption' },
      { title: 'Lightning Fast', description: 'Optimized performance and caching strategies' },
      { title: 'Responsive UI', description: 'Works perfectly on desktop, tablet, and mobile' },
      { title: 'Cloud-Native', description: 'Built for scalability on modern cloud infrastructure' },
      { title: 'Real-Time Updates', description: 'WebSocket connections for live data sync' },
      { title: 'Role-Based Access', description: 'Granular permissions and user management' }
    ],
    servicesSection: { badge: 'Our Services', headPre: 'Web Application ', headHighlight: 'Services' },
    services: [
      { title: 'SaaS Applications', description: 'Multi-tenant software-as-a-service platforms with subscription billing and user management.' },
      { title: 'Admin Dashboards', description: 'Data visualization dashboards with real-time analytics and reporting tools.' },
      { title: 'Customer Portals', description: 'Self-service portals for customers to manage accounts, orders, and support tickets.' },
      { title: 'Enterprise Systems', description: 'Large-scale internal tools, ERPs, and business process management systems.' },
      { title: 'Data Platforms', description: 'Complex data management applications with CRUD operations and workflows.' },
      { title: 'Legacy Modernization', description: 'Transform outdated systems into modern, scalable web applications.' }
    ],
    typesSection: { badge: 'App Types', headPre: 'Applications We ', headHighlight: 'Build', sub: 'From startup MVPs to enterprise-scale platforms, we build it all.' },
    appTypes: [
      { title: 'SaaS Platforms', description: 'Subscription-based software with multi-tenancy, billing, and user management.', features: ['Multi-tenant architecture', 'Subscription billing', 'Usage analytics'] },
      { title: 'Business Dashboards', description: 'Real-time data visualization and reporting for informed decision-making.', features: ['Interactive charts', 'Custom reports', 'Data exports'] },
      { title: 'Customer Portals', description: 'Self-service platforms for customers to manage their accounts and data.', features: ['Account management', 'Order tracking', 'Support tickets'] },
      { title: 'Internal Tools', description: "Custom applications to streamline your team's daily operations.", features: ['Workflow automation', 'Team collaboration', 'Process tracking'] }
    ],
    stackSection: { badge: 'Tech Stack', headPre: 'Modern ', headHighlight: 'Technologies' },
    stackHeads: { frontend: 'Frontend', backend: 'Backend', database: 'Database', infrastructure: 'Infrastructure' },
    techStack: {
      frontend: [
        { name: 'React', description: 'Component-based UI' }, { name: 'Next.js', description: 'Full-stack React' },
        { name: 'Vue.js', description: 'Progressive framework' }, { name: 'TypeScript', description: 'Type-safe code' }
      ],
      backend: [
        { name: 'Node.js', description: 'JavaScript runtime' }, { name: 'Python', description: 'Django/FastAPI' },
        { name: 'Java', description: 'Spring Boot' }, { name: 'Go', description: 'High performance' }
      ],
      database: [
        { name: 'PostgreSQL', description: 'Relational DB' }, { name: 'MongoDB', description: 'Document store' },
        { name: 'Redis', description: 'Caching layer' }, { name: 'Elasticsearch', description: 'Search engine' }
      ],
      infrastructure: [
        { name: 'AWS', description: 'Cloud hosting' }, { name: 'Docker', description: 'Containerization' },
        { name: 'Kubernetes', description: 'Orchestration' }, { name: 'Vercel', description: 'Edge deployment' }
      ]
    },
    processSection: { badge: 'Our Process', headPre: 'Development ', headHighlight: 'Process' },
    process: [
      { step: '01', title: 'Discovery', description: 'Deep dive into your requirements, user needs, and technical constraints.' },
      { step: '02', title: 'Architecture', description: 'Design scalable system architecture, database schema, and API structure.' },
      { step: '03', title: 'UI/UX Design', description: 'Create intuitive interfaces with wireframes and interactive prototypes.' },
      { step: '04', title: 'Development', description: 'Agile sprints with continuous integration and regular demos.' },
      { step: '05', title: 'Testing & QA', description: 'Comprehensive testing: unit, integration, E2E, and security audits.' },
      { step: '06', title: 'Launch & Scale', description: 'Deployment, monitoring setup, and ongoing optimization.' }
    ],
    deliverablesSection: { badge: 'Deliverables', headPre: 'What You ', headHighlight: 'Get', sub: 'Every web application project includes everything you need for a successful launch and long-term operation.' },
    deliverables: [
      'Production-ready web application', 'Admin dashboard & controls', 'User authentication system', 'API documentation',
      'Database with backups', 'Cloud deployment', 'SSL certificates', 'Monitoring & alerts',
      'Source code & repository', 'Technical documentation', 'Training session', '90-day support warranty'
    ],
    archHead: 'Typical Architecture',
    archLayers: { users: 'Users', frontend: 'Frontend (CDN)', api: 'API Gateway', backend: 'Backend Services', data: 'Data Layer' },
    testimonial: {
      quote: '"They built our SaaS platform from scratch. It now handles 10,000+ daily active users with 99.99% uptime. The admin dashboard they created saves our team hours every day."',
      author: 'Lars Hendriks', role: 'CTO, Dutch SaaS Startup'
    },
    lead: {
      heading: 'Ready to Build Your Web App?',
      sub: "From SaaS to enterprise dashboards, we build web applications that scale. Let's discuss your project.",
      bullets: ['Free technical consultation', 'Architecture planning', 'Detailed proposal', 'No obligation quote'],
      title: 'Start Your Web App Project', subject: 'Web Application Inquiry',
      button: 'Get Free Consultation', footnote: "Free consultation. We'll respond within 24 hours.",
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com',
      app: 'App Type', appPh: 'Select app type',
      appOpts: ['SaaS Platform', 'Admin Dashboard', 'Customer Portal', 'Internal Tool', 'Other'],
      desc: 'Project Description', descPh: 'Tell us about your web application...'
    },
    quick: { heading: 'Ready to build your web application?', sub: "Let's discuss your project requirements today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbDev: 'Ontwikkeling', crumbCurrent: 'Webapps',
    headPre: 'Krachtige webapps, ', headHighlight: 'gebouwd om te schalen',
    sub: 'Van SaaS-platforms tot enterprise-dashboards: wij bouwen maatwerk-webapplicaties die miljoenen gebruikers aankunnen. Modern, veilig en gemaakt om mee te groeien.',
    ctaStart: 'Start je project', ctaTypes: 'Bekijk app-types',
    trust1: '99,9% uptime', trust2: 'Enterprise security',
    floats: { saas: 'SaaS', multiUser: 'Multi-user', realtime: 'Realtime', cloud: 'Cloud' },
    stats: [
      { value: '150+', label: 'Webapps gebouwd', description: 'Live in productie' },
      { value: '99,9%', label: 'Uptime', description: 'Systeembetrouwbaarheid' },
      { value: '50K+', label: 'Dagelijkse gebruikers', description: 'Over onze apps' },
      { value: '<1s', label: 'Laadtijd', description: 'Performance-geoptimaliseerd' }
    ],
    featuresSection: { badge: 'Features', headPre: 'Gebouwd voor ', headHighlight: 'performance', sub: 'Elke webapplicatie die we bouwen bevat deze essentiële functies.' },
    features: [
      { title: 'Veilig vanaf de basis', description: 'Authenticatie, autorisatie en data-encryptie' },
      { title: 'Razendsnel', description: 'Geoptimaliseerde performance en slimme caching' },
      { title: 'Responsive UI', description: 'Werkt perfect op desktop, tablet en mobiel' },
      { title: 'Cloud-native', description: 'Gebouwd voor schaalbaarheid op moderne cloudinfrastructuur' },
      { title: 'Realtime updates', description: 'WebSocket-verbindingen voor live datasync' },
      { title: 'Rol-gebaseerde toegang', description: 'Fijnmazige permissies en gebruikersbeheer' }
    ],
    servicesSection: { badge: 'Onze diensten', headPre: 'Webapplicatie-', headHighlight: 'diensten' },
    services: [
      { title: 'SaaS-applicaties', description: 'Multi-tenant software-as-a-service-platforms met abonnementsfacturatie en gebruikersbeheer.' },
      { title: 'Admin-dashboards', description: 'Datavisualisatie-dashboards met realtime analytics en rapportagetools.' },
      { title: 'Klantportalen', description: 'Selfservice-portalen waar klanten accounts, orders en tickets beheren.' },
      { title: 'Enterprise-systemen', description: "Grootschalige interne tools, ERP's en business-process-management-systemen." },
      { title: 'Data-platforms', description: 'Complexe data-applicaties met CRUD-operaties en workflows.' },
      { title: 'Legacy-modernisering', description: 'Verouderde systemen omzetten naar moderne, schaalbare webapplicaties.' }
    ],
    typesSection: { badge: 'App-types', headPre: 'Applicaties die wij ', headHighlight: 'bouwen', sub: "Van startup-MVP's tot enterprise-platforms: wij bouwen het allemaal." },
    appTypes: [
      { title: 'SaaS-platforms', description: 'Abonnement-gebaseerde software met multi-tenancy, facturatie en gebruikersbeheer.', features: ['Multi-tenant-architectuur', 'Abonnementsfacturatie', 'Gebruiksanalytics'] },
      { title: 'Business-dashboards', description: 'Realtime datavisualisatie en rapportage voor onderbouwde beslissingen.', features: ['Interactieve grafieken', 'Custom rapporten', 'Data-exports'] },
      { title: 'Klantportalen', description: 'Selfservice-platforms waar klanten hun accounts en data beheren.', features: ['Accountbeheer', 'Order-tracking', 'Support-tickets'] },
      { title: 'Interne tools', description: 'Maatwerk-applicaties die de dagelijkse operatie van je team stroomlijnen.', features: ['Workflow-automatisering', 'Team-samenwerking', 'Proces-tracking'] }
    ],
    stackSection: { badge: 'Tech stack', headPre: 'Moderne ', headHighlight: 'technologieën' },
    stackHeads: { frontend: 'Frontend', backend: 'Backend', database: 'Database', infrastructure: 'Infrastructuur' },
    techStack: {
      frontend: [
        { name: 'React', description: 'Component-gebaseerde UI' }, { name: 'Next.js', description: 'Full-stack React' },
        { name: 'Vue.js', description: 'Progressief framework' }, { name: 'TypeScript', description: 'Type-veilige code' }
      ],
      backend: [
        { name: 'Node.js', description: 'JavaScript-runtime' }, { name: 'Python', description: 'Django/FastAPI' },
        { name: 'Java', description: 'Spring Boot' }, { name: 'Go', description: 'High performance' }
      ],
      database: [
        { name: 'PostgreSQL', description: 'Relationele DB' }, { name: 'MongoDB', description: 'Document store' },
        { name: 'Redis', description: 'Caching-laag' }, { name: 'Elasticsearch', description: 'Zoekmachine' }
      ],
      infrastructure: [
        { name: 'AWS', description: 'Cloud-hosting' }, { name: 'Docker', description: 'Containerisatie' },
        { name: 'Kubernetes', description: 'Orchestration' }, { name: 'Vercel', description: 'Edge-deployment' }
      ]
    },
    processSection: { badge: 'Onze werkwijze', headPre: 'Ontwikkel-', headHighlight: 'proces' },
    process: [
      { step: '01', title: 'Discovery', description: 'Diepe duik in je requirements, gebruikersbehoeften en technische randvoorwaarden.' },
      { step: '02', title: 'Architectuur', description: 'Ontwerp van schaalbare architectuur, database-schema en API-structuur.' },
      { step: '03', title: 'UI/UX-ontwerp', description: 'Intuïtieve interfaces met wireframes en interactieve prototypes.' },
      { step: '04', title: 'Ontwikkeling', description: 'Agile sprints met continuous integration en regelmatige demo\'s.' },
      { step: '05', title: 'Testen & QA', description: 'Volledig testen: unit, integratie, E2E en security-audits.' },
      { step: '06', title: 'Launch & schaal', description: 'Deployment, monitoring-setup en doorlopende optimalisatie.' }
    ],
    deliverablesSection: { badge: 'Wat je krijgt', headPre: 'Wat jij ', headHighlight: 'oplevert krijgt', sub: 'Elk webapplicatie-project bevat alles wat je nodig hebt voor een succesvolle lancering en lange-termijn-operatie.' },
    deliverables: [
      'Productie-klare webapplicatie', 'Admin-dashboard & controls', 'Authenticatie-systeem', 'API-documentatie',
      'Database met backups', 'Cloud-deployment', 'SSL-certificaten', 'Monitoring & alerts',
      'Broncode & repository', 'Technische documentatie', 'Trainingssessie', '90 dagen supportgarantie'
    ],
    archHead: 'Typische architectuur',
    archLayers: { users: 'Gebruikers', frontend: 'Frontend (CDN)', api: 'API-gateway', backend: 'Backend-services', data: 'Data-laag' },
    testimonial: {
      quote: '"Ze hebben ons SaaS-platform vanaf nul gebouwd. Het verwerkt nu 10.000+ dagelijkse actieve gebruikers met 99,99% uptime. Het admin-dashboard bespaart ons team elke dag uren."',
      author: 'Lars Hendriks', role: 'CTO, Nederlandse SaaS-startup'
    },
    lead: {
      heading: 'Klaar om je webapp te bouwen?',
      sub: "Van SaaS tot enterprise-dashboards: wij bouwen webapplicaties die schalen. Laten we je project bespreken.",
      bullets: ['Gratis technisch consult', 'Architectuurplanning', 'Uitgebreid voorstel', 'Vrijblijvende offerte'],
      title: 'Start je webapp-project', subject: 'Aanvraag webapplicatie',
      button: 'Vraag gratis consult', footnote: 'Gratis consult. We reageren binnen 24 uur.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      app: 'Type app', appPh: 'Kies type app',
      appOpts: ['SaaS-platform', 'Admin-dashboard', 'Klantportaal', 'Interne tool', 'Anders'],
      desc: 'Projectomschrijving', descPh: 'Vertel ons over je webapplicatie...'
    },
    quick: { heading: 'Klaar om je webapplicatie te bouwen?', sub: 'Laten we vandaag je projectvereisten bespreken.', email: 'Mail ons' }
  }
} as const

const FEATURE_ICONS = [Shield, Zap, Monitor, Cloud, RefreshCw, Lock]
const SERVICE_ICONS = [Layers, PieChart, Users, Boxes, Database, RefreshCw]
const APP_TYPE_COLORS = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-amber-500']

export default function WebApplications() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 text-white">
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
                <a href="#app-types" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaTypes}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-[420px] bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="flex-1 mx-4 px-3 py-1 bg-white/10 rounded text-xs text-white/60">app.yourcompany.com</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" />
                        <span className="text-sm font-semibold text-white">Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-xs text-slate-400">Revenue</div>
                        <div className="text-lg font-bold text-white">€45.2K</div>
                        <div className="text-xs text-green-400">+12%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-xs text-slate-400">Users</div>
                        <div className="text-lg font-bold text-white">2,847</div>
                        <div className="text-xs text-green-400">+8%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-xs text-slate-400">Active</div>
                        <div className="text-lg font-bold text-white">94%</div>
                        <div className="text-xs text-green-400">+3%</div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 mb-4">
                      <div className="text-xs text-slate-400 mb-2">Monthly Growth</div>
                      <div className="flex items-end gap-1 h-16">
                        {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-sm" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-xs text-white/70">New user registered</span>
                        <span className="text-xs text-slate-500 ml-auto">2m ago</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <BarChart3 className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-xs text-white/70">Report generated</span>
                        <span className="text-xs text-slate-500 ml-auto">5m ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Layers className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.saas}</span>
                </div>
              </div>
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Users className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.multiUser}</span>
                </div>
              </div>
              <div className="absolute bottom-28 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Database className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.realtime}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Cloud className="w-4 h-4 text-cyan-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.cloud}</span>
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
                <div key={feature.title} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-cyan-50 hover:shadow-lg transition-all border border-transparent hover:border-cyan-100">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
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

      <section id="app-types" className="py-20 lg:py-28 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layout className="w-4 h-4" aria-hidden />
              <span>{t.typesSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.typesSection.headPre}<span className="text-cyan-300">{t.typesSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.typesSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.appTypes.map((type, i) => (
              <div key={type.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${APP_TYPE_COLORS[i]} flex items-center justify-center mb-4 shadow-lg`}>
                  <Globe className="w-7 h-7 text-white" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-white/70 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Cpu className="w-4 h-4" aria-hidden />
              <span>{t.stackSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.stackSection.headPre}<span className="gradient-text">{t.stackSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(['frontend', 'backend', 'database', 'infrastructure'] as const).map((key, i) => {
              const Icon = [Monitor, Server, Database, Cloud][i]
              const colors = ['bg-cyan-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500']
              return (
                <div key={key} className="bg-slate-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${colors[i]} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" aria-hidden />
                    </div>
                    <h3 className="font-bold text-slate-900">{t.stackHeads[key]}</h3>
                  </div>
                  <div className="space-y-3">
                    {t.techStack[key].map((tech) => (
                      <div key={tech.name} className="flex items-center justify-between p-2 bg-white rounded-lg">
                        <span className="font-medium text-slate-900">{tech.name}</span>
                        <span className="text-xs text-slate-500">{tech.description}</span>
                      </div>
                    ))}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" aria-hidden />
              <span>{t.processSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.processSection.headPre}<span className="gradient-text">{t.processSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.process.map((step) => (
              <div key={step.step} className="relative p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-cyan-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" aria-hidden />
                <span>{t.deliverablesSection.badge}</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                {t.deliverablesSection.headPre}<span className="gradient-text">{t.deliverablesSection.headHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">{t.deliverablesSection.sub}</p>

              <div className="grid grid-cols-2 gap-3">
                {t.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" aria-hidden />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-6">{t.archHead}</h4>
              <div className="space-y-4">
                <div className="bg-cyan-500/20 rounded-xl p-4 border border-cyan-500/30">
                  <div className="text-xs text-cyan-300 mb-2">{t.archLayers.users}</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-cyan-500/30 rounded">Web Browser</span>
                    <span className="px-2 py-1 text-xs bg-cyan-500/30 rounded">Mobile App</span>
                    <span className="px-2 py-1 text-xs bg-cyan-500/30 rounded">API Client</span>
                  </div>
                </div>
                <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                  <div className="text-xs text-blue-300 mb-2">{t.archLayers.frontend}</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-blue-500/30 rounded">React/Next.js</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/30 rounded">TypeScript</span>
                  </div>
                </div>
                <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                  <div className="text-xs text-purple-300 mb-2">{t.archLayers.api}</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-purple-500/30 rounded">REST API</span>
                    <span className="px-2 py-1 text-xs bg-purple-500/30 rounded">GraphQL</span>
                    <span className="px-2 py-1 text-xs bg-purple-500/30 rounded">WebSocket</span>
                  </div>
                </div>
                <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                  <div className="text-xs text-green-300 mb-2">{t.archLayers.backend}</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-green-500/30 rounded">Node.js</span>
                    <span className="px-2 py-1 text-xs bg-green-500/30 rounded">Auth Service</span>
                    <span className="px-2 py-1 text-xs bg-green-500/30 rounded">Background Jobs</span>
                  </div>
                </div>
                <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/30">
                  <div className="text-xs text-orange-300 mb-2">{t.archLayers.data}</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-orange-500/30 rounded">PostgreSQL</span>
                    <span className="px-2 py-1 text-xs bg-orange-500/30 rounded">Redis Cache</span>
                    <span className="px-2 py-1 text-xs bg-orange-500/30 rounded">S3 Storage</span>
                  </div>
                </div>
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
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 p-8 md:p-12 lg:p-16 overflow-hidden">
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
                    <label htmlFor="wa-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="wa-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="wa-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="wa-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="wa-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="wa-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="wa-app" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.app}</label>
                  <select id="wa-app" name="appType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors">
                    <option value="">{t.lead.appPh}</option>
                    {t.lead.appOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="wa-desc" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.desc}</label>
                  <textarea id="wa-desc" name="description" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors resize-none" placeholder={t.lead.descPh} />
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
