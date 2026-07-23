/**
 * Per-route SEO metadata in both English and Dutch.
 *
 * Title formula: primary keyword early + benefit + brand. Aim for ~55–60
 * characters so it isn't truncated in SERPs. Descriptions target ~150–160
 * characters with a clear value proposition and call to action.
 *
 * Keep keys (`RouteKey`) in sync with `src/i18n/routes.ts`. The mapping from
 * a pathname (en or nl) to its metadata is resolved via `getRouteKey`.
 */

import { SITE_CANONICAL_ORIGIN, SITE_NAME } from './siteConfig'
import {
  DEFAULT_LOCALE,
  ROUTES,
  getRouteKey,
  type Locale,
  type RouteKey
} from './i18n/routes'

export type RouteMeta = {
  title: string
  description: string
  keywords?: readonly string[]
  ogImage?: string
}

function ogAssetPng(fileBase: string): string {
  return `${SITE_CANONICAL_ORIGIN}/og/${fileBase}.png`
}

/**
 * Resolves the OG image for a given RouteKey. Filenames follow the English
 * URL slug (`/marketing/paid-advertising` → `paid-advertising.png`). Home,
 * about, contact and privacy share `Home.png`.
 */
function ogImageForKey(key: RouteKey): string {
  if (key === 'home' || key === 'contact' || key === 'privacy' || key === 'about') {
    return ogAssetPng('Home')
  }
  const enPath = ROUTES[key].en
  const segment = enPath.slice(enPath.lastIndexOf('/') + 1)
  return ogAssetPng(segment)
}

