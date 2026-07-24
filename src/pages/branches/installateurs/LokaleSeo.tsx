import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  MapPinned,
  MapPin,
  Phone,
  Search,
  Sparkles,
  Star,
  Sun,
  Wrench
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  MapPinned,
  Search,
  MapPin,
  Wrench,
  Phone,
  Star,
  Sun,
  CheckCircle2
] as const

const FEATURES = [
  {
    en: {
      title: 'GBP as a service-area business',
      description:
        'Google Business Profile set for the towns your vans cover — not a fake showroom pin — so someone searching “plumber near me” sees your catchment, call button and whether you take night faults.'
    },
    nl: {
      title: 'GBP als service-area business',
      description:
        'Google Bedrijfsprofiel voor de gemeenten die je bussen bedienen — geen nepshowroom-pin — zodat iemand die “loodgieter bij mij” zoekt jouw werkgebied, belknop en of je nachtstoringen doet ziet.'
    }
  },
  {
    en: {
      title: 'Keywords that win call-outs and installs',
      description:
        'We target “plumber [city]”, “emergency plumber [city]”, “heat pump installer [region]” and “electrician near me” — the phrases people type when heat fails or they shortlist an upgrade crew.'
    },
    nl: {
      title: 'Zoekwoorden die spoed en installatie winnen',
      description:
        'We mikken op “loodgieter [stad]”, “spoed loodgieter [stad]”, “warmtepomp installateur [regio]” en “elektricien bij mij in de buurt” — frasen die mensen typen als de warmte uitvalt of ze een upgradeteam shortlisten.'
    }
  },
  {
    en: {
      title: 'Town & catchment landing pages',
      description:
        'Local pages for places you actually drive to — so you compete for “electrician [town]” or “boiler repair [city]” without thin doorway spam across every postcode.'
    },
    nl: {
      title: 'Plaats- & werkgebiedpagina’s',
      description:
        'Lokale pagina’s voor plaatsen waar je écht heen rijdt — zodat je concurreert op “elektricien [plaats]” of “cv-storing [stad]” zonder dunne doorway-spam over elke postcode.'
    }
  },
  {
    en: {
      title: 'Install-specific service signals',
      description:
        'Separate local signals for boilers, heat pumps, solar, electrical work and drains — matched to trades you take — so Maps and organic clicks land on the right install story, not one vague “installation” blob.'
    },
    nl: {
      title: 'Installatiespecifieke dienstsignalen',
      description:
        'Aparte lokale signalen voor cv-ketels, warmtepompen, zonnepanelen, elektra en riool — gekoppeld aan vakken die je doet — zodat Maps- en organische klikken op het juiste installatieverhaal landen, geen vaag “installatie”-blok.'
    }
  },
  {
    en: {
      title: 'Call button and live availability in GBP',
      description:
        'Phone action, WhatsApp where useful, and up-to-date fault-service hours in the profile — because emergency searchers dial from the map pack before they ever open a website form.'
    },
    nl: {
      title: 'Belknop en actuele bereikbaarheid in GBP',
      description:
        'Belactie, WhatsApp waar nuttig, en actuele storingsuren in het profiel — want spoedzoekers bellen vanuit de Maps-pack vóór ze ooit een websiteformulier openen.'
    }
  },
  {
    en: {
      title: 'Reviews collected by job type',
      description:
        'Ask after a boiler repair, heat-pump install or electrical job with a short Google link — so your strip shows proof per trade, not only generic five-star fluff.'
    },
    nl: {
      title: 'Reviews verzamelen per klustype',
      description:
        'Vraag na een cv-reparatie, warmtepompinstallatie of elektraklus met een korte Google-link — zodat je strip bewijs per vak toont, niet alleen generieke vijf-sterren-fluff.'
    }
  },
  {
    en: {
      title: 'Seasonal and subsidy search patterns',
      description:
        'Winter boiler outages, summer cooling and heat-pump or solar searches driven by subsidy interest — we keep GBP posts and local pages aligned with when those queries spike in your region.'
    },
    nl: {
      title: 'Seizoens- en subsidiezoekgedrag',
      description:
        'Winterse cv-storingen, zomerse koeling en warmtepomp- of zonnepaneelzoekopdrachten door subsidie-interesse — we houden GBP-posts en lokale pagina’s in lijn met wanneer die queries in jouw regio pieken.'
    }
  },
  {
    en: {
      title: 'Citations that match your vans',
      description:
        'Directory and citation cleanup so name, phone and service towns stay consistent — fewer mixed signals that confuse Maps about where an installer without a shopfront actually works.'
    },
    nl: {
      title: 'Citations die bij je bussen passen',
      description:
        'Directory- en citation-opschoning zodat naam, telefoon en werkplaatsen consistent blijven — minder gemengde signalen die Maps verwarren over waar een installateur zonder winkelfront écht werkt.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Emergency and install visibility audit',
      description:
        'We check how you appear for “plumber [your city]”, “emergency plumber”, heat-pump and electrician + town queries, and the map pack against nearby vans. We also audit GBP as a service-area profile, call actions, hours, reviews and citation consistency.'
    },
    nl: {
      step: '01',
      title: 'Spoed- en installatiezichtbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op “loodgieter [jouw stad]”, “spoed loodgieter”, warmtepomp- en elektricien + plaats-queries en de kaartpack tegen buurtbussen. Ook GBP als service-area-profiel, belacties, uren, reviews en citation-consistentie.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Service-area GBP and keyword set',
      description:
        'We configure Google Business Profile for your radius of towns, then lock a trade + place keyword set tied to call-outs and installs you want — boilers, heat pumps, solar, electrical — not a single-pin shop setup.'
    },
    nl: {
      step: '02',
      title: 'Service-area GBP en zoekwoordenset',
      description:
        'We richten Google Bedrijfsprofiel in voor jouw straalgemeenten, en zetten een vak + plaats-zoekwoordenset vast gekoppeld aan spoedritten en installaties die je wilt — cv, warmtepomp, zonnepanelen, elektra — geen single-pin winkelnopzet.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Town and service-page plan',
      description:
        'We plan catchment and install-service landing pages as local SEO assets — distinct from a full website redesign on the installer website spoke, but aligned with how multi-town trades get found for faults and upgrades.'
    },
    nl: {
      step: '03',
      title: 'Plaats- en dienstenpaginaplan',
      description:
        'We plannen werkgebied- en installatiedienstenlandingspagina’s als lokale SEO-assets — los van een volledige websiteredesign op de installateurswebsite-spoke, maar afgestemd op hoe multi-plaatsvakken gevonden worden voor storingen en upgrades.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Reviews, hours and citations',
      description:
        'We launch post-job review habits by trade, keep fault-service hours accurate in GBP, and clean citations so directories do not contradict your phone number or service towns.'
    },
    nl: {
      step: '04',
      title: 'Reviews, uren en citations',
      description:
        'We starten reviewgewoontes na de klus per vak, houden storingsuren in GBP accuraat, en schonen citations zodat directories je telefoonnummer of werkplaatsen niet tegenspreken.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure calls, not vanity ranks',
      description:
        'Monthly reporting on map views, call and direction taps and shifts on plumber, electrician and heat-pump + town keywords — read as progress toward diary fill, without promising a permanent map-pack slot.'
    },
    nl: {
      step: '05',
      title: 'Meet belletjes, geen vanity-ranks',
      description:
        'Maandelijkse rapportage over kaartweergaven, bel- en route-taps en verschuivingen op loodgieter-, elektricien- en warmtepomp- + plaatszoekwoorden — gelezen als voortgang naar een volle agenda, zonder een vaste kaartpackplek te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Plumbers, electricians & installers',
    crumbCurrent: 'Local SEO for installers',
    badge: 'Installer local SEO',
    h1: 'Local SEO for installers',
    heroSub:
      'Get found when homeowners search “plumber [city]”, “emergency plumber”, “heat pump installer [region]” or “electrician near me” — with service-area Google Business Profile, call-ready map actions, town pages, install-specific keywords and review growth by job type. With 1,500+ completed projects, we know how vans win the local pack when heat fails.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in the map pack means the burst-pipe call goes elsewhere',
    problemP1:
      'Someone with a burst pipe or a cold house searches on their phone and calls one of the first three results in the Maps pack. If your Google Business Profile still looks like an empty shop pin, hides night hours or lacks reviews on boiler and electrical work, that tap goes to the next van — even if you could have been on site sooner.',
    problemP2:
      'Installer local search is urgency on mobile, multi-town catchments, trade + place intent and seasonal spikes — not a contractor renovation shortlist or a dentist “near me” booking race. Homeowners also research heat-pump and solar installers with subsidy-driven queries; those visitors need clear regional signals too, but they still start from Maps and local results.',
    problemP3:
      'Manufacturer lead portals and group buys own a slice of upgrade demand, but organic map visibility compounds every winter outage and every green-upgrade search. Without local SEO you keep hoping referrals fill the diary while the firm with a sharper call button and fresher job-type reviews owns the free discovery layer.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for installers',
    featuresSub:
      'Every deliverable serves homeowners searching trade + town under stress or for an install — service-area GBP, call actions, reviews by job type and catchment pages — not a relabelled contractor portfolio checklist.',
    processBadge: 'How we work',
    processHead: 'How an installer local SEO engagement runs',
    processSub:
      'From auditing how you appear for emergency and install queries across the towns you cover, to measuring call taps that become van jobs — including winter outage and subsidy-driven spikes.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why installers trust us with local findability',
    whySub:
      'Trade-aware local SEO for urgency and installs: service-area profiles, call-first map actions and reporting tied to diary fill — not a showroom or renovation-yard playbook.',
    whyItems: [
      {
        title: 'Call-out aware local focus',
        desc: 'We optimise for plumber, electrician and heat-pump + town intent across a catchment — including emergency phrases that send taps straight to the phone.'
      },
      {
        title: 'Service-area Maps expertise',
        desc: 'Google Business Profile without a fake shopfront, accurate fault hours, call buttons and photo proof that match how mobile installers win work.'
      },
      {
        title: 'Measurable call actions',
        desc: 'We track map impressions, phone taps and trade + town keyword movement — tied to jobs you can attend, not vanity map-rank promises.'
      },
      {
        title: 'One partner from Maps to the van',
        desc: 'Local SEO for your catchment first; installer website and later Google Ads when you need more regional demand — one team that has heard a phone ring in a cold hallway.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for installers',
    costsIntro:
      'Installer local SEO is ongoing GBP service-area work, town and install-service pages, keywords, call actions, citations and reviews by job type. Profile action lifts often appear within weeks; holding relevance for “plumber [city]” or “heat pump installer [region]” across a radius usually needs months. We share realistic call and enquiry trends, not guaranteed rankings.',
    costsItems: [
      {
        title: 'Foundation (one catchment)',
        desc: 'Service-area GBP overhaul, citation cleanup, call and hours setup, review process by trade and a town + install keyword set. Ideal when Maps still treats you like a shop with no radius or buried phone action.'
      },
      {
        title: 'Growth (competitive region)',
        desc: 'Ongoing monthly optimisation: town-page support, review replies, seasonal posts for winter faults or subsidy-driven upgrades, competitor monitoring, reporting on taps that lead to call-outs and surveys.'
      },
      {
        title: 'Wider multi-town coverage',
        desc: 'When you expand the radius or add vans, we structure towns and categories so new places do not cannibalise the core catchment or confuse Google about where you actually roll.'
      }
    ],
    costsNote:
      'Scope depends on how many towns you cover, which installs you publish and how incomplete GBP is as a service-area profile today. Request an installer local-SEO quote — we outline catchment setup, trade keywords and review cadence with honest timelines, without ranking guarantees.',
    siblingsBadge: 'Also for installers',
    siblingsHead: 'Pair local SEO with a call-ready site and later ads',
    siblingsSub:
      'Maps puts you on the shortlist when heat fails; these services turn that glance into a tap or install enquiry — and later paid demand when organic is not enough.',
    siblingsCta: 'View service',
    hubLink: 'Back to installer marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside the trades we offer broader local SEO. Installer engagements follow the process on this page.',
    ctaHeading: 'Ready to show up when the heating fails nearby?',
    ctaSub:
      'Tell us your radius, whether you take night call-outs and which installs you want to win. We scope service-area GBP, town pages and trade keywords with honest timelines.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Loodgieters, elektriciens & installateurs',
    crumbCurrent: 'Lokale SEO voor installateurs',
    badge: 'Lokale SEO voor installateurs',
    h1: 'Lokale SEO voor installateurs',
    heroSub:
      'Word gevonden wanneer huiseigenaren “loodgieter [stad]”, “spoed loodgieter”, “warmtepomp installateur [regio]” of “elektricien bij mij in de buurt” zoeken — met service-area Google Bedrijfsprofiel, belklare kaartacties, plaatspagina’s, installatiespecifieke zoekwoorden en reviewgroei per klustype. Met 1.500+ afgeronde projecten weten we hoe bussen de lokale pack winnen wanneer de warmte uitvalt.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in de Maps-pack betekent dat het lekkagebelletje elders belandt',
    problemP1:
      'Iemand met een gesprongen leiding of een koude woning zoekt op de telefoon en belt één van de eerste drie resultaten in de Maps-pack. Ziet je Google Bedrijfsprofiel eruit als een lege winkpin, verstopt het avonduren of mist het reviews op cv- en elektrawerk, dan gaat die tik naar het volgende busje — ook als jij sneller ter plaatse had kunnen zijn.',
    problemP2:
      'Lokaal installateurszoeken draait om urgentie op mobiel, multi-plaats werkgebied, vak + plaats-intentie en seizoenspieken — geen aannemers-verbouwshortlist of tandarts-“bij mij”-boekrace. Huiseigenaren onderzoeken ook warmtepomp- en zonnepaneelinstallateurs met subsidiegedreven queries; die bezoekers hebben ook heldere regiossignalen nodig, maar starten nog steeds bij Maps en lokale resultaten.',
    problemP3:
      'Fabrikantportalen en collectieve inkoop pakken een deel van de upgradevraag, maar organische kaartzichtbaarheid stapelt elke winterstoring en elke verduurzamingszoektocht. Zonder lokale SEO hoop je dat via-via de agenda vult terwijl het bedrijf met scherpere belknop en frissere klustype-reviews de gratis ontdekkingslaag bezit.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor installateurs',
    featuresSub:
      'Elke deliverable dient huiseigenaren die vak + plaats zoeken onder stress of voor een installatie — service-area GBP, belacties, reviews per klustype en werkgebiedpagina’s — geen herlabelde aannemersportfoliochecklist.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor installateurs verloopt',
    processSub:
      'Van een audit van hoe je verschijnt op spoed- en installatiequeries in de gemeenten die je dekt, tot meten van beltaps die busritten worden — inclusief winterstoringen en subsidiegedreven pieken.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom installateurs hun lokale vindbaarheid aan ons toevertrouwen',
    whySub:
      'Vakbewuste lokale SEO voor spoed en installatie: service-area-profielen, bel-eerst kaartacties en rapportage gekoppeld aan agenda-vulling — geen showroom- of verbouwwerf-playbook.',
    whyItems: [
      {
        title: 'Spoedbewuste lokale focus',
        desc: 'We optimaliseren voor loodgieter-, elektricien- en warmtepomp- + plaatsintentie over een verzorgingsgebied — inclusief spoedfrasen die taps direct naar de telefoon sturen.'
      },
      {
        title: 'Service-area Maps-expertise',
        desc: 'Google Bedrijfsprofiel zonder nepwinkel, accurate storingsuren, belknoppen en fotobewijs dat past bij hoe mobiele installateurs werk winnen.'
      },
      {
        title: 'Meetbare belacties',
        desc: 'We volgen kaartimpressies, telefoontaps en beweging op vak + plaatszoekwoorden — gekoppeld aan klussen die je kunt rijden, geen beloofde vanity-kaartrank.'
      },
      {
        title: 'Één partner van Maps tot de bus',
        desc: 'Eerst lokale SEO voor je verzorgingsgebied; installateurswebsite en later Google Ads wanneer je meer regionale vraag nodig hebt — één team dat een telefoon in een koude gang kent.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor installateurs',
    costsIntro:
      'Lokale SEO voor installateurs is doorlopend GBP service-area-werk, plaats- en installatiedienstenpagina’s, zoekwoorden, belacties, citations en reviews per klustype. Profielacties stijgen vaak binnen enkele weken; relevantie vasthouden op “loodgieter [stad]” of “warmtepomp installateur [regio]” over een straal vraagt meestal maanden. We delen realistische bel- en aanvraagtrends, geen gegarandeerde rankings.',
    costsItems: [
      {
        title: 'Foundation (één verzorgingsgebied)',
        desc: 'Service-area GBP-overhaul, citation-opschoning, bel- en urenopzet, reviewproces per vak en een plaats- + installatiezoekwoordenset. Ideaal wanneer Maps je nog als winkel zonder straal behandelt of de belactie verstopt.'
      },
      {
        title: 'Growth (concurrerende regio)',
        desc: 'Doorlopende maandelijkse optimalisatie: steun voor plaatspagina’s, reviewantwoorden, seizoensposts rond winterstoringen of subsidiegedreven upgrades, concurrentiemonitoring, rapportage op taps die tot spoedritten en opnames leiden.'
      },
      {
        title: 'Breder multi-plaats bereik',
        desc: 'Bij een grotere straal of extra bussen structureren we plaatsen en categorieën zodat nieuwe gemeenten het kerngebied niet kannibaliseren of Google niet verwarren over waar je écht rijdt.'
      }
    ],
    costsNote:
      'Scope hangt af van hoeveel plaatsen je dekt, welke installaties je publiceert en hoe incompleet GBP vandaag als service-area-profiel is. Vraag een lokale-SEO-offerte voor installateurs aan — we schetsen werkgebiedopzet, vakzoekwoorden en reviewritme met eerlijke planning, zonder rankinggaranties.',
    siblingsBadge: 'Ook voor installateurs',
    siblingsHead: 'Combineer lokale SEO met een belklare site en later ads',
    siblingsSub:
      'Maps zet je op de shortlist wanneer de warmte uitvalt; deze diensten maken van die blik een tap of installatieaanvraag — en later betaalde vraag wanneer organisch niet volstaat.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar installateursmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten de installatievakken bieden we bredere lokale SEO. Installateurstrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om zichtbaar te zijn als de verwarming in de buurt uitvalt?',
    ctaSub:
      'Vertel je straal, of je nachtritjes doet en welke installaties je wilt winnen. We scopen service-area GBP, plaatspagina’s en vakzoekwoorden met eerlijke doorlooptijden.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function InstallateursLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-installateurs'][locale]
  const installerSpokes = BRANCH_SPOKES.installateurs
  const siblings = installerSpokes.filter((spoke) =>
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
                industrySlug="installateurs"
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
