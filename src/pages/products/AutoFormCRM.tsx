import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Code2,
  Users,
  BarChart3,
  Mail,
  Zap,
  MessageSquare,
  Bell,
  Database,
  Settings
} from 'lucide-react'

const plannedFeatures = [
  {
    icon: Users,
    title: 'Contact Management',
    description: 'Centralized database to manage all your leads and customers in one place.'
  },
  {
    icon: BarChart3,
    title: 'Lead Tracking',
    description: 'Track every interaction and monitor your sales pipeline from first contact to close.'
  },
  {
    icon: Mail,
    title: 'Email Integration',
    description: 'Send and track emails directly from WordPress. Never miss a follow-up.'
  },
  {
    icon: MessageSquare,
    title: 'Activity Timeline',
    description: 'Complete history of all customer interactions, notes, and communications.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Automated reminders for follow-ups, tasks, and important customer milestones.'
  },
  {
    icon: Database,
    title: 'Auto Form Integration',
    description: 'Seamless integration with Auto Form Builder to capture and manage leads automatically.'
  }
]

const benefits = [
  'Manage customer relationships directly in WordPress',
  'No monthly fees for basic CRM features',
  'Seamless integration with Auto Form Builder',
  'Track leads from submission to conversion',
  'Built with WordPress best practices',
  'GDPR compliant data management'
]

export default function AutoFormCRM() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm mb-8">
              <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-white/60">Products</span>
              <span className="text-white/40">/</span>
              <span className="text-white">Auto Form CRM</span>
            </nav>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Coming Soon - Under Development</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              CRM Made Simple,{' '}
              <span className="text-rose-200">Built for WordPress</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              We're building Auto Form CRM—a powerful customer relationship management plugin 
              designed specifically for WordPress. Manage leads, track interactions, and grow 
              your business without leaving your WordPress dashboard.
            </p>
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-yellow-400 animate-ping" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">In Development</div>
                <div className="text-xs text-white/70">Building something amazing for you</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" />
              <span>What We're Building</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              WordPress CRM{' '}
              <span className="gradient-text">Done Right</span>
            </h2>
            <p className="section-subheading mx-auto">
              Auto Form CRM will bring enterprise-level customer relationship management 
              features directly into WordPress, making it easy to manage and grow your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plannedFeatures.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Auto Form CRM Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Why We're Building This</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                CRM Without the{' '}
                <span className="gradient-text">Complexity</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Most CRM solutions are either too expensive, too complicated, or require you 
                to leave WordPress. We're building Auto Form CRM to solve these problems—giving 
                you powerful CRM features right inside your WordPress dashboard.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Perfect for small businesses, agencies, and entrepreneurs who want to manage 
                customer relationships without the hassle of external tools and monthly subscriptions.
              </p>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">What You'll Get</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Settings className="w-16 h-16 text-rose-400 mx-auto mb-6 animate-spin" style={{ animationDuration: '3s' }} />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Crafted with Care
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We're taking our time to build Auto Form CRM the right way—following WordPress 
              best practices, ensuring top-notch security, and creating an intuitive user experience. 
              Quality takes time, and we're committed to delivering a CRM solution you'll love.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">Development in Progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Need a Custom CRM Solution Now?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Can't wait for Auto Form CRM? We can build a custom CRM solution tailored 
                to your specific business needs today. From simple lead tracking to complex 
                customer management systems—we've got you covered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-rose-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Build Custom CRM Solution
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/marketing/crm-solutions"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View CRM Services
                </Link>
              </div>
              
              <p className="text-sm text-white/70">
                We specialize in custom WordPress development and CRM integrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Interested in Auto Form CRM?</h3>
              <p className="text-slate-400">Let's discuss your CRM needs and find the perfect solution.</p>
            </div>
            <div className="flex items-center gap-4">
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
