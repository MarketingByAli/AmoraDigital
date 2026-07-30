import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  CalendarRange,
  CheckCircle2,
  Dumbbell,
  MapPin,
  MapPinned,
  Search,
  Sparkles,
  Star,
  UserRound
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  MapPinned,
  Search,
  Dumbbell,
  Star,
  CalendarRange,
  UserRound,
  Building2,
  MapPin
] as const

const FEATURES = [
  {
    en: {
      title: 'GBP that shows a real training floor',
      description:
        'Google Business Profile with gym-floor photos, class cues, accurate hours and a clear action — so someone searching “gym near me” sees energy and trust, not a vague pin with one blurry lobby shot.'
    },
    nl: {
      title: 'GBP dat een echte trainingsvloer toont',
      description:
        'Google Bedrijfsprofiel met zaalfoto’s, les-signalen, accurate uren en een duidelijke actie — zodat iemand die “sportschool bij mij” zoekt energie en vertrouwen ziet, geen vaag pinnetje met één wazige lobbyfoto.'
    }
  },
  {
    en: {
      title: 'City keywords that catch motivated starters',
      description:
        'We target “gym [city]”, “personal trainer [city]”, “crossfit/yoga [city]” and “weight-loss coaching near me” — the phrases people type when motivation is high and they are ready to compare options tonight.'
    },
    nl: {
      title: 'Stadszoekwoorden die gemotiveerde starters vangen',
      description:
        'We mikken op “sportschool [stad]”, “personal trainer [stad]”, “crossfit/yoga [stad]” en “afvallen begeleiding bij mij in de buurt” — frasen die mensen typen wanneer motivatie hoog is en ze vanavond opties willen vergelijken.'
    }
  },
  {
    en: {
      title: 'Discipline and service + city pages',
      description:
        'Local pages for bootcamp, kickboxing, small-group coaching, yoga or whatever you actually run — so Maps and organic clicks land on the right story, not one thin “fitness” blob.'
    },
    nl: {
      title: 'Discipline- en dienst- + stadspagina’s',
      description:
        'Lokale pagina’s voor bootcamp, kickboksen, small-group coaching, yoga of wat je écht draait — zodat Maps- en organische klikken op het juiste verhaal landen, geen dun “fitness”-blok.'
    }
  },
  {
    en: {
      title: 'Reviews that decide an emotional choice',
      description:
        'Joining a gym or coach is personal. We build ethical review habits after trials and coaching blocks so recent member voices sit next to map results when someone hesitates between two nearby options.'
    },
    nl: {
      title: 'Reviews die een emotionele keuze beslechten',
      description:
        'Een sportschool of coach kiezen is persoonlijk. We bouwen ethische reviewgewoontes na proeflessen en coachingblokken, zodat recente ledenstemmen naast kaartresultaten staan wanneer iemand aarzelt tussen twee buurtopties.'
    }
  },
  {
    en: {
      title: 'Seasonal search peaks on the calendar',
      description:
        'January resolutions and spring “summer body” spikes lift search volume. We keep GBP posts and local pages ready ahead of those waves — so you are already visible when intent floods the city.'
    },
    nl: {
      title: 'Seizoenszoekpieken op de kalender',
      description:
        'Goede voornemens in januari en voorjaar “summer body”-pieken tillen zoekvolume. We houden GBP-posts en lokale pagina’s klaar vóór die golven — zodat je al zichtbaar bent wanneer intentie de stad binnenstroomt.'
    }
  },
  {
    en: {
      title: 'Service-area setup for trainers without a venue',
      description:
        'Personal trainers who coach outdoors, at clients’ homes or online get a Maps footprint that matches how they actually work — service-area signals instead of pretending they own a full club floor.'
    },
    nl: {
      title: 'Service-area-opzet voor trainers zonder pand',
      description:
        'Personal trainers die outdoor, bij cliënten thuis of online coachen krijgen een Maps-voetafdruk die past bij hoe ze écht werken — service-area-signalen in plaats van alsof ze een volledige clubvloer bezitten.'
    }
  },
  {
    en: {
      title: 'Local pack focus against big chains',
      description:
        'Basic-Fit and SportCity dominate many city queries. We sharpen neighbourhood proof, reviews and discipline clarity so independents still earn pack visibility where locals want a specific vibe or coach.'
    },
    nl: {
      title: 'Local-packfocus tegen grote ketens',
      description:
        'Basic-Fit en SportCity domineren veel stadsqueries. We scherpen buurtbewijs, reviews en disciplinehelderheid aan zodat independents nog packzichtbaarheid verdienen waar locals een specifieke vibe of coach willen.'
    }
  },
  {
    en: {
      title: 'Citations that keep NAP clean',
      description:
        'Directories and listings stay aligned on name, address and phone — so Maps does not dilute trust with conflicting club hours or a trainer number that no longer rings.'
    },
    nl: {
      title: 'Citations die NAP schoon houden',
      description:
        'Directories en vermeldingen blijven synchroon op naam, adres en telefoon — zodat Maps vertrouwen niet verdunt met conflicterende cluburen of een trainernummer dat niet meer overgaat.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Local fitness visibility audit',
      description:
        'We check how you appear for “gym [your city]”, “personal trainer near me”, discipline + city queries and the map pack against nearby clubs and chains. We also audit GBP categories, floor photos, hours, reviews and citation consistency — separate from website booking builds.'
    },
    nl: {
      step: '01',
      title: 'Lokale fitnesszichtbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op “sportschool [jouw stad]”, “personal trainer bij mij”, discipline + stad-queries en de kaartpack tegen buurtclubs en ketens. Ook GBP-categorieën, zaalfoto’s, uren, reviews en citation-consistentie — los van websiteboekbuilds.'
    }
  },
  {
    en: {
      step: '02',
      title: 'GBP and fitness keyword set',
      description:
        'We configure Google Business Profile for a club or service-area trainer: photos, hours, categories and actions. Then we lock a keyword set around gym, PT, crossfit/yoga and weight-loss coaching intent in your catchment — not a generic “sports club” dump.'
    },
    nl: {
      step: '02',
      title: 'GBP en fitnesszoekwoordenset',
      description:
        'We richten Google Bedrijfsprofiel in voor een club of service-area-trainer: foto’s, uren, categorieën en acties. Daarna zetten we een zoekwoordenset vast rond sportschool-, PT-, crossfit/yoga- en afvalbegeleiding-intentie in jouw verzorgingsgebied — geen generieke “sportclub”-dump.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Discipline and city page plan',
      description:
        'We plan bootcamp, kickboxing, small-group, yoga or PT + city pages as local SEO assets — distinct from membership UX and software links on the fitness website spoke, but aligned so map taps land on pages that explain who you are for.'
    },
    nl: {
      step: '03',
      title: 'Discipline- en stadspaginaplan',
      description:
        'We plannen bootcamp-, kickboks-, small-group-, yoga- of PT- + stadspagina’s als lokale SEO-assets — los van lidmaatschaps-UX en softwarekoppelingen op de fitnesswebsite-spoke, maar afgestemd zodat kaarttaps landen op pagina’s die uitleggen voor wie je past.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Reviews, seasons and citations',
      description:
        'We launch review habits after trials and coaching blocks, prepare GBP posts ahead of January and spring spikes, and clean citations so directories do not contradict your hours or trainer contact details.'
    },
    nl: {
      step: '04',
      title: 'Reviews, seizoenen en citations',
      description:
        'We starten reviewgewoontes na proeflessen en coachingblokken, bereiden GBP-posts voor vóór januari- en voorjaarspieken, en schonen citations zodat directories je uren of trainercontact niet tegenspreken.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure trials and intakes, not vanity ranks',
      description:
        'Monthly reporting on map views, calls, direction taps and shifts on gym, PT and discipline + city keywords — read as progress toward filled trials and coaching slots, without promising a permanent map-pack place.'
    },
    nl: {
      step: '05',
      title: 'Meet proeflessen en intakes, geen vanity-ranks',
      description:
        'Maandelijkse rapportage over kaartweergaven, belletjes, route-taps en verschuivingen op sportschool-, PT- en discipline- + stadzoekwoorden — gelezen als voortgang naar volle proeflessen en coachingplekken, zonder een vaste kaartpackplek te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'social-media'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Gyms & personal trainers',
    crumbCurrent: 'Local SEO',
    badge: 'Fitness local SEO',
    h1: 'Local SEO for gyms & personal trainers',
    heroSub:
      'Get found when people search “gym [city]”, “personal trainer [city]”, “crossfit/yoga [city]” or “weight-loss coaching near me” — with a training-floor Google Business Profile, discipline and city pages, review growth and seasonal work ahead of January and spring peaks. With 1,500+ completed projects, we know how clubs and coaches earn local-pack trust when motivation is highest.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in the local pack means losing the ready starter',
    problemP1:
      'Someone motivated to start tonight opens Maps, types “gym near me” or “personal trainer [city]”, and signs up with one of the first trusted results. If your profile lacks floor photos, recent reviews or clear discipline cues, that tap often goes to a big chain — even when your community would have been the better fit. Motivation cools fast; missing the pack costs a starter who was already ready.',
    problemP2:
      'Fitness local search is emotional, neighbourhood-led and review-heavy — not a dentist emergency slot and not an accountant shortlist. Clubs compete with Basic-Fit and SportCity on city terms while still winning people who want bootcamp, kickboxing or small-group coaching nearby. Personal trainers without a venue need service-area visibility, not a fake storefront.',
    problemP3:
      'Social media warms community, but organic map visibility compounds every January resolution week and every spring “summer body” surge. Without local SEO you keep hoping Instagram DMs fill the diary while the studio with sharper hours, fresher reviews and clearer city pages owns the Maps glance that decides the first trial.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for gyms & personal trainers',
    featuresSub:
      'Every deliverable serves people searching a gym, coach or discipline in your city — GBP with floor proof, discipline/city pages, reviews, seasons and pack focus against chains — not a website redesign and not a salon checklist with dumbbells swapped in.',
    processBadge: 'How we work',
    processHead: 'How a gym or personal trainer local SEO engagement runs',
    processSub:
      'From auditing how you appear for gym and PT queries in your city, to measuring taps that become trials and intakes — including January and spring search peaks.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why clubs and coaches trust us with local findability',
    whySub:
      'Fitness-aware local SEO that treats club catchments and service-area trainers as different Maps problems — and respects how emotional, review-led choices decide who starts training nearby.',
    whyItems: [
      {
        title: 'Pack work tuned for fitness intent',
        desc: 'We optimise for gym, PT, crossfit/yoga and weight-loss coaching + city phrases — including the moments when someone is ready to start this week, not someday.'
      },
      {
        title: 'GBP that looks like a real club or coach',
        desc: 'Floor photos, class cues, accurate hours and actions that match how locals choose a training place — not an empty sports category with leftover stock images.'
      },
      {
        title: 'Reviews for personal decisions',
        desc: 'We build post-trial and post-coaching review habits so recent member voices sit next to map results — often the factor that beats a chain logo on distance alone.'
      },
      {
        title: 'One partner from Maps to the first session',
        desc: 'Local SEO for findability first; fitness website and social media when conversion or community proof needs a push — one team that already knows your disciplines and peak seasons.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for gyms & personal trainers',
    costsIntro:
      'Fitness local SEO is ongoing GBP work, discipline and city pages, keywords, citations and review growth. Profile lifts often appear within weeks; holding “gym [city]” relevance against chains usually needs months. Build visibility ahead of January and spring peaks — we share realistic trial trends, not guaranteed rankings.',
    costsItems: [
      {
        title: 'Foundation (one club or PT practice)',
        desc: 'GBP overhaul with floor or service-area setup, citation cleanup, review process after trials or coaching, and a gym/PT/discipline + city keyword set. Ideal when Maps underplays who you are for or hides your action buttons.'
      },
      {
        title: 'Growth (competitive city)',
        desc: 'Ongoing monthly optimisation: discipline-page support, review replies, seasonal posts before January and spring, competitor monitoring against chains, reporting on taps that lead to trials and intakes.'
      },
      {
        title: 'Multi-location clubs or trainer networks',
        desc: 'Expanding clubs and coach networks get location and category structures that keep each floor or catchment competing for its own city queries — without Maps mixing which venue owns “gym [city]”.'
      }
    ],
    costsNote:
      'Scope depends on how many locations you run, which disciplines you publish and whether you are a club or a service-area trainer. Request a fitness local-SEO quote — we outline GBP setup, city keywords and review cadence with honest timelines, without ranking guarantees. Bring your cities and busiest resolution weeks so we size the plan around real search peaks.',
    siblingsBadge: 'Also for gyms & personal trainers',
    siblingsHead: 'Pair local SEO with a conversion-ready site and community',
    siblingsSub:
      'Maps puts you on the shortlist when someone wants a gym or trainer nearby; the website converts that glance into a trial, and social media warms community proof. These services complete the silo.',
    siblingsCta: 'View service',
    hubLink: 'Back to gym & personal trainer marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside fitness we offer broader local SEO. Gym and personal trainer engagements follow the process on this page.',
    ctaHeading: 'Ready to show up when locals search for a gym tonight?',
    ctaSub:
      'Tell us your city, disciplines and whether you run a club or a service-area PT practice. We scope fitness GBP, city pages and seasonal keywords with honest timelines — without promising a fixed map-pack place.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Sportscholen & personal trainers',
    crumbCurrent: 'Lokale SEO',
    badge: 'Lokale SEO voor fitness',
    h1: 'Lokale SEO voor sportscholen',
    heroSub:
      'Word gevonden wanneer mensen “sportschool [stad]”, “personal trainer [stad]”, “crossfit/yoga [stad]” of “afvallen begeleiding bij mij in de buurt” zoeken — met een zaalklaar Google Bedrijfsprofiel, discipline- en stadspagina’s, reviewgroei voor emotionele keuzes en seizoenswerk vóór januari- en voorjaarspieken. Met 1.500+ afgeronde projecten weten we hoe clubs en coaches local-packvertrouwen verdienen wanneer motivatie het hoogst is.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in de local pack betekent de klaarstaande starter verliezen',
    problemP1:
      'Iemand die vanavond wil starten opent Maps, typt “sportschool bij mij” of “personal trainer [stad]”, en schrijft zich in bij één van de eerste vertrouwde resultaten. Mist je profiel zaalfoto’s, recente reviews of heldere disciplinesignalen, dan gaat die tik vaak naar een grote keten — ook wanneer jouw community beter had gepast. Motivatie koelt snel af; de pack missen op dat moment kost een lid of coachingcliënt die al klaar was.',
    problemP2:
      'Lokaal fitnesszoeken is emotioneel, buurtgedreven en reviewzwaar — geen tandarts-spoedplek en geen accountants-shortlist. Clubs concurreren met Basic-Fit en SportCity op stadszoeken en winnen nog steeds mensen die bootcamp, kickboksen of small-group coaching in de buurt willen. Personal trainers zonder pand hebben service-area-zichtbaarheid nodig, geen nep-storefront. Mis die nuances en je optimaliseert voor de verkeerde voetafdruk terwijl ketens de gratis ontdekkingslaag houden.',
    problemP3:
      'Social media warmt community, maar organische kaartzichtbaarheid stapelt elke januarivoornemensweek en elke voorjaars-“summer body”-golf. Zonder lokale SEO hoop je dat Instagram-DM’s de agenda vullen terwijl de studio met scherpere uren, frissere reviews en helderdere stadspagina’s de Maps-blik bezit die bepaalt wie de eerste proefles boekt — vaak vóór iemand überhaupt je merksite opent.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor sportscholen',
    featuresSub:
      'Elke deliverable dient mensen die een sportschool, coach of discipline in jouw stad zoeken — GBP met zaalbewijs, discipline-/stadspagina’s, reviews, seizoenen en packfocus tegen ketens — geen websiteredesign en geen salonchecklist met dumbbells erin geplakt.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor een sportschool of PT verloopt',
    processSub:
      'Van een audit van hoe je verschijnt op sportschool- en PT-queries in jouw stad, tot meten van taps die proeflessen en intakes worden — inclusief januari- en voorjaarszoekpieken.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom clubs en coaches hun lokale vindbaarheid aan ons toevertrouwen',
    whySub:
      'Fitnessbewuste lokale SEO die clubverzorgingsgebieden en service-area-trainers als verschillende Maps-problemen behandelt — en respecteert hoe emotionele, reviewgedreven keuzes bepalen wie in de buurt gaat trainen.',
    whyItems: [
      {
        title: 'Packwerk afgestemd op fitnessintentie',
        desc: 'We optimaliseren voor sportschool-, PT-, crossfit/yoga- en afvalbegeleiding- + stadfrasen — inclusief momenten waarop iemand deze week wil starten, niet ooit.'
      },
      {
        title: 'GBP dat oogt als echte club of coach',
        desc: 'Zaalfoto’s, lessignalen, accurate uren en acties die passen bij hoe locals een trainingsplek kiezen — geen lege sportcategorie met reststockbeelden.'
      },
      {
        title: 'Reviews voor persoonlijke beslissingen',
        desc: 'We bouwen reviewgewoontes na proeflessen en coaching zodat recente ledenstemmen naast kaartresultaten staan — vaak de factor die een ketenlogo op alleen afstand verslaat.'
      },
      {
        title: 'Eén partner van Maps tot de eerste sessie',
        desc: 'Eerst lokale SEO voor vindbaarheid; fitnesswebsite en social media wanneer conversie of communitybewijs een duwtje nodig heeft — één team dat jullie disciplines en piekseizoenen al kent.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor sportscholen',
    costsIntro:
      'Lokale SEO voor fitness is doorlopend GBP-werk, discipline- en stadspagina’s, zoekwoorden, citations en reviewgroei. Profielacties stijgen vaak binnen enkele weken; relevantie vasthouden op “sportschool [stad]” tegen ketens vraagt meestal maanden van compounding. Bouw zichtbaarheid vóór januari- en voorjaarspieken — we delen realistische proefles- en intaketrends, geen gegarandeerde rankings.',
    costsItems: [
      {
        title: 'Foundation (één club of PT-praktijk)',
        desc: 'GBP-overhaul met zaal- of service-area-opzet, citation-opschoning, reviewproces na proeflessen of coaching, en een sportschool-/PT-/discipline- + stad-zoekwoordenset. Ideaal wanneer Maps onderschat voor wie je past of je actieknoppen verstopt.'
      },
      {
        title: 'Growth (concurrerende stad)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor disciplinepagina’s, reviewantwoorden, seizoensposts vóór januari en voorjaar, concurrentiemonitoring tegen ketens, rapportage op taps die tot proeflessen en intakes leiden.'
      },
      {
        title: 'Meerdere locaties of coachnetwerken',
        desc: 'Groeiende clubs en coachnetwerken krijgen locatie- en categoriestructuren die elke vloer of catchment om de eigen stadsqueries laten concurreren — zonder dat Maps door elkaar haalt welke vestiging “sportschool [stad]” mag claimen.'
      }
    ],
    costsNote:
      'Scope hangt af van hoeveel locaties je runt, welke disciplines je publiceert en of je een club of service-area-trainer bent. Vraag een lokale-SEO-offerte voor fitness aan — we schetsen GBP-opzet, stadszoekwoorden en reviewritme met eerlijke planning, zonder rankinggaranties. Neem je steden, drukste voornemensweken en of je vooral concurreert met ketens of buurtstudio’s mee, zodat we het plan rond echte zoekpieken dimensioneren.',
    siblingsBadge: 'Ook voor sportscholen',
    siblingsHead: 'Combineer lokale SEO met een conversieklaare site en community',
    siblingsSub:
      'Maps zet je op de shortlist wanneer iemand een sportschool of trainer in de buurt wil; de website maakt van die blik een proefles, en social media warmt communitybewijs. Deze diensten maken de silo compleet.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar sportscholen- & personal-trainermarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten fitness bieden we bredere lokale SEO. Sportschool- en personal-trainertrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om zichtbaar te zijn wanneer locals vanavond een sportschool zoeken?',
    ctaSub:
      'Vertel je stad, disciplines en of je een club runt of een service-area-PT-praktijk. We scopen fitness-GBP, stadspagina’s en seizoenszoekwoorden met eerlijke doorlooptijden — zonder een vaste kaartpackplek te beloven.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function SportscholenLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-sportscholen'][locale]
  const firmSpokes = BRANCH_SPOKES.sportscholen
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
                industrySlug="sportscholen"
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
