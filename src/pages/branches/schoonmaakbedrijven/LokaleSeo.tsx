import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  MapPinned,
  Search,
  Sparkles,
  SprayCan,
  Star
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  MapPinned,
  Search,
  Building2,
  Home,
  SprayCan,
  Star,
  MapPin,
  CheckCircle2
] as const

const FEATURES = [
  {
    en: {
      title: 'GBP for cleaners without a public office',
      description:
        'Google Business Profile set as a service-area footprint — so buyers searching “cleaning company near me” see your towns and how to request a contract quote, not a fake shop pin nobody visits.'
    },
    nl: {
      title: 'GBP voor schoonmakers zonder publieke vestiging',
      description:
        'Google Bedrijfsprofiel als service-area-voetafdruk — zodat kopers die “schoonmaakbedrijf bij mij” zoeken jouw plaatsen en hoe ze een contractofferte aanvragen zien, geen nep-winkelpin die niemand bezoekt.'
    }
  },
  {
    en: {
      title: 'Keywords that fill recurring routes',
      description:
        'We target “cleaning company [city]”, “office cleaning [city]”, “window cleaner [city]” and “move-out clean [region]” — phrases that start contract conversations, not vanity “best cleaner” lists.'
    },
    nl: {
      title: 'Zoekwoorden die terugkerende routes vullen',
      description:
        'We mikken op “schoonmaakbedrijf [stad]”, “kantoorschoonmaak [stad]”, “glazenwasser [stad]” en “opleverschoonmaak [regio]” — frasen die contractgesprekken starten, geen vanity-“beste schoonmaker”-lijstjes.'
    }
  },
  {
    en: {
      title: 'Commercial search treated differently',
      description:
        'Facility and VvE intent often means a longer cycle and a different decision-maker. We build signals that speak to offices, schools and boards — separate from household glass or handover searches.'
    },
    nl: {
      title: 'Zakelijk zoeken apart behandeld',
      description:
        'Facility- en VvE-intentie betekent vaak een langere cyclus en een andere beslisser. We bouwen signalen die kantoren, scholen en besturen aanspreken — los van huishoudelijke glas- of opleverzoeken.'
    }
  },
  {
    en: {
      title: 'Residential intent kept clear',
      description:
        'Household searches for window cleaning or move-out cleans get their own local pages and review cues — so fast consumer enquiries do not drown under corporate facility copy.'
    },
    nl: {
      title: 'Particuliere intentie helder gehouden',
      description:
        'Huishoudelijke zoekopdrachten naar glasbewassing of opleverschoonmaak krijgen eigen lokale pagina’s en reviewsignalen — zodat snelle consumentenaanvragen niet verdrinken onder corporate facility-copy.'
    }
  },
  {
    en: {
      title: 'Service + town pages per clean type',
      description:
        'Local pages for office cleaning, glass, floors, handover and facade work across towns you cover — so Maps and organic clicks land on the right discipline, not one thin “we clean” blob.'
    },
    nl: {
      title: 'Dienst- + plaatspagina’s per schoonmaaktype',
      description:
        'Lokale pagina’s voor kantoorschoonmaak, glas, vloeren, oplevering en gevelreiniging over plaatsen die je dekt — zodat Maps- en organische klikken op de juiste discipline landen, geen dun “wij poetsen”-blok.'
    }
  },
  {
    en: {
      title: 'Reviews from offices and households',
      description:
        'Commercial clients and private customers both leave proof. We set ethical request habits after site visits and recurring rounds so Maps shows voices that match both markets you sell.'
    },
    nl: {
      title: 'Reviews van kantoren en huishoudens',
      description:
        'Zakelijke én particuliere klanten laten bewijs achter. We zetten ethische verzoekgewoontes op na locatiebezoeken en terugkerende routes, zodat Maps stemmen toont die bij beide markten passen die je verkoopt.'
    }
  },
  {
    en: {
      title: 'Multi-town catchment without mixed signals',
      description:
        'When you clean across several places, we structure categories, NAP and town pages so each catchment competes cleanly — without Maps confusing which radius owns “office cleaning [city]”.'
    },
    nl: {
      title: 'Multi-plaats catchment zonder gemengde signalen',
      description:
        'Wanneer je over meerdere plaatsen poetst, structureren we categorieën, NAP en plaatspagina’s zodat elk verzorgingsgebied schoon concurreert — zonder dat Maps verwart welke straal “kantoorschoonmaak [stad]” bezit.'
    }
  },
  {
    en: {
      title: 'Organic discovery versus platforms and chains',
      description:
        'Lead marketplaces and national cleaning brands rent attention. Local SEO aims to own Google discovery in your towns — so high-value recurring contracts start on Maps, not only on a per-lead fee platform.'
    },
    nl: {
      title: 'Organische ontdekking versus platforms en ketens',
      description:
        'Leadmarktplaatsen en landelijke schoonmaakmerken huren aandacht. Lokale SEO mikt op eigen Google-ontdekking in jouw plaatsen — zodat waardevolle terugkerende contracten op Maps starten, niet alleen op een per-lead-feeplatform.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Cleaning visibility audit',
      description:
        'We check how you appear for “cleaning company [your city]”, office cleaning, window cleaner and move-out + region queries, and the map pack against nearby cleaners and chains. We also audit GBP as a service-area profile, reviews from both markets and citation consistency — separate from website quote-form builds.'
    },
    nl: {
      step: '01',
      title: 'Schoonmaakzichtbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op “schoonmaakbedrijf [jouw stad]”, kantoorschoonmaak, glazenwasser en oplever- + regioqueries, en de kaartpack tegen buurtschoonmakers en ketens. Ook GBP als service-area-profiel, reviews uit beide markten en citation-consistentie — los van website-offerteformbuilds.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Service-area GBP and cleaning keyword set',
      description:
        'We configure Google Business Profile for your cleaning radius, then lock commercial and residential keyword sets — office cleaning, glass, handover — tied to towns you actually serve, not a single fake storefront category dump.'
    },
    nl: {
      step: '02',
      title: 'Service-area GBP en schoonmaakzoekwoordenset',
      description:
        'We richten Google Bedrijfsprofiel in voor jouw schoonmaakstraal, en zetten zakelijke en particuliere zoekwoordensets vast — kantoorschoonmaak, glas, oplevering — gekoppeld aan plaatsen die je écht bedient, geen single nep-winkelcategoriedump.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Service and town page plan',
      description:
        'We plan office, glass, floor, handover and facade + town pages as local SEO assets — distinct from membership-style UX and contract forms on the cleaning website spoke, but aligned so map taps land on pages that explain the right clean type.'
    },
    nl: {
      step: '03',
      title: 'Dienst- en plaatspaginaplan',
      description:
        'We plannen kantoor-, glas-, vloer-, oplever- en gevel- + plaatspagina’s als lokale SEO-assets — los van UX en contractforms op de schoonmaakwebsite-spoke, maar afgestemd zodat kaarttaps landen op pagina’s die het juiste schoonmaaktype uitleggen.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Reviews, citations and platform pressure',
      description:
        'We launch review habits after commercial site visits and residential jobs, clean citations so directories match your radius towns, and track how organic visibility reduces dependence on paid lead marketplaces over time.'
    },
    nl: {
      step: '04',
      title: 'Reviews, citations en platformdruk',
      description:
        'We starten reviewgewoontes na zakelijke locatiebezoeken en particuliere klussen, schonen citations zodat directories bij je straalplaatsen passen, en volgen hoe organische zichtbaarheid afhankelijkheid van betaalde leadmarktplaatsen in de tijd vermindert.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure contracts and quotes, not vanity ranks',
      description:
        'Monthly reporting on map views, calls, quote taps and shifts on cleaning, office cleaning and glass + city keywords — read as progress toward recurring contract leads, without promising a permanent map-pack place.'
    },
    nl: {
      step: '05',
      title: 'Meet contracten en offertes, geen vanity-ranks',
      description:
        'Maandelijkse rapportage over kaartweergaven, belletjes, offertetaps en verschuivingen op schoonmaak-, kantoorschoonmaak- en glas- + stadszoekwoorden — gelezen als voortgang naar terugkerende contractleads, zonder een vaste kaartpackplek te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Cleaning companies',
    crumbCurrent: 'Local SEO',
    badge: 'Cleaning local SEO',
    h1: 'Local SEO for cleaning companies',
    heroSub:
      'Get found when buyers search “cleaning company [city]”, “office cleaning [city]”, “window cleaner [city]” or “move-out clean [region]” — with service-area Google Business Profile, commercial and residential local pages, review growth from both markets and organic discovery that competes with platforms and chains. With 1,500+ completed projects, we know how cleaners earn local-pack trust for recurring contracts.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible locally means renting leads while contracts walk away',
    problemP1:
      'A facility manager or homeowner searching for cleaning locally contacts a few visible, well-reviewed companies. If your Maps footprint looks empty, lacks reviews from offices and households, or still pretends you have a shop nobody visits, that high-value recurring route goes to a competitor — or you keep paying marketplaces for every introduction.',
    problemP2:
      'Cleaning local search is service-area radius, commercial versus residential intent, discipline + town phrases and competition with national brands and lead platforms — not a contractor dormer project shortlist and not an installer emergency call-out. Miss that split and you optimise for the wrong buyer while weekly office rounds stay invisible.',
    problemP3:
      'A strong website converts the visit; local SEO decides who appears when someone types “office cleaning [city]” before they open a marketplace app. Without organic map visibility you keep buying attention while the cleaner with sharper town pages and fresher dual-market reviews owns the free discovery layer that starts contracts.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for cleaning companies',
    featuresSub:
      'Every deliverable serves people searching a cleaner, office round or window service in your towns — service-area GBP, discipline/city pages, dual-market reviews and organic discovery versus platforms — not a website redesign and not a contractor checklist with mops swapped in.',
    processBadge: 'How we work',
    processHead: 'How a cleaning company local SEO engagement runs',
    processSub:
      'From auditing how you appear for cleaning and glass queries in your towns, to measuring taps that become contract-quality quotes — including commercial versus residential intent.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why cleaning companies trust us with local findability',
    whySub:
      'Cleaning-aware local SEO that treats recurring contract discovery as the goal — and respects how facility buyers and households shortlist who gets keys in their city.',
    whyItems: [
      {
        title: 'Pack work tuned for cleaning intent',
        desc: 'We optimise for cleaning company, office cleaning, window cleaner and move-out + city phrases — including the longer B2B cycle and faster household searches.'
      },
      {
        title: 'Service-area GBP without fake shops',
        desc: 'Profiles match how cleaners actually work across a radius — categories, towns and actions that look real on Maps, not an empty retail pin.'
      },
      {
        title: 'Reviews from both markets',
        desc: 'Office and household voices sit next to map results — often the factor that beats a chain logo or a marketplace badge on trust alone.'
      },
      {
        title: 'One partner from Maps to the quote',
        desc: 'Local SEO for findability first; cleaning website and later ads when conversion or paid demand needs a push — one team that already knows your services and towns.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for cleaning companies',
    costsIntro:
      'Cleaning local SEO is ongoing GBP work, service and town pages, keywords, citations and review growth across commercial and residential markets. Profile action lifts often appear within weeks; holding relevance for “office cleaning [city]” against chains and platforms usually needs months of compounding. We share realistic quote and contract-lead trends, not guaranteed rankings.',
    costsItems: [
      {
        title: 'Foundation (one cleaning catchment)',
        desc: 'Service-area GBP overhaul, citation cleanup, review process for commercial and residential jobs, and a cleaning/office/glass + town keyword set. Ideal when Maps underplays your radius or still looks like a shop pin.'
      },
      {
        title: 'Growth (competitive cities)',
        desc: 'Ongoing monthly optimisation: service-page support, review replies, competitor monitoring against chains and marketplaces, reporting on taps that lead to contract quotes rather than vanity map ranks.'
      },
      {
        title: 'Multi-town or multi-brand cleaners',
        desc: 'When you expand catchments or brands, we structure locations and categories so each radius competes cleanly without confusing Maps about which footprint owns “cleaning company [city]”.'
      }
    ],
    costsNote:
      'Scope depends on how many towns you cover, which clean types you publish and how split your commercial versus residential mix is. Request a cleaning local-SEO quote — we outline GBP setup, city keywords and review cadence with honest timelines, without ranking guarantees. Bring your towns and busiest contract seasons so we size the plan around real search demand.',
    siblingsBadge: 'Also for cleaning companies',
    siblingsHead: 'Pair local SEO with a contract-ready site and later ads',
    siblingsSub:
      'Maps puts you on the shortlist when someone wants a cleaner nearby; the website converts that glance into a contract quote, and Google Ads can add paid demand later. These services complete the silo.',
    siblingsCta: 'View service',
    hubLink: 'Back to cleaning company marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside cleaning we offer broader local SEO. Cleaning company engagements follow the process on this page.',
    ctaHeading: 'Ready to show up when locals search for cleaning tonight?',
    ctaSub:
      'Share your towns, clean types and whether you lean commercial or residential. We scope service-area GBP, city pages and dual-market reviews with honest timelines — without promising a fixed map-pack place.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Schoonmaakbedrijven',
    crumbCurrent: 'Lokale SEO',
    badge: 'Lokale SEO voor schoonmaak',
    h1: 'Lokale SEO voor schoonmaakbedrijven',
    heroSub:
      'Word gevonden wanneer kopers “schoonmaakbedrijf [stad]”, “kantoorschoonmaak [stad]”, “glazenwasser [stad]” of “opleverschoonmaak [regio]” zoeken — met service-area Google Bedrijfsprofiel, zakelijke en particuliere lokale pagina’s, reviewgroei uit beide markten en organische ontdekking die concurreert met bemiddelingsplatforms en landelijke schoonmaakketens. Met 1.500+ afgeronde projecten weten we hoe schoonmakers local-packvertrouwen verdienen voor terugkerende contracten in hun werkgebied.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Lokaal onzichtbaar betekent leads huren terwijl contracten weglopen',
    problemP1:
      'Een facility manager of huiseigenaar die lokaal naar schoonmaak zoekt, neemt contact op met een paar zichtbare, goed gereviewde bedrijven. Mist je Maps-voetafdruk reviews van kantoren en huishoudens, of veinst die nog een winkel die niemand bezoekt, dan gaat die waardevolle terugkerende route naar een concurrent — of je blijft marktplaatsen betalen voor elke introductie.',
    problemP2:
      'Lokaal schoonmaakzoeken draait om service-area-straal, zakelijke versus particuliere intentie, discipline + plaats-frasen en concurrentie met landelijke merken en leadplatforms — geen aannemers-dakkapelshortlist en geen installateur-spoedstraal. Mis je die scheiding, dan optimaliseer je voor de verkeerde koper terwijl wekelijkse kantoorroutes en glasrondes in jouw gemeenten onzichtbaar blijven voor wie écht zoekt.',
    problemP3:
      'Een sterke website converteert het bezoek; lokale SEO beslist wie verschijnt wanneer iemand “kantoorschoonmaak [stad]” of “glazenwasser [stad]” typt vóór een marktplaatsapp opent. Zonder organische kaartzichtbaarheid blijf je aandacht kopen terwijl de schoonmaker met scherpere plaatspagina’s en frissere dual-marktreviews de gratis ontdekkingslaag bezit die terugkerende contracten start.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor schoonmaakbedrijven',
    featuresSub:
      'Elke deliverable dient mensen die een schoonmaker, kantoorroute of glasservice in jouw plaatsen zoeken — service-area GBP, discipline-/plaatspagina’s, dual-marktreviews en organische B2B-vindbaarheid versus platforms — geen websiteredesign en geen aannemerschecklist met moppen erin geplakt.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor een schoonmaakbedrijf verloopt',
    processSub:
      'Van een audit van hoe je verschijnt op schoonmaak- en glasqueries in jouw plaatsen, tot meten van taps die contractwaardige offertes worden — inclusief zakelijke versus particuliere intentie en multi-plaats werkgebied.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom schoonmaakbedrijven hun lokale vindbaarheid aan ons toevertrouwen',
    whySub:
      'Schoonmaakbewuste lokale SEO die ontdekking van terugkerende contracten als doel behandelt — en respecteert hoe facility-kopers en huishoudens shortlisten wie sleutels en toegang in hun stad of regio krijgt.',
    whyItems: [
      {
        title: 'Packwerk afgestemd op schoonmaakintentie',
        desc: 'We optimaliseren voor schoonmaakbedrijf-, kantoorschoonmaak-, glazenwasser- en oplever- + stadsfrasen — inclusief de langere B2B-cyclus en snellere huishoudelijke zoekopdrachten in jouw regio.'
      },
      {
        title: 'Service-area GBP zonder nepwinkels',
        desc: 'Profielen passen bij hoe schoonmakers écht over een straal werken — categorieën, plaatsen en acties die op Maps echt ogen, geen lege retailpin die niemand bezoekt.'
      },
      {
        title: 'Reviews uit beide markten',
        desc: 'Kantoor- en huishoudenstemmen staan naast kaartresultaten — vaak de factor die een ketenlogo of marktplaatsbadge op alleen vertrouwen verslaat.'
      },
      {
        title: 'Eén partner van Maps tot de offerte',
        desc: 'Eerst lokale SEO voor vindbaarheid; schoonmaakwebsite en later ads wanneer conversie of betaalde vraag een duwtje nodig heeft — één team dat jouw diensten en plaatsen al kent.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor schoonmaakbedrijven',
    costsIntro:
      'Lokale SEO voor schoonmaak is doorlopend GBP-werk, dienst- en plaatspagina’s, zoekwoorden, citations en reviewgroei over zakelijke en particuliere markten. Profielacties stijgen vaak binnen enkele weken; relevantie vasthouden op “kantoorschoonmaak [stad]” en “schoonmaakbedrijf [stad]” tegen ketens en platforms vraagt meestal maanden van compounding. We delen realistische offerte- en contractleadtrends, geen gegarandeerde rankings.',
    costsItems: [
      {
        title: 'Foundation (één schoonmaakcatchment)',
        desc: 'Service-area GBP-overhaul, citation-opschoning, reviewproces voor zakelijke en particuliere klussen, en een schoonmaak-/kantoor-/glas- + plaats-zoekwoordenset. Ideaal wanneer Maps je straal onderschat of nog oogt als winkelpin.'
      },
      {
        title: 'Growth (concurrerende steden)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor dienstpagina’s, reviewantwoorden, concurrentiemonitoring tegen ketens en marktplaatsen, rapportage op taps die tot contractoffertes leiden in plaats van vanity-kaartranks.'
      },
      {
        title: 'Multi-plaats of multi-merk schoonmakers',
        desc: 'Bij uitbreiding van catchments of merken structureren we locaties en categorieën zodat elke straal schoon concurreert zonder Maps te verwarren over welke voetafdruk “schoonmaakbedrijf [stad]” bezit.'
      }
    ],
    costsNote:
      'Scope hangt af van hoeveel plaatsen je dekt, welke schoonmaaktypes je publiceert en hoe gesplitst je zakelijke versus particuliere mix is. Vraag een lokale-SEO-offerte voor schoonmaak aan — we schetsen GBP-opzet, stadszoekwoorden, citations en reviewritme met eerlijke planning, zonder rankinggaranties. Neem je plaatsen, schoonmaakdisciplines en drukste contractseizoenen mee, zodat we het plan rond echte lokale zoekvraag dimensioneren.',
    siblingsBadge: 'Ook voor schoonmaakbedrijven',
    siblingsHead: 'Combineer lokale SEO met een contractklare site en later ads',
    siblingsSub:
      'Maps zet je op de shortlist wanneer iemand een schoonmaker of glazenwasser in de buurt wil; de website maakt van die blik een contractofferte, en Google Ads kan later betaalde vraag toevoegen. Deze diensten maken de schoonmaaksilo compleet.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar schoonmaakbedrijvenmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten schoonmaak bieden we bredere lokale SEO. Schoonmaakbedrijftrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om zichtbaar te zijn wanneer locals vanavond schoonmaak zoeken?',
    ctaSub:
      'Deel je plaatsen, schoonmaaktypes en of je leunt op zakelijk of particulier. We scopen service-area GBP, dienst- en plaatspagina’s en dual-marktreviews met eerlijke doorlooptijden — zonder een vaste kaartpackplek of rankinggarantie te beloven.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function SchoonmaakbedrijvenLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-schoonmaakbedrijven'][locale]
  const firmSpokes = BRANCH_SPOKES.schoonmaakbedrijven
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
              <MapPin className="w-4 h-4" aria-hidden />
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
                industrySlug="schoonmaakbedrijven"
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
