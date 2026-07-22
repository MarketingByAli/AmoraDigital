import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CalendarCheck,
  Camera,
  CheckCircle2,
  Clock,
  MapPin,
  MenuSquare,
  Smartphone,
  Sparkles,
  Star,
  Truck,
  UtensilsCrossed
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../../i18n/routes'
import { BRANCH_SPOKES } from '../../../data/branchSpokes'
import BranchSpokeCard from '../../../components/BranchSpokeCard'

const FEATURE_ICONS = [CalendarCheck, MenuSquare, Smartphone, MapPin, Camera, Star, Clock, Truck] as const

const FEATURES = [
  {
    en: {
      title: 'Online reservation system',
      description:
        'Guests book a table in seconds — party size, date, time and dietary notes — without calling during service. Confirmations go to you and the guest automatically.'
    },
    nl: {
      title: 'Online reserveringssysteem',
      description:
        'Gasten boeken in seconden een tafel — gezelschap, datum, tijd en dieetwensen — zonder te bellen tijdens de service. Bevestigingen gaan automatisch naar jou én de gast.'
    }
  },
  {
    en: {
      title: 'Digital menu',
      description:
        'A clear menu with courses, allergens, prices and seasonal specials. Update dishes yourself when the kitchen changes the board — no developer needed for a new lunch deal.'
    },
    nl: {
      title: 'Digitale menukaart',
      description:
        'Een duidelijke menukaart met gangen, allergenen, prijzen en seizoensspecials. Pas gerechten zelf aan als de keuken het bord wijzigt — geen developer nodig voor een nieuwe lunchdeal.'
    }
  },
  {
    en: {
      title: 'Mobile-first booking path',
      description:
        'Most restaurant searches happen on a phone. The site loads fast, shows opening hours and a sticky “Reserve a table” button so guests never hunt for how to book.'
    },
    nl: {
      title: 'Mobiel boekpad',
      description:
        'De meeste restaurantzoekopdrachten gebeuren op de telefoon. De site laadt snel, toont openingstijden en een vaste knop “Reserveer een tafel”, zodat gasten niet hoeven zoeken hoe ze boeken.'
    }
  },
  {
    en: {
      title: 'Google Maps & local findability',
      description:
        'Address, map embed, NAP consistency and LocalBusiness signals so “restaurant near me” and neighbourhood searches point to your venue, not a competitor two streets away.'
    },
    nl: {
      title: 'Google Maps & lokale vindbaarheid',
      description:
        'Adres, kaart, consistente NAP-gegevens en LocalBusiness-signalen zodat “restaurant bij mij in de buurt” en buurtzoekopdrachten naar jouw zaak wijzen — niet naar de concurrent twee straten verder.'
    }
  },
  {
    en: {
      title: 'Dish & atmosphere photography',
      description:
        'Layouts built for food photography: hero dishes, interior shots and plating that make guests hungry before they arrive. We plan image sizes for speed without killing appetite appeal.'
    },
    nl: {
      title: 'Foto’s van gerechten & sfeer',
      description:
        'Layouts gemaakt voor foodfotografie: signature dishes, interieur en plating die gasten hongerig maken vóór ze binnenkomen. We plannen afbeeldingsformaten voor snelheid zonder de eetlust te verliezen.'
    }
  },
  {
    en: {
      title: 'Reviews & social proof',
      description:
        'Highlight Google and guest reviews on the homepage and menu pages. Trust signals next to the reservation CTA reduce no-shows from first-time diners who hesitate online.'
    },
    nl: {
      title: 'Reviews & social proof',
      description:
        'Toon Google- en gastreviews op de homepage en menupagina’s. Vertrouwenssignalen naast de reserverings-CTA verminderen twijfel bij eerste bezoekers die online aarzelen.'
    }
  },
  {
    en: {
      title: 'Opening hours & kitchen schedule',
      description:
        'Lunch, dinner, late kitchen and closed days — shown clearly so guests do not arrive to a dark dining room. Holiday hours can be updated without a redesign.'
    },
    nl: {
      title: 'Openingstijden & keukentijden',
      description:
        'Lunch, diner, late kitchen en gesloten dagen — duidelijk getoond zodat gasten niet voor een donkere zaak staan. Feestdagen pas je aan zonder redesign.'
    }
  },
  {
    en: {
      title: 'Takeaway & delivery links',
      description:
        'Where relevant: buttons to your own pickup flow or delivery platforms, without burying the table-reservation CTA that fills seats in the dining room.'
    },
    nl: {
      title: 'Afhalen & bezorgplatforms',
      description:
        'Waar relevant: knoppen naar je eigen afhaalflow of bezorgplatforms, zonder de tafelreserverings-CTA te begraven die stoelen in de zaak vult.'
    }
  }
] as const

