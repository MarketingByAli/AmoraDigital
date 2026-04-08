import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Bot,
  MessageSquare,
  Workflow,
  Sparkles,
  Star,
  Phone,
  Mail,
  Settings,
  BarChart3,
  FileSearch,
  Image,
  Mic,
  Clock,
  TrendingUp,
  Database,
  Cpu,
  Target
} from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent chatbots powered by GPT-4, Claude, or custom models for 24/7 customer support.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks with n8n, Zapier, Make, or custom solutions.'
  },
  {
    icon: Brain,
    title: 'Custom AI Solutions',
    description: 'Tailor-made AI applications using machine learning and deep learning.'
  },
  {
    icon: FileSearch,
    title: 'Document Processing',
    description: 'Extract data from PDFs, invoices, and documents with AI-powered OCR.'
  },
  {
    icon: Image,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, and visual quality inspection.'
  },
  {
    icon: Database,
    title: 'Data Analytics & BI',
    description: 'AI-powered insights, predictions, and business intelligence dashboards.'
  }
]

const stats = [
  { value: '80%', label: 'Time Saved', description: 'On repetitive tasks' },
  { value: '50+', label: 'AI Projects', description: 'Successfully deployed' },
  { value: '24/7', label: 'Availability', description: 'Automated systems' },
  { value: '10x', label: 'ROI', description: 'Average return' }
]

const aiCapabilities = [
  { icon: MessageSquare, title: 'Natural Language Processing', description: 'Text analysis, sentiment, and language understanding' },
  { icon: Image, title: 'Image Recognition', description: 'Object detection, classification, and visual search' },
  { icon: Mic, title: 'Speech Recognition', description: 'Voice-to-text, transcription, and voice commands' },
  { icon: TrendingUp, title: 'Predictive Analytics', description: 'Forecasting, trend analysis, and recommendations' },
  { icon: FileSearch, title: 'Document Intelligence', description: 'OCR, data extraction, and document parsing' },
  { icon: Bot, title: 'Conversational AI', description: 'Chatbots, virtual assistants, and support agents' },
]

const automationPlatforms = [
  { name: 'n8n', description: 'Self-hosted automation', color: 'from-red-500 to-red-600' },
  { name: 'Zapier', description: '5000+ app integrations', color: 'from-orange-500 to-orange-600' },
  { name: 'Make', description: 'Visual automation builder', color: 'from-purple-500 to-purple-600' },
  { name: 'Custom', description: 'Built for your needs', color: 'from-blue-500 to-blue-600' },
]

const aiModels = [
  { name: 'OpenAI GPT-4', use: 'Text, Code, Analysis' },
  { name: 'Claude', use: 'Conversation, Writing' },
  { name: 'Gemini', use: 'Multimodal AI' },
  { name: 'Llama', use: 'Open Source, Private' },
  { name: 'Stable Diffusion', use: 'Image Generation' },
  { name: 'Whisper', use: 'Speech Recognition' },
]

const useCases = [
  { 
    title: 'Customer Support', 
    description: 'AI chatbots handling 80% of queries automatically.',
    savings: '60% cost reduction',
    icon: MessageSquare
  },
  { 
    title: 'Sales Automation', 
    description: 'Lead scoring, follow-ups, and CRM automation.',
    savings: '5x more leads processed',
    icon: Target
  },
  { 
    title: 'Document Processing', 
    description: 'Invoice extraction, contract analysis, data entry.',
    savings: '90% faster processing',
    icon: FileSearch
  },
  { 
    title: 'Content Generation', 
    description: 'Blog posts, product descriptions, marketing copy.',
    savings: '10x content output',
    icon: Sparkles
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Identify automation opportunities and AI use cases in your business.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Design the optimal solution architecture and select technologies.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build, train, and integrate AI models and automation workflows.'
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Rigorous testing, fine-tuning, and validation of AI accuracy.'
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'Go live with monitoring, logging, and performance tracking.'
  },
  {
    step: '06',
    title: 'Optimization',
    description: 'Continuous improvement based on real-world performance data.'
  }
]

const benefits = [
  'Reduce manual workload by 80%',
  '24/7 automated operations',
  'Eliminate human errors',
  'Scale without hiring',
  'Faster response times',
  'Data-driven decisions',
  'Consistent quality',
  'Competitive advantage'
]

