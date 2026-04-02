import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Bot,
  Brain,
  Sparkles,
  Search,
  MessageSquare,
  Globe,
  FileText,
  Code,
  TrendingUp,
  Target,
  Shield,
  Star,
  Phone,
  Mail,
  Layers,
  Network,
  Database,
  Lightbulb,
  Award
} from 'lucide-react'

const aiPlatforms = [
  {
    name: 'ChatGPT',
    description: 'Optimize for OpenAI\'s conversational AI recommendations',
    icon: MessageSquare,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'Google AI Overview',
    description: 'Appear in Google\'s AI-generated search summaries',
    icon: Search,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Perplexity AI',
    description: 'Get cited in Perplexity\'s AI-powered search answers',
    icon: Brain,
    color: 'from-purple-500 to-violet-600'
  },
  {
    name: 'Claude & Others',
    description: 'Visibility across emerging AI assistants and search tools',
    icon: Bot,
    color: 'from-orange-500 to-amber-600'
  }
]

const stats = [
  { value: '40%', label: 'Of Searches', description: 'Will use AI by 2025' },
  { value: '73%', label: 'Of Users', description: 'Trust AI recommendations' },
  { value: '5x', label: 'More Visibility', description: 'With AI optimization' },
  { value: '60%', label: 'Click Reduction', description: 'From AI answers (threat!)' }
]

const services = [
  {
    icon: Database,
    title: 'Structured Data',
    description: 'Implement schema markup that AI systems can easily understand and reference.'
  },
  {
    icon: FileText,
    title: 'Content Optimization',
    description: 'Create authoritative, well-structured content that AI prefers to cite.'
  },
  {
    icon: Network,
    title: 'Entity Building',
    description: 'Build your brand\'s knowledge graph presence across the web.'
  },
  {
    icon: Code,
    title: 'Technical AI-SEO',
    description: 'Optimize site architecture and markup for AI crawlers and parsers.'
  },
  {
    icon: MessageSquare,
    title: 'Conversational Content',
    description: 'Create Q&A and conversational content AI loves to reference.'
  },
  {
    icon: Shield,
    title: 'Authority Building',
    description: 'Establish E-E-A-T signals that make AI trust your content.'
  }
]

const differences = [
  {
    traditional: 'Keyword-focused content',
    aiSeo: 'Intent and entity-focused content',
    icon: Target
  },
  {
    traditional: 'Link building for authority',
    aiSeo: 'Knowledge graph & entity building',
    icon: Network
  },
  {
    traditional: 'Meta tags optimization',
    aiSeo: 'Structured data & schema markup',
    icon: Code
  },
  {
    traditional: 'Ranking on page 1',
    aiSeo: 'Being cited in AI answers',
    icon: MessageSquare
  }
]

const process = [
  {
    step: '01',
    title: 'AI Visibility Audit',
    description: 'We analyze how AI systems currently perceive and reference your brand.'
  },
  {
    step: '02',
    title: 'Entity Strategy',
    description: 'We develop a strategy to build your brand\'s presence in knowledge graphs.'
  },
  {
    step: '03',
    title: 'Content & Technical',
    description: 'We optimize content structure and implement AI-friendly markup.'
  },
  {
    step: '04',
    title: 'Monitor & Adapt',
    description: 'We track AI citations and continuously adapt to algorithm changes.'
  }
]

const checklist = [
  'Schema.org structured data implementation',
  'Knowledge panel optimization',
  'FAQ and Q&A content creation',
  'Entity relationship mapping',
  'Authoritative content development',
  'E-E-A-T signal optimization',
  'AI crawler accessibility',
  'Conversational keyword targeting',
  'Featured snippet optimization',
  'Voice search readiness',
  'Citation tracking setup',
  'Competitor AI visibility analysis'
]

const futureProofing = [
  {
    icon: Bot,
    title: 'AI-First Indexing',
    description: 'As AI becomes the primary way people find information, being AI-visible is crucial.'
  },
  {
    icon: TrendingUp,
    title: 'Zero-Click Future',
    description: 'Users get answers without clicking. You need to BE the answer, not just rank for it.'
  },
  {
    icon: Globe,
    title: 'Multi-Platform Presence',
    description: 'ChatGPT, Perplexity, Google AI—your brand needs visibility across all AI platforms.'
  },
  {
    icon: Lightbulb,
    title: 'Early Mover Advantage',
    description: 'Companies optimizing for AI now will dominate while competitors play catch-up.'
  }
]

