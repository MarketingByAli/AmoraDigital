import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Smartphone,
  Tablet,
  Download,
  Bell,
  MapPin,
  Camera,
  Shield,
  Star,
  Phone,
  Mail,
  Settings,
  Layers,
  Code2,
  Cpu,
  Cloud,
  BarChart3,
  Users,
  Rocket,
  Globe
} from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'iOS Development',
    description: 'Native iOS apps with Swift for the best iPhone and iPad experience.'
  },
  {
    icon: Tablet,
    title: 'Android Development',
    description: 'Native Android apps with Kotlin for maximum device compatibility.'
  },
  {
    icon: Layers,
    title: 'Cross-Platform Apps',
    description: 'React Native and Flutter apps that work on both iOS and Android.'
  },
  {
    icon: Globe,
    title: 'Progressive Web Apps',
    description: 'Web apps that feel native with offline support and push notifications.'
  },
  {
    icon: Cloud,
    title: 'Backend & APIs',
    description: 'Robust backend infrastructure to power your mobile application.'
  },
  {
    icon: Settings,
    title: 'App Maintenance',
    description: 'Ongoing updates, bug fixes, and new feature development.'
  }
]

const stats = [
  { value: '75+', label: 'Apps Launched', description: 'iOS & Android' },
  { value: '4.8★', label: 'Avg. Rating', description: 'On app stores' },
  { value: '2M+', label: 'Downloads', description: 'Total installs' },
  { value: '99.5%', label: 'Crash-Free', description: 'App stability' }
]

const platforms = [
  { 
    name: 'React Native', 
    description: 'Cross-platform with JavaScript', 
    color: 'from-cyan-500 to-blue-600',
    pros: ['Single codebase', 'Fast development', 'Large community']
  },
  { 
    name: 'Flutter', 
    description: 'Cross-platform with Dart', 
    color: 'from-blue-400 to-blue-600',
    pros: ['Beautiful UI', 'Fast performance', 'Google backed']
  },
  { 
    name: 'Swift (iOS)', 
    description: 'Native Apple development', 
    color: 'from-orange-500 to-orange-600',
    pros: ['Best iOS performance', 'Full Apple APIs', 'Latest features']
  },
  { 
    name: 'Kotlin (Android)', 
    description: 'Native Android development', 
    color: 'from-purple-500 to-purple-600',
    pros: ['Best Android UX', 'Full Google APIs', 'Jetpack Compose']
  },
]

const features = [
  { icon: Bell, title: 'Push Notifications', description: 'Engage users with timely alerts' },
  { icon: MapPin, title: 'Location Services', description: 'GPS, maps, and geofencing' },
  { icon: Camera, title: 'Camera & Media', description: 'Photos, videos, and AR features' },
  { icon: Shield, title: 'Secure Auth', description: 'Biometrics, OAuth, and encryption' },
  { icon: Download, title: 'Offline Mode', description: 'Work without internet connection' },
  { icon: Cpu, title: 'Device Integration', description: 'Sensors, Bluetooth, and NFC' },
]

const appTypes = [
  { 
    title: 'Business Apps', 
    examples: ['CRM Mobile', 'Field Service', 'Inventory'],
    icon: BarChart3
  },
  { 
    title: 'Consumer Apps', 
    examples: ['Social', 'Lifestyle', 'Entertainment'],
    icon: Users
  },
  { 
    title: 'E-Commerce Apps', 
    examples: ['Shopping', 'Marketplace', 'Delivery'],
    icon: Smartphone
  },
  { 
    title: 'Healthcare Apps', 
    examples: ['Telehealth', 'Fitness', 'Patient Portal'],
    icon: Shield
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Define goals, target users, features, and choose the right platform.'
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Create wireframes, prototypes, and stunning visual designs.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build the app with agile sprints and regular progress demos.'
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Rigorous QA on real devices, beta testing, and bug fixes.'
  },
  {
    step: '05',
    title: 'Launch',
    description: 'App store submission, optimization, and launch support.'
  },
  {
    step: '06',
    title: 'Growth',
    description: 'Analytics, updates, and new features based on user feedback.'
  }
]

const deliverables = [
  'Native or cross-platform app',
  'App Store & Play Store listing',
  'Backend API & database',
  'Admin dashboard',
  'Push notification system',
  'Analytics integration',
  'User documentation',
  'Source code & assets',
  '90-day bug fix warranty',
  'Launch support'
]

