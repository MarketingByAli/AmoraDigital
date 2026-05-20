import { Link, useLocation } from 'react-router-dom'
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
import { ROUTES, localeFromPath, type Locale, type RouteKey } from '../i18n/routes'

const T = {
  en: {
    hero: {
      badge: 'Digital Marketing & Custom Development',
      headPre: 'We Build Solutions That ',
      headHighlight: 'Drive Growth',
      sub:
        'From SEO & paid advertising to custom React, PHP, and Java development — we deliver complete digital solutions that generate leads and accelerate your business.',
      tags: ['SEO', 'Paid Ads', 'Web Design', 'React', 'PHP', 'Java', 'AI SEO'],
      ctaPrimary: 'Get Free Consultation',
      ctaSecondary: 'View Our Work',
      stats: {
        projects: 'Projects Delivered',
        satisfaction: 'Client Satisfaction',
        roi: 'ROI Average'
      },
      dashboard: {
        title: 'Growth Dashboard',
        subtitle: 'Real-time results',
        traffic: 'Website Traffic',
        leads: 'Lead Generation',
        revenue: 'Revenue Growth'
      },
      floats: {
        web: 'Web Design',
        seo: 'SEO',
        ai: 'AI SEO',
        social: 'Social',
        react: 'React',
        php: 'PHP',
        java: 'Java',
        paid: 'Paid Ads',
        newLead: 'New Lead!',
        traffic147: '+147% Traffic',
        deployed: 'Code Deployed',
        revUp: 'Revenue Up'
      }
    },
    certificates: {
      badge: 'Certified Experts',
      headPre: 'Industry-Recognized ',
      headHighlight: 'Certifications',
      sub:
        'Our team holds certifications from leading digital marketing institutions, ensuring you get expert-level service backed by proven knowledge.'
    },
    marketing: {
      badge: 'Digital Marketing',
      headPre: 'Marketing Solutions to ',
      headHighlight: 'Grow Your Business',
      sub:
        'Comprehensive digital marketing services tailored to drive growth, increase visibility, and generate quality leads for your business.'
    },
    development: {
      badge: 'Custom Development',
      headPre: 'Expert Development ',
      headHighlight: 'Services',
      sub:
        'From concept to deployment, our expert developers build scalable, high-performance applications tailored to your business needs.',
      cta: 'Discuss Your Project'
    },
    stats: {
      heading: 'Results That Speak for Themselves',
      sub:
        'We don\u2019t just promise results \u2013 we deliver them. Here\u2019s proof of our impact.',
      items: [
        { value: '1500+', label: 'Projects Completed', description: 'Successful digital transformations' },
        { value: '98%', label: 'Client Retention', description: 'Our clients keep coming back' },
        { value: '10M+', label: 'Leads Generated', description: 'Quality leads for our clients' },
        { value: '150%', label: 'Average ROI', description: 'Return on marketing investment' }
      ]
    },
    cta: {
      heading: 'Ready to Transform Your Digital Presence?',
      sub:
        'Let\u2019s discuss how Amora Digital can help you achieve your business goals. Book a free strategy call with our experts today.',
      primary: 'Schedule Free Consultation',
      secondary: 'View Case Studies',
      footnote: 'No commitment required. 100% free consultation.'
    }
  },
  nl: {
    hero: {
      badge: 'Digitale marketing & softwareontwikkeling op maat',
      headPre: 'Wij bouwen oplossingen die ',
      headHighlight: 'groei aanjagen',
      sub:
        'Van SEO en online adverteren tot maatwerk React-, PHP- en Java-development \u2014 we leveren complete digitale oplossingen die leads opleveren en je business versnellen.',
      tags: ['SEO', 'Online adverteren', 'Webdesign', 'React', 'PHP', 'Java', 'AI SEO'],
      ctaPrimary: 'Gratis adviesgesprek',
      ctaSecondary: 'Bekijk ons werk',
      stats: {
        projects: 'Projecten opgeleverd',
        satisfaction: 'Klanttevredenheid',
        roi: 'Gemiddelde ROI'
      },
      dashboard: {
        title: 'Groei-dashboard',
        subtitle: 'Realtime resultaten',
        traffic: 'Websiteverkeer',
        leads: 'Leadgeneratie',
        revenue: 'Omzetgroei'
      },
      floats: {
        web: 'Webdesign',
        seo: 'SEO',
        ai: 'AI SEO',
        social: 'Social',
        react: 'React',
        php: 'PHP',
        java: 'Java',
        paid: 'Adverteren',
        newLead: 'Nieuwe lead!',
        traffic147: '+147% verkeer',
        deployed: 'Code live',
        revUp: 'Omzet stijgt'
      }
    },
    certificates: {
      badge: 'Gecertificeerde experts',
      headPre: 'Internationaal erkende ',
      headHighlight: 'certificeringen',
      sub:
        'Ons team is gecertificeerd door toonaangevende marketinginstituten, zodat je expertise krijgt onderbouwd door bewezen kennis.'
    },
    marketing: {
      badge: 'Digitale marketing',
      headPre: 'Marketingoplossingen om je ',
      headHighlight: 'bedrijf te laten groeien',
      sub:
        'Complete digitale marketingdiensten, afgestemd op groei, meer zichtbaarheid en kwalitatieve leads voor jouw bedrijf.'
    },
    development: {
      badge: 'Softwareontwikkeling op maat',
      headPre: 'Expert ',
      headHighlight: 'softwareontwikkeling',
      sub:
        'Van concept tot livegang \u2014 onze ontwikkelaars bouwen schaalbare, performante applicaties op maat van jouw bedrijf.',
      cta: 'Bespreek je project'
    },
    stats: {
      heading: 'Resultaten die voor zich spreken',
      sub:
        'We beloven geen resultaten \u2013 we leveren ze. Hieronder het bewijs van onze impact.',
      items: [
        { value: '1500+', label: 'Projecten afgerond', description: 'Succesvolle digitale transformaties' },
        { value: '98%', label: 'Klantretentie', description: 'Onze klanten blijven terugkomen' },
        { value: '10M+', label: 'Gegenereerde leads', description: 'Kwalitatieve leads voor onze klanten' },
        { value: '150%', label: 'Gemiddelde ROI', description: 'Rendement op marketinginvestering' }
      ]
    },
    cta: {
      heading: 'Klaar om je digitale aanwezigheid te transformeren?',
      sub:
        'Laten we bespreken hoe Amora Digital je doelen helpt bereiken. Plan vandaag nog een gratis strategiegesprek met onze experts.',
      primary: 'Plan een gratis adviesgesprek',
      secondary: 'Bekijk cases',
      footnote: 'Geen verplichtingen. 100% gratis adviesgesprek.'
    }
  }
} as const

