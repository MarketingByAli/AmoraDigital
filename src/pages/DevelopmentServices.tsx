import { Link } from 'react-router-dom'
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

const services = [
  {
    icon: Code,
    title: 'React Development',
    description: 'Build fast, scalable, and interactive web applications with React. Modern architecture, reusable components, and exceptional user experiences.',
    features: ['Single Page Apps', 'Component Libraries', 'State Management', 'API Integration', 'Performance Optimized'],
    path: '/development/react',
    color: 'primary',
    stats: { value: '60%', label: 'Faster Load Times' }
  },
  {
    icon: Terminal,
    title: 'PHP Development',
    description: 'Custom PHP solutions from simple websites to complex enterprise applications. Laravel, WordPress, and custom frameworks.',
    features: ['Laravel', 'WordPress', 'Custom CMS', 'API Development', 'Legacy Modernization'],
    path: '/development/php',
    color: 'secondary',
    stats: { value: '500+', label: 'Projects Delivered' }
  },
  {
    icon: Cpu,
    title: 'Java Development',
    description: 'Enterprise-grade Java applications built for scale, security, and performance. Backend systems, APIs, and microservices.',
    features: ['Spring Boot', 'Microservices', 'Enterprise Apps', 'REST APIs', 'Cloud Native'],
    path: '/development/java',
    color: 'accent',
    stats: { value: '99.9%', label: 'Uptime Achieved' }
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android. Beautiful interfaces and seamless functionality.',
    features: ['React Native', 'iOS Apps', 'Android Apps', 'Cross-Platform', 'App Store Launch'],
    path: '/development/mobile-apps',
    color: 'primary',
    stats: { value: '4.8', label: 'Avg. App Rating' }
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Build online stores that sell. Custom e-commerce platforms, payment integrations, and conversion-optimized shopping experiences.',
    features: ['WooCommerce', 'Shopify', 'Custom Carts', 'Payment Gateway', 'Inventory Management'],
    path: '/development/ecommerce',
    color: 'secondary',
    stats: { value: '3x', label: 'Sales Increase' }
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Leverage artificial intelligence to automate processes, gain insights, and create intelligent applications.',
    features: ['ChatGPT Integration', 'Process Automation', 'Machine Learning', 'Custom AI Tools', 'Data Analysis'],
    path: '/development/ai-automation',
    color: 'accent',
    stats: { value: '80%', label: 'Time Saved' }
  },
  {
    icon: Layers,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development. Frontend, backend, database, and everything in between.',
    features: ['Node.js', 'Python', 'Databases', 'Cloud Hosting', 'DevOps'],
    path: '/development/full-stack',
    color: 'primary',
    stats: { value: '100%', label: 'Ownership' }
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Custom web applications tailored to your business needs. CRMs, dashboards, SaaS platforms, and internal tools.',
    features: ['SaaS Platforms', 'Custom Dashboards', 'Internal Tools', 'CRM Systems', 'Portals'],
    path: '/development/web-applications',
    color: 'secondary',
    stats: { value: '50%', label: 'Efficiency Boost' }
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    primary: {
      bg: 'bg-primary-100',
      bgDark: 'bg-primary-600',
      icon: 'text-primary-600',
      border: 'border-primary-200',
      hover: 'hover:border-primary-300',
      gradient: 'from-primary-500 to-primary-600',
      light: 'bg-primary-50',
      text: 'text-primary-600'
    },
    secondary: {
      bg: 'bg-secondary-100',
      bgDark: 'bg-secondary-600',
      icon: 'text-secondary-600',
      border: 'border-secondary-200',
      hover: 'hover:border-secondary-300',
      gradient: 'from-secondary-500 to-secondary-600',
      light: 'bg-secondary-50',
      text: 'text-secondary-600'
    },
    accent: {
      bg: 'bg-accent-100',
      bgDark: 'bg-accent-600',
      icon: 'text-accent-600',
      border: 'border-accent-200',
      hover: 'hover:border-accent-300',
      gradient: 'from-accent-500 to-accent-600',
      light: 'bg-accent-50',
      text: 'text-accent-600'
    }
  }
  return colors[color as keyof typeof colors]
}

const technologies = [
  { name: 'React', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Terminal },
  { name: 'PHP', icon: Code },
  { name: 'Java', icon: Cpu },
  { name: 'PostgreSQL', icon: Database },
]

