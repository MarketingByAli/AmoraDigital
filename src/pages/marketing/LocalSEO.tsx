import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  MapPin,
  Star,
  Building2,
  Navigation,
  Users,
  TrendingUp,
  Search,
  Phone,
  Mail,
  MessageSquare,
  Map,
  Globe,
  Award,
  Clock,
  ThumbsUp,
  Camera,
  FileText,
  Target
} from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Google Business Profile',
    description: 'Complete setup and optimization of your Google Business Profile for maximum local visibility.'
  },
  {
    icon: MapPin,
    title: 'Local Citations',
    description: 'Build consistent NAP (Name, Address, Phone) across 100+ local directories and platforms.'
  },
  {
    icon: Star,
    title: 'Review Management',
    description: 'Generate more positive reviews and professionally manage your online reputation.'
  },
  {
    icon: FileText,
    title: 'Local Content',
    description: 'Create location-specific content that ranks for "near me" and local keywords.'
  },
  {
    icon: Globe,
    title: 'Local Link Building',
    description: 'Earn backlinks from local businesses, organizations, and community websites.'
  },
  {
    icon: Target,
    title: 'Geo-Targeted Optimization',
    description: 'Optimize for multiple locations and service areas to capture local search traffic.'
  }
]

const stats = [
  { value: '46%', label: 'Of Google Searches', description: 'Have local intent' },
  { value: '88%', label: 'Of Local Searches', description: 'Call or visit within 24h' },
  { value: '3x', label: 'More Visibility', description: 'In Google Maps' },
  { value: '76%', label: 'Visit a Business', description: 'Within a day of searching' }
]

const mapPackBenefits = [
  {
    icon: Map,
    title: 'Google Maps Dominance',
    description: 'Appear in the coveted "3-pack" of Google Maps results for local searches.'
  },
  {
    icon: Navigation,
    title: 'Directions & Calls',
    description: 'Make it easy for customers to find you and contact you directly from search results.'
  },
  {
    icon: Star,
    title: 'Review Showcase',
    description: 'Display your star rating and reviews prominently to build instant trust.'
  },
  {
    icon: Camera,
    title: 'Visual Presence',
    description: 'Show photos of your business, products, and team to attract more customers.'
  }
]

const industries = [
  'Restaurants & Cafes',
  'Medical & Dental',
  'Legal Services',
  'Home Services',
  'Retail Stores',
  'Auto Services',
  'Real Estate',
  'Fitness & Wellness',
  'Professional Services',
  'Beauty & Salons',
  'Pet Services',
  'Education'
]

const process = [
  {
    step: '01',
    title: 'Local Audit',
    description: 'Analyze your current local presence, citations, and competitor landscape.'
  },
  {
    step: '02',
    title: 'GBP Optimization',
    description: 'Fully optimize your Google Business Profile with complete information and media.'
  },
  {
    step: '03',
    title: 'Citation Building',
    description: 'Build and clean up citations across major directories for consistency.'
  },
  {
    step: '04',
    title: 'Ongoing Management',
    description: 'Continuous optimization, review management, and local content creation.'
  }
]

const reviews = [
  { stars: 5, text: 'Best service in town! Highly recommend.', author: 'M. Johnson' },
  { stars: 5, text: 'Professional and quick response.', author: 'A. Smith' },
  { stars: 5, text: 'Found them on Google Maps. Great experience!', author: 'J. Williams' },
]