type ServiceCard = {
  key: RouteKey
  title: { en: string; nl: string }
  description: { en: string; nl: string }
  features: { en: string[]; nl: string[] }
  color: 'primary' | 'secondary' | 'accent'
  icon: typeof Globe
}

const MARKETING_CARDS: ServiceCard[] = [
  {
    key: 'website-design',
    icon: Globe,
    color: 'primary',
    title: { en: 'Website Design', nl: 'Webdesign' },
    description: {
      en: 'Stunning, conversion-focused websites that captivate visitors and turn them into customers.',
      nl: 'Indrukwekkende, conversiegerichte websites die bezoekers boeien en omzetten in klanten.'
    },
    features: {
      en: ['Custom Design', 'Mobile-First', 'Lightning Fast'],
      nl: ['Maatwerk ontwerp', 'Mobile-first', 'Razendsnel']
    }
  },
  {
    key: 'crm-solutions',
    icon: Users,
    color: 'secondary',
    title: { en: 'CRM Solutions', nl: 'CRM-oplossingen' },
    description: {
      en: 'Streamline your customer relationships with powerful, easy-to-use CRM integrations.',
      nl: 'Stroomlijn je klantrelaties met krachtige, gebruiksvriendelijke CRM-koppelingen.'
    },
    features: {
      en: ['Lead Tracking', 'Automation', 'Analytics'],
      nl: ['Lead-tracking', 'Automatisering', 'Analytics']
    }
  },
  {
    key: 'social-media-marketing',
    icon: Megaphone,
    color: 'accent',
    title: { en: 'Social Media Marketing', nl: 'Social media marketing' },
    description: {
      en: 'Build your brand presence and engage your audience across all social platforms.',
      nl: 'Bouw je merkaanwezigheid en betrek je publiek op alle social platformen.'
    },
    features: {
      en: ['Content Strategy', 'Community Management', 'Growth Hacking'],
      nl: ['Contentstrategie', 'Community management', 'Growth hacking']
    }
  },
  {
    key: 'paid-advertising',
    icon: Target,
    color: 'primary',
    title: { en: 'Paid Advertising', nl: 'Online adverteren' },
    description: {
      en: 'Maximize ROI with data-driven PPC campaigns across Google, Facebook, and more.',
      nl: 'Maximaliseer ROI met datagedreven PPC-campagnes op Google, Facebook en meer.'
    },
    features: {
      en: ['Google Ads', 'Meta Ads', 'Retargeting'],
      nl: ['Google Ads', 'Meta Ads', 'Retargeting']
    }
  },
  {
    key: 'seo-services',
    icon: Search,
    color: 'secondary',
    title: { en: 'SEO Services', nl: 'SEO-diensten' },
    description: {
      en: 'Dominate search rankings with our proven SEO strategies and expert optimization.',
      nl: 'Scoor bovenaan in Google met bewezen SEO-strategieën en expertoptimalisatie.'
    },
    features: {
      en: ['On-Page SEO', 'Link Building', 'Technical SEO'],
      nl: ['On-page SEO', 'Linkbuilding', 'Technische SEO']
    }
  },
  {
    key: 'ai-seo',
    icon: Sparkles,
    color: 'accent',
    title: { en: 'AI SEO', nl: 'AI SEO' },
    description: {
      en: 'Leverage cutting-edge AI technology to supercharge your search engine performance.',
      nl: 'Zet de nieuwste AI-technologie in om je zoekresultaten flink te versterken.'
    },
    features: {
      en: ['AI Content', 'Predictive Analytics', 'Smart Optimization'],
      nl: ['AI-content', 'Predictive analytics', 'Slimme optimalisatie']
    }
  },
  {
    key: 'local-seo',
    icon: MapPin,
    color: 'primary',
    title: { en: 'Local SEO', nl: 'Lokale SEO' },
    description: {
      en: 'Get found by local customers with targeted local search optimization strategies.',
      nl: 'Word gevonden door lokale klanten met gerichte lokale SEO-strategieën.'
    },
    features: {
      en: ['Google Business Profile', 'Local Citations', 'Review Management'],
      nl: ['Google-bedrijfsprofiel', 'Lokale vermeldingen', 'Reviewbeheer']
    }
  },
  {
    key: 'email-marketing',
    icon: Mail,
    color: 'secondary',
    title: { en: 'Email Marketing', nl: 'E-mailmarketing' },
    description: {
      en: 'Nurture leads and boost conversions with targeted email campaigns that deliver results.',
      nl: 'Houd leads warm en verhoog conversies met gerichte e-mailcampagnes die resultaat leveren.'
    },
    features: {
      en: ['Campaign Strategy', 'Automation', 'A/B Testing'],
      nl: ['Campagnestrategie', 'Automatisering', 'A/B-testing']
    }
  },
  {
    key: 'conversion-optimization',
    icon: TrendingUp,
    color: 'accent',
    title: { en: 'Conversion Optimization', nl: 'Conversie-optimalisatie' },
    description: {
      en: 'Turn more visitors into customers with data-driven CRO strategies and testing.',
      nl: 'Zet meer bezoekers om in klanten met datagedreven CRO-strategieën en testing.'
    },
    features: {
      en: ['Landing Pages', 'User Research', 'Funnel Optimization'],
      nl: ['Landingspagina\u2019s', 'Gebruikersonderzoek', 'Funnel-optimalisatie']
    }
  },
  {
    key: 'brand-strategy',
    icon: Palette,
    color: 'primary',
    title: { en: 'Brand Strategy', nl: 'Merkstrategie' },
    description: {
      en: 'Build a powerful brand identity that resonates with your target audience.',
      nl: 'Bouw een sterke merkidentiteit die aansluit bij je doelgroep.'
    },
    features: {
      en: ['Brand Identity', 'Visual Design', 'Brand Guidelines'],
      nl: ['Merkidentiteit', 'Visueel ontwerp', 'Merkrichtlijnen']
    }
  }
]

