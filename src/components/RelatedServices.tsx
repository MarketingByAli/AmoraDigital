import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ROUTES, localeFromPath, getRouteKey, type Locale, type RouteKey } from '../i18n/routes'
import { UI } from '../i18n/ui'

type ServiceMeta = {
  key: RouteKey
  name: { en: string; nl: string }
  description: { en: string; nl: string }
}

const SERVICES: ServiceMeta[] = [
  {
    key: 'seo-services',
    name: { en: 'SEO Services', nl: 'SEO-diensten' },
    description: {
      en: 'Rank higher in Google with technical and on-page SEO.',
      nl: 'Hoger scoren in Google met technische en on-page SEO.'
    }
  },
  {
    key: 'ai-seo',
    name: { en: 'AI SEO', nl: 'AI SEO' },
    description: {
      en: 'Get cited by ChatGPT, Perplexity and Google AI Overviews.',
      nl: 'Word geciteerd door ChatGPT, Perplexity en Google AI Overviews.'
    }
  },
  {
    key: 'local-seo',
    name: { en: 'Local SEO', nl: 'Lokale SEO' },
    description: {
      en: 'Dominate Google Maps and local "near me" searches.',
      nl: 'Domineer Google Maps en lokale "in de buurt"-zoekopdrachten.'
    }
  },
  {
    key: 'paid-advertising',
    name: { en: 'Paid Advertising', nl: 'Online adverteren' },
    description: {
      en: 'ROI-driven Google Ads, Meta Ads and retargeting.',
      nl: 'Op ROI gerichte Google Ads, Meta Ads en retargeting.'
    }
  },
  {
    key: 'social-media-marketing',
    name: { en: 'Social Media Marketing', nl: 'Social media marketing' },
    description: {
      en: 'Strategy, content and community across social platforms.',
      nl: 'Strategie, content en community op alle social platformen.'
    }
  },
  {
    key: 'email-marketing',
    name: { en: 'Email Marketing', nl: 'E-mailmarketing' },
    description: {
      en: 'Automation and newsletters that turn subscribers into buyers.',
      nl: 'Automatisering en nieuwsbrieven die abonnees omzetten in klanten.'
    }
  },
  {
    key: 'conversion-optimization',
    name: { en: 'Conversion Optimization', nl: 'Conversie-optimalisatie' },
    description: {
      en: 'CRO and A/B testing to lift funnel conversions.',
      nl: 'CRO en A/B-testing voor meer conversies in je funnel.'
    }
  },
  {
    key: 'brand-strategy',
    name: { en: 'Brand Strategy', nl: 'Merkstrategie' },
    description: {
      en: 'Positioning, messaging and visual identity.',
      nl: 'Positionering, messaging en visuele identiteit.'
    }
  },
  {
    key: 'website-design',
    name: { en: 'Website Design', nl: 'Webdesign' },
    description: {
      en: 'Conversion-focused, mobile-first custom websites.',
      nl: 'Conversiegerichte, mobile-first websites op maat.'
    }
  },
  {
    key: 'crm-solutions',
    name: { en: 'CRM Solutions', nl: 'CRM-oplossingen' },
    description: {
      en: 'HubSpot, Pipedrive, Zoho and custom CRM setups.',
      nl: 'HubSpot, Pipedrive, Zoho en maatwerk CRM-implementaties.'
    }
  },
  {
    key: 'react',
    name: { en: 'React Development', nl: 'React Development' },
    description: {
      en: 'Modern React SPAs, dashboards and performant front ends.',
      nl: "Moderne React-SPA's, dashboards en snelle front ends."
    }
  },
  {
    key: 'php',
    name: { en: 'PHP Development', nl: 'PHP Development' },
    description: {
      en: 'Laravel, WordPress and custom PHP backends.',
      nl: 'Laravel, WordPress en maatwerk PHP-backends.'
    }
  },
  {
    key: 'java',
    name: { en: 'Java Development', nl: 'Java Development' },
    description: {
      en: 'Enterprise Spring Boot applications and APIs.',
      nl: "Enterprise Spring Boot-applicaties en API's."
    }
  },
  {
    key: 'mobile-apps',
    name: { en: 'Mobile App Development', nl: 'Mobiele app-ontwikkeling' },
    description: {
      en: 'iOS, Android, React Native and Flutter apps.',
      nl: 'iOS-, Android-, React Native- en Flutter-apps.'
    }
  },
  {
    key: 'ecommerce',
    name: { en: 'E-Commerce Solutions', nl: 'E-commerce oplossingen' },
    description: {
      en: 'Shopify, WooCommerce and custom online stores.',
      nl: 'Shopify, WooCommerce en maatwerk webshops.'
    }
  },
  {
    key: 'ai-automation',
    name: { en: 'AI & Automation', nl: 'AI & automatisering' },
    description: {
      en: 'AI workflows, chatbots and business automation.',
      nl: 'AI-workflows, chatbots en bedrijfsautomatisering.'
    }
  },
  {
    key: 'full-stack',
    name: { en: 'Full-Stack Development', nl: 'Full-stack development' },
    description: {
      en: 'End-to-end builds from database to UI.',
      nl: 'End-to-end oplevering van database tot UI.'
    }
  },
  {
    key: 'web-applications',
    name: { en: 'Web Applications', nl: 'Webapplicaties' },
    description: {
      en: 'Custom SaaS, portals and internal tools.',
      nl: 'Maatwerk SaaS, portalen en interne tools.'
    }
  }
]

