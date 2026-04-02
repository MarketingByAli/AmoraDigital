import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Mail,
  Send,
  Users,
  BarChart3,
  Target,
  TrendingUp,
  Clock,
  Sparkles,
  FileText,
  MousePointer2,
  Calendar,
  RefreshCw,
  Star,
  Phone,
  Settings,
  Layers,
  Bot,
  Heart,
  ShoppingCart,
  UserPlus,
  Gift
} from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Email Strategy',
    description: 'Data-driven email marketing strategies aligned with your business goals and customer journey.'
  },
  {
    icon: Sparkles,
    title: 'Email Design',
    description: 'Beautiful, mobile-responsive email templates that reflect your brand and drive action.'
  },
  {
    icon: Bot,
    title: 'Automation',
    description: 'Set up automated email sequences that nurture leads and drive conversions 24/7.'
  },
  {
    icon: Users,
    title: 'List Management',
    description: 'Grow, segment, and maintain healthy email lists for maximum deliverability.'
  },
  {
    icon: BarChart3,
    title: 'A/B Testing',
    description: 'Continuous testing of subject lines, content, and timing to optimize performance.'
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description: 'Detailed reporting on opens, clicks, conversions, and revenue attribution.'
  }
]

const stats = [
  { value: '4,200%', label: 'Average ROI', description: 'On email marketing' },
  { value: '42%', label: 'Avg. Open Rate', description: 'Our client average' },
  { value: '€36', label: 'Revenue Per Email', description: 'For every €1 spent' },
  { value: '3x', label: 'More Conversions', description: 'Than social media' }
]

const automations = [
  {
    icon: UserPlus,
    name: 'Welcome Series',
    description: 'Onboard new subscribers with a sequence that builds trust and drives first purchase.',
    emails: '3-5 emails'
  },
  {
    icon: ShoppingCart,
    name: 'Abandoned Cart',
    description: 'Recover lost sales with timely reminders and incentives.',
    emails: '2-3 emails'
  },
  {
    icon: Heart,
    name: 'Re-engagement',
    description: 'Win back inactive subscribers before they\'re gone forever.',
    emails: '3-4 emails'
  },
  {
    icon: Gift,
    name: 'Post-Purchase',
    description: 'Delight customers and encourage reviews, referrals, and repeat purchases.',
    emails: '4-6 emails'
  },
  {
    icon: Calendar,
    name: 'Birthday/Anniversary',
    description: 'Celebrate special occasions with personalized offers.',
    emails: '1-2 emails'
  },
  {
    icon: TrendingUp,
    name: 'Lead Nurture',
    description: 'Guide prospects through the buyer journey with valuable content.',
    emails: '5-7 emails'
  }
]

const platforms = [
  { name: 'Mailchimp', color: 'from-yellow-400 to-yellow-500' },
  { name: 'Klaviyo', color: 'from-green-500 to-emerald-600' },
  { name: 'HubSpot', color: 'from-orange-500 to-orange-600' },
  { name: 'ActiveCampaign', color: 'from-blue-500 to-blue-600' },
  { name: 'Brevo', color: 'from-indigo-500 to-indigo-600' },
  { name: 'ConvertKit', color: 'from-red-500 to-red-600' },
]

const process = [
  {
    step: '01',
    title: 'Audit & Strategy',
    description: 'We analyze your current emails, list health, and develop a winning strategy.'
  },
  {
    step: '02',
    title: 'Setup & Design',
    description: 'We set up your email platform and create beautiful, branded templates.'
  },
  {
    step: '03',
    title: 'Automation Build',
    description: 'We build automated sequences that work around the clock.'
  },
  {
    step: '04',
    title: 'Optimize & Scale',
    description: 'We continuously test and optimize for better results.'
  }
]

const campaignTypes = [
  'Welcome sequences',
  'Newsletter campaigns',
  'Promotional emails',
  'Product launches',
  'Abandoned cart recovery',
  'Win-back campaigns',
  'Event invitations',
  'Survey/feedback requests',
  'Seasonal campaigns',
  'Loyalty programs',
  'Referral campaigns',
  'Transactional emails'
]

const metrics = [
  { label: 'Emails Sent', value: '2.4M', change: '+18%' },
  { label: 'Open Rate', value: '42.3%', change: '+8%' },
  { label: 'Click Rate', value: '6.8%', change: '+12%' },
  { label: 'Revenue', value: '€127K', change: '+34%' },
]

