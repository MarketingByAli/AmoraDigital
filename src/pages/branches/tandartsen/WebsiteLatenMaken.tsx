import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  UserPlus
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [
  CalendarCheck,
  ClipboardList,
  UserPlus,
  Stethoscope,
  HeartHandshake,
  Smartphone,
  Star,
  ShieldCheck
] as const

const FEATURES = [
  {
    en: {
      title: 'Online appointment booking',
      description:
        'Patients book check-ups, hygiene visits or follow-ups without calling reception during clinic hours. Party size becomes treatment type, date and preferred dentist — confirmations go to practice and patient.'
    },
    nl: {
      title: 'Online afspraken maken',
      description:
        'Patiënten boeken controles, mondhygiëne of vervolgafspraken zonder te bellen tijdens spreekuur. Behandelingstype, datum en voorkeurstandarts — bevestigingen gaan naar praktijk én patiënt.'
    }
  },
  {
    en: {
      title: 'Treatments & fees pages',
      description:
        'Clear pages for check-ups, fillings, implants, whitening and children’s dentistry with transparent fee ranges where you allow them — so new patients know what to expect before they call.'
    },
    nl: {
      title: 'Behandelingen- & tarievenpagina’s',
      description:
        'Duidelijke pagina’s voor controles, vullingen, implantaten, bleken en kindertandheelkunde, met transparante tariefindicaties waar jij dat toelaat — zodat nieuwe patiënten weten wat ze kunnen verwachten vóór ze bellen.'
    }
  },
  {
    en: {
      title: 'New patient registration',
      description:
        'A guided intake for first-time patients: insurance details, medical notes and consent steps that land in your process — fewer incomplete forms and less admin at the front desk.'
    },
    nl: {
      title: 'Nieuwe patiënten inschrijven',
      description:
        'Een begeleid inschrijfpad voor eerste bezoekers: verzekering, medische aandachtspunten en toestemmingen die in jouw proces landen — minder incomplete formulieren en minder baliewerk.'
    }
  },
  {
    en: {
      title: 'Hygienist & referral paths',
      description:
        'Separate paths for dental hygienist appointments and referring dentists so patients and colleagues find the right agenda without flooding general reception.'
    },
    nl: {
      title: 'Mondhygiënist & verwijzingen',
      description:
        'Aparte paden voor mondhygiënist-afspraken en verwijzende tandartsen, zodat patiënten en collega’s de juiste agenda vinden zonder de algemene balie te overbelasten.'
    }
  },
  {
    en: {
      title: 'Dental anxiety & emergency info',
      description:
        'Reassurance content for anxious patients, plus clear emergency / on-call guidance so people in pain know whether to call, book urgent care or go elsewhere — without burying trust signals.'
    },
    nl: {
      title: 'Angst voor de tandarts & spoedinfo',
      description:
        'Geruststellende content voor angstige patiënten, plus duidelijke spoed-/nooddienstinformatie zodat mensen met pijn weten of ze moeten bellen, spoedzorg boeken of elders terechtkunnen.'
    }
  },
  {
    en: {
      title: 'Mobile-first booking path',
      description:
        'Most “dentist near me” searches happen on a phone. The site loads fast, shows whether you accept new patients and keeps “Book appointment” sticky — no hunting through a PDF practice folder.'
    },
    nl: {
      title: 'Mobiel afsprakenpad',
      description:
        'De meeste “tandarts bij mij”-zoekopdrachten gebeuren op de telefoon. De site laadt snel, toont of jullie nieuwe patiënten aannemen en houdt “Maak een afspraak” vast — geen zoeken in een PDF-praktijkmap.'
    }
  },
  {
    en: {
      title: 'Patient reviews & social proof',
      description:
        'Highlight verified patient reviews next to booking CTAs. Trust matters when someone is choosing a new practice after moving house or leaving a previous dentist.'
    },
    nl: {
      title: 'Patiëntreviews & social proof',
      description:
        'Toon geverifieerde patiëntreviews naast boekings-CTA’s. Vertrouwen telt wanneer iemand een nieuwe praktijk kiest na een verhuizing of na het verlaten van een vorige tandarts.'
    }
  },
  {
    en: {
      title: 'Privacy-aware patient journeys',
      description:
        'Forms and booking flows designed with AVG/GDPR in mind: clear consent, minimal data collection and messaging that patients’ medical details are handled carefully — not a generic contact form.'
    },
    nl: {
      title: 'AVG-bewuste patiëntreizen',
      description:
        'Formulieren en boekflows met AVG in gedachten: duidelijke toestemming, minimale gegevensverzameling en taal die laat zien dat medische gegevens zorgvuldig worden behandeld — geen generiek contactformulier.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Discovery in the practice',
      description:
        'We map how new patients find you today: phone, Google, referrals and walk-ins. We note whether you accept new patients, hygienist capacity, emergency policy and where registrations get stuck.'
    },
    nl: {
      step: '01',
      title: 'Discovery in de praktijk',
      description:
        'We brengen in kaart hoe nieuwe patiënten je nu vinden: telefoon, Google, verwijzingen en inlopen. We noteren of jullie nieuwe patiënten aannemen, capaciteit mondhygiënist, spoedbeleid en waar inschrijvingen vastlopen.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Treatments & booking structure',
      description:
        'Structure follows patient journeys: routine check-up vs implant intake vs hygienist-only booking. Treatment pages, team bios, fee transparency and registration each land where anxious patients expect them — not under one vague “Services” menu.'
    },
    nl: {
      step: '02',
      title: 'Behandel- & boekingsstructuur',
      description:
        'Structuur volgt patiëntreizen: controle versus implantaat-intake versus alleen mondhygiënist. Behandelpagina’s, team, tarieftransparantie en inschrijving staan waar angstige patiënten ze verwachten — niet onder één vaag “Diensten”-menu.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Design for clinical trust',
      description:
        'Visual design that feels calm and professional: readable on a phone in the waiting room, CTAs that say “Book appointment” or “Register as a patient”, and space for anxiety-friendly messaging.'
    },
    nl: {
      step: '03',
      title: 'Design dat klinisch vertrouwen geeft',
      description:
        'Visueel ontwerp dat rustig en professioneel oogt: leesbaar op de telefoon in de wachtkamer, CTA’s die “Maak een afspraak” of “Schrijf je in als patiënt” zeggen, en ruimte voor angstvriendelijke boodschappen.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, integrate, train',
      description:
        'We build the site, connect the appointment planner you use, set new-patient and emergency info, and train reception to update treatments or “accepting patients” status without a developer.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, koppelen, trainen',
      description:
        'We bouwen de site, koppelen de afsprakenplanner die jullie gebruiken, zetten nieuw-patiënt- en spoedinfo klaar, en trainen de balie om behandelingen of “nieuwe patiënten”-status bij te werken zonder developer.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch & measure registrations',
      description:
        'After launch we track appointment form starts, completed new-patient registrations and emergency-line taps. You see whether “children’s dentistry” or “whitening” pages drive agenda fills — not anonymous visits from people who never intended to book.'
    },
    nl: {
      step: '05',
      title: 'Live & inschrijvingen meten',
      description:
        'Na livegang meten we afspraakformulier-starts, voltooide nieuw-patiëntinschrijvingen en spoedlijn-klikken. Je ziet of “kinderzorg” of “bleken” de agenda vult — geen anonieme bezoeken van mensen die nooit wilden boeken.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'google-ads', 'social-media'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Dentists',
    crumbCurrent: 'Website design for dentists',
    badge: 'Dental practice websites',
    h1: 'Website design for dentists',
    heroSub:
      'A dental practice website that turns searchers into booked appointments — with online scheduling, clear treatments, new-patient registration and a mobile path built for patients, not generic brochure sites. With 1,500+ completed projects, we know how clinics convert online.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'A weak practice website loses new patient registrations before the chair is free',
    problemP1:
      'Someone comparing practices after a move reads whether you accept new patients, how implants are explained and whether the booking form looks privacy-aware — all before calling. A site that hides treatment fees, buries the agenda link or feels like a generic template sends that patient to the practice whose hygienist hours are visible on page one.',
    problemP2:
      'Dental practices do not need a restaurant-style brochure. They need a digital front desk: treatment pages, hygienist paths, anxiety reassurance, emergency guidance and a registration flow that works while someone is still deciding after a bad experience elsewhere. Miss that, and you pay in empty slots mid-week and overloaded phones after holidays.',
    problemP3:
      'Google Business Profile and Instagram can create awareness, but your website is where you control booking, explain implants or children’s care, and turn a Maps click into a confirmed appointment without guessing which landing page to send them to.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in a dental practice website',
    featuresSub:
      'Each item maps to what patients ask reception or worry about before sharing medical details — appointment types, new-patient intake, privacy — not a healthcare template with your logo swapped in.',
    processBadge: 'How we work',
    processHead: 'How a dental practice website project runs',
    processSub:
      'From the first walkthrough of your intake and agenda to measuring which treatments drive bookings.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why dental practices trust us with their digital front desk',
    whySub: 'Clinic-aware delivery, local findability support and results you can count in the agenda.',
    whyItems: [
      {
        title: 'Practice experience',
        desc: 'We design for new-patient intake, hygienist capacity, dental anxiety and the difference between routine check-ups and urgent pain calls.'
      },
      {
        title: 'Local findability support',
        desc: 'Treatment URLs, practice address markup and a clear “register as new patient” path that supports how people find you on Maps after they leave your site.'
      },
      {
        title: 'Measurable bookings',
        desc: 'We track appointment starts, completed registrations and call taps so you know the website fills chairs.'
      },
      {
        title: 'Everything under one roof',
        desc: 'Website first; local SEO, Google Ads and social when the agenda needs more new patients — same team that already knows your treatment pages and AVG-sensitive forms.'
      }
    ],
    costsBadge: 'Investment',
    costsHead: 'What does a website for a dental practice cost?',
    costsIntro:
      'Scope follows your practice setup: number of treatment pages, online agenda link, new-patient registration flow, hygienist paths and whether you need explicit AVG messaging on forms. Fixed deliverables after a short intake — no open-ended build while patients wait in the chair.',
    costsItems: [
      {
        title: 'Essential practice site',
        desc: 'Homepage, treatments overview, team, contact, opening hours, location/map and a clear book or call CTA. Ideal for a single location that needs to look trustworthy online and state whether new patients are welcome.'
      },
      {
        title: 'Booking-ready practice site',
        desc: 'Everything in Essential, plus integrated online appointment planner, richer treatment/fee pages, new-patient registration, review blocks and analytics on booking clicks. Built for practices that grow through the agenda.'
      },
      {
        title: 'Multi-location or specialist focus',
        desc: 'Multiple practices, implant or orthodontic landing paths, referral pages or language variants. Scoped per brand after we map how patients and referring dentists move through your organisation.'
      }
    ],
    costsNote:
      'We lock the build scope after reviewing treatment pages, agenda integration and registration steps. Ask for a dental website quote with a fixed deliverable list and timelines — that is how you get a figure tailored to your practice, not a published band here.',
    siblingsBadge: 'Also for dentists',
    siblingsHead: 'Pair your website with practice growth',
    siblingsSub:
      'Patients who find you on Maps still need treatment clarity and a safe booking path before they trust a new practice. These services bring searchers to a site that answers clinical questions, not just ranks.',
    siblingsCta: 'View service',
    hubLink: 'Back to dentist marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For projects outside dentistry we offer broader website design. Dental builds follow the practice process on this page.',
    ctaHeading: 'Ready for a website that fills the agenda?',
    ctaSub:
      'Tell us about your practice, whether you accept new patients and how bookings work today. We will propose a fixed scope for a site patients actually use.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Tandartsen',
    crumbCurrent: 'Website laten maken voor tandartsen',
    badge: 'Praktijkwebsites voor tandartsen',
    h1: 'Website laten maken voor tandartsen',
    heroSub:
      'Een praktijkwebsite die zoekers omzet in geboekte afspraken — met online planner, duidelijke behandelingen, inschrijving voor nieuwe patiënten en een mobiel pad voor patiënten, geen generieke brochure. Met 1.500+ afgeronde projecten weten we hoe praktijken online converteren.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Een zwakke praktijkwebsite kost nieuwe patiëntinschrijvingen vóór de stoel vrij is',
    problemP1:
      'Iemand die na een verhuizing praktijken vergelijkt, leest eerst of jullie nieuwe patiënten aannemen, hoe implantaten worden uitgelegd en of het boekingsformulier AVG-bewust oogt — vóór ze bellen. Een site die tarieven verbergt, de agenda-link begraaft of als generieke template voelt, stuurt die patiënt naar de praktijk waar mondhygiëne-uren op pagina één staan.',
    problemP2:
      'Tandartspraktijken hebben geen restaurantbrochure nodig. Ze hebben een digitale balie nodig: behandelpagina’s, mondhygiënist-paden, angstgeruststelling, spoedinformatie en een inschrijfflow die werkt terwijl iemand nog twijfelt na een slechte ervaring elders. Mis je dat, dan betaal je met lege slots midden in de week en overvolle telefoons na vakanties.',
    problemP3:
      'Google Bedrijfsprofiel en Instagram brengen bekendheid, maar op je website bepaal jij de boeking, leg je implantaten of kinderzorg uit, en zet je een Maps-klik om in een bevestigde afspraak — zonder te gokken naar welke landingspagina je ze stuurt.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een website voor tandartsen',
    featuresSub:
      'Elk onderdeel sluit aan op wat patiënten aan de balie vragen of waar ze over twijfelen vóór ze medische gegevens delen — afspraaktypes, inschrijving, privacy — geen zorgsjabloon met jullie logo erop.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een website-traject voor een tandartspraktijk verloopt',
    processSub:
      'Van de eerste doorloop van je intake en agenda tot meten welke behandelingen boekingen opleveren.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom tandartspraktijken hun digitale balie aan ons toevertrouwen',
    whySub: 'Praktijkbewuste oplevering, steun voor lokale vindbaarheid en resultaten die je in de agenda telt.',
    whyItems: [
      {
        title: 'Praktijkervaring',
        desc: 'We ontwerpen voor nieuw-patiëntintake, capaciteit mondhygiënist, tandartsangst en het verschil tussen routinecontroles en spoed bij pijn.'
      },
      {
        title: 'Steun voor lokale vindbaarheid',
        desc: 'Behandel-URL’s, praktijkschema-markup en een duidelijk “inschrijven als nieuwe patiënt”-pad dat steunt hoe mensen je op Maps vinden nadat ze je site verlaten.'
      },
      {
        title: 'Meetbare boekingen',
        desc: 'We volgen afspraakstarts, voltooide inschrijvingen en belacties, zodat je weet dat de website stoelen vult.'
      },
      {
        title: 'Alles onder één dak',
        desc: 'Website eerst; lokale SEO, Google Ads en social wanneer de agenda meer nieuwe patiënten nodig heeft — hetzelfde team dat je behandelpagina’s en AVG-gevoelige formulieren al kent.'
      }
    ],
    costsBadge: 'Investering',
    costsHead: 'Wat kost een website voor een tandartspraktijk?',
    costsIntro:
      'Scope volgt je praktijkopzet: aantal behandelpagina’s, online agenda-koppeling, inschrijfflow voor nieuwe patiënten, mondhygiënist-paden en expliciete AVG-taal op formulieren. Na een korte intake vaste deliverables — geen open bouw terwijl patiënten in de stoel wachten.',
    costsItems: [
      {
        title: 'Essentiële praktijksite',
        desc: 'Homepage, behandeloverzicht, team, contact, openingstijden, locatie/kaart en een duidelijke boek- of bel-CTA. Ideaal voor één locatie die online betrouwbaar wil ogen en wil aangeven of nieuwe patiënten welkom zijn.'
      },
      {
        title: 'Boekingsklare praktijksite',
        desc: 'Alles uit Essential, plus geïntegreerde online afsprakenplanner, rijkere behandel-/tariefpagina’s, inschrijving nieuwe patiënten, reviewblokken en analytics op boekingsklikken. Voor praktijken die via de agenda groeien.'
      },
      {
        title: 'Meerdere locaties of specialisatie',
        desc: 'Meerdere praktijken, implantaat- of orthodontie-landingspaden, verwijspagina’s of taalvarianten. Scope per merk nadat we in kaart hebben hoe patiënten en verwijzers door je organisatie bewegen.'
      }
    ],
    costsNote:
      'We zetten de bouwscope vast na review van behandelpagina’s, agenda-integratie en inschrijfstappen. Vraag een tandartswebsite-offerte aan met vaste deliverables en planning — zo krijg je een bedrag dat bij jouw praktijk past, geen gepubliceerde band hier.',
    siblingsBadge: 'Ook voor tandartsen',
    siblingsHead: 'Combineer je website met praktijkgroei',
    siblingsSub:
      'Patiënten die je via Maps vinden, hebben nog behandelduidelijkheid en een veilig boekpad nodig vóór ze een nieuwe praktijk vertrouwen. Deze diensten brengen zoekers naar een site die klinische vragen beantwoordt, niet alleen rankt.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar tandartsmarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten de tandheelkunde bieden we breder webdesign. Praktijkbuilds volgen het proces op deze pagina.',
    ctaHeading: 'Klaar voor een website die de agenda vult?',
    ctaSub:
      'Vertel ons over je praktijk, of jullie nieuwe patiënten aannemen en hoe boekingen nu lopen. We stellen een vaste scope voor een site die patiënten écht gebruiken.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function TandartsenWebsiteLatenMaken() {
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
              <Stethoscope className="w-4 h-4" aria-hidden />
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
              <ClipboardList className="w-4 h-4" aria-hidden />
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
