import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CalendarRange,
  CheckCircle2,
  Images,
  Leaf,
  MapPin,
  MapPinned,
  Search,
  Sparkles,
  Star,
  Trees
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  Search,
  Leaf,
  MapPinned,
  Images,
  CalendarRange,
  Star,
  MapPin,
  CheckCircle2
] as const

const FEATURES = [
  {
    en: {
      title: 'Keywords that fill spring and onderhoud calendars',
      description:
        'We target “landscaper [town]”, “garden design [town]”, “paving [region]” and “garden maintenance [town]” — phrases homeowners type when they want a terrace built or a seasonal mowing route, not a kitchen renovation or boiler repair.'
    },
    nl: {
      title: 'Zoekwoorden die voorjaars- en onderhoudsagenda’s vullen',
      description:
        'We mikken op “hovenier [stad]”, “tuinaanleg [stad]”, “bestrating [regio]” en “tuinonderhoud [stad]” — frasen die huiseigenaren typen wanneer ze een terras willen of een seizoensmaaironde, geen keukenverbouwing of cv-reparatie.'
    }
  },
  {
    en: {
      title: 'Aanleg intent vs onderhoud intent',
      description:
        'One-off design and planting searches carry higher budgets; recurring onderhoud searches fill quieter months. We plan keyword and page coverage for both engines so spring peaks and year-round routes each get organic discovery.'
    },
    nl: {
      title: 'Aanlegintentie vs onderhoudintentie',
      description:
        'Eenmalige ontwerp- en beplantingszoeken dragen hogere budgets; terugkerend onderhoud vult stillere maanden. We plannen zoekwoord- en paginadekking voor beide motoren zodat voorjaarspieken en jaarrond-rondes elk organische ontdekking krijgen.'
    }
  },
  {
    en: {
      title: 'Service and town landing pages',
      description:
        'Pages for garden design, paving, planting and maintenance per town in your radius — so Maps and organic clicks land on the outdoor service someone searched, not a vague “green services” homepage.'
    },
    nl: {
      title: 'Dienst- en stadslandingspagina’s',
      description:
        'Pagina’s voor tuinontwerp, bestrating, beplanting en onderhoud per plaats in jouw straal — zodat Maps- en organische klikken op de buitendienst landen die iemand zocht, geen vage “groendiensten”-homepage.'
    }
  },
  {
    en: {
      title: 'GBP with before/after garden photos',
      description:
        'Google Business Profile as a service-area landscaper footprint — stocked with finished terraces, borders and ponds so the local pack shows outdoor craft, not an empty shop pin or scaffolding stock.'
    },
    nl: {
      title: 'GBP met voor/na-tuinfoto’s',
      description:
        'Google Bedrijfsprofiel als service-area hoveniersvoetafdruk — gevuld met afgeronde terrassen, borders en vijvers zodat de local pack buitenambacht toont, geen lege winkelpin of stocksteigers.'
    }
  },
  {
    en: {
      title: 'Visibility timed ahead of spring peak',
      description:
        'Garden search volume spikes in spring. We build GBP, pages and reviews before planting season so calendars fill while competitors still scramble — winter quiet months are when findability compounds.'
    },
    nl: {
      title: 'Zichtbaarheid getimed vóór de voorjaarspiek',
      description:
        'Tuinzoekvolume piekt in het voorjaar. We bouwen GBP, pagina’s en reviews vóór het plantseizoen zodat agenda’s vollopen terwijl concurrenten nog scramble — stillere wintermaanden zijn wanneer vindbaarheid compoundt.'
    }
  },
  {
    en: {
      title: 'Homeowner reviews that win the shortlist',
      description:
        'Ethical ask habits after plot handover so Maps shows voices about planting, finish and communication — often the factor that beats a lead-platform badge when two landscapers sit side by side in the pack.'
    },
    nl: {
      title: 'Reviews van huiseigenaren die de shortlist winnen',
      description:
        'Ethische vraaggewoontes na perceeloplevering zodat Maps stemmen toont over beplanting, afwerking en communicatie — vaak de factor die een leadplatform-badge verslaat wanneer twee hoveniers naast elkaar in de pack staan.'
    }
  },
  {
    en: {
      title: 'Multi-town catchment signals',
      description:
        'Name, category and town consistency across directories for the radius you drive — aligned with garden services you actually sell, not a fake single-street pin that fits a salon but not a landscaper covering a region.'
    },
    nl: {
      title: 'Multi-plaats catchment-signalen',
      description:
        'Naam-, categorie- en plaatsconsistentie over directories voor de straal die je rijdt — afgestemd op tuindiensten die je écht verkoopt, geen nep single-straatpin die bij een salon past maar niet bij een hovenier die een regio dekt.'
    }
  },
  {
    en: {
      title: 'Organic share versus quote platforms',
      description:
        'Lead marketplaces rent introductions. Local SEO aims at the pack for your town and garden phrases — so high-intent plot requests start on Maps and service pages, not only on a per-lead Werkspot-style listing.'
    },
    nl: {
      title: 'Organisch aandeel versus offerteplatforms',
      description:
        'Leadmarktplaatsen huren introducties. Lokale SEO mikt op de pack voor jouw plaats- en tuinfrases — zodat high-intent perceelaanvragen op Maps en dienstpagina’s starten, niet alleen op een per-lead Werkspot-achtige listing.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Garden visibility audit',
      description:
        'We check how you appear for “landscaper [town]”, garden design, paving and maintenance queries, the local pack against nearby firms and lead-platform ads, and GBP garden photos, reviews and citation consistency — separate from gallery UX on the website spoke.'
    },
    nl: {
      step: '01',
      title: 'Tuinvindbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op “hovenier [stad]”, tuinaanleg-, bestrating- en onderhoudsqueries, de local pack tegen nabije bedrijven en leadplatform-ads, en GBP-tuinfoto’s, reviews en citation-consistentie — los van galerij-UX op de website-spoke.'
    }
  },
  {
    en: {
      step: '02',
      title: 'GBP and seasonal keyword set',
      description:
        'We configure Google Business Profile for a landscaper service-area footprint with before/after garden imagery, then lock aanleg and onderhoud + town keyword sets for services and places you actually cover — timed toward the next spring peak.'
    },
    nl: {
      step: '02',
      title: 'GBP en seizoenszoekwoordenset',
      description:
        'We richten Google Bedrijfsprofiel in voor een hoveniers-service-area-voetafdruk met voor/na-tuinbeelden, en zetten aanleg- en onderhoud- + stadszoekwoordensets vast voor diensten en plaatsen die je écht dekt — getimed op de volgende voorjaarspiek.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Service and town page plan',
      description:
        'We plan service and town pages as local SEO assets — distinct from portfolio storytelling and quote forms on the website spoke, but aligned so pack and organic taps land where a dated garden or onderhoud request can start.'
    },
    nl: {
      step: '03',
      title: 'Dienst- en stadspaginaplan',
      description:
        'We plannen dienst- en stadspagina’s als lokale SEO-assets — los van portfolioverhalen en offerteforms op de website-spoke, maar afgestemd zodat pack- en organische taps landen waar een gedateerde tuin- of onderhoudsaanvraag kan starten.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Reviews, citations and platform pressure',
      description:
        'We launch review habits after plot handover, strengthen multi-town citation signals, and track how organic pack presence reduces dependence on quote platforms over seasons.'
    },
    nl: {
      step: '04',
      title: 'Reviews, citations en platformdruk',
      description:
        'We starten reviewgewoontes na perceeloplevering, versterken multi-plaats citation-signalen, en volgen hoe organische packaanwezigheid afhankelijkheid van offerteplatforms over seizoenen vermindert.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure plot requests, not vanity ranks',
      description:
        'Monthly reporting on map views, profile actions, service-page landings and shifts on landscaper and garden + town keywords — read as progress toward dated design quotes and onderhoud routes, without promising a permanent local-pack place.'
    },
    nl: {
      step: '05',
      title: 'Meet perceelaanvragen, geen vanity-ranks',
      description:
        'Maandelijkse rapportage over kaartweergaven, profielacties, dienstpagina-landings en verschuivingen op hovenier- en tuin- + stadszoekwoorden — gelezen als voortgang naar gedateerde ontwerpoffertes en onderhoudsrondes, zonder een vaste local-packplek te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Landscapers',
    crumbCurrent: 'Local SEO',
    badge: 'Landscaper local SEO',
    h1: 'Local SEO for landscapers',
    heroSub:
      'Get found when homeowners search “landscaper [town]”, “garden design [town]”, “paving [region]” or “garden maintenance [town]” — with service and town pages, Google Business Profile stocked with before/after garden photos, reviews that win spring shortlists, multi-town catchment signals, seasonal timing ahead of planting peaks, and organic discovery that competes with quote platforms for the local pack. With 1,500+ completed projects, we know how landscapers earn map trust before the season’s plots are booked elsewhere.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in spring search means missing the season’s garden projects',
    problemP1:
      'Garden demand spikes in spring and homeowners book the visible, well-reviewed landscapers first. If you are invisible in local search, you miss the season’s terraces and planting jobs to nearby competitors — and keep paying platforms for leads while organic pack results fill someone else’s calendar.',
    problemP2:
      'Landscaper local search splits aanleg intent (one-off, higher budget) from onderhoud intent (recurring routes), and volume is heavily seasonal — not a contractor kitchen-renovation map race and not an installer boiler-emergency pack. Miss service and town pages, garden photo GBP, homeowner reviews and pre-season timing, and you optimise for the wrong geography while spring demand lands on firms that simply look more findable.',
    problemP3:
      'A clear website converts the visit; local SEO decides who appears when someone types “landscaper [town]” or “garden maintenance [town]” before they open a lead marketplace. Without organic pack presence you keep renting introductions while the firm with sharper garden photos and fresher homeowner reviews owns the free discovery layer that starts dated plot quotes. Build visibility ahead of spring — winter is when compounding matters most.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for landscapers',
    featuresSub:
      'Every deliverable serves homeowners searching outdoor work by town and service — GBP with project photos, service and town pages, aanleg and onderhoud keywords, seasonal timing, review growth, catchment signals, citations and organic share versus quote platforms — not a website redesign and not a contractor checklist with a hedge swapped in.',
    processBadge: 'How we work',
    processHead: 'How a landscaper local SEO engagement runs',
    processSub:
      'From auditing how you appear for town and garden queries in the local pack, to measuring actions that become dated design quotes and onderhoud routes — including spring timing and platform pressure.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why landscapers trust us with local-pack findability',
    whySub:
      'Garden-aware local SEO that treats spring peaks, aanleg versus onderhoud intent and quote-platform competition as the product — not kitchen renovations or boiler emergencies.',
    whyItems: [
      {
        title: 'Pack work tuned for garden search intent',
        desc: 'We optimise for landscaper, garden design, paving and maintenance + town phrases — the queries that start plot quotes before planting season fills.'
      },
      {
        title: 'GBP that shows finished gardens',
        desc: 'Profiles carry before/after outdoor photos, categories and quote actions that look real on Maps — craft proof without inventing projects you did not finish.'
      },
      {
        title: 'Reviews that beat platform badges',
        desc: 'Homeowner voices sit next to pack results — often the factor that wins when two landscapers appear beside a lead-marketplace ad.'
      },
      {
        title: 'One partner from Maps to quote',
        desc: 'Local SEO for findability first; garden website and Google Ads when conversion or paid seasonal intent needs a push — one team that already knows your towns and services.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for landscapers',
    costsIntro:
      'Landscaper local SEO is ongoing GBP work, service and town pages, local keywords, citations, catchment signals and review growth after plot handover. Profile action lifts often appear within weeks; holding relevance for “landscaper [town]” against quote platforms usually needs months of compounding. Build ahead of the spring peak — winter quiet months are when findability compounds most. We share realistic enquiry trends, not guaranteed rankings.',
    costsItems: [
      {
        title: 'Foundation (one radius catchment)',
        desc: 'GBP overhaul with garden project photos, citation cleanup, review process after handover, and a landscaper / garden + town keyword set. Ideal when Maps underplays your firm or still looks like a shop pin.'
      },
      {
        title: 'Growth (competitive spring towns)',
        desc: 'Ongoing monthly optimisation: service and town page support, review replies, competitor monitoring against platforms, reporting on actions that lead to dated plot quotes rather than vanity map ranks — timed toward the next planting season.'
      },
      {
        title: 'Multi-town or dual-engine firms',
        desc: 'When you cover several towns or sell both heavy aanleg and recurring onderhoud, we structure locations and pages so each catchment competes cleanly without confusing Maps about which footprint owns “landscaper [town]” or “garden maintenance [town]”.'
      }
    ],
    costsNote:
      'Scope depends on how many towns and garden services you cover and how crowded local platform results are. Request a landscaper local-SEO quote — we outline GBP setup, seasonal keywords, catchment signals and review cadence with honest timelines, without ranking guarantees. Bring your towns and busiest services so we size the plan around real spring and onderhoud demand.',
    siblingsBadge: 'Also for landscapers',
    siblingsHead: 'Pair local SEO with a clear garden site and Google Ads',
    siblingsSub:
      'Maps and service pages put you on the shortlist; the website converts that glance into a design quote or onderhoud request, and Google Ads can capture high-intent seasonal searches later. These services complete the silo.',
    siblingsCta: 'View service',
    hubLink: 'Back to landscaper marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside landscaping we offer broader local SEO. Garden engagements follow the process on this page.',
    ctaHeading: 'Ready to show up before spring garden demand books elsewhere?',
    ctaSub:
      'Tell us which towns you plant and maintain, how spring aanleg peaks and winter onderhoud fill your calendar, and whether before/after garden proof is ready for Maps. We plan GBP, seasonal town pages and homeowner review asks with honest timelines — no promised pack slot for “landscaper [town]”.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Hoveniers',
    crumbCurrent: 'Lokale SEO',
    badge: 'Lokale SEO voor hoveniers',
    h1: 'Lokale SEO voor hoveniers',
    heroSub:
      'Word gevonden wanneer huiseigenaren “hovenier [stad]”, “tuinaanleg [stad]”, “bestrating [regio]” of “tuinonderhoud [stad]” zoeken — met dienst- en stadspagina’s, Google Bedrijfsprofiel gevuld met voor/na-tuinfoto’s, reviews die voorjaars-shortlists winnen, multi-plaats catchment-signalen, seizoenstiming vóór plantpieken, en organische ontdekking die concurreert met offerteplatforms om de local pack. Met 1.500+ afgeronde projecten weten we hoe hoveniers kaartvertrouwen verdienen vóór de seizoenspercelen elders zijn geboekt.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in voorjaarszoeken betekent het seizoensprojecten missen',
    problemP1:
      'Tuinvraag piekt in het voorjaar en huiseigenaren boeken eerst de zichtbare, goed gereviewde hoveniers. Ben je onzichtbaar in lokaal zoeken, dan mis je de seizoensterrassen en beplantingsklussen aan nabije concurrenten — en blijf je platforms betalen voor leads terwijl organische packresultaten de agenda van een ander vullen.',
    problemP2:
      'Lokaal hovenierszoeken splitst aanlegintentie (eenmalig, hoger budget) van onderhoudintentie (terugkerende rondes), en volume is zwaar seizoensgebonden — geen aannemers-keukenrenovatie-kaartpack en geen installateurs-cv-spoedpack. Mis je dienst- en stadspagina’s, tuinfoto-GBP, reviews van huiseigenaren en timing vóór het seizoen, dan optimaliseer je voor de verkeerde geografie terwijl voorjaarsvraag landt bij bedrijven die simpelweg vindbaarder ogen.',
    problemP3:
      'Een heldere website converteert het bezoek; lokale SEO beslist wie verschijnt wanneer iemand “hovenier [stad]” of “tuinonderhoud [stad]” typt vóór een leadmarktplaats opent. Zonder organische packaanwezigheid blijf je introducties huren terwijl het bedrijf met scherpere tuinfoto’s en frissere reviews van huiseigenaren de gratis ontdekkingslaag bezit die gedateerde perceeloffertes start. Bouw zichtbaarheid vóór het voorjaar — winter is wanneer compounding het meest telt.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor hoveniers',
    featuresSub:
      'Elke deliverable dient huiseigenaren die buitenwerk zoeken op plaats en dienst — GBP met projectfoto’s, dienst- en stadspagina’s, aanleg- en onderhoudszoekwoorden, seizoenstiming, reviewgroei, catchment-signalen, citations en organisch aandeel versus offerteplatforms — geen websiteredesign en geen aannemerschecklist met een haag erin geplakt. We bouwen vindbaarheid voor de shortlist vóór het plantseizoen, niet voor een generieke “bedrijf bij mij”-template.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor een hovenier verloopt',
    processSub:
      'Van een audit van hoe je verschijnt op stads- en tuinqueries in de local pack, tot meten van acties die gedateerde ontwerpoffertes en onderhoudsrondes worden — inclusief voorjaarstiming en druk van offerteplatforms.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom hoveniers hun local-packvindbaarheid aan ons toevertrouwen',
    whySub:
      'Tuinbewuste lokale SEO die voorjaarspieken, aanleg- versus onderhoudintentie en concurrentie met offerteplatforms als product behandelt — geen keukenrenovaties of cv-spoed. We kennen het verschil tussen een perceelagenda vullen en een verbouwing verkopen.',
    whyItems: [
      {
        title: 'Packwerk afgestemd op tuinzoekintentie',
        desc: 'We optimaliseren voor hovenier-, tuinaanleg-, bestrating- en onderhoud- + stadsfrasen — de queries die perceeloffertes starten vóór het plantseizoen volloopt, niet voor een generieke retailcategorie.'
      },
      {
        title: 'GBP dat afgeronde tuinen toont',
        desc: 'Profielen dragen voor/na-buitenfoto’s, categorieën en offerteacties die op Maps echt ogen — ambachtbewijs zonder projecten te verzinnen die je niet hebt opgeleverd, zodat huiseigenaren craft zien vóór ze bellen.'
      },
      {
        title: 'Reviews die platformbadges verslaan',
        desc: 'Stemmen van huiseigenaren staan naast packresultaten — vaak de factor die wint wanneer twee hoveniers naast een leadmarktplaats-ad verschijnen in de top van de shortlist.'
      },
      {
        title: 'Eén partner van Maps tot offerte',
        desc: 'Eerst lokale SEO voor vindbaarheid; tuinsite en Google Ads wanneer conversie of betaalde seizoensintentie een duwtje nodig heeft — één team dat jouw plaatsen, tuindiensten en onderhoudsrondes al kent.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor hoveniers',
    costsIntro:
      'Lokale SEO voor hoveniers is doorlopend GBP-werk, dienst- en stadspagina’s, lokale zoekwoorden, citations, catchment-signalen en reviewgroei na perceeloplevering. Profielacties stijgen vaak binnen enkele weken; relevantie vasthouden op “hovenier [stad]” tegen offerteplatforms vraagt meestal maanden van compounding. Bouw vóór de voorjaarspiek — stillere wintermaanden zijn wanneer vindbaarheid het meest compoundt. We delen realistische aanvraagtrends voor ontwerp en onderhoud, geen gegarandeerde rankings of vaste packplaats.',
    costsItems: [
      {
        title: 'Foundation (één straal-catchment)',
        desc: 'GBP-overhaul met tuinprojectfoto’s, citation-opschoning, reviewproces na oplevering, en een hovenier-/tuin- + stadszoekwoordenset. Ideaal wanneer Maps je bedrijf onderschat of nog oogt als winkelpin terwijl je tuinen in de regio en omliggende plaatsen doet.'
      },
      {
        title: 'Growth (concurrerende voorjaarsplaatsen)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor dienst- en stadspagina’s, reviewantwoorden, concurrentiemonitoring tegen platforms, rapportage op acties die tot gedateerde perceeloffertes leiden in plaats van vanity-kaartranks — getimed op het volgende plantseizoen.'
      },
      {
        title: 'Multi-plaats of dual-engine bedrijven',
        desc: 'Bij meerdere plaatsen of zowel zware aanleg als terugkerend onderhoud structureren we locaties en pagina’s zodat elk catchment schoon concurreert zonder Maps te verwarren over wie “hovenier [stad]” of “tuinonderhoud [stad]” bezit.'
      }
    ],
    costsNote:
      'Scope hangt af van hoeveel plaatsen en tuindiensten je dekt en hoe druk lokale platformresultaten zijn. Vraag een lokale-SEO-offerte voor hoveniers aan — we schetsen GBP-opzet, seizoenszoekwoorden, catchment-signalen en reviewritme met eerlijke planning, zonder rankinggaranties. Neem je plaatsen, ophaalstraal en drukste diensten mee, zodat we het plan rond echte voorjaars- en onderhoudsvraag dimensioneren en niet rond een generieke checklist.',
    siblingsBadge: 'Ook voor hoveniers',
    siblingsHead: 'Combineer lokale SEO met een heldere tuinsite en Google Ads',
    siblingsSub:
      'Maps en dienstpagina’s zetten je op de shortlist; de website maakt van die blik een ontwerpofferte of onderhoudsaanvraag, en Google Ads kan later high-intent seizoenszoeken vangen. Deze diensten maken de silo compleet — lokale SEO eerst voor organische packzichtbaarheid.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar hoveniersmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten hovenierswerk bieden we bredere lokale SEO. Tuintrajecten volgen het proces op deze pagina, met focus op stadszoeken, voor/na-tuinfoto’s, seizoenstiming en concurrentie met offerteplatforms.',
    ctaHeading: 'Klaar om zichtbaar te zijn vóór voorjaars-tuinvraag elders boekt?',
    ctaSub:
      'Vertel in welke plaatsen je aanlegt en onderhoudt, hoe voorjaarsaanleg en winteronderhoud je agenda vullen, en of voor/na-tuinbewijs klaar is voor Maps. We plannen GBP, seizoensstadspagina’s en reviewvragen aan huiseigenaren met eerlijke doorlooptijden — geen beloofde packplek voor “hovenier [plaats]”.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function HoveniersLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-hoveniers'][locale]
  const firmSpokes = BRANCH_SPOKES.hoveniers
  const siblings = firmSpokes.filter((spoke) =>
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
              <Trees className="w-4 h-4" aria-hidden />
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

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-10 max-w-3xl mx-auto">
            {siblings.map((spoke) => (
              <BranchSpokeCard
                key={spoke.slug}
                industrySlug="hoveniers"
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
              <Link to={ROUTES['local-seo'][locale]} className="text-primary-600 font-medium hover:text-primary-700">
                {t.supportLinkLabel}
              </Link>
              <span className="block mt-1">{t.supportLinkNote}</span>
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
