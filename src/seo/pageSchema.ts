/**
 * Per-page schema definitions:
 *   - Breadcrumb trail
 *   - Service / Product schema
 *   - FAQ (AI SEO) content
 *
 * Each page is keyed by its canonical pathname. PageSchemaProvider in
 * `components/PageSeo.tsx` resolves the entry and injects the right
 * schema.org graph into the document head.
 */

import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProductSchema,
  buildProfessionalServiceSchema,
  buildServiceSchema,
  buildWebPageSchema,
  type JsonObject
} from './schema'

type BreadcrumbItem = { name: string; path: string }
type FaqItem = { question: string; answer: string }

type PageSeoConfig = {
  breadcrumbs: ReadonlyArray<BreadcrumbItem>
  /** Extra schema nodes (Service, Product, FAQPage, etc.) merged into the graph. */
  extras?: ReadonlyArray<JsonObject>
  /** Short list of FAQ Q&As to include as FAQPage schema. */
  faqs?: ReadonlyArray<FaqItem>
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ItemPage' | 'FAQPage'
}

const HOME: BreadcrumbItem = { name: 'Home', path: '/' }
const MARKETING_HUB: BreadcrumbItem = { name: 'Marketing Solutions', path: '/marketing' }
const DEVELOPMENT_HUB: BreadcrumbItem = { name: 'Development Services', path: '/development' }

const marketing = (name: string, path: string): BreadcrumbItem[] => [HOME, MARKETING_HUB, { name, path }]
const development = (name: string, path: string): BreadcrumbItem[] => [HOME, DEVELOPMENT_HUB, { name, path }]
const product = (name: string, path: string): BreadcrumbItem[] => [HOME, { name: 'Products', path: '/' }, { name, path }]

