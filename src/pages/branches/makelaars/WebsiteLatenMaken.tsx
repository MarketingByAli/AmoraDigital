import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Home,
  MapPin,
  Search,
  Smartphone,
  Sparkles,
  Star,
  Link2
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  Home,
  Link2,
  Calculator,
  Building2,
  MapPin,
  ClipboardList,
  Smartphone,
  Star
] as const

const FEATURES = [
  {
    en: {
      title: 'Property listings with filters',
      description:
        'Buyers browse homes by price, neighbourhood, bedrooms and status. Detail pages with photos, floor plans and key specs — not a static PDF of last month’s brochure.'
    },
    nl: {
      title: 'Woningaanbod met filters',
      description:
        'Kopers zoeken woningen op prijs, wijk, slaapkamers en status. Detailpagina’s met foto’s, plattegronden en kernspecs — geen statische PDF van vorige maand.'
    }
  },
  {
    en: {
      title: 'Funda / NVM / Realworks sync',
      description:
        'Where your stack allows: feed listings from Realworks or similar into the site so what sellers see online matches Funda and your CRM — without double entry after every open house.'
    },
    nl: {
      title: 'Funda / NVM / Realworks-koppeling',
      description:
        'Waar je stack het toelaat: sync aanbod vanuit Realworks of vergelijkbaar naar de site, zodat wat verkopers online zien overeenkomt met Funda en je CRM — zonder dubbel invoeren na elke open dag.'
    }
  },
  {
    en: {
      title: 'Free valuation lead form',
      description:
        'A clear “request a free valuation” form that captures address, contact and timing — the seller lead magnet that matters more than a contact page buried under team bios.'
    },
    nl: {
      title: 'Gratis waardebepaling-formulier',
      description:
        'Een duidelijk “vraag gratis waardebepaling aan”-formulier met adres, contact en timing — de verkoper-leadmagnet die meer telt dan een contactpagina onder teambio’s.'
    }
  },
  {
    en: {
      title: 'Sold portfolio & proof',
      description:
        'Showcase recently sold homes with neighbourhood context so sellers see you close deals on streets like theirs — not generic stock photos of random living rooms.'
    },
    nl: {
      title: 'Verkocht-portfolio & bewijs',
      description:
        'Toon recent verkochte woningen met buurtcontext, zodat verkopers zien dat je deals sluit in straten zoals die van hen — geen generieke stockfoto’s van willekeurige woonkamers.'
    }
  },
  {
    en: {
      title: 'Neighbourhood / district pages',
      description:
        'Local pages for the areas you cover — schools, amenities, price levels — that support SEO and help buyers (and sellers) trust your market knowledge before they call.'
    },
    nl: {
      title: 'Buurt- / wijkpagina’s',
      description:
        'Lokale pagina’s voor de gebieden die je dekt — scholen, voorzieningen, prijsniveaus — die SEO steunen en kopers (én verkopers) vertrouwen geven in je marktkennis vóór ze bellen.'
    }
  },
  {
    en: {
      title: 'Request a viewing',
      description:
        'Per listing: book a viewing or ask a question without hunting for a WhatsApp number. Leads land in your process with property reference attached.'
    },
    nl: {
      title: 'Bezichtiging aanvragen',
      description:
        'Per woning: vraag een bezichtiging aan of stel een vraag zonder te zoeken naar een WhatsApp-nummer. Leads landen in je proces met woningreferentie erbij.'
    }
  },
  {
    en: {
      title: 'Mobile-first for house hunters',
      description:
        'Most buyers browse listings on a phone between viewings. The site loads fast, filters work on small screens and valuation CTAs stay reachable with one thumb.'
    },
    nl: {
      title: 'Mobiel voor huizenzoekers',
      description:
        'De meeste kopers scrollen aanbod op de telefoon tussen bezichtigingen. De site laadt snel, filters werken op klein scherm en waardebepaling-CTA’s blijven met één duim bereikbaar.'
    }
  },
  {
    en: {
      title: 'Buyer & seller references',
      description:
        'Quotes and stories from people who sold or bought with you — trust signals next to valuation and viewing CTAs when someone is choosing between two agents.'
    },
    nl: {
      title: 'Referenties van kopers & verkopers',
      description:
        'Quotes en verhalen van mensen die via jou verkochten of kochten — vertrouwenssignalen naast waardebepaling- en bezichtigings-CTA’s wanneer iemand tussen twee makelaars kiest.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Discovery in the agency',
      description:
        'We map how sellers and buyers find you today: Funda, Google, referrals and walk-ins. We note your CRM/feed stack, catchment areas and where valuation requests get lost.'
    },
    nl: {
      step: '01',
      title: 'Discovery op het kantoor',
      description:
        'We brengen in kaart hoe verkopers en kopers je nu vinden: Funda, Google, verwijzingen en inlopen. We noteren je CRM-/feedstack, verzorgingsgebied en waar waardebepalingen vastlopen.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Listings & lead structure',
      description:
        'Architecture separates buyer search, seller valuation, sold proof and district expertise. Listing detail, viewing requests and office trust pages each have a defined slot — not a single “Our services” drop-down hiding the valuation form.'
    },
    nl: {
      step: '02',
      title: 'Aanbod- & leadstructuur',
      description:
        'Architectuur scheidt koperszoeken, verkoper-waardebepaling, verkochtbewijs en wijkkennis. Woningdetail, bezichtigingsaanvragen en kantoorvertrouwen krijgen elk een vaste plek — geen enkel “Onze diensten”-menu dat het waardebepalingsformulier verstopt.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Design for trust & scanability',
      description:
        'Visual design that puts homes and results first: readable listing cards on a phone, CTAs that say “Request a valuation” or “Book a viewing”, and space for sold proof without clutter.'
    },
    nl: {
      step: '03',
      title: 'Design voor vertrouwen & scanbaarheid',
      description:
        'Visueel ontwerp met woningen en resultaten voorop: leesbare kaartjes op de telefoon, CTA’s die “Vraag een waardebepaling aan” of “Plan een bezichtiging” zeggen, en ruimte voor verkochtbewijs zonder rommel.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, integrate, train',
      description:
        'We build the site, connect your listing feed where possible, set valuation and viewing forms, and train the team to manage content without a developer for every new street page.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, koppelen, trainen',
      description:
        'We bouwen de site, koppelen je aanbodfeed waar mogelijk, zetten waardebepaling- en bezichtigingsforms klaar, en trainen het team om content te beheren zonder developer voor elke nieuwe straatpagina.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch & measure leads',
      description:
        'Launch tracks valuation form submissions, viewing requests per listing and which neighbourhood pages sellers read longest. You see whether Google or referral traffic fills the instruction pipeline — not visitors who only browsed floor plans without leaving contact details.'
    },
    nl: {
      step: '05',
      title: 'Live & leads meten',
      description:
        'Livegang volgt waardebepalingsformulieren, bezichtigingsaanvragen per woning en welke wijkpagina’s verkopers het langst lezen. Je ziet of Google of verwijzingen de opdrachtpijplijn vullen — geen bezoekers die alleen plattegronden bekeken zonder contactgegevens.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'google-ads', 'social-media'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Real estate agents',
    crumbCurrent: 'Website design for real estate agents',
    badge: 'Estate agent websites',
    h1: 'Website design for real estate agents',
    heroSub:
      'An agency website that turns house hunters and sellers into leads — with searchable listings, Funda/Realworks-ready feeds where possible, free valuation forms and a mobile path built for buyers on their phone. With 1,500+ completed projects, we know how estate agents convert online.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'A weak agency website loses listings and seller leads before the open house',
    problemP1:
      'A seller shortlisting agents after a neighbour’s sale compares sold results on their street, how fast valuation requests respond and whether listings look current — not just which Funda profile loads first. An agency site stuck on a static brochure or missing synced inventory sends the instruction to the office whose Realworks feed and valuation form already look operational.',
    problemP2:
      'Estate agents do not need a salon booking page or a dentist intake. They need a digital sales floor: filtered listings, sold portfolio, neighbourhood pages, valuation and viewing requests, and a feed that stays in sync with Funda or Realworks. Miss that, and you pay in fewer instructions and buyers who never leave a lead.',
    problemP3:
      'Portals own a lot of traffic, but your website is where you control the brand, capture valuation leads without portal fees on every click, and prove local sold results that Funda alone does not tell as your story.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in an estate agent website',
    featuresSub:
      'Each block serves sellers weighing instruction trust or buyers filtering listings — Funda sync, valuation forms, sold proof — not estate-agent boilerplate with your logo.',
    processBadge: 'How we work',
    processHead: 'How an estate agent website project runs',
    processSub:
      'From the first walkthrough of your listing feed and lead flow to measuring which pages drive valuations and viewings.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why agencies trust us with their digital sales floor',
    whySub: 'Real-estate-aware delivery, local findability support and results you can count in instructions.',
    whyItems: [
      {
        title: 'Agency experience',
        desc: 'We design for seller valuations, buyer viewings, sold proof and the difference between portal traffic and owned leads.'
      },
      {
        title: 'Local findability support',
        desc: 'District pages and valuation CTAs wired so a seller who found you via “estate agent [city]” can request a valuation without bouncing back to Funda.'
      },
      {
        title: 'Measurable leads',
        desc: 'We track valuation starts, viewing requests and listing engagement so you know the website fills the pipeline.'
      },
      {
        title: 'Everything under one roof',
        desc: 'Website and listing hub first; local SEO, Google Ads and social when instructions need a boost — one team aligned on Funda feeds and valuation funnels, not five suppliers who never opened Realworks.'
      }
    ],
    costsBadge: 'Investment',
    costsHead: 'What does a website for an estate agent cost?',
    costsIntro:
      'Scope scales with listing volume, Realworks or Funda feed complexity, valuation and viewing forms, neighbourhood page count and multi-office branding. Fixed deliverables after reviewing your CRM setup — not a rebuild every time a new street campaign launches.',
    costsItems: [
      {
        title: 'Essential agency site',
        desc: 'Homepage, listings overview, team, contact, valuation CTA and location. Ideal for a single office that needs to look trustworthy and capture seller interest beyond Funda alone.'
      },
      {
        title: 'Listing-ready agency site',
        desc: 'Everything in Essential, plus feed integration where possible, richer property pages, sold portfolio, neighbourhood pages, viewing requests and analytics on valuation clicks. Built for agencies that grow through owned leads.'
      },
      {
        title: 'Multi-office or brand group',
        desc: 'Multiple offices, language variants or brand sites with shared feeds. Scoped per organisation after we map CRM, portals and catchment areas.'
      }
    ],
    costsNote:
      'Scope is fixed after we understand feed setup, valuation funnel and sold-portfolio needs. Request an agency website quote with a clear deliverable list and delivery plan — that is where your figure is set, not on a public rate list here.',
    siblingsBadge: 'Also for estate agents',
    siblingsHead: 'Pair your website with local growth',
    siblingsSub:
      'Portal traffic alone does not prove you sold on their street. These services drive sellers and buyers to a site where listings, valuations and sold results tell your office story before the first viewing.',
    siblingsCta: 'View service',
    hubLink: 'Back to estate agent marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For projects outside real estate we offer broader website design. Agency builds follow the process on this page.',
    ctaHeading: 'Ready for a website that wins instructions?',
    ctaSub:
      'Tell us about your office, listing feed and how valuations come in today. We will propose a fixed scope for a site sellers and buyers actually use.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Makelaars',
    crumbCurrent: 'Website laten maken voor makelaars',
    badge: 'Makelaarswebsites',
    h1: 'Website laten maken voor makelaars',
    heroSub:
      'Een kantoorwebsite die huizenzoekers en verkopers omzet in leads — met doorzoekbaar aanbod, Funda/Realworks-klare feeds waar mogelijk, gratis waardebepaling en een mobiel pad voor kopers op de telefoon. Met 1.500+ afgeronde projecten weten we hoe makelaars online converteren.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Een zwakke website kost opdrachten en verkoperleads vóór de open dag',
    problemP1:
      'Een verkoper die na de verkoop bij de buren makelaars vergelijkt, kijkt naar verkochte resultaten in de straat, hoe snel waardebepaling reageert en of aanbod actueel oogt — niet alleen welk Funda-profiel het snelst laadt. Een kantoorwebsite die op een statische brochure blijft hangen of gesynchroniseerd aanbod mist, geeft de opdracht aan het kantoor waar Realworks-feed en waardebepalingsformulier al operationeel ogen.',
    problemP2:
      'Makelaars hebben geen salonboekpagina of tandartsintake nodig. Ze hebben een digitale verkoopvloer nodig: gefilterd aanbod, verkochtportfolio, wijkpagina’s, waardebepaling en bezichtigingsaanvragen, en een feed die synchroon blijft met Funda of Realworks. Mis je dat, dan betaal je met minder opdrachten en kopers die nooit een lead achterlaten.',
    problemP3:
      'Portals bezitten veel verkeer, maar op je website bepaal jij het merk, vang je waardebepaling-leads zonder portalfees op elke klik, en bewijs je lokale verkoopresultaten die Funda alleen niet als jouw verhaal vertelt.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een website voor makelaars',
    featuresSub:
      'Elk blok dient verkopers die vertrouwen in opdracht afwegen of kopers die aanbod filteren — Funda-sync, waardebepaling, verkochtbewijs — geen makelaarsboilerplate met jullie logo.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een website-traject voor een makelaar verloopt',
    processSub:
      'Van de eerste doorloop van je aanbodfeed en leadflow tot meten welke pagina’s waardebepalingen en bezichtigingen opleveren.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom kantoren hun digitale verkoopvloer aan ons toevertrouwen',
    whySub: 'Vastgoedbewuste oplevering, steun voor lokale vindbaarheid en resultaten die je in opdrachten telt.',
    whyItems: [
      {
        title: 'Kantoorervaring',
        desc: 'We ontwerpen voor verkoper-waardebepalingen, koperbezichtigingen, verkochtbewijs en het verschil tussen portalverkeer en owned leads.'
      },
      {
        title: 'Steun voor lokale vindbaarheid',
        desc: 'Wijkpagina’s en waardebepaling-CTA’s zo gekoppeld dat een verkoper die je via “makelaar [stad]” vond een taxatie kan aanvragen zonder terug te stuiteren naar Funda.'
      },
      {
        title: 'Meetbare leads',
        desc: 'We volgen waardebepalingstarts, bezichtigingsaanvragen en aanbodengagement, zodat je weet dat de website de pijplijn vult.'
      },
      {
        title: 'Alles onder één dak',
        desc: 'Website en aanbodhub eerst; lokale SEO, Google Ads en social wanneer opdrachten een duwtje nodig hebben — één team op Funda-feeds en waardebepalingsfunnels, geen vijf leveranciers die Realworks nooit openden.'
      }
    ],
    costsBadge: 'Investering',
    costsHead: 'Wat kost een website voor een makelaar?',
    costsIntro:
      'De scope schaalt met aanbodvolume, complexiteit van Realworks- of Funda-feed, waardebepaling- en bezichtigingsforms, aantal wijkpagina’s en branding over meerdere kantoren. Vaste deliverables na review van je CRM-setup — geen rebuild bij elke nieuwe straatcampagne.',
    costsItems: [
      {
        title: 'Essentiële kantoorsite',
        desc: 'Homepage, aanbodoverzicht, team, contact, waardebepaling-CTA en locatie. Ideaal voor één kantoor dat online betrouwbaar wil ogen en verkoperinteresse wil vangen naast Funda alleen.'
      },
      {
        title: 'Aanbodklare kantoorsite',
        desc: 'Alles uit Essential, plus feedintegratie waar mogelijk, rijkere woningpagina’s, verkochtportfolio, wijkpagina’s, bezichtigingsaanvragen en analytics op waardebepalingklikken. Voor kantoren die via owned leads groeien.'
      },
      {
        title: 'Meerdere kantoren of merkgroep',
        desc: 'Meerdere vestigingen, taalvarianten of merksites met gedeelde feeds. Scope per organisatie nadat we CRM, portals en verzorgingsgebied in kaart hebben.'
      }
    ],
    costsNote:
      'De scope zetten we vast na inzicht in feed-setup, waardebepalingsfunnel en verkochtportfolio-behoefte. Vraag een makelaarswebsite-offerte aan met duidelijke deliverables en opleverplan — daar staat jouw bedrag, niet op een openbare tarievenlijst hier.',
    siblingsBadge: 'Ook voor makelaars',
    siblingsHead: 'Combineer je website met lokale groei',
    siblingsSub:
      'Portalverkeer alleen bewijst niet dat jij in hun straat verkocht. Deze diensten sturen verkopers en kopers naar een site waar aanbod, waardebepaling en verkochte resultaten jullie kantoorverhaal vertellen vóór de eerste bezichtiging.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar makelaarsmarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten vastgoed bieden we breder webdesign. Kantoorbuilds volgen het proces op deze pagina.',
    ctaHeading: 'Klaar voor een website die opdrachten wint?',
    ctaSub:
      'Vertel ons over je kantoor, aanbodfeed en hoe waardebepalingen nu binnenkomen. We stellen een vaste scope voor een site die verkopers en kopers écht gebruiken.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function MakelaarsWebsiteLatenMaken() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-makelaars'][locale]
  const agentSpokes = BRANCH_SPOKES.makelaars
  const siblings = agentSpokes.filter((spoke) =>
    (SIBLING_SLUGS as readonly string[]).includes(spoke.slug)
  )

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
              <Link to={hubPath} className="text-white/60 hover:text-white transition-colors">
                {t.crumbHub}
              </Link>
              <span className="text-white/40" aria-hidden>/</span>
              <span className="text-white">{t.crumbCurrent}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Home className="w-4 h-4" aria-hidden />
              <span>{t.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.h1}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">{t.heroSub}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                to={ROUTES.contact[locale]}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-700 bg-white rounded-lg hover:bg-slate-100 transition-all shadow-lg group"
              >
                {t.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/90">
                <Sparkles className="w-4 h-4 text-secondary-300" aria-hidden />
                <span>{t.trust}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
            <span>{t.problemBadge}</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-6">{t.problemHead}</h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>{t.problemP1}</p>
            <p>{t.problemP2}</p>
            <p>{t.problemP3}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Search className="w-4 h-4" aria-hidden />
              <span>{t.featuresBadge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">{t.featuresHead}</h2>
            <p className="section-subheading mx-auto">{t.featuresSub}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {FEATURES.map((feature, i) => {
              const Icon = FEATURE_ICONS[i] ?? CheckCircle2
              const copy = feature[locale]
              return (
                <div key={copy.title} className="card p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{copy.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{copy.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
              <span>{t.processBadge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">{t.processHead}</h2>
            <p className="section-subheading mx-auto">{t.processSub}</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {PROCESS_STEPS.map((item) => {
              const copy = item[locale]
              return (
                <div key={copy.step} className="card p-6 sm:p-8 flex gap-5">
                  <div className="text-2xl font-display font-bold text-primary-600 flex-shrink-0">{copy.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{copy.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{copy.description}</p>
                  </div>
                </div>
              )
            })}
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <span>{t.costsBadge}</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">{t.costsHead}</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">{t.costsIntro}</p>

          <div className="space-y-4 mb-8">
            {t.costsItems.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">{t.costsNote}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <span>{t.siblingsBadge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">{t.siblingsHead}</h2>
            <p className="section-subheading mx-auto">{t.siblingsSub}</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {siblings.map((spoke) => (
              <BranchSpokeCard
                key={spoke.slug}
                industrySlug="makelaars"
                hubPath={hubPath}
                spoke={spoke}
                locale={locale}
                ctaLabel={t.siblingsCta}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link to={hubPath} className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
              {t.hubLink}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <span className="hidden sm:inline text-slate-300" aria-hidden>|</span>
            <div className="text-sm text-slate-500 max-w-md">
              <Link to={ROUTES['website-design'][locale]} className="text-primary-600 font-medium hover:text-primary-700">
                {t.webDesignLinkLabel}
              </Link>
              <span className="block mt-1">{t.webDesignLinkNote}</span>
            </div>
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