export default function MobileAppDevelopment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
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
                <span className="text-white">Mobile Apps</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Apps That Users{' '}
                <span className="text-blue-200">Love</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                From concept to App Store, we build beautiful, high-performance 
                mobile apps for iOS and Android. Native or cross-platform—we've 
                got you covered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Build Your App
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#platforms" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Platforms
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-200" />
                  <span className="text-sm text-white/70">2M+ Downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-200 fill-current" />
                  <span className="text-sm text-white/70">4.8 Avg. Rating</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Phone Mockups */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl" />
              
              {/* Phone mockups */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                {/* Main phone */}
                <div className="relative">
                  <div className="w-52 h-[420px] bg-slate-900 rounded-[3rem] border-4 border-slate-800 shadow-2xl overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-10" />
                    {/* Screen content */}
                    <div className="h-full bg-gradient-to-br from-blue-500 to-purple-600 p-4 pt-10">
                      {/* Status bar */}
                      <div className="flex justify-between items-center text-white/70 text-xs mb-6">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-white/70 rounded-sm" />
                        </div>
                      </div>
                      {/* App content mockup */}
                      <div className="text-white text-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl mx-auto mb-2" />
                        <div className="text-sm font-semibold">Your App</div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 bg-white/10 rounded-xl" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-16 bg-white/10 rounded-xl" />
                          <div className="h-16 bg-white/10 rounded-xl" />
                        </div>
                        <div className="h-12 bg-white/20 rounded-xl" />
                      </div>
                      {/* Bottom nav */}
                      <div className="absolute bottom-4 left-4 right-4 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-around px-4">
                        <div className="w-6 h-6 bg-white/40 rounded-full" />
                        <div className="w-6 h-6 bg-white/40 rounded-full" />
                        <div className="w-6 h-6 bg-white rounded-full" />
                        <div className="w-6 h-6 bg-white/40 rounded-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Second phone (behind) */}
                  <div className="absolute -right-16 top-8 w-44 h-[360px] bg-slate-900 rounded-[2.5rem] border-4 border-slate-800 shadow-xl overflow-hidden opacity-60 -z-10">
                    <div className="h-full bg-gradient-to-br from-emerald-500 to-teal-600 p-3 pt-8">
                      <div className="space-y-2">
                        <div className="h-16 bg-white/10 rounded-lg" />
                        <div className="h-16 bg-white/10 rounded-lg" />
                        <div className="h-16 bg-white/10 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Code2 className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-medium text-white">React Native</span>
                </div>
              </div>
              
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-sm">
                  <Smartphone className="w-4 h-4 text-orange-300" />
                  <span className="text-sm font-medium text-white">iOS</span>
                </div>
              </div>
              
              <div className="absolute bottom-28 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Tablet className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Android</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Layers className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">Flutter</span>
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

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>App Features</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Powerful{' '}
              <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="section-subheading mx-auto">
              We integrate all the features modern apps need to delight users.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:shadow-lg transition-all border border-transparent hover:border-blue-100">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Mobile App{' '}
              <span className="gradient-text">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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
      <section id="platforms" className="py-20 lg:py-28 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Platforms</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Choose Your{' '}
              <span className="text-blue-300">Platform</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We help you pick the right technology based on your goals, budget, and timeline.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{platform.name}</h3>
                <p className="text-sm text-white/70 mb-4">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.pros.map((pro) => (
                    <li key={pro} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-300" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              <span>What We Build</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Apps for Every{' '}
              <span className="gradient-text">Industry</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appTypes.map((type) => (
              <div key={type.title} className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-blue-50 hover:to-indigo-50 transition-all border border-slate-200 hover:border-blue-200 group text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg mx-auto group-hover:scale-110 transition-transform">
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{type.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {type.examples.map((example) => (
                    <span key={example} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              From Idea to{' '}
              <span className="gradient-text">App Store</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-blue-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>Deliverables</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                What You{' '}
                <span className="gradient-text">Get</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Every mobile app project includes everything you need for 
                a successful launch and beyond.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* App Store mockup */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-6">Your App on the Stores</h4>
              
              {/* App Store listing mockup */}
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1">Your Amazing App</div>
                    <div className="text-xs text-slate-400 mb-2">Your Company Name</div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400">4.9 (2.3K)</span>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-blue-500 text-white text-sm font-semibold rounded-full">
                    GET
                  </button>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-white">50K+</div>
                  <div className="text-xs text-slate-400">Downloads</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-white">4.9★</div>
                  <div className="text-xs text-slate-400">Rating</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-white">#1</div>
                  <div className="text-xs text-slate-400">Category</div>
                </div>
              </div>
            </div>
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
              "Our React Native app hit 100K downloads in the first month. 
              The team delivered a polished product that our users love. 
              4.8 stars on both App Store and Play Store!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Sophie Jansen</div>
                <div className="text-slate-400 text-sm">Founder, FitLife App</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Build Your App?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  From startup MVPs to enterprise apps, we bring your mobile 
                  vision to life. Let's discuss your app idea.
                </p>
                <ul className="space-y-3">
                  {['Free app consultation', 'Platform recommendation', 'Feature planning', 'Timeline & cost estimate'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Start Your App Project</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="platform" className="block text-sm font-medium text-slate-700 mb-1">Target Platform</label>
                    <select 
                      id="platform"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select platform</option>
                      <option value="both">iOS & Android</option>
                      <option value="ios">iOS Only</option>
                      <option value="android">Android Only</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="appType" className="block text-sm font-medium text-slate-700 mb-1">App Type</label>
                    <select 
                      id="appType"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select app type</option>
                      <option value="consumer">Consumer App</option>
                      <option value="business">Business App</option>
                      <option value="ecommerce">E-Commerce App</option>
                      <option value="social">Social / Community</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-500 text-center">
                  Free consultation. We'll respond within 24 hours.
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
              <h3 className="text-xl font-bold text-white mb-1">Ready to launch your mobile app?</h3>
              <p className="text-slate-400">Let's discuss your app idea today.</p>
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
