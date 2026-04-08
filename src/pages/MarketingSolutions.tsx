import { Link } from 'react-router-dom'
import LeadForm from '../components/LeadForm'
import {
  ArrowRight,
  Globe,
  Users,
  Megaphone,
  Target,
  Search,
  Sparkles,
  MapPin,
  Mail,
  TrendingUp,
  Palette,
  CheckCircle2,
  Zap,
  BarChart3,
  MousePointerClick,
  Phone
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Stunning, conversion-focused websites that captivate visitors and turn them into paying customers. Mobile-first design with lightning-fast performance.',
    features: ['Custom Design', 'Mobile-First', 'Lightning Fast', 'SEO Ready', 'CMS Integration'],
    path: '/marketing/website-design',
    color: 'primary',
    stats: { value: '3x', label: 'Higher Conversions' }
  },
  {
    icon: Users,
    title: 'CRM Solutions',
    description: 'Streamline your customer relationships with powerful CRM integrations. Track leads, automate follow-ups, and close more deals.',
    features: ['Lead Tracking', 'Automation', 'Analytics', 'Email Integration', 'Pipeline Management'],
    path: '/marketing/crm-solutions',
    color: 'secondary',
    stats: { value: '40%', label: 'More Sales' }
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage your audience across all social platforms. Create viral content that drives engagement.',
    features: ['Content Strategy', 'Community Management', 'Influencer Outreach', 'Paid Social', 'Analytics'],
    path: '/marketing/social-media-marketing',
    color: 'accent',
    stats: { value: '200%', label: 'Engagement Growth' }
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    description: 'Maximize ROI with data-driven PPC campaigns across Google, Facebook, LinkedIn, and more. Get qualified leads on autopilot.',
    features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting', 'A/B Testing'],
    path: '/marketing/paid-advertising',
    color: 'primary',
    stats: { value: '10x', label: 'ROAS Average' }
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Dominate search rankings with our proven SEO strategies. Get found by customers actively searching for your services.',
    features: ['On-Page SEO', 'Link Building', 'Technical SEO', 'Content Strategy', 'Keyword Research'],
    path: '/marketing/seo-services',
    color: 'secondary',
    stats: { value: '147%', label: 'Traffic Increase' }
  },
  {
    icon: Sparkles,
    title: 'AI SEO',
    description: 'Leverage cutting-edge AI technology to supercharge your search performance. Stay ahead with predictive analytics and smart optimization.',
    features: ['AI Content', 'Predictive Analytics', 'Smart Optimization', 'Trend Detection', 'Auto-Optimization'],
    path: '/marketing/ai-seo',
    color: 'accent',
    stats: { value: '5x', label: 'Faster Results' }
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Get found by local customers searching for your services. Dominate Google Maps and local search results in your area.',
    features: ['Google My Business', 'Local Citations', 'Review Management', 'Local Link Building', 'NAP Optimization'],
    path: '/marketing/local-seo',
    color: 'primary',
    stats: { value: '300%', label: 'Local Visibility' }
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and boost conversions with targeted email campaigns. Automated sequences that convert subscribers into customers.',
    features: ['Campaign Strategy', 'Automation', 'A/B Testing', 'Segmentation', 'Analytics'],
    path: '/marketing/email-marketing',
    color: 'secondary',
    stats: { value: '42x', label: 'ROI Average' }
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    description: 'Turn more visitors into customers with data-driven CRO strategies. Optimize every step of your customer journey.',
    features: ['Landing Pages', 'User Research', 'Funnel Optimization', 'Heat Maps', 'Split Testing'],
    path: '/marketing/conversion-optimization',
    color: 'accent',
    stats: { value: '89%', label: 'Conversion Lift' }
  },
  {
    icon: Palette,
    title: 'Brand Strategy',
    description: 'Build a powerful brand identity that resonates with your target audience. Stand out from competitors with memorable branding.',
    features: ['Brand Identity', 'Visual Design', 'Brand Guidelines', 'Messaging', 'Positioning'],
    path: '/marketing/brand-strategy',
    color: 'primary',
    stats: { value: '2x', label: 'Brand Recall' }
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

export default function MarketingSolutions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                <span className="text-white/40">/</span>
                <span className="text-white">Marketing</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Marketing That{' '}
                <span className="text-secondary-300">Drives Results</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl">
                Comprehensive digital marketing services designed to generate leads, 
                increase conversions, and grow your business. Data-driven strategies 
                that deliver measurable ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get Free Marketing Audit
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
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-white/70">Campaigns Launched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10M+</div>
                  <div className="text-sm text-white/70">Leads Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">150%</div>
                  <div className="text-sm text-white/70">Avg. ROI</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative hidden lg:block h-[500px]">
              {/* Central glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              
              {/* Main Dashboard Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 w-80 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Marketing Analytics</div>
                      <div className="text-xs text-white/60">Real-time performance</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-sm text-white/80">Website Traffic</span>
                      <span className="text-sm font-bold text-green-400">+147%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-sm text-white/80">Lead Conversion</span>
                      <span className="text-sm font-bold text-green-400">+89%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-sm text-white/80">Revenue Growth</span>
                      <span className="text-sm font-bold text-green-400">+234%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Service Cards */}
              <div className="absolute top-4 left-4 animate-float z-20" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">SEO</span>
                </div>
              </div>
              
              <div className="absolute top-8 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary-400 to-secondary-500 flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">Paid Ads</span>
                </div>
              </div>
              
              <div className="absolute top-1/3 -left-2 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center">
                    <Megaphone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">Social Media</span>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">Email</span>
                </div>
              </div>
              
              <div className="absolute bottom-12 left-8 animate-float z-20" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary-400 to-secondary-500 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">Web Design</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-12 animate-float z-20" style={{ animationDelay: '2.5s' }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">AI SEO</span>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-16 left-1/2 animate-float z-20" style={{ animationDelay: '0.8s' }}>
                <div className="px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-green-300">+52 Leads Today</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-float z-20" style={{ animationDelay: '1.8s' }}>
                <div className="px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-400/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-secondary-300" />
                    <span className="text-sm font-medium text-secondary-300">ROI: 10.5x</span>
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
              <BarChart3 className="w-5 h-5 text-primary-500" />
              <span className="text-sm">Data-Driven Strategies</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400">
              <MousePointerClick className="w-5 h-5 text-secondary-500" />
              <span className="text-sm">Conversion Focused</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400">
              <TrendingUp className="w-5 h-5 text-accent-500" />
              <span className="text-sm">Measurable Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Complete Marketing{' '}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="section-subheading mx-auto">
              Everything you need to dominate your market and generate qualified leads consistently.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              Why Choose{' '}
              <span className="gradient-text">Amora Digital</span>
            </h2>
            <p className="section-subheading mx-auto">
              We're not just another marketing agency. We're your growth partner.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data-Driven</h3>
              <p className="text-slate-600">
                Every decision backed by analytics. No guesswork, just results that you can measure and track.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ROI Focused</h3>
              <p className="text-slate-600">
                We obsess over your return on investment. Every campaign is optimized for maximum conversions.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Results</h3>
              <p className="text-slate-600">
                See improvements within weeks, not months. We move fast and iterate faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form Section */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Get Your Free Marketing Audit
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Discover untapped opportunities to grow your business. Our experts will analyze 
                  your current marketing and provide actionable recommendations.
                </p>
                <ul className="space-y-3">
                  {['Complete website & SEO analysis', 'Competitor benchmarking', 'Custom growth roadmap', 'No obligation consultation'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-secondary-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Request Your Free Audit"
                subject="Marketing Solutions Audit Request"
                buttonText="Get My Free Audit"
                buttonClass="from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 shadow-lg shadow-primary-500/25"
                footnote="No spam. By submitting, you agree to our Privacy Policy."
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
                  <input type="url" id="website" name="website" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="https://yourwebsite.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="+31 6 12345678" />
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to grow your business?</h3>
              <p className="text-slate-400">Let's discuss your marketing goals today.</p>
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
