import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Sparkles,
  MousePointerClick,
  Mail,
  Download,
  Shield,
  Smartphone,
  BarChart3,
  FileType,
  Settings,
  Eye,
  Palette,
  Filter,
  Globe,
  ExternalLink,
  Code2,
  Star
} from 'lucide-react'

const features = [
  {
    icon: MousePointerClick,
    title: 'Drag & Drop Builder',
    description: 'Create professional forms with an intuitive visual builder. See your form take shape in real-time with instant preview.'
  },
  {
    icon: FileType,
    title: '25+ Field Types',
    description: 'Text, email, file uploads, date pickers, address fields, dropdowns, checkboxes, and more—everything you need.'
  },
  {
    icon: Filter,
    title: 'Conditional Logic',
    description: 'Show or hide fields based on user responses. Create intelligent forms that adapt dynamically.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Forms look perfect on every device—desktop, tablet, and mobile—automatically optimized.'
  },
  {
    icon: BarChart3,
    title: 'Submission Management',
    description: 'View, search, filter, and manage all submissions from one powerful dashboard. Export as CSV or JSON.'
  },
  {
    icon: Mail,
    title: 'Email Notifications',
    description: 'Get instant notifications when someone submits a form. Never miss a lead again.'
  },
  {
    icon: Palette,
    title: 'Custom Styling',
    description: 'Match your brand perfectly. Customize colors, fonts, spacing, and button styles without writing CSS.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built-in file validation, spam protection, and secure data handling. GDPR compliant out of the box.'
  }
]

const benefits = [
  {
    title: 'Save Hours of Development Time',
    description: 'Build forms in 5 minutes instead of hours. No more wrestling with complex form plugins or custom coding.',
    stat: '95%',
    statLabel: 'Faster Setup'
  },
  {
    title: 'Increase Conversion Rates',
    description: 'Beautiful, responsive forms that work flawlessly on all devices lead to higher completion rates.',
    stat: '2.5x',
    statLabel: 'More Conversions'
  },
  {
    title: 'Never Lose a Lead',
    description: 'All submissions stored securely in your database with instant email notifications and easy export.',
    stat: '100%',
    statLabel: 'Lead Capture'
  }
]

const useCases = [
  'Contact Forms',
  'Lead Generation',
  'Registration Forms',
  'Survey Forms',
  'Order Forms',
  'Quote Requests',
  'Application Forms',
  'Feedback Forms',
  'Multi-Step Forms',
  'File Upload Forms',
  'Payment Forms',
  'Booking Forms'
]

const techFeatures = [
  { name: 'WordPress.org Standards', description: 'Built with WordPress best practices', icon: Code2 },
  { name: 'Lightweight & Fast', description: 'Optimized for performance', icon: Zap },
  { name: 'Translation Ready', description: 'Available in 13+ languages', icon: Globe },
  { name: 'Developer Friendly', description: 'Hooks and filters for customization', icon: Settings },
]

export default function AutoFormBuilder() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 text-white">
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
                <span className="text-white">Auto Form Builder</span>
              </nav>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>WordPress Plugin</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Forms That Convert,{' '}
                <span className="text-purple-200">Not Complicate</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Build professional WordPress forms in minutes, not hours. Drag, drop, done. 
                The most intuitive form builder for WordPress—powerful yet simple.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://autoformbuilder.com/pricing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get Pro Version
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wordpress.org/plugins/auto-form-builder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Free
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
                  <span className="text-sm text-white/70">5-Star Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-300" />
                  <span className="text-sm text-white/70">Free Forever Version</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl" />
              
              {/* Form Builder Preview */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                  {/* Builder header */}
                  <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 border-b border-slate-200">
                    <MousePointerClick className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-slate-900">Form Builder</span>
                    <div className="ml-auto flex items-center gap-2">
                      <Eye className="w-4 h-4 text-slate-400" />
                      <Settings className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                  {/* Form preview */}
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <div className="h-10 bg-slate-100 rounded-lg border border-slate-200"></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <div className="h-10 bg-slate-100 rounded-lg border border-slate-200"></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                      <div className="h-20 bg-slate-100 rounded-lg border border-slate-200"></div>
                    </div>
                    <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg">
                      Submit Form
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating feature badges */}
              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Real-time Preview</span>
                </div>
              </div>
              
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">5 Min Setup</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Smartphone className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-medium text-white">Mobile Ready</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-400/30 backdrop-blur-sm">
                  <Shield className="w-4 h-4 text-rose-300" />
                  <span className="text-sm font-medium text-white">Secure</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Why Choose Auto Form Builder</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              From Frustration to{' '}
              <span className="gradient-text">5-Minute Forms</span>
            </h2>
            <p className="section-subheading mx-auto">
              Stop wrestling with complicated form plugins. Auto Form Builder gives you 
              professional power with consumer simplicity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-purple-200 hover:shadow-xl transition-all group">
                <div className="text-5xl font-bold text-purple-100 mb-4 group-hover:text-purple-200 transition-colors">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-3">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Powerful Features</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Everything You Need to Build{' '}
              <span className="gradient-text">Amazing Forms</span>
            </h2>
            <p className="section-subheading mx-auto">
              From simple contact forms to advanced multi-step lead generators—Auto Form Builder 
              delivers all the tools you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <FileType className="w-4 h-4" />
              <span>Use Cases</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Perfect For Every{' '}
              <span className="gradient-text">Form Type</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 hover:bg-purple-50 hover:border-purple-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" />
              <span>Built Right</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              WordPress Standards,{' '}
              <span className="text-purple-400">Enterprise Quality</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Built with WordPress best practices and trusted by thousands of users worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((tech) => (
              <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center flex-shrink-0 mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-white/70">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 mb-8 leading-relaxed">
              "Auto Form Builder made building WordPress forms genuinely fast and smooth. 
              The visual drag-and-drop editor with real-time preview helped me put together 
              forms in minutes. Conditional logic keeps longer forms clean and user-friendly."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-900">Sarah M.</div>
                <div className="text-slate-600 text-sm">Marketing Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Two CTAs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* CTA 1: Visit Auto Form Builder */}
            <div className="relative rounded-3xl bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>
              
              <div className="relative">
                <MousePointerClick className="w-12 h-12 text-purple-200 mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Build Better Forms?
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Download Auto Form Builder free from WordPress.org or get Pro features 
                  for advanced functionality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://autoformbuilder.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                  >
                    Visit Auto Form Builder
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <p className="mt-6 text-sm text-white/70">
                  Free forever. No credit card required.
                </p>
              </div>
            </div>

            {/* CTA 2: Build Your Own Plugin */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 md:p-12 overflow-hidden border border-slate-700">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              </div>
              
              <div className="relative">
                <Code2 className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Need a Custom WordPress Plugin?
                </h3>
                <p className="text-lg text-slate-300 mb-8">
                  We built Auto Form Builder, and we can build custom WordPress plugins 
                  tailored to your specific business needs.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Custom functionality', 'WordPress best practices', 'Ongoing support & updates', 'Performance optimized'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl hover:from-purple-700 hover:to-violet-700 transition-all shadow-lg group"
                >
                  Develop Your Own WordPress Plugin
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
              <h3 className="text-xl font-bold text-white mb-1">Questions about Auto Form Builder?</h3>
              <p className="text-slate-400">We're here to help you build better forms.</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://autoformbuilder.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Visit Website
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
