import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Sparkles,
  Link2,
  QrCode,
  BarChart3,
  Globe,
  Star,
  MousePointerClick,
  Users,
  Target,
  FileText,
  Video,
  Share2,
  ExternalLink,
  Code2,
  Palette,
  TrendingUp,
  Settings,
  Heart
} from 'lucide-react'

const features = [
  {
    icon: Link2,
    title: 'Custom Bio Pages',
    description: 'Create stunning bio pages that showcase all your content in one place. No coding required, fully customizable.'
  },
  {
    icon: QrCode,
    title: 'Dynamic QR Codes',
    description: 'Generate trackable, customizable QR codes. Match your brand colors, add logos, and monitor performance.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track clicks, visits, user locations, and engagement. Understand your audience with detailed insights.'
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description: 'Branded domain names and fully customized designs. Make it truly yours and build trust with your audience.'
  },
  {
    icon: Video,
    title: 'Dynamic Widgets',
    description: 'Add payment buttons, video embeds, social posts, contact forms, and more to engage your audience.'
  },
  {
    icon: FileText,
    title: 'File Sharing',
    description: 'Upload, host, and share files directly from your bio page. Easy file management for your audience.'
  },
  {
    icon: Target,
    title: 'Smart Targeting',
    description: 'Apply restrictions and target users by country, language, and device. Reach the right audience.'
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Invite team members and assign privileges. Collaborate seamlessly and manage everything together.'
  }
]

const benefits = [
  {
    title: 'One Link, Infinite Possibilities',
    description: 'Share all your important content, social media, products, and services through a single, beautiful link.',
    stat: '1',
    statLabel: 'Link for Everything'
  },
  {
    title: 'Drive More Engagement',
    description: 'Interactive widgets, custom CTAs, and trackable links help you convert visitors into customers.',
    stat: '3x',
    statLabel: 'More Clicks'
  },
  {
    title: 'Make Data-Driven Decisions',
    description: 'Real-time analytics show you exactly where your traffic comes from and what content performs best.',
    stat: '100%',
    statLabel: 'Visibility'
  }
]

const useCases = [
  'Social Media Links',
  'Content Creators',
  'Influencer Marketing',
  'E-commerce Stores',
  'Event Promotions',
  'Portfolio Showcases',
  'Product Launches',
  'Lead Generation',
  'Digital Business Cards',
  'Restaurant Menus',
  'Music & Artists',
  'Course Creators'
]

const advancedFeatures = [
  { name: 'CTA Overlays', description: 'Display notifications, polls, or contact forms', icon: MousePointerClick },
  { name: 'Event Tracking', description: 'Add pixels from Facebook and track events', icon: TrendingUp },
  { name: 'Campaigns & Channels', description: 'Organize links and get aggregated stats', icon: Settings },
  { name: 'Developer API', description: 'Build custom applications with powerful API', icon: Code2 },
]

const testimonials = [
  {
    name: 'Shawn Greenway',
    role: 'Agency Owner, BrandLyft',
    quote: 'Hi.Fan has been a game-changer for our team! It\'s efficient, user-friendly, and adaptable. Creating a sleek bio page with all essential links makes communication seamless and boosts engagement effortlessly!'
  },
  {
    name: 'Natia Nargizashvili',
    role: 'Project Manager',
    quote: 'I\'ve tried other "link in bio" tools, but nothing compares to Hi.Fan! It\'s super intuitive, customizable, and helps me drive more traffic to my content. My engagement has noticeably increased!'
  }
]

export default function HiFan() {
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
                <span className="text-white/60">Products</span>
                <span className="text-white/40">/</span>
                <span className="text-white">Hi.fan</span>
              </nav>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Bio Link Platform</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Your All-in-One Solution for{' '}
                <span className="text-cyan-200">Bio Pages & Links</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Make every click count. Hi.fan empowers you to create eye-catching bio pages 
                and custom links that drive engagement and boost your brand's visibility. 
                One link, infinite possibilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://hi.fan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Visit Hi.fan
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://hi.fan/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Pricing
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-white/70">Trusted by Millions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm text-white/70">Free Forever Plan</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl" />
              
              {/* Bio Page Preview */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                  {/* Profile section */}
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">@yourname</h3>
                    <p className="text-sm text-white/80">Creator • Entrepreneur</p>
                  </div>
                  {/* Links section */}
                  <div className="p-6 space-y-3">
                    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-semibold">Website</span>
                    </div>
                    <div className="h-14 bg-slate-100 rounded-xl border-2 border-slate-200 flex items-center justify-center">
                      <span className="text-slate-700 font-semibold">Portfolio</span>
                    </div>
                    <div className="h-14 bg-slate-100 rounded-xl border-2 border-slate-200 flex items-center justify-center">
                      <span className="text-slate-700 font-semibold">Contact</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating feature badges */}
              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">No Coding</span>
                </div>
              </div>
              
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <BarChart3 className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">Analytics</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <QrCode className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-medium text-white">QR Codes</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium text-white">Fast Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Why Choose Hi.fan</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Simplify Your Online Presence,{' '}
              <span className="gradient-text">Amplify Your Reach</span>
            </h2>
            <p className="section-subheading mx-auto">
              Stop juggling multiple links across different platforms. Hi.fan gives you 
              one powerful hub to connect everything.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-cyan-200 hover:shadow-xl transition-all group">
                <div className="text-5xl font-bold text-cyan-100 mb-4 group-hover:text-cyan-200 transition-colors">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-3">
                  {benefit.statLabel}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Powerful Features</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Everything You Need to{' '}
              <span className="gradient-text">Connect & Engage</span>
            </h2>
            <p className="section-subheading mx-auto">
              From dynamic widgets to advanced analytics, Hi.fan provides all the tools 
              you need to maximize your online presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Advanced Tools</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Features That Drive{' '}
              <span className="text-cyan-400">Real Results</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Go beyond basic bio links with enterprise-level features designed for 
              professionals and growing businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature) => (
              <div key={feature.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{feature.name}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              <span>Use Cases</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Perfect For Every{' '}
              <span className="gradient-text">Creator & Business</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 hover:bg-cyan-50 hover:border-cyan-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              Trusted by{' '}
              <span className="gradient-text">Creators Worldwide</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Two CTAs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* CTA 1: Visit Hi.fan */}
            <div className="relative rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>
              
              <div className="relative">
                <Link2 className="w-12 h-12 text-cyan-200 mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Create Your Bio Page?
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Join millions of creators, influencers, and businesses using Hi.fan to 
                  connect with their audience. Get started free in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://hi.fan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                  >
                    Get Started Free
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <p className="mt-6 text-sm text-white/70">
                  Free forever. No credit card required.
                </p>
              </div>
            </div>

            {/* CTA 2: Build Your Own Platform */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 md:p-12 overflow-hidden border border-slate-700">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              </div>
              
              <div className="relative">
                <Code2 className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Your Own Custom Platform?
                </h3>
                <p className="text-lg text-slate-300 mb-8">
                  We built Hi.fan, and we can build custom bio link platforms, SaaS applications, 
                  or web platforms tailored to your unique business model and requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Custom branding & features', 'Scalable architecture', 'Full ownership & control', 'Ongoing support & updates'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg group"
                >
                  Build Your Own Custom Platform
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
              <h3 className="text-xl font-bold text-white mb-1">Questions about Hi.fan?</h3>
              <p className="text-slate-400">Visit our platform or reach out to learn more.</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://hi.fan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Visit Hi.fan
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
