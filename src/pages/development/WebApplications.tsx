import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  Database,
  Server,
  Shield,
  Star,
  Phone,
  Mail,
  Settings,
  BarChart3,
  Users,
  Lock,
  Zap,
  Monitor,
  Cloud,
  RefreshCw,
  Cpu,
  Layout,
  PieChart,
  Boxes
} from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'SaaS Applications',
    description: 'Multi-tenant software-as-a-service platforms with subscription billing and user management.'
  },
  {
    icon: PieChart,
    title: 'Admin Dashboards',
    description: 'Data visualization dashboards with real-time analytics and reporting tools.'
  },
  {
    icon: Users,
    title: 'Customer Portals',
    description: 'Self-service portals for customers to manage accounts, orders, and support tickets.'
  },
  {
    icon: Boxes,
    title: 'Enterprise Systems',
    description: 'Large-scale internal tools, ERPs, and business process management systems.'
  },
  {
    icon: Database,
    title: 'Data Platforms',
    description: 'Complex data management applications with CRUD operations and workflows.'
  },
  {
    icon: RefreshCw,
    title: 'Legacy Modernization',
    description: 'Transform outdated systems into modern, scalable web applications.'
  }
]

const stats = [
  { value: '150+', label: 'Web Apps Built', description: 'Production deployed' },
  { value: '99.9%', label: 'Uptime', description: 'System reliability' },
  { value: '50K+', label: 'Daily Users', description: 'Across our apps' },
  { value: '<1s', label: 'Load Time', description: 'Performance optimized' }
]

