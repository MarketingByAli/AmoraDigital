import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileText,
  Languages,
  Scale,
  Search,
  Shield,
  Sparkles,
  Users
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  Scale,
  Users,
  Award,
  Shield,
  BookOpen,
  FileText,
  ClipboardList,
  Languages
] as const

const FEATURES = [
  {
    en: {
      title: 'Practice-area pages that specialise you',
      description:
        'Separate pages for employment law, family law and divorce, corporate law, personal injury, real estate and notarial conveyancing — each with who you help, typical matters and the first step. Searchers comparing “employment lawyer” and “divorce lawyer” land on substance, not a single vague “areas of practice” list.'
    },
    nl: {
      title: 'Rechtsgebiedpagina’s die specialisatie tonen',
      description:
        'Aparte pagina’s voor arbeidsrecht, familierecht en echtscheiding, ondernemingsrecht, letselschade, vastgoed en notariële overdracht — elk met wie je helpt, typische zaken en de eerste stap. Zoekers die “advocaat arbeidsrecht” en “advocaat echtscheiding” vergelijken landen op inhoud, niet op één vage “rechtsgebieden”-lijst.'
    }
  },
  {
    en: {
      title: 'Lawyer and notary profiles that build trust',
      description:
        'Calm professional profiles with photo, specialisations, languages spoken and a short bio — so a stressed visitor can choose the right desk before they call. Authority comes from people and credentials, not stock gavels.'
    },
    nl: {
      title: 'Advocaat- en notarisprofielen die vertrouwen wekken',
      description:
        'Rustige professionele profielen met foto, specialisaties, spreektalen en een korte bio — zodat een gestreste bezoeker het juiste bureau kiest vóór het bellen. Autoriteit komt uit mensen en credentials, niet uit stockhamers.'
    }
  },
  {
    en: {
      title: 'Authority signals: publications and memberships',
      description:
        'Space for publications, speaking engagements and memberships — Netherlands Bar (Orde van Advocaten), specialised associations, KNB for notaries — placed where a client scanning for seriousness actually sees them.'
    },
    nl: {
      title: 'Autoriteitssignalen: publicaties en lidmaatschappen',
      description:
        'Ruimte voor publicaties, spreekbeurten en lidmaatschappen — Orde van Advocaten, specialisatieverenigingen, KNB voor notarissen — geplaatst waar een cliënt die op ernst scant ze ook echt ziet.'
    }
  },
  {
    en: {
      title: 'Discreet first-contact paths',
      description:
        'A low-threshold consultation request that feels private: clear privacy note, optional callback window, no aggressive “claim now” banners. Sensitive first conversations need a door that lowers the threshold without shouting.'
    },
    nl: {
      title: 'Discrete eerste-contactpaden',
      description:
        'Een drempelverlagende consultaanvraag die privé oogt: heldere privacytoelichting, optioneel terugbelmoment, geen agressieve “claim nu”-banners. Gevoelige eerste gesprekken vragen om een deur die de drempel verlaagt zonder te schreeuwen.'
    }
  },
  {
    en: {
      title: 'Process explainers clients can follow',
      description:
        'Plain-language pages on what happens after the first call: intake, conflict check, engagement letter, next steps. Anxiety drops when someone understands the process before they commit a matter to your firm.'
    },
    nl: {
      title: 'Procesuitleg die cliënten kunnen volgen',
      description:
        'Begrijpelijke pagina’s over wat er na het eerste gesprek gebeurt: intake, conflictcheck, opdrachtbevestiging, vervolgstappen. Onzekerheid daalt wanneer iemand het proces snapt vóór hij of zij een zaak aan jullie toevertrouwt.'
    }
  },
  {
    en: {
      title: 'Notary tariffs, deed info and quote requests',
      description:
        'For notarial practices: clear information on residential conveyancing and wills, indicative tariff context where appropriate, and a structured quote request for deeds — so price-comparing buyers and sellers do not bounce to the next notary’s PDF.'
    },
    nl: {
      title: 'Notaristarieven, akte-info en offerte-aanvraag',
      description:
        'Voor notariskantoren: heldere informatie over woningoverdracht en testament, indicatieve tariefcontext waar passend, en een gestructureerde offerte-aanvraag voor aktes — zodat prijsvergelijkende kopers en verkopers niet doorstuiteren naar de PDF van de volgende notaris.'
    }
  },
  {
    en: {
      title: 'Case intake that asks enough — not too much',
      description:
        'Forms that capture practice area, urgency and a short matter summary without fishing for privileged detail in an open web field. The right desk gets enough to triage; confidentiality stays intact.'
    },
    nl: {
      title: 'Zaakintake die genoeg vraagt — niet te veel',
      description:
        'Formulieren die rechtsgebied, urgentie en een korte zaakomschrijving vastleggen zonder in een open webveld naar privileged detail te vissen. Het juiste bureau krijgt genoeg om te triëren; vertrouwelijkheid blijft intact.'
    }
  },
  {
    en: {
      title: 'Multilingual paths for expat clients',
      description:
        'Where your practice serves international clients: English (or other) versions of key practice and contact pages, with language switch that respects locale URLs — so expats facing divorce, employment or conveyancing can engage without guessing.'
    },
    nl: {
      title: 'Meertalige paden voor expat-cliënten',
      description:
        'Waar jullie praktijk internationale cliënten bedient: Engelse (of andere) versies van kernpagina’s over rechtsgebied en contact, met taalswitch die locale-URL’s respecteert — zodat expats bij echtscheiding, arbeid of overdracht niet hoeven te gokken.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Discovery in the firm',
      description:
        'We map how clients find you today: referrals, Google, Bar directories and notary comparisons. We note practice areas you want to grow, how intake and conflict checks run, and where stressed visitors abandon the current site.'
    },
    nl: {
      step: '01',
      title: 'Discovery op het kantoor',
      description:
        'We brengen in kaart hoe cliënten jullie nu vinden: verwijzingen, Google, Orde-directories en notarisvergelijkingen. We noteren rechtsgebieden die jullie willen laten groeien, hoe intake en conflictchecks lopen, en waar gestreste bezoekers de huidige site verlaten.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Practice architecture',
      description:
        'Information architecture separates practice areas, lawyer profiles, notarial deed paths, process explainers and discreet contact. Divorce, employment and conveyancing each get a defined slot — not one mega-menu labelled “Services”.'
    },
    nl: {
      step: '02',
      title: 'Praktijkarchitectuur',
      description:
        'Informatiearchitectuur scheidt rechtsgebieden, advocaatprofielen, notariële aktepaden, procesuitleg en discreet contact. Echtscheiding, arbeid en overdracht krijgen elk een vaste plek — geen megamenu met alleen “Diensten”.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Design for calm authority',
      description:
        'Visual design that signals seriousness without intimidation: readable typography, restrained colour, space for credentials and CTAs that say “Request a confidential consultation” rather than marketplace urgency.'
    },
    nl: {
      step: '03',
      title: 'Design voor rustige autoriteit',
      description:
        'Visueel ontwerp dat ernst uitstraalt zonder af te schrikken: leesbare typografie, ingetogen kleur, ruimte voor credentials en CTA’s die “Vraag een vertrouwelijk gesprek aan” zeggen in plaats van marktplaatsurgentie.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, intake forms, train',
      description:
        'We build the site, wire practice-area and notary quote forms, place membership and publication blocks, and train the team to update profiles and articles without a developer for every new associate.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, intakeforms, trainen',
      description:
        'We bouwen de site, koppelen rechtsgebied- en notarisofferteforms, plaatsen lidmaatschaps- en publicatieblokken, en trainen het team om profielen en artikelen bij te werken zonder developer voor elke nieuwe medewerker.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch and measure enquiries',
      description:
        'Launch tracks consultation requests by practice area, notary quote submissions and which profile pages visitors read before contacting. You see whether employment, family or conveyancing fills the diary — not anonymous hits that never reach a desk.'
    },
    nl: {
      step: '05',
      title: 'Live en aanvragen meten',
      description:
        'Livegang volgt consultaanvragen per rechtsgebied, notarisoffertes en welke profielpagina’s bezoekers lezen vóór contact. Je ziet of arbeid, familie of overdracht de agenda vult — geen anonieme hits die nooit een bureau bereiken.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Lawyers & notaries',
    crumbCurrent: 'Website design',
    badge: 'Law firm websites',
    h1: 'Website design for law firms',
    heroSub:
      'A discreet, authoritative firm website that presents practice areas clearly, showcases lawyer and notary credentials, and turns stressed visitors into confidential consultation requests — with 1,500+ completed projects behind how legal practices convert online.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'A dated firm site loses the client who needed calm authority today',
    problemP1:
      'Someone googling a divorce lawyer, employment counsel or a notary for conveyancing is rarely browsing casually. They compare which firm looks established, which practice area page answers their situation, and whether the first contact feels discreet enough for a sensitive conversation. A site stuck on stock gavels, a ten-year-old team photo or a single undifferentiated “practice areas” paragraph sends that matter to the office that already looks specialised and serious.',
    problemP2:
      'Law firms and notaries do not need a restaurant reservation widget or a contractor quote gallery. They need practice-area depth, lawyer profiles with specialisations and memberships, process explainers that reduce anxiety, notarial tariff and deed-quote paths where relevant, and an intake that triages without inviting privileged detail into an open form. Miss that structure, and you pay in fewer qualified enquiries — and in clients who chose the firm that felt safer online.',
    problemP3:
      'Directories and referrals still matter, but your website is where you control the narrative: Orde van Advocaten and association signals, publications, multilingual paths for expats, and a clear expectation of what happens after the first call. When two firms are equally competent on paper, the one that projects organised authority online often wins the first conversation.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in a law firm website',
    featuresSub:
      'Each block serves a stressed client choosing counsel or a notary — practice pages, profiles, authority signals, discreet intake — not a generic brochure with a scales icon.',
    processBadge: 'How we work',
    processHead: 'How a law firm website project runs',
    processSub:
      'From the first walkthrough of practice areas and intake flow to measuring which pages drive confidential consultations and deed quotes.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why firms trust us with their digital front door',
    whySub: 'Legal-aware delivery that respects discretion, specialisation and how clients actually choose counsel.',
    whyItems: [
      {
        title: 'Practice-area thinking',
        desc: 'We design around employment, family, corporate, injury and notarial paths — not a one-page “we do law” template with your logo swapped in.'
      },
      {
        title: 'Authority without noise',
        desc: 'Profiles, publications, Bar and association memberships sit where scanners look; CTAs stay calm and confidential rather than claim-chasing.'
      },
      {
        title: 'Intake that protects the matter',
        desc: 'Forms capture enough to route the enquiry to the right desk without turning the contact page into an open discovery deposition.'
      },
      {
        title: 'One team for findability next',
        desc: 'Website first; local SEO and Google Ads when practice + city visibility needs a push — one team that already understands your practice map, not five vendors who never opened a conflict check.'
      }
    ],
    costsBadge: 'Investment',
    costsHead: 'What shapes the scope of a law firm website',
    costsIntro:
      'Scope scales with the number of practice-area pages, lawyer and notary profiles, notarial tariff and quote tooling, multilingual needs for expat clients, and how structured your intake must be. Fixed deliverables after we review your practice map — not a rebuild every time a new associate joins.',
    costsItems: [
      {
        title: 'Essential firm site',
        desc: 'Homepage, core practice areas, team overview, discreet contact and location. Ideal for a focused boutique that needs to look trustworthy and convert referrals into consultations.'
      },
      {
        title: 'Specialisation-ready firm site',
        desc: 'Everything in Essential, plus deeper practice pages, individual profiles with memberships and publications, process explainers, structured case intake, notary quote paths where relevant, and analytics on enquiries by practice area.'
      },
      {
        title: 'Multi-office or bilingual practice',
        desc: 'Several locations, English or other locale paths for expats, or a combined lawyer–notary brand. Scoped per organisation after we map desks, languages and deed versus litigation journeys.'
      }
    ],
    costsNote:
      'Scope is fixed after we understand practice areas, profile depth, notarial needs and intake rules. Request a law firm website quote with a clear deliverable list and delivery plan — that is where your figure is set, not on a public rate list here.',
    siblingsBadge: 'Also for law firms',
    siblingsHead: 'Pair your website with local growth',
    siblingsSub:
      'A strong site converts the visit; local SEO and ads bring people searching practice area plus city. These services point stressed searchers to a firm site that already shows specialisation and a discreet next step.',
    siblingsCta: 'View service',
    hubLink: 'Back to lawyer & notary marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For projects outside legal practice we offer broader website design. Firm builds follow the process on this page.',
    ctaHeading: 'Ready for a website that earns the first confidential call?',
    ctaSub:
      'Tell us about your practice areas, team profiles and how consultations or deed quotes arrive today. We will propose a fixed scope for a site clients trust at a stressful moment.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Advocaten & notarissen',
    crumbCurrent: 'Website laten maken',
    badge: 'Advocatenwebsites',
    h1: 'Website laten maken voor advocaten',
    heroSub:
      'Een discrete, gezaghebbende kantoorwebsite die rechtsgebieden helder presenteert, credentials van advocaten en notarissen toont, en gestreste bezoekers omzet in vertrouwelijke consultaanvragen — met 1.500+ afgeronde projecten achter hoe juridische praktijken online converteren.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Een gedateerde kantoorsite verliest de cliënt die vandaag rustige autoriteit zoekt',
    problemP1:
      'Iemand die een echtscheidingsadvocaat, arbeidsrechtjurist of een notaris voor woningoverdracht googelt, bladert zelden vrijblijvend. Ze vergelijken welk kantoor gevestigd oogt, welke rechtsgebiedpagina hun situatie beantwoordt, en of het eerste contact discreet genoeg voelt voor een gevoelig gesprek. Een site met stockhamers, een tien jaar oude teamfoto of één ongedifferentieerde “rechtsgebieden”-alinea geeft die zaak aan het kantoor dat al gespecialiseerd en serieus oogt.',
    problemP2:
      'Advocatenkantoren en notarissen hebben geen restaurantreserveringswidget of aannemersoffertegalerij nodig. Ze hebben diepte per rechtsgebied nodig, advocaatprofielen met specialisaties en lidmaatschappen, procesuitleg die onzekerheid dempt, notariële tarief- en akteoffertepaden waar relevant, en een intake die triëert zonder privileged detail in een open formulier te lokken. Wie op een stressvol moment kiest, scant of arbeidsrecht, echtscheiding of woningoverdracht apart en serieus behandeld wordt. Mis je die structuur, dan betaal je met minder gekwalificeerde aanvragen — en met cliënten die het kantoor kozen dat online veiliger voelde.',
    problemP3:
      'Directories en verwijzingen blijven belangrijk, maar op je website bepaal jij het verhaal: signalen van de Orde van Advocaten en specialisatieverenigingen, publicaties, meertalige paden voor expats, en een heldere verwachting van wat er na het eerste gesprek gebeurt. Een bezoeker die twijfelt tussen twee kantoren leest vaak eerst het profiel van de behandelend advocaat of notaris en daarna of het contactpad discreet genoeg oogt. Wanneer twee kantoren op papier even bekwaam zijn, wint vaak het kantoor dat online georganiseerde autoriteit uitstraalt het eerste gesprek.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een website voor advocaten',
    featuresSub:
      'Elk blok dient een gestreste cliënt die raad of een notaris kiest — rechtsgebiedpagina’s, profielen, autoriteitssignalen, discrete intake — geen generieke brochure met een weegschaalicoon.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een website-traject voor een advocatenkantoor verloopt',
    processSub:
      'Van de eerste doorloop van rechtsgebieden en intakeflow tot meten welke pagina’s vertrouwelijke consulten en akteoffertes opleveren.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom kantoren hun digitale voordeur aan ons toevertrouwen',
    whySub: 'Juridisch bewuste oplevering die discretie, specialisatie en de manier waarop cliënten echt kiezen respecteert.',
    whyItems: [
      {
        title: 'Denken in rechtsgebieden',
        desc: 'We ontwerpen rond arbeid, familie, onderneming, letsel en notariële paden — geen one-page “wij doen recht”-template met jullie logo erop.'
      },
      {
        title: 'Autoriteit zonder lawaai',
        desc: 'Profielen, publicaties, Orde- en verenigingslidmaatschappen staan waar scanners kijken; CTA’s blijven rustig en vertrouwelijk in plaats van claimjacht.'
      },
      {
        title: 'Intake die de zaak beschermt',
        desc: 'Formulieren vangen genoeg om de aanvraag naar het juiste bureau te sturen, zonder de contactpagina tot open discovery te maken.'
      },
      {
        title: 'Eén team voor vindbaarheid daarna',
        desc: 'Website eerst; lokale SEO en Google Ads wanneer rechtsgebied + stad een duwtje nodig hebben — één team dat jullie praktijklkaart al kent, geen vijf leveranciers die nooit een conflictcheck openden.'
      }
    ],
    costsBadge: 'Investering',
    costsHead: 'Wat bepaalt de scope van een advocatenwebsite',
    costsIntro:
      'De scope schaalt met het aantal rechtsgebiedpagina’s, advocaat- en notarisprofielen, notariële tarief- en offertetools, meertalige behoefte voor expats, en hoe gestructureerd jullie intake moet zijn. Een boutique met drie rechtsgebieden vraagt iets anders dan een kantoor met akteoffertes én tweetalige expat-pagina’s. Vaste deliverables na review van jullie praktijklkaart — geen rebuild bij elke nieuwe medewerker.',
    costsItems: [
      {
        title: 'Essentiële kantoorsite',
        desc: 'Homepage, kernrechtsgebieden, teamoverzicht, discreet contact en locatie. Ideaal voor een gerichte boutique die betrouwbaar wil ogen en verwijzingen wil omzetten in consulten.'
      },
      {
        title: 'Specialisatieklare kantoorsite',
        desc: 'Alles uit Essential, plus diepere rechtsgebiedpagina’s, individuele profielen met lidmaatschappen en publicaties, procesuitleg, gestructureerde zaakintake, notarisoffertepaden waar relevant, en analytics op aanvragen per rechtsgebied.'
      },
      {
        title: 'Meerdere vestigingen of tweetalige praktijk',
        desc: 'Meerdere locaties, Engelse of andere locale-paden voor expats, of een gecombineerd advocaat–notarismerk. Scope per organisatie nadat we bureaus, talen en akte- versus procestrajecten in kaart hebben.'
      }
    ],
    costsNote:
      'De scope zetten we vast na inzicht in rechtsgebieden, profieldiepte, notariële behoefte en intakeregels. Vraag een advocatenwebsite-offerte aan met duidelijke deliverables en opleverplan — daar staat jouw bedrag, niet op een openbare tarievenlijst hier.',
    siblingsBadge: 'Ook voor advocatenkantoren',
    siblingsHead: 'Combineer je website met lokale groei',
    siblingsSub:
      'Een sterke site converteert het bezoek; lokale SEO en ads brengen mensen die rechtsgebied plus stad zoeken. Deze diensten sturen gestreste zoekers naar een kantoorsite die al specialisatie en een discrete volgende stap toont.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar advocaten- & notarismarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten de juridische praktijk bieden we breder webdesign. Kantoorbuilds volgen het proces op deze pagina.',
    ctaHeading: 'Klaar voor een website die het eerste vertrouwelijke gesprek verdient?',
    ctaSub:
      'Vertel ons over jullie rechtsgebieden, teamprofielen en hoe consulten of akteoffertes nu binnenkomen. We stellen een vaste scope voor een site die cliënten vertrouwen op een stressvol moment.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function AdvocatenNotarissenWebsiteLatenMaken() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-advocaten-notarissen'][locale]
  const firmSpokes = BRANCH_SPOKES['advocaten-notarissen']
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
              <Scale className="w-4 h-4" aria-hidden />
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
                industrySlug="advocaten-notarissen"
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
