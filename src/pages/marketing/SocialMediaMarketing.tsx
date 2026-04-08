import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Heart,
  MessageCircle,
  Users,
  TrendingUp,
  Calendar,
  Camera,
  Video,
  BarChart3,
  Target,
  Share2,
  Star,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Play
} from 'lucide-react'

const platforms = [
  { icon: Instagram, name: 'Instagram', color: 'from-pink-500 to-purple-600' },
  { icon: Facebook, name: 'Facebook', color: 'from-blue-600 to-blue-700' },
  { icon: Linkedin, name: 'LinkedIn', color: 'from-blue-700 to-blue-800' },
  { icon: Twitter, name: 'Twitter/X', color: 'from-slate-700 to-slate-900' },
]

const services = [
  {
    icon: Calendar,
    title: 'Content Strategy',
    description: 'Data-driven content calendars that keep your audience engaged and coming back for more.'
  },
  {
    icon: Camera,
    title: 'Content Creation',
    description: 'Scroll-stopping graphics, photos, and copy that capture attention and drive action.'
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Engaging Reels, Stories, and video content that boosts reach and engagement.'
  },
  {
    icon: Users,
    title: 'Community Management',
    description: 'Active engagement with your audience to build loyalty and trust.'
  },
  {
    icon: Target,
    title: 'Paid Social Ads',
    description: 'Targeted advertising campaigns that reach your ideal customers and drive conversions.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Detailed insights and reports to track growth and optimize performance.'
  }
]

const results = [
  { value: '500%', label: 'Avg. Reach Increase', description: 'Across all platforms' },
  { value: '10x', label: 'Engagement Growth', description: 'Likes, comments, shares' },
  { value: '300%', label: 'Follower Growth', description: 'Organic & targeted' },
  { value: '5x', label: 'Lead Generation', description: 'From social channels' }
]

const packages = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started with social media.',
    features: [
      '2 Platforms',
      '12 Posts/Month',
      'Basic Graphics',
      'Monthly Report',
      'Community Response'
    ],
    highlight: false
  },
  {
    name: 'Growth',
    description: 'For businesses ready to scale their social presence.',
    features: [
      '4 Platforms',
      '20 Posts/Month',
      'Custom Graphics & Video',
      'Weekly Reports',
      'Daily Engagement',
      'Paid Ad Management',
      'Influencer Outreach'
    ],
    highlight: true
  },
  {
    name: 'Enterprise',
    description: 'Full-service social media management for maximum impact.',
    features: [
      'All Platforms',
      'Unlimited Posts',
      'Premium Content Production',
      'Real-time Dashboard',
      '24/7 Management',
      'Advanced Ad Campaigns',
      'Brand Partnerships',
      'Dedicated Manager'
    ],
    highlight: false
  }
]

const process = [
  {
    step: '01',
    title: 'Audit & Strategy',
    description: 'We analyze your current presence, competitors, and audience to create a winning strategy.'
  },
  {
    step: '02',
    title: 'Content Planning',
    description: 'We develop a content calendar with themes, formats, and posting schedules.'
  },
  {
    step: '03',
    title: 'Create & Publish',
    description: 'Our team creates engaging content and publishes at optimal times.'
  },
  {
    step: '04',
    title: 'Engage & Grow',
    description: 'We actively engage with your community and optimize for continuous growth.'
  }
]

