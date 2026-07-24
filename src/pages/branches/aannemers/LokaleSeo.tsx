import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  HardHat,
  MapPinned,
  MapPin,
  Search,
  Sparkles,
  Star,
  Sun
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  MapPinned,
  Search,
  MapPin,
  HardHat,
  Star,
  Camera,
  Sun,
  CheckCircle2
] as const

const FEATURES = [
  {
    en: {
      title: 'GBP as a service-area business',
      description:
        'Set up Google Business Profile for a radius of towns, not a showroom pin — so homeowners searching “contractor near me” see your catchment and how to request a quote, not an empty storefront address.'
    },
    nl: {
      title: 'GBP als service-area business',
      description:
        'Google Bedrijfsprofiel voor een straal gemeenten, geen showroom-pin — zodat huiseigenaren die “aannemer bij mij” zoeken jouw werkgebied en hoe ze een offerte aanvragen zien, geen leeg winkeladres.'
    }
  },
  {
    en: {
      title: 'Keywords that win real jobs',
      description:
        'We target “contractor [city]”, “renovation [city]”, “dormer [region]” and trade + town phrases homeowners type — not generic “best SEO” terms that never become site visits.'
    },
    nl: {
      title: 'Zoekwoorden die echte klussen winnen',
      description:
        'We mikken op “aannemer [stad]”, “verbouwing [stad]”, “dakkapel [regio]” en vak + plaats-frases die huiseigenaren typen — geen generieke “beste SEO”-termen die nooit werfbezoeken worden.'
    }
  },
  {
    en: {
      title: 'Town & catchment landing pages',
      description:
        'Local pages for the places you actually drive to — multiple towns in your radius — so you compete for “bathroom renovation [town]” without thin doorway spam or pretending you only work on one street.'
    },
    nl: {
      title: 'Plaats- & werkgebiedpagina’s',
      description:
        'Lokale pagina’s voor plaatsen waar je écht heen rijdt — meerdere gemeenten in je straal — zodat je concurreert op “badkamerrenovatie [plaats]” zonder dunne doorway-spam of alsof je alleen één straat doet.'
    }
  },
  {
    en: {
      title: 'Trade-specific search intent',
      description:
        'Separate signals for dormers, kitchens, roofs and extensions — matched to jobs you take — so map and organic clicks land on the right trade story, not one vague “building services” blob.'
    },
    nl: {
      title: 'Vakspecifieke zoekintentie',
      description:
        'Aparte signalen voor dakkapellen, keukens, daken en uitbouwen — gekoppeld aan klussen die je doet — zodat kaart- en organische klikken op het juiste vakverhaal landen, geen vaag “bouwdiensten”-blok.'
    }
  },
  {
    en: {
      title: 'Reviews from private clients',
      description:
        'Homeowner reviews after a kitchen or bathroom handover decide who gets the next quote shortlist. We set up ethical request habits post-job and reply frameworks that protect your rating.'
    },
    nl: {
      title: 'Reviews van particuliere opdrachtgevers',
      description:
        'Reviews van huiseigenaren na een keuken- of badkameroplevering bepalen wie op de volgende offerteshortlist komt. We zetten ethische verzoekgewoontes na de klus op en antwoordkaders die je rating beschermen.'
    }
  },
  {
    en: {
      title: 'Project photos in Maps',
      description:
        'Fresh before/after and site shots in Google Business Profile — not stock scaffolding. Homeowners comparing two map pins often choose from the photo strip before they open your website.'
    },
    nl: {
      title: 'Projectfoto’s in Maps',
      description:
        'Verse voor/na- en bouwplaatsfoto’s in Google Bedrijfsprofiel — geen stocksteigers. Huiseigenaren die twee kaartpins vergelijken, kiezen vaak eerst vanuit de fotostrip vóór ze je website openen.'
    }
  },
  {
    en: {
      title: 'Seasonal search patterns',
      description:
        'Roofing after storms, insulation before winter, outdoor work in spring — we keep GBP and local content aligned with when those searches spike in your region.'
    },
    nl: {
      title: 'Seizoensgebonden zoekgedrag',
      description:
        'Dakwerk na stormen, isolatie vóór de winter, buitenwerk in het voorjaar — we houden GBP en lokale content in lijn met wanneer die zoekopdrachten in jouw regio pieken.'
    }
  },
  {
    en: {
      title: 'Organic visibility vs lead platforms',
      description:
        'Marketplace apps charge per lead. Local SEO aims to own discovery when someone searches Google for a contractor in their town — so you are not only renting visibility from Werkspot-style platforms.'
    },
    nl: {
      title: 'Organische zichtbaarheid vs offerteplatforms',
      description:
        'Klusapps rekenen per lead. Lokale SEO mikt op eigen ontdekking wanneer iemand Google opent voor een aannemer in hun plaats — zodat je zichtbaarheid niet alleen huurt via Werkspot-achtige platforms.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Local visibility audit',
      description:
        'We check how you appear for “contractor [your city]”, renovation and dormer + town queries, and the map pack against nearby trades. We also audit GBP as a service-area profile, project photos, reviews and citation consistency.'
    },
    nl: {
      step: '01',
      title: 'Lokale zichtbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op “aannemer [jouw stad]”, verbouw- en dakkapel + plaats-queries en de kaartpack tegen buurtvakmannen. Ook GBP als service-area-profiel, projectfoto’s, reviews en citation-consistentie.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Service-area GBP & keyword set',
      description:
        'We configure Google Business Profile for your radius of towns, then lock a trade + place keyword set tied to the jobs you want — kitchens, dormers, roofs — not a single-pin shop setup.'
    },
    nl: {
      step: '02',
      title: 'Service-area GBP & zoekwoordenset',
      description:
        'We richten Google Bedrijfsprofiel in voor jouw straalgemeenten, en zetten een vak + plaats-zoekwoordenset vast gekoppeld aan de klussen die je wilt — keukens, dakkapellen, daken — geen single-pin winkelnopzet.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Town-page plan',
      description:
        'We plan catchment and town landing pages as local SEO assets — distinct from a full website redesign (that lives on the contractor website spoke) but aligned with how multi-town trades get found.'
    },
    nl: {
      step: '03',
      title: 'Plaatspaginaplan',
      description:
        'We plannen werkgebied- en plaatslandingspagina’s als lokale SEO-assets — los van een volledige websiteredesign (dat hoort bij de aannemerswebsite-spoke) maar afgestemd op hoe multi-plaatsvakken gevonden worden.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Reviews, project photos & citations',
      description:
        'We launch post-job review habits, a photo cadence for finished kitchens and roofs, and citation cleanup so directories do not contradict your service towns or phone number.'
    },
    nl: {
      step: '04',
      title: 'Reviews, projectfoto’s & citations',
      description:
        'We starten reviewgewoontes na oplevering, een fotoritme voor afgewerkte keukens en daken, en citation-opschoning zodat directories je werkplaatsen of telefoonnummer niet tegenspreken.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure jobs, not vanity ranks',
      description:
        'Monthly reporting on map views, call/quote/direction actions and shifts on contractor + town keywords — read as progress toward project enquiries, without promising a permanent map-pack slot.'
    },
    nl: {
      step: '05',
      title: 'Meet klussen, geen vanity-ranks',
      description:
        'Maandelijkse rapportage over kaartweergaven, bel/offerte/route-acties en verschuivingen op aannemer- + plaatszoekwoorden — gelezen als voortgang naar projectaanvragen, zonder een vaste kaartpackplek te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Contractors',
    crumbCurrent: 'Local SEO for contractors',
    badge: 'Contractor local SEO',
    h1: 'Local SEO for contractors',
    heroSub:
      'Get found when homeowners search “contractor [city]”, “renovation [town]” or “dormer near me” — with service-area Google Business Profile, multi-town pages, trade keywords, project photos and review growth. With 1,500+ completed projects, we know how trades win locally without living only on lead platforms.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in local search means you rent every lead from platforms',
    problemP1:
      'When someone searches “contractor Utrecht” or “dormer Hilversum”, Google shows a map pack of trades before a marketplace app opens. A GBP still set up like a shop pin, no project photos and weak town signals send that enquiry to the competitor whose service area and reviews already look local — even if your kitchens are sharper.',
    problemP2:
      'Contractor local search is multi-town catchments, trade + place intent, seasonal spikes and discovery against paid lead platforms — not a dentist “near me” pack or a salon Saturday booking race. Homeowners shortlist who shows finished work in their town and who answers without a per-lead fee baked into every quote.',
    problemP3:
      'Paying for Werkspot-style leads can fill the diary short-term, but organic map and local search visibility compounds every storm season and every kitchen renovation search. Without local SEO you keep renting clicks while the firm with fresher project photos and clearer service towns owns the free discovery layer.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for contractors',
    featuresSub:
      'Every deliverable serves homeowners searching trade + town across a radius — service-area GBP, project photos, reviews and catchment pages — not a relabelled clinic or salon local checklist.',
    processBadge: 'How we work',
    processHead: 'How a contractor local SEO engagement runs',
    processSub:
      'From auditing how you appear across the towns you drive to, to measuring calls and quote clicks that become site visits — including seasonal trade spikes.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why contractors trust us with local findability',
    whySub:
      'Trade-aware local SEO: service-area profiles, multi-town intent and reporting tied to project enquiries — competing with platforms on owned discovery, not copying a showroom playbook.',
    whyItems: [
      {
        title: 'Radius-aware local focus',
        desc: 'We optimise for contractor + town and renovation intent across a catchment — not a single-street shop template from retail.'
      },
      {
        title: 'Service-area Maps expertise',
        desc: 'Google Business Profile without a fake showroom, project photo cadence and call/quote actions that match how mobile crews win work.'
      },
      {
        title: 'Measurable job actions',
        desc: 'We track map impressions, calls, routes and trade + town keyword movement — tied to project enquiries, not vanity map rank promises.'
      },
      {
        title: 'One partner from Maps to quote',
        desc: 'Local SEO for your catchment first; contractor website and later Google Ads when you need more regional demand — one team that knows a dusty phone on a scaffold.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for contractors',
    costsIntro:
      'Contractor local SEO is ongoing GBP service-area work, town pages, trade keywords, project photos and reviews — especially when competing with lead platforms and nearby vans. Profile action lifts often appear within weeks; holding relevance for “contractor [city]” or “dormer [town]” across a radius usually needs months. We share realistic enquiry trends, not guaranteed rankings.',
    costsItems: [
      {
        title: 'Foundation (one catchment)',
        desc: 'Service-area GBP overhaul, citation cleanup, review process, project-photo habits and a town + trade keyword set. Ideal when Maps still treats you like a shop with no radius.'
      },
      {
        title: 'Growth (competitive region)',
        desc: 'Ongoing monthly optimisation: town-page support, review replies, seasonal content for roofs or insulation spikes, competitor and platform monitoring, reporting on actions that lead to quotes.'
      },
      {
        title: 'Wider multi-town coverage',
        desc: 'When you expand the radius or add crews, we structure towns and categories so new places do not cannibalise the core catchment or confuse Google about where you actually work.'
      }
    ],
    costsNote:
      'Scope depends on how many towns you cover, which trades you publish and how incomplete GBP is as a service-area profile today. Request a contractor local-SEO quote — we outline catchment setup, trade keywords and review cadence with honest timelines, without ranking guarantees.',
    siblingsBadge: 'Also for contractors',
    siblingsHead: 'Pair local SEO with conversion and demand',
    siblingsSub:
      'Maps puts you on the homeowner shortlist; these services turn that glance into a quote request with photos — and later paid demand when organic is not enough.',
    siblingsCta: 'View service',
    hubLink: 'Back to contractor marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside the trades we offer broader local SEO. Contractor engagements follow the process on this page.',
    ctaHeading: 'Ready to own discovery in the towns you drive to?',
    ctaSub:
      'Tell us your radius, main trades and whether jobs come from Google, referrals or lead platforms today. We scope service-area GBP, town pages and trade keywords with honest timelines.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Aannemers & klusbedrijven',
    crumbCurrent: 'Lokale SEO voor aannemers',
    badge: 'Lokale SEO voor aannemers',
    h1: 'Lokale SEO voor aannemers',
    heroSub:
      'Word gevonden wanneer huiseigenaren “aannemer [stad]”, “verbouwing [plaats]” of “dakkapel bij mij” zoeken — met service-area Google Bedrijfsprofiel, multi-plaats pagina’s, vakzoekwoorden, projectfoto’s en reviewgroei. Met 1.500+ afgeronde projecten weten we hoe vakbedrijven lokaal winnen zonder alleen op leadplatforms te leven.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in lokaal zoeken betekent dat je elke lead huurt van platforms',
    problemP1:
      'Als iemand “aannemer Utrecht” of “dakkapel Hilversum” zoekt, toont Google een kaartpack van vakmensen vóór een klusapp opent. Een GBP dat nog als winkpin staat, geen projectfoto’s en zwakke plaatssignalen sturen die aanvraag naar de concurrent met duidelijker werkgebied en reviews — ook als jouw keukens scherper zijn.',
    problemP2:
      'Lokaal aannemerszoeken draait om multi-plaats werkgebied, vak + plaats-intentie, seizoenspieken en ontdekking tegen betaalde leadplatforms — geen tandarts-“bij mij”-pack of salon-zaterdagboekrace. Huiseigenaren shortlisten wie afgewerkt werk in hun plaats toont en wie antwoordt zonder leadfee in elke offerte.',
    problemP3:
      'Betalen voor Werkspot-achtige leads vult de agenda kortetermijn, maar organische kaart- en lokale zoekzichtbaarheid stapelt elk stormseizoen en elke keukenverbouwingzoektocht. Zonder lokale SEO blijf je klikken huren terwijl het bedrijf met frissere projectfoto’s en duidelijkere werkplaatsen de gratis ontdekkingslaag bezit.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor aannemers',
    featuresSub:
      'Elke deliverable dient huiseigenaren die vak + plaats over een straal zoeken — service-area GBP, projectfoto’s, reviews en werkgebiedpagina’s — geen herlabelde kliniek- of salonchecklist.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor aannemers verloopt',
    processSub:
      'Van een audit van hoe je verschijnt in de gemeenten waar je heen rijdt, tot meten van bel- en offerteklikken die werfbezoeken worden — inclusief seizoenspieken per vak.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom aannemers hun lokale vindbaarheid aan ons toevertrouwen',
    whySub:
      'Vakbewuste lokale SEO: service-area-profielen, multi-plaats intentie en rapportage gekoppeld aan projectaanvragen — concurreren met platforms op owned ontdekking, geen showroom-playbook kopiëren.',
    whyItems: [
      {
        title: 'Focus op werkgebied-straal',
        desc: 'We optimaliseren voor aannemer + plaats en verbouwintentie over een verzorgingsgebied — geen single-street winkelsjabloon uit retail.'
      },
      {
        title: 'Service-area Maps-expertise',
        desc: 'Google Bedrijfsprofiel zonder nepshowroom, projectfotoritme en bel-/offerte-acties die passen bij hoe mobiele ploegen werk winnen.'
      },
      {
        title: 'Meetbare klusacties',
        desc: 'We volgen kaartimpressies, belacties, routes en beweging op vak + plaatszoekwoorden — gekoppeld aan projectaanvragen, geen beloofde vanity-kaartrank.'
      },
      {
        title: 'Één partner van Maps tot offerte',
        desc: 'Eerst lokale SEO voor je verzorgingsgebied; aannemerswebsite en later Google Ads wanneer je meer regionale vraag nodig hebt — één team dat een stoffige telefoon op de steiger kent.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor aannemers',
    costsIntro:
      'Lokale SEO voor aannemers is doorlopend GBP service-area-werk, plaatspagina’s, vakzoekwoorden, projectfoto’s en reviews — zeker wanneer je concurreert met leadplatforms en buurtbusjes. Profielacties stijgen vaak binnen enkele weken; relevantie vasthouden op “aannemer [stad]” of “dakkapel [plaats]” over een straal vraagt meestal maanden. We delen realistische aanvraagtrends, geen gegarandeerde rankings.',
    costsItems: [
      {
        title: 'Foundation (één verzorgingsgebied)',
        desc: 'Service-area GBP-overhaul, citation-opschoning, reviewproces, projectfotogewoontes en een plaats- + vakzoekwoordenset. Ideaal wanneer Maps je nog als winkel zonder straal behandelt.'
      },
      {
        title: 'Growth (concurrerende regio)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor plaatspagina’s, reviewantwoorden, seizoenscontent rond dak- of isolatiepieken, concurrentie- en platformmonitoring, rapportage op acties die tot offertes leiden.'
      },
      {
        title: 'Breder multi-plaats bereik',
        desc: 'Bij een grotere straal of extra ploegen structureren we plaatsen en categorieën zodat nieuwe gemeenten het kerngebied niet kannibaliseren of Google niet verwarren over waar je écht werkt.'
      }
    ],
    costsNote:
      'Scope hangt af van hoeveel plaatsen je dekt, welke vakken je publiceert en hoe incompleet GBP vandaag als service-area-profiel is. Vraag een lokale-SEO-offerte voor aannemers aan — we schetsen werkgebiedopzet, vakzoekwoorden en reviewritme met eerlijke planning, zonder rankinggaranties.',
    siblingsBadge: 'Ook voor aannemers',
    siblingsHead: 'Combineer lokale SEO met conversie en vraag',
    siblingsSub:
      'Maps zet je op de shortlist van huiseigenaren; deze diensten maken van die blik een offerteaanvraag met foto’s — en later betaalde vraag wanneer organisch niet volstaat.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar aannemersmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten de bouw bieden we bredere lokale SEO. Aannemerstrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om ontdekking te bezitten in de plaatsen waar je heen rijdt?',
    ctaSub:
      'Vertel je straal, hoofdvakken en of klussen nu via Google, via-via of leadplatforms komen. We scopen service-area GBP, plaatspagina’s en vakzoekwoorden met eerlijke doorlooptijden.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function AannemersLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-aannemers'][locale]
  const contractorSpokes = BRANCH_SPOKES.aannemers
  const siblings = contractorSpokes.filter((spoke) =>
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
                industrySlug="aannemers"
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
