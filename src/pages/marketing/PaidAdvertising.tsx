import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  TrendingUp,
  BarChart3,
  DollarSign,
  MousePointer2,
  Eye,
  Users,
  Search,
  ShoppingBag,
  Video,
  Image,
  Megaphone,
  Star,
  Phone,
  Mail,
  PieChart,
  Gauge,
  RefreshCw,
  Settings,
  LineChart,
  Layers
} from 'lucide-react'

const platforms = [
  {
    name: 'Google Ads',
    icon: Search,
    description: 'Search, Display, Shopping & YouTube campaigns that capture high-intent buyers.',
    color: 'from-blue-500 to-blue-600',
    features: ['Search Ads', 'Display Network', 'Shopping Ads', 'YouTube Ads']
  },
  {
    name: 'Meta Ads',
    icon: Users,
    description: 'Facebook & Instagram advertising to reach your ideal audience at scale.',
    color: 'from-blue-600 to-indigo-600',
    features: ['Feed Ads', 'Stories', 'Reels', 'Messenger']
  },
  {
    name: 'LinkedIn Ads',
    icon: Megaphone,
    description: 'B2B advertising to reach decision-makers and professionals.',
    color: 'from-blue-700 to-blue-800',
    features: ['Sponsored Content', 'InMail', 'Text Ads', 'Lead Gen Forms']
  },
  {
    name: 'TikTok Ads',
    icon: Video,
    description: 'Reach younger audiences with engaging video content.',
    color: 'from-slate-800 to-slate-900',
    features: ['In-Feed Ads', 'TopView', 'Branded Effects', 'Spark Ads']
  }
]

const stats = [
  { value: '€5M+', label: 'Ad Spend Managed', description: 'Across all platforms' },
  { value: '4.2x', label: 'Average ROAS', description: 'Return on ad spend' },
  { value: '-47%', label: 'Cost Per Lead', description: 'Average reduction' },
  { value: '200+', label: 'Campaigns Launched', description: 'Successful campaigns' }
]

const services = [
  {
    icon: Target,
    title: 'Campaign Strategy',
    description: 'Data-driven ad strategies aligned with your business goals and target audience.'
  },
  {
    icon: Image,
    title: 'Ad Creative',
    description: 'Scroll-stopping ad designs and compelling copy that drives clicks and conversions.'
  },
  {
    icon: Users,
    title: 'Audience Targeting',
    description: 'Precision targeting to reach the right people at the right time with the right message.'
  },
  {
    icon: RefreshCw,
    title: 'A/B Testing',
    description: 'Continuous testing of ads, audiences, and landing pages to improve performance.'
  },
  {
    icon: LineChart,
    title: 'Bid Management',
    description: 'Smart bidding strategies to maximize results while controlling costs.'
  },
  {
    icon: BarChart3,
    title: 'Reporting & Analytics',
    description: 'Transparent reporting with actionable insights and clear ROI tracking.'
  }
]

const adTypes = [
  { icon: Search, name: 'Search Ads', description: 'Capture high-intent searches' },
  { icon: Image, name: 'Display Ads', description: 'Visual ads across the web' },
  { icon: Video, name: 'Video Ads', description: 'Engaging video content' },
  { icon: ShoppingBag, name: 'Shopping Ads', description: 'Product-focused campaigns' },
  { icon: Users, name: 'Social Ads', description: 'Platform-specific formats' },
  { icon: RefreshCw, name: 'Retargeting', description: 'Re-engage past visitors' },
]

const process = [
  {
    step: '01',
    title: 'Audit & Strategy',
    description: 'We analyze your current ads, competitors, and market to build a winning strategy.'
  },
  {
    step: '02',
    title: 'Campaign Setup',
    description: 'We create campaigns with optimized targeting, bidding, and tracking.'
  },
  {
    step: '03',
    title: 'Creative & Launch',
    description: 'We design high-converting ads and launch your campaigns.'
  },
  {
    step: '04',
    title: 'Optimize & Scale',
    description: 'We continuously optimize and scale what works for maximum ROI.'
  }
]

const metrics = [
  { label: 'Impressions', value: '2.4M', icon: Eye },
  { label: 'Clicks', value: '89K', icon: MousePointer2 },
  { label: 'Conversions', value: '3,240', icon: Target },
  { label: 'ROAS', value: '5.2x', icon: TrendingUp },
]

const whyPaidAds = [
  { title: 'Instant Traffic', description: 'Start getting visitors immediately, not months from now' },
  { title: 'Precise Targeting', description: 'Reach exactly who you want based on intent, demographics, and behavior' },
  { title: 'Measurable ROI', description: 'Track every euro spent and know exactly what you\'re getting back' },
  { title: 'Scalable Growth', description: 'Once you find what works, scale it up for exponential growth' },
]