const SERVICE_BY_KEY: Record<RouteKey, ServiceMeta | undefined> = SERVICES.reduce(
  (acc, s) => {
    acc[s.key] = s
    return acc
  },
  {} as Record<RouteKey, ServiceMeta | undefined>
)

/**
 * Curated related-service mapping keyed by RouteKey so the same intent works
 * for both English and Dutch URLs. Each list uses descriptive anchor text
 * (a ranking signal) and builds an internal link mesh that pushes authority
 * across the site.
 */
const RELATED_BY_KEY: Partial<Record<RouteKey, RouteKey[]>> = {
  home: ['seo-services', 'ai-seo', 'paid-advertising', 'react', 'ecommerce', 'ai-automation'],
  about: ['seo-services', 'react', 'ai-seo', 'paid-advertising'],
  contact: ['seo-services', 'ai-seo', 'paid-advertising', 'react'],
  marketing: [
    'seo-services',
    'ai-seo',
    'paid-advertising',
    'social-media-marketing',
    'email-marketing',
    'conversion-optimization'
  ],
  'seo-services': ['ai-seo', 'local-seo', 'conversion-optimization', 'website-design', 'react'],
  'ai-seo': ['seo-services', 'local-seo', 'brand-strategy', 'ai-automation'],
  'local-seo': ['seo-services', 'ai-seo', 'website-design', 'paid-advertising'],
  'paid-advertising': [
    'conversion-optimization',
    'seo-services',
    'social-media-marketing',
    'email-marketing'
  ],
  'social-media-marketing': [
    'paid-advertising',
    'brand-strategy',
    'email-marketing',
    'seo-services'
  ],
  'email-marketing': [
    'crm-solutions',
    'conversion-optimization',
    'paid-advertising',
    'social-media-marketing'
  ],
  'conversion-optimization': [
    'website-design',
    'paid-advertising',
    'seo-services',
    'email-marketing'
  ],
  'brand-strategy': [
    'website-design',
    'social-media-marketing',
    'ai-seo',
    'paid-advertising'
  ],
  'website-design': ['conversion-optimization', 'seo-services', 'brand-strategy', 'react'],
  'crm-solutions': ['email-marketing', 'paid-advertising', 'ai-automation', 'web-applications'],
  development: ['react', 'php', 'mobile-apps', 'ecommerce', 'ai-automation', 'full-stack'],
  react: ['full-stack', 'web-applications', 'mobile-apps', 'website-design', 'seo-services'],
  php: ['full-stack', 'ecommerce', 'web-applications', 'website-design'],
  java: ['full-stack', 'web-applications', 'ai-automation'],
  'mobile-apps': ['react', 'full-stack', 'ai-automation', 'paid-advertising'],
  ecommerce: ['paid-advertising', 'conversion-optimization', 'email-marketing', 'seo-services'],
  'ai-automation': ['ai-seo', 'crm-solutions', 'full-stack', 'web-applications'],
  'full-stack': ['react', 'php', 'java', 'web-applications'],
  'web-applications': ['full-stack', 'react', 'ai-automation', 'conversion-optimization'],
  'auto-form-builder': [
    'crm-solutions',
    'conversion-optimization',
    'email-marketing',
    'php'
  ],
  'auto-form-crm': ['crm-solutions', 'email-marketing', 'web-applications'],
  'hi-fan': ['social-media-marketing', 'brand-strategy', 'web-applications'],
  pinkpeck: ['social-media-marketing', 'brand-strategy', 'ai-seo'],
  'unbox-deal': ['ecommerce', 'paid-advertising', 'seo-services'],
  'royal-casino-hub': ['seo-services', 'ai-seo', 'brand-strategy'],
  branches: ['seo-services', 'local-seo', 'website-design', 'paid-advertising', 'marketing'],
  'branches-restaurants': [
    'website-design',
    'local-seo',
    'social-media-marketing',
    'paid-advertising',
    'seo-services'
  ],
  'branches-tandartsen': [
    'website-design',
    'local-seo',
    'paid-advertising',
    'social-media-marketing',
    'seo-services'
  ],
  'branches-fysiotherapeuten': [
    'website-design',
    'local-seo',
    'paid-advertising',
    'seo-services',
    'conversion-optimization'
  ],
  'branches-kappers-schoonheidssalons': [
    'website-design',
    'local-seo',
    'social-media-marketing',
    'seo-services',
    'brand-strategy'
  ],
  'branches-makelaars': [
    'website-design',
    'local-seo',
    'paid-advertising',
    'social-media-marketing',
    'seo-services'
  ],
  'branches-restaurants-website-laten-maken': [
    'website-design',
    'local-seo',
    'social-media-marketing',
    'paid-advertising',
    'seo-services'
  ],
  'branches-restaurants-lokale-seo': [
    'local-seo',
    'seo-services',
    'website-design',
    'paid-advertising',
    'social-media-marketing'
  ],
  'branches-restaurants-social-media': [
    'social-media-marketing',
    'website-design',
    'local-seo',
    'paid-advertising',
    'brand-strategy'
  ],
  'branches-tandartsen-website-laten-maken': [
    'website-design',
    'local-seo',
    'paid-advertising',
    'social-media-marketing',
    'seo-services'
  ],
  'branches-tandartsen-lokale-seo': [
    'local-seo',
    'seo-services',
    'website-design',
    'paid-advertising',
    'social-media-marketing'
  ],
  'branches-fysiotherapeuten-website-laten-maken': [
    'website-design',
    'local-seo',
    'paid-advertising',
    'seo-services',
    'conversion-optimization'
  ],
  'branches-fysiotherapeuten-lokale-seo': [
    'local-seo',
    'seo-services',
    'website-design',
    'paid-advertising',
    'conversion-optimization'
  ],
  'branches-kappers-schoonheidssalons-website-laten-maken': [
    'website-design',
    'local-seo',
    'social-media-marketing',
    'seo-services',
    'brand-strategy'
  ],
  'branches-kappers-schoonheidssalons-lokale-seo': [
    'local-seo',
    'seo-services',
    'website-design',
    'social-media-marketing',
    'brand-strategy'
  ],
  'branches-makelaars-website-laten-maken': [
    'website-design',
    'local-seo',
    'paid-advertising',
    'social-media-marketing',
    'seo-services'
  ],
  'branches-makelaars-lokale-seo': [
    'local-seo',
    'seo-services',
    'website-design',
    'paid-advertising',
    'social-media-marketing'
  ],
  'branches-makelaars-social-media': [
    'social-media-marketing',
    'website-design',
    'local-seo',
    'paid-advertising',
    'brand-strategy'
  ]
}