const PROCESS_STEPS = [
  {
    en: {
      step: '01',
      title: 'Discovery in the dining room',
      description:
        'We walk through how guests find you today: walk-ins, phone bookings, Instagram DMs and Google. We map peak services, average party size and where reservations get lost.'
    },
    nl: {
      step: '01',
      title: 'Discovery in de zaak',
      description:
        'We lopen door hoe gasten je nu vinden: inlopen, telefoonboekingen, Instagram-DM’s en Google. We brengen piekmomenten, gemiddelde groepsgrootte en gemiste reserveringen in kaart.'
    }
  },
  {
    en: {
      step: '02',
      title: 'Menu & booking structure',
      description:
        'Information architecture around the menu, events and reserve flow — not a generic “Services” page. Every important dish category and booking path gets a clear place.'
    },
    nl: {
      step: '02',
      title: 'Menu- & boekingsstructuur',
      description:
        'Informatiearchitectuur rond menu, events en reserveren — geen generieke “Diensten”-pagina. Elke belangrijke menucategorie en boekingsroute krijgt een duidelijke plek.'
    }
  },
  {
    en: {
      step: '03',
      title: 'Design for appetite',
      description:
        'Visual design that puts food and atmosphere first: typography that reads on a phone between metro stops, and CTAs that say “Reserve a table”, not “Submit”.'
    },
    nl: {
      step: '03',
      title: 'Design dat trek geeft',
      description:
        'Visueel ontwerp met eten en sfeer voorop: typografie die leesbaar is op de telefoon tussen twee metros, en CTA’s die “Reserveer een tafel” zeggen — niet “Versturen”.'
    }
  },
  {
    en: {
      step: '04',
      title: 'Build, integrate, train',
      description:
        'We build the site, connect the reservation tool you choose, set opening hours and train your team to update the digital menu after a chalkboard change.'
    },
    nl: {
      step: '04',
      title: 'Bouwen, koppelen, trainen',
      description:
        'We bouwen de site, koppelen het reserveringssysteem van jouw keuze, zetten openingstijden klaar en trainen je team om de digitale menukaart bij te werken na een bordwijziging.'
    }
  },
  {
    en: {
      step: '05',
      title: 'Launch & measure reservations',
      description:
        'Go live with analytics on reservation clicks, phone taps and menu views. You see which dishes and which traffic sources fill tables — not just pageviews.'
    },
    nl: {
      step: '05',
      title: 'Live & reserveringen meten',
      description:
        'Livegang met analytics op reserveringsklikken, belacties en menuweergaven. Je ziet welke gerechten en verkeersbronnen tafels vullen — niet alleen pageviews.'
    }
  }
] as const

const SIBLING_SLUGS = ['lokale-seo', 'social-media', 'google-ads'] as const