const features = [
  { icon: Shield, title: 'Secure by Design', description: 'Authentication, authorization, and data encryption' },
  { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance and caching strategies' },
  { icon: Monitor, title: 'Responsive UI', description: 'Works perfectly on desktop, tablet, and mobile' },
  { icon: Cloud, title: 'Cloud-Native', description: 'Built for scalability on modern cloud infrastructure' },
  { icon: RefreshCw, title: 'Real-Time Updates', description: 'WebSocket connections for live data sync' },
  { icon: Lock, title: 'Role-Based Access', description: 'Granular permissions and user management' },
]

const techStack = {
  frontend: [
    { name: 'React', description: 'Component-based UI' },
    { name: 'Next.js', description: 'Full-stack React' },
    { name: 'Vue.js', description: 'Progressive framework' },
    { name: 'TypeScript', description: 'Type-safe code' },
  ],
  backend: [
    { name: 'Node.js', description: 'JavaScript runtime' },
    { name: 'Python', description: 'Django/FastAPI' },
    { name: 'Java', description: 'Spring Boot' },
    { name: 'Go', description: 'High performance' },
  ],
  database: [
    { name: 'PostgreSQL', description: 'Relational DB' },
    { name: 'MongoDB', description: 'Document store' },
    { name: 'Redis', description: 'Caching layer' },
    { name: 'Elasticsearch', description: 'Search engine' },
  ],
  infrastructure: [
    { name: 'AWS', description: 'Cloud hosting' },
    { name: 'Docker', description: 'Containerization' },
    { name: 'Kubernetes', description: 'Orchestration' },
    { name: 'Vercel', description: 'Edge deployment' },
  ],
}

const appTypes = [
  { 
    title: 'SaaS Platforms', 
    description: 'Subscription-based software with multi-tenancy, billing, and user management.',
    features: ['Multi-tenant architecture', 'Subscription billing', 'Usage analytics'],
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'Business Dashboards', 
    description: 'Real-time data visualization and reporting for informed decision-making.',
    features: ['Interactive charts', 'Custom reports', 'Data exports'],
    color: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Customer Portals', 
    description: 'Self-service platforms for customers to manage their accounts and data.',
    features: ['Account management', 'Order tracking', 'Support tickets'],
    color: 'from-green-500 to-emerald-500'
  },
  { 
    title: 'Internal Tools', 
    description: 'Custom applications to streamline your team\'s daily operations.',
    features: ['Workflow automation', 'Team collaboration', 'Process tracking'],
    color: 'from-orange-500 to-amber-500'
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Deep dive into your requirements, user needs, and technical constraints.'
  },
  {
    step: '02',
    title: 'Architecture',
    description: 'Design scalable system architecture, database schema, and API structure.'
  },
  {
    step: '03',
    title: 'UI/UX Design',
    description: 'Create intuitive interfaces with wireframes and interactive prototypes.'
  },
  {
    step: '04',
    title: 'Development',
    description: 'Agile sprints with continuous integration and regular demos.'
  },
  {
    step: '05',
    title: 'Testing & QA',
    description: 'Comprehensive testing: unit, integration, E2E, and security audits.'
  },
  {
    step: '06',
    title: 'Launch & Scale',
    description: 'Deployment, monitoring setup, and ongoing optimization.'
  }
]

const deliverables = [
  'Production-ready web application',
  'Admin dashboard & controls',
  'User authentication system',
  'API documentation',
  'Database with backups',
  'Cloud deployment',
  'SSL certificates',
  'Monitoring & alerts',
  'Source code & repository',
  'Technical documentation',
  'Training session',
  '90-day support warranty'
]

export default function WebApplications() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                <span className="text-white/40">/</span>
                <Link to="/development" className="text-white/60 hover:text-white transition-colors">Development</Link>
                <span className="text-white/40">/</span>
                <span className="text-white">Web Apps</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Powerful Web Apps{' '}
                <span className="text-cyan-200">Built to Scale</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                From SaaS platforms to enterprise dashboards, we build custom web 
                applications that handle millions of users. Modern, secure, and 
                built for growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#app-types" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View App Types
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-200" />
                  <span className="text-sm text-white/70">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-200" />
                  <span className="text-sm text-white/70">Enterprise Security</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Dashboard Mockup */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl" />
              
              {/* Dashboard mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-[420px] bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Browser header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="flex-1 mx-4 px-3 py-1 bg-white/10 rounded text-xs text-white/60">app.yourcompany.com</div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-4">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" />
                        <span className="text-sm font-semibold text-white">Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                      </div>
                    </div>
                    
                    {/* Stats row */}
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
                    
                    {/* Chart placeholder */}
                    <div className="bg-white/5 rounded-lg p-3 mb-4">
                      <div className="text-xs text-slate-400 mb-2">Monthly Growth</div>
                      <div className="flex items-end gap-1 h-16">
                        {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                          <div 
                            key={i} 
                            className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-sm"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Recent activity */}
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
              
              {/* Floating elements */}
              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Layers className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">SaaS</span>
                </div>
              </div>
              
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Users className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Multi-User</span>
                </div>
              </div>
              
              <div className="absolute bottom-28 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Database className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">Real-Time</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Cloud className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-medium text-white">Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-white/90">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Features</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Built for{' '}
              <span className="gradient-text">Performance</span>
            </h2>
            <p className="section-subheading mx-auto">
              Every web application we build includes these essential features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-cyan-50 hover:shadow-lg transition-all border border-transparent hover:border-cyan-100">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Web Application{' '}
              <span className="gradient-text">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section id="app-types" className="py-20 lg:py-28 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layout className="w-4 h-4" />
              <span>App Types</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Applications We{' '}
              <span className="text-cyan-300">Build</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              From startup MVPs to enterprise-scale platforms, we build it all.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {appTypes.map((type) => (
              <div key={type.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-white/70 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Cpu className="w-4 h-4" />
              <span>Tech Stack</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Modern{' '}
              <span className="gradient-text">Technologies</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900">Frontend</h3>
              </div>
              <div className="space-y-3">
                {techStack.frontend.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between p-2 bg-white rounded-lg">
                    <span className="font-medium text-slate-900">{tech.name}</span>
                    <span className="text-xs text-slate-500">{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900">Backend</h3>
              </div>
              <div className="space-y-3">
                {techStack.backend.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between p-2 bg-white rounded-lg">
                    <span className="font-medium text-slate-900">{tech.name}</span>
                    <span className="text-xs text-slate-500">{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Database */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900">Database</h3>
              </div>
              <div className="space-y-3">
                {techStack.database.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between p-2 bg-white rounded-lg">
                    <span className="font-medium text-slate-900">{tech.name}</span>
                    <span className="text-xs text-slate-500">{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Infrastructure */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900">Infrastructure</h3>
              </div>
              <div className="space-y-3">
                {techStack.infrastructure.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between p-2 bg-white rounded-lg">
                    <span className="font-medium text-slate-900">{tech.name}</span>
                    <span className="text-xs text-slate-500">{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Development{' '}
              <span className="gradient-text">Process</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-cyan-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>Deliverables</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                What You{' '}
                <span className="gradient-text">Get</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Every web application project includes everything you need 
                for a successful launch and long-term operation.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Architecture diagram */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-6">Typical Architecture</h4>
              
              <div className="space-y-4">
                {/* Users layer */}
                <div className="bg-cyan-500/20 rounded-xl p-4 border border-cyan-500/30">
                  <div className="text-xs text-cyan-300 mb-2">Users</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-cyan-500/30 rounded">Web Browser</span>
                    <span className="px-2 py-1 text-xs bg-cyan-500/30 rounded">Mobile App</span>
                    <span className="px-2 py-1 text-xs bg-cyan-500/30 rounded">API Client</span>
                  </div>
                </div>
                
                {/* Frontend layer */}
                <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                  <div className="text-xs text-blue-300 mb-2">Frontend (CDN)</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-blue-500/30 rounded">React/Next.js</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/30 rounded">TypeScript</span>
                  </div>
                </div>
                
                {/* API layer */}
                <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                  <div className="text-xs text-purple-300 mb-2">API Gateway</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-purple-500/30 rounded">REST API</span>
                    <span className="px-2 py-1 text-xs bg-purple-500/30 rounded">GraphQL</span>
                    <span className="px-2 py-1 text-xs bg-purple-500/30 rounded">WebSocket</span>
                  </div>
                </div>
                
                {/* Backend layer */}
                <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                  <div className="text-xs text-green-300 mb-2">Backend Services</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-green-500/30 rounded">Node.js</span>
                    <span className="px-2 py-1 text-xs bg-green-500/30 rounded">Auth Service</span>
                    <span className="px-2 py-1 text-xs bg-green-500/30 rounded">Background Jobs</span>
                  </div>
                </div>
                
                {/* Data layer */}
                <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/30">
                  <div className="text-xs text-orange-300 mb-2">Data Layer</div>
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

      {/* Testimonial */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              "They built our SaaS platform from scratch. It now handles 10,000+ 
              daily active users with 99.99% uptime. The admin dashboard they 
              created saves our team hours every day."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Lars Hendriks</div>
                <div className="text-slate-400 text-sm">CTO, Dutch SaaS Startup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Build Your Web App?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  From SaaS to enterprise dashboards, we build web applications 
                  that scale. Let's discuss your project.
                </p>
                <ul className="space-y-3">
                  {['Free technical consultation', 'Architecture planning', 'Detailed proposal', 'No obligation quote'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-cyan-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Start Your Web App Project"
                subject="Web Application Inquiry"
                buttonText="Get Free Consultation"
                buttonClass="from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25"
                footnote="Free consultation. We'll respond within 24 hours."
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="appType" className="block text-sm font-medium text-slate-700 mb-1">App Type</label>
                  <select id="appType" name="appType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors">
                    <option value="">Select app type</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="Admin Dashboard">Admin Dashboard</option>
                    <option value="Customer Portal">Customer Portal</option>
                    <option value="Internal Tool">Internal Tool</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">Project Description</label>
                  <textarea id="description" name="description" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors resize-none" placeholder="Tell us about your web application..." />
                </div>
              </LeadForm>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Ready to build your web application?</h3>
              <p className="text-slate-400">Let's discuss your project requirements today.</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+31625580415"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +31 6 25580415
              </a>
              <a 
                href="mailto:info@amoradigital.nl"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