type RelatedServicesProps = {
  /** Force a specific path to resolve related services for. */
  path?: string
  /** Heading shown above the grid (defaults to localized UI string). */
  title?: string
  /** Subheading shown under the title (defaults to localized UI string). */
  subtitle?: string
  /** Max number of cards to show (after filtering the current page). */
  limit?: number
}

export default function RelatedServices({
  path,
  title,
  subtitle,
  limit = 6
}: RelatedServicesProps) {
  const { pathname } = useLocation()
  const targetPath = path ?? pathname
  const locale: Locale = localeFromPath(targetPath)
  const ui = UI[locale].related

  const key = getRouteKey(targetPath)
  const related = (key ? RELATED_BY_KEY[key] : undefined) ?? RELATED_BY_KEY.home ?? []
  const items = related
    .filter((k) => k !== key)
    .map((k) => SERVICE_BY_KEY[k])
    .filter((s): s is ServiceMeta => Boolean(s))
    .slice(0, limit)

  if (items.length === 0) return null

  return (
    <section aria-labelledby="related-services-heading" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="related-services-heading"
            className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3"
          >
            {title ?? ui.title}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{subtitle ?? ui.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => {
            const name = item.name[locale]
            return (
              <Link
                key={item.key}
                to={ROUTES[item.key][locale]}
                className="group block p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-slate-600 mb-4">{item.description[locale]}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                  {ui.learnMore(name)}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
