import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  Instagram,
  MapPin,
  Scissors,
  Search,
  Sparkles,
  Star,
  CalendarCheck
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  MapPin,
  Search,
  Scissors,
  Star,
  Camera,
  CalendarCheck,
  Clock,
  Instagram
] as const

const FEATURES = [
  {
    en: {
      title: 'Google Business Profile for salons',
      description:
        'Categories, attributes, services and a Book button tuned for hair and beauty — so people searching for a new colourist see hours, services and how to book, not a half-empty profile.'
    },
    nl: {
      title: 'Google Bedrijfsprofiel voor salons',
      description:
        'Categorieën, attributen, diensten en een Boek-knop afgestemd op hair & beauty — zodat mensen die een nieuwe colorist zoeken tijden, diensten en hoe ze boeken zien, geen halfleeg profiel.'
    }
  },
  {
    en: {
      title: 'Local keywords that fill the chair',
      description:
        'We target “hairdresser [city]”, “beauty salon [city]”, “nail studio near me” and neighbourhood phrases clients type when they move or need a last-minute cut — not generic “best SEO” keywords.'
    },
    nl: {
      title: 'Lokale zoekwoorden die de stoel vullen',
      description:
        'We mikken op “kapper [stad]”, “schoonheidssalon [stad]”, “nagelstudio bij mij in de buurt” en buurtfrases die klanten typen bij een verhuizing of last-minute knipbeurt — geen generieke “beste SEO”-termen.'
    }
  },
  {
    en: {
      title: 'Service + city keywords',
      description:
        'Intent around “balayage [city]”, “gel nails [city]”, keratin, brows and other treatments you actually offer — matched to real services, not thin doorway pages.'
    },
    nl: {
      title: 'Dienst- + stadszoekwoorden',
      description:
        'Intentie rond “balayage [stad]”, “gelnagels [stad]”, keratin, brows en andere behandelingen die jullie écht aanbieden — gekoppeld aan echte diensten, geen dunne doorway-pagina’s.'
    }
  },
  {
    en: {
      title: 'Review generation (critical in beauty)',
      description:
        'In hair and beauty, stars often decide the chair. We set up ethical request habits after colour or nail appointments and reply frameworks that protect your rating without sounding pushy.'
    },
    nl: {
      title: 'Reviews verzamelen (cruciaal in beauty)',
      description:
        'In hair & beauty beslissen sterren vaak over de stoel. We zetten ethische verzoekgewoontes op na kleur- of nagelafspraken en antwoordkaders die je rating beschermen zonder pushy te klinken.'
    }
  },
  {
    en: {
      title: 'Result photos in Google',
      description:
        'Fresh before-after and finish shots in Google Business Profile — not stock hair. Clients choose where to sit from the photo strip before they open your website or Instagram.'
    },
    nl: {
      title: 'Resultaatfoto’s in Google',
      description:
        'Verse before-after- en eindresultaatfoto’s in Google Bedrijfsprofiel — geen stockhaar. Klanten kiezen waar ze gaan zitten vanuit de fotostrip vóór ze je website of Instagram openen.'
    }
  },
  {
    en: {
      title: 'Book button & Maps pack',
      description:
        'Visibility in the local pack with a clear Book or call action so a map tap becomes an appointment intent — not a dead-end listing without hours or booking.'
    },
    nl: {
      title: 'Boek-knop & Maps-pack',
      description:
        'Zichtbaarheid in de local pack met een duidelijke Boek- of belactie, zodat een kaarttik boekingsintentie wordt — geen doodlopende vermelding zonder tijden of boeking.'
    }
  },
  {
    en: {
      title: 'Opening hours that match the floor',
      description:
        'Late nights, Saturday peaks and holiday closures kept current in Google so clients do not arrive to a closed door — a ranking and reputation killer for salons.'
    },
    nl: {
      title: 'Openingstijden die kloppen met de vloer',
      description:
        'Late avonden, zaterdagpieken en feestdagen actueel in Google, zodat klanten niet voor een gesloten deur staan — funest voor ranking én reputatie bij salons.'
    }
  },
  {
    en: {
      title: 'Instagram as a local discovery channel',
      description:
        'We align local SEO with how beauty clients discover salons on Instagram: NAP consistency, name matching and a clear path from social discovery to Google booking — without replacing a full social retainer.'
    },
    nl: {
      title: 'Instagram als lokaal ontdekkingskanaal',
      description:
        'We stemmen lokale SEO af op hoe beautyklanten salons ontdekken op Instagram: consistente NAP, naammatching en een duidelijk pad van social ontdekking naar Google-boeking — zonder een volledig social-retainer te vervangen.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Local visibility audit',
      description:
        'We check how you appear for “hairdresser [your city]”, beauty and nail near-me queries, service + city terms and the map pack against nearby salons. We also audit GBP completeness, hours, result photos, services and review velocity.'
    },
    nl: {
      step: '01',
      title: 'Lokale zichtbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op “kapper [jouw stad]”, beauty- en nagel bij-mij-queries, dienst + stad-termen en de kaartpack tegen buurtsalons. Ook GBP-volledigheid, tijden, resultaatfoto’s, diensten en reviewtempo.'
    }
  },
  {
    en: {
      step: '02',
      title: 'GBP & keyword foundation',
      description:
        'We optimise Google Business Profile for salon categories, services and Book actions, then lock a city/neighbourhood and treatment keyword set tied to the chairs you want to fill.'
    },
    nl: {
      step: '02',
      title: 'GBP- & zoekwoordfundament',
      description:
        'We optimaliseren Google Bedrijfsprofiel voor saloncategorieën, diensten en Boek-acties, en zetten een stad-/wijk- en behandelzoekwoordenset vast gekoppeld aan de stoelen die je wilt vullen.'
    }
  },
  {
    en: {
      step: '03',
      title: 'On-site local signals',
      description:
        'Treatment and neighbourhood cues on-site so “balayage [city]” Maps clicks match the booking path on your site — coordination work, not a full salon redesign.'
    },
    nl: {
      step: '03',
      title: 'On-site lokale signalen',
      description:
        'Behandel- en buurtsignalen on-site zodat Maps-klikken op “balayage [stad]” aansluiten op je boekingspad — afstemming, geen volledige salonredesign.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Reviews, result photos & citations',
      description:
        'We launch post-appointment review habits, a photo refresh cadence for colour and nail results, and citation cleanup so directories do not contradict your salon hours or services.'
    },
    nl: {
      step: '04',
      title: 'Reviews, resultaatfoto’s & citations',
      description:
        'We starten reviewgewoontes na afspraken, een fotoverversingsritme voor kleur- en nagelresultaten, en citation-opschoning zodat directories je salontijden of diensten niet tegenspreken.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure bookings, not vanity',
      description:
        'Monthly reporting on map views, Book/call/direction actions and balayage, gel-nail and “kapper [city]” keyword shifts — read as progress toward chair bookings and Saturday fill, without claiming a fixed map-pack rank.'
    },
    nl: {
      step: '05',
      title: 'Meet boekingen, geen vanity',
      description:
        'Maandelijkse rapportage over kaartweergaven, Boek/bel/route-acties en verschuivingen op balayage-, gelnagel- en “kapper [stad]”-zoekwoorden — gelezen als voortgang naar stoelboekingen en zaterdagvulling, zonder een vaste kaartrank te claimen.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'social-media'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Hairdressers & beauty salons',
    crumbCurrent: 'Local SEO for hair & beauty salons',
    badge: 'Salon local SEO',
    h1: 'Local SEO for hair & beauty salons',
    heroSub:
      'Get found when new clients search Google Maps and “hairdresser near me” — with Google Business Profile optimisation, result photos, review growth and treatment keywords that fill the chair. With 1,500+ completed projects, we know how salons win locally.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in local search means nearby salons fill first',
    problemP1:
      'When someone searches “balayage Utrecht” or “gel nails Saturday near me”, Google shows three salons in the map pack before Instagram loads. A GBP without result photos, Saturday hours or a working Book button sends that chair booking to the salon with fresher colour shots — even if your technique is stronger.',
    problemP2:
      'Salon local search mixes service + city queries, Saturday peak hours, before-after photos and the path from Instagram discovery back to a bookable Maps listing. A dentist’s “new patients accepting” signals or a makelaar’s district landing pages solve different problems — beauty clients pick from stars and finish shots in the photo strip.',
    problemP3:
      'Paid ads and boosted posts can buy short-term attention, but organic map visibility compounds every time someone searches after a move, a wedding or a bad bleach experience. Without local SEO, you keep paying for clicks while the salon with more recent reviews and better result photos owns the pack.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for salons',
    featuresSub:
      'Each deliverable serves clients searching balayage, gel nails and “kapper [city]” — result photos, Book actions and Saturday-ready hours, not a renamed salon checklist.',
    processBadge: 'How we work',
    processHead: 'How a salon local SEO engagement runs',
    processSub:
      'From auditing the map pack around your street to measuring calls, routes and booking clicks that fill chairs.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why salons trust us with local findability',
    whySub: 'Salon-aware local SEO: service + city keywords, result photos and reporting tied to chair bookings — especially on Saturday peaks.',
    whyItems: [
      {
        title: 'Beauty local focus',
        desc: 'We optimise for hairdresser + city, beauty and nail searches and treatment intent — not generic “near me” playbooks from clinics or hospitality.'
      },
      {
        title: 'Maps & GBP expertise',
        desc: 'Google Business Profile, result photos, hours and Book actions treated as the front door of local discovery for salons.'
      },
      {
        title: 'Measurable client actions',
        desc: 'We track map impressions, Book and call actions, direction requests and service-keyword clicks — read against chair bookings and Saturday fill, not vanity rankings.'
      },
      {
        title: 'Everything under one roof',
        desc: 'Local SEO for your salon first; salon website and social when you need more Saturday chairs filled — one team from Instagram scroll to Google Book click.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for salons',
    costsIntro:
      'Salon local SEO means fresh result photos, review cadence after colour and nail appointments, and service + city terms — especially around Saturday peaks. GBP action lifts often appear within weeks; competing for “balayage [city]” in a busy high street takes months. We plan for chair bookings, not promised pack slots.',
    costsItems: [
      {
        title: 'Foundation (single salon)',
        desc: 'GBP overhaul, hours/services/Book setup, citation cleanup, review process and a neighbourhood plus treatment keyword set. Ideal for one location that needs to appear properly in Maps first.'
      },
      {
        title: 'Growth (competitive area)',
        desc: 'Ongoing monthly optimisation: result-photo cadence, review replies, local content for city and service intent, competitor monitoring and reporting on profile actions that lead to bookings.'
      },
      {
        title: 'Multi-location salons',
        desc: 'A colour bar downtown and a neighbourhood cut shop get separate GBPs, hours and result-photo streams so Saturday seekers land on the right chair.'
      }
    ],
    costsNote:
      'Scope depends on services offered, locations and how much GBP needs result-photo and Book setup. Request a salon local-SEO quote — we outline treatment keywords, Instagram-to-Maps alignment and review habits with honest timelines, without ranking guarantees.',
    siblingsBadge: 'Also for salons',
    siblingsHead: 'Pair local SEO with conversion and social',
    siblingsSub:
      'Maps puts your salon on the shortlist when someone searches a treatment; these services turn that glance into a booked chair and Instagram-quality proof in Google.',
    siblingsCta: 'View service',
    hubLink: 'Back to salon marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside hair and beauty we offer broader local SEO. Salon engagements follow the process on this page.',
    ctaHeading: 'Ready to show up when new clients search nearby?',
    ctaSub:
      'Share your city, top treatments and how clients book — walk-in, app or Instagram DM. We scope GBP result photos, service keywords and Saturday peak visibility with honest timelines.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Kappers & schoonheidssalons',
    crumbCurrent: 'Lokale SEO voor kappers',
    badge: 'Lokale SEO voor kappers',
    h1: 'Lokale SEO voor kappers',
    heroSub:
      'Word gevonden wanneer nieuwe klanten Google Maps en “kapper bij mij in de buurt” openen — met Google Bedrijfsprofiel-optimalisatie, resultaatfoto’s, reviewgroei en behandelzoekwoorden die de stoel vullen. Met 1.500+ afgeronde projecten weten we hoe salons lokaal winnen.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in lokaal zoeken betekent dat buurtsalons eerst vol raken',
    problemP1:
      'Als iemand “balayage Utrecht” of “gelnagels zaterdag bij mij” zoekt, toont Google drie salons in de kaartpack vóór Instagram laadt. Een GBP zonder resultaatfoto’s, zaterdagtijden of werkende Boek-knop stuurt die stoelboeking naar de salon met frissere kleurfoto’s — ook als jouw techniek sterker is.',
    problemP2:
      'Lokaal salonzoeken mengt dienst- + stadqueries, zaterdagpieken, before-afterfoto’s en het pad van Instagram-ontdekking terug naar een boekbare Maps-vermelding. De “nieuwe patiënten”-signalen van een tandarts of wijklandingspagina’s van een makelaar lossen andere problemen op — beautyklanten kiezen op sterren en eindresultaten in de fotostrip.',
    problemP3:
      'Betaalde ads en boosted posts kopen kortetermijnaandacht, maar organische kaartzichtbaarheid stapelt elke keer dat iemand zoekt na een verhuizing, een bruiloft of een mislukte bleach — vaak op vrijdagavond voor een zaterdagblok. Zonder lokale SEO blijf je betalen voor klikken terwijl de salon met recentere reviews, betere resultaatfoto’s in de fotostrip en een werkende Boek-knop de pack bezit wanneer Instagram-volgers alsnog “kapper bij mij” googelen.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor kappers & salons',
    featuresSub:
      'Elke deliverable dient klanten die balayage, gelnagels en “kapper [stad]” zoeken — resultaatfoto’s, Boek-acties en zaterdagklare tijden, geen hernoemde salonchecklist. We denken vanuit stoelplanning en stylistportfolio’s, niet vanuit een generieke retail-GBP — zodat Maps-tiks naar geboekte stoelen leiden.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor salons verloopt',
    processSub:
      'Van een audit van de kaartpack rond jouw straat tot meten van belacties, routes en Boek-klikken die stoelen vullen — inclusief hoe Instagram-ontdekking terugkomt in een boekbare Maps-vermelding met resultaatfoto’s die bij balayage of gelnagels passen.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom salons hun lokale vindbaarheid aan ons toevertrouwen',
    whySub:
      'Salonbewuste lokale SEO: dienst- + stadzoekwoorden, resultaatfoto’s en rapportage gekoppeld aan stoelboekingen — vooral rond zaterdagpieken en bruiloftsperiodes wanneer de agenda het hardst loopt.',
    whyItems: [
      {
        title: 'Focus op beauty lokaal',
        desc: 'We optimaliseren voor kapper + stad, beauty- en nagelzoekopdrachten en behandelintentie — geen generieke “bij mij”-playbooks uit klinieken of horeca.'
      },
      {
        title: 'Maps- & GBP-expertise',
        desc: 'Google Bedrijfsprofiel, resultaatfoto’s, tijden en Boek-acties als voordeur van lokale ontdekking voor salons.'
      },
      {
        title: 'Meetbare klantacties',
        desc: 'We volgen kaartimpressies, Boek- en belacties, routeverzoeken en klikken op dienstzoekwoorden — afgezet tegen stoelboekingen en zaterdagvulling, niet vanity-rankings.'
      },
      {
        title: 'Alles onder één dak',
        desc: 'Eerst lokale SEO voor je salon; salonwebsite en social wanneer je meer zaterdagstoelen gevuld wilt — één team van Instagram-scroll tot Google Boek-klik.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor salons',
    costsIntro:
      'Lokale SEO voor salons betekent verse resultaatfoto’s, reviewritme na kleur- en nagelafspraken en dienst- + stadtermen — rond zaterdagpieken en bruiloftsperiodes. GBP-acties stijgen vaak binnen enkele weken; concurreren op “balayage [stad]” of “gelnagels [wijk]” in een drukke winkelstraat vraagt maanden consistent fotowerk. We plannen op stoelboekingen en herbezoek, niet op beloofde packplekken.',
    costsItems: [
      {
        title: 'Foundation (één salon)',
        desc: 'GBP-overhaul, tijden/diensten/Boek, citation-opschoning, reviewproces en een wijk- plus behandelzoekwoordenset. Ideaal voor één locatie die eerst fatsoenlijk in Maps moet staan.'
      },
      {
        title: 'Growth (concurrerende buurt)',
        desc: 'Doorlopende maandelijkse optimalisatie: resultaatfotoritme, reviewantwoorden, lokale content voor stads- en dienstintentie, concurrentiemonitoring en rapportage op profielacties die tot boekingen leiden.'
      },
      {
        title: 'Meerdere locaties',
        desc: 'Een colour bar in het centrum en een knipzaak in de wijk krijgen eigen GBP’s, tijden en resultaatfoto-streams, zodat zaterdagzoekers op de juiste stoel landen.'
      }
    ],
    costsNote:
      'Scope hangt af van diensten, locaties en hoeveel GBP resultaatfoto- en Boek-setup nodig heeft. Vraag een lokale-SEO-offerte voor salons aan — we schetsen behandelzoekwoorden, Instagram-naar-Maps-afstemming en reviewgewoontes met eerlijke planning, zonder rankinggaranties.',
    siblingsBadge: 'Ook voor salons',
    siblingsHead: 'Combineer lokale SEO met conversie en social',
    siblingsSub:
      'Maps zet je salon op de shortlist wanneer iemand een behandeling zoekt; deze diensten maken van die blik een geboekte stoel en Instagram-waardig bewijs in Google.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar salonmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten hair & beauty bieden we bredere lokale SEO. Salontrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om te verschijnen wanneer nieuwe klanten in de buurt zoeken?',
    ctaSub:
      'Deel je stad, toptreatments en hoe klanten boeken — inlopen, app of Instagram-DM. We scopen GBP-resultaatfoto’s, dienstzoekwoorden en zichtbaarheid rond zaterdagpieken met eerlijke doorlooptijden.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function KappersSchoonheidssalonsLokaleSeo() {
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
