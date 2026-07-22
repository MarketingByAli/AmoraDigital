/**
 * Per-page schema definitions — bilingual (en + nl).
 *
 * Each page is keyed by its logical `RouteKey`. The page's pathname (which
 * differs per locale) is resolved at render time via `pathFor`. Breadcrumbs,
 * services, products and FAQs are all available in both languages so the
 * structured-data graph matches the page's visible content for every locale.
 *
 * Output is consumed by `DocumentMeta` via `resolvePageSchema(pathname)`.
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
import {
  LOCALE_HTML_LANG,
  ROUTES,
  getRouteKey,
  localeFromPath,
  pathFor,
  type Locale,
  type RouteKey
} from '../i18n/routes'
import { BUSINESS_FOUNDING_DATE } from '../siteConfig'

/**
 * Build-time date (injected via Vite `define`). Ensures every prerendered
 * page carries a fresh `dateModified` in its WebPage JSON-LD — a strong
 * freshness signal for Google and AI crawlers on every deploy.
 * Falls back to the founding date for dev-mode runtime where the define
 * is unavailable.
 */
const BUILD_DATE: string =
  typeof __BUILD_DATE__ === 'string' ? __BUILD_DATE__ : BUSINESS_FOUNDING_DATE

export type FaqItem = { question: string; answer: string }

type ServiceArgs = {
  serviceType: string
  category: 'Digital Marketing' | 'Software Development' | 'Web Development'
  offers?: Array<{ name: string; description?: string }>
}

type ProductArgs = {
  category?: string
  applicationCategory?: string
  operatingSystem?: string
  /**
   * Optional offer overrides. Omit for the default free `InStock` offer that
   * satisfies Google Rich Results validation for SoftwareApplication/Product.
   * Use `availability: 'https://schema.org/PreOrder'` for coming-soon items.
   */
  offers?: { price?: string; priceCurrency?: string; availability?: string }
}

type PageSeoLocaleEntry = {
  /** Display name for this page in the breadcrumb trail. */
  breadcrumbName: string
  /** Service display name (used by Service schema for service pages). */
  serviceName?: string
  /** Service description (used by Service schema for service pages). */
  serviceDescription?: string
  /** Product display name (used by Product schema for product pages). */
  productName?: string
  /** Product description (used by Product schema for product pages). */
  productDescription?: string
  /** Translated FAQ pairs. */
  faqs?: ReadonlyArray<FaqItem>
}

type PageSeoConfig = {
  /** Ordered ancestor route keys (excluding this page itself). */
  parents: ReadonlyArray<RouteKey>
  /** Optional extra schema nodes that don't depend on locale. */
  extras?: ReadonlyArray<JsonObject>
  /** Whether to inject a Service schema for this page. */
  service?: ServiceArgs
  /** Whether to inject a Product/SoftwareApplication schema for this page. */
  product?: ProductArgs
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ItemPage' | 'FAQPage'
  /** Per-locale display content. */
  locales: Record<Locale, PageSeoLocaleEntry>
}

const PRODUCTS_BREADCRUMB_NAME: Record<Locale, string> = {
  en: 'Products',
  nl: 'Producten'
}

