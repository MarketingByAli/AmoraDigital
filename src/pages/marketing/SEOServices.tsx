import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Search,
  TrendingUp,
  Globe,
  FileText,
  Link2,
  BarChart3,
  Target,
  Award,
  Settings,
  Layers,
  Eye,
  Star,
  Phone,
  Mail,
  MapPin,
  Bot,
  Gauge
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Keyword Research',
    description: 'In-depth analysis to find high-value keywords your customers are actually searching for.'
  },
  {
    icon: FileText,
    title: 'On-Page SEO',
    description: 'Optimize your content, meta tags, headings, and structure for maximum search visibility.'
  },
  {
    icon: Settings,
    title: 'Technical SEO',
    description: 'Fix crawl errors, improve site speed, mobile optimization, and core web vitals.'
  },
  {
    icon: Link2,
    title: 'Link Building',
    description: 'Earn high-quality backlinks from authoritative sites to boost your domain authority.'
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Create SEO-optimized content that ranks, engages, and converts visitors.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Track rankings, traffic, and conversions with detailed monthly reports.'
  }
]

const stats = [
  { value: '150+', label: 'Keywords Ranked #1', description: 'First page positions' },
  { value: '500%', label: 'Avg. Traffic Growth', description: 'Within 12 months' },
  { value: '89%', label: 'Client Retention', description: 'Long-term partnerships' },
  { value: '3x', label: 'ROI Average', description: 'Return on investment' }
]

const seoTypes = [
  {
    icon: Globe,
    title: 'Traditional SEO',
    description: 'Comprehensive organic search optimization for sustainable long-term growth.',
    features: ['Keyword optimization', 'Content strategy', 'Technical audits', 'Link building'],
    color: 'from-primary-500 to-primary-700'
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Dominate local search results and Google Maps in your service area.',
    features: ['Google Business Profile', 'Local citations', 'Review management', 'Local content'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Bot,
    title: 'AI SEO',
    description: 'Future-proof your visibility for AI-powered search and voice assistants.',
    features: ['AI search optimization', 'Structured data', 'Voice search', 'Featured snippets'],
    color: 'from-purple-500 to-violet-600'
  }
]

const process = [
  {
    step: '01',
    title: 'SEO Audit',
    description: 'Complete analysis of your website, competitors, and market opportunities.'
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Custom SEO roadmap based on your goals, industry, and competition level.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute on-page, technical, and off-page optimizations systematically.'
  },
  {
    step: '04',
    title: 'Monitor & Optimize',
    description: 'Continuous tracking, testing, and refinement for ongoing improvement.'
  }
]

const rankings = [
  { keyword: 'Digital marketing agency', position: '1', change: '+5' },
  { keyword: 'Web design services', position: '2', change: '+8' },
  { keyword: 'SEO company Netherlands', position: '1', change: '+12' },
  { keyword: 'Social media marketing', position: '3', change: '+6' },
  { keyword: 'E-commerce development', position: '2', change: '+9' },
]

export default function SEOServices() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-accent-400/20 rounded-full blur-3xl" />
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
                <span className="text-white">SEO Services</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Get Found on{' '}
                <span className="text-accent-300">Google</span>{' '}
                & Drive Organic Growth
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Rank higher, drive more traffic, and convert visitors into customers 
                with our data-driven SEO strategies. We help businesses dominate search results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#seo-types" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  Explore Services
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-300" />
                  <span className="text-sm text-white/70">Google Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white/70">500%+ Avg. Growth</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Rankings Dashboard */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl" />
              
              {/* Main dashboard card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">Keyword Rankings</h4>
                    <span className="text-xs text-accent-300 font-medium">Live</span>
                  </div>
                  <div className="space-y-3">
                    {rankings.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                            {item.position}
                          </span>
                          <span className="text-sm text-white/80 truncate max-w-[140px]">{item.keyword}</span>
                        </div>
                        <span className="text-xs font-medium text-green-400">↑{item.change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute top-8 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">+247% Traffic</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/20 border border-accent-400/30 backdrop-blur-sm">
                  <Eye className="w-4 h-4 text-accent-300" />
                  <span className="text-sm font-medium text-white">15K Impressions</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Target className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">32 Page 1 Keywords</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-400/30 backdrop-blur-sm">
                  <Gauge className="w-4 h-4 text-secondary-300" />
                  <span className="text-sm font-medium text-white">98 Speed Score</span>
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

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>What We Do</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Complete SEO{' '}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="section-subheading mx-auto">
              From technical audits to content creation, we handle every aspect of search engine optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Types Section */}
      <section id="seo-types" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>SEO Specializations</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              SEO Solutions for{' '}
              <span className="gradient-text">Every Need</span>
            </h2>
            <p className="section-subheading mx-auto">
              Whether you need local visibility, national reach, or AI-ready optimization, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {seoTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-slate-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact-form"
                  className="inline-flex items-center gap-2 mt-6 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
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
              How We{' '}
              <span className="gradient-text">Boost Your Rankings</span>
            </h2>
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

      {/* Results Preview */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4" />
                <span>Real Results</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Results That Speak for Themselves
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Our clients see real, measurable improvements in their search rankings, 
                organic traffic, and most importantly, leads and revenue.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-1">+320%</div>
                  <div className="text-sm text-slate-400">Organic Traffic</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-accent-400 mb-1">47</div>
                  <div className="text-sm text-slate-400">Page 1 Keywords</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400 mb-1">65%</div>
                  <div className="text-sm text-slate-400">More Leads</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-secondary-400 mb-1">4.2x</div>
                  <div className="text-sm text-slate-400">ROI Achieved</div>
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
                "We went from page 5 to position 1 for our main keywords. 
                Our organic leads increased by 300% and we've had to hire more staff to handle the growth!"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500" />
                <div>
                  <div className="font-semibold text-white">Sarah van der Berg</div>
                  <div className="text-slate-400 text-sm">CEO, TechStart Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              What's Included in{' '}
              <span className="gradient-text">Our SEO Service</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Comprehensive SEO audit',
              'Competitor analysis',
              'Keyword research & mapping',
              'On-page optimization',
              'Technical SEO fixes',
              'Content recommendations',
              'Link building strategy',
              'Google Search Console setup',
              'Google Analytics tracking',
              'Monthly ranking reports',
              'Traffic analysis',
              'Conversion tracking'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Rank #1?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Get a free SEO audit and discover exactly what's holding your website back 
                  from ranking on the first page of Google.
                </p>
                <ul className="space-y-3">
                  {['Complete website SEO audit', 'Competitor analysis', 'Keyword opportunities', 'Custom action plan'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Get Your Free SEO Audit"
                subject="SEO Services Audit Request"
                buttonText="Get My Free SEO Audit"
                buttonClass="from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25"
                footnote="100% free audit. No strings attached."
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
                  <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
                  <input type="url" id="website" name="website" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="https://yourwebsite.com" />
                </div>
                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-slate-700 mb-1">What are your SEO goals?</label>
                  <select id="goals" name="goals" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                    <option value="">Select your primary goal</option>
                    <option value="Increase organic traffic">Increase organic traffic</option>
                    <option value="Improve keyword rankings">Improve keyword rankings</option>
                    <option value="Dominate local search">Dominate local search</option>
                    <option value="Generate more leads">Generate more leads</option>
                    <option value="Boost e-commerce sales">Boost e-commerce sales</option>
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to dominate Google?</h3>
              <p className="text-slate-400">Let's discuss your SEO goals today.</p>
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
