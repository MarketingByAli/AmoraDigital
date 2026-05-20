import { useState, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AMORA_LOGO_URL } from '../branding'
import {
  ChevronDown,
  Globe,
  Users,
  Megaphone,
  Target,
  Search,
  Sparkles,
  MapPin,
  Mail,
  TrendingUp,
  Palette,
  Code2,
  Database,
  Smartphone,
  Server,
  ShoppingCart,
  Bot,
  Layers,
  ArrowRight,
  Menu,
  X,
  Zap,
  FileText,
  Heart,
  Feather,
  Package,
  Crown
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale, type RouteKey } from '../i18n/routes'
import { UI } from '../i18n/ui'
import LanguageSwitcher from './LanguageSwitcher'

type NavItem = {
  icon: typeof Globe
  name: string
  description: string
  key: RouteKey
}

const marketingItems = (locale: Locale): NavItem[] => {
  const en: Array<Omit<NavItem, 'description'> & { en: string; nl: string }> = [
    { icon: Globe, name: 'Website Design', key: 'website-design', en: 'Conversion-focused websites', nl: 'Conversiegerichte websites' },
    { icon: Users, name: 'CRM Solutions', key: 'crm-solutions', en: 'Customer relationship management', nl: 'Klantrelatiebeheer' },
    { icon: Megaphone, name: 'Social Media Marketing', key: 'social-media-marketing', en: 'Build your brand presence', nl: 'Bouw je merkaanwezigheid' },
    { icon: Target, name: 'Paid Advertising', key: 'paid-advertising', en: 'Google & Meta Ads', nl: 'Google & Meta Ads' },
    { icon: Search, name: 'SEO Services', key: 'seo-services', en: 'Dominate search rankings', nl: 'Bovenaan in zoekresultaten' },
    { icon: Sparkles, name: 'AI SEO', key: 'ai-seo', en: 'AI-powered optimization', nl: 'Optimalisatie met AI' },
    { icon: MapPin, name: 'Local SEO', key: 'local-seo', en: 'Get found locally', nl: 'Word lokaal gevonden' },
    { icon: Mail, name: 'Email Marketing', key: 'email-marketing', en: 'Nurture leads effectively', nl: 'Leads effectief opvolgen' },
    { icon: TrendingUp, name: 'Conversion Optimization', key: 'conversion-optimization', en: 'Turn visitors into customers', nl: 'Bezoekers omzetten in klanten' },
    { icon: Palette, name: 'Brand Strategy', key: 'brand-strategy', en: 'Build powerful brand identity', nl: 'Sterke merkidentiteit bouwen' }
  ]
  const nlNames: Record<RouteKey, string> = {
    'website-design': 'Webdesign',
    'crm-solutions': 'CRM-oplossingen',
    'social-media-marketing': 'Social media marketing',
    'paid-advertising': 'Online adverteren',
    'seo-services': 'SEO-diensten',
    'ai-seo': 'AI SEO',
    'local-seo': 'Lokale SEO',
    'email-marketing': 'E-mailmarketing',
    'conversion-optimization': 'Conversie-optimalisatie',
    'brand-strategy': 'Merkstrategie'
  } as Record<RouteKey, string>
  return en.map((item) => ({
    icon: item.icon,
    name: locale === 'nl' ? nlNames[item.key] ?? item.name : item.name,
    description: locale === 'nl' ? item.nl : item.en,
    key: item.key
  }))
}

const developmentItems = (locale: Locale): NavItem[] => {
  const en: Array<Omit<NavItem, 'description'> & { en: string; nl: string }> = [
    { icon: Code2, name: 'React Development', key: 'react', en: 'Modern web applications', nl: 'Moderne webapplicaties' },
    { icon: Server, name: 'PHP Development', key: 'php', en: 'Laravel, WordPress & more', nl: 'Laravel, WordPress & meer' },
    { icon: Database, name: 'Java Development', key: 'java', en: 'Enterprise solutions', nl: 'Enterprise oplossingen' },
    { icon: Smartphone, name: 'Mobile App Development', key: 'mobile-apps', en: 'iOS & Android apps', nl: 'iOS- & Android-apps' },
    { icon: ShoppingCart, name: 'E-Commerce Solutions', key: 'ecommerce', en: 'Online stores & payments', nl: 'Webshops & betalingen' },
    { icon: Bot, name: 'AI & Automation', key: 'ai-automation', en: 'Intelligent solutions', nl: 'Slimme oplossingen' },
    { icon: Layers, name: 'Full-Stack Development', key: 'full-stack', en: 'End-to-end development', nl: 'End-to-end ontwikkeling' },
    { icon: Globe, name: 'Web Applications', key: 'web-applications', en: 'Custom SaaS & portals', nl: 'Maatwerk SaaS & portalen' }
  ]
  const nlNames: Record<string, string> = {
    'mobile-apps': 'Mobiele apps',
    ecommerce: 'E-commerce',
    'ai-automation': 'AI & automatisering',
    'full-stack': 'Full-stack development',
    'web-applications': 'Webapplicaties'
  }
  return en.map((item) => ({
    icon: item.icon,
    name: locale === 'nl' ? nlNames[item.key] ?? item.name : item.name,
    description: locale === 'nl' ? item.nl : item.en,
    key: item.key
  }))
}

