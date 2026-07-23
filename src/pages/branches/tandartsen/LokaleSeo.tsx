import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  Clock,
  MapPin,
  Search,
  Sparkles,
  Star,
  Stethoscope,
  UserPlus
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  MapPin,
  Search,
  Star,
  UserPlus,
  Camera,
  Clock,
  Building2,
  Stethoscope
] as const

const FEATURES = [
  {
    en: {
      title: 'Google Business Profile for dental practices',
      description:
        'Categories, attributes, services and a Book appointment action tuned for dentistry — so people searching for a new dentist see opening hours, whether you accept patients and how to call, not a half-empty profile.'
    },
    nl: {
      title: 'Google Bedrijfsprofiel voor tandartspraktijken',
      description:
        'Categorieën, attributen, diensten en een Maak-afspraak-actie afgestemd op tandheelkunde — zodat mensen die een nieuwe tandarts zoeken openingstijden, of jullie patiënten aannemen en hoe ze bellen zien, geen halfleeg profiel.'
    }
  },
  {
    en: {
      title: 'Local keywords that fill the agenda',
      description:
        'We target “dentist [city]”, “dentist near me”, “dentist accepting new patients [city]” and neighbourhood phrases movers actually type — not generic “best SEO” keywords that never become registrations.'
    },
    nl: {
      title: 'Lokale zoekwoorden die de agenda vullen',
      description:
        'We mikken op “tandarts [stad]”, “tandarts bij mij in de buurt”, “nieuwe patiënten aannemen [stad]” en buurtfrases die verhuizers echt typen — geen generieke “beste SEO”-termen die nooit inschrijvingen worden.'
    }
  },
  {
    en: {
      title: 'Google Maps & local pack',
      description:
        'Visibility in the map pack when someone needs a dentist nearby. NAP consistency, pin accuracy and signals that help your practice appear next to competing practices in the same district.'
    },
    nl: {
      title: 'Google Maps & local pack',
      description:
        'Zichtbaarheid in de kaartpack wanneer iemand een tandarts in de buurt nodig heeft. Consistente NAP, juiste pin en signalen die jouw praktijk naast concurrerende praktijken in dezelfde wijk laten verschijnen.'
    }
  },
  {
    en: {
      title: 'Patient review generation & replies',
      description:
        'A steady stream of Google reviews is how new patients choose a practice after moving. We set up ethical request habits after check-ups and reply frameworks that protect your rating without pressure that feels clinical.'
    },
    nl: {
      title: 'Patiëntreviews verzamelen & beantwoorden',
      description:
        'Een gestage stroom Google-reviews is hoe nieuwe patiënten een praktijk kiezen na een verhuizing. We zetten ethische verzoekgewoontes na controles op en antwoordkaders die je rating beschermen zonder druk die klinisch voelt.'
    }
  },
  {
    en: {
      title: 'Practice photos that build trust',
      description:
        'Team, treatment room and reception photos in Google Business Profile — not stock smiles. Anxious patients and parents often decide from the photo strip before they open your website.'
    },
    nl: {
      title: 'Praktijkfoto’s die vertrouwen wekken',
      description:
        'Team-, behandelkamer- en baliefoto’s in Google Bedrijfsprofiel — geen stockglimlachen. Angstige patiënten en ouders beslissen vaak vanuit de fotostrip vóór ze je website openen.'
    }
  },
  {
    en: {
      title: 'Hours, holidays & emergency signals',
      description:
        'Clinic hours, holiday closures and, where relevant, emergency or on-call notes kept current in Google so patients in pain do not call a closed practice — or assume you never take urgent cases.'
    },
    nl: {
      title: 'Openingstijden, feestdagen & spoedsignalen',
      description:
        'Praktijktijden, feestdagen en waar relevant spoed- of nooddienstnotities actueel in Google, zodat patiënten met pijn niet een gesloten praktijk bellen — of aannemen dat jullie nooit spoed aannemen.'
    }
  },
  {
    en: {
      title: 'Multi-practitioner & multi-location signals',
      description:
        'When you have several dentists, hygienists or sites, we structure profiles and local pages so each catchment ranks cleanly — without one address stealing visibility from another.'
    },
    nl: {
      title: 'Meerdere behandelaars & locaties',
      description:
        'Bij meerdere tandartsen, mondhygiënisten of vestigingen structureren we profielen en lokale pagina’s zodat elk verzorgingsgebied schoon rankt — zonder dat één adres zichtbaarheid van een ander steelt.'
    }
  },
  {
    en: {
      title: 'Insurance & treatment intent keywords',
      description:
        'Where it fits your offer: local queries around implants, children’s dentistry, emergency dentist and insurance/reimbursement phrasing — aligned to pages that convert, not thin doorway content.'
    },
    nl: {
      title: 'Verzekering- & behandelintentie-zoekwoorden',
      description:
        'Waar het bij jullie aanbod past: lokale queries rond implantaten, kindertandheelkunde, spoedtandarts en verzekering/vergoeding — gekoppeld aan pagina’s die converteren, geen dunne doorway-content.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Local visibility audit',
      description:
        'We check how you appear for “dentist [your city]”, near-me queries, “accepting new patients” and the map pack against nearby practices. We also audit GBP completeness, hours, photos, Q&A and review velocity.'
    },
    nl: {
      step: '01',
      title: 'Lokale zichtbaarheidsaudit',
      description:
        'We checken hoe je verschijnt op “tandarts [jouw stad]”, bij-mij-queries, “nieuwe patiënten aannemen” en de kaartpack tegen buurtpraktijken. Ook GBP-volledigheid, tijden, foto’s, Q&A en reviewtempo.'
    }
  },
  {
    en: {
      step: '02',
      title: 'GBP & keyword foundation',
      description:
        'We optimise Google Business Profile for dental categories, services and booking actions, then lock a city/neighbourhood keyword set tied to the new-patient and treatment intent you want to win.'
    },
    nl: {
      step: '02',
      title: 'GBP- & zoekwoordfundament',
      description:
        'We optimaliseren Google Bedrijfsprofiel voor tandheelkundige categorieën, diensten en boekingsacties, en zetten een stad-/wijkzoekwoordenset vast gekoppeld aan de nieuw-patiënt- en behandelintentie die je wilt winnen.'
    }
  },
  {
    en: {
      step: '03',
      title: 'On-site local signals',
      description:
        'We align address, phone and DentalLocalBusiness markup so Google trusts the same practice patients see on your site — light on-page work, not a full redesign (that is the dentist website spoke).'
    },
    nl: {
      step: '03',
      title: 'On-site lokale signalen',
      description:
        'We stemmen adres, telefoon en DentalLocalBusiness-markup af zodat Google dezelfde praktijk vertrouwt die patiënten op je site zien — lichte on-page steun, geen volledige redesign (dat is de tandartswebsite-spoke).'
    }
  },
  {
    en: {
      step: '04',
      title: 'Reviews, photos & citations',
      description:
        'We launch post-appointment review habits, a photo refresh cadence for team and rooms, and citation cleanup so directories do not contradict your clinic hours or “new patients” status.'
    },
    nl: {
      step: '04',
      title: 'Reviews, foto’s & citations',
      description:
        'We starten reviewgewoontes na afspraken, een fotoverversingsritme voor team en kamers, en citation-opschoning zodat directories je praktijktijden of “nieuwe patiënten”-status niet tegenspreken.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Measure registrations, not vanity',
      description:
        'Monthly reporting on map views, call and Book actions, direction requests and dentist + city keyword shifts — read as progress toward new-patient enquiries and filled agenda blocks, without promising a fixed map-pack rank.'
    },
    nl: {
      step: '05',
      title: 'Meet inschrijvingen, geen vanity',
      description:
        'Maandelijkse rapportage over kaartweergaven, bel- en Boek-acties, routeverzoeken en verschuivingen op tandarts- + stadzoekwoorden — gelezen als voortgang naar nieuw-patiëntaanvragen en gevulde agendablokken, zonder een vaste kaartrank te beloven.'
    }
  }
] as const

