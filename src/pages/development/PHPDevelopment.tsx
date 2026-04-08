import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Database,
  Server,
  Globe,
  Layers,
  Shield,
  Star,
  Phone,
  Mail,
  Settings,
  Package,
  RefreshCw,
  Lock,
  Rocket,
  BarChart3,
  ShoppingCart,
  FileCode,
  Wrench
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Custom PHP Development',
    description: 'Tailor-made PHP applications built to your exact specifications and business needs.'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'WooCommerce, Magento, and custom PHP shopping cart development.'
  },
  {
    icon: FileCode,
    title: 'WordPress Development',
    description: 'Custom themes, plugins, and full WordPress solutions.'
  },
  {
    icon: Lock,
    title: 'API Development',
    description: 'RESTful APIs and microservices with Laravel, Symfony, or custom PHP.'
  },
  {
    icon: RefreshCw,
    title: 'Legacy Modernization',
    description: 'Upgrade and modernize your existing PHP applications.'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing support, security updates, and performance optimization.'
  }
]

const stats = [
  { value: '300+', label: 'PHP Projects', description: 'Successfully delivered' },
  { value: '12+', label: 'Years Experience', description: 'In PHP development' },
  { value: '80%', label: 'Web Runs PHP', description: 'Of all websites' },
  { value: '99.9%', label: 'Uptime', description: 'System reliability' }
]

const frameworks = [
  { name: 'Laravel', description: 'Modern, elegant syntax', color: 'from-red-500 to-red-600', popularity: 'Most Popular' },
  { name: 'Symfony', description: 'Enterprise-grade', color: 'from-slate-700 to-slate-800', popularity: 'Enterprise' },
  { name: 'WordPress', description: 'CMS & websites', color: 'from-blue-500 to-blue-600', popularity: '43% of Web' },
  { name: 'CodeIgniter', description: 'Lightweight & fast', color: 'from-orange-500 to-orange-600', popularity: 'Lightweight' },
]