const productItems = (locale: Locale): NavItem[] => {
  const en: Array<Omit<NavItem, 'description'> & { en: string; nl: string }> = [
    { icon: FileText, name: 'Auto Form Builder', key: 'auto-form-builder', en: 'Create forms effortlessly', nl: 'Maak moeiteloos formulieren' },
    { icon: Users, name: 'Auto Form CRM', key: 'auto-form-crm', en: 'Manage leads automatically', nl: 'Leads automatisch beheren' },
    { icon: Heart, name: 'Hi.Fan', key: 'hi-fan', en: 'Fan engagement platform', nl: 'Fan engagement platform' },
    { icon: Feather, name: 'PinkPeck', key: 'pinkpeck', en: 'Content creation tool', nl: 'Tool voor contentcreatie' },
    { icon: Package, name: 'Unbox.deal', key: 'unbox-deal', en: 'Unboxing deals at 50% off', nl: 'Aanbiedingen tot 50% korting' },
    { icon: Crown, name: 'Royal Casino Hub', key: 'royal-casino-hub', en: 'Casino reviews & industry news', nl: 'Casinoreviews & branchenieuws' }
  ]
  return en.map((item) => ({
    icon: item.icon,
    name: item.name,
    description: locale === 'nl' ? item.nl : item.en,
    key: item.key
  }))
}

export default function Header() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const ui = UI[locale]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const marketingServices = useMemo(() => marketingItems(locale), [locale])
  const developmentServices = useMemo(() => developmentItems(locale), [locale])
  const products = useMemo(() => productItems(locale), [locale])

  const homePath = ROUTES.home[locale]
  const marketingPath = ROUTES.marketing[locale]
  const developmentPath = ROUTES.development[locale]
  const contactPath = ROUTES.contact[locale]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to={homePath} className="flex items-center" aria-label="Amora Digital">
              <img
                src={AMORA_LOGO_URL}
                alt="Amora Digital"
                className="h-9 w-auto max-h-10 sm:h-10 sm:max-h-11 max-w-[160px] sm:max-w-[200px] md:max-w-[220px] object-contain object-left"
                width={220}
                height={44}
                decoding="async"
                fetchPriority="high"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('marketing')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to={marketingPath} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
                {ui.nav.marketing}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'marketing' ? 'rotate-180' : ''}`} />
              </Link>

              {activeDropdown === 'marketing' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-[600px] animate-fade-in">
                    <Link to={marketingPath} className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-100 hover:opacity-80 transition-opacity">
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{ui.nav.marketing}</h3>
                        <p className="text-xs text-slate-500">{ui.nav.marketingTagline}</p>
                      </div>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      {marketingServices.map((service) => (
                        <Link
                          key={service.key}
                          to={ROUTES[service.key][locale]}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900 group-hover:text-primary-600 transition-colors">{service.name}</div>
                            <div className="text-xs text-slate-500">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('development')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to={developmentPath} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
                {ui.nav.development}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'development' ? 'rotate-180' : ''}`} />
              </Link>

              {activeDropdown === 'development' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-[550px] animate-fade-in">
                    <Link to={developmentPath} className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-100 hover:opacity-80 transition-opacity">
                      <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-accent-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{ui.nav.development}</h3>
                        <p className="text-xs text-slate-500">{ui.nav.developmentTagline}</p>
                      </div>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      {developmentServices.map((service) => (
                        <Link
                          key={service.key}
                          to={ROUTES[service.key][locale]}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900 group-hover:text-accent-600 transition-colors">{service.name}</div>
                            <div className="text-xs text-slate-500">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
                {ui.nav.products}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-72 animate-fade-in">
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
                      <div className="w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-secondary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{ui.nav.productsHeading}</h3>
                        <p className="text-xs text-slate-500">{ui.nav.productsSubheading}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {products.map((product) => (
                        <Link
                          key={product.key}
                          to={ROUTES[product.key][locale]}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <product.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900 group-hover:text-secondary-600 transition-colors">{product.name}</div>
                            <div className="text-xs text-slate-500">{product.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              to={contactPath}
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full hover:from-primary-700 hover:to-secondary-600 transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
            >
              {ui.nav.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100 animate-fade-in">
            <div className="px-4 pb-3 flex items-center justify-end">
              <LanguageSwitcher />
            </div>
            <div className="mb-2">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'marketing-mobile' ? null : 'marketing-mobile')}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {ui.nav.marketing}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'marketing-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'marketing-mobile' && (
                <div className="ml-4 mt-2 space-y-1">
                  {marketingServices.map((service) => (
                    <Link key={service.key} to={ROUTES[service.key][locale]} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      <service.icon className="w-4 h-4" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-2">
              <div className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg">
                <Link to={developmentPath} onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-600">
                  {ui.nav.development}
                </Link>
                <button onClick={() => setActiveDropdown(activeDropdown === 'development-mobile' ? null : 'development-mobile')} aria-label="Toggle">
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'development-mobile' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {activeDropdown === 'development-mobile' && (
                <div className="ml-4 mt-2 space-y-1">
                  {developmentServices.map((service) => (
                    <Link key={service.key} to={ROUTES[service.key][locale]} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-accent-600 hover:bg-slate-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      <service.icon className="w-4 h-4" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-4">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'products-mobile' ? null : 'products-mobile')}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {ui.nav.products}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'products-mobile' && (
                <div className="ml-4 mt-2 space-y-1">
                  {products.map((product) => (
                    <Link key={product.key} to={ROUTES[product.key][locale]} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-secondary-600 hover:bg-slate-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      <product.icon className="w-4 h-4" />
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 pt-4 border-t border-slate-100">
              <Link
                to={contactPath}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                {ui.nav.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
