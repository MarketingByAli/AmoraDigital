import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type ServiceLink = { name: string; path: string; description: string }

const ALL_SERVICES: ServiceLink[] = [
  // Marketing
  {
    name: 'SEO Services',
    path: '/marketing/seo-services',
    description: 'Rank higher in Google with technical and on-page SEO.'
  },
  {
    name: 'AI SEO',
    path: '/marketing/ai-seo',
    description: 'Get cited by ChatGPT, Perplexity and Google AI Overviews.'
  },
  {
    name: 'Local SEO',
    path: '/marketing/local-seo',
    description: 'Dominate Google Maps and local "near me" searches.'
  },
  {
    name: 'Paid Advertising',
    path: '/marketing/paid-advertising',
    description: 'ROI-driven Google Ads, Meta Ads and retargeting.'
  },
  {
    name: 'Social Media Marketing',
    path: '/marketing/social-media-marketing',
    description: 'Strategy, content and community across social platforms.'
  },
  {
    name: 'Email Marketing',
    path: '/marketing/email-marketing',
    description: 'Automation and newsletters that turn subscribers into buyers.'
  },
  {
    name: 'Conversion Optimization',
    path: '/marketing/conversion-optimization',
    description: 'CRO and A/B testing to lift funnel conversions.'
  },
  {
    name: 'Brand Strategy',
    path: '/marketing/brand-strategy',
    description: 'Positioning, messaging and visual identity.'
  },
  {
    name: 'Website Design',
    path: '/marketing/website-design',
    description: 'Conversion-focused, mobile-first custom websites.'
  },
  {
    name: 'CRM Solutions',
    path: '/marketing/crm-solutions',
    description: 'HubSpot, Pipedrive, Zoho and custom CRM setups.'
  },
  // Development
  {
    name: 'React Development',
    path: '/development/react',
    description: 'Modern React SPAs, dashboards and performant front ends.'
  },
  {
    name: 'PHP Development',
    path: '/development/php',
    description: 'Laravel, WordPress and custom PHP backends.'
  },
  {
    name: 'Java Development',
    path: '/development/java',
    description: 'Enterprise Spring Boot applications and APIs.'
  },
  {
    name: 'Mobile App Development',
    path: '/development/mobile-apps',
    description: 'iOS, Android, React Native and Flutter apps.'
  },
  {
    name: 'E-Commerce Solutions',
    path: '/development/ecommerce',
    description: 'Shopify, WooCommerce and custom online stores.'
  },
  {
    name: 'AI & Automation',
    path: '/development/ai-automation',
    description: 'AI workflows, chatbots and business automation.'
  },
  {
    name: 'Full-Stack Development',
    path: '/development/full-stack',
    description: 'End-to-end builds from database to UI.'
  },
  {
    name: 'Web Applications',
    path: '/development/web-applications',
    description: 'Custom SaaS, portals and internal tools.'
  }
]

/**
 * Map each page to a curated list of related services. These curated links
 * use descriptive anchor text (a ranking signal) and build an internal link
 * mesh that pushes authority to siblings and cross-category cousins.
 */
