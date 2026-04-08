import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  Globe,
  CheckCircle2,
  Zap,
  Smartphone,
  Search,
  Gauge,
  Shield,
  Palette,
  MousePointerClick,
  Layers,
  Star,
  Phone,
  Mail,
  Monitor,
  Tablet,
  ShoppingCart,
  FileText,
  Settings
} from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Unique, brand-aligned designs that stand out from templates and competitors.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Responsive designs that look stunning on all devices, from phones to desktops.'
  },
  {
    icon: Gauge,
    title: 'Lightning Fast',
    description: 'Optimized for speed with sub-2 second load times for better conversions.'
  },
  {
    icon: Search,
    title: 'SEO Ready',
    description: 'Built with SEO best practices to help you rank higher in search results.'
  },
  {
    icon: MousePointerClick,
    title: 'Conversion Focused',
    description: 'Strategic layouts designed to turn visitors into leads and customers.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'SSL certificates, regular backups, and enterprise-grade security.'
  }
]

const websiteTypes = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Professional websites that establish credibility and generate leads for your business.',
    features: ['About & Services Pages', 'Contact Forms', 'Blog Integration', 'Analytics Setup']
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Stores',
    description: 'Online stores that sell 24/7 with seamless checkout and inventory management.',
    features: ['Product Catalogs', 'Secure Payments', 'Inventory Management', 'Order Tracking']
  },
  {
    icon: FileText,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to capture leads and drive action.',
    features: ['A/B Testing Ready', 'Lead Capture Forms', 'Analytics Integration', 'Fast Loading']
  },
  {
    icon: Layers,
    title: 'Web Applications',
    description: 'Custom web apps with complex functionality tailored to your business needs.',
    features: ['User Dashboards', 'Database Integration', 'API Connections', 'Custom Features']
  }
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, target audience, and competitors to create a solid strategy.'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our designers create stunning mockups that align with your brand and convert visitors.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'We build your website with clean code, fast loading times, and mobile responsiveness.'
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    description: 'We launch your site, monitor performance, and continuously optimize for results.'
  }
]

const stats = [
  { value: '200+', label: 'Websites Built' },
  { value: '3x', label: 'Avg. Conversion Lift' },
  { value: '<2s', label: 'Load Time Target' },
  { value: '100%', label: 'Mobile Responsive' }
]

export default function WebsiteDesign() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
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
                <Link to="/marketing" className="text-white/60 hover:text-white transition-colors">Marketing</Link>
                <span className="text-white/40">/</span>
                <span className="text-white">Website Design</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Websites That{' '}
                <span className="text-accent-300">Convert Visitors</span>{' '}
                Into Customers
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Beautiful, fast, and conversion-focused websites designed to grow your business. 
                Every pixel is crafted to turn visitors into leads and customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#portfolio" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Our Work
                </a>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              
              {/* Browser mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                  {/* Browser header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/10 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/10 rounded-lg px-3 py-1.5 text-xs text-white/60">
                        yourwebsite.com
                      </div>
                    </div>
                  </div>
                  {/* Browser content */}
                  <div className="p-6 space-y-4">
                    <div className="h-8 bg-white/20 rounded-lg w-3/4" />
                    <div className="h-4 bg-white/10 rounded w-full" />
                    <div className="h-4 bg-white/10 rounded w-5/6" />
                    <div className="h-24 bg-white/10 rounded-lg" />
                    <div className="flex gap-3">
                      <div className="h-10 bg-accent-400/50 rounded-lg flex-1" />
                      <div className="h-10 bg-white/20 rounded-lg flex-1" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Gauge className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-green-300">98 Speed Score</span>
                </div>
              </div>
              
              <div className="absolute top-20 left-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <Tablet className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="absolute bottom-12 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="absolute bottom-4 left-1/3 animate-float z-20" style={{ animationDelay: '2s' }}>
                <div className="px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-400/30 backdrop-blur-sm">
                  <span className="text-sm font-medium text-secondary-300">+127% Conversions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Websites Built for{' '}
              <span className="gradient-text">Performance</span>
            </h2>
            <p className="section-subheading mx-auto">
              Every website we build is optimized for speed, conversions, and search engines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>What We Build</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Website Solutions for{' '}
              <span className="gradient-text">Every Need</span>
            </h2>
            <p className="section-subheading mx-auto">
              From simple landing pages to complex web applications, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {websiteTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-6 shadow-lg">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-slate-600 mb-6">{type.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {type.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              From Concept to{' '}
              <span className="gradient-text">Launch</span>
            </h2>
            <p className="section-subheading mx-auto">
              A proven process that delivers results on time and on budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-primary-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              "Amora Digital transformed our outdated website into a modern, high-converting machine. 
              Our leads increased by 200% within the first month!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500" />
              <div className="text-left">
                <div className="font-semibold text-white">Sarah Johnson</div>
                <div className="text-slate-400 text-sm">CEO, TechStart Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form Section */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready for a Website That Converts?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Get a free consultation and quote for your project. 
                  We'll discuss your goals and show you how we can help.
                </p>
                <ul className="space-y-3">
                  {['Free consultation & quote', 'Custom design mockup', 'SEO & speed optimization', 'Ongoing support included'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Get Your Free Quote"
                subject="Website Design Quote Request"
                buttonText="Get My Free Quote"
                buttonClass="from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 shadow-lg shadow-primary-500/25"
                footnote="We'll respond within 24 hours. No spam, ever."
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                  <select id="projectType" name="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                    <option value="">Select a project type</option>
                    <option value="Business Website">Business Website</option>
                    <option value="E-Commerce Store">E-Commerce Store</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Website Redesign">Website Redesign</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Tell us about your project</label>
                  <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="Describe your project goals..." />
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
              <h3 className="text-xl font-bold text-white mb-1">Have questions about your project?</h3>
              <p className="text-slate-400">Let's discuss your website goals today.</p>
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