export default function DevelopmentServices() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-accent-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl" />
          {/* Code pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                <span className="text-white/40">/</span>
                <span className="text-white">Development</span>
              </nav>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                <span>Development Services</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Code That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Powers Growth</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl">
                Custom software development that transforms your ideas into powerful digital solutions. 
                From web apps to mobile, e-commerce to AI—we build technology that drives business results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  Explore Services
                </a>
              </div>
              
              {/* Quick stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg">
                <div>
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm text-white/70">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-white/70">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-sm text-white/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative hidden lg:block h-[500px]">
              {/* Central glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl" />
              
              {/* Main Code Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 w-80 shadow-2xl">
                  {/* Code editor header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-slate-400">App.tsx</span>
                  </div>
                  {/* Code content */}
                  <div className="font-mono text-sm space-y-1">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">App</span> <span className="text-white">=</span> <span className="text-yellow-400">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-yellow-400">{'{'}</span></div>
                    <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-yellow-400">(</span></div>
                    <div className="pl-8"><span className="text-green-400">&lt;div&gt;</span></div>
                    <div className="pl-12"><span className="text-cyan-400">Building amazing</span></div>
                    <div className="pl-12"><span className="text-cyan-400">products...</span></div>
                    <div className="pl-8"><span className="text-green-400">&lt;/div&gt;</span></div>
                    <div className="pl-4"><span className="text-yellow-400">)</span></div>
                    <div><span className="text-yellow-400">{'}'}</span></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Cards */}
              <div className="absolute top-4 left-4 animate-float z-20" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-700 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">React</span>
                </div>
              </div>
              
              <div className="absolute top-8 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-700 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                    <Server className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">Node.js</span>
                </div>
              </div>
              
              <div className="absolute top-1/3 -left-2 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-700 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center">
                    <Terminal className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">Python</span>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-700 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">Java</span>
                </div>
              </div>
              
              <div className="absolute bottom-12 left-8 animate-float z-20" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-700 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">PostgreSQL</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-12 animate-float z-20" style={{ animationDelay: '2.5s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-700 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">AI</span>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-16 left-1/2 animate-float z-20" style={{ animationDelay: '0.8s' }}>
                <div className="px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-green-300">Build Successful</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-float z-20" style={{ animationDelay: '1.8s' }}>
                <div className="px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-primary-300" />
                    <span className="text-sm font-medium text-primary-300">Deployed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2 text-slate-400">
              <Shield className="w-5 h-5 text-primary-500" />
              <span className="text-sm">Secure & Scalable</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-5 h-5 text-secondary-500" />
              <span className="text-sm">On-Time Delivery</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400">
              <TrendingUp className="w-5 h-5 text-accent-500" />
              <span className="text-sm">Built for Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Development{' '}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="section-subheading mx-auto">
              From concept to deployment, we build custom software solutions that solve real business problems.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => {
              const colorClasses = getColorClasses(service.color)
              return (
                <Link 
                  key={service.title}
                  to={service.path}
                  className={`group relative bg-white rounded-2xl border-2 ${colorClasses.border} ${colorClasses.hover} p-6 lg:p-8 transition-all hover:shadow-xl hover:-translate-y-1`}
                >
                  {/* Stats badge */}
                  <div className={`absolute top-6 right-6 px-3 py-1.5 rounded-full ${colorClasses.light} ${colorClasses.text} text-xs font-bold`}>
                    {service.stats.value} {service.stats.label}
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span 
                            key={feature}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
                          >
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700">
                      Learn more
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Technologies We Master</h2>
            <p className="text-slate-600">Modern tech stack for modern solutions</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <tech.icon className="w-6 h-6 text-primary-600" />
                <span className="font-medium text-slate-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              Why Choose{' '}
              <span className="gradient-text">Amora Digital</span>
            </h2>
            <p className="section-subheading mx-auto">
              We're not just developers. We're problem solvers who build technology that drives business results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Clean Code</h3>
              <p className="text-slate-600">
                Maintainable, well-documented code that your team can understand and extend.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Delivery</h3>
              <p className="text-slate-600">
                Agile development with regular updates. See progress weekly, not monthly.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Built to Scale</h3>
              <p className="text-slate-600">
                Architecture designed to grow with your business. No rebuilding required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form Section */}
      <section id="contact-form" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Let's Build Something Amazing
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Have a project in mind? Let's discuss how we can bring your ideas to life 
                  with custom software development.
                </p>
                <ul className="space-y-3">
                  {['Free project consultation', 'Technical feasibility assessment', 'Timeline & budget estimate', 'No obligation proposal'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Start Your Project</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                    <select 
                      id="projectType"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="ai-automation">AI & Automation</option>
                      <option value="custom">Custom Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">Project Description</label>
                    <textarea 
                      id="description"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2 group"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-500 text-center">
                  Free consultation. We'll respond within 24 hours.
                </p>
              </div>
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
              <p className="text-slate-400">Let's discuss your development project today.</p>
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
