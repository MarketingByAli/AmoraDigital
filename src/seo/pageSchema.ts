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
export type FaqItem = { question: string; answer: string }

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
      },
      {
        question: 'How much does SEO cost in the Netherlands?',
        answer:
          'SEO pricing depends on competition, site size and scope. Amora Digital offers tailored monthly SEO, AI SEO and Local SEO retainers after a free audit. Contact us for a proposal matched to your goals and market.'
      }
    ]
  },

  '/about': {
    breadcrumbs: [HOME, { name: 'About Us', path: '/about' }],
    pageType: 'AboutPage',
    faqs: [
      {
        question: 'Who is Amora Digital?',
        answer:
          'Amora Digital is a Netherlands-based digital marketing and custom software development agency (KVK 99536811). We help businesses grow organic traffic, AI search visibility, local rankings, paid ad ROI and custom web applications.'
      },
      {
        question: 'Where is Amora Digital located?',
        answer:
          'Amora Digital is headquartered in the Netherlands and serves clients across the Netherlands, the European Union and internationally. We work remotely and on-site depending on project needs.'
      },
      {
        question: 'What makes Amora Digital different from other SEO agencies in the Netherlands?',
        answer:
          'We combine traditional SEO, AI SEO (GEO), Local SEO and custom development under one roof — so strategy, technical implementation and structured data are aligned. Every engagement includes measurable reporting, not vanity metrics.'
      },
      {
        question: 'Does Amora Digital work with startups and enterprise clients?',
        answer:
          'Yes. We partner with startups, SMEs and larger organisations that need scalable SEO, paid media, CRM integrations or custom React, PHP and Java development.'
      }
    ]
  },

  '/contact': {
    breadcrumbs: [HOME, { name: 'Contact', path: '/contact' }],
    pageType: 'ContactPage',
    extras: [buildProfessionalServiceSchema()],
    faqs: [
      {
        question: 'How do I request a free SEO or marketing consultation?',
        answer:
          'Fill out the contact form at amoradigital.nl/contact, email info@amoradigital.nl or call +31 6 25580415. Tell us your website URL, goals and timeline — we reply within one business day.'
      },
      {
        question: 'Does Amora Digital offer free SEO audits?',
        answer:
          'Yes. We provide complimentary SEO audits covering technical SEO, on-page issues, Core Web Vitals, keyword opportunities and Local SEO gaps for businesses in the Netherlands and abroad.'
      },
      {
        question: 'Do you work with clients outside the Netherlands?',
        answer:
          'Yes. While we are based in the Netherlands, we serve clients across the EU and worldwide in English and Dutch for SEO, AI SEO, paid advertising and software development.'
      },
      {
        question: 'What information should I include in my project inquiry?',
        answer:
          'Share your website URL, target market (local, national or international), primary goals (traffic, leads, sales, AI visibility), current marketing stack and desired timeline. The more context you provide, the more accurate our proposal.'
      }
    ]
  },

  '/privacy-policy': {
    breadcrumbs: [HOME, { name: 'Privacy Policy', path: '/privacy-policy' }],
    faqs: [
      {
        question: 'What personal data does Amora Digital collect?',
        answer:
          'We collect information you submit via contact forms (name, email, phone, company, message), analytics data (IP address, pages visited, device type via Google Analytics) and cookies used for site functionality and measurement.'
      },
      {
        question: 'Is Amora Digital GDPR compliant?',
        answer:
          'Yes. Amora Digital processes personal data in accordance with the EU General Data Protection Regulation (GDPR). We only collect data necessary for communication, service delivery and website analytics, and we honour data subject rights.'
      },
      {
        question: 'How can I request deletion of my personal data?',
        answer:
          'Email info@amoradigital.nl with the subject "Data deletion request" and the email address or details you submitted. We will confirm and delete your data within 30 days unless legal retention applies.'
      }
    ]
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
    ],
    faqs: [
      {
        question: 'What digital marketing services does Amora Digital offer?',
        answer:
          'We offer SEO services, AI SEO, Local SEO, Google Ads and Meta paid advertising, social media marketing, email marketing, conversion rate optimization (CRO), brand strategy, CRM solutions and conversion-focused website design — all managed from the Netherlands.'
      },
      {
        question: 'What is the difference between SEO and AI SEO?',
        answer:
          'Traditional SEO targets Google blue-link rankings and organic traffic. AI SEO (Generative Engine Optimization) optimizes your brand to be cited in ChatGPT, Google AI Overviews, Perplexity and Claude through structured data, entity-rich content and authority signals.'
      },
      {
        question: 'Do you help Dutch businesses with Local SEO and Google Maps?',
        answer:
          'Yes. Local SEO is a core service: Google Business Profile optimization, local citations, review strategy and geo-targeted content so you rank in the local pack and "near me" searches across the Netherlands.'
      },
      {
        question: 'How does Amora Digital measure marketing success?',
        answer:
          'We track keyword rankings, organic and paid traffic, conversion rate, cost per lead, revenue attribution and — for AI SEO — brand mention frequency in AI-generated answers. You receive transparent monthly reports tied to business goals.'
      },
      {
        question: 'Can I combine SEO, paid ads and CRM in one engagement?',
        answer:
          'Yes. Many clients bundle SEO or AI SEO with Google Ads and CRM automation (HubSpot, Pipedrive, Zoho) so leads are captured, nurtured and attributed correctly from first click to closed deal.'
      }
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
          'Most Amora Digital website design projects launch within 4 to 8 weeks, depending on scope, integrations and content volume. SEO-ready structure, schema markup and Core Web Vitals optimization are included from day one.'
      },
      {
        question: 'Do you build websites optimized for SEO and Google rankings?',
        answer:
          'Yes. Every website we design follows SEO best practices: semantic HTML, fast Core Web Vitals, XML sitemap, robots.txt, canonical URLs, Open Graph tags and schema.org structured data for rich results and AI search citations.'
      },
      {
        question: 'Are your websites mobile-friendly and Core Web Vitals ready?',
        answer:
          'All Amora Digital websites are mobile-first, responsive across phones, tablets and desktops, and tested against Google mobile-friendly and Core Web Vitals requirements before launch.'
      },
      {
        question: 'Can you redesign my existing website without losing SEO rankings?',
        answer:
          'Yes. We plan 301 redirects, preserve URL equity, migrate metadata and structured data, and monitor Search Console after launch so redesigns improve conversions without dropping organic traffic.'
      },
      {
        question: 'Do you offer website design for local businesses in the Netherlands?',
        answer:
          'Yes. We build Local SEO-ready sites with location pages, Google Business Profile integration, NAP consistency, local schema markup and conversion paths tuned for Dutch and international audiences.'
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
        question: 'Which CRM platforms does Amora Digital implement?',
        answer:
          'We implement and integrate HubSpot, Pipedrive, Zoho CRM, Salesforce and custom CRM solutions, connecting them to your website, Google Ads, Meta Ads, email tools and analytics for full-funnel visibility.'
      },
      {
        question: 'Can you automate lead capture and sales follow-up in my CRM?',
        answer:
          'Yes. We automate lead capture from forms, ads and chat, apply lead scoring and routing rules, and build nurture sequences so sales teams focus on qualified prospects — reducing lost leads and response time.'
      },
      {
        question: 'Do you migrate data from spreadsheets or an old CRM?',
        answer:
          'Yes. We clean, map and import contacts, deals and activity history into your new CRM, deduplicate records and validate pipelines so your team starts with accurate, actionable data.'
      },
      {
        question: 'How does CRM integration improve SEO and marketing ROI?',
        answer:
          'CRM integration closes the loop between traffic sources and revenue. You see which keywords, ads and landing pages produce paying customers, so SEO, AI SEO and paid budgets shift toward highest-ROI channels.'
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
        question: 'Which social media platforms does Amora Digital manage?',
        answer:
          'We manage Instagram, LinkedIn, Facebook, TikTok, YouTube and X (Twitter). We recommend the best platform mix based on your B2B or B2C audience, industry and lead-generation goals in the Netherlands and abroad.'
      },
      {
        question: 'Do you create social media content or only schedule posts?',
        answer:
          'We handle the full workflow: content strategy, copywriting, graphic and video design, scheduling, community management, comment and DM responses, and monthly performance reporting tied to reach, engagement and leads.'
      },
      {
        question: 'Can social media marketing support my SEO and Local SEO strategy?',
        answer:
          'Yes. Social signals amplify brand searches, drive branded queries Google rewards, and distribute local content and reviews. We align social posts with SEO keyword themes and Google Business Profile updates for cohesive visibility.'
      },
      {
        question: 'How do you measure social media marketing ROI?',
        answer:
          'We track reach, engagement rate, click-through rate, cost per lead, website conversions and assisted revenue using UTM parameters, GA4 and platform analytics — not vanity metrics alone.'
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
        question: 'Which paid advertising platforms does Amora Digital manage?',
        answer:
          'We manage Google Ads (Search, Performance Max, Display, YouTube), Meta Ads (Facebook and Instagram), LinkedIn Ads, TikTok Ads and Microsoft Ads with conversion tracking, audience segmentation and ongoing bid optimization.'
      },
      {
        question: 'What is the minimum monthly ad budget for paid advertising?',
        answer:
          'We typically recommend a minimum media budget of €1,500 per month to gather enough conversion data for optimization. Smaller budgets can work for hyper-local Google Ads campaigns targeting specific Dutch cities or service areas.'
      },
      {
        question: 'Do you combine paid ads with SEO and Local SEO?',
        answer:
          'Yes. We align paid keywords with organic SEO targets, use Search Console data to inform ad copy, and run Local Service Ads and Google Maps campaigns alongside Local SEO for maximum local visibility.'
      },
      {
        question: 'How do you track paid advertising ROI and conversions?',
        answer:
          'We implement GA4, Google Tag Manager, enhanced conversions and CRM attribution so you see cost per lead, ROAS and revenue by campaign, ad group and keyword — with transparent monthly reporting.'
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
        question: 'How long does SEO take to show results in Google?',
        answer:
          'Most clients see early keyword movement within 3 months and meaningful ranking and organic traffic growth within 6–12 months. Timeline depends on domain authority, competition and technical starting point.'
      },
      {
        question: 'Does Amora Digital provide technical SEO audits and fixes?',
        answer:
          'Yes. Every SEO engagement includes a technical audit covering Core Web Vitals, crawlability, indexation, canonicalization, internal linking, schema markup and mobile usability — with prioritized implementation of fixes.'
      },
      {
        question: 'Do you offer link building and off-page SEO in the Netherlands?',
        answer:
          'Yes. We earn high-quality backlinks through digital PR, guest posting on authoritative sites, local partnerships and content-led outreach. We never buy spammy links that risk Google penalties.'
      },
      {
        question: 'What SEO services are included in your monthly retainers?',
        answer:
          'Keyword research, on-page optimization, content strategy, technical SEO, link building, Local SEO support, competitor analysis, Google Search Console monitoring and monthly ranking and traffic reports.'
      },
      {
        question: 'Can Amora Digital help my site rank for competitive keywords in the Netherlands?',
        answer:
          'Yes. We target high-intent Dutch and English keywords with topical authority content clusters, entity optimization, structured data and local signals — building sustainable organic visibility, not short-term tricks.'
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
        question: 'What is AI SEO (Generative Engine Optimization)?',
        answer:
          'AI SEO — also called Generative Engine Optimization (GEO) — is the practice of optimizing content, structured data and authority signals so AI systems like ChatGPT, Google AI Overviews, Perplexity and Claude cite your brand in their answers.'
      },
      {
        question: 'How is AI SEO different from traditional Google SEO?',
        answer:
          'Traditional SEO targets blue-link rankings in Google Search. AI SEO targets citations in AI-generated answers and focuses on entities, FAQ schema, E-E-A-T signals, factual clarity and technical markup AI crawlers can parse and trust.'
      },
      {
        question: 'Can AI SEO drive traffic and leads for my business?',
        answer:
          'Yes. Users who click through from AI citations often have high purchase intent. Appearing in AI answers also builds brand authority, which lifts conversions across organic search, paid ads and direct traffic.'
      },
      {
        question: 'What AI SEO tactics does Amora Digital use?',
        answer:
          'We implement FAQPage and Organization schema, entity-rich content, authoritative Q&A sections, structured data graphs, digital PR for citation sources, and monitoring of brand mentions across ChatGPT, Perplexity and Google AI Overviews.'
      },
      {
        question: 'Do I need AI SEO if I already rank well on Google?',
        answer:
          'Yes. AI search is a separate discovery channel growing rapidly. Brands that only optimize for traditional Google miss citations in AI Overviews and assistant answers where competitors may already appear.'
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
        question: 'Do I need Local SEO if I already have a website?',
        answer:
          'If customers search for your services in a city or region, yes. Local SEO makes you visible in Google Maps, the local 3-pack and "near me" queries — which drive the majority of local buying decisions in the Netherlands.'
      },
      {
        question: 'Does Amora Digital manage Google Business Profile optimization?',
        answer:
          'Yes. We fully set up and optimize Google Business Profile: primary and secondary categories, services, products, photos, posts, Q&A, review responses and local landing page alignment for consistent NAP data.'
      },
      {
        question: 'How do local citations improve Local SEO rankings?',
        answer:
          'Consistent NAP (name, address, phone) citations on trusted Dutch and international directories signal legitimacy to Google. We audit, build and clean citations to strengthen local pack rankings and map visibility.'
      },
      {
        question: 'Can Local SEO work for multi-location businesses in the Netherlands?',
        answer:
          'Yes. We create location-specific pages, separate or grouped Google Business Profiles, localized schema markup and review strategies so each branch ranks in its service area without cannibalizing the others.'
      },
      {
        question: 'How long does Local SEO take to rank in Google Maps?',
        answer:
          'Google Business Profile optimizations often show map visibility improvements within 4–8 weeks. Competitive cities may need 3–6 months of citations, reviews and localized content to reach top local pack positions.'
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
        question: 'Which email marketing platforms does Amora Digital use?',
        answer:
          'Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Brevo (Sendinblue) and custom integrations. We select the platform that fits your CRM, ecommerce stack and budget for scalable email automation.'
      },
      {
        question: 'Can you set up email automation and nurture sequences?',
        answer:
          'Yes. We design welcome series, abandoned cart flows, post-purchase sequences, re-engagement campaigns and lead nurture paths — then optimize open rates, click rates and revenue per email with A/B testing.'
      },
      {
        question: 'How does email marketing support SEO and lead generation?',
        answer:
          'Email drives repeat traffic to SEO-optimized content, amplifies new blog and service page launches, and nurtures organic leads captured via forms — increasing lifetime value without additional ad spend.'
      },
      {
        question: 'Do you ensure GDPR-compliant email marketing for EU audiences?',
        answer:
          'Yes. We implement double opt-in where required, clear unsubscribe flows, consent tracking and privacy-compliant data handling for Dutch and EU subscriber lists.'
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
        question: 'What is conversion rate optimization (CRO)?',
        answer:
          'CRO is the data-driven process of improving landing pages, forms and checkout flows so more visitors become leads or customers — without increasing ad spend or SEO traffic.'
      },
      {
        question: 'What conversion rate improvement can I expect from CRO?',
        answer:
          'Results vary by traffic volume and baseline, but most clients see 15–60% relative improvement on key pages within 3–6 months through structured A/B testing, heatmap analysis and UX fixes.'
      },
      {
        question: 'Which CRO tools does Amora Digital use?',
        answer:
          'Google Analytics 4, Microsoft Clarity, Hotjar, VWO and Convert.com for heatmaps, session replays, funnel analysis and statistically valid A/B tests on headlines, CTAs and form fields.'
      },
      {
        question: 'Does CRO help SEO and paid advertising performance?',
        answer:
          'Yes. Higher conversion rates improve Google Ads Quality Score, reduce cost per acquisition, and signal user satisfaction — while SEO traffic from the same rankings generates more revenue per visit.'
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
        question: 'What does a brand strategy project include?',
        answer:
          'Market and competitor research, audience personas, positioning statement, messaging framework, tone of voice, visual identity direction and brand guidelines — plus a rollout plan for website, SEO content, social media and paid ads.'
      },
      {
        question: 'Why is brand strategy important for SEO and AI SEO?',
        answer:
          'Clear brand positioning creates consistent entity signals Google and AI systems use to identify and cite your business. Unified messaging improves click-through rates, branded search volume and trust in AI-generated answers.'
      },
      {
        question: 'Can brand strategy help my business stand out in the Netherlands?',
        answer:
          'Yes. We define differentiation against local and international competitors, craft messaging that resonates with Dutch and English-speaking audiences, and align visual identity with conversion-focused web design.'
      },
      {
        question: 'How long does a brand strategy engagement take?',
        answer:
          'Typical brand strategy projects run 4–8 weeks from discovery workshops through research, positioning, messaging and guidelines delivery, with optional website and marketing asset rollout afterward.'
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
    ],
    faqs: [
      {
        question: 'What custom software development services does Amora Digital offer?',
        answer:
          'React and TypeScript front ends, PHP and Laravel backends, Java and Spring Boot APIs, mobile apps (React Native, Flutter, Swift, Kotlin), ecommerce platforms, AI automation, full-stack development and custom SaaS web applications.'
      },
      {
        question: 'Do you build SEO-friendly web applications?',
        answer:
          'Yes. We implement server-side rendering or pre-rendering where needed, semantic HTML, fast Core Web Vitals, schema markup, clean URL structures and technical SEO foundations so custom apps are discoverable by Google and AI crawlers.'
      },
      {
        question: 'How long does a custom development project take?',
        answer:
          'MVPs typically launch in 8–12 weeks. Larger platforms may run 3–6 months. We use agile sprints with weekly demos so you see progress and can prioritize features that drive SEO, leads or operational efficiency.'
      },
      {
        question: 'Does Amora Digital provide ongoing maintenance and support?',
        answer:
          'Yes. We offer SLA-backed maintenance, security patches, dependency updates, performance monitoring and feature iterations so your application stays secure, fast and aligned with evolving business and SEO needs.'
      },
      {
        question: 'Can you integrate custom software with CRM and marketing tools?',
        answer:
          'Yes. We integrate with HubSpot, Pipedrive, Zoho, Google Ads, GA4, payment gateways and internal ERP systems via REST and GraphQL APIs — connecting development work directly to marketing and sales outcomes.'
      }
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
        question: 'Do you build React applications with TypeScript?',
        answer:
          'Yes. We build React apps with TypeScript by default for type safety, fewer runtime bugs, easier refactoring and long-term maintainability — using React 18/19, Vite and modern tooling.'
      },
      {
        question: 'Can you migrate a legacy website or app to React?',
        answer:
          'Yes. We migrate jQuery, AngularJS, legacy PHP templates and older React codebases to modern React with TypeScript, preserving SEO URLs via redirects and improving Core Web Vitals during the transition.'
      },
      {
        question: 'Do React websites rank well in Google and AI search?',
        answer:
          'Yes, when built correctly. We use pre-rendering or SSR, semantic HTML, structured data and fast hydration so Googlebot and AI crawlers receive fully rendered content on first response — avoiding client-side rendering SEO pitfalls.'
      },
      {
        question: 'Can you build React dashboards and SaaS products?',
        answer:
          'Yes. We develop admin dashboards, customer portals, SaaS platforms and internal tools with role-based access, real-time data, API integrations and analytics — optimized for performance and scalability.'
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
        question: 'Do you build custom WordPress plugins and themes?',
        answer:
          'Yes. Amora Digital builds custom WordPress plugins, Gutenberg blocks and themes. We maintain Auto Form Builder, a public plugin on wordpress.org, and follow WordPress coding standards and security best practices.'
      },
      {
        question: 'Do you use Laravel for custom PHP backend development?',
        answer:
          'Yes. Laravel is our default PHP framework for REST APIs, admin panels, ecommerce backends and integrations — chosen for security, scalability and rapid development of SEO-friendly server-rendered applications.'
      },
      {
        question: 'Can PHP development improve my website SEO performance?',
        answer:
          'Yes. Server-rendered PHP and Laravel deliver fast TTFB, clean HTML for crawlers, efficient caching and structured data injection — all critical for Google rankings and AI search indexing.'
      },
      {
        question: 'Do you offer WordPress SEO optimization alongside development?',
        answer:
          'Yes. We optimize WordPress for Core Web Vitals, schema markup, XML sitemaps, canonical URLs, plugin bloat removal and technical SEO — combining development and search visibility in one engagement.'
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
    ],
    faqs: [
      {
        question: 'What Java frameworks does Amora Digital use for development?',
        answer:
          'We build enterprise applications with Java and Spring Boot — REST APIs, microservices, secure authentication, message queues and cloud-native deployments on AWS, Azure or on-premise infrastructure.'
      },
      {
        question: 'When should I choose Java over PHP or React for my project?',
        answer:
          'Java suits high-traffic enterprise systems, complex integrations, financial or healthcare compliance requirements and long-lived backends where performance, type safety and mature ecosystem tooling matter most.'
      },
      {
        question: 'Can you modernize legacy Java applications?',
        answer:
          'Yes. We refactor monoliths into microservices, upgrade Spring versions, improve API design, add observability and harden security — while maintaining uptime and data integrity during migration.'
      },
      {
        question: 'Do Java backends support SEO-friendly front-end integrations?',
        answer:
          'Yes. We expose clean REST and GraphQL APIs consumed by React or pre-rendered front ends, enabling fast, crawlable public pages backed by robust Java services for authenticated and transactional features.'
      }
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
        question: 'Do you build native or cross-platform mobile apps?',
        answer:
          'Both. We use React Native or Flutter for shared iOS and Android codebases when speed-to-market matters, and native Swift or Kotlin when deep platform APIs, performance or App Store optimization require it.'
      },
      {
        question: 'Can mobile apps integrate with my website SEO and CRM strategy?',
        answer:
          'Yes. We deep-link app content to indexed web pages, sync user data with CRM systems, implement app indexing where applicable and align app store metadata with your brand and keyword strategy.'
      },
      {
        question: 'Do you publish apps to the Apple App Store and Google Play?',
        answer:
          'Yes. We handle App Store and Google Play submission, ASO (app store optimization) for titles and descriptions, screenshot design, review compliance and post-launch update cycles.'
      },
      {
        question: 'How long does mobile app development take?',
        answer:
          'A focused MVP typically ships in 10–16 weeks. Complex apps with backend APIs, payments and offline mode may take 4–6 months. We deliver in agile sprints with testable builds every two weeks.'
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
    ],
    faqs: [
      {
        question: 'Which ecommerce platforms does Amora Digital build on?',
        answer:
          'Shopify, WooCommerce, Laravel-based custom stores and headless commerce with React front ends. We choose the stack based on catalog size, customization needs, SEO requirements and integration complexity.'
      },
      {
        question: 'Do you optimize ecommerce sites for SEO and Google Shopping?',
        answer:
          'Yes. We implement product schema markup, clean URL structures, faceted navigation controls, Core Web Vitals optimization, XML product feeds and Google Merchant Center integration for organic and paid product visibility.'
      },
      {
        question: 'Can you integrate ecommerce with ERP, CRM and payment systems?',
        answer:
          'Yes. We connect stores to Exact, AFAS, HubSpot, Pipedrive, Mollie, Stripe, PayPal and shipping providers via APIs — automating inventory, orders and customer data across your stack.'
      },
      {
        question: 'Do you build ecommerce stores for the Dutch and EU market?',
        answer:
          'Yes. We implement VAT handling, iDEAL and European payment methods, GDPR-compliant checkout, multi-language product pages and Local SEO for physical retail locations in the Netherlands.'
      }
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
    ],
    faqs: [
      {
        question: 'What AI automation services does Amora Digital provide?',
        answer:
          'We build AI-powered workflows using OpenAI, Claude, Zapier, n8n and custom pipelines — automating lead qualification, content drafting, customer support, data extraction, reporting and internal operations.'
      },
      {
        question: 'Can AI automation improve my marketing and SEO efficiency?',
        answer:
          'Yes. We automate keyword clustering, meta description drafts, content briefs, rank tracking alerts, lead scoring and CRM updates — freeing your team to focus on strategy while AI handles repetitive SEO and marketing tasks.'
      },
      {
        question: 'Is AI automation secure and GDPR compliant?',
        answer:
          'Yes. We design workflows with data minimization, EU-hosted options where required, access controls and audit logs. Sensitive data is processed according to GDPR and your internal compliance policies.'
      },
      {
        question: 'Do you integrate AI automation with existing CRM and website tools?',
        answer:
          'Yes. We connect AI agents to HubSpot, Pipedrive, WordPress, Google Sheets, Slack, email platforms and custom APIs — so automation fits your current stack without rip-and-replace projects.'
      }
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
    ],
    faqs: [
      {
        question: 'What does full-stack development include at Amora Digital?',
        answer:
          'End-to-end delivery: database design, REST or GraphQL APIs, React or Laravel application layers, authentication, DevOps setup, CI/CD pipelines, monitoring and SEO-ready public-facing pages.'
      },
      {
        question: 'Which tech stacks do you use for full-stack projects?',
        answer:
          'Common stacks include React + Laravel + MySQL/PostgreSQL, React + Java Spring Boot, and Next.js + headless CMS — selected based on scalability, team skills and SEO/rendering requirements.'
      },
      {
        question: 'Can full-stack development support my SEO and AI SEO goals?',
        answer:
          'Yes. Full-stack ownership means we control server response times, rendering strategy, structured data, URL architecture and API performance — eliminating the gaps that hurt rankings when front and back ends are siloed.'
      },
      {
        question: 'Do you offer full-stack MVPs for startups in the Netherlands?',
        answer:
          'Yes. We ship investor-ready MVPs in 8–12 weeks with core features, analytics, SEO foundations and scalable architecture so you can iterate without rebuilding from scratch.'
      }
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
    ],
    faqs: [
      {
        question: 'What types of custom web applications does Amora Digital build?',
        answer:
          'SaaS platforms, customer portals, internal dashboards, booking systems, membership sites and B2B tools — with role-based access, payment integration, real-time data and analytics built in.'
      },
      {
        question: 'Are custom web applications optimized for Google search?',
        answer:
          'Yes. Public-facing pages use pre-rendering or SSR, semantic HTML, schema markup, fast Core Web Vitals and indexable URL structures so your app ranks for product and solution keywords — not just the homepage.'
      },
      {
        question: 'Can you add AI features to an existing web application?',
        answer:
          'Yes. We integrate OpenAI and Claude APIs for chat assistants, document summarization, smart search, automated tagging and workflow triggers — embedded securely within your existing application architecture.'
      },
      {
        question: 'How do you ensure web application security and uptime?',
        answer:
          'We implement OWASP best practices, HTTPS, rate limiting, input validation, automated backups, staging environments and monitoring with alerting — backed by SLA options for production support.'
      }
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
    ],
    faqs: [
      {
        question: 'What is Auto Form Builder for WordPress?',
        answer:
          'Auto Form Builder is a WordPress form builder plugin by Amora Digital with a drag-and-drop interface for creating contact forms, lead capture forms, surveys and multi-step forms without coding.'
      },
      {
        question: 'Is Auto Form Builder available on WordPress.org?',
        answer:
          'Yes. Auto Form Builder is published on the official WordPress.org plugin directory, meeting WordPress coding standards, security review guidelines and regular update requirements.'
      },
      {
        question: 'Does Auto Form Builder support CRM and email integrations?',
        answer:
          'Yes. Forms connect to email notifications, webhooks and popular marketing tools so WordPress lead capture feeds directly into your CRM, email automation and analytics stack.'
      },
      {
        question: 'Can Auto Form Builder forms help with SEO and lead generation?',
        answer:
          'Yes. Lightweight, fast-loading forms avoid Core Web Vitals penalties. Structured conversion paths, thank-you page tracking and GA4 event integration help attribute organic and paid traffic to form submissions.'
      }
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
    ],
    faqs: [
      {
        question: 'What is Auto Form CRM?',
        answer:
          'Auto Form CRM is a lead management and customer relationship tool by Amora Digital that captures form submissions, organizes contacts, tracks deal stages and automates follow-up workflows.'
      },
      {
        question: 'How does Auto Form CRM connect website leads to sales teams?',
        answer:
          'Leads from website forms, landing pages and ads flow into Auto Form CRM automatically with source attribution, lead scoring and assignment rules so sales responds within minutes, not days.'
      },
      {
        question: 'Can Auto Form CRM integrate with email marketing and paid ads?',
        answer:
          'Yes. It syncs with email platforms and supports UTM and campaign tracking so you see which SEO keywords, Google Ads and Meta campaigns produce qualified CRM pipeline — not just form fills.'
      },
      {
        question: 'Is Auto Form CRM suitable for small businesses in the Netherlands?',
        answer:
          'Yes. It is designed for SMEs that need affordable CRM automation without enterprise complexity — with GDPR-aware data handling for Dutch and EU customer records.'
      }
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
    ],
    faqs: [
      {
        question: 'What is Hi.Fan?',
        answer:
          'Hi.Fan is a fan engagement and link-in-bio platform by Amora Digital for creators, influencers and brands — combining a single shareable profile link with fan interaction tools and analytics.'
      },
      {
        question: 'How does Hi.Fan help creators grow their audience?',
        answer:
          'Hi.Fan centralizes social links, merch, content and fan messaging in one mobile-optimized page — improving click-through from Instagram, TikTok and YouTube bios and tracking which links drive engagement.'
      },
      {
        question: 'Can brands use Hi.Fan for marketing campaigns?',
        answer:
          'Yes. Brands use Hi.Fan for campaign landing hubs, product launches, affiliate link management and UTM-tracked promotions — measuring social-to-conversion performance in one dashboard.'
      },
      {
        question: 'Is Hi.Fan optimized for mobile and search visibility?',
        answer:
          'Yes. Hi.Fan pages are mobile-first, fast-loading and indexable with clean URLs and metadata — supporting discoverability when fans search your brand name on Google.'
      }
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
    ],
    faqs: [
      {
        question: 'What is PinkPeck?',
        answer:
          'PinkPeck is a content creation and social media tool from Amora Digital that helps teams plan, create and publish engaging social content faster with templates, scheduling and performance tracking.'
      },
      {
        question: 'How does PinkPeck support social media marketing strategy?',
        answer:
          'PinkPeck streamlines content calendars, asset libraries and publishing workflows so marketing teams maintain consistent posting cadence — a signal Google and social algorithms reward with greater reach.'
      },
      {
        question: 'Can PinkPeck content align with SEO keyword themes?',
        answer:
          'Yes. Teams can map social posts to SEO content pillars and campaign keywords, amplifying blog and service page launches across social channels for coordinated organic and social visibility.'
      },
      {
        question: 'Who is PinkPeck designed for?',
        answer:
          'Marketing teams, agencies and creators who need efficient content production without sacrificing brand consistency — especially those managing multiple platforms from the Netherlands and internationally.'
      }
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
    ],
    faqs: [
      {
        question: 'What is Unbox.deal?',
        answer:
          'Unbox.deal is a deals and offers platform where shoppers discover promotions, discounts and limited-time savings from brands and retailers — built by Amora Digital.'
      },
      {
        question: 'How do brands list deals on Unbox.deal?',
        answer:
          'Brands submit offers through the platform with descriptions, discount codes, expiry dates and category tags. Listings are structured for search-friendly indexing and social sharing.'
      },
      {
        question: 'Can Unbox.deal drive traffic to my ecommerce store?',
        answer:
          'Yes. Deal listings link directly to product pages with UTM tracking so you measure click-through, conversions and ROI from promotional campaigns listed on Unbox.deal.'
      },
      {
        question: 'Is Unbox.deal optimized for search engines?',
        answer:
          'Yes. Deal pages use structured product and offer data, clean URLs, fast loading and category taxonomy — helping deal content appear in Google search and AI-generated shopping recommendations.'
      }
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
    ],
    faqs: [
      {
        question: 'What is Royal Casino Hub?',
        answer:
          'Royal Casino Hub is an iGaming content platform covering casino industry news, game reviews, operator comparisons and regulatory updates — built by Amora Digital for the online casino audience.'
      },
      {
        question: 'What type of casino content does Royal Casino Hub publish?',
        answer:
          'Expert reviews, bonus comparisons, responsible gambling guides, software provider analysis and market news — structured with schema markup and E-E-A-T signals for search and AI citation trust.'
      },
      {
        question: 'Is Royal Casino Hub optimized for SEO and AI search?',
        answer:
          'Yes. Articles use FAQ schema, Article structured data, topical authority clusters and entity optimization so content ranks in Google and can be referenced by AI assistants answering casino-related queries.'
      },
      {
        question: 'Does Royal Casino Hub promote responsible gambling?',
        answer:
          'Yes. Responsible gambling information, age restrictions and help resources are included alongside reviews — meeting regulatory expectations and building trust with readers and search engines.'
      }
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

  const pageUrl = absoluteUrl(pathname)
  const faqId = config.faqs?.length ? `${pageUrl}#faq` : undefined

  const webPage = buildWebPageSchema({
    path: pathname,
    name: meta.title,
    description: meta.description,
    type: config.pageType,
    breadcrumbId,
    image: meta.image,
    faqId
  })

  const nodes: JsonObject[] = [breadcrumb, webPage]

  if (config.extras?.length) {
    nodes.push(...config.extras)
  }

  if (config.faqs?.length) {
    nodes.push(buildFaqSchema(pathname, config.faqs))
  }

  return nodes
}

export function getFaqsForPath(pathname: string): ReadonlyArray<FaqItem> {
  return pageSeoConfig[pathname]?.faqs ?? []
}

export function getBreadcrumbs(pathname: string): ReadonlyArray<BreadcrumbItem> {
  return pageSeoConfig[pathname]?.breadcrumbs ?? [HOME]
}