export default function AISEO() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl" />
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
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
                <span className="text-white">AI SEO</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Get Found by{' '}
                <span className="text-cyan-300">AI Search</span>{' '}
                & Assistants
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                The future of search is AI. ChatGPT, Google AI Overview, Perplexity—they're 
                changing how people find businesses. Is your brand optimized to be recommended by AI?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get AI SEO Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#why-ai-seo" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  Why AI SEO?
                </a>
              </div>
              
              {/* Trust signals */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm text-white/70">Early AI SEO Pioneers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm text-white/70">AI-Certified Team</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - AI Network */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
              
              {/* Central AI brain */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>
              
              {/* Orbiting platforms */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 animate-float z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-emerald-300" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60 whitespace-nowrap">ChatGPT</span>
              </div>
              
              <div className="absolute top-1/2 right-4 -translate-y-1/2 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                  <Search className="w-8 h-8 text-blue-300" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60 whitespace-nowrap">Google AI</span>
              </div>
              
              <div className="absolute bottom-16 right-16 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-purple-300" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60 whitespace-nowrap">Perplexity</span>
              </div>
              
              <div className="absolute bottom-16 left-16 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-orange-300" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60 whitespace-nowrap">Claude</span>
              </div>
              
              <div className="absolute top-1/2 left-4 -translate-y-1/2 animate-float z-20" style={{ animationDelay: '2s' }}>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-pink-300" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60 whitespace-nowrap">Copilot</span>
              </div>
              
              {/* Connection lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
                <line x1="50%" y1="15%" x2="50%" y2="38%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4" />
                <line x1="85%" y1="50%" x2="62%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4" />
                <line x1="75%" y1="75%" x2="58%" y2="58%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4" />
                <line x1="25%" y1="75%" x2="42%" y2="58%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4" />
                <line x1="15%" y1="50%" x2="38%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4" />
              </svg>
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

      {/* Why AI SEO Section */}
      <section id="why-ai-seo" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>The Future is AI</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Why You Need{' '}
              <span className="gradient-text">AI SEO Now</span>
            </h2>
            <p className="section-subheading mx-auto">
              The way people search is fundamentally changing. Don't get left behind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureProofing.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-purple-50 hover:shadow-lg transition-all border border-transparent hover:border-purple-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4 shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <Bot className="w-4 h-4" />
              <span>AI Platforms</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Be Visible Across{' '}
              <span className="gradient-text">All AI Platforms</span>
            </h2>
            <p className="section-subheading mx-auto">
              We optimize your presence for every major AI search and assistant platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {aiPlatforms.map((platform) => (
              <div key={platform.name} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{platform.name}</h3>
                    <p className="text-slate-600">{platform.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs AI SEO */}
      <section className="py-20 lg:py-28 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>The Difference</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Traditional SEO vs{' '}
              <span className="text-cyan-300">AI SEO</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              AI SEO requires a fundamentally different approach than traditional search optimization.
            </p>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {differences.map((diff, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4">
                  <div className="text-right">
                    <span className="text-white/60 text-sm">{diff.traditional}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                    <diff.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <span className="text-cyan-300 font-medium text-sm">{diff.aiSeo}</span>
                  </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Complete AI SEO{' '}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="section-subheading mx-auto">
              Everything you need to be visible and recommended by AI systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We Make You{' '}
              <span className="gradient-text">AI Visible</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-purple-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>What's Included</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Complete AI SEO{' '}
              <span className="gradient-text">Checklist</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 hover:bg-purple-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
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
              "We were invisible in AI search results. Now when people ask ChatGPT about 
              our industry, we're consistently recommended. This is the future of SEO."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Thomas Jansen</div>
                <div className="text-slate-400 text-sm">CEO, InnovateTech Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-900 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready for the AI Search Revolution?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Get a free AI SEO audit and discover how visible your brand is 
                  to AI assistants—and what you can do to improve.
                </p>
                <ul className="space-y-3">
                  {['AI visibility assessment', 'Structured data audit', 'Entity presence analysis', 'Custom AI SEO roadmap'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Get Your Free AI SEO Audit</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
                    <input 
                      type="url" 
                      id="website"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="concern" className="block text-sm font-medium text-slate-700 mb-1">Primary Concern</label>
                    <select 
                      id="concern"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select your main concern</option>
                      <option value="visibility">Not visible in AI search</option>
                      <option value="citations">Want to be cited by AI</option>
                      <option value="future">Future-proof my SEO</option>
                      <option value="competitor">Competitors are ahead</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 group"
                  >
                    Get My Free AI SEO Audit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-500 text-center">
                  Free audit. Discover your AI visibility score.
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
              <h3 className="text-xl font-bold text-white mb-1">Ready for the AI future?</h3>
              <p className="text-slate-400">Let's discuss your AI SEO strategy today.</p>
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
