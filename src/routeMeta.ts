/**
 * Per-route SEO metadata — titles, meta descriptions and keywords.
 *
 * Title formula: primary keyword early + benefit + brand. Aim for ~55–60
 * characters so it isn't truncated in SERPs. Descriptions target ~150–160
 * characters with a clear value proposition and call to action.
 */

import { SITE_NAME } from './siteConfig'

type RouteMeta = {
  title: string
  description: string
  keywords?: readonly string[]
  ogImage?: string
}

const entries: Record<string, RouteMeta> = {
  '/': {
    title: `${SITE_NAME} | Digital Marketing & Custom Development Agency`,
    description:
      'Amora Digital is a Netherlands-based digital marketing and custom development agency. Grow with SEO, AI SEO, paid ads, web design, React, PHP and Java.',
    keywords: [
      'digital marketing agency Netherlands',
      'SEO agency',
      'AI SEO agency',
      'web development company',
      'React development',
      'PHP development',
      'custom software Netherlands'
    ]
  },
  '/about': {
    title: `About Amora Digital | Our Team, Mission & Values`,
    description:
      'Meet the Amora Digital team, our mission and how we help businesses grow with digital marketing, SEO and custom software development in the Netherlands.',
    keywords: ['about Amora Digital', 'digital agency team', 'Netherlands marketing agency']
  },
  '/contact': {
    title: `Contact Amora Digital | Free Consultation & Project Quote`,
    description:
      'Contact Amora Digital for a free consultation. Call, email or send a message — we reply within one business day to every marketing and development inquiry.',
    keywords: ['contact Amora Digital', 'free marketing consultation', 'digital agency contact Netherlands']
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      'How Amora Digital collects, uses and protects your personal data in line with the GDPR and Dutch privacy law. Read our full privacy policy.',
    keywords: ['privacy policy', 'GDPR', 'data protection']
  },
  '/marketing': {
    title: `Digital Marketing Services | SEO, Ads, Social & More`,
    description:
      'Full-service digital marketing: SEO, AI SEO, Local SEO, paid advertising, social media, email marketing, CRO, brand strategy, CRM and website design.',
    keywords: [
      'digital marketing services',
      'SEO services',
      'paid advertising',
      'social media marketing',
      'marketing agency Netherlands'
    ]
  },
  '/marketing/website-design': {
    title: `Website Design Services | Conversion-Focused, Mobile-First`,
    description:
      'Conversion-focused, mobile-first website design. Custom, brand-aligned sites engineered for speed, Core Web Vitals and measurable lead generation.',
    keywords: [
      'website design Netherlands',
      'custom web design',
      'mobile-first website',
      'conversion-focused web design'
    ]
  },
  '/marketing/crm-solutions': {
    title: `CRM Solutions | HubSpot, Pipedrive, Zoho & Custom CRM`,
    description:
      'CRM setup, integrations and automation so leads never fall through the cracks. HubSpot, Pipedrive, Zoho, Salesforce and custom CRM implementations.',
    keywords: ['CRM solutions', 'HubSpot implementation', 'Pipedrive setup', 'CRM automation']
  },
  '/marketing/social-media-marketing': {
    title: `Social Media Marketing | Instagram, LinkedIn, TikTok & More`,
    description:
      'Social media marketing across Instagram, LinkedIn, Facebook, TikTok and YouTube — strategy, content and community management that grows your brand.',
    keywords: [
      'social media marketing',
      'Instagram marketing',
      'LinkedIn marketing',
      'TikTok marketing agency'
    ]
  },
  '/marketing/paid-advertising': {
    title: `Paid Advertising | Google Ads, Meta Ads & Retargeting`,
    description:
      'ROI-driven Google Ads, Meta Ads, LinkedIn Ads and retargeting. Data-first paid media management with transparent reporting and creative production.',
    keywords: [
      'Google Ads agency',
      'Meta Ads agency',
      'PPC management',
      'paid advertising Netherlands'
    ]
  },
  '/marketing/seo-services': {
    title: `SEO Services | Technical SEO, On-Page & Link Building`,
    description:
      'Technical SEO, on-page optimization, content strategy and link building to rank higher in Google and grow organic traffic. Free SEO audit available.',
    keywords: [
      'SEO services',
      'SEO agency Netherlands',
      'technical SEO',
      'on-page SEO',
      'link building'
    ]
  },
  '/marketing/ai-seo': {
    title: `AI SEO Agency | Rank in ChatGPT, Perplexity & Google AI`,
    description:
      'AI SEO so ChatGPT, Perplexity, Google AI Overviews and Claude cite your brand. Entity-rich content, structured data and E-E-A-T authority signals.',
    keywords: [
      'AI SEO',
      'ChatGPT SEO',
      'Perplexity SEO',
      'Generative Engine Optimization',
      'GEO',
      'Google AI Overviews'
    ]
  },
  '/marketing/local-seo': {
    title: `Local SEO Services | Google Business Profile & Maps Ranking`,
    description:
      'Get found locally. Google Business Profile optimization, local citations, reviews and maps visibility for local businesses that want to dominate their area.',
    keywords: [
      'local SEO',
      'Google Business Profile optimization',
      'Google Maps SEO',
      'near me SEO'
    ]
  },
  '/marketing/email-marketing': {
    title: `Email Marketing Services | Automation, Newsletters, Flows`,
    description:
      'Email automation, newsletters and nurture sequences that turn subscribers into paying customers. Klaviyo, Mailchimp, HubSpot and custom platforms.',
    keywords: ['email marketing', 'email automation', 'Klaviyo agency', 'Mailchimp agency']
  },
  '/marketing/conversion-optimization': {
    title: `Conversion Rate Optimization | CRO & A/B Testing Agency`,
    description:
      'Conversion rate optimization (CRO), A/B testing and landing page optimization to lift funnel conversions — data-driven, not guesswork.',
    keywords: [
      'conversion rate optimization',
      'CRO agency',
      'A/B testing',
      'landing page optimization'
    ]
  },
  '/marketing/brand-strategy': {
    title: `Brand Strategy Services | Positioning, Messaging & Identity`,
    description:
      'Brand positioning, messaging framework and visual identity so your brand stands out, attracts the right customers and commands premium pricing.',
    keywords: ['brand strategy', 'brand positioning', 'brand identity agency', 'rebranding']
  },
  '/development': {
    title: `Custom Software Development | React, PHP, Java, AI`,
    description:
      'Custom software development: React, PHP, Java, mobile apps, e-commerce, AI automation, full-stack and web applications — built for performance and scale.',
    keywords: [
      'custom software development',
      'React development agency',
      'PHP development',
      'Java development',
      'mobile app development Netherlands'
    ]
  },
  '/development/react': {
    title: `React Development Services | Modern Apps, SPAs & Dashboards`,
    description:
      'Modern React applications built with TypeScript, Vite and Next.js — SPAs, dashboards and performant front ends engineered for scale and SEO.',
    keywords: ['React development', 'React agency', 'TypeScript development', 'Next.js agency']
  },
  '/development/php': {
    title: `PHP Development Services | Laravel, WordPress & Custom APIs`,
    description:
      'Custom PHP development with Laravel and WordPress — secure backends, REST APIs, custom plugins and high-performance web applications.',
    keywords: ['PHP development', 'Laravel agency', 'WordPress development', 'custom PHP backend']
  },
  '/development/java': {
    title: `Java Development Services | Spring Boot, APIs & Microservices`,
    description:
      'Enterprise Java development with Spring Boot — scalable microservices, REST APIs and secure integrations for high-traffic and regulated industries.',
    keywords: ['Java development', 'Spring Boot agency', 'enterprise Java', 'Java microservices']
  },
  '/development/mobile-apps': {
    title: `Mobile App Development | iOS, Android, React Native & Flutter`,
    description:
      'Native and cross-platform mobile apps for iOS and Android with React Native, Flutter, Swift and Kotlin — from discovery to store launch.',
    keywords: [
      'mobile app development',
      'iOS app development',
      'Android app development',
      'React Native agency'
    ]
  },
  '/development/ecommerce': {
    title: `E-Commerce Development | Shopify, WooCommerce & Custom Stores`,
    description:
      'E-commerce websites on Shopify, WooCommerce and custom platforms with payments, inventory, ERP/CRM integrations and conversion-focused design.',
    keywords: ['ecommerce development', 'Shopify agency', 'WooCommerce agency', 'online store']
  },
  '/development/ai-automation': {
    title: `AI & Automation Services | Workflow AI, Chatbots, Integrations`,
    description:
      'AI-powered workflows and automation using OpenAI, Claude, Zapier, n8n and custom pipelines — save hours and scale operations without adding headcount.',
    keywords: ['AI automation', 'workflow automation', 'AI integration', 'chatbot development']
  },
  '/development/full-stack': {
    title: `Full-Stack Development | APIs, Front End & DevOps`,
    description:
      'End-to-end full-stack development from database to UI — REST/GraphQL APIs, modern front ends and DevOps-ready delivery pipelines.',
    keywords: ['full-stack development', 'full stack agency', 'API development', 'DevOps']
  },
  '/development/web-applications': {
    title: `Web Application Development | SaaS, Portals & Internal Tools`,
    description:
      'Custom SaaS, client portals, dashboards and internal tools — secure, scalable web applications with role-based access, analytics and integrations.',
    keywords: [
      'web application development',
      'SaaS development',
      'custom portal',
      'internal tools'
    ]
  },
  '/products/auto-form-builder': {
    title: `Auto Form Builder | WordPress Form Builder Plugin`,
    description:
      'Auto Form Builder — the WordPress form builder plugin to create powerful, conversion-focused forms with an intuitive drag-and-drop interface.',
    keywords: ['WordPress form builder', 'form plugin', 'Auto Form Builder']
  },
  '/products/auto-form-crm': {
    title: `Auto Form CRM | Lead & Customer Management Platform`,
    description:
      'Auto Form CRM helps you capture leads from forms, track conversations and close more deals with automation and integrations.',
    keywords: ['CRM software', 'lead management', 'Auto Form CRM']
  },
  '/products/hi-fan': {
    title: `Hi.Fan | Fan Engagement & Link-in-Bio for Creators`,
    description:
      'Hi.Fan is a fan engagement and link-in-bio platform for creators and brands to grow audiences, collect leads and monetise content.',
    keywords: ['link in bio', 'fan engagement platform', 'creator tools']
  },
  '/products/pinkpeck': {
    title: `PinkPeck | Content Creation & Social Toolkit`,
    description:
      'PinkPeck is a content creation and social toolkit from Amora Digital for faster, better-looking social content.',
    keywords: ['content creation tool', 'social media tools', 'PinkPeck']
  },
  '/products/unbox-deal': {
    title: `Unbox.deal | Discover Deals, Offers & Promotions`,
    description:
      'Unbox.deal — deals and offers platform. Discover promotions, coupons and savings across popular online stores and brands.',
    keywords: ['deals platform', 'discount offers', 'Unbox.deal']
  },
  '/products/royal-casino-hub': {
    title: `Royal Casino Hub | Casino Industry News & Reviews`,
    description:
      'Royal Casino Hub covers casino industry news, product reviews and guides for the iGaming audience.',
    keywords: ['casino reviews', 'casino news', 'iGaming industry']
  }
}

/** Paths that exist as real pages (used for robots / indexing signals). */
export const INDEXABLE_PATHS = new Set(Object.keys(entries))

export function getMetaForPath(pathname: string): RouteMeta {
  return (
    entries[pathname] ?? {
      title: `Page not found | ${SITE_NAME}`,
      description:
        'The page you requested does not exist. Return to the Amora Digital home or use the navigation menu to find what you need.'
    }
  )
}
