import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Code2,
  Database,
  Server,
  Globe,
  Shield,
  Star,
  Phone,
  Mail,
  Monitor,
  Smartphone,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Lock,
  Rocket,
  Settings,
  BarChart3
} from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    description: 'Beautiful, responsive user interfaces with React, Vue, or Angular frameworks.'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Robust server-side applications with Node.js, Python, Java, or PHP.'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimized database architecture with SQL and NoSQL solutions.'
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Scalable cloud infrastructure on AWS, Azure, or Google Cloud.'
  },
  {
    icon: Lock,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs for seamless data communication.'
  },
  {
    icon: GitBranch,
    title: 'DevOps & CI/CD',
    description: 'Automated pipelines for testing, building, and deployment.'
  }
]

const stats = [
  { value: '200+', label: 'Projects Delivered', description: 'End-to-end solutions' },
  { value: '15+', label: 'Tech Stack', description: 'Languages & frameworks' },
  { value: '99.9%', label: 'Uptime', description: 'System reliability' },
  { value: '24/7', label: 'Support', description: 'Always available' }
]

const frontendTech = [
  { name: 'React', color: 'from-cyan-400 to-cyan-600' },
  { name: 'Vue.js', color: 'from-green-400 to-green-600' },
  { name: 'Angular', color: 'from-red-400 to-red-600' },
  { name: 'Next.js', color: 'from-slate-600 to-slate-800' },
  { name: 'TypeScript', color: 'from-blue-400 to-blue-600' },
  { name: 'Tailwind CSS', color: 'from-teal-400 to-teal-600' },
]