export const pageSeoByKey: Record<RouteKey, PageSeoConfig> = {
  home: {
    parents: [],
    locales: {
      en: {
        breadcrumbName: 'Home',
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
              'Request a free consultation from the contact page, email info@amoradigital.nl or call +31 6 25580415. We typically respond within one business day.'
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
      nl: {
        breadcrumbName: 'Home',
        faqs: [
          {
            question: 'Welke diensten biedt Amora Digital aan?',
            answer:
              'Amora Digital biedt complete digitale marketing (SEO, AI SEO, lokale SEO, online adverteren, social media, e-mailmarketing, CRO, merkstrategie, CRM-oplossingen en webdesign) en softwareontwikkeling op maat (React, PHP, Java, mobiele apps, e-commerce, AI-automatisering, full-stack en webapplicaties).'
          },
          {
            question: 'Waar is Amora Digital gevestigd?',
            answer:
              'Amora Digital is gevestigd in Nederland (KvK 99536811) en werkt voor klanten in Nederland, de Europese Unie en wereldwijd, in het Nederlands en Engels.'
          },
          {
            question: 'Hoe vraag ik een gratis adviesgesprek aan?',
            answer:
              'Vraag een gratis adviesgesprek aan via de contactpagina, mail naar info@amoradigital.nl of bel +31 6 25580415. We reageren doorgaans binnen één werkdag.'
          },
          {
            question: 'Doet Amora Digital ook AI SEO?',
            answer:
              'Ja. Amora Digital is gespecialiseerd in AI SEO — we optimaliseren merken zodat ze worden geciteerd door ChatGPT, Google AI Overviews, Perplexity en Claude, met structured data, entity-content, E-E-A-T-signalen en technische markup.'
          },
          {
            question: 'Wat kost SEO in Nederland?',
            answer:
              'SEO-prijzen hangen af van concurrentie, sitegrootte en scope. Amora Digital biedt maandelijkse SEO-, AI SEO- en lokale SEO-pakketten na een gratis audit. Vraag een voorstel aan dat past bij jouw doelen en markt.'
          }
        ]
      }
    }
  },

  about: {
    parents: ['home'],
    pageType: 'AboutPage',
    locales: {
      en: {
        breadcrumbName: 'About Us',
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
      nl: {
        breadcrumbName: 'Over ons',
        faqs: [
          {
            question: 'Wie is Amora Digital?',
            answer:
              'Amora Digital is een Nederlands bureau voor digitale marketing en softwareontwikkeling op maat (KvK 99536811). Wij helpen bedrijven met meer organisch verkeer, AI-zichtbaarheid, lokale rankings, advertentie-ROI en maatwerk webapplicaties.'
          },
          {
            question: 'Waar is Amora Digital gevestigd?',
            answer:
              'Amora Digital is gevestigd in Nederland en werkt voor klanten in Nederland, de Europese Unie en internationaal. We werken remote of op locatie, afhankelijk van het project.'
          },
          {
            question: 'Wat onderscheidt Amora Digital van andere SEO-bureaus in Nederland?',
            answer:
              'Wij combineren traditionele SEO, AI SEO (GEO), lokale SEO en softwareontwikkeling onder één dak — zo lopen strategie, technische uitvoering en structured data perfect in lijn. Elke samenwerking bevat meetbare rapportages, geen ijdele cijfers.'
          },
          {
            question: 'Werkt Amora Digital ook met startups en enterprise-klanten?',
            answer:
              'Ja. We werken samen met startups, mkb en grotere organisaties die schaalbare SEO, online adverteren, CRM-koppelingen of maatwerk React-, PHP- en Java-ontwikkeling nodig hebben.'
          }
        ]
      }
    }
  },

  contact: {
    parents: ['home'],
    pageType: 'ContactPage',
    extras: [buildProfessionalServiceSchema()],
    locales: {
      en: {
        breadcrumbName: 'Contact',
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
      nl: {
        breadcrumbName: 'Contact',
        faqs: [
          {
            question: 'Hoe vraag ik een gratis SEO- of marketingadvies aan?',
            answer:
              'Vul het contactformulier in op amoradigital.nl/nl/contact, mail naar info@amoradigital.nl of bel +31 6 25580415. Geef je website-URL, doelen en tijdlijn door — wij reageren binnen één werkdag.'
          },
          {
            question: 'Biedt Amora Digital gratis SEO-audits aan?',
            answer:
              'Ja. We doen gratis SEO-audits voor technische SEO, on-page issues, Core Web Vitals, zoekwoordkansen en hiaten in lokale SEO — voor bedrijven in Nederland en daarbuiten.'
          },
          {
            question: 'Werken jullie ook voor klanten buiten Nederland?',
            answer:
              'Ja. We zijn gevestigd in Nederland en bedienen klanten in de hele EU en wereldwijd, in Nederlands en Engels, voor SEO, AI SEO, online adverteren en softwareontwikkeling.'
          },
          {
            question: 'Welke informatie zet ik in mijn aanvraag?',
            answer:
              'Deel je website-URL, doelmarkt (lokaal, landelijk of internationaal), belangrijkste doelen (verkeer, leads, omzet, AI-zichtbaarheid), huidige marketingstack en gewenste timing. Hoe meer context, hoe scherper ons voorstel.'
          }
        ]
      }
    }
  },

  privacy: {
    parents: ['home'],
    locales: {
      en: {
        breadcrumbName: 'Privacy Policy',
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
      nl: {
        breadcrumbName: 'Privacybeleid',
        faqs: [
          {
            question: 'Welke persoonsgegevens verzamelt Amora Digital?',
            answer:
              'We verzamelen gegevens die je via contactformulieren indient (naam, e-mail, telefoon, bedrijf, bericht), analytics-gegevens (IP-adres, bezochte pagina’s, apparaattype via Google Analytics) en cookies voor functionaliteit en meting.'
          },
          {
            question: 'Is Amora Digital AVG-compliant?',
            answer:
              'Ja. Amora Digital verwerkt persoonsgegevens conform de Algemene Verordening Gegevensbescherming (AVG/GDPR). We verzamelen alleen wat nodig is voor communicatie, dienstverlening en website-analyse, en respecteren rechten van betrokkenen.'
          },
          {
            question: 'Hoe vraag ik verwijdering van mijn persoonsgegevens aan?',
            answer:
              'Mail naar info@amoradigital.nl met onderwerp "Verzoek tot verwijdering" en het e-mailadres of de gegevens die je hebt ingediend. We bevestigen en verwijderen je gegevens binnen 30 dagen, tenzij wettelijke bewaarplicht geldt.'
          }
        ]
      }
    }
  },

  marketing: {
    parents: ['home'],
    pageType: 'CollectionPage',
    service: {
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
    },
    locales: {
      en: {
        breadcrumbName: 'Marketing Solutions',
        serviceName: 'Digital Marketing Services',
        serviceDescription:
          'Full-service digital marketing: SEO, AI SEO, Local SEO, paid advertising, social media marketing, email marketing, conversion optimization, brand strategy, CRM and website design.',
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
      nl: {
        breadcrumbName: 'Marketingoplossingen',
        serviceName: 'Digitale marketing diensten',
        serviceDescription:
          'Volledige digitale marketing: SEO, AI SEO, lokale SEO, online adverteren, social media marketing, e-mailmarketing, conversie-optimalisatie, merkstrategie, CRM en webdesign.',
        faqs: [
          {
            question: 'Welke digitale marketingdiensten biedt Amora Digital?',
            answer:
              'Wij bieden SEO-diensten, AI SEO, lokale SEO, Google Ads en Meta-advertenties, social media marketing, e-mailmarketing, conversie-optimalisatie (CRO), merkstrategie, CRM-oplossingen en conversiegericht webdesign — allemaal vanuit Nederland.'
          },
          {
            question: 'Wat is het verschil tussen SEO en AI SEO?',
            answer:
              'Traditionele SEO richt zich op rankings in de Google-zoekresultaten en organisch verkeer. AI SEO (Generative Engine Optimization) zorgt dat jouw merk wordt geciteerd in ChatGPT, Google AI Overviews, Perplexity en Claude, dankzij structured data, entity-content en autoriteitssignalen.'
          },
          {
            question: 'Helpen jullie Nederlandse bedrijven met lokale SEO en Google Maps?',
            answer:
              'Ja. Lokale SEO is een kerndienst: optimalisatie van het Google-bedrijfsprofiel, lokale vermeldingen, reviewstrategie en geo-gerichte content, zodat je scoort in de local pack en "in de buurt"-zoekopdrachten in heel Nederland.'
          },
          {
            question: 'Hoe meet Amora Digital marketingsucces?',
            answer:
              'We volgen zoekwoordposities, organisch en betaald verkeer, conversieratio, kosten per lead, omzetattributie en — voor AI SEO — hoe vaak je merk wordt genoemd in AI-antwoorden. Je krijgt transparante maandrapportages gekoppeld aan je doelen.'
          },
          {
            question: 'Kan ik SEO, advertenties en CRM combineren in één traject?',
            answer:
              'Ja. Veel klanten combineren SEO of AI SEO met Google Ads en CRM-automatisering (HubSpot, Pipedrive, Zoho), zodat leads worden vastgelegd, opgevolgd en correct toegerekend van eerste klik tot deal.'
          }
        ]
      }
    }
  },

  'website-design': {
    parents: ['home', 'marketing'],
    service: { serviceType: 'Website Design', category: 'Web Development' },
    locales: {
      en: {
        breadcrumbName: 'Website Design',
        serviceName: 'Website Design',
        serviceDescription:
          'Conversion-focused, mobile-first website design. Custom brand-aligned sites engineered for speed, Core Web Vitals and measurable lead generation.',
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
      nl: {
        breadcrumbName: 'Webdesign',
        serviceName: 'Webdesign',
        serviceDescription:
          'Conversiegericht en mobile-first webdesign. Maatwerk websites in lijn met je merk, gebouwd voor snelheid, Core Web Vitals en meetbare leadgeneratie.',
        faqs: [
          {
            question: 'Hoe lang duurt een webdesigntraject?',
            answer:
              'De meeste webdesigntrajecten van Amora Digital gaan binnen 4 tot 8 weken live, afhankelijk van scope, koppelingen en content. SEO-vriendelijke structuur, schema markup en Core Web Vitals zijn vanaf dag één onderdeel van het ontwerp.'
          },
          {
            question: 'Bouwen jullie websites die geoptimaliseerd zijn voor SEO en Google?',
            answer:
              'Ja. Elke website volgt SEO-best practices: semantische HTML, snelle Core Web Vitals, XML-sitemap, robots.txt, canonical URL’s, Open Graph en schema.org structured data voor rich results en AI-citaties.'
          },
          {
            question: 'Zijn jullie websites mobielvriendelijk en Core Web Vitals-proof?',
            answer:
              'Alle websites van Amora Digital zijn mobile-first, volledig responsief op telefoon, tablet en desktop, en worden vóór livegang getest tegen Google mobile-friendly en Core Web Vitals.'
          },
          {
            question: 'Kunnen jullie mijn website redesignen zonder SEO-posities te verliezen?',
            answer:
              'Ja. We plannen 301-redirects, behouden URL-waarde, migreren metadata en structured data en monitoren Search Console na livegang, zodat een redesign meer conversie oplevert zonder verlies van organisch verkeer.'
          },
          {
            question: 'Maken jullie ook webdesign voor lokale bedrijven in Nederland?',
            answer:
              'Ja. We bouwen lokale SEO-klare sites met locatiepagina’s, integratie van Google-bedrijfsprofiel, consistente NAP-gegevens, lokale schema markup en conversiepaden afgestemd op Nederlandse en internationale doelgroepen.'
          }
        ]
      }
    }
  },

  'crm-solutions': {
    parents: ['home', 'marketing'],
    service: { serviceType: 'CRM Consulting', category: 'Digital Marketing' },
    locales: {
      en: {
        breadcrumbName: 'CRM Solutions',
        serviceName: 'CRM Solutions',
        serviceDescription:
          'CRM setup, integrations and automation so leads are never lost. HubSpot, Pipedrive, Zoho, Salesforce and custom CRM implementations.',
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
      nl: {
        breadcrumbName: 'CRM-oplossingen',
        serviceName: 'CRM-oplossingen',
        serviceDescription:
          'CRM-implementatie, koppelingen en automatisering zodat geen lead verloren gaat. HubSpot, Pipedrive, Zoho, Salesforce en maatwerk CRM-systemen.',
        faqs: [
          {
            question: 'Welke CRM-platformen implementeert Amora Digital?',
            answer:
              'We implementeren en koppelen HubSpot, Pipedrive, Zoho CRM, Salesforce en maatwerk CRM-systemen, met directe integratie met je website, Google Ads, Meta Ads, e-mailtools en analytics voor zicht op de volledige funnel.'
          },
          {
            question: 'Kunnen jullie leadcaptatie en sales-opvolging automatiseren?',
            answer:
              'Ja. We automatiseren leadcaptatie vanuit formulieren, advertenties en chat, passen lead scoring en routeringsregels toe en bouwen nurture-flows zodat sales zich richt op de kansrijkste leads — minder verloren leads en snellere opvolging.'
          },
          {
            question: 'Migreren jullie ook data uit spreadsheets of een oude CRM?',
            answer:
              'Ja. We schonen en mappen contacten, deals en activiteiten en importeren ze in je nieuwe CRM, deduplicaten records en valideren pipelines, zodat je team start met betrouwbare, bruikbare data.'
          },
          {
            question: 'Hoe verbetert CRM-koppeling de ROI van SEO en marketing?',
            answer:
              'Een CRM-koppeling sluit de cirkel tussen verkeer en omzet. Je ziet welke zoekwoorden, advertenties en landingspagina’s betalende klanten opleveren, zodat SEO, AI SEO en advertentiebudgetten verschuiven naar de kanalen met de hoogste ROI.'
          }
        ]
      }
    }
  },

  'social-media-marketing': {
    parents: ['home', 'marketing'],
    service: { serviceType: 'Social Media Marketing', category: 'Digital Marketing' },
    locales: {
      en: {
        breadcrumbName: 'Social Media Marketing',
        serviceName: 'Social Media Marketing',
        serviceDescription:
          'Strategy, content production and community management across Instagram, LinkedIn, Facebook, TikTok and YouTube to grow brand awareness and qualified leads.',
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
      nl: {
        breadcrumbName: 'Social media marketing',
        serviceName: 'Social media marketing',
        serviceDescription:
          'Strategie, contentproductie en community management op Instagram, LinkedIn, Facebook, TikTok en YouTube om merkbekendheid en kwalitatieve leads te laten groeien.',
        faqs: [
          {
            question: 'Welke social media platformen beheert Amora Digital?',
            answer:
              'We beheren Instagram, LinkedIn, Facebook, TikTok, YouTube en X (Twitter). We adviseren de juiste mix op basis van je B2B- of B2C-doelgroep, sector en leaddoelen in Nederland en daarbuiten.'
          },
          {
            question: 'Maken jullie ook content of plannen jullie alleen?',
            answer:
              'Wij verzorgen het hele proces: contentstrategie, copywriting, beeld- en videoproductie, inplannen, community management, reageren op comments en DM’s en maandrapportages op bereik, engagement en leads.'
          },
          {
            question: 'Versterkt social media marketing mijn SEO- en lokale SEO-strategie?',
            answer:
              'Ja. Social signalen versterken merkzoekopdrachten, stimuleren branded queries die Google waardeert en verspreiden lokale content en reviews. We stemmen social posts af op SEO-thema’s en updates van je Google-bedrijfsprofiel.'
          },
          {
            question: 'Hoe meten jullie de ROI van social media marketing?',
            answer:
              'We meten bereik, engagement-ratio, doorklikratio, kosten per lead, conversies op de website en assisterende omzet via UTM-parameters, GA4 en platform-analytics — geen ijdele cijfers alleen.'
          }
        ]
      }
    }
  },

  'paid-advertising': {
    parents: ['home', 'marketing'],
    service: { serviceType: 'Paid Advertising', category: 'Digital Marketing' },
    locales: {
      en: {
        breadcrumbName: 'Paid Advertising',
        serviceName: 'Paid Advertising',
        serviceDescription:
          'Google Ads, Meta Ads, LinkedIn Ads and retargeting campaigns managed for ROI — data-driven paid media with transparent reporting.',
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
      nl: {
        breadcrumbName: 'Online adverteren',
        serviceName: 'Online adverteren',
        serviceDescription:
          'Google Ads, Meta Ads, LinkedIn Ads en retargetingcampagnes met focus op ROI — datagedreven advertenties met heldere rapportage.',
        faqs: [
          {
            question: 'Welke advertentieplatformen beheert Amora Digital?',
            answer:
              'We beheren Google Ads (Search, Performance Max, Display, YouTube), Meta Ads (Facebook en Instagram), LinkedIn Ads, TikTok Ads en Microsoft Ads, met conversietracking, doelgroepsegmentatie en doorlopende bidoptimalisatie.'
          },
          {
            question: 'Wat is het minimale maandbudget voor online adverteren?',
            answer:
              'Wij adviseren doorgaans een minimaal mediabudget van €1.500 per maand om voldoende conversiedata te verzamelen voor optimalisatie. Kleinere budgetten werken voor hyperlokale Google Ads-campagnes gericht op specifieke Nederlandse steden of werkgebieden.'
          },
          {
            question: 'Combineren jullie advertenties met SEO en lokale SEO?',
            answer:
              'Ja. We stemmen advertentie-zoekwoorden af op organische SEO-doelen, gebruiken Search Console-data voor scherpere ad copy en draaien Local Service Ads en Google Maps-campagnes naast lokale SEO voor maximale lokale zichtbaarheid.'
          },
          {
            question: 'Hoe meten jullie de ROI en conversies van advertenties?',
            answer:
              'We implementeren GA4, Google Tag Manager, enhanced conversions en CRM-attributie, zodat je kosten per lead, ROAS en omzet per campagne, adgroep en zoekwoord ziet — met transparante maandrapportages.'
          }
        ]
      }
    }
  },

  'seo-services': {
    parents: ['home', 'marketing'],
    service: {
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
    },
    locales: {
      en: {
        breadcrumbName: 'SEO Services',
        serviceName: 'SEO Services',
        serviceDescription:
          'Technical SEO, on-page optimization, content strategy and link building to improve Google rankings and grow organic traffic.',
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
      nl: {
        breadcrumbName: 'SEO-diensten',
        serviceName: 'SEO-diensten',
        serviceDescription:
          'Technische SEO, on-page optimalisatie, contentstrategie en linkbuilding om je Google-rankings te verbeteren en je organisch verkeer te laten groeien.',
        faqs: [
          {
            question: 'Hoe lang duurt het voordat SEO resultaten oplevert in Google?',
            answer:
              'De meeste klanten zien binnen 3 maanden de eerste zoekwoordbewegingen en binnen 6–12 maanden duidelijke ranking- en verkeersgroei. De doorlooptijd hangt af van domeinautoriteit, concurrentie en technische uitgangspositie.'
          },
          {
            question: 'Doet Amora Digital ook technische SEO-audits en fixes?',
            answer:
              'Ja. Elke SEO-samenwerking begint met een technische audit van Core Web Vitals, crawlability, indexering, canonicalisatie, interne linkstructuur, schema markup en mobile usability — inclusief geprioriteerde uitvoering van de fixes.'
          },
          {
            question: 'Doen jullie ook linkbuilding en off-page SEO in Nederland?',
            answer:
              'Ja. We verdienen hoogwaardige backlinks via digital PR, gastartikelen op autoriteitssites, lokale partnerships en content-gedreven outreach. We kopen nooit spammy links die Google-straffen riskeren.'
          },
          {
            question: 'Welke SEO-diensten zitten in jullie maandelijkse pakketten?',
            answer:
              'Zoekwoordonderzoek, on-page optimalisatie, contentstrategie, technische SEO, linkbuilding, ondersteuning bij lokale SEO, concurrentieanalyse, monitoring in Google Search Console en maandelijkse ranking- en verkeersrapporten.'
          },
          {
            question: 'Kan Amora Digital mijn site laten scoren op concurrerende zoekwoorden in Nederland?',
            answer:
              'Ja. We richten ons op high-intent Nederlandse en Engelse zoekwoorden met topical authority clusters, entity-optimalisatie, structured data en lokale signalen — duurzame organische zichtbaarheid, geen kortetermijntrucs.'
          }
        ]
      }
    }
  },

  'ai-seo': {
    parents: ['home', 'marketing'],
    service: { serviceType: 'AI Search Optimization', category: 'Digital Marketing' },
    locales: {
      en: {
        breadcrumbName: 'AI SEO',
        serviceName: 'AI SEO',
        serviceDescription:
          'AI SEO to get cited by ChatGPT, Google AI Overviews, Perplexity and Claude — structured data, entity-focused content and technical signals for AI search.',
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
      nl: {
        breadcrumbName: 'AI SEO',
        serviceName: 'AI SEO',
        serviceDescription:
          'AI SEO zodat ChatGPT, Google AI Overviews, Perplexity en Claude jouw merk citeren — structured data, entity-content en technische signalen voor AI-zoekmachines.',
        faqs: [
          {
            question: 'Wat is AI SEO (Generative Engine Optimization)?',
            answer:
              'AI SEO — ook wel Generative Engine Optimization (GEO) genoemd — is het optimaliseren van content, structured data en autoriteitssignalen zodat AI-systemen als ChatGPT, Google AI Overviews, Perplexity en Claude jouw merk citeren in hun antwoorden.'
          },
          {
            question: 'Waarin verschilt AI SEO van traditionele Google-SEO?',
            answer:
              'Traditionele SEO richt zich op rankings in de Google-zoekresultaten. AI SEO richt zich op citaties in AI-antwoorden en focust op entities, FAQ-schema, E-E-A-T-signalen, feitelijke helderheid en technische markup die AI-crawlers kunnen begrijpen en vertrouwen.'
          },
          {
            question: 'Levert AI SEO ook verkeer en leads op?',
            answer:
              'Ja. Gebruikers die doorklikken vanuit AI-citaties hebben vaak hoge koopintentie. Verschijnen in AI-antwoorden bouwt bovendien merkautoriteit op, wat conversies verhoogt via organische search, advertenties en direct verkeer.'
          },
          {
            question: 'Welke AI SEO-technieken zet Amora Digital in?',
            answer:
              'We implementeren FAQPage- en Organization-schema, entity-rijke content, autoritatieve Q&A-secties, structured-data graphs, digital PR voor citatiebronnen en monitoring van merkvermeldingen in ChatGPT, Perplexity en Google AI Overviews.'
          },
          {
            question: 'Heb ik AI SEO nodig als ik al goed scoor op Google?',
            answer:
              'Ja. AI-zoeken is een apart, snelgroeiend kanaal. Merken die alleen voor klassieke Google optimaliseren missen citaties in AI Overviews en chatantwoorden — waar concurrenten misschien al verschijnen.'
          }
        ]
      }
    }
  },

  'local-seo': {
    parents: ['home', 'marketing'],
    service: { serviceType: 'Local SEO', category: 'Digital Marketing' },
    locales: {
      en: {
        breadcrumbName: 'Local SEO',
        serviceName: 'Local SEO',
        serviceDescription:
          'Google Business Profile optimization, local citations, reviews and maps visibility to help local businesses dominate their service area.',
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
      nl: {
        breadcrumbName: 'Lokale SEO',
        serviceName: 'Lokale SEO',
        serviceDescription:
          'Optimalisatie van Google-bedrijfsprofiel, lokale vermeldingen, reviews en zichtbaarheid in Maps om lokale bedrijven in hun werkgebied te laten domineren.',
        faqs: [
          {
            question: 'Heb ik lokale SEO nodig als ik al een website heb?',
            answer:
              'Zoeken klanten naar jouw diensten in een specifieke stad of regio, dan zeker wel. Lokale SEO maakt je vindbaar in Google Maps, de local 3-pack en "in de buurt"-zoekopdrachten — verantwoordelijk voor het merendeel van lokale aankoopbeslissingen in Nederland.'
          },
          {
            question: 'Beheert Amora Digital ook het Google-bedrijfsprofiel?',
            answer:
              'Ja. We richten je Google-bedrijfsprofiel volledig in en optimaliseren het: primaire en secundaire categorieën, diensten, producten, foto’s, posts, Q&A, reviewbeheer en afstemming met je lokale landingspagina voor consistente NAP-gegevens.'
          },
          {
            question: 'Hoe verbeteren lokale vermeldingen de rankings in lokale SEO?',
            answer:
              'Consistente NAP-vermeldingen (naam, adres, telefoon) op betrouwbare Nederlandse en internationale directories versterken je betrouwbaarheid bij Google. Wij auditen, bouwen en schonen vermeldingen op voor sterkere local-pack-rankings en zichtbaarheid in Maps.'
          },
          {
            question: 'Werkt lokale SEO ook voor bedrijven met meerdere vestigingen?',
            answer:
              'Ja. We maken locatie-specifieke pagina’s, aparte of gegroepeerde Google-bedrijfsprofielen, gelokaliseerde schema markup en reviewstrategieën, zodat elke vestiging in haar werkgebied scoort zonder elkaar te kannibaliseren.'
          },
          {
            question: 'Hoe snel scoort lokale SEO in Google Maps?',
            answer:
              'Optimalisaties van het Google-bedrijfsprofiel laten vaak binnen 4–8 weken verbeterde zichtbaarheid in Maps zien. Concurrerende steden vragen 3–6 maanden vermeldingen, reviews en lokale content voor toppositie in de local pack.'
          }
        ]
      }
    }
  },

  'email-marketing': {
    parents: ['home', 'marketing'],
    service: { serviceType: 'Email Marketing', category: 'Digital Marketing' },
    locales: {
      en: {
        breadcrumbName: 'Email Marketing',
        serviceName: 'Email Marketing',
        serviceDescription:
          'Email automation, newsletters and nurture sequences that convert subscribers into customers with measurable revenue per email.',
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
      nl: {
        breadcrumbName: 'E-mailmarketing',
        serviceName: 'E-mailmarketing',
        serviceDescription:
          'E-mailautomatisering, nieuwsbrieven en nurture-flows die abonnees omzetten in klanten met meetbare omzet per e-mail.',
        faqs: [
          {
            question: 'Welke e-mailmarketingplatformen gebruikt Amora Digital?',
            answer:
              'Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Brevo (Sendinblue) en maatwerk integraties. Wij kiezen het platform dat past bij jouw CRM, e-commerce stack en budget voor schaalbare e-mailautomatisering.'
          },
          {
            question: 'Kunnen jullie e-mailautomatisering en nurture-flows opzetten?',
            answer:
              'Ja. We bouwen welkomstreeksen, abandoned cart-flows, post-purchase sequenties, re-engagement campagnes en lead nurture-trajecten — en optimaliseren open- en clickrates en omzet per e-mail met A/B-testing.'
          },
          {
            question: 'Hoe ondersteunt e-mailmarketing SEO en leadgeneratie?',
            answer:
              'E-mail brengt terugkerend verkeer naar SEO-content, versterkt nieuwe blog- en dienstenpagina’s en houdt organische leads warm — meer klantwaarde zonder extra advertentiebudget.'
          },
          {
            question: 'Zorgen jullie voor AVG-conforme e-mailmarketing voor EU-doelgroepen?',
            answer:
              'Ja. We hanteren double opt-in waar nodig, heldere afmeldflows, consent tracking en privacy-conforme dataverwerking voor Nederlandse en EU-abonneebestanden.'
          }
        ]
      }
    }
  },

  'conversion-optimization': {
    parents: ['home', 'marketing'],
    service: { serviceType: 'Conversion Rate Optimization', category: 'Digital Marketing' },
    locales: {
      en: {
        breadcrumbName: 'Conversion Optimization',
        serviceName: 'Conversion Rate Optimization',
        serviceDescription:
          'CRO, A/B testing and landing page optimization to lift conversion rates across your funnel using data, not guesses.',
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
      nl: {
        breadcrumbName: 'Conversie-optimalisatie',
        serviceName: 'Conversie-optimalisatie',
        serviceDescription:
          'CRO, A/B-testing en landingspagina-optimalisatie om de conversies in je hele funnel te verhogen op basis van data, niet op gevoel.',
        faqs: [
          {
            question: 'Wat is conversie-optimalisatie (CRO)?',
            answer:
              'CRO is het datagedreven proces van het verbeteren van landingspagina’s, formulieren en checkoutflows zodat meer bezoekers lead of klant worden — zonder extra advertentiebudget of SEO-verkeer.'
          },
          {
            question: 'Welke conversieverbetering kan ik verwachten van CRO?',
            answer:
              'Resultaten hangen af van verkeer en startpunt, maar de meeste klanten zien binnen 3–6 maanden 15–60% relatieve verbetering op belangrijke pagina’s, via gestructureerd A/B-testen, heatmap-analyse en UX-fixes.'
          },
          {
            question: 'Welke CRO-tools gebruikt Amora Digital?',
            answer:
              'Google Analytics 4, Microsoft Clarity, Hotjar, VWO en Convert.com voor heatmaps, session replays, funnelanalyse en statistisch valide A/B-tests op koppen, CTA’s en formuliervelden.'
          },
          {
            question: 'Verbetert CRO ook SEO en advertentieprestaties?',
            answer:
              'Ja. Hogere conversies verhogen je Google Ads-kwaliteitsscore, verlagen je acquisitiekosten en signaleren gebruikerstevredenheid — terwijl SEO-verkeer op dezelfde posities meer omzet per bezoek oplevert.'
          }
        ]
      }
    }
  },

  'brand-strategy': {
    parents: ['home', 'marketing'],
    service: { serviceType: 'Brand Strategy', category: 'Digital Marketing' },
    locales: {
      en: {
        breadcrumbName: 'Brand Strategy',
        serviceName: 'Brand Strategy',
        serviceDescription:
          'Positioning, messaging and visual identity so your brand stands out, attracts the right customers and commands premium pricing.',
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
      nl: {
        breadcrumbName: 'Merkstrategie',
        serviceName: 'Merkstrategie',
        serviceDescription:
          'Positionering, messaging en visuele identiteit zodat je merk opvalt, de juiste klanten aantrekt en premiumprijzen rechtvaardigt.',
        faqs: [
          {
            question: 'Wat zit er in een merkstrategie-traject?',
            answer:
              'Markt- en concurrentieonderzoek, doelgroeppersona’s, positioneringstatement, messaging-framework, tone of voice, visuele identiteit en merkrichtlijnen — plus een uitrolplan voor website, SEO-content, social media en advertenties.'
          },
          {
            question: 'Waarom is merkstrategie belangrijk voor SEO en AI SEO?',
            answer:
              'Heldere merkpositionering levert consistente entity-signalen op die Google en AI-systemen gebruiken om je bedrijf te herkennen en te citeren. Eenduidige messaging verhoogt CTR, branded zoekvolume en vertrouwen in AI-antwoorden.'
          },
          {
            question: 'Helpt merkstrategie mijn bedrijf om op te vallen in Nederland?',
            answer:
              'Ja. We definiëren onderscheid t.o.v. lokale en internationale concurrenten, formuleren messaging die aanslaat bij Nederlands- en Engelstalig publiek en koppelen visuele identiteit aan conversiegericht webdesign.'
          },
          {
            question: 'Hoe lang duurt een merkstrategie-traject?',
            answer:
              'Een merkstrategie-traject duurt typisch 4–8 weken — van discovery-workshops via onderzoek, positionering en messaging tot oplevering van guidelines, met optionele uitrol op website en marketingmiddelen.'
          }
        ]
      }
    }
  },

  development: {
    parents: ['home'],
    pageType: 'CollectionPage',
    service: {
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
    },
    locales: {
      en: {
        breadcrumbName: 'Development Services',
        serviceName: 'Custom Software Development Services',
        serviceDescription:
          'Custom software development: React, PHP, Java, mobile apps, e-commerce, AI automation, full-stack and web applications.',
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
      nl: {
        breadcrumbName: 'Softwareontwikkeling',
        serviceName: 'Softwareontwikkeling op maat',
        serviceDescription:
          'Softwareontwikkeling op maat: React, PHP, Java, mobiele apps, e-commerce, AI-automatisering, full-stack en webapplicaties.',
        faqs: [
          {
            question: 'Welke softwareontwikkelingsdiensten biedt Amora Digital?',
            answer:
              'React- en TypeScript-front ends, PHP- en Laravel-backends, Java- en Spring Boot-API’s, mobiele apps (React Native, Flutter, Swift, Kotlin), e-commerce platformen, AI-automatisering, full-stack development en maatwerk SaaS-webapplicaties.'
          },
          {
            question: 'Bouwen jullie SEO-vriendelijke webapplicaties?',
            answer:
              'Ja. We zetten waar nodig server-side rendering of pre-rendering in, met semantische HTML, snelle Core Web Vitals, schema markup, schone URL-structuren en sterke technische SEO-basis, zodat custom apps vindbaar zijn voor Google en AI-crawlers.'
          },
          {
            question: 'Hoe lang duurt een maatwerk softwareproject?',
            answer:
              'MVP’s gaan doorgaans in 8–12 weken live. Grotere platformen lopen 3–6 maanden. We werken in agile sprints met wekelijkse demo’s, zodat je voortgang ziet en kunt prioriteren op SEO-, lead- of operationele winst.'
          },
          {
            question: 'Biedt Amora Digital ook onderhoud en support?',
            answer:
              'Ja. We bieden onderhoud met SLA, security-patches, dependency-updates, performance monitoring en feature-iteraties zodat je applicatie veilig, snel en aansluitend op je business- en SEO-doelen blijft.'
          },
          {
            question: 'Kunnen jullie maatwerk software koppelen aan CRM en marketingtools?',
            answer:
              'Ja. We integreren met HubSpot, Pipedrive, Zoho, Google Ads, GA4, betaalproviders en interne ERP-systemen via REST- en GraphQL-API’s — zodat development direct gekoppeld is aan marketing- en sales-resultaten.'
          }
        ]
      }
    }
  },

  react: {
    parents: ['home', 'development'],
    service: { serviceType: 'React Development', category: 'Software Development' },
    locales: {
      en: {
        breadcrumbName: 'React Development',
        serviceName: 'React Development',
        serviceDescription:
          'Modern React applications — SPAs, dashboards and performant front ends built with TypeScript, Vite and Next.js best practices.',
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
      nl: {
        breadcrumbName: 'React Development',
        serviceName: 'React Development',
        serviceDescription:
          "Moderne React-applicaties — SPA's, dashboards en snelle front ends gebouwd met TypeScript, Vite en Next.js best practices.",
        faqs: [
          {
            question: 'Bouwen jullie React-applicaties met TypeScript?',
            answer:
              'Ja. We bouwen React-apps standaard met TypeScript voor type safety, minder runtime-bugs, makkelijker refactoren en duurzaam onderhoud — met React 18/19, Vite en moderne tooling.'
          },
          {
            question: 'Kunnen jullie een legacy website of app migreren naar React?',
            answer:
              'Ja. We migreren jQuery, AngularJS, legacy PHP-templates en oudere React-codebases naar moderne React met TypeScript, behouden SEO-URL’s via redirects en verbeteren Core Web Vitals tijdens de overstap.'
          },
          {
            question: 'Scoren React-websites goed in Google en AI-zoekmachines?',
            answer:
              'Ja, mits correct gebouwd. Wij gebruiken pre-rendering of SSR, semantische HTML, structured data en snelle hydration zodat Googlebot en AI-crawlers direct volledig gerenderde content krijgen — geen client-side rendering valkuilen.'
          },
          {
            question: 'Bouwen jullie React-dashboards en SaaS-producten?',
            answer:
              'Ja. We ontwikkelen admin-dashboards, klantportalen, SaaS-platformen en interne tools met rolgebaseerde toegang, realtime data, API-integraties en analytics — geoptimaliseerd op performance en schaalbaarheid.'
          }
        ]
      }
    }
  },

  php: {
    parents: ['home', 'development'],
    service: { serviceType: 'PHP Development', category: 'Software Development' },
    locales: {
      en: {
        breadcrumbName: 'PHP Development',
        serviceName: 'PHP Development',
        serviceDescription:
          'PHP development with Laravel, WordPress and custom backends — secure, scalable server-side code and APIs.',
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
      nl: {
        breadcrumbName: 'PHP Development',
        serviceName: 'PHP Development',
        serviceDescription:
          "PHP-development met Laravel, WordPress en maatwerk backends — veilige, schaalbare server-side code en API's.",
        faqs: [
          {
            question: 'Bouwen jullie custom WordPress-plugins en -thema’s?',
            answer:
              'Ja. Amora Digital ontwikkelt custom WordPress-plugins, Gutenberg-blocks en thema’s. We onderhouden Auto Form Builder, een publieke plugin op wordpress.org, en volgen de WordPress coding standards en security best practices.'
          },
          {
            question: 'Gebruiken jullie Laravel voor maatwerk PHP-backends?',
            answer:
              "Ja. Laravel is ons standaard PHP-framework voor REST-API's, admin panels, e-commerce backends en koppelingen — vanwege veiligheid, schaalbaarheid en snelle ontwikkeling van SEO-vriendelijke server-rendered applicaties.",
          },
          {
            question: 'Kan PHP-development de SEO-prestaties van mijn website verbeteren?',
            answer:
              'Ja. Server-rendered PHP en Laravel leveren snelle TTFB, schone HTML voor crawlers, efficiënte caching en injectie van structured data — cruciaal voor Google-rankings en indexering in AI-zoekmachines.'
          },
          {
            question: 'Combineren jullie WordPress-SEO met development?',
            answer:
              'Ja. We optimaliseren WordPress voor Core Web Vitals, schema markup, XML-sitemaps, canonical URL’s, opschoning van overbodige plugins en technische SEO — development en zoekzichtbaarheid in één traject.'
          }
        ]
      }
    }
  },

  java: {
    parents: ['home', 'development'],
    service: { serviceType: 'Java Development', category: 'Software Development' },
    locales: {
      en: {
        breadcrumbName: 'Java Development',
        serviceName: 'Java Development',
        serviceDescription:
          'Enterprise Java development with Spring Boot — scalable microservices, REST APIs and secure integrations.',
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
      nl: {
        breadcrumbName: 'Java Development',
        serviceName: 'Java Development',
        serviceDescription:
          "Enterprise Java-development met Spring Boot — schaalbare microservices, REST-API's en veilige integraties.",
        faqs: [
          {
            question: 'Welke Java-frameworks gebruikt Amora Digital?',
            answer:
              "We bouwen enterprise-applicaties met Java en Spring Boot — REST-API's, microservices, veilige authenticatie, message queues en cloud-native deployments op AWS, Azure of on-premise.",
          },
          {
            question: 'Wanneer kies ik voor Java in plaats van PHP of React?',
            answer:
              'Java past bij high-traffic enterprise-systemen, complexe integraties, finance- of zorgcompliance en backends met lange levensduur waar performance, type safety en een volwassen ecosysteem belangrijk zijn.'
          },
          {
            question: 'Moderniseren jullie ook legacy Java-applicaties?',
            answer:
              'Ja. We refactoren monolieten naar microservices, upgraden Spring-versies, verbeteren API-design, voegen observability toe en versterken security — met behoud van uptime en data-integriteit tijdens de migratie.'
          },
          {
            question: 'Ondersteunen Java-backends SEO-vriendelijke front ends?',
            answer:
              "Ja. We leveren schone REST- en GraphQL-API's die door React of pre-rendered front ends worden gebruikt, zodat publieke pagina's snel en crawlable zijn met robuuste Java-services voor authenticatie en transacties.",
          }
        ]
      }
    }
  },

  'mobile-apps': {
    parents: ['home', 'development'],
    service: { serviceType: 'Mobile App Development', category: 'Software Development' },
    locales: {
      en: {
        breadcrumbName: 'Mobile App Development',
        serviceName: 'Mobile App Development',
        serviceDescription:
          'Native and cross-platform mobile apps for iOS and Android with React Native, Flutter, Swift and Kotlin.',
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
      nl: {
        breadcrumbName: 'Mobiele apps',
        serviceName: 'Mobiele app-ontwikkeling',
        serviceDescription:
          'Native en cross-platform mobiele apps voor iOS en Android met React Native, Flutter, Swift en Kotlin.',
        faqs: [
          {
            question: 'Bouwen jullie native of cross-platform mobiele apps?',
            answer:
              'Beide. We gebruiken React Native of Flutter voor gedeelde iOS/Android-codebases als snelheid telt, en native Swift of Kotlin als platform-API’s, performance of App Store-optimalisatie dat vragen.'
          },
          {
            question: 'Kunnen mobiele apps koppelen aan mijn website-SEO en CRM?',
            answer:
              'Ja. We deeplinken app-content naar geïndexeerde webpagina’s, synchroniseren gebruikersdata met je CRM, implementeren app indexing waar dat kan en stemmen app store-metadata af op je merk- en zoekwoordstrategie.'
          },
          {
            question: 'Publiceren jullie ook naar de Apple App Store en Google Play?',
            answer:
              'Ja. We verzorgen indiening bij App Store en Google Play, ASO (app store optimization) voor titels en beschrijvingen, screenshots, review-compliance en updatecycli na livegang.'
          },
          {
            question: 'Hoe lang duurt het bouwen van een mobiele app?',
            answer:
              'Een focused MVP gaat doorgaans in 10–16 weken live. Complexere apps met backend-API’s, betalingen en offline-modus duren 4–6 maanden. We werken in agile sprints met testbare builds elke twee weken.'
          }
        ]
      }
    }
  },

  ecommerce: {
    parents: ['home', 'development'],
    service: { serviceType: 'E-Commerce Development', category: 'Software Development' },
    locales: {
      en: {
        breadcrumbName: 'E-Commerce Solutions',
        serviceName: 'E-Commerce Solutions',
        serviceDescription:
          'Online stores on Shopify, WooCommerce and custom platforms with payments, inventory and ERP/CRM integrations.',
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
      nl: {
        breadcrumbName: 'E-commerce',
        serviceName: 'E-commerce oplossingen',
        serviceDescription:
          'Webshops op Shopify, WooCommerce en maatwerk platformen met betalingen, voorraadbeheer en ERP/CRM-koppelingen.',
        faqs: [
          {
            question: 'Op welke e-commerce platformen bouwt Amora Digital?',
            answer:
              'Shopify, WooCommerce, Laravel-based maatwerk webshops en headless commerce met React-front ends. We kiezen de stack op basis van catalogusgrootte, maatwerkbehoefte, SEO-vereisten en integratiecomplexiteit.'
          },
          {
            question: 'Optimaliseren jullie webshops voor SEO en Google Shopping?',
            answer:
              'Ja. We implementeren product schema markup, schone URL-structuren, beheerde facetnavigatie, Core Web Vitals-optimalisatie, XML-productfeeds en Google Merchant Center voor organische en betaalde productzichtbaarheid.'
          },
          {
            question: 'Koppelen jullie e-commerce aan ERP, CRM en betaaloplossingen?',
            answer:
              "Ja. We koppelen webshops aan Exact, AFAS, HubSpot, Pipedrive, Mollie, Stripe, PayPal en verzendpartners via API's — voor automatisering van voorraad, orders en klantdata.",
          },
          {
            question: 'Bouwen jullie webshops voor de Nederlandse en EU-markt?',
            answer:
              'Ja. We regelen btw-afhandeling, iDEAL en Europese betaalmethoden, AVG-conforme checkout, meertalige productpagina’s en lokale SEO voor fysieke vestigingen in Nederland.'
          }
        ]
      }
    }
  },

  'ai-automation': {
    parents: ['home', 'development'],
    service: { serviceType: 'AI Automation', category: 'Software Development' },
    locales: {
      en: {
        breadcrumbName: 'AI & Automation',
        serviceName: 'AI & Automation',
        serviceDescription:
          'AI-powered workflows, integrations and automation using OpenAI, Claude, Zapier, n8n and custom pipelines — save hours and scale operations.',
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
      nl: {
        breadcrumbName: 'AI & automatisering',
        serviceName: 'AI & automatisering',
        serviceDescription:
          'AI-workflows, integraties en automatisering met OpenAI, Claude, Zapier, n8n en maatwerk pipelines — bespaar uren en schaal je operatie.',
        faqs: [
          {
            question: 'Welke AI-automatiseringsdiensten biedt Amora Digital?',
            answer:
              'We bouwen AI-workflows met OpenAI, Claude, Zapier, n8n en maatwerk pipelines — voor leadkwalificatie, contentvoorbereiding, klantenservice, data-extractie, rapportages en interne processen.'
          },
          {
            question: 'Verbetert AI-automatisering mijn marketing- en SEO-efficiëntie?',
            answer:
              'Ja. We automatiseren zoekwoordclustering, conceptbeschrijvingen, contentbriefings, rank-trackingmeldingen, lead scoring en CRM-updates — zodat je team focust op strategie terwijl AI repetitief werk overneemt.'
          },
          {
            question: 'Is AI-automatisering veilig en AVG-conform?',
            answer:
              'Ja. We bouwen workflows met dataminimalisatie, EU-hosting waar nodig, toegangscontroles en audit logs. Gevoelige data verwerken we conform AVG en jouw interne complianceregels.'
          },
          {
            question: 'Koppelen jullie AI-automatisering aan bestaande CRM- en websitetools?',
            answer:
              "Ja. We koppelen AI-agents aan HubSpot, Pipedrive, WordPress, Google Sheets, Slack, e-mailplatformen en maatwerk API's — zodat automatisering past in je huidige stack, zonder rip-and-replace.",
          }
        ]
      }
    }
  },

  'full-stack': {
    parents: ['home', 'development'],
    service: { serviceType: 'Full-Stack Development', category: 'Software Development' },
    locales: {
      en: {
        breadcrumbName: 'Full-Stack Development',
        serviceName: 'Full-Stack Development',
        serviceDescription:
          'End-to-end development from database to UI — REST/GraphQL APIs, modern front ends and DevOps-ready delivery.',
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
      nl: {
        breadcrumbName: 'Full-stack development',
        serviceName: 'Full-stack development',
        serviceDescription:
          "End-to-end ontwikkeling van database tot UI — REST/GraphQL-API's, moderne front ends en DevOps-klare oplevering.",
        faqs: [
          {
            question: 'Wat valt onder full-stack development bij Amora Digital?',
            answer:
              "Complete oplevering: databaseontwerp, REST- of GraphQL-API's, React- of Laravel-applicatielagen, authenticatie, DevOps-inrichting, CI/CD-pipelines, monitoring en SEO-klare publieke pagina's.",
          },
          {
            question: 'Welke tech stacks gebruiken jullie voor full-stack projecten?',
            answer:
              'Veelgebruikte stacks zijn React + Laravel + MySQL/PostgreSQL, React + Java Spring Boot en Next.js + headless CMS — gekozen op basis van schaalbaarheid, team skills en SEO/rendering-eisen.'
          },
          {
            question: 'Ondersteunt full-stack development mijn SEO- en AI SEO-doelen?',
            answer:
              'Ja. Door full-stack eigenaarschap bewaken wij server response times, renderingstrategie, structured data, URL-architectuur en API-performance — geen gaten meer tussen front- en backend die rankings kosten.'
          },
          {
            question: 'Bouwen jullie ook full-stack MVP’s voor startups in Nederland?',
            answer:
              "Ja. We leveren investor-ready MVP's in 8–12 weken met de kernfeatures, analytics, SEO-fundament en schaalbare architectuur, zodat je kunt itereren zonder vanaf nul opnieuw te bouwen.",
          }
        ]
      }
    }
  },

  'web-applications': {
    parents: ['home', 'development'],
    service: { serviceType: 'Web Application Development', category: 'Software Development' },
    locales: {
      en: {
        breadcrumbName: 'Web Applications',
        serviceName: 'Web Application Development',
        serviceDescription:
          'Custom SaaS, portals, dashboards and internal tools — secure, scalable web applications with role-based access and analytics.',
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
      nl: {
        breadcrumbName: 'Webapplicaties',
        serviceName: 'Webapplicaties op maat',
        serviceDescription:
          'Maatwerk SaaS, portalen, dashboards en interne tools — veilige, schaalbare webapplicaties met rolgebaseerde toegang en analytics.',
        faqs: [
          {
            question: 'Welke webapplicaties bouwt Amora Digital op maat?',
            answer:
              'SaaS-platformen, klantportalen, interne dashboards, boekingssystemen, ledensites en B2B-tools — met rolgebaseerde toegang, betalingsintegratie, realtime data en analytics standaard ingebouwd.'
          },
          {
            question: 'Zijn maatwerk webapplicaties geoptimaliseerd voor Google?',
            answer:
              'Ja. Publieke pagina’s gebruiken pre-rendering of SSR, semantische HTML, schema markup, snelle Core Web Vitals en indexeerbare URL-structuren, zodat je app ook scoort op product- en oplossingszoekwoorden — niet alleen je homepage.'
          },
          {
            question: 'Kunnen jullie AI-functies toevoegen aan een bestaande webapplicatie?',
            answer:
              "Ja. We integreren OpenAI- en Claude-API's voor chatassistenten, documentsamenvatting, smart search, automatische tagging en workflowtriggers — veilig ingebed in je bestaande architectuur.",
          },
          {
            question: 'Hoe waarborgen jullie security en uptime van webapplicaties?',
            answer:
              "Wij hanteren OWASP best practices, HTTPS, rate limiting, inputvalidatie, automatische back-ups, staging-omgevingen en monitoring met alerting — met SLA-opties voor productie-support.",
          }
        ]
      }
    }
  },

  'auto-form-builder': {
    parents: ['home'],
    pageType: 'ItemPage',
    product: {
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'WordPress',
      category: 'WordPress Plugin'
    },
    locales: {
      en: {
        breadcrumbName: 'Auto Form Builder',
        productName: 'Auto Form Builder',
        productDescription:
          'Auto Form Builder is a WordPress form builder plugin for creating powerful forms with an intuitive drag-and-drop interface.',
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
      nl: {
        breadcrumbName: 'Auto Form Builder',
        productName: 'Auto Form Builder',
        productDescription:
          'Auto Form Builder is een WordPress formulierenbouwer waarmee je krachtige formulieren bouwt met een intuïtieve drag-and-drop interface.',
        faqs: [
          {
            question: 'Wat is Auto Form Builder voor WordPress?',
            answer:
              'Auto Form Builder is een WordPress formulieren-plugin van Amora Digital met drag-and-drop interface voor contactformulieren, leadformulieren, enquêtes en multi-step formulieren — zonder code.'
          },
          {
            question: 'Is Auto Form Builder beschikbaar op WordPress.org?',
            answer:
              'Ja. Auto Form Builder staat in de officiële WordPress.org plugin directory en voldoet aan de WordPress coding standards, security review en updateverplichtingen.'
          },
          {
            question: 'Ondersteunt Auto Form Builder CRM- en e-mailkoppelingen?',
            answer:
              'Ja. Formulieren koppelen aan e-mailmeldingen, webhooks en populaire marketingtools, zodat leads vanuit WordPress direct in je CRM, e-mailautomatisering en analytics belanden.'
          },
          {
            question: 'Helpt Auto Form Builder bij SEO en leadgeneratie?',
            answer:
              'Ja. Lichte, snel ladende formulieren voorkomen Core Web Vitals-penalty. Gestructureerde conversiepaden, thank-you page tracking en GA4-event integratie helpen organisch en betaald verkeer toe te wijzen aan formulierinzendingen.'
          }
        ]
      }
    }
  },

  'auto-form-crm': {
    parents: ['home'],
    pageType: 'ItemPage',
    product: {
      applicationCategory: 'BusinessApplication',
      category: 'CRM Software'
    },
    locales: {
      en: {
        breadcrumbName: 'Auto Form CRM',
        productName: 'Auto Form CRM',
        productDescription:
          'Auto Form CRM helps businesses manage leads and customer relationships with automation and integrations.',
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
      nl: {
        breadcrumbName: 'Auto Form CRM',
        productName: 'Auto Form CRM',
        productDescription:
          'Auto Form CRM helpt bedrijven leads en klantrelaties te beheren met automatisering en integraties.',
        faqs: [
          {
            question: 'Wat is Auto Form CRM?',
            answer:
              'Auto Form CRM is een lead- en klantbeheertool van Amora Digital die formulierinzendingen vastlegt, contacten organiseert, dealfases bijhoudt en opvolgingsworkflows automatiseert.'
          },
          {
            question: 'Hoe verbindt Auto Form CRM website-leads met sales?',
            answer:
              'Leads vanuit formulieren, landingspagina’s en advertenties stromen automatisch in Auto Form CRM, inclusief bronattributie, lead scoring en toewijzingsregels, zodat sales binnen minuten reageert — niet dagen.'
          },
          {
            question: 'Koppelt Auto Form CRM aan e-mailmarketing en advertenties?',
            answer:
              'Ja. Het synchroniseert met e-mailplatformen en ondersteunt UTM- en campagnetracking, zodat je ziet welke SEO-zoekwoorden, Google Ads en Meta-campagnes kwalitatieve CRM-pijplijn opleveren — niet alleen formulierfills.'
          },
          {
            question: 'Is Auto Form CRM geschikt voor mkb-bedrijven in Nederland?',
            answer:
              'Ja. Het is ontworpen voor mkb dat betaalbare CRM-automatisering zoekt zonder enterprise-complexiteit — met AVG-bewuste verwerking voor Nederlandse en EU-klantgegevens.'
          }
        ]
      }
    }
  },

  'hi-fan': {
    parents: ['home'],
    pageType: 'ItemPage',
    product: { applicationCategory: 'SocialNetworkingApplication', category: 'Creator Tools' },
    locales: {
      en: {
        breadcrumbName: 'Hi.Fan',
        productName: 'Hi.Fan',
        productDescription:
          'Hi.Fan is a fan engagement and link-in-bio platform for creators and brands.',
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
      nl: {
        breadcrumbName: 'Hi.Fan',
        productName: 'Hi.Fan',
        productDescription:
          'Hi.Fan is een fan engagement- en link-in-bio platform voor creators en merken.',
        faqs: [
          {
            question: 'Wat is Hi.Fan?',
            answer:
              'Hi.Fan is een fan engagement- en link-in-bio platform van Amora Digital voor creators, influencers en merken — één deelbare profiel-link gecombineerd met fan-interactietools en analytics.'
          },
          {
            question: 'Hoe helpt Hi.Fan creators hun publiek te laten groeien?',
            answer:
              'Hi.Fan bundelt social links, merch, content en fanberichten op één mobiel-geoptimaliseerde pagina — verbetert doorklikken vanuit Instagram-, TikTok- en YouTube-bio’s en meet welke links engagement opleveren.'
          },
          {
            question: 'Kunnen merken Hi.Fan gebruiken voor marketingcampagnes?',
            answer:
              'Ja. Merken gebruiken Hi.Fan voor campagne-hubs, productlanceringen, affiliate link management en UTM-getrackte promoties — sociale prestaties tot conversies in één dashboard.'
          },
          {
            question: 'Is Hi.Fan geoptimaliseerd voor mobiel en zoekzichtbaarheid?',
            answer:
              'Ja. Hi.Fan-pagina’s zijn mobile-first, snel en indexeerbaar met schone URL’s en metadata — zodat fans je merk goed kunnen vinden via Google.'
          }
        ]
      }
    }
  },

  pinkpeck: {
    parents: ['home'],
    pageType: 'ItemPage',
    product: { applicationCategory: 'MultimediaApplication', category: 'Content Creation' },
    locales: {
      en: {
        breadcrumbName: 'PinkPeck',
        productName: 'PinkPeck',
        productDescription: 'PinkPeck is a content creation and social tool from Amora Digital.',
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
      nl: {
        breadcrumbName: 'PinkPeck',
        productName: 'PinkPeck',
        productDescription:
          'PinkPeck is een tool voor contentcreatie en social media van Amora Digital.',
        faqs: [
          {
            question: 'Wat is PinkPeck?',
            answer:
              'PinkPeck is een tool voor contentcreatie en social media van Amora Digital die teams helpt sneller boeiende social content te plannen, maken en publiceren — met templates, planning en prestatieanalyse.'
          },
          {
            question: 'Hoe ondersteunt PinkPeck mijn social media strategie?',
            answer:
              'PinkPeck stroomlijnt contentkalenders, asset libraries en publicatieworkflows zodat marketingteams een consistent post-ritme volhouden — wat Google en social-algoritmes belonen met meer bereik.'
          },
          {
            question: 'Kan PinkPeck-content aansluiten op SEO-zoekwoordthema’s?',
            answer:
              'Ja. Teams kunnen social posts koppelen aan SEO-contentpijlers en campagnewoorden, zodat blog- en dienstenpagina’s extra bereik krijgen via social — gecoördineerde organische en sociale zichtbaarheid.'
          },
          {
            question: 'Voor wie is PinkPeck gemaakt?',
            answer:
              'Marketingteams, bureaus en creators die efficiënt content willen produceren zonder in te leveren op merkconsistentie — vooral wie meerdere platformen beheert vanuit Nederland en internationaal.'
          }
        ]
      }
    }
  },

  'unbox-deal': {
    parents: ['home'],
    pageType: 'ItemPage',
    product: { category: 'Deals Platform' },
    locales: {
      en: {
        breadcrumbName: 'Unbox.deal',
        productName: 'Unbox.deal',
        productDescription:
          'Unbox.deal is a deals and offers platform where shoppers discover promotions and savings.',
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
      nl: {
        breadcrumbName: 'Unbox.deal',
        productName: 'Unbox.deal',
        productDescription:
          'Unbox.deal is een platform voor deals en aanbiedingen waar shoppers promoties en besparingen ontdekken.',
        faqs: [
          {
            question: 'Wat is Unbox.deal?',
            answer:
              'Unbox.deal is een platform voor deals en aanbiedingen waar shoppers promoties, kortingen en tijdelijke besparingen ontdekken bij merken en retailers — gemaakt door Amora Digital.'
          },
          {
            question: 'Hoe plaatsen merken deals op Unbox.deal?',
            answer:
              'Merken plaatsen aanbiedingen via het platform met beschrijvingen, kortingscodes, vervaldatums en categorietags. Vermeldingen zijn gestructureerd voor zoekvriendelijke indexering en social sharing.'
          },
          {
            question: 'Kan Unbox.deal verkeer naar mijn webshop sturen?',
            answer:
              'Ja. Deal-vermeldingen linken rechtstreeks naar productpagina’s met UTM-tracking, zodat je doorkliks, conversies en ROI meet van campagnes op Unbox.deal.'
          },
          {
            question: 'Is Unbox.deal geoptimaliseerd voor zoekmachines?',
            answer:
              'Ja. Dealpagina’s gebruiken structured product- en offer-data, schone URL’s, snelle laadtijden en categorietaxonomie — zodat dealcontent verschijnt in Google en AI-gegenereerde shoppingadviezen.'
          }
        ]
      }
    }
  },

  branches: {
    parents: ['home'],
    pageType: 'CollectionPage',
    locales: {
      en: {
        breadcrumbName: 'Industries',
        faqs: [
          {
            question: 'What is online marketing by industry?',
            answer:
              'Online marketing by industry means websites, SEO and campaigns are tailored to the search intent, competition and customer journey of a specific sector — for example restaurants, dentists or real estate agents.'
          },
          {
            question: 'Which industries does Amora Digital work with?',
            answer:
              'Amora Digital supports restaurants, dentists, physiotherapists, real estate agents, contractors, webshops, gyms and other local and national sectors with websites, SEO and online marketing.'
          },
          {
            question: 'How do I request a quote?',
            answer:
              'Contact us via the contact page, email info@amoradigital.nl or call +31 6 25580415. We typically reply within one business day.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Branches',
        faqs: [
          {
            question: 'Wat is online marketing per branche?',
            answer:
              'Online marketing per branche betekent dat websites, SEO en campagnes worden afgestemd op de zoekintentie, concurrentie en klantreis van een specifieke sector — bijvoorbeeld restaurants, tandartsen of makelaars.'
          },
          {
            question: 'Voor welke branches werkt Amora Digital?',
            answer:
              'Amora Digital ondersteunt onder meer restaurants, tandartsen, fysiotherapeuten, makelaars, aannemers, webshops, sportscholen en andere lokale en landelijke sectoren met websites, SEO en online marketing.'
          },
          {
            question: 'Hoe vraag ik een offerte aan?',
            answer:
              'Neem contact op via de contactpagina, mail info@amoradigital.nl of bel +31 6 25580415. We reageren doorgaans binnen één werkdag.'
          }
        ]
      }
    }
  },

  'branches-restaurants': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for restaurants',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for restaurants' },
        { name: 'Local SEO for restaurants' },
        { name: 'Social media management for restaurants' },
        { name: 'Google Ads for restaurants' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Restaurants & cafés',
        serviceName: 'Online marketing for restaurants & cafés',
        serviceDescription:
          'Online marketing for restaurants and cafés: websites, local SEO, social media and Google Ads focused on more guests and reservations.',
        faqs: [
          {
            question: 'How much does a restaurant website cost?',
            answer:
              'Investment depends on scope: menu, reservations, multilingual support and integrations. After a short call we provide a fixed quote. We always build mobile-first and SEO-ready.'
          },
          {
            question: 'How long does local SEO take for a restaurant?',
            answer:
              'Early improvements to Google Business Profile and on-page SEO often show within a few weeks. Stable rankings for local search terms usually need several months of consistent optimisation and reviews.'
          },
          {
            question: 'Can you help us get more reservations?',
            answer:
              'Yes. We combine a clear website CTA, local visibility and targeted ads or social so searchers book or call instead of only browsing.'
          },
          {
            question: 'Is social media worth it for hospitality?',
            answer:
              'Yes, when it is consistent and links through to reservations or offers. We focus on content that mixes atmosphere with action — not posts without a goal.'
          },
          {
            question: 'Do you also work with cafés and lunchrooms?',
            answer:
              'Yes. The approach applies to restaurants, cafés, lunchrooms and similar hospitality businesses that want more local guests.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Restaurants & cafés',
        serviceName: 'Online marketing voor restaurants & cafés',
        serviceDescription:
          'Online marketing voor restaurants en cafés: websites, lokale SEO, social media en Google Ads gericht op meer gasten en reserveringen.',
        faqs: [
          {
            question: 'Wat kost een website voor een restaurant?',
            answer:
              'De investering hangt af van scope: menu, reserveringen, meertaligheid en koppelingen. Na een kort gesprek geven we een vaste offerte. We bouwen altijd mobile-first en SEO-klaar op.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een restaurant?',
            answer:
              'Eerste verbeteringen aan Google Bedrijfsprofiel en on-page SEO zie je vaak binnen enkele weken. Stabiele rankings voor lokale zoektermen vragen meestal enkele maanden consistente optimalisatie en reviews.'
          },
          {
            question: 'Kunnen jullie helpen met meer reserveringen?',
            answer:
              'Ja. We combineren een duidelijke website-CTA, lokale vindbaarheid en gerichte ads of social, zodat zoekers sneller boeken of bellen in plaats van alleen te kijken.'
          },
          {
            question: 'Is social media zinvol voor horeca?',
            answer:
              'Ja, als het consistent is en doorlinkt naar reserveringen of aanbiedingen. We focussen op content die sfeer en actie combineert — geen losse posts zonder doel.'
          },
          {
            question: 'Werken jullie ook voor cafés en lunchrooms?',
            answer:
              'Ja. De aanpak geldt voor restaurants, cafés, lunchrooms en vergelijkbare horecazaken die lokaal meer gasten willen aantrekken.'
          }
        ]
      }
    }
  },

  'branches-tandartsen': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for dentists',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for dentists' },
        { name: 'Local SEO for dentists' },
        { name: 'Google Ads for dentists' },
        { name: 'Social media for dentists' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Dentists',
        serviceName: 'Online marketing for dentists',
        serviceDescription:
          'Online marketing for dental practices: websites, local SEO, Google Ads and social media focused on new patients and a fuller agenda.',
        faqs: [
          {
            question: 'How much does a dental practice website cost?',
            answer:
              'Investment depends on scope: treatments, team pages, booking tools and integrations. After a short call we provide a fixed quote. We always build mobile-first and SEO-ready.'
          },
          {
            question: 'How long does local SEO take for a dental practice?',
            answer:
              'Early improvements to Google Business Profile and on-page SEO often show within a few weeks. Stable rankings for local search terms usually need several months of consistent optimisation and reviews.'
          },
          {
            question: 'Can you help us attract new patients?',
            answer:
              'Yes. We combine a clear website CTA, local visibility and targeted ads or social so searchers book or call instead of only browsing.'
          },
          {
            question: 'Is Google Ads worth it for a dental practice?',
            answer:
              'Yes, when campaigns target high-intent searches such as new patients, implants or emergency care — with clear landing pages and tracking so you see cost per booking.'
          },
          {
            question: 'Do you work with multi-location dental practices?',
            answer:
              'Yes. We can structure local pages, Google Business Profiles and campaigns for multiple locations while keeping one clear brand.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Tandartsen',
        serviceName: 'Online marketing voor tandartsen',
        serviceDescription:
          'Online marketing voor tandartspraktijken: websites, lokale SEO, Google Ads en social media gericht op nieuwe patiënten en een vollere agenda.',
        faqs: [
          {
            question: 'Wat kost een website voor een tandartspraktijk?',
            answer:
              'De investering hangt af van scope: behandelingen, teampagina’s, afspraaktools en koppelingen. Na een kort gesprek geven we een vaste offerte. We bouwen altijd mobile-first en SEO-klaar op.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een tandartspraktijk?',
            answer:
              'Eerste verbeteringen aan Google Bedrijfsprofiel en on-page SEO zie je vaak binnen enkele weken. Stabiele rankings voor lokale zoektermen vragen meestal enkele maanden consistente optimalisatie en reviews.'
          },
          {
            question: 'Kunnen jullie helpen met nieuwe patiënten?',
            answer:
              'Ja. We combineren een duidelijke website-CTA, lokale vindbaarheid en gerichte ads of social, zodat zoekers sneller boeken of bellen in plaats van alleen te kijken.'
          },
          {
            question: 'Is Google Ads de moeite waard voor een tandartspraktijk?',
            answer:
              'Ja, als campagnes mikken op zoekopdrachten met hoge intentie — zoals nieuwe patiënten, implantaten of spoedzorg — met duidelijke landingspagina’s en tracking zodat je kostprijs per afspraak ziet.'
          },
          {
            question: 'Werken jullie ook met praktijken op meerdere locaties?',
            answer:
              'Ja. We kunnen lokale pagina’s, Google Bedrijfsprofielen en campagnes structureren voor meerdere locaties, met één duidelijke merkuitstraling.'
          }
        ]
      }
    }
  },

  'branches-fysiotherapeuten': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for physiotherapists',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for physiotherapists' },
        { name: 'Local SEO for physiotherapists' },
        { name: 'Google Ads for physiotherapists' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Physiotherapists',
        serviceName: 'Online marketing for physiotherapists',
        serviceDescription:
          'Online marketing for physiotherapy practices: websites, local SEO and Google Ads focused on new clients and a fuller agenda.',
        faqs: [
          {
            question: 'How much does a physiotherapy website cost?',
            answer:
              'Investment depends on scope: treatments, team pages, booking tools and integrations. After a short call we provide a fixed quote. We always build mobile-first and SEO-ready.'
          },
          {
            question: 'How long does local SEO take for a physio practice?',
            answer:
              'Early improvements to Google Business Profile and on-page SEO often show within a few weeks. Stable rankings for local search terms usually need several months of consistent optimisation and reviews.'
          },
          {
            question: 'Can you help us attract new clients?',
            answer:
              'Yes. We combine a clear website CTA, local visibility and targeted ads so searchers book or call instead of only browsing.'
          },
          {
            question: 'Does local SEO matter for a physiotherapy practice?',
            answer:
              'Yes. Most clients search nearby for a physiotherapist. Strong local SEO and a well-managed Google Business Profile help you show up when they need care.'
          },
          {
            question: 'Do you work with multi-location physio practices?',
            answer:
              'Yes. We can structure local pages, Google Business Profiles and campaigns for multiple locations while keeping one clear brand.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Fysiotherapeuten',
        serviceName: 'Online marketing voor fysiotherapeuten',
        serviceDescription:
          'Online marketing voor fysiotherapiepraktijken: websites, lokale SEO en Google Ads gericht op nieuwe cliënten en een vollere agenda.',
        faqs: [
          {
            question: 'Wat kost een website voor een fysiotherapiepraktijk?',
            answer:
              'De investering hangt af van scope: behandelingen, teampagina’s, afspraaktools en koppelingen. Na een kort gesprek geven we een vaste offerte. We bouwen altijd mobile-first en SEO-klaar op.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een fysiopraktijk?',
            answer:
              'Eerste verbeteringen aan Google Bedrijfsprofiel en on-page SEO zie je vaak binnen enkele weken. Stabiele rankings voor lokale zoektermen vragen meestal enkele maanden consistente optimalisatie en reviews.'
          },
          {
            question: 'Kunnen jullie helpen met nieuwe cliënten?',
            answer:
              'Ja. We combineren een duidelijke website-CTA, lokale vindbaarheid en gerichte ads, zodat zoekers sneller boeken of bellen in plaats van alleen te kijken.'
          },
          {
            question: 'Is lokale SEO belangrijk voor een fysiotherapiepraktijk?',
            answer:
              'Ja. De meeste cliënten zoeken dichtbij naar een fysiotherapeut. Sterke lokale SEO en een goed Google Bedrijfsprofiel helpen je zichtbaar te zijn wanneer zij zorg nodig hebben.'
          },
          {
            question: 'Werken jullie ook met praktijken op meerdere locaties?',
            answer:
              'Ja. We kunnen lokale pagina’s, Google Bedrijfsprofielen en campagnes structureren voor meerdere locaties, met één duidelijke merkuitstraling.'
          }
        ]
      }
    }
  },

  'branches-kappers-schoonheidssalons': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for hair & beauty salons',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for hair & beauty salons' },
        { name: 'Local SEO for hair & beauty salons' },
        { name: 'Social media for hair & beauty salons' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Hairdressers & beauty salons',
        serviceName: 'Online marketing for hairdressers & beauty salons',
        serviceDescription:
          'Online marketing for hair and beauty salons: websites, local SEO and social media focused on more bookings and a fuller agenda.',
        faqs: [
          {
            question: 'How much does a salon website cost?',
            answer:
              'Investment depends on scope: services, portfolio, booking tools and integrations. After a short call we provide a fixed quote. We always build mobile-first and SEO-ready.'
          },
          {
            question: 'Can you help us get more bookings?',
            answer:
              'Yes. We combine a clear website CTA, local visibility on Google Maps and social content that drives clients to book instead of only browsing.'
          },
          {
            question: 'Is social media worth it for a salon?',
            answer:
              'Yes — especially for a visual industry. Consistent Instagram and social content that shows your work and links to booking converts followers into appointments.'
          },
          {
            question: 'How do we show up on Google Maps locally?',
            answer:
              'Through local SEO and a well-optimised Google Business Profile: correct NAP details, categories, photos, reviews and posts so nearby clients find you when they search.'
          },
          {
            question: 'Do you work with both hairdressers and beauty salons?',
            answer:
              'Yes. The approach fits hair salons, beauty salons and combined concepts that want more local bookings online.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Kappers & schoonheidssalons',
        serviceName: 'Online marketing voor kappers & schoonheidssalons',
        serviceDescription:
          'Online marketing voor kappers en schoonheidssalons: websites, lokale SEO en social media gericht op meer boekingen en een vollere agenda.',
        faqs: [
          {
            question: 'Wat kost een website voor een salon?',
            answer:
              'De investering hangt af van scope: diensten, portfolio, afspraaktools en koppelingen. Na een kort gesprek geven we een vaste offerte. We bouwen altijd mobile-first en SEO-klaar op.'
          },
          {
            question: 'Kunnen jullie helpen met meer boekingen?',
            answer:
              'Ja. We combineren een duidelijke website-CTA, lokale vindbaarheid op Google Maps en social content die klanten aanzet tot boeken in plaats van alleen kijken.'
          },
          {
            question: 'Is social media de moeite waard voor een salon?',
            answer:
              'Ja — vooral in een visuele branche. Consistente Instagram- en social content die je werk laat zien en doorlinkt naar boeken, zet volgers om in afspraken.'
          },
          {
            question: 'Hoe komen we lokaal in Google Maps?',
            answer:
              'Via lokale SEO en een goed geoptimaliseerd Google Bedrijfsprofiel: juiste NAP-gegevens, categorieën, foto’s, reviews en posts, zodat klanten in de buurt je vinden als ze zoeken.'
          },
          {
            question: 'Werken jullie voor kappers én schoonheidssalons?',
            answer:
              'Ja. De aanpak past bij kapperszaken, schoonheidssalons en combinatieconcepten die lokaal meer boekingen online willen.'
          }
        ]
      }
    }
  },

  'branches-makelaars': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for real estate agents',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for real estate agents' },
        { name: 'Local SEO for real estate agents' },
        { name: 'Google Ads for real estate agents' },
        { name: 'Social media for real estate agents' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Real estate agents',
        serviceName: 'Online marketing for real estate agents',
        serviceDescription:
          'Online marketing for estate agents: websites, local SEO, Google Ads and social media focused on more listings and buyer/seller leads.',
        faqs: [
          {
            question: 'How much does a real estate agency website cost?',
            answer:
              'Investment depends on scope: listings, valuations, CRM integrations and lead forms. After a short call we provide a fixed quote. We always build mobile-first and SEO-ready.'
          },
          {
            question: 'Can you help us generate listing and seller leads?',
            answer:
              'Yes. We combine a clear website CTA, local rankings for “estate agent [city]” and targeted ads or social so sellers enquire with you first.'
          },
          {
            question: 'Is Google Ads worth it for an estate agent?',
            answer:
              'Yes, when campaigns target high-intent searches such as valuations and selling a home — with clear landing pages and tracking so you see cost per lead.'
          },
          {
            question: 'How do we rank locally for “makelaar [city]”?',
            answer:
              'Through local SEO: city and neighbourhood pages, Google Business Profile optimisation, reviews and content that match how buyers and sellers search in your market.'
          },
          {
            question: 'Do you work with multi-office agencies?',
            answer:
              'Yes. We can structure local pages, profiles and campaigns for multiple offices while keeping one clear brand.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Makelaars',
        serviceName: 'Online marketing voor makelaars',
        serviceDescription:
          'Online marketing voor makelaars: websites, lokale SEO, Google Ads en social media gericht op meer opdrachten en koper-/verkoperleads.',
        faqs: [
          {
            question: 'Wat kost een website voor een makelaarskantoor?',
            answer:
              'De investering hangt af van scope: woningen, taxaties, CRM-koppelingen en leadformulieren. Na een kort gesprek geven we een vaste offerte. We bouwen altijd mobile-first en SEO-klaar op.'
          },
          {
            question: 'Kunnen jullie helpen met opdracht- en verkoperleads?',
            answer:
              'Ja. We combineren een duidelijke website-CTA, lokale rankings op “makelaar [stad]” en gerichte ads of social, zodat verkopers eerder bij jou aankloppen.'
          },
          {
            question: 'Is Google Ads de moeite waard voor een makelaar?',
            answer:
              'Ja, als campagnes mikken op zoekopdrachten met hoge intentie — zoals taxatie of huis verkopen — met duidelijke landingspagina’s en tracking zodat je kostprijs per lead ziet.'
          },
          {
            question: 'Hoe scoren we lokaal op “makelaar [stad]”?',
            answer:
              'Via lokale SEO: stads- en buurtpagina’s, Google Bedrijfsprofiel-optimalisatie, reviews en content die aansluit op hoe kopers en verkopers in jouw markt zoeken.'
          },
          {
            question: 'Werken jullie ook met kantoren op meerdere locaties?',
            answer:
              'Ja. We kunnen lokale pagina’s, profielen en campagnes structureren voor meerdere vestigingen, met één duidelijke merkuitstraling.'
          }
        ]
      }
    }
  },

  'branches-restaurants-lokale-seo': {
    parents: ['home', 'branches', 'branches-restaurants'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for restaurants',
      category: 'Digital Marketing',
      offers: [
        { name: 'Google Business Profile for restaurants' },
        { name: 'Google Maps / local pack optimisation' },
        { name: 'Restaurant review growth' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO for restaurants',
        serviceName: 'Local SEO for restaurants',
        serviceDescription:
          'Local SEO for restaurants focused on Google Business Profile, Google Maps, reviews, menu signals and neighbourhood keywords that help diners find and choose your venue — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I rank higher on Google Maps as a restaurant?',
            answer:
              'Strengthen Google Business Profile with correct hospitality categories, accurate kitchen hours, fresh dish photos, menu links and a Reserve button, then grow recent Google reviews and keep NAP consistent. Local SEO improves map visibility over time; we do not promise a specific Maps position.'
          },
          {
            question: 'How long does local SEO take for a restaurant?',
            answer:
              'GBP and review improvements often show within a few weeks. Stable presence in the local pack for competitive “restaurant [city]” or cuisine terms usually needs several months of consistent work. Timelines depend on competition, review velocity and how complete your profile is today.'
          },
          {
            question: 'How do I get more Google reviews for my restaurant?',
            answer:
              'Ask after a strong service moment — when the bill is settled or a regular leaves happy — with a short, direct Google review link. We help set a simple floor process so requests are consistent without pressuring guests during peak dinner.'
          },
          {
            question: 'Does local SEO work for a single restaurant location?',
            answer:
              'Yes. Most restaurant local SEO engagements start with one venue and its catchment: city, neighbourhood and cuisine queries. Multi-location brands need separate profiles and local pages per kitchen.'
          },
          {
            question: 'What is the difference between restaurant local SEO and a restaurant website?',
            answer:
              'Local SEO is about being found in Maps and local search. A restaurant website converts that traffic with menu, reservations and photos. They support each other; this page covers findability, while our restaurant website spoke covers the site build.'
          },
          {
            question: 'Should my restaurant use the Reserve button in Google?',
            answer:
              'If you take table bookings, yes when it connects cleanly to your reservation flow. It turns a Maps tap into booking intent. We only enable it when hours and booking capacity match what guests will experience tonight.'
          },
          {
            question: 'Can local SEO help with “Italian restaurant near me” type searches?',
            answer:
              'That is exactly the query class we target: cuisine + near-me and “restaurant [city/district]”. We align GBP categories, on-site local signals and content with how diners search for your kitchen — not generic business keywords.'
          },
          {
            question: 'Do you guarantee first place in the Google local pack?',
            answer:
              'No. No ethical local SEO provider can guarantee rankings. We set realistic expectations, improve the signals Google uses for restaurants, and report on impressions, calls, routes and clicks toward more covers.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO voor restaurants',
        serviceName: 'Lokale SEO voor restaurants',
        serviceDescription:
          'Lokale SEO voor restaurants gericht op Google Bedrijfsprofiel, Google Maps, reviews, menusignalen en buurtzoekwoorden die diners helpen jouw zaak te vinden en te kiezen — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe kom ik hoger in Google Maps als restaurant?',
            answer:
              'Versterk Google Bedrijfsprofiel met juiste horecacategorieën, kloppende keukentijden, verse gerechtfoto’s, menulinks en een Reserveer-knop, en groei recente Google-reviews met consistente NAP. Lokale SEO verbetert kaartzichtbaarheid over tijd; we beloven geen vaste Maps-positie.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een restaurant?',
            answer:
              'GBP- en reviewverbeteringen zie je vaak binnen enkele weken. Stabiele aanwezigheid in de local pack voor concurrerende “restaurant [stad]”- of keukentermen vraagt meestal enkele maanden consistent werk. Doorlooptijd hangt af van concurrentie, reviewtempo en hoe compleet je profiel nu is.'
          },
          {
            question: 'Hoe krijg ik meer Google-reviews voor mijn restaurant?',
            answer:
              'Vraag na een sterk servicemoment — na de rekening of als een stamgast blij vertrekt — met een korte, directe Google-reviewlink. We helpen een eenvoudig vloerenproces opzetten zodat verzoeken consistent zijn zonder gasten tijdens piekdiner te pushen.'
          },
          {
            question: 'Werkt lokale SEO voor één restaurantlocatie?',
            answer:
              'Ja. De meeste lokale SEO-trajecten voor restaurants starten met één zaak en het verzorgingsgebied: stad, wijk en keukenqueries. Multi-locatiemerken hebben aparte profielen en lokale pagina’s per keuken nodig.'
          },
          {
            question: 'Wat is het verschil tussen lokale SEO en een restaurantwebsite?',
            answer:
              'Lokale SEO gaat over gevonden worden in Maps en lokaal zoeken. Een restaurantwebsite converteert dat verkeer met menu, reserveringen en foto’s. Ze versterken elkaar; deze pagina gaat over vindbaarheid, de restaurantwebsite-spoke over de sitebouw.'
          },
          {
            question: 'Moet mijn restaurant de Reserveer-knop in Google gebruiken?',
            answer:
              'Als je tafelboekingen aanneemt: ja, wanneer die netjes aansluit op je reserveringsflow. Zo wordt een Maps-tik boekingsintentie. We zetten hem alleen aan als tijden en capaciteit kloppen met wat gasten vanavond ervaren.'
          },
          {
            question: 'Helpt lokale SEO bij zoekopdrachten zoals “Italiaans restaurant bij mij”?',
            answer:
              'Dat is precies de queryklasse waarop we mikken: keuken + bij mij en “restaurant [stad/wijk]”. We stemmen GBP-categorieën, on-site lokale signalen en content af op hoe diners naar jouw keuken zoeken — geen generieke bedrijfszoekwoorden.'
          },
          {
            question: 'Garanderen jullie een eerste plek in de Google local pack?',
            answer:
              'Nee. Geen ethische lokale SEO-partij kan rankings garanderen. We zetten realistische verwachtingen, verbeteren de signalen die Google voor restaurants gebruikt, en rapporteren over impressies, belacties, routes en klikken richting meer covers.'
          }
        ]
      }
    }
  },

  'branches-restaurants-website-laten-maken': {
    parents: ['home', 'branches', 'branches-restaurants'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for restaurants',
      category: 'Web Development',
      offers: [
        { name: 'Restaurant website with reservations' },
        { name: 'Digital menu website' },
        { name: 'Mobile booking path for hospitality' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design for restaurants',
        serviceName: 'Website design for restaurants',
        serviceDescription:
          'Restaurant website design with online reservations, digital menu, dish photography layouts, Google Maps findability and mobile booking — built to fill tables, not look like a corporate brochure.',
        faqs: [
          {
            question: 'How much does a website for a restaurant cost?',
            answer:
              'Cost depends on menu complexity, whether you need an integrated online reservation system, multilingual pages, takeaway flows and photo production. After a short intake we send a fixed quote by package — Essential, reservation-ready or multi-location — not open-ended hourly billing mid-build.'
          },
          {
            question: 'Do I need an online reservation system on my restaurant website?',
            answer:
              'If guests already book by phone or Instagram DM during service, yes — an online reservation system frees the floor team and captures bookings outside opening hours. Smaller lunch spots sometimes start with a strong call button and a simple form; full table booking pays off when dinner covers matter most.'
          },
          {
            question: 'How long does a restaurant website project take?',
            answer:
              'Most restaurant websites launch in about four to eight weeks, depending on how ready the menu content and food photography are, and which reservation tool we integrate. Discovery covers your service flow first so we do not rebuild a generic brochure site.'
          },
          {
            question: 'Can I update the digital menu myself?',
            answer:
              'Yes. We set up an editable digital menu so your team can change dishes, prices, allergens and seasonal specials after a chalkboard update — without waiting on a developer for every lunch deal.'
          },
          {
            question: 'Should restaurant websites include takeaway and delivery links?',
            answer:
              'When takeaway or delivery is part of your revenue, yes — with clear buttons to your pickup flow or delivery platforms. We keep the dine-in “Reserve a table” CTA prominent so marketplace links do not bury the bookings that fill seats in the dining room.'
          },
          {
            question: 'How does a restaurant website help with Google Maps and local search?',
            answer:
              'We structure address, map, opening hours and LocalBusiness signals so neighbourhood and “near me” searches point to your venue. The website supports Google Maps clicks with a clear menu and reservation path, not a dead-end homepage.'
          },
          {
            question: 'Do you also design websites for cafés and lunchrooms?',
            answer:
              'Yes. The same hospitality approach applies to restaurants, cafés, lunchrooms and similar venues that need menu clarity, kitchen hours and a booking or visit path built for local guests.'
          },
          {
            question: 'What makes a restaurant website different from a normal business website?',
            answer:
              'Guests decide in seconds based on dishes, hours and how easy it is to reserve. We prioritise digital menu, allergen info, food photography, peak-service booking and local findability — not a corporate “Services” page with a contact form at the bottom.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken voor restaurants',
        serviceName: 'Website laten maken voor restaurants',
        serviceDescription:
          'Restaurantwebsite laten maken met online reserveringen, digitale menukaart, layouts voor foodfotografie, Google Maps-vindbaarheid en mobiel boeken — gebouwd om tafels te vullen, geen corporate brochure.',
        faqs: [
          {
            question: 'Wat kost een website voor een restaurant?',
            answer:
              'De kosten hangen af van menukaartcomplexiteit, of je een geïntegreerd online reserveringssysteem nodig hebt, meertalige pagina’s, afhaalflows en fotografie. Na een korte intake sturen we een vaste offerte per package — Essential, reserveringsklaar of multi-locatie — geen open uurtje-factuurtje halverwege de bouw.'
          },
          {
            question: 'Heb ik een reserveringssysteem nodig op mijn restaurantwebsite?',
            answer:
              'Als gasten nu via telefoon of Instagram-DM boeken tijdens de service: ja — een online reserveringssysteem ontlast de vloer en vangt boekingen buiten openingstijden. Kleine lunchzaken starten soms met een sterke belknop en een eenvoudig formulier; volledige tafelboeking loont vooral als dinercovers het verschil maken.'
          },
          {
            question: 'Hoe lang duurt het om een restaurantwebsite te laten maken?',
            answer:
              'De meeste restaurantwebsites gaan in ongeveer vier tot acht weken live, afhankelijk van hoe klaar menucontent en foodfotografie zijn en welk reserveringssysteem we koppelen. Discovery begint bij jouw serviceflow, zodat we geen generieke brochure-site bouwen.'
          },
          {
            question: 'Kan ik zelf de menukaart aanpassen?',
            answer:
              'Ja. We richten een bewerkbare digitale menukaart in, zodat je team gerechten, prijzen, allergenen en seizoensspecials kan wijzigen na een bordupdate — zonder voor elke lunchdeal op een developer te wachten.'
          },
          {
            question: 'Moet een restaurantwebsite afhalen en bezorgplatforms tonen?',
            answer:
              'Als afhalen of bezorgen bij je omzet hoort: ja — met duidelijke knoppen naar je afhaalflow of bezorgplatforms. We houden de dine-in-CTA “Reserveer een tafel” prominent, zodat marketplace-links de boekingen die stoelen in de zaak vullen niet begraven.'
          },
          {
            question: 'Hoe helpt een restaurantwebsite bij Google Maps en lokaal zoeken?',
            answer:
              'We structureren adres, kaart, openingstijden en LocalBusiness-signalen zodat buurt- en “bij mij in de buurt”-zoekopdrachten naar jouw zaak wijzen. De website ondersteunt Google Maps-klikken met een duidelijke menukaart en reserveringspad, geen doodlopende homepage.'
          },
          {
            question: 'Maken jullie ook websites voor cafés en lunchrooms?',
            answer:
              'Ja. Dezelfde horeca-aanpak geldt voor restaurants, cafés, lunchrooms en vergelijkbare zaken die menuduidelijkheid, keukentijden en een boek- of bezoekpad voor lokale gasten nodig hebben.'
          },
          {
            question: 'Wat maakt een restaurantwebsite anders dan een gewone bedrijfswebsite?',
            answer:
              'Gasten beslissen in seconden op basis van gerechten, tijden en hoe makkelijk ze reserveren. Wij zetten digitale menukaart, allergeneninfo, foodfotografie, piekservice-boekingen en lokale vindbaarheid voorop — geen corporate “Diensten”-pagina met onderaan een contactformulier.'
          }
        ]
      }
    }
  },

  'branches-tandartsen-lokale-seo': {
    parents: ['home', 'branches', 'branches-tandartsen'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for dentists',
      category: 'Digital Marketing',
      offers: [
        { name: 'Google Business Profile for dental practices' },
        { name: 'Google Maps / local pack for dentists' },
        { name: 'Patient review growth for dental practices' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO for dentists',
        serviceName: 'Local SEO for dentists',
        serviceDescription:
          'Local SEO for dental practices focused on Google Business Profile, Google Maps, patient reviews, new-patient city keywords and emergency-intent search — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I rank higher on Google as a dentist?',
            answer:
              'Strengthen Google Business Profile with correct dental categories, accurate clinic hours, fresh practice photos, clear “accepting new patients” signals and a booking or call action, then grow recent patient reviews and keep NAP consistent. Local SEO improves visibility over time; we do not promise a specific ranking.'
          },
          {
            question: 'How do I get more patient reviews?',
            answer:
              'Set up a simple, ethical request habit after check-ups or completed treatment, make the Google review link easy for reception to share, and reply to reviews with a professional tone. Volume and recency matter for how new patients choose a practice in the map pack.'
          },
          {
            question: 'How long does local SEO take for a dental practice?',
            answer:
              'Early GBP and review improvements often show within a few weeks. Stable map-pack presence for competitive “dentist [city]” terms usually needs several months of consistent optimisation. Timelines depend on competition and how complete your profile already is.'
          },
          {
            question: 'Does local SEO work for practices with multiple locations?',
            answer:
              'Yes. We structure separate profiles, local pages and review flows per site so each practice competes in its own catchment, instead of one address cannibalising another.'
          },
          {
            question: 'Can local SEO help with emergency dentist searches?',
            answer:
              'Where emergency or urgent care is part of how you work, we align GBP categories, hours notes and on-site signals so pain-related local searches can find you — without overselling services you do not offer out of hours.'
          },
          {
            question: 'Do you guarantee first place in the Google local pack?',
            answer:
              'No. No ethical local SEO partner can guarantee rankings. We set realistic expectations, improve the signals Google uses for dental practices, and report on impressions, calls, routes and clicks toward more new-patient enquiries.'
          },
          {
            question: 'How is this different from building a dental website?',
            answer:
              'The website spoke is about converting visitors with treatments, booking and registration. This local SEO spoke is about being found in Maps and local search first. They work best together, but they are different engagements.'
          },
          {
            question: 'Should we target insurance or reimbursement keywords?',
            answer:
              'When it matches how patients search in your area, yes — paired with clear on-site explanations. We avoid thin doorway pages and keep intent tied to real services your practice offers.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO voor tandartsen',
        serviceName: 'Lokale SEO voor tandartsen',
        serviceDescription:
          'Lokale SEO voor tandartspraktijken gericht op Google Bedrijfsprofiel, Google Maps, patiëntreviews, nieuw-patiënt stadszoekwoorden en spoedintentie — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe kom ik hoger in Google als tandarts?',
            answer:
              'Versterk Google Bedrijfsprofiel met juiste tandheelkundige categorieën, accurate praktijktijden, verse praktijkfoto’s, duidelijke signalen of jullie nieuwe patiënten aannemen en een boek- of belactie, groei daarna recente patiëntreviews en houd NAP consistent. Lokale SEO verbetert zichtbaarheid in de tijd; we beloven geen specifieke ranking.'
          },
          {
            question: 'Hoe krijg ik meer patiëntreviews?',
            answer:
              'Zet een eenvoudige, ethische verzoekgewoonte op na controles of afgeronde behandeling, maak de Google-reviewlink makkelijk deelbaar voor de balie, en beantwoord reviews professioneel. Volume en recentheid tellen mee bij hoe nieuwe patiënten een praktijk in de kaartpack kiezen.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een tandartspraktijk?',
            answer:
              'Eerste GBP- en reviewverbeteringen zie je vaak binnen enkele weken. Stabiele kaartpack-aanwezigheid op concurrerende “tandarts [stad]”-termen vraagt meestal enkele maanden consistente optimalisatie. Doorlooptijd hangt af van concurrentie en hoe compleet je profiel al is.'
          },
          {
            question: 'Werkt lokale SEO voor meerdere locaties?',
            answer:
              'Ja. We structureren aparte profielen, lokale pagina’s en reviewflows per vestiging zodat elke praktijk in het eigen verzorgingsgebied concurreert, in plaats van dat één adres een ander kannibaliseert.'
          },
          {
            question: 'Helpt lokale SEO bij spoedtandarts-zoekopdrachten?',
            answer:
              'Als spoed- of urgente zorg bij hoe jullie werken hoort, stemmen we GBP-categorieën, tijdsnotities en on-site signalen af zodat pijn-gerelateerde lokale zoekopdrachten jullie kunnen vinden — zonder diensten te beloven die jullie buiten openingstijden niet bieden.'
          },
          {
            question: 'Garanderen jullie een eerste plek in de Google local pack?',
            answer:
              'Nee. Geen ethische lokale SEO-partij kan rankings garanderen. We zetten realistische verwachtingen, verbeteren de signalen die Google voor tandartspraktijken gebruikt, en rapporteren over impressies, belacties, routes en klikken richting meer nieuw-patiëntaanvragen.'
          },
          {
            question: 'Wat is het verschil met een tandartswebsite laten maken?',
            answer:
              'De website-spoke gaat over converteren met behandelingen, boeken en inschrijven. Deze lokale SEO-spoke gaat over eerst gevonden worden in Maps en lokaal zoeken. Samen werken ze het best, maar het zijn verschillende trajecten.'
          },
          {
            question: 'Moeten we mikken op verzekering- of vergoedingszoekwoorden?',
            answer:
              'Als dat past bij hoe patiënten in jouw regio zoeken: ja — gekoppeld aan duidelijke uitleg op de site. We vermijden dunne doorway-pagina’s en houden intentie gekoppeld aan diensten die jullie écht aanbieden.'
          }
        ]
      }
    }
  },

  'branches-tandartsen-website-laten-maken': {
    parents: ['home', 'branches', 'branches-tandartsen'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for dentists',
      category: 'Web Development',
      offers: [
        { name: 'Dental practice website with online appointments' },
        { name: 'New patient registration website' },
        { name: 'Treatments and fees pages for dentists' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design for dentists',
        serviceName: 'Website design for dentists',
        serviceDescription:
          'Dental practice website design with online appointments, treatment and fee pages, new-patient registration, anxiety and emergency info, and privacy-aware patient journeys — built to fill the agenda, not look like a generic brochure.',
        faqs: [
          {
            question: 'How much does a website for a dental practice cost?',
            answer:
              'Cost depends on treatment complexity, whether you need an integrated online appointment planner, new-patient registration, multilingual pages and practice photography. After a short intake we send a fixed quote by package — Essential, booking-ready or multi-location — not open-ended hourly billing mid-build.'
          },
          {
            question: 'Can patients book an appointment online?',
            answer:
              'Yes. We connect the appointment planner your practice already uses, or set up a clear booking path for check-ups, hygienist visits and follow-ups so patients book without calling reception during clinic hours.'
          },
          {
            question: 'How do I attract new patients through a dental website?',
            answer:
              'Show clearly whether you accept new patients, explain key treatments and fees where appropriate, add patient reviews, and make registration and booking one tap away. Local SEO and ads can bring traffic later; the website must convert that traffic into agenda slots.'
          },
          {
            question: 'Is a dental practice website AVG / GDPR compliant?',
            answer:
              'We design forms and booking journeys with privacy in mind: clear consent, collecting only what intake needs, and language that reassures patients about how medical details are handled. Your practice remains responsible for clinical systems and data processing agreements with software vendors.'
          },
          {
            question: 'How long does a dental website project take?',
            answer:
              'Most practice websites launch in about four to eight weeks, depending on how ready treatment content and team photos are, and which booking tool we integrate. Discovery starts with your intake and agenda so we do not build a generic clinic template.'
          },
          {
            question: 'Can we update treatments and “accepting new patients” ourselves?',
            answer:
              'Yes. Reception can update treatment copy, fee notes and whether you accept new patients — without waiting on a developer when the agenda is full or a hygienist joins the team.'
          },
          {
            question: 'Do you also build sites for practices with a dental hygienist?',
            answer:
              'Yes. We create clear paths for hygienist appointments alongside dentist bookings and referral information, so patients and referring colleagues reach the right agenda.'
          },
          {
            question: 'Should the website include emergency and dental anxiety information?',
            answer:
              'Yes when it matches how you work. Clear emergency or on-call guidance and calm anxiety-friendly copy help patients in pain or with fear choose you — and reduce wrong calls to reception.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken voor tandartsen',
        serviceName: 'Website laten maken voor tandartsen',
        serviceDescription:
          'Praktijkwebsite laten maken voor tandartsen met online afspraken, behandel- en tariefpagina’s, inschrijving nieuwe patiënten, angst- en spoedinfo, en AVG-bewuste patiëntreizen — gebouwd om de agenda te vullen, geen generieke brochure.',
        faqs: [
          {
            question: 'Wat kost een website voor een tandartspraktijk?',
            answer:
              'De kosten hangen af van behandelcomplexiteit, of je een geïntegreerde online afsprakenplanner nodig hebt, inschrijving voor nieuwe patiënten, meertalige pagina’s en praktijksfotografie. Na een korte intake sturen we een vaste offerte per package — Essential, boekingsklaar of multi-locatie — geen open uurtje-factuurtje halverwege de bouw.'
          },
          {
            question: 'Kunnen patiënten online een afspraak maken?',
            answer:
              'Ja. We koppelen de afsprakenplanner die jullie al gebruiken, of richten een duidelijk boekpad in voor controles, mondhygiëne en vervolgafspraken, zodat patiënten boeken zonder te bellen tijdens spreekuur.'
          },
          {
            question: 'Hoe trek ik nieuwe patiënten aan via een tandartswebsite?',
            answer:
              'Toon duidelijk of jullie nieuwe patiënten aannemen, leg kernbehandelingen en tarieven waar passend uit, voeg patiëntreviews toe, en maak inschrijven en boeken één tik verwijderd. Lokale SEO en ads brengen later verkeer; de website moet dat verkeer omzetten in agendaplekken.'
          },
          {
            question: 'Is de website AVG-proof?',
            answer:
              'We ontwerpen formulieren en boekflows met privacy in gedachten: duidelijke toestemming, alleen verzamelen wat intake nodig heeft, en taal die patiënten geruststelt over medische gegevens. Jullie praktijk blijft verantwoordelijk voor klinische systemen en verwerkersafspraken met softwareleveranciers.'
          },
          {
            question: 'Hoe lang duurt het om een tandartswebsite te laten maken?',
            answer:
              'De meeste praktijkwebsites gaan in ongeveer vier tot acht weken live, afhankelijk van hoe klaar behandelcontent en teamfoto’s zijn en welk boekingssysteem we koppelen. Discovery begint bij jullie intake en agenda, zodat we geen generiek kliniektemplate bouwen.'
          },
          {
            question: 'Kunnen we zelf behandelingen en “nieuwe patiënten aannemen” aanpassen?',
            answer:
              'Ja. De balie kan behandelteksten, tariefnotities en of jullie nieuwe patiënten aannemen bijwerken — zonder op een developer te wachten wanneer de agenda vol is of er een mondhygiënist bijkomt.'
          },
          {
            question: 'Maken jullie ook sites voor praktijken met een mondhygiënist?',
            answer:
              'Ja. We maken duidelijke paden voor mondhygiënist-afspraken naast tandartsboekingen en verwijsinfo, zodat patiënten en verwijzende collega’s de juiste agenda bereiken.'
          },
          {
            question: 'Moet de website spoed- en angstinformatie bevatten?',
            answer:
              'Ja als dat past bij hoe jullie werken. Duidelijke spoed- of nooddienstinfo en rustige angstvriendelijke copy helpen patiënten met pijn of angst voor jullie te kiezen — en verminderen verkeerde belletjes naar de balie.'
          }
        ]
      }
    }
  },

  'branches-fysiotherapeuten-website-laten-maken': {
    parents: ['home', 'branches', 'branches-fysiotherapeuten'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for physiotherapists',
      category: 'Web Development',
      offers: [
        { name: 'Physiotherapy website with online booking' },
        { name: 'Specialisations and DTF explanation pages' },
        { name: 'Insurance and reimbursement info for physio practices' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design for physiotherapists',
        serviceName: 'Website design for physiotherapists',
        serviceDescription:
          'Physiotherapy website design with online appointments, specialisation pages, direct-access (DTF) and insurance answers, body-area complaint paths and mobile booking — built to fill treatment rooms, not look like a generic clinic brochure.',
        faqs: [
          {
            question: 'How much does a website for a physio practice cost?',
            answer:
              'Cost depends on how many specialisations you present, whether you need an integrated online planner, DTF and reimbursement pages, multilingual content and practice photography. After a short intake we send a fixed quote by package — Essential, booking-ready or multi-location — not open-ended hourly billing mid-build.'
          },
          {
            question: 'Can clients book an appointment online?',
            answer:
              'Yes. We connect the appointment planner your practice already uses, or set up a clear booking path for intakes and follow-ups so clients book without calling during treatment hours.'
          },
          {
            question: 'How do I attract new clients through a physio website?',
            answer:
              'Show specialisations clearly, explain direct access and reimbursement, add client reviews, and make booking one tap away. Local SEO and ads can bring traffic later; the website must convert that traffic into agenda slots.'
          },
          {
            question: 'Can I show my specialisations on the website?',
            answer:
              'Yes — and you should. We build dedicated paths for manual therapy, sports physio, dry needling, rehabilitation and other specialisations so clients and referring GPs find the right therapist fast.'
          },
          {
            question: 'Should the site explain direct access without a referral (DTF)?',
            answer:
              'Yes when you offer it. Clear DTF copy reduces confusion at reception and helps clients who search after an injury understand they can often start without a GP letter — while still noting when medical advice comes first.'
          },
          {
            question: 'How long does a physiotherapy website project take?',
            answer:
              'Most practice websites launch in about four to eight weeks, depending on how ready specialisation content and team photos are, and which booking tool we integrate. Discovery starts with your intake and caseload so we do not build a generic clinic template.'
          },
          {
            question: 'Can we update treatments and “accepting new clients” ourselves?',
            answer:
              'Yes. Your team can update specialisation copy, insurance notes and whether you accept new clients — without waiting on a developer when the agenda is full or a new therapist joins.'
          },
          {
            question: 'Do you also support content like exercises or blogs?',
            answer:
              'Yes. We can structure exercise tips or recovery articles that support trust and search, while keeping the book appointment CTA prominent so content never replaces conversion.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken voor fysiotherapeuten',
        serviceName: 'Website laten maken voor fysiotherapeuten',
        serviceDescription:
          'Fysiotherapiewebsite laten maken met online afspraken, specialisatiepagina’s, uitleg over directe toegang (DTF) en vergoeding, klachtpaden per lichaamsdeel en mobiel boeken — gebouwd om behandelkamers te vullen, geen generieke kliniekbrochure.',
        faqs: [
          {
            question: 'Wat kost een website voor een fysiopraktijk?',
            answer:
              'De kosten hangen af van hoeveel specialisaties je presenteert, of je een geïntegreerde online planner nodig hebt, DTF- en vergoedingspagina’s, meertalige content en praktijksfotografie. Na een korte intake sturen we een vaste offerte per package — Essential, boekingsklaar of multi-locatie — geen open uurtje-factuurtje halverwege de bouw.'
          },
          {
            question: 'Kunnen cliënten online een afspraak maken?',
            answer:
              'Ja. We koppelen de afsprakenplanner die jullie al gebruiken, of richten een duidelijk boekpad in voor intakes en vervolgafspraken, zodat cliënten boeken zonder te bellen tijdens behandeluren.'
          },
          {
            question: 'Hoe trek ik nieuwe cliënten aan via een fysiowebsite?',
            answer:
              'Toon specialisaties duidelijk, leg directe toegang en vergoeding uit, voeg cliëntreviews toe, en maak boeken één tik verwijderd. Lokale SEO en ads brengen later verkeer; de website moet dat verkeer omzetten in agendaplekken.'
          },
          {
            question: 'Kan ik mijn specialisaties tonen?',
            answer:
              'Ja — en dat moet ook. We bouwen aparte paden voor manuele therapie, sportfysio, dry needling, revalidatie en andere specialisaties, zodat cliënten en verwijzende huisartsen snel de juiste therapeut vinden.'
          },
          {
            question: 'Moet de site directe toegang zonder verwijzing (DTF) uitleggen?',
            answer:
              'Ja als jullie dat aanbieden. Duidelijke DTF-tekst vermindert verwarring aan de balie en helpt cliënten die na een blessure zoeken te begrijpen dat ze vaak zonder huisartsbrief kunnen starten — met vermelding wanneer medisch advies eerst komt.'
          },
          {
            question: 'Hoe lang duurt het om een fysiowebsite te laten maken?',
            answer:
              'De meeste praktijkwebsites gaan in ongeveer vier tot acht weken live, afhankelijk van hoe klaar specialisatiecontent en teamfoto’s zijn en welk boekingssysteem we koppelen. Discovery begint bij jullie intake en caseload, zodat we geen generiek kliniektemplate bouwen.'
          },
          {
            question: 'Kunnen we zelf behandelingen en “nieuwe cliënten aannemen” aanpassen?',
            answer:
              'Ja. Jullie team kan specialisatieteksten, verzekeringsnotities en of jullie nieuwe cliënten aannemen bijwerken — zonder op een developer te wachten wanneer de agenda vol is of er een therapeut bijkomt.'
          },
          {
            question: 'Ondersteunen jullie ook content zoals oefeningen of blogs?',
            answer:
              'Ja. We kunnen oefentips of herstelartikelen structureren die vertrouwen en zoeken steunen, terwijl de boekings-CTA prominent blijft zodat content conversie nooit vervangt.'
          }
        ]
      }
    }
  },

  'branches-fysiotherapeuten-lokale-seo': {
    parents: ['home', 'branches', 'branches-fysiotherapeuten'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for physiotherapists',
      category: 'Digital Marketing',
      offers: [
        { name: 'Google Business Profile for physio practices' },
        { name: 'Specialisation and city keyword optimisation' },
        { name: 'Client review growth for physiotherapy' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO for physiotherapists',
        serviceName: 'Local SEO for physiotherapists',
        serviceDescription:
          'Local SEO for physiotherapy practices focused on Google Business Profile, Google Maps, client reviews, city and specialisation keywords, and direct-access search behaviour — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I rank higher on Google as a physiotherapist?',
            answer:
              'Strengthen Google Business Profile with correct physio categories, accurate hours, fresh practice photos, clear services and a booking or call action, then grow recent client reviews and keep NAP consistent. Local SEO improves visibility over time; we do not promise a specific ranking.'
          },
          {
            question: 'How do I get more client reviews?',
            answer:
              'Set up a simple, ethical request habit after a treatment block, make the Google review link easy for reception to share, and reply to reviews with a professional tone. Volume and recency matter for how new clients choose a physio in the map pack.'
          },
          {
            question: 'How long does local SEO take for a physio practice?',
            answer:
              'Early GBP and review improvements often show within a few weeks. Stable map-pack presence for competitive “physiotherapist [city]” terms usually needs several months of consistent optimisation. Timelines depend on competition and how complete your profile already is.'
          },
          {
            question: 'Can I rank for my specialisation, such as sports physio or manual therapy?',
            answer:
              'Yes, when the specialisation matches therapists on your team and is supported by GBP services, on-site pages and local content. We target specialisation + city intent without building thin doorway pages.'
          },
          {
            question: 'Does local SEO work for practices with multiple locations?',
            answer:
              'Yes. We structure separate profiles, local pages and review flows per site so each practice competes in its own catchment, instead of one address cannibalising another.'
          },
          {
            question: 'Do you guarantee first place in the Google local pack?',
            answer:
              'No. No ethical local SEO partner can guarantee rankings. We set realistic expectations, improve the signals Google uses for physio practices, and report on impressions, calls, routes and clicks toward more new-client enquiries.'
          },
          {
            question: 'How is this different from building a physio website?',
            answer:
              'The website spoke is about converting visitors with specialisations, DTF, insurance info and booking. This local SEO spoke is about being found in Maps and local search first. They work best together, but they are different engagements.'
          },
          {
            question: 'Can local SEO support referrals from GPs?',
            answer:
              'Indirectly, yes. Clear specialisation signals, consistent NAP and a trustworthy Maps presence make it easier for referring GPs and coaches to find and recommend you — while your website still carries the full referral story.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO voor fysiotherapeuten',
        serviceName: 'Lokale SEO voor fysiotherapeuten',
        serviceDescription:
          'Lokale SEO voor fysiopraktijken gericht op Google Bedrijfsprofiel, Google Maps, cliëntreviews, stads- en specialisatiezoekwoorden, en zoekgedrag rond directe toegang — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe kom ik hoger in Google als fysiotherapeut?',
            answer:
              'Versterk Google Bedrijfsprofiel met juiste fysiocategorieën, accurate tijden, verse praktijkfoto’s, duidelijke diensten en een boek- of belactie, groei daarna recente cliëntreviews en houd NAP consistent. Lokale SEO verbetert zichtbaarheid in de tijd; we beloven geen specifieke ranking.'
          },
          {
            question: 'Hoe krijg ik meer cliëntreviews?',
            answer:
              'Zet een eenvoudige, ethische verzoekgewoonte op na een behandeltraject, maak de Google-reviewlink makkelijk deelbaar voor de balie, en beantwoord reviews professioneel. Volume en recentheid tellen mee bij hoe nieuwe cliënten een fysio in de kaartpack kiezen.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een fysiopraktijk?',
            answer:
              'Eerste GBP- en reviewverbeteringen zie je vaak binnen enkele weken. Stabiele kaartpack-aanwezigheid op concurrerende “fysiotherapeut [stad]”-termen vraagt meestal enkele maanden consistente optimalisatie. Doorlooptijd hangt af van concurrentie en hoe compleet je profiel al is.'
          },
          {
            question: 'Kan ik ranken op mijn specialisatie, zoals sportfysio of manuele therapie?',
            answer:
              'Ja, als de specialisatie past bij therapeuten in je team en wordt ondersteund door GBP-diensten, on-site pagina’s en lokale content. We mikken op specialisatie + stad-intentie zonder dunne doorway-pagina’s te bouwen.'
          },
          {
            question: 'Werkt lokale SEO voor meerdere locaties?',
            answer:
              'Ja. We structureren aparte profielen, lokale pagina’s en reviewflows per vestiging zodat elke praktijk in het eigen verzorgingsgebied concurreert, in plaats van dat één adres een ander kannibaliseert.'
          },
          {
            question: 'Garanderen jullie een eerste plek in de Google local pack?',
            answer:
              'Nee. Geen ethische lokale SEO-partij kan rankings garanderen. We zetten realistische verwachtingen, verbeteren de signalen die Google voor fysiopraktijken gebruikt, en rapporteren over impressies, belacties, routes en klikken richting meer nieuw-cliëntaanvragen.'
          },
          {
            question: 'Wat is het verschil met een fysiowebsite laten maken?',
            answer:
              'De website-spoke gaat over converteren met specialisaties, DTF, vergoedingsinfo en boeken. Deze lokale SEO-spoke gaat over eerst gevonden worden in Maps en lokaal zoeken. Samen werken ze het best, maar het zijn verschillende trajecten.'
          },
          {
            question: 'Kan lokale SEO verwijzingen van huisartsen ondersteunen?',
            answer:
              'Indirect wel. Duidelijke specialisatiesignalen, consistente NAP en een betrouwbare Maps-aanwezigheid maken het voor verwijzende huisartsen en coaches makkelijker om je te vinden en aan te bevelen — terwijl je website het volledige verhaal voor verwijzers draagt.'
          }
        ]
      }
    }
  },

  'branches-kappers-schoonheidssalons-website-laten-maken': {
    parents: ['home', 'branches', 'branches-kappers-schoonheidssalons'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for hair & beauty salons',
      category: 'Web Development',
      offers: [
        { name: 'Salon website with online booking' },
        { name: 'Price list and portfolio gallery' },
        { name: 'Gift vouchers and Instagram connection' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design for hair & beauty salons',
        serviceName: 'Website design for hair & beauty salons',
        serviceDescription:
          'Hair and beauty salon website design with 24/7 online booking, treatments and price list, portfolio gallery, stylist pages, gift vouchers and mobile booking — built to fill chairs, not look like a generic brochure.',
        faqs: [
          {
            question: 'How much does a website for a hair salon cost?',
            answer:
              'Cost depends on how many services and stylists you present, whether you need integrated online booking, gift vouchers, Instagram integration and portfolio photography. After a short intake we send a fixed quote by package — Essential, booking-ready or multi-location — not open-ended hourly billing mid-build.'
          },
          {
            question: 'Can clients book online?',
            answer:
              'Yes. We connect the booking tool your salon already uses, or set up a clear booking path for cuts, colour and beauty treatments so clients book 24/7 without calling during a busy Saturday.'
          },
          {
            question: 'Can I update the price list myself?',
            answer:
              'Yes. Your team can change treatments, prices and seasonal packages after a menu update — without waiting on a developer every time colour pricing shifts.'
          },
          {
            question: 'Can I show my Instagram on the website?',
            answer:
              'Yes. We can surface recent salon work from Instagram so your feed and booking path stay in sync. Social proves the look; the website captures the appointment.'
          },
          {
            question: 'How long does a salon website project take?',
            answer:
              'Most salon websites launch in about four to eight weeks, depending on how ready portfolio content and the price list are, and which booking tool we integrate. Discovery starts with your booking flow so we do not build a generic brochure site.'
          },
          {
            question: 'Do you support gift vouchers on the site?',
            answer:
              'Yes, where it fits your operations. Digital gift cards for cuts, colour packages or treatments become a clear revenue path that does not depend on someone calling reception at lunch.'
          },
          {
            question: 'Can clients book a specific stylist?',
            answer:
              'Yes. We build stylist pages with specialties and booking links so clients who follow someone on Instagram can book that person — not a random open slot.'
          },
          {
            question: 'How does the website help reduce no-shows?',
            answer:
              'Online booking with automatic confirmations and reminders reduces forgotten appointments compared with phone-only or Instagram-DM booking. Exact reminder setup depends on the booking software you use.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken voor kappers',
        serviceName: 'Website laten maken voor kappers',
        serviceDescription:
          'Website laten maken voor kappers en schoonheidssalons met 24/7 online boeken, behandelingen en prijslijst, portfoliogalerij, stylistpagina’s, cadeaubonnen en mobiel boeken — gebouwd om stoelen te vullen, geen generieke brochure.',
        faqs: [
          {
            question: 'Wat kost een website voor een kapsalon?',
            answer:
              'De kosten hangen af van hoeveel diensten en stylisten je presenteert, of je geïntegreerd online boeken nodig hebt, cadeaubonnen, Instagram-integratie en portfoliofotografie. Na een korte intake sturen we een vaste offerte per package — Essential, boekingsklaar of multi-locatie — geen open uurtje-factuurtje halverwege de bouw.'
          },
          {
            question: 'Kunnen klanten online boeken?',
            answer:
              'Ja. We koppelen de boekingssoftware die jullie al gebruiken, of richten een duidelijk boekpad in voor knippen, kleuren en beautybehandelingen, zodat klanten 24/7 boeken zonder te bellen op een drukke zaterdag.'
          },
          {
            question: 'Kan ik mijn prijslijst zelf aanpassen?',
            answer:
              'Ja. Jullie team kan behandelingen, prijzen en seizoenspakketten wijzigen na een menukaartupdate — zonder voor elke kleurprijswijziging op een developer te wachten.'
          },
          {
            question: 'Kan ik mijn Instagram tonen?',
            answer:
              'Ja. We kunnen recent salonwerk van Instagram tonen zodat feed en boekpad synchroon blijven. Social bewijst de look; de website vangt de afspraak.'
          },
          {
            question: 'Hoe lang duurt het om een salonwebsite te laten maken?',
            answer:
              'De meeste salonwebsites gaan in ongeveer vier tot acht weken live, afhankelijk van hoe klaar portfoliocontent en de prijslijst zijn en welk boekingssysteem we koppelen. Discovery begint bij jullie boekflow, zodat we geen generieke brochuresite bouwen.'
          },
          {
            question: 'Ondersteunen jullie cadeaubonnen op de site?',
            answer:
              'Ja, als dat past bij jullie operatie. Digitale cadeaubonnen voor knipbeurten, kleurpakketten of behandelingen worden een duidelijk omzetpad dat niet afhangt van iemand die op de lunchpauze de balie belt.'
          },
          {
            question: 'Kunnen klanten een specifieke stylist boeken?',
            answer:
              'Ja. We bouwen stylistpagina’s met specialiteiten en boeklinks, zodat klanten die iemand op Instagram volgen die persoon boeken — geen willekeurig open slot.'
          },
          {
            question: 'Hoe helpt de website no-shows te verminderen?',
            answer:
              'Online boeken met automatische bevestigingen en herinneringen vermindert vergeten afspraken vergeleken met alleen telefoon of Instagram-DM. Exacte herinneringen hangen af van de boekingssoftware die jullie gebruiken.'
          }
        ]
      }
    }
  },

  'branches-kappers-schoonheidssalons-lokale-seo': {
    parents: ['home', 'branches', 'branches-kappers-schoonheidssalons'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for hair & beauty salons',
      category: 'Digital Marketing',
      offers: [
        { name: 'Google Business Profile for salons' },
        { name: 'Service and city keyword optimisation' },
        { name: 'Salon review growth and result photos' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO for hair & beauty salons',
        serviceName: 'Local SEO for hair & beauty salons',
        serviceDescription:
          'Local SEO for hair and beauty salons focused on Google Business Profile, Google Maps, reviews, result photos, city and treatment keywords, and Book actions — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I rank higher on Google as a hairdresser?',
            answer:
              'Strengthen Google Business Profile with correct salon categories, accurate hours, fresh result photos, clear services and a Book or call action, then grow recent client reviews and keep NAP consistent. Local SEO improves visibility over time; we do not promise a specific ranking.'
          },
          {
            question: 'How do I get more reviews for my salon?',
            answer:
              'Set up a simple, ethical request habit after colour, cut or nail appointments, make the Google review link easy for the front desk to share, and reply to reviews with a professional tone. In beauty, volume and recency heavily influence which salon clients choose in the map pack.'
          },
          {
            question: 'How long does local SEO take for a salon?',
            answer:
              'Early GBP and review improvements often show within a few weeks. Stable map-pack presence for competitive “hairdresser [city]” terms usually needs several months of consistent optimisation. Timelines depend on competition and how complete your profile already is.'
          },
          {
            question: 'Can I rank for a specific treatment, such as balayage or gel nails?',
            answer:
              'Yes, when the treatment matches services you offer and is supported by GBP services, on-site pages and local content. We target treatment + city intent without building thin doorway pages.'
          },
          {
            question: 'Does local SEO work for nail studios and beauty salons too?',
            answer:
              'Yes. The same Maps, review and service-keyword approach applies to hairdressers, beauty salons and nail studios that want more local bookings.'
          },
          {
            question: 'Do you guarantee first place in the Google local pack?',
            answer:
              'No. No ethical local SEO partner can guarantee rankings. We set realistic expectations, improve the signals Google uses for salons, and report on impressions, calls, routes and booking clicks toward more chairs filled.'
          },
          {
            question: 'How is this different from building a salon website?',
            answer:
              'The website spoke is about converting visitors with booking, price list and portfolio. This local SEO spoke is about being found in Maps and local search first. They work best together, but they are different engagements.'
          },
          {
            question: 'How does Instagram fit into local SEO for salons?',
            answer:
              'Instagram is often how beauty clients discover you. We keep names, NAP and discovery paths consistent so social interest can convert into a Google booking — without replacing a full social media retainer.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO voor kappers',
        serviceName: 'Lokale SEO voor kappers',
        serviceDescription:
          'Lokale SEO voor kappers en schoonheidssalons gericht op Google Bedrijfsprofiel, Google Maps, reviews, resultaatfoto’s, stads- en behandelzoekwoorden, en Boek-acties — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe kom ik hoger in Google als kapper?',
            answer:
              'Versterk Google Bedrijfsprofiel met juiste saloncategorieën, accurate tijden, verse resultaatfoto’s, duidelijke diensten en een Boek- of belactie, groei daarna recente klantreviews en houd NAP consistent. Lokale SEO verbetert zichtbaarheid in de tijd; we beloven geen specifieke ranking.'
          },
          {
            question: 'Hoe krijg ik meer reviews voor mijn salon?',
            answer:
              'Zet een eenvoudige, ethische verzoekgewoonte op na kleur-, knip- of nagelafspraken, maak de Google-reviewlink makkelijk deelbaar voor de balie, en beantwoord reviews professioneel. In beauty bepalen volume en recentheid sterk welke salon klanten in de kaartpack kiezen.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een salon?',
            answer:
              'Eerste GBP- en reviewverbeteringen zie je vaak binnen enkele weken. Stabiele kaartpack-aanwezigheid op concurrerende “kapper [stad]”-termen vraagt meestal enkele maanden consistente optimalisatie. Doorlooptijd hangt af van concurrentie en hoe compleet je profiel al is.'
          },
          {
            question: 'Kan ik ranken op een specifieke behandeling, zoals balayage of gelnagels?',
            answer:
              'Ja, als de behandeling past bij diensten die jullie aanbieden en wordt ondersteund door GBP-diensten, on-site pagina’s en lokale content. We mikken op behandeling + stad-intentie zonder dunne doorway-pagina’s te bouwen.'
          },
          {
            question: 'Werkt lokale SEO ook voor nagelstudio’s en schoonheidssalons?',
            answer:
              'Ja. Dezelfde Maps-, review- en dienstzoekwoordaanpak geldt voor kappers, schoonheidssalons en nagelstudio’s die lokaal meer boekingen willen.'
          },
          {
            question: 'Garanderen jullie een eerste plek in de Google local pack?',
            answer:
              'Nee. Geen ethische lokale SEO-partij kan rankings garanderen. We zetten realistische verwachtingen, verbeteren de signalen die Google voor salons gebruikt, en rapporteren over impressies, belacties, routes en boekingsklikken richting meer volle stoelen.'
          },
          {
            question: 'Wat is het verschil met een salonwebsite laten maken?',
            answer:
              'De website-spoke gaat over converteren met boeken, prijslijst en portfolio. Deze lokale SEO-spoke gaat over eerst gevonden worden in Maps en lokaal zoeken. Samen werken ze het best, maar het zijn verschillende trajecten.'
          },
          {
            question: 'Hoe past Instagram in lokale SEO voor salons?',
            answer:
              'Instagram is vaak hoe beautyklanten je ontdekken. We houden namen, NAP en ontdekkingspaden consistent zodat social interesse kan omzetten in een Google-boeking — zonder een volledig social media-retainer te vervangen.'
          }
        ]
      }
    }
  },

  'branches-makelaars-website-laten-maken': {
    parents: ['home', 'branches', 'branches-makelaars'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for real estate agents',
      category: 'Web Development',
      offers: [
        { name: 'Estate agent website with listings' },
        { name: 'Funda / Realworks listing feed' },
        { name: 'Free valuation lead form' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design for real estate agents',
        serviceName: 'Website design for real estate agents',
        serviceDescription:
          'Estate agent website design with searchable listings, Funda/NVM/Realworks feed integration where possible, free valuation forms, sold portfolio, neighbourhood pages and viewing requests — built to win instructions, not look like a generic brochure.',
        faqs: [
          {
            question: 'How much does a website for an estate agent cost?',
            answer:
              'Cost depends on listing volume, Funda/Realworks feed complexity, valuation and viewing forms, neighbourhood pages and photography. After a short intake we send a fixed quote by package — Essential, listing-ready or multi-office — not open-ended hourly billing mid-build.'
          },
          {
            question: 'Can the listings sync with Funda or Realworks?',
            answer:
              'Where your stack allows, yes. We connect listing feeds so homes on your site stay aligned with your CRM and portal publications — reducing double entry after every open house. Exact connectors depend on your software.'
          },
          {
            question: 'How do I generate seller leads from the website?',
            answer:
              'Put a clear free valuation form front and centre, back it with sold proof and neighbourhood pages, and make the path mobile-friendly. Local SEO and ads can bring traffic later; the website must convert sellers into valuation requests.'
          },
          {
            question: 'Can we add properties ourselves?',
            answer:
              'With a feed integration, new listings typically flow from your CRM. For manual content such as neighbourhood pages or sold stories, we train your team so everyday updates do not need a developer.'
          },
          {
            question: 'How long does an estate agent website project take?',
            answer:
              'Most agency websites launch in about four to eight weeks, depending on feed complexity and content readiness. Discovery starts with your listing and lead flow so we do not build a generic clinic-style template.'
          },
          {
            question: 'Do you build neighbourhood or district pages?',
            answer:
              'Yes. Local pages for the areas you cover support SEO and help buyers and sellers trust your market knowledge before they call.'
          },
          {
            question: 'Can buyers request a viewing from a listing page?',
            answer:
              'Yes. Each property can include a viewing request or question form that lands in your process with the listing reference attached.'
          },
          {
            question: 'Should the site show a sold portfolio?',
            answer:
              'Yes. Recently sold homes with neighbourhood context help sellers see you close deals on streets like theirs — a stronger trust signal than stock living-room photos.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken voor makelaars',
        serviceName: 'Website laten maken voor makelaars',
        serviceDescription:
          'Makelaarswebsite laten maken met doorzoekbaar woningaanbod, Funda/NVM/Realworks-feedkoppeling waar mogelijk, gratis waardebepaling, verkochtportfolio, wijkpagina’s en bezichtigingsaanvragen — gebouwd om opdrachten te winnen, geen generieke brochure.',
        faqs: [
          {
            question: 'Wat kost een website voor een makelaar?',
            answer:
              'De kosten hangen af van aanbodvolume, complexiteit van Funda/Realworks-feed, waardebepaling- en bezichtigingsforms, wijkpagina’s en fotografie. Na een korte intake sturen we een vaste offerte per package — Essential, aanbodklaar of multi-kantoor — geen open uurtje-factuurtje halverwege de bouw.'
          },
          {
            question: 'Kan het aanbod koppelen met Funda of Realworks?',
            answer:
              'Waar je stack het toelaat: ja. We koppelen aanbodfeeds zodat woningen op je site synchroon blijven met CRM en portalpublicaties — minder dubbel invoeren na elke open dag. Exacte koppelingen hangen af van je software.'
          },
          {
            question: 'Hoe genereer ik verkoopleads via de website?',
            answer:
              'Zet een duidelijk gratis-waardebepalingformulier centraal, ondersteun het met verkochtbewijs en wijkpagina’s, en maak het pad mobielvriendelijk. Lokale SEO en ads brengen later verkeer; de website moet verkopers omzetten in waardebepalingaanvragen.'
          },
          {
            question: 'Kan ik zelf woningen toevoegen?',
            answer:
              'Met een feedintegratie stromen nieuwe woningen meestal vanuit je CRM. Voor handmatige content zoals wijkpagina’s of verkochtverhalen trainen we je team, zodat dagelijkse updates geen developer nodig hebben.'
          },
          {
            question: 'Hoe lang duurt het om een makelaarswebsite te laten maken?',
            answer:
              'De meeste kantoorwebsites gaan in ongeveer vier tot acht weken live, afhankelijk van feedcomplexiteit en contentklaarheid. Discovery begint bij je aanbod- en leadflow, zodat we geen generiek kliniektemplate bouwen.'
          },
          {
            question: 'Maken jullie ook buurt- of wijkpagina’s?',
            answer:
              'Ja. Lokale pagina’s voor de gebieden die je dekt steunen SEO en helpen kopers en verkopers je marktkennis te vertrouwen vóór ze bellen.'
          },
          {
            question: 'Kunnen kopers vanaf een woningpagina een bezichtiging aanvragen?',
            answer:
              'Ja. Elke woning kan een bezichtigings- of vraagformulier hebben dat in je proces landt met de woningreferentie erbij.'
          },
          {
            question: 'Moet de site een verkochtportfolio tonen?',
            answer:
              'Ja. Recent verkochte woningen met buurtcontext helpen verkopers zien dat je deals sluit in straten zoals die van hen — een sterker vertrouwenssignaal dan stockfoto’s van woonkamers.'
          }
        ]
      }
    }
  },

  'branches-makelaars-lokale-seo': {
    parents: ['home', 'branches', 'branches-makelaars'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for real estate agents',
      category: 'Digital Marketing',
      offers: [
        { name: 'Google Business Profile for estate agents' },
        { name: 'City and neighbourhood landing pages' },
        { name: 'Seller and buyer review growth' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO for real estate agents',
        serviceName: 'Local SEO for real estate agents',
        serviceDescription:
          'Local SEO for estate agents focused on Google Business Profile, Google Maps, city and neighbourhood pages, seller reviews and valuation search intent — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I rank higher on Google as an estate agent?',
            answer:
              'Strengthen Google Business Profile with correct agency categories, clear service areas, accurate hours, fresh office or sold-proof photos and a call or website action, then grow recent seller and buyer reviews and keep NAP consistent. Local SEO improves visibility over time; we do not promise a specific ranking.'
          },
          {
            question: 'How do I rank for my city or neighbourhood?',
            answer:
              'Combine a complete GBP service area with dedicated city and district landing pages that show real local knowledge and sold context. Thin doorway pages do not work; useful neighbourhood pages plus consistent local signals do.'
          },
          {
            question: 'How do I get more reviews as an estate agent?',
            answer:
              'Set up a simple, ethical request habit after completion of a sale or purchase, make the Google review link easy for colleagues to share, and reply professionally. Seller reviews heavily influence which agent the next seller chooses in the map pack.'
          },
          {
            question: 'How long does local SEO take for an estate agency?',
            answer:
              'Early GBP and review improvements often show within a few weeks. Stable map-pack and district visibility for competitive city terms usually needs several months of consistent optimisation. Timelines depend on competition and how complete your profile already is.'
          },
          {
            question: 'Can local SEO help with “free valuation [city]” searches?',
            answer:
              'Yes. We align GBP and on-site signals with valuation search intent so map and organic clicks land on a clear request path — without promising a specific ranking for that phrase.'
          },
          {
            question: 'Do you guarantee first place in the Google local pack?',
            answer:
              'No. No ethical local SEO partner can guarantee rankings. We set realistic expectations, improve the signals Google uses for agencies, and report on impressions, calls, routes and clicks toward more valuation enquiries.'
          },
          {
            question: 'How is this different from building an estate agent website?',
            answer:
              'The website spoke is about converting visitors with listings, feeds and valuation forms. This local SEO spoke is about being found in Maps and local search first. They work best together, but they are different engagements.'
          },
          {
            question: 'Does local SEO work for agencies with multiple offices?',
            answer:
              'Yes. We structure separate profiles, local pages and review flows per branch so each office competes in its own catchment, instead of one address cannibalising another.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO voor makelaars',
        serviceName: 'Lokale SEO voor makelaars',
        serviceDescription:
          'Lokale SEO voor makelaars gericht op Google Bedrijfsprofiel, Google Maps, stads- en wijkpagina’s, verkoperreviews en zoekintentie rond waardebepaling — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe kom ik hoger in Google als makelaar?',
            answer:
              'Versterk Google Bedrijfsprofiel met juiste makelaarscategorieën, duidelijk verzorgingsgebied, accurate tijden, verse kantoor- of verkochtbewijsfoto’s en een bel- of website-actie, groei daarna recente verkoper- en kopersreviews en houd NAP consistent. Lokale SEO verbetert zichtbaarheid in de tijd; we beloven geen specifieke ranking.'
          },
          {
            question: 'Hoe rank ik voor mijn stad of wijk?',
            answer:
              'Combineer een compleet GBP-verzorgingsgebied met dedicated stads- en wijklandingspagina’s die echte lokale kennis en verkochtcontext tonen. Dunne doorway-pagina’s werken niet; nuttige wijkpagina’s plus consistente lokale signalen wel.'
          },
          {
            question: 'Hoe krijg ik meer reviews als makelaar?',
            answer:
              'Zet een eenvoudige, ethische verzoekgewoonte op na overdracht van een verkoop of aankoop, maak de Google-reviewlink makkelijk deelbaar voor collega’s, en beantwoord professioneel. Verkoperreviews bepalen sterk welke makelaar de volgende verkoper in de kaartpack kiest.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een makelaarskantoor?',
            answer:
              'Eerste GBP- en reviewverbeteringen zie je vaak binnen enkele weken. Stabiele kaartpack- en wijkzichtbaarheid op concurrerende stadstermen vraagt meestal enkele maanden consistente optimalisatie. Doorlooptijd hangt af van concurrentie en hoe compleet je profiel al is.'
          },
          {
            question: 'Helpt lokale SEO bij zoekopdrachten op “gratis waardebepaling [stad]”?',
            answer:
              'Ja. We stemmen GBP- en on-site signalen af op waardebepalingintentie, zodat kaart- en organische klikken op een duidelijk aanvraagpad landen — zonder een specifieke ranking voor die frase te beloven.'
          },
          {
            question: 'Garanderen jullie een eerste plek in de Google local pack?',
            answer:
              'Nee. Geen ethische lokale SEO-partij kan rankings garanderen. We zetten realistische verwachtingen, verbeteren de signalen die Google voor makelaars gebruikt, en rapporteren over impressies, belacties, routes en klikken richting meer waardebepalingaanvragen.'
          },
          {
            question: 'Wat is het verschil met een makelaarswebsite laten maken?',
            answer:
              'De website-spoke gaat over converteren met aanbod, feeds en waardebepalingforms. Deze lokale SEO-spoke gaat over eerst gevonden worden in Maps en lokaal zoeken. Samen werken ze het best, maar het zijn verschillende trajecten.'
          },
          {
            question: 'Werkt lokale SEO voor kantoren met meerdere vestigingen?',
            answer:
              'Ja. We structureren aparte profielen, lokale pagina’s en reviewflows per vestiging zodat elk kantoor in het eigen verzorgingsgebied concurreert, in plaats van dat één adres een ander kannibaliseert.'
          }
        ]
      }
    }
  },

  'royal-casino-hub': {
    parents: ['home'],
    pageType: 'ItemPage',
    product: { category: 'Content & Media' },
    locales: {
      en: {
        breadcrumbName: 'Royal Casino Hub',
        productName: 'Royal Casino Hub',
        productDescription:
          'Royal Casino Hub covers casino industry news and reviews for the iGaming audience.',
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
      },
      nl: {
        breadcrumbName: 'Royal Casino Hub',
        productName: 'Royal Casino Hub',
        productDescription:
          'Royal Casino Hub behandelt nieuws uit de casino-industrie en reviews voor het iGaming-publiek.',
        faqs: [
          {
            question: 'Wat is Royal Casino Hub?',
            answer:
              'Royal Casino Hub is een iGaming-contentplatform met nieuws uit de casino-industrie, spelreviews, operatorvergelijkingen en regelgevingsupdates — gemaakt door Amora Digital voor de online casino-doelgroep.'
          },
          {
            question: 'Welk type casino-content publiceert Royal Casino Hub?',
            answer:
              'Expertreviews, bonusvergelijkingen, gidsen voor verantwoord spelen, analyses van softwareproviders en marktnieuws — gestructureerd met schema markup en E-E-A-T-signalen voor vertrouwen in search en AI.'
          },
          {
            question: 'Is Royal Casino Hub geoptimaliseerd voor SEO en AI-zoekmachines?',
            answer:
              'Ja. Artikelen gebruiken FAQ-schema, Article structured data, topical authority clusters en entity-optimalisatie zodat content scoort in Google en geciteerd kan worden door AI-assistenten over casino-onderwerpen.'
          },
          {
            question: 'Bevordert Royal Casino Hub verantwoord spelen?',
            answer:
              'Ja. Informatie over verantwoord spelen, leeftijdsbeperkingen en hulpbronnen staan naast reviews — om te voldoen aan regelgeving en vertrouwen bij lezers en zoekmachines op te bouwen.'
          }
        ]
      }
    }
  }
}

/**
 * Special-case product pages: they sit under a virtual "Products" parent that
 * isn't a real page (the products grid lives on the homepage). The middle
 * breadcrumb is non-clickable in the visible UI; for schema we emit it
 * pointing at the home/`/nl` page so URLs remain valid.
 */
function isProductKey(key: RouteKey): boolean {
  return (
    key === 'auto-form-builder' ||
    key === 'auto-form-crm' ||
    key === 'hi-fan' ||
    key === 'pinkpeck' ||
    key === 'unbox-deal' ||
    key === 'royal-casino-hub'
  )
}

function breadcrumbItemsWithPaths(
  key: RouteKey,
  locale: Locale
): Array<{ name: string; path: string }> {
  const config = pageSeoByKey[key]
  const items: Array<{ name: string; path: string }> = []
  for (const parentKey of config.parents) {
    items.push({
      name: pageSeoByKey[parentKey].locales[locale].breadcrumbName,
      path: pathFor(parentKey, locale)
    })
  }
  if (isProductKey(key)) {
    items.splice(items.length, 0, {
      name: PRODUCTS_BREADCRUMB_NAME[locale],
      path: pathFor('home', locale)
    })
  }
  items.push({ name: config.locales[locale].breadcrumbName, path: pathFor(key, locale) })
  return items
}

export function resolvePageSchema(
  pathname: string,
  meta: { title: string; description: string; image?: string }
): ReadonlyArray<JsonObject> {
  const key = getRouteKey(pathname)
  if (!key) return []
  const locale = localeFromPath(pathname)
  const config = pageSeoByKey[key]
  const localeEntry = config.locales[locale]
  const language = LOCALE_HTML_LANG[locale]

  const breadcrumbItems = breadcrumbItemsWithPaths(key, locale)
  const breadcrumbId = `${absoluteUrl(pathname)}#breadcrumb`
  const breadcrumb = {
    ...buildBreadcrumbSchema(breadcrumbItems),
    '@id': breadcrumbId
  }

  const pageUrl = absoluteUrl(pathname)
  const faqId = localeEntry.faqs?.length ? `${pageUrl}#faq` : undefined

  const webPage = buildWebPageSchema({
    path: pathname,
    name: meta.title,
    description: meta.description,
    type: config.pageType,
    breadcrumbId,
    image: meta.image,
    faqId,
    language,
    datePublished: BUSINESS_FOUNDING_DATE,
    dateModified: BUILD_DATE
  })

  const nodes: JsonObject[] = [breadcrumb, webPage]

  if (config.extras?.length) {
    nodes.push(...config.extras)
  }

  if (config.service && localeEntry.serviceName && localeEntry.serviceDescription) {
    nodes.push(
      buildServiceSchema({
        path: pathname,
        name: localeEntry.serviceName,
        description: localeEntry.serviceDescription,
        serviceType: config.service.serviceType,
        category: config.service.category,
        offers: config.service.offers
      })
    )
  }

  if (config.product && localeEntry.productName && localeEntry.productDescription) {
    nodes.push(
      buildProductSchema({
        path: pathname,
        name: localeEntry.productName,
        description: localeEntry.productDescription,
        category: config.product.category,
        applicationCategory: config.product.applicationCategory,
        operatingSystem: config.product.operatingSystem,
        offers: config.product.offers
      })
    )
  }

  if (localeEntry.faqs?.length) {
    nodes.push(buildFaqSchema(pathname, localeEntry.faqs, language))
  }

  return nodes
}

/** Lookup the FAQs for a path (used by the visible FAQ section). */
export function getFaqsForPath(pathname: string): ReadonlyArray<FaqItem> {
  const key = getRouteKey(pathname)
  if (!key) return []
  const locale = localeFromPath(pathname)
  return pageSeoByKey[key].locales[locale].faqs ?? []
}

/** Visible breadcrumb trail with localized labels + locale-correct paths. */
export function getBreadcrumbs(pathname: string): ReadonlyArray<{ name: string; path: string }> {
  const key = getRouteKey(pathname)
  if (!key) {
    const locale = localeFromPath(pathname)
    return [{ name: pageSeoByKey.home.locales[locale].breadcrumbName, path: ROUTES.home[locale] }]
  }
  return breadcrumbItemsWithPaths(key, localeFromPath(pathname))
}
