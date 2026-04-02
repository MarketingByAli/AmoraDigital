import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Globe, 
  Users, 
  Megaphone, 
  Target, 
  Search, 
  Sparkles, 
  MapPin,
  Zap,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Smartphone,
  Server,
  ShoppingCart,
  Palette,
  Bot,
  Mail,
  TrendingUp,
  Layers,
  Award
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CertificatesSection />
      <MarketingServicesSection />
      <DevelopmentServicesSection />
      <StatsSection />
      <CTASection />
    </>
  )
}

function HeroSection() {
  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'from-primary-500 to-primary-600 shadow-primary-500/25',
      secondary: 'from-secondary-500 to-secondary-600 shadow-secondary-500/25',
      accent: 'from-accent-500 to-accent-600 shadow-accent-500/25'
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-secondary-200/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 right-1/3 w-[300px] h-[300px] bg-accent-200/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Digital Marketing & Custom Development</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              We Build Solutions That{' '}
              <span className="gradient-text">Drive Growth</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 text-balance">
              From SEO & paid advertising to custom React, PHP, and Java development — 
              we deliver complete digital solutions that generate leads and accelerate your business.
            </p>
            
            {/* Service tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {['SEO', 'Paid Ads', 'Web Design', 'React', 'PHP', 'Java', 'AI SEO'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary group">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/products/auto-form-builder" className="btn-secondary">
                View Our Work
              </Link>
            </div>
            
            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-500">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-500">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">10x</div>
                <div className="text-sm text-slate-500">ROI Average</div>
              </div>
            </div>
          </div>
          
          {/* Right visual - Animated services showcase */}
          <div className="relative h-[500px] lg:h-[550px] hidden lg:block">
            {/* Central glowing element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
            
            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 w-72">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Growth Dashboard</div>
                    <div className="text-sm text-slate-500">Real-time results</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-slate-600">Website Traffic</span>
                    <span className="text-sm font-bold text-green-600">+147%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                    <span className="text-sm text-slate-600">Lead Generation</span>
                    <span className="text-sm font-bold text-primary-600">+89%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-sm text-slate-600">Revenue Growth</span>
                    <span className="text-sm font-bold text-secondary-600">+234%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating service icons - evenly distributed around the card */}
            
            {/* TOP ROW - 2 icons */}
            <div className="absolute top-4 left-1/4 animate-float z-20" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('primary')} flex items-center justify-center shadow-md`}>
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">Web Design</span>
              </div>
            </div>
            
            <div className="absolute top-8 right-1/4 animate-float z-20" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('secondary')} flex items-center justify-center shadow-md`}>
                  <Search className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">SEO</span>
              </div>
            </div>
            
            {/* LEFT SIDE - 2 icons */}
            <div className="absolute top-1/3 -left-2 animate-float z-20" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('accent')} flex items-center justify-center shadow-md`}>
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">AI SEO</span>
              </div>
            </div>
            
            <div className="absolute bottom-1/3 -left-4 animate-float z-20" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('primary')} flex items-center justify-center shadow-md`}>
                  <Megaphone className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">Social</span>
              </div>
            </div>
            
            {/* RIGHT SIDE - 2 icons */}
            <div className="absolute top-1/3 -right-2 animate-float z-20" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('accent')} flex items-center justify-center shadow-md`}>
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">React</span>
              </div>
            </div>
            
            <div className="absolute bottom-1/3 -right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('primary')} flex items-center justify-center shadow-md`}>
                  <Server className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">PHP</span>
              </div>
            </div>
            
            {/* BOTTOM ROW - 2 icons */}
            <div className="absolute bottom-8 left-1/4 animate-float z-20" style={{ animationDelay: '1.8s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('secondary')} flex items-center justify-center shadow-md`}>
                  <Database className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">Java</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-1/4 animate-float z-20" style={{ animationDelay: '2.1s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('accent')} flex items-center justify-center shadow-md`}>
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700">Paid Ads</span>
              </div>
            </div>
            
            {/* Floating notification badges - corners */}
            <div className="absolute top-0 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-green-100 border border-green-200 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-green-700">New Lead!</span>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary-100 border border-primary-200 shadow-lg">
                <Zap className="w-3 h-3 text-primary-600" />
                <span className="text-xs font-medium text-primary-700">+147% Traffic</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 animate-float z-20" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-accent-100 border border-accent-200 shadow-lg">
                <Code2 className="w-3 h-3 text-accent-600" />
                <span className="text-xs font-medium text-accent-700">Code Deployed</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 animate-float z-20" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary-100 border border-secondary-200 shadow-lg">
                <TrendingUp className="w-3 h-3 text-secondary-600" />
                <span className="text-xs font-medium text-secondary-700">Revenue Up</span>
              </div>
            </div>
          </div>
          
          {/* Mobile visual */}
          <div className="lg:hidden flex justify-center">
            <div className="grid grid-cols-4 gap-3">
              {[Globe, Search, Code2, Server, Database, Target, Megaphone, Bot].map((Icon, index) => (
                <div key={index} className="w-14 h-14 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CertificatesSection() {
  const certificates = [
    { src: 'https://amoradigital.nl/asset/EMMC-227x300-1.png', alt: 'Email Marketing Master Certification' },
    { src: 'https://amoradigital.nl/asset/ECM-compressor-227x300-1.png', alt: 'E-Commerce Marketing Certification' },
    { src: 'https://amoradigital.nl/asset/CVOAli-compressor-227x300-1.png', alt: 'Customer Value Optimization Certification' },
    { src: 'https://amoradigital.nl/asset/Copywriting-compressor-1-227x300-1.png', alt: 'Copywriting Certification' },
    { src: 'https://amoradigital.nl/asset/Community-compressor-227x300-1.png', alt: 'Community Management Certification' },
    { src: 'https://amoradigital.nl/asset/CMS-compressor-227x300-1.png', alt: 'Content Marketing Certification' },
    { src: 'https://amoradigital.nl/asset/casc-compressor-231x300-1.png', alt: 'Content & Social Certification' },
    { src: 'https://amoradigital.nl/asset/smsc-compressor-230x300-1.png', alt: 'Social Media Certification' },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 via-white to-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Certified Experts</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">
            Industry-Recognized{' '}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading mx-auto">
            Our team holds certifications from leading digital marketing institutions, 
            ensuring you get expert-level service backed by proven knowledge.
          </p>
        </div>
        
        {/* Certificates grid */}
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={cert.src} 
                  alt={cert.alt}
                  className="w-full h-auto mx-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MarketingServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Stunning, conversion-focused websites that captivate visitors and turn them into customers.',
      features: ['Custom Design', 'Mobile-First', 'Lightning Fast'],
      color: 'primary',
      path: '/marketing/website-design'
    },
    {
      icon: Users,
      title: 'CRM Solutions',
      description: 'Streamline your customer relationships with powerful, easy-to-use CRM integrations.',
      features: ['Lead Tracking', 'Automation', 'Analytics'],
      color: 'secondary',
      path: '/marketing/crm-solutions'
    },
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage your audience across all social platforms.',
      features: ['Content Strategy', 'Community Management', 'Growth Hacking'],
      color: 'accent',
      path: '/marketing/social-media-marketing'
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Maximize ROI with data-driven PPC campaigns across Google, Facebook, and more.',
      features: ['Google Ads', 'Meta Ads', 'Retargeting'],
      color: 'primary',
      path: '/marketing/paid-advertising'
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Dominate search rankings with our proven SEO strategies and expert optimization.',
      features: ['On-Page SEO', 'Link Building', 'Technical SEO'],
      color: 'secondary',
      path: '/marketing/seo-services'
    },
    {
      icon: Sparkles,
      title: 'AI SEO',
      description: 'Leverage cutting-edge AI technology to supercharge your search engine performance.',
      features: ['AI Content', 'Predictive Analytics', 'Smart Optimization'],
      color: 'accent',
      path: '/marketing/ai-seo'
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description: 'Get found by local customers with targeted local search optimization strategies.',
      features: ['Google My Business', 'Local Citations', 'Review Management'],
      color: 'primary',
      path: '/marketing/local-seo'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and boost conversions with targeted email campaigns that deliver results.',
      features: ['Campaign Strategy', 'Automation', 'A/B Testing'],
      color: 'secondary',
      path: '/marketing/email-marketing'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Turn more visitors into customers with data-driven CRO strategies and testing.',
      features: ['Landing Pages', 'User Research', 'Funnel Optimization'],
      color: 'accent',
      path: '/marketing/conversion-optimization'
    },
    {
      icon: Palette,
      title: 'Brand Strategy',
      description: 'Build a powerful brand identity that resonates with your target audience.',
      features: ['Brand Identity', 'Visual Design', 'Brand Guidelines'],
      color: 'primary',
      path: '/marketing/brand-strategy'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: 'bg-primary-100',
        icon: 'text-primary-600',
        hover: 'hover:border-primary-200'
      },
      secondary: {
        bg: 'bg-secondary-100',
        icon: 'text-secondary-600',
        hover: 'hover:border-secondary-200'
      },
      accent: {
        bg: 'bg-accent-100',
        icon: 'text-accent-600',
        hover: 'hover:border-accent-200'
      }
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="marketing-services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Digital Marketing</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">
            Marketing Solutions to{' '}
            <span className="gradient-text">Grow Your Business</span>
          </h2>
          <p className="section-subheading mx-auto">
            Comprehensive digital marketing services tailored to drive growth, 
            increase visibility, and generate quality leads for your business.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service) => {
            const colorClasses = getColorClasses(service.color)
            return (
              <Link 
                key={service.title}
                to={service.path}
                className={`card p-5 border-2 border-transparent ${colorClasses.hover} group cursor-pointer block`}
              >
                <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${colorClasses.icon}`} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function DevelopmentServicesSection() {
  const services = [
    {
      icon: Code2,
      title: 'React Development',
      description: 'Build fast, scalable, and interactive web applications with React and modern JavaScript frameworks.',
      features: ['Single Page Apps', 'Next.js', 'TypeScript', 'State Management'],
      color: 'accent',
      path: '/development/react'
    },
    {
      icon: Server,
      title: 'PHP Development',
      description: 'Custom PHP solutions including Laravel, WordPress, and enterprise-level applications.',
      features: ['Laravel', 'WordPress', 'Custom CMS', 'API Development'],
      color: 'primary',
      path: '/development/php'
    },
    {
      icon: Database,
      title: 'Java Development',
      description: 'Robust enterprise applications and backend systems built with Java and Spring Boot.',
      features: ['Spring Boot', 'Microservices', 'Enterprise Apps', 'REST APIs'],
      color: 'secondary',
      path: '/development/java'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'iOS', 'Android'],
      color: 'accent',
      path: '/development/mobile-apps'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['WooCommerce', 'Shopify', 'Custom Stores', 'Payment Gateways'],
      color: 'primary',
      path: '/development/ecommerce'
    },
    {
      icon: Bot,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions and AI-powered tools to streamline your business.',
      features: ['Chatbots', 'Process Automation', 'AI Integration', 'Machine Learning'],
      color: 'secondary',
      path: '/development/ai-automation'
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'End-to-end development services from database design to frontend implementation.',
      features: ['Node.js', 'Python', 'Cloud Deploy', 'DevOps'],
      color: 'accent',
      path: '/development/full-stack'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Custom web applications tailored to your unique business requirements and workflows.',
      features: ['SaaS Platforms', 'Dashboards', 'Portals', 'Admin Panels'],
      color: 'primary',
      path: '/development/web-applications'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: 'bg-primary-100',
        icon: 'text-primary-600',
        hover: 'hover:border-primary-200',
        gradient: 'from-primary-500 to-primary-600'
      },
      secondary: {
        bg: 'bg-secondary-100',
        icon: 'text-secondary-600',
        hover: 'hover:border-secondary-200',
        gradient: 'from-secondary-500 to-secondary-600'
      },
      accent: {
        bg: 'bg-accent-100',
        icon: 'text-accent-600',
        hover: 'hover:border-accent-200',
        gradient: 'from-accent-500 to-accent-600'
      }
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="development-services" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-4">
            <Code2 className="w-4 h-4" />
            <span>Custom Development</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">
            Expert Development{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading mx-auto">
            From concept to deployment, our expert developers build scalable, 
            high-performance applications tailored to your business needs.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const colorClasses = getColorClasses(service.color)
            return (
              <Link 
                key={service.title}
                to={service.path}
                className={`card p-6 border-2 border-transparent ${colorClasses.hover} group cursor-pointer relative overflow-hidden block`}
              >
                {/* Decorative gradient corner */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${colorClasses.gradient} opacity-10 rounded-full group-hover:opacity-20 transition-opacity`} />
                
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={feature} 
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colorClasses.bg} ${colorClasses.icon}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-primary group">
            Discuss Your Project
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: '500+', label: 'Projects Completed', description: 'Successful digital transformations' },
    { value: '98%', label: 'Client Retention', description: 'Our clients keep coming back' },
    { value: '10M+', label: 'Leads Generated', description: 'Quality leads for our clients' },
    { value: '150%', label: 'Average ROI', description: 'Return on marketing investment' }
  ]

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading text-white mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We don't just promise results – we deliver them. Here's proof of our impact.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Let's discuss how Amora Digital can help you achieve your business goals. 
              Book a free strategy call with our experts today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-lg group"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/marketing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-white/70">
              No commitment required. 100% free consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
