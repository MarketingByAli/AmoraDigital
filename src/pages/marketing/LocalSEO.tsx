import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, MapPin, Star, Building2, Navigation, Users, TrendingUp, Search,
  Phone, Mail, MessageSquare, Map, Globe, Award, Clock, ThumbsUp, Camera, FileText, Target
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'Local SEO',
    headPre: 'Dominate ', headHighlight: 'Local Search', headPost: ' & Google Maps',
    sub: "Get found by customers in your area when they search for your services. We'll put your business on the map \u2014 literally \u2014 and drive more foot traffic and calls.",
    ctaAudit: 'Get Local SEO Audit', ctaServices: 'Our Services',
    quickStat1: { value: '300%', label: 'Avg. Traffic Increase' },
    quickStat2: { value: 'Top 3', label: 'Map Pack Rankings' },
    searchQuery: 'digital marketing near me', yourBiz: 'Your Business', competitor: 'Competitor A',
    floats: { rating: '4.9 Rating', calls: '+47 Calls/Week', dirs: '+89 Directions', views: '2.5K Views' },
    stats: [
      { value: '46%', label: 'Of Google Searches', description: 'Have local intent' },
      { value: '88%', label: 'Of Local Searches', description: 'Call or visit within 24h' },
      { value: '3x', label: 'More Visibility', description: 'In Google Maps' },
      { value: '76%', label: 'Visit a Business', description: 'Within a day of searching' }
    ],
    whyBadge: 'Why Local SEO', whyHeadPre: 'Your Customers Are ', whyHeadHighlight: 'Searching Locally',
    whyBody: 'When someone searches "near me" or includes a city name in their search, they are ready to buy. Local SEO ensures your business shows up at exactly the right moment \u2014 when customers are looking for what you offer.',
    whyPoints: [
      '88% of local mobile searches result in a call or visit within 24 hours',
      '72% of consumers who search locally visit a store within 5 miles',
      '"Near me" searches have grown 500%+ in recent years'
    ],
    reviews: [
      { stars: 5, text: 'Best service in town! Highly recommend.', author: 'M. Johnson' },
      { stars: 5, text: 'Professional and quick response.', author: 'A. Smith' },
      { stars: 5, text: 'Found them on Google Maps. Great experience!', author: 'J. Williams' }
    ],
    helpReviews: 'We help you get more reviews like these!',
    servicesSection: { badge: 'Our Services', headPre: 'Complete Local SEO ', headHighlight: 'Solutions', sub: 'Everything you need to dominate local search results and Google Maps in your area.' },
    services: [
      { title: 'Google Business Profile', description: 'Complete setup and optimization of your Google Business Profile for maximum local visibility.' },
      { title: 'Local Citations', description: 'Build consistent NAP (Name, Address, Phone) across 100+ local directories and platforms.' },
      { title: 'Review Management', description: 'Generate more positive reviews and professionally manage your online reputation.' },
      { title: 'Local Content', description: 'Create location-specific content that ranks for "near me" and local keywords.' },
      { title: 'Local Link Building', description: 'Earn backlinks from local businesses, organizations, and community websites.' },
      { title: 'Geo-Targeted Optimization', description: 'Optimize for multiple locations and service areas to capture local search traffic.' }
    ],
    mapPack: { badge: 'Google Maps Optimization', headPre: 'Get Into the Google ', headHighlight: 'Map Pack', sub: "The top 3 Google Maps results get 70% of all local clicks. We'll help you claim your spot." },
    mapPackBenefits: [
      { title: 'Google Maps Dominance', description: 'Appear in the coveted "3-pack" of Google Maps results for local searches.' },
      { title: 'Directions & Calls', description: 'Make it easy for customers to find you and contact you directly from search results.' },
      { title: 'Review Showcase', description: 'Display your star rating and reviews prominently to build instant trust.' },
      { title: 'Visual Presence', description: 'Show photos of your business, products, and team to attract more customers.' }
    ],
    industriesSection: { headPre: 'Industries We ', headHighlight: 'Serve', sub: 'Local SEO works for any business with a physical location or service area.' },
    industries: ['Restaurants & Cafes', 'Medical & Dental', 'Legal Services', 'Home Services', 'Retail Stores', 'Auto Services', 'Real Estate', 'Fitness & Wellness', 'Professional Services', 'Beauty & Salons', 'Pet Services', 'Education'],
    process: { badge: 'Our Process', headPre: 'How We ', headHighlight: 'Put You on the Map' },
    processItems: [
      { step: '01', title: 'Local Audit', description: 'Analyze your current local presence, citations, and competitor landscape.' },
      { step: '02', title: 'GBP Optimization', description: 'Fully optimize your Google Business Profile with complete information and media.' },
      { step: '03', title: 'Citation Building', description: 'Build and clean up citations across major directories for consistency.' },
      { step: '04', title: 'Ongoing Management', description: 'Continuous optimization, review management, and local content creation.' }
    ],
    testimonial: {
      quote: '"We went from invisible to #1 in Google Maps for our main services. Phone calls increased by 200% and we had to hire more staff!"',
      author: 'Robert de Vries', role: 'Owner, Amsterdam Plumbing Services'
    },
    lead: {
      heading: 'Ready to Dominate Local Search?',
      sub: 'Get a free local SEO audit and discover how to outrank your competitors in Google Maps and local search results.',
      bullets: ['Google Business Profile audit', 'Local citation analysis', 'Competitor comparison', 'Custom local strategy'],
      title: 'Get Your Free Local SEO Audit', subject: 'Local SEO Audit Request',
      button: 'Get My Free Audit', footnote: 'Free audit. See where you stand in local search.',
      business: 'Business Name', businessPh: 'Your Business Name',
      name: 'Your Name', namePh: 'John Doe',
      phone: 'Phone', phonePh: '+31 6 1234 5678',
      email: 'Email', emailPh: 'john@business.com',
      location: 'City/Region', locationPh: 'Amsterdam, Netherlands'
    },
    quick: { heading: 'Ready to get found locally?', sub: "Let's discuss your local SEO goals today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'Lokale SEO',
    headPre: 'Domineer ', headHighlight: 'lokaal zoeken', headPost: ' & Google Maps',
    sub: 'Word gevonden door klanten in jouw regio op het moment dat ze naar je diensten zoeken. We zetten je bedrijf letterlijk op de kaart en zorgen voor meer bezoekers en telefoontjes.',
    ctaAudit: 'Vraag lokale SEO-audit', ctaServices: 'Onze diensten',
    quickStat1: { value: '300%', label: 'Gem. verkeersgroei' },
    quickStat2: { value: 'Top 3', label: 'Posities in Map Pack' },
    searchQuery: 'digital marketing in de buurt', yourBiz: 'Jouw bedrijf', competitor: 'Concurrent A',
    floats: { rating: '4.9 beoordeling', calls: '+47 gesprekken/week', dirs: '+89 routes', views: '2.5K weergaven' },
    stats: [
      { value: '46%', label: 'Van Google-zoekopdrachten', description: 'Heeft lokale intentie' },
      { value: '88%', label: 'Van lokale zoekers', description: 'Belt of bezoekt binnen 24u' },
      { value: '3x', label: 'Meer zichtbaarheid', description: 'In Google Maps' },
      { value: '76%', label: 'Bezoekt een bedrijf', description: 'Binnen een dag na zoeken' }
    ],
    whyBadge: 'Waarom lokale SEO', whyHeadPre: 'Je klanten zoeken ', whyHeadHighlight: 'lokaal',
    whyBody: 'Wanneer iemand zoekt op "in de buurt" of een stadsnaam toevoegt, staat hij/zij klaar om te kopen. Lokale SEO zorgt dat jouw bedrijf precies op dat moment verschijnt \u2014 wanneer klanten zoeken naar wat jij biedt.',
    whyPoints: [
      '88% van lokale mobiele zoekopdrachten leidt binnen 24 uur tot een telefoontje of bezoek',
      '72% van consumenten die lokaal zoeken bezoekt binnen 8 km een winkel',
      '"In de buurt"-zoekopdrachten zijn de laatste jaren met meer dan 500% gegroeid'
    ],
    reviews: [
      { stars: 5, text: 'Beste service in de regio! Aanrader.', author: 'M. Jansen' },
      { stars: 5, text: 'Professioneel en snel gereageerd.', author: 'A. Smit' },
      { stars: 5, text: 'Gevonden via Google Maps. Top ervaring!', author: 'J. Willems' }
    ],
    helpReviews: 'We helpen je aan meer van dit soort reviews!',
    servicesSection: { badge: 'Onze diensten', headPre: 'Complete lokale SEO-', headHighlight: 'oplossingen', sub: 'Alles wat je nodig hebt om lokale zoekresultaten en Google Maps in jouw regio te domineren.' },
    services: [
      { title: 'Google Bedrijfsprofiel', description: 'Volledige inrichting en optimalisatie van je Google Bedrijfsprofiel voor maximale lokale zichtbaarheid.' },
      { title: 'Lokale citations', description: 'Consistente NAP (naam, adres, telefoon) op 100+ lokale directories en platforms.' },
      { title: 'Reviewmanagement', description: 'Genereer meer positieve reviews en beheer je online reputatie professioneel.' },
      { title: 'Lokale content', description: 'Maak locatie-specifieke content die rankt op "in de buurt" en lokale zoekwoorden.' },
      { title: 'Lokale linkbuilding', description: 'Verdien backlinks van lokale bedrijven, organisaties en community-websites.' },
      { title: 'Geo-getargete optimalisatie', description: 'Optimaliseer voor meerdere locaties en werkgebieden om lokaal zoekverkeer te pakken.' }
    ],
    mapPack: { badge: 'Google Maps-optimalisatie', headPre: 'Kom in de Google ', headHighlight: 'Map Pack', sub: 'De top 3 in Google Maps krijgt 70% van alle lokale clicks. We helpen je die plek te claimen.' },
    mapPackBenefits: [
      { title: 'Google Maps-dominantie', description: 'Verschijn in de begeerde "3-pack" van Google Maps-resultaten voor lokale zoekopdrachten.' },
      { title: 'Routes & gesprekken', description: 'Maak het klanten makkelijk om je te vinden en direct vanuit de zoekresultaten contact op te nemen.' },
      { title: 'Reviews in beeld', description: 'Laat je sterrenscore en reviews prominent zien om direct vertrouwen te wekken.' },
      { title: 'Visuele aanwezigheid', description: 'Toon foto\u2019s van je zaak, producten en team om meer klanten aan te trekken.' }
    ],
    industriesSection: { headPre: 'Branches die we ', headHighlight: 'bedienen', sub: 'Lokale SEO werkt voor elk bedrijf met een fysieke locatie of werkgebied.' },
    industries: ['Restaurants & cafés', 'Medisch & tandheelkundig', 'Juridische diensten', 'Klusbedrijven', 'Winkels', 'Auto-diensten', 'Makelaardij', 'Fitness & wellness', 'Zakelijke dienstverlening', 'Beauty & kappers', 'Dierenservices', 'Onderwijs'],
    process: { badge: 'Onze werkwijze', headPre: 'Zo zetten we je ', headHighlight: 'op de kaart' },
    processItems: [
      { step: '01', title: 'Lokale audit', description: 'Analyseer je huidige lokale aanwezigheid, citations en concurrentie.' },
      { step: '02', title: 'GBP-optimalisatie', description: 'Optimaliseer je Google Bedrijfsprofiel volledig met complete informatie en media.' },
      { step: '03', title: 'Citations bouwen', description: 'Bouw en saneer citations op grote directories voor consistentie.' },
      { step: '04', title: 'Doorlopend beheer', description: 'Continue optimalisatie, reviewmanagement en lokale contentcreatie.' }
    ],
    testimonial: {
      quote: '"We waren onzichtbaar en staan nu #1 in Google Maps voor onze belangrijkste diensten. Telefoontjes stegen met 200% \u2014 we moesten extra mensen aannemen!"',
      author: 'Robert de Vries', role: 'Eigenaar, Amsterdam Plumbing Services'
    },
    lead: {
      heading: 'Klaar om lokaal te domineren?',
      sub: 'Vraag een gratis lokale SEO-audit aan en ontdek hoe je concurrenten in Google Maps en lokale zoekresultaten verslaat.',
      bullets: ['Audit Google Bedrijfsprofiel', 'Analyse van lokale citations', 'Concurrentievergelijking', 'Lokale strategie op maat'],
      title: 'Vraag je gratis lokale SEO-audit', subject: 'Aanvraag lokale SEO-audit',
      button: 'Vraag mijn gratis audit', footnote: 'Gratis audit. Zie waar je staat in lokaal zoeken.',
      business: 'Bedrijfsnaam', businessPh: 'Naam van je bedrijf',
      name: 'Je naam', namePh: 'Jan Jansen',
      phone: 'Telefoon', phonePh: '+31 6 1234 5678',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      location: 'Stad/regio', locationPh: 'Amsterdam, Nederland'
    },
    quick: { heading: 'Klaar om lokaal gevonden te worden?', sub: 'Laten we vandaag je lokale SEO-doelen bespreken.', email: 'Mail ons' }
  }
} as const