const SIBLING_SLUGS = ['website-laten-maken', 'google-ads', 'social-media'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Dentists',
    crumbCurrent: 'Local SEO for dentists',
    badge: 'Dental local SEO',
    h1: 'Local SEO for dentists',
    heroSub:
      'Get found when new patients search Google Maps and “dentist near me” — with Google Business Profile optimisation, patient review growth and city keywords that fill the agenda. With 1,500+ completed projects, we know how practices win locally.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'Invisible in local search means nearby practices fill first',
    problemP1:
      'When a mover searches “dentist accepting new patients Amsterdam” or “emergency dentist near me”, Google shows three practices in the map pack first. A half-finished GBP, no Book action or fewer recent post-treatment reviews sends those registrations to the practice that looks open and trustworthy — even if your chair-side care is stronger.',
    problemP2:
      'Dental local search turns on “dentist near me”, new-patient availability, post-check-up review habits and a Book button that works on mobile. Restaurant diners choosing by cuisine photos or sellers comparing estate agents by district pages follow different paths — your practice needs clinical trust signals, not their templates.',
    problemP3:
      'Paid ads can buy short-term new-patient traffic, but organic map visibility compounds month after month as people move into your catchment. Without local SEO, you keep paying for clicks while the practice with fresher photos and more recent reviews owns the pack.',
    featuresBadge: 'What we do',
    featuresHead: 'What is included in local SEO for dentists',
    featuresSub:
      'Each item targets people searching for a dentist in your city — new-patient intent, Book actions, post-treatment reviews — not a relabelled generic local SEO package.',
    processBadge: 'How we work',
    processHead: 'How a dental local SEO engagement runs',
    processSub:
      'From auditing the map pack around your street to measuring calls, routes and website clicks that lead to registrations.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why dental practices trust us with local findability',
    whySub: 'Dental local SEO built around new-patient search, Book actions and agenda fill you can trace to map-driven registrations.',
    whyItems: [
      {
        title: 'Dental local focus',
        desc: 'We optimise for dentist + city, new-patient and emergency-intent searches — not generic “near me” playbooks from hospitality or retail.'
      },
      {
        title: 'Maps & GBP expertise',
        desc: 'We treat your Google profile like the reception desk online: correct dentist categories, new-patient notes, fresh surgery photos and a Book path that matches how you actually take registrations.'
      },
      {
        title: 'Measurable patient actions',
        desc: 'We track map impressions, call and Book actions, direction requests and review velocity after check-ups — tied to new-patient registrations, not keyword charts alone.'
      },
      {
        title: 'Everything under one roof',
        desc: 'Local SEO for your practice first; practice website, Google Ads and social when you need more new-patient flow — one team from map search to booked chair time.'
      }
    ],
    costsBadge: 'Timeframe & expectations',
    costsHead: 'What to expect from local SEO for dentists',
    costsIntro:
      'Dental local SEO is ongoing GBP, review and new-patient keyword work — especially after team changes or catchment shifts. Early profile improvements often lift calls and Book actions within weeks; stable visibility for competitive “dentist [city]” terms usually needs months. We report realistic movement, not promised positions.',
    costsItems: [
      {
        title: 'Foundation (single practice)',
        desc: 'GBP overhaul, hours/services/Book setup, citation cleanup, review process and a neighbourhood keyword set. Ideal for one location that needs to appear properly in Maps first.'
      },
      {
        title: 'Growth (competitive catchment)',
        desc: 'Ongoing monthly optimisation: photo cadence, review replies, local content for city and treatment intent, competitor monitoring and reporting on profile actions that lead to new-patient enquiries.'
      },
      {
        title: 'Multi-location practices',
        desc: 'Each surgery gets its own GBP, review cadence and “new patients” signal so a city-centre practice does not steal map clicks from a suburban branch.'
      }
    ],
    costsNote:
      'Scope depends on city competition, locations and whether you still need to signal new-patient availability clearly. Request a dental local-SEO quote — we outline Book setup, review-after-treatment flows and neighbourhood keywords with honest timelines, without ranking guarantees.',
    siblingsBadge: 'Also for dentists',
    siblingsHead: 'Pair local SEO with conversion and demand',
    siblingsSub:
      'Map visibility puts your practice on the shortlist; these services turn that search into a booked check-up and a filled hygiene block.',
    siblingsCta: 'View service',
    hubLink: 'Back to dentist marketing',
    supportLinkLabel: 'Also see our general local SEO service',
    supportLinkNote:
      'For businesses outside dentistry we offer broader local SEO. Practice engagements follow the dental process on this page.',
    ctaHeading: 'Ready to show up when new patients search nearby?',
    ctaSub:
      'Share your city, whether you accept new patients and how people book today. We scope GBP, post-treatment reviews and dentist + city keywords around agenda growth — with timelines we can defend.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Tandartsen',
    crumbCurrent: 'Lokale SEO voor tandartsen',
    badge: 'Lokale SEO voor tandartsen',
    h1: 'Lokale SEO voor tandartsen',
    heroSub:
      'Word gevonden wanneer nieuwe patiënten Google Maps en “tandarts bij mij in de buurt” openen — met Google Bedrijfsprofiel-optimalisatie, patiëntreviewgroei en stadszoekwoorden die de agenda vullen. Met 1.500+ afgeronde projecten weten we hoe praktijken lokaal winnen.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Onzichtbaar in lokaal zoeken betekent dat buurtpraktijken eerst vol raken',
    problemP1:
      'Als een verhuizer “tandarts nieuwe patiënten Amsterdam” of “spoedtandarts bij mij” zoekt, toont Google eerst drie praktijken in de kaartpack. Een half af GBP, geen Boek-actie of minder recente reviews na behandeling stuurt die inschrijvingen naar de praktijk die open en betrouwbaar oogt — ook als jouw stoelzorg sterker is.',
    problemP2:
      'Lokaal tandheelkundig zoeken draait om “tandarts bij mij”, beschikbaarheid voor nieuwe patiënten, reviewgewoontes na controle en een Boek-knop die op mobiel werkt. Restaurantgasten die kiezen op keukenfoto’s of verkopers die makelaars op wijkpagina’s vergelijken volgen andere paden — jouw praktijk heeft klinische vertrouwenssignalen nodig, niet hun sjablonen.',
    problemP3:
      'Betaalde ads kopen kortetermijn nieuw-patiëntverkeer, maar organische kaartzichtbaarheid stapelt maand na maand als mensen in jouw verzorgingsgebied komen wonen of hun oude praktijk kwijtraken na een verhuizing. Zonder lokale SEO blijf je betalen voor klikken terwijl de praktijk met frissere foto’s, duidelijkere “nieuwe patiënten”-status en recentere reviews na controle de pack bezit — precies wanneer iemand op mobiel een stoel wil vastleggen.',
    featuresBadge: 'Wat we doen',
    featuresHead: 'Wat zit er in lokale SEO voor tandartsen',
    featuresSub:
      'Elk onderdeel richt zich op mensen die een tandarts in jouw stad zoeken — nieuw-patiëntintentie, Boek-acties, reviews na behandeling — geen herlabeld generiek lokale SEO-pakket. We denken vanuit inschrijving en spoedstoel, niet vanuit een willekeurige winkelchecklist.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een lokaal SEO-traject voor tandartsen verloopt',
    processSub:
      'Van een audit van de kaartpack rond jouw straat tot meten van belacties, routes en Boek-klikken die tot inschrijvingen leiden — inclusief hoe teamwissels en “nieuwe patiënten”-status in GBP meelopen.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom tandartspraktijken hun lokale vindbaarheid aan ons toevertrouwen',
    whySub: 'Lokale SEO voor tandheelkunde rond nieuw-patiëntzoeken, Boek-acties en agendavulling die je terugvoert naar kaartgedreven inschrijvingen.',
    whyItems: [
      {
        title: 'Focus op tandheelkunde lokaal',
        desc: 'We optimaliseren voor tandarts + stad, nieuw-patiënt- en spoedintentie — geen generieke “bij mij”-playbooks uit horeca of retail.'
      },
      {
        title: 'Maps- & GBP-expertise',
        desc: 'We behandelen je Google-profiel als de online balie: juiste tandartscategorieën, nieuw-patiëntnotities, verse praktijkfoto’s en een Boek-pad dat klopt met hoe je inschrijvingen echt aanneemt.'
      },
      {
        title: 'Meetbare patiëntacties',
        desc: 'We volgen kaartimpressies, bel- en Boek-acties, routeverzoeken en reviewtempo na controles — gekoppeld aan nieuw-patiëntinschrijvingen, niet alleen zoekwoordgrafieken.'
      },
      {
        title: 'Alles onder één dak',
        desc: 'Eerst lokale SEO voor je praktijk; praktijkwebsite, Google Ads en social wanneer je meer nieuw-patiëntstroom nodig hebt — één team van kaartzoeken tot geboekte stoeltijd.'
      }
    ],
    costsBadge: 'Doorlooptijd & verwachtingen',
    costsHead: 'Wat je mag verwachten van lokale SEO voor tandartsen',
    costsIntro:
      'Lokale SEO voor tandheelkunde is doorlopend GBP-, review- en nieuw-patiëntzoekwoordwerk — zeker na teamwissels, nieuwe hygiënisten of verschuiving in verzorgingsgebied. Eerste profielverbeteringen tillen bellen en Boek-acties vaak binnen enkele weken; stabiele zichtbaarheid op concurrerende “tandarts [stad]”-termen vraagt meestal maanden van reviewtempo na controles. We rapporteren realistische beweging richting meer inschrijvingen, geen beloofde posities.',
    costsItems: [
      {
        title: 'Foundation (één praktijk)',
        desc: 'GBP-overhaul, tijden/diensten/Boek, citation-opschoning, reviewproces en een wijkzoekwoordenset. Ideaal voor één locatie die eerst fatsoenlijk in Maps moet staan.'
      },
      {
        title: 'Growth (concurrerend verzorgingsgebied)',
        desc: 'Doorlopende maandelijkse optimalisatie: fotoritme, reviewantwoorden, lokale content voor stads- en behandelintentie, concurrentiemonitoring en rapportage op profielacties die tot nieuw-patiëntaanvragen leiden.'
      },
      {
        title: 'Meerdere locaties',
        desc: 'Elke vestiging krijgt eigen GBP, reviewritme en “nieuwe patiënten”-signaal, zodat een centrumpraktijk geen kaartklikken steelt van een buitenwijkfiliaal.'
      }
    ],
    costsNote:
      'Scope hangt af van stadconcurrentie, locaties en of je nieuw-patiëntbeschikbaarheid nog duidelijk moet signaleren. Vraag een lokale-SEO-offerte voor tandartsen aan — we schetsen Boek-setup, reviewflows na behandeling en wijkzoekwoorden met eerlijke planning, zonder rankinggaranties.',
    siblingsBadge: 'Ook voor tandartsen',
    siblingsHead: 'Combineer lokale SEO met conversie en vraag',
    siblingsSub:
      'Kaartzichtbaarheid zet je praktijk op de shortlist; deze diensten maken van dat zoekmoment een geboekte controle en een gevuld hygieneblok.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar tandartsmarketing',
    supportLinkLabel: 'Bekijk ook onze algemene lokale SEO-dienst',
    supportLinkNote:
      'Voor bedrijven buiten de tandheelkunde bieden we bredere lokale SEO. Praktijktrajecten volgen het proces op deze pagina.',
    ctaHeading: 'Klaar om te verschijnen wanneer nieuwe patiënten in de buurt zoeken?',
    ctaSub:
      'Deel je stad, of jullie nieuwe patiënten aannemen en hoe mensen vandaag boeken. We scopen GBP, reviews na behandeling en tandarts- + stadzoekwoorden rond agendagroei — met verdedigbare doorlooptijden.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function TandartsenLokaleSeo() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-tandartsen'][locale]
  const dentistSpokes = BRANCH_SPOKES.tandartsen
  const siblings = dentistSpokes.filter((spoke) =>
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
                industrySlug="tandartsen"
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