const T = {
  en: {
    crumbHome: 'Home',
    crumbBranches: 'Industries',
    crumbHub: 'Restaurants & cafés',
    crumbCurrent: 'Website design for restaurants',
    badge: 'Restaurant websites',
    h1: 'Website design for restaurants',
    heroSub:
      'A restaurant website that turns hungry searchers into booked tables — with online reservations, a digital menu and a mobile path built for guests, not corporate brochure sites. With 1,500+ completed projects, we know how hospitality converts online.',
    trust: '1,500+ completed projects',
    ctaPrimary: 'Request a quote',
    problemBadge: 'The real cost',
    problemHead: 'A weak restaurant website loses reservations before the kitchen opens',
    problemP1:
      'When someone searches “Italian restaurant Amsterdam centre” or “best brunch near me”, they open three tabs. The first site with a clear menu, tonight’s hours and a one-tap reserve button usually wins. If your site is a PDF menu from 2019, a Facebook page, or a template that buries the phone number, those guests book elsewhere — or walk into the place with the brighter photos.',
    problemP2:
      'Restaurants do not need a corporate brochure. They need a digital front-of-house: opening hours that match the kitchen, allergen-aware menu pages, dish photography that creates appetite, and a reservation flow that works while someone is already standing on the pavement. Miss that, and you pay in empty tables on Tuesday and overloaded phones on Friday.',
    problemP3:
      'Delivery platforms and Instagram can bring awareness, but they own the relationship. Your own website is where you control the booking, show the full wine list and turn a Google Maps click into a confirmed reservation without a 15% marketplace cut.',
    featuresBadge: 'What we build',
    featuresHead: 'What is included in a restaurant website',
    featuresSub:
      'Every feature below answers a guest or kitchen need. Nothing here is a generic “About us” block renamed for hospitality.',
    processBadge: 'How we work',
    processHead: 'How a restaurant website project runs',
    processSub:
      'From the first walkthrough of your service flow to measuring which dishes drive reservation clicks.',
    whyBadge: 'Why Amora Digital',
    whyHead: 'Why restaurants trust us with their digital front door',
    whySub: 'Hospitality-aware delivery, local findability and results you can count at the door.',
    whyItems: [
      {
        title: 'Hospitality experience',
        desc: 'We design for peak service, no-shows, allergen questions and the difference between lunch traffic and Saturday dinner.'
      },
      {
        title: 'Local findability',
        desc: 'Site structure and LocalBusiness signals that support Google Maps and neighbourhood search — not just a pretty homepage.'
      },
      {
        title: 'Measurable bookings',
        desc: 'We track reservation starts, completed bookings and call taps so you know the website fills seats.'
      },
      {
        title: 'Everything under one roof',
        desc: 'Website today; local SEO, social and Google Ads when you are ready — without handing guests to five agencies.'
      }
    ],
    costsBadge: 'Investment',
    costsHead: 'What does a restaurant website cost?',
    costsIntro:
      'Price depends on scope: how complex the menu is, whether you need an online reservation system, multilingual pages, takeaway flows and photo production. We quote fixed packages after a short intake — not hourly surprises mid-build.',
    costsItems: [
      {
        title: 'Essential restaurant site',
        desc: 'Homepage, menu, opening hours, location/map, contact and a clear reservation CTA (form or linked booking tool). Ideal for a single-location café or bistro launching online properly.'
      },
      {
        title: 'Reservation-ready site',
        desc: 'Everything in Essential, plus integrated online reservation system, richer dish pages, review blocks and analytics on booking clicks. Built for restaurants that live on table bookings.'
      },
      {
        title: 'Multi-location or delivery-heavy',
        desc: 'Multiple venues, language variants, pickup flows or delivery-platform links alongside dine-in reservations. Scoped per brand after we map your operations.'
      }
    ],
    // TODO(Ali): Confirm package price bands for restaurant websites and replace this note with approved figures.
    costsNote:
      'Exact package prices are confirmed in your quote after we see your menu complexity and reservation needs. Ask for a restaurant website proposal and we will send a fixed scope with timelines.',
    siblingsBadge: 'Also for restaurants',
    siblingsHead: 'Pair your website with local growth',
    siblingsSub:
      'A strong site converts traffic. These restaurant services bring more of the right guests to it.',
    siblingsCta: 'View service',
    hubLink: 'Back to restaurant marketing',
    webDesignLinkLabel: 'Also see our general website design service',
    webDesignLinkNote:
      'For non-hospitality projects we offer broader website design. Restaurant builds follow the hospitality process on this page.',
    ctaHeading: 'Ready for a website that books tables?',
    ctaSub:
      'Tell us about your restaurant, kitchen hours and how you take reservations today. We will propose a fixed scope for a site that guests actually use.',
    ctaButton: 'Request a quote'
  },
  nl: {
    crumbHome: 'Home',
    crumbBranches: 'Branches',
    crumbHub: 'Restaurants & cafés',
    crumbCurrent: 'Website laten maken voor restaurants',
    badge: 'Restaurantwebsites',
    h1: 'Website laten maken voor restaurants',
    heroSub:
      'Een restaurantwebsite die hongerige zoekers omzet in geboekte tafels — met online reserveringen, digitale menukaart en een mobiel pad voor gasten, geen corporate brochure. Met 1.500+ afgeronde projecten weten we hoe horeca online converteert.',
    trust: '1.500+ afgeronde projecten',
    ctaPrimary: 'Vraag een offerte aan',
    problemBadge: 'De echte kosten',
    problemHead: 'Een zwakke restaurantwebsite kost reserveringen vóór de keuken opent',
    problemP1:
      'Als iemand zoekt op “Italiaans restaurant Amsterdam centrum” of “beste brunch bij mij in de buurt”, openen ze drie tabbladen. De eerste site met een duidelijke menukaart, openingstijden vanavond en een één-tap-reserveringsknop wint meestal. Is jouw site een PDF-menu uit 2019, alleen een Facebookpagina, of een template die het telefoonnummer begraaft, dan boeken die gasten elders — of lopen ze naar de zaak met de betere foto’s.',
    problemP2:
      'Restaurants hebben geen corporate brochure nodig. Ze hebben een digitaal front-of-house nodig: openingstijden die kloppen met de keuken, menupagina’s met allergenen, foodfotografie die trek geeft, en een reserveringsflow die werkt terwijl iemand al op de stoep staat. Mis je dat, dan betaal je met lege tafels op dinsdag en overvolle telefoons op vrijdag.',
    problemP3:
      'Bezorgplatforms en Instagram brengen bekendheid, maar zij bezitten de relatie. Op je eigen website bepaal jij de boeking, toon je de wijnkaart en zet je een Google Maps-klik om in een bevestigde reservering — zonder 15% marketplace-kosten.',
    featuresBadge: 'Wat we bouwen',
    featuresHead: 'Wat zit er in een restaurantwebsite',
    featuresSub:
      'Elke feature hieronder beantwoordt een behoefte van gast of keuken. Niets is een generiek “Over ons”-blok met een horecalabel erop.',
    processBadge: 'Hoe we werken',
    processHead: 'Hoe een restaurantwebsite-traject verloopt',
    processSub:
      'Van de eerste doorloop van je serviceflow tot meten welke gerechten reserveringsklikken opleveren.',
    whyBadge: 'Waarom Amora Digital',
    whyHead: 'Waarom restaurants hun digitale voordeur aan ons toevertrouwen',
    whySub: 'Horeca-bewuste oplevering, lokale vindbaarheid en resultaten die je aan de deur telt.',
    whyItems: [
      {
        title: 'Horeca-ervaring',
        desc: 'We ontwerpen voor piekservice, no-shows, allergenenvragen en het verschil tussen lunchverkeer en zaterdagavond.'
      },
      {
        title: 'Lokale vindbaarheid',
        desc: 'Sitestructuur en LocalBusiness-signalen die Google Maps en buurtzoekopdrachten ondersteunen — niet alleen een mooie homepage.'
      },
      {
        title: 'Meetbare boekingen',
        desc: 'We volgen reserveringsstarts, voltooide boekingen en belacties, zodat je weet dat de website stoelen vult.'
      },
      {
        title: 'Alles onder één dak',
        desc: 'Website nu; lokale SEO, social en Google Ads wanneer je er klaar voor bent — zonder gasten aan vijf bureaus over te dragen.'
      }
    ],
    costsBadge: 'Investering',
    costsHead: 'Wat kost een website voor een restaurant?',
    costsIntro:
      'De prijs hangt af van scope: hoe complex de menukaart is, of je een online reserveringssysteem nodig hebt, meertalige pagina’s, afhaalflows en fotografie. Na een korte intake geven we vaste packages — geen uurtje-factuurtje halverwege de bouw.',
    costsItems: [
      {
        title: 'Essentiële restaurantsite',
        desc: 'Homepage, menukaart, openingstijden, locatie/kaart, contact en een duidelijke reserverings-CTA (formulier of gekoppeld boekingssysteem). Ideaal voor één locatie die online netjes wil starten.'
      },
      {
        title: 'Reserveringsklare site',
        desc: 'Alles uit Essential, plus geïntegreerd online reserveringssysteem, rijkere gerechtpagina’s, reviewblokken en analytics op boekingsklikken. Voor restaurants die op tafelboekingen draaien.'
      },
      {
        title: 'Meerdere locaties of bezorgzwaar',
        desc: 'Meerdere vestigingen, taalvarianten, afhaalflows of koppelingen met bezorgplatforms naast dine-in-reserveringen. Scope per merk nadat we je operatie in kaart hebben.'
      }
    ],
    // TODO(Ali): Confirm package price bands for restaurant websites and replace this note with approved figures.
    costsNote:
      'Exacte packageprijzen bevestigen we in je offerte nadat we menukaartcomplexiteit en reserveringsbehoeften hebben gezien. Vraag een restaurantwebsite-voorstel aan en je ontvangt een vaste scope met planning.',
    siblingsBadge: 'Ook voor restaurants',
    siblingsHead: 'Combineer je website met lokale groei',
    siblingsSub:
      'Een sterke site converteert verkeer. Deze restaurantdiensten brengen meer van de juiste gasten ernaartoe.',
    siblingsCta: 'Bekijk dienst',
    hubLink: 'Terug naar restaurantmarketing',
    webDesignLinkLabel: 'Bekijk ook onze algemene webdesign-dienst',
    webDesignLinkNote:
      'Voor projecten buiten de horeca bieden we breder webdesign. Restaurantbuilds volgen het horecaproces op deze pagina.',
    ctaHeading: 'Klaar voor een website die tafels boekt?',
    ctaSub:
      'Vertel ons over je restaurant, keukentijden en hoe je nu reserveringen aanneemt. We stellen een vaste scope voor een site die gasten écht gebruiken.',
    ctaButton: 'Vraag een offerte aan'
  }
} as const

export default function RestaurantsWebsiteLatenMaken() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const hubPath = ROUTES['branches-restaurants'][locale]
  const restaurantSpokes = BRANCH_SPOKES.restaurants
  const siblings = restaurantSpokes.filter((spoke) =>
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
              <UtensilsCrossed className="w-4 h-4" aria-hidden />
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
              <MenuSquare className="w-4 h-4" aria-hidden />
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
                industrySlug="restaurants"
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
