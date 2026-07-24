import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  HardHat,
  Images,
  MapPin,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Star
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  Images,
  ClipboardList,
  MapPin,
  HardHat,
  BadgeCheck,
  Star,
  Shield,
  Smartphone
] as const

const FEATURES = [
  {
    en: {
      title: 'Project portfolio with before/after',
      description:
        'Kitchens, bathrooms, dormers and extensions in clear before/after sets with short job notes — so a homeowner can picture their own renovation, not scroll stock building photos.'
    },
    nl: {
      title: 'Projectportfolio met voor/na',
      description:
        'Keukens, badkamers, dakkapellen en uitbouwen in duidelijke voor/na-sets met korte klusnotities — zodat een huiseigenaar zijn eigen verbouwing kan voorstellen, geen stockbouwfoto’s scrollt.'
    }
  },
  {
    en: {
      title: 'Quote form that asks the right questions',
      description:
        'Capture trade type, rough size, address area, timing and photos of the space — so your first reply can filter tyre-kickers and price the jobs you actually want.'
    },
    nl: {
      title: 'Offerteformulier met de juiste vragen',
      description:
        'Vaktype, globale omvang, woonplaats/wijk, timing en foto’s van de ruimte — zodat je eerste reactie shoppers filtert en je klussen begroot die je écht wilt.'
    }
  },
  {
    en: {
      title: 'Service area made obvious',
      description:
        'Towns and postcodes you cover on the homepage and contact path — homeowners outside your catchment stop enquiring, and locals see you work where they live.'
    },
    nl: {
      title: 'Werkgebied dat meteen duidelijk is',
      description:
        'Gemeenten en postcodes die je bedient op homepage en contactpad — huiseigenaren buiten je bereik stoppen met vragen, en locals zien dat je werkt waar zij wonen.'
    }
  },
  {
    en: {
      title: 'Services split by job type',
      description:
        'Separate pages or clear blocks for renovation, extension, dormer, bathroom and roof work — matching how people search, not one vague “building services” paragraph.'
    },
    nl: {
      title: 'Diensten per klustype',
      description:
        'Aparte pagina’s of blokken voor verbouwing, aanbouw, dakkapel, badkamer en dakwerk — zoals mensen zoeken, geen vaag “bouwdiensten”-alineaatje.'
    }
  },
  {
    en: {
      title: 'Certifications & insurance on show',
      description:
        'VCA, warranty schemes and liability cover where they apply — visible next to CTAs so trust is settled before someone opens a WhatsApp chat with three unknown vans.'
    },
    nl: {
      title: 'Certificeringen & verzekering zichtbaar',
      description:
        'VCA, garantieregelingen en aansprakelijkheidsdekking waar van toepassing — zichtbaar naast CTA’s, zodat vertrouwen staat vóór iemand WhatsApp opent met drie onbekende busjes.'
    }
  },
  {
    en: {
      title: 'Homeowner references',
      description:
        'Short quotes from private clients about cleanliness, planning and finish — the signals that decide who gets the kitchen job when prices are close.'
    },
    nl: {
      title: 'Referenties van particulieren',
      description:
        'Korte quotes van particuliere opdrachtgevers over netheid, planning en afwerking — de signalen die bepalen wie de keukenklus krijgt als de prijzen dicht bij elkaar liggen.'
    }
  },
  {
    en: {
      title: 'Realistic timelines on the site',
      description:
        'Honest ranges for survey, quote and typical start windows per job type — fewer calls from people who needed someone “tomorrow morning” for a full extension.'
    },
    nl: {
      title: 'Realistische doorlooptijden op de site',
      description:
        'Eerlijke bandbreedtes voor opname, offerte en typische start per klustype — minder belletjes van mensen die “morgenvroeg” een volledige uitbouw wilden.'
    }
  },
  {
    en: {
      title: 'Mobile on site and at home',
      description:
        'Fast load on site wifi and at the kitchen table: sticky “request a quote”, photo upload that works on a phone, and service pages readable with dusty thumbs.'
    },
    nl: {
      title: 'Mobiel op de bouw en thuis',
      description:
        'Snel laden op bouwplaats-wifi en aan de keukentafel: vaste “vraag een offerte”, foto-upload die op de telefoon werkt, en dienstenpagina’s leesbaar met stoffige duimen.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Discovery on the yard',
      description:
        'We map how jobs arrive today: Google, van branding, referrals and marketplace apps. We note which trades you take, minimum job size and where quote requests get lost between phone and WhatsApp.'
    },
    nl: {
      step: '01',
      title: 'Discovery op de werf',
      description:
        'We brengen in kaart hoe klussen nu binnenkomen: Google, busreclame, verwijzingen en klusapps. We noteren welke vakken je doet, minimale klusgrootte en waar offerteaanvragen tussen telefoon en WhatsApp blijven hangen.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Portfolio & quote architecture',
      description:
        'Structure splits project galleries by trade, service pages for renovation versus extension versus dormer, a quote form that asks for photos and size, and a clear catchment block — not one “About us” page hiding the work.'
    },
    nl: {
      step: '02',
      title: 'Portfolio- & offertestructuur',
      description:
        'Structuur scheidt projectgalerijen per vak, dienstenpagina’s voor verbouwing versus aanbouw versus dakkapel, een offerteformulier dat om foto’s en omvang vraagt, en een duidelijk werkgebiedblok — geen enkel “Over ons” dat het werk verstopt.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Design for trust on a phone',
      description:
        'Visual design puts finished work first: before/after pairs that read on a small screen, CTAs that say “Request a quote”, and room for VCA and warranty marks without looking like a flyer from 2012.'
    },
    nl: {
      step: '03',
      title: 'Design voor vertrouwen op de telefoon',
      description:
        'Visueel ontwerp zet opgeleverd werk voorop: voor/na-paren die op klein scherm leesbaar zijn, CTA’s die “Vraag een offerte aan” zeggen, en ruimte voor VCA- en garantiemerken zonder flyer-uit-2012-uitstraling.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, train, hand over',
      description:
        'We build the site, set the quote form and photo galleries, and train you or the office to add new projects after a kitchen handover — without calling a developer for every bathroom set.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, trainen, overdragen',
      description:
        'We bouwen de site, zetten offerteformulier en fotogalerijen klaar, en trainen jou of het kantoor om nieuwe projecten toe te voegen na een keukenoplevering — zonder developer voor elke badkamerset.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch & measure quote quality',
      description:
        'Launch tracks quote form starts, photo uploads and which service pages homeowners read before submitting. You see whether Google traffic brings kitchen and dormer jobs — not endless “can you hang a shelf” messages.'
    },
    nl: {
      step: '05',
      title: 'Live & offertekwaliteit meten',
      description:
        'Livegang volgt offertestarts, foto-uploads en welke dienstenpagina’s huiseigenaren lezen vóór ze indienen. Je ziet of Google-verkeer keuken- en dakkapelklussen brengt — geen eindeloze “kun je een plankje ophangen”-berichten.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Contractors',
    crumbCurrent: 'Website design for contractors',
    badge: 'Contractor websites',
    h1: 'Website design for contractors',
    heroSub:
      'A contractor website that turns homeowners into project enquiries — with before/after portfolios, a quote form that asks for the right job details, clear service areas and mobile paths that work on site and at the kitchen table. With 1,500+ completed projects, we know how trades businesses convert online.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'No portfolio online means the homeowner picks whoever shows their work',
    problemP1:
      'A couple planning a kitchen or dormer opens three tabs after dinner: vans they saw on the street, a neighbour tip, and whoever ranks for “bathroom renovation [town]”. Without recent before/after sets, a clear catchment and a quote form that asks for photos, they cannot judge finish quality — so the job goes to the contractor whose site already looks like a job file.',
    problemP2:
      'Contractors do not need a dentist intake form or a Funda-style listing feed. They need a digital yard: project galleries by trade, services split into renovation, extension, dormer and bathroom, certifications and insurance in view, and a form that filters jobs that are too small before you drive over. Miss that, and you pay in tyre-kicker calls and WhatsApp chats that never become priced work.',
    problemP3:
      'Marketplace apps and Facebook groups own a slice of demand, but your website is where you control the story: real timelines, the towns you cover, and proof from private clients — without paying a lead fee every time someone compares three quotes.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in a contractor website',
    featuresSub:
      'Every block serves a homeowner weighing who gets on their roof or in their kitchen — portfolio proof, quote intake, catchment and certifications — not a relabelled salon or clinic template.',
    processBadge: 'How we work',
    processHead: 'How a contractor website project runs',
    processSub:
      'From walking through how quotes arrive on the phone today to measuring which project pages and forms bring kitchen and dormer enquiries worth pricing.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why contractors trust us with their digital yard',
    whySub:
      'Trade-aware delivery: we plan around how private clients compare finish quality, catchments and quote clarity — not clinic intakes or dinner reservations.',
    whyItems: [
      {
        title: 'Trade-yard experience',
        desc: 'We design for before/after proof, quote filtering, VCA signals and the difference between a shelf job and a full extension enquiry.'
      },
      {
        title: 'Local catchment clarity',
        desc: 'Town and service pages wired so someone searching “dormer [city]” lands on work you actually do in that area — then can request a quote without bouncing to a marketplace.'
      },
      {
        title: 'Measurable quote quality',
        desc: 'We track form starts, photo uploads and service-page paths so you know the site fills the pipeline with jobs you can price.'
      },
      {
        title: 'One partner from site to search',
        desc: 'Website and portfolio first; local SEO and Google Ads when you need more regional demand — one team that has seen a dusty phone on a scaffold, not five suppliers who never opened a job folder.'
      }
    ],
    costsBadge: 'Scope',
    costsHead: 'What shapes the scope of a contractor website?',
    costsIntro:
      'Scope follows how many trades you publish, how deep the before/after library needs to go, whether quote forms must accept photo uploads, catchment complexity and whether you filter by minimum job size. Fixed deliverables after a short yard intake — not an open-ended build while crews are on site.',
    costsItems: [
      {
        title: 'Essential contractor site',
        desc: 'Homepage, services overview, project gallery, team or about, contact, catchment note and a clear quote CTA. Ideal for a single-trade firm that needs to look trustworthy beyond a Facebook page.'
      },
      {
        title: 'Portfolio-ready contractor site',
        desc: 'Everything in Essential, plus trade-split galleries, richer service pages (renovation, extension, dormer, bathroom), photo-capable quote forms, certifications block, homeowner references and analytics on quote starts. Built for firms that grow through owned enquiries.'
      },
      {
        title: 'Multi-crew or multi-trade brand',
        desc: 'Several crews, sub-brands or language variants with shared project libraries. Scoped after we map trades, catchments and who answers quotes day to day.'
      }
    ],
    costsNote:
      'We lock the build scope once we have seen your project photos, trades list and how quotes arrive today. Request a contractor website quote for a fixed deliverable list and launch plan — that is the next step when you want a figure tied to your yard, not a band published on this page.',
    siblingsBadge: 'Also for contractors',
    siblingsHead: 'Pair your website with local demand',
    siblingsSub:
      'A sharp portfolio only helps if homeowners in your towns can find you. These services bring regional search and paid demand to a site that can convert a kitchen or dormer enquiry.',
    siblingsCta: 'View service',
    hubLink: 'Back to contractor marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For projects outside the trades we offer broader website design. Contractor builds follow the process on this page.',
    ctaHeading: 'Ready for a website that wins project enquiries?',
    ctaSub:
      'Tell us your trades, typical job size and the towns you cover. We will propose a fixed scope for a site homeowners use when they shortlist who gets the renovation.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Aannemers & klusbedrijven',
    crumbCurrent: 'Website laten maken voor aannemers',
    badge: 'Aannemerswebsites',
    h1: 'Website laten maken voor aannemers',
    heroSub:
      'Een aannemerswebsite die huiseigenaren omzet in projectaanvragen — met voor/na-portfolio’s, een offerteformulier dat de juiste klusinfo uitvraagt, duidelijk werkgebied en mobiele paden die werken op de bouwplaats en aan de keukentafel. Met 1.500+ afgeronde projecten weten we hoe bouw- en klusbedrijven online converteren.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Zonder portfolio online kiest de huiseigenaar wie wél zijn werk toont',
    problemP1:
      'Een stel dat een keuken of dakkapel plant, opent na het eten drie tabbladen: busjes die ze in de straat zagen, een tip van de buren, en wie rankt op “badkamerrenovatie [plaats]”. Zonder recente voor/na-sets, duidelijk werkgebied en een offerteformulier dat om foto’s vraagt, kunnen ze afwerking niet beoordelen — dus gaat de klus naar de aannemer waarvan de site al als werkdossier oogt.',
    problemP2:
      'Aannemers hebben geen tandartsintake of Funda-achtige aanbodfeed nodig. Ze hebben een digitale werf nodig: projectgalerijen per vak, diensten uitgesplitst in verbouwing, aanbouw, dakkapel en badkamer, certificeringen en verzekering in beeld, en een formulier dat te kleine klussen filtert vóór je langsrijdt. Mis je dat, dan betaal je met shopbelletjes en WhatsApp-chats die nooit begrote opdrachten worden.',
    problemP3:
      'Klusapps en Facebookgroepen pakken een deel van de vraag, maar op je website bepaal jij het verhaal: echte doorlooptijden, gemeenten die je bedient, en bewijs van particuliere opdrachtgevers — zonder leadfee elke keer dat iemand drie offertes vergelijkt.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een website voor aannemers',
    featuresSub:
      'Elk blok dient een huiseigenaar die afweegt wie op het dak of in de keuken komt — portfoliobewijs, offerte-intake, werkgebied en certificeringen — geen herlabelde salon- of kliniektemplate.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een website-traject voor een aannemer verloopt',
    processSub:
      'Van doorlopen hoe offertes nu op de telefoon binnenkomen tot meten welke projectpagina’s en formulieren keuken- en dakkapelaanvragen opleveren die je wilt begroten.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom aannemers hun digitale werf aan ons toevertrouwen',
    whySub:
      'Vakbewuste oplevering: we plannen rond hoe particulieren afwerking, werkgebied en offertehelderheid vergelijken — geen kliniekintakes of dinerreserveringen.',
    whyItems: [
      {
        title: 'Ervaring vanaf de werf',
        desc: 'We ontwerpen voor voor/na-bewijs, offertefiltering, VCA-signalen en het verschil tussen een plankje ophangen en een uitbouw-aanvraag.'
      },
      {
        title: 'Helder lokaal werkgebied',
        desc: 'Plaats- en dienstenpagina’s zo gekoppeld dat iemand die “dakkapel [stad]” zoekt landt op werk dat je daar écht doet — en daarna een offerte kan aanvragen zonder terug te stuiteren naar een klusapp.'
      },
      {
        title: 'Meetbare offertekwaliteit',
        desc: 'We volgen formulierstarts, foto-uploads en paden via dienstenpagina’s, zodat je weet dat de site de pijplijn vult met klussen die je kunt begroten.'
      },
      {
        title: 'Één partner van site tot zoektocht',
        desc: 'Website en portfolio eerst; lokale SEO en Google Ads wanneer je meer regionale vraag nodig hebt — één team dat een stoffige telefoon op de steiger kent, geen vijf leveranciers die nooit een klusdossier openden.'
      }
    ],
    costsBadge: 'Scope',
    costsHead: 'Wat bepaalt de scope van een aannemerswebsite?',
    costsIntro:
      'Scope volgt hoeveel vakken je publiceert, hoe diep de voor/na-bibliotheek moet, of offerteforms foto-upload nodig hebben, complexiteit van het werkgebied en of je filtert op minimale klusgrootte. Vaste deliverables na een korte werfintake — geen open bouw terwijl ploegen op locatie staan.',
    costsItems: [
      {
        title: 'Essentiële aannemerssite',
        desc: 'Homepage, dienstenoverzicht, projectgalerij, team of over-ons, contact, werkgebiednotitie en een duidelijke offerte-CTA. Ideaal voor één vak dat online betrouwbaar wil ogen naast alleen een Facebookpagina.'
      },
      {
        title: 'Portfolioklare aannemerssite',
        desc: 'Alles uit Essential, plus galerijen per vak, rijkere dienstenpagina’s (verbouwing, aanbouw, dakkapel, badkamer), offerteforms met foto’s, certificeringenblok, particuliere referenties en analytics op offertestarts. Voor bedrijven die via owned aanvragen groeien.'
      },
      {
        title: 'Meerdere ploegen of merken',
        desc: 'Meerdere ploegen, submerken of taalvarianten met gedeelde projectbibliotheken. Scope nadat we vakken, werkgebied en wie offertes overdag oppakt in kaart hebben.'
      }
    ],
    costsNote:
      'We zetten de bouwscope vast zodra we je projectfoto’s, vakkenlijst en hoe offertes nu binnenkomen hebben gezien. Vraag een aannemerswebsite-offerte aan met vaste deliverables en lanceringsplan — dat is de volgende stap als je een bedrag wilt dat bij jouw werf past, geen band op deze pagina.',
    siblingsBadge: 'Ook voor aannemers',
    siblingsHead: 'Combineer je website met lokale vraag',
    siblingsSub:
      'Een scherp portfolio helpt alleen als huiseigenaren in jouw gemeenten je kunnen vinden. Deze diensten brengen regionale zoekvraag en later betaalde vraag naar een site die een keuken- of dakkapelaanvraag kan omzetten.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar aannemersmarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten de bouw bieden we breder webdesign. Aannemersbuilds volgen het proces op deze pagina.',
    ctaHeading: 'Klaar voor een website die projectaanvragen wint?',
    ctaSub:
      'Vertel je vakken, typische klusgrootte en gemeenten die je bedient. We stellen een vaste scope voor een site die huiseigenaren gebruiken wanneer ze kiezen wie de verbouwing krijgt.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function AannemersWebsiteLatenMaken() {
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
              <HardHat className="w-4 h-4" aria-hidden />
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
