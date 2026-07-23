import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CalendarCheck,
  Camera,
  CheckCircle2,
  Gift,
  Instagram,
  ListOrdered,
  Scissors,
  Smartphone,
  Sparkles,
  Star,
  Users
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  CalendarCheck,
  ListOrdered,
  Camera,
  Users,
  Gift,
  Instagram,
  Smartphone,
  Star
] as const

const FEATURES = [
  {
    en: {
      title: 'Online booking 24/7',
      description:
        'Clients book a cut, colour or treatment after hours — service, stylist and time — without calling during a busy Saturday. Confirmations and reminders go out automatically to cut no-shows.'
    },
    nl: {
      title: 'Online afspraken boeken 24/7',
      description:
        'Klanten boeken knippen, kleuren of een behandeling buiten openingstijden — dienst, stylist en tijd — zonder te bellen op een drukke zaterdag. Bevestigingen en herinneringen gaan automatisch mee om no-shows te minderen.'
    }
  },
  {
    en: {
      title: 'Treatments & price list',
      description:
        'Clear pages for cutting, colouring, nails, skin care and packages with prices clients can scan before they book — no PDF flyer from three seasons ago buried in the footer.'
    },
    nl: {
      title: 'Behandelingen & prijslijst',
      description:
        'Duidelijke pagina’s voor knippen, kleuren, nagels, huidverzorging en pakketten met prijzen die klanten scannen vóór ze boeken — geen PDF-folder van drie seizoenen geleden in de footer.'
    }
  },
  {
    en: {
      title: 'Portfolio / before-after gallery',
      description:
        'Layouts built for hair and beauty work: colour transformations, cuts and nail sets that sell the chair before the client opens Instagram. Image sizes planned for speed without killing detail.'
    },
    nl: {
      title: 'Portfolio / before-after galerij',
      description:
        'Layouts voor kapsalon- en beautywerk: kleurtransformaties, cuts en nailsets die de stoel verkopen vóór de klant Instagram opent. Afbeeldingsformaten gepland voor snelheid zonder detail te verliezen.'
    }
  },
  {
    en: {
      title: 'Stylists & team pages',
      description:
        'Introduce each stylist or beauty specialist with specialties and booking links, so clients who follow someone on Instagram can book that person — not a random open slot.'
    },
    nl: {
      title: 'Stylisten & teampagina’s',
      description:
        'Stel elke stylist of beautyspecialist voor met specialiteiten en boeklinks, zodat klanten die iemand op Instagram volgen die persoon boeken — geen willekeurig open slot.'
    }
  },
  {
    en: {
      title: 'Gift vouchers',
      description:
        'Sell digital gift cards for cuts, colour packages or spa treatments — a revenue stream that does not depend on someone remembering to call the front desk at lunch.'
    },
    nl: {
      title: 'Cadeaubonnen verkopen',
      description:
        'Verkoop digitale cadeaubonnen voor knipbeurten, kleurpakketten of behandelingen — omzet die niet afhangt van iemand die op de lunchpauze de balie belt.'
    }
  },
  {
    en: {
      title: 'Instagram feed connection',
      description:
        'Surface recent salon work on the site so your feed and booking path stay in sync. Social proves the look; the website captures the appointment.'
    },
    nl: {
      title: 'Instagram-feed koppeling',
      description:
        'Toon recent salonwerk op de site zodat feed en boekpad synchroon blijven. Social bewijst de look; de website vangt de afspraak.'
    }
  },
  {
    en: {
      title: 'Mobile-first booking path',
      description:
        'Most salon bookings start on a phone between messages. The site loads fast, shows prices and keeps “Book now” sticky — no hunting through a Facebook page for the WhatsApp number.'
    },
    nl: {
      title: 'Mobiel-eerst boekpad',
      description:
        'De meeste salonboekingen starten op de telefoon tussen twee berichten. De site laadt snel, toont prijzen en houdt “Boek nu” vast — geen zoeken op Facebook naar het WhatsApp-nummer.'
    }
  },
  {
    en: {
      title: 'Reviews & social proof',
      description:
        'Highlight Google and client reviews next to booking CTAs. Trust matters when someone is choosing a new colourist after a move or a bad bleach experience elsewhere.'
    },
    nl: {
      title: 'Reviews & social proof',
      description:
        'Toon Google- en klantreviews naast boekings-CTA’s. Vertrouwen telt wanneer iemand een nieuwe colorist kiest na een verhuizing of een mislukte bleach elders.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Discovery in the salon',
      description:
        'We map how clients book today: phone, Instagram DMs, walk-ins and existing software. We note services, stylist capacity, peak hours and where appointments get lost after hours.'
    },
    nl: {
      step: '01',
      title: 'Discovery in de salon',
      description:
        'We brengen in kaart hoe klanten nu boeken: telefoon, Instagram-DM’s, inlopen en bestaande software. We noteren diensten, stylistcapaciteit, piekmomenten en waar afspraken buiten openingstijden verdwijnen.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Services & booking structure',
      description:
        'Site map mirrors how clients choose: cuts vs colour packages, stylist portfolios, gift cards and walk-in vs appointment rules. Every core service and “book with Emma” path gets its own clear entry — not one lumped price PDF.'
    },
    nl: {
      step: '02',
      title: 'Diensten- & boekingsstructuur',
      description:
        'De sitestructuur volgt hoe klanten kiezen: knippen versus kleurpakketten, stylistportfolio’s, cadeaubonnen en inlopen versus afspraak. Elke kerndienst en elk “boek bij Emma”-pad krijgt een eigen ingang — geen enkele prijs-PDF.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Design that sells the look',
      description:
        'Visual design that puts hair and beauty work first: typography that reads on a phone, CTAs that say “Book appointment”, and gallery layouts that show colour and cut detail.'
    },
    nl: {
      step: '03',
      title: 'Design dat de look verkoopt',
      description:
        'Visueel ontwerp met haar- en beautywerk voorop: typografie die leesbaar is op de telefoon, CTA’s die “Maak een afspraak” zeggen, en galerijlayouts die kleur- en cutdetail tonen.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, integrate, train',
      description:
        'We build the site, connect the booking tool you use, set gift vouchers and Instagram where relevant, and train the team to update the price list after a seasonal menu change.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, koppelen, trainen',
      description:
        'We bouwen de site, koppelen de boekingssoftware die jullie gebruiken, zetten cadeaubonnen en Instagram klaar waar relevant, en trainen het team om de prijslijst bij te werken na een seizoenswijziging.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch & measure bookings',
      description:
        'We track booking starts, gift-voucher purchases and which stylist pages get the last click before appointment. You see if Maps or Instagram fills Tuesday colour blocks — not traffic from people who only wanted to save a mood board.'
    },
    nl: {
      step: '05',
      title: 'Live & afspraken meten',
      description:
        'We meten boekingsstarts, cadeaubonverkopen en welke stylistpagina de laatste klik vóór afspraak krijgt. Je ziet of Maps of Instagram dinsdagkleurblokken vult — geen verkeer van mensen die alleen een moodboard wilden opslaan.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'social-media'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Hairdressers & beauty salons',
    crumbCurrent: 'Website design for hair & beauty salons',
    badge: 'Salon websites',
    h1: 'Website design for hair & beauty salons',
    heroSub:
      'A salon website that turns browsers into booked chairs — with 24/7 online booking, a clear price list, portfolio gallery and a mobile path built for clients who book on their phone, not generic brochure sites. With 1,500+ completed projects, we know how salons convert online.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'A weak salon website loses appointments before the chair is free',
    problemP1:
      'Someone scrolling for balayage at 22:30 compares price lists, recent before-after shots and whether they can book their favourite stylist — not message three salons on WhatsApp. Salons that live only in DMs or hide the booking link behind a Facebook tab lose the chair to the competitor whose Saturday slots are visible without a 15-minute chat.',
    problemP2:
      'Salons do not need a dentist intake form or a restaurant menu. They need a digital front desk: treatments and prices, stylist pages, a gallery that sells colour work, gift vouchers and a booking flow that works at 23:00 when someone finally decides on a cut. Miss that, and you pay in empty Tuesday slots and overloaded phones on Friday afternoon.',
    problemP3:
      'Instagram creates desire, but DMs do not scale and they do not send reminders. Your website is where you control booking, show the full price list and turn a Maps or social click into a confirmed appointment without a 15-minute chat for every fringe trim.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in a salon website',
    featuresSub:
      'Each feature ties to what clients decide in the chair mirror: stylist choice, before-after proof, Saturday slot — not rebranded “About us” filler for beauty.',
    processBadge: 'How we work',
    processHead: 'How a salon website project runs',
    processSub:
      'From the first walkthrough of your booking flow to measuring which services and stylists drive appointments.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why salons trust us with their digital front desk',
    whySub: 'Salon-aware delivery, local findability support and results you can count in the chair.',
    whyItems: [
      {
        title: 'Salon experience',
        desc: 'We design for peak Saturday booking, stylist preferences, colour consultations and the difference between walk-ins and planned colour days.'
      },
      {
        title: 'Local findability support',
        desc: 'Stylist and treatment URLs plus salon address markup so a “balayage near me” Maps visit can jump straight into the right booking slot.'
      },
      {
        title: 'Measurable bookings',
        desc: 'We track booking starts, completed appointments and gift-card sales so you know the website fills chairs.'
      },
      {
        title: 'Everything under one roof',
        desc: 'Website today; local SEO and social when the chair needs filling between colour days — one crew that knows your stylist pages and booking tool, not five vendors who never set foot in the salon.'
      }
    ],
    costsBadge: 'Investment',
    costsHead: 'What does a website for a hair or beauty salon cost?',
    costsIntro:
      'Scope depends on service count, stylist-level booking, portfolio size, gift vouchers and whether walk-ins and appointments share one agenda. Fixed deliverables after a short salon intake — no open-ended build while chairs are turning.',
    costsItems: [
      {
        title: 'Essential salon site',
        desc: 'Homepage, services and price list, team, contact, opening hours, location/map and a clear book or call CTA. Ideal for a single salon launching online properly.'
      },
      {
        title: 'Booking-ready salon site',
        desc: 'Everything in Essential, plus integrated online booking, richer portfolio, stylist booking paths, reviews and analytics on booking clicks. Built for salons that live on the agenda.'
      },
      {
        title: 'Multi-location or retail-heavy',
        desc: 'Multiple salons, gift vouchers, product retail or language variants. Scoped per brand after we map how clients book and buy.'
      }
    ],
    costsNote:
      'We lock scope once we know your treatment-list depth, booking software and portfolio needs. Ask for a salon website quote — fixed deliverables and go-live date, without extra rounds per stylist page. That quote is where the figure for your chairs lives.',
    siblingsBadge: 'Also for salons',
    siblingsHead: 'Pair your website with local growth',
    siblingsSub:
      'Fresh Instagram traffic is wasted if prices and stylist calendars are still buried in DMs. These services feed browsers to a site where they can pick a colourist and book before closing time.',
    siblingsCta: 'View service',
    hubLink: 'Back to salon marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For projects outside hair and beauty we offer broader website design. Salon builds follow the process on this page.',
    ctaHeading: 'Ready for a website that fills the chair?',
    ctaSub:
      'Tell us about your salon, services and how clients book today. We will propose a fixed scope for a site clients actually use.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Kappers & schoonheidssalons',
    crumbCurrent: 'Website laten maken voor kappers',
    badge: 'Salonwebsites',
    h1: 'Website laten maken voor kappers',
    heroSub:
      'Een salonwebsite die kijkers omzet in geboekte stoelen — met 24/7 online boeken, duidelijke prijslijst, portfoliogalerij en een mobiel pad voor klanten die op de telefoon boeken, geen generieke brochure. Met 1.500+ afgeronde projecten weten we hoe salons online converteren.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Een zwakke salonwebsite kost afspraken vóór de stoel vrij is',
    problemP1:
      'Iemand die om 22:30 naar balayage zoekt, vergelijkt prijslijsten, recente before-afters en of ze hun favoriete stylist kunnen boeken — niet drie salons via WhatsApp. Salons die alleen in DM’s leven of de boeklink achter Facebook verstoppen, verliezen de stoel aan de concurrent waar zaterdagslots zichtbaar zijn zonder kwartier chat.',
    problemP2:
      'Salons hebben geen tandartsintake of restaurantmenu nodig. Ze hebben een digitale balie nodig: behandelingen en prijzen, stylistpagina’s, een galerij die kleurwerk verkoopt, cadeaubonnen en een boekflow die om 23:00 werkt wanneer iemand eindelijk een knipbeurt plant. Mis je dat, dan betaal je met lege dinsdagslots en overvolle telefoons op vrijdagmiddag.',
    problemP3:
      'Instagram creëert zin, maar DM’s schalen niet en sturen geen herinneringen. Op je website bepaal jij de boeking, toon je de volle prijslijst en zet je een Maps- of socialklik om in een bevestigde afspraak — zonder 15 minuten chat voor elke ponyknip.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een website voor kappers & salons',
    featuresSub:
      'Elke feature hangt samen met wat klanten in de spiegel beslissen: stylistkeuze, before-after-bewijs, zaterdagslot — geen hernoemd “Over ons”-vulsel voor beauty.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een website-traject voor een salon verloopt',
    processSub:
      'Van de eerste doorloop van je boekflow tot meten welke diensten en stylisten afspraken opleveren.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom salons hun digitale balie aan ons toevertrouwen',
    whySub: 'Salonbewuste oplevering, steun voor lokale vindbaarheid en resultaten die je in de stoel telt.',
    whyItems: [
      {
        title: 'Salonervaring',
        desc: 'We ontwerpen voor piekboekingen op zaterdag, stylistvoorkeuren, kleurconsulten en het verschil tussen inlopen en geplande kleurdagen.'
      },
      {
        title: 'Steun voor lokale vindbaarheid',
        desc: 'Stylist- en behandel-URL’s plus salonadres-markup zodat een Maps-bezoek op “balayage bij mij” meteen in het juiste boekingsblok kan springen.'
      },
      {
        title: 'Meetbare boekingen',
        desc: 'We volgen boekingsstarts, voltooide afspraken en cadeaubonverkopen, zodat je weet dat de website stoelen vult.'
      },
      {
        title: 'Alles onder één dak',
        desc: 'Website nu; lokale SEO en social wanneer de stoel tussen kleurdagen leeg staat — één team dat je stylistpagina’s en boekingssoftware kent, geen vijf leveranciers die nooit in de salon zijn geweest.'
      }
    ],
    costsBadge: 'Investering',
    costsHead: 'Wat kost een website voor een kapsalon?',
    costsIntro:
      'De scope hangt af van aantal diensten, boeken per stylist, portfoliomvang, cadeaubonnen en of inlopen en afspraken één agenda delen. Vaste deliverables na een korte salonintake — geen open bouw terwijl de stoelen draaien.',
    costsItems: [
      {
        title: 'Essentiële salonsite',
        desc: 'Homepage, diensten en prijslijst, team, contact, openingstijden, locatie/kaart en een duidelijke boek- of bel-CTA. Ideaal voor één salon die online netjes wil starten.'
      },
      {
        title: 'Boekingsklare salonsite',
        desc: 'Alles uit Essential, plus geïntegreerd online boeken, rijker portfolio, boekpaden per stylist, reviews en analytics op boekingsklikken. Voor salons die op de agenda draaien.'
      },
      {
        title: 'Meerdere locaties of retailzwaar',
        desc: 'Meerdere salons, cadeaubonnen, productverkoop of taalvarianten. Scope per merk nadat we in kaart hebben hoe klanten boeken en kopen.'
      }
    ],
    costsNote:
      'We zetten de scope vast zodra behandellijstdiepte, boekingssoftware en portfoliobehoefte duidelijk zijn. Vraag een salonwebsite-offerte aan — vaste deliverables en livegang, zonder extra rondes per stylistpagina. In die offerte staat het bedrag voor jouw stoelen.',
    siblingsBadge: 'Ook voor salons',
    siblingsHead: 'Combineer je website met lokale groei',
    siblingsSub:
      'Vers Instagram-verkeer is zinloos als prijzen en stylistagenda’s nog in DM’s zitten. Deze diensten sturen browsers naar een site waar ze een colorist kiezen en boeken vóór sluitingstijd.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar salonmarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten hair & beauty bieden we breder webdesign. Salonbuilds volgen het proces op deze pagina.',
    ctaHeading: 'Klaar voor een website die de stoel vult?',
    ctaSub:
      'Vertel ons over je salon, diensten en hoe klanten nu boeken. We stellen een vaste scope voor een site die klanten écht gebruiken.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function KappersSchoonheidssalonsWebsiteLatenMaken() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-kappers-schoonheidssalons'][locale]
  const salonSpokes = BRANCH_SPOKES['kappers-schoonheidssalons']
  const siblings = salonSpokes.filter((spoke) =>
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
              <Scissors className="w-4 h-4" aria-hidden />
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
              <ListOrdered className="w-4 h-4" aria-hidden />
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

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-10 max-w-4xl mx-auto">
            {siblings.map((spoke) => (
              <BranchSpokeCard
                key={spoke.slug}
                industrySlug="kappers-schoonheidssalons"
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
