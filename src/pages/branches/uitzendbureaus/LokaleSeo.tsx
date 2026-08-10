import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  MapPin,
  MapPinned,
  Search,
  Sparkles,
  Star,
  Users
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  Search,
  Briefcase,
  MapPinned,
  Building2,
  Star,
  MapPin,
  Users,
  Sparkles
] as const

const FEATURES = [
  {
    en: {
      title: 'Keywords for candidates and for employers',
      description:
        'We target “staffing agency [town]”, “vacancies [sector] [town]”, “jobs near me [town]” and “hire staff [sector] [town]” — two intent families so job seekers and opdrachtgevers each discover you without sharing one vague “recruitment” keyword pile.'
    },
    nl: {
      title: 'Zoekwoorden voor kandidaten én voor opdrachtgevers',
      description:
        'We mikken op “uitzendbureau [stad]”, “vacatures [sector] [stad]”, “werk zoeken [stad]” en “personeel inhuren [sector] [stad]” — twee intentiefamilies zodat werkzoekenden en opdrachtgevers je elk ontdekken zonder één vage “werving”-zoekwoordhoop te delen.'
    }
  },
  {
    en: {
      title: 'JobPosting SEO beside the local pack',
      description:
        'Vacancy markup and role landing pages tuned so openings can surface in Google for Jobs while your bureau also competes in the map pack — a dual discovery layer unique to staffing, not a clinic appointment race.'
    },
    nl: {
      title: 'JobPosting-SEO naast de local pack',
      description:
        'Vacaturemarkup en rollandingspagina’s afgestemd zodat openings in Google for Jobs kunnen verschijnen terwijl je bureau ook in de kaartpack concurreert — een duale ontdekkingslaag uniek voor uitzendwerk, geen kliniekafspraakrace.'
    }
  },
  {
    en: {
      title: 'GBP per branch as a local entity',
      description:
        'Google Business Profile per vestiging — hours, photos, categories and actions toward apply or hire — so Maps knows which desk owns which town instead of one muddled national pin.'
    },
    nl: {
      title: 'GBP per vestiging als lokale entiteit',
      description:
        'Google Bedrijfsprofiel per vestiging — tijden, foto’s, categorieën en acties naar solliciteren of inhuren — zodat Maps weet welk desk welke plaats bezit in plaats van één vertroebelde landelijke pin.'
    }
  },
  {
    en: {
      title: 'Sector and town landing pages',
      description:
        'Pages for logistics in Eindhoven, care in Utrecht or techniek in Twente — matching how candidates and employers search by sector plus place, not a single homepage that tries to rank for every market.'
    },
    nl: {
      title: 'Sector- en stadslandingspagina’s',
      description:
        'Pagina’s voor logistiek in Eindhoven, zorg in Utrecht of techniek in Twente — zoals kandidaten en opdrachtgevers zoeken op sector plus plaats, geen enkele homepage die voor elke markt probeert te ranken.'
    }
  },
  {
    en: {
      title: 'Reviews from both sides of the desk',
      description:
        'Ethical ask habits after placements and after client engagements — candidate and employer voices next to pack results tip shortlists when national boards show stars but zero local trust.'
    },
    nl: {
      title: 'Reviews van beide kanten van het bureau',
      description:
        'Ethische vraaggewoontes na plaatsingen en na klanttrajecten — stemmen van kandidaten en opdrachtgevers naast packresultaten tippen shortlists wanneer nationale boards sterren tonen maar nul lokaal vertrouwen.'
    }
  },
  {
    en: {
      title: 'Multi-location structure that stays clean',
      description:
        'When you run several branches, we separate location signals so each catchment competes for “staffing agency [town]” without cannibalising sibling offices or confusing Maps about which desk answers.'
    },
    nl: {
      title: 'Multi-locatiestructuur die schoon blijft',
      description:
        'Bij meerdere vestigingen scheiden we locatiesignalen zodat elk catchment concurreert op “uitzendbureau [stad]” zonder zusterkantoren te kannibaliseren of Maps te verwarren over welke balie antwoordt.'
    }
  },
  {
    en: {
      title: 'Citations that match name, NAP and sectors',
      description:
        'Directory cleanup so bureau name, address, phone and sector labels stay consistent — mixed NAP sends candidates to the wrong desk and employers to a closed branch.'
    },
    nl: {
      title: 'Citations die naam, NAP en sectoren matchen',
      description:
        'Directory-opschoning zodat bureaunaam, adres, telefoon en sectorlabels consistent blijven — gemengde NAP stuurt kandidaten naar de verkeerde balie en opdrachtgevers naar een gesloten vestiging.'
    }
  },
  {
    en: {
      title: 'Local share versus Indeed and national chains',
      description:
        'Big job boards rent candidate attention. Local SEO aims at pack and organic bureau discovery for your towns — so applications and hire briefs start on Maps and sector pages, not only on a per-click listing.'
    },
    nl: {
      title: 'Lokaal aandeel versus Indeed en landelijke ketens',
      description:
        'Grote vacatureboards huren kandidatenaandacht. Lokale SEO mikt op pack- en organische bureauontdekking voor jouw plaatsen — zodat sollicitaties en inhuurbriefs op Maps en sectorpagina’s starten, niet alleen op een per-klik listing.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Two-sided visibility audit',
      description:
        'We check how you appear for candidate vacancy queries, employer hire queries, the local pack against nearby bureaus and national boards, plus GBP, JobPosting readiness, reviews and citations — separate from dual-door UX on the website spoke.'
    },
    nl: {
      step: '01',
      title: 'Tweezijdige vindbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op kandidaat-vacaturequeries, opdrachtgever-inhuurqueries, de local pack tegen nabije bureaus en nationale boards, plus GBP, JobPosting-gereedheid, reviews en citations — los van duale-deur-UX op de website-spoke.'
    }
  },
  {
    en: {
      step: '02',
      title: 'GBP and dual-intent keyword set',
      description:
        'We configure profiles per vestiging and lock candidate plus employer + town and sector keyword sets for markets you actually cover — including migrant-facing phrases where relevant.'
    },
    nl: {
      step: '02',
      title: 'GBP en dual-intent zoekwoordenset',
      description:
        'We richten profielen per vestiging in en zetten kandidaat- plus opdrachtgever- + stads- en sectorzoekwoordensets vast voor markten die je écht dekt — inclusief migrantenfrasen waar relevant.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Sector, town and JobPosting page plan',
      description:
        'We plan sector and town pages plus vacancy SEO assets — distinct from filter UX and ATS wiring on the website spoke, but aligned so pack taps and Jobs impressions land where apply or hire can start.'
    },
    nl: {
      step: '03',
      title: 'Sector-, stads- en JobPosting-paginaplan',
      description:
        'We plannen sector- en stadspagina’s plus vacature-SEO-assets — los van filter-UX en ATS-koppeling op de website-spoke, maar afgestemd zodat pack-tiks en Jobs-impressies landen waar solliciteren of inhuren kan starten.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Dual reviews and board pressure tracking',
      description:
        'We launch review habits for candidates and clients, strengthen citations, and track how organic bureau presence reduces dependence on Indeed-style boards across your busiest towns.'
    },
    nl: {
      step: '04',
      title: 'Duale reviews en boarddruk volgen',
      description:
        'We starten reviewgewoontes voor kandidaten en opdrachtgevers, versterken citations, en volgen hoe organische bureauaanwezigheid afhankelijkheid van Indeed-achtige boards in jouw drukste plaatsen vermindert.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure applications and employer briefs',
      description:
        'Monthly reporting on map views, profile actions, vacancy landings, Jobs visibility signals and shifts on bureau, vacancy and hire + town keywords — read as progress toward both desks, without promising a permanent pack place.'
    },
    nl: {
      step: '05',
      title: 'Meet sollicitaties en opdrachtgeverbriefs',
      description:
        'Maandelijkse rapportage over kaartweergaven, profielacties, vacaturelandings, Jobs-zichtbaarheidssignalen en verschuivingen op bureau-, vacature- en inhuur- + stadszoekwoorden — gelezen als voortgang voor beide desks, zonder een vaste packplek te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Staffing agencies',
    crumbCurrent: 'Local SEO',
    badge: 'Staffing local SEO',
    h1: 'Local SEO for staffing agencies',
    heroSub:
      'Get found when candidates search “staffing agency [town]”, “vacancies [sector] [town]” or “jobs near me [town]”, and when employers search “staffing for employers [region]” or “hire staff [sector] [town]” — with Google Business Profile per branch, sector and town landings, JobPosting vacancy SEO for Google for Jobs, dual review growth, multi-location clarity, citations, and organic share versus Indeed and national chains. With 1,500+ completed projects, we know how uitzendbureaus earn local and job-search trust before boards and rival desks capture both sides of the market.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in local and job search means losing both desks',
    problemP1:
      'Candidates and employers both search locally, and staffing agencies fight big national job boards for visibility. If you are invisible in the local pack and weak in vacancy discovery, you lose candidate flow to Indeed-style platforms and client leads to a nearby bureau that simply looks clearer on Maps.',
    problemP2:
      'Staffing local SEO is not a healthcare “new patients” pack race and not a trades call-out map game. You run two intent streams at once — job seekers typing vacancies plus town, and companies typing hire staff plus sector. Miss GBP per vestiging, JobPosting coverage, dual reviews or sector-town pages, and both desks starve while national boards keep renting the introductions.',
    problemP3:
      'A two-sided website converts the visit; local SEO decides who appears when someone types “staffing agency [town]” or “vacancies [sector] [town]” before they open a board. Without organic pack and Jobs presence you keep paying for clicks while the bureau with sharper location pages and fresher dual reviews owns the free discovery layer that starts applications and hire briefs.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for staffing agencies',
    featuresSub:
      'Every deliverable serves a two-sided local market — GBP per branch, sector and town pages, JobPosting vacancy SEO, candidate and employer keywords, dual reviews, multi-location signals and citations versus boards — not a website redesign and not a clinic local-SEO checklist with “staffing” pasted in.',
    processBadge: 'How we work',
    processHead: 'How a staffing local SEO engagement runs',
    processSub:
      'From auditing how you appear for vacancy and hire queries in the pack and Jobs layer, to measuring actions that become applications and employer briefs — including competition with national boards.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why staffing agencies trust us with local and job-search findability',
    whySub:
      'Marketplace-aware local SEO that treats candidate vacancy intent and employer hire intent as equal products — not a single-audience healthcare or trades pack playbook.',
    whyItems: [
      {
        title: 'Pack work tuned for both desks',
        desc: 'We optimise for bureau, vacancy and hire + town phrases — the queries that start applications after a shift ends and briefs when a warehouse needs flex tomorrow.'
      },
      {
        title: 'Jobs visibility beside map trust',
        desc: 'JobPosting-ready vacancy SEO sits next to GBP work — so openings can surface in Google for Jobs while your vestiging still competes in the local pack.'
      },
      {
        title: 'Reviews that tip candidates and clients',
        desc: 'Voices from both sides sit next to pack results — often the factor that wins when a national board shows volume but zero local bureau trust.'
      },
      {
        title: 'One partner from Maps to apply and hire',
        desc: 'Local SEO for findability first; two-sided website and Google Ads when conversion or paid vacancy intent needs a push — one team that already knows your towns and sectors.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for staffing agencies',
    costsIntro:
      'Staffing local SEO is ongoing GBP work per vestiging, sector and town pages, dual candidate and employer keywords, JobPosting vacancy SEO, citations, multi-location signals and review growth on both sides. Profile action lifts often appear within weeks; holding relevance for “staffing agency [town]” or “vacancies [sector] [town]” against boards and rival desks usually needs months of compounding. We plan for winning both candidate and employer search — without ranking guarantees.',
    costsItems: [
      {
        title: 'Foundation (one branch catchment)',
        desc: 'GBP overhaul, citation cleanup, dual review process, and a bureau / vacancy / hire + town keyword set with first sector pages. Ideal when Maps underplays your desk or vacancies only live on third-party boards.'
      },
      {
        title: 'Growth (competitive towns and Jobs layer)',
        desc: 'Ongoing monthly optimisation: sector-town page support, JobPosting hygiene, review replies, competitor monitoring versus boards, reporting on applications and employer briefs across your busiest markets.'
      },
      {
        title: 'Multi-branch or multi-sector desks',
        desc: 'When you run several vestigingen or deep sector specialisations, we structure locations and pages so each catchment competes cleanly without confusing Maps about which footprint owns “staffing agency [town]”.'
      }
    ],
    costsNote:
      'Scope depends on how many towns, sectors and branches you cover and how strong board competition is. Request a staffing local-SEO quote — we outline GBP setup, dual-intent keywords, JobPosting support and review cadence with honest timelines, without ranking guarantees. Bring your towns and busiest sectors.',
    siblingsBadge: 'Also for staffing agencies',
    siblingsHead: 'Pair local SEO with a clear two-sided site and Google Ads',
    siblingsSub:
      'Maps, sector pages and Jobs visibility put you on the shortlist; the website converts that glance into an application or hire brief, and Google Ads can capture high-intent searches later. These services complete the silo.',
    siblingsCta: 'View service',
    hubLink: 'Back to staffing agency marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside staffing we offer broader local SEO. Bureau engagements follow the process on this page.',
    ctaHeading: 'Ready to win the next local vacancy search and the next employer brief?',
    ctaSub:
      'Share your towns, sectors, branches and how candidates and clients find you today. We scope GBP, JobPosting support and dual reviews with honest timelines — without promising a fixed local-pack place.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Uitzendbureaus',
    crumbCurrent: 'Lokale SEO',
    badge: 'Lokale SEO voor uitzendbureaus',
    h1: 'Lokale SEO voor uitzendbureaus',
    heroSub:
      'Word gevonden wanneer kandidaten “uitzendbureau [stad]”, “vacatures [sector] [stad]” of “werk zoeken [stad]” zoeken, en wanneer bedrijven “uitzendbureau voor werkgevers [regio]” of “personeel inhuren [sector] [stad]” zoeken — met Google Bedrijfsprofiel per vestiging, sector- en stadslandings, JobPosting-vacature-SEO voor Google for Jobs, duale reviewgroei, multi-locatiehelderheid, citations, en organisch aandeel versus Indeed en landelijke ketens. Met 1.500+ afgeronde projecten weten we hoe uitzendbureaus lokaal én vacaturezoekvertrouwen verdienen vóór boards en rivale desks beide kanten van de markt pakken — inclusief wanneer arbeidsmigranten in hun eigen zoektaal binnenkomen.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in lokaal en vacaturezoeken betekent beide desks missen',
    problemP1:
      'Kandidaten en opdrachtgevers zoeken beide lokaal, en uitzendbureaus vechten met grote nationale vacatureboards om zichtbaarheid. Ben je onzichtbaar in de local pack en zwak in vacatureontdekking, dan verlies je kandidatenstroom aan Indeed-achtige platforms en klantleads aan een nabij bureau dat op Maps simpelweg helderder oogt.',
    problemP2:
      'Lokale SEO voor uitzendwerk is geen zorg-“nieuwe patiënten”-packrace en geen ambacht-spoed-kaartspel. Jij draait twee intentstromen tegelijk — werkzoekenden die vacatures plus plaats typen, en bedrijven die personeel inhuren plus sector typen. Mis je GBP per vestiging, JobPosting-dekking, duale reviews of sector-stadspagina’s, dan verhongeren beide desks terwijl nationale boards de introducties blijven huren.',
    problemP3:
      'Een tweezijdige website converteert het bezoek; lokale SEO beslist wie verschijnt wanneer iemand “uitzendbureau [stad]” of “vacatures [sector] [stad]” typt vóór een board opent. Zonder organische pack- en Jobs-aanwezigheid blijf je klikken betalen terwijl het bureau met scherpere locatiepagina’s en frissere duale reviews de gratis ontdekkingslaag bezit die sollicitaties en inhuurbriefs start — inclusief wanneer arbeidsmigranten in hun eigen zoektaal binnenkomen.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor uitzendbureaus',
    featuresSub:
      'Elke deliverable dient een tweezijdige lokale markt — GBP per vestiging, sector- en stadspagina’s, JobPosting-vacature-SEO, kandidaat- en opdrachtgeverzoekwoorden, duale reviews, multi-locatiesignalen en citations versus boards — geen websiteredesign en geen kliniek-lokale-SEO-checklist met “uitzendbureau” erin geplakt. We bouwen vindbaarheid voor solliciteren én inhuren, niet voor een enkelvoudige dienstverlener.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor uitzendbureaus verloopt',
    processSub:
      'Van een audit van hoe je verschijnt op vacature- en inhuurqueries in de pack- en Jobs-laag, tot meten van acties die sollicitaties en opdrachtgeverbriefs worden — inclusief concurrentie met nationale boards en hoe duale reviews naast sector-stadspagina’s blijven werken.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom uitzendbureaus hun lokale en vacaturezoekvindbaarheid aan ons toevertrouwen',
    whySub:
      'Marktplaatsbewuste lokale SEO die kandidaat-vacatureintentie en opdrachtgever-inhuurintentie als gelijkwaardige producten behandelt — geen enkelvoudige zorg- of ambacht-packplaybook.',
    whyItems: [
      {
        title: 'Packwerk afgestemd op beide desks',
        desc: 'We optimaliseren voor bureau-, vacature- en inhuur- + stadsfrasen — de queries die sollicitaties starten na een dienst en briefs wanneer een magazijn morgen flex nodig heeft.'
      },
      {
        title: 'Jobs-zichtbaarheid naast kaartvertrouwen',
        desc: 'JobPosting-klare vacature-SEO staat naast GBP-werk — zodat openings in Google for Jobs kunnen verschijnen terwijl jouw vestiging nog in de local pack concurreert.'
      },
      {
        title: 'Reviews die kandidaten én klanten tippen',
        desc: 'Stemmen van beide kanten staan naast packresultaten — vaak de factor die wint wanneer een nationaal board volume toont maar nul lokaal bureauvertrouwen.'
      },
      {
        title: 'Eén partner van Maps tot solliciteren en inhuren',
        desc: 'Eerst lokale SEO voor vindbaarheid; tweezijdige website en Google Ads wanneer conversie of betaalde vacatureintentie een duwtje nodig heeft — één team dat jouw plaatsen en sectoren al kent.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor uitzendbureaus',
    costsIntro:
      'Lokale SEO voor uitzendbureaus is doorlopend GBP-werk per vestiging, sector- en stadspagina’s, duale kandidaat- en opdrachtgeverzoekwoorden, JobPosting-vacature-SEO, citations, multi-locatiesignalen en reviewgroei aan beide kanten. Profielacties stijgen vaak binnen enkele weken; relevantie vasthouden op “uitzendbureau [stad]” of “vacatures [sector] [stad]” tegen boards en rivale desks vraagt meestal maanden van compounding. We plannen voor winst op kandidaat- én opdrachtgeverzoeken — zonder rankinggaranties.',
    costsItems: [
      {
        title: 'Foundation (één vestigingscatchment)',
        desc: 'GBP-overhaul, citation-opschoning, duaal reviewproces, en een bureau-/vacature-/inhuur- + stadszoekwoordenset met eerste sectorpagina’s. Ideaal wanneer Maps je desk onderschat of vacatures alleen op externe boards leven.'
      },
      {
        title: 'Growth (concurrerende plaatsen en Jobs-laag)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor sector-stadspagina’s, JobPosting-hygiëne, reviewantwoorden, concurrentiemonitoring versus boards, rapportage op sollicitaties en opdrachtgeverbriefs in jouw drukste markten.'
      },
      {
        title: 'Multi-vestiging of multi-sector desks',
        desc: 'Bij meerdere vestigingen of diepe sectorspecialisaties structureren we locaties en pagina’s zodat elk catchment schoon concurreert zonder Maps te verwarren over wie “uitzendbureau [stad]” bezit.'
      }
    ],
    costsNote:
      'Scope hangt af van hoeveel plaatsen, sectoren en vestigingen je dekt en hoe sterk boardconcurrentie is. Vraag een lokale-SEO-offerte voor uitzendbureaus aan — we schetsen GBP-opzet, dual-intent zoekwoorden, JobPosting-steun en reviewritme met eerlijke planning, zonder rankinggaranties. Neem je plaatsen, drukste sectoren en of je meerdere vestigingen als aparte lokale entiteiten wilt meenemen.',
    siblingsBadge: 'Ook voor uitzendbureaus',
    siblingsHead: 'Combineer lokale SEO met een heldere tweezijdige site en Google Ads',
    siblingsSub:
      'Maps, sectorpagina’s en Jobs-zichtbaarheid zetten je op de shortlist; de website maakt van die blik een sollicitatie of inhuurbrief, en Google Ads kan later high-intent zoeken vangen. Deze diensten maken de silo compleet voor beide desks.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar uitzendmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten uitzendwerk bieden we bredere lokale SEO. Bureautrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om de volgende lokale vacaturezoek én de volgende opdrachtgeverbrief te winnen?',
    ctaSub:
      'Deel je plaatsen, sectoren, vestigingen en hoe kandidaten en klanten je vandaag vinden. We scopen GBP, JobPosting-steun en duale reviews met eerlijke doorlooptijden — zonder een vaste local-packplek te beloven.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function UitzendbureausLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-uitzendbureaus'][locale]
  const firmSpokes = BRANCH_SPOKES.uitzendbureaus
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
              <Users className="w-4 h-4" aria-hidden />
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
                industrySlug="uitzendbureaus"
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