const RELATED_BY_PATH: Record<string, string[]> = {
  '/': [
    '/marketing/seo-services',
    '/marketing/ai-seo',
    '/marketing/paid-advertising',
    '/development/react',
    '/development/ecommerce',
    '/development/ai-automation'
  ],
  '/about': [
    '/marketing/seo-services',
    '/development/react',
    '/marketing/ai-seo',
    '/marketing/paid-advertising'
  ],
  '/contact': [
    '/marketing/seo-services',
    '/marketing/ai-seo',
    '/marketing/paid-advertising',
    '/development/react'
  ],
  '/marketing': [
    '/marketing/seo-services',
    '/marketing/ai-seo',
    '/marketing/paid-advertising',
    '/marketing/social-media-marketing',
    '/marketing/email-marketing',
    '/marketing/conversion-optimization'
  ],
  '/marketing/seo-services': [
    '/marketing/ai-seo',
    '/marketing/local-seo',
    '/marketing/conversion-optimization',
    '/marketing/website-design',
    '/development/react'
  ],
  '/marketing/ai-seo': [
    '/marketing/seo-services',
    '/marketing/local-seo',
    '/marketing/brand-strategy',
    '/development/ai-automation'
  ],
  '/marketing/local-seo': [
    '/marketing/seo-services',
    '/marketing/ai-seo',
    '/marketing/website-design',
    '/marketing/paid-advertising'
  ],
  '/marketing/paid-advertising': [
    '/marketing/conversion-optimization',
    '/marketing/seo-services',
    '/marketing/social-media-marketing',
    '/marketing/email-marketing'
  ],
  '/marketing/social-media-marketing': [
    '/marketing/paid-advertising',
    '/marketing/brand-strategy',
    '/marketing/email-marketing',
    '/marketing/seo-services'
  ],
  '/marketing/email-marketing': [
    '/marketing/crm-solutions',
    '/marketing/conversion-optimization',
    '/marketing/paid-advertising',
    '/marketing/social-media-marketing'
  ],
  '/marketing/conversion-optimization': [
    '/marketing/website-design',
    '/marketing/paid-advertising',
    '/marketing/seo-services',
    '/marketing/email-marketing'
  ],
  '/marketing/brand-strategy': [
    '/marketing/website-design',
    '/marketing/social-media-marketing',
    '/marketing/ai-seo',
    '/marketing/paid-advertising'
  ],
  '/marketing/website-design': [
    '/marketing/conversion-optimization',
    '/marketing/seo-services',
    '/marketing/brand-strategy',
    '/development/react'
  ],
  '/marketing/crm-solutions': [
    '/marketing/email-marketing',
    '/marketing/paid-advertising',
    '/development/ai-automation',
    '/development/web-applications'
  ],
  '/development': [
    '/development/react',
    '/development/php',
    '/development/mobile-apps',
    '/development/ecommerce',
    '/development/ai-automation',
    '/development/full-stack'
  ],
  '/development/react': [
    '/development/full-stack',
    '/development/web-applications',
    '/development/mobile-apps',
    '/marketing/website-design',
    '/marketing/seo-services'
  ],
  '/development/php': [
    '/development/full-stack',
    '/development/ecommerce',
    '/development/web-applications',
    '/marketing/website-design'
  ],
  '/development/java': [
    '/development/full-stack',
    '/development/web-applications',
    '/development/ai-automation'
  ],
  '/development/mobile-apps': [
    '/development/react',
    '/development/full-stack',
    '/development/ai-automation',
    '/marketing/paid-advertising'
  ],
  '/development/ecommerce': [
    '/marketing/paid-advertising',
    '/marketing/conversion-optimization',
    '/marketing/email-marketing',
    '/marketing/seo-services'
  ],
  '/development/ai-automation': [
    '/marketing/ai-seo',
    '/marketing/crm-solutions',
    '/development/full-stack',
    '/development/web-applications'
  ],
  '/development/full-stack': [
    '/development/react',
    '/development/php',
    '/development/java',
    '/development/web-applications'
  ],
  '/development/web-applications': [
    '/development/full-stack',
    '/development/react',
    '/development/ai-automation',
    '/marketing/conversion-optimization'
  ],
  '/products/auto-form-builder': [
    '/marketing/crm-solutions',
    '/marketing/conversion-optimization',
    '/marketing/email-marketing',
    '/development/php'
  ],
  '/products/auto-form-crm': [
    '/marketing/crm-solutions',
    '/marketing/email-marketing',
    '/development/web-applications'
  ],
  '/products/hi-fan': [
    '/marketing/social-media-marketing',
    '/marketing/brand-strategy',
    '/development/web-applications'
  ],
  '/products/pinkpeck': [
    '/marketing/social-media-marketing',
    '/marketing/brand-strategy',
    '/marketing/ai-seo'
  ],
  '/products/unbox-deal': [
    '/development/ecommerce',
    '/marketing/paid-advertising',
    '/marketing/seo-services'
  ],
  '/products/royal-casino-hub': [
    '/marketing/seo-services',
    '/marketing/ai-seo',
    '/marketing/brand-strategy'
  ]
}

type RelatedServicesProps = {
  /** Force a specific path to resolve related services for. */
  path?: string
  /** Heading shown above the grid. */
  title?: string
  /** Subheading shown under the title. */
  subtitle?: string
  /** Max number of cards to show (after filtering the current page). */
  limit?: number
}

const SERVICE_BY_PATH: Record<string, ServiceLink> = Object.fromEntries(
  ALL_SERVICES.map((s) => [s.path, s])
)

export default function RelatedServices({
  path,
  title = 'Related services you might need',
  subtitle = 'Get more out of your investment by combining complementary services.',
  limit = 6
}: RelatedServicesProps) {
  const { pathname } = useLocation()
  const key = path ?? pathname
  const paths = RELATED_BY_PATH[key] ?? RELATED_BY_PATH['/']
  const items = paths
    .filter((p) => p !== key)
    .map((p) => SERVICE_BY_PATH[p])
    .filter((s): s is ServiceLink => Boolean(s))
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
            {title}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group block p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-slate-600 mb-4">{item.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                Learn more about {item.name.toLowerCase()}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
