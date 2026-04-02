import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShoppingCart,
  Lock,
  Truck,
  CreditCard,
  Search,
  BarChart3,
  Globe,
  Star,
  Smartphone,
  Package,
  Shield,
  Users,
  TrendingUp,
  Settings,
  Database,
  Code2,
  ExternalLink,
  Layers,
  RefreshCw,
  Mail
} from 'lucide-react'

const platformFeatures = [
  {
    icon: ShoppingCart,
    title: 'Optimized Shopping Experience',
    description: 'Intuitive product browsing, advanced filtering, wishlist functionality, and seamless checkout process.'
  },
  {
    icon: Lock,
    title: 'Secure & Discreet',
    description: 'SSL encryption, secure payment processing, and completely discreet packaging and billing for customer privacy.'
  },
  {
    icon: Search,
    title: 'Advanced Product Discovery',
    description: 'Smart search functionality, category organization, product recommendations, and personalized shopping.'
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Options',
    description: 'Integrated payment gateways supporting cards, digital wallets, and buy-now-pay-later options.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Real-time sales tracking, customer behavior analytics, inventory management, and performance reporting.'
  },
  {
    icon: Truck,
    title: 'Smart Logistics',
    description: 'Automated shipping calculations, tracking integration, and efficient order fulfillment systems.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Fully responsive design optimized for mobile shopping with app-like experience on all devices.'
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'User accounts, order history, saved addresses, and personalized shopping experiences.'
  }
]

const technicalStack = [
  { name: 'WooCommerce', description: 'Powerful e-commerce platform', icon: ShoppingCart },
  { name: 'WordPress', description: 'Flexible CMS foundation', icon: Globe },
  { name: 'Custom Development', description: 'Tailored features and functionality', icon: Code2 },
  { name: 'Payment Integration', description: 'Secure payment processing', icon: CreditCard },
  { name: 'Cloud Hosting', description: 'Fast and reliable infrastructure', icon: Database },
  { name: 'SEO Optimization', description: 'Search engine visibility', icon: TrendingUp },
]

const achievements = [
  {
    title: 'High-Performance Platform',
    description: 'Built a fast, scalable e-commerce platform that handles thousands of products and concurrent users.',
    stat: '99.9%',
    statLabel: 'Uptime'
  },
  {
    title: 'Seamless User Experience',
    description: 'Intuitive navigation, quick checkout, and mobile-optimized design result in high conversion rates.',
    stat: '3.2x',
    statLabel: 'Conversion Rate'
  },
  {
    title: 'Trust & Privacy',
    description: 'Implemented industry-leading security measures and discreet shopping experience for customer confidence.',
    stat: '100%',
    statLabel: 'Secure'
  }
]

const developmentProcess = [
  {
    step: '01',
    title: 'Platform Strategy',
    description: 'Market research, competitor analysis, and defining unique selling propositions for the adult retail space.'
  },
  {
    step: '02',
    title: 'Custom Development',
    description: 'Built on WooCommerce with extensive customization for enhanced functionality and user experience.'
  },
  {
    step: '03',
    title: 'Payment & Security',
    description: 'Integrated secure payment gateways with age verification and privacy-focused checkout process.'
  },
  {
    step: '04',
    title: 'Launch & Growth',
    description: 'Ongoing optimization, SEO, content marketing, and continuous feature enhancements.'
  }
]

const services = [
  'Custom WooCommerce Development',
  'Payment Gateway Integration',
  'Inventory Management',
  'SEO & Content Strategy',
  'Email Marketing Automation',
  'Customer Analytics',
  'Mobile Optimization',
  'Security & Compliance',
  'Performance Optimization',
  'Ongoing Maintenance',
  'Marketing Campaigns',
  'Conversion Optimization'
]

