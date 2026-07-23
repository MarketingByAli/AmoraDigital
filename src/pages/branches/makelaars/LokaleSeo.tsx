import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Calculator,
  Camera,
  CheckCircle2,
  MapPin,
  Search,
  Sparkles,
  Star,
  Home
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  MapPin,
  Search,
  Home,
  Calculator,
  Star,
  Camera,
  Building2,
  CheckCircle2
] as const

const FEATURES = [
  {
    en: {
      title: 'Google Business Profile for agencies',
      description:
        'Categories, service areas, office hours and a call/website action tuned for estate agents — so sellers searching for a local makelaar see your catchment and how to request a valuation, not a half-empty profile.'
    },
    nl: {
      title: 'Google Bedrijfsprofiel voor makelaarskantoren',
      description:
        'Categorieën, verzorgingsgebied, openingstijden en een bel-/website-actie afgestemd op makelaars — zodat verkopers die een lokale makelaar zoeken jouw gebied en hoe ze een waardebepaling aanvragen zien, geen halfleeg profiel.'
    }
  },
  {
    en: {
      title: 'Local keywords that win instructions',
      description:
        'We target “estate agent [city]”, “estate agent near me” and “sell my house [city]” phrases sellers actually type — not generic “best SEO” keywords that never become valuations.'
    },
    nl: {
      title: 'Lokale zoekwoorden die opdrachten winnen',
      description:
        'We mikken op “makelaar [stad]”, “makelaar bij mij in de buurt” en “huis verkopen [stad]”-frases die verkopers echt typen — geen generieke “beste SEO”-termen die nooit waardebepalingen worden.'
    }
  },
  {
    en: {
      title: 'City & neighbourhood landing pages',
      description:
        'Structured local pages for the districts you cover — price context, amenities, sold proof — so you can compete for district intent beyond a single homepage, without building thin doorway content.'
    },
    nl: {
      title: 'Stads- & wijklandingspagina’s',
      description:
        'Gestructureerde lokale pagina’s voor de wijken die je dekt — prijscontext, voorzieningen, verkochtbewijs — zodat je concurreert op wijkintentie voorbij één homepage, zonder dunne doorway-content.'
    }
  },
  {
    en: {
      title: '“Free valuation [city]” search intent',
      description:
        'Align GBP and on-site signals with how sellers search for a free valuation in your city — so map and organic clicks land on a clear request path, not a dead brochure page.'
    },
    nl: {
      title: 'Zoekintentie “gratis waardebepaling [stad]”',
      description:
        'Stem GBP- en on-site signalen af op hoe verkopers zoeken naar een gratis waardebepaling in jouw stad — zodat kaart- en organische klikken op een duidelijk aanvraagpad landen, geen dode brochurepagina.'
    }
  },
  {
    en: {
      title: 'Seller & buyer review growth',
      description:
        'Reviews from people who sold or bought with you are how the next seller chooses between two agents. We set up ethical request habits after completion and reply frameworks that protect your rating.'
    },
    nl: {
      title: 'Reviews van verkopers & kopers',
      description:
        'Reviews van mensen die via jou verkochten of kochten bepalen hoe de volgende verkoper tussen twee makelaars kiest. We zetten ethische verzoekgewoontes na overdracht op en antwoordkaders die je rating beschermen.'
    }
  },
  {
    en: {
      title: 'Google Maps & local pack',
      description:
        'Visibility in the map pack when someone needs an estate agent nearby. NAP consistency, pin accuracy and signals that help your office appear next to competing agencies in the same city.'
    },
    nl: {
      title: 'Google Maps & local pack',
      description:
        'Zichtbaarheid in de kaartpack wanneer iemand een makelaar in de buurt nodig heeft. Consistente NAP, juiste pin en signalen die jouw kantoor naast concurrerende kantoren in dezelfde stad laten verschijnen.'
    }
  },
  {
    en: {
      title: 'Competing for local visibility vs portals',
      description:
        'Funda owns listing traffic — local SEO owns agent discovery. We focus on being found when sellers want a makelaar, not trying to outrank every home listing on a portal.'
    },
    nl: {
      title: 'Lokale zichtbaarheid naast portals',
      description:
        'Funda bezit aanbodverkeer — lokale SEO bezit makelaardsontdekking. We focussen op gevonden worden wanneer verkopers een makelaar willen, niet op elke woninglisting op een portal voorbijstreven.'
    }
  },
  {
    en: {
      title: 'Multi-office local structure',
      description:
        'When you have several branches, we structure profiles and city/district pages so each office ranks in its catchment — without one address cannibalising another.'
    },
    nl: {
      title: 'Meerdere vestigingen lokaal structureren',
      description:
        'Bij meerdere vestigingen structureren we profielen en stads-/wijkpagina’s zodat elk kantoor in het eigen verzorgingsgebied rankt — zonder dat één adres een ander kannibaliseert.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Local visibility audit',
      description:
        'We check how you appear for “estate agent [your city]”, near-me queries, “sell house [city]”, valuation intent and the map pack against nearby agencies. We also audit GBP completeness, service areas, photos, Q&A and review velocity.'
    },
    nl: {
      step: '01',
      title: 'Lokale zichtbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op “makelaar [jouw stad]”, bij-mij-queries, “huis verkopen [stad]”, waardebepalingintentie en de kaartpack tegen buurtkantoren. Ook GBP-volledigheid, verzorgingsgebied, foto’s, Q&A en reviewtempo.'
    }
  },
  {
    en: {
      step: '02',
      title: 'GBP & keyword foundation',
      description:
        'We optimise Google Business Profile for agency categories and service areas, then lock a city/neighbourhood and valuation keyword set tied to the instructions you want to win.'
    },
    nl: {
      step: '02',
      title: 'GBP- & zoekwoordfundament',
      description:
        'We optimaliseren Google Bedrijfsprofiel voor makelaarscategorieën en verzorgingsgebied, en zetten een stad-/wijk- en waardebepalingzoekwoordenset vast gekoppeld aan de opdrachten die je wilt winnen.'
    }
  },
  {
    en: {
      step: '03',
      title: 'City & district page plan',
      description:
        'We plan neighbourhood and city landing pages as local SEO assets — distinct from a full website redesign (that lives on the estate agent website spoke) but aligned with how you win local sellers.'
    },
    nl: {
      step: '03',
      title: 'Stads- & wijkpaginaplan',
      description:
        'We plannen buurt- en stadslandingspagina’s als lokale SEO-assets — los van een volledige websiteredesign (dat hoort bij de makelaarswebsite-spoke) maar afgestemd op hoe je lokale verkopers wint.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Reviews, photos & citations',
      description:
        'We launch post-completion review habits, a photo cadence for office and sold proof where appropriate, and citation cleanup so directories do not contradict your office hours or locations.'
    },
    nl: {
      step: '04',
      title: 'Reviews, foto’s & citations',
      description:
        'We starten reviewgewoontes na overdracht, een fotoritme voor kantoor en verkochtbewijs waar passend, en citation-opschoning zodat directories je kantoortijden of locaties niet tegenspreken.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure valuations, not vanity',
      description:
        'Monthly reporting on map views, valuation/call/direction actions and makelaar + district keyword shifts — read as progress toward valuation requests and instructions, without promising a permanent map-pack rank.'
    },
    nl: {
      step: '05',
      title: 'Meet waardebepalingen, geen vanity',
      description:
        'Maandelijkse rapportage over kaartweergaven, waardebepaling/bel/route-acties en verschuivingen op makelaar- + wijkzoekwoorden — gelezen als voortgang naar waardebepalingaanvragen en opdrachten, zonder een vaste kaartrank te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'google-ads', 'social-media'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Real estate agents',
    crumbCurrent: 'Local SEO for real estate agents',
    badge: 'Estate agent local SEO',
    h1: 'Local SEO for real estate agents',
    heroSub:
      'Get found when sellers search Google Maps and “estate agent near me” — with Google Business Profile optimisation, city and neighbourhood pages, review growth and valuation keywords that win instructions. With 1,500+ completed projects, we know how agencies win locally.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in local search means nearby agents win the listing first',
    problemP1:
      'When a seller searches “estate agent Rotterdam West” or “free valuation Utrecht”, Google shows three agencies in the map pack before Funda opens. An unclear service area, stale office photos or weak “sell my house” signals send that valuation request to the neighbour with clearer district pages — even if your sold stock is stronger.',
    problemP2:
      'Estate agent local search is about makelaar + city intent, free-valuation queries, district credibility and discovery beside portals — not listing clicks on Funda. A restaurant optimising dish photos or a physio highlighting DTF access solves unrelated problems; sellers shortlist agents from map pins, service areas and seller reviews.',
    problemP3:
      'Paid ads can buy short-term valuation traffic, but organic map and local search visibility compounds every time a seller starts looking for an agent. Without local SEO, you keep paying for clicks while the office with fresher reviews and better district pages owns the pack.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for estate agents',
    featuresSub:
      'Each deliverable targets sellers searching makelaar + city, free valuations and district intent — service areas, valuation paths and seller reviews, not a renamed agency checklist.',
    processBadge: 'How we work',
    processHead: 'How an estate agent local SEO engagement runs',
    processSub:
      'From auditing the map pack around your office to measuring calls, routes and website clicks that lead to valuations.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why agencies trust us with local findability',
    whySub: 'Real-estate-aware local SEO: makelaar + city discovery, valuation intent and reporting tied to instructions — beside Funda, not instead of it.',
    whyItems: [
      {
        title: 'Agency local focus',
        desc: 'We optimise for estate agent + city, sell-house and valuation search behaviour — not generic “near me” playbooks from clinics or salons.'
      },
      {
        title: 'Maps & district expertise',
        desc: 'Google Business Profile, service areas and city/neighbourhood pages treated as the front door of local agent discovery.'
      },
      {
        title: 'Measurable seller actions',
        desc: 'We track map impressions, valuation and call actions, direction requests and district-keyword clicks — tied to valuation requests and listing instructions, not vanity map rank.'
      },
      {
        title: 'Everything under one roof',
        desc: 'Local SEO for your office first; agency website, Google Ads and social when you need more valuation flow — one team from map search to signed instruction, without duplicating Funda’s listing role.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for estate agents',
    costsIntro:
      'Estate agent local SEO is ongoing GBP, district-page and valuation-keyword work — competing for seller discovery beside portals, not listing traffic. Profile and enquiry lifts often appear within weeks; stable visibility for “estate agent [city]” and district terms usually needs months. We report instruction-ready trends, not promised rankings.',
    costsItems: [
      {
        title: 'Foundation (single office)',
        desc: 'GBP overhaul, service area setup, citation cleanup, review process and a city/neighbourhood keyword set. Ideal for one office that needs to appear properly in Maps first.'
      },
      {
        title: 'Growth (competitive city)',
        desc: 'Ongoing monthly optimisation: district page support, review replies, local content for city and valuation intent, competitor monitoring and reporting on profile actions that lead to seller enquiries.'
      },
      {
        title: 'Multi-office agencies',
        desc: 'Each office keeps its own service area, seller-review stream and district pages — so West does not steal valuation calls meant for South.'
      }
    ],
    costsNote:
      'Scope depends on districts covered, office count and how much GBP and neighbourhood-page work is needed versus Funda-led discovery. Request an agency local-SEO quote — we outline valuation paths, district signals and seller review flows with honest timelines, without ranking guarantees.',
    siblingsBadge: 'Also for estate agents',
    siblingsHead: 'Pair local SEO with conversion and demand',
    siblingsSub:
      'Maps puts you on the seller shortlist; these services turn valuation interest into signed instructions and stronger local presence beside portals.',
    siblingsCta: 'View service',
    hubLink: 'Back to estate agent marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside real estate we offer broader local SEO. Agency engagements follow the process on this page.',
    ctaHeading: 'Ready to show up when sellers search nearby?',
    ctaSub:
      'Tell us your city, districts you cover and how sellers find you today — Funda, referral or Google. We scope GBP service areas, valuation keywords and district pages with honest timelines.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Makelaars',
    crumbCurrent: 'Lokale SEO voor makelaars',
    badge: 'Lokale SEO voor makelaars',
    h1: 'Lokale SEO voor makelaars',
    heroSub:
      'Word gevonden wanneer verkopers Google Maps en “makelaar bij mij in de buurt” openen — met Google Bedrijfsprofiel-optimalisatie, stads- en wijkpagina’s, reviewgroei en waardebepalingzoekwoorden die opdrachten winnen. Met 1.500+ afgeronde projecten weten we hoe kantoren lokaal winnen.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in lokaal zoeken betekent dat buurtmakelaars eerst de opdracht winnen',
    problemP1:
      'Als een verkoper “makelaar Rotterdam West” of “gratis waardebepaling Utrecht” zoekt, toont Google drie kantoren in de kaartpack vóór Funda opent. Onduidelijk verzorgingsgebied, verouderde kantoorfoto’s of zwakke “huis verkopen”-signalen sturen die waardebepalingaanvraag naar de buur met duidelijkere wijkpagina’s — ook als jouw verkochtbewijs sterker is.',
    problemP2:
      'Lokaal makelaarszoeken draait om makelaar + stad-intentie, gratis-waardebepaling-queries, wijkgeloofwaardigheid en ontdekking naast portals — niet aanbodklikken op Funda. Een restaurant dat gerechtfoto’s optimaliseert of een fysio die DTF benadrukt, lost andere problemen op; verkopers shortlisten makelaars op kaartpins, verzorgingsgebied en verkoperreviews.',
    problemP3:
      'Betaalde ads kopen kortetermijn waardebepalingverkeer, maar organische kaart- en lokale zoekzichtbaarheid stapelt elke keer dat een verkoper een makelaar zoekt. Zonder lokale SEO blijf je betalen voor klikken terwijl het kantoor met frissere reviews en betere wijkpagina’s de pack bezit.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor makelaars',
    featuresSub:
      'Elke deliverable richt zich op verkopers die makelaar + stad, gratis waardebepaling en wijkintentie zoeken — verzorgingsgebied, waardebepalingpaden en verkoperreviews, geen hernoemde kantoorchecklist.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor makelaars verloopt',
    processSub:
      'Van een audit van de kaartpack rond jouw kantoor tot meten van belacties, routes en websiteklikken die tot waardebepalingen leiden.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom kantoren hun lokale vindbaarheid aan ons toevertrouwen',
    whySub: 'Vastgoedbewuste lokale SEO: makelaar + stad-ontdekking, waardebepalingintentie en rapportage gekoppeld aan opdrachten — naast Funda, niet in plaats daarvan.',
    whyItems: [
      {
        title: 'Focus op makelaars lokaal',
        desc: 'We optimaliseren voor makelaar + stad, huis-verkopen- en waardebepalingzoekgedrag — geen generieke “bij mij”-playbooks uit klinieken of salons.'
      },
      {
        title: 'Maps- & wijkexpertise',
        desc: 'Google Bedrijfsprofiel, verzorgingsgebied en stads-/wijkpagina’s als voordeur van lokale makelaardsontdekking.'
      },
      {
        title: 'Meetbare verkoperacties',
        desc: 'We volgen kaartimpressies, waardebepaling- en belacties, routeverzoeken en klikken op wijkzoekwoorden — gekoppeld aan waardebepalingaanvragen en verkoopopdrachten, niet vanity-kaartrank.'
      },
      {
        title: 'Alles onder één dak',
        desc: 'Eerst lokale SEO voor je kantoor; kantoorwebsite, Google Ads en social wanneer je meer waardebepalingstroom nodig hebt — één team van kaartzoeken tot getekende opdracht, zonder Funda’s aanbodrol te dupliceren.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor makelaars',
    costsIntro:
      'Lokale SEO voor makelaarskantoren is doorlopend GBP-, wijkpagina- en waardebepalingzoekwoordwerk — concurreren om verkopers naast portals, niet om aanbodverkeer. Profiel- en aanvragenstijging zie je vaak binnen enkele weken; stabiele zichtbaarheid op “makelaar [stad]” en wijktermen vraagt meestal maanden. We rapporteren opdrachtklare trends, geen beloofde rankings.',
    costsItems: [
      {
        title: 'Foundation (één kantoor)',
        desc: 'GBP-overhaul, verzorgingsgebied, citation-opschoning, reviewproces en een stads-/wijkzoekwoordenset. Ideaal voor één vestiging die eerst fatsoenlijk in Maps moet staan.'
      },
      {
        title: 'Growth (concurrerende stad)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor wijkpagina’s, reviewantwoorden, lokale content voor stads- en waardebepalingintentie, concurrentiemonitoring en rapportage op profielacties die tot verkoperaanvragen leiden.'
      },
      {
        title: 'Meerdere vestigingen',
        desc: 'Elk kantoor houdt eigen verzorgingsgebied, verkoperreviewstroom en wijkpagina’s — zodat West geen taxatiebelacties steelt die voor Zuid bedoeld zijn.'
      }
    ],
    costsNote:
      'Scope hangt af van gedekte wijken, aantal vestigingen en hoeveel GBP- en wijkpaginawerk nodig is naast Funda-gedreven ontdekking. Vraag een lokale-SEO-offerte voor makelaars aan — we schetsen waardebepalingpaden, wijksignalen en verkoperreviewflows met eerlijke planning, zonder rankinggaranties.',
    siblingsBadge: 'Ook voor makelaars',
    siblingsHead: 'Combineer lokale SEO met conversie en vraag',
    siblingsSub:
      'Maps zet je op de verkopersshortlist; deze diensten maken waardebepalinginteresse om in getekende opdrachten en sterkere lokale aanwezigheid naast portals.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar makelaarsmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten vastgoed bieden we bredere lokale SEO. Kantoortrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om te verschijnen wanneer verkopers in de buurt zoeken?',
    ctaSub:
      'Vertel je stad, wijken die je dekt en hoe verkopers je vandaag vinden — Funda, via-via of Google. We scopen GBP-verzorgingsgebied, waardebepalingzoekwoorden en wijkpagina’s met eerlijke doorlooptijden.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function MakelaarsLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-makelaars'][locale]
  const agentSpokes = BRANCH_SPOKES.makelaars
  const siblings = agentSpokes.filter((spoke) =>
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

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {siblings.map((spoke) => (
              <BranchSpokeCard
                key={spoke.slug}
                industrySlug="makelaars"
                hubPath={hubPath}
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
