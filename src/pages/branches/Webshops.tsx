import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Megaphone,
  Search,
  ShoppingCart,
  Sparkles
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'
import { BRANCH_SPOKES } from '../../data/branchSpokes'
import BranchSpokeCard from '../../components/BranchSpokeCard'

const SPOKES = BRANCH_SPOKES.webshops
const SPOKE_ICONS = [Globe, Search, Megaphone] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbCurrent: 'Webshops & e-commerce',
    badge: 'E-commerce marketing',
    h1: 'Online marketing for webshops & e-commerce',
    heroSub:
      'We help webshops grow revenue — more qualified traffic, sharper conversion on product and category pages, and a higher return per visitor — across Shopify, WooCommerce, Magento, Lightspeed and similar stacks. With 1,500+ completed projects, we know how online stores compound search demand, feeds and checkout trust instead of chasing a local map pin.',
    trust: '1,500+ completed projects',
    servicesBadge: 'Our services',
    servicesHead: 'What we do for webshops and online stores',
    servicesSub:
      'Growth work built around traffic × conversion × average order value × repeat purchase — not garage APK urgency or accountant intake seasons. Pick a service for the detail.',
    learnMore: 'Learn more',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why online stores choose us',
    whySub:
      'Shoppers compare SKUs nationally, abandon carts on slow mobiles and trust badges, payment methods and return policy before they pay. We plan around catalogue SEO, Shopping feeds and conversion — not Google Business Profile map-pack races for a street catchment.',
    whyItems: [
      {
        title: 'Revenue maths, not vanity visits',
        desc: 'We treat growth as traffic times conversion times order value times repeat buy — so campaigns and pages serve margin, not empty session counts.'
      },
      {
        title: 'Platform-aware catalogue work',
        desc: 'Shopify, WooCommerce, Magento or Lightspeed each shape feeds, templates and checkout. Briefs respect how your catalogue actually ships, not a generic brochure theme.'
      },
      {
        title: 'Product and category search demand',
        desc: 'Organic work targets product and category intent that can rank and convert — distinct from local-service hubs that live or die on “near me” map packs.'
      },
      {
        title: 'Shopping and retention in one brief',
        desc: 'Google Shopping and Performance Max sit next to email retention, reviews and trust signals such as payment clarity and return policy — so paid clicks land in a store that already feels safe to buy.'
      }
    ],
    ctaHeading: 'Ready for traffic that actually turns into orders?',
    ctaSub:
      'Tell us your platform, catalogue size and where revenue leaks today — search, Shopping, mobile checkout or retention. We will sketch how demand, feeds and conversion can work together for your store.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbCurrent: 'Webshops & e-commerce',
    badge: 'E-commerce marketing',
    h1: 'Online marketing voor webshops & e-commerce',
    heroSub:
      'Wij helpen webshops omzet te laten groeien — meer gekwalificeerd verkeer, scherpere conversie op product- en categoriepagina’s, en een hoger rendement per bezoeker — op Shopify, WooCommerce, Magento, Lightspeed en vergelijkbare stacks. Met 1.500+ afgeronde projecten weten we hoe webshops zoekvraag, feeds en checkoutvertrouwen stapelen in plaats van een lokale kaartpin najagen.',
    trust: '1.500+ afgeronde projecten',
    servicesBadge: 'Onze diensten',
    servicesHead: 'Wat we doen voor webshops en online winkels',
    servicesSub:
      'Groeiwerk rond verkeer × conversie × gemiddelde orderwaarde × herhaalaankoop — geen garage-APK-urgentie of accountants-intakeseizoenen. Kies een dienst voor de details.',
    learnMore: 'Meer informatie',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom webshops voor ons kiezen',
    whySub:
      'Shoppers vergelijken SKU’s landelijk, verlaten winkelwagens op trage mobiels en checken badges, betaalmethoden en retourbeleid vóór ze betalen. Wij plannen rond catalogus-SEO, Shopping-feeds en conversie — geen Google Bedrijfsprofiel-map-packrace voor een straatverzorgingsgebied.',
    whyItems: [
      {
        title: 'Omzetrekenkunde, geen vanity-bezoeken',
        desc: 'We behandelen groei als verkeer maal conversie maal orderwaarde maal herhaalaankoop — zodat campagnes en pagina’s marge dienen, geen lege sessietellers.'
      },
      {
        title: 'Platformbewust cataloguswerk',
        desc: 'Shopify, WooCommerce, Magento of Lightspeed vormen feeds, templates en checkout. Briefings respecteren hoe jouw catalogus écht verzendt, geen generiek brochurethema.'
      },
      {
        title: 'Product- en categoriezoekvraag',
        desc: 'Organisch werk mikt op product- en categorie-intentie die kan ranken én converteren — anders dan lokale-diensthubs die leven of sterven op “bij mij”-kaartpacks.'
      },
      {
        title: 'Shopping en retentie in één briefing',
        desc: 'Google Shopping en Performance Max staan naast e-mailretentie, reviews en vertrouwenssignalen zoals betaalhelderheid en retourbeleid — zodat betaalde klikken landen in een winkel die al veilig voelt om te kopen.'
      }
    ],
    ctaHeading: 'Klaar voor verkeer dat écht orders oplevert?',
    ctaSub:
      'Vertel je platform, catalogusgrootte en waar omzet nu weglekt — zoeken, Shopping, mobiele checkout of retentie. We schetsen hoe vraag, feeds en conversie samen kunnen werken voor jouw webshop.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function Webshops() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-8 flex-wrap" aria-label="Breadcrumb">
              <Link to={ROUTES.home[locale]} className="text-white/60 hover:text-white transition-colors">
                {t.crumbHome}
              </Link>
              <span className="text-white/40" aria-hidden>/</span>
              <Link to={ROUTES.branches[locale]} className="text-white/60 hover:text-white transition-colors">
                {t.crumbBranches}
              </Link>
              <span className="text-white/40" aria-hidden>/</span>
              <span className="text-white">{t.crumbCurrent}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <ShoppingCart className="w-4 h-4" aria-hidden />
              <span>{t.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.h1}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">{t.heroSub}</p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/90">
              <Sparkles className="w-4 h-4 text-secondary-300" aria-hidden />
              <span>{t.trust}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Globe className="w-4 h-4" aria-hidden />
              <span>{t.servicesBadge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">{t.servicesHead}</h2>
            <p className="section-subheading mx-auto">{t.servicesSub}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {SPOKES.map((spoke, i) => (
              <BranchSpokeCard
                key={spoke.slug}
                industrySlug="webshops"
                spoke={spoke}
                locale={locale}
                ctaLabel={t.learnMore}
                icon={SPOKE_ICONS[i] ?? Globe}
                variant="hub"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" aria-hidden />
              <span>{t.whyBadge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">{t.whyHead}</h2>
            <p className="section-subheading mx-auto">{t.whySub}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {t.whyItems.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading text-slate-900 mb-4">{t.ctaHeading}</h2>
          <p className="section-subheading mx-auto mb-8">{t.ctaSub}</p>
          <Link to={ROUTES.contact[locale]} className="btn-primary group">
            {t.ctaButton}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  )
}
