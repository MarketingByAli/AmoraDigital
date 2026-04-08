import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  BarChart3,
  MousePointer2,
  Eye,
  FlaskConical,
  LineChart,
  ArrowUpRight,
  RefreshCw,
  Lightbulb,
  Star,
  Phone,
  Mail,
  PieChart,
  Gauge,
  SplitSquareVertical,
  FormInput,
  Layout
} from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Conversion Audit',
    description: 'Deep analysis of your website to identify conversion blockers and opportunities.'
  },
  {
    icon: SplitSquareVertical,
    title: 'A/B Testing',
    description: 'Data-driven experiments to find what works best for your specific audience.'
  },
  {
    icon: Eye,
    title: 'Heatmap Analysis',
    description: 'Understand exactly how visitors interact with your pages using click and scroll maps.'
  },
  {
    icon: FormInput,
    title: 'Form Optimization',
    description: 'Reduce friction and increase form completions with optimized fields and layouts.'
  },
  {
    icon: Layout,
    title: 'Landing Page Design',
    description: 'High-converting landing pages designed specifically to maximize conversions.'
  },
  {
    icon: LineChart,
    title: 'Analytics Setup',
    description: 'Proper tracking and reporting to measure every conversion touchpoint.'
  }
]

const stats = [
  { value: '127%', label: 'Avg. Conversion Lift', description: 'For our clients' },
  { value: '50+', label: 'Tests Run Monthly', description: 'Data-driven decisions' },
  { value: '3.2x', label: 'ROI Increase', description: 'From same traffic' },
  { value: '89%', label: 'Client Retention', description: 'Long-term results' }
]

const optimizationAreas = [
  {
    icon: MousePointer2,
    title: 'Call-to-Action Buttons',
    description: 'Optimize button text, colors, placement, and design for maximum clicks.',
    improvement: '+34%'
  },
  {
    icon: FormInput,
    title: 'Lead Capture Forms',
    description: 'Streamline forms to reduce abandonment and increase submissions.',
    improvement: '+52%'
  },
  {
    icon: Layout,
    title: 'Page Layout & Design',
    description: 'Structure content and visual hierarchy to guide visitors to convert.',
    improvement: '+28%'
  },
  {
    icon: Lightbulb,
    title: 'Value Proposition',
    description: 'Clarify your messaging to instantly communicate benefits.',
    improvement: '+45%'
  }
]

const process = [
  {
    step: '01',
    title: 'Research & Audit',
    description: 'Analyze your current conversion funnel, user behavior, and identify quick wins.'
  },
  {
    step: '02',
    title: 'Hypothesis Creation',
    description: 'Develop data-backed hypotheses for improvements based on research findings.'
  },
  {
    step: '03',
    title: 'Test & Experiment',
    description: 'Run controlled A/B tests to validate what actually improves conversions.'
  },
  {
    step: '04',
    title: 'Implement & Scale',
    description: 'Roll out winning variations and continue optimizing for ongoing growth.'
  }
]

const caseStudyMetrics = [
  { label: 'Conversion Rate', before: '2.1%', after: '5.8%', change: '+176%' },
  { label: 'Leads per Month', before: '145', after: '412', change: '+184%' },
  { label: 'Cost per Lead', before: '€47', after: '€18', change: '-62%' },
  { label: 'Revenue', before: '€23K', after: '€67K', change: '+191%' },
]

const whatWeTest = [
  'Headlines & copy',
  'Button colors & text',
  'Form fields & layout',
  'Page structure',
  'Images & videos',
  'Social proof placement',
  'Pricing presentation',
  'Navigation elements',
  'Mobile experience',
  'Checkout flow',
  'Trust signals',
  'Exit intent offers'
]

