import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  CarFront,
  CheckCircle2,
  MapPin,
  MapPinned,
  Search,
  Smartphone,
  Sparkles,
  Star,
  Users
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  Search,
  MapPinned,
  Award,
  Star,
  CarFront,
  MapPin,
  Smartphone,
  Users
] as const

const FEATURES = [
  {
    en: {
      title: 'Keywords that fill the lesson calendar',
      description:
        'We target “driving school [city]”, “driving lessons [city]”, “intensive driving course [region]” and “automatic driving lesson [city]” — phrases a seventeen-year-old types on a phone before they shortlist three schools with strong reviews.'
    },
    nl: {
      title: 'Zoekwoorden die de lessenagenda vullen',
      description:
        'We mikken op “rijschool [stad]”, “rijlessen [stad]”, “spoedcursus rijbewijs [regio]” en “automaat rijles [stad]” — frasen die een zeventienjarige op de telefoon typt vóór ze drie scholen met sterke reviews shortlisten. Prijsvergelijkend zoekgedrag op mobiel is hier de norm, geen bijzaak.'
    }
  },
  {
    en: {
      title: 'City and lesson-type landing pages',
      description:
        'Separate pages for intensive courses, automatic, motorcycle and standard B lessons per town — so Maps and organic clicks land on the pack they want, not a vague “we teach driving” homepage.'
    },
    nl: {
      title: 'Stads- en lestype-landingspagina’s',
      description:
        'Aparte pagina’s voor spoedcursus, automaat, motor en standaard B-lessen per plaats — zodat Maps- en organische klikken op het pakket landen dat ze willen, niet op een vage “wij geven rijles”-homepage.'
    }
  },
  {
    en: {
      title: 'GBP with pass-rate context and graduate photos',
      description:
        'Google Business Profile stocked with passed-student photos, categories and actions toward a trial or enrolment — so the local pack shows CBR trust and faces, not empty shop hours nobody visits.'
    },
    nl: {
      title: 'GBP met slagingscontext en geslaagd-foto’s',
      description:
        'Google Bedrijfsprofiel gevuld met foto’s van geslaagden, categorieën en acties naar proefles of inschrijving — zodat de local pack CBR-vertrouwen en gezichten toont, geen lege winkeluren die niemand bezoekt.'
    }
  },
  {
    en: {
      title: 'Reviews that decide the teenage shortlist',
      description:
        'Ethical ask habits after exams so Maps shows voices from passed students — often the factor that beats a comparison-site badge when a parent and learner pick from the top three pack results.'
    },
    nl: {
      title: 'Reviews die de tiener-shortlist beslissen',
      description:
        'Ethische vraaggewoontes na examens zodat Maps stemmen van geslaagden toont — vaak de factor die een vergelijkingssite-badge verslaat wanneer ouder en leerling uit de top drie packresultaten kiezen.'
    }
  },
  {
    en: {
      title: 'Catchment with pickup points and multi-town cover',
      description:
        'Service areas and pickup towns match how schools actually collect learners — so local signals cover every place you teach without inventing a single-street pin that fits a dentist chair, not a driving school.'
    },
    nl: {
      title: 'Werkgebied met ophaalpunten en multi-plaatsdekking',
      description:
        'Werkgebieden en ophaalplaatsen passen bij hoe scholen leerlingen écht ophalen — zodat lokale signalen elke plaats dekken waar je lesgeeft, zonder een één-straatpin te verzinnen die bij een tandartsstoel past, niet bij een rijschool.'
    }
  },
  {
    en: {
      title: 'Organic share versus comparison sites',
      description:
        'Driving-school directories rent introductions. Local SEO aims to own the local pack for your city phrases — so high-intent enrolments start on Maps and city pages, not only on a per-lead comparison listing.'
    },
    nl: {
      title: 'Organisch aandeel versus vergelijkingssites',
      description:
        'Rijschool-vergelijkingssites huren introducties. Lokale SEO mikt op de local pack voor jouw stadsfrasen — zodat high-intent inschrijvingen op Maps en stadspagina’s starten, niet alleen op een per-lead vergelijkingslisting.'
    }
  },
  {
    en: {
      title: 'Mobile local search as the default path',
      description:
        'Young, price-comparing learners search on phones between school and home. We strengthen pack presence and city pages for that mobile shortlist moment — not a desktop brochure strategy built for a gym membership funnel.'
    },
    nl: {
      title: 'Mobiel lokaal zoeken als standaardpad',
      description:
        'Jonge, prijsvergelijkende leerlingen zoeken op telefoons tussen school en thuis. We versterken packaanwezigheid en stadspagina’s voor dat mobiele shortlistmoment — geen desktopbrochurestrategie gebouwd voor een sportschool-abonnementstrechter.'
    }
  },
  {
    en: {
      title: 'Citations that match school and catchment',
      description:
        'Name, category and town consistency across directories so Maps trusts your footprint — aligned with the lesson types and pickup zones you actually run, not a vague “education services” blob.'
    },
    nl: {
      title: 'Citations die school en catchment matchen',
      description:
        'Naam-, categorie- en plaatsconsistentie over directories zodat Maps jouw voetafdruk vertrouwt — afgestemd op lestypes en ophaalzones die je écht runt, geen vage “onderwijsdiensten”-blob.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'School visibility audit',
      description:
        'We check how you appear for “driving school [city]”, lesson and intensive-course queries, the local pack against nearby schools and comparison-site ads, and GBP graduate photos, reviews and citation consistency — separate from website pack-and-pass-rate UX on the website spoke.'
    },
    nl: {
      step: '01',
      title: 'Schoolvindbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op “rijschool [stad]”, les- en spoedcursusqueries, de local pack tegen nabije scholen en vergelijkingssite-ads, en GBP-geslaagd-foto’s, reviews en citation-consistentie — los van website-pakket- en slagings-UX op de website-spoke. Zo weten we waar de shortlist jou nu mist.'
    }
  },
  {
    en: {
      step: '02',
      title: 'GBP and city keyword set',
      description:
        'We configure Google Business Profile for a driving-school footprint with pass-rate context and graduate imagery, then lock city and lesson-type keyword sets for towns and packs you actually sell — not one fake retail category dump.'
    },
    nl: {
      step: '02',
      title: 'GBP en stadszoekwoordenset',
      description:
        'We richten Google Bedrijfsprofiel in voor een rijschoolvoetafdruk met slagingscontext en geslaagd-beelden, en zetten stads- en lestype-zoekwoordensets vast voor plaatsen en pakketten die je écht verkoopt — geen single nep-retailcategoriedump.'
    }
  },
  {
    en: {
      step: '03',
      title: 'City and lesson-type page plan',
      description:
        'We plan city and lesson-type pages as local SEO assets — distinct from package storytelling and enrolment forms on the website spoke, but aligned so pack and organic taps land where a trial or sign-up can start.'
    },
    nl: {
      step: '03',
      title: 'Stads- en lestype-paginaplan',
      description:
        'We plannen stads- en lestypepagina’s als lokale SEO-assets — los van pakketverhalen en inschrijfforms op de website-spoke, maar afgestemd zodat pack- en organische taps landen waar een proefles of inschrijving kan starten.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Reviews, pickup signals and comparison pressure',
      description:
        'We launch review habits after exams, strengthen pickup-town and citation signals, and track how organic local-pack presence reduces dependence on comparison sites over time.'
    },
    nl: {
      step: '04',
      title: 'Reviews, ophaalsignalen en vergelijkingsdruk',
      description:
        'We starten reviewgewoontes na examens, versterken ophaalplaats- en citation-signalen, en volgen hoe organische local-packaanwezigheid afhankelijkheid van vergelijkingssites in de tijd vermindert.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure enrolments, not vanity ranks',
      description:
        'Monthly reporting on map views, profile actions, city-page landings and shifts on driving-school and lesson + city keywords — read as progress toward dated trial and pack requests, without promising a permanent local-pack place.'
    },
    nl: {
      step: '05',
      title: 'Meet inschrijvingen, geen vanity-ranks',
      description:
        'Maandelijkse rapportage over kaartweergaven, profielacties, stadspagina-landings en verschuivingen op rijschool- en les- + stadszoekwoorden — gelezen als voortgang naar gedateerde proefles- en pakketaanvragen, zonder een vaste local-packplek te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Driving schools',
    crumbCurrent: 'Local SEO',
    badge: 'Driving school local SEO',
    h1: 'Local SEO for driving schools',
    heroSub:
      'Get found when learners search “driving school [city]”, “driving lessons [city]”, “intensive driving course [region]” or “automatic driving lesson [city]” — with city and lesson-type pages, Google Business Profile stocked with graduate photos and pass-rate context, reviews that decide teenage shortlists, pickup-area signals, and organic discovery that competes with comparison sites for the local pack. With 1,500+ completed projects, we know how schools earn map trust in saturated towns before competitors fill every lesson slot.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in the local pack means an empty lesson calendar',
    problemP1:
      'A seventeen-year-old searches “driving school [city]” on their phone and signs up with one of the top three results that show strong reviews. If you are invisible in that local pack, your lesson calendar stays empty while competitors fill up — even when your pass rate and instructors are stronger. Parents often finish the shortlist on the same screen, reading stars before they call.',
    problemP2:
      'Driving-school local search is extremely local and price-comparing, mobile-first, and crowded with comparison sites that rent the same pack attention — not a gym “near me” membership slot and not a dentist recall map race. Miss city and lesson-type pages, graduate reviews and pickup signals, and you optimise for the wrong geography while continuous seventeen-year-old inflow lands on schools that simply look more findable.',
    problemP3:
      'A clear website converts the visit; local SEO decides who appears when someone types “driving school [city]” before they open a comparison directory. Without organic pack presence you keep renting leads while the school with sharper city pages and fresher passed-student reviews owns the free discovery layer that starts dated trial and pack requests. Local pack position often decides volume in a saturated town.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for driving schools',
    featuresSub:
      'Every deliverable serves learners searching a school by city and lesson type — GBP with graduates and reviews, city and lesson-type pages, local and price-comparing keywords, review growth, catchment and pickup signals, citations and organic share versus comparison sites — not a website redesign and not a gym checklist with a steering wheel swapped in.',
    processBadge: 'How we work',
    processHead: 'How a driving-school local SEO engagement runs',
    processSub:
      'From auditing how you appear for city and lesson queries in the local pack, to measuring actions that become dated trial and enrolment requests — including comparison-site pressure.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why driving schools trust us with local-pack findability',
    whySub:
      'School-aware local SEO that treats teenage mobile shortlists, pass-rate context and comparison-site competition as the product — not weekly gym density or a dentist neighbourhood pack.',
    whyItems: [
      {
        title: 'Pack work tuned for city lesson intent',
        desc: 'We optimise for driving school, lessons, intensive and automatic + city phrases — the queries that start enrolments on a phone between school and home.'
      },
      {
        title: 'GBP that shows graduates, not empty hours',
        desc: 'Profiles carry passed-student photos, categories and trial actions that look real on Maps — pass-rate context without inventing figures you do not hold.'
      },
      {
        title: 'Reviews that beat comparison badges',
        desc: 'Voices from passed students sit next to pack results — often the factor that wins when a parent and learner pick from the top three.'
      },
      {
        title: 'One partner from Maps to enrolment',
        desc: 'Local SEO for findability first; school website and Google Ads when conversion or paid lesson intent needs a push — one team that already knows your towns and packs.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for driving schools',
    costsIntro:
      'Driving-school local SEO is ongoing GBP work, city and lesson-type pages, local keywords, citations, pickup signals and review growth after exams. Profile action lifts often appear within weeks; holding a local-pack place for “driving school [city]” against comparison sites usually needs months of compounding. Inflow of new seventeen-year-olds is continuous, but local markets are saturated — pack position often decides volume. We share realistic enquiry trends, not guaranteed rankings.',
    costsItems: [
      {
        title: 'Foundation (one town catchment)',
        desc: 'GBP overhaul with graduate photos, citation cleanup, review process after exams, and a driving-school / lessons + city keyword set. Ideal when Maps underplays your school or still looks like a shop pin.'
      },
      {
        title: 'Growth (competitive towns)',
        desc: 'Ongoing monthly optimisation: city and lesson-type page support, review replies, competitor monitoring against comparison sites, reporting on actions that lead to dated trials rather than vanity map ranks.'
      },
      {
        title: 'Multi-town or multi-lesson schools',
        desc: 'When you cover several towns or teach intensive, automatic and motorcycle tracks, we structure locations and pages so each catchment competes cleanly without confusing Maps about which footprint owns “driving school [city]”.'
      }
    ],
    costsNote:
      'Scope depends on how many towns and lesson types you cover and how crowded local comparison results are. Request a driving-school local-SEO quote — we outline GBP setup, city keywords, pickup signals and review cadence with honest timelines, without ranking guarantees. Bring your towns and busiest licence mixes so we size the plan around real search demand.',
    siblingsBadge: 'Also for driving schools',
    siblingsHead: 'Pair local SEO with a clear enrolment site and Google Ads',
    siblingsSub:
      'Maps and city pages put you on the shortlist; the website converts that glance into a trial or pack sign-up, and Google Ads can capture high-intent lesson searches later. These services complete the silo.',
    siblingsCta: 'View service',
    hubLink: 'Back to driving school marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside driving schools we offer broader local SEO. School engagements follow the process on this page.',
    ctaHeading: 'Ready to show up when learners search your city this week?',
    ctaSub:
      'Share your towns, lesson types and how students find you today. We scope GBP, city pages and graduate reviews with honest timelines — without promising a fixed local-pack place.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Rijscholen',
    crumbCurrent: 'Lokale SEO',
    badge: 'Lokale SEO voor rijscholen',
    h1: 'Lokale SEO voor rijscholen',
    heroSub:
      'Word gevonden wanneer leerlingen “rijschool [stad]”, “rijlessen [stad]”, “spoedcursus rijbewijs [regio]” of “automaat rijles [stad]” zoeken — met stads- en lestypepagina’s, Google Bedrijfsprofiel gevuld met foto’s van geslaagden en slagingscontext, reviews die tiener-shortlists beslissen, ophaalgebied-signalen, en organische ontdekking die concurreert met vergelijkingssites om de local pack. Met 1.500+ afgeronde projecten weten we hoe scholen kaartvertrouwen verdienen in verzadigde plaatsen vóór concurrenten elk lesslot vullen.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in de local pack betekent een lege lessenagenda',
    problemP1:
      'Een zeventienjarige zoekt “rijschool [stad]” op de telefoon en schrijft zich in bij een van de top drie resultaten met sterke reviews. Ben je onzichtbaar in die local pack, dan blijft je lessenagenda leeg terwijl concurrenten vollopen — ook wanneer jouw slagingspercentage en instructeurs sterker zijn. Ouders ronden de shortlist vaak op hetzelfde scherm af en lezen sterren vóór ze bellen.',
    problemP2:
      'Lokaal rijschoolzoeken is extreem lokaal en prijsvergelijkend, mobiel-first, en vol met vergelijkingssites die dezelfde packaandacht huren — geen sportschool-“bij mij”-abonnementsslot en geen tandarts-recall-kaartpack. Leerlingen vergelijken spoedcursus, automaat en standaard B-pakketten op dezelfde avond; wie niet in de top drie packresultaten staat, valt uit die shortlist vóór een telefoongesprek. Mis je stads- en lestypepagina’s, geslaagd-reviews en ophaalsignalen, dan optimaliseer je voor de verkeerde geografie terwijl continue instroom van zeventienjarigen landt bij scholen die simpelweg vindbaarder ogen.',
    problemP3:
      'Een heldere website converteert het bezoek; lokale SEO beslist wie verschijnt wanneer iemand “rijschool [stad]” typt vóór een vergelijkingsdirectory opent. Zonder organische packaanwezigheid blijf je leads huren terwijl de school met scherpere stadspagina’s en frissere reviews van geslaagden de gratis ontdekkingslaag bezit die gedateerde proefles- en pakketaanvragen start. In een verzadigde plaats bepaalt local-packpositie vaak het volume — niet je instructeursrooster alleen, maar of Maps jou toont wanneer de zoekopdracht vandaag binnenkomt.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor rijscholen',
    featuresSub:
      'Elke deliverable dient leerlingen die een school zoeken op stad en lestype — GBP met geslaagden en reviews, stads- en lestypepagina’s, lokale en prijsvergelijkende zoekwoorden, reviewgroei, werkgebied- en ophaalsignalen, citations en organisch aandeel versus vergelijkingssites — geen websiteredesign en geen sportschoolchecklist met een stuur erin geplakt. We bouwen vindbaarheid voor de shortlist op de telefoon, niet voor een generieke “bedrijf bij mij”-template.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor een rijschool verloopt',
    processSub:
      'Van een audit van hoe je verschijnt op stads- en lesqueries in de local pack, tot meten van acties die gedateerde proefles- en inschrijfaanvragen worden — inclusief druk van vergelijkingssites en hoe ophaalpunten in jouw werkgebied meewegen.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom rijscholen hun local-packvindbaarheid aan ons toevertrouwen',
    whySub:
      'Schoolbewuste lokale SEO die tiener-mobiele shortlists, slagingscontext en concurrentie met vergelijkingssites als product behandelt — geen wekelijkse sportschooldichtheid of een tandarts-wijkkaartpack. We kennen het verschil tussen een lesagenda vullen en een abonnement verkopen.',
    whyItems: [
      {
        title: 'Packwerk afgestemd op stadslesintentie',
        desc: 'We optimaliseren voor rijschool-, rijlessen-, spoedcursus- en automaat- + stadsfrasen — de queries die inschrijvingen starten op een telefoon tussen school en thuis, niet voor een generieke retailcategorie.'
      },
      {
        title: 'GBP dat geslaagden toont, geen lege uren',
        desc: 'Profielen dragen foto’s van geslaagden, categorieën en proeflesacties die op Maps echt ogen — slagingscontext zonder cijfers te verzinnen die je niet hebt, zodat ouders CBR-vertrouwen zien vóór ze bellen.'
      },
      {
        title: 'Reviews die vergelijkingsbadges verslaan',
        desc: 'Stemmen van geslaagden staan naast packresultaten — vaak de factor die wint wanneer ouder en leerling uit de top drie kiezen, ook als een directory een badge naast jouw concurrent zet.'
      },
      {
        title: 'Eén partner van Maps tot inschrijving',
        desc: 'Eerst lokale SEO voor vindbaarheid; schoolwebsite en Google Ads wanneer conversie of betaalde lesintentie een duwtje nodig heeft — één team dat jouw plaatsen, ophaalpunten en pakketten al kent.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor rijscholen',
    costsIntro:
      'Lokale SEO voor rijscholen is doorlopend GBP-werk, stads- en lestypepagina’s, lokale zoekwoorden, citations, ophaalsignalen en reviewgroei na examens. Profielacties stijgen vaak binnen enkele weken; een local-packplek vasthouden op “rijschool [stad]” tegen vergelijkingssites vraagt meestal maanden van compounding. Instroom van nieuwe zeventienjarigen is continu, maar lokale markten zijn verzadigd — packpositie bepaalt vaak het volume. We delen realistische aanvraagtrends voor proefles en pakket, geen gegarandeerde rankings of vaste packplaats.',
    costsItems: [
      {
        title: 'Foundation (één plaatscatchment)',
        desc: 'GBP-overhaul met geslaagd-foto’s, citation-opschoning, reviewproces na examens, en een rijschool-/rijlessen- + stadszoekwoordenset. Ideaal wanneer Maps je school onderschat of nog oogt als winkelpin terwijl je lessen in de stad en omliggende ophaalpunten geeft.'
      },
      {
        title: 'Growth (concurrerende plaatsen)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor stads- en lestypepagina’s, reviewantwoorden, concurrentiemonitoring tegen vergelijkingssites, rapportage op acties die tot gedateerde proeflessen leiden in plaats van vanity-kaartranks die geen inschrijving opleveren.'
      },
      {
        title: 'Multi-plaats of multi-lestype scholen',
        desc: 'Bij meerdere plaatsen of spoed-, automaat- en motortrajecten structureren we locaties en pagina’s zodat elk catchment schoon concurreert zonder Maps te verwarren over wie “rijschool [stad]” of “spoedcursus rijbewijs [regio]” bezit.'
      }
    ],
    costsNote:
      'Scope hangt af van hoeveel plaatsen en lestypes je dekt en hoe druk lokale vergelijkingsresultaten zijn. Vraag een lokale-SEO-offerte voor rijscholen aan — we schetsen GBP-opzet, stadszoekwoorden, ophaalsignalen en reviewritme met eerlijke planning, zonder rankinggaranties. Neem je plaatsen, ophaalpunten en drukste rijbewijsmixen mee, zodat we het plan rond echte zoekvraag dimensioneren en niet rond een generieke checklist.',
    siblingsBadge: 'Ook voor rijscholen',
    siblingsHead: 'Combineer lokale SEO met een heldere inschrijfsite en Google Ads',
    siblingsSub:
      'Maps en stadspagina’s zetten je op de shortlist; de website maakt van die blik een proefles of pakketinschrijving, en Google Ads kan later high-intent leszoeken vangen. Deze diensten maken de silo compleet — lokale SEO eerst voor organische packzichtbaarheid.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar rijschoolmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten rijscholen bieden we bredere lokale SEO. Schooltrajecten volgen het proces op deze pagina, met focus op stadszoeken, reviews van geslaagden en concurrentie met vergelijkingssites.',
    ctaHeading: 'Klaar om zichtbaar te zijn wanneer leerlingen jouw stad deze week zoeken?',
    ctaSub:
      'Deel je plaatsen, lestypes en hoe leerlingen je vandaag vinden. We scopen GBP, stadspagina’s en reviews van geslaagden met eerlijke doorlooptijden — zonder een vaste local-packplek te beloven. Zo weet je wat er nodig is om de lessenagenda te vullen via Maps.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function RijscholenLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-rijscholen'][locale]
  const firmSpokes = BRANCH_SPOKES.rijscholen
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
              <CarFront className="w-4 h-4" aria-hidden />
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
                industrySlug="rijscholen"
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
