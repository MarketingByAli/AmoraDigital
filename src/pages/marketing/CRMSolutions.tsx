import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  Database,
  BarChart3,
  Mail,
  Phone,
  Settings,
  Target,
  TrendingUp,
  Clock,
  Shield,
  Workflow,
  MessageSquare,
  Calendar,
  PieChart,
  Star,
  Headphones,
  RefreshCw,
  Layers,
  Bot,
  FileText,
  Bell
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Contact Management',
    description: 'Centralize all customer data, interactions, and history in one place for your entire team.'
  },
  {
    icon: Workflow,
    title: 'Sales Pipeline',
    description: 'Visual pipeline management to track deals from lead to close with automation.'
  },
  {
    icon: Bot,
    title: 'Marketing Automation',
    description: 'Automated email sequences, lead scoring, and nurture campaigns that run 24/7.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards and custom reports to track performance and ROI.'
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    description: 'Email, SMS, and call tracking integrated into customer records automatically.'
  },
  {
    icon: Calendar,
    title: 'Task & Calendar',
    description: 'Never miss a follow-up with integrated task management and calendar sync.'
  }
]

const stats = [
  { value: '47%', label: 'Sales Increase', description: 'Average for clients' },
  { value: '3.5x', label: 'ROI', description: 'Within first year' },
  { value: '65%', label: 'Time Saved', description: 'On admin tasks' },
  { value: '99%', label: 'Client Satisfaction', description: 'Successful implementations' }
]

const platforms = [
  { name: 'HubSpot', description: 'All-in-one marketing, sales, and service platform', color: 'from-orange-500 to-orange-600' },
  { name: 'Salesforce', description: 'Enterprise-grade CRM for scaling businesses', color: 'from-blue-500 to-blue-600' },
  { name: 'Zoho CRM', description: 'Affordable and feature-rich for growing teams', color: 'from-red-500 to-red-600' },
  { name: 'Pipedrive', description: 'Sales-focused CRM with intuitive interface', color: 'from-green-500 to-green-600' },
  { name: 'Monday CRM', description: 'Flexible work OS with CRM capabilities', color: 'from-purple-500 to-purple-600' },
  { name: 'Custom CRM', description: 'Tailored solutions built for your specific needs', color: 'from-primary-500 to-primary-600' },
]

const services = [
  {
    icon: Settings,
    title: 'CRM Implementation',
    description: 'Full setup and configuration of your CRM system tailored to your business processes.'
  },
  {
    icon: RefreshCw,
    title: 'Data Migration',
    description: 'Secure migration of your existing data from spreadsheets or other systems.'
  },
  {
    icon: Layers,
    title: 'Integration',
    description: 'Connect your CRM with email, website, accounting, and other business tools.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Set up automated workflows to eliminate manual tasks and improve efficiency.'
  },
  {
    icon: Headphones,
    title: 'Training & Support',
    description: 'Comprehensive training for your team and ongoing support when you need it.'
  },
  {
    icon: TrendingUp,
    title: 'Optimization',
    description: 'Continuous improvement of your CRM setup based on usage data and feedback.'
  }
]

const benefits = [
  { icon: Target, title: 'Never Lose a Lead', description: 'Capture and track every lead automatically' },
  { icon: Clock, title: 'Save Hours Daily', description: 'Automate repetitive tasks and follow-ups' },
  { icon: PieChart, title: 'Data-Driven Decisions', description: 'Real-time insights into your sales and marketing' },
  { icon: Shield, title: 'Protect Customer Data', description: 'Secure, centralized data management' },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyze your current processes, pain points, and goals to design the perfect CRM solution.'
  },
  {
    step: '02',
    title: 'Setup & Configuration',
    description: 'We implement your CRM, configure fields, pipelines, and automations to match your workflow.'
  },
  {
    step: '03',
    title: 'Migration & Integration',
    description: 'We migrate your data and connect your CRM with other tools you use daily.'
  },
  {
    step: '04',
    title: 'Training & Launch',
    description: 'We train your team and provide ongoing support to ensure successful adoption.'
  }
]

const automations = [
  'Lead capture from website forms',
  'Automatic lead assignment',
  'Welcome email sequences',
  'Follow-up reminders',
  'Deal stage automation',
  'Task creation triggers',
  'Birthday/anniversary emails',
  'Re-engagement campaigns',
  'Quote/proposal generation',
  'Invoice reminders',
  'Customer feedback surveys',
  'Reporting automation'
]

