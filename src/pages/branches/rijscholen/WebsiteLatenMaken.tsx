import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  CalendarCheck,
  CarFront,
  CheckCircle2,
  Link2,
  MapPin,
  Package,
  Search,
  Smartphone,
  Sparkles,
  Star,
  Users,
  UserRound
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  Award,
  Package,
  CalendarCheck,
  Star,
  CarFront,
  UserRound,
  MapPin,
  Smartphone,
  Link2,
  Users
] as const

const FEATURES = [
  {
    en: {
      title: 'CBR pass rate as hard trust',
      description:
        'Your success percentage sits where parents and learners scan first — next to packages and trial CTAs — so comparison-site claims do not outrun the real CBR signal you earn on the road.'
    },
    nl: {
      title: 'CBR-slagingspercentage als hard vertrouwen',
      description:
        'Jouw slagingscijfer staat waar ouders en leerlingen eerst scannen — naast pakketten en proefles-CTA’s — zodat vergelijkingssite-claims het echte CBR-signaal dat je op de weg verdient niet inhalen.'
    }
  },
  {
    en: {
      title: 'Packages and lesson pricing presented clearly',
      description:
        'Lesson packs, hour blocks and intensive options sit in a structure learners can compare on a phone — what is included, which licence it fits, how to start — without a buried PDF or a vague “message us for rates” dead end.'
    },
    nl: {
      title: 'Pakketten en lesprijzen helder gepresenteerd',
      description:
        'Lespakketten, urenblokken en spoedopties staan in een structuur die leerlingen op de telefoon kunnen vergelijken — wat erin zit, welk rijbewijs het past, hoe je start — zonder begraven PDF of vaag “app voor tarieven”-doodlopend pad.'
    }
  },
  {
    en: {
      title: 'Trial lesson and online enrolment',
      description:
        'Proefles or intake requests plus sign-up paths capture availability and licence type — so a learner starts today instead of promising to call after school while a clearer competitor takes the slot.'
    },
    nl: {
      title: 'Proefles en online inschrijven',
      description:
        'Proefles- of intakeaanvragen plus inschrijfpaden vangen beschikbaarheid en rijbewijstype — zodat een leerling vandaag start in plaats van beloven na school te bellen terwijl een helderdere concurrent het slot pakt.'
    }
  },
  {
    en: {
      title: 'Reviews from passed students with proof photos',
      description:
        'Voices and graduation moments from learners who passed sit beside the packs they bought — the social proof young drivers and paying parents both trust more than stock cars on an empty road.'
    },
    nl: {
      title: 'Reviews van geslaagde leerlingen met bewijsfoto’s',
      description:
        'Stemmen en geslaagd-momenten van leerlingen die slaagden staan naast de pakketten die ze kochten — social proof die jonge bestuurders én betalende ouders meer vertrouwen dan stockauto’s op een lege weg.'
    }
  },
  {
    en: {
      title: 'Licence types split cleanly',
      description:
        'Separate paths for category B car, automatic, motorcycle, intensive courses and refresher lessons — so a scooter-to-car switcher never lands in a motorcycle pack maze.'
    },
    nl: {
      title: 'Rijbewijstypes schoon uitgesplitst',
      description:
        'Aparte paden voor categorie B auto, automaat, motor, spoedcursussen en bijscholing — zodat een scooter-naar-auto-switcher nooit in een motorpakketdoolhof belandt.'
    }
  },
  {
    en: {
      title: 'Instructors introduced with faces and focus',
      description:
        'Each instructor gets a short profile — languages, patience with exam nerves, automatic versus manual — so parents stop asking “who will teach my child?” in a WhatsApp thread.'
    },
    nl: {
      title: 'Instructeurs met gezicht en focus voorgesteld',
      description:
        'Elke instructeur krijgt een kort profiel — talen, rust bij examenstress, automaat versus handgeschakeld — zodat ouders stoppen met “wie geeft mijn kind les?” in een WhatsApp-thread.'
    }
  },
  {
    en: {
      title: 'Service area and pickup made obvious',
      description:
        'Towns you cover and pickup options sit on the homepage and enrolment path — so learners outside your catchment drop early, and locals see you already teach where they live or study.'
    },
    nl: {
      title: 'Werkgebied en ophaalservice duidelijk',
      description:
        'Plaatsen die je dekt en ophaalopties staan op homepage en inschrijfpad — zodat leerlingen buiten je catchment vroeg afvallen, en locals zien dat je al lesgeeft waar ze wonen of studeren.'
    }
  },
  {
    en: {
      title: 'Mobile for young learners and paying parents',
      description:
        'Thumb-friendly packs, sticky trial CTAs and readable pass-rate blocks for students shortlisting on a sofa phone — and parents finishing the decision on the same screen after work.'
    },
    nl: {
      title: 'Mobiel voor jonge leerlingen én betalende ouders',
      description:
        'Duimvriendelijke pakketten, sticky proefles-CTA’s en leesbare slagingsblokken voor leerlingen die op de bank shortlisten — en ouders die na het werk op hetzelfde scherm de keuze afronden.'
    }
  },
  {
    en: {
      title: 'Lesson planning and admin software links',
      description:
        'Where your stack allows, we connect planning or administration tools so enrolment and lesson availability do not force double entry after every timetable change.'
    },
    nl: {
      title: 'Koppeling met lesplanning en administratie',
      description:
        'Waar je stack het toelaat, koppelen we plannings- of administratietools zodat inschrijving en lesbeschikbaarheid geen dubbele invoer forceren na elke roosterwijziging.'
    }
  },
  {
    en: {
      title: 'Built for dual decision-makers',
      description:
        'Copy and layout speak to 17–25 learners and to parents who research pass rates and pay the pack — without talking down to either side or recycling a gym membership template.'
    },
    nl: {
      title: 'Gebouwd voor twee beslissers',
      description:
        'Tekst en layout spreken 17–25-leerlingen aan én ouders die slagingspercentages researchen en het pakket betalen — zonder neerbuigend te klinken of een sportschool-abonnements-template te hergebruiken.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Discovery on how students enrol today',
      description:
        'We map how learners and parents find you: Google, Instagram, TikTok, comparison sites and referrals. We note licence mix, how trial lessons and packs are sold, which planning software you use, and where sign-ups die between a pretty Reel and a contact box that asks nothing about availability.'
    },
    nl: {
      step: '01',
      title: 'Discovery op hoe leerlingen nu inschrijven',
      description:
        'We brengen in kaart hoe leerlingen en ouders je vinden: Google, Instagram, TikTok, vergelijkingssites en verwijzingen. We noteren rijbewijsmix, hoe proeflessen en pakketten worden verkocht, welke planningssoftware je gebruikt, en waar inschrijvingen sterven tussen een mooie Reel en een contactvak dat niets vraagt over beschikbaarheid.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Licence and enrolment architecture',
      description:
        'Information architecture puts pass rate, packs and trial first, then splits car, automatic, motorcycle, intensive and refresher journeys. A parent comparing B-licence packs should never land in a motorcycle intensive form.'
    },
    nl: {
      step: '02',
      title: 'Rijbewijs- en inschrijfarchitectuur',
      description:
        'Informatiearchitectuur zet slagingspercentage, pakketten en proefles voorop, en splitst daarna auto-, automaat-, motor-, spoed- en bijscholingjourneys. Een ouder die B-pakketten vergelijkt, mag niet in een motorspoedformulier belanden.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Design that sells trust and next steps',
      description:
        'Visual design for a young mobile audience and parents who finish the shortlist: clear pass-rate hierarchy, package cards, instructor faces and CTAs that say “Book a trial” or “Enrol” — not a gym energy collage with a car sticker.'
    },
    nl: {
      step: '03',
      title: 'Design dat vertrouwen en volgende stappen verkoopt',
      description:
        'Visueel ontwerp voor een jonge mobiele doelgroep en ouders die de shortlist afronden: heldere slagingshiërarchie, pakketkaarten, instructeursgezichten en CTA’s die “Boek een proefles” of “Schrijf in” zeggen — geen sportschool-energiecollage met een autosticker.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, connect planning, train',
      description:
        'We build the site, wire trial and enrolment forms, connect planning or admin software where possible, place passed-student proof, and train your team to update packs, instructors and pass figures without a developer for every new graduate photo.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, planning koppelen, trainen',
      description:
        'We bouwen de site, zetten proefles- en inschrijfforms klaar, koppelen plannings- of adminsoftware waar mogelijk, plaatsen geslaagd-bewijs, en trainen je team om pakketten, instructeurs en slagingscijfers bij te werken zonder developer voor elke nieuwe geslaagd-foto.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch and measure enrolment quality',
      description:
        'Launch tracks trial starts, pack enquiries and which licence paths convert — so you see whether mobile traffic becomes dated lesson requests, not anonymous hits that bounce to a comparison site.'
    },
    nl: {
      step: '05',
      title: 'Live en inschrijfkwaliteit meten',
      description:
        'Livegang volgt proeflesstarts, pakketaanvragen en welke rijbewijspaden converteren — zodat je ziet of mobiel verkeer gedateerde lesaanvragen wordt, geen anonieme hits die naar een vergelijkingssite bouncen.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Driving schools',
    crumbCurrent: 'Website design',
    badge: 'Driving school websites',
    h1: 'Website design for driving schools',
    heroSub:
      'A driving school website that fills the lesson calendar — with CBR pass rate as hard trust, clear packages and lesson pricing, trial-lesson and online enrolment, reviews from passed students, licence-type paths, instructor faces, service area and pickup, mobile design for young learners and paying parents, and links to lesson-planning software. With 1,500+ completed projects, we know how schools convert shortlists into sign-ups before a comparison site wins the click.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Learners and parents compare pass rate, price and reviews in minutes',
    problemP1:
      'A learner — or a parent who will pay the pack — compares driving schools on pass rate, price and reviews in a few phone minutes. A weak site with none of that visible loses the sign-up to a clearer competitor, even when your instructors and CBR figures are stronger. Comparison sites already package those signals; your own site must match or beat that clarity.',
    problemP2:
      'Driving schools do not need a gym membership grid, a salon booking calendar or a dentist recall path. They need pass-rate prominence, package and pricing clarity, trial and enrolment flows, passed-student proof, licence-type splits, instructor profiles, catchment and pickup, and mobile paths for both teens and parents. Miss that, and Instagram or TikTok traffic dies on a contact page that asks nothing useful.',
    problemP3:
      'Local SEO and Google Ads can bring discovery, but the website is where a shortlist becomes an enrolment. When two schools look equal on a feed or a directory, the one whose site shows CBR proof, packs and a trial CTA often wins the lesson slot. Without that layer every Reel of a passed student is a promise your competitor hardens on a clearer homepage.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in a driving school website',
    featuresSub:
      'Every deliverable serves a learner or parent choosing a school — pass rate, packages, trial and enrolment, passed-student reviews, licence types, instructors, catchment, mobile dual-audience paths and planning software links — not a fitness template with a steering wheel swapped in.',
    processBadge: 'How we work',
    processHead: 'How a driving-school website project runs',
    processSub:
      'From auditing how students and parents enrol today to measuring which packs and licence paths start real lesson requests.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why driving schools trust us with their enrolment site',
    whySub:
      'School-aware delivery that treats pass rates, packs and dual decision-makers as the product — not weekly salon chairs or gym memberships.',
    whyItems: [
      {
        title: 'Built around the shortlist minute',
        desc: 'Pages answer “what is the pass rate?”, “what does a pack include?” and “can we book a trial?” before a parent opens a second comparison tab.'
      },
      {
        title: 'Licence paths kept distinct',
        desc: 'Car, automatic, motorcycle, intensive and refresher each get proof and forms — so the wrong brief never wastes an instructor hour.'
      },
      {
        title: 'Young learners and parents both covered',
        desc: 'Mobile-first for students who discover on TikTok; clear CBR and package language for parents who finish the payment decision.'
      },
      {
        title: 'One team for findability next',
        desc: 'Website first; local SEO and Google Ads when city or lesson-price intent needs a push — one team that already knows your packs and catchment.'
      }
    ],
    costsBadge: 'Scope',
    costsHead: 'What shapes the scope of a driving school website',
    costsIntro:
      'Scope scales with how many licence types you teach, whether enrolment and lesson planning need a software connection, and how many locations or pickup zones you cover. A single-town B-licence school asks for a different build than a multi-site school with automatic, motorcycle and intensive tracks. Fixed deliverables after we review your packs, pass figures and enrolment flow — not a rebuild every time a new graduate photo lands.',
    costsItems: [
      {
        title: 'Essential school site',
        desc: 'Homepage with pass-rate signal, package overview, trial CTA, licence overview, instructor strip, catchment basics and contact. Ideal for a focused school that needs clarity beyond DMs and comparison listings alone.'
      },
      {
        title: 'Enrolment-deep school site',
        desc: 'Everything in Essential, plus richer licence paths, online enrolment or availability fields, passed-student galleries, fuller instructor profiles, mobile dual-audience paths and analytics on trial and pack starts.'
      },
      {
        title: 'Multi-licence or multi-location school',
        desc: 'Several licence tracks and locations with shared pack rules and planning links. Scoped per school after we map how lessons, instructors and admin software are managed today.'
      }
    ],
    costsNote:
      'Scope is fixed after we understand licence mix, planning-software needs and location count. Request a driving-school website quote with clear deliverables and a delivery plan — that is where your figure is set, not on a public rate list here. Bring how students enrol today and which packs you want featured first.',
    siblingsBadge: 'Also for driving schools',
    siblingsHead: 'Pair your website with local findability and Google Ads',
    siblingsSub:
      'A strong site converts the visit; local SEO and Google Ads bring learners already searching for a school or lesson pack in your towns. These services point them to pass rates and packs that already make sense.',
    siblingsCta: 'View service',
    hubLink: 'Back to driving school marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For projects outside driving schools we offer broader website design. School builds follow the process on this page.',
    ctaHeading: 'Ready for a website that turns shortlists into lesson enrolments?',
    ctaSub:
      'Share which licences you teach, how packs and trials work today, and which planning tools you use. We propose a fixed scope for a site learners and parents actually use before they enrol elsewhere.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Rijscholen',
    crumbCurrent: 'Website laten maken',
    badge: 'Websites voor rijscholen',
    h1: 'Website laten maken voor rijscholen',
    heroSub:
      'Een rijschoolwebsite die de lessenagenda vult — met CBR-slagingspercentage als hard vertrouwen, heldere pakketten en lesprijzen, proefles en online inschrijven met beschikbaarheid, reviews van geslaagde leerlingen met bewijsfoto’s, rijbewijstype-paden voor auto, automaat, motor en spoed, instructeursgezichten, werkgebied en ophaalservice, mobiel ontwerp voor jonge leerlingen én betalende ouders, en koppelingen met lesplanningssoftware. Met 1.500+ afgeronde projecten weten we hoe scholen shortlists omzetten in inschrijvingen vóór een vergelijkingssite de klik wint.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Leerlingen en ouders vergelijken slagingspercentage, prijs en reviews in minuten',
    problemP1:
      'Een leerling — of een ouder die het pakket betaalt — vergelijkt rijscholen op slagingspercentage, prijs en reviews in een paar telefoonminuten. Een zwakke site waarop dat niet zichtbaar is, verliest de inschrijving aan een helderdere concurrent, ook wanneer jouw instructeurs en CBR-cijfers sterker zijn. Vergelijkingssites verpakken die signalen al; jouw eigen site moet die helderheid evenaren of verslaan vóór de shortlist dichtvalt.',
    problemP2:
      'Rijscholen hebben geen sportschool-abonnementsgrid, salonboekingskalender of tandarts-recallpad nodig. Ze hebben slagingspercentage op de voorgrond, pakket- en prijsklarheid, proefles- en inschrijfflows, bewijs van geslaagden, rijbewijstype-splitsing, instructeursprofielen, catchment en ophaalservice, en mobiele paden voor én tieners én ouders die meebeslissen. Mis je dat, dan sterft Instagram- of TikTok-verkeer op een contactpagina die niets bruikbaars vraagt over beschikbaarheid of pakket.',
    problemP3:
      'Lokale SEO en Google Ads kunnen ontdekking brengen, maar op de website wordt een shortlist een inschrijving. Wanneer twee scholen op een feed of directory gelijk ogen, wint vaak degene wiens site CBR-bewijs, pakketten en een proefles-CTA toont het les-slot. Zonder die laag blijft elke Reel van een geslaagde leerling een belofte die je concurrent op een helderdere homepage met zichtbare pakketten hard maakt.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een website voor rijscholen',
    featuresSub:
      'Elke deliverable dient een leerling of ouder die een school kiest — slagingspercentage, pakketten, proefles en inschrijving, reviews van geslaagden, rijbewijstypes, instructeurs, werkgebied, ophaalservice, mobiele dual-audience-paden en planningssoftwarekoppelingen — geen fitnesstemplate met een stuur erin geplakt.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een website-traject voor een rijschool verloopt',
    processSub:
      'Van een audit van hoe leerlingen en ouders nu inschrijven tot meten welke pakketten en rijbewijspaden echte lesaanvragen starten — inclusief planningkoppeling waar nodig.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom rijscholen hun inschrijfsite aan ons toevertrouwen',
    whySub:
      'Schoolbewuste oplevering die slagingspercentages, pakketten, proefles en duale beslissers als product behandelt — geen wekelijkse salonstoelen of sportschoolabonnementen.',
    whyItems: [
      {
        title: 'Gebouwd rond de shortlistminuut',
        desc: 'Pagina’s beantwoorden “wat is het slagingspercentage?”, “wat zit er in een pakket?” en “kunnen we een proefles boeken?” vóór een ouder een tweede vergelijkingstab opent.'
      },
      {
        title: 'Rijbewijspaden apart gehouden',
        desc: 'Auto, automaat, motor, spoed en bijscholing krijgen elk bewijs en forms — zodat het verkeerde briefje geen instructeursuur verspilt.'
      },
      {
        title: 'Jonge leerlingen en ouders allebei gedekt',
        desc: 'Mobiel-first voor leerlingen die op TikTok ontdekken; heldere CBR- en pakkettaal voor ouders die de betalingskeuze afronden.'
      },
      {
        title: 'Eén team voor vindbaarheid daarna',
        desc: 'Website eerst; lokale SEO en Google Ads wanneer stads- of lesprijsintentie een duwtje nodig heeft — één team dat jouw pakketten en catchment al kent.'
      }
    ],
    costsBadge: 'Scope',
    costsHead: 'Wat bepaalt de scope van een rijschoolwebsite',
    costsIntro:
      'De scope schaalt met hoeveel rijbewijstypes je geeft, of inschrijving en lesplanning een softwarekoppeling nodig hebben, en hoeveel locaties of ophaalzones je dekt. Een één-plaats B-rijschool vraagt een andere build dan een multi-site school met automaat, motor, bijscholing en spoedtrajecten. Vaste deliverables na review van je pakketten, slagingscijfers en inschrijfflow — geen rebuild elke keer dat er een nieuwe geslaagd-foto of instructeur bijkomt.',
    costsItems: [
      {
        title: 'Essentiële schoolsite',
        desc: 'Homepage met slagingsignaal, pakketoverzicht, proefles-CTA, rijbewijsoverzicht, instructeursstrip, basis-catchment en contact. Ideaal voor een gerichte school die helderheid nodig heeft naast DM’s en vergelijkingslistings alleen.'
      },
      {
        title: 'Inschrijf-diepe schoolsite',
        desc: 'Alles uit Essential, plus rijkere rijbewijspaden, online inschrijving of beschikbaarheidsvelden, galerijen van geslaagden, vollere instructeursprofielen, mobiele dual-audience-paden en analytics op proefles- en pakketstarts.'
      },
      {
        title: 'Multi-rijbewijs of multi-locatie school',
        desc: 'Meerdere rijbewijstrajecten en locaties met gedeelde pakketregels en planningskoppelingen. Scope per school nadat we in kaart hebben hoe lessen, instructeurs en adminsoftware nu worden beheerd.'
      }
    ],
    costsNote:
      'De scope zetten we vast na inzicht in rijbewijsmix, planningssoftwarebehoefte en aantal locaties. Vraag een website-offerte voor rijscholen aan met duidelijke deliverables en opleverplan — daar staat jouw bedrag, niet op een openbare tarievenlijst hier. Neem mee hoe leerlingen nu inschrijven en welke pakketten je eerst wilt tonen.',
    siblingsBadge: 'Ook voor rijscholen',
    siblingsHead: 'Combineer je website met lokale vindbaarheid en Google Ads',
    siblingsSub:
      'Een sterke site converteert het bezoek; lokale SEO en Google Ads brengen leerlingen die al zoeken naar een school of lespakket in jouw plaatsen. Deze diensten sturen hen naar slagingspercentages, proefles en pakketten die al kloppen.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar rijschoolmarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten rijscholen bieden we breder webdesign. Schoolbuilds volgen het proces op deze pagina.',
    ctaHeading: 'Klaar voor een website die shortlists omzet in lesinschrijvingen?',
    ctaSub:
      'Deel welke rijbewijzen je geeft, hoe pakketten en proeflessen nu werken, en welke planningstools je gebruikt. We stellen een vaste scope voor een site die leerlingen en ouders écht gebruiken vóór ze elders inschrijven of een vergelijkingssite openen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function RijscholenWebsiteLatenMaken() {
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