export default function EmailMarketing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 text-white">
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
                <span className="text-white">Email Marketing</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Turn Subscribers Into{' '}
                <span className="text-cyan-200">Loyal Customers</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Email marketing delivers the highest ROI of any channel. We'll help you build 
                automated email systems that nurture leads, drive sales, and keep customers coming back.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cyan-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get Email Strategy
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#automations" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  See Automations
                </a>
              </div>
              
              {/* Quick stats */}
              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cyan-200" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">4,200%</div>
                    <div className="text-xs text-white/60">Avg. ROI</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MousePointer2 className="w-5 h-5 text-cyan-200" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">42%</div>
                    <div className="text-xs text-white/60">Open Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Email Dashboard */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              
              {/* Main dashboard */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-5 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">Campaign Performance</h4>
                    <span className="text-xs text-cyan-300 font-medium">This Month</span>
                  </div>
                  
                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-white/60">{metric.label}</span>
                          <span className="text-xs text-green-300">{metric.change}</span>
                        </div>
                        <div className="text-lg font-bold text-white">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Recent campaign */}
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">Summer Sale Campaign</div>
                        <div className="text-xs text-white/60">Sent 2 hours ago • 45% opened</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Delivered!</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <MousePointer2 className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">+234 Clicks</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <ShoppingCart className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">€2.4K Sales</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <UserPlus className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-medium text-white">+89 Subs</span>
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

      {/* Why Email Marketing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                <span>Why Email Marketing</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                The Highest ROI Channel{' '}
                <span className="gradient-text">You Own</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Unlike social media where algorithms control your reach, email gives you 
                direct access to your audience. It's the one marketing channel you truly own.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Target, title: 'Direct Access', text: 'Land directly in your customer\'s inbox, no algorithm in the way' },
                  { icon: TrendingUp, title: 'Highest ROI', text: 'Email generates €36 for every €1 spent on average' },
                  { icon: Clock, title: 'Works 24/7', text: 'Automated emails nurture and sell while you sleep' },
                  { icon: Heart, title: 'Build Relationships', text: 'Personal, targeted messages that build loyalty' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Email preview mockup */}
            <div className="bg-slate-100 rounded-2xl p-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Email header */}
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Your Brand</div>
                      <div className="text-xs text-slate-500">hello@yourbrand.com</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">🎉 Exclusive: 30% Off Just for You!</div>
                </div>
                {/* Email body */}
                <div className="p-4">
                  <div className="text-sm text-slate-600 mb-4">Hi Sarah,</div>
                  <div className="text-sm text-slate-600 mb-4">
                    We noticed you've been eyeing our new collection. Here's an exclusive 
                    30% discount just for you...
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold text-sm">
                    Shop Now & Save 30%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Full-Service{' '}
              <span className="gradient-text">Email Marketing</span>
            </h2>
            <p className="section-subheading mx-auto">
              From strategy to execution, we handle everything to make email your best-performing channel.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations Section */}
      <section id="automations" className="py-20 lg:py-28 bg-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Bot className="w-4 h-4" />
              <span>Email Automations</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Automated Emails That{' '}
              <span className="text-cyan-300">Sell 24/7</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Set up once, profit forever. These automation sequences work around the clock.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((automation) => (
              <div key={automation.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <automation.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{automation.name}</h3>
                      <span className="text-xs text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded-full">{automation.emails}</span>
                    </div>
                    <p className="text-sm text-white/70">{automation.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Platforms</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              We Work With{' '}
              <span className="gradient-text">All Major Platforms</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-slate-50 rounded-xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-3`}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium text-slate-700">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              <Send className="w-4 h-4" />
              <span>Campaign Types</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Every Email Campaign{' '}
              <span className="gradient-text">You Need</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {campaignTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <RefreshCw className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We{' '}
              <span className="gradient-text">Build Your Email Machine</span>
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
              "Our email revenue went from nearly nothing to €45K per month. 
              The automations they built just keep generating sales on autopilot."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Sophie de Jong</div>
                <div className="text-slate-400 text-sm">E-commerce Director, BeautyBox NL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Build Your Email Revenue Machine?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Get a free email marketing audit and discover how to turn your 
                  subscriber list into a consistent revenue generator.
                </p>
                <ul className="space-y-3">
                  {['Email list health check', 'Automation opportunities', 'Revenue potential analysis', 'Custom strategy roadmap'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-cyan-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Get Your Free Email Audit</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="listSize" className="block text-sm font-medium text-slate-700 mb-1">Email List Size</label>
                    <select 
                      id="listSize"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    >
                      <option value="">Select list size</option>
                      <option value="0-1k">0 - 1,000 subscribers</option>
                      <option value="1k-5k">1,000 - 5,000 subscribers</option>
                      <option value="5k-25k">5,000 - 25,000 subscribers</option>
                      <option value="25k+">25,000+ subscribers</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="platform" className="block text-sm font-medium text-slate-700 mb-1">Current Email Platform</label>
                    <select 
                      id="platform"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    >
                      <option value="">Select platform</option>
                      <option value="mailchimp">Mailchimp</option>
                      <option value="klaviyo">Klaviyo</option>
                      <option value="hubspot">HubSpot</option>
                      <option value="activecampaign">ActiveCampaign</option>
                      <option value="other">Other</option>
                      <option value="none">Not using any</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group"
                  >
                    Get My Free Email Audit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-500 text-center">
                  Free audit. Discover your email revenue potential.
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to maximize your email ROI?</h3>
              <p className="text-slate-400">Let's discuss your email marketing goals today.</p>
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