export default function CRMSolutions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white">
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
                <span className="text-white">CRM Solutions</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Turn Leads Into{' '}
                <span className="text-cyan-300">Loyal Customers</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Stop losing leads in spreadsheets. We implement and optimize CRM systems 
                that help you track every customer, automate follow-ups, and close more deals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-indigo-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Get CRM Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#platforms" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Platforms
                </a>
              </div>
              
              {/* Quick benefits */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {benefits.slice(0, 2).map((benefit) => (
                  <div key={benefit.title} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{benefit.title}</div>
                      <div className="text-xs text-white/60">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Visual - CRM Dashboard */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
              
              {/* Main dashboard */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-5 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">Sales Pipeline</h4>
                    <span className="text-xs text-cyan-300 font-medium">€245K</span>
                  </div>
                  
                  {/* Pipeline stages */}
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 h-2 rounded-full bg-blue-400/50" />
                    <div className="flex-1 h-2 rounded-full bg-indigo-400/50" />
                    <div className="flex-1 h-2 rounded-full bg-violet-400/50" />
                    <div className="flex-1 h-2 rounded-full bg-purple-400/50" />
                  </div>
                  
                  {/* Deal cards */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-xs font-bold text-white">TC</div>
                        <div>
                          <div className="text-sm font-medium text-white">TechCorp Deal</div>
                          <div className="text-xs text-white/60">Proposal Sent</div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-cyan-300">€45K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xs font-bold text-white">AB</div>
                        <div>
                          <div className="text-sm font-medium text-white">ABC Industries</div>
                          <div className="text-xs text-white/60">Negotiation</div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-cyan-300">€78K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-xs font-bold text-white">NL</div>
                        <div>
                          <div className="text-sm font-medium text-white">NewLead Co.</div>
                          <div className="text-xs text-green-300">Won!</div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-green-300">€32K</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Bell className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">New Lead!</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Mail className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">Auto-sent</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <FileText className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">Quote Ready</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-medium text-white">+47% Sales</span>
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

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Why CRM</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Stop Losing Leads,{' '}
              <span className="gradient-text">Start Closing Deals</span>
            </h2>
            <p className="section-subheading mx-auto">
              A properly implemented CRM transforms how you manage customer relationships and grow revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-indigo-50 hover:shadow-lg transition-all border border-transparent hover:border-indigo-100">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Database className="w-4 h-4" />
              <span>CRM Features</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Everything You Need to{' '}
              <span className="gradient-text">Manage Customers</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 lg:py-28 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>CRM Platforms</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              We Work With{' '}
              <span className="text-cyan-300">Leading CRMs</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Whether you need HubSpot, Salesforce, or a custom solution, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-white/70">{platform.description}</p>
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
              <Settings className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              End-to-End{' '}
              <span className="gradient-text">CRM Services</span>
            </h2>
            <p className="section-subheading mx-auto">
              From selection to implementation to ongoing optimization, we handle it all.
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

      {/* Automations Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <Bot className="w-4 h-4" />
              <span>Automation</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Automations That{' '}
              <span className="gradient-text">Work While You Sleep</span>
            </h2>
            <p className="section-subheading mx-auto">
              Set it once, let it run forever. These automations save hours every week.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {automations.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Workflow className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We{' '}
              <span className="gradient-text">Implement Your CRM</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-indigo-100 mb-4">{step.step}</div>
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
              "Before the CRM, leads were falling through the cracks. Now we track everything, 
              follow up automatically, and our close rate has improved by 40%."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Mark van Dijk</div>
                <div className="text-slate-400 text-sm">Sales Director, GrowthFirst B.V.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Sales Process?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Get a free CRM consultation and discover how the right system can 
                  help you close more deals and grow your business.
                </p>
                <ul className="space-y-3">
                  {['Free CRM needs assessment', 'Platform recommendation', 'ROI projection', 'Implementation roadmap'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Get Your Free CRM Consultation</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="crm" className="block text-sm font-medium text-slate-700 mb-1">Current CRM Situation</label>
                    <select 
                      id="crm"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Select your situation</option>
                      <option value="none">No CRM - Using spreadsheets</option>
                      <option value="basic">Basic CRM - Need upgrade</option>
                      <option value="complex">Have CRM - Need optimization</option>
                      <option value="custom">Need custom solution</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-500 text-center">
                  Free consultation. No obligation.
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to streamline your sales?</h3>
              <p className="text-slate-400">Let's discuss your CRM needs today.</p>
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