const SERVICE_ICONS = [Building2, MapPin, Star, FileText, Globe, Target]
const MAP_PACK_ICONS = [Map, Navigation, Star, Camera]
const WHY_ICONS = [Clock, ThumbsUp, TrendingUp]

export default function LocalSEO() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
                <Link to={ROUTES.home[locale]} className="text-white/60 hover:text-white transition-colors">{t.crumbHome}</Link>
                <span className="text-white/40" aria-hidden>/</span>
                <Link to={ROUTES.marketing[locale]} className="text-white/60 hover:text-white transition-colors">{t.crumbMarketing}</Link>
                <span className="text-white/40" aria-hidden>/</span>
                <span className="text-white">{t.crumbCurrent}</span>
              </nav>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t.headPre}<span className="text-emerald-200">{t.headHighlight}</span>{t.headPost}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-emerald-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaAudit}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaServices}
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-200" aria-hidden />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{t.quickStat1.value}</div>
                    <div className="text-xs text-white/60">{t.quickStat1.label}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-200" aria-hidden />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{t.quickStat2.value}</div>
                    <div className="text-xs text-white/60">{t.quickStat2.label}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-4 shadow-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="w-4 h-4 text-white/60" aria-hidden />
                    <span className="text-sm text-white/80">{t.searchQuery}</span>
                  </div>
                  <div className="h-32 bg-emerald-800/30 rounded-lg mb-3 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-1/4 left-1/4 w-px h-full bg-white/30" />
                      <div className="absolute top-1/4 left-2/4 w-px h-full bg-white/30" />
                      <div className="absolute top-1/4 left-3/4 w-px h-full bg-white/30" />
                      <div className="absolute top-1/4 left-0 w-full h-px bg-white/30" />
                      <div className="absolute top-2/4 left-0 w-full h-px bg-white/30" />
                      <div className="absolute top-3/4 left-0 w-full h-px bg-white/30" />
                    </div>
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <MapPin className="w-5 h-5 text-white" aria-hidden />
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/4">
                      <div className="w-4 h-4 bg-white/50 rounded-full" />
                    </div>
                    <div className="absolute top-2/3 left-2/3">
                      <div className="w-4 h-4 bg-white/50 rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-2 bg-white/10 rounded-lg">
                      <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate">{t.yourBiz}</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" aria-hidden />
                          ))}
                          <span className="text-xs text-white/60 ml-1">(128)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-2 rounded-lg opacity-60">
                      <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white/70 truncate">{t.competitor}</div>
                        <div className="flex items-center gap-1">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400/60 fill-current" aria-hidden />
                          ))}
                          <span className="text-xs text-white/40 ml-1">(45)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-yellow-300 fill-current" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.rating}</span>
                </div>
              </div>
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Phone className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.calls}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Navigation className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.dirs}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Users className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-white/90">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" aria-hidden />
                <span>{t.whyBadge}</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                {t.whyHeadPre}<span className="gradient-text">{t.whyHeadHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">{t.whyBody}</p>

              <div className="space-y-4">
                {t.whyPoints.map((point, index) => {
                  const Icon = WHY_ICONS[index]
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-emerald-600" aria-hidden />
                      </div>
                      <p className="text-slate-600 pt-2">{point}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              {t.reviews.map((review, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-3">"{review.text}"</p>
                  <p className="text-sm text-slate-500">— {review.author}</p>
                </div>
              ))}
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 text-center">
                <MessageSquare className="w-8 h-8 text-emerald-600 mx-auto mb-2" aria-hidden />
                <p className="text-emerald-700 font-medium">{t.helpReviews}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.servicesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.servicesSection.headPre}<span className="gradient-text">{t.servicesSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.servicesSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i]
              return (
                <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Map className="w-4 h-4" aria-hidden />
              <span>{t.mapPack.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.mapPack.headPre}<span className="text-emerald-300">{t.mapPack.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.mapPack.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.mapPackBenefits.map((benefit, i) => {
              const Icon = MAP_PACK_ICONS[i]
              return (
                <div key={benefit.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <Icon className="w-10 h-10 text-emerald-300 mb-4" aria-hidden />
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/70">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              {t.industriesSection.headPre}<span className="gradient-text">{t.industriesSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.industriesSection.sub}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {t.industries.map((industry) => (
              <div key={industry} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" aria-hidden />
                <span className="text-slate-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              <Target className="w-4 h-4" aria-hidden />
              <span>{t.process.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.process.headPre}<span className="gradient-text">{t.process.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.processItems.map((step, index) => (
              <div key={step.step} className="relative">
                {index < t.processItems.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-emerald-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">{t.testimonial.quote}</blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600" />
              <div className="text-left">
                <div className="font-semibold text-white">{t.testimonial.author}</div>
                <div className="text-slate-400 text-sm">{t.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t.lead.heading}</h2>
                <p className="text-lg text-white/90 mb-8">{t.lead.sub}</p>
                <ul className="space-y-3">
                  {t.lead.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/25"
                footnote={t.lead.footnote}
              >
                <div>
                  <label htmlFor="lseo-biz" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.business}</label>
                  <input type="text" id="lseo-biz" name="businessName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder={t.lead.businessPh} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lseo-name" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.name}</label>
                    <input type="text" id="lseo-name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder={t.lead.namePh} />
                  </div>
                  <div>
                    <label htmlFor="lseo-phone" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.phone}</label>
                    <input type="tel" id="lseo-phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder={t.lead.phonePh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="lseo-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="lseo-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="lseo-loc" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.location}</label>
                  <input type="text" id="lseo-loc" name="location" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder={t.lead.locationPh} />
                </div>
              </LeadForm>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">{t.quick.heading}</h3>
              <p className="text-slate-400">{t.quick.sub}</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+31625580415" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" aria-hidden />
                +31 6 25580415
              </a>
              <a href="mailto:info@amoradigital.nl" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors">
                <Mail className="w-4 h-4" aria-hidden />
                {t.quick.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
