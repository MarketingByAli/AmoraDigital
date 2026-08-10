import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  MapPinned,
  PawPrint,
  Search,
  Siren,
  Sparkles,
  Star,
  Stethoscope
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  Search,
  Siren,
  MapPinned,
  Stethoscope,
  Star,
  Building2,
  MapPin,
  PawPrint
] as const

const FEATURES = [
  {
    en: {
      title: 'Keywords for nearby and urgent care',
      description:
        'We target “vet [town]”, “vet near me”, “emergency vet [town]” and “animal clinic [region]” — phrases worried owners type when a dog limps at night or when they shortlist a lifelong practice, not a human dental recall query.'
    },
    nl: {
      title: 'Zoekwoorden voor nabije en spoedzorg',
      description:
        'We mikken op “dierenarts [stad]”, “dierenarts bij mij in de buurt”, “spoed dierenarts [stad]” en “dierenkliniek [regio]” — frasen die bezorgde baasjes typen wanneer een hond ’s nachts mankt of wanneer ze een levenslange praktijk shortlisten, geen menselijke tandarts-recallquery.'
    }
  },
  {
    en: {
      title: 'Emergency intent beside routine care',
      description:
        'Spoed searches need fast pack visibility; annual vaccines and check-ups need steady discovery. We plan keyword and page coverage for both tempos so panic demand and recurring wellness each find you organically.'
    },
    nl: {
      title: 'Spoedintentie naast reguliere zorg',
      description:
        'Spoedzoeken vragen snelle packzichtbaarheid; jaarlijkse vaccins en controles vragen stabiele ontdekking. We plannen zoekwoord- en paginadekking voor beide tempo’s zodat paniekvraag én terugkerende wellness je organisch vinden.'
    }
  },
  {
    en: {
      title: 'GBP with hours, emergency notes and clinic photos',
      description:
        'Google Business Profile stocked with opening hours, out-of-hours guidance, practice photos and call or directions actions — so the local pack shows a real clinic owners can trust tonight, not an empty pin with yesterday’s hours.'
    },
    nl: {
      title: 'GBP met tijden, nooddienst en praktijkfoto’s',
      description:
        'Google Bedrijfsprofiel gevuld met openingstijden, nooddienstinfo, praktijkfoto’s en bel- of routeacties — zodat de local pack een echte kliniek toont die baasjes vanavond vertrouwen, geen lege pin met gisterenstijden.'
    }
  },
  {
    en: {
      title: 'Species and service + town pages',
      description:
        'Pages for cat clinics, dog dentistry, exotic care or sterilisation per town in your catchment — matching “cat clinic [town]” and “dog dental vet” intent so pack and organic taps land on the care someone searched.'
    },
    nl: {
      title: 'Diersoort- en dienst- + stadspagina’s',
      description:
        'Pagina’s voor kattenkliniek, gebit hond, exotenzorg of sterilisatie per plaats in jouw catchment — aansluitend op “kattenkliniek [stad]” en “gebit hond dierenarts” zodat pack- en organische taps landen op de zorg die iemand zocht.'
    }
  },
  {
    en: {
      title: 'Pet-owner reviews that tip emotional shortlists',
      description:
        'Ethical ask habits after consults and procedures — baasje voices next to pack results often decide who gets the first visit when two clinics sit side by side and a family member is furry and unwell.'
    },
    nl: {
      title: 'Reviews van baasjes die emotionele shortlists tippen',
      description:
        'Ethische vraaggewoontes na consulten en ingrepen — stemmen van baasjes naast packresultaten beslissen vaak wie het eerste bezoek krijgt wanneer twee praktijken naast elkaar staan en een gezinslid vacht heeft en ziek is.'
    }
  },
  {
    en: {
      title: 'Multi-location and multi-vet clarity',
      description:
        'When you run several branches or list several clinicians, we structure location signals so Maps knows which footprint owns “vet [town]” without confusing owners about which desk answers tonight.'
    },
    nl: {
      title: 'Multi-vestiging en multi-dierenarts helderheid',
      description:
        'Bij meerdere vestigingen of meerdere clinici structureren we locatiesignalen zodat Maps weet welk footprint “dierenarts [stad]” bezit, zonder baasjes te verwarren over welke balie vanavond antwoordt.'
    }
  },
  {
    en: {
      title: 'Citations that match your clinic name and hours',
      description:
        'Directory and citation cleanup so NAP, categories and emergency notes stay consistent — mixed hours or old phone numbers send panicked owners to the wrong door at the worst moment.'
    },
    nl: {
      title: 'Citations die naam en tijden van je praktijk matchen',
      description:
        'Directory- en citation-opschoning zodat NAP, categorieën en spoednotities consistent blijven — gemengde tijden of oude telefoonnummers sturen paniekerige baasjes op het slechtste moment naar de verkeerde deur.'
    }
  },
  {
    en: {
      title: 'Lifetime value of each new household',
      description:
        'Vaccines, annual checks and chronic care make every first visit a multi-year relationship. Local SEO aims to win that first pack tap — emergencies and routine care both feed the same high-value household book.'
    },
    nl: {
      title: 'Levenslange waarde van elk nieuw huishouden',
      description:
        'Vaccins, jaarlijkse controles en chronische zorg maken elk eerste bezoek een meerjarige relatie. Lokale SEO mikt op die eerste pack-tik — spoed én reguliere zorg voeden dezelfde high-value huishoudagenda.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Clinic visibility audit',
      description:
        'We check how you appear for “vet [town]”, near-me, emergency and clinic + region queries, the local pack against neighbouring practices, and GBP hours, emergency notes, photos, reviews and citations — separate from booking UX on the website spoke.'
    },
    nl: {
      step: '01',
      title: 'Praktijkvindbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op “dierenarts [stad]”, bij-mij, spoed- en kliniek- + regioqueries, de local pack tegen buurtpraktijken, en GBP-tijden, nooddienstnotities, foto’s, reviews en citations — los van boekings-UX op de website-spoke.'
    }
  },
  {
    en: {
      step: '02',
      title: 'GBP and dual-tempo keyword set',
      description:
        'We configure Google Business Profile with accurate hours, emergency guidance and clinic imagery, then lock urgent and routine-care + town keyword sets for species and services you actually offer.'
    },
    nl: {
      step: '02',
      title: 'GBP en dual-tempo zoekwoordenset',
      description:
        'We richten Google Bedrijfsprofiel in met accurate tijden, spoedinfo en praktijkbeelden, en zetten urgente en reguliere-zorg- + stadszoekwoordensets vast voor diersoorten en diensten die je écht aanbiedt.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Species, service and town page plan',
      description:
        'We plan species and service pages as local SEO assets — distinct from warm design and online booking on the website spoke, but aligned so pack and organic taps land where a first visit or urgent call can start.'
    },
    nl: {
      step: '03',
      title: 'Diersoort-, dienst- en stadspaginaplan',
      description:
        'We plannen diersoort- en dienstpagina’s als lokale SEO-assets — los van warme uitstraling en online afspraken op de website-spoke, maar afgestemd zodat pack- en organische taps landen waar een eerste bezoek of spoedcall kan starten.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Baasje reviews and multi-location signals',
      description:
        'We launch ethical review habits after consults, strengthen citation consistency, and structure multi-branch signals so each catchment competes cleanly for emergency and routine searches.'
    },
    nl: {
      step: '04',
      title: 'Baasjesreviews en multi-locatiesignalen',
      description:
        'We starten ethische reviewgewoontes na consulten, versterken citation-consistentie, en structureren multi-vestigingssignalen zodat elk catchment schoon concurreert op spoed- én reguliere zoeken.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure first visits and lasting households',
      description:
        'Monthly reporting on map views, profile actions, service-page landings and shifts on vet, emergency and species + town keywords — read as progress toward first visits and recurring care, without promising a permanent local-pack place.'
    },
    nl: {
      step: '05',
      title: 'Meet eerste bezoeken en duurzame huishoudens',
      description:
        'Maandelijkse rapportage over kaartweergaven, profielacties, dienstpagina-landings en verschuivingen op dierenarts-, spoed- en diersoort- + stadszoekwoorden — gelezen als voortgang naar eerste bezoeken en terugkerende zorg, zonder een vaste local-packplek te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Veterinary clinics',
    crumbCurrent: 'Local SEO',
    badge: 'Veterinary local SEO',
    h1: 'Local SEO for veterinary clinics',
    heroSub:
      'Get found when pet owners search “vet [town]”, “vet near me”, “emergency vet [town]” or “animal clinic [region]” — with Google Business Profile hours and out-of-hours notes, clinic photos, species and service + town pages, baasje reviews that tip emotional shortlists, dual coverage for urgent and routine care, citations, multi-location clarity, and local-pack presence that wins both tonight’s panic call and tomorrow’s lifelong household. With 1,500+ completed projects, we know how clinics earn map trust before a neighbouring practice captures the first visit.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in the local pack means losing emergencies and lifelong clients',
    problemP1:
      'A worried owner searches for a vet nearby — often urgently — and contacts one of the first trusted, well-reviewed clinics on the map. If you are invisible in the local pack, you lose both tonight’s emergency and years of vaccines and check-ups to a practice three streets away that simply looked clearer online.',
    problemP2:
      'Veterinary local search is not a dentist “new patients” pack race and not a physiotherapist intake map game. Owners choose care for a family member with fur, often under stress, with species fit and emergency cover in mind. Miss GBP hours and spoed notes, species pages, heavy baasje reviews or dual urgent-plus-routine keywords, and high-value households never discover you until it is too late.',
    problemP3:
      'A warm website converts the visit; local SEO decides who appears when someone types “vet [town]” or “emergency vet [town]” before they open a second tab. Without organic pack presence you keep hoping for word of mouth while the clinic with fresher photos and stronger reviews owns the free discovery layer that starts first visits. Capture both emergency demand and recurring routine care — every new household can mean years of appointments.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for veterinary clinics',
    featuresSub:
      'Every deliverable serves pet owners searching for nearby or urgent care — GBP with hours, emergency notes and photos, species and service + town pages, review growth, dual-tempo keywords, citations and multi-location signals — not a website redesign and not a human healthcare local-SEO checklist with “vet” pasted in.',
    processBadge: 'How we work',
    processHead: 'How a veterinary local SEO engagement runs',
    processSub:
      'From auditing how you appear for vet, near-me and emergency queries in the local pack, to measuring actions that become first visits and lasting household relationships — including urgent and routine demand.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why veterinary clinics trust us with local-pack findability',
    whySub:
      'Pet-care-aware local SEO that treats emotional shortlists, emergency cover and species intent as the product — not human patient funnels with animal nouns pasted over.',
    whyItems: [
      {
        title: 'Pack work tuned for panic and for planning',
        desc: 'We optimise for vet, near-me, emergency and species + town phrases — the queries that start first visits after a scare and after a new puppy arrives.'
      },
      {
        title: 'GBP that shows a clinic you can reach tonight',
        desc: 'Profiles carry accurate hours, emergency guidance, practice photos and call or directions actions — trust signals without inventing cover you do not offer.'
      },
      {
        title: 'Reviews that tip family-level decisions',
        desc: 'Baasje voices after consults sit next to pack results — often the factor that wins when two clinics appear and an animal feels like family.'
      },
      {
        title: 'One partner from Maps to booking',
        desc: 'Local SEO for findability first; clinic website and Google Ads when conversion or paid urgent intent needs a push — one team that already knows your towns and species mix.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for veterinary clinics',
    costsIntro:
      'Veterinary local SEO is ongoing GBP work, species and service + town pages, dual urgent and routine keywords, citations, multi-location signals and review growth after consults. Profile action lifts often appear within weeks; holding relevance for “vet [town]” or “emergency vet [town]” against neighbouring clinics usually needs months of compounding. We plan for both emergency demand and recurring routine care — without ranking guarantees.',
    costsItems: [
      {
        title: 'Foundation (one clinic catchment)',
        desc: 'GBP overhaul with hours, emergency notes and clinic photos, citation cleanup, review process after visits, and a vet / emergency / species + town keyword set. Ideal when Maps underplays your practice or still shows stale hours.'
      },
      {
        title: 'Growth (competitive towns and dual tempos)',
        desc: 'Ongoing monthly optimisation: species and service page support, review replies, competitor monitoring, reporting on actions that lead to first visits and recurring bookings — covering both spoed spikes and steady vaccine seasons.'
      },
      {
        title: 'Multi-location or multi-species firms',
        desc: 'When you run several branches or deep species specialisations, we structure locations and pages so each catchment competes cleanly without confusing Maps about which footprint owns “vet [town]” or “cat clinic [town]”.'
      }
    ],
    costsNote:
      'Scope depends on how many towns, species and locations you cover and how crowded local clinic results are. Request a veterinary local-SEO quote — we outline GBP setup, dual-tempo keywords, catchment signals and review cadence with honest timelines, without ranking guarantees. Bring your towns and busiest species or services.',
    siblingsBadge: 'Also for veterinary clinics',
    siblingsHead: 'Pair local SEO with a clear clinic site and Google Ads',
    siblingsSub:
      'Maps and service pages put you on the shortlist; the website converts that glance into a booking or emergency call, and Google Ads can capture high-intent searches later. These services complete the silo.',
    siblingsCta: 'View service',
    hubLink: 'Back to veterinary clinic marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside veterinary care we offer broader local SEO. Clinic engagements follow the process on this page.',
    ctaHeading: 'Ready to show up for the next nearby search and the next emergency?',
    ctaSub:
      'Share your towns, species mix, emergency cover and how owners find you today. We scope GBP, species pages and baasje reviews with honest timelines — without promising a fixed local-pack place.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Dierenartsen',
    crumbCurrent: 'Lokale SEO',
    badge: 'Lokale SEO voor dierenartsen',
    h1: 'Lokale SEO voor dierenartsen',
    heroSub:
      'Word gevonden wanneer baasjes “dierenarts [stad]”, “dierenarts bij mij in de buurt”, “spoed dierenarts [stad]” of “dierenkliniek [regio]” zoeken — met Google Bedrijfsprofiel-tijden en nooddienstnotities, praktijkfoto’s, diersoort- en dienst- + stadspagina’s, reviews van baasjes die emotionele shortlists tippen, duale dekking voor spoed en reguliere zorg, citations, multi-locatiehelderheid, en local-packaanwezigheid die zowel vanavondspaniek als morgen’s levenslange huishouden wint. Met 1.500+ afgeronde projecten weten we hoe praktijken kaartvertrouwen verdienen vóór een buurtpraktijk het eerste bezoek pakt.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in de local pack betekent spoedgevallen én levenslange klanten missen',
    problemP1:
      'Een bezorgd baasje zoekt een dierenarts in de buurt — vaak urgent — en neemt contact op met één van de eerste vertrouwde, goed gereviewde praktijken op de kaart. Ben je onzichtbaar in de local pack, dan verlies je zowel vanavondspaniek als jaren vaccins en controles aan een praktijk drie straten verder die online simpelweg helderder oogde.',
    problemP2:
      'Lokaal dierenartszoeken is geen tandarts-“nieuwe patiënten”-packrace en geen fysiotherapeut-intake-kaartspel. Baasjes kiezen zorg voor een gezinslid met vacht, vaak onder stress, met diersoortfit en spoeddekking in het achterhoofd. Mis je GBP-tijden en spoednotities, diersoortpagina’s, zware baasjesreviews of duale spoed-plus-reguliere zoekwoorden, dan ontdekken high-value huishoudens je nooit op tijd.',
    problemP3:
      'Een warme website converteert het bezoek; lokale SEO beslist wie verschijnt wanneer iemand “dierenarts [stad]” of “spoed dierenarts [stad]” typt vóór een tweede tab opent. Zonder organische packaanwezigheid blijf je hopen op mond-tot-mond terwijl de praktijk met frissere foto’s en sterkere reviews de gratis ontdekkingslaag bezit die eerste bezoeken start. Vang zowel spoedvraag als terugkerende reguliere zorg — elk nieuw huishouden kan jaren afspraken betekenen.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor dierenartsen',
    featuresSub:
      'Elke deliverable dient baasjes die nabije of spoedzorg zoeken — GBP met tijden, nooddienstnotities en foto’s, diersoort- en dienst- + stadspagina’s, reviewgroei, dual-tempo zoekwoorden, citations en multi-locatiesignalen — geen websiteredesign en geen menselijke zorg-lokale-SEO-checklist met “dierenarts” erin geplakt.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor dierenartsen verloopt',
    processSub:
      'Van een audit van hoe je verschijnt op dierenarts-, bij-mij- en spoedqueries in de local pack, tot meten van acties die eerste bezoeken en duurzame huishoudrelaties worden — inclusief spoed- en reguliere vraag.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom dierenartsenpraktijken hun local-packvindbaarheid aan ons toevertrouwen',
    whySub:
      'Dierenzorgbewuste lokale SEO die emotionele shortlists, spoeddekking en diersoortintentie als product behandelt — geen menselijke patiëntentrechters met dierennamen eroverheen geplakt.',
    whyItems: [
      {
        title: 'Packwerk afgestemd op paniek én planning',
        desc: 'We optimaliseren voor dierenarts-, bij-mij-, spoed- en diersoort- + stadsfrasen — de queries die eerste bezoeken starten na een schrik én na een nieuwe pup.'
      },
      {
        title: 'GBP dat een bereikbare kliniek vanavond toont',
        desc: 'Profielen dragen accurate tijden, spoedinfo, praktijkfoto’s en bel- of routeacties — vertrouwenssignalen zonder dekking te verzinnen die je niet biedt.'
      },
      {
        title: 'Reviews die gezinsbeslissingen tippen',
        desc: 'Stemmen van baasjes na consulten staan naast packresultaten — vaak de factor die wint wanneer twee praktijken verschijnen en een dier als gezin voelt.'
      },
      {
        title: 'Eén partner van Maps tot boeking',
        desc: 'Eerst lokale SEO voor vindbaarheid; praktijksite en Google Ads wanneer conversie of betaalde spoedintentie een duwtje nodig heeft — één team dat jouw plaatsen en diersoortmix al kent.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor dierenartsen',
    costsIntro:
      'Lokale SEO voor dierenartsen is doorlopend GBP-werk, diersoort- en dienst- + stadspagina’s, duale spoed- en reguliere zoekwoorden, citations, multi-locatiesignalen en reviewgroei na consulten. Profielacties stijgen vaak binnen enkele weken; relevantie vasthouden op “dierenarts [stad]” of “spoed dierenarts [stad]” tegen buurtpraktijken vraagt meestal maanden van compounding. We plannen voor zowel spoedvraag als terugkerende reguliere zorg — zonder rankinggaranties.',
    costsItems: [
      {
        title: 'Foundation (één praktijcatchment)',
        desc: 'GBP-overhaul met tijden, nooddienstnotities en praktijkfoto’s, citation-opschoning, reviewproces na bezoeken, en een dierenarts-/spoed-/diersoort- + stadszoekwoordenset. Ideaal wanneer Maps je praktijk onderschat of nog verouderde tijden toont.'
      },
      {
        title: 'Growth (concurrerende plaatsen en duale tempo’s)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor diersoort- en dienstpagina’s, reviewantwoorden, concurrentiemonitoring, rapportage op acties die tot eerste bezoeken en terugkerende boekingen leiden — voor spoedpieken én stabiele vaccinseizoenen.'
      },
      {
        title: 'Multi-locatie of multi-soort praktijken',
        desc: 'Bij meerdere vestigingen of diepe diersoort-specialisaties structureren we locaties en pagina’s zodat elk catchment schoon concurreert zonder Maps te verwarren over wie “dierenarts [stad]” of “kattenkliniek [stad]” bezit.'
      }
    ],
    costsNote:
      'Scope hangt af van hoeveel plaatsen, diersoorten en locaties je dekt en hoe druk lokale praktijkresultaten zijn. Vraag een lokale-SEO-offerte voor dierenartsen aan — we schetsen GBP-opzet, dual-tempo zoekwoorden, catchment-signalen en reviewritme met eerlijke planning, zonder rankinggaranties. Neem je plaatsen en drukste diersoorten of diensten mee.',
    siblingsBadge: 'Ook voor dierenartsen',
    siblingsHead: 'Combineer lokale SEO met een heldere praktijksite en Google Ads',
    siblingsSub:
      'Maps en dienstpagina’s zetten je op de shortlist; de website maakt van die blik een boeking of spoedcall, en Google Ads kan later high-intent zoeken vangen. Deze diensten maken de silo compleet.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar dierenartsenmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten dierenzorg bieden we bredere lokale SEO. Praktijktrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om zichtbaar te zijn bij de volgende buurtzoek én de volgende spoed?',
    ctaSub:
      'Deel je plaatsen, diersoortmix, spoeddekking en hoe baasjes je vandaag vinden. We scopen GBP, diersoortpagina’s en baasjesreviews met eerlijke doorlooptijden — zonder een vaste local-packplek te beloven.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function DierenartsenLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-dierenartsen'][locale]
  const firmSpokes = BRANCH_SPOKES.dierenartsen
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
              <PawPrint className="w-4 h-4" aria-hidden />
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
                industrySlug="dierenartsen"
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