export default function ConversionOptimization() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white">
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
                <span className="text-white">CRO</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Turn More Visitors Into{' '}
                <span className="text-yellow-200">Customers</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Stop losing potential customers. Our data-driven CRO strategies 
                optimize every step of your funnel to maximize conversions and revenue—without 
                spending more on ads.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-amber-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get Free CRO Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#case-study" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  See Case Study
                </a>
              </div>
              
              {/* Quick metrics */}
              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-yellow-200" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">127%</div>
                    <div className="text-xs text-white/60">Avg. Lift</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-yellow-200" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">500+</div>
                    <div className="text-xs text-white/60">Tests Run</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Conversion Funnel */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              
              {/* Funnel visualization */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  {/* Funnel stages */}
                  <div className="space-y-2">
                    <div className="w-72 h-16 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-between px-4">
                      <span className="text-sm font-medium text-white">Visitors</span>
                      <span className="text-lg font-bold text-white">10,000</span>
                    </div>
                    <div className="w-64 h-16 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-between px-4 mx-auto">
                      <span className="text-sm font-medium text-white">Engaged</span>
                      <span className="text-lg font-bold text-white">4,200</span>
                    </div>
                    <div className="w-56 h-16 bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-between px-4 mx-auto">
                      <span className="text-sm font-medium text-white">Leads</span>
                      <span className="text-lg font-bold text-white">890</span>
                    </div>
                    <div className="w-48 h-16 bg-gradient-to-r from-green-400/30 to-emerald-400/30 backdrop-blur-sm rounded-lg border border-green-400/40 flex items-center justify-between px-4 mx-auto">
                      <span className="text-sm font-medium text-white">Customers</span>
                      <span className="text-lg font-bold text-green-300">312</span>
                    </div>
                  </div>
                  
                  {/* Improvement arrow */}
                  <div className="absolute -right-20 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <ArrowUpRight className="w-8 h-8 text-green-300" />
                    <div className="text-green-300 font-bold text-xl">+127%</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">+52% CTR</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Gauge className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">5.8% Conv.</span>
                </div>
              </div>
              
              <div className="absolute bottom-16 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <PieChart className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">-62% CPL</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <RefreshCw className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium text-white">3.2x ROI</span>
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

      {/* Problem/Solution Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                You're Losing Money{' '}
                <span className="gradient-text">Every Day</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Most websites convert only 1-3% of visitors. That means 97% of your traffic—and 
                your marketing budget—is wasted. Even small improvements can have massive impact.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">The Math:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly visitors:</span>
                    <span className="font-medium text-slate-900">10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Current conversion rate:</span>
                    <span className="font-medium text-slate-900">2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Current leads:</span>
                    <span className="font-medium text-slate-900">200/month</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 mt-3">
                    <div className="flex justify-between text-green-600">
                      <span>After CRO (5% rate):</span>
                      <span className="font-bold">500/month (+150%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Optimization areas */}
            <div className="grid grid-cols-2 gap-4">
              {optimizationAreas.map((area) => (
                <div key={area.title} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      <area.icon className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-green-600 font-bold text-sm">{area.improvement}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">{area.title}</h4>
                  <p className="text-xs text-slate-500">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Data-Driven{' '}
              <span className="gradient-text">CRO Services</span>
            </h2>
            <p className="section-subheading mx-auto">
              We use proven methodologies and rigorous testing to systematically improve your conversion rates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Test Section */}
      <section className="py-20 lg:py-28 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <FlaskConical className="w-4 h-4" />
              <span>A/B Testing</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What We{' '}
              <span className="text-amber-300">Test & Optimize</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Every element on your website can impact conversions. We test them all to find winning combinations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {whatWeTest.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
              <RefreshCw className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              The CRO{' '}
              <span className="gradient-text">Framework</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-amber-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Case Study</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Real Results:{' '}
              <span className="gradient-text">E-Commerce Client</span>
            </h2>
            <p className="section-subheading mx-auto">
              See how we helped an e-commerce client nearly triple their conversion rate in 90 days.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudyMetrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h4 className="text-sm font-medium text-slate-500 mb-4">{metric.label}</h4>
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Before</div>
                    <div className="text-lg font-medium text-slate-400">{metric.before}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 mb-2" />
                  <div>
                    <div className="text-xs text-slate-400 mb-1">After</div>
                    <div className="text-lg font-bold text-slate-900">{metric.after}</div>
                  </div>
                </div>
                <div className={`text-center py-2 rounded-lg font-bold ${
                  metric.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {metric.change}
                </div>
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
              "We were skeptical about CRO at first, but the results speak for themselves. 
              Same traffic, triple the leads. It's like finding money we didn't know we had."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500" />
              <div className="text-left">
                <div className="font-semibold text-white">Lisa Bakker</div>
                <div className="text-slate-400 text-sm">Marketing Director, TechFlow B.V.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Convert More Visitors?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Get a free conversion audit and discover exactly where you're losing 
                  potential customers—and how to fix it.
                </p>
                <ul className="space-y-3">
                  {['Full conversion funnel audit', 'Competitor benchmark', 'Quick win opportunities', 'Custom CRO roadmap'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-yellow-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Get Your Free CRO Audit"
                subject="CRO Audit Request"
                buttonText="Get My Free CRO Audit"
                buttonClass="from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25"
                footnote="Free audit with actionable recommendations."
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
                  <input type="url" id="website" name="website" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="https://yourwebsite.com" />
                </div>
                <div>
                  <label htmlFor="traffic" className="block text-sm font-medium text-slate-700 mb-1">Monthly Website Traffic</label>
                  <select id="traffic" name="traffic" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors">
                    <option value="">Select traffic range</option>
                    <option value="1,000 - 5,000 visitors">1,000 - 5,000 visitors</option>
                    <option value="5,000 - 20,000 visitors">5,000 - 20,000 visitors</option>
                    <option value="20,000 - 50,000 visitors">20,000 - 50,000 visitors</option>
                    <option value="50,000+ visitors">50,000+ visitors</option>
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to maximize your conversions?</h3>
              <p className="text-slate-400">Let's discuss your CRO goals today.</p>
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