const DEVELOPMENT_CARDS: ServiceCard[] = [
  {
    key: 'react',
    icon: Code2,
    color: 'accent',
    title: { en: 'React Development', nl: 'React Development' },
    description: {
      en: 'Build fast, scalable, and interactive web applications with React and modern JavaScript frameworks.',
      nl: 'Bouw snelle, schaalbare en interactieve webapplicaties met React en moderne JavaScript-frameworks.'
    },
    features: {
      en: ['Single Page Apps', 'Next.js', 'TypeScript', 'State Management'],
      nl: ["Single page apps", 'Next.js', 'TypeScript', 'State management']
    }
  },
  {
    key: 'php',
    icon: Server,
    color: 'primary',
    title: { en: 'PHP Development', nl: 'PHP Development' },
    description: {
      en: 'Custom PHP solutions including Laravel, WordPress, and enterprise-level applications.',
      nl: 'Maatwerk PHP-oplossingen, inclusief Laravel, WordPress en enterprise-applicaties.'
    },
    features: {
      en: ['Laravel', 'WordPress', 'Custom CMS', 'API Development'],
      nl: ['Laravel', 'WordPress', 'Maatwerk CMS', 'API-ontwikkeling']
    }
  },
  {
    key: 'java',
    icon: Database,
    color: 'secondary',
    title: { en: 'Java Development', nl: 'Java Development' },
    description: {
      en: 'Robust enterprise applications and backend systems built with Java and Spring Boot.',
      nl: 'Robuuste enterprise-applicaties en backendsystemen, gebouwd met Java en Spring Boot.'
    },
    features: {
      en: ['Spring Boot', 'Microservices', 'Enterprise Apps', 'REST APIs'],
      nl: ['Spring Boot', 'Microservices', 'Enterprise apps', "REST API's"]
    }
  },
  {
    key: 'mobile-apps',
    icon: Smartphone,
    color: 'accent',
    title: { en: 'Mobile App Development', nl: 'Mobiele app-ontwikkeling' },
    description: {
      en: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      nl: 'Native en cross-platform mobiele apps voor iOS en Android.'
    },
    features: {
      en: ['React Native', 'Flutter', 'iOS', 'Android'],
      nl: ['React Native', 'Flutter', 'iOS', 'Android']
    }
  },
  {
    key: 'ecommerce',
    icon: ShoppingCart,
    color: 'primary',
    title: { en: 'E-Commerce Solutions', nl: 'E-commerce oplossingen' },
    description: {
      en: 'Complete e-commerce platforms with payment integration and inventory management.',
      nl: 'Complete e-commerceplatformen met betaalintegraties en voorraadbeheer.'
    },
    features: {
      en: ['WooCommerce', 'Shopify', 'Custom Stores', 'Payment Gateways'],
      nl: ['WooCommerce', 'Shopify', 'Maatwerk webshops', 'Betaalproviders']
    }
  },
  {
    key: 'ai-automation',
    icon: Bot,
    color: 'secondary',
    title: { en: 'AI & Automation', nl: 'AI & automatisering' },
    description: {
      en: 'Intelligent automation solutions and AI-powered tools to streamline your business.',
      nl: 'Slimme automatisering en AI-tools om je bedrijfsprocessen te stroomlijnen.'
    },
    features: {
      en: ['Chatbots', 'Process Automation', 'AI Integration', 'Machine Learning'],
      nl: ['Chatbots', 'Procesautomatisering', 'AI-integratie', 'Machine learning']
    }
  },
  {
    key: 'full-stack',
    icon: Layers,
    color: 'accent',
    title: { en: 'Full-Stack Development', nl: 'Full-stack development' },
    description: {
      en: 'End-to-end development services from database design to frontend implementation.',
      nl: 'End-to-end ontwikkeling van databaseontwerp tot frontend-implementatie.'
    },
    features: {
      en: ['Node.js', 'Python', 'Cloud Deploy', 'DevOps'],
      nl: ['Node.js', 'Python', 'Cloud deploy', 'DevOps']
    }
  },
  {
    key: 'web-applications',
    icon: Globe,
    color: 'primary',
    title: { en: 'Web Applications', nl: 'Webapplicaties' },
    description: {
      en: 'Custom web applications tailored to your unique business requirements and workflows.',
      nl: 'Maatwerk webapplicaties afgestemd op jouw bedrijfsbehoeften en workflows.'
    },
    features: {
      en: ['SaaS Platforms', 'Dashboards', 'Portals', 'Admin Panels'],
      nl: ['SaaS-platformen', 'Dashboards', 'Portalen', 'Admin panels']
    }
  }
]

