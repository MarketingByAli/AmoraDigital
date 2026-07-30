import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  Dumbbell,
  Link2,
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
  CalendarCheck,
  CreditCard,
  Users,
  UserRound,
  Sparkles,
  Link2,
  Star,
  Smartphone
] as const

const FEATURES = [
  {
    en: {
      title: 'Trial lesson and intake booking online',
      description:
        'Visitors book a proefles or coaching intake from their phone — date, class type or goal, and what happens next — so motivated people start today instead of promising to call after work.'
    },
    nl: {
      title: 'Proefles- en intakeboeking online',
      description:
        'Bezoekers boeken een proefles of coachingintake vanaf hun telefoon — datum, lestype of doel, en wat er daarna gebeurt — zodat gemotiveerde mensen vandaag starten in plaats van beloven na het werk te bellen.'
    }
  },
  {
    en: {
      title: 'Memberships and packages without price chaos',
      description:
        'Club subscriptions, day passes and PT packages sit in a clear structure — what is included, who it fits, how to start — so visitors compare options without hunting WhatsApp for “what does membership cost?” figures you publish elsewhere.'
    },
    nl: {
      title: 'Abonnementen en pakketten zonder prijschaos',
      description:
        'Clubabonnementen, dagpassen en PT-pakketten staan in een heldere structuur — wat erin zit, voor wie het past, hoe je start — zodat bezoekers opties vergelijken zonder WhatsApp te speuren naar “wat kost een lidmaatschap?”-bedragen die je elders publiceert.'
    }
  },
  {
    en: {
      title: 'Group class and schedule visibility',
      description:
        'Timetables for group classes, open gym hours and popular slots stay readable on mobile — so someone choosing between two clubs can see whether evening HIIT or morning yoga actually fits their week.'
    },
    nl: {
      title: 'Groepsles- en roostzichtbaarheid',
      description:
        'Roosters voor groepslessen, open-gym-uren en populaire slots blijven leesbaar op mobiel — zodat iemand die twee clubs vergelijkt ziet of avond-HIIT of ochtendyoga écht in hun week past.'
    }
  },
  {
    en: {
      title: 'Personal trainer profiles and specialisms',
      description:
        'Each coach gets a face, focus areas — strength, weight loss, rehab, online coaching — and a path to book an intake, so PT brands are not buried under a generic “meet the team” grid.'
    },
    nl: {
      title: 'Personal-trainerprofielen en specialisaties',
      description:
        'Elke coach krijgt een gezicht, focusgebieden — kracht, afvallen, revalidatie, online coaching — en een pad naar een intake, zodat PT-merken niet verdwijnen onder een generiek “ontmoet het team”-raster.'
    }
  },
  {
    en: {
      title: 'Transformations as proof, handled with care',
      description:
        'Before-after stories and member journeys sit where scanners decide — with consent-aware presentation — because fitness buyers trust visible change more than stock photos of empty equipment halls.'
    },
    nl: {
      title: 'Transformaties als bewijs, zorgvuldig getoond',
      description:
        'Before-after verhalen en ledenjourneys staan waar scanners beslissen — met toestemmingsbewuste presentatie — omdat fitnesskopers zichtbare verandering meer vertrouwen dan stockfoto’s van lege toestelhallen.'
    }
  },
  {
    en: {
      title: 'Member and schedule software links',
      description:
        'Where your stack allows, we connect Virtuagym, Sportbit, Eversports or similar so class booking and member login do not force double entry after every timetable change.'
    },
    nl: {
      title: 'Koppeling met leden- en roostersoftware',
      description:
        'Waar je stack het toelaat, koppelen we Virtuagym, Sportbit, Eversports of vergelijkbaar, zodat lesboeking en ledenlogin geen dubbele invoer forceren na elke roosterwijziging.'
    }
  },
  {
    en: {
      title: 'Community, reviews and retention content',
      description:
        'Member reviews, club atmosphere and light retention pieces — class tips, nutrition notes, comeback stories — so the site keeps supporting people after the January rush fades.'
    },
    nl: {
      title: 'Community, reviews en retentiecontent',
      description:
        'Ledenreviews, clubsfeer en lichte retentiestukken — lestips, voedingsnotities, comebackverhalen — zodat de site mensen blijft steunen nadat de januarirush wegzakt.'
    }
  },
  {
    en: {
      title: 'Mobile-first sign-up paths',
      description:
        'Most people pick a gym or coach on their phone between work and home. Trial CTAs, package overview and schedule blocks stay usable with one thumb — not a desktop brochure that collapses into chaos.'
    },
    nl: {
      title: 'Mobiele inschrijfpaden eerst',
      description:
        'De meeste mensen kiezen een sportschool of coach op de telefoon tussen werk en thuis. Proefles-CTA’s, pakketoverzicht en roosterblokken blijven met één duim bruikbaar — geen desktopbrochure die op klein scherm uit elkaar valt.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Discovery on the club floor',
      description:
        'We map how members and coaching clients find you today: Google, Instagram, referrals and walk-ins. We note whether you run a full gym, a PT studio or both, which member software you use, how trials and intakes are booked now, and where motivated visitors drop off between social proof and a half-finished contact form.'
    },
    nl: {
      step: '01',
      title: 'Discovery op de clubvloer',
      description:
        'We brengen in kaart hoe leden en coachingcliënten jullie nu vinden: Google, Instagram, verwijzingen en inlopen. We noteren of je een volledige sportschool runt, een PT-studio of beide, welke ledensoftware je gebruikt, hoe proeflessen en intakes nu geboekt worden, en waar gemotiveerde bezoekers afhaken tussen social proof en een half contactformulier.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Membership and coaching architecture',
      description:
        'Information architecture separates club memberships, class schedules, trial booking, PT profiles, online coaching and proof. A gym visitor looking for evening classes should never land in a 1-on-1 package maze — and a personal trainer brand should not hide behind a club megamenu.'
    },
    nl: {
      step: '02',
      title: 'Lidmaatschaps- en coachingarchitectuur',
      description:
        'Informatiearchitectuur scheidt clubabonnementen, lesroosters, proeflesboeking, PT-profielen, online coaching en bewijs. Een sportschoolbezoeker die avondlessen zoekt, mag niet in een 1-op-1-pakketdoolhof belanden — en een personal-trainermerk mag niet verstopt zitten achter een clubmegamenu.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Design for energy and clarity',
      description:
        'Visual design that puts people, classes and next steps first: readable schedule cards on a phone, CTAs that say “Book a trial” or “Plan intake”, and space for transformations without turning the site into a chaotic collage.'
    },
    nl: {
      step: '03',
      title: 'Design voor energie en helderheid',
      description:
        'Visueel ontwerp met mensen, lessen en volgende stappen voorop: leesbare roosterkarten op de telefoon, CTA’s die “Boek een proefles” of “Plan intake” zeggen, en ruimte voor transformaties zonder dat de site een chaotische collage wordt.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, connect, train',
      description:
        'We build the site, connect member or schedule software where possible, set trial and intake forms, and train your team to update classes, packages and coach bios without a developer for every timetable tweak. Content stays editable by people who run the floor — not only by IT.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, koppelen, trainen',
      description:
        'We bouwen de site, koppelen leden- of roostersoftware waar mogelijk, zetten proefles- en intakeforms klaar, en trainen je team om lessen, pakketten en coachbio’s te updaten zonder developer voor elke roosterwijziging. Content blijft bewerkbaar door mensen op de vloer — niet alleen door IT.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch and measure sign-ups',
      description:
        'Launch tracks trial bookings, membership enquiries, PT intakes and which pages visitors read longest. You see whether Google, social or referrals fill the diary — not anonymous hits that never become a first session or coaching call.'
    },
    nl: {
      step: '05',
      title: 'Live en inschrijvingen meten',
      description:
        'Livegang volgt proeflesboekingen, lidmaatschapsaanvragen, PT-intakes en welke pagina’s bezoekers het langst lezen. Je ziet of Google, social of verwijzingen de agenda vullen — geen anonieme hits die nooit een eerste les of coachinggesprek worden.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'social-media'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Gyms & personal trainers',
    crumbCurrent: 'Website design',
    badge: 'Fitness websites',
    h1: 'Website design for gyms & personal trainers',
    heroSub:
      'A gym and personal-trainer website that fills memberships and coaching spots — with online trial or intake booking, clear packages, readable class schedules, coach profiles, transformation proof and mobile paths built for people signing up on their phone. With 1,500+ completed projects, we know how fitness businesses convert online.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'A weak site loses the member who was ready to start today',
    problemP1:
      'Someone scrolling Instagram or searching “gym near me” after a hard week is often ready to book a trial this evening — not next month. When your site only shows a stock photo of dumbbells, a buried PDF schedule and a “contact us” form with no next step, that motivated visitor opens the competitor whose proefles button and membership overview already look operational. January resolutions and summer-body spikes amplify the loss: empty slots that could have been filled by people who already decided to move.',
    problemP2:
      'Gyms and personal trainers do not need a restaurant reservation widget or a salon colour menu. Clubs need membership clarity, group-class visibility and trial booking that feeds member software. Trainers need a personal brand, specialisms, transformation proof and a clean intake path for 1-on-1 or online coaching. Miss that split, and you pay in abandoned trials and coaches who look interchangeable. Motivation fades fast; a site that forces people to message privately for every answer kills the moment.',
    problemP3:
      'Social media carries community energy, but your website is where packages, schedules and software-linked booking live under your control. When two studios look equal on Reels, the one that shows a clear timetable, honest package structure and recent member reviews often wins the first visit. Mobile matters the same evening someone finishes work and wants a trial slot before motivation cools — that is fitness reality, not generic brochure theory.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in a gym & personal trainer website',
    featuresSub:
      'Each block serves a club member or a coaching client — trial booking, packages, schedules, PT profiles, transformations, software links — not a beauty-salon template with kettlebells pasted on.',
    processBadge: 'How we work',
    processHead: 'How a gym or personal trainer website project runs',
    processSub:
      'From the first walkthrough of your membership offer and coaching intake to measuring which pages drive trials, sign-ups and PT conversations.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why gyms and trainers trust us with their digital front desk',
    whySub:
      'Fitness-aware delivery that treats club memberships and personal coaching as distinct buyer journeys — and respects how people actually choose a place to train between local search, social proof and a first trial.',
    whyItems: [
      {
        title: 'Club and coach journeys kept distinct',
        desc: 'Memberships, group schedules and trial flows sit beside PT brands, specialisms and online coaching — so neither buyer type gets lost in the other’s story.'
      },
      {
        title: 'Proof over empty motivation slogans',
        desc: 'Transformations, member energy and clear intake CTAs sit where scanners hesitate; we design for “will this work for me?” not for generic fitness wallpaper.'
      },
      {
        title: 'Software-aware, not software-blind',
        desc: 'Where Virtuagym, Sportbit, Eversports or similar allow it, booking and schedules stay aligned with tools your floor already uses — less double entry, fewer outdated PDF timetables.'
      },
      {
        title: 'One team for findability and community next',
        desc: 'Website first; local SEO and social media when city search or community proof needs a push — one team that already knows your packages, coaches and peak seasons.'
      }
    ],
    costsBadge: 'Investment',
    costsHead: 'What shapes the scope of a fitness website',
    costsIntro:
      'Scope scales with whether you run a multi-room gym or a PT practice, how deep the class timetable is, whether member software needs a live link, how many locations share branding, and how much transformation and coach content you are ready to publish. A boutique studio asks for a different build than a club with three floors and a full Virtuagym stack. Fixed deliverables after we review your offer and booking setup — not a rebuild every time the Thursday HIIT slot moves.',
    costsItems: [
      {
        title: 'Essential fitness site',
        desc: 'Homepage, membership or package overview, class or coaching services, team or coach profiles, trial or intake CTA, location and contact. Ideal for a focused club or PT brand that needs to look trustworthy and capture first sessions beyond Instagram DMs alone.'
      },
      {
        title: 'Schedule-ready fitness site',
        desc: 'Everything in Essential, plus richer timetable presentation, software connection where possible, transformation and review blocks, clearer package structure, mobile sign-up paths and analytics on trials versus coaching intakes.'
      },
      {
        title: 'Multi-location club or coach network',
        desc: 'Several sites or locations with shared membership rules, schedule patterns and brand guidelines. Scoped per organisation after we map software, locations and how trials are handled across venues.'
      }
    ],
    costsNote:
      'Scope is fixed after we understand gym versus PT focus, schedule depth and software needs. Request a fitness website quote with a clear deliverable list and delivery plan — that is where your figure is set, not on a public rate list here. Bring how trials are booked today and which member tools you already pay for so we size the right paths.',
    siblingsBadge: 'Also for gyms & personal trainers',
    siblingsHead: 'Pair your website with local growth and community',
    siblingsSub:
      'A strong site converts the visit; local SEO and social media bring people searching a gym or trainer in your city — and warm them with community proof. These services point them to a site that already shows packages, schedules and a clear trial path.',
    siblingsCta: 'View service',
    hubLink: 'Back to gym & personal trainer marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For projects outside fitness we offer broader website design. Gym and personal trainer builds follow the process on this page.',
    ctaHeading: 'Ready for a website that fills trials and coaching diaries?',
    ctaSub:
      'Tell us whether you run a club, a PT practice or both, which schedule software you use, and how sign-ups arrive today. We will propose a fixed scope for a site people actually use to start training.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Sportscholen & personal trainers',
    crumbCurrent: 'Website laten maken',
    badge: 'Fitnesswebsites',
    h1: 'Website laten maken voor sportscholen',
    heroSub:
      'Een sportschool- en personal-trainerwebsite die abonnementen en coachingplekken vult — met online proefles- of intakeboeking, heldere pakketten, leesbare lesroosters, coachprofielen, transformatiebewijs en mobiele paden voor mensen die zich vanaf de telefoon inschrijven. Met 1.500+ afgeronde projecten weten we hoe fitnessbedrijven online converteren.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Een zwakke site verliest het lid dat vandaag wilde starten',
    problemP1:
      'Iemand die na een zware week Instagram scrollt of “sportschool bij mij” zoekt, is vaak klaar om vanavond een proefles te boeken — niet volgende maand. Wanneer je site alleen een stockfoto van dumbbells toont, een begraven PDF-rooster en een “neem contact op”-formulier zonder volgende stap, opent die gemotiveerde bezoeker de concurrent waar de proeflesknop en het abonnementsoverzicht al operationeel ogen. Goede voornemens in januari en summer-body pieken vergroten het verlies: lege slots die gevuld hadden kunnen worden door mensen die al besloten hadden te bewegen.',
    problemP2:
      'Sportscholen en personal trainers hebben geen restaurantreserveringswidget of salonkleurenmenu nodig. Clubs hebben lidmaatschapshelderheid, groepsleszichtbaarheid en proeflesboeking die ledensoftware voedt. Trainers hebben een persoonlijk merk, specialisaties, transformatiebewijs en een schoon intakepad voor 1-op-1 of online coaching. Mis je die scheiding, dan betaal je met afgehaakte proeflessen en coaches die inwisselbaar ogen. Motivatie koelt snel af; een site die mensen voor elk antwoord privé laat appen, doodt het moment.',
    problemP3:
      'Social media draagt community-energie, maar op je website leven pakketten, roosters en softwaregekoppelde boeking onder jouw controle. Wanneer twee studio’s op Reels gelijk ogen, wint vaak degene met een duidelijk rooster, eerlijke pakketstructuur en recente ledenreviews het eerste bezoek. Mobiel telt dezelfde avond dat iemand klaar is met werken en een proeflesplek wil vóór de motivatie wegzakt — dat is fitnesspraktijk, geen generieke brochuretheorie.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een website voor sportscholen',
    featuresSub:
      'Elk blok dient een clublid of een coachingcliënt — proeflesboeking, pakketten, roosters, PT-profielen, transformaties, softwarekoppelingen — geen beauty-salontemplate met kettlebells erop geplakt.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een website-traject voor een sportschool of PT verloopt',
    processSub:
      'Van de eerste doorloop van je abonnementsaanbod en coachingintake tot meten welke pagina’s proeflessen, inschrijvingen en PT-gesprekken opleveren.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom sportscholen en trainers hun digitale balie aan ons toevertrouwen',
    whySub:
      'Fitnessbewuste oplevering die clubabonnementen en persoonlijke coaching als aparte kopersjourneys behandelt — en respecteert hoe mensen écht een trainingsplek kiezen tussen lokaal zoeken, social proof en een eerste proefles.',
    whyItems: [
      {
        title: 'Club- en coachjourneys apart gehouden',
        desc: 'Abonnementen, groepsroosters en proeflesflows staan naast PT-merken, specialisaties en online coaching — zodat geen van beide kopertypen in het verhaal van de ander verdwijnt.'
      },
      {
        title: 'Bewijs boven holle motivatieslogans',
        desc: 'Transformaties, ledenenergie en heldere intake-CTA’s staan waar scanners aarzelen; we ontwerpen voor “werkt dit voor mij?”, niet voor generiek fitnessbehang.'
      },
      {
        title: 'Softwarebewust, niet softwareblind',
        desc: 'Waar Virtuagym, Sportbit, Eversports of vergelijkbaar het toelaat, blijven boeking en roosters synchroon met tools die je vloer al gebruikt — minder dubbele invoer, minder verouderde PDF-roosters.'
      },
      {
        title: 'Eén team voor vindbaarheid en community daarna',
        desc: 'Website eerst; lokale SEO en social media wanneer stadszoeken of communitybewijs een duwtje nodig heeft — één team dat jullie pakketten, coaches en piekseizoenen al kent.'
      }
    ],
    costsBadge: 'Investering',
    costsHead: 'Wat bepaalt de scope van een fitnesswebsite',
    costsIntro:
      'De scope schaalt met of je een sportschool met meerdere zalen runt of een PT-praktijk, hoe diep het lesrooster is, of ledensoftware een live koppeling nodig heeft, hoeveel locaties branding delen, en hoeveel transformatie- en coachcontent je klaar hebt om te publiceren. Een boutiquestudio vraagt een andere build dan een club met drie verdiepingen en een volledige Virtuagym-stack. Vaste deliverables na review van je aanbod en boeksetup — geen rebuild elke keer dat het donderdag-HIIT-slot verschuift.',
    costsItems: [
      {
        title: 'Essentiële fitnesssite',
        desc: 'Homepage, abonnements- of pakketoverzicht, les- of coachingdiensten, team- of coachprofielen, proefles- of intake-CTA, locatie en contact. Ideaal voor een gerichte club of PT-merk dat betrouwbaar wil ogen en eerste sessies wil vangen naast Instagram-DM’s alleen.'
      },
      {
        title: 'Roosterklaare fitnesssite',
        desc: 'Alles uit Essential, plus rijkere roosterpresentatie, softwarekoppeling waar mogelijk, transformatie- en reviewblokken, helderdere pakketstructuur, mobiele inschrijfpaden en analytics op proeflessen versus coachingintakes.'
      },
      {
        title: 'Meerdere locaties of coachnetwerk',
        desc: 'Meerdere sites of locaties met gedeelde lidmaatschapsregels, roosterspatronen en brandrichtlijnen. Scope per organisatie nadat we software, vestigingen en hoe proeflessen over locaties lopen in kaart hebben.'
      }
    ],
    costsNote:
      'De scope zetten we vast na inzicht in sportschool versus PT-focus, roosterdiepte en softwarebehoefte. Vraag een fitnesswebsite-offerte aan met duidelijke deliverables en opleverplan — daar staat jouw bedrag, niet op een openbare tarievenlijst hier. Neem mee hoe proeflessen nu geboekt worden en welke ledentools je al gebruikt, zodat we de juiste paden dimensioneren.',
    siblingsBadge: 'Ook voor sportscholen',
    siblingsHead: 'Combineer je website met lokale groei en community',
    siblingsSub:
      'Een sterke site converteert het bezoek; lokale SEO en social media brengen mensen die een sportschool of trainer in jullie stad zoeken — en warmen hen op met communitybewijs. Deze diensten sturen hen naar een site die al pakketten, roosters en een duidelijk proeflespad toont.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar sportscholen- & personal-trainermarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten fitness bieden we breder webdesign. Sportschool- en personal-trainerbuilds volgen het proces op deze pagina.',
    ctaHeading: 'Klaar voor een website die proeflessen en coachingagenda’s vult?',
    ctaSub:
      'Vertel of je een club runt, een PT-praktijk of beide, welke roostersoftware je gebruikt, en hoe inschrijvingen nu binnenkomen. We stellen een vaste scope voor een site die mensen écht gebruiken om te starten met trainen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function SportscholenWebsiteLatenMaken() {
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
              <Dumbbell className="w-4 h-4" aria-hidden />
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