export default function PaidAdvertising() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-rose-600 to-pink-700 text-white">
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
                <span className="text-white">Paid Ads</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Get{' '}
                <span className="text-rose-200">Instant Results</span>{' '}
                with Paid Ads
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Stop waiting for organic traffic. Our data-driven paid advertising campaigns 
                put your brand in front of ready-to-buy customers on Google, Meta, LinkedIn, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-rose-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get Free Ad Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#platforms" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Platforms
                </a>
              </div>
              
              {/* Quick stats */}
              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-rose-200" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">4.2x</div>
                    <div className="text-xs text-white/60">Avg. ROAS</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-rose-200" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">€5M+</div>
                    <div className="text-xs text-white/60">Managed</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Ad Dashboard */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              
              {/* Main dashboard */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-5 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">Campaign Performance</h4>
                    <span className="text-xs text-green-300 font-medium">● Live</span>
                  </div>
                  
                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="bg-white/10 rounded-lg p-3">
                        <metric.icon className="w-4 h-4 text-rose-300 mb-1" />
                        <div className="text-lg font-bold text-white">{metric.value}</div>
                        <div className="text-xs text-white/60">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Mini chart */}
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-white/60">Conversions (7 days)</span>
                      <span className="text-xs text-green-300">+23%</span>
                    </div>
                    <div className="flex items-end gap-1 h-12">
                      {[40, 55, 45, 60, 75, 65, 85].map((height, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-rose-500 to-pink-400 rounded-sm"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">+127% CTR</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <MousePointer2 className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">€0.42 CPC</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Target className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">€12 CPA</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <DollarSign className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium text-white">5.2x ROAS</span>
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

      {/* Why Paid Ads Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Why Paid Ads</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Why Invest in{' '}
              <span className="gradient-text">Paid Advertising?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPaidAds.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-rose-50 hover:shadow-lg transition-all border border-transparent hover:border-rose-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Ad Platforms</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Advertise Where Your{' '}
              <span className="gradient-text">Customers Are</span>
            </h2>
            <p className="section-subheading mx-auto">
              We're certified experts on all major advertising platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{platform.name}</h3>
                    <p className="text-slate-600 mb-4">{platform.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Types Section */}
      <section className="py-20 lg:py-28 bg-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Image className="w-4 h-4" />
              <span>Ad Formats</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Every Ad Format{' '}
              <span className="text-rose-300">You Need</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              From search to social to video, we create ads that capture attention and drive action.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {adTypes.map((type) => (
              <div key={type.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <type.icon className="w-8 h-8 text-rose-300 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-1">{type.name}</h4>
                <p className="text-xs text-white/60">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Full-Service{' '}
              <span className="gradient-text">PPC Management</span>
            </h2>
            <p className="section-subheading mx-auto">
              From strategy to execution to optimization, we handle everything.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              <Gauge className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We{' '}
              <span className="gradient-text">Drive Results</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-rose-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-rose-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study / Results */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <PieChart className="w-4 h-4" />
                <span>Case Study</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                E-Commerce Brand: 5.2x ROAS in 90 Days
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                We helped an e-commerce client scale their Google and Meta ads 
                while maintaining profitability and reducing cost per acquisition.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-green-400 mb-1">€127K</div>
                  <div className="text-sm text-slate-400">Revenue Generated</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-rose-400 mb-1">5.2x</div>
                  <div className="text-sm text-slate-400">Return on Ad Spend</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">-52%</div>
                  <div className="text-sm text-slate-400">Cost Per Acquisition</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400 mb-1">+340%</div>
                  <div className="text-sm text-slate-400">Conversion Volume</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-white mb-6 leading-relaxed">
                "We were burning money on ads before working with Amora Digital. 
                Now every euro we spend brings back five. They truly understand paid advertising."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-600" />
                <div>
                  <div className="font-semibold text-white">Emma Visser</div>
                  <div className="text-slate-400 text-sm">Founder, StyleNL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-red-500 via-rose-600 to-pink-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Scale Your Ads?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Get a free ad account audit and discover how to improve your ROAS 
                  and drive more profitable conversions.
                </p>
                <ul className="space-y-3">
                  {['Complete ad account audit', 'Competitor ad analysis', 'Budget recommendations', 'Custom growth strategy'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-rose-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Get Your Free Ad Audit"
                subject="Paid Advertising Audit Request"
                buttonText="Get My Free Ad Audit"
                buttonClass="from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg shadow-rose-500/25"
                footnote="Free audit with actionable recommendations."
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">Monthly Ad Budget</label>
                  <select id="budget" name="budget" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors">
                    <option value="">Select your budget</option>
                    <option value="€1,000 - €5,000">€1,000 - €5,000</option>
                    <option value="€5,000 - €10,000">€5,000 - €10,000</option>
                    <option value="€10,000 - €25,000">€10,000 - €25,000</option>
                    <option value="€25,000+">€25,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="platforms" className="block text-sm font-medium text-slate-700 mb-1">Current Platforms</label>
                  <select id="platforms" name="platforms" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors">
                    <option value="">Select platforms you use</option>
                    <option value="Google Ads only">Google Ads only</option>
                    <option value="Meta Ads only">Meta Ads only</option>
                    <option value="Google + Meta">Google + Meta</option>
                    <option value="Multiple platforms">Multiple platforms</option>
                    <option value="Not running ads yet">Not running ads yet</option>
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to maximize your ad spend?</h3>
              <p className="text-slate-400">Let's discuss your paid advertising goals today.</p>
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
