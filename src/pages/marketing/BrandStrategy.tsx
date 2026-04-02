import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Palette,
  Target,
  Heart,
  Users,
  Sparkles,
  Eye,
  MessageSquare,
  Lightbulb,
  Compass,
  Crown,
  Star,
  Phone,
  Mail,
  FileText,
  Layers,
  PenTool,
  Type,
  Image,
  BookOpen,
  TrendingUp,
  Award
} from 'lucide-react'

const services = [
  {
    icon: Compass,
    title: 'Brand Discovery',
    description: 'Deep dive into your business, audience, and competitors to uncover your unique positioning.'
  },
  {
    icon: Target,
    title: 'Brand Positioning',
    description: 'Define where your brand fits in the market and how it stands apart from competitors.'
  },
  {
    icon: MessageSquare,
    title: 'Brand Messaging',
    description: 'Craft compelling brand voice, taglines, and key messages that resonate with your audience.'
  },
  {
    icon: Palette,
    title: 'Visual Identity',
    description: 'Design logos, color palettes, typography, and visual elements that capture your brand essence.'
  },
  {
    icon: BookOpen,
    title: 'Brand Guidelines',
    description: 'Comprehensive style guides ensuring consistency across all touchpoints.'
  },
  {
    icon: TrendingUp,
    title: 'Brand Activation',
    description: 'Strategies to bring your brand to life across marketing channels.'
  }
]

const stats = [
  { value: '89%', label: 'Brand Recognition', description: 'Increase for clients' },
  { value: '3.5x', label: 'Customer Trust', description: 'With consistent branding' },
  { value: '23%', label: 'Revenue Increase', description: 'From strong branding' },
  { value: '50+', label: 'Brands Built', description: 'Successful projects' }
]

const brandElements = [
  { icon: Crown, name: 'Brand Purpose', description: 'Why your brand exists beyond profit' },
  { icon: Heart, name: 'Brand Values', description: 'Core beliefs that guide your brand' },
  { icon: Users, name: 'Brand Personality', description: 'Human traits your brand embodies' },
  { icon: MessageSquare, name: 'Brand Voice', description: 'How your brand communicates' },
  { icon: Eye, name: 'Brand Promise', description: 'What customers can always expect' },
  { icon: Sparkles, name: 'Brand Experience', description: 'How people feel interacting with you' },
]

const visualIdentity = [
  { icon: PenTool, name: 'Logo Design', description: 'Memorable mark that represents your brand' },
  { icon: Palette, name: 'Color Palette', description: 'Strategic colors that evoke the right emotions' },
  { icon: Type, name: 'Typography', description: 'Fonts that reflect your brand personality' },
  { icon: Image, name: 'Photography Style', description: 'Visual direction for imagery and photos' },
  { icon: Layers, name: 'Graphic Elements', description: 'Icons, patterns, and visual motifs' },
  { icon: FileText, name: 'Templates', description: 'Consistent layouts for all materials' },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We immerse ourselves in your business, audience, and industry to understand the landscape.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We define your brand positioning, messaging, and personality framework.'
  },
  {
    step: '03',
    title: 'Identity Design',
    description: 'We create the visual elements that bring your brand strategy to life.'
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'We deliver comprehensive guidelines and help you roll out the new brand.'
  }
]

const deliverables = [
  'Brand strategy document',
  'Positioning statement',
  'Mission & vision',
  'Brand values',
  'Brand personality',
  'Messaging framework',
  'Logo & variations',
  'Color palette',
  'Typography system',
  'Photography guidelines',
  'Brand guidelines PDF',
  'Asset library'
]

const whyBranding = [
  {
    icon: TrendingUp,
    title: 'Command Premium Prices',
    description: 'Strong brands can charge 20-25% more than competitors for the same product or service.'
  },
  {
    icon: Heart,
    title: 'Build Customer Loyalty',
    description: 'Consistent branding creates emotional connections that turn customers into advocates.'
  },
  {
    icon: Users,
    title: 'Attract Top Talent',
    description: 'A compelling brand attracts employees who believe in your mission and values.'
  },
  {
    icon: Award,
    title: 'Stand Out From Competition',
    description: 'A unique brand identity makes you memorable in a crowded marketplace.'
  }
]