export default function AIAutomation() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 text-white">
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
                <Link to="/development" className="text-white/60 hover:text-white transition-colors">Development</Link>
                <span className="text-white/40">/</span>
                <span className="text-white">AI & Automation</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Work Smarter with{' '}
                <span className="text-violet-200">AI</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Automate repetitive tasks, deploy intelligent chatbots, and leverage 
                AI to transform your business. Save time, reduce costs, and scale 
                without limits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Start Automating
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#use-cases" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Use Cases
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-violet-200" />
                  <span className="text-sm text-white/70">80% Time Saved</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-violet-200" />
                  <span className="text-sm text-white/70">10x ROI Average</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - AI Dashboard */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-400/30 rounded-full blur-3xl" />
              
              {/* AI Dashboard mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-96 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-violet-400" />
                      <span className="text-sm font-semibold text-white">AI Assistant</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-400">Active</span>
                    </div>
                  </div>
                  
                  {/* Chat content */}
                  <div className="p-4 space-y-3">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-violet-500 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-white">Analyze last month's sales data</p>
                      </div>
                    </div>
                    
                    {/* AI response */}
                    <div className="flex justify-start">
                      <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-white/90">Sales increased 23% with top products being...</p>
                        <div className="mt-2 flex gap-2">
                          <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded">+23%</span>
                          <span className="px-2 py-0.5 text-xs bg-violet-500/20 text-violet-300 rounded">AI Insight</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Typing indicator */}
                    <div className="flex items-center gap-2 text-white/50">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                      <span className="text-xs">Generating recommendations...</span>
                    </div>
                  </div>
                  
                  {/* Automation stats */}
                  <div className="px-4 pb-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-white">847</div>
                        <div className="text-xs text-slate-400">Tasks Today</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-green-400">98%</div>
                        <div className="text-xs text-slate-400">Accuracy</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-violet-400">12h</div>
                        <div className="text-xs text-slate-400">Saved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Bot className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Chatbot</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-sm">
                  <Workflow className="w-4 h-4 text-orange-300" />
                  <span className="text-sm font-medium text-white">Automation</span>
                </div>
              </div>
              
              <div className="absolute bottom-24 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Brain className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-medium text-white">GPT-4</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-pink-300" />
                  <span className="text-sm font-medium text-white">AI Magic</span>
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

      {/* AI Capabilities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              <Brain className="w-4 h-4" />
              <span>AI Capabilities</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              What AI Can{' '}
              <span className="gradient-text">Do For You</span>
            </h2>
            <p className="section-subheading mx-auto">
              Modern AI can handle complex tasks that were impossible just years ago.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((capability) => (
              <div key={capability.title} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-violet-50 hover:shadow-lg transition-all border border-transparent hover:border-violet-100">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{capability.title}</h3>
                  <p className="text-sm text-slate-600">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              AI & Automation{' '}
              <span className="gradient-text">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
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

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 lg:py-28 bg-violet-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              <span>Use Cases</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Real-World{' '}
              <span className="text-violet-300">Results</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              See how businesses are using AI and automation to transform their operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-white/70 mb-3">{useCase.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium text-green-300">{useCase.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Platforms */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              <Workflow className="w-4 h-4" />
              <span>Automation Platforms</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Automation{' '}
              <span className="gradient-text">Tools We Use</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationPlatforms.map((platform) => (
              <div key={platform.name} className="p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-all border border-slate-100 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Workflow className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{platform.name}</h3>
                <p className="text-sm text-slate-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
                <Cpu className="w-4 h-4" />
                <span>AI Models</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                Powered by{' '}
                <span className="gradient-text">Leading AI</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We integrate the most advanced AI models to deliver intelligent 
                solutions tailored to your specific needs.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* AI Models list */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-6">AI Models We Work With</h4>
              <div className="space-y-3">
                {aiModels.map((model) => (
                  <div key={model.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{model.name}</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-white/10 rounded text-white/70">{model.use}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We Implement{' '}
              <span className="gradient-text">AI Solutions</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative p-6 rounded-2xl bg-slate-50 hover:bg-violet-50 hover:shadow-lg transition-all border border-transparent hover:border-violet-100">
                <div className="text-5xl font-bold text-violet-200 mb-4">{step.step}</div>
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
              "The AI chatbot now handles 85% of our customer inquiries automatically. 
              Our support team can focus on complex issues while response times 
              dropped from hours to seconds."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Mark van den Berg</div>
                <div className="text-slate-400 text-sm">CEO, E-Commerce Platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Automate?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Let's identify the best AI and automation opportunities for 
                  your business. Free consultation included.
                </p>
                <ul className="space-y-3">
                  {['Free automation audit', 'AI opportunity assessment', 'ROI projection', 'No obligation quote'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-violet-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Start Your AI Journey"
                subject="AI Automation Inquiry"
                buttonText="Get Free Consultation"
                buttonClass="from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 shadow-lg shadow-violet-500/25"
                footnote="Free consultation. We'll respond within 24 hours."
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">Primary Interest</label>
                  <select id="interest" name="interest" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors">
                    <option value="">Select interest</option>
                    <option value="AI Chatbot">AI Chatbot</option>
                    <option value="Workflow Automation">Workflow Automation</option>
                    <option value="Document Processing">Document Processing</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Custom AI Solution">Custom AI Solution</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-slate-700 mb-1">What Would You Like to Automate?</label>
                  <textarea id="challenge" name="challenge" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors resize-none" placeholder="Tell us about your automation needs..." />
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to leverage AI for your business?</h3>
              <p className="text-slate-400">Let's discuss your automation opportunities today.</p>
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
