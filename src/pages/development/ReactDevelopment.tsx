import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Code,
  Layers,
  Rocket,
  RefreshCw,
  Shield,
  Gauge,
  Smartphone,
  Globe,
  Database,
  Star,
  Phone,
  Mail,
  Box,
  GitBranch,
  Terminal,
  Cpu,
  Cloud,
  Settings
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Single Page Applications',
    description: 'Fast, fluid SPAs with seamless navigation and instant page transitions.'
  },
  {
    icon: Layers,
    title: 'Component Libraries',
    description: 'Reusable UI component systems that ensure consistency across your products.'
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description: 'Web apps that work offline and feel like native mobile applications.'
  },
  {
    icon: Database,
    title: 'State Management',
    description: 'Complex state handling with Redux, Zustand, or React Query for scalable apps.'
  },
  {
    icon: Cloud,
    title: 'API Integration',
    description: 'Seamless integration with REST APIs, GraphQL, and third-party services.'
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Lightning-fast apps with code splitting, lazy loading, and caching strategies.'
  }
]

const stats = [
  { value: '100+', label: 'React Projects', description: 'Successfully delivered' },
  { value: '60%', label: 'Faster Load', description: 'Than traditional sites' },
  { value: '99%', label: 'Client Satisfaction', description: 'Happy customers' },
  { value: '24/7', label: 'Support', description: 'Ongoing maintenance' }
]

const techStack = [
  { name: 'React 18', description: 'Latest features & concurrent rendering', icon: Code },
  { name: 'Next.js', description: 'Server-side rendering & static generation', icon: Rocket },
  { name: 'TypeScript', description: 'Type-safe code for fewer bugs', icon: Shield },
  { name: 'Tailwind CSS', description: 'Rapid UI development', icon: Layers },
  { name: 'Redux/Zustand', description: 'State management solutions', icon: Database },
  { name: 'React Query', description: 'Server state & caching', icon: RefreshCw },
]

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Virtual DOM ensures minimal re-renders and blazing performance.'
  },
  {
    icon: Box,
    title: 'Reusable Components',
    description: 'Build once, use everywhere. Consistent UI across your entire application.'
  },
  {
    icon: GitBranch,
    title: 'Scalable Architecture',
    description: 'Clean code structure that grows with your business needs.'
  },
  {
    icon: Shield,
    title: 'Enterprise Ready',
    description: 'Battle-tested by Facebook, Instagram, Netflix, and thousands more.'
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, define the architecture, and plan the development roadmap.'
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Create wireframes, mockups, and interactive prototypes before coding begins.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile sprints with regular demos. See progress weekly, not monthly.'
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Rigorous testing, performance optimization, and smooth deployment.'
  }
]

const projectTypes = [
  'SaaS Dashboards',
  'Admin Panels',
  'E-commerce Frontends',
  'Social Platforms',
  'Real-time Apps',
  'Data Visualization',
  'Customer Portals',
  'Mobile-First Apps',
  'Enterprise Tools',
  'Content Platforms',
  'Booking Systems',
  'Analytics Dashboards'
]

export default function ReactDevelopment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white">
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
                <span className="text-white">React</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Build Modern Apps with{' '}
                <span className="text-cyan-200">React</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Create fast, scalable, and interactive web applications with React. 
                From simple websites to complex enterprise platforms—we build React apps 
                that users love and businesses rely on.
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
                  href="#tech-stack" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Tech Stack
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm text-white/70">100+ React Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm text-white/70">TypeScript First</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - React Code */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl" />
              
              {/* Code editor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                  {/* Editor header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-slate-400">Component.tsx</span>
                  </div>
                  {/* Code content */}
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
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-medium text-white">Blazing Fast</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Type Safe</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Box className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">Components</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <RefreshCw className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">Hot Reload</span>
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

      {/* Why React Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Why React</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Why Build With{' '}
              <span className="gradient-text">React?</span>
            </h2>
            <p className="section-subheading mx-auto">
              React powers some of the world's most successful applications. Here's why.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-cyan-50 hover:shadow-lg transition-all border border-transparent hover:border-cyan-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
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
              React Development{' '}
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

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Terminal className="w-4 h-4" />
              <span>Tech Stack</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Modern React{' '}
              <span className="text-cyan-400">Ecosystem</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We use the latest tools and best practices from the React ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                    <p className="text-sm text-white/70">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Project Types</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              What We{' '}
              <span className="gradient-text">Build</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {projectTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 hover:bg-cyan-50 hover:border-cyan-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Cpu className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We{' '}
              <span className="gradient-text">Build Your App</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
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
              "They built our entire SaaS dashboard in React. It's fast, beautiful, 
              and our users love it. The code quality is exceptional."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Peter van den Berg</div>
                <div className="text-slate-400 text-sm">CTO, CloudMetrics B.V.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Build Your React App?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Let's discuss your project and create something amazing together. 
                  Get a free consultation and project estimate.
                </p>
                <ul className="space-y-3">
                  {['Free project consultation', 'Technical architecture review', 'Timeline & cost estimate', 'No obligation proposal'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-cyan-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Start Your React Project"
                subject="React Development Inquiry"
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
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                  <select id="projectType" name="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors">
                    <option value="">Select project type</option>
                    <option value="Single Page Application">Single Page Application</option>
                    <option value="Dashboard / Admin Panel">Dashboard / Admin Panel</option>
                    <option value="Progressive Web App">Progressive Web App</option>
                    <option value="E-commerce Frontend">E-commerce Frontend</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">Project Description</label>
                  <textarea id="description" name="description" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder="Tell us about your project..." />
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to start building?</h3>
              <p className="text-slate-400">Let's discuss your React project today.</p>
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
