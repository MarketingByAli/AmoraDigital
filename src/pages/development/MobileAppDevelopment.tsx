import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, Smartphone, Tablet, Download, Bell, MapPin, Camera, Shield,
  Star, Phone, Mail, Settings, Layers, Code2, Cpu, Cloud, BarChart3, Users, Rocket, Globe
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbDev: 'Development', crumbCurrent: 'Mobile Apps',
    headPre: 'Apps That Users ', headHighlight: 'Love',
    sub: "From concept to App Store, we build beautiful, high-performance mobile apps for iOS and Android. Native or cross-platform\u2014we've got you covered.",
    ctaStart: 'Build Your App', ctaPlatforms: 'View Platforms',
    trust1: '2M+ Downloads', trust2: '4.8 Avg. Rating',
    appLabel: 'Your App',
    floats: { rn: 'React Native', ios: 'iOS', android: 'Android', flutter: 'Flutter' },
    stats: [
      { value: '75+', label: 'Apps Launched', description: 'iOS & Android' },
      { value: '4.8★', label: 'Avg. Rating', description: 'On app stores' },
      { value: '2M+', label: 'Downloads', description: 'Total installs' },
      { value: '99.5%', label: 'Crash-Free', description: 'App stability' }
    ],
    featuresSection: { badge: 'App Features', headPre: 'Powerful ', headHighlight: 'Capabilities', sub: 'We integrate all the features modern apps need to delight users.' },
    features: [
      { title: 'Push Notifications', description: 'Engage users with timely alerts' },
      { title: 'Location Services', description: 'GPS, maps, and geofencing' },
      { title: 'Camera & Media', description: 'Photos, videos, and AR features' },
      { title: 'Secure Auth', description: 'Biometrics, OAuth, and encryption' },
      { title: 'Offline Mode', description: 'Work without internet connection' },
      { title: 'Device Integration', description: 'Sensors, Bluetooth, and NFC' }
    ],
    servicesSection: { badge: 'Our Services', headPre: 'Mobile App ', headHighlight: 'Services' },
    services: [
      { title: 'iOS Development', description: 'Native iOS apps with Swift for the best iPhone and iPad experience.' },
      { title: 'Android Development', description: 'Native Android apps with Kotlin for maximum device compatibility.' },
      { title: 'Cross-Platform Apps', description: 'React Native and Flutter apps that work on both iOS and Android.' },
      { title: 'Progressive Web Apps', description: 'Web apps that feel native with offline support and push notifications.' },
      { title: 'Backend & APIs', description: 'Robust backend infrastructure to power your mobile application.' },
      { title: 'App Maintenance', description: 'Ongoing updates, bug fixes, and new feature development.' }
    ],
    platformsSection: { badge: 'Platforms', headPre: 'Choose Your ', headHighlight: 'Platform', sub: 'We help you pick the right technology based on your goals, budget, and timeline.' },
    platforms: [
      { name: 'React Native', description: 'Cross-platform with JavaScript', color: 'from-cyan-500 to-blue-600', pros: ['Single codebase', 'Fast development', 'Large community'] },
      { name: 'Flutter', description: 'Cross-platform with Dart', color: 'from-blue-400 to-blue-600', pros: ['Beautiful UI', 'Fast performance', 'Google backed'] },
      { name: 'Swift (iOS)', description: 'Native Apple development', color: 'from-orange-500 to-orange-600', pros: ['Best iOS performance', 'Full Apple APIs', 'Latest features'] },
      { name: 'Kotlin (Android)', description: 'Native Android development', color: 'from-purple-500 to-purple-600', pros: ['Best Android UX', 'Full Google APIs', 'Jetpack Compose'] }
    ],
    typesSection: { badge: 'What We Build', headPre: 'Apps for Every ', headHighlight: 'Industry' },
    appTypes: [
      { title: 'Business Apps', examples: ['CRM Mobile', 'Field Service', 'Inventory'] },
      { title: 'Consumer Apps', examples: ['Social', 'Lifestyle', 'Entertainment'] },
      { title: 'E-Commerce Apps', examples: ['Shopping', 'Marketplace', 'Delivery'] },
      { title: 'Healthcare Apps', examples: ['Telehealth', 'Fitness', 'Patient Portal'] }
    ],
    processSection: { badge: 'Our Process', headPre: 'From Idea to ', headHighlight: 'App Store' },
    process: [
      { step: '01', title: 'Discovery', description: 'Define goals, target users, features, and choose the right platform.' },
      { step: '02', title: 'UI/UX Design', description: 'Create wireframes, prototypes, and stunning visual designs.' },
      { step: '03', title: 'Development', description: 'Build the app with agile sprints and regular progress demos.' },
      { step: '04', title: 'Testing', description: 'Rigorous QA on real devices, beta testing, and bug fixes.' },
      { step: '05', title: 'Launch', description: 'App store submission, optimization, and launch support.' },
      { step: '06', title: 'Growth', description: 'Analytics, updates, and new features based on user feedback.' }
    ],
    includedSection: { badge: 'Deliverables', headPre: 'What You ', headHighlight: 'Get', sub: 'Every mobile app project includes everything you need for a successful launch and beyond.' },
    deliverables: [
      'Native or cross-platform app', 'App Store & Play Store listing', 'Backend API & database',
      'Admin dashboard', 'Push notification system', 'Analytics integration', 'User documentation',
      'Source code & assets', '90-day bug fix warranty', 'Launch support'
    ],
    storeMock: { heading: 'Your App on the Stores', name: 'Your Amazing App', company: 'Your Company Name', cta: 'GET', downloads: 'Downloads', rating: 'Rating', category: 'Category' },
    testimonial: {
      quote: '"Our React Native app hit 100K downloads in the first month. The team delivered a polished product that our users love. 4.8 stars on both App Store and Play Store!"',
      author: 'Sophie Jansen', role: 'Founder, FitLife App'
    },
    lead: {
      heading: 'Ready to Build Your App?',
      sub: "From startup MVPs to enterprise apps, we bring your mobile vision to life. Let's discuss your app idea.",
      bullets: ['Free app consultation', 'Platform recommendation', 'Feature planning', 'Timeline & cost estimate'],
      title: 'Start Your App Project', subject: 'Mobile App Development Inquiry',
      button: 'Get Free Consultation', footnote: "Free consultation. We'll respond within 24 hours.",
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com',
      platform: 'Target Platform', platformPh: 'Select platform',
      platformOpts: ['iOS & Android', 'iOS Only', 'Android Only', 'Not sure yet'],
      appType: 'App Type', appTypePh: 'Select app type',
      appTypeOpts: ['Consumer App', 'Business App', 'E-Commerce App', 'Social / Community', 'Other']
    },
    quick: { heading: 'Ready to launch your mobile app?', sub: "Let's discuss your app idea today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbDev: 'Ontwikkeling', crumbCurrent: 'Mobiele apps',
    headPre: 'Apps waar gebruikers ', headHighlight: 'dol op zijn',
    sub: 'Van concept tot App Store \u2014 wij bouwen mooie, krachtige mobiele apps voor iOS en Android. Native of cross-platform \u2014 wij regelen het.',
    ctaStart: 'Bouw je app', ctaPlatforms: 'Bekijk platforms',
    trust1: '2M+ downloads', trust2: 'Gem. score 4,8',
    appLabel: 'Jouw app',
    floats: { rn: 'React Native', ios: 'iOS', android: 'Android', flutter: 'Flutter' },
    stats: [
      { value: '75+', label: 'Apps gelanceerd', description: 'iOS & Android' },
      { value: '4,8★', label: 'Gem. score', description: 'In appstores' },
      { value: '2M+', label: 'Downloads', description: 'Totaal aantal installs' },
      { value: '99,5%', label: 'Crash-vrij', description: 'App-stabiliteit' }
    ],
    featuresSection: { badge: 'App-features', headPre: 'Krachtige ', headHighlight: 'mogelijkheden', sub: 'We integreren alle features die moderne apps nodig hebben om gebruikers te verrassen.' },
    features: [
      { title: 'Push-notificaties', description: 'Engage gebruikers met de juiste meldingen op het juiste moment' },
      { title: 'Locatie-services', description: 'GPS, kaarten en geofencing' },
      { title: 'Camera & media', description: "Foto's, video's en AR-features" },
      { title: 'Veilige authenticatie', description: 'Biometrie, OAuth en encryptie' },
      { title: 'Offline-modus', description: 'Werken zonder internetverbinding' },
      { title: 'Device-integraties', description: 'Sensoren, Bluetooth en NFC' }
    ],
    servicesSection: { badge: 'Onze diensten', headPre: 'Mobiele-app-', headHighlight: 'diensten' },
    services: [
      { title: 'iOS-development', description: 'Native iOS-apps met Swift voor de beste iPhone- en iPad-ervaring.' },
      { title: 'Android-development', description: 'Native Android-apps met Kotlin voor maximale device-compatibiliteit.' },
      { title: 'Cross-platform apps', description: 'React Native- en Flutter-apps die werken op iOS én Android.' },
      { title: 'Progressive Web Apps', description: 'Webapps die native aanvoelen met offline-support en push-notificaties.' },
      { title: "Backend & API's", description: 'Robuuste backend-infrastructuur als motor onder je app.' },
      { title: 'App-onderhoud', description: 'Doorlopende updates, bugfixes en nieuwe features.' }
    ],
    platformsSection: { badge: 'Platforms', headPre: 'Kies je ', headHighlight: 'platform', sub: 'We helpen je de juiste technologie te kiezen op basis van je doelen, budget en timing.' },
    platforms: [
      { name: 'React Native', description: 'Cross-platform met JavaScript', color: 'from-cyan-500 to-blue-600', pros: ['Eén codebase', 'Snelle ontwikkeling', 'Grote community'] },
      { name: 'Flutter', description: 'Cross-platform met Dart', color: 'from-blue-400 to-blue-600', pros: ['Mooie UI', 'Snelle performance', 'Door Google gesteund'] },
      { name: 'Swift (iOS)', description: 'Native Apple-development', color: 'from-orange-500 to-orange-600', pros: ['Beste iOS-performance', "Volledige Apple-API's", 'Nieuwste features'] },
      { name: 'Kotlin (Android)', description: 'Native Android-development', color: 'from-purple-500 to-purple-600', pros: ['Beste Android-UX', "Volledige Google-API's", 'Jetpack Compose'] }
    ],
    typesSection: { badge: 'Wat we bouwen', headPre: 'Apps voor elke ', headHighlight: 'branche' },
    appTypes: [
      { title: 'Business-apps', examples: ['CRM Mobile', 'Field Service', 'Voorraad'] },
      { title: 'Consumenten-apps', examples: ['Social', 'Lifestyle', 'Entertainment'] },
      { title: 'E-commerce-apps', examples: ['Shopping', 'Marketplace', 'Bezorging'] },
      { title: 'Zorg-apps', examples: ['Telehealth', 'Fitness', 'Patiëntportaal'] }
    ],
    processSection: { badge: 'Onze werkwijze', headPre: 'Van idee naar ', headHighlight: 'app store' },
    process: [
      { step: '01', title: 'Discovery', description: 'Doelen, doelgroep en features bepalen \u2014 en het juiste platform kiezen.' },
      { step: '02', title: 'UI/UX-ontwerp', description: 'Wireframes, prototypes en prachtige visuele ontwerpen.' },
      { step: '03', title: 'Ontwikkeling', description: 'De app bouwen in agile sprints met regelmatige demo\'s.' },
      { step: '04', title: 'Testen', description: 'Grondige QA op echte devices, beta-testing en bugfixes.' },
      { step: '05', title: 'Lancering', description: 'App-store-inzending, optimalisatie en launch-support.' },
      { step: '06', title: 'Groei', description: 'Analytics, updates en nieuwe features op basis van feedback.' }
    ],
    includedSection: { badge: 'Wat je krijgt', headPre: 'Wat je ', headHighlight: 'ontvangt', sub: 'Elk app-project bevat alles wat je nodig hebt voor een succesvolle lancering en daarna.' },
    deliverables: [
      'Native of cross-platform app', 'App Store- & Play Store-listing', 'Backend-API & database',
      'Admin-dashboard', 'Push-notificatie-systeem', 'Analytics-integratie', 'Gebruikersdocumentatie',
      'Broncode & assets', '90-dagen bugfix-garantie', 'Launch-support'
    ],
    storeMock: { heading: 'Jouw app in de stores', name: 'Jouw geweldige app', company: 'Jouw bedrijfsnaam', cta: 'INSTALL', downloads: 'Downloads', rating: 'Score', category: 'Categorie' },
    testimonial: {
      quote: '"Onze React Native-app haalde 100K downloads in de eerste maand. Het team leverde een gepolijst product waar onze gebruikers dol op zijn. 4,8 sterren in zowel App Store als Play Store!"',
      author: 'Sophie Jansen', role: 'Founder, FitLife App'
    },
    lead: {
      heading: 'Klaar om je app te bouwen?',
      sub: "Van start-up-MVP's tot enterprise-apps \u2014 wij brengen je mobiele visie tot leven. Laten we je idee bespreken.",
      bullets: ['Gratis app-consult', 'Platformadvies', 'Feature-planning', 'Tijdlijn- & kostenraming'],
      title: 'Start je app-project', subject: 'Aanvraag mobiele-app-development',
      button: 'Vraag gratis consult', footnote: 'Gratis consult. We reageren binnen 24 uur.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      platform: 'Doelplatform', platformPh: 'Kies platform',
      platformOpts: ['iOS & Android', 'Alleen iOS', 'Alleen Android', 'Weet ik nog niet'],
      appType: 'Type app', appTypePh: 'Kies type app',
      appTypeOpts: ['Consumenten-app', 'Business-app', 'E-commerce-app', 'Social / Community', 'Anders']
    },
    quick: { heading: 'Klaar om je mobiele app te lanceren?', sub: 'Laten we vandaag je app-idee bespreken.', email: 'Mail ons' }
  }
} as const