export const pageSeoConfig: Record<string, PageSeoConfig> = {
  '/': {
    breadcrumbs: [HOME],
    faqs: [
      {
        question: 'What services does Amora Digital offer?',
        answer:
          'Amora Digital provides end-to-end digital marketing (SEO, AI SEO, Local SEO, paid advertising, social media, email marketing, CRO, brand strategy, CRM solutions and website design) and custom software development (React, PHP, Java, mobile apps, e-commerce, AI automation, full-stack and web applications).'
      },
      {
        question: 'Where is Amora Digital located?',
        answer:
          'Amora Digital is based in the Netherlands (KVK 99536811) and serves clients across the Netherlands, the European Union and worldwide in English and Dutch.'
      },
      {
        question: 'How can I get a free consultation?',
        answer:
          'Request a free consultation from the /contact page, email info@amoradigital.nl or call +31 6 25580415. We typically respond within one business day.'
      },
      {
        question: 'Does Amora Digital offer AI SEO?',
        answer:
          'Yes. Amora Digital specialises in AI SEO — optimising brands to be cited by ChatGPT, Google AI Overviews, Perplexity and Claude through structured data, entity-rich content, E-E-A-T signals and technical markup.'
      }
    ]
  },

  '/about': {
    breadcrumbs: [HOME, { name: 'About Us', path: '/about' }],
    pageType: 'AboutPage'
  },

  '/contact': {
    breadcrumbs: [HOME, { name: 'Contact', path: '/contact' }],
    pageType: 'ContactPage',
    extras: [buildProfessionalServiceSchema()]
  },

  '/privacy-policy': {
    breadcrumbs: [HOME, { name: 'Privacy Policy', path: '/privacy-policy' }]
  },

  '/marketing': {
    breadcrumbs: [HOME, MARKETING_HUB],
    pageType: 'CollectionPage',
    extras: [
      buildServiceSchema({
        path: '/marketing',
        name: 'Digital Marketing Services',
        description:
          'Full-service digital marketing: SEO, AI SEO, Local SEO, paid advertising, social media marketing, email marketing, conversion optimization, brand strategy, CRM and website design.',
        serviceType: 'Digital Marketing',
        category: 'Digital Marketing',
        offers: [
          { name: 'SEO Services' },
          { name: 'AI SEO' },
          { name: 'Local SEO' },
          { name: 'Paid Advertising' },
          { name: 'Social Media Marketing' },
          { name: 'Email Marketing' },
          { name: 'Conversion Optimization' },
          { name: 'Brand Strategy' },
          { name: 'CRM Solutions' },
          { name: 'Website Design' }
        ]
      })
    ]
  },

  '/marketing/website-design': {
    breadcrumbs: marketing('Website Design', '/marketing/website-design'),
    extras: [
      buildServiceSchema({
        path: '/marketing/website-design',
        name: 'Website Design',
        description:
          'Conversion-focused, mobile-first website design. Custom brand-aligned sites engineered for speed, Core Web Vitals and measurable lead generation.',
        serviceType: 'Website Design',
        category: 'Web Development'
      })
    ],
    faqs: [
      {
        question: 'How long does a website design project take?',
        answer:
          'Most Amora Digital website projects launch within 4 to 8 weeks, depending on scope, integrations and the volume of content supplied by the client.'
      },
      {
        question: 'Do you build websites that are optimized for SEO?',
        answer:
          'Yes. Every website we design is built on SEO best practices: semantic HTML, fast Core Web Vitals, schema markup, XML sitemap, robots.txt and canonical URLs.'
      },
      {
        question: 'Are your websites mobile-friendly?',
        answer:
          'All Amora Digital websites are mobile-first, responsive across phones, tablets and desktops, and tested against Google’s mobile-friendly requirements.'
      }
    ]
  },

  '/marketing/crm-solutions': {
    breadcrumbs: marketing('CRM Solutions', '/marketing/crm-solutions'),
    extras: [
      buildServiceSchema({
        path: '/marketing/crm-solutions',
        name: 'CRM Solutions',
        description:
          'CRM setup, integrations and automation so leads are never lost. HubSpot, Pipedrive, Zoho, Salesforce and custom CRM implementations.',
        serviceType: 'CRM Consulting',
        category: 'Digital Marketing'
      })
    ],
    faqs: [
      {
        question: 'Which CRMs does Amora Digital work with?',
        answer:
          'We implement and integrate HubSpot, Pipedrive, Zoho, Salesforce and custom CRMs, plus connect them to websites, ad platforms and email tools.'
      },
      {
        question: 'Can you automate lead capture and follow-up?',
        answer:
          'Yes. We automate lead capture from forms, ads and chat, route leads by rules, and build nurture sequences so sales teams only talk to qualified prospects.'
      }
    ]
  },

  '/marketing/social-media-marketing': {
    breadcrumbs: marketing('Social Media Marketing', '/marketing/social-media-marketing'),
    extras: [
      buildServiceSchema({
        path: '/marketing/social-media-marketing',
        name: 'Social Media Marketing',
        description:
          'Strategy, content production and community management across Instagram, LinkedIn, Facebook, TikTok and YouTube to grow brand awareness and qualified leads.',
        serviceType: 'Social Media Marketing',
        category: 'Digital Marketing'
      })
    ],
    faqs: [
      {
        question: 'Which social platforms do you manage?',
        answer:
          'Instagram, LinkedIn, Facebook, TikTok, YouTube and X. We recommend the platform mix based on your audience and goals.'
      },
      {
        question: 'Do you create the content or just schedule it?',
        answer:
          'Both. Amora Digital plans the content strategy, designs the creatives, writes copy, schedules posts and manages comments and DMs.'
      }
    ]
  },

  '/marketing/paid-advertising': {
    breadcrumbs: marketing('Paid Advertising', '/marketing/paid-advertising'),
    extras: [
      buildServiceSchema({
        path: '/marketing/paid-advertising',
        name: 'Paid Advertising',
        description:
          'Google Ads, Meta Ads, LinkedIn Ads and retargeting campaigns managed for ROI — data-driven paid media with transparent reporting.',
        serviceType: 'Paid Advertising',
        category: 'Digital Marketing'
      })
    ],
    faqs: [
      {
        question: 'What ad platforms does Amora Digital manage?',
        answer:
          'Google Ads (Search, Performance Max, Display, YouTube), Meta Ads (Facebook, Instagram), LinkedIn Ads, TikTok Ads and Microsoft Ads.'
      },
      {
        question: 'What is the minimum ad budget you work with?',
        answer:
          'We typically recommend a minimum monthly media budget of €1,500 to collect enough data for optimization, but can tailor plans to smaller budgets for local businesses.'
      }
    ]
  },

  '/marketing/seo-services': {
    breadcrumbs: marketing('SEO Services', '/marketing/seo-services'),
    extras: [
      buildServiceSchema({
        path: '/marketing/seo-services',
        name: 'SEO Services',
        description:
          'Technical SEO, on-page optimization, content strategy and link building to improve Google rankings and grow organic traffic.',
        serviceType: 'Search Engine Optimization',
        category: 'Digital Marketing',
        offers: [
          { name: 'Technical SEO audits' },
          { name: 'On-page SEO' },
          { name: 'Keyword research' },
          { name: 'Link building' },
          { name: 'Content strategy' },
          { name: 'Analytics & reporting' }
        ]
      })
    ],
    faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer:
          'Most clients see early traction within 3 months and meaningful ranking and traffic improvements within 6–12 months, depending on competition and starting baseline.'
      },
      {
        question: 'Does Amora Digital do link building?',
        answer:
          'Yes. We earn high-quality backlinks through digital PR, guest posting on authoritative sites and strategic partnerships. We never buy spammy links.'
      },
      {
        question: 'Do you cover technical SEO?',
        answer:
          'Yes. Every SEO engagement includes a technical audit (Core Web Vitals, crawlability, schema, internal linking, canonicalization) and implementation of the fixes.'
      }
    ]
  },

  '/marketing/ai-seo': {
    breadcrumbs: marketing('AI SEO', '/marketing/ai-seo'),
    extras: [
      buildServiceSchema({
        path: '/marketing/ai-seo',
        name: 'AI SEO',
        description:
          'AI SEO to get cited by ChatGPT, Google AI Overviews, Perplexity and Claude — structured data, entity-focused content and technical signals for AI search.',
        serviceType: 'AI Search Optimization',
        category: 'Digital Marketing'
      })
    ],
    faqs: [
      {
        question: 'What is AI SEO?',
        answer:
          'AI SEO (also called Generative Engine Optimization or GEO) is the practice of optimizing content, structured data and technical signals so AI systems like ChatGPT, Perplexity, Google AI Overviews and Claude cite your brand in their answers.'
      },
      {
        question: 'How is AI SEO different from traditional SEO?',
        answer:
          'Traditional SEO targets blue-link rankings on Google. AI SEO targets citations in AI-generated answers and focuses on entities, structured data, authority signals and clear, factual content AI assistants can safely quote.'
      },
      {
        question: 'Can AI SEO really bring traffic and leads?',
        answer:
          'Yes. Users who click through from AI citations tend to have high intent. Appearing in AI answers also builds brand authority and trust, which lifts conversions across other channels.'
      }
    ]
  },

  '/marketing/local-seo': {
    breadcrumbs: marketing('Local SEO', '/marketing/local-seo'),
    extras: [
      buildServiceSchema({
        path: '/marketing/local-seo',
        name: 'Local SEO',
        description:
          'Google Business Profile optimization, local citations, reviews and maps visibility to help local businesses dominate their service area.',
        serviceType: 'Local SEO',
        category: 'Digital Marketing'
      })
    ],
    faqs: [
      {
        question: 'Do I need Local SEO if I have a website?',
        answer:
          'If customers find you in a specific city or region, yes. Local SEO makes your business visible in Google Maps, the local pack and "near me" searches, which together drive most local buying decisions.'
      },
      {
        question: 'Do you manage Google Business Profile?',
        answer:
          'Yes. We fully set up and optimize Google Business Profile: categories, services, photos, posts, Q&A and review responses.'
      }
    ]
  },

  '/marketing/email-marketing': {
    breadcrumbs: marketing('Email Marketing', '/marketing/email-marketing'),
    extras: [
      buildServiceSchema({
        path: '/marketing/email-marketing',
        name: 'Email Marketing',
        description:
          'Email automation, newsletters and nurture sequences that convert subscribers into customers with measurable revenue per email.',
        serviceType: 'Email Marketing',
        category: 'Digital Marketing'
      })
    ],
    faqs: [
      {
        question: 'Which email platforms do you work with?',
        answer:
          'Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Brevo (Sendinblue) and custom solutions — we pick the platform that fits your stack and budget.'
      },
      {
        question: 'Can you set up automation flows?',
        answer:
          'Yes. We design welcome, abandoned cart, post-purchase, re-engagement and lifecycle flows, then optimize them against open, click and revenue data.'
      }
    ]
  },

  '/marketing/conversion-optimization': {
    breadcrumbs: marketing('Conversion Optimization', '/marketing/conversion-optimization'),
    extras: [
      buildServiceSchema({
        path: '/marketing/conversion-optimization',
        name: 'Conversion Rate Optimization',
        description:
          'CRO, A/B testing and landing page optimization to lift conversion rates across your funnel using data, not guesses.',
        serviceType: 'Conversion Rate Optimization',
        category: 'Digital Marketing'
      })
    ],
    faqs: [
      {
        question: 'What conversion rate can I expect?',
        answer:
          'Uplift depends on your starting point and traffic volume, but most clients see 15–60% relative improvement on key pages within 3–6 months of structured testing.'
      },
      {
        question: 'What tools do you use for CRO?',
        answer:
          'We use Google Analytics 4, Microsoft Clarity, Hotjar, VWO and Google Optimize alternatives such as Convert.com for heatmaps, session replays and A/B testing.'
      }
    ]
  },

  '/marketing/brand-strategy': {
    breadcrumbs: marketing('Brand Strategy', '/marketing/brand-strategy'),
    extras: [
      buildServiceSchema({
        path: '/marketing/brand-strategy',
        name: 'Brand Strategy',
        description:
          'Positioning, messaging and visual identity so your brand stands out, attracts the right customers and commands premium pricing.',
        serviceType: 'Brand Strategy',
        category: 'Digital Marketing'
      })
    ],
    faqs: [
      {
        question: 'What does a brand strategy engagement include?',
        answer:
          'Market and competitor research, audience insight, positioning, messaging framework, visual identity and brand guidelines — plus a rollout plan for website, social and ads.'
      }
    ]
  },

  '/development': {
    breadcrumbs: [HOME, DEVELOPMENT_HUB],
    pageType: 'CollectionPage',
    extras: [
      buildServiceSchema({
        path: '/development',
        name: 'Custom Software Development Services',
        description:
          'Custom software development: React, PHP, Java, mobile apps, e-commerce, AI automation, full-stack and web applications.',
        serviceType: 'Custom Software Development',
        category: 'Software Development',
        offers: [
          { name: 'React Development' },
          { name: 'PHP Development' },
          { name: 'Java Development' },
          { name: 'Mobile App Development' },
          { name: 'E-Commerce Solutions' },
          { name: 'AI & Automation' },
          { name: 'Full-Stack Development' },
          { name: 'Web Applications' }
        ]
      })
    ]
  },

  '/development/react': {
    breadcrumbs: development('React Development', '/development/react'),
    extras: [
      buildServiceSchema({
        path: '/development/react',
        name: 'React Development',
        description:
          'Modern React applications — SPAs, dashboards and performant front ends built with TypeScript, Vite and Next.js best practices.',
        serviceType: 'React Development',
        category: 'Software Development'
      })
    ],
    faqs: [
      {
        question: 'Do you build React apps with TypeScript?',
        answer:
          'Yes. We build React apps with TypeScript by default for type safety, easier refactoring and long-term maintainability.'
      },
      {
        question: 'Can you migrate a legacy front end to React?',
        answer:
          'Yes. We migrate jQuery, AngularJS, legacy PHP templates and older React versions to modern React 18/19 with minimal downtime.'
      }
    ]
  },

  '/development/php': {
    breadcrumbs: development('PHP Development', '/development/php'),
    extras: [
      buildServiceSchema({
        path: '/development/php',
        name: 'PHP Development',
        description:
          'PHP development with Laravel, WordPress and custom backends — secure, scalable server-side code and APIs.',
        serviceType: 'PHP Development',
        category: 'Software Development'
      })
    ],
    faqs: [
      {
        question: 'Do you build custom WordPress plugins?',
        answer:
          'Yes. Amora Digital builds custom WordPress plugins, blocks and themes, and we maintain our own public plugin Auto Form Builder on wordpress.org.'
      },
      {
        question: 'Do you use Laravel for backends?',
        answer:
          'Yes. Laravel is our default framework for custom PHP backends, APIs and admin tools.'
      }
    ]
  },

  '/development/java': {
    breadcrumbs: development('Java Development', '/development/java'),
    extras: [
      buildServiceSchema({
        path: '/development/java',
        name: 'Java Development',
        description:
          'Enterprise Java development with Spring Boot — scalable microservices, REST APIs and secure integrations.',
        serviceType: 'Java Development',
        category: 'Software Development'
      })
    ]
  },

  '/development/mobile-apps': {
    breadcrumbs: development('Mobile App Development', '/development/mobile-apps'),
    extras: [
      buildServiceSchema({
        path: '/development/mobile-apps',
        name: 'Mobile App Development',
        description:
          'Native and cross-platform mobile apps for iOS and Android with React Native, Flutter, Swift and Kotlin.',
        serviceType: 'Mobile App Development',
        category: 'Software Development'
      })
    ],
    faqs: [
      {
        question: 'Do you build native or cross-platform apps?',
        answer:
          'Both. We build cross-platform apps with React Native or Flutter when speed and shared codebase matter, and native Swift/Kotlin when performance or deep platform APIs are critical.'
      }
    ]
  },

  '/development/ecommerce': {
    breadcrumbs: development('E-Commerce Solutions', '/development/ecommerce'),
    extras: [
      buildServiceSchema({
        path: '/development/ecommerce',
        name: 'E-Commerce Solutions',
        description:
          'Online stores on Shopify, WooCommerce and custom platforms with payments, inventory and ERP/CRM integrations.',
        serviceType: 'E-Commerce Development',
        category: 'Software Development'
      })
    ]
  },

  '/development/ai-automation': {
    breadcrumbs: development('AI & Automation', '/development/ai-automation'),
    extras: [
      buildServiceSchema({
        path: '/development/ai-automation',
        name: 'AI & Automation',
        description:
          'AI-powered workflows, integrations and automation using OpenAI, Claude, Zapier, n8n and custom pipelines — save hours and scale operations.',
        serviceType: 'AI Automation',
        category: 'Software Development'
      })
    ]
  },

  '/development/full-stack': {
    breadcrumbs: development('Full-Stack Development', '/development/full-stack'),
    extras: [
      buildServiceSchema({
        path: '/development/full-stack',
        name: 'Full-Stack Development',
        description:
          'End-to-end development from database to UI — REST/GraphQL APIs, modern front ends and DevOps-ready delivery.',
        serviceType: 'Full-Stack Development',
        category: 'Software Development'
      })
    ]
  },

  '/development/web-applications': {
    breadcrumbs: development('Web Applications', '/development/web-applications'),
    extras: [
      buildServiceSchema({
        path: '/development/web-applications',
        name: 'Web Application Development',
        description:
          'Custom SaaS, portals, dashboards and internal tools — secure, scalable web applications with role-based access and analytics.',
        serviceType: 'Web Application Development',
        category: 'Software Development'
      })
    ]
  },

  '/products/auto-form-builder': {
    breadcrumbs: product('Auto Form Builder', '/products/auto-form-builder'),
    pageType: 'ItemPage',
    extras: [
      buildProductSchema({
        path: '/products/auto-form-builder',
        name: 'Auto Form Builder',
        description:
          'Auto Form Builder is a WordPress form builder plugin for creating powerful forms with an intuitive drag-and-drop interface.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'WordPress',
        category: 'WordPress Plugin'
      })
    ]
  },

  '/products/auto-form-crm': {
    breadcrumbs: product('Auto Form CRM', '/products/auto-form-crm'),
    pageType: 'ItemPage',
    extras: [
      buildProductSchema({
        path: '/products/auto-form-crm',
        name: 'Auto Form CRM',
        description:
          'Auto Form CRM helps businesses manage leads and customer relationships with automation and integrations.',
        applicationCategory: 'BusinessApplication',
        category: 'CRM Software'
      })
    ]
  },

  '/products/hi-fan': {
    breadcrumbs: product('Hi.Fan', '/products/hi-fan'),
    pageType: 'ItemPage',
    extras: [
      buildProductSchema({
        path: '/products/hi-fan',
        name: 'Hi.Fan',
        description:
          'Hi.Fan is a fan engagement and link-in-bio platform for creators and brands.',
        applicationCategory: 'SocialNetworkingApplication',
        category: 'Creator Tools'
      })
    ]
  },

  '/products/pinkpeck': {
    breadcrumbs: product('PinkPeck', '/products/pinkpeck'),
    pageType: 'ItemPage',
    extras: [
      buildProductSchema({
        path: '/products/pinkpeck',
        name: 'PinkPeck',
        description:
          'PinkPeck is a content creation and social tool from Amora Digital.',
        applicationCategory: 'MultimediaApplication',
        category: 'Content Creation'
      })
    ]
  },

  '/products/unbox-deal': {
    breadcrumbs: product('Unbox.deal', '/products/unbox-deal'),
    pageType: 'ItemPage',
    extras: [
      buildProductSchema({
        path: '/products/unbox-deal',
        name: 'Unbox.deal',
        description:
          'Unbox.deal is a deals and offers platform where shoppers discover promotions and savings.',
        category: 'Deals Platform'
      })
    ]
  },

  '/products/royal-casino-hub': {
    breadcrumbs: product('Royal Casino Hub', '/products/royal-casino-hub'),
    pageType: 'ItemPage',
    extras: [
      buildProductSchema({
        path: '/products/royal-casino-hub',
        name: 'Royal Casino Hub',
        description:
          'Royal Casino Hub covers casino industry news and reviews for the iGaming audience.',
        category: 'Content & Media'
      })
    ]
  }
}

/**
 * Build the final list of schema nodes for a page (breadcrumb + webpage + extras + faqs).
 */
export function resolvePageSchema(
  pathname: string,
  meta: { title: string; description: string; image?: string }
): ReadonlyArray<JsonObject> {
  const config = pageSeoConfig[pathname]
  if (!config) return []

  const breadcrumbId = `${absoluteUrl(pathname)}#breadcrumb`
  const breadcrumb = {
    ...buildBreadcrumbSchema(config.breadcrumbs),
    '@id': breadcrumbId
  }

  const webPage = buildWebPageSchema({
    path: pathname,
    name: meta.title,
    description: meta.description,
    type: config.pageType,
    breadcrumbId,
    image: meta.image
  })

  const nodes: JsonObject[] = [breadcrumb, webPage]

  if (config.extras?.length) {
    nodes.push(...config.extras)
  }

  if (config.faqs?.length) {
    nodes.push(buildFaqSchema(config.faqs))
  }

  return nodes
}

export function getBreadcrumbs(pathname: string): ReadonlyArray<BreadcrumbItem> {
  return pageSeoConfig[pathname]?.breadcrumbs ?? [HOME]
}
