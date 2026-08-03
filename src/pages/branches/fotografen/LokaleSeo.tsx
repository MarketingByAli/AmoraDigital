import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  CalendarRange,
  Camera,
  CheckCircle2,
  Images,
  MapPinned,
  Search,
  Sparkles,
  Star,
  Video
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  Search,
  MapPinned,
  Images,
  Star,
  CalendarRange,
  Building2,
  Video,
  CheckCircle2
] as const

const FEATURES = [
  {
    en: {
      title: 'Specialisation + place keywords first',
      description:
        'We target “wedding photographer [city]”, “portrait photographer [city]”, “real estate photographer [region]” and “videographer [city]” — craft is the search entry, not a generic “photographer near me” dump that buries your niche.'
    },
    nl: {
      title: 'Specialisatie + plaats-zoekwoorden eerst',
      description:
        'We mikken op “trouwfotograaf [stad]”, “portretfotograaf [stad]”, “vastgoedfotograaf [regio]” en “videograaf [stad]” — craft is de zoekingang vóór een marktplaatsfilter, geen generieke “fotograaf bij mij”-dump die jouw niche begraven houdt.'
    }
  },
  {
    en: {
      title: 'Region and province pages for travelling makers',
      description:
        'Photographers travel. We build region and province landings so your catchment matches how clients search — not a fake single-street pin that fits a salon but not a maker covering a province.'
    },
    nl: {
      title: 'Regio- en provinciepagina’s voor reizende makers',
      description:
        'Fotografen reizen. We bouwen regio- en provincie-landings zodat je verzorgingsgebied past bij hoe klanten zoeken — geen nep-één-straatpin die bij een salon of restaurant past maar niet bij een maker die een provincie dekt.'
    }
  },
  {
    en: {
      title: 'GBP stocked with portfolio images',
      description:
        'Google Business Profile filled with real shoot photos, categories and actions toward a package enquiry — so Maps shows craft and proof, not empty shop hours nobody visits.'
    },
    nl: {
      title: 'GBP gevuld met portfoliobeelden',
      description:
        'Google Bedrijfsprofiel gevuld met echte shootfoto’s, categorieën en acties naar een pakketaanvraag — zodat Maps craft en bewijs toont, geen lege winkeluren met openingstijden die niemand bezoekt.'
    }
  },
  {
    en: {
      title: 'Reviews per assignment type',
      description:
        'Bridal, portrait, commercial, newborn and real-estate voices sit next to map results — so each niche shows proof that matches the search, not one mixed star average that confuses intent.'
    },
    nl: {
      title: 'Reviews per opdrachttype',
      description:
        'Bridal-, portret-, zakelijke, newborn- en vastgoedstemmen staan naast kaartresultaten — zodat elke niche bewijs toont dat bij de zoekopdracht past, geen gemengd stergemiddelde dat bridal met productshoot intentie vertroebelt.'
    }
  },
  {
    en: {
      title: 'Niche seasons planned ahead',
      description:
        'Wedding peaks in spring and summer, commercial shoots year-round, newborn demand continuous. We build niche visibility before each booking season so Maps and organic pages compound when clients start shortlisting.'
    },
    nl: {
      title: 'Nicheseizoenen vooraf ingepland',
      description:
        'Bruiloftspieken in voorjaar en zomer, zakelijke shoots door het jaar, newborn-vraag continu. We bouwen nichezichtbaarheid vóór elk boekingsseizoen, zodat Maps, GBP-foto’s en organische pagina’s al compounden wanneer klanten gaan shortlisten.'
    }
  },
  {
    en: {
      title: 'Venue and business mentions as local signals',
      description:
        'Mentions with venues, agencies and companies reinforce regional relevance — local signals photography directories rarely earn the same way, without turning Maps into a supplier ads board.'
    },
    nl: {
      title: 'Venue- en bedrijfsvermeldingen als lokale signalen',
      description:
        'Vermeldingen bij venues, bureaus en bedrijven versterken regionale relevantie — lokale signalen die fotografiemarktplaatsen zelden zo verdienen, zonder Maps in een leveranciers-adsbord te veranderen of directories te vervangen.'
    }
  },
  {
    en: {
      title: 'Organic share versus photography marketplaces',
      description:
        'Bridal platforms and photographer directories rent introductions. Local SEO aims to own Google discovery for your niches and regions — so high-intent shoot requests start on Maps and specialisation pages, not only on a per-lead fee listing.'
    },
    nl: {
      title: 'Organisch aandeel versus fotografiemarktplaatsen',
      description:
        'Bridal-platforms en fotografendirectories huren introducties. Lokale SEO mikt op eigen Google-ontdekking voor jouw niches en regio’s — zodat high-intent shootaanvragen op Maps en specialisatiepagina’s starten, niet alleen op een per-lead-feelisting of directoryranking.'
    }
  },
  {
    en: {
      title: 'Citations that match craft and catchment',
      description:
        'Name, category and service-area consistency across directories so Maps trusts your footprint — aligned with the specialisations you actually shoot, not a vague “creative services” blob.'
    },
    nl: {
      title: 'Citations die craft en catchment matchen',
      description:
        'Naam-, categorie- en werkgebiedconsistentie over directories zodat Maps jouw voetafdruk vertrouwt — afgestemd op specialisaties die je écht shoot, geen vage “creatieve diensten”-blob zonder craft.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Maker visibility audit',
      description:
        'We check how you appear for specialisation + place queries, the map pack against nearby makers and marketplace ads, and GBP portfolio photos, niche reviews and citation consistency — separate from website gallery speed work on the website spoke.'
    },
    nl: {
      step: '01',
      title: 'Makervindbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op specialisatie- + plaatsqueries, de kaartpack tegen nabije makers en marktplaatsads, en GBP-portfoliobeelden, nichereviews en citation-consistentie — los van website-galerijsnelheid op de website-spoke en los van salon- of planner-lokale checklists.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Niche GBP and keyword set',
      description:
        'We configure Google Business Profile for a travelling photographer footprint, then lock specialisation + city/region keyword sets for niches you actually shoot — not one fake storefront category dump.'
    },
    nl: {
      step: '02',
      title: 'Niche-GBP en zoekwoordenset',
      description:
        'We richten Google Bedrijfsprofiel in voor een reizende fotograaf-voetafdruk, en zetten specialisatie- + stad/regio-zoekwoordensets vast voor niches die je écht shoot — geen single nep-winkelcategoriedump met generieke openingstijden.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Specialisation and region page plan',
      description:
        'We plan specialisation, city and region pages as local SEO assets — distinct from portfolio storytelling and client delivery galleries on the website spoke, but aligned so map and organic taps land where a package request can start.'
    },
    nl: {
      step: '03',
      title: 'Specialisatie- en regio-paginaplan',
      description:
        'We plannen specialisatie-, stads- en regiopagina’s als lokale SEO-assets — los van portfolioverhalen en klantleveringsgalerijen op de website-spoke, maar afgestemd zodat kaart- en organische taps landen waar een pakketaanvraag kan starten, niet op een lege homepage.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Reviews, mentions and marketplace pressure',
      description:
        'We launch review habits after each assignment type, strengthen venue and business mention signals, clean citations and track how organic niche visibility reduces dependence on photography directories over time.'
    },
    nl: {
      step: '04',
      title: 'Reviews, vermeldingen en marktplaatsdruk',
      description:
        'We starten reviewgewoontes na elk opdrachttype, versterken venue- en bedrijfsvermeldingen, schonen citations en volgen hoe organische nichezichtbaarheid afhankelijkheid van fotografiedirectories en marktplaatsleads in de tijd vermindert.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure shoot requests, not vanity ranks',
      description:
        'Monthly reporting on map views, profile actions, specialisation-page landings and shifts on niche + place keywords — read as progress toward dated package requests, without promising a permanent map-pack place.'
    },
    nl: {
      step: '05',
      title: 'Meet shootaanvragen, geen vanity-ranks',
      description:
        'Maandelijkse rapportage over kaartweergaven, profielacties, specialisatiepagina-landings en verschuivingen op niche- + plaatszoekwoorden — gelezen als voortgang naar gedateerde pakketaanvragen en shortlists, zonder een vaste kaartpackplek te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'social-media'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Photographers & videographers',
    crumbCurrent: 'Local SEO',
    badge: 'Photographer & videographer local SEO',
    h1: 'Local SEO for photographers & videographers',
    heroSub:
      'Get found when clients search “wedding photographer [city]”, “portrait photographer [city]”, “real estate photographer [region]” or “videographer [city]” — with specialisation and region pages, Google Business Profile stocked with portfolio images, reviews per assignment type, niche seasonal timing, and organic discovery that competes with photography marketplaces. With 1,500+ completed projects, we know how makers earn niche and regional trust before each booking season.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in specialisation and city search means the booking never reaches you',
    problemP1:
      'Clients search by specialisation and city, then pick from the photographers they can find with strong reviews and portfolio signals. If your Maps footprint looks empty, your niches have no landing pages, or reviews are thin for the craft they want, the booking never reaches you — even when your shoots were stronger than a competitor who simply looks more findable.',
    problemP2:
      'Photographer local search is craft-first: specialisation + place, travelling catchments across a region or province, niche seasons and competition with bridal platforms and photographer directories — not an event planner’s “wedding planner [region]” playbook and not a salon “near me” haircut slot. Miss specialisation pages and seasonal timing, and you optimise for the wrong query while spring wedding shortlists form elsewhere.',
    problemP3:
      'A fast website converts the visit; local SEO decides who appears when someone types “wedding photographer [city]” before they open a marketplace. Without organic niche visibility you keep renting directory leads while the maker with sharper specialisation pages and fresher assignment-type reviews owns the free discovery layer that starts dated package requests.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for photographers & videographers',
    featuresSub:
      'Every deliverable serves people searching a maker by craft and place — GBP with portfolio, specialisation and region pages, niche + place keywords, review growth per assignment type, venue and business mentions, citations and organic share versus directories — not a website redesign and not a planner checklist with a camera swapped in.',
    processBadge: 'How we work',
    processHead: 'How a photographer local SEO engagement runs',
    processSub:
      'From auditing how you appear for specialisation + place queries across your regions, to measuring actions that become dated package requests — including niche seasons and marketplace pressure.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why photographers & videographers trust us with niche findability',
    whySub:
      'Craft-aware local SEO that treats specialisation search and travelling catchments as the product — not event coordination or weekly salon density.',
    whyItems: [
      {
        title: 'Pack work tuned for craft + place',
        desc: 'We optimise for wedding, portrait, commercial, real estate, newborn and videographer + city/region phrases — craft first, geography second.'
      },
      {
        title: 'Region GBP without fake shopfronts',
        desc: 'Profiles match how makers travel a province — categories, portfolio photos and actions that look real on Maps, not empty retail hours.'
      },
      {
        title: 'Reviews that match the search intent',
        desc: 'Assignment-type voices sit next to map results — often the factor that beats a marketplace badge when someone is hiring an eye for a specific craft.'
      },
      {
        title: 'One partner from Maps to the package',
        desc: 'Local SEO for findability first; photographer website and social when conversion or Instagram discovery needs a push — one team that already knows your niches and regions.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for photographers & videographers',
    costsIntro:
      'Photographer local SEO is ongoing GBP work, specialisation and region pages, niche + place keywords, citations, venue and business signals and review growth per assignment type. Profile action lifts often appear within weeks; holding relevance for “wedding photographer [city]” against directories usually needs months of compounding. Build niche visibility ahead of each specialisation’s booking season — spring and summer for weddings, year-round for commercial, continuous for newborn — we share realistic enquiry trends, not guaranteed rankings.',
    costsItems: [
      {
        title: 'Foundation (one niche catchment)',
        desc: 'GBP overhaul with portfolio images, citation cleanup, review process per assignment type, and a specialisation + city/region keyword set. Ideal when Maps underplays your craft or still looks like a shop pin.'
      },
      {
        title: 'Growth (competitive niches and cities)',
        desc: 'Ongoing monthly optimisation: specialisation-page support, region coverage, review replies, competitor monitoring against marketplaces, reporting on actions that lead to dated package requests rather than vanity map ranks.'
      },
      {
        title: 'Multi-region or multi-niche makers',
        desc: 'When you cover several provinces or several crafts, we structure locations and pages so each niche catchment competes cleanly without confusing Maps about which footprint owns “portrait photographer [city]”.'
      }
    ],
    costsNote:
      'Scope depends on how many niches and regions you cover, which seasons matter most and how split your assignment mix is. Request a photographer local-SEO quote — we outline GBP setup, niche keywords, mention signals and review cadence with honest timelines, without ranking guarantees. Bring your specialisations and busiest booking seasons so we size the plan around real search demand.',
    siblingsBadge: 'Also for photographers & videographers',
    siblingsHead: 'Pair local SEO with a fast portfolio site and social discovery',
    siblingsSub:
      'Maps and specialisation pages put you on the shortlist; the website converts that glance into a dated package request, and social can amplify Instagram discovery later. These services complete the silo.',
    siblingsCta: 'View service',
    hubLink: 'Back to photographer & videographer marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside photography and videography we offer broader local SEO. Maker engagements follow the process on this page.',
    ctaHeading: 'Ready to show up when clients search your craft and city this season?',
    ctaSub:
      'Share your specialisations, regions and which niches peak when. We scope niche GBP, specialisation pages and assignment-type reviews with honest timelines — without promising a fixed map-pack place.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Fotografen & videografen',
    crumbCurrent: 'Lokale SEO',
    badge: 'Lokale SEO voor fotografen & videografen',
    h1: 'Lokale SEO voor fotografen',
    heroSub:
      'Word gevonden wanneer klanten “trouwfotograaf [stad]”, “portretfotograaf [stad]”, “vastgoedfotograaf [regio]” of “videograaf [stad]” zoeken — met specialisatie- en regiopagina’s die passen bij hoe fotografen reizen, Google Bedrijfsprofiel gevuld met portfoliobeelden, reviews per opdrachttype, nicheseizoenstiming voor bruiloften, zakelijk en newborn, venue- en bedrijfsvermeldingen als lokale signalen, en organische ontdekking die concurreert met fotografiemarktplaatsen. Met 1.500+ afgeronde projecten weten we hoe makers niche- en regionaal vertrouwen verdienen vóór elk boekingsseizoen.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in specialisatie- en stadszoeken betekent dat de boeking je nooit bereikt',
    problemP1:
      'Klanten zoeken op specialisatie en stad, en kiezen daarna uit de fotografen die ze vinden met sterke reviews en portfoliosignalen. Mist je Maps-voetafdruk, hebben je niches geen landingspagina’s, of zijn reviews dun voor de craft die ze willen, dan bereikt de boeking je nooit — ook wanneer jouw shoots sterker waren dan die van een concurrent die simpelweg vindbaarder oogt. Specialisatie is de belangrijkste zoekingang; alleen op plaats optimaliseren mist precies de query waarop iemand eerst shortlist.',
    problemP2:
      'Lokaal fotograafzoeken is craft-first: specialisatie + plaats, reizende catchments over een regio of provincie, nicheseizoenen en concurrentie met bridal-platforms en fotografendirectories — geen eventplanner-“trouwplanner [regio]”-playbook en geen salon-“bij mij”-knipslot. Mis je specialisatiepagina’s en seizoenstiming, dan optimaliseer je voor de verkeerde query terwijl voorjaars-trouwshortlists elders vormen en zakelijke of newborn-vraag het hele jaar door bij de concurrent landt.',
    problemP3:
      'Een snelle website converteert het bezoek; lokale SEO beslist wie verschijnt wanneer iemand “trouwfotograaf [stad]” typt vóór een marktplaats opent. Zonder organische nichezichtbaarheid blijf je directoryleads huren terwijl de maker met scherpere specialisatiepagina’s, sterkere GBP-portfoliobeelden en frissere reviews per opdrachttype de gratis ontdekkingslaag bezit die gedateerde pakketaanvragen start — nog vóór iemand een platformfilter aanzet.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor fotografen',
    featuresSub:
      'Elke deliverable dient mensen die een maker zoeken op craft en plaats — GBP met portfolio, specialisatie- en regiopagina’s, niche- + plaatszoekwoorden, reviewgroei per opdrachttype, venue- en bedrijfsvermeldingen, citations, seizoenspieken en organisch aandeel versus directories — geen websiteredesign en geen plannerchecklist met een camera erin geplakt.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor een fotograaf verloopt',
    processSub:
      'Van een audit van hoe je verschijnt op specialisatie- + plaatsqueries over jouw regio’s, tot meten van acties die gedateerde pakketaanvragen worden — inclusief nicheseizoenen, venue-signalen en marktplaatsdruk.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom fotografen & videografen hun nichevindbaarheid aan ons toevertrouwen',
    whySub:
      'Craftbewuste lokale SEO die specialisatiezoeken, reizende catchments en concurrentie met fotografiemarktplaatsen als product behandelt — geen eventregie of wekelijkse salondichtheid.',
    whyItems: [
      {
        title: 'Packwerk afgestemd op craft + plaats',
        desc: 'We optimaliseren voor trouw-, portret-, zakelijke, vastgoed-, newborn- en videograaf- + stad/regiofrasen — craft eerst, geografie daarna.'
      },
      {
        title: 'Regio-GBP zonder nep-winkelvoorkanten',
        desc: 'Profielen passen bij hoe makers over een provincie reizen — categorieën, portfoliobeelden en acties die op Maps echt ogen, geen lege retailuren.'
      },
      {
        title: 'Reviews die bij de zoekintentie passen',
        desc: 'Stemmen per opdrachttype staan naast kaartresultaten — vaak de factor die een marktplaatsbadge verslaat wanneer iemand een oog huurt voor een specifieke craft.'
      },
      {
        title: 'Eén partner van Maps tot het pakket',
        desc: 'Eerst lokale SEO voor vindbaarheid; fotografenwebsite en social wanneer conversie of Instagram-ontdekking een duwtje nodig heeft — één team dat jouw niches en regio’s al kent.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor fotografen',
    costsIntro:
      'Lokale SEO voor fotografen is doorlopend GBP-werk, specialisatie- en regiopagina’s, niche- + plaatszoekwoorden, citations, venue- en bedrijfssignalen en reviewgroei per opdrachttype. Profielacties stijgen vaak binnen enkele weken; relevantie vasthouden op “trouwfotograaf [stad]” of “vastgoedfotograaf [regio]” tegen directories vraagt meestal maanden van compounding. Bouw nichezichtbaarheid vóór het boekingsseizoen van elke specialisatie — voorjaar en zomer voor bruiloften, jaar-rond voor zakelijk, continu voor newborn — we delen realistische aanvraagtrends en seizoenspatronen, geen gegarandeerde rankings of vaste kaartpackplekken.',
    costsItems: [
      {
        title: 'Foundation (één niche-catchment)',
        desc: 'GBP-overhaul met portfoliobeelden, citation-opschoning, reviewproces per opdrachttype, en een specialisatie- + stad/regiozoekwoordenset. Ideaal wanneer Maps je craft onderschat, nog oogt als winkelpin, of wanneer nichereviews te dun zijn voor een shortlist.'
      },
      {
        title: 'Growth (concurrerende niches en steden)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor specialisatiepagina’s, regiodekking, reviewantwoorden, concurrentiemonitoring tegen marktplaatsen, rapportage op acties die tot gedateerde pakketaanvragen leiden in plaats van vanity-kaartranks. Inclusief timing rond nicheboekingspieken.'
      },
      {
        title: 'Multi-regio of multi-niche makers',
        desc: 'Bij meerdere provincies of meerdere crafts structureren we locaties en pagina’s zodat elk niche-catchment schoon concurreert zonder Maps te verwarren over welke voetafdruk “portretfotograaf [stad]” of “videograaf [stad]” bezit.'
      }
    ],
    costsNote:
      'Scope hangt af van hoeveel niches en regio’s je dekt, welke seizoenen het meest tellen en hoe gesplitst je opdrachtmix is. Vraag een lokale-SEO-offerte voor fotografen aan — we schetsen GBP-opzet, nichezoekwoorden, vermeldingssignalen en reviewritme met eerlijke planning, zonder rankinggaranties. Neem je specialisaties, drukste boekingsseizoenen en of je leunt op bruiloften, portret, vastgoed of video mee, zodat we het plan rond echte zoekvraag dimensioneren.',
    siblingsBadge: 'Ook voor fotografen & videografen',
    siblingsHead: 'Combineer lokale SEO met een snelle portfoliosite en social discovery',
    siblingsSub:
      'Maps en specialisatiepagina’s zetten je op de shortlist; de website maakt van die blik een gedateerde pakketaanvraag met snelle galerijen, en social kan later Instagram-ontdekking versterken wanneer de feed het eerste contact is. Deze diensten maken de silo compleet.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar fotograaf- & videograafmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten fotografie en videografie bieden we bredere lokale SEO. Makertrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om zichtbaar te zijn wanneer klanten jouw craft en stad dit seizoen zoeken?',
    ctaSub:
      'Deel je specialisaties, regio’s en welke niches wanneer pieken. We scopen niche-GBP, specialisatiepagina’s en reviews per opdrachttype met eerlijke doorlooptijden — zonder een vaste kaartpackplek te beloven.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function FotografenLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-fotografen'][locale]
  const firmSpokes = BRANCH_SPOKES.fotografen
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
              <Camera className="w-4 h-4" aria-hidden />
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
                industrySlug="fotografen"
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
