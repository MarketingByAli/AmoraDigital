import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardList,
  Heart,
  Images,
  Network,
  PartyPopper,
  Search,
  Smartphone,
  Sparkles,
  Star,
  Zap
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  Images,
  Camera,
  Heart,
  Star,
  ClipboardList,
  Building2,
  Network,
  BookOpen,
  Zap,
  Smartphone
] as const

const FEATURES = [
  {
    en: {
      title: 'Real-event portfolio gallery at the core',
      description:
        'Layouts built for weddings and company days you actually planned — tablescapes, ceremonies and evening light — so taste is obvious before a couple opens Instagram or a host opens another planner.'
    },
    nl: {
      title: 'Portfoliogalerij van echte events als kern',
      description:
        'Layouts voor bruiloften en bedrijfsevents die je écht regisseerde — tafelschikkingen, ceremonies en avondlicht — zodat smaak duidelijk is vóór een stel Instagram opent of een host een tweede planner-tab opent.'
    }
  },
  {
    en: {
      title: 'The site itself feels like a portfolio piece',
      description:
        'Typography, spacing and image hierarchy mirror the calm you sell on the day — because couples and companies judge style from the first scroll, not a generic template with stock confetti.'
    },
    nl: {
      title: 'De site voelt zelf als portfolio-item',
      description:
        'Typografie, witruimte en beeldhiërarchie spiegelen de rust die je op de dag verkoopt — omdat stellen en bedrijven stijl vanaf de eerste scroll beoordelen, niet vanaf een generiek template met stockconfetti.'
    }
  },
  {
    en: {
      title: 'Real-life event stories, not isolated thumbs',
      description:
        'Short case pages that walk through brief, venue and how you held the day together — so buyers see coordination, not only pretty stills without a narrative.'
    },
    nl: {
      title: 'Echte eventverhalen, geen losse thumbnails',
      description:
        'Korte casepagina’s die brief, locatie en hoe je de dag bij elkaar hield vertellen — zodat kopers regie zien, niet alleen mooie stills zonder verhaal.'
    }
  },
  {
    en: {
      title: 'Reviews from couples and corporate hosts',
      description:
        'Proof from bridal clients and companies about calm, deadlines and vendor liaison — the trust layer that decides who gets the date when two portfolios look equally polished.'
    },
    nl: {
      title: 'Reviews van bruidsparen en bedrijven',
      description:
        'Bewijs van bridal-klanten en bedrijven over rust, deadlines en leveranciersafstemming — de vertrouwenslaag die bepaalt wie de datum krijgt wanneer twee portfolio’s even gepolijst ogen.'
    }
  },
  {
    en: {
      title: 'Inspiration and quote form with the brief',
      description:
        'Capture date, venue, guest count, budget band and style — so your first reply can scope a wedding weekend or a product launch, not a vague “tell us more” email thread.'
    },
    nl: {
      title: 'Inspiratie- en offerteformulier met het briefje',
      description:
        'Vang datum, locatie, gastenaantal, budgetband en stijl — zodat je eerste reactie een trouwweekend of productlancering kan scopten, geen vaag “vertel meer”-mailthread.'
    }
  },
  {
    en: {
      title: 'Wedding versus corporate paths',
      description:
        'Couples enter through a bridal journey; companies planning congresses or launches get a zakelijk path — so seasonal Instagram demand never lands in a board-level brief form.'
    },
    nl: {
      title: 'Bruiloft versus zakelijke paden',
      description:
        'Stellen komen via een bridal-journey binnen; bedrijven die congressen of lanceringen plannen krijgen een zakelijk pad — zodat seizoensgebonden Instagram-vraag nooit in een board-level brief-formulier landt.'
    }
  },
  {
    en: {
      title: 'Vendor and venue network on show',
      description:
        'Trusted photographers, caterers and venues as proof of calm coordination — without turning the site into a supplier directory that dilutes your planner brand.'
    },
    nl: {
      title: 'Leveranciers- en venue-netwerk in beeld',
      description:
        'Vertrouwde fotografen, cateraars en venues als bewijs van rustige regie — zonder de site in een leveranciersgids te veranderen die jouw planner-merk verdunt.'
    }
  },
  {
    en: {
      title: 'Inspiration blog for SEO and trust',
      description:
        'Guides on styles, seasons and planning timelines that earn search traffic and show expertise — while routing readers back into the portfolio and quote form.'
    },
    nl: {
      title: 'Inspiratieblog voor SEO en vertrouwen',
      description:
        'Gidsen over stijlen, seizoenen en planningstimelines die zoekverkeer verdienen en expertise tonen — terwijl lezers terug naar portfolio en offerteformulier worden geleid.'
    }
  },
  {
    en: {
      title: 'Image-rich pages that still load fast',
      description:
        'Compression, lazy load and gallery patterns so evening sofa browsers on mobile see atmosphere without waiting on a heavy album that never finishes.'
    },
    nl: {
      title: 'Beeldrijke pagina’s die toch snel laden',
      description:
        'Compressie, lazy load en galerijpatronen zodat avondbrowsers op de bank op mobiel sfeer zien zonder te wachten op een zwaar album dat nooit klaar is.'
    }
  },
  {
    en: {
      title: 'Mobile for evening inspiration',
      description:
        'Sticky quote CTAs, thumb-friendly forms and readable stories for people shortlisting planners after work — when most bridal and lifestyle research happens.'
    },
    nl: {
      title: 'Mobiel voor avondinspiratie',
      description:
        'Sticky offerte-CTA’s, duimvriendelijke forms en leesbare verhalen voor mensen die planners shortlisten na het werk — wanneer de meeste bridal- en lifestyle-research gebeurt.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Discovery on your calendar and style',
      description:
        'We map how wedding and corporate enquiries arrive today: Instagram, Pinterest, Google, referrals and vendor intros. We note portfolio depth, bridal versus zakelijk mix, how quotes are scoped with date and venue, and where inspiration dies between a pretty feed and a blank contact box.'
    },
    nl: {
      step: '01',
      title: 'Discovery op jouw agenda en stijl',
      description:
        'We brengen in kaart hoe trouw- en zakelijke aanvragen nu binnenkomen: Instagram, Pinterest, Google, verwijzingen en leveranciersintroducties. We noteren portfoliodepte, of je leunt op bridal of zakelijk, hoe offertes met datum en locatie worden gescoped, en waar inspiratie sterft tussen een mooie feed en een leeg contactvak.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Portfolio and dual-market architecture',
      description:
        'Information architecture puts real-event galleries and stories first, then splits wedding versus corporate journeys. A couple planning a September celebration should never land in a congress form built for procurement.'
    },
    nl: {
      step: '02',
      title: 'Portfolio- en dual-markarchitectuur',
      description:
        'Informatiearchitectuur zet galerijen van echte events en verhalen voorop, en splitst daarna trouw- versus zakelijke journeys. Een stel dat een septemberviering plant, mag niet in een congresaanvraagformulier voor inkoop belanden.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Design that sells calm and taste',
      description:
        'Visual design that treats the homepage as a portfolio piece: image rhythm, restrained type and CTAs that say “Request a wedding quote” or “Plan a company event” — so style is felt before the first call.'
    },
    nl: {
      step: '03',
      title: 'Design dat rust en smaak verkoopt',
      description:
        'Visueel ontwerp dat de homepage als portfolio-item behandelt: beeldritme, ingetogen typografie en CTA’s die “Vraag een trouw-offerte” of “Plan een bedrijfsevent” zeggen — zodat stijl gevoeld wordt vóór het eerste gesprek.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, train, hand over',
      description:
        'We build the site, wire inspiration/quote forms, place vendor and review blocks, and train your team to add new events without a developer for every Saturday wedding. Galleries stay editable by people who lived the day.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, trainen, overdragen',
      description:
        'We bouwen de site, zetten inspiratie-/offerteforms klaar, plaatsen leveranciers- en reviewblokken, en trainen je team om nieuwe events toe te voegen zonder developer voor elke zaterdagbruiloft. Galerijen blijven bewerkbaar door mensen die de dag meemaakten.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch and measure brief quality',
      description:
        'Launch tracks wedding versus corporate quote starts, which portfolio stories convert and which blog posts feed the form. You see whether evening mobile traffic becomes dated briefs — not anonymous hits that never ask for a planning talk.'
    },
    nl: {
      step: '05',
      title: 'Live en briefkwaliteit meten',
      description:
        'Livegang volgt trouw- versus zakelijke offertestarts, welke portfolioverhalen converteren en welke blogposts het formulier voeden. Je ziet of avondelijk mobiel verkeer gedateerde briefs wordt — geen anonieme hits die nooit om een planningsgesprek vragen.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'social-media'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Wedding & event planners',
    crumbCurrent: 'Website design',
    badge: 'Event planner websites',
    h1: 'Website design for wedding & event planners',
    heroSub:
      'A planner website that gets you booked for the dates that matter — with a real-event portfolio at the core, design that feels like a portfolio piece, wedding and corporate paths, brief forms for date, venue, guests and style, vendor-network proof and image-rich pages that still load on a sofa phone. With 1,500+ completed projects, we know how wedding and event businesses convert online before the calendar fills elsewhere.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Couples and companies decide from how your work looks and feels online',
    problemP1:
      'A couple comparing planners for their wedding day — or a host shortlisting someone for a product launch — judges taste, calm and trust from portfolio, stories and how the site feels on a phone. A dull, slow or stock-heavy site loses the booking before the first conversation, even when your real events were stronger than a competitor who simply looks sharper online.',
    problemP2:
      'Event planners do not need a salon booking grid for Tuesday colour slots or a restaurant menu PDF. They need galleries of real weddings and company days, atmosphere that matches the day they sell, reviews from bridal pairs and businesses, and forms that ask date, location, guest count, budget and style. Miss that, and Instagram traffic dies on a contact page that asks nothing useful.',
    problemP3:
      'Local SEO and social can bring discovery, but the website is where inspiration becomes a dated brief. When two planners look equal on a feed, the one whose site loads fast, separates wedding from corporate, and shows vendor calm often wins the enquiry — and the date that follows. Without that layer every pretty Reel is a promise your competitor hardens on their homepage.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in a wedding & event planner website',
    featuresSub:
      'Every deliverable serves a couple or corporate host handing over a high-stakes day — portfolio, atmosphere, stories, reviews, brief forms, vendor proof, inspiration content and mobile speed — not a salon template with balloons pasted on.',
    processBadge: 'How we work',
    processHead: 'How an event-planner website project runs',
    processSub:
      'From the first walkthrough of your portfolio and dual markets to measuring which stories and forms drive dated, style-matched briefs.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why wedding & event planners trust us with their digital portfolio',
    whySub:
      'Event-aware delivery that treats one-off days and vendor networks as the product — not weekly appointment slots or a restaurant cover count.',
    whyItems: [
      {
        title: 'Built around the shortlist moment',
        desc: 'Pages answer “does this feel like our day?” and “can they hold a room of stakeholders?” before a couple or host opens a second planner.'
      },
      {
        title: 'Bridal and corporate kept distinct',
        desc: 'Seasonal wedding inspiration gets its own journey; congress and launch buyers get longer-cycle language — neither borrows the other’s proof.'
      },
      {
        title: 'Forms that capture a real brief',
        desc: 'Date, venue, guests, budget and style sit next to the CTA — so your first reply scopes a weekend or a launch, not a blank “we’ll call you”.'
      },
      {
        title: 'One team for findability next',
        desc: 'Website first; local SEO and social when city or Instagram discovery needs a push — one team that already knows your portfolio rhythm.'
      }
    ],
    costsBadge: 'Investment',
    costsHead: 'What shapes the scope of an event-planner website',
    costsIntro:
      'Scope scales with portfolio size, whether you sell both weddings and corporate events, how deep the inspiration/quote form needs to be, and how many real-event stories you want live at launch. A bridal specialist with a tight gallery asks for a different build than a planner covering launches and multi-day celebrations. Fixed deliverables after we review your portfolio and enquiry flow — not a rebuild every time a new Saturday is added.',
    costsItems: [
      {
        title: 'Essential planner site',
        desc: 'Homepage as portfolio piece, gallery overview, wedding and/or corporate entrance, inspiration/quote CTA, reviews basics, vendor strip and contact. Ideal for a focused planner who needs to look like their work and capture briefs beyond DMs alone.'
      },
      {
        title: 'Portfolio-deep planner site',
        desc: 'Everything in Essential, plus richer event stories, dual-market paths, fuller brief fields, inspiration blog starter, image performance, mobile evening paths and analytics on wedding versus corporate quote starts.'
      },
      {
        title: 'Multi-style or multi-region planner',
        desc: 'Several style lanes or catchments with shared gallery rules and form logic. Scoped per studio after we map how events, vendors and regions are managed today.'
      }
    ],
    costsNote:
      'Scope is fixed after we understand portfolio volume, wedding versus corporate mix and form needs. Request an event-planner website quote with clear deliverables and a delivery plan — that is where your figure is set, not on a public rate list here. Bring how couples and hosts enquire today and which events you want featured first.',
    siblingsBadge: 'Also for wedding & event planners',
    siblingsHead: 'Pair your website with local findability and social discovery',
    siblingsSub:
      'A strong site converts the visit; local SEO and social media bring couples and hosts already searching or scrolling for a planner. These services point them to a portfolio that already proves taste and a clear brief form.',
    siblingsCta: 'View service',
    hubLink: 'Back to wedding & event planner marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For projects outside event planning we offer broader website design. Planner builds follow the process on this page.',
    ctaHeading: 'Ready for a website that books the dates that match your style?',
    ctaSub:
      'Share whether you lean weddings, corporate or both, how large your portfolio is, and how briefs arrive today. We propose a fixed scope for a site couples and hosts actually use before they lock a date with someone else.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Trouw- & eventplanners',
    crumbCurrent: 'Website laten maken',
    badge: 'Websites voor eventplanners',
    h1: 'Website laten maken voor trouwplanners',
    heroSub:
      'Een plannerwebsite die je boekt op de data die ertoe doen — met een portfoliogalerij van echte events als kern, design dat zelf als portfolio-item voelt, trouw- en zakelijke paden, inspiratie-/offerteforms die datum, locatie, gastenaantal en stijl vangen, leveranciersnetwerk-bewijs en beeldrijke pagina’s die toch laden op een telefoon op de bank. Met 1.500+ afgeronde projecten weten we hoe trouw- en eventbedrijven online converteren vóór de agenda voor iemand anders volloopt.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Stellen en bedrijven beslissen op hoe jouw werk online oogt en voelt',
    problemP1:
      'Een stel dat planners vergelijkt voor hun trouwdag — of een host die iemand shortlist voor een productlancering — beoordeelt smaak, rust en vertrouwen volledig via portfolio, verhalen en hoe de site op de telefoon voelt. Een saaie, trage of stockzware site verliest de boeking vóór het eerste gesprek, ook wanneer jouw echte events sterker waren dan die van de concurrent die online simpelweg scherper oogt.',
    problemP2:
      'Eventplanners hebben geen salonboekingsrooster voor dinsdag-kleurslots of een restaurantmenu-PDF nodig. Ze hebben galerijen van echte bruiloften en bedrijfsevents, sfeer die past bij de dag die ze verkopen, reviews van bruidsparen en bedrijven, en forms die datum, locatie, gastenaantal, budget en stijl vragen. Mis je dat, dan sterft Instagram-verkeer op een contactpagina die niets bruikbaars vraagt.',
    problemP3:
      'Lokale SEO en social kunnen ontdekking brengen, maar op de website wordt inspiratie een gedateerd briefje. Wanneer twee planners op een feed gelijk ogen, wint vaak degene wiens site snel laadt, bruiloft van zakelijk scheidt en leveranciersrust toont de aanvraag — en de datum die volgt. Zonder die laag blijft elke mooie Reel een belofte die je concurrent op de homepage hard maakt.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een website voor trouw- & eventplanners',
    featuresSub:
      'Elke deliverable dient een stel of een zakelijke host die een high-stakes dag uit handen geeft — portfolio, sfeer, verhalen, reviews, brief-forms, leveranciersbewijs, inspiratiecontent en mobiele snelheid — geen salontemplate met ballonnen erop geplakt.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een website-traject voor een eventplanner verloopt',
    processSub:
      'Van de eerste doorloop van je portfolio en duale markten tot meten welke verhalen en forms gedateerde, stijlpassende briefs opleveren.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom trouw- & eventplanners hun digitale portfolio aan ons toevertrouwen',
    whySub:
      'Eventbewuste oplevering die unieke dagen en leveranciersnetwerken als product behandelt — geen wekelijkse afspraakslots of een restaurant-covercount.',
    whyItems: [
      {
        title: 'Gebouwd rond het shortlistmoment',
        desc: 'Pagina’s beantwoorden “voelt dit als onze dag?” en “houden zij een zaal stakeholders rustig?” vóór een stel of host een tweede planner opent.'
      },
      {
        title: 'Bridal en zakelijk apart gehouden',
        desc: 'Seizoensgebonden trouwinspiratie krijgt een eigen journey; congres- en lanceringkopers krijgen langere-cyclustaal — geen van beide leent het bewijs van de ander.'
      },
      {
        title: 'Forms die een echt briefje vangen',
        desc: 'Datum, locatie, gasten, budget en stijl staan naast de CTA — zodat je eerste reactie een weekend of lancering scoped, geen leeg “we bellen je”.'
      },
      {
        title: 'Eén team voor vindbaarheid daarna',
        desc: 'Website eerst; lokale SEO en social wanneer stads- of Instagram-ontdekking een duwtje nodig heeft — één team dat jouw portfolioritme en markten al kent.'
      }
    ],
    costsBadge: 'Investering',
    costsHead: 'Wat bepaalt de scope van een eventplanner-website',
    costsIntro:
      'De scope schaalt met portfolio-omvang, of je zowel bruiloften als zakelijke events verkoopt, hoe diep het inspiratie-/offerteformulier moet zijn, en hoeveel echte eventverhalen je bij livegang wilt. Een bridal-specialist met een strakke galerij vraagt een andere build dan een planner die lanceringen, congressen en meerdaagse vieringen dekt. Vaste deliverables na review van je portfolio en aanvraagflow — geen rebuild elke keer dat er een nieuwe zaterdag bijkomt.',
    costsItems: [
      {
        title: 'Essentiële plannersite',
        desc: 'Homepage als portfolio-item, galerijoverzicht, trouw- en/of zakelijke ingang, inspiratie-/offerte-CTA, basisreviews, leveranciersstrip en contact. Ideaal voor een gerichte planner die wil ogen als het werk en briefs wil vangen naast DM’s alleen.'
      },
      {
        title: 'Portfolio-diepe plannersite',
        desc: 'Alles uit Essential, plus rijkere eventverhalen, dual-markpaden, vollere briefvelden, inspiratieblog-start, beeldperformance, mobiele avondpaden en analytics op trouw- versus zakelijke offertestarts.'
      },
      {
        title: 'Multi-stijl of multi-regio planner',
        desc: 'Meerdere stijllanes of catchments met gedeelde galerijregels en formlogica. Scope per studio nadat we in kaart hebben hoe events, leveranciers en regio’s nu worden beheerd.'
      }
    ],
    costsNote:
      'De scope zetten we vast na inzicht in portfolio-omvang, trouw versus zakelijk en formbehoefte. Vraag een eventplanner-website-offerte aan met duidelijke deliverables en opleverplan — daar staat jouw bedrag, niet op een openbare tarievenlijst hier. Neem mee hoe stellen en hosts nu aanvragen en welke events je eerst wilt tonen, zodat we de juiste galerijen en paden dimensioneren.',
    siblingsBadge: 'Ook voor trouw- & eventplanners',
    siblingsHead: 'Combineer je website met lokale vindbaarheid en social discovery',
    siblingsSub:
      'Een sterke site converteert het bezoek; lokale SEO en social media brengen stellen en hosts die al zoeken of scrollen naar een planner. Deze diensten sturen hen naar een portfolio dat al smaak bewijst en een helder brief-formulier toont.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar trouw- & eventplannermarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten eventplanning bieden we breder webdesign. Plannerbuilds volgen het proces op deze pagina.',
    ctaHeading: 'Klaar voor een website die de data boekt die bij jouw stijl passen?',
    ctaSub:
      'Deel of je leunt op bruiloften, zakelijk of beide, hoe groot je portfolio is, en hoe briefs nu binnenkomen. We stellen een vaste scope voor een site die stellen en hosts écht gebruiken vóór ze een datum met iemand anders vastzetten.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function EventplannersWebsiteLatenMaken() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-eventplanners'][locale]
  const firmSpokes = BRANCH_SPOKES.eventplanners
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
              <PartyPopper className="w-4 h-4" aria-hidden />
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
                industrySlug="eventplanners"
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