export default function SocialMediaMarketing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-primary-700 text-white">
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
                <span className="text-white">Social Media</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Build a Brand{' '}
                <span className="text-pink-200">People Love</span>{' '}
                to Follow
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Turn your social media into a lead-generating machine. We create 
                scroll-stopping content that builds community, drives engagement, and converts followers into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get Social Strategy
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#packages" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Packages
                </a>
              </div>
              
              {/* Platform icons */}
              <div className="mt-12 flex items-center gap-4">
                <span className="text-sm text-white/60">We manage:</span>
                <div className="flex gap-3">
                  {platforms.map((platform) => (
                    <div 
                      key={platform.name}
                      className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                      title={platform.name}
                    >
                      <platform.icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              
              {/* Phone mockup with social feed */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-64 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 p-3 shadow-2xl">
                  {/* Phone notch */}
                  <div className="w-20 h-6 bg-black/50 rounded-full mx-auto mb-3" />
                  {/* Feed content */}
                  <div className="space-y-3">
                    {/* Post 1 */}
                    <div className="bg-white/10 rounded-2xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                        <div className="text-xs text-white font-medium">yourbrand</div>
                      </div>
                      <div className="h-24 bg-white/10 rounded-lg mb-2" />
                      <div className="flex items-center gap-4">
                        <Heart className="w-4 h-4 text-pink-300" />
                        <MessageCircle className="w-4 h-4 text-white/70" />
                        <Share2 className="w-4 h-4 text-white/70" />
                      </div>
                    </div>
                    {/* Post 2 */}
                    <div className="bg-white/10 rounded-2xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                        <div className="text-xs text-white font-medium">yourbrand</div>
                      </div>
                      <div className="h-16 bg-white/10 rounded-lg flex items-center justify-center">
                        <Play className="w-8 h-8 text-white/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating engagement cards */}
              <div className="absolute top-8 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/30 border border-pink-400/30 backdrop-blur-sm">
                  <Heart className="w-4 h-4 text-pink-300 fill-current" />
                  <span className="text-sm font-medium text-white">2.5K Likes</span>
                </div>
              </div>
              
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/30 border border-blue-400/30 backdrop-blur-sm">
                  <Users className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">+500 Followers</span>
                </div>
              </div>
              
              <div className="absolute bottom-24 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/30 border border-green-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">+340% Reach</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/30 border border-purple-400/30 backdrop-blur-sm">
                  <MessageCircle className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">89 Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((stat) => (
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>What We Do</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Full-Service Social Media{' '}
              <span className="gradient-text">Management</span>
            </h2>
            <p className="section-subheading mx-auto">
              From strategy to execution, we handle everything so you can focus on running your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              Platforms We{' '}
              <span className="gradient-text">Dominate</span>
            </h2>
            <p className="section-subheading mx-auto">
              We're experts on all major social platforms, tailoring strategies to each one's unique strengths.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{platform.name}</h3>
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
              <Calendar className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We{' '}
              <span className="gradient-text">Grow Your Brand</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
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

      {/* Packages Section */}
      <section id="packages" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Pricing</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Social Media{' '}
              <span className="gradient-text">Packages</span>
            </h2>
            <p className="section-subheading mx-auto">
              Flexible packages designed to fit your business needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.name} 
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all hover:shadow-xl ${
                  pkg.highlight 
                    ? 'border-pink-500 shadow-pink-500/10' 
                    : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-500 text-white text-xs font-semibold">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact-form"
                  className={`block w-full py-3 px-6 text-center font-semibold rounded-lg transition-all ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-pink-500/25'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-slate-500">
            All packages include strategy consultation. Custom packages available upon request.
          </p>
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
              "Our Instagram following grew from 2K to 50K in just 6 months. 
              The engagement and leads we're getting now is incredible!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Michael Chen</div>
                <div className="text-slate-400 text-sm">Founder, StyleHub Fashion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-pink-500 via-purple-600 to-primary-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Go Viral?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Let's create a social media strategy that turns followers into customers. 
                  Get a free consultation and custom proposal.
                </p>
                <ul className="space-y-3">
                  {['Free social media audit', 'Custom content strategy', 'Competitor analysis', 'Growth roadmap'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-pink-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Get Your Free Strategy"
                subject="Social Media Marketing Inquiry"
                buttonText="Get My Free Strategy"
                buttonClass="from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-pink-500/25"
                footnote="Free consultation. No commitment required."
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium text-slate-700 mb-1">Instagram Handle (optional)</label>
                  <input type="text" id="instagram" name="instagram" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors" placeholder="@yourbrand" />
                </div>
                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-slate-700 mb-1">What are your social media goals?</label>
                  <textarea id="goals" name="goals" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors" placeholder="Tell us about your goals..." />
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to grow your social presence?</h3>
              <p className="text-slate-400">Let's discuss your social media goals today.</p>
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
