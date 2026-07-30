import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  Home,
  MapPin,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  SprayCan
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  SprayCan,
  Building2,
  Home,
  ClipboardList,
  MapPin,
  Shield,
  BadgeCheck,
  Smartphone
] as const

const FEATURES = [
  {
    en: {
      title: 'Services split the way buyers search',
      description:
        'Office cleaning, window cleaning, floor care, move-out cleans and facade work each get clear space — so a facility manager or household lands on the right story, not one vague “we clean everything” paragraph.'
    },
    nl: {
      title: 'Diensten zoals kopers zoeken',
      description:
        'Kantoorschoonmaak, glasbewassing, vloeronderhoud, opleverschoonmaak en gevelreiniging krijgen elk duidelijke ruimte — zodat een facility manager of huishouden op het juiste verhaal landt, geen vaag “wij poetsen alles”-alineaatje.'
    }
  },
  {
    en: {
      title: 'Separate commercial and residential entrances',
      description:
        'Facility buyers — offices, schools, care, VvE — enter through a commercial path; households seeking glass or handover cleans get a residential path. Mixing both into one form loses the longer contract cycle.'
    },
    nl: {
      title: 'Aparte zakelijke en particuliere ingangen',
      description:
        'Zakelijke kopers — kantoren, scholen, zorg, VvE — komen via een zakelijk pad binnen; huishoudens die glas of oplevering zoeken krijgen een particulier pad. Beide mengen in één formulier verliest de langere contractcyclus.'
    }
  },
  {
    en: {
      title: 'Quote forms built for recurring contracts',
      description:
        'Capture frequency, floor area, location type and site count — so your first reply can scope a weekly office round or multi-site agreement, not only a one-off deep clean.'
    },
    nl: {
      title: 'Offerteforms gebouwd voor terugkerende contracten',
      description:
        'Vang frequentie, oppervlakte, locatietype en aantal sites — zodat je eerste reactie een wekelijkse kantoorroute of multi-site-afspraak kan scopen, niet alleen een eenmalige diepteschoonmaak.'
    }
  },
    {
      en: {
        title: 'Cleaning radius on the map story',
        description:
          'Show which towns sit inside your weekly rounds on the homepage and quote path — so distant enquiries self-filter and nearby facility managers see you already serve their street.'
      },
      nl: {
        title: 'Schoonmaakstraal in het kaartverhaal',
        description:
          'Toon welke plaatsen in je wekelijkse routes vallen op homepage en offertepad — zodat verre aanvragen zichzelf filteren en facility managers in de buurt zien dat je hun straat al bedient.'
      }
    },
  {
    en: {
      title: 'Trust signals before keys change hands',
      description:
        'Insurance, VCA where relevant, screened staff and marks such as OSB or Schoonmakend Nederland sit next to CTAs — so key-handover fear settles before someone shortlists three unknown vans.'
    },
    nl: {
      title: 'Vertrouwenssignalen vóór sleutels wisselen',
      description:
        'Verzekering, VCA waar relevant, gescreend personeel en keurmerken zoals OSB of Schoonmakend Nederland staan naast CTA’s — zodat sleutelangst zakt vóór iemand drie onbekende busjes shortlist.'
    }
  },
  {
    en: {
      title: 'Commercial client references',
      description:
        'Short proof from offices, schools or VvE boards about reliability, fixed teams and quality checks — the signals that decide who wins the recurring contract when prices are close.'
    },
    nl: {
      title: 'Referenties van zakelijke opdrachtgevers',
      description:
        'Korte bewijzen van kantoren, scholen of VvE-besturen over betrouwbaarheid, vaste teams en kwaliteitscontroles — de signalen die bepalen wie het terugkerende contract wint als de prijzen dicht bij elkaar liggen.'
    }
  },
  {
    en: {
      title: 'Fixed teams and quality control explained',
      description:
        'Plain language on how teams stay consistent and how inspections or checklists work — because cleaning buyers fear rotating strangers more than a slightly higher weekly rate.'
    },
    nl: {
      title: 'Vaste teams en kwaliteitscontrole uitgelegd',
      description:
        'Begrijpelijke taal over hoe teams consistent blijven en hoe inspecties of checklists werken — omdat schoonmaakkopers wisselende vreemden meer vrezen dan een iets hogere weekprijs.'
    }
  },
  {
    en: {
      title: 'Mobile for facility desks and households',
      description:
        'Fast load for someone comparing cleaners between meetings or on the sofa: sticky quote CTAs, readable service blocks and forms that work with one thumb.'
    },
    nl: {
      title: 'Mobiel voor facility-desks en huishoudens',
      description:
        'Snelle load voor iemand die schoonmakers vergelijkt tussen meetings of op de bank: sticky offerte-CTA’s, leesbare dienstblokken en forms die met één duim werken.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Discovery on the cleaning floor',
      description:
        'We map how commercial and residential enquiries arrive today: Google, referrals, tender lists and walk-in calls. We note which services you sell, how recurring contracts are scoped, which trust marks you hold, and where quote requests stall between a vague contact form and a WhatsApp thread.'
    },
    nl: {
      step: '01',
      title: 'Discovery op de schoonmaakvloer',
      description:
        'We brengen in kaart hoe zakelijke en particuliere aanvragen nu binnenkomen: Google, verwijzingen, aanbestedingslijsten en inlooptelefoontjes. We noteren welke diensten je verkoopt, hoe terugkerende contracten worden gescoped, welke keurmerken je hebt, en waar offertes vastlopen tussen een vaag contactformulier en een WhatsApp-thread.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Commercial and residential architecture',
      description:
        'Information architecture separates office cleaning, glass, floors, move-out and facade work — and splits zakelijk versus particulier journeys. A VvE board comparing weekly rounds should never land in a household move-out form.'
    },
    nl: {
      step: '02',
      title: 'Zakelijke en particuliere architectuur',
      description:
        'Informatiearchitectuur scheidt kantoorschoonmaak, glas, vloeren, oplevering en gevelreiniging — en splitst zakelijke versus particuliere journeys. Een VvE-bestuur dat wekelijkse routes vergelijkt, mag niet in een particuliere opleverform belanden.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Design for trust and clarity',
      description:
        'Visual design that puts people, premises and next steps first: readable service cards on a phone, CTAs that say “Request a contract quote” or “Ask about window cleaning”, and space for marks and references without clutter.'
    },
    nl: {
      step: '03',
      title: 'Design voor vertrouwen en helderheid',
      description:
        'Visueel ontwerp met mensen, panden en volgende stappen voorop: leesbare dienstkaarten op de telefoon, CTA’s die “Vraag een contractofferte” of “Vraag over glasbewassing” zeggen, en ruimte voor keurmerken en referenties zonder rommel.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, train, hand over',
      description:
        'We build the site, set contract-oriented quote forms, place trust blocks and train your team to update services, radius towns and references without a developer for every new office contract. Content stays editable by people who plan the rounds.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, trainen, overdragen',
      description:
        'We bouwen de site, zetten contractgerichte offerteforms klaar, plaatsen vertrouwensblokken en trainen je team om diensten, werkgebiedplaatsen en referenties te updaten zonder developer voor elk nieuw kantoorcontract. Content blijft bewerkbaar door mensen die de routes plannen.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch and measure quote quality',
      description:
        'Launch tracks commercial versus residential quote starts, which service pages convert and which radius towns send the best contract leads. You see whether Google or referrals fill the diary — not anonymous hits that never become a site visit.'
    },
    nl: {
      step: '05',
      title: 'Live en offertekwaliteit meten',
      description:
        'Livegang volgt zakelijke versus particuliere offertestarts, welke dienstpagina’s converteren en welke werkgebiedplaatsen de beste contractleads sturen. Je ziet of Google of verwijzingen de agenda vullen — geen anonieme hits die nooit een locatiebezoek worden.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Cleaning companies',
    crumbCurrent: 'Website design',
    badge: 'Cleaning websites',
    h1: 'Website design for cleaning companies',
    heroSub:
      'A cleaning-company website that wins recurring contracts and sharper quote requests — with services split clearly, commercial and residential entrances, contract-ready quote forms, trust signals for key handover and mobile paths for facility desks and households. With 1,500+ completed projects, we know how cleaning businesses convert online.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'A generic site loses the contract that needed trust first',
    problemP1:
      'A facility manager comparing weekly office cleaning will not hand over keys to a company that looks like a stock-photo brochure with one “contact us” box. When your site cannot show insurance, screened teams, fixed routes and how quality is checked, the recurring contract goes to the cleaner that already looks operational and reliable — even if your price would have been competitive.',
    problemP2:
      'Cleaning companies do not need a renovation portfolio carousel or an emergency plumber call button. They need service clarity across office cleaning, glass, floors, move-out and facade work; separate paths for zakelijk and particulier; and quote forms that ask frequency, surface area and location type. Miss that, and you train demand for one-off deep cleans while the multi-year office rounds go elsewhere.',
    problemP3:
      'Local SEO and ads can bring attention, but the website is where trust settles before someone shortlists three vans. When two cleaners look equal on Maps distance, the one that explains fixed teams, marks such as OSB or Schoonmakend Nederland and a clear radius often wins the site visit — and the contract that follows.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in a cleaning company website',
    featuresSub:
      'Each block serves a contract buyer or a household enquiry — service splits, commercial/residential entrances, contract quote forms, trust marks, radius — not a contractor template with mops pasted on.',
    processBadge: 'How we work',
    processHead: 'How a cleaning company website project runs',
    processSub:
      'From the first walkthrough of your commercial and residential offer to measuring which pages drive contract-quality quotes.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why cleaning companies trust us with their digital front desk',
    whySub:
      'Cleaning-aware delivery that treats recurring contract value as the core goal — and respects how facility managers and households decide who gets keys to their premises.',
    whyItems: [
      {
        title: 'Built around key-handover moments',
        desc: 'Pages and forms answer “who enters our building, how often, and how is quality checked?” before a facility manager opens a second tab.'
      },
      {
        title: 'Two markets, two journeys',
        desc: 'Office and VvE buyers get contract language; households get clearer glass and handover paths — neither journey borrows the other’s proof.'
      },
      {
        title: 'Marks and insurance where scanners look',
        desc: 'OSB, Schoonmakend Nederland, VCA and cover sit beside quote CTAs — not buried under a footer logo strip nobody reads on a phone.'
      },
      {
        title: 'One team for findability next',
        desc: 'Website first; local SEO and Google Ads when city or service intent needs a push — one team that already knows your radius and contract mix.'
      }
    ],
    costsBadge: 'Investment',
    costsHead: 'What shapes the scope of a cleaning website',
    costsIntro:
      'Scope scales with how many services you publish, whether you sell both commercial and residential, how deep the quote form needs to be for recurring contracts, and how many towns sit in your radius. A glass-and-household specialist asks for a different build than a multi-site office cleaner with OSB membership and VCA teams. Fixed deliverables after we review your offer and enquiry flow — not a rebuild every time a new school contract starts.',
    costsItems: [
      {
        title: 'Essential cleaning site',
        desc: 'Homepage, service overview, commercial and/or residential entrance, quote CTA, radius, trust basics and contact. Ideal for a focused cleaner that needs to look reliable and capture enquiries beyond WhatsApp alone.'
      },
      {
        title: 'Contract-ready cleaning site',
        desc: 'Everything in Essential, plus richer service pages, contract-oriented quote fields, commercial references, clearer quality-control and marks blocks, mobile paths and analytics on commercial versus residential quote starts.'
      },
      {
        title: 'Multi-site or multi-brand cleaner',
        desc: 'Several brands or large catchments with shared service rules and trust language. Scoped per organisation after we map how contracts, teams and radius towns are managed today.'
      }
    ],
    costsNote:
      'Scope is fixed after we understand services, commercial versus residential mix and quote needs. Request a cleaning website quote with a clear deliverable list and delivery plan — that is where your figure is set, not on a public rate list here. Bring how contracts are scoped today and which marks you already hold so we size the right paths.',
    siblingsBadge: 'Also for cleaning companies',
    siblingsHead: 'Pair your website with local growth and paid demand',
    siblingsSub:
      'A strong site converts the visit; local SEO and Google Ads bring people searching a cleaner or window cleaner in your radius. These services point them to a site that already shows trust and a clear contract quote path.',
    siblingsCta: 'View service',
    hubLink: 'Back to cleaning company marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For projects outside cleaning we offer broader website design. Cleaning company builds follow the process on this page.',
    ctaHeading: 'Ready for a website that wins keys and contracts?',
    ctaSub:
      'Share your mix of office rounds versus household jobs, which marks you already hold, and how quotes arrive today. We will propose a fixed scope for a site facility managers and households actually use before they hand over access.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Schoonmaakbedrijven',
    crumbCurrent: 'Website laten maken',
    badge: 'Websites voor schoonmaakbedrijven',
    h1: 'Website laten maken voor schoonmaakbedrijven',
    heroSub:
      'Een schoonmaakwebsite die terugkerende contracten en scherpere offerteaanvragen wint — met diensten helder uitgesplitst, zakelijke en particuliere ingangen, contractklare offerteforms, vertrouwenssignalen voor sleuteloverdracht en mobiele paden voor facility-desks en huishoudens. Met 1.500+ afgeronde projecten weten we hoe schoonmaakbedrijven online converteren voordat iemand sleutels of een multi-site rooster overdraagt.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Een generieke site verliest het contract dat eerst vertrouwen nodig had',
    problemP1:
      'Een facility manager die wekelijkse kantoorschoonmaak vergelijkt, geeft geen sleutels af aan een bedrijf dat oogt als een stockfoto-brochure met één “neem contact op”-vak. Wanneer je site verzekering, gescreende teams, vaste routes en kwaliteitscontrole niet kan tonen, gaat het terugkerende contract naar de schoonmaker die al operationeel en betrouwbaar oogt — ook als jouw prijs concurrerend was geweest. Dat verlies voelt klein op de dag zelf, maar stapelt zich op in gemiste meerjarige omzet.',
    problemP2:
      'Schoonmaakbedrijven hebben geen verbouwportfolio-carrousel of spoedloodgieter-belknop nodig. Ze hebben diensthelderheid over kantoorschoonmaak, glas, vloeren, oplevering en gevelreiniging; aparte paden voor zakelijk en particulier; en offerteforms die frequentie, oppervlakte en locatietype vragen. Mis je dat, dan train je vraag naar eenmalige diepteschoonmaak terwijl de meerjarige kantoorroutes elders landen — precies het omgekeerde van wat lifetime value in schoonmaak vraagt.',
    problemP3:
      'Lokale SEO en ads kunnen aandacht brengen, maar op de website zakt vertrouwen in vóór iemand drie busjes shortlist. Wanneer twee schoonmakers op Maps-afstand gelijk ogen, wint vaak degene die vaste teams, keurmerken zoals OSB of Schoonmakend Nederland en een heldere straal uitlegt het locatiebezoek — en het contract dat volgt. Zonder die laag blijft elke klik een belofte die je concurrent wél hard maakt.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een website voor schoonmaakbedrijven',
    featuresSub:
      'Elk blok dient een contractkoper of een particuliere aanvraag — dienstensplitsing, zakelijk/particuliere ingangen, contractofferteforms, keurmerken, werkgebied — geen aannemerstemplate met moppen erop geplakt en geen spoedinstallateurs-belknop.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een website-traject voor een schoonmaakbedrijf verloopt',
    processSub:
      'Van de eerste doorloop van je zakelijke en particuliere aanbod tot meten welke pagina’s contractwaardige offertes opleveren — inclusief welke straalplaatsen de sterkste leads sturen.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom schoonmaakbedrijven hun digitale balie aan ons toevertrouwen',
    whySub:
      'Schoonmaakbewuste oplevering die terugkerende contractwaarde als kerndoel behandelt — en respecteert hoe facility managers en huishoudens kiezen wie sleutels tot hun pand of appartementencomplex krijgt.',
    whyItems: [
      {
        title: 'Gebouwd rond sleutelmomenten',
        desc: 'Pagina’s en forms beantwoorden “wie komt ons pand in, hoe vaak, en hoe wordt kwaliteit gecontroleerd?” vóór een facility manager een tweede tab opent.'
      },
      {
        title: 'Twee markten, twee journeys',
        desc: 'Kantoor- en VvE-kopers krijgen contracttaal; huishoudens krijgen helderdere glas- en opleverpaden — geen van beide journeys leent het bewijs van de ander.'
      },
      {
        title: 'Keurmerken en verzekering waar scanners kijken',
        desc: 'OSB, Schoonmakend Nederland, VCA en dekking staan naast offerte-CTA’s — niet begraven onder een footer-logostrook die niemand op de telefoon leest.'
      },
      {
        title: 'Eén team voor vindbaarheid daarna',
        desc: 'Website eerst; lokale SEO en Google Ads wanneer stads- of dienstintentie een duwtje nodig heeft — één team dat jouw straal en contractmix al kent.'
      }
    ],
    costsBadge: 'Investering',
    costsHead: 'Wat bepaalt de scope van een schoonmaakwebsite',
    costsIntro:
      'De scope schaalt met hoeveel diensten je publiceert, of je zowel zakelijk als particulier verkoopt, hoe diep het offerteformulier moet zijn voor terugkerende contracten, en hoeveel plaatsen in je straal liggen. Een glas- en huishoudspecialist vraagt een andere build dan een multi-site kantoorschoonmaker met OSB-lidmaatschap en VCA-teams. Vaste deliverables na review van je aanbod en aanvraagflow — geen rebuild elke keer dat een nieuw schoolcontract start of een VvE-route bijkomt.',
    costsItems: [
      {
        title: 'Essentiële schoonmaaksite',
        desc: 'Homepage, dienstoverzicht, zakelijke en/of particuliere ingang, offerte-CTA, werkgebied, basisvertrouwen en contact. Ideaal voor een gerichte schoonmaker die betrouwbaar wil ogen en aanvragen wil vangen naast WhatsApp alleen.'
      },
      {
        title: 'Contractklare schoonmaaksite',
        desc: 'Alles uit Essential, plus rijkere dienstpagina’s, contractgerichte offertevelden, zakelijke referenties, helderdere kwaliteitscontrole- en keurmerkblokken, mobiele paden en analytics op zakelijke versus particuliere offertestarts.'
      },
      {
        title: 'Multi-site of multi-merk schoonmaker',
        desc: 'Meerdere merken of grote catchments met gedeelde dienstregels en vertrouwenstaal. Scope per organisatie nadat we in kaart hebben hoe contracten, teams en werkgebiedplaatsen nu worden beheerd.'
      }
    ],
    costsNote:
      'De scope zetten we vast na inzicht in diensten, zakelijk versus particulier en offertebehoefte. Vraag een schoonmaakwebsite-offerte aan met duidelijke deliverables en opleverplan — daar staat jouw bedrag, niet op een openbare tarievenlijst hier. Neem mee hoe contracten nu worden gescoped, welke keurmerken je al hebt en of je vooral kantoren, VvE’s of huishoudens bedient, zodat we de juiste paden dimensioneren.',
    siblingsBadge: 'Ook voor schoonmaakbedrijven',
    siblingsHead: 'Combineer je website met lokale groei en gerichte betaalde vraag',
    siblingsSub:
      'Een sterke site converteert het bezoek; lokale SEO en Google Ads brengen mensen die een schoonmaker of glazenwasser in jouw straal zoeken. Deze diensten sturen hen naar een site die al vertrouwen, dienstensplitsing en een duidelijk contractoffertepad toont.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar schoonmaakbedrijvenmarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten schoonmaak bieden we breder webdesign. Schoonmaakbedrijfbuilds volgen het proces op deze pagina.',
    ctaHeading: 'Klaar voor een website die sleutels en contracten wint?',
    ctaSub:
      'Deel je mix van kantoorroutes versus huishoudelijke klussen, welke keurmerken je al hebt, en hoe offertes nu binnenkomen. We stellen een vaste scope voor een site die facility managers en huishoudens écht gebruiken vóór ze toegang overdragen.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function SchoonmaakbedrijvenWebsiteLatenMaken() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-schoonmaakbedrijven'][locale]
  const firmSpokes = BRANCH_SPOKES.schoonmaakbedrijven
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
              <SprayCan className="w-4 h-4" aria-hidden />
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
                industrySlug="schoonmaakbedrijven"
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