const techStack = [
  { category: 'Frameworks', items: ['Laravel', 'Symfony', 'CodeIgniter', 'Yii', 'CakePHP'] },
  { category: 'CMS', items: ['WordPress', 'Drupal', 'Joomla', 'Magento', 'PrestaShop'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MariaDB', 'Redis', 'MongoDB'] },
  { category: 'Tools', items: ['Composer', 'PHPUnit', 'Docker', 'Git', 'CI/CD'] },
]

const useCases = [
  { 
    icon: Globe, 
    title: 'Corporate Websites', 
    description: 'Professional websites with CMS for easy content management.',
  },
  { 
    icon: ShoppingCart, 
    title: 'E-Commerce Stores', 
    description: 'Online shops with WooCommerce, Magento, or custom solutions.',
  },
  { 
    icon: Database, 
    title: 'Web Applications', 
    description: 'CRM, ERP, booking systems, and custom business tools.',
  },
  { 
    icon: Lock, 
    title: 'APIs & Backends', 
    description: 'RESTful APIs and backend services for web and mobile apps.',
  },
]

const whyPHP = [
  { title: 'Battle-Tested', description: 'Powers 80% of websites including Facebook, Wikipedia, and WordPress.' },
  { title: 'Cost-Effective', description: 'Large talent pool and extensive libraries reduce development costs.' },
  { title: 'Fast Development', description: 'Rapid prototyping and quick time-to-market with mature frameworks.' },
  { title: 'Scalable', description: 'Handles millions of requests—proven at enterprise scale.' },
  { title: 'Great Hosting', description: 'Supported by virtually every web host, often at lower costs.' },
  { title: 'Rich Ecosystem', description: 'Thousands of packages, plugins, and integrations available.' },
]

const process = [
  {
    step: '01',
    title: 'Requirements',
    description: 'We analyze your needs, choose the right framework, and plan the architecture.'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Database design, API specifications, and UI/UX planning.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile development with regular demos and feedback cycles.'
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Comprehensive testing: unit tests, integration tests, and security audits.'
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Deployment, performance optimization, and go-live support.'
  }
]

const features = [
  'Clean, maintainable code',
  'PSR standards compliance',
  'Comprehensive documentation',
  'Security best practices',
  'Performance optimization',
  'Database optimization',
  'Caching strategies',
  'API documentation',
  'Unit & integration tests',
  'CI/CD pipeline setup',
  'Server configuration',
  'Ongoing support options'
]

export default function PHPDevelopment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white">
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
                <span className="text-white">PHP</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                PHP That Powers{' '}
                <span className="text-indigo-200">The Web</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                From Laravel to WordPress, we build robust PHP applications that 
                scale. Join 80% of the web running on PHP—the language that 
                powers billions of websites.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-indigo-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#frameworks" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Frameworks
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-indigo-200" />
                  <span className="text-sm text-white/70">80% of Web Uses PHP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-200" />
                  <span className="text-sm text-white/70">Enterprise-Ready</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Code Editor Mockup */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl" />
              
              {/* Code editor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-96 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Editor header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-xs text-slate-400">UserController.php</span>
                  </div>
                  {/* Code content */}
                  <div className="p-4 font-mono text-sm">
                    <div className="text-slate-500">{"<?php"}</div>
                    <div className="mt-2">
                      <span className="text-purple-400">namespace</span>
                      <span className="text-white"> App\Http\Controllers;</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-purple-400">class</span>
                      <span className="text-yellow-300"> UserController</span>
                    </div>
                    <div className="text-white">{"{"}</div>
                    <div className="pl-4">
                      <span className="text-purple-400">public function</span>
                      <span className="text-blue-300"> index</span>
                      <span className="text-white">()</span>
                    </div>
                    <div className="pl-4 text-white">{"{"}</div>
                    <div className="pl-8">
                      <span className="text-purple-400">return</span>
                      <span className="text-white"> User::</span>
                      <span className="text-blue-300">all</span>
                      <span className="text-white">();</span>
                    </div>
                    <div className="pl-4 text-white">{"}"}</div>
                    <div className="text-white">{"}"}</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-400/30 backdrop-blur-sm">
                  <Layers className="w-4 h-4 text-red-300" />
                  <span className="text-sm font-medium text-white">Laravel</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Globe className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">WordPress</span>
                </div>
              </div>
              
              <div className="absolute bottom-24 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/20 border border-slate-400/30 backdrop-blur-sm">
                  <Server className="w-4 h-4 text-slate-300" />
                  <span className="text-sm font-medium text-white">Symfony</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Database className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">MySQL</span>
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

      {/* Why PHP Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Why PHP</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Why Choose{' '}
              <span className="gradient-text">PHP</span>?
            </h2>
            <p className="section-subheading mx-auto">
              PHP has powered the web for decades and continues to evolve with modern features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPHP.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:shadow-lg transition-all border border-transparent hover:border-indigo-100">
                <CheckCircle2 className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              PHP Development{' '}
              <span className="gradient-text">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section id="frameworks" className="py-20 lg:py-28 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Frameworks</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              PHP{' '}
              <span className="text-indigo-300">Frameworks</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We work with all major PHP frameworks. Choose the right tool for your project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworks.map((framework) => (
              <div key={framework.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${framework.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{framework.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{framework.name}</h3>
                <p className="text-sm text-white/70 mb-2">{framework.description}</p>
                <span className="inline-block px-3 py-1 text-xs bg-white/10 rounded-full text-white/80">
                  {framework.popularity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              <Package className="w-4 h-4" />
              <span>Tech Stack</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Our PHP{' '}
              <span className="gradient-text">Tech Stack</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack) => (
              <div key={stack.category} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              <span>Use Cases</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              What We{' '}
              <span className="gradient-text">Build</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg mx-auto group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
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
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
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

      {/* What's Included Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>What's Included</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                Every Project{' '}
                <span className="gradient-text">Includes</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We don't cut corners. Every PHP project we deliver includes 
                these essentials for a production-ready application.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Code quality visual */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-4">Code Quality Standards</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">PSR-12 Compliance</span>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">100%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">Test Coverage</span>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">80%+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">Security Audit</span>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">Passed</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">Performance Grade</span>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">A+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">Documentation</span>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">Complete</span>
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
              "They modernized our legacy PHP application with Laravel, improving 
              performance by 10x and making it maintainable for years to come. 
              Excellent work!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Peter de Vries</div>
                <div className="text-slate-400 text-sm">Director, Dutch Software Company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready for PHP Development?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Whether you need a new application, WordPress site, or legacy 
                  modernization—we're your PHP experts. Let's discuss your project.
                </p>
                <ul className="space-y-3">
                  {['Free technical consultation', 'Framework recommendation', 'Architecture planning', 'No obligation quote'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-indigo-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Start Your PHP Project"
                subject="PHP Development Inquiry"
                buttonText="Get Free Consultation"
                buttonClass="from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25"
                footnote="Free consultation. We'll respond within 24 hours."
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="framework" className="block text-sm font-medium text-slate-700 mb-1">Preferred Framework</label>
                  <select id="framework" name="framework" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors">
                    <option value="">Select framework</option>
                    <option value="Laravel">Laravel</option>
                    <option value="Symfony">Symfony</option>
                    <option value="WordPress">WordPress</option>
                    <option value="CodeIgniter">CodeIgniter</option>
                    <option value="Custom PHP">Custom PHP</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                  <select id="projectType" name="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors">
                    <option value="">Select project type</option>
                    <option value="New Development">New Development</option>
                    <option value="Legacy Modernization">Legacy Modernization</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="API Development">API Development</option>
                    <option value="Maintenance & Support">Maintenance & Support</option>
                  </select>
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to start your PHP project?</h3>
              <p className="text-slate-400">Let's discuss your requirements today.</p>
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
