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

  'branches-aannemers': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for contractors',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for contractors' },
        { name: 'Local SEO for contractors' },
        { name: 'Google Ads for contractors' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Contractors',
        serviceName: 'Online marketing for contractors',
        serviceDescription:
          'Online marketing for contractors and trades businesses: websites, local SEO and Google Ads focused on project enquiries and regional jobs.',
        faqs: [
          {
            question: 'How do we show our project portfolio online?',
            answer:
              'We structure before/after galleries by trade — kitchens, roofs, bathrooms, extensions — with short job context so homeowners can picture their own project. Photos load fast on mobile, where most quote requests start.'
          },
          {
            question: 'How do we get more quote requests from homeowners?',
            answer:
              'Put a simple quote form above the fold, match it to the trades you actually take on, and make calling or WhatsApp one tap on a phone. Local SEO and later ads can bring visitors; the site must turn them into enquiries you can price.'
          },
          {
            question: 'How do we get found in our region?',
            answer:
              'Through local SEO: Google Business Profile with the right trade categories, service-area clarity, recent project photos, reviews after completed jobs, and pages that match how people search “roofer [town]” or “kitchen renovation [city]”. We do not promise a fixed map-pack place.'
          },
          {
            question: 'How long does a contractor website take?',
            answer:
              'Most contractor sites launch in about four to eight weeks, depending on how ready your project photos and service list are. Discovery starts with your quote flow so we do not ship a generic brochure template.'
          },
          {
            question: 'When does Google Ads make sense for a contractor?',
            answer:
              'When you can take on jobs quickly and have a clear landing page per trade or urgency type — for example storm damage or planned kitchen renovation. We keep ads non-live on this hub until keywords are validated for your catchment.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Aannemers & klusbedrijven',
        serviceName: 'Online marketing voor aannemers',
        serviceDescription:
          'Online marketing voor aannemers en klusbedrijven: websites, lokale SEO en Google Ads gericht op projectaanvragen en regionaal werk.',
        faqs: [
          {
            question: 'Hoe tonen we ons projectportfolio online?',
            answer:
              'We structureren voor/na-galerijen per vak — keukens, daken, badkamers, uitbouwen — met korte kluscontext zodat huiseigenaren hun eigen project kunnen voorstellen. Foto’s laden snel op mobiel, waar de meeste offerteaanvragen starten.'
          },
          {
            question: 'Hoe krijgen we meer offerteaanvragen binnen?',
            answer:
              'Zet een eenvoudig offerteformulier bovenaan, koppel het aan de vakken die je écht doet, en maak bellen of WhatsApp één tik op de telefoon. Lokale SEO en later ads brengen bezoekers; de site moet ze omzetten in aanvragen die je kunt begroten.'
          },
          {
            question: 'Hoe worden we vindbaar in de regio?',
            answer:
              'Via lokale SEO: Google Bedrijfsprofiel met de juiste vakcategorieën, duidelijk werkgebied, recente projectfoto’s, reviews na opgeleverde klussen, en pagina’s die aansluiten op zoekopdrachten als “dakdekker [plaats]” of “keukenrenovatie [stad]”. We beloven geen vaste plek in de kaartpack.'
          },
          {
            question: 'Hoe lang duurt een website voor een aannemer?',
            answer:
              'De meeste aannemerssites gaan in ongeveer vier tot acht weken live, afhankelijk van hoe klaar je projectfoto’s en dienstenlijst zijn. Discovery start bij je offerteflow, zodat we geen generieke brochuretemplate opleveren.'
          },
          {
            question: 'Wanneer heeft Google Ads zin voor een aannemer?',
            answer:
              'Als je snel klussen kunt oppakken en een duidelijke landingspagina per vak of urgentie hebt — bijvoorbeeld stormschade of geplande keukenrenovatie. Op deze hub houden we ads non-live tot zoekwoorden voor jouw verzorgingsgebied zijn gevalideerd.'
          }
        ]
      }
    }
  },

  'branches-installateurs': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for installers',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for installers' },
        { name: 'Local SEO for installers' },
        { name: 'Google Ads for installers' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Plumbers, electricians & installers',
        serviceName: 'Online marketing for installers',
        serviceDescription:
          'Online marketing for plumbers, electricians and installers: websites, local SEO and Google Ads focused on service calls and installation enquiries.',
        faqs: [
          {
            question: 'How do we stay reachable for emergency call-outs?',
            answer:
              'Put your emergency number and WhatsApp one tap away on every page, show night and weekend hours clearly, and separate urgent call-outs from planned installs so callers know who to dial. A cold boiler search rarely waits for a contact form buried under a gallery.'
          },
          {
            question: 'How do homeowners find us in our service area?',
            answer:
              'Local SEO ties your Google Business Profile, trade categories and town pages to the radius your vans actually cover. Reviews after completed call-outs and clear service towns help Maps and organic search match “plumber [town]” or “electrician near me”.'
          },
          {
            question: 'How do we stand out from other installers nearby?',
            answer:
              'Show certifications, response windows, brands you install and real job photos per trade — heat pumps, solar, boilers, fuse boards — instead of generic “we do everything” claims. Specific install proof beats another stock photo of a toolbox.'
          },
          {
            question: 'Can we attract heat pump and solar installation requests?',
            answer:
              'Yes: dedicated pages for heat pumps and solar with subsidy context, brand experience and a short install quote form work better than one catch-all services list. Homeowners researching upgrades search differently from someone with a leaking pipe tonight.'
          },
          {
            question: 'When should we add Google Ads for installers?',
            answer:
              'When you can take call-outs or booked installs quickly and have landings for urgency versus planned work. On this hub we keep ads muted until keywords fit your catchment and capacity.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Loodgieters, elektriciens & installateurs',
        serviceName: 'Online marketing voor installateurs',
        serviceDescription:
          'Online marketing voor loodgieters, elektriciens en installateurs: websites, lokale SEO en Google Ads gericht op service-ritten en installatieaanvragen.',
        faqs: [
          {
            question: 'Hoe blijven we bereikbaar bij spoedklussen?',
            answer:
              'Zet spoednummer en WhatsApp overal één tik weg, toon avond- en weekenduren duidelijk, en scheid spoed van geplande installaties zodat bellers weten wie ze moeten bellen. Een koude cv wacht zelden op een formulier onder een fotogalerij.'
          },
          {
            question: 'Hoe worden we vindbaar in ons werkgebied?',
            answer:
              'Lokale SEO koppelt je Google Bedrijfsprofiel, vakcategorieën en plaatspagina’s aan de straal die je bussen echt rijden. Reviews na service-ritten en heldere servicesteden helpen Maps en organisch zoeken bij “loodgieter [plaats]” of “elektricien in de buurt”.'
          },
          {
            question: 'Hoe onderscheiden we ons van concurrenten in de buurt?',
            answer:
              'Toon certificeringen, responstijden, merken die je plaatst en echte klusfoto’s per vak — warmtepompen, zonnepanelen, cv’s, meterkasten — in plaats van vage “wij doen alles”-claims. Specifiek installatiebewijs wint van weer een stockfoto van een gereedschapskist.'
          },
          {
            question: 'Kunnen we warmtepomp- en zonnepanelen-aanvragen aantrekken?',
            answer:
              'Ja: aparte pagina’s voor warmtepompen en zonnepanelen met subsidiecontext, merkeraring en een kort installatieformulier werken beter dan één algemene dienstenlijst. Huiseigenaren die upgraden zoeken anders dan iemand met een lekkende leiding vannacht.'
          },
          {
            question: 'Wanneer heeft Google Ads zin voor installateurs?',
            answer:
              'Als je spoedritten of geboekte installaties snel kunt oppakken en landings hebt voor urgentie versus gepland werk. Op deze hub houden we ads non-live tot zoekwoorden bij jouw werkgebied en capaciteit passen.'
          }
        ]
      }
    }
  },

  'branches-advocaten-notarissen': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for lawyers and notaries',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for law firms' },
        { name: 'Local SEO for law firms' },
        { name: 'Google Ads for law firms' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Lawyers & notaries',
        serviceName: 'Online marketing for lawyers and notaries',
        serviceDescription:
          'Online marketing for lawyers and notaries: websites, local SEO and Google Ads focused on practice-area authority and qualified legal enquiries.',
        faqs: [
          {
            question: 'How do we project trust and authority online?',
            answer:
              'Lead with clear practice areas, calm professional tone, team credentials and a discreet consultation path — not stock gavel photos or aggressive “free claim” banners. Stressed visitors decide quickly whether a firm feels serious enough to contact.'
          },
          {
            question: 'How should we present our practice areas?',
            answer:
              'Give each major practice area its own page or block — family, employment, corporate, injury, notarial deeds — with plain language on who you help and what the first step is. One vague “we do everything legal” paragraph hides the specialisation people search for.'
          },
          {
            question: 'How do we get better-qualified case enquiries?',
            answer:
              'Match landing pages to the problem someone is googling, ask a few intake questions on the form, and make phone or callback options obvious for urgent matters. Quality rises when tyre-kickers self-select before they hit the diary.'
          },
          {
            question: 'How do we get found for a practice area in our city?',
            answer:
              'Local SEO and practice + city pages help Maps and organic search match “family lawyer [city]” or “notary deed [town]”. Reviews and a complete Google Business Profile support that; we do not promise a fixed ranking.'
          },
          {
            question: 'Is marketing different for notaries than for lawyers?',
            answer:
              'Often yes. Notarial demand clusters around property transfer, wills and cohabitation agreements, with more price comparison. Lawyer marketing leans on high-stakes specialisation and trust. We keep both paths distinct on this hub’s future spokes.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Advocaten & notarissen',
        serviceName: 'Online marketing voor advocaten en notarissen',
        serviceDescription:
          'Online marketing voor advocaten en notarissen: websites, lokale SEO en Google Ads gericht op rechtsgebiedautoriteit en gekwalificeerde juridische aanvragen.',
        faqs: [
          {
            question: 'Hoe stralen we vertrouwen en autoriteit online uit?',
            answer:
              'Zet heldere rechtsgebieden, een rustige professionele toon, teamcredentials en een discreet consultpad voorop — geen stockhamerbeelden of agressieve “gratis claim”-banners. Gestreste bezoekers beslissen snel of een kantoor serieus genoeg voelt om contact op te nemen.'
          },
          {
            question: 'Hoe presenteren we onze rechtsgebieden duidelijk?',
            answer:
              'Geef elk groot rechtsgebied een eigen pagina of blok — familie, arbeid, onderneming, letsel, notariële aktes — met begrijpelijke taal over wie je helpt en wat de eerste stap is. Eén vaag “wij doen alles juridisch”-alineaatje verbergt de specialisatie waarnaar mensen zoeken.'
          },
          {
            question: 'Hoe krijgen we betere zaakaanvragen binnen?',
            answer:
              'Koppel landingspagina’s aan het probleem dat iemand googlet, stel een paar intakevragen in het formulier, en maak bellen of terugbellen duidelijk bij urgente zaken. Kwaliteit stijgt wanneer shoppers zichzelf filteren vóór ze in de agenda landen.'
          },
          {
            question: 'Hoe worden we vindbaar per rechtsgebied en stad?',
            answer:
              'Lokale SEO en rechtsgebied + stad-pagina’s helpen Maps en organisch zoeken bij “advocaat familierecht [stad]” of “notaris akte [plaats]”. Reviews en een compleet Google Bedrijfsprofiel ondersteunen dat; we beloven geen vaste ranking.'
          },
          {
            question: 'Is marketing anders voor notarissen dan voor advocaten?',
            answer:
              'Vaak wel. Notariële vraag clusterert rond woningoverdracht, testamenten en samenlevingscontracten, met meer prijsvergelijking. Advocatenmarketing leunt op specialisatie met hoge inzet en vertrouwen. We houden beide paden onderscheiden op de toekomstige spokes van deze hub.'
          }
        ]
      }
    }
  },

  'branches-boekhouders': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for accountants and bookkeepers',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for accountants' },
        { name: 'Local SEO for accountants' },
        { name: 'Google Ads for accountants' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Accountants & bookkeepers',
        serviceName: 'Online marketing for accountants and bookkeepers',
        serviceDescription:
          'Online marketing for accountants and bookkeepers: websites, local SEO and Google Ads focused on lasting SME relationships, trust and niche clarity.',
        faqs: [
          {
            question: 'How do we attract the right clients — not just more of them?',
            answer:
              'Lead with who you serve best — freelancers, SMEs, hospitality or e-commerce — and which software you work with. Clear niches and service pages help entrepreneurs self-select before intake, so you spend less time onboarding poor fits.'
          },
          {
            question: 'How do we project trust and reliability online?',
            answer:
              'Show real team faces, plain language on bookkeeping versus advisory work, and steady proof such as client longevity or sector experience — not gimmicky discount banners. Someone handing over their VAT wants calm reliability.'
          },
          {
            question: 'How do we get found by freelancers and SMEs in our region?',
            answer:
              'Local SEO and a complete Google Business Profile help Maps and organic search match “bookkeeper [city]” or “accountant for freelancers [town]”. Reviews and consistent NAP support that; we do not promise a fixed ranking.'
          },
          {
            question: 'How should we present annual accounts and tax filing services?',
            answer:
              'Give jaarrekening, BTW and income-tax filing their own clear blocks or pages with who each service fits and when to start. Seasonal peaks around filing deadlines are when entrepreneurs compare firms — vague “full service” blur loses them.'
          },
          {
            question: 'Does software stack matter for marketing?',
            answer:
              'Often yes. Naming Exact, Twinfield, Moneybird or similar helps the right client recognise you as a fit. We surface those tools next to niche and service messaging on this hub’s future spokes.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Boekhouders & accountants',
        serviceName: 'Online marketing voor boekhouders en accountants',
        serviceDescription:
          'Online marketing voor boekhouders en accountants: websites, lokale SEO en Google Ads gericht op langdurige mkb-relaties, vertrouwen en nichehelderheid.',
        faqs: [
          {
            question: 'Hoe trekken we de juiste klanten aan — niet alleen meer volume?',
            answer:
              'Zet voorop wie je het beste bedient — zzp, mkb, horeca of e-commerce — en met welke software je werkt. Helder niches en dienstpagina’s helpen ondernemers zichzelf selecteren vóór intake, zodat je minder tijd kwijt bent aan slechte fits.'
          },
          {
            question: 'Hoe stralen we vertrouwen en betrouwbaarheid online uit?',
            answer:
              'Toon echte gezichten van het team, begrijpelijke taal over boekhouding versus advies, en rustig bewijs zoals klantretentie of sectorervaring — geen gimmickkortingsbanners. Iemand die btw overdraagt wil kalme betrouwbaarheid.'
          },
          {
            question: 'Hoe worden we vindbaar voor zzp en mkb in onze regio?',
            answer:
              'Lokale SEO en een compleet Google Bedrijfsprofiel helpen Maps en organisch zoeken bij “boekhouder [stad]” of “accountant voor zzp [plaats]”. Reviews en consistente NAP ondersteunen dat; we beloven geen vaste ranking.'
          },
          {
            question: 'Hoe presenteren we jaarrekening- en aangiftediensten helder?',
            answer:
              'Geef jaarrekening, btw- en inkomstenbelastingaangifte eigen blokken of pagina’s met voor wie de dienst past en wanneer te starten. Seizoenspieken rond aangiftedeadlines zijn momenten waarop ondernemers kantoren vergelijken — vaag “full service” verliest ze.'
          },
          {
            question: 'Speelt de softwarestack mee in marketing?',
            answer:
              'Vaak wel. Exact, Twinfield, Moneybird of vergelijkbaar noemen helpt de juiste klant je als fit herkennen. We zetten die tools naast niche- en dienstboodschap op de toekomstige spokes van deze hub.'
          }
        ]
      }
    }
  },

  'branches-autobedrijven': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for car dealers and garages',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for car dealers and garages' },
        { name: 'Local SEO for car dealers and garages' },
        { name: 'Google Ads for car dealers and garages' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Car dealers & garages',
        serviceName: 'Online marketing for car dealers and garages',
        serviceDescription:
          'Online marketing for car dealers and garages: websites, local SEO and Google Ads focused on workshop bookings, APK demand and occasion enquiries.',
        faqs: [
          {
            question: 'How should we show stock and occasions online?',
            answer:
              'Give inventory a clear, filterable path with current photos and key specs, and make enquiry or viewing requests easy per vehicle. Stale brochure pages lose buyers who already compare AutoScout24-style listings elsewhere.'
          },
          {
            question: 'How do we get more APK and maintenance appointments online?',
            answer:
              'Put booking or request paths for APK, service and tyres where mobile visitors can reach them in one tap, with plain language on what is included. Drivers comparing garages often leave when they cannot see how to book.'
          },
          {
            question: 'How do we get found for “garage” or “APK” in our city?',
            answer:
              'Local SEO and a complete Google Business Profile help Maps and organic search match “garage [city]” or “APK [city]”. Reviews and accurate hours support that; we do not promise a fixed ranking.'
          },
          {
            question: 'How do we grow workshop revenue without only chasing car sales?',
            answer:
              'Treat the workshop as its own engine: clear service pages, seasonal cues for tyres and airco, review growth and local findability for maintenance intent — not only occasion stock. Recurring APK and service fill the diary between vehicle sales.'
          },
          {
            question: 'Do reviews matter as much for garages as for car sales?',
            answer:
              'Often more. Drivers fear opaque bills. Recent, specific workshop reviews next to APK and service CTAs reduce that fear before someone books — on this hub’s future spokes we keep sales and workshop trust paths distinct.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Autobedrijven & garages',
        serviceName: 'Online marketing voor autobedrijven en garages',
        serviceDescription:
          'Online marketing voor autobedrijven en garages: websites, lokale SEO en Google Ads gericht op werkplaatsafspraken, APK-vraag en occasionaanvragen.',
        faqs: [
          {
            question: 'Hoe tonen we voorraad en occasions online?',
            answer:
              'Geef voorraad een duidelijk, filterbaar pad met actuele foto’s en kernspecs, en maak aanvraag of bezichtiging per auto makkelijk. Verouderde brochurepagina’s verliezen kopers die elders al AutoScout24-achtige listings vergelijken.'
          },
          {
            question: 'Hoe krijgen we meer APK- en onderhoudsafspraken online?',
            answer:
              'Zet boek- of aanvraagpaden voor APK, onderhoud en banden waar mobiele bezoekers ze in één tik bereiken, met begrijpelijke taal over wat erin zit. Automobilisten die garages vergelijken haken vaak af wanneer ze niet zien hoe ze boeken.'
          },
          {
            question: 'Hoe worden we vindbaar op “garage” of “APK” in onze stad?',
            answer:
              'Lokale SEO en een compleet Google Bedrijfsprofiel helpen Maps en organisch zoeken bij “garage [stad]” of “APK [stad]”. Reviews en accurate openingstijden ondersteunen dat; we beloven geen vaste ranking.'
          },
          {
            question: 'Hoe groeien we werkplaatsomzet zonder alleen autoverkoop te najagen?',
            answer:
              'Behandel de werkplaats als eigen motor: heldere dienstpagina’s, seizoenssignalen voor banden en airco, reviewgroei en lokale vindbaarheid voor onderhoudsintentie — niet alleen occasionvoorraad. Terugkerende APK en service vullen de agenda tussen voertuigverkopen.'
          },
          {
            question: 'Wegen reviews voor garages even zwaar als voor autoverkoop?',
            answer:
              'Vaak zwaarder. Automobilisten vrezen ondoorzichtige nota’s. Recente, specifieke werkplaatsreviews naast APK- en service-CTA’s dempen die angst vóór iemand boekt — op de toekomstige spokes van deze hub houden we verkoop- en werkplaatspaden onderscheiden.'
          }
        ]
      }
    }
  },

  'branches-sportscholen': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for gyms and personal trainers',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for gyms and personal trainers' },
        { name: 'Local SEO for gyms and personal trainers' },
        { name: 'Social media for gyms and personal trainers' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Gyms & personal trainers',
        serviceName: 'Online marketing for gyms and personal trainers',
        serviceDescription:
          'Online marketing for gyms and personal trainers: websites, local SEO and social media focused on memberships, trial sessions, coaching intakes and community proof.',
        faqs: [
          {
            question: 'How do we attract more members without only discounting?',
            answer:
              'Lead with class energy, clear membership paths and visible trial or intake CTAs — then back that with local findability and social proof. Price cuts alone fill short spikes; trust and schedule clarity keep people choosing you over the next club.'
          },
          {
            question: 'How should trials and PT intakes work online?',
            answer:
              'Make the first step obvious on every device: a short trial or intake form, what to bring, and when someone hears back. Shoppers comparing studios abandon pages that only list a phone number and a stock photo of dumbbells.'
          },
          {
            question: 'How do we get found for “gym” or “personal trainer” in our city?',
            answer:
              'Treat neighbourhood and city intent as a product: Google Business Profile hygiene, reviews that mention classes or coaching, and pages that answer “sportschool [stad]” or trainer-near-me queries. Rankings are never guaranteed; consistency beats one-off optimisation.'
          },
          {
            question: 'Why does social media matter so much for fitness?',
            answer:
              'Search shows location; social shows community, coaching style and transformation proof. Consistent posts of classes, member energy and before-after stories warm people before they book a trial or package.'
          },
          {
            question: 'How do we keep members after January or summer peaks?',
            answer:
              'Pair acquisition spikes with retention journeys — class reminders, community content and clear paths back into coaching or group programmes. Filling the diary once is wasted if churn empties it by March.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Sportscholen & personal trainers',
        serviceName: 'Online marketing voor sportscholen en personal trainers',
        serviceDescription:
          'Online marketing voor sportscholen en personal trainers: websites, lokale SEO en social media gericht op abonnementen, proeflessen, coachingintakes en communitybewijs.',
        faqs: [
          {
            question: 'Hoe werven we meer leden zonder alleen te kortingen?',
            answer:
              'Zet lesenergie, heldere abonnementspaden en zichtbare proefles- of intake-CTA’s voorop — en steun dat met lokale vindbaarheid en social proof. Alleen prijskortingen vullen korte pieken; vertrouwen en roosterhelderheid laten mensen jou kiezen boven de volgende club.'
          },
          {
            question: 'Hoe moeten proeflessen en PT-intakes online werken?',
            answer:
              'Maak de eerste stap op elk apparaat vanzelfsprekend: een kort proefles- of intakeformulier, wat je meeneemt, en wanneer iemand terughoort. Bezoekers die studio’s vergelijken haken af bij pagina’s die alleen een telefoonnummer en een stockfoto van dumbbells tonen.'
          },
          {
            question: 'Hoe worden we vindbaar op “sportschool” of “personal trainer” in onze stad?',
            answer:
              'Behandel buurt- en stadsintentie als product: Google Bedrijfsprofiel-hygiëne, reviews die lessen of coaching noemen, en pagina’s die “sportschool [stad]” of trainer-bij-mij-queries beantwoorden. Rankings zijn nooit gegarandeerd; consistentie wint van eenmalige optimalisatie.'
          },
          {
            question: 'Waarom weegt social media zo zwaar in fitness?',
            answer:
              'Zoeken toont locatie; social toont community, coachingstijl en transformatiebewijs. Consistente posts van lessen, ledenenergie en before-after warmen mensen op vóór ze een proefles of pakket boeken.'
          },
          {
            question: 'Hoe houden we leden vast na januari- of zomerpieken?',
            answer:
              'Koppel wervingspieken aan retentiejourneys — lesherinneringen, communitycontent en heldere paden terug naar coaching of groepsprogramma’s. De agenda één keer vullen is weggegooid als churn die in maart leegt.'
          }
        ]
      }
    }
  },

  'branches-schoonmaakbedrijven': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for cleaning companies',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for cleaning companies' },
        { name: 'Local SEO for cleaning companies' },
        { name: 'Google Ads for cleaning companies' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Cleaning companies',
        serviceName: 'Online marketing for cleaning companies',
        serviceDescription:
          'Online marketing for cleaning companies: websites, local SEO and Google Ads focused on recurring commercial and residential contracts, service-specific findability and quote quality.',
        faqs: [
          {
            question: 'How do we get more quote requests online?',
            answer:
              'Make the path from service page to quote form obvious on mobile, with clear splits for office cleaning, window cleaning and move-out cleans. Facility managers and households abandon sites that only show a generic “contact” box without saying what happens next.'
          },
          {
            question: 'How do we win recurring contracts, not only one-off cleans?',
            answer:
              'Position weekly office rounds, multi-site schedules and long-term facility agreements as the core offer — with reliability, insurance and staff signals next to the CTA. Lifetime value is high in cleaning; marketing that only chases single deep cleans trains the wrong demand.'
          },
          {
            question: 'How do we get found per service and region?',
            answer:
              'Local SEO and a complete Google Business Profile help Maps and organic search match “cleaning company [city]”, “window cleaner [city]” or floor-care intent in your radius. Service pages per discipline support that; we do not promise a fixed ranking.'
          },
          {
            question: 'How should we separate commercial and residential cleaning online?',
            answer:
              'Give zakelijk buyers — offices, schools, care, VvE — their own pages and proof, and keep residential paths for household help, glass and handover cleans distinct. Mixing both into one vague “we clean everything” story loses the longer B2B sales cycle and the faster consumer enquiry.'
          },
          {
            question: 'Does trust matter as much as price for cleaning contracts?',
            answer:
              'Often more for commercial work. Insured teams, vetted staff and reliable schedule language reduce key-handover fear before a facility manager signs. Price still matters for residential window or move-out jobs, but empty trust signals kill contract conversations first.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Schoonmaakbedrijven',
        serviceName: 'Online marketing voor schoonmaakbedrijven',
        serviceDescription:
          'Online marketing voor schoonmaakbedrijven: websites, lokale SEO en Google Ads gericht op terugkerende zakelijke en particuliere contracten, dienstspecifieke vindbaarheid en offertekwaliteit.',
        faqs: [
          {
            question: 'Hoe krijgen we meer offerteaanvragen online?',
            answer:
              'Maak het pad van dienstpagina naar offerteformulier op mobiel vanzelfsprekend, met heldere splits voor kantoorschoonmaak, glasbewassing en opleverschoonmaak. Facility managers en huishoudens haken af bij sites die alleen een generiek “contact”-vak tonen zonder te zeggen wat er daarna gebeurt.'
          },
          {
            question: 'Hoe winnen we terugkerende contracten, niet alleen eenmalige schoonmaak?',
            answer:
              'Positioneer wekelijkse kantoorroutes, multi-site roosters en langlopende facility-afspraken als kernaanbod — met betrouwbaarheid, verzekering en personeelssignalen naast de CTA. Lifetime value is hoog in schoonmaak; marketing die alleen losse diepteschoonmaak najagen, traint de verkeerde vraag.'
          },
          {
            question: 'Hoe worden we vindbaar per dienst en regio?',
            answer:
              'Lokale SEO en een compleet Google Bedrijfsprofiel helpen Maps en organisch zoeken bij “schoonmaakbedrijf [stad]”, “glazenwasser [stad]” of vloeronderhoud-intentie in je straal. Dienstpagina’s per discipline ondersteunen dat; we beloven geen vaste ranking.'
          },
          {
            question: 'Hoe scheiden we zakelijke en particuliere schoonmaak online?',
            answer:
              'Geef zakelijke kopers — kantoren, scholen, zorg, VvE’s — eigen pagina’s en bewijs, en houd particuliere paden voor huishoudelijke hulp, glas en oplevering apart. Beide mengen in één vaag “wij poetsen alles”-verhaal verliest de langere B2B-salescyclus én de snellere consumentenaanvraag.'
          },
          {
            question: 'Weegt vertrouwen even zwaar als prijs bij schoonmaakcontracten?',
            answer:
              'Voor zakelijk werk vaak zwaarder. Verzekerde teams, gescreend personeel en betrouwbare roostertaal dempen sleutelangst vóór een facility manager tekent. Prijs blijft tellen bij particuliere glas- of opleverklussen, maar lege vertrouwenssignalen doden contractgesprekken eerst.'
          }
        ]
      }
    }
  },

  'branches-eventplanners': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for wedding & event planners',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for wedding & event planners' },
        { name: 'Local SEO for wedding & event planners' },
        { name: 'Social media for wedding & event planners' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Wedding & event planners',
        serviceName: 'Online marketing for wedding & event planners',
        serviceDescription:
          'Online marketing for wedding and event planners: portfolio websites, local SEO and social media focused on couple and corporate bookings, style discovery and quote quality.',
        faqs: [
          {
            question: 'How do we show portfolio and atmosphere online?',
            answer:
              'Lead with real event photography, mood boards and short stories of days you planned — not stock couples on a beach. Pair gallery pages with clear paths into a quote form that asks for date, venue, guest count and style so inspiration turns into a brief.'
          },
          {
            question: 'How do we attract the right enquiries, not every random request?',
            answer:
              'Separate wedding and corporate journeys, state regions and event types you take, and use form fields that filter for budget-relevant details. Vague “contact us” boxes attract tyre-kickers; a brief-led form attracts hosts who already sense your taste.'
          },
          {
            question: 'How do couples and companies find a planner for weddings and business events?',
            answer:
              'Local SEO and a complete Google Business Profile help Maps and organic search match “wedding planner [city]” or regional event-planning intent. Corporate hosts often search differently and longer — service pages for company events support that. We do not promise a fixed ranking.'
          },
          {
            question: 'Is social media where planners get discovered?',
            answer:
              'Often yes for bridal and lifestyle demand: Instagram and Pinterest act as discovery layers before a website visit. Consistent real-event storytelling feeds that funnel; social alone rarely closes a high-stakes corporate brief without a clear site and quote path.'
          },
          {
            question: 'How should we work with venues, photographers and catering online?',
            answer:
              'Show trusted vendor relationships as proof of calm coordination, without turning your site into a supplier directory. Couples and hosts shortlist planners who look networked and organised for one important day — not a salon that sells weekly appointments.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Trouw- & eventplanners',
        serviceName: 'Online marketing voor trouw- & eventplanners',
        serviceDescription:
          'Online marketing voor trouw- en eventplanners: portfolio-websites, lokale SEO en social media gericht op bruiloften en zakelijke boekingen, stijlontdekking en offertekwaliteit.',
        faqs: [
          {
            question: 'Hoe laten we portfolio en sfeer online zien?',
            answer:
              'Leid met echte eventfotografie, moodboards en korte verhalen van dagen die je regisseerde — geen stockstellen op een strand. Koppel galerijpagina’s aan een offerteformulier met datum, locatie, gastenaantal en stijl, zodat inspiratie een briefje wordt.'
          },
          {
            question: 'Hoe krijgen we de juiste aanvragen, niet elke willekeurige mail?',
            answer:
              'Scheid trouw- en zakelijke journeys, noem regio’s en eventtypes die je aanneemt, en gebruik formvelden die budgetrelevante details filteren. Vage “neem contact op”-vakken trekken kijklustigen; een brief-gedreven form trekt hosts die jouw smaak al voelen.'
          },
          {
            question: 'Hoe worden we vindbaar voor bruiloften en zakelijke events?',
            answer:
              'Lokale SEO en een compleet Google Bedrijfsprofiel helpen Maps en organisch zoeken bij “trouwplanner [stad]” of regionale eventplanning-intentie. Zakelijke hosts zoeken vaak anders en langer — dienstpagina’s voor bedrijfsevents ondersteunen dat. We beloven geen vaste ranking.'
          },
          {
            question: 'Is social media een vindplaats voor planners?',
            answer:
              'Voor bridal en lifestyle-vraag vaak wel: Instagram en Pinterest werken als ontdekkingslaag vóór een sitebezoek. Consistente storytelling van echte events voedt die trechter; social alleen sluit zelden een high-stakes zakelijk briefje zonder heldere site en offertepad.'
          },
          {
            question: 'Hoe tonen we samenwerking met venues, fotografen en catering online?',
            answer:
              'Toon vertrouwde leveranciersrelaties als bewijs van rustige regie, zonder je site in een leveranciersgids te veranderen. Stellen en hosts shortlisten planners die vernetwerkt en georganiseerd ogen voor één belangrijke dag — geen salon die wekelijkse afspraken verkoopt.'
          }
        ]
      }
    }
  },

  'branches-rijscholen': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for driving schools',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for driving schools' },
        { name: 'Local SEO for driving schools' },
        { name: 'Google Ads for driving schools' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Driving schools',
        serviceName: 'Online marketing for driving schools',
        serviceDescription:
          'Online marketing for driving schools: websites with pass rates and packages, local SEO for “driving school [city]”, and Google Ads aimed at lesson sign-ups — without ranking guarantees.',
        faqs: [
          {
            question: 'How do we attract new students online?',
            answer:
              'Combine a clear site that shows packages and trial lessons, local SEO for “driving school [city]”, and ads on high-intent lesson searches. Young learners discover on social; parents often finish the research on reviews and pass rates. We do not promise a fixed enrolment volume.'
          },
          {
            question: 'How should we show pass rates and reviews?',
            answer:
              'Place CBR success figures and recent student reviews next to package and trial-lesson CTAs — where parents scan before they call. Authentic numbers and voices matter; we surface proof you hold, we do not invent pass rates.'
          },
          {
            question: 'How do we get found for “driving school [city]”?',
            answer:
              'Local SEO and a complete Google Business Profile help Maps and organic search match city and lesson intent. Comparison sites compete for the same clicks — stronger owned visibility usually starts more direct sign-up conversations. We do not promise a fixed map-pack place.'
          },
          {
            question: 'How do we present packages and trial lessons?',
            answer:
              'Lead with clear package bands, licence types (car, automatic, motorcycle, intensive) and a low-friction trial-lesson path. Price-sensitive learners bounce when packs are buried; parents want to see what they pay for before they enrol.'
          },
          {
            question: 'Do Instagram and TikTok matter for driving schools?',
            answer:
              'Often yes for the 17–25 audience: passed students and day-to-day lesson clips act as social proof. Social discovery still needs a site and local presence where parents finish the shortlist — feeds alone rarely close the enrolment.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Rijscholen',
        serviceName: 'Online marketing voor rijscholen',
        serviceDescription:
          'Online marketing voor rijscholen: websites met slagingspercentages en pakketten, lokale SEO voor “rijschool [stad]”, en Google Ads gericht op lesinschrijvingen — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe werven we online nieuwe leerlingen?',
            answer:
              'Combineer een heldere site die pakketten en proefles toont, lokale SEO op “rijschool [stad]”, en ads op high-intent leszoeken. Jonge leerlingen ontdekken op social; ouders ronden research vaak af op reviews en slagingspercentage. We beloven geen vast inschrijvingsvolume.'
          },
          {
            question: 'Hoe tonen we slagingspercentage en reviews?',
            answer:
              'Plaats CBR-cijfers en recente leerlingreviews naast pakket- en proefles-CTA’s — waar ouders scannen vóór ze bellen. Authentieke cijfers en stemmen doen ertoe; we tonen bewijs dat je hebt, we verzinnen geen slagingspercentages.'
          },
          {
            question: 'Hoe worden we vindbaar voor “rijschool [stad]”?',
            answer:
              'Lokale SEO en een compleet Google Bedrijfsprofiel helpen Maps en organisch zoeken bij stads- en lesintentie. Vergelijkingssites concurreren om dezelfde klikken — sterkere owned zichtbaarheid start meestal meer directe inschrijfgesprekken. We beloven geen vaste kaartpackplek.'
          },
          {
            question: 'Hoe presenteren we pakketten en proefles?',
            answer:
              'Leid met heldere pakketbanden, rijbewijstypes (auto, automaat, motor, spoed) en een lage-frictie proeflespad. Prijsgevoelige leerlingen bouncen wanneer pakketten begraven liggen; ouders willen zien waarvoor ze betalen vóór ze inschrijven.'
          },
          {
            question: 'Doen Instagram en TikTok ertoe voor rijscholen?',
            answer:
              'Voor de 17–25-doelgroep vaak wel: geslaagde leerlingen en alledaagse lesclips werken als social proof. Social discovery heeft nog steeds een site en lokale aanwezigheid nodig waar ouders de shortlist afronden — feeds alleen sluiten zelden de inschrijving.'
          }
        ]
      }
    }
  },

  'branches-rijscholen-website-laten-maken': {
    parents: ['home', 'branches', 'branches-rijscholen'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for driving schools',
      category: 'Web Development',
      offers: [
        { name: 'CBR pass-rate and package presentation' },
        { name: 'Trial lesson and online enrolment paths' },
        { name: 'Licence-type pages and planning software links' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design',
        serviceName: 'Website design for driving schools',
        serviceDescription:
          'Website design for driving schools focused on CBR pass rates, clear packages and lesson pricing, trial lessons and online enrolment, passed-student reviews, licence-type paths, instructor profiles, service area and pickup, mobile dual-audience paths and planning software links — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I show my pass rate?',
            answer:
              'Place your CBR success percentage where parents and learners scan first — next to packages and trial CTAs. Authentic figures you can stand behind matter; we surface proof you hold, we do not invent pass rates. Comparison sites already highlight this signal, so your own site should match that clarity.'
          },
          {
            question: 'Can students enrol online and book a trial lesson?',
            answer:
              'Yes. We build trial and enrolment paths that capture licence type, availability and contact details so a learner starts today instead of promising to call after school. Exact booking depth depends on whether we connect your planning software.'
          },
          {
            question: 'Can I show packages and lesson prices?',
            answer:
              'Yes. Package cards explain what is included, which licence they fit and how to start — clear enough to compare on a phone without a buried PDF. We structure the presentation; published figures follow what you choose to show.'
          },
          {
            question: 'Can it connect with my lesson planning software?',
            answer:
              'Where your stack allows, we link planning or administration tools so enrolment and availability do not force double entry after every timetable change. Exact integrations depend on the systems you already use.'
          },
          {
            question: 'Does the site work well on mobile?',
            answer:
              'Yes — that is a core requirement. Young learners shortlist on phones; parents often finish the decision on the same screen after work. Packs, pass-rate blocks and trial CTAs stay thumb-friendly, not a desktop brochure that collapses on small screens.'
          },
          {
            question: 'Can I split pages per licence type?',
            answer:
              'Yes when you teach those tracks. Category B car, automatic, motorcycle, intensive courses and refresher lessons each get dedicated proof and paths so the wrong brief never wastes an instructor hour.'
          },
          {
            question: 'How is this different from a gym website?',
            answer:
              'Gyms sell memberships and class schedules; driving schools sell CBR trust, lesson packs and dual decision-makers (learner plus parent). We do not reuse fitness membership templates for school builds.'
          },
          {
            question: 'How long does a driving school website project take?',
            answer:
              'Timelines depend on licence mix, planning-software needs and location count. Many builds move from discovery to launch across several weeks once packs and pass figures are ready. We share a realistic plan after scoping — without promising a fixed enrolment volume.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken',
        serviceName: 'Website laten maken voor rijscholen',
        serviceDescription:
          'Website laten maken voor rijscholen gericht op CBR-slagingspercentages, heldere pakketten en lesprijzen, proefles en online inschrijven, reviews van geslaagden, rijbewijstype-paden, instructeursprofielen, werkgebied en ophaalservice, mobiele dual-audience-paden en planningssoftwarekoppelingen — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe toon ik mijn slagingspercentage?',
            answer:
              'Plaats je CBR-slagingscijfer waar ouders en leerlingen eerst scannen — naast pakketten en proefles-CTA’s. Authentieke cijfers die je kunt verantwoorden doen ertoe; we tonen bewijs dat je hebt, we verzinnen geen percentages. Vergelijkingssites highlighten dit signaal al, dus jouw eigen site moet die helderheid evenaren.'
          },
          {
            question: 'Kunnen leerlingen online inschrijven en een proefles boeken?',
            answer:
              'Ja. We bouwen proefles- en inschrijfpaden die rijbewijstype, beschikbaarheid en contactgegevens vangen, zodat een leerling vandaag start in plaats van beloven na school te bellen. Exacte boekingsdiepte hangt af van of we je planningssoftware koppelen.'
          },
          {
            question: 'Kan ik pakketten en prijzen tonen?',
            answer:
              'Ja. Pakketkaarten leggen uit wat erin zit, welk rijbewijs ze passen en hoe je start — helder genoeg om op de telefoon te vergelijken zonder begraven PDF. Wij structureren de presentatie; gepubliceerde bedragen volgen wat jij wilt tonen.'
          },
          {
            question: 'Kan het koppelen met mijn lesplanning?',
            answer:
              'Waar je stack het toelaat, koppelen we plannings- of administratietools zodat inschrijving en beschikbaarheid geen dubbele invoer forceren na elke roosterwijziging. Exacte integraties hangen af van de systemen die je al gebruikt.'
          },
          {
            question: 'Werkt de site goed op mobiel?',
            answer:
              'Ja — dat is een kerneisen. Jonge leerlingen shortlisten op telefoons; ouders ronden de keuze vaak op hetzelfde scherm na het werk af. Pakketten, slagingsblokken en proefles-CTA’s blijven duimvriendelijk, geen desktopbrochure die op klein scherm uit elkaar valt.'
          },
          {
            question: 'Kan ik pagina’s per rijbewijstype splitsen?',
            answer:
              'Ja wanneer je die trajecten geeft. Categorie B auto, automaat, motor, spoedcursussen en bijscholing krijgen elk eigen bewijs en paden, zodat het verkeerde briefje geen instructeursuur verspilt.'
          },
          {
            question: 'Wat is het verschil met een sportschoolwebsite?',
            answer:
              'Sportscholen verkopen abonnementen en lesroosters; rijscholen verkopen CBR-vertrouwen, lespakketten en duale beslissers (leerling plus ouder). We hergebruiken geen fitness-abonnementstemplates voor schoolbuilds.'
          },
          {
            question: 'Hoe lang duurt een website-traject voor een rijschool?',
            answer:
              'Doorlooptijden hangen af van rijbewijsmix, planningssoftwarebehoefte en aantal locaties. Veel builds gaan van discovery tot livegang in enkele weken zodra pakketten en slagingscijfers klaarstaan. We delen een realistisch plan na scoping — zonder een vast inschrijvingsvolume te beloven.'
          }
        ]
      }
    }
  },

  'branches-rijscholen-lokale-seo': {
    parents: ['home', 'branches', 'branches-rijscholen'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for driving schools',
      category: 'Digital Marketing',
      offers: [
        { name: 'City and lesson-type landing pages for driving schools' },
        { name: 'Google Business Profile with graduate photos and pass-rate context' },
        { name: 'Review growth and organic local-pack presence versus comparison sites' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO',
        serviceName: 'Local SEO for driving schools',
        serviceDescription:
          'Local SEO for driving schools focused on “driving school [city]”, “driving lessons [city]”, intensive and automatic + city keywords, Google Business Profile with graduate photos and pass-rate context, reviews that decide teenage shortlists, pickup-area signals, citations and organic discovery versus comparison sites for the local pack — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I rank at the top for driving school in my city?',
            answer:
              'Build city and lesson-type pages for “driving school [city]” and related lesson queries, stock Google Business Profile with graduate photos and pass-rate context, and grow reviews from passed students. We treat catchments as towns and pickup zones you actually cover — without promising a fixed map-pack place against nearby schools or comparison sites.'
          },
          {
            question: 'How do I beat comparison sites locally?',
            answer:
              'Comparison directories rent pack attention; local SEO strengthens your own Maps footprint, city pages and graduate reviews so high-intent searches can start on your profile instead of a per-lead listing. Many schools still buy some directory leads while organic presence grows — we do not claim Maps replaces every paid channel overnight, but stronger city relevance usually starts more direct trial and pack requests.'
          },
          {
            question: 'How do I get more reviews from graduated students?',
            answer:
              'Ask ethically after exams when pride is high and the experience is fresh. Passed-student voices next to pack results often decide teenage shortlists more than a comparison-site badge. We set habits and reply patterns — we do not invent reviews or guarantee a star average.'
          },
          {
            question: 'Can I rank for intensive courses or automatic lessons?',
            answer:
              'Yes when you actually teach those tracks. Intensive courses, automatic and motorcycle get planned keyword and page coverage per town so niche lesson searches do not only feed directories. Competition varies by city and lesson type; we avoid promising you will own every lesson phrase at once.'
          },
          {
            question: 'How long does local SEO take for a driving school?',
            answer:
              'Profile hygiene and review habits often show action lifts within weeks; holding relevance for “driving school [city]” against comparison sites usually needs months of compounding. Inflow of new learners is continuous, but towns are saturated — pack position often decides volume. Timelines depend on competition and content readiness — without ranking guarantees.'
          },
          {
            question: 'How is this different from a driving school website project?',
            answer:
              'Local SEO wins Maps and city-search attention for towns and lesson types you cover; the website spoke builds pass-rate proof, packages, trial lessons and enrolment that convert the visit. We keep those scopes distinct, then align so a map tap lands where a dated trial or pack request can start.'
          },
          {
            question: 'Can I target multiple towns and pickup points?',
            answer:
              'Yes when you serve them. Many schools cover several pickup towns, not one shop pin. We structure multi-town footprints so each catchment has clear pages and GBP signals without confusing Maps about which footprint owns “driving school [city]”.'
          },
          {
            question: 'Why does local pack position matter so much for driving schools?',
            answer:
              'A seventeen-year-old shortlists the top three pack results with strong reviews on a phone. Invisible in that pack means an empty lesson calendar while competitors fill up — even with a stronger pass rate. Continuous local inflow still lands where findability looks safest.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO',
        serviceName: 'Lokale SEO voor rijscholen',
        serviceDescription:
          'Lokale SEO voor rijscholen gericht op “rijschool [stad]”, “rijlessen [stad]”, spoedcursus- en automaat- + stadszoekwoorden, Google Bedrijfsprofiel met foto’s van geslaagden en slagingscontext, reviews die tiener-shortlists beslissen, ophaalgebied-signalen, citations en organische ontdekking versus vergelijkingssites om de local pack — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe kom ik bovenaan voor rijschool in mijn stad?',
            answer:
              'Bouw stads- en lestypepagina’s voor “rijschool [stad]” en gerelateerde lesqueries, vul Google Bedrijfsprofiel met foto’s van geslaagden en slagingscontext, en groei reviews van geslaagden. We behandelen catchments als plaatsen en ophaalzones die je écht dekt — zonder een vaste kaartpackplek tegen nabije scholen of vergelijkingssites te beloven.'
          },
          {
            question: 'Hoe versla ik vergelijkingssites lokaal?',
            answer:
              'Vergelijkingsdirectories huren packaandacht; lokale SEO versterkt jouw eigen Maps-voetafdruk, stadspagina’s en reviews van geslaagden zodat high-intent zoeken op jouw profiel kan starten in plaats van een per-lead listing. Veel scholen kopen nog directoryleads terwijl organische aanwezigheid groeit — we claimen niet dat Maps elk betaald kanaal overnight vervangt, maar sterkere stadsrelevantie start meestal meer directe proefles- en pakketaanvragen.'
          },
          {
            question: 'Hoe krijg ik meer reviews van geslaagden?',
            answer:
              'Vraag ethisch na examens wanneer trots hoog is en de ervaring vers. Stemmen van geslaagden naast packresultaten beslissen tiener-shortlists vaak meer dan een vergelijkingssite-badge. We zetten gewoontes en antwoordpatronen op — we verzinnen geen reviews en garanderen geen stergemiddelde.'
          },
          {
            question: 'Kan ik ranken op spoedcursus of automaat?',
            answer:
              'Ja wanneer je die trajecten écht geeft. Spoedcursus, automaat en motor krijgen geplande zoekwoord- en paginadekking per plaats, zodat niche-leszoeken niet alleen directories voedt. Concurrentie verschilt per stad en lestype; we beloven niet dat je elke lesfrase tegelijk bezit.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een rijschool?',
            answer:
              'Profielhygiëne en reviewgewoontes laten vaak binnen enkele weken actieliften zien; relevantie vasthouden op “rijschool [stad]” tegen vergelijkingssites vraagt meestal maanden van compounding. Instroom van nieuwe leerlingen is continu, maar plaatsen zijn verzadigd — packpositie bepaalt vaak het volume. Doorlooptijden hangen af van concurrentie en contentklaarheid — zonder rankinggaranties.'
          },
          {
            question: 'Wat is het verschil met een website-traject voor rijscholen?',
            answer:
              'Lokale SEO wint Maps- en stadszoekaandacht voor plaatsen en lestypes die je dekt; de website-spoke bouwt slagingsbewijs, pakketten, proefles en inschrijving die het bezoek converteren. We houden die scopes gescheiden en stemmen ze af zodat een kaarttik landt waar een gedateerde proefles- of pakketaanvraag kan starten.'
          },
          {
            question: 'Kan ik meerdere plaatsen en ophaalpunten targeten?',
            answer:
              'Ja wanneer je ze bedient. Veel scholen dekken meerdere ophaalplaatsen, niet één winkelpin. We structureren multi-plaatsvoetafdrukken zodat elk catchment heldere pagina’s en GBP-signalen heeft zonder Maps te verwarren over wie “rijschool [stad]” bezit.'
          },
          {
            question: 'Waarom is local-packpositie zo bepalend voor rijscholen?',
            answer:
              'Een zeventienjarige shortlist de top drie packresultaten met sterke reviews op de telefoon. Onzichtbaar in die pack betekent een lege lessenagenda terwijl concurrenten vollopen — ook met een sterker slagingspercentage. Continue lokale instroom landt nog steeds waar vindbaarheid het veiligst oogt.'
          }
        ]
      }
    }
  },

  'branches-fotografen': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for photographers and videographers',
      category: 'Digital Marketing',
      offers: [
        { name: 'Website design for photographers & videographers' },
        { name: 'Local SEO for photographers & videographers' },
        { name: 'Social media for photographers & videographers' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Photographers & videographers',
        serviceName: 'Online marketing for photographers & videographers',
        serviceDescription:
          'Online marketing for photographers and videographers: fast portfolio websites, local SEO by specialisation and region, and Instagram-led discovery aimed at booking the right shoots — without ranking guarantees.',
        faqs: [
          {
            question: 'How do we show a portfolio that loads fast?',
            answer:
              'Lead with compressed, lazy-loaded galleries of real shoots so mobile browsers feel your style before they bounce. Photographers and videographers ship heavy files; the site must prove craft without making clients wait — compression and gallery patterns matter more here than on a planner site that mostly curates other people’s images.'
          },
          {
            question: 'How do we attract the right assignments, not every random enquiry?',
            answer:
              'Separate specialisations — wedding, portrait, commercial, product, real estate, newborn, events, video — with clear proof and form fields for date, package and delivery. Vague contact boxes attract price shoppers; specialisation-led paths attract clients who already love your eye.'
          },
          {
            question: 'How do clients find a photographer by specialisation and region?',
            answer:
              'Local SEO and a Google Business Profile help Maps and organic search match “wedding photographer [city]” or niche + region intent. Style and portfolio still decide the shortlist after discovery. We strengthen those signals without promising a fixed ranking.'
          },
          {
            question: 'Is social media where photographers get discovered?',
            answer:
              'Often yes: Instagram is a primary discovery layer before a website visit. Consistent real-shoot storytelling feeds that funnel; social alone rarely closes a package booking without a fast portfolio site and a clear path to date, package and delivery galleries.'
          },
          {
            question: 'How is this different from marketing for wedding or event planners?',
            answer:
              'Planners sell coordination of a day; you sell the image itself. Your portfolio is the product, heavy files need technical speed, and specialisations filter briefs. We do not reuse planner vendor-network or salon chair-calendar messaging for photographer hubs.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Fotografen & videografen',
        serviceName: 'Online marketing voor fotografen & videografen',
        serviceDescription:
          'Online marketing voor fotografen en videografen: snelle portfoliosites, lokale SEO per specialisatie en regio, en Instagram-gedreven ontdekking gericht op de juiste shoots — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe tonen we een portfolio dat snel laadt?',
            answer:
              'Leid met gecomprimeerde, lazy-loaded galerijen van echte shoots, zodat mobiele browsers jouw stijl voelen vóór ze bouncen. Fotografen en videografen leveren zware bestanden; de site moet craft bewijzen zonder wachttijd — compressie en galerijpatronen wegen hier zwaarder dan op een plannerscript die vooral andermans beelden cureert.'
          },
          {
            question: 'Hoe trekken we de juiste opdrachten aan, niet elke willekeurige mail?',
            answer:
              'Scheid specialisaties — bruiloft, portret, zakelijk, product, vastgoed, newborn, evenementen, video — met helder bewijs en formvelden voor datum, pakket en levering. Vage contactvakken trekken prijsshoppers; specialisatie-gedreven paden trekken klanten die jouw oog al voelen.'
          },
          {
            question: 'Hoe worden we vindbaar per specialisatie en regio?',
            answer:
              'Lokale SEO en een Google Bedrijfsprofiel helpen Maps en organisch zoeken bij “trouwfotograaf [stad]” of niche- + regio-intentie. Stijl en portfolio beslissen daarna de shortlist. We versterken die signalen zonder een vaste ranking te beloven.'
          },
          {
            question: 'Is social media een vindplaats voor fotografen?',
            answer:
              'Vaak wel: Instagram is een primaire ontdekkingslaag vóór een sitebezoek. Consistente storytelling van echte shoots voedt die trechter; social alleen sluit zelden een pakketboeking zonder snelle portfoliosite en een helder pad naar datum, pakket en leveringsgalerijen.'
          },
          {
            question: 'Wat is het verschil met marketing voor trouw- of eventplanners?',
            answer:
              'Planners verkopen regie van een dag; jij verkoopt het beeld zelf. Jouw portfolio is het product, zware bestanden vragen technische snelheid, en specialisaties filteren briefs. We hergebruiken geen planner-leveranciersnetwerk- of salonstoelkalender-taal voor fotografenhubs.'
          }
        ]
      }
    }
  },

  'branches-fotografen-website-laten-maken': {
    parents: ['home', 'branches', 'branches-fotografen'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for photographers and videographers',
      category: 'Web Development',
      offers: [
        { name: 'Fast portfolio galleries with image optimisation' },
        { name: 'Specialisation pages and client delivery galleries' },
        { name: 'Booking paths with packages, showreels and rights language' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design',
        serviceName: 'Website design for photographers & videographers',
        serviceDescription:
          'Website design for photographers and videographers focused on the portfolio as the product, technical speed under large image and video files, specialisation pages, client delivery galleries, package booking, showreels, image-rights language and Instagram handoff — without ranking guarantees.',
        faqs: [
          {
            question: 'Will my site stay fast with large photos and videos?',
            answer:
              'Yes — that is a core part of the build. We plan image optimisation, lazy loading and CDN delivery so megapixel stills and showreels feel instant on a phone. Photographers ship heavy files; a laggy gallery loses the booking before anyone reads a review. We do not promise a fixed Core Web Vitals score against every competitor.'
          },
          {
            question: 'Can I get online galleries for client delivery and selection?',
            answer:
              'Yes. We structure private client galleries for review, favourites and download after a shoot — separate from public portfolio pages. That handoff proves you deliver as cleanly as you shoot and reduces post-shoot friction in email threads.'
          },
          {
            question: 'Can I create a page per specialisation?',
            answer:
              'Yes when you actually shoot those crafts. Wedding, portrait, commercial, product, real estate, newborn, events and video each get dedicated proof and paths so the wrong brief never wastes a shoot day. Mixing everything into one vague gallery usually confuses intent.'
          },
          {
            question: 'Can I show my showreel on the site?',
            answer:
              'Yes. We embed highlight films and reels with performance-safe players so motion proof sits on the homepage or specialisation pages without killing mobile load. Videographers need playable proof, not a dead thumbnail that never starts on cellular data.'
          },
          {
            question: 'Can I connect a booking system with availability and packages?',
            answer:
              'Yes. We wire date, package and availability fields — or integrate a booking tool you already use — so clients start a shoot request without a vague DM. Packages sit next to gallery proof, not only in a PDF. Exact setup depends on your current tools and workflow.'
          },
          {
            question: 'How do image rights and watermarks appear online?',
            answer:
              'We place clear licence and usage language next to galleries, and support watermark habits where you need them for public proof. Clients understand what they can use before they ask — without turning the site into a legal wall of text.'
          },
          {
            question: 'How is this different from an event-planner website?',
            answer:
              'Planners sell coordination of a day and a vendor network; you sell the image itself. Your portfolio is the product, heavy files need technical speed, client delivery galleries matter, and specialisations filter briefs. We do not reuse planner or salon templates for photographer builds.'
          },
          {
            question: 'How long does a photographer website project take?',
            answer:
              'Timelines depend on portfolio volume, specialisation count, delivery-gallery needs and video depth. Many builds move from discovery to launch across several weeks once files and packages are prepared. We share a realistic plan after scoping — without promising a fixed booking volume.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken',
        serviceName: 'Website laten maken voor fotografen',
        serviceDescription:
          'Website laten maken voor fotografen en videografen gericht op het portfolio als product, technische snelheid onder grote beeld- en videobestanden, specialisatiepagina’s, klantgalerijen voor levering, pakketboeking, showreels, beeldrechtentaal en Instagram-overdracht — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Blijft mijn site snel met grote foto’s en video’s?',
            answer:
              'Ja — dat zit in de kern van de build. We plannen beeldoptimalisatie, lazy loading en CDN-levering zodat megapixel-stills en showreels instant aanvoelen op de telefoon. Fotografen leveren zware bestanden; een trage galerij verliest de boeking vóór iemand een review leest. We beloven geen vaste Core Web Vitals-score tegen elke concurrent.'
          },
          {
            question: 'Kan ik online galerijen voor klanten krijgen?',
            answer:
              'Ja. We structureren privé klantgalerijen voor review, favorieten en download na een shoot — los van publieke portfoliopagina’s. Die overdracht bewijst dat je net zo schoon levert als je shoot en vermindert nashoot-frictie in mailthreads.'
          },
          {
            question: 'Kan ik per specialisatie een pagina maken?',
            answer:
              'Ja wanneer je die crafts écht shoot. Bruiloft, portret, zakelijk, product, vastgoed, newborn, evenementen en video krijgen elk eigen bewijs en paden, zodat het verkeerde briefje geen shootdag verspilt. Alles mengen in één vage galerij verwart meestal de intentie.'
          },
          {
            question: 'Kan ik mijn showreel tonen?',
            answer:
              'Ja. We embedden highlightfilms en reels met performance-veilige players, zodat motion-bewijs op homepage of specialisatiepagina’s staat zonder mobiele load te breken. Videografen hebben speelbaar bewijs nodig, geen dode thumbnail die op mobiele data nooit start.'
          },
          {
            question: 'Kan ik een boekingssysteem met beschikbaarheid en pakketten koppelen?',
            answer:
              'Ja. We zetten velden voor datum, pakket en beschikbaarheid klaar — of integreren een boekingstool die je al gebruikt — zodat klanten een shootaanvraag starten zonder vage DM. Pakketten staan naast galerijbewijs, niet alleen in een PDF. Exacte setup hangt af van je huidige tools en workflow.'
          },
          {
            question: 'Hoe verschijnen beeldrechten en watermerken online?',
            answer:
              'We plaatsen heldere licentie- en gebruikstaal naast galerijen, en ondersteunen watermerkgewoontes waar je die nodig hebt voor publiek bewijs. Klanten begrijpen wat ze mogen gebruiken vóór ze vragen — zonder de site in een juridische tekstmuur te veranderen.'
          },
          {
            question: 'Wat is het verschil met een website voor eventplanners?',
            answer:
              'Planners verkopen regie van een dag en een leveranciersnetwerk; jij verkoopt het beeld zelf. Jouw portfolio is het product, zware bestanden vragen technische snelheid, klantgalerijen voor levering doen ertoe, en specialisaties filteren briefs. We hergebruiken geen planner- of salontemplates voor fotografenbuilds.'
          },
          {
            question: 'Hoe lang duurt een website-traject voor een fotograaf?',
            answer:
              'Doorlooptijden hangen af van portfolio-omvang, aantal specialisaties, leveringsgalerij-behoefte en videodiepte. Veel builds gaan van discovery tot livegang in enkele weken zodra bestanden en pakketten klaarstaan. We delen een realistisch plan na scoping — zonder een vast boekingsvolume te beloven.'
          }
        ]
      }
    }
  },

  'branches-fotografen-lokale-seo': {
    parents: ['home', 'branches', 'branches-fotografen'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for photographers and videographers',
      category: 'Digital Marketing',
      offers: [
        { name: 'Specialisation and region landing pages for makers' },
        { name: 'Google Business Profile with portfolio images' },
        { name: 'Assignment-type review growth and niche + place keywords' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO',
        serviceName: 'Local SEO for photographers & videographers',
        serviceDescription:
          'Local SEO for photographers and videographers focused on specialisation + place keywords, region and province pages, Google Business Profile with portfolio images, reviews per assignment type, venue and business mention signals and organic discovery versus photography marketplaces — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I get found as a wedding photographer in my city?',
            answer:
              'Build specialisation and city pages for “wedding photographer [city]”, stock Google Business Profile with real shoot photos, and grow bridal reviews that match that craft. We treat catchments as cities and regions you actually cover — without promising a fixed map-pack place against directories.'
          },
          {
            question: 'Can I rank per specialisation?',
            answer:
              'Yes when you actually shoot those crafts. Wedding, portrait, commercial, real estate, newborn and videography each get planned keyword and page coverage so niche searches do not only feed marketplaces. Competition varies by city and craft; we avoid promising you will own every niche term at once.'
          },
          {
            question: 'Can I target multiple regions?',
            answer:
              'Yes when you travel them. Photographers often cover a province, not one street. We structure multi-region footprints so each catchment has clear pages and GBP signals without confusing Maps about which footprint owns “portrait photographer [city]”.'
          },
          {
            question: 'How important are reviews for photographers?',
            answer:
              'Very — especially when they match the assignment type someone searched. Bridal reviews next to a wedding-photographer result calm a different fear than commercial or newborn proof. We set ethical ask habits after each shoot type — we do not invent reviews or guarantee a star average.'
          },
          {
            question: 'How long does local SEO take for a photographer?',
            answer:
              'Profile hygiene and review habits often show action lifts within weeks; holding relevance for “wedding photographer [city]” against marketplaces usually needs months of compounding. Build ahead of each niche’s booking season. Timelines depend on competition and content readiness — without ranking guarantees.'
          },
          {
            question: 'How is this different from a photographer website project?',
            answer:
              'Local SEO wins Maps and niche-search attention for makers in your regions; the website spoke builds fast galleries, client delivery and package booking that convert the visit. We keep those scopes distinct, then align so a map tap lands where a dated package request can start.'
          },
          {
            question: 'Do venue and business mentions help local SEO?',
            answer:
              'They can. Mentions with venues, agencies and companies reinforce regional relevance — local signals directories rarely earn the same way. We pursue them as supporting evidence alongside GBP and specialisation pages, not as a substitute for reviews or keyword coverage.'
          },
          {
            question: 'Can organic local SEO reduce reliance on photography marketplaces?',
            answer:
              'That is a common goal. Platforms rent introductions; local SEO builds owned discovery when someone searches Google for a craft in their city. Many makers still buy some directory leads while organic visibility grows — we do not claim Maps replaces every paid channel overnight, but stronger niche presence usually starts more direct package conversations.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO',
        serviceName: 'Lokale SEO voor fotografen',
        serviceDescription:
          'Lokale SEO voor fotografen en videografen gericht op specialisatie- + plaatszoekwoorden, regio- en provinciepagina’s, Google Bedrijfsprofiel met portfoliobeelden, reviews per opdrachttype, venue- en bedrijfsvermeldingen als lokale signalen en organische ontdekking versus fotografiemarktplaatsen — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe word ik gevonden als trouwfotograaf in mijn stad?',
            answer:
              'Bouw specialisatie- en stadspagina’s voor “trouwfotograaf [stad]”, vul Google Bedrijfsprofiel met echte shootfoto’s, en groei bridal-reviews die bij die craft passen. We behandelen catchments als steden en regio’s die je écht dekt — zonder een vaste kaartpackplek tegen directories te beloven.'
          },
          {
            question: 'Kan ik ranken per specialisatie?',
            answer:
              'Ja wanneer je die crafts écht shoot. Bruiloft, portret, zakelijk, vastgoed, newborn en videografie krijgen elk geplande zoekwoord- en paginadekking, zodat nichezoeken niet alleen marktplaatsen voedt. Concurrentie verschilt per stad en craft; we beloven niet dat je elke nicheterm tegelijk bezit.'
          },
          {
            question: 'Kan ik meerdere regio’s targeten?',
            answer:
              'Ja wanneer je ze bereist. Fotografen dekken vaak een provincie, niet één straat. We structureren multi-regiovoetafdrukken zodat elk catchment heldere pagina’s en GBP-signalen heeft zonder Maps te verwarren over wie “portretfotograaf [stad]” bezit.'
          },
          {
            question: 'Hoe belangrijk zijn reviews voor fotografen?',
            answer:
              'Erg — vooral wanneer ze bij het opdrachttype passen dat iemand zocht. Bridal-reviews naast een trouwfotograaf-resultaat kalmeren een andere angst dan zakelijk of newborn-bewijs. We zetten ethische vraaggewoontes op na elk shoottype — we verzinnen geen reviews en garanderen geen stergemiddelde.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een fotograaf?',
            answer:
              'Profielhygiëne en reviewgewoontes laten vaak binnen enkele weken actieliften zien; relevantie vasthouden op “trouwfotograaf [stad]” tegen marktplaatsen vraagt meestal maanden van compounding. Bouw vóór het boekingsseizoen van elke niche. Doorlooptijden hangen af van concurrentie en contentklaarheid — zonder rankinggaranties.'
          },
          {
            question: 'Wat is het verschil met een website-traject voor fotografen?',
            answer:
              'Lokale SEO wint Maps- en nichezoekaandacht voor makers in jouw regio’s; de website-spoke bouwt snelle galerijen, klantlevering en pakketboeking die het bezoek converteren. We houden die scopes gescheiden en stemmen ze af zodat een kaarttik landt waar een gedateerde pakketaanvraag kan starten.'
          },
          {
            question: 'Helpen venue- en bedrijfsvermeldingen bij lokale SEO?',
            answer:
              'Dat kan. Vermeldingen bij venues, bureaus en bedrijven versterken regionale relevantie — lokale signalen die directories zelden zo verdienen. We benaderen ze als steunbewijs naast GBP en specialisatiepagina’s, niet als vervanging van reviews of zoekwoorddekking.'
          },
          {
            question: 'Kan organische lokale SEO afhankelijkheid van fotografiemarktplaatsen verminderen?',
            answer:
              'Dat is een veelvoorkomend doel. Platforms huren introducties; lokale SEO bouwt owned ontdekking wanneer iemand Google opent voor een craft in hun stad. Veel makers kopen nog directoryleads terwijl organische zichtbaarheid groeit — we claimen niet dat Maps elk betaald kanaal overnight vervangt, maar sterkere nicheaanwezigheid start meestal meer directe pakketgesprekken.'
          }
        ]
      }
    }
  },

  'branches-eventplanners-website-laten-maken': {
    parents: ['home', 'branches', 'branches-eventplanners'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for wedding & event planners',
      category: 'Web Development',
      offers: [
        { name: 'Real-event portfolio galleries' },
        { name: 'Wedding and corporate enquiry paths' },
        { name: 'Inspiration and quote forms with brief fields' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design',
        serviceName: 'Website design for wedding & event planners',
        serviceDescription:
          'Website design for wedding and event planners focused on real-event portfolios, atmosphere-led design, wedding versus corporate paths, brief-ready quote forms, vendor-network proof and fast image-rich mobile pages — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I best show my portfolio online?',
            answer:
              'Lead with galleries of real weddings and company events you planned, then add short story pages for flagship days. Atmosphere and narrative matter more than a grid of anonymous thumbnails. We structure galleries for taste first and speed second so evening mobile browsers stay.'
          },
          {
            question: 'Can I get an inspiration and quote form?',
            answer:
              'Yes. We build forms that capture date, venue, guest count, budget band and style so your first reply can scope a wedding weekend or a corporate launch. Vague “contact us” boxes attract tyre-kickers; brief-led forms attract hosts who already sense your taste.'
          },
          {
            question: 'Will the site stay fast with many photos?',
            answer:
              'That is part of the build: compression, lazy loading and gallery patterns keep image-rich pages usable on a sofa phone. A heavy album that never finishes loses the shortlist before anyone reads a review.'
          },
          {
            question: 'Can I separate private and corporate events?',
            answer:
              'Yes. Wedding and corporate journeys get distinct entrances, proof and form fields so seasonal bridal demand does not land in a board-level brief form — and procurement hosts do not feel like they opened a Pinterest mood board.'
          },
          {
            question: 'Can I add new events myself?',
            answer:
              'Yes. We train your team to publish new gallery items and stories without a developer for every Saturday wedding. Editable by people who lived the day keeps the portfolio current through peak season.'
          },
          {
            question: 'Should the website feel like part of my brand portfolio?',
            answer:
              'Yes. Couples and companies judge style from the first scroll. Typography, spacing and image hierarchy should mirror the calm you sell on the day — not a generic template with stock confetti.'
          },
          {
            question: 'Do reviews from couples and companies belong on the site?',
            answer:
              'They help. Bridal and corporate proof about calm, deadlines and vendor liaison sit next to CTAs so trust settles when two portfolios look equally polished. We do not invent reviews; we place real ones where scanners look.'
          },
          {
            question: 'How long does an event-planner website project take?',
            answer:
              'Timelines depend on portfolio volume, dual-market needs and content readiness. Many builds move from discovery to launch across several weeks once galleries and stories are prepared. We share a realistic plan after scoping — without promising a fixed ranking or booking volume.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken',
        serviceName: 'Website laten maken voor trouwplanners',
        serviceDescription:
          'Website laten maken voor trouw- en eventplanners gericht op echte-eventportfolio’s, sfeergericht design, trouw- versus zakelijke paden, brief-klare offerteforms, leveranciersnetwerk-bewijs en snelle beeldrijke mobiele pagina’s — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe laat ik mijn portfolio het beste zien?',
            answer:
              'Leid met galerijen van echte bruiloften en bedrijfsevents die je regisseerde, en voeg korte verhaalpagina’s toe voor vlaggenschipdagen. Sfeer en narratief wegen zwaarder dan een grid anonieme thumbnails. We structureren galerijen voor smaak eerst en snelheid daarna, zodat avondbrowsers op mobiel blijven.'
          },
          {
            question: 'Kan ik een inspiratie- en offerteformulier krijgen?',
            answer:
              'Ja. We bouwen forms die datum, locatie, gastenaantal, budgetband en stijl vangen, zodat je eerste reactie een trouwweekend of zakelijke lancering kan scopten. Vage “neem contact op”-vakken trekken kijklustigen; brief-gedreven forms trekken hosts die jouw smaak al voelen.'
          },
          {
            question: 'Blijft de site snel met veel foto’s?',
            answer:
              'Dat zit in de build: compressie, lazy loading en galerijpatronen houden beeldrijke pagina’s bruikbaar op een telefoon op de bank. Een zwaar album dat nooit klaar is, verliest de shortlist vóór iemand een review leest.'
          },
          {
            question: 'Kan ik particuliere en zakelijke events scheiden?',
            answer:
              'Ja. Trouw- en zakelijke journeys krijgen aparte ingangen, bewijs en formvelden, zodat seizoensgebonden bridal-vraag niet in een board-level brief-formulier landt — en inkoophosts niet voelen alsof ze een Pinterest-moodboard openden.'
          },
          {
            question: 'Kan ik zelf events toevoegen?',
            answer:
              'Ja. We trainen je team om nieuwe galerij-items en verhalen te publiceren zonder developer voor elke zaterdagbruiloft. Bewerkbaar door mensen die de dag meemaakten houdt het portfolio actueel door het hoogseizoen.'
          },
          {
            question: 'Moet de website zelf als portfolio-item voelen?',
            answer:
              'Ja. Stellen en bedrijven beoordelen stijl vanaf de eerste scroll. Typografie, witruimte en beeldhiërarchie moeten de rust spiegelen die je op de dag verkoopt — geen generiek template met stockconfetti.'
          },
          {
            question: 'Horen reviews van bruidsparen en bedrijven op de site?',
            answer:
              'Ze helpen. Bridal- en zakelijk bewijs over rust, deadlines en leveranciersafstemming staat naast CTA’s, zodat vertrouwen zakt wanneer twee portfolio’s even gepolijst ogen. We verzinnen geen reviews; we plaatsen echte waar scanners kijken.'
          },
          {
            question: 'Hoe lang duurt een website-traject voor een eventplanner?',
            answer:
              'Doorlooptijden hangen af van portfolio-omvang, dual-markbehoeften en contentgereedheid. Veel builds gaan van discovery tot livegang in enkele weken zodra galerijen en verhalen klaarstaan. We delen een realistisch plan na scoping — zonder een vaste ranking of boekingsvolume te beloven.'
          }
        ]
      }
    }
  },

  'branches-eventplanners-lokale-seo': {
    parents: ['home', 'branches', 'branches-eventplanners'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for wedding and event planners',
      category: 'Digital Marketing',
      offers: [
        { name: 'Region and province landing pages for planners' },
        { name: 'Google Business Profile with portfolio images' },
        { name: 'Bridal review growth and style-led local keywords' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO',
        serviceName: 'Local SEO for wedding & event planners',
        serviceDescription:
          'Local SEO for wedding and event planners focused on region and province pages, Google Business Profile with portfolio images, bridal and corporate reviews, style and event-type keywords, venue mention signals and organic discovery versus wedding marketplaces — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I get found as a wedding planner in my region?',
            answer:
              'Build region and province pages for “wedding planner [region]” and related phrases, stock Google Business Profile with real-event photos, and grow bridal reviews that calm an emotional shortlist. Planners travel, so we treat catchments as provinces and corridors — not a fake single-street shop pin — without promising a fixed map-pack place against directories.'
          },
          {
            question: 'Can I rank in multiple cities or provinces?',
            answer:
              'Yes when you actually cover them. We structure multi-province footprints so each catchment has clear pages and GBP signals without confusing Maps about which footprint owns “wedding planner [region]”. Competition varies by province; we avoid promising you will own every city term at once.'
          },
          {
            question: 'How important are reviews for wedding and event planners?',
            answer:
              'Extremely. Couples choose with their gut; bridal reviews next to Maps often decide who makes the shortlist when two portfolios look equally polished. Corporate hosts leave different proof. We set ethical ask habits after events — we do not invent reviews or guarantee a star average.'
          },
          {
            question: 'Can I rank for a style or event type, not only a city?',
            answer:
              'Yes when you publish that work. Bohemian wedding, festival wedding, corporate launch and congress intent get planned keyword and page coverage so style searches do not only feed directories. Region + style layers work together; we do not promise every style term in every province.'
          },
          {
            question: 'How long does local SEO take for a wedding or event planner?',
            answer:
              'Profile hygiene and review habits often show action lifts within weeks; holding relevance for “wedding planner [region]” against marketplaces usually needs months of compounding. Build ahead of the post-holiday engagement and new-year orientation peak. Timelines depend on competition and content readiness — without ranking guarantees.'
          },
          {
            question: 'How is this different from an event-planner website project?',
            answer:
              'Local SEO wins Maps and region-search attention for planners in your provinces; the website spoke builds portfolio galleries, wedding versus corporate paths and brief forms that convert the visit. We keep those scopes distinct, then align so a map tap lands where a dated brief can start.'
          },
          {
            question: 'Do venue and supplier mentions help local SEO?',
            answer:
              'They can. Mentions and listings with venues and trusted vendors reinforce regional relevance — local signals directories rarely earn the same way. We pursue them as supporting evidence alongside GBP and region pages, not as a substitute for reviews or keyword coverage.'
          },
          {
            question: 'Can organic local SEO reduce reliance on wedding marketplaces?',
            answer:
              'That is a common goal. Marketplaces rent introductions; local SEO builds owned discovery when someone searches Google for a planner in their region. Many planners still buy some directory leads while organic visibility grows — we do not claim Maps replaces every paid channel overnight, but stronger regional presence usually starts more direct brief conversations.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO',
        serviceName: 'Lokale SEO voor trouwplanners',
        serviceDescription:
          'Lokale SEO voor trouw- en eventplanners gericht op regio- en provinciepagina’s, Google Bedrijfsprofiel met portfoliobeelden, bridal- en zakelijke reviews, stijl- en eventtypezoekwoorden, venuevermeldingen als lokale signalen en organische ontdekking versus bruiloftmarktplaatsen — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe word ik gevonden als trouwplanner in mijn regio?',
            answer:
              'Bouw regio- en provinciepagina’s voor “trouwplanner [regio]” en gerelateerde frasen, vul Google Bedrijfsprofiel met echte eventfoto’s, en groei bridal-reviews die een emotionele shortlist kalmeren. Planners reizen, dus we behandelen catchments als provincies en corridors — geen nep-één-straatpin — zonder een vaste kaartpackplek tegen directories te beloven.'
          },
          {
            question: 'Kan ik op meerdere plaatsen of provincies ranken?',
            answer:
              'Ja wanneer je ze écht dekt. We structureren multi-provincievoetafdrukken zodat elk catchment heldere pagina’s en GBP-signalen heeft zonder Maps te verwarren over wie “trouwplanner [regio]” bezit. Concurrentie verschilt per provincie; we beloven niet dat je elke stads-term tegelijk bezit.'
          },
          {
            question: 'Hoe belangrijk zijn reviews voor trouw- en eventplanners?',
            answer:
              'Extreem. Stellen kiezen met hun buik; bridal-reviews naast Maps beslissen vaak wie de shortlist haalt wanneer twee portfolio’s even gepolijst ogen. Zakelijke hosts laten ander bewijs achter. We zetten ethische vraaggewoontes op na events — we verzinnen geen reviews en garanderen geen stergemiddelde.'
          },
          {
            question: 'Kan ik ranken op een stijl of type event?',
            answer:
              'Ja wanneer je dat werk publiceert. Bohemian bruiloft, festivalbruiloft, zakelijke lancering en congresintentie krijgen geplande zoekwoord- en paginadekking, zodat stijlzoeken niet alleen directories voedt. Regio- + stijllagen werken samen; we beloven niet elke stijlterm in elke provincie.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een trouw- of eventplanner?',
            answer:
              'Profielhygiëne en reviewgewoontes laten vaak binnen enkele weken actieliften zien; relevantie vasthouden op “trouwplanner [regio]” tegen marktplaatsen vraagt meestal maanden van compounding. Bouw vóór de verlovingspiek rond feestdagen en de oriëntatiegolf in het nieuwe jaar. Doorlooptijden hangen af van concurrentie en contentklaarheid — zonder rankinggaranties.'
          },
          {
            question: 'Wat is het verschil met een website-traject voor eventplanners?',
            answer:
              'Lokale SEO wint Maps- en regiozoekaandacht voor planners in jouw provincies; de website-spoke bouwt portfoliogalerijen, trouw- versus zakelijke paden en brief-forms die het bezoek converteren. We houden die scopes gescheiden en stemmen ze af zodat een kaarttik landt waar een gedateerd briefje kan starten.'
          },
          {
            question: 'Helpen venue- en leveranciersvermeldingen bij lokale SEO?',
            answer:
              'Dat kan. Vermeldingen bij venues en vertrouwde leveranciers versterken regionale relevantie — lokale signalen die directories zelden zo verdienen. We benaderen ze als steunbewijs naast GBP en regio-pagina’s, niet als vervanging van reviews of zoekwoorddekking.'
          },
          {
            question: 'Kan organische lokale SEO afhankelijkheid van bruiloftmarktplaatsen verminderen?',
            answer:
              'Dat is een veelvoorkomend doel. Marktplaatsen huren introducties; lokale SEO bouwt owned ontdekking wanneer iemand Google opent voor een planner in hun regio. Veel planners kopen nog directoryleads terwijl organische zichtbaarheid groeit — we claimen niet dat Maps elk betaald kanaal overnight vervangt, maar sterkere regionale aanwezigheid start meestal meer directe briefgesprekken.'
          }
        ]
      }
    }
  },

  'branches-schoonmaakbedrijven-website-laten-maken': {
    parents: ['home', 'branches', 'branches-schoonmaakbedrijven'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for cleaning companies',
      category: 'Web Development',
      offers: [
        { name: 'Commercial and residential cleaning entrances' },
        { name: 'Contract-oriented quote request forms' },
        { name: 'Trust signals for key handover' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design',
        serviceName: 'Website design for cleaning companies',
        serviceDescription:
          'Cleaning company website design with service splits, commercial and residential entrances, contract-oriented quote forms, service radius, insurance and quality marks, commercial references and mobile paths.',
        faqs: [
          {
            question: 'Can I separate commercial and residential services?',
            answer:
              'Yes. We build distinct entrances and pages for facility buyers — offices, schools, care, VvE — and for households seeking glass or move-out cleans. Mixing both into one vague journey loses the longer B2B contract cycle and confuses faster residential enquiries.'
          },
          {
            question: 'Will I get better quote requests for recurring contracts?',
            answer:
              'Forms that ask frequency, floor area, location type and site count help your first reply scope a weekly office round or multi-site agreement — not only a one-off deep clean. Better questions filter tyre-kickers without promising a fixed conversion rate.'
          },
          {
            question: 'How do I show marks, insurance and VCA?',
            answer:
              'We place insurance, VCA where relevant, screened-staff language and marks such as OSB or Schoonmakend Nederland next to quote CTAs — where key-handover fear is decided. We surface authentic marks you hold; we do not invent certifications.'
          },
          {
            question: 'Can I set my service area on the site?',
            answer:
              'Yes. Towns and postcodes you cover sit on the homepage and quote path so enquiries outside your cleaning radius drop off early, and locals see you already work where their buildings sit. Exact presentation depends on how wide your catchment is.'
          },
          {
            question: 'Can I update services myself after launch?',
            answer:
              'Yes. We train your team to edit service pages, radius towns and references without a developer for every new office contract. Structural changes such as a new commercial entrance still need a scoped update.'
          },
          {
            question: 'How do fixed teams and quality control appear online?',
            answer:
              'Plain-language blocks explain how teams stay consistent and how inspections or checklists work — because cleaning buyers often fear rotating strangers more than a slightly higher weekly rate. That story belongs next to commercial references, not only in a PDF quality manual.'
          },
          {
            question: 'Is this the same as a contractor website?',
            answer:
              'No. Contractor sites sell one-off renovation projects with before/after portfolios. Cleaning sites sell recurring routes, key trust and contract-scoped quotes across office, glass, floors and handover work. Reusing a build template usually ships the wrong proof and the wrong form questions.'
          },
          {
            question: 'How long does a cleaning company website project take?',
            answer:
              'Most cleaning sites launch in about four to eight weeks, depending on service depth, commercial versus residential mix, quote-form complexity and content readiness. Discovery starts with how contracts are scoped today so we do not ship a generic brochure template.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken',
        serviceName: 'Website laten maken voor schoonmaakbedrijven',
        serviceDescription:
          'Website laten maken voor schoonmaakbedrijven met dienstensplitsing, zakelijke en particuliere ingangen, contractgerichte offerteforms, werkgebied, verzekering en keurmerken, zakelijke referenties en mobiele paden.',
        faqs: [
          {
            question: 'Kan ik zakelijke en particuliere diensten scheiden?',
            answer:
              'Ja. We bouwen aparte ingangen en pagina’s voor facility-kopers — kantoren, scholen, zorg, VvE — en voor huishoudens die glas of oplevering zoeken. Beide mengen in één vage journey verliest de langere B2B-contractcyclus en verwart snellere particuliere aanvragen.'
          },
          {
            question: 'Krijg ik betere offerteaanvragen voor contracten?',
            answer:
              'Forms die frequentie, oppervlakte, locatietype en aantal sites vragen helpen je eerste reactie een wekelijkse kantoorroute of multi-site-afspraak te scopen — niet alleen een eenmalige diepteschoonmaak. Betere vragen filteren shoppers zonder een vast conversiepercentage te beloven.'
          },
          {
            question: 'Hoe toon ik mijn keurmerken en verzekering?',
            answer:
              'We plaatsen verzekering, VCA waar relevant, gescreend-personeelstaal en keurmerken zoals OSB of Schoonmakend Nederland naast offerte-CTA’s — waar sleutelangst wordt beslist. We tonen authentieke keurmerken die je hebt; we verzinnen geen certificeringen.'
          },
          {
            question: 'Kan ik mijn werkgebied instellen?',
            answer:
              'Ja. Gemeenten en postcodes die je dekt staan op homepage en offertepad, zodat aanvragen buiten je schoonmaakstraal vroeg afvallen en locals zien dat je al werkt waar hun panden staan. Exacte presentatie hangt af van hoe breed je catchment is.'
          },
          {
            question: 'Kan ik zelf diensten aanpassen?',
            answer:
              'Ja. We trainen je team om dienstpagina’s, werkgebiedplaatsen en referenties te bewerken zonder developer voor elk nieuw kantoorcontract. Structurele wijzigingen zoals een nieuwe zakelijke ingang vragen nog steeds een gescopte update.'
          },
          {
            question: 'Hoe verschijnen vaste teams en kwaliteitscontrole online?',
            answer:
              'Begrijpelijke blokken leggen uit hoe teams consistent blijven en hoe inspecties of checklists werken — omdat schoonmaakkopers wisselende vreemden vaak meer vrezen dan een iets hogere weekprijs. Dat verhaal hoort naast zakelijke referenties, niet alleen in een PDF-kwaliteitshandboek.'
          },
          {
            question: 'Is dit hetzelfde als een aannemerswebsite?',
            answer:
              'Nee. Aannemerssites verkopen eenmalige verbouwprojecten met voor/na-portfolio’s. Schoonmaaksites verkopen terugkerende routes, sleutelvertrouwen en contractgescoopte offertes over kantoor, glas, vloeren en oplevering. Een bouwtemplate hergebruiken levert meestal het verkeerde bewijs en de verkeerde formvragen op.'
          },
          {
            question: 'Hoe lang duurt een website-traject voor een schoonmaakbedrijf?',
            answer:
              'De meeste schoonmaaksites gaan in ongeveer vier tot acht weken live, afhankelijk van dienstdiepte, zakelijk versus particulier, complexiteit van het offerteformulier en contentklaarheid. Discovery begint bij hoe contracten nu worden gescoped, zodat we geen generiek brochuretemplate opleveren.'
          }
        ]
      }
    }
  },

  'branches-schoonmaakbedrijven-lokale-seo': {
    parents: ['home', 'branches', 'branches-schoonmaakbedrijven'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for cleaning companies',
      category: 'Digital Marketing',
      offers: [
        { name: 'Service-area Google Business Profile for cleaners' },
        { name: 'Office, glass and handover + city landing pages' },
        { name: 'Dual-market review growth and organic B2B discovery' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO',
        serviceName: 'Local SEO for cleaning companies',
        serviceDescription:
          'Local SEO for cleaning companies focused on service-area Google Business Profile, office cleaning and window cleaner + city keywords, dual-market reviews and organic discovery versus platforms and chains — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I get found for office cleaning in my region?',
            answer:
              'Build service-area Google Business Profile signals for the towns your crews actually cover, then support “office cleaning [city]” and related facility phrases with local pages that speak to facility managers and VvE boards — longer cycles than a household glass job. We strengthen those signals without promising a fixed map-pack place against chains or marketplaces.'
          },
          {
            question: 'Does local SEO work without a public office or shopfront?',
            answer:
              'Yes. Most cleaners operate from a depot or home base. Google supports service-area businesses so you can appear for “cleaning company near me” and town phrases without inventing a retail pin nobody visits. Categories, covered towns and quote actions should match how keys and site access actually work.'
          },
          {
            question: 'How do I get commercial Google reviews as a cleaner?',
            answer:
              'Ask after a stable office round or a successful site visit — when the facility contact trusts the team — with a short Google review link and language that invites company names where allowed. Pair that habit with residential asks after glass or move-out jobs so Maps shows both markets you sell.'
          },
          {
            question: 'Can I rank for each cleaning service separately?',
            answer:
              'Yes when you actually deliver those cleans. We build office cleaning, window cleaning, floors, handover and facade + town signals so Maps and organic clicks land on the right discipline instead of one thin “we clean” page. Competition varies by city; we avoid promising you will own every service term.'
          },
          {
            question: 'How long does local SEO take for a cleaning company?',
            answer:
              'Profile hygiene and dual-market review habits often show action lifts within weeks; holding relevance for “office cleaning [city]” or “window cleaner [city]” against national brands and lead platforms usually needs months of compounding. Timelines depend on competition, citation health and content readiness — without ranking guarantees.'
          },
          {
            question: 'How is this different from a cleaning company website project?',
            answer:
              'Local SEO wins Maps and city-search attention for cleaners and glass in your towns; the website spoke builds commercial versus residential paths and contract quote forms that convert the visit. We keep those scopes distinct, then align so a map tap lands on a page that already explains the clean type and how to request a route quote.'
          },
          {
            question: 'Can organic local SEO reduce reliance on cleaning lead platforms?',
            answer:
              'That is a common goal. Platforms rent introductions; local SEO builds owned discovery when someone searches Google for a cleaner in their city. Many firms still buy some marketplace leads while organic visibility grows — we do not claim Maps replaces every paid channel overnight, but stronger pack presence usually starts more direct contract conversations.'
          },
          {
            question: 'Should commercial and residential searches be treated differently?',
            answer:
              'Yes. Facility and VvE buyers often have longer cycles and different decision-makers than households booking glass or move-out cleans. Local pages, review asks and GBP categories should reflect both intents so one market does not drown the other in Maps and organic results.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO',
        serviceName: 'Lokale SEO voor schoonmaakbedrijven',
        serviceDescription:
          'Lokale SEO voor schoonmaakbedrijven gericht op service-area Google Bedrijfsprofiel, kantoorschoonmaak- en glazenwasser- + stadszoekwoorden, dual-marktreviews en organische ontdekking versus platforms en ketens — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe word ik gevonden voor kantoorschoonmaak in mijn regio?',
            answer:
              'Bouw service-area Google Bedrijfsprofiel-signalen voor de plaatsen die je crews écht dekken, en steun “kantoorschoonmaak [stad]” en gerelateerde facility-frasen met lokale pagina’s die facility managers en VvE-besturen aanspreken — langere cycli dan een huishoudelijke glasklus. We versterken die signalen zonder een vaste kaartpackplek tegen ketens of marktplaatsen te beloven.'
          },
          {
            question: 'Werkt lokale SEO zonder publieke vestiging?',
            answer:
              'Ja. De meeste schoonmakers werken vanuit een depot of thuisbasis. Google ondersteunt service-area businesses zodat je kunt verschijnen op “schoonmaakbedrijf bij mij” en plaatsfrasen zonder een retailpin te verzinnen die niemand bezoekt. Categorieën, gedekte plaatsen en offerte-acties moeten passen bij hoe sleutels en locatietoegang écht werken.'
          },
          {
            question: 'Hoe krijg ik zakelijke Google-reviews als schoonmaakbedrijf?',
            answer:
              'Vraag na een stabiele kantoorroute of een geslaagd locatiebezoek — wanneer het facility-contact het team vertrouwt — met een korte Google-reviewlink en taal die bedrijfsnamen uitnodigt waar toegestaan. Koppel die gewoonte aan particuliere verzoeken na glas- of opleverklussen, zodat Maps beide markten toont die je verkoopt.'
          },
          {
            question: 'Kan ik ranken per schoonmaakdienst?',
            answer:
              'Ja wanneer je die schoonmaaktypes écht levert. We bouwen kantoorschoonmaak-, glasbewassing-, vloer-, oplever- en gevel- + plaats-signalen zodat Maps- en organische klikken op de juiste discipline landen in plaats van één dunne “wij poetsen”-pagina. Concurrentie verschilt per stad; we beloven niet dat je elke dienstterm bezit.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een schoonmaakbedrijf?',
            answer:
              'Profielhygiëne en dual-marktreviewgewoontes laten vaak binnen enkele weken actieliften zien; relevantie vasthouden op “kantoorschoonmaak [stad]” of “glazenwasser [stad]” tegen landelijke merken en leadplatforms vraagt meestal maanden van compounding. Doorlooptijden hangen af van concurrentie, citationgezondheid en contentklaarheid — zonder rankinggaranties.'
          },
          {
            question: 'Wat is het verschil met een schoonmaakwebsite-traject?',
            answer:
              'Lokale SEO wint Maps- en stadszoekaandacht voor schoonmakers en glas in jouw plaatsen; de website-spoke bouwt zakelijke versus particuliere paden en contractofferteforms die het bezoek converteren. We houden die scopes gescheiden en stemmen ze af zodat een kaarttik landt op een pagina die al het schoonmaaktype en hoe je een routeofferte aanvraagt uitlegt.'
          },
          {
            question: 'Kan organische lokale SEO afhankelijkheid van schoonmaak-leadplatforms verminderen?',
            answer:
              'Dat is een veelvoorkomend doel. Platforms huren introducties; lokale SEO bouwt owned ontdekking wanneer iemand Google opent voor een schoonmaker in hun stad. Veel bedrijven kopen nog marktplaatsleads terwijl organische zichtbaarheid groeit — we claimen niet dat Maps elk betaald kanaal overnight vervangt, maar sterkere packaanwezigheid start meestal meer directe contractgesprekken.'
          },
          {
            question: 'Moeten zakelijke en particuliere zoekopdrachten anders behandeld worden?',
            answer:
              'Ja. Facility- en VvE-kopers hebben vaak langere cycli en andere beslissers dan huishoudens die glas of opleverschoonmaak boeken. Lokale pagina’s, reviewverzoeken en GBP-categorieën moeten beide intenties weerspiegelen, zodat de ene markt de andere niet verdrinkt in Maps en organische resultaten.'
          }
        ]
      }
    }
  },

  'branches-sportscholen-website-laten-maken': {
    parents: ['home', 'branches', 'branches-sportscholen'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for gyms and personal trainers',
      category: 'Web Development',
      offers: [
        { name: 'Online trial lesson and intake booking' },
        { name: 'Membership and package presentation' },
        { name: 'Class schedule and coach profile pages' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design',
        serviceName: 'Website design for gyms and personal trainers',
        serviceDescription:
          'Gym and personal trainer website design with online trial or intake booking, clear memberships and packages, class schedules, coach profiles, transformation proof, member-software links and mobile sign-up paths.',
        faqs: [
          {
            question: 'Can members book a trial lesson online?',
            answer:
              'Yes. We put proefles or first-class booking on a path people can finish from a phone — class type or goal, preferred slot, and what happens next — so motivated visitors start without waiting for a callback. Booking can land as a form-to-diary flow or connect to member software where your stack allows.'
          },
          {
            question: 'Can I show my class schedule on the website?',
            answer:
              'Yes. Group-class timetables, open-gym hours and popular slots get a readable mobile layout so visitors can see whether evening HIIT or morning yoga fits their week. Where Virtuagym, Sportbit, Eversports or similar allow it, we reduce double entry so the site does not lag behind a PDF that nobody updates.'
          },
          {
            question: 'Can the site connect to my member software?',
            answer:
              'Where your stack and vendor feeds allow, we link booking or schedules to tools such as Virtuagym, Sportbit or Eversports so class changes and member login stay aligned. Exact connectors depend on your contracts and APIs; we map that in discovery before promising a specific integration.'
          },
          {
            question: 'Can I show transformations and before-after stories?',
            answer:
              'Yes. Consent-aware transformation stories and member journeys sit where scanners decide, next to trial or intake CTAs. Fitness buyers trust visible change more than empty equipment photos — we surface authentic proof you already have permission to publish, not invented results.'
          },
          {
            question: 'Does this work for a personal trainer without a gym building?',
            answer:
              'Yes. PT-focused builds emphasise personal brand, specialisms, 1-on-1 or online coaching packages and intake booking — without forcing a full club timetable you do not run. Outdoor coaches, home-visit trainers and online-only practices get paths that match how clients actually start with them.'
          },
          {
            question: 'How should memberships and packages be presented without listing prices here?',
            answer:
              'We structure what each membership or coaching package includes, who it fits and how to start — so visitors compare options without a chaotic WhatsApp thread. Public price figures are not required on this page of our site; your own package pages can show what you choose to publish after scoping.'
          },
          {
            question: 'Will the website work well on mobile for sign-ups?',
            answer:
              'Yes. Most people choose a gym or coach on their phone between work and home. Trial CTAs, package overview and schedule blocks are built for one-thumb use — because a desktop brochure that collapses on a small screen loses the evening someone was ready to book.'
          },
          {
            question: 'How long does a gym or personal trainer website project take?',
            answer:
              'Most fitness sites launch in about four to eight weeks, depending on schedule depth, software connections, coach content readiness and whether you run a multi-location club. Discovery starts with how trials and intakes arrive today so we do not ship a generic brochure template.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken',
        serviceName: 'Website laten maken voor sportscholen',
        serviceDescription:
          'Website laten maken voor sportscholen en personal trainers met online proefles- of intakeboeking, heldere abonnementen en pakketten, lesroosters, coachprofielen, transformatiebewijs, ledensoftwarekoppelingen en mobiele inschrijfpaden.',
        faqs: [
          {
            question: 'Kunnen leden online een proefles boeken?',
            answer:
              'Ja. We zetten proefles- of eerste-lesboeking op een pad dat mensen vanaf de telefoon afronden — lestype of doel, voorkeursmoment, en wat er daarna gebeurt — zodat gemotiveerde bezoekers starten zonder op een terugbelactie te wachten. Boeking kan als form-naar-agenda landen of koppelen met ledensoftware waar je stack het toelaat.'
          },
          {
            question: 'Kan ik mijn lesrooster op de website tonen?',
            answer:
              'Ja. Groepslesroosters, open-gym-uren en populaire slots krijgen een leesbare mobiele layout, zodat bezoekers zien of avond-HIIT of ochtendyoga in hun week past. Waar Virtuagym, Sportbit, Eversports of vergelijkbaar het toelaat, verminderen we dubbele invoer zodat de site niet achterloopt op een PDF die niemand bijwerkt.'
          },
          {
            question: 'Kan de site koppelen met mijn ledensoftware?',
            answer:
              'Waar je stack en vendorfeeds het toelaten, koppelen we boeking of roosters aan tools zoals Virtuagym, Sportbit of Eversports, zodat leswijzigingen en ledenlogin synchroon blijven. Exacte connectors hangen af van je contracten en API’s; dat brengen we in discovery in kaart vóór we een specifieke koppeling beloven.'
          },
          {
            question: 'Kan ik transformaties en before-after laten zien?',
            answer:
              'Ja. Toestemmingsbewuste transformatieverhalen en ledenjourneys staan waar scanners beslissen, naast proefles- of intake-CTA’s. Fitnesskopers vertrouwen zichtbare verandering meer dan lege toestelfoto’s — we tonen authentiek bewijs dat je mag publiceren, geen verzonnen resultaten.'
          },
          {
            question: 'Werkt dit ook voor een personal trainer zonder pand?',
            answer:
              'Ja. PT-gerichte builds benadrukken persoonlijk merk, specialisaties, 1-op-1 of online coachingpakketten en intakeboeking — zonder een volledig clubrooster te forceren dat je niet draait. Outdoorcoaches, thuisbezoek-trainers en online-only praktijken krijgen paden die passen bij hoe cliënten écht bij hen starten.'
          },
          {
            question: 'Hoe presenteer ik abonnementen en pakketten zonder hier bedragen te noemen?',
            answer:
              'We structureren wat elk lidmaatschap of coachingpakket inhoudt, voor wie het past en hoe je start — zodat bezoekers opties vergelijken zonder chaotische WhatsApp-threads. Openbare prijscijfers zijn op deze pagina van onze site niet nodig; jouw eigen pakketpagina’s tonen wat je na scoping wilt publiceren.'
          },
          {
            question: 'Werkt de website goed op mobiel voor inschrijvingen?',
            answer:
              'Ja. De meeste mensen kiezen een sportschool of coach op de telefoon tussen werk en thuis. Proefles-CTA’s, pakketoverzicht en roosterblokken zijn gebouwd voor één duim — omdat een desktopbrochure die op klein scherm uit elkaar valt de avond verliest waarop iemand klaar was om te boeken.'
          },
          {
            question: 'Hoe lang duurt een website-traject voor een sportschool of personal trainer?',
            answer:
              'De meeste fitnesssites gaan in ongeveer vier tot acht weken live, afhankelijk van roosterdiepte, softwarekoppelingen, klaarheid van coachcontent en of je een club met meerdere locaties runt. Discovery begint bij hoe proeflessen en intakes nu binnenkomen, zodat we geen generiek brochuretemplate opleveren.'
          }
        ]
      }
    }
  },

  'branches-sportscholen-lokale-seo': {
    parents: ['home', 'branches', 'branches-sportscholen'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for gyms and personal trainers',
      category: 'Digital Marketing',
      offers: [
        { name: 'Gym Google Business Profile with floor photos' },
        { name: 'Discipline and city landing pages' },
        { name: 'Review growth and seasonal local keywords' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO',
        serviceName: 'Local SEO for gyms and personal trainers',
        serviceDescription:
          'Local SEO for gyms and personal trainers focused on Google Business Profile with training-floor proof, gym and PT + city keywords, discipline pages, review growth for emotional choices and seasonal peaks — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I rank at the top for “gym” in my city?',
            answer:
              'Strengthen Google Business Profile with floor photos, accurate hours, class or coaching categories and recent member reviews, then support that with gym or discipline + city pages that match how people search. Local-pack visibility compounds over time; we do not promise a fixed map position against chains or independents.'
          },
          {
            question: 'How do I compete locally with big chains like Basic-Fit?',
            answer:
              'Chains often win broad city terms on brand weight. Independents win by sharpening neighbourhood proof, discipline clarity — bootcamp, kickboxing, small group — and fresher reviews that speak to vibe and coaching, not only distance. Local SEO helps you own the “right fit nearby” story while chains dominate generic “gym [city]” noise.'
          },
          {
            question: 'How do I get more gym or coaching reviews?',
            answer:
              'Ask after a trial or a coaching block with a short Google review link and a habit tied to the first positive session. Recent, specific member voices calm an emotional choice — often the deciding factor when two studios look equal on Maps distance.'
          },
          {
            question: 'Does local SEO work for a personal trainer without a venue?',
            answer:
              'Yes. We set up service-area signals so outdoor, home-visit or online coaches appear for the catchment they actually serve — without pretending they own a full club floor. Categories, reviews and city pages still matter; the footprint simply matches how clients find you.'
          },
          {
            question: 'Should we prepare for January and spring search peaks?',
            answer:
              'Yes. Resolution and “summer body” weeks lift gym and PT search volume. We keep GBP posts and local pages ready ahead of those waves so you are already visible when intent floods the city — instead of starting optimisation in the middle of the rush.'
          },
          {
            question: 'What is the difference with a fitness website project?',
            answer:
              'Local SEO wins Maps and city search attention; the website spoke builds trial booking, packages, schedules and software paths that convert the visit. We keep those scopes distinct, then align so a map tap lands on a page that already explains who you are for.'
          },
          {
            question: 'Can I rank for disciplines such as bootcamp or yoga in my city?',
            answer:
              'Yes when you actually run those programmes. We build discipline + city signals so Maps and organic clicks land on the right story — bootcamp, kickboxing, yoga or small-group coaching — instead of one thin “fitness” page. Competition varies by city; we avoid promising you will own every term.'
          },
          {
            question: 'How long does local SEO for a gym or trainer take?',
            answer:
              'Profile hygiene and review habits often show action lifts within weeks; holding relevance for “gym [city]” or “personal trainer [city]” against chains usually needs months of compounding work. Timelines depend on competition, citation health and content readiness — without ranking guarantees.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO',
        serviceName: 'Lokale SEO voor sportscholen',
        serviceDescription:
          'Lokale SEO voor sportscholen en personal trainers gericht op Google Bedrijfsprofiel met zaalbewijs, sportschool- en PT- + stadszoekwoorden, disciplinepagina’s, reviewgroei voor emotionele keuzes en seizoenspieken — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe kom ik bovenaan voor sportschool in mijn stad?',
            answer:
              'Versterk Google Bedrijfsprofiel met zaalfoto’s, accurate uren, les- of coachingcategorieën en recente ledenreviews, en steun dat met sportschool- of discipline- + stadspagina’s die matchen hoe mensen zoeken. Local-packzichtbaarheid stapelt zich op; we beloven geen vaste kaartpositie tegen ketens of independents.'
          },
          {
            question: 'Hoe versla ik grote ketens lokaal?',
            answer:
              'Ketens winnen vaak brede stadszoeken op merkgewicht. Independents winnen door buurtbewijs, disciplinehelderheid — bootcamp, kickboksen, small group — en frissere reviews die vibe en coaching uitspreken, niet alleen afstand. Lokale SEO helpt je het “juiste fit in de buurt”-verhaal te bezitten terwijl ketens generieke “sportschool [stad]”-ruis domineren.'
          },
          {
            question: 'Hoe krijg ik meer reviews?',
            answer:
              'Vraag na een proefles of coachingblok met een korte Google-reviewlink en een gewoonte gekoppeld aan de eerste positieve sessie. Recente, specifieke ledenstemmen dempen een emotionele keuze — vaak de beslissende factor wanneer twee studio’s op Maps-afstand gelijk ogen.'
          },
          {
            question: 'Werkt lokale SEO voor een personal trainer zonder pand?',
            answer:
              'Ja. We zetten service-area-signalen op zodat outdoor-, thuisbezoek- of onlinecoaches verschijnen voor het verzorgingsgebied dat ze écht bedienen — zonder alsof ze een volledige clubvloer bezitten. Categorieën, reviews en stadspagina’s blijven tellen; de voetafdruk past gewoon bij hoe cliënten je vinden.'
          },
          {
            question: 'Moeten we ons voorbereiden op januari- en voorjaarszoekpieken?',
            answer:
              'Ja. Voornemens- en “summer body”-weken tillen sportschool- en PT-zoekvolume. We houden GBP-posts en lokale pagina’s klaar vóór die golven, zodat je al zichtbaar bent wanneer intentie de stad binnenstroomt — in plaats van midden in de rush te beginnen met optimaliseren.'
          },
          {
            question: 'Wat is het verschil met een fitnesswebsite-traject?',
            answer:
              'Lokale SEO wint Maps- en stadszoekaandacht; de website-spoke bouwt proeflesboeking, pakketten, roosters en softwarepaden die het bezoek converteren. We houden die scopes gescheiden en stemmen ze af zodat een kaarttik landt op een pagina die al uitlegt voor wie je past.'
          },
          {
            question: 'Kan ik ranken op disciplines zoals bootcamp of yoga in mijn stad?',
            answer:
              'Ja wanneer je die programma’s écht draait. We bouwen discipline- + stadssignalen zodat Maps- en organische klikken op het juiste verhaal landen — bootcamp, kickboksen, yoga of small-group coaching — in plaats van één dunne “fitness”-pagina. Concurrentie verschilt per stad; we beloven niet dat je elke term bezit.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een sportschool of trainer?',
            answer:
              'Profielhygiëne en reviewgewoontes laten vaak binnen enkele weken actieliften zien; relevantie vasthouden op “sportschool [stad]” of “personal trainer [stad]” tegen ketens vraagt meestal maanden van compounding werk. Doorlooptijden hangen af van concurrentie, citationgezondheid en contentklaarheid — zonder rankinggaranties.'
          }
        ]
      }
    }
  },

  'branches-webshops': {
    parents: ['home', 'branches'],
    pageType: 'CollectionPage',
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Online marketing for webshops and e-commerce',
      category: 'Digital Marketing',
      offers: [
        { name: 'Webshop design and development' },
        { name: 'SEO for webshops' },
        { name: 'Google Ads and Shopping for webshops' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Webshops & e-commerce',
        serviceName: 'Online marketing for webshops and e-commerce',
        serviceDescription:
          'Online marketing for webshops and e-commerce: storefronts, catalogue SEO, Google Shopping and conversion focused on traffic, checkout and repeat purchase — not local map-pack SEO.',
        faqs: [
          {
            question: 'How do we get more traffic to the webshop?',
            answer:
              'Combine catalogue SEO on product and category pages with Shopping or Performance Max where the feed is healthy, plus sitespeed so mobile visitors stay. National or regional search demand matters more here than a Google Business Profile pin for a street catchment.'
          },
          {
            question: 'How do we raise conversion on the store?',
            answer:
              'Fix mobile checkout friction, clarify payment methods and return policy, and surface reviews or trust marks such as Thuiswinkel Waarborg where they apply. Traffic without a trustworthy path to pay wastes acquisition spend.'
          },
          {
            question: 'Can product pages actually rank in search?',
            answer:
              'Yes when titles, content, internal links and technical health match real product intent — and when thin duplicate variants are cleaned up. Ranking takes time and competition varies by niche; we do not promise a fixed position.'
          },
          {
            question: 'How should we advertise with Shopping for profitable ROAS?',
            answer:
              'Start from feed quality, margins and high-intent product queries, then structure Shopping or Performance Max so spend follows products that can carry the cost. We share realistic efficiency trends without guaranteeing a fixed ROAS.'
          },
          {
            question: 'How is this different from marketing a local service business?',
            answer:
              'Webshops sell to a region or nationally through catalogues, feeds and checkout. Local-service hubs lean on map packs and “near me” urgency. This hub centres search demand, product feeds and conversion maths — not workshop diaries or salon bookings.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Webshops & e-commerce',
        serviceName: 'Online marketing voor webshops en e-commerce',
        serviceDescription:
          'Online marketing voor webshops en e-commerce: etalages, catalogus-SEO, Google Shopping en conversie gericht op verkeer, checkout en herhaalaankoop — geen lokale map-pack-SEO.',
        faqs: [
          {
            question: 'Hoe krijgen we meer verkeer naar de webshop?',
            answer:
              'Combineer catalogus-SEO op product- en categoriepagina’s met Shopping of Performance Max waar de feed gezond is, plus sitesnelheid zodat mobiele bezoekers blijven. Landelijke of regionale zoekvraag telt hier zwaarder dan een Google Bedrijfsprofiel-pin voor een straatverzorgingsgebied.'
          },
          {
            question: 'Hoe verhogen we de conversie in de webshop?',
            answer:
              'Los mobiele checkoutwrijving op, maak betaalmethoden en retourbeleid helder, en toon reviews of keurmerken zoals Thuiswinkel Waarborg waar die passen. Verkeer zonder betrouwbaar pad naar betalen verspilt acquisitiebudget.'
          },
          {
            question: 'Kunnen productpagina’s écht ranken in zoeken?',
            answer:
              'Ja wanneer titels, content, interne links en technische gezondheid bij echte productintentie passen — en dunne dubbele varianten zijn opgeschoond. Ranken kost tijd en concurrentie verschilt per niche; we beloven geen vaste positie.'
          },
          {
            question: 'Hoe adverteren we met Shopping voor rendabele ROAS?',
            answer:
              'Begin bij feedkwaliteit, marges en productqueries met hoge intentie, en structureer Shopping of Performance Max zodat spend producten volgt die de kosten kunnen dragen. We delen realistische efficiëntietrends zonder een vaste ROAS te garanderen.'
          },
          {
            question: 'Wat is het verschil met marketing voor een lokale dienstverlener?',
            answer:
              'Webshops verkopen regionaal of landelijk via catalogi, feeds en checkout. Lokale-diensthubs leunen op kaartpacks en “bij mij”-urgentie. Deze hub draait om zoekvraag, productfeeds en conversierekenkunde — geen werkplaatsagenda’s of salonboekingen.'
          }
        ]
      }
    }
  },

  'branches-webshops-website-laten-maken': {
    parents: ['home', 'branches', 'branches-webshops'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Webshop design and development',
      category: 'Web Development',
      offers: [
        { name: 'E-commerce platform advice and build' },
        { name: 'Conversion-focused product and checkout pages' },
        { name: 'Payments, integrations and Shopping feeds' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design',
        serviceName: 'Webshop design and development',
        serviceDescription:
          'Webshop design and development with platform advice, conversion-led product and category pages, checkout and payments, sitespeed, integrations, Shopping feeds and migration planning.',
        faqs: [
          {
            question: 'Which platform is best for my webshop?',
            answer:
              'It depends on catalogue size, custom needs, ops skills and budget shape. Shopify suits many growing catalogues with less server ops; WooCommerce fits WordPress-heavy teams; Lightspeed and Magento serve other scale or B2B patterns. We spell trade-offs in discovery before locking a stack — there is no single best platform for every store.'
          },
          {
            question: 'Can you migrate my existing webshop?',
            answer:
              'Yes. We plan redirects, product and customer data moves, feed continuity and parallel checkout tests so revenue is protected at cutover. Exact risk depends on the old platform and URL structure; we map that before promising a migration window.'
          },
          {
            question: 'How do you raise conversion on the store?',
            answer:
              'We improve product and category clarity, reduce checkout friction, surface payments such as iDEAL and Klarna, speed up mobile templates and place trust signals where shoppers decide. Conversion work is structural — not only a new hero image.'
          },
          {
            question: 'Which payment methods can you connect?',
            answer:
              'Common Dutch and EU methods such as iDEAL, Klarna and card processors, plus others your PSP and platform support. Availability depends on merchant accounts and platform plugins or APIs; we confirm what your stack can take in discovery.'
          },
          {
            question: 'Is the webshop fast on mobile?',
            answer:
              'That is a core requirement. We set image and template budgets aimed at usable Core Web Vitals on phones, because catalogue browsing and many checkouts happen on small screens. Exact scores vary by theme and apps; we treat speed as revenue infrastructure, not a nice-to-have.'
          },
          {
            question: 'Can you connect stock, accounting or shipping software?',
            answer:
              'Where APIs and your tools allow, yes — inventory, accounting, shipping and sometimes PIM. Integration scope is fixed after we map systems so orders do not live in conflicting spreadsheets.'
          },
          {
            question: 'Do you prepare product feeds for Google Shopping?',
            answer:
              'Yes. We structure product data so Shopping and Performance Max can consume clean titles, prices and availability. Feed quality is part of a scale-ready storefront, separate from running the ads themselves on the future Google Ads spoke.'
          },
          {
            question: 'How is this different from a local-service website?',
            answer:
              'A webshop sells through catalogue, cart and payment. Local-service sites sell bookings or enquiries for a catchment. Structures, proof points and success metrics are deliberately different — we do not ship a restaurant or garage template with a cart bolted on.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Webshop laten maken',
        serviceName: 'Webshop laten maken',
        serviceDescription:
          'Webshop laten maken met platformadvies, conversiegerichte product- en categoriepagina’s, checkout en betalingen, sitesnelheid, koppelingen, Shopping-feeds en migratieplanning.',
        faqs: [
          {
            question: 'Welk platform is het beste voor mijn webshop?',
            answer:
              'Dat hangt af van catalogusgrootte, maatwerkbehoefte, operationele skills en budgetvorm. Shopify past bij veel groeiende catalogi met minder serverbeheer; WooCommerce bij WordPress-zware teams; Lightspeed en Magento bedienen andere schaal- of B2B-patronen. We zetten trade-offs in discovery op papier vóór we een stack vastzetten — er is geen universeel beste platform voor elke winkel.'
          },
          {
            question: 'Kunnen jullie mijn bestaande webshop migreren?',
            answer:
              'Ja. We plannen redirects, product- en klantdataverhuizing, feedcontinuïteit en parallelle checkouttests zodat omzet bij cutover beschermd blijft. Exact risico hangt af van het oude platform en de URL-structuur; dat brengen we in kaart vóór we een migratievenster beloven.'
          },
          {
            question: 'Hoe verhogen jullie de conversie?',
            answer:
              'We verbeteren product- en categoriehelderheid, verminderen checkoutwrijving, tonen betaalmethoden zoals iDEAL en Klarna, versnellen mobiele templates en plaatsen vertrouwenssignalen waar shoppers beslissen. Conversiewerk is structureel — niet alleen een nieuwe hero-afbeelding.'
          },
          {
            question: 'Welke betaalmethoden kunnen jullie koppelen?',
            answer:
              'Gangbare NL- en EU-methoden zoals iDEAL, Klarna en card-processors, plus andere die jouw PSP en platform ondersteunen. Beschikbaarheid hangt af van merchant accounts en platformplugins of API’s; we bevestigen wat je stack aankan in discovery.'
          },
          {
            question: 'Is de webshop snel op mobiel?',
            answer:
              'Dat is een kerneis. We zetten beeld- en templatebudgetten gericht op bruikbare Core Web Vitals op telefoons, omdat catalogusbrowsen en veel checkouts op kleine schermen gebeuren. Exacte scores variëren per thema en apps; we behandelen snelheid als omzetinfrastructuur, geen nice-to-have.'
          },
          {
            question: 'Kunnen jullie voorraad-, boekhoud- of verzendsoftware koppelen?',
            answer:
              'Waar API’s en je tools het toelaten, ja — voorraad, boekhouding, verzending en soms PIM. Integratiescope zetten we vast nadat we systemen in kaart hebben, zodat orders niet in conflicterende spreadsheets leven.'
          },
          {
            question: 'Bereiden jullie productfeeds voor Google Shopping voor?',
            answer:
              'Ja. We structureren productdata zodat Shopping en Performance Max schone titels, prijzen en beschikbaarheid kunnen consumeren. Feedkwaliteit hoort bij een schaalbare etalage, los van het draaien van de ads zelf op de toekomstige Google Ads-spoke.'
          },
          {
            question: 'Wat is het verschil met een website voor een lokale dienstverlener?',
            answer:
              'Een webshop verkoopt via catalogus, winkelwagen en betaling. Lokale-dienstsites verkopen boekingen of aanvragen voor een verzorgingsgebied. Structuur, bewijspunten en succesmetrics zijn bewust anders — we leveren geen restaurant- of garagetemplate met een winkelwagen erop geschroefd.'
          }
        ]
      }
    }
  },

  'branches-webshops-lokale-seo': {
    parents: ['home', 'branches', 'branches-webshops'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'SEO for webshops',
      category: 'Digital Marketing',
      offers: [
        { name: 'Product and category page SEO' },
        { name: 'Technical SEO for large catalogues' },
        { name: 'Product schema, CWV and buying guides' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'SEO',
        serviceName: 'SEO for webshops',
        serviceDescription:
          'SEO for webshops focused on product and category pages, technical catalogue SEO, Product and review structured data, Core Web Vitals, buying guides and internal links — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I get my product pages to rank?',
            answer:
              'Give each important SKU unique content where it matters, valid Product structured data, clear titles and internal links from stronger category pages. Thin manufacturer paste across thousands of URLs rarely wins. Progress compounds over months; we do not promise a fixed position.'
          },
          {
            question: 'How do I compete with bol.com and Coolblue in organic search?',
            answer:
              'Compete where your assortment, uniqueness, guides and sitespeed can win share — often on mid-tail product and category intent rather than every head term a marketplace owns. We plan realistic organic share without claiming you will outrank every giant everywhere.'
          },
          {
            question: 'How important is sitespeed for SEO?',
            answer:
              'Very. Core Web Vitals affect both ranking signals and whether shoppers stay on category grids. Slow mobile templates waste crawl and paid traffic alike. We treat CWV as catalogue infrastructure, not a one-off audit PDF.'
          },
          {
            question: 'What do you do with out-of-stock products?',
            answer:
              'We set rules for sold-out and discontinued URLs: avoid soft 404s, offer alternatives or sensible redirects, and protect equity when inventory turns. Exact handling depends on whether the product returns and how important the URL already is.'
          },
          {
            question: 'How long does SEO take for a webshop?',
            answer:
              'Crawl and template fixes can show movement within weeks. Durable category and product relevance usually needs several months of compounding work. Timelines depend on catalogue size, competition and technical debt. We do not guarantee rankings.'
          },
          {
            question: 'Do category pages matter more than product pages?',
            answer:
              'Often yes for commercial family queries. Categories aggregate intent and link equity; products convert the click. Strong SEO programmes improve both, with categories as the ranking engines and products as the conversion layer.'
          },
          {
            question: 'How is this different from SEO for a local service business?',
            answer:
              'Webshop SEO is catalogue, crawl budget, facets and product intent across a region or nationally. Local-service SEO centres map packs and city + service queries. The tactics and success metrics are deliberately different — this page never treats a shop like a street catchment.'
          },
          {
            question: 'Can buying guides help ecommerce SEO?',
            answer:
              'Yes. Guides capture research intent before the SKU click and pass internal links into categories. They help you compete for top-of-funnel queries that marketplaces also target, without replacing solid product and category templates.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'SEO',
        serviceName: 'SEO voor webshops',
        serviceDescription:
          'SEO voor webshops gericht op product- en categoriepagina’s, technische catalogus-SEO, Product- en review structured data, Core Web Vitals, koopgidsen en interne links — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe laat ik mijn productpagina’s ranken?',
            answer:
              'Geef belangrijke SKU’s unieke content waar het telt, valide Product structured data, heldere titels en interne links vanaf sterkere categoriepagina’s. Dunne fabrikantentekst over duizenden URL’s wint zelden. Voortgang stapelt over maanden; we beloven geen vaste positie.'
          },
          {
            question: 'Hoe concurreer ik met bol.com en Coolblue in organisch zoeken?',
            answer:
              'Concurreer waar jouw assortiment, uniciteit, gidsen en sitesnelheid aandeel kunnen winnen — vaak op mid-tail product- en categorie-intentie in plaats van elke head term die een marktplaats bezit. We plannen realistisch organisch aandeel zonder te claimen dat je elke reus overal verslaat.'
          },
          {
            question: 'Hoe belangrijk is sitespeed voor SEO?',
            answer:
              'Zeer. Core Web Vitals raken zowel rankingsignalen als of shoppers op categoriegrids blijven. Trage mobiele templates verspillen crawl én betaald verkeer. We behandelen CWV als catalogusinfrastructuur, geen eenmalig audit-PDF.'
          },
          {
            question: 'Wat doen jullie met uitverkochte producten?',
            answer:
              'We zetten regels voor uitverkochte en discontinue URL’s: soft 404s vermijden, alternatieven of zinvolle redirects bieden, en equity beschermen wanneer voorraad draait. Exacte aanpak hangt af van of het product terugkomt en hoe belangrijk de URL al is.'
          },
          {
            question: 'Hoe lang duurt SEO voor een webshop?',
            answer:
              'Crawl- en templatefixes kunnen binnen weken beweging tonen. Duurzame categorie- en productrelevantie vraagt meestal maanden van compounding werk. Doorlooptijden hangen af van catalogusgrootte, concurrentie en technische schuld. We garanderen geen rankings.'
          },
          {
            question: 'Tellen categoriepagina’s zwaarder dan productpagina’s?',
            answer:
              'Vaak wel voor commerciële familiequeries. Categorieën aggregeren intentie en linkequity; producten converteren de klik. Sterke SEO-programma’s verbeteren beide, met categorieën als rankingmotoren en producten als conversielaag.'
          },
          {
            question: 'Wat is het verschil met SEO voor een lokale dienstverlener?',
            answer:
              'SEO voor webshops draait om catalogus, crawlbudget, facetten en productintentie regionaal of landelijk. SEO voor lokale diensten draait om kaartpacks en stad + dienst-queries. Tactiek en succesmetrics zijn bewust anders — deze pagina behandelt een shop nooit als straatverzorgingsgebied.'
          },
          {
            question: 'Helpen koopgidsen bij e-commerce SEO?',
            answer:
              'Ja. Gidsen vangen onderzoekintentie vóór de SKU-klik en geven interne links door naar categorieën. Ze helpen concurreren om top-of-funnel queries die marktplaatsen ook targetten, zonder solide product- en categorietemplates te vervangen.'
          }
        ]
      }
    }
  },

  'branches-autobedrijven-website-laten-maken': {
    parents: ['home', 'branches', 'branches-autobedrijven'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for car dealers and garages',
      category: 'Web Development',
      offers: [
        { name: 'Occasion stock with filters' },
        { name: 'Portal sync for dealer inventory' },
        { name: 'APK and maintenance booking online' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design',
        serviceName: 'Website design for car dealers and garages',
        serviceDescription:
          'Car dealer and garage website design with filterable occasion stock, portal sync where possible, trade-in and finance requests, online APK booking, workshop services, reviews and mobile paths for drivers.',
        faqs: [
          {
            question: 'Can my stock sync with AutoScout24 or Marktplaats?',
            answer:
              'Where your stack and portal feeds allow, we connect published listings so the website shows the same cars as AutoScout24, Marktplaats, Gaspedaal or similar — without retyping every arrival. Exact connectors depend on your DMS, feed format and portal contracts; we map that in discovery before promising a specific integration.'
          },
          {
            question: 'Can customers book an APK or maintenance appointment online?',
            answer:
              'Yes. We put APK, service, tyre and similar workshop requests on paths drivers can reach from a phone in one or two taps, separate from occasion enquiry so urgent maintenance does not hide behind stock carousels. Booking tooling can be a form-to-diary flow or a calendar integration depending on how your workshop already plans slots.'
          },
          {
            question: 'Can I offer trade-in and finance requests on the site?',
            answer:
              'Yes. Per vehicle or site-wide forms capture trade-in valuation and finance conversation requests with the car reference attached, so sales can follow up without hunting a private mobile number. This is a lead path for high-value stock — not an in-cart checkout like a webshop.'
          },
          {
            question: 'How do I show reviews so drivers trust the garage?',
            answer:
              'We place recent, specific driver reviews next to APK booking and stock CTAs so trust sits where scanners decide. That reduces the fear of opaque bills when two garages look the same on Maps. We do not invent ratings; we surface authentic proof you already have or are building.'
          },
          {
            question: 'Does the occasion module work well on mobile?',
            answer:
              'Yes. Filters for make, model, price, year and mileage, stock cards and enquire CTAs are built for one-thumb use — because most people browse occasions or search a garage between errands on their phone. If filters break on a small screen, stock hunters leave for a portal that already works.'
          },
          {
            question: 'Is this the same as building a webshop?',
            answer:
              'No. A dealer site manages high-value, low-volume inventory that is often synced from portals and sold via enquiry, viewing and finance — not a shopping cart for low-ticket SKUs. Workshop booking is a second revenue engine. Treating it like generic e-commerce usually ships the wrong checkout and the wrong trust signals.'
          },
          {
            question: 'Can I show brand specialisation and workshop services clearly?',
            answer:
              'Yes. Brand focus pages and plain-language blocks for APK, maintenance, repairs, tyres and airco help drivers see what you actually do before they call. Clear service layout is part of winning drivers who fear a “expensive garage” without knowing what is included.'
          },
          {
            question: 'How long does a car dealer or garage website project take?',
            answer:
              'Most dealer-garage sites launch in about four to eight weeks, depending on feed complexity, booking tooling, workshop service depth and content readiness. Discovery starts with how stock and APK enquiries arrive today so we do not ship a generic brochure template.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken',
        serviceName: 'Website laten maken voor autobedrijven',
        serviceDescription:
          'Website laten maken voor autobedrijven en garages met filterbare occasionvoorraad, portalsync waar mogelijk, inruil- en financieringsaanvraag, online APK-boeking, werkplaatsdiensten, reviews en mobiele paden voor automobilisten.',
        faqs: [
          {
            question: 'Kan mijn voorraad koppelen met AutoScout24 of Marktplaats?',
            answer:
              'Waar je stack en portalfeeds het toelaten, koppelen we gepubliceerde listings zodat de website dezelfde auto’s toont als AutoScout24, Marktplaats, Gaspedaal of vergelijkbaar — zonder elke binnenkomst opnieuw in te typen. Exacte connectors hangen af van je DMS, feedformaat en portalcontracten; dat brengen we in discovery in kaart vóór we een specifieke koppeling beloven.'
          },
          {
            question: 'Kunnen klanten online een APK of onderhoud boeken?',
            answer:
              'Ja. We zetten APK-, onderhoud-, banden- en vergelijkbare werkplaatsaanvragen op paden die automobilisten vanaf de telefoon in één of twee tikken bereiken, gescheiden van occasionaanvraag zodat spoedonderhoud niet verstopt achter voorraadcarrousels. Boekingstools kunnen form-naar-agenda of een kalenderintegratie zijn, afhankelijk van hoe jullie werkplaats slots al plant.'
          },
          {
            question: 'Kan ik inruil en financiering aanbieden op de site?',
            answer:
              'Ja. Forms per auto of sitebreed vangen inruilwaardering en financieringsgesprekken met de autoreferentie erbij, zodat verkoop kan opvolgen zonder een privénummer te zoeken. Dit is een leadpad voor hoogwaardige voorraad — geen winkelwagen-afrekenen zoals in een webshop.'
          },
          {
            question: 'Hoe toon ik reviews zodat automobilisten de garage vertrouwen?',
            answer:
              'We plaatsen recente, specifieke reviews naast APK-boeking en voorraad-CTA’s, zodat vertrouwen staat waar scanners beslissen. Dat dempt de angst voor ondoorzichtige nota’s wanneer twee garages op Maps hetzelfde ogen. We verzinnen geen scores; we tonen authentiek bewijs dat jullie al hebben of aan het opbouwen zijn.'
          },
          {
            question: 'Werkt de occasionmodule goed op mobiel?',
            answer:
              'Ja. Filters op merk, model, prijs, bouwjaar en kilometerstand, voorraadkaartjes en aanvraag-CTA’s zijn gebouwd voor één duim — omdat de meeste mensen occasions scrollen of een garage zoeken tussen boodschappen op de telefoon. Als filters op een klein scherm breken, vertrekken voorraadzoekers naar een portal die wél werkt.'
          },
          {
            question: 'Is dit hetzelfde als een webshop laten bouwen?',
            answer:
              'Nee. Een dealersite beheert hoogwaardige, laagvolumige voorraad die vaak vanuit portals synct en via aanvraag, bezichtiging en financiering verkocht wordt — geen winkelwagen voor goedkope SKU’s. Werkplaatsboeking is een tweede omzetmotor. Het als generieke e-commerce behandelen levert meestal de verkeerde checkout en de verkeerde vertrouwenssignalen op.'
          },
          {
            question: 'Kan ik merkspecialisatie en werkplaatsdiensten helder tonen?',
            answer:
              'Ja. Merkfocuspagina’s en begrijpelijke blokken voor APK, onderhoud, reparatie, banden en airco helpen automobilisten zien wat jullie écht doen vóór ze bellen. Heldere dienstenopbouw hoort bij het winnen van mensen die bang zijn voor een “dure garage” zonder te weten wat erin zit.'
          },
          {
            question: 'Hoe lang duurt een website-traject voor een autobedrijf?',
            answer:
              'De meeste dealer-garagesites gaan in ongeveer vier tot acht weken live, afhankelijk van feedcomplexiteit, boekingstools, werkplaatsdiepte en contentklaarheid. Discovery begint bij hoe voorraad- en APK-aanvragen nu binnenkomen, zodat we geen generiek brochuretemplate opleveren.'
          }
        ]
      }
    }
  },

  'branches-autobedrijven-lokale-seo': {
    parents: ['home', 'branches', 'branches-autobedrijven'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for car dealers and garages',
      category: 'Digital Marketing',
      offers: [
        { name: 'Garage Google Business Profile with workshop services' },
        { name: 'APK and service + city landing pages' },
        { name: 'Review growth and seasonal workshop keywords' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO',
        serviceName: 'Local SEO for car dealers and garages',
        serviceDescription:
          'Local SEO for car dealers and garages focused on workshop Google Business Profile, APK and service + city pages, reviews against bill fear and seasonal tyre and airco search — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I rank at the top for APK in my city?',
            answer:
              'Strengthen Google Business Profile with APK and workshop services, accurate hours, yard photos and recent garage reviews, then support that with an APK + city page that matches how drivers search. Local-pack visibility compounds over time; we do not promise a fixed map position.'
          },
          {
            question: 'How do I get more garage reviews?',
            answer:
              'Ask after APK and maintenance with a short Google review link and a habit tied to job close-out. Recent, specific workshop reviews calm the fear of an expensive or unreliable garage — often the deciding factor when two yards look equal on Maps distance.'
          },
          {
            question: 'Can I rank per service such as tyres or airco?',
            answer:
              'Yes. We build service + city signals for APK, maintenance, tyre change and airco refill so Maps and organic clicks land on the right workshop story. Seasonal posts help when those queries spike; we still avoid promising you will own every seasonal term.'
          },
          {
            question: 'Does local SEO also help occasion sales?',
            answer:
              'It can support brand discovery when someone searches a dealer or garage in their city, but occasion browsing is often make/model-led and starts on portals. Local SEO usually carries more weight for the workshop engine — APK, repairs, tyres and airco — than for stock sold via marketplace listings. We keep that split explicit in the plan.'
          },
          {
            question: 'How long does local SEO take for a car dealer or garage?',
            answer:
              'GBP and call-action improvements often show within a few weeks. Stable relevance for competitive “APK [city]” or “garage [city]” terms usually needs several months. Timelines depend on competition and how complete your profile is today. We do not promise a fixed map-pack place.'
          },
          {
            question: 'How is this different from an automotive website project?',
            answer:
              'Local SEO is about being found in Maps and local search when someone needs a bay or an APK slot. The website spoke converts that traffic with stock filters, portal sync and online booking. They support each other; this page covers findability for workshop demand.'
          },
          {
            question: 'What if we have multiple locations?',
            answer:
              'We structure categories, NAP and location pages so each yard competes for its city without mixed signals that confuse Maps about which site books the APK. Multi-location scope is set after we map how diaries and phones work per site.'
          },
          {
            question: 'Do seasonal tyre and airco peaks matter for local SEO?',
            answer:
              'Yes. Spring and autumn tyre change, summer airco and pre-holiday checks create predictable search spikes. We align GBP posts and local pages with those windows in your city without claiming you will win every seasonal query.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO',
        serviceName: 'Lokale SEO voor autobedrijven',
        serviceDescription:
          'Lokale SEO voor autobedrijven en garages gericht op werkplaats Google Bedrijfsprofiel, APK- en dienst- + stadspagina’s, reviews tegen nota-angst en seizoenszoeken voor banden en airco — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe kom ik bovenaan voor APK in mijn stad?',
            answer:
              'Versterk Google Bedrijfsprofiel met APK- en werkplaatsdiensten, accurate uren, terreinfoto’s en recente garagereviews, en ondersteun dat met een APK + stad-pagina die past bij hoe automobilisten zoeken. Local-packzichtbaarheid stapelt over tijd; we beloven geen vaste kaartpositie.'
          },
          {
            question: 'Hoe krijg ik meer garagereviews?',
            answer:
              'Vraag na APK en onderhoud met een korte Google-reviewlink en een gewoonte gekoppeld aan klusafsluiting. Recente, specifieke werkplaatsreviews dempen de angst voor een dure of onbetrouwbare garage — vaak de doorslag wanneer twee terreinen op Maps-afstand gelijk ogen.'
          },
          {
            question: 'Kan ik ranken per dienst zoals banden of airco?',
            answer:
              'Ja. We bouwen dienst + stad-signalen voor APK, onderhoud, bandenwissel en airco bijvullen zodat Maps- en organische klikken op het juiste werkplaatsverhaal landen. Seizoensposts helpen wanneer die queries pieken; we beloven nog steeds niet dat je elke seizoensterm bezit.'
          },
          {
            question: 'Helpt lokale SEO ook voor occasionverkoop?',
            answer:
              'Het kan merkontdekking ondersteunen wanneer iemand een dealer of garage in hun stad zoekt, maar occasionbrowsen is vaak merk-/modelgericht en start op portals. Lokale SEO weegt meestal zwaarder voor de werkplaatsmotor — APK, reparatie, banden en airco — dan voor voorraad via marktplaatslistings. Die scheiding maken we expliciet in het plan.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een autobedrijf?',
            answer:
              'GBP- en belactieverbeteringen zie je vaak binnen enkele weken. Stabiele relevantie voor concurrerende “APK [stad]”- of “garage [stad]”-termen vraagt meestal maanden. Doorlooptijden hangen af van concurrentie en hoe compleet je profiel vandaag is. We beloven geen vaste kaartpackplek.'
          },
          {
            question: 'Wat is het verschil met een autobedrijfwebsite-traject?',
            answer:
              'Lokale SEO gaat over gevonden worden in Maps en lokaal zoeken wanneer iemand een brug of APK-plek nodig heeft. De websitespoke zet dat verkeer om met voorraadfilters, portalsync en online boeken. Ze versterken elkaar; deze pagina gaat over vindbaarheid voor werkplaatsvraag.'
          },
          {
            question: 'Wat als we meerdere vestigingen hebben?',
            answer:
              'We structureren categorieën, NAP en locatiepagina’s zodat elk terrein om zijn stad concurreert zonder gemengde signalen die Maps verwarren over welke vestiging de APK boekt. Scope voor meerdere locaties zetten we vast nadat we agenda’s en telefoons per vestiging in kaart hebben.'
          },
          {
            question: 'Tellen seizoenspieken voor banden en airco mee voor lokale SEO?',
            answer:
              'Ja. Bandenwissel in voorjaar en najaar, airco in de zomer en vakantiechecks creëren voorspelbare zoekpieken. We stemmen GBP-posts en lokale pagina’s af op die vensters in jouw stad, zonder te claimen dat je elke seizoensquery wint.'
          }
        ]
      }
    }
  },

  'branches-boekhouders-website-laten-maken': {
    parents: ['home', 'branches', 'branches-boekhouders'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for accountants',
      category: 'Web Development',
      offers: [
        { name: 'Accounting service and niche pages' },
        { name: 'Software trust signals for bookkeepers' },
        { name: 'B2B introduction intake for accounting firms' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design for accountants',
        serviceName: 'Website design for accountants',
        serviceDescription:
          'Accountant and bookkeeper website design with clear services, branch niches, software signals, package structure without prices, B2B intake, client portal explainers and entrepreneur references.',
        faqs: [
          {
            question: 'Can I show specialisations per industry niche?',
            answer:
              'Yes. We structure pages or sections for niches such as freelancers, hospitality, e-commerce and SMEs so entrepreneurs recognise their world before they request an introduction. That self-selection improves lead quality for a long-term relationship.'
          },
          {
            question: 'Can I mention the software I work with?',
            answer:
              'Yes. Naming Exact, Twinfield, Moneybird, e-Boekhouden or similar where you actually work is a strong trust and compatibility signal. Entrepreneurs already living in that stack often choose the firm that speaks their tools.'
          },
          {
            question: 'How do I attract the right clients with the website?',
            answer:
              'Lead with who you serve best, which services fit which company type, and how packages are shaped — then use a B2B intake that captures company type, software and needs. Quality rises when poor fits self-select out before onboarding.'
          },
          {
            question: 'Can I show packages without publishing prices?',
            answer:
              'Yes. We present monthly package tiers with what is included and who each package suits, without figures on the page. Entrepreneurs understand the relationship shape, then request a quote for their situation.'
          },
          {
            question: 'Does this work for a sole practitioner or a larger firm?',
            answer:
              'Yes. Scope scales from an essential practice site for a focused bookkeeping practice to niche-ready or multi-advisor builds. We map services, niches and intake before fixing deliverables.'
          },
          {
            question: 'Should the site explain a client portal or document handover?',
            answer:
              'Usually yes. Plain language on how invoices, bank files and payroll docs reach your office reduces switching anxiety. Entrepreneurs want the handover to feel organised, not chaotic.'
          },
          {
            question: 'How long does an accountant website project take?',
            answer:
              'Most practice websites launch in about four to eight weeks, depending on niche and service depth, package structure and content readiness. Discovery starts with how introductions arrive so we do not ship a generic clinic template.'
          },
          {
            question: 'How is this different from a law firm website?',
            answer:
              'Accounting sites sell an ongoing B2B relationship around books, tax seasons and software fit. Law firm sites centre practice areas, discreet consultation and case-driven urgency. The structures and proof points are deliberately different.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken voor boekhouders',
        serviceName: 'Website laten maken voor boekhouders',
        serviceDescription:
          'Boekhouders- en accountantswebsite laten maken met heldere diensten, brancheniches, softwaresignalen, pakketstructuur zonder prijzen, B2B-intake, klantportaaluitleg en ondernemersreferenties.',
        faqs: [
          {
            question: 'Kan ik mijn specialisaties per branche tonen?',
            answer:
              'Ja. We structureren pagina’s of secties voor niches zoals zzp, horeca, e-commerce en mkb, zodat ondernemers hun wereld herkennen vóór ze een kennismaking aanvragen. Die zelfselectie verbetert leadkwaliteit voor een langdurige relatie.'
          },
          {
            question: 'Kan ik mijn software vermelden?',
            answer:
              'Ja. Exact, Twinfield, Moneybird, e-Boekhouden of vergelijkbaar noemen waar jullie écht in werken is een sterk vertrouwens- en compatibiliteitssignaal. Ondernemers die al in die stack leven kiezen vaak het kantoor dat hun tools spreekt.'
          },
          {
            question: 'Hoe trek ik de juiste klanten aan via de website?',
            answer:
              'Zet voorop wie je het beste bedient, welke diensten bij welk bedrijfstype passen, en hoe pakketten zijn opgebouwd — en gebruik een B2B-intake die bedrijfstype, software en behoefte vastlegt. Kwaliteit stijgt wanneer slechte fits zichzelf eruit filteren vóór onboarding.'
          },
          {
            question: 'Kan ik pakketten tonen zonder prijzen?',
            answer:
              'Ja. We presenteren maandpakketten met wat erin zit en voor wie elk pakket past, zonder bedragen op de pagina. Ondernemers snappen de vorm van de relatie en vragen daarna een offerte voor hun situatie.'
          },
          {
            question: 'Werkt dit voor een eenmanszaak of groter kantoor?',
            answer:
              'Ja. De scope schaalt van een essentiële praktijksite voor een gerichte boekhoudpraktijk tot nicheklare of multi-adviseursbuilds. We brengen diensten, niches en intake in kaart vóór we deliverables vastzetten.'
          },
          {
            question: 'Moet de site een klantportaal of documentaanlevering uitleggen?',
            answer:
              'Meestal wel. Begrijpelijke taal over hoe facturen, bankbestanden en loonstukken jullie kantoor bereiken vermindert wisselangst. Ondernemers willen dat de overdracht georganiseerd voelt, niet chaotisch.'
          },
          {
            question: 'Hoe lang duurt het om een boekhouderswebsite te laten maken?',
            answer:
              'De meeste praktijksites gaan in ongeveer vier tot acht weken live, afhankelijk van niche- en dienstdiepte, pakketstructuur en contentklaarheid. Discovery begint bij hoe kennismakingen binnenkomen, zodat we geen generiek kliniektemplate opleveren.'
          },
          {
            question: 'Wat is het verschil met een advocatenwebsite?',
            answer:
              'Accountancysites verkopen een lopende B2B-relatie rond boeken, aangifteseizoenen en softwarefit. Advocatenwebsites draaien om rechtsgebieden, discreet consult en zaakgedreven urgentie. Structuur en bewijspunten zijn bewust anders.'
          }
        ]
      }
    }
  },

  'branches-boekhouders-lokale-seo': {
    parents: ['home', 'branches', 'branches-boekhouders'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for accountants',
      category: 'Digital Marketing',
      offers: [
        { name: 'Google Business Profile for accounting practices' },
        { name: 'City and niche landing pages for bookkeepers' },
        { name: 'Entrepreneur review growth for accountants' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO for accountants',
        serviceName: 'Local SEO for accountants',
        serviceDescription:
          'Local SEO for accountants and bookkeepers focused on bookkeeper + city search, Google Business Profile, entrepreneur reviews, niche pages and owned visibility against national platforms — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I get found as a bookkeeper in my city?',
            answer:
              'Strengthen Google Business Profile with accurate categories, office photos and a clear website or call action, then support that with city landing pages and recent entrepreneur reviews. Consistent NAP citations help Maps and organic search match “bookkeeper [city]”. We do not promise a fixed ranking.'
          },
          {
            question: 'Can I rank on a branch specialisation?',
            answer:
              'Yes, where your practice truly serves that niche. We align GBP, local pages and content with phrases such as hospitality bookkeeper or e-commerce bookkeeping plus your city — so café owners and webshop founders land on a specialised signal, not only a generic city pin.'
          },
          {
            question: 'How do I get reviews from clients?',
            answer:
              'Ask after a settled working relationship — once onboarding is calm — with a short Google review link and a habit your team can repeat. Entrepreneur reviews carry weight for the next freelancer or SME comparing local practices.'
          },
          {
            question: 'Does local SEO work if I work online or remotely?',
            answer:
              'Yes. Many clients collaborate online yet still search locally for trust. A complete GBP and city pages help distance-friendly practices win the regional shortlist without pretending you only serve one street.'
          },
          {
            question: 'How long does local SEO take for an accounting practice?',
            answer:
              'GBP and action improvements often show within a few weeks. Stable relevance for competitive “bookkeeper [city]” terms usually needs several months of consistent work. Timelines depend on competition from local firms and national platforms. We do not promise a fixed map position.'
          },
          {
            question: 'How is this different from an accountant website?',
            answer:
              'Local SEO is about being found in Maps and local search for city and niche queries. The website spoke converts that traffic with services, software signals and B2B intake. They support each other; this page covers findability.'
          },
          {
            question: 'How do we compete with national online bookkeeping brands?',
            answer:
              'National platforms will keep appearing. Local SEO builds owned GBP and organic signals so high-lifetime-value regional clients are not only rented from listing sites. Strong city and niche pages reduce dependence on marketplace leads over time.'
          },
          {
            question: 'Should we plan around tax filing season?',
            answer:
              'Yes. Filing and annual-accounts peaks are when many entrepreneurs compare bookkeepers. We align GBP posts and local content with those seasons without promising you will own every seasonal query.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO voor boekhouders',
        serviceName: 'Lokale SEO voor boekhouders',
        serviceDescription:
          'Lokale SEO voor boekhouders en accountants gericht op boekhouder + stad-zoeken, Google Bedrijfsprofiel, ondernemersreviews, nichepagina’s en owned zichtbaarheid tegen landelijke platforms — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe word ik gevonden als boekhouder in mijn stad?',
            answer:
              'Versterk Google Bedrijfsprofiel met juiste categorieën, kantoorfoto’s en een duidelijke website- of belactie, en ondersteun dat met stadslandingspagina’s en recente ondernemersreviews. Consistente NAP-citations helpen Maps en organisch zoeken bij “boekhouder [stad]”. We beloven geen vaste ranking.'
          },
          {
            question: 'Kan ik ranken op een branche-specialisatie?',
            answer:
              'Ja, waar jullie praktijk die niche echt bedient. We stemmen GBP, lokale pagina’s en content af op frases zoals boekhouder horeca of e-commerce-boekhouding plus jullie stad — zodat caféhouders en webshopondernemers op een gespecialiseerd signaal landen, niet alleen op een generieke stadspin.'
          },
          {
            question: 'Hoe krijg ik reviews van klanten?',
            answer:
              'Vraag na een ingespeelde samenwerking — zodra onboarding rustig loopt — met een korte Google-reviewlink en een gewoonte die het team kan herhalen. Ondernemersreviews wegen zwaar voor de volgende zzp’er of mkb’er die lokale praktijken vergelijkt.'
          },
          {
            question: 'Werkt lokale SEO als ik online werk?',
            answer:
              'Ja. Veel klanten werken op afstand maar zoeken toch lokaal uit vertrouwen. Een compleet GBP en stadspagina’s helpen afstandsvriendelijke praktijken de regionale shortlist te winnen zonder te veinzen dat je alleen één straat bedient.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een accountancypraktijk?',
            answer:
              'GBP- en actieverbeteringen zie je vaak binnen enkele weken. Stabiele relevantie op concurrerende “boekhouder [stad]”-termen vraagt meestal enkele maanden consistent werk. Doorlooptijden hangen af van concurrentie van lokale kantoren en landelijke platforms. We beloven geen vaste kaartpositie.'
          },
          {
            question: 'Wat is het verschil met een boekhouderswebsite laten maken?',
            answer:
              'Lokale SEO gaat over gevonden worden in Maps en lokaal zoeken op stad- en nichequeries. De websitespoke zet dat verkeer om met diensten, softwaresignalen en B2B-intake. Ze versterken elkaar; deze pagina gaat over vindbaarheid.'
          },
          {
            question: 'Hoe concurreren we met landelijke online boekhoudpartijen?',
            answer:
              'Landelijke platforms blijven verschijnen. Lokale SEO bouwt owned GBP- en organische signalen zodat klanten met hoge levensduurwaarde niet alleen via listings worden gehuurd. Sterke stads- en nichepagina’s verminderen op termijn de afhankelijkheid van marktplaatsleads.'
          },
          {
            question: 'Moeten we plannen rond aangifteseizoen?',
            answer:
              'Ja. Aangifte- en jaarrekeningpieken zijn momenten waarop veel ondernemers boekhouders vergelijken. We stemmen GBP-posts en lokale content af op die seizoenen zonder te beloven dat je elke seizoensquery bezit.'
          }
        ]
      }
    }
  },

  'branches-advocaten-notarissen-website-laten-maken': {
    parents: ['home', 'branches', 'branches-advocaten-notarissen'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for law firms',
      category: 'Web Development',
      offers: [
        { name: 'Practice-area pages for law firms' },
        { name: 'Lawyer and notary profile pages' },
        { name: 'Discreet legal consultation intake' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design for law firms',
        serviceName: 'Website design for law firms',
        serviceDescription:
          'Law firm website design with practice-area pages, lawyer and notary profiles, authority signals, discreet consultation intake, process explainers, notarial tariff and deed-quote paths, and multilingual options for expat clients.',
        faqs: [
          {
            question: 'How do I project authority online as a law firm?',
            answer:
              'Lead with clear practice-area pages, calm professional lawyer profiles, publications and visible memberships such as the Netherlands Bar and specialised associations. Pair that with a discreet consultation path. Stock gavels and aggressive claim banners undermine the seriousness clients look for at a stressful moment.'
          },
          {
            question: 'Can I get a separate page per practice area?',
            answer:
              'Yes. We structure dedicated pages for areas such as employment law, family law and divorce, corporate law, personal injury, real estate and notarial conveyancing. Each page explains who you help, typical matters and the first step — so searchers land on specialisation, not a single vague list.'
          },
          {
            question: 'How do I get better-qualified case enquiries from the website?',
            answer:
              'Match landing pages to the problem someone is googling, ask a short intake that covers practice area and urgency without fishing for privileged detail, and make confidential callback options obvious. Quality rises when tyre-kickers self-select before they hit the diary.'
          },
          {
            question: 'Can the site be multilingual for expat clients?',
            answer:
              'Yes, where your practice serves international clients. We add English or other locale versions of key practice and contact pages, with a language switch that respects locale URLs so expats facing divorce, employment or conveyancing can engage without guessing.'
          },
          {
            question: 'Does this also work for a notary office?',
            answer:
              'Yes. Notarial sites need clear information on residential conveyancing and wills, indicative tariff context where appropriate, and a structured quote request for deeds. We keep lawyer and notary journeys distinct when a firm offers both.'
          },
          {
            question: 'How should case intake protect confidentiality?',
            answer:
              'Forms should capture enough to triage — practice area, urgency, a short matter summary — without inviting privileged detail into an open web field. We design intake so the right desk can respond while confidentiality stays intact.'
          },
          {
            question: 'How long does a law firm website project take?',
            answer:
              'Most firm websites launch in about four to eight weeks, depending on the number of practice pages, profile depth, notarial quote tooling and content readiness. Discovery starts with your practice map and intake rules so we do not build a generic clinic-style template.'
          },
          {
            question: 'Should we show memberships and publications on the site?',
            answer:
              'Yes. Orde van Advocaten, specialised associations, KNB for notaries, publications and speaking engagements are authority signals clients scan for. We place them where they support trust next to profiles and practice pages — not buried in a footer.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken voor advocaten',
        serviceName: 'Website laten maken voor advocaten',
        serviceDescription:
          'Advocatenwebsite laten maken met rechtsgebiedpagina’s, advocaat- en notarisprofielen, autoriteitssignalen, discrete consultintake, procesuitleg, notariële tarief- en akteoffertepaden, en meertalige opties voor expats.',
        faqs: [
          {
            question: 'Hoe straal ik autoriteit uit online als advocatenkantoor?',
            answer:
              'Zet heldere rechtsgebiedpagina’s, rustige professionele advocaatprofielen, publicaties en zichtbare lidmaatschappen zoals de Orde van Advocaten en specialisatieverenigingen voorop. Koppel dat aan een discreet consultpad. Stockhamers en agressieve claimbanners ondermijnen de ernst die cliënten zoeken op een stressvol moment.'
          },
          {
            question: 'Kan ik per rechtsgebied een pagina krijgen?',
            answer:
              'Ja. We structureren dedicated pagina’s voor onder meer arbeidsrecht, familierecht en echtscheiding, ondernemingsrecht, letselschade, vastgoed en notariële overdracht. Elke pagina legt uit wie je helpt, typische zaken en de eerste stap — zodat zoekers op specialisatie landen, niet op één vage lijst.'
          },
          {
            question: 'Hoe krijg ik betere zaakaanvragen via de website?',
            answer:
              'Koppel landingspagina’s aan het probleem dat iemand googelt, stel een korte intake in die rechtsgebied en urgentie dekt zonder naar privileged detail te vissen, en maak vertrouwelijk terugbellen duidelijk. Kwaliteit stijgt wanneer shoppers zichzelf filteren vóór ze in de agenda landen.'
          },
          {
            question: 'Kan de site meertalig zijn voor expats?',
            answer:
              'Ja, waar jullie praktijk internationale cliënten bedient. We voegen Engelse of andere locale-versies toe van kernpagina’s over rechtsgebied en contact, met een taalswitch die locale-URL’s respecteert zodat expats bij echtscheiding, arbeid of overdracht niet hoeven te gokken.'
          },
          {
            question: 'Geldt dit ook voor een notariskantoor?',
            answer:
              'Ja. Notariële sites hebben heldere informatie nodig over woningoverdracht en testamenten, indicatieve tariefcontext waar passend, en een gestructureerde offerte-aanvraag voor aktes. We houden advocaat- en notarisreizen onderscheiden wanneer een kantoor beide aanbiedt.'
          },
          {
            question: 'Hoe beschermt zaakintake de vertrouwelijkheid?',
            answer:
              'Formulieren moeten genoeg vastleggen om te triëren — rechtsgebied, urgentie, een korte zaakomschrijving — zonder privileged detail in een open webveld te lokken. We ontwerpen intake zodat het juiste bureau kan reageren terwijl vertrouwelijkheid intact blijft.'
          },
          {
            question: 'Hoe lang duurt het om een advocatenwebsite te laten maken?',
            answer:
              'De meeste kantoorwebsites gaan in ongeveer vier tot acht weken live, afhankelijk van het aantal rechtsgebiedpagina’s, profieldiepte, notariële offertetools en contentklaarheid. Discovery begint bij jullie praktijklkaart en intakeregels, zodat we geen generiek kliniektemplate bouwen.'
          },
          {
            question: 'Moeten we lidmaatschappen en publicaties op de site tonen?',
            answer:
              'Ja. Orde van Advocaten, specialisatieverenigingen, KNB voor notarissen, publicaties en spreekbeurten zijn autoriteitssignalen waarnaar cliënten scannen. We plaatsen ze waar ze vertrouwen steunen naast profielen en rechtsgebiedpagina’s — niet begraven in een footer.'
          }
        ]
      }
    }
  },

  'branches-advocaten-notarissen-lokale-seo': {
    parents: ['home', 'branches', 'branches-advocaten-notarissen'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for law firms',
      category: 'Digital Marketing',
      offers: [
        { name: 'Google Business Profile for law firms' },
        { name: 'Practice area and city landing pages' },
        { name: 'Ethical review growth for legal practices' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO for law firms',
        serviceName: 'Local SEO for law firms',
        serviceDescription:
          'Local SEO for law firms and notaries focused on practice area + city search, Google Business Profile, ethical review habits, authority signals and owned visibility against directories — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I rank for a practice area and city?',
            answer:
              'Combine a complete Google Business Profile with dedicated practice + city landing pages — for example employment lawyer Amsterdam or divorce lawyer in your town — plus consistent NAP citations and authority signals. Thin stubs rarely work; useful local practice pages with matching GBP categories send clearer signals. We do not promise a fixed ranking.'
          },
          {
            question: 'May I ask clients for reviews as a lawyer?',
            answer:
              'Often yes, but carefully. Sensitive family, employment or criminal matters need ethical and privacy boundaries. We design request habits that invite feedback where appropriate — after a closed matter, with informed consent — and never pressure parties mid-dispute. Your firm’s disciplinary rules always come first.'
          },
          {
            question: 'How do I build authority in Google as a law firm?',
            answer:
              'Strengthen GBP with accurate categories and office photos, publish practice + city pages, show Bar and association memberships, and grow recent reviews within ethical limits. Publications and clear specialisation descriptors support relevance for specialist searches — without guaranteeing a map-pack place.'
          },
          {
            question: 'Does this also apply to a notary office?',
            answer:
              'Yes. Notarial search around conveyancing and wills is strongly local and price-comparing. We align GBP and local pages with “notary [city]”, deed and will intent so buyers and sellers comparing offices find clear local information first.'
          },
          {
            question: 'How long does local SEO take for a law firm?',
            answer:
              'GBP and action improvements often show within a few weeks. Stable relevance for competitive practice + city terms usually needs several months of consistent work. Timelines depend on competition, directory noise and how complete your profile already is. We do not promise a fixed map position.'
          },
          {
            question: 'How is this different from a law firm website?',
            answer:
              'Local SEO is about being found in Maps and local search for practice + city queries. The website spoke converts that traffic with practice pages, profiles and discreet intake. They support each other; this page covers findability.'
          },
          {
            question: 'How do we compete with lawyer directories and comparison sites?',
            answer:
              'Directories will keep appearing. Local SEO builds owned GBP and organic signals so qualified enquiries are not only rented from listing platforms. Strong practice + city pages and a complete firm profile reduce dependence on paid directory leads over time.'
          },
          {
            question: 'What if we have multiple offices or specialised lawyers?',
            answer:
              'We structure profiles, categories and local pages so each location and specialisation keeps a clear signal — avoiding one desk cannibalising another when employment, family and notarial paths share a brand.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO voor advocaten',
        serviceName: 'Lokale SEO voor advocaten',
        serviceDescription:
          'Lokale SEO voor advocaten en notarissen gericht op rechtsgebied + stad-zoeken, Google Bedrijfsprofiel, ethische reviewgewoontes, autoriteitssignalen en owned zichtbaarheid tegen directories — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe rank ik per rechtsgebied en stad?',
            answer:
              'Combineer een compleet Google Bedrijfsprofiel met dedicated rechtsgebied + stad-landingspagina’s — bijvoorbeeld arbeidsrecht advocaat Amsterdam of echtscheidingsadvocaat in jullie stad — plus consistente NAP-citations en autoriteitssignalen. Dunne stubs werken zelden; nuttige lokale praktijkpagina’s met passende GBP-categorieën sturen duidelijkere signalen. We beloven geen vaste ranking.'
          },
          {
            question: 'Mag ik cliëntreviews vragen als advocaat?',
            answer:
              'Vaak wel, maar voorzichtig. Gevoelige familie-, arbeids- of strafzaken vragen om ethische en privacygrenzen. We ontwerpen verzoekgewoontes die feedback uitnodigen waar passend — na een afgeronde zaak, met geïnformeerde toestemming — en nooit partijen onder druk zetten midden in een conflict. Jullie tuchtregels gaan altijd voor.'
          },
          {
            question: 'Hoe bouw ik autoriteit op in Google als advocatenkantoor?',
            answer:
              'Versterk GBP met juiste categorieën en kantoorfoto’s, publiceer rechtsgebied + stad-pagina’s, toon Orde- en verenigingslidmaatschappen, en groei recente reviews binnen ethische grenzen. Publicaties en heldere specialisatieomschrijvingen steunen relevantie voor specialistzoeken — zonder een kaartpackplek te garanderen.'
          },
          {
            question: 'Geldt dit ook voor een notariskantoor?',
            answer:
              'Ja. Notarieel zoeken rond woningoverdracht en testamenten is sterk lokaal en prijsvergelijkend. We stemmen GBP en lokale pagina’s af op “notaris [stad]”, akte- en testamentintentie zodat kopers en verkopers die kantoren vergelijken eerst heldere lokale informatie vinden.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een advocatenkantoor?',
            answer:
              'GBP- en actieverbeteringen zie je vaak binnen enkele weken. Stabiele relevantie op concurrerende rechtsgebied + stad-termen vraagt meestal enkele maanden consistent werk. Doorlooptijden hangen af van concurrentie, directoryruis en hoe compleet je profiel al is. We beloven geen vaste kaartpositie.'
          },
          {
            question: 'Wat is het verschil met een advocatenwebsite laten maken?',
            answer:
              'Lokale SEO gaat over gevonden worden in Maps en lokaal zoeken op rechtsgebied + stad. De websitespoke zet dat verkeer om met praktijkpagina’s, profielen en discrete intake. Ze versterken elkaar; deze pagina gaat over vindbaarheid.'
          },
          {
            question: 'Hoe concurreren we met advocaten-directories en vergelijkingssites?',
            answer:
              'Directories blijven verschijnen. Lokale SEO bouwt owned GBP- en organische signalen zodat gekwalificeerde aanvragen niet alleen via listings worden gehuurd. Sterke rechtsgebied + stad-pagina’s en een compleet kantoorprofiel verminderen op termijn de afhankelijkheid van betaalde directoryleads.'
          },
          {
            question: 'Wat als we meerdere vestigingen of gespecialiseerde advocaten hebben?',
            answer:
              'We structureren profielen, categorieën en lokale pagina’s zodat elke locatie en specialisatie een helder signaal houdt — en voorkomen dat het ene bureau het andere kannibaliseert wanneer arbeidsrecht, familie en notariaat één merk delen.'
          }
        ]
      }
    }
  },

  'branches-installateurs-website-laten-maken': {
    parents: ['home', 'branches', 'branches-installateurs'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for installers',
      category: 'Web Development',
      offers: [
        { name: 'Emergency call-ready installer website' },
        { name: 'Trade pages for boilers, heat pumps and solar' },
        { name: 'Planned-install quote form beside call CTAs' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design for installers',
        serviceName: 'Website design for installers',
        serviceDescription:
          'Installer website design with emergency phone CTAs, fault-service hours, trade pages for boilers, heat pumps, solar and electrical work, certifications, maintenance contracts, subsidy notes and planned-install quote forms — built so urgent callers dial and upgrade visitors request a survey.',
        faqs: [
          {
            question: 'How do I make sure emergency customers call immediately?',
            answer:
              'Put a sticky phone and WhatsApp button on every page, show night and weekend fault hours next to the number, and keep the emergency path separate from the planned-install form. Someone with a leak rarely finishes a long contact form before they dial the next van on Maps.'
          },
          {
            question: 'Can I offer maintenance contracts on the website?',
            answer:
              'Yes. We build clear pages for boiler and heat-pump service plans with what each visit includes, so recurring contracts are sold online and not only mentioned after a repair on the doorstep.'
          },
          {
            question: 'How do I show my certifications and brand approvals?',
            answer:
              'Sterkin, recognised-installer marks, F-gas registration and manufacturer certificates sit near the call CTA and on relevant trade pages. Visitors choosing who opens a boiler cupboard or rooftop see proof without hunting a PDF in the footer.'
          },
          {
            question: 'Can I add new services myself after launch?',
            answer:
              'Yes. We train you or the office to publish an extra trade page — for example a new solar package or bathroom install offer — update hours and refresh maintenance packages without calling a developer for every change.'
          },
          {
            question: 'Does the site work well on mobile in an emergency?',
            answer:
              'We design for shaky phone signal: lightweight pages, sticky call buttons and readable trade copy. Heavy portfolio carousels do not block the number when the heating has already failed.'
          },
          {
            question: 'How do planned heat-pump or solar quotes work alongside call-outs?',
            answer:
              'Emergency visitors get the number; upgrade visitors get a short install quote form with trade, area and timing, plus brief subsidy context where it helps. Two paths share one site so neither funnel hides the other.'
          },
          {
            question: 'How long does an installer website project take?',
            answer:
              'Most installer sites launch in about four to eight weeks, depending on how ready your trades list, certifications and fault-service hours are. Discovery starts with how night calls arrive so we do not ship a renovation-portfolio template.'
          },
          {
            question: 'Should subsidy information appear for heat pumps and solar?',
            answer:
              'Short, honest notes help homeowners researching upgrades, as long as the site does not pretend to be a government calculator. We pair that context with a clear path to request a planned-install survey.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken voor installateurs',
        serviceName: 'Website laten maken voor installateurs',
        serviceDescription:
          'Installateurswebsite laten maken met spoed-bel-CTA’s, storingsuren, vakpagina’s voor cv, warmtepomp, zonnepanelen en elektra, certificeringen, onderhoudscontracten, subsidienotities en offerteforms voor geplande installaties — gebouwd zodat spoedbellers bellen en upgradebezoekers een opname aanvragen.',
        faqs: [
          {
            question: 'Hoe zorg ik dat spoedklanten direct bellen?',
            answer:
              'Zet een vaste bel- en WhatsApp-knop op elke pagina, toon avond- en weekendstoringsuren naast het nummer, en houd het spoedpad gescheiden van het formulier voor geplande installaties. Iemand met een lekkage vult zelden een lang contactformulier in vóór hij het volgende busje op Maps belt.'
          },
          {
            question: 'Kan ik onderhoudscontracten via de website aanbieden?',
            answer:
              'Ja. We bouwen duidelijke pagina’s voor cv- en warmtepomp-onderhoudscontracten met wat er per bezoek inzit, zodat terugkerende contracten online verkocht worden en niet alleen op de stoep na een reparatie genoemd worden.'
          },
          {
            question: 'Hoe toon ik mijn certificeringen en merkgoedkeuringen?',
            answer:
              'Sterkin, erkend-installateurmerken, F-gassenregistratie en fabrikantcertificaten staan bij de bel-CTA en op relevante vakpagina’s. Bezoekers die kiezen wie hun cv-kast of dak opent, zien bewijs zonder een PDF in de footer te zoeken.'
          },
          {
            question: 'Kan ik zelf diensten toevoegen na livegang?',
            answer:
              'Ja. We trainen jou of het kantoor om een extra vakpagina te publiceren — bijvoorbeeld een nieuw zonnepaneelpakket of badkamerinstallatie — uren te wijzigen en onderhoudspakketten te verversen zonder developer voor elke wijziging.'
          },
          {
            question: 'Werkt de site goed op mobiel bij een noodgeval?',
            answer:
              'We ontwerpen voor matig telefoonsignaal: lichte pagina’s, vaste belknoppen en leesbare vaktekst. Zware portfoliocarrousels blokkeren het nummer niet wanneer de verwarming al uitvalt.'
          },
          {
            question: 'Hoe werken geplande warmtepomp- of zonnepaneeloffertes naast spoedritten?',
            answer:
              'Spoedbezoekers krijgen het nummer; upgradebezoekers krijgen een kort installatieformulier met vak, plaats en timing, plus korte subsidiecontext waar dat helpt. Twee paden delen één site, zodat geen van beide funnels de ander verstopt.'
          },
          {
            question: 'Hoe lang duurt een website-traject voor installateurs?',
            answer:
              'De meeste installateurssites gaan in ongeveer vier tot acht weken live, afhankelijk van hoe klaar je vakkenlijst, certificeringen en storingsuren zijn. Discovery start bij hoe nachtbelletjes binnenkomen, zodat we geen verbouwportfolio-template opleveren.'
          },
          {
            question: 'Moet subsidie-informatie bij warmtepomp en zonnepanelen op de site?',
            answer:
              'Korte, eerlijke notities helpen huiseigenaren die upgrades onderzoeken, zolang de site niet doet alsof ze een overheidsrekenhulp is. We koppelen die context aan een duidelijk pad om een geplande installatieopname aan te vragen.'
          }
        ]
      }
    }
  },

  'branches-installateurs-lokale-seo': {
    parents: ['home', 'branches', 'branches-installateurs'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for installers',
      category: 'Digital Marketing',
      offers: [
        { name: 'Service-area Google Business Profile for installers' },
        { name: 'Town and install-service landing pages' },
        { name: 'Call actions, fault hours and job-type reviews' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO for installers',
        serviceName: 'Local SEO for installers',
        serviceDescription:
          'Local SEO for plumbers, electricians and installers focused on service-area Google Business Profile, emergency and install keywords, call actions, town pages and reviews by job type — without ranking guarantees.',
        faqs: [
          {
            question: 'How do I get into the Google Maps pack for emergency jobs?',
            answer:
              'Treat GBP as a service-area business with the right trade categories, accurate night and weekend hours, a clear call button and recent reviews on fault work. Emergency searchers dial from the pack; we strengthen those signals without promising a fixed map position.'
          },
          {
            question: 'Does local SEO work without a fixed shopfront?',
            answer:
              'Yes. Most installers are mobile. Google supports service-area businesses so you can appear for nearby plumber and electrician searches without pretending you have a retail counter. We set categories, service towns and phone actions for that model.'
          },
          {
            question: 'How do I get found in multiple towns?',
            answer:
              'Configure GBP for the radius your vans actually cover, then support that with town or catchment pages for places you drive to. Empty postcode stubs rarely help; pages that name real service towns and install trades — with matching phone actions — send clearer signals to Maps.'
          },
          {
            question: 'How do I get reviews per service type?',
            answer:
              'Ask after a boiler repair, heat-pump install or electrical job with a short Google review link and a habit tied to job close-out. Over time your photo and review strip shows proof per trade, not only generic five-star fluff.'
          },
          {
            question: 'How long does local SEO take for installers?',
            answer:
              'GBP and call-action improvements often show within a few weeks. Stable relevance for competitive “plumber [city]” or “heat pump installer [region]” terms across a radius usually needs several months. Timelines depend on competition and how complete your profile is today. We do not promise a fixed map-pack place.'
          },
          {
            question: 'Can local SEO help with winter boiler spikes and summer cooling?',
            answer:
              'We align GBP posts, photos and local pages with when those searches rise in your region — cold snaps, heat waves and subsidy-driven upgrade seasons — without promising you will own every seasonal query.'
          },
          {
            question: 'How is this different from an installer website?',
            answer:
              'Local SEO is about being found in Maps and local search when someone needs a van or an install quote. The website spoke converts that traffic with emergency CTAs and planned-install forms. They support each other; this page covers findability.'
          },
          {
            question: 'Should the call button appear in Google Business Profile?',
            answer:
              'Yes. For urgent faults the phone action in Maps matters more than a long contact form. We keep hours and the number accurate so stressed callers can tap without hunting your site footer.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO voor installateurs',
        serviceName: 'Lokale SEO voor installateurs',
        serviceDescription:
          'Lokale SEO voor loodgieters, elektriciens en installateurs gericht op service-area Google Bedrijfsprofiel, spoed- en installatiezoekwoorden, belacties, plaatspagina’s en reviews per klustype — zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe kom ik in de Google Maps-pack voor spoedklussen?',
            answer:
              'Behandel GBP als service-area business met de juiste vakcategorieën, accurate avond- en weekenduren, een duidelijke belknop en recente reviews op storingswerk. Spoedzoekers bellen vanuit de pack; we versterken die signalen zonder een vaste kaartpositie te beloven.'
          },
          {
            question: 'Werkt lokale SEO zonder vaste vestiging?',
            answer:
              'Ja. De meeste installateurs zijn mobiel. Google ondersteunt service-area businesses zodat je bij loodgieter- en elektricienzoekopdrachten in de buurt kunt verschijnen zonder een retailbalie te veinzen. We zetten categorieën, werkplaatsen en belacties voor dat model.'
          },
          {
            question: 'Hoe word ik gevonden in meerdere plaatsen?',
            answer:
              'Richt GBP in voor de straal die je bussen écht rijden, en ondersteun dat met plaats- of werkgebiedpagina’s voor gemeenten waar je heen rijdt. Lege postcode-stubs helpen zelden; pagina’s die echte servicesteden en installatievakken noemen — met passende belacties — sturen Maps duidelijkere signalen.'
          },
          {
            question: 'Hoe krijg ik reviews per dienst?',
            answer:
              'Vraag na een cv-reparatie, warmtepompinstallatie of elektraklus met een korte Google-reviewlink en een gewoonte gekoppeld aan klusafsluiting. Na verloop van tijd toont je foto- en reviewstrip bewijs per vak, niet alleen generieke vijf-sterren-fluff.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor installateurs?',
            answer:
              'GBP- en belactieverbeteringen zie je vaak binnen enkele weken. Stabiele relevantie voor concurrerende “loodgieter [stad]”- of “warmtepomp installateur [regio]”-termen over een straal vraagt meestal maanden. Doorlooptijden hangen af van concurrentie en hoe compleet je profiel vandaag is. We beloven geen vaste kaartpackplek.'
          },
          {
            question: 'Helpt lokale SEO bij winterse cv-pieken en zomerse koeling?',
            answer:
              'We stemmen GBP-posts, foto’s en lokale pagina’s af op wanneer die zoekopdrachten in jouw regio stijgen — koude-invallen, hittegolven en subsidiegedreven upgrade-seizoenen — zonder te beloven dat je elke seizoensquery bezit.'
          },
          {
            question: 'Wat is het verschil met een installateurswebsite?',
            answer:
              'Lokale SEO gaat over gevonden worden in Maps en lokaal zoeken wanneer iemand een bus of installatieofferte nodig heeft. De websitespoke zet dat verkeer om met spoed-CTA’s en formulieren voor geplande installaties. Ze versterken elkaar; deze pagina gaat over vindbaarheid.'
          },
          {
            question: 'Moet de belknop in Google Bedrijfsprofiel staan?',
            answer:
              'Ja. Bij spoedstoringen telt de belactie in Maps zwaarder dan een lang contactformulier. We houden uren en nummer accuraat zodat gestreste bellers kunnen tikken zonder je sitefooter te zoeken.'
          }
        ]
      }
    }
  },

  'branches-aannemers-website-laten-maken': {
    parents: ['home', 'branches', 'branches-aannemers'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Website design for contractors',
      category: 'Web Development',
      offers: [
        { name: 'Contractor project portfolio website' },
        { name: 'Quote request form with photo upload' },
        { name: 'Service-area and trade pages' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Website design for contractors',
        serviceName: 'Website design for contractors',
        serviceDescription:
          'Contractor website design with before/after project portfolios, quote forms that capture job details, service-area clarity, trade pages for renovation and extensions, certifications and mobile paths — built to win project enquiries, not look like a generic brochure.',
        faqs: [
          {
            question: 'How do I show my projects online as a contractor?',
            answer:
              'We structure before/after galleries by trade — kitchens, bathrooms, dormers, extensions — with short notes on scope and finish. Homeowners can scan quality on a phone before they request a quote, instead of guessing from a Facebook album.'
          },
          {
            question: 'Will I get better quote requests from the website?',
            answer:
              'A form that asks for trade type, rough size, area and photos filters tyre-kickers earlier. Combined with clear minimum-job notes and catchment, you spend less time on “can you hang a shelf” chats and more on jobs you can price.'
          },
          {
            question: 'Can I add project photos myself after launch?',
            answer:
              'Yes. We train you or the office to upload new before/after sets after a kitchen or bathroom handover, so the portfolio stays current without a developer for every job.'
          },
          {
            question: 'How do homeowners find me in my service area?',
            answer:
              'The website makes towns and trades obvious and converts visitors who already found you. Local SEO (a separate engagement) strengthens Maps and “renovation [town]” visibility. We do not promise a fixed ranking.'
          },
          {
            question: 'How long does a contractor website project take?',
            answer:
              'Most contractor sites launch in about four to eight weeks, depending on how ready your project photos and services list are. Discovery starts with your quote flow so we do not ship a clinic-style template.'
          },
          {
            question: 'Should VCA and insurance appear on the site?',
            answer:
              'Where they apply, yes. Showing certifications, warranty schemes and liability cover next to the quote CTA helps private clients trust you before they compare three vans on WhatsApp.'
          },
          {
            question: 'Can the site filter out jobs that are too small?',
            answer:
              'We can state typical job sizes per trade and ask form questions that steer micro-jobs away. Exact filtering depends on how strict you want the first reply to be.'
          },
          {
            question: 'Does the quote form work well on a phone on site?',
            answer:
              'Yes. We design for dusty thumbs: sticky quote CTAs, photo upload from the camera roll, and service pages that load on uneven site wifi as well as at the kitchen table.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Website laten maken voor aannemers',
        serviceName: 'Website laten maken voor aannemers',
        serviceDescription:
          'Aannemerswebsite laten maken met voor/na-projectportfolio’s, offerteformulieren die klusdetails uitvragen, duidelijk werkgebied, dienstenpagina’s voor verbouwing en aanbouw, certificeringen en mobiele paden — gebouwd om projectaanvragen te winnen, geen generieke brochure.',
        faqs: [
          {
            question: 'Hoe toon ik mijn projecten online als aannemer?',
            answer:
              'We structureren voor/na-galerijen per vak — keukens, badkamers, dakkapellen, uitbouwen — met korte notities over scope en afwerking. Huiseigenaren kunnen kwaliteit op de telefoon scannen vóór ze een offerte aanvragen, in plaats van te gokken vanuit een Facebookalbum.'
          },
          {
            question: 'Krijg ik betere offerteaanvragen via de website?',
            answer:
              'Een formulier dat vaktype, globale omvang, plaats en foto’s vraagt, filtert shoppers eerder. Gecombineerd met duidelijke minimale klusgrootte en werkgebied besteed je minder tijd aan “kun je een plankje ophangen”-chats en meer aan klussen die je kunt begroten.'
          },
          {
            question: 'Kan ik zelf foto’s toevoegen na livegang?',
            answer:
              'Ja. We trainen jou of het kantoor om nieuwe voor/na-sets te uploaden na een keuken- of badkameroplevering, zodat het portfolio actueel blijft zonder developer voor elke klus.'
          },
          {
            question: 'Hoe word ik gevonden in mijn werkgebied?',
            answer:
              'De website maakt gemeenten en vakken duidelijk en zet bezoekers om die je al vonden. Lokale SEO (apart traject) versterkt Maps en zichtbaarheid op “verbouwing [plaats]”. We beloven geen vaste ranking.'
          },
          {
            question: 'Hoe lang duurt een website-traject voor aannemers?',
            answer:
              'De meeste aannemerssites gaan in ongeveer vier tot acht weken live, afhankelijk van hoe klaar je projectfoto’s en dienstenlijst zijn. Discovery start bij je offerteflow, zodat we geen kliniekachtige template opleveren.'
          },
          {
            question: 'Moeten VCA en verzekering op de site staan?',
            answer:
              'Waar van toepassing: ja. Certificeringen, garantieregelingen en aansprakelijkheidsdekking naast de offerte-CTA helpen particulieren jou te vertrouwen vóór ze drie busjes via WhatsApp vergelijken.'
          },
          {
            question: 'Kan de site te kleine klussen filteren?',
            answer:
              'We kunnen typische klusgroottes per vak noemen en formulierenvragen stellen die microklussen wegsturen. Exacte filtering hangt af van hoe streng je de eerste reactie wilt.'
          },
          {
            question: 'Werkt het offerteformulier goed op de telefoon op de bouw?',
            answer:
              'Ja. We ontwerpen voor stoffige duimen: vaste offerte-CTA’s, foto-upload vanuit de camerarol, en dienstenpagina’s die laden op matige bouwplaats-wifi én aan de keukentafel.'
          }
        ]
      }
    }
  },

  'branches-aannemers-lokale-seo': {
    parents: ['home', 'branches', 'branches-aannemers'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Local SEO for contractors',
      category: 'Digital Marketing',
      offers: [
        { name: 'Service-area Google Business Profile for contractors' },
        { name: 'Town and catchment landing pages' },
        { name: 'Trade keyword and review growth' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Local SEO for contractors',
        serviceName: 'Local SEO for contractors',
        serviceDescription:
          'Local SEO for contractors focused on service-area Google Business Profile, multi-town pages, trade + place keywords, project photos and homeowner reviews — competing for organic discovery beside lead platforms, without ranking guarantees.',
        faqs: [
          {
            question: 'How do I get found in multiple towns as a contractor?',
            answer:
              'Configure GBP as a service-area business covering your real radius, then support that with town or catchment pages for places you actually drive to. Thin pages for every postcode do not help; useful local pages plus consistent service-area signals do.'
          },
          {
            question: 'Does local SEO work without a showroom?',
            answer:
              'Yes. Most contractors are mobile. Google supports service-area businesses so you can appear for nearby searches without pretending you have a retail shopfront. We set categories, service towns and contact actions for that model.'
          },
          {
            question: 'How do I get more Google reviews as a contractor?',
            answer:
              'Ask after a clean handover — when the kitchen or bathroom is finished and the client is happy — with a short Google review link. We help set a simple post-job habit so requests stay consistent without pressuring people mid-build.'
          },
          {
            question: 'Is local SEO better than Werkspot or similar platforms?',
            answer:
              'They solve different problems. Platforms sell leads; local SEO builds owned discovery when someone searches Google for a contractor in their town. Many firms use both while they grow organic visibility — we do not claim one replaces the other overnight.'
          },
          {
            question: 'How long does local SEO take for a contractor?',
            answer:
              'GBP and review improvements often show within a few weeks. Stable relevance for competitive “contractor [city]” or “dormer [town]” terms across a radius usually needs several months. Timelines depend on competition and how complete your profile is today. We do not promise a fixed map-pack place.'
          },
          {
            question: 'Should I put project photos in Google Business Profile?',
            answer:
              'Yes. Before/after and site shots help homeowners choose between two map pins before they open a website. Stock scaffolding photos rarely win that glance.'
          },
          {
            question: 'How is this different from a contractor website?',
            answer:
              'Local SEO is about being found in Maps and local search across your towns. The website spoke converts that traffic with portfolios and quote forms. They support each other; this page covers findability.'
          },
          {
            question: 'Can local SEO help with seasonal jobs like roofs or insulation?',
            answer:
              'We align GBP posts, photos and local content with when those searches rise in your region — after storms, before winter — without promising you will own every seasonal query.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Lokale SEO voor aannemers',
        serviceName: 'Lokale SEO voor aannemers',
        serviceDescription:
          'Lokale SEO voor aannemers gericht op service-area Google Bedrijfsprofiel, multi-plaats pagina’s, vak + plaatszoekwoorden, projectfoto’s en reviews van particulieren — concurreren om organische ontdekking naast leadplatforms, zonder rankinggaranties.',
        faqs: [
          {
            question: 'Hoe word ik gevonden in meerdere plaatsen als aannemer?',
            answer:
              'Richt GBP in als service-area business voor jouw echte straal, en ondersteun dat met plaats- of werkgebiedpagina’s voor gemeenten waar je écht heen rijdt. Dunne pagina’s voor elke postcode helpen niet; nuttige lokale pagina’s plus consistente service-area-signalen wel.'
          },
          {
            question: 'Werkt lokale SEO zonder showroom?',
            answer:
              'Ja. De meeste aannemers zijn mobiel. Google ondersteunt service-area businesses zodat je bij zoekopdrachten in de buurt kunt verschijnen zonder een winkelfront te veinzen. We zetten categorieën, werkplaatsen en contactacties voor dat model.'
          },
          {
            question: 'Hoe krijg ik meer Google-reviews als aannemer?',
            answer:
              'Vraag na een nette oplevering — als de keuken of badkamer klaar is en de klant tevreden — met een korte Google-reviewlink. We helpen een eenvoudige na-klusgewoonte opzetten zodat verzoeken consistent blijven zonder druk tijdens de bouw.'
          },
          {
            question: 'Is lokale SEO beter dan Werkspot of vergelijkbare platforms?',
            answer:
              'Ze lossen andere problemen op. Platforms verkopen leads; lokale SEO bouwt owned ontdekking wanneer iemand Google opent voor een aannemer in hun plaats. Veel bedrijven gebruiken beide terwijl organische zichtbaarheid groeit — we claimen niet dat één het andere overnight vervangt.'
          },
          {
            question: 'Hoe lang duurt lokale SEO voor een aannemer?',
            answer:
              'GBP- en reviewverbeteringen zie je vaak binnen enkele weken. Stabiele relevantie voor concurrerende “aannemer [stad]”- of “dakkapel [plaats]”-termen over een straal vraagt meestal maanden. Doorlooptijden hangen af van concurrentie en hoe compleet je profiel vandaag is. We beloven geen vaste kaartpackplek.'
          },
          {
            question: 'Moet ik projectfoto’s in Google Bedrijfsprofiel zetten?',
            answer:
              'Ja. Voor/na- en bouwplaatsfoto’s helpen huiseigenaren kiezen tussen twee kaartpins vóór ze een website openen. Stocksteigerfoto’s winnen die blik zelden.'
          },
          {
            question: 'Wat is het verschil met een aannemerswebsite?',
            answer:
              'Lokale SEO gaat over gevonden worden in Maps en lokaal zoeken over jouw gemeenten. De websitespoke zet dat verkeer om met portfolio’s en offerteforms. Ze versterken elkaar; deze pagina gaat over vindbaarheid.'
          },
          {
            question: 'Helpt lokale SEO bij seizoensklussen zoals dak of isolatie?',
            answer:
              'We stemmen GBP-posts, foto’s en lokale content af op wanneer die zoekopdrachten in jouw regio stijgen — na stormen, vóór de winter — zonder te beloven dat je elke seizoensquery bezit.'
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

  'branches-restaurants-social-media': {
    parents: ['home', 'branches', 'branches-restaurants'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Social media management for restaurants',
      category: 'Digital Marketing',
      offers: [
        { name: 'Food photography and dish posts' },
        { name: 'Kitchen Reels and seasonal campaigns' },
        { name: 'Local ads to fill quiet covers' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Social media management for restaurants',
        serviceName: 'Social media management for restaurants',
        serviceDescription:
          'Social media management for restaurants focused on food photography, kitchen Reels, specials, guest UGC and local ads that support reservations — without follower or cover guarantees.',
        faqs: [
          {
            question: 'Which social channels work best for restaurants?',
            answer:
              'Most venues get the strongest dinner decisions from Instagram and Facebook for dishes, Reels and specials. TikTok can help for younger neighbourhoods when you have kitchen video capacity. We choose channels based on your crowd and dayparts — not a one-size “be everywhere” plan.'
          },
          {
            question: 'What does social media management for restaurants cost?',
            answer:
              'Investment depends on channels, posting volume, photography needs and whether local ads are included. We quote a clear monthly scope after intake. We do not publish fixed packages here; ask for a proposal with realistic timelines and no follower or reservation guarantees.'
          },
          {
            question: 'How often should a restaurant post?',
            answer:
              'A sustainable mix is usually several posts per week — dishes, kitchen or team Reels, specials and occasional guest UGC — timed to lunch gaps, midweek dinners and seasonal booking windows. Volume without appetising food content rarely fills tables.'
          },
          {
            question: 'Do you take the food photos yourselves?',
            answer:
              'We produce posts from kitchen-ready plating, phone clips and photographer sessions you already run. When shots are missing, we give a short shot list for the next plating window. You approve allergen claims and priced specials before they go live.'
          },
          {
            question: 'How do I get more reservations via Instagram?',
            answer:
              'Keep a clear booking link in bio and stories, show dishes and atmosphere that sell the night, announce specials early enough to book, reply fast to reservation DMs, and optionally boost quiet slots to nearby diners. We improve those signals over time; we do not guarantee a set number of covers.'
          },
          {
            question: 'How is this different from restaurant local SEO or a website?',
            answer:
              'Local SEO is about being found in Google Maps and local search. The website spoke converts visitors with menu and reservations. This social spoke makes the night look irresistible so guests already want your table before they search or click. They work best together but are separate engagements.'
          },
          {
            question: 'Can you promote seasonal menus like Christmas dinner or Mother’s Day?',
            answer:
              'Yes. Seasonal campaigns are a core part of restaurant social — we plan lead time so guests can book before lists fill, with clear CTAs to your reservation path.'
          },
          {
            question: 'Do you guarantee followers or booked tables from social?',
            answer:
              'No. No ethical partner can guarantee followers, viral Reels or a set number of reservations. We set a consistent cadence, improve food and atmosphere content, and report on reach, saves and reservation-link clicks over time.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Social media voor restaurants',
        serviceName: 'Social media voor restaurants',
        serviceDescription:
          'Social media voor restaurants gericht op foodfotografie, keuken-Reels, specials, gast-UGC en lokale ads die reserveringen ondersteunen — zonder volger- of covergaranties.',
        faqs: [
          {
            question: 'Welke kanalen werken voor horeca?',
            answer:
              'De meeste zaken halen de sterkste dinerbeslissingen uit Instagram en Facebook voor gerechten, Reels en specials. TikTok kan helpen in jongere buurten wanneer je keukenvideo-capaciteit hebt. We kiezen kanalen op basis van jouw publiek en dayparts — geen “overal tegelijk”-plan.'
          },
          {
            question: 'Wat kost social media beheer voor restaurants?',
            answer:
              'De investering hangt af van kanalen, postvolume, fotografiebehoefte en of lokale ads meedoen. Na intake offreren we een duidelijke maandelijkse scope. We publiceren hier geen vaste pakketprijzen; vraag een voorstel met realistische planning en zonder volger- of reserveringsgaranties.'
          },
          {
            question: 'Hoe vaak moet een restaurant posten?',
            answer:
              'Een houdbaar ritme is meestal meerdere posts per week — gerechten, keuken- of team-Reels, specials en af en toe gast-UGC — getimed op lunchgaten, midweekdiners en seizoensboekingsvensters. Volume zonder smakelijke foodcontent vult zelden tafels.'
          },
          {
            question: 'Maken jullie de foto’s?',
            answer:
              'We maken posts van keukenklaar opmaken, telefoonclips en fotografensessies die je al draait. Ontbreken shots, dan geven we een korte shotlist voor het volgende opmaakmoment. Allergeenclaims en geprijsde specials keur je goed vóór publicatie.'
          },
          {
            question: 'Hoe krijg ik meer reserveringen via Instagram?',
            answer:
              'Houd een duidelijke boekingslink in bio en stories, toon gerechten en sfeer die de avond verkopen, kondig specials vroeg genoeg aan om te boeken, beantwoord reserverings-DM’s snel, en boost optioneel rustige slots naar diners in de buurt. We verbeteren die signalen in de tijd; we garanderen geen vast aantal covers.'
          },
          {
            question: 'Wat is het verschil met lokale SEO of een restaurantwebsite?',
            answer:
              'Lokale SEO gaat over gevonden worden in Google Maps en lokaal zoeken. De website-spoke converteert bezoekers met menu en reserveringen. Deze social-spoke maakt de avond onweerstaanbaar zodat gasten jouw tafel al willen vóór ze zoeken of klikken. Samen werken ze het best, maar het zijn aparte trajecten.'
          },
          {
            question: 'Kunnen jullie seizoensmenu’s zoals kerstdiner of Moederdag promoten?',
            answer:
              'Ja. Seizoenscampagnes horen bij social media restaurant — we plannen lead time zodat gasten kunnen boeken vóór lijsten vol zijn, met duidelijke CTA’s naar jouw reserveringspad.'
          },
          {
            question: 'Garanderen jullie volgers of geboekte tafels via social?',
            answer:
              'Nee. Geen ethische partij kan volgers, virale Reels of een vast aantal reserveringen garanderen. We zetten een consistent ritme, verbeteren food- en sfeercontent, en rapporteren over bereik, saves en klikken op reserveringslinks in de tijd.'
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

  'branches-makelaars-social-media': {
    parents: ['home', 'branches', 'branches-makelaars'],
    extras: [buildProfessionalServiceSchema()],
    service: {
      serviceType: 'Social media management for real estate agents',
      category: 'Digital Marketing',
      offers: [
        { name: 'Listing and just-sold social posts' },
        { name: 'Video tours and Reels for agencies' },
        { name: 'Local ads aimed at homeowners' }
      ]
    },
    locales: {
      en: {
        breadcrumbName: 'Social media management for real estate agents',
        serviceName: 'Social media management for real estate agents',
        serviceDescription:
          'Social media management for estate agents focused on listing presentation, video tours, just-sold proof, personal brand and local homeowner ads — without follower or lead guarantees.',
        faqs: [
          {
            question: 'Which social channels work best for estate agents?',
            answer:
              'Most agencies get the strongest seller recognition from Instagram and Facebook for listings, Reels and just-sold proof. LinkedIn helps when you sell commercial stock or speak to investors. We choose channels based on your catchment and instruction mix — not a one-size “be everywhere” plan.'
          },
          {
            question: 'What does social media management for estate agents cost?',
            answer:
              'Investment depends on channels, posting volume, video needs and whether local ads are included. We quote a clear monthly scope after intake. We do not publish fixed packages here; ask for a proposal with realistic timelines and no follower or lead guarantees.'
          },
          {
            question: 'How many times should an estate agent post per week?',
            answer:
              'A sustainable mix is usually several posts per week across agreed channels — listing updates, sold proof, neighbourhood or market tips and occasional video — timed to your instruction pipeline. Volume without useful stock or proof rarely helps sellers choose you.'
          },
          {
            question: 'Do I need to supply the photos myself?',
            answer:
              'We work from what you already have: Realworks or photographer folders, phone clips from viewings and approved sold material. You approve sensitive client-facing posts. When shots are missing, we give a short shot list for the next photographer or open-house day.'
          },
          {
            question: 'Does advertising to homeowners in a postcode area work?',
            answer:
              'Paid reach aimed at homeowners in your catchment can put listings, sold proof and valuation offers in front of people who may instruct next. Results vary by budget, creative and competition. We treat ads as optional amplification, never as a promised lead volume.'
          },
          {
            question: 'How is this different from estate agent local SEO or a website?',
            answer:
              'Local SEO is about being found in Google Maps and local search. The website spoke converts visitors with listings and valuation forms. This social spoke builds recognition so sellers already know your name before they search or click. They work best together but are separate engagements.'
          },
          {
            question: 'Can you build the personal brand of the makelaar, not only the office?',
            answer:
              'Yes. Sellers often instruct a person they recognise. We plan face-to-camera tips, market updates and behind-the-deal moments alongside office listing posts, with clear approval so tone stays professional.'
          },
          {
            question: 'Do you guarantee followers or valuation leads from social?',
            answer:
              'No. No ethical partner can guarantee followers, viral Reels or a set number of valuation leads. We set a consistent cadence, improve content quality and report on reach, engagement and enquiry signals over time.'
          }
        ]
      },
      nl: {
        breadcrumbName: 'Social media voor makelaars',
        serviceName: 'Social media voor makelaars',
        serviceDescription:
          'Social media voor makelaars gericht op woningaanbod presenteren, video-rondleidingen, net-verkochtbewijs, persoonlijk merk en lokale ads op huiseigenaren — zonder volger- of leadgaranties.',
        faqs: [
          {
            question: 'Welke kanalen werken voor makelaars?',
            answer:
              'De meeste kantoren halen de sterkste verkoperherkenning uit Instagram en Facebook voor aanbod, Reels en net-verkochtposts. LinkedIn helpt bij commercieel vastgoed of beleggers. We kiezen kanalen op basis van jouw verzorgingsgebied en opdrachtenmix — geen “overal tegelijk”-plan.'
          },
          {
            question: 'Wat kost social media beheer voor makelaars?',
            answer:
              'De investering hangt af van kanalen, postvolume, videobehoefte en of lokale ads meedoen. Na intake offreren we een duidelijke maandelijkse scope. We publiceren hier geen vaste pakketprijzen; vraag een voorstel met realistische planning en zonder volger- of leadgaranties.'
          },
          {
            question: 'Hoeveel moet een makelaar per week posten?',
            answer:
              'Een houdbaar ritme is meestal meerdere posts per week op afgesproken kanalen — aanbodupdates, verkochtbewijs, buurt- of markttips en af en toe video — getimed op jouw opdrachtpijplijn. Volume zonder nuttig aanbod of bewijs helpt verkopers zelden jou te kiezen.'
          },
          {
            question: 'Lever ik zelf de foto’s aan?',
            answer:
              'We werken met wat je al hebt: Realworks- of fotografenmappen, telefoonclips van bezichtigingen en goedgekeurd verkochtmateriaal. Gevoelige klantposts keur je goed. Ontbreken shots, dan geven we een korte shotlist voor de volgende fotograaf of open-huisdag.'
          },
          {
            question: 'Werkt adverteren op huiseigenaren in een postcodegebied?',
            answer:
              'Betaald bereik gericht op huiseigenaren in jouw gebied kan aanbod, verkochtbewijs en waardebepalingaanbiedingen voor mensen zetten die mogelijk de volgende opdracht geven. Resultaten variëren per budget, creative en concurrentie. Ads zijn optionele versterking, nooit een beloofd leadvolume.'
          },
          {
            question: 'Wat is het verschil met lokale SEO of een makelaarswebsite?',
            answer:
              'Lokale SEO gaat over gevonden worden in Google Maps en lokaal zoeken. De website-spoke converteert bezoekers met aanbod en waardebepalingforms. Deze social-spoke bouwt herkenning zodat verkopers jouw naam al kennen vóór ze zoeken of klikken. Samen werken ze het best, maar het zijn aparte trajecten.'
          },
          {
            question: 'Kunnen jullie het persoonlijke merk van de makelaar opbouwen, niet alleen het kantoor?',
            answer:
              'Ja. Verkopers geven vaak opdracht aan iemand die ze herkennen. We plannen face-to-camera tips, marktupdates en behind-the-deal momenten naast kantoorwoningposts, met duidelijke goedkeuring zodat de toon professioneel blijft.'
          },
          {
            question: 'Garanderen jullie volgers of waardebepalingleads via social?',
            answer:
              'Nee. Geen ethische partij kan volgers, virale Reels of een vast aantal waardebepalingleads garanderen. We zetten een consistent ritme, verbeteren contentkwaliteit en rapporteren over bereik, engagement en aanvraagsignalen in de tijd.'
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
  const path = ROUTES[key][locale]
  const config = pageSeoByKey[key]
  const localeEntry = config.locales[locale]
  const language = LOCALE_HTML_LANG[locale]

  const breadcrumbItems = breadcrumbItemsWithPaths(key, locale)
  const breadcrumbId = `${absoluteUrl(path)}#breadcrumb`
  const breadcrumb = {
    ...buildBreadcrumbSchema(breadcrumbItems),
    '@id': breadcrumbId
  }

  const pageUrl = absoluteUrl(path)
  const faqId = localeEntry.faqs?.length ? `${pageUrl}#faq` : undefined

  const webPage = buildWebPageSchema({
    path,
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
        path,
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
        path,
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
    nodes.push(buildFaqSchema(path, localeEntry.faqs, language))
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
