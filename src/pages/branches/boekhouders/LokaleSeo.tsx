import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  Globe2,
  MapPin,
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
  MapPin,
  Briefcase,
  Star,
  Building2,
  Calculator,
  Globe2,
  Users
] as const

const FEATURES = [
  {
    en: {
      title: 'City keywords entrepreneurs actually type',
      description:
        'We target “bookkeeper [city]”, “administration office [city]”, “bookkeeper for freelancers [city]” and “accountant SME [region]” — high-lifetime-value local intent, not vague “best accounting firm” vanity phrases.'
    },
    nl: {
      title: 'Stadzoekwoorden die ondernemers echt typen',
      description:
        'We mikken op “boekhouder [stad]”, “administratiekantoor [stad]”, “boekhouder voor zzp [stad]” en “accountant mkb [regio]” — lokale intentie met hoge levensduurwaarde, geen vage “beste accountantskantoor”-vanityfrases die nooit tot kennismakingen leiden.'
    }
  },
  {
    en: {
      title: 'Branch specialisation as a search entry',
      description:
        'Hospitality bookkeeper, e-commerce bookkeeper and similar niche + place signals — so a café owner or webshop founder finds a practice that names their world, not only a generic city pin.'
    },
    nl: {
      title: 'Branchespecialisatie als zoekingang',
      description:
        'Boekhouder horeca, boekhouder e-commerce en vergelijkbare niche + plaats-signalen — zodat een caféhouder of webshopondernemer een praktijk vindt die hun wereld noemt, niet alleen een generieke stadspin zonder specialisatie.'
    }
  },
  {
    en: {
      title: 'Google Business Profile for the practice',
      description:
        'Categories, hours, office photos and call or website actions set for an administration or accounting office — so Maps shows a serious practice entrepreneurs can trust, even when much of the work happens online.'
    },
    nl: {
      title: 'Google Bedrijfsprofiel voor het kantoor',
      description:
        'Categorieën, openingstijden, kantoorfoto’s en bel- of website-acties ingericht voor een administratie- of accountantskantoor — zodat Maps een serieuze praktijk toont die ondernemers vertrouwen, ook wanneer veel werk online gebeurt en ze toch lokaal willen kiezen.'
    }
  },
  {
    en: {
      title: 'Reviews from entrepreneurs',
      description:
        'Client reviews from freelancers and SME owners after a settled working relationship — the social proof local searchers weigh when choosing who gets their books for years.'
    },
    nl: {
      title: 'Reviews van ondernemers',
      description:
        'Klantreviews van zzp’ers en mkb’ers na een ingespeelde samenwerking — het sociale bewijs dat lokale zoekers wegen wanneer ze kiezen wie jarenlang hun boeken krijgt, naast landelijke platformadvertenties.'
    }
  },
  {
    en: {
      title: 'City and specialisation landing pages',
      description:
        'Local pages that pair city with service or niche — bookkeeper Utrecht, freelancer bookkeeping Rotterdam — as SEO assets distinct from a full website redesign, aligned with how regional entrepreneurs shortlist.'
    },
    nl: {
      title: 'Stads- en specialisatiepagina’s',
      description:
        'Lokale pagina’s die stad koppelen aan dienst of niche — boekhouder Utrecht, zzp-boekhouding Rotterdam — als SEO-assets los van een volledige websiteredesign, afgestemd op hoe regionale ondernemers shortlisten.'
    }
  },
  {
    en: {
      title: 'Seasonal filing and annual-accounts peaks',
      description:
        'GBP posts, local content and page focus timed around tax filing and jaarrekening seasons — when freelancers and directors actually compare bookkeepers and switch.'
    },
    nl: {
      title: 'Seizoenspieken rond aangifte en jaarrekening',
      description:
        'GBP-posts, lokale content en paginamfocus afgestemd op aangifte- en jaarrekeningperiodes — wanneer freelancers en directeuren écht boekhouders vergelijken en wisselen, en lokale zichtbaarheid het meest telt.'
    }
  },
  {
    en: {
      title: 'Local trust even when work is remote',
      description:
        'Many clients collaborate online, yet still search “bookkeeper near me” for trust. We strengthen local signals so distance-friendly practices still win the city shortlist.'
    },
    nl: {
      title: 'Lokaal vertrouwen ook bij online werken',
      description:
        'Veel klanten werken op afstand, maar zoeken toch “boekhouder bij mij” uit vertrouwen. We versterken lokale signalen zodat afstandsvriendelijke praktijken alsnog de stads-shortlist winnen.'
    }
  },
  {
    en: {
      title: 'Owned visibility vs national platforms',
      description:
        'National online bookkeeping brands and comparison sites compete for the same attention. Local SEO builds Maps and organic presence so high-value regional clients are not only rented from listing platforms.'
    },
    nl: {
      title: 'Owned zichtbaarheid vs landelijke platforms',
      description:
        'Landelijke online boekhoudpartijen en vergelijkingssites concurreren om dezelfde aandacht. Lokale SEO bouwt Maps- en organische aanwezigheid, zodat hoogwaardige regionale klanten niet alleen via listings worden gehuurd.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Local accounting visibility audit',
      description:
        'We check how you appear for bookkeeper + city, administration office and niche queries, the map pack against nearby practices and national platforms, and GBP completeness. We also note seasonal gaps around filing peaks.'
    },
    nl: {
      step: '01',
      title: 'Lokale accountancy-zichtbaarheidsaudit',
      description:
        'We checken hoe jullie verschijnen op boekhouder + stad, administratiekantoor- en nichequeries, de kaartpack tegen naburige praktijken en landelijke platforms, en GBP-volledigheid. Ook seizoensgaten rond aangiftepieken en of reviews van ondernemers zichtbaar genoeg zijn.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Keyword set and GBP setup',
      description:
        'We lock a city + niche keyword set tied to clients you want to keep for years, then configure Google Business Profile categories, hours, photos and actions for an accounting or administration office.'
    },
    nl: {
      step: '02',
      title: 'Zoekwoordenset en GBP-opzet',
      description:
        'We zetten een stad + niche-zoekwoordenset vast gekoppeld aan klanten die jullie jaren wilt houden, en richten Google Bedrijfsprofiel in met categorieën, uren, foto’s en acties voor een accountancy- of administratiekantoor.'
    }
  },
  {
    en: {
      step: '03',
      title: 'City and niche page plan',
      description:
        'We plan city and specialisation landing pages as local SEO assets — distinct from the accountant website spoke’s full redesign, but aligned with how entrepreneurs find a bookkeeper they trust in their region.'
    },
    nl: {
      step: '03',
      title: 'Stads- en nichepaginaplan',
      description:
        'We plannen stads- en specialisatielandingspagina’s als lokale SEO-assets — los van de volledige redesign op de boekhouderswebsite-spoke, maar afgestemd op hoe ondernemers een boekhouder vinden die ze in hun regio vertrouwen.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Entrepreneur reviews and citations',
      description:
        'We launch review habits after a settled client relationship, clean citations so NAP matches the practice, and keep seasonal content ready for filing and annual-accounts peaks.'
    },
    nl: {
      step: '04',
      title: 'Ondernemersreviews en citations',
      description:
        'We starten reviewgewoontes na een ingespeelde klantrelatie, schonen citations zodat NAP klopt met de praktijk, en houden seizoenscontent klaar voor aangifte- en jaarrekeningpieken.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure introductions, not vanity ranks',
      description:
        'Monthly reporting on map views, calls, website clicks and movement on bookkeeper + city and niche keywords — read as progress toward lasting client introductions, without promising a permanent map-pack slot.'
    },
    nl: {
      step: '05',
      title: 'Meet kennismakingen, geen vanity-ranks',
      description:
        'Maandelijkse rapportage over kaartweergaven, belacties, websiteklikken en beweging op boekhouder + stad- en nichezoekwoorden — gelezen als voortgang naar langdurige klantkennismakingen in jullie regio, zonder een vaste kaartpackplek te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Accountants & bookkeepers',
    crumbCurrent: 'Local SEO',
    badge: 'Accountant local SEO',
    h1: 'Local SEO for accountants',
    heroSub:
      'Get found for “bookkeeper [city]”, freelancer and SME searches — with Google Business Profile, entrepreneur reviews, city and niche pages and seasonal focus around tax and annual accounts. With 1,500+ completed projects, we know how accounting practices win locally against national platforms and comparison sites.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible locally means high-lifetime-value clients go elsewhere',
    problemP1:
      'An entrepreneur looking for a bookkeeper in their city often opens Maps or the first organic results that look local, reviewed and specialised — then requests an introduction from one of the first practices that feel trustworthy enough for a multi-year relationship. Around filing deadlines that shortlist forms faster. A thin Google Business Profile, missing city pages and weak review presence send that high-value client to a competitor or a national online brand that already owns the local shortlist.',
    problemP2:
      'Accounting local search is relationship-driven and often seasonal. It is not a lawyer’s urgent practice-area pack or an installer’s emergency call race. Freelancers and SME owners shortlist by city, niche (hospitality, e-commerce, zzp) and proof from other entrepreneurs — even when day-to-day work will happen online. Comparison sites and national platforms compete for the same attention every filing season, especially when local practices look incomplete in Maps.',
    problemP3:
      'Paying for directory or marketplace leads can fill intake short-term, but owned map and organic visibility compounds every time someone in your region searches “administratiekantoor [stad]” or “boekhouder voor zzp”. Each lasting client is worth far more than a one-off job lead. Without local SEO you keep renting discovery while the practice with clearer city and niche pages and a complete GBP owns the free layer.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for accountants',
    featuresSub:
      'Every deliverable serves an entrepreneur choosing a lasting bookkeeping relationship in their region — GBP, city pages, niche keywords, reviews — not a relabelled legal or trades local checklist.',
    processBadge: 'How we work',
    processHead: 'How an accountant local SEO engagement runs',
    processSub:
      'From auditing how you appear for bookkeeper + city queries to measuring calls and clicks that become introductions from clients you want to keep for years.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why practices trust us with local accounting findability',
    whySub:
      'Accounting-aware local SEO: city + niche intent, entrepreneur reviews and reporting tied to lasting introductions — competing with national platforms on owned discovery.',
    whyItems: [
      {
        title: 'City and niche local focus',
        desc: 'We optimise for bookkeeper + city, administration office and hospitality or e-commerce niche intent — not a generic “accountant near me” shop template.'
      },
      {
        title: 'Practice Maps expertise',
        desc: 'Google Business Profile categories, office photos and actions set for an administration or accounting office, with review habits that fit B2B client relationships.'
      },
      {
        title: 'Measurable introduction actions',
        desc: 'We track map impressions, calls, website clicks and city + niche keyword movement — tied to introductions, not vanity rank promises.'
      },
      {
        title: 'One partner from Maps to website',
        desc: 'Local SEO for findability first; the accountant website spoke for conversion, and Google Ads later when paid seasonal demand is needed — one team that already knows your niches.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for accountants',
    costsIntro:
      'Accountant local SEO is ongoing GBP work, city and niche pages, entrepreneur reviews and citation hygiene — especially when competing with national online bookkeeping brands. A boutique serving one city asks for a different cadence than a firm publishing hospitality and e-commerce niches across a region. Profile and action lifts often appear within weeks; holding relevance for competitive “bookkeeper [city]” terms usually needs months. We share realistic introduction trends, not guaranteed rankings.',
    costsItems: [
      {
        title: 'Foundation (one office, core cities)',
        desc: 'GBP overhaul, citation cleanup, entrepreneur review process and a city + niche keyword set. Ideal when Maps still under-represents your practice against national platforms.'
      },
      {
        title: 'Growth (competitive city or region)',
        desc: 'Ongoing monthly optimisation: city and specialisation page support, review replies, seasonal content for filing peaks, competitor and platform monitoring, reporting on actions that lead to introductions.'
      },
      {
        title: 'Multi-location or multi-niche coverage',
        desc: 'When you add locations or publish more niches, we structure profiles and local pages so signals stay clear and one city or sector does not cannibalise another.'
      }
    ],
    costsNote:
      'Scope depends on how many cities and niches you publish, how strong national platform competition is, and how incomplete GBP is today. Request an accountant local-SEO quote — we outline keywords, page plan and review cadence with honest timelines, without ranking guarantees.',
    siblingsBadge: 'Also for accountants',
    siblingsHead: 'Pair local SEO with conversion and demand',
    siblingsSub:
      'Maps and local search put you on the entrepreneur shortlist; the firm website turns that glance into an introduction, and ads can add paid demand in filing seasons when organic is not enough.',
    siblingsCta: 'View service',
    hubLink: 'Back to accountant & bookkeeper marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside accounting practice we offer broader local SEO. Practice engagements follow the process on this page.',
    ctaHeading: 'Ready to be the bookkeeper found in your city?',
    ctaSub:
      'Tell us your cities, niches and whether clients arrive via Google, referrals or platforms today. We scope GBP, city pages and entrepreneur review habits with honest timelines.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Boekhouders & accountants',
    crumbCurrent: 'Lokale SEO',
    badge: 'Lokale SEO voor boekhouders',
    h1: 'Lokale SEO voor boekhouders',
    heroSub:
      'Word gevonden op “boekhouder [stad]”, zzp- en mkb-zoekopdrachten — met Google Bedrijfsprofiel, ondernemersreviews, stads- en nichepagina’s en seizoensfocus rond aangifte en jaarrekening. Met 1.500+ afgeronde projecten weten we hoe accountancypraktijken lokaal winnen tegen landelijke platforms en vergelijkingssites.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Lokaal onzichtbaar betekent dat klanten met hoge levensduurwaarde elders gaan',
    problemP1:
      'Een ondernemer die een boekhouder in hun stad zoekt, opent vaak Maps of de eerste organische resultaten die lokaal, gereviewd en gespecialiseerd ogen — en vraagt een kennismaking aan bij één van de eerste praktijken die betrouwbaar genoeg voelen voor een meerjarige relatie. Rond aangiftedeadlines vormt die shortlist sneller. Een dun Google Bedrijfsprofiel, ontbrekende stadspagina’s en zwakke reviewaanwezigheid sturen die hoogwaardige klant naar een concurrent of een landelijk online merk dat de lokale shortlist al bezit.',
    problemP2:
      'Lokaal accountancyzoeken is relatiegedreven en vaak seizoensgebonden. Het is geen urgente rechtsgebied-pack van een advocaat of een spoedbelrace van een installateur. Zzp’ers en mkb’ers shortlisten op stad, niche (horeca, e-commerce, zzp) en bewijs van andere ondernemers — ook wanneer het dagelijkse werk online verloopt. Vergelijkingssites en landelijke platforms concurreren om dezelfde aandacht elk aangifteseizoen, vooral wanneer lokale praktijken incompleet ogen in Maps.',
    problemP3:
      'Betalen voor directory- of marktplaatsleads vult intake kortetermijn, maar owned kaart- en organische zichtbaarheid stapelt elke keer dat iemand in jullie regio “administratiekantoor [stad]” of “boekhouder voor zzp” zoekt. Elke langdurige klant is veel meer waard dan een eenmalige kluslead. Zonder lokale SEO blijf je ontdekking huren terwijl de praktijk met duidelijkere stads- en nichepagina’s en een compleet GBP de gratis laag bezit.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor boekhouders',
    featuresSub:
      'Elke deliverable dient een ondernemer die een langdurige boekhoudrelatie in hun regio kiest — GBP, stadspagina’s, nichezoekwoorden, reviews — geen herlabelde juridische of vakbedrijf-checklist en geen generieke “bij mij in de buurt”-truc zonder specialisatie.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor een boekhoudkantoor verloopt',
    processSub:
      'Van een audit van hoe jullie verschijnen op boekhouder + stad-queries tot meten van belacties en klikken die kennismakingen worden van klanten die je jaren wilt houden — inclusief seizoenspieken rond aangifte en jaarrekening.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom praktijken hun lokale accountancy-vindbaarheid aan ons toevertrouwen',
    whySub:
      'Accountancybewuste lokale SEO: stad + niche-intentie, ondernemersreviews en rapportage gekoppeld aan langdurige kennismakingen — concurreren met landelijke platforms op owned ontdekking, niet op beloofde kaartposities.',
    whyItems: [
      {
        title: 'Focus op stad en niche lokaal',
        desc: 'We optimaliseren voor boekhouder + stad, administratiekantoor en horeca- of e-commerce-nicheintentie — geen generiek “accountant bij mij”-winkelsjabloon uit retail.'
      },
      {
        title: 'Maps-expertise voor praktijken',
        desc: 'Google Bedrijfsprofiel-categorieën, kantoorfoto’s en acties voor een administratie- of accountantskantoor, met reviewgewoontes die passen bij B2B-klantrelaties na een ingespeelde start.'
      },
      {
        title: 'Meetbare kennismakingsacties',
        desc: 'We volgen kaartimpressies, belacties, websiteklikken en beweging op stad + nichezoekwoorden — gekoppeld aan kennismakingen die tot langdurige klanten kunnen leiden, geen beloofde vanity-kaartrank.'
      },
      {
        title: 'Eén partner van Maps tot website',
        desc: 'Eerst lokale SEO voor vindbaarheid; de boekhouderswebsite-spoke voor conversie, en Google Ads later wanneer betaalde seizoensvraag nodig is — één team dat jullie niches en pakketten al kent.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor boekhouders',
    costsIntro:
      'Lokale SEO voor boekhouders is doorlopend GBP-werk, stads- en nichepagina’s, ondernemersreviews en citation-hygiëne — zeker wanneer je concurreert met landelijke online boekhoudmerken. Profiel- en actieliften zie je vaak binnen enkele weken; relevantie vasthouden op concurrerende “boekhouder [stad]”-termen vraagt meestal maanden. Een boutique met twee steden vraagt een ander ritme dan een kantoor dat ook op horeca- en e-commerce-niches publiceert. We delen realistische kennismakingtrends, geen gegarandeerde rankings.',
    costsItems: [
      {
        title: 'Foundation (één kantoor, kernsteden)',
        desc: 'GBP-overhaul, citation-opschoning, ondernemersreviewproces en een stad + niche-zoekwoordenset. Ideaal wanneer Maps jullie praktijk nog ondervertegenwoordigt tegenover landelijke platforms.'
      },
      {
        title: 'Growth (concurrerende stad of regio)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor stads- en specialisatiepagina’s, reviewantwoorden, seizoenscontent rond aangiftepieken, concurrentie- en platformmonitoring, rapportage op acties die tot kennismakingen leiden.'
      },
      {
        title: 'Meerdere locaties of niches',
        desc: 'Bij extra vestigingen of meer gepubliceerde niches structureren we profielen en lokale pagina’s zodat signalen helder blijven en de ene stad of sector de andere niet kannibaliseert.'
      }
    ],
    costsNote:
      'Scope hangt af van hoeveel steden en niches je publiceert, hoe sterk landelijke platformconcurrentie is, en hoe incompleet GBP vandaag is. Vraag een lokale-SEO-offerte voor boekhouders aan — we schetsen zoekwoorden, paginaplan en reviewritme met eerlijke planning, zonder rankinggaranties.',
    siblingsBadge: 'Ook voor boekhoudkantoren',
    siblingsHead: 'Combineer lokale SEO met conversie en vraag',
    siblingsSub:
      'Maps en lokaal zoeken zetten je op de shortlist van ondernemers; de kantoorwebsite maakt van die blik een kennismaking met niche- en softwarefit, en ads kunnen betaalde vraag toevoegen in aangifteseizoenen wanneer organisch niet volstaat.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar boekhouders- & accountantsmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten de accountancypraktijk bieden we bredere lokale SEO. Praktijktrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om de boekhouder te zijn die in jullie stad gevonden wordt?',
    ctaSub:
      'Vertel jullie steden, niches en of klanten nu via Google, verwijzingen of platforms binnenkomen — en of aangifteseizoen al piekt. We scopen GBP, stadspagina’s en ondernemersreviewgewoontes met eerlijke doorlooptijden — afgestemd op hoe ondernemers in jullie regio écht zoeken.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function BoekhoudersLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-boekhouders'][locale]
  const firmSpokes = BRANCH_SPOKES.boekhouders
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
                industrySlug="boekhouders"
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
