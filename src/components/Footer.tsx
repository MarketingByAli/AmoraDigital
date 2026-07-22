import { Link, useLocation } from 'react-router-dom'
import { AMORA_LOGO_LIGHT_URL } from '../branding'
import {
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
  Phone,
  MapPinned,
  ArrowRight,
  Heart
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale, type RouteKey } from '../i18n/routes'
import { UI } from '../i18n/ui'
import { getLiveBranchHubs } from '../data/branches'
import LanguageSwitcher from './LanguageSwitcher'

type FooterServiceItem = {
  key: RouteKey
  icon: typeof Globe
  en: string
  nl: string
}

const marketingServices: FooterServiceItem[] = [
  { key: 'website-design', icon: Globe, en: 'Website Design', nl: 'Webdesign' },
  { key: 'crm-solutions', icon: Users, en: 'CRM Solutions', nl: 'CRM-oplossingen' },
  { key: 'social-media-marketing', icon: Megaphone, en: 'Social Media Marketing', nl: 'Social media marketing' },
  { key: 'paid-advertising', icon: Target, en: 'Paid Advertising', nl: 'Online adverteren' },
  { key: 'seo-services', icon: Search, en: 'SEO Services', nl: 'SEO-diensten' },
  { key: 'ai-seo', icon: Sparkles, en: 'AI SEO', nl: 'AI SEO' },
  { key: 'local-seo', icon: MapPin, en: 'Local SEO', nl: 'Lokale SEO' },
  { key: 'email-marketing', icon: Mail, en: 'Email Marketing', nl: 'E-mailmarketing' },
  { key: 'conversion-optimization', icon: TrendingUp, en: 'Conversion Optimization', nl: 'Conversie-optimalisatie' },
  { key: 'brand-strategy', icon: Palette, en: 'Brand Strategy', nl: 'Merkstrategie' }
]

const developmentServices: FooterServiceItem[] = [
  { key: 'react', icon: Code2, en: 'React Development', nl: 'React Development' },
  { key: 'php', icon: Server, en: 'PHP Development', nl: 'PHP Development' },
  { key: 'java', icon: Database, en: 'Java Development', nl: 'Java Development' },
  { key: 'mobile-apps', icon: Smartphone, en: 'Mobile App Development', nl: 'Mobiele app-ontwikkeling' },
  { key: 'ecommerce', icon: ShoppingCart, en: 'E-Commerce Solutions', nl: 'E-commerce oplossingen' },
  { key: 'ai-automation', icon: Bot, en: 'AI & Automation', nl: 'AI & automatisering' },
  { key: 'full-stack', icon: Layers, en: 'Full-Stack Development', nl: 'Full-stack development' },
  { key: 'web-applications', icon: Globe, en: 'Web Applications', nl: 'Webapplicaties' }
]

const products: Array<Omit<FooterServiceItem, 'icon'>> = [
  { key: 'auto-form-builder', en: 'Auto Form Builder', nl: 'Auto Form Builder' },
  { key: 'auto-form-crm', en: 'Auto Form CRM', nl: 'Auto Form CRM' },
  { key: 'hi-fan', en: 'Hi.Fan', nl: 'Hi.Fan' },
  { key: 'pinkpeck', en: 'PinkPeck', nl: 'PinkPeck' },
  { key: 'unbox-deal', en: 'Unbox.deal', nl: 'Unbox.deal' },
  { key: 'royal-casino-hub', en: 'Royal Casino Hub', nl: 'Royal Casino Hub' }
]

const companyLinks: Array<{ key: 'about' | 'contact' | 'privacy'; en: string; nl: string }> = [
  { key: 'about', en: 'About Us', nl: 'Over ons' },
  { key: 'contact', en: 'Contact', nl: 'Contact' },
  { key: 'privacy', en: 'Privacy Policy', nl: 'Privacybeleid' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const ui = UI[locale]
  const liveHubs = getLiveBranchHubs()

  const tr = (item: { en: string; nl: string }) => (locale === 'nl' ? item.nl : item.en)

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          <div className="lg:col-span-1">
            <Link to={ROUTES.home[locale]} className="inline-flex mb-6" aria-label="Amora Digital">
              <img
                src={AMORA_LOGO_LIGHT_URL}
                alt="Amora Digital"
                className="h-9 w-auto max-h-10 max-w-[200px] sm:max-w-[220px] object-contain object-left"
                width={220}
                height={44}
                decoding="async"
              />
            </Link>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">{ui.footer.tagline}</p>

            <div className="space-y-3">
              <a href="tel:+31625580415" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+31 6 25580415</span>
              </a>
              <a href="mailto:info@amoradigital.nl" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@amoradigital.nl</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <MapPinned className="w-4 h-4" />
                </div>
                <span className="text-sm">{ui.footer.contactKvkLabel}: 99536811</span>
              </div>
              <div className="pt-2">
                <LanguageSwitcher variant="footer" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              {ui.footer.marketing}
            </h3>
            <ul className="space-y-2.5">
              {marketingServices.map((service) => (
                <li key={service.key}>
                  <Link
                    to={ROUTES[service.key][locale]}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <service.icon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{tr(service)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              {ui.footer.development}
            </h3>
            <ul className="space-y-2.5">
              {developmentServices.map((service) => (
                <li key={service.key}>
                  <Link
                    to={ROUTES[service.key][locale]}
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors flex items-center gap-2 group"
                  >
                    <service.icon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{tr(service)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              {ui.footer.industries}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to={ROUTES.branches[locale]}
                  className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                >
                  {ui.footer.viewAllIndustries}
                </Link>
              </li>
              {liveHubs.map((hub) => (
                <li key={hub.routeKey}>
                  <Link
                    to={ROUTES[hub.routeKey][locale]}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {hub.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
              {ui.footer.products}
            </h3>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.key}>
                  <Link
                    to={ROUTES[product.key][locale]}
                    className="text-sm text-slate-400 hover:text-secondary-400 transition-colors"
                  >
                    {tr(product)}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mb-4 mt-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              {ui.footer.company}
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={ROUTES[link.key][locale]}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {tr(link)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
              {ui.footer.letsWork}
            </h3>
            <p className="text-sm text-slate-400 mb-4">{ui.footer.letsWorkBlurb}</p>
            <Link
              to={ROUTES.contact[locale]}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full hover:from-primary-700 hover:to-secondary-600 transition-all shadow-lg shadow-primary-500/25 group"
            >
              {ui.footer.getStarted}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <div className="mt-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-primary-500 border-2 border-slate-900" />
                  <div className="w-6 h-6 rounded-full bg-secondary-500 border-2 border-slate-900" />
                  <div className="w-6 h-6 rounded-full bg-accent-500 border-2 border-slate-900" />
                </div>
                <span className="text-xs text-slate-400">{ui.footer.happyClients}</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-slate-400 ml-1">{ui.footer.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} Amora Digital. {ui.footer.rightsReserved}
            </p>
            <div className="flex items-center gap-6">
              <Link to={ROUTES.privacy[locale]} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                {ui.footer.privacyPolicy}
              </Link>
              <span className="text-slate-700">|</span>
              <p className="text-sm text-slate-500 flex items-center gap-1">
                {ui.footer.madeIn} <Heart className="w-3.5 h-3.5 text-secondary-500 fill-current" aria-hidden /> {locale === 'nl' ? 'in Nederland' : 'in Netherlands'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