export default function BrandStrategy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-700 text-white">
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
                <span className="text-white">Brand Strategy</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Build a Brand{' '}
                <span className="text-fuchsia-200">People Remember</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Your brand is more than a logo. It's the feeling people get when they 
                interact with your business. We'll help you create a brand that resonates, 
                differentiates, and drives growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Start Your Brand Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#process" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  Our Process
                </a>
              </div>
              
              {/* Trust signals */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-fuchsia-200" />
                  <span className="text-sm text-white/70">50+ Brands Built</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-fuchsia-200" />
                  <span className="text-sm text-white/70">Award-Winning Design</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Brand Identity Preview */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              
              {/* Brand elements floating */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                {/* Central logo placeholder */}
                <div className="w-32 h-32 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-fuchsia-400 to-purple-600 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">A</span>
                  </div>
                </div>
              </div>
              
              {/* Color swatches */}
              <div className="absolute top-8 left-8 animate-float z-20">
                <div className="flex gap-1 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="w-8 h-8 rounded bg-fuchsia-500" />
                  <div className="w-8 h-8 rounded bg-purple-600" />
                  <div className="w-8 h-8 rounded bg-indigo-700" />
                </div>
              </div>
              
              {/* Typography */}
              <div className="absolute top-16 right-4 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="text-xs text-white/60 mb-1">Typography</div>
                  <div className="text-lg font-bold text-white">Aa Bb Cc</div>
                </div>
              </div>
              
              {/* Brand voice */}
              <div className="absolute bottom-24 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                  <MessageSquare className="w-4 h-4 text-fuchsia-300" />
                  <span className="text-sm font-medium text-white">Bold & Confident</span>
                </div>
              </div>
              
              {/* Values */}
              <div className="absolute bottom-16 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                  <Heart className="w-4 h-4 text-pink-300" />
                  <span className="text-sm font-medium text-white">Trust & Innovation</span>
                </div>
              </div>
              
              {/* Business cards mockup */}
              <div className="absolute bottom-4 left-16 animate-float z-20" style={{ animationDelay: '2s' }}>
                <div className="w-24 h-14 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transform rotate-6 shadow-lg" />
                <div className="w-24 h-14 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-lg transform -rotate-3 -mt-10 ml-2 shadow-lg" />
              </div>
              
              {/* Icon set */}
              <div className="absolute top-1/3 left-4 animate-float z-20" style={{ animationDelay: '0.75s' }}>
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <Sparkles className="w-6 h-6 text-fuchsia-300" />
                </div>
              </div>
              
              <div className="absolute top-1/3 right-12 animate-float z-20" style={{ animationDelay: '1.25s' }}>
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <Palette className="w-6 h-6 text-purple-300" />
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

      {/* Why Brand Strategy */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Why Brand Strategy</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Why Invest in{' '}
              <span className="gradient-text">Brand Strategy?</span>
            </h2>
            <p className="section-subheading mx-auto">
              A strong brand is your most valuable business asset. It's what makes customers choose you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBranding.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-fuchsia-50 hover:shadow-lg transition-all border border-transparent hover:border-fuchsia-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Elements Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4" />
              <span>Brand Foundation</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              The Elements of a{' '}
              <span className="gradient-text">Strong Brand</span>
            </h2>
            <p className="section-subheading mx-auto">
              We develop every aspect of your brand to create a cohesive, compelling identity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandElements.map((element) => (
              <div key={element.name} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-100 hover:shadow-lg hover:border-purple-100 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <element.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{element.name}</h3>
                  <p className="text-sm text-slate-600">{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Palette className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Complete Brand{' '}
              <span className="gradient-text">Strategy Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Identity Section */}
      <section className="py-20 lg:py-28 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <PenTool className="w-4 h-4" />
              <span>Visual Identity</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Visual Identity{' '}
              <span className="text-fuchsia-300">Design</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We design every visual element to create a cohesive brand experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visualIdentity.map((item) => (
              <div key={item.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-fuchsia-300 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-medium mb-4">
              <Compass className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We{' '}
              <span className="gradient-text">Build Your Brand</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-fuchsia-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-fuchsia-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              <span>Deliverables</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              What You'll{' '}
              <span className="gradient-text">Receive</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-slate-100 hover:border-fuchsia-200 hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
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
              "Our rebrand transformed everything. Customers now instantly recognize us, 
              we're attracting better clients, and we've been able to raise our prices by 30%."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600" />
              <div className="text-left">
                <div className="font-semibold text-white">David Vermeer</div>
                <div className="text-slate-400 text-sm">Founder, Vermeer Consulting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Build a Brand That Stands Out?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Get a free brand consultation and discover how a strategic rebrand 
                  can transform your business.
                </p>
                <ul className="space-y-3">
                  {['Brand audit & assessment', 'Competitor analysis', 'Positioning opportunities', 'Custom strategy proposal'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-fuchsia-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Get Your Free Brand Consultation</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                    <input 
                      type="text" 
                      id="company"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                    <select 
                      id="project"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="new">New Brand (Starting from scratch)</option>
                      <option value="rebrand">Rebrand (Refresh existing brand)</option>
                      <option value="identity">Visual Identity Only</option>
                      <option value="strategy">Brand Strategy Only</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 text-base font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-lg hover:from-fuchsia-600 hover:to-purple-700 transition-all shadow-lg shadow-fuchsia-500/25 flex items-center justify-center gap-2 group"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-500 text-center">
                  Free consultation. Let's discuss your brand vision.
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to build your brand?</h3>
              <p className="text-slate-400">Let's discuss your brand strategy today.</p>
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