export default function HomePage() {
  const { pathname } = useLocation()
  const locale = localeFromPath(pathname)
  return (
    <>
      <HeroSection locale={locale} />
      <CertificatesSection locale={locale} />
      <MarketingServicesSection locale={locale} />
      <DevelopmentServicesSection locale={locale} />
      <StatsSection locale={locale} />
      <CTASection locale={locale} />
    </>
  )
}

function HeroSection({ locale }: { locale: Locale }) {
  const t = T[locale].hero
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-secondary-200/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 right-1/3 w-[300px] h-[300px] bg-accent-200/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" aria-hidden />
              <span>{t.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              {t.headPre}
              <span className="gradient-text">{t.headHighlight}</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 text-balance">
              {t.sub}
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {t.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to={ROUTES.contact[locale]} className="btn-primary group">
                {t.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
              </Link>
              <Link to={ROUTES['auto-form-builder'][locale]} className="btn-secondary">
                {t.ctaSecondary}
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">1500+</div>
                <div className="text-sm text-slate-500">{t.stats.projects}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-500">{t.stats.satisfaction}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">10x</div>
                <div className="text-sm text-slate-500">{t.stats.roi}</div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[550px] hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 rounded-full blur-3xl opacity-40 animate-pulse-slow" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 w-72">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{t.dashboard.title}</div>
                    <div className="text-sm text-slate-500">{t.dashboard.subtitle}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-slate-600">{t.dashboard.traffic}</span>
                    <span className="text-sm font-bold text-green-600">+147%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                    <span className="text-sm text-slate-600">{t.dashboard.leads}</span>
                    <span className="text-sm font-bold text-primary-600">+89%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-sm text-slate-600">{t.dashboard.revenue}</span>
                    <span className="text-sm font-bold text-secondary-600">+234%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 left-1/4 animate-float z-20" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('primary')} flex items-center justify-center shadow-md`}>
                  <Globe className="w-4 h-4 text-white" aria-hidden />
                </div>
                <span className="text-xs font-medium text-slate-700">{t.floats.web}</span>
              </div>
            </div>

            <div className="absolute top-8 right-1/4 animate-float z-20" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('secondary')} flex items-center justify-center shadow-md`}>
                  <Search className="w-4 h-4 text-white" aria-hidden />
                </div>
                <span className="text-xs font-medium text-slate-700">{t.floats.seo}</span>
              </div>
            </div>

            <div className="absolute top-1/3 -left-2 animate-float z-20" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('accent')} flex items-center justify-center shadow-md`}>
                  <Bot className="w-4 h-4 text-white" aria-hidden />
                </div>
                <span className="text-xs font-medium text-slate-700">{t.floats.ai}</span>
              </div>
            </div>

            <div className="absolute bottom-1/3 -left-4 animate-float z-20" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('primary')} flex items-center justify-center shadow-md`}>
                  <Megaphone className="w-4 h-4 text-white" aria-hidden />
                </div>
                <span className="text-xs font-medium text-slate-700">{t.floats.social}</span>
              </div>
            </div>

            <div className="absolute top-1/3 -right-2 animate-float z-20" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('accent')} flex items-center justify-center shadow-md`}>
                  <Code2 className="w-4 h-4 text-white" aria-hidden />
                </div>
                <span className="text-xs font-medium text-slate-700">{t.floats.react}</span>
              </div>
            </div>

            <div className="absolute bottom-1/3 -right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('primary')} flex items-center justify-center shadow-md`}>
                  <Server className="w-4 h-4 text-white" aria-hidden />
                </div>
                <span className="text-xs font-medium text-slate-700">{t.floats.php}</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/4 animate-float z-20" style={{ animationDelay: '1.8s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('secondary')} flex items-center justify-center shadow-md`}>
                  <Database className="w-4 h-4 text-white" aria-hidden />
                </div>
                <span className="text-xs font-medium text-slate-700">{t.floats.java}</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-1/4 animate-float z-20" style={{ animationDelay: '2.1s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorClasses('accent')} flex items-center justify-center shadow-md`}>
                  <Target className="w-4 h-4 text-white" aria-hidden />
                </div>
                <span className="text-xs font-medium text-slate-700">{t.floats.paid}</span>
              </div>
            </div>

            <div className="absolute top-0 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-green-100 border border-green-200 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-green-700">{t.floats.newLead}</span>
              </div>
            </div>

            <div className="absolute top-0 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary-100 border border-primary-200 shadow-lg">
                <Zap className="w-3 h-3 text-primary-600" aria-hidden />
                <span className="text-xs font-medium text-primary-700">{t.floats.traffic147}</span>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 animate-float z-20" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-accent-100 border border-accent-200 shadow-lg">
                <Code2 className="w-3 h-3 text-accent-600" aria-hidden />
                <span className="text-xs font-medium text-accent-700">{t.floats.deployed}</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 animate-float z-20" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary-100 border border-secondary-200 shadow-lg">
                <TrendingUp className="w-3 h-3 text-secondary-600" aria-hidden />
                <span className="text-xs font-medium text-secondary-700">{t.floats.revUp}</span>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex justify-center">
            <div className="grid grid-cols-4 gap-3">
              {[Globe, Search, Code2, Server, Database, Target, Megaphone, Bot].map((Icon, index) => (
                <div key={index} className="w-14 h-14 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-600" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CertificatesSection({ locale }: { locale: Locale }) {
  const t = T[locale].certificates
  const certificates = [
    { src: 'https://amoradigital.nl/asset/EMMC-227x300-1.png', alt: 'Email Marketing Master Certification' },
    { src: 'https://amoradigital.nl/asset/ECM-compressor-227x300-1.png', alt: 'E-Commerce Marketing Certification' },
    { src: 'https://amoradigital.nl/asset/CVOAli-compressor-227x300-1.png', alt: 'Customer Value Optimization Certification' },
    { src: 'https://amoradigital.nl/asset/Copywriting-compressor-1-227x300-1.png', alt: 'Copywriting Certification' },
    { src: 'https://amoradigital.nl/asset/Community-compressor-227x300-1.png', alt: 'Community Management Certification' },
    { src: 'https://amoradigital.nl/asset/CMS-compressor-227x300-1.png', alt: 'Content Marketing Certification' },
    { src: 'https://amoradigital.nl/asset/casc-compressor-231x300-1.png', alt: 'Content & Social Certification' },
    { src: 'https://amoradigital.nl/asset/smsc-compressor-230x300-1.png', alt: 'Social Media Certification' }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 via-white to-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <Award className="w-4 h-4" aria-hidden />
            <span>{t.badge}</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">
            {t.headPre}
            <span className="gradient-text">{t.headHighlight}</span>
          </h2>
          <p className="section-subheading mx-auto">{t.sub}</p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="group">
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

function ServicesGrid({ cards, locale, columns, gridSize }: { cards: ServiceCard[]; locale: Locale; columns: 'marketing' | 'development'; gridSize: string }) {
  const getColorClasses = (color: string) => {
    const colors = {
      primary: { bg: 'bg-primary-100', icon: 'text-primary-600', hover: 'hover:border-primary-200', gradient: 'from-primary-500 to-primary-600' },
      secondary: { bg: 'bg-secondary-100', icon: 'text-secondary-600', hover: 'hover:border-secondary-200', gradient: 'from-secondary-500 to-secondary-600' },
      accent: { bg: 'bg-accent-100', icon: 'text-accent-600', hover: 'hover:border-accent-200', gradient: 'from-accent-500 to-accent-600' }
    }
    return colors[color as keyof typeof colors]
  }

  if (columns === 'marketing') {
    return (
      <div className={gridSize}>
        {cards.map((service) => {
          const c = getColorClasses(service.color)
          return (
            <Link
              key={service.key}
              to={ROUTES[service.key][locale]}
              className={`card p-5 border-2 border-transparent ${c.hover} group cursor-pointer block`}
            >
              <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-6 h-6 ${c.icon}`} aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{service.title[locale]}</h3>
              <p className="text-slate-600 text-sm mb-3 line-clamp-2">{service.description[locale]}</p>
              <ul className="space-y-1.5">
                {service.features[locale].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Link>
          )
        })}
      </div>
    )
  }

  return (
    <div className={gridSize}>
      {cards.map((service) => {
        const c = getColorClasses(service.color)
        return (
          <Link
            key={service.key}
            to={ROUTES[service.key][locale]}
            className={`card p-6 border-2 border-transparent ${c.hover} group cursor-pointer relative overflow-hidden block`}
          >
            <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${c.gradient} opacity-10 rounded-full group-hover:opacity-20 transition-opacity`} />
            <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
              <service.icon className="w-7 h-7 text-white" aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title[locale]}</h3>
            <p className="text-slate-600 text-sm mb-4">{service.description[locale]}</p>
            <div className="flex flex-wrap gap-2">
              {service.features[locale].map((feature) => (
                <span key={feature} className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${c.bg} ${c.icon}`}>
                  {feature}
                </span>
              ))}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

function MarketingServicesSection({ locale }: { locale: Locale }) {
  const t = T[locale].marketing
  return (
    <section id="marketing-services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" aria-hidden />
            <span>{t.badge}</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">
            {t.headPre}
            <span className="gradient-text">{t.headHighlight}</span>
          </h2>
          <p className="section-subheading mx-auto">{t.sub}</p>
        </div>
        <ServicesGrid cards={MARKETING_CARDS} locale={locale} columns="marketing" gridSize="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5" />
      </div>
    </section>
  )
}

function DevelopmentServicesSection({ locale }: { locale: Locale }) {
  const t = T[locale].development
  return (
    <section id="development-services" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-4">
            <Code2 className="w-4 h-4" aria-hidden />
            <span>{t.badge}</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">
            {t.headPre}
            <span className="gradient-text">{t.headHighlight}</span>
          </h2>
          <p className="section-subheading mx-auto">{t.sub}</p>
        </div>
        <ServicesGrid cards={DEVELOPMENT_CARDS} locale={locale} columns="development" gridSize="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" />

        <div className="mt-12 text-center">
          <Link to={ROUTES.contact[locale]} className="btn-primary group">
            {t.cta}
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}

function StatsSection({ locale }: { locale: Locale }) {
  const t = T[locale].stats
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading text-white mb-4">{t.heading}</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 gradient-text">{stat.value}</div>
              <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection({ locale }: { locale: Locale }) {
  const t = T[locale].cta
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t.heading}</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={ROUTES.contact[locale]}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-lg group"
              >
                {t.primary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
              </Link>
              <Link
                to={ROUTES.marketing[locale]}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                {t.secondary}
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/70">{t.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