const FEATURE_ICONS = [Bell, MapPin, Camera, Shield, Download, Cpu]
const SERVICE_ICONS = [Smartphone, Tablet, Layers, Globe, Cloud, Settings]
const APP_TYPE_ICONS = [BarChart3, Users, Smartphone, Shield]

export default function MobileAppDevelopment() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
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
                <Link to={ROUTES.development[locale]} className="text-white/60 hover:text-white transition-colors">{t.crumbDev}</Link>
                <span className="text-white/40" aria-hidden>/</span>
                <span className="text-white">{t.crumbCurrent}</span>
              </nav>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t.headPre}<span className="text-blue-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaStart}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#platforms" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaPlatforms}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-200 fill-current" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="w-52 h-[420px] bg-slate-900 rounded-[3rem] border-4 border-slate-800 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-10" />
                    <div className="h-full bg-gradient-to-br from-blue-500 to-purple-600 p-4 pt-10">
                      <div className="flex justify-between items-center text-white/70 text-xs mb-6">
                        <span>9:41</span>
                        <div className="flex gap-1"><div className="w-4 h-2 bg-white/70 rounded-sm" /></div>
                      </div>
                      <div className="text-white text-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl mx-auto mb-2" />
                        <div className="text-sm font-semibold">{t.appLabel}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 bg-white/10 rounded-xl" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-16 bg-white/10 rounded-xl" />
                          <div className="h-16 bg-white/10 rounded-xl" />
                        </div>
                        <div className="h-12 bg-white/20 rounded-xl" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-around px-4">
                        <div className="w-6 h-6 bg-white/40 rounded-full" />
                        <div className="w-6 h-6 bg-white/40 rounded-full" />
                        <div className="w-6 h-6 bg-white rounded-full" />
                        <div className="w-6 h-6 bg-white/40 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-16 top-8 w-44 h-[360px] bg-slate-900 rounded-[2.5rem] border-4 border-slate-800 shadow-xl overflow-hidden opacity-60 -z-10">
                    <div className="h-full bg-gradient-to-br from-emerald-500 to-teal-600 p-3 pt-8">
                      <div className="space-y-2">
                        <div className="h-16 bg-white/10 rounded-lg" />
                        <div className="h-16 bg-white/10 rounded-lg" />
                        <div className="h-16 bg-white/10 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Code2 className="w-4 h-4 text-cyan-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.rn}</span>
                </div>
              </div>
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-sm">
                  <Smartphone className="w-4 h-4 text-orange-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.ios}</span>
                </div>
              </div>
              <div className="absolute bottom-28 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Tablet className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.android}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Layers className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.flutter}</span>
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.featuresSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.featuresSection.headPre}<span className="gradient-text">{t.featuresSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.featuresSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div key={feature.title} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:shadow-lg transition-all border border-transparent hover:border-blue-100">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" aria-hidden />
              <span>{t.servicesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.servicesSection.headPre}<span className="gradient-text">{t.servicesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i]
              return (
                <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section id="platforms" className="py-20 lg:py-28 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
              <span>{t.platformsSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.platformsSection.headPre}<span className="text-blue-300">{t.platformsSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.platformsSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.platforms.map((platform) => (
              <div key={platform.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Code2 className="w-7 h-7 text-white" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{platform.name}</h3>
                <p className="text-sm text-white/70 mb-4">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.pros.map((pro) => (
                    <li key={pro} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-300" aria-hidden />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" aria-hidden />
              <span>{t.typesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.typesSection.headPre}<span className="gradient-text">{t.typesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.appTypes.map((type, i) => {
              const Icon = APP_TYPE_ICONS[i]
              return (
                <div key={type.title} className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-blue-50 hover:to-indigo-50 transition-all border border-slate-200 hover:border-blue-200 group text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{type.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {type.examples.map((example) => (
                      <span key={example} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{example}</span>
                    ))}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" aria-hidden />
              <span>{t.processSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.processSection.headPre}<span className="gradient-text">{t.processSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.process.map((step) => (
              <div key={step.step} className="relative p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-blue-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" aria-hidden />
                <span>{t.includedSection.badge}</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                {t.includedSection.headPre}<span className="gradient-text">{t.includedSection.headHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">{t.includedSection.sub}</p>

              <div className="grid grid-cols-2 gap-3">
                {t.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" aria-hidden />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-6">{t.storeMock.heading}</h4>

              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1">{t.storeMock.name}</div>
                    <div className="text-xs text-slate-400 mb-2">{t.storeMock.company}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" aria-hidden />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400">4.9 (2.3K)</span>
                    </div>
                  </div>
                  <button type="button" className="px-4 py-1.5 bg-blue-500 text-white text-sm font-semibold rounded-full">{t.storeMock.cta}</button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-white">50K+</div>
                  <div className="text-xs text-slate-400">{t.storeMock.downloads}</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-white">4.9★</div>
                  <div className="text-xs text-slate-400">{t.storeMock.rating}</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-white">#1</div>
                  <div className="text-xs text-slate-400">{t.storeMock.category}</div>
                </div>
              </div>
            </div>
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />
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
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-12 lg:p-16 overflow-hidden">
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
                      <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-blue-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mb-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="mb-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="mb-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="mb-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="mb-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="mb-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="mb-platform" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.platform}</label>
                  <select id="mb-platform" name="platform" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <option value="">{t.lead.platformPh}</option>
                    {t.lead.platformOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="mb-apptype" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.appType}</label>
                  <select id="mb-apptype" name="appType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <option value="">{t.lead.appTypePh}</option>
                    {t.lead.appTypeOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
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