export default function PinkPeck() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-rose-600 to-purple-700 text-white">
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
                <span className="text-white/60">Products</span>
                <span className="text-white/40">/</span>
                <span className="text-white">PinkPeck</span>
              </nav>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>E-Commerce Platform</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Building Premium{' '}
                <span className="text-pink-200">E-Commerce Experiences</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                PinkPeck is a sophisticated online retail platform developed and managed by Amora Digital. 
                We built a high-performance e-commerce solution with advanced features, secure payments, 
                and exceptional user experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://pinkpeck.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-pink-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Visit PinkPeck
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#case-study" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Case Study
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-pink-300" />
                  <span className="text-sm text-white/70">Secure Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-pink-300" />
                  <span className="text-sm text-white/70">Discreet Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-300" />
                  <span className="text-sm text-white/70">Managed by Amora Digital</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl" />
              
              {/* E-commerce Dashboard Preview */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                  {/* Dashboard header */}
                  <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="font-semibold">E-Commerce Dashboard</span>
                  </div>
                  {/* Stats */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">1,247</div>
                        <div className="text-xs text-slate-600">Orders This Month</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">£45K</div>
                        <div className="text-xs text-slate-600">Revenue</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Conversion Rate</span>
                        <span className="font-semibold text-slate-900">3.2%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-pink-500 to-rose-600"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Customer Satisfaction</span>
                        <span className="font-semibold text-slate-900">4.8/5.0</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-11/12 bg-gradient-to-r from-pink-500 to-rose-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating feature badges */}
              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">WooCommerce</span>
                </div>
              </div>
              
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Lock className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">Secure</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Smartphone className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-medium text-white">Mobile First</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium text-white">High Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Project Highlights</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Building a Successful{' '}
              <span className="gradient-text">E-Commerce Platform</span>
            </h2>
            <p className="section-subheading mx-auto">
              From concept to launch, we developed and continue to manage a high-performing 
              online retail platform with exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-pink-200 hover:shadow-xl transition-all group">
                <div className="text-5xl font-bold text-pink-100 mb-4 group-hover:text-pink-200 transition-colors">
                  {achievement.stat}
                </div>
                <div className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-3">
                  {achievement.statLabel}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{achievement.title}</h3>
                <p className="text-slate-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Platform Features</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Enterprise-Level{' '}
              <span className="gradient-text">E-Commerce Features</span>
            </h2>
            <p className="section-subheading mx-auto">
              We built PinkPeck with advanced features and functionality to deliver 
              an exceptional shopping experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section id="case-study" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Development Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We Built{' '}
              <span className="gradient-text">PinkPeck</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={step.step} className="relative">
                {index < developmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-pink-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-pink-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" />
              <span>Technology Stack</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built with Modern{' '}
              <span className="text-pink-400">Technologies</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We leveraged powerful technologies and custom development to create 
              a robust, scalable e-commerce platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalStack.map((tech) => (
              <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center flex-shrink-0">
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

      {/* Services Provided */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <RefreshCw className="w-4 h-4" />
              <span>Services Provided</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Complete E-Commerce{' '}
              <span className="gradient-text">Management</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white hover:bg-pink-50 hover:border-pink-200 border border-slate-100 transition-colors shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{service}</span>
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
              "Amora Digital transformed our vision into a thriving e-commerce platform. 
              Their expertise in WooCommerce development and ongoing management has been 
              instrumental to our success."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600" />
              <div className="text-left">
                <div className="font-semibold text-white">PinkPeck Team</div>
                <div className="text-slate-400 text-sm">E-Commerce Platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* CTA 1: Visit PinkPeck */}
            <div className="relative rounded-3xl bg-gradient-to-br from-pink-500 via-rose-600 to-purple-700 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>
              
              <div className="relative">
                <ShoppingCart className="w-12 h-12 text-pink-200 mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  See PinkPeck in Action
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Visit PinkPeck to experience the platform we built—a perfect example 
                  of our e-commerce development expertise.
                </p>
                <a 
                  href="https://pinkpeck.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-pink-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Visit PinkPeck.com
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="mt-6 text-sm text-white/70">
                  Developed & managed by Amora Digital
                </p>
              </div>
            </div>

            {/* CTA 2: Build Your Own Store */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 md:p-12 overflow-hidden border border-slate-700">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              </div>
              
              <div className="relative">
                <Code2 className="w-12 h-12 text-pink-400 mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Your Own E-Commerce Platform?
                </h3>
                <p className="text-lg text-slate-300 mb-8">
                  We can build a custom online store for your business with the same level 
                  of quality, security, and performance as PinkPeck.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Custom WooCommerce development', 'Secure payment integration', 'Mobile-optimized design', 'Ongoing support & management'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all shadow-lg group"
                >
                  Build Your Own E-Commerce Store
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to build your e-commerce platform?</h3>
              <p className="text-slate-400">Let's discuss how we can help grow your online business.</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://pinkpeck.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Visit Platform
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
