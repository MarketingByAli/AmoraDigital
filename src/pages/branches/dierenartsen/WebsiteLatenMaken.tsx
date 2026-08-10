import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CalendarCheck,
  Car,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  PawPrint,
  Pill,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  Users
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  CalendarCheck,
  Pill,
  PawPrint,
  Stethoscope,
  ClipboardList,
  HeartHandshake,
  Users,
  Car,
  Star,
  Smartphone
] as const

const FEATURES = [
  {
    en: {
      title: 'Online appointments that calm the rush',
      description:
        'Pet owners book vaccines, dental checks or follow-ups without ringing a busy desk mid-consult. Species, reason for visit and preferred slot land in your diary — confirmations to clinic and owner, not a voicemail pile at closing time.'
    },
    nl: {
      title: 'Online afspraken die de druk wegnemen',
      description:
        'Baasjes boeken vaccins, gebitscontroles of vervolgbezoeken zonder een drukke balie te bellen tijdens een consult. Diersoort, reden en voorkeursslot landen in jouw agenda — bevestigingen naar praktijk én baasje, geen voicemailberg bij sluitingstijd.'
    }
  },
  {
    en: {
      title: 'Repeat-prescription requests without the queue',
      description:
        'A dedicated refill path for chronic meds and diets — so owners renew what the vet already prescribed without blocking the emergency line or inventing a fake “appointment” just to ask for tablets.'
    },
    nl: {
      title: 'Herhaalrecepten zonder de wachtrij',
      description:
        'Een apart herhaalpad voor chronische medicatie en diëten — zodat baasjes vernieuwen wat de dierenarts al voorschreef, zonder de spoedlijn te blokkeren of een nepafspraak te maken alleen voor tabletten.'
    }
  },
  {
    en: {
      title: 'Emergency and out-of-hours in plain sight',
      description:
        'A panic-proof spoed entry: when to call, where to drive, and what not to wait for. Anxious owners at 23:00 need one thumb tap — not a buried PDF under “useful links” while their animal deteriorates.'
    },
    nl: {
      title: 'Spoed- en nooddienst in het volle zicht',
      description:
        'Een paniekbestendige spoed-ingang: wanneer bellen, waarheen rijden, en waar je niet mee mag wachten. Gestresste baasjes om 23:00 hebben één duimtik nodig — geen begraven PDF onder “handige links” terwijl hun dier achteruitgaat.'
    }
  },
  {
    en: {
      title: 'Species and specialisations made obvious',
      description:
        'Dogs and cats, rodents, exotics, horses or farm animals each get clear paths — so a rabbit owner never books into a large-animal slot, and a horse yard sees you actually treat equines.'
    },
    nl: {
      title: 'Diersoorten en specialisaties meteen helder',
      description:
        'Honden en katten, knaagdieren, exoten, paarden of landbouwhuisdieren krijgen elk heldere paden — zodat een konijnenbaasje nooit in een grootdier-slot boekt, en een paardenhouder ziet dat je écht equinen behandelt.'
    }
  },
  {
    en: {
      title: 'Care services owners actually search',
      description:
        'Vaccinations, sterilisation, dentistry, surgery, diet advice and wellness checks as distinct service stories — matching how people type intent, not one vague “veterinary care” blob that hides what you excel at.'
    },
    nl: {
      title: 'Zorgdiensten waar baasjes écht op zoeken',
      description:
        'Vaccinaties, sterilisatie, gebitsbehandeling, chirurgie, dieetadvies en wellnesscontroles als aparte dienstverhalen — zoals mensen intentie typen, geen vage “dierenzorg”-blob die verbergt waar jij in uitblinkt.'
    }
  },
  {
    en: {
      title: 'New pet and household registration',
      description:
        'A guided first-visit intake: animal details, prior history notes and consent steps that enter your process — fewer incomplete forms at reception when a family walks in with a new puppy or rescue.'
    },
    nl: {
      title: 'Nieuwe huisdieren en huishoudens inschrijven',
      description:
        'Een begeleid eerste-bezoek-inschrijfpad: diergegevens, voorgeschiedenisnotities en toestemmingen die in jouw proces landen — minder incomplete formulieren aan de balie wanneer een gezin binnenkomt met een nieuwe pup of asieldier.'
    }
  },
  {
    en: {
      title: 'Warm design that treats pets as family',
      description:
        'Tone, photography and colour that feel compassionate without becoming cartoonish — owners decide with their gut when a loved animal is unwell; cold clinic stock photos lose that moment to a warmer neighbour practice.'
    },
    nl: {
      title: 'Warme uitstraling die huisdieren als gezin ziet',
      description:
        'Toon, fotografie en kleur die compassie uitstralen zonder cartoonachtig te worden — baasjes beslissen met hun onderbuik wanneer een geliefd dier ziek is; koude kliniekstockfoto’s verliezen dat moment aan een warmere buurtpraktijk.'
    }
  },
  {
    en: {
      title: 'Vets and nurses you can put a face to',
      description:
        'Team pages with roles, languages and interests (exotics, dentistry, behaviour) — trust rises when owners recognise who will hold their animal, not a nameless white-coat silhouette.'
    },
    nl: {
      title: 'Dierenartsen en assistenten met een gezicht',
      description:
        'Teampagina’s met rollen, talen en interesses (exoten, gebit, gedrag) — vertrouwen groeit wanneer baasjes herkennen wie hun dier vasthoudt, geen naamloze witte-jas-silhouet.'
    }
  },
  {
    en: {
      title: 'Practical clinic info owners need',
      description:
        'Parking, walk-in hours, fee-range indications where you publish them, and how to arrive with a carrier or horse trailer — friction removed before the first visit, not after a frustrated phone call.'
    },
    nl: {
      title: 'Praktische info die baasjes nodig hebben',
      description:
        'Parkeren, inloopspreekuur, tariefindicaties waar je die publiceert, en hoe je aankomt met bench of paardentrailer — frictie weg vóór het eerste bezoek, niet na een gefrustreerd telefoontje.'
    }
  },
  {
    en: {
      title: 'Pet-owner reviews and mobile calm',
      description:
        'Authentic baasje reviews next to booking and emergency CTAs, on a phone-first layout — most “vet near me” and spoed searches happen on a screen in a car park or kitchen at night.'
    },
    nl: {
      title: 'Reviews van baasjes en mobiele rust',
      description:
        'Authentieke baasjesreviews naast boekings- en spoed-CTA’s, op een telefoon-first layout — de meeste “dierenarts bij mij”- en spoedzoeken gebeuren op een scherm op de parkeerplaats of in de keuken ’s avonds.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Clinic offer and intake audit',
      description:
        'We map species you treat, emergency cover, booking and prescription tools you already use, and how new pets arrive today — separate from Maps findability on the local-SEO spoke.'
    },
    nl: {
      step: '01',
      title: 'Praktijkaanbod- en intake-audit',
      description:
        'We brengen diersoorten, spoeddekking, afspraak- en recepttools die je al gebruikt, en hoe nieuwe huisdieren vandaag binnenkomen in kaart — los van Maps-vindbaarheid op de lokale-SEO-spoke.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Structure for calm and for crisis',
      description:
        'We plan species paths, service stories, online booking and refill routes, plus a prominent spoed entry so planned care and panic moments never share one confused form.'
    },
    nl: {
      step: '02',
      title: 'Structuur voor rust én voor crisis',
      description:
        'We plannen diersoortpaden, dienstverhalen, online boekings- en herhaalroutes, plus een prominente spoed-ingang zodat geplande zorg en paniekmomenten nooit één verward formulier delen.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Visual system for compassion and clarity',
      description:
        'Layouts built for warm photography, team faces and thumb-sized emergency buttons — atmosphere without burying the call now or book now actions anxious owners need.'
    },
    nl: {
      step: '03',
      title: 'Visueel systeem voor compassie en helderheid',
      description:
        'Layouts gebouwd voor warme fotografie, teamgezichten en duimgrote spoedknoppen — sfeer zonder de bel-nu- of boek-nu-acties te begraven die gestreste baasjes nodig hebben.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, connect, hand over updates',
      description:
        'We build the site, wire appointment and refill flows to tools you approve, place reviews and practical blocks, and train your team to update hours, species notes and team bios without a developer for every change.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, koppelen, updates overdragen',
      description:
        'We bouwen de site, koppelen afspraak- en herhaalstromen aan tools die je goedkeurt, plaatsen reviews en praktische blokken, en trainen je team om tijden, diersoortnotities en teambio’s bij te werken zonder developer voor elke wijziging.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch and watch booking quality',
      description:
        'Launch tracks first-visit registrations, online bookings, refill requests and emergency taps — so you see whether mobile traffic becomes dated diary slots, not anonymous hits that bounce to a clearer clinic.'
    },
    nl: {
      step: '05',
      title: 'Live en boekingskwaliteit volgen',
      description:
        'Livegang volgt eerste-bezoek-inschrijvingen, online boekingen, herhaalaanvragen en spoedtiks — zodat je ziet of mobiel verkeer gedateerde agendasloten wordt, geen anonieme hits die naar een helderdere praktijk bouncen.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Veterinary clinics',
    crumbCurrent: 'Website design',
    badge: 'Veterinary clinic websites',
    h1: 'Website design for veterinary clinics',
    heroSub:
      'A veterinary clinic website that helps anxious pet owners book care and reach you in a crisis — with online appointments and repeat-prescription requests, a panic-proof emergency entry, clear species and specialisation paths (dogs and cats, rodents, exotics, horses), service stories for vaccines, sterilisation, dentistry, surgery and diet advice, warm first-visit registration, team faces, parking and fee-range clarity, owner reviews and mobile-first calm. With 1,500+ completed projects, we know how families choose a vet when a loved animal is unwell and every unclear click costs trust.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'An anxious owner books the clinic that makes care feel possible',
    problemP1:
      'When a dog limps at midnight or a kitten stops eating, owners do not browse slowly. They need to book, call or find emergency cover in seconds. A confusing site with no online booking, buried spoed info or vague “we treat animals” copy sends that family to the practice that feels clearer — even when your clinical skill is stronger.',
    problemP2:
      'Veterinary clinics are not human dental chairs and not physiotherapy intake desks. You care for a family member with fur or feathers, often with species limits, out-of-hours cover and recurring vaccines that keep owners returning for years. Miss the species filter, the refill path or a warm team introduction, and high-value household relationships land elsewhere before the first consult.',
    problemP3:
      'Local SEO and Google Ads can surface your name for “vet [town]”, but the website is where panic becomes a dated slot or a phone call. When two clinics look equal on Maps, the one whose site shows emergency steps, species fit and one-tap booking usually wins the first visit. Without that layer every Instagram puppy photo is a promise a clearer homepage turns into a registration.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in a veterinary clinic website',
    featuresSub:
      'Every deliverable serves a pet owner choosing care for an animal they love — booking and refills, spoed clarity, species paths, service depth, warm registration, team trust, practical info, reviews and mobile calm — not a dentist template with a paw icon swapped in.',
    processBadge: 'How we work',
    processHead: 'How a veterinary clinic website project runs',
    processSub:
      'From auditing how bookings, refills and emergency calls arrive today to measuring which paths start real first visits and lasting household relationships.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why veterinary clinics trust us with their booking site',
    whySub:
      'Pet-care-aware delivery that treats compassion, species scope and emergency access as the product — not human patient funnels with animal nouns pasted over.',
    whyItems: [
      {
        title: 'Built for the worried kitchen moment',
        desc: 'Pages answer “can I book tonight?”, “do you see my species?” and “what if this is urgent?” before an owner opens a second clinic tab.'
      },
      {
        title: 'Planned care and spoed kept distinct',
        desc: 'Vaccines and dental checks get calm booking depth; emergencies get a loud, simple path — so panic never fills a wellness questionnaire.'
      },
      {
        title: 'Species honesty over vague “all pets”',
        desc: 'We surface dogs, cats, exotics or farm animals you actually treat — wrong species never wastes a consult hour or an owner’s drive.'
      },
      {
        title: 'One team for findability next',
        desc: 'Website first; local SEO and Google Ads when town or urgent “vet near me” intent needs a push — one team that already knows your species mix and cover.'
      }
    ],
    costsBadge: 'Scope',
    costsHead: 'What shapes the scope of a veterinary clinic website',
    costsIntro:
      'Scope scales with which species you treat, how deep appointment and prescription connections need to be, number of locations, and whether emergency cover is in-house or referred. A small-animal city clinic asks for a different build than a mixed practice with horses and farm calls. Fixed deliverables after we review your offer, tools and how new pets arrive — not a rebuild every time a new nurse joins.',
    costsItems: [
      {
        title: 'Essential clinic site',
        desc: 'Homepage with trust and emergency strip, species overview, core services, one strong booking path, team strip, practical info and contact. Ideal for a focused practice that needs clarity beyond a Facebook page alone.'
      },
      {
        title: 'Booking-deep multi-species site',
        desc: 'Everything in Essential, plus richer species and service paths, separate refill and spoed flows, fuller registration and review sections, and analytics on which visit types convert.'
      },
      {
        title: 'Multi-location or mixed practice',
        desc: 'Several branches or small-animal plus large-animal engines with shared team and policy rules. Scoped per clinic after we map how diaries, prescriptions and photo archives are managed today.'
      }
    ],
    costsNote:
      'Scope is fixed after we understand species mix, booking and refill tooling, and location count. Request a veterinary clinic website quote with clear deliverables and a delivery plan — that is where your figure is set, not on a public rate list here. Bring how owners enquire today and which species or services you want featured first.',
    siblingsBadge: 'Also for veterinary clinics',
    siblingsHead: 'Pair your website with local findability and Google Ads',
    siblingsSub:
      'A strong site converts the visit; local SEO and Google Ads bring pet owners already searching for a vet, emergency cover or a nearby clinic. These services point them to booking and spoed paths that already make sense.',
    siblingsCta: 'View service',
    hubLink: 'Back to veterinary clinic marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For projects outside veterinary care we offer broader website design. Clinic builds follow the process on this page.',
    ctaHeading: 'Ready for a website that turns worried searches into first visits?',
    ctaSub:
      'Share which species you treat, whether you offer emergency cover, and how bookings and refills work today. We propose a fixed scope for a site pet owners trust before they shortlist another clinic.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Dierenartsen',
    crumbCurrent: 'Website laten maken',
    badge: 'Websites voor dierenartsen',
    h1: 'Website laten maken voor dierenartsen',
    heroSub:
      'Een dierenartsenwebsite die gestreste baasjes helpt zorg te boeken en je te bereiken in een crisis — met online afspraken en herhaalreceptaanvragen, een paniekbestendige spoed-ingang, heldere diersoort- en specialisatiepaden (honden en katten, knaagdieren, exoten, paarden), dienstverhalen voor vaccins, sterilisatie, gebit, chirurgie en dieetadvies, warme eerste-bezoek-inschrijving, teamgezichten, parkeer- en tariefhelderheid, reviews van baasjes en mobiel-first rust. Met 1.500+ afgeronde projecten weten we hoe gezinnen een dierenarts kiezen wanneer een geliefd dier ziek is en elke onduidelijke klik vertrouwen kost.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Een gestrest baasje boekt de praktijk die zorg mogelijk laat voelen',
    problemP1:
      'Wanneer een hond ’s nachts mank loopt of een kitten stopt met eten, browsen baasjes niet rustig. Ze moeten binnen seconden boeken, bellen of spoeddekking vinden. Een verwarrende site zonder online afspraken, begraven spoedinfo of vage “wij behandelen dieren”-tekst stuurt dat gezin naar de praktijk die helderder voelt — ook wanneer jouw klinische kunde sterker is.',
    problemP2:
      'Dierenartsenpraktijken zijn geen menselijke tandartsstoelen en geen fysiotherapie-intakedesks. Jij zorgt voor een gezinslid met vacht of veren, vaak met diersoortgrenzen, avond- of spoeddekking en terugkerende vaccins die baasjes jarenlang laten terugkomen. Mis je het diersoortfilter, het herhaalpad of een warme teamintroductie, dan landen high-value huishoudrelaties elders vóór het eerste consult.',
    problemP3:
      'Lokale SEO en Google Ads kunnen je naam tonen op “dierenarts [plaats]”, maar op de website wordt paniek een gedateerd slot of een telefoontje. Wanneer twee praktijken op Maps gelijk ogen, wint vaak degene wiens site spoedstappen, diersoortfit en één-tik-boeking toont het eerste bezoek. Zonder die laag blijft elke Instagram-pupfoto een belofte die een helderdere homepage tot een inschrijving hardmaakt.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een website voor dierenartsen',
    featuresSub:
      'Elke deliverable dient een baasje dat zorg kiest voor een dier dat ze liefhebben — boekingen en herhaalrecepten, spoedhelderheid, diersoortpaden, dienstendiepte, warme inschrijving, teamvertrouwen, praktische info, reviews en mobiele rust — geen tandartstemplate met een pooticoon erin geplakt.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een website-traject voor dierenartsen verloopt',
    processSub:
      'Van een audit van hoe boekingen, herhaalrecepten en spoedcalls vandaag binnenkomen tot meten welke paden echte eerste bezoeken en duurzame huishoudrelaties starten.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom dierenartsenpraktijken hun boekingssite aan ons toevertrouwen',
    whySub:
      'Dierenzorgbewuste oplevering die compassie, diersoortbereik en spoedtoegang als product behandelt — geen menselijke patiëntentrechters met dierennamen eroverheen geplakt.',
    whyItems: [
      {
        title: 'Gebouwd voor het bezorgde keukenmoment',
        desc: 'Pagina’s beantwoorden “kan ik vanavond boeken?”, “zien jullie mijn diersoort?” en “wat als dit spoed is?” vóór een baasje een tweede praktijktab opent.'
      },
      {
        title: 'Geplande zorg en spoed apart gehouden',
        desc: 'Vaccins en gebitscontroles krijgen kalme boekingsdiepte; noodgevallen krijgen een luid, eenvoudig pad — zodat paniek nooit een wellnessvragenlijst vult.'
      },
      {
        title: 'Diersoorteerlijkheid boven vaag “alle dieren”',
        desc: 'We tonen honden, katten, exoten of landbouwhuisdieren die je écht behandelt — verkeerde soort verspilt nooit een consultuur of een rit van een baasje.'
      },
      {
        title: 'Eén team voor vindbaarheid daarna',
        desc: 'Website eerst; lokale SEO en Google Ads wanneer plaats- of spoedintentie “dierenarts bij mij” een duwtje nodig heeft — één team dat jouw diersoortmix en dekking al kent.'
      }
    ],
    costsBadge: 'Scope',
    costsHead: 'Wat bepaalt de scope van een dierenartsenwebsite',
    costsIntro:
      'De scope schaalt met welke diersoorten je behandelt, hoe diep afspraak- en receptkoppelingen moeten zijn, aantal locaties, en of spoeddekking in-house of doorverwezen is. Een kleine stadspraktijk voor gezelschapsdieren vraagt een andere build dan een gemengde praktijk met paarden en boerderijbezoeken. Vaste deliverables na review van je aanbod, tools en hoe nieuwe huisdieren binnenkomen — geen rebuild elke keer dat er een nieuwe assistente start.',
    costsItems: [
      {
        title: 'Essentiële praktijksite',
        desc: 'Homepage met vertrouwens- en spoedstrip, diersoortoverzicht, kerndiensten, één sterk boekingspad, teamstrip, praktische info en contact. Ideaal voor een gerichte praktijk die helderheid nodig heeft naast alleen een Facebookpagina.'
      },
      {
        title: 'Boekings-diepe multi-soort site',
        desc: 'Alles uit Essential, plus rijkere diersoort- en dienstpaden, aparte herhaal- en spoedstromen, vollere inschrijf- en reviewsecties, en analytics op welke bezoektypes converteren.'
      },
      {
        title: 'Multi-locatie of gemengde praktijk',
        desc: 'Meerdere vestigingen of gezelschaps- plus grootdiermotoren met gedeelde team- en beleidsregels. Scope per praktijk nadat we in kaart hebben hoe agenda’s, recepten en fotoarchieven nu worden beheerd.'
      }
    ],
    costsNote:
      'De scope zetten we vast na inzicht in diersoortmix, afspraak- en herhaaltools, en aantal locaties. Vraag een website-offerte voor dierenartsen aan met duidelijke deliverables en opleverplan — daar staat jouw bedrag, niet op een openbare tarievenlijst hier. Neem mee hoe baasjes nu aanvragen en welke diersoorten of diensten je eerst wilt tonen.',
    siblingsBadge: 'Ook voor dierenartsen',
    siblingsHead: 'Combineer je website met lokale vindbaarheid en Google Ads',
    siblingsSub:
      'Een sterke site converteert het bezoek; lokale SEO en Google Ads brengen baasjes die al zoeken naar een dierenarts, spoeddekking of een praktijk in de buurt. Deze diensten sturen hen naar boekings- en spoedpaden die al kloppen.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar dierenartsenmarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten dierenzorg bieden we breder webdesign. Praktijkbuilds volgen het proces op deze pagina.',
    ctaHeading: 'Klaar voor een website die bezorgde zoekers omzet in eerste bezoeken?',
    ctaSub:
      'Deel welke diersoorten je behandelt, of je spoeddekking biedt, en hoe boekingen en herhaalrecepten vandaag werken. We stellen een vaste scope voor een site die baasjes vertrouwen vóór ze een andere praktijk shortlisten.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function DierenartsenWebsiteLatenMaken() {
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
              <CalendarCheck className="w-4 h-4" aria-hidden />
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
