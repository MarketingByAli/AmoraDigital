const SITE = 'Amora Digital'
const DEFAULT_DESCRIPTION =
  'Amora Digital — digital marketing, SEO, paid ads, and custom development. Grow your business with our expert team.'

const entries: Record<string, { title: string; description: string; ogImage?: string }> = {
  '/': {
    title: `${SITE} | Digital Marketing & Custom Development`,
    description: DEFAULT_DESCRIPTION
  },
  '/about': {
    title: `About Us | ${SITE}`,
    description:
      'Meet the Amora Digital team, our mission, and how we help businesses grow with marketing and custom software.'
  },
  '/contact': {
    title: `Contact | ${SITE}`,
    description:
      'Contact Amora Digital for a free consultation. Phone, email, or send us a message — we respond within one business day.'
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${SITE}`,
    description:
      'How Amora Digital collects, uses, and protects your data in line with GDPR and Dutch privacy law.'
  },
  '/marketing': {
    title: `Marketing Solutions | ${SITE}`,
    description:
      'Full-service digital marketing: website design, CRM, social, paid ads, SEO, email, CRO, and brand strategy.'
  },
  '/marketing/website-design': {
    title: `Website Design | ${SITE}`,
    description:
      'Conversion-focused, mobile-first websites that turn visitors into customers. Custom design for your brand.'
  },
  '/marketing/crm-solutions': {
    title: `CRM Solutions | ${SITE}`,
    description:
      'CRM setup, integrations, and automation so you never lose a lead. Streamline sales and customer relationships.'
  },
  '/marketing/social-media-marketing': {
    title: `Social Media Marketing | ${SITE}`,
    description:
      'Strategy, content, and community management to grow your brand across social platforms.'
  },
  '/marketing/paid-advertising': {
    title: `Paid Advertising | ${SITE}`,
    description:
      'Google Ads, Meta, and retargeting campaigns managed for ROI — data-driven paid media.'
  },
  '/marketing/seo-services': {
    title: `SEO Services | ${SITE}`,
    description:
      'Technical SEO, on-page optimization, and link building to improve rankings and organic traffic.'
  },
  '/marketing/ai-seo': {
    title: `AI SEO | ${SITE}`,
    description:
      'AI SEO for ChatGPT, Google AI Overviews, and Perplexity: structured data, entity-focused content, and technical signals so AI systems cite your brand.'
  },
  '/marketing/local-seo': {
    title: `Local SEO | ${SITE}`,
    description:
      'Get found in local search: Google Business Profile, citations, and maps visibility for local businesses.'
  },
  '/marketing/email-marketing': {
    title: `Email Marketing | ${SITE}`,
    description:
      'Email automation, newsletters, and nurture sequences that convert subscribers into customers.'
  },
  '/marketing/conversion-optimization': {
    title: `Conversion Optimization | ${SITE}`,
    description:
      'CRO, A/B testing, and landing page optimization to lift conversion rates across your funnel.'
  },
  '/marketing/brand-strategy': {
    title: `Brand Strategy | ${SITE}`,
    description:
      'Positioning, messaging, and visual identity so your brand stands out in a crowded market.'
  },
  '/development': {
    title: `Development Services | ${SITE}`,
    description:
      'Custom software: React, PHP, Java, mobile apps, e-commerce, AI automation, full-stack, and web applications.'
  },
  '/development/react': {
    title: `React Development | ${SITE}`,
    description:
      'Modern React applications — SPAs, dashboards, and performant front ends built with best practices.'
  },
  '/development/php': {
    title: `PHP Development | ${SITE}`,
    description:
      'PHP development with Laravel, WordPress, and robust backends for web projects.'
  },
  '/development/java': {
    title: `Java Development | ${SITE}`,
    description:
      'Enterprise Java development for scalable, secure applications and integrations.'
  },
  '/development/mobile-apps': {
    title: `Mobile App Development | ${SITE}`,
    description:
      'Native and cross-platform mobile apps for iOS and Android — design, build, and launch.'
  },
  '/development/ecommerce': {
    title: `E-Commerce Solutions | ${SITE}`,
    description:
      'Online stores, payments, and e-commerce integrations tailored to your business.'
  },
  '/development/ai-automation': {
    title: `AI & Automation | ${SITE}`,
    description:
      'AI-powered workflows, integrations, and automation to save time and scale operations.'
  },
  '/development/full-stack': {
    title: `Full-Stack Development | ${SITE}`,
    description:
      'End-to-end development from database to UI — APIs, front end, and DevOps-ready delivery.'
  },
  '/development/web-applications': {
    title: `Web Applications | ${SITE}`,
    description:
      'Custom SaaS, portals, and internal tools — secure, scalable web applications.'
  },
  '/products/auto-form-builder': {
    title: `Auto Form Builder | ${SITE}`,
    description:
      'WordPress form builder plugin — create powerful forms with an intuitive interface.'
  },
  '/products/auto-form-crm': {
    title: `Auto Form CRM | ${SITE}`,
    description:
      'CRM product for managing leads and customer relationships integrated with your stack.'
  },
  '/products/hi-fan': {
    title: `Hi.Fan | ${SITE}`,
    description:
      'Hi.Fan — fan engagement and link-in-bio solutions for creators and brands.'
  },
  '/products/pinkpeck': {
    title: `PinkPeck | ${SITE}`,
    description:
      'PinkPeck — content creation and social tools from Amora Digital.'
  },
  '/products/unbox-deal': {
    title: `Unbox.deal | ${SITE}`,
    description:
      'Unbox.deal — deals and offers platform. Discover promotions and savings.'
  },
  '/products/royal-casino-hub': {
    title: `Royal Casino Hub | ${SITE}`,
    description:
      'Royal Casino Hub — casino industry news and reviews.'
  }
}

/** Paths that exist as real pages (used for robots / indexing signals). */
export const INDEXABLE_PATHS = new Set(Object.keys(entries))

export function getMetaForPath(pathname: string): { title: string; description: string; ogImage?: string } {
  return (
    entries[pathname] ?? {
      title: `Page not found | ${SITE}`,
      description: 'The page you requested does not exist. Return to Amora Digital home or use the navigation menu.'
    }
  )
}