const backendTech = [
  { name: 'Node.js', color: 'from-green-500 to-green-700' },
  { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Java', color: 'from-orange-500 to-red-600' },
  { name: 'PHP', color: 'from-indigo-400 to-indigo-600' },
  { name: '.NET', color: 'from-purple-500 to-purple-700' },
  { name: 'Go', color: 'from-cyan-500 to-cyan-700' },
]

const databases = [
  { name: 'PostgreSQL', type: 'SQL' },
  { name: 'MySQL', type: 'SQL' },
  { name: 'MongoDB', type: 'NoSQL' },
  { name: 'Redis', type: 'Cache' },
  { name: 'Firebase', type: 'BaaS' },
  { name: 'Supabase', type: 'BaaS' },
]

const projectTypes = [
  { 
    icon: Globe, 
    title: 'Web Applications', 
    description: 'Complex web apps with rich functionality and seamless UX.',
    examples: ['SaaS Platforms', 'Dashboards', 'Portals']
  },
  { 
    icon: Smartphone, 
    title: 'Mobile Apps', 
    description: 'Cross-platform mobile applications with React Native.',
    examples: ['iOS Apps', 'Android Apps', 'PWAs']
  },
  { 
    icon: Database, 
    title: 'Enterprise Systems', 
    description: 'Large-scale systems for business operations.',
    examples: ['ERP', 'CRM', 'Inventory']
  },
  { 
    icon: Cpu, 
    title: 'Custom Solutions', 
    description: 'Tailor-made software for unique business needs.',
    examples: ['Automation', 'Integration', 'Tools']
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyze requirements, define scope, and plan the architecture.'
  },
  {
    step: '02',
    title: 'Design',
    description: 'UI/UX design, database schema, and API specifications.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile sprints with frontend, backend, and integration work.'
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Comprehensive testing: unit, integration, and E2E tests.'
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'CI/CD setup, cloud deployment, and monitoring configuration.'
  },
  {
    step: '06',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and scaling as you grow.'
  }
]

const benefits = [
  'Single team for entire project',
  'Consistent code quality',
  'Faster development cycles',
  'Seamless integration',
  'Reduced communication overhead',
  'End-to-end ownership',
  'Unified tech decisions',
  'Long-term maintainability'
]

export default function FullStackDevelopment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white">
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
                <span className="text-white">Full-Stack</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Frontend to Backend,{' '}
                <span className="text-violet-200">We Build It All</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Complete web and application development from a single team. 
                We handle everything—UI, APIs, databases, deployment—so you 
                can focus on your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#tech-stack" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Tech Stack
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-violet-200" />
                  <span className="text-sm text-white/70">15+ Technologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-violet-200" />
                  <span className="text-sm text-white/70">Enterprise-Grade</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Stack Diagram */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-400/30 rounded-full blur-3xl" />
              
              {/* Stack visualization */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-80">
                {/* Frontend layer */}
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl border border-cyan-400/30 p-4 mb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Monitor className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm font-semibold text-white">Frontend</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-cyan-500/30 rounded text-cyan-200">React</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/30 rounded text-blue-200">TypeScript</span>
                    <span className="px-2 py-1 text-xs bg-teal-500/30 rounded text-teal-200">Tailwind</span>
                  </div>
                </div>
                
                {/* API layer */}
                <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-xl rounded-xl border border-purple-400/30 p-4 mb-3 ml-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Terminal className="w-5 h-5 text-purple-300" />
                    <span className="text-sm font-semibold text-white">API Layer</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-purple-500/30 rounded text-purple-200">REST</span>
                    <span className="px-2 py-1 text-xs bg-pink-500/30 rounded text-pink-200">GraphQL</span>
                  </div>
                </div>
                
                {/* Backend layer */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-xl border border-green-400/30 p-4 mb-3 ml-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Server className="w-5 h-5 text-green-300" />
                    <span className="text-sm font-semibold text-white">Backend</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-green-500/30 rounded text-green-200">Node.js</span>
                    <span className="px-2 py-1 text-xs bg-yellow-500/30 rounded text-yellow-200">Python</span>
                  </div>
                </div>
                
                {/* Database layer */}
                <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-xl rounded-xl border border-orange-400/30 p-4 ml-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Database className="w-5 h-5 text-orange-300" />
                    <span className="text-sm font-semibold text-white">Database</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-blue-500/30 rounded text-blue-200">PostgreSQL</span>
                    <span className="px-2 py-1 text-xs bg-green-500/30 rounded text-green-200">MongoDB</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Globe className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-medium text-white">Web Apps</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Cloud className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Cloud Deploy</span>
                </div>
              </div>
              
              <div className="absolute bottom-24 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <GitBranch className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">CI/CD</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-sm">
                  <Shield className="w-4 h-4 text-orange-300" />
                  <span className="text-sm font-medium text-white">Secure</span>
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

      {/* Why Full-Stack Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                <span>Why Full-Stack</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                One Team, Complete{' '}
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                With full-stack development, you get a unified team that understands 
                your entire system. No handoffs, no miscommunication—just efficient 
                development from start to finish.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual comparison */}
            <div className="space-y-6">
              {/* Traditional approach */}
              <div className="bg-slate-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="font-semibold text-slate-700">Traditional: Multiple Teams</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 bg-white rounded-lg p-3 text-center text-sm border-2 border-dashed border-slate-300">
                    Frontend Team
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <div className="flex-1 bg-white rounded-lg p-3 text-center text-sm border-2 border-dashed border-slate-300">
                    Backend Team
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <div className="flex-1 bg-white rounded-lg p-3 text-center text-sm border-2 border-dashed border-slate-300">
                    DevOps Team
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">More handoffs, slower delivery, potential miscommunication</p>
              </div>
              
              {/* Full-stack approach */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border-2 border-violet-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="font-semibold text-violet-700">Full-Stack: One Unified Team</span>
                </div>
                <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg p-4 text-center">
                  <div className="text-white font-semibold mb-2">Amora Digital Full-Stack Team</div>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 text-xs bg-white/20 rounded text-white">Frontend</span>
                    <span className="px-2 py-1 text-xs bg-white/20 rounded text-white">Backend</span>
                    <span className="px-2 py-1 text-xs bg-white/20 rounded text-white">DevOps</span>
                    <span className="px-2 py-1 text-xs bg-white/20 rounded text-white">Database</span>
                  </div>
                </div>
                <p className="text-xs text-violet-600 mt-3">Faster delivery, seamless integration, single point of contact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Full-Stack{' '}
              <span className="gradient-text">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 lg:py-28 bg-violet-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" />
              <span>Tech Stack</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Modern{' '}
              <span className="text-violet-300">Technologies</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We use the latest and most reliable technologies to build scalable, maintainable applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <div className="space-y-3">
                {frontendTech.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                      <span className="text-xs font-bold text-white">{tech.name[0]}</span>
                    </div>
                    <span className="text-white/90">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Server className="w-5 h-5 text-green-300" />
                </div>
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <div className="space-y-3">
                {backendTech.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                      <span className="text-xs font-bold text-white">{tech.name[0]}</span>
                    </div>
                    <span className="text-white/90">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Databases */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-orange-300" />
                </div>
                <h3 className="text-xl font-bold">Databases</h3>
              </div>
              <div className="space-y-3">
                {databases.map((db) => (
                  <div key={db.name} className="flex items-center justify-between">
                    <span className="text-white/90">{db.name}</span>
                    <span className="text-xs px-2 py-1 bg-white/10 rounded text-white/70">{db.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              <span>What We Build</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Project{' '}
              <span className="gradient-text">Types</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type) => (
              <div key={type.title} className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-violet-50 hover:to-purple-50 transition-all border border-slate-200 hover:border-violet-200 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example) => (
                    <span key={example} className="text-xs px-2 py-1 bg-violet-100 text-violet-700 rounded-full">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Development{' '}
              <span className="gradient-text">Process</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-violet-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center z-10">
                    <ArrowRight className="w-4 h-4 text-violet-500" />
                  </div>
                )}
              </div>
            ))}
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
              "Having one team handle everything from our React frontend to our 
              Node.js backend made development so much smoother. They delivered 
              our SaaS platform ahead of schedule."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Thomas van der Berg</div>
                <div className="text-slate-400 text-sm">CTO, TechStartup Amsterdam</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Let's Build Something Amazing
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  From idea to launch, we're your full-stack development partner. 
                  Tell us about your project and let's make it happen.
                </p>
                <ul className="space-y-3">
                  {['Free technical consultation', 'Architecture planning', 'Detailed project proposal', 'No obligation quote'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-violet-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Start Your Project"
                subject="Full Stack Development Inquiry"
                buttonText="Get Free Consultation"
                buttonClass="from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 shadow-lg shadow-violet-500/25"
                footnote="Free consultation. We'll respond within 24 hours."
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                  <select id="projectType" name="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors">
                    <option value="">Select project type</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="Enterprise System">Enterprise System</option>
                    <option value="API Development">API Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Project Description</label>
                  <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors resize-none" placeholder="Tell us about your project..." />
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to build your full-stack project?</h3>
              <p className="text-slate-400">Let's discuss your technical requirements today.</p>
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