const META: Record<RouteKey, Record<Locale, RouteMeta>> = {
  home: {
    en: {
      title: `${SITE_NAME} | Digital Marketing & Development Agency`,
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
    nl: {
      title: `${SITE_NAME} | Digitale marketing & softwareontwikkeling`,
      description:
        'Amora Digital is een Nederlands digital marketing- en softwareontwikkelingsbureau. Groei met SEO, AI SEO, online adverteren, webdesign, React, PHP en Java.',
      keywords: [
        'digital marketing bureau Nederland',
        'SEO bureau',
        'AI SEO bureau',
        'softwareontwikkelaar',
        'React development Nederland',
        'PHP development',
        'maatwerk software Nederland'
      ]
    }
  },

  about: {
    en: {
      title: `About Amora Digital | Our Team, Mission & Values`,
      description:
        'Meet the Amora Digital team, our mission and how we help businesses grow with digital marketing, SEO and custom software development in the Netherlands.',
      keywords: ['about Amora Digital', 'digital agency team', 'Netherlands marketing agency']
    },
    nl: {
      title: `Over Amora Digital | Ons team, missie & waarden`,
      description:
        'Maak kennis met het team van Amora Digital, onze missie en hoe wij bedrijven laten groeien met digitale marketing, SEO en softwareontwikkeling in Nederland.',
      keywords: ['over Amora Digital', 'digitaal bureau team', 'marketingbureau Nederland']
    }
  },

  contact: {
    en: {
      title: `Contact Amora Digital | Free Consultation & Project Quote`,
      description:
        'Contact Amora Digital for a free consultation. Call, email or send a message — we reply within one business day to every marketing and development inquiry.',
      keywords: ['contact Amora Digital', 'free marketing consultation', 'digital agency contact Netherlands']
    },
    nl: {
      title: `Contact Amora Digital | Gratis adviesgesprek & offerte`,
      description:
        'Neem contact op met Amora Digital voor een gratis adviesgesprek. Bel, mail of stuur een bericht — wij reageren binnen één werkdag op elke aanvraag.',
      keywords: ['contact Amora Digital', 'gratis marketing advies', 'digitaal bureau contact Nederland']
    }
  },

  privacy: {
    en: {
      title: `Privacy Policy | ${SITE_NAME}`,
      description:
        'How Amora Digital collects, uses and protects your personal data in line with the GDPR and Dutch privacy law. Read our full privacy policy.',
      keywords: ['privacy policy', 'GDPR', 'data protection']
    },
    nl: {
      title: `Privacybeleid | ${SITE_NAME}`,
      description:
        'Hoe Amora Digital persoonsgegevens verzamelt, gebruikt en beschermt conform de AVG en de Nederlandse privacywetgeving. Lees ons volledige privacybeleid.',
      keywords: ['privacybeleid', 'AVG', 'gegevensbescherming', 'GDPR']
    }
  },

  marketing: {
    en: {
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
    nl: {
      title: `Digitale marketing | SEO, advertenties, social & meer`,
      description:
        'Volledige digitale marketing: SEO, AI SEO, lokale SEO, online adverteren, social media, e-mailmarketing, CRO, merkstrategie, CRM en webdesign.',
      keywords: [
        'digitale marketing diensten',
        'SEO diensten',
        'online adverteren',
        'social media marketing',
        'marketingbureau Nederland'
      ]
    }
  },

  'website-design': {
    en: {
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
    nl: {
      title: `Webdesign | Conversiegericht, mobile-first ontwerp`,
      description:
        'Conversiegericht en mobile-first webdesign. Maatwerk websites in lijn met je merk, gebouwd voor snelheid, Core Web Vitals en meer leads.',
      keywords: [
        'webdesign Nederland',
        'maatwerk webdesign',
        'mobile-first website',
        'conversiegericht webdesign'
      ]
    }
  },

  'crm-solutions': {
    en: {
      title: `CRM Solutions | HubSpot, Pipedrive, Zoho & Custom CRM`,
      description:
        'CRM setup, integrations and automation so leads never fall through the cracks. HubSpot, Pipedrive, Zoho, Salesforce and custom CRM implementations.',
      keywords: ['CRM solutions', 'HubSpot implementation', 'Pipedrive setup', 'CRM automation']
    },
    nl: {
      title: `CRM-oplossingen | HubSpot, Pipedrive, Zoho & maatwerk CRM`,
      description:
        'CRM-implementatie, koppelingen en automatisering zodat geen lead verloren gaat. HubSpot, Pipedrive, Zoho, Salesforce en maatwerk CRM-systemen.',
      keywords: ['CRM oplossingen', 'HubSpot implementatie', 'Pipedrive setup', 'CRM automatisering']
    }
  },

  'social-media-marketing': {
    en: {
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
    nl: {
      title: `Social media marketing | Instagram, LinkedIn, TikTok & meer`,
      description:
        'Social media marketing op Instagram, LinkedIn, Facebook, TikTok en YouTube — strategie, content en communitymanagement die je merk laten groeien.',
      keywords: [
        'social media marketing',
        'Instagram marketing',
        'LinkedIn marketing',
        'TikTok marketingbureau'
      ]
    }
  },

  'paid-advertising': {
    en: {
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
    nl: {
      title: `Online adverteren | Google Ads, Meta Ads & retargeting`,
      description:
        'Online adverteren met focus op ROI: Google Ads, Meta Ads, LinkedIn Ads en retargeting. Datagedreven advertentiebeheer met heldere rapportage.',
      keywords: [
        'Google Ads bureau',
        'Meta Ads bureau',
        'SEA bureau',
        'online adverteren Nederland'
      ]
    }
  },

  'seo-services': {
    en: {
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
    nl: {
      title: `SEO diensten | Technische SEO, on-page & linkbuilding`,
      description:
        'Technische SEO, on-page optimalisatie, contentstrategie en linkbuilding om hoger te scoren in Google en meer organisch verkeer te krijgen. Gratis SEO-audit.',
      keywords: [
        'SEO diensten',
        'SEO bureau Nederland',
        'technische SEO',
        'on-page SEO',
        'linkbuilding'
      ]
    }
  },

  'ai-seo': {
    en: {
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
    nl: {
      title: `AI SEO bureau | Scoor in ChatGPT, Perplexity & Google AI`,
      description:
        'AI SEO zodat ChatGPT, Perplexity, Google AI Overviews en Claude jouw merk noemen. Entity-content, structured data en E-E-A-T autoriteitssignalen.',
      keywords: [
        'AI SEO',
        'ChatGPT SEO',
        'Perplexity SEO',
        'Generative Engine Optimization',
        'GEO',
        'Google AI Overviews'
      ]
    }
  },

  'local-seo': {
    en: {
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
    nl: {
      title: `Lokale SEO | Google-bedrijfsprofiel & Maps-ranking`,
      description:
        'Word lokaal beter gevonden. Optimalisatie van Google-bedrijfsprofiel, lokale vermeldingen, reviews en zichtbaarheid in Maps voor lokale bedrijven.',
      keywords: [
        'lokale SEO',
        'Google bedrijfsprofiel optimalisatie',
        'Google Maps SEO',
        'in de buurt SEO'
      ]
    }
  },

  'email-marketing': {
    en: {
      title: `Email Marketing Services | Automation, Newsletters, Flows`,
      description:
        'Email automation, newsletters and nurture sequences that turn subscribers into paying customers. Klaviyo, Mailchimp, HubSpot and custom platforms.',
      keywords: ['email marketing', 'email automation', 'Klaviyo agency', 'Mailchimp agency']
    },
    nl: {
      title: `E-mailmarketing | Automatisering, nieuwsbrieven & flows`,
      description:
        'E-mailautomatisering, nieuwsbrieven en nurture-flows die abonnees omzetten in betalende klanten. Klaviyo, Mailchimp, HubSpot en maatwerk platformen.',
      keywords: ['e-mailmarketing', 'e-mailautomatisering', 'Klaviyo bureau', 'Mailchimp bureau']
    }
  },

  'conversion-optimization': {
    en: {
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
    nl: {
      title: `Conversie-optimalisatie | CRO & A/B-testing bureau`,
      description:
        'Conversie-optimalisatie (CRO), A/B-testing en landingspagina-optimalisatie om je funnel meer te laten converteren — datagedreven, geen onderbuik.',
      keywords: [
        'conversie optimalisatie',
        'CRO bureau',
        'A/B testing',
        'landingspagina optimalisatie'
      ]
    }
  },

  'brand-strategy': {
    en: {
      title: `Brand Strategy Services | Positioning, Messaging & Identity`,
      description:
        'Brand positioning, messaging framework and visual identity so your brand stands out, attracts the right customers and commands premium pricing.',
      keywords: ['brand strategy', 'brand positioning', 'brand identity agency', 'rebranding']
    },
    nl: {
      title: `Merkstrategie | Positionering, messaging & merkidentiteit`,
      description:
        'Merkpositionering, messaging-framework en visuele identiteit zodat je merk opvalt, de juiste klanten aantrekt en hogere prijzen rechtvaardigt.',
      keywords: ['merkstrategie', 'merkpositionering', 'merkidentiteit bureau', 'rebranding']
    }
  },

  development: {
    en: {
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
    nl: {
      title: `Softwareontwikkeling op maat | React, PHP, Java, AI`,
      description:
        'Softwareontwikkeling op maat: React, PHP, Java, mobiele apps, e-commerce, AI-automatisering, full-stack en webapplicaties — gebouwd op performance en schaal.',
      keywords: [
        'softwareontwikkeling op maat',
        'React development bureau',
        'PHP development',
        'Java development',
        'mobiele app ontwikkeling Nederland'
      ]
    }
  },

  react: {
    en: {
      title: `React Development Services | Modern Apps, SPAs & Dashboards`,
      description:
        'Modern React applications built with TypeScript, Vite and Next.js — SPAs, dashboards and performant front ends engineered for scale and SEO.',
      keywords: ['React development', 'React agency', 'TypeScript development', 'Next.js agency']
    },
    nl: {
      title: `React Development | Moderne apps, SPA's & dashboards`,
      description:
        "Moderne React-applicaties met TypeScript, Vite en Next.js — SPA's, dashboards en snelle front ends gebouwd op schaal en SEO.",
      keywords: ['React development', 'React bureau', 'TypeScript development', 'Next.js bureau']
    }
  },

  php: {
    en: {
      title: `PHP Development Services | Laravel, WordPress & Custom APIs`,
      description:
        'Custom PHP development with Laravel and WordPress — secure backends, REST APIs, custom plugins and high-performance web applications.',
      keywords: ['PHP development', 'Laravel agency', 'WordPress development', 'custom PHP backend']
    },
    nl: {
      title: `PHP Development | Laravel, WordPress & maatwerk API's`,
      description:
        "PHP-development op maat met Laravel en WordPress — veilige backends, REST API's, custom plugins en snelle webapplicaties.",
      keywords: ['PHP development', 'Laravel bureau', 'WordPress development', 'maatwerk PHP backend']
    }
  },

  java: {
    en: {
      title: `Java Development | Spring Boot APIs & Microservices`,
      description:
        'Enterprise Java development with Spring Boot — scalable microservices, REST APIs and secure integrations for high-traffic and regulated industries.',
      keywords: ['Java development', 'Spring Boot agency', 'enterprise Java', 'Java microservices']
    },
    nl: {
      title: `Java Development | Spring Boot, API's & microservices`,
      description:
        "Enterprise Java-development met Spring Boot — schaalbare microservices, REST API's en veilige integraties voor high-traffic en gereguleerde sectoren.",
      keywords: ['Java development', 'Spring Boot bureau', 'enterprise Java', 'Java microservices']
    }
  },

  'mobile-apps': {
    en: {
      title: `Mobile App Development | iOS, Android & React Native`,
      description:
        'Native and cross-platform mobile apps for iOS and Android with React Native, Flutter, Swift and Kotlin — from discovery to store launch.',
      keywords: [
        'mobile app development',
        'iOS app development',
        'Android app development',
        'React Native agency'
      ]
    },
    nl: {
      title: `Mobiele app-ontwikkeling | iOS, Android & React Native`,
      description:
        'Native en cross-platform mobiele apps voor iOS en Android met React Native, Flutter, Swift en Kotlin — van concept tot publicatie in de stores.',
      keywords: [
        'mobiele app ontwikkeling',
        'iOS app ontwikkeling',
        'Android app ontwikkeling',
        'React Native bureau'
      ]
    }
  },

  ecommerce: {
    en: {
      title: `E-Commerce Development | Shopify, WooCommerce & Custom`,
      description:
        'E-commerce websites on Shopify, WooCommerce and custom platforms with payments, inventory, ERP/CRM integrations and conversion-focused design.',
      keywords: ['ecommerce development', 'Shopify agency', 'WooCommerce agency', 'online store']
    },
    nl: {
      title: `E-commerce ontwikkeling | Shopify, WooCommerce & maatwerk`,
      description:
        'E-commerce websites op Shopify, WooCommerce en maatwerk platformen met betalingen, voorraad, ERP/CRM-koppelingen en conversiegericht ontwerp.',
      keywords: ['e-commerce ontwikkeling', 'Shopify bureau', 'WooCommerce bureau', 'webshop laten maken']
    }
  },

  'ai-automation': {
    en: {
      title: `AI & Automation | Workflow AI, Chatbots & Integrations`,
      description:
        'AI-powered workflows and automation using OpenAI, Claude, Zapier, n8n and custom pipelines — save hours and scale operations without adding headcount.',
      keywords: ['AI automation', 'workflow automation', 'AI integration', 'chatbot development']
    },
    nl: {
      title: `AI & automatisering | Workflow-AI, chatbots & integraties`,
      description:
        'AI-workflows en automatisering met OpenAI, Claude, Zapier, n8n en maatwerk pipelines — bespaar uren en schaal je operatie zonder extra personeel.',
      keywords: ['AI automatisering', 'workflow automatisering', 'AI integratie', 'chatbot ontwikkeling']
    }
  },

  'full-stack': {
    en: {
      title: `Full-Stack Development | APIs, Front End & DevOps`,
      description:
        'End-to-end full-stack development from database to UI — REST/GraphQL APIs, modern front ends and DevOps-ready delivery pipelines.',
      keywords: ['full-stack development', 'full stack agency', 'API development', 'DevOps']
    },
    nl: {
      title: `Full-stack development | API's, front end & DevOps`,
      description:
        "Full-stack development van database tot UI — REST/GraphQL API's, moderne front ends en DevOps-klare deployment pipelines.",
      keywords: ['full-stack development', 'full stack bureau', 'API ontwikkeling', 'DevOps']
    }
  },

  'web-applications': {
    en: {
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
    nl: {
      title: `Webapplicaties op maat | SaaS, portals & interne tools`,
      description:
        'Maatwerk SaaS, klantportalen, dashboards en interne tools — veilige, schaalbare webapplicaties met rolgebaseerde toegang, analytics en koppelingen.',
      keywords: [
        'webapplicatie ontwikkeling',
        'SaaS ontwikkeling',
        'maatwerk portaal',
        'interne tools'
      ]
    }
  },

  'auto-form-builder': {
    en: {
      title: `Auto Form Builder | WordPress Form Builder Plugin`,
      description:
        'Auto Form Builder — the WordPress form builder plugin to create powerful, conversion-focused forms with an intuitive drag-and-drop interface.',
      keywords: ['WordPress form builder', 'form plugin', 'Auto Form Builder']
    },
    nl: {
      title: `Auto Form Builder | WordPress formulieren plugin`,
      description:
        'Auto Form Builder — de WordPress formulierenbouwer waarmee je krachtige, conversiegerichte formulieren bouwt met een intuïtieve drag-and-drop interface.',
      keywords: ['WordPress formulieren plugin', 'formulieren plugin', 'Auto Form Builder']
    }
  },

  'auto-form-crm': {
    en: {
      title: `Auto Form CRM | Lead & Customer Management Platform`,
      description:
        'Auto Form CRM helps you capture leads from forms, track conversations and close more deals with automation and integrations.',
      keywords: ['CRM software', 'lead management', 'Auto Form CRM']
    },
    nl: {
      title: `Auto Form CRM | Lead- en klantbeheer platform`,
      description:
        'Auto Form CRM helpt je leads uit formulieren vast te leggen, gesprekken te volgen en meer deals te sluiten met automatisering en integraties.',
      keywords: ['CRM software', 'leadbeheer', 'Auto Form CRM']
    }
  },

  'hi-fan': {
    en: {
      title: `Hi.Fan | Fan Engagement & Link-in-Bio for Creators`,
      description:
        'Hi.Fan is a fan engagement and link-in-bio platform for creators and brands to grow audiences, collect leads and monetise content.',
      keywords: ['link in bio', 'fan engagement platform', 'creator tools']
    },
    nl: {
      title: `Hi.Fan | Fan engagement & link-in-bio voor creators`,
      description:
        'Hi.Fan is een fan engagement- en link-in-bio platform voor creators en merken om hun publiek te laten groeien, leads te verzamelen en content te monetiseren.',
      keywords: ['link in bio', 'fan engagement platform', 'creator tools']
    }
  },

  pinkpeck: {
    en: {
      title: `PinkPeck | Content Creation & Social Toolkit`,
      description:
        'PinkPeck by Amora Digital is a content creation and social toolkit — templates, scheduling and AI helpers to ship better-looking social posts faster.',
      keywords: ['content creation tool', 'social media tools', 'PinkPeck']
    },
    nl: {
      title: `PinkPeck | Content creation & social toolkit`,
      description:
        'PinkPeck van Amora Digital is een toolkit voor contentcreatie en social media — templates, planning en AI-hulp om sneller mooier social content te maken.',
      keywords: ['content creation tool', 'social media tools', 'PinkPeck']
    }
  },

  'unbox-deal': {
    en: {
      title: `Unbox.deal | Discover Deals, Offers & Promotions`,
      description:
        'Unbox.deal — deals and offers platform. Discover promotions, coupons and savings across popular online stores and brands.',
      keywords: ['deals platform', 'discount offers', 'Unbox.deal']
    },
    nl: {
      title: `Unbox.deal | Ontdek deals, aanbiedingen & promoties`,
      description:
        'Unbox.deal — platform voor deals en aanbiedingen. Ontdek promoties, kortingscodes en besparingen bij populaire webshops en merken.',
      keywords: ['deals platform', 'kortingen', 'Unbox.deal', 'aanbiedingen']
    }
  },

  'royal-casino-hub': {
    en: {
      title: `Royal Casino Hub | Casino Industry News & Reviews`,
      description:
        'Royal Casino Hub is a casino review and news platform by Amora Digital — expert reviews, community ratings, industry news and guides for the iGaming audience.',
      keywords: ['casino reviews', 'casino news', 'iGaming industry']
    },
    nl: {
      title: `Royal Casino Hub | Casino-nieuws & reviews`,
      description:
        'Royal Casino Hub is een casino-review- en nieuwsplatform van Amora Digital — expert-reviews, community-beoordelingen, branchenieuws en gidsen voor iGaming-fans.',
      keywords: ['casino reviews', 'casino nieuws', 'iGaming industrie']
    }
  },

  branches: {
    en: {
      title: `Online marketing by industry | Amora Digital`,
      description:
        'Online marketing by industry: websites, SEO and campaigns tailored to your sector. Amora Digital has completed 1,500+ projects. Explore your industry hub.',
      keywords: ['online marketing by industry', 'industry marketing', 'SEO by industry'],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Online marketing per branche | Amora Digital`,
      description:
        'Online marketing per branche: websites, SEO en campagnes gericht op jouw sector. Amora Digital helpt met 1.500+ afgeronde projecten. Ontdek jouw branche.',
      keywords: ['online marketing per branche', 'branche marketing', 'SEO per branche'],
      ogImage: ogAssetPng('Home')
    }
  },

  'branches-restaurants': {
    en: {
      title: `Online marketing for restaurants | Amora Digital`,
      description:
        'Online marketing for restaurants & cafés: websites, local SEO, social and Google Ads for more guests and reservations. 1,500+ projects.',
      keywords: [
        'online marketing for restaurants',
        'restaurant SEO',
        'restaurant website',
        'Google Ads hospitality'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Online marketing voor restaurants | Amora Digital`,
      description:
        'Online marketing voor restaurants & cafés: websites, lokale SEO, social en Google Ads voor meer gasten en reserveringen. 1.500+ projecten.',
      keywords: [
        'online marketing voor restaurants',
        'SEO restaurant',
        'website restaurant',
        'Google Ads horeca'
      ],
      ogImage: ogAssetPng('Home')
    }
  },

  'branches-tandartsen': {
    en: {
      title: `Online marketing for dentists | Amora Digital`,
      description:
        'Online marketing for dentists: websites, local SEO, Google Ads and social to attract new patients and fill your agenda. 1,500+ projects.',
      keywords: [
        'online marketing for dentists',
        'dentist SEO',
        'dental practice website',
        'Google Ads dentists'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Online marketing voor tandartsen | Amora Digital`,
      description:
        'Online marketing voor tandartsen: websites, lokale SEO, Google Ads en social om nieuwe patiënten aan te trekken en je agenda te vullen. 1.500+ projecten.',
      keywords: [
        'online marketing voor tandartsen',
        'SEO tandarts',
        'website tandartspraktijk',
        'Google Ads tandarts'
      ],
      ogImage: ogAssetPng('Home')
    }
  },

  'branches-fysiotherapeuten': {
    en: {
      title: `Online marketing for physiotherapists | Amora`,
      description:
        'Online marketing for physiotherapists: websites, local SEO and Google Ads to attract new clients and fill your agenda. 1,500+ projects.',
      keywords: [
        'online marketing for physiotherapists',
        'physiotherapy SEO',
        'physio practice website',
        'Google Ads physiotherapy'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Online marketing voor fysiotherapeuten | Amora`,
      description:
        'Online marketing voor fysiotherapeuten: websites, lokale SEO en Google Ads om nieuwe cliënten aan te trekken en je agenda te vullen. 1.500+ projecten.',
      keywords: [
        'online marketing voor fysiotherapeuten',
        'SEO fysiotherapie',
        'website fysiopraktijk',
        'Google Ads fysiotherapie'
      ],
      ogImage: ogAssetPng('Home')
    }
  },

  'branches-kappers-schoonheidssalons': {
    en: {
      title: `Online marketing for hair & beauty salons | Amora`,
      description:
        'Online marketing for hairdressers and beauty salons: websites, local SEO and social to get more bookings. 1,500+ projects.',
      keywords: [
        'online marketing for hairdressers',
        'beauty salon SEO',
        'salon website',
        'social media for salons'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Online marketing voor kappers | Amora Digital`,
      description:
        'Online marketing voor kappers en schoonheidssalons: websites, lokale SEO en social voor meer boekingen. 1.500+ projecten.',
      keywords: [
        'online marketing voor kappers',
        'SEO schoonheidssalon',
        'website kapper',
        'social media salon'
      ],
      ogImage: ogAssetPng('Home')
    }
  },

  'branches-makelaars': {
    en: {
      title: `Online marketing for real estate agents | Amora`,
      description:
        'Online marketing for real estate agents: websites, local SEO, Google Ads and social for more listings and leads. 1,500+ projects.',
      keywords: [
        'online marketing for real estate agents',
        'estate agent SEO',
        'real estate website',
        'Google Ads real estate'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Online marketing voor makelaars | Amora Digital`,
      description:
        'Online marketing voor makelaars: websites, lokale SEO, Google Ads en social voor meer opdrachten en leads. 1.500+ projecten.',
      keywords: [
        'online marketing voor makelaars',
        'SEO makelaar',
        'website makelaarskantoor',
        'Google Ads makelaar'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-restaurants-website-laten-maken': {
    en: {
      title: `Website design for restaurants | Amora`,
      description:
        'Restaurant website with online reservations, digital menu, Maps and mobile booking. Built for hospitality. 1,500+ projects.',
      keywords: [
        'website design for restaurants',
        'restaurant website',
        'online reservation system',
        'digital menu restaurant'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Website laten maken voor restaurants | Amora`,
      description:
        'Restaurantwebsite met online reserveringen, digitale menukaart, Maps en mobiel boeken. Speciaal voor horeca. 1.500+ projecten.',
      keywords: [
        'website laten maken voor restaurants',
        'restaurant website',
        'online reserveringssysteem',
        'digitale menukaart'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-restaurants-lokale-seo': {
    en: {
      title: `Local SEO for restaurants | Amora`,
      description:
        'Local SEO for restaurants: Google Business Profile, Maps, reviews and neighbourhood keywords that fill covers. 1,500+ projects.',
      keywords: [
        'local SEO for restaurants',
        'restaurant Google Maps',
        'Google Business Profile restaurant',
        'restaurant reviews SEO'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Lokale SEO voor restaurants | Amora`,
      description:
        'Lokale SEO voor restaurants: Google Bedrijfsprofiel, Maps, reviews en buurtzoekwoorden die covers vullen. 1.500+ projecten.',
      keywords: [
        'lokale SEO voor restaurants',
        'restaurant Google Maps',
        'Google Bedrijfsprofiel restaurant',
        'reviews restaurant SEO'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-restaurants-social-media': {
    en: {
      title: `Social media for restaurants | Amora`,
      description:
        'Social media management for restaurants: food posts, kitchen Reels, specials and local ads. 1,500+ projects.',
      keywords: [
        'social media management for restaurants',
        'restaurant Instagram',
        'restaurant social media',
        'hospitality social media'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Social media voor restaurants | Amora`,
      description:
        'Social media voor restaurants: foodposts, keuken-Reels, specials en lokale ads. 1.500+ projecten.',
      keywords: [
        'social media voor restaurants',
        'social media restaurant',
        'social media beheer horeca',
        'Instagram restaurant'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-tandartsen-website-laten-maken': {
    en: {
      title: `Website design for dentists | Amora`,
      description:
        'Dental practice website with online appointments, treatments, new-patient registration and mobile booking. 1,500+ projects.',
      keywords: [
        'website design for dentists',
        'dental practice website',
        'online dental appointments',
        'dentist website'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Website laten maken voor tandartsen | Amora`,
      description:
        'Praktijkwebsite voor tandartsen met online afspraken, behandelingen, inschrijving nieuwe patiënten en mobiel boeken. 1.500+ projecten.',
      keywords: [
        'website laten maken voor tandartsen',
        'website tandartspraktijk',
        'online afspraak tandarts',
        'tandarts website'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-tandartsen-lokale-seo': {
    en: {
      title: `Local SEO for dentists | Amora`,
      description:
        'Local SEO for dentists: Google Business Profile, Maps, patient reviews and city keywords that fill the agenda. 1,500+ projects.',
      keywords: [
        'local SEO for dentists',
        'dentist Google Maps',
        'Google Business Profile dentist',
        'dental practice reviews'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Lokale SEO voor tandartsen | Amora`,
      description:
        'Lokale SEO voor tandartsen: Google Bedrijfsprofiel, Maps, patiëntreviews en stadszoekwoorden die de agenda vullen. 1.500+ projecten.',
      keywords: [
        'lokale SEO voor tandartsen',
        'tandarts Google Maps',
        'Google Bedrijfsprofiel tandarts',
        'patiëntreviews tandarts'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-fysiotherapeuten-website-laten-maken': {
    en: {
      title: `Website design for physiotherapists | Amora`,
      description:
        'Physio website with online booking, specialisations, DTF and insurance info, built for new client intakes. 1,500+ projects.',
      keywords: [
        'website design for physiotherapists',
        'physiotherapy website',
        'physio online booking',
        'fysio website'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Website laten maken voor fysiotherapeuten | Amora`,
      description:
        'Fysiowebsite met online afspraken, specialisaties, DTF- en vergoedingsinfo — gebouwd voor nieuwe cliëntintakes. 1.500+ projecten.',
      keywords: [
        'website laten maken voor fysiotherapeuten',
        'website fysiotherapie',
        'online afspraak fysio',
        'fysiopraktijk website'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-fysiotherapeuten-lokale-seo': {
    en: {
      title: `Local SEO for physiotherapists | Amora`,
      description:
        'Local SEO for physiotherapists: Google Business Profile, Maps, reviews and specialisation keywords. 1,500+ projects.',
      keywords: [
        'local SEO for physiotherapists',
        'physiotherapist Google Maps',
        'Google Business Profile physio',
        'sports physio SEO'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Lokale SEO voor fysiotherapeuten | Amora`,
      description:
        'Lokale SEO voor fysiotherapeuten: Google Bedrijfsprofiel, Maps, reviews en specialisatiezoekwoorden. 1.500+ projecten.',
      keywords: [
        'lokale SEO voor fysiotherapeuten',
        'fysiotherapeut Google Maps',
        'Google Bedrijfsprofiel fysio',
        'sportfysio SEO'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-kappers-schoonheidssalons-website-laten-maken': {
    en: {
      title: `Website design for hair & beauty salons | Amora`,
      description:
        'Salon website with 24/7 online booking, price list, portfolio gallery and mobile path. Built for chairs. 1,500+ projects.',
      keywords: [
        'website design for hair & beauty salons',
        'salon website',
        'hairdresser online booking',
        'beauty salon website'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Website laten maken voor kappers | Amora`,
      description:
        'Salonwebsite met 24/7 online boeken, prijslijst, portfoliogalerij en mobiel pad. Gebouwd voor volle stoelen. 1.500+ projecten.',
      keywords: [
        'website laten maken voor kappers',
        'website kapsalon',
        'online afspraak kapper',
        'schoonheidssalon website'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-kappers-schoonheidssalons-lokale-seo': {
    en: {
      title: `Local SEO for hair & beauty salons | Amora`,
      description:
        'Local SEO for salons: Google Business Profile, Maps, reviews, result photos and treatment keywords. 1,500+ projects.',
      keywords: [
        'local SEO for hair & beauty salons',
        'hairdresser Google Maps',
        'salon Google Business Profile',
        'beauty salon reviews'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Lokale SEO voor kappers | Amora`,
      description:
        'Lokale SEO voor kappers: Google Bedrijfsprofiel, Maps, reviews, resultaatfoto’s en behandelzoekwoorden. 1.500+ projecten.',
      keywords: [
        'lokale SEO voor kappers',
        'kapper Google Maps',
        'Google Bedrijfsprofiel salon',
        'reviews kapsalon'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-makelaars-website-laten-maken': {
    en: {
      title: `Website design for real estate agents | Amora`,
      description:
        'Estate agent website with listings, Funda/Realworks feeds, free valuation forms and mobile buyer paths. 1,500+ projects.',
      keywords: [
        'website design for real estate agents',
        'estate agent website',
        'real estate listings website',
        'property valuation form'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Website laten maken voor makelaars | Amora`,
      description:
        'Makelaarswebsite met woningaanbod, Funda/Realworks-feeds, gratis waardebepaling en mobiel pad voor kopers. 1.500+ projecten.',
      keywords: [
        'website laten maken voor makelaars',
        'website makelaarskantoor',
        'woningaanbod website',
        'gratis waardebepaling'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-makelaars-lokale-seo': {
    en: {
      title: `Local SEO for real estate agents | Amora`,
      description:
        'Local SEO for estate agents: Google Business Profile, Maps, district pages and valuation keywords. 1,500+ projects.',
      keywords: [
        'local SEO for real estate agents',
        'estate agent Google Maps',
        'makelaar local SEO',
        'sell house city SEO'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Lokale SEO voor makelaars | Amora`,
      description:
        'Lokale SEO voor makelaars: Google Bedrijfsprofiel, Maps, wijkpagina’s en waardebepalingzoekwoorden. 1.500+ projecten.',
      keywords: [
        'lokale SEO voor makelaars',
        'makelaar Google Maps',
        'wijkpagina’s makelaar',
        'gratis waardebepaling SEO'
      ],
      ogImage: ogAssetPng('Home')
    }
  },
  'branches-makelaars-social-media': {
    en: {
      title: `Social media for real estate agents | Amora`,
      description:
        'Social media management for estate agents: listings, sold proof, Reels and local ads. 1,500+ projects.',
      keywords: [
        'social media management for real estate agents',
        'estate agent Instagram',
        'real estate social media',
        'makelaar social media'
      ],
      ogImage: ogAssetPng('Home')
    },
    nl: {
      title: `Social media voor makelaars | Amora`,
      description:
        'Social media voor makelaars: woningposts, net verkocht, Reels en lokale ads. 1.500+ projecten.',
      keywords: [
        'social media voor makelaars',
        'social media makelaar',
        'social media beheer makelaar',
        'Instagram makelaar'
      ],
      ogImage: ogAssetPng('Home')
    }
  }
}

export function getMetaForKey(key: RouteKey, locale: Locale): RouteMeta {
  const entry = META[key][locale]
  return { ...entry, ogImage: entry.ogImage ?? ogImageForKey(key) }
}

export function getMetaForPath(pathname: string, locale?: Locale): RouteMeta {
  const key = getRouteKey(pathname)
  if (key) {
    const loc = locale ?? (pathname.startsWith('/nl') ? 'nl' : 'en')
    return getMetaForKey(key, loc)
  }
  const loc = locale ?? DEFAULT_LOCALE
  if (loc === 'nl') {
    return {
      title: `Pagina niet gevonden | ${SITE_NAME}`,
      description:
        'De pagina die je zoekt bestaat niet. Ga terug naar de Amora Digital homepage of gebruik het menu.'
    }
  }
  return {
    title: `Page not found | ${SITE_NAME}`,
    description:
      'The page you requested does not exist. Return to the Amora Digital home or use the navigation menu to find what you need.'
  }
}