export default function LocalSEO() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 text-white">
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
                <span className="text-white">Local SEO</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Dominate{' '}
                <span className="text-emerald-200">Local Search</span>{' '}
                & Google Maps
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Get found by customers in your area when they search for your services. 
                We'll put your business on the map—literally—and drive more foot traffic and calls.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-emerald-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get Local SEO Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  Our Services
                </a>
              </div>
              
              {/* Quick stats */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">300%</div>
                    <div className="text-xs text-white/60">Avg. Traffic Increase</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Top 3</div>
                    <div className="text-xs text-white/60">Map Pack Rankings</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Map & Business Card */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              
              {/* Map mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-4 shadow-2xl">
                  {/* Map header */}
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="w-4 h-4 text-white/60" />
                    <span className="text-sm text-white/80">digital marketing near me</span>
                  </div>
                  
                  {/* Map area */}
                  <div className="h-32 bg-emerald-800/30 rounded-lg mb-3 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-1/4 left-1/4 w-px h-full bg-white/30" />
                      <div className="absolute top-1/4 left-2/4 w-px h-full bg-white/30" />
                      <div className="absolute top-1/4 left-3/4 w-px h-full bg-white/30" />
                      <div className="absolute top-1/4 left-0 w-full h-px bg-white/30" />
                      <div className="absolute top-2/4 left-0 w-full h-px bg-white/30" />
                      <div className="absolute top-3/4 left-0 w-full h-px bg-white/30" />
                    </div>
                    {/* Location pins */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/4">
                      <div className="w-4 h-4 bg-white/50 rounded-full" />
                    </div>
                    <div className="absolute top-2/3 left-2/3">
                      <div className="w-4 h-4 bg-white/50 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Business listings */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-2 bg-white/10 rounded-lg">
                      <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate">Your Business</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-xs text-white/60 ml-1">(128)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-2 rounded-lg opacity-60">
                      <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white/70 truncate">Competitor A</div>
                        <div className="flex items-center gap-1">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400/60 fill-current" />
                          ))}
                          <span className="text-xs text-white/40 ml-1">(45)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  <span className="text-sm font-medium text-white">4.9 Rating</span>
                </div>
              </div>
              
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Phone className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">+47 Calls/Week</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Navigation className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">+89 Directions</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Users className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">2.5K Views</span>
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

      {/* Why Local SEO Matters */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                <span>Why Local SEO</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                Your Customers Are{' '}
                <span className="gradient-text">Searching Locally</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                When someone searches "near me" or includes a city name in their search, 
                they're ready to buy. Local SEO ensures your business shows up at exactly 
                the right moment—when customers are looking for what you offer.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Clock, text: '88% of local mobile searches result in a call or visit within 24 hours' },
                  { icon: ThumbsUp, text: '72% of consumers who search locally visit a store within 5 miles' },
                  { icon: TrendingUp, text: '"Near me" searches have grown 500%+ in recent years' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-slate-600 pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Review cards */}
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-3">"{review.text}"</p>
                  <p className="text-sm text-slate-500">— {review.author}</p>
                </div>
              ))}
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 text-center">
                <MessageSquare className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-emerald-700 font-medium">We help you get more reviews like these!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Complete Local SEO{' '}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="section-subheading mx-auto">
              Everything you need to dominate local search results and Google Maps in your area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Pack Section */}
      <section className="py-20 lg:py-28 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Map className="w-4 h-4" />
              <span>Google Maps Optimization</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get Into the Google{' '}
              <span className="text-emerald-300">Map Pack</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The top 3 Google Maps results get 70% of all local clicks. We'll help you claim your spot.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mapPackBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <benefit.icon className="w-10 h-10 text-emerald-300 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              Industries We{' '}
              <span className="gradient-text">Serve</span>
            </h2>
            <p className="section-subheading mx-auto">
              Local SEO works for any business with a physical location or service area.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We{' '}
              <span className="gradient-text">Put You on the Map</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-emerald-100 mb-4">{step.step}</div>
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
              "We went from invisible to #1 in Google Maps for our main services. 
              Phone calls increased by 200% and we had to hire more staff!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Robert de Vries</div>
                <div className="text-slate-400 text-sm">Owner, Amsterdam Plumbing Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Dominate Local Search?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Get a free local SEO audit and discover how to outrank your competitors 
                  in Google Maps and local search results.
                </p>
                <ul className="space-y-3">
                  {['Google Business Profile audit', 'Local citation analysis', 'Competitor comparison', 'Custom local strategy'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Get Your Free Local SEO Audit"
                subject="Local SEO Audit Request"
                buttonText="Get My Free Audit"
                buttonClass="from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/25"
                footnote="Free audit. See where you stand in local search."
              >
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
                  <input type="text" id="businessName" name="businessName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="Your Business Name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="+31 6 1234 5678" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="john@business.com" />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">City/Region</label>
                  <input type="text" id="location" name="location" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="Amsterdam, Netherlands" />
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to get found locally?</h3>
              <p className="text-slate-400">Let's discuss your local SEO goals today.</p>
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
