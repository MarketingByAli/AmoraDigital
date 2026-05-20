import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Zap, Sparkles, Link2, QrCode, BarChart3, Globe, Star,
  MousePointerClick, Users, Target, FileText, Video, Share2, ExternalLink, Code2, Palette,
  TrendingUp, Settings, Heart
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbProducts: 'Products', crumbCurrent: 'Hi.fan',
    badge: 'Bio Link Platform',
    headPre: 'Your All-in-One Solution for ', headHighlight: 'Bio Pages & Links',
    sub: "Make every click count. Hi.fan empowers you to create eye-catching bio pages and custom links that drive engagement and boost your brand's visibility. One link, infinite possibilities.",
    ctaVisit: 'Visit Hi.fan', ctaPricing: 'View Pricing',
    trust1: 'Trusted by Millions', trust2: 'Free Forever Plan',
    profile: { handle: '@yourname', role: 'Creator \u2022 Entrepreneur', l1: 'Website', l2: 'Portfolio', l3: 'Contact' },
    floats: { noCoding: 'No Coding', analytics: 'Analytics', qr: 'QR Codes', fast: 'Fast Setup' },
    benefitsSection: { badge: 'Why Choose Hi.fan', headPre: 'Simplify Your Online Presence, ', headHighlight: 'Amplify Your Reach', sub: 'Stop juggling multiple links across different platforms. Hi.fan gives you one powerful hub to connect everything.' },
    benefits: [
      { title: 'One Link, Infinite Possibilities', description: 'Share all your important content, social media, products, and services through a single, beautiful link.', stat: '1', statLabel: 'Link for Everything' },
      { title: 'Drive More Engagement', description: 'Interactive widgets, custom CTAs, and trackable links help you convert visitors into customers.', stat: '3x', statLabel: 'More Clicks' },
      { title: 'Make Data-Driven Decisions', description: 'Real-time analytics show you exactly where your traffic comes from and what content performs best.', stat: '100%', statLabel: 'Visibility' }
    ],
    featuresSection: { badge: 'Powerful Features', headPre: 'Everything You Need to ', headHighlight: 'Connect & Engage', sub: 'From dynamic widgets to advanced analytics, Hi.fan provides all the tools you need to maximize your online presence.' },
    features: [
      { title: 'Custom Bio Pages', description: 'Create stunning bio pages that showcase all your content in one place. No coding required, fully customizable.' },
      { title: 'Dynamic QR Codes', description: 'Generate trackable, customizable QR codes. Match your brand colors, add logos, and monitor performance.' },
      { title: 'Advanced Analytics', description: 'Track clicks, visits, user locations, and engagement. Understand your audience with detailed insights.' },
      { title: 'Custom Branding', description: 'Branded domain names and fully customized designs. Make it truly yours and build trust with your audience.' },
      { title: 'Dynamic Widgets', description: 'Add payment buttons, video embeds, social posts, contact forms, and more to engage your audience.' },
      { title: 'File Sharing', description: 'Upload, host, and share files directly from your bio page. Easy file management for your audience.' },
      { title: 'Smart Targeting', description: 'Apply restrictions and target users by country, language, and device. Reach the right audience.' },
      { title: 'Team Management', description: 'Invite team members and assign privileges. Collaborate seamlessly and manage everything together.' }
    ],
    advSection: { badge: 'Advanced Tools', headPre: 'Features That Drive ', headHighlight: 'Real Results', sub: 'Go beyond basic bio links with enterprise-level features designed for professionals and growing businesses.' },
    advFeatures: [
      { name: 'CTA Overlays', description: 'Display notifications, polls, or contact forms' },
      { name: 'Event Tracking', description: 'Add pixels from Facebook and track events' },
      { name: 'Campaigns & Channels', description: 'Organize links and get aggregated stats' },
      { name: 'Developer API', description: 'Build custom applications with powerful API' }
    ],
    casesSection: { badge: 'Use Cases', headPre: 'Perfect For Every ', headHighlight: 'Creator & Business' },
    useCases: [
      'Social Media Links', 'Content Creators', 'Influencer Marketing', 'E-commerce Stores',
      'Event Promotions', 'Portfolio Showcases', 'Product Launches', 'Lead Generation',
      'Digital Business Cards', 'Restaurant Menus', 'Music & Artists', 'Course Creators'
    ],
    testimonialsSection: { headPre: 'Trusted by ', headHighlight: 'Creators Worldwide' },
    testimonials: [
      { name: 'Shawn Greenway', role: 'Agency Owner, BrandLyft', quote: "Hi.Fan has been a game-changer for our team! It's efficient, user-friendly, and adaptable. Creating a sleek bio page with all essential links makes communication seamless and boosts engagement effortlessly!" },
      { name: 'Natia Nargizashvili', role: 'Project Manager', quote: 'I\u2019ve tried other "link in bio" tools, but nothing compares to Hi.Fan! It\u2019s super intuitive, customizable, and helps me drive more traffic to my content. My engagement has noticeably increased!' }
    ],
    cta1: {
      heading: 'Ready to Create Your Bio Page?',
      sub: 'Join millions of creators, influencers, and businesses using Hi.fan to connect with their audience. Get started free in minutes.',
      button: 'Get Started Free', footnote: 'Free forever. No credit card required.'
    },
    cta2: {
      heading: 'Need Your Own Custom Platform?',
      sub: 'We built Hi.fan, and we can build custom bio link platforms, SaaS applications, or web platforms tailored to your unique business model and requirements.',
      bullets: ['Custom branding & features', 'Scalable architecture', 'Full ownership & control', 'Ongoing support & updates'],
      button: 'Build Your Own Custom Platform'
    },
    quick: { heading: 'Questions about Hi.fan?', sub: 'Visit our platform or reach out to learn more.', visit: 'Visit Hi.fan', contact: 'Contact Us' }
  },
  nl: {
    crumbHome: 'Home', crumbProducts: 'Producten', crumbCurrent: 'Hi.fan',
    badge: 'Bio-link-platform',
    headPre: 'Jouw alles-in-één-oplossing voor ', headHighlight: 'bio-pagina\u2019s en links',
    sub: "Laat elke klik tellen. Met Hi.fan maak je opvallende bio-pagina's en custom links die engagement aanjagen en je merkzichtbaarheid vergroten. Eén link, oneindig veel mogelijkheden.",
    ctaVisit: 'Bezoek Hi.fan', ctaPricing: 'Bekijk pricing',
    trust1: 'Vertrouwd door miljoenen', trust2: 'Altijd gratis plan',
    profile: { handle: '@jouwnaam', role: 'Creator \u2022 ondernemer', l1: 'Website', l2: 'Portfolio', l3: 'Contact' },
    floats: { noCoding: 'Geen code', analytics: 'Analytics', qr: 'QR-codes', fast: 'Snel opgezet' },
    benefitsSection: { badge: 'Waarom Hi.fan', headPre: 'Vereenvoudig je online aanwezigheid, ', headHighlight: 'vergroot je bereik', sub: 'Stop met jongleren met meerdere links over verschillende platforms. Hi.fan geeft je één krachtige hub om alles aan elkaar te verbinden.' },
    benefits: [
      { title: 'Eén link, oneindig veel mogelijkheden', description: 'Deel al je belangrijke content, social media, producten en diensten via één mooie link.', stat: '1', statLabel: 'Link voor alles' },
      { title: 'Meer engagement', description: "Interactieve widgets, custom CTA's en trackable links helpen bezoekers in klanten te veranderen.", stat: '3x', statLabel: 'Meer kliks' },
      { title: 'Data-gedreven beslissen', description: 'Realtime analytics laten precies zien waar je traffic vandaan komt en welke content het beste presteert.', stat: '100%', statLabel: 'Zichtbaarheid' }
    ],
    featuresSection: { badge: 'Krachtige features', headPre: 'Alles wat je nodig hebt om ', headHighlight: 'te verbinden en betrekken', sub: 'Van dynamische widgets tot geavanceerde analytics: Hi.fan biedt alle tools om je online aanwezigheid te maximaliseren.' },
    features: [
      { title: 'Custom bio-pagina\u2019s', description: 'Maak prachtige bio-pagina\u2019s waar al je content samenkomt. Geen code nodig, volledig aan te passen.' },
      { title: 'Dynamische QR-codes', description: 'Genereer trackbare, aanpasbare QR-codes. Match je merkkleuren, voeg logo\u2019s toe en monitor de performance.' },
      { title: 'Geavanceerde analytics', description: 'Volg kliks, bezoeken, locaties en engagement. Begrijp je publiek met gedetailleerde inzichten.' },
      { title: 'Custom branding', description: 'Branded domeinnamen en volledig op maat gemaakte designs. Maak het écht van jou en bouw vertrouwen op.' },
      { title: 'Dynamische widgets', description: 'Voeg betaalknoppen, video-embeds, social posts, contactformulieren en meer toe om je publiek te betrekken.' },
      { title: 'Bestanden delen', description: 'Upload, host en deel bestanden direct vanaf je bio-pagina. Eenvoudig bestandsbeheer voor je publiek.' },
      { title: 'Slimme targeting', description: 'Pas restricties toe en target gebruikers op land, taal en device. Bereik het juiste publiek.' },
      { title: 'Team-management', description: 'Nodig teamleden uit en wijs rechten toe. Werk naadloos samen en beheer alles op één plek.' }
    ],
    advSection: { badge: 'Geavanceerde tools', headPre: 'Functies die ', headHighlight: 'écht resultaat opleveren', sub: 'Ga verder dan basis-biolinks met enterprise-features voor professionals en groeiende bedrijven.' },
    advFeatures: [
      { name: 'CTA-overlays', description: 'Toon notificaties, polls of contactformulieren' },
      { name: 'Event-tracking', description: 'Voeg pixels van Facebook toe en track events' },
      { name: 'Campagnes & kanalen', description: 'Organiseer links en krijg geaggregeerde statistieken' },
      { name: 'Developer-API', description: 'Bouw custom applicaties met een krachtige API' }
    ],
    casesSection: { badge: 'Use cases', headPre: 'Perfect voor elke ', headHighlight: 'creator & business' },
    useCases: [
      'Social media-links', 'Content-creators', 'Influencer-marketing', 'E-commerce-stores',
      'Event-promoties', 'Portfolio-showcases', 'Product-lanceringen', 'Lead-generatie',
      'Digitale visitekaartjes', "Restaurantmenu's", 'Muziek & artiesten', 'Cursus-makers'
    ],
    testimonialsSection: { headPre: 'Vertrouwd door ', headHighlight: 'creators wereldwijd' },
    testimonials: [
      { name: 'Shawn Greenway', role: 'Eigenaar agency, BrandLyft', quote: 'Hi.Fan is een game-changer voor ons team! Het is efficiënt, gebruiksvriendelijk en flexibel. Een strakke bio-pagina met alle essentiële links maken werkt naadloos en boost engagement zonder moeite!' },
      { name: 'Natia Nargizashvili', role: 'Project Manager', quote: 'Ik heb andere "link in bio"-tools geprobeerd, maar niets komt in de buurt van Hi.Fan! Het is superintuïtief, aanpasbaar en helpt me meer traffic naar mijn content te sturen. Mijn engagement is merkbaar gestegen!' }
    ],
    cta1: {
      heading: 'Klaar om jouw bio-pagina te maken?',
      sub: 'Sluit je aan bij miljoenen creators, influencers en bedrijven die Hi.fan gebruiken om hun publiek te bereiken. Gratis aan de slag binnen enkele minuten.',
      button: 'Gratis starten', footnote: 'Altijd gratis. Geen creditcard nodig.'
    },
    cta2: {
      heading: 'Je eigen platform op maat nodig?',
      sub: 'Wij hebben Hi.fan zelf gebouwd \u2014 en we bouwen ook bio-link-platforms, SaaS-applicaties of web-platforms op maat voor jouw unieke business-model en wensen.',
      bullets: ['Custom branding & features', 'Schaalbare architectuur', 'Volledig eigendom & controle', 'Doorlopende support & updates'],
      button: 'Bouw je eigen platform'
    },
    quick: { heading: 'Vragen over Hi.fan?', sub: 'Bezoek het platform of neem contact met ons op.', visit: 'Bezoek Hi.fan', contact: 'Contact' }
  }
} as const

const FEATURE_ICONS = [Link2, QrCode, BarChart3, Palette, Video, FileText, Target, Users]
const ADV_ICONS = [MousePointerClick, TrendingUp, Settings, Code2]

export default function HiFan() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white">
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
                <span className="text-white/60">{t.crumbProducts}</span>
                <span className="text-white/40" aria-hidden>/</span>
                <span className="text-white">{t.crumbCurrent}</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" aria-hidden />
                <span>{t.badge}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t.headPre}<span className="text-cyan-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://hi.fan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaVisit}
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="https://hi.fan/pricing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaPricing}
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden />
                    ))}
                  </div>
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-cyan-300" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-cyan-600" aria-hidden />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{t.profile.handle}</h3>
                    <p className="text-sm text-white/80">{t.profile.role}</p>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-semibold">{t.profile.l1}</span>
                    </div>
                    <div className="h-14 bg-slate-100 rounded-xl border-2 border-slate-200 flex items-center justify-center">
                      <span className="text-slate-700 font-semibold">{t.profile.l2}</span>
                    </div>
                    <div className="h-14 bg-slate-100 rounded-xl border-2 border-slate-200 flex items-center justify-center">
                      <span className="text-slate-700 font-semibold">{t.profile.l3}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.noCoding}</span>
                </div>
              </div>
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <BarChart3 className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.analytics}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <QrCode className="w-4 h-4 text-cyan-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.qr}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-yellow-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.fast}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" aria-hidden />
              <span>{t.benefitsSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.benefitsSection.headPre}<span className="gradient-text">{t.benefitsSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.benefitsSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.benefits.map((benefit) => (
              <div key={benefit.title} className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-cyan-200 hover:shadow-xl transition-all group">
                <div className="text-5xl font-bold text-cyan-100 mb-4 group-hover:text-cyan-200 transition-colors">{benefit.stat}</div>
                <div className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-3">{benefit.statLabel}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div key={feature.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Settings className="w-4 h-4" aria-hidden />
              <span>{t.advSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.advSection.headPre}<span className="text-cyan-400">{t.advSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.advSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.advFeatures.map((feature, i) => {
              const Icon = ADV_ICONS[i]
              return (
                <div key={feature.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 mb-4">
                    <Icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{feature.name}</h3>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Target className="w-4 h-4" aria-hidden />
              <span>{t.casesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.casesSection.headPre}<span className="gradient-text">{t.casesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {t.useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 hover:bg-cyan-50 hover:border-cyan-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" aria-hidden />
                <span className="text-sm text-slate-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              {t.testimonialsSection.headPre}<span className="gradient-text">{t.testimonialsSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <Link2 className="w-12 h-12 text-cyan-200 mb-6" aria-hidden />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t.cta1.heading}</h3>
                <p className="text-lg text-white/90 mb-8">{t.cta1.sub}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://hi.fan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                    {t.cta1.button}
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                  </a>
                </div>
                <p className="mt-6 text-sm text-white/70">{t.cta1.footnote}</p>
              </div>
            </div>

            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 md:p-12 overflow-hidden border border-slate-700">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <Code2 className="w-12 h-12 text-cyan-400 mb-6" aria-hidden />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t.cta2.heading}</h3>
                <p className="text-lg text-slate-300 mb-8">{t.cta2.sub}</p>
                <ul className="space-y-3 mb-8">
                  {t.cta2.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={ROUTES.contact[locale]} className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg group">
                  {t.cta2.button}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </Link>
              </div>
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
              <a href="https://hi.fan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4" aria-hidden />
                {t.quick.visit}
              </a>
              <Link to={ROUTES.contact[locale]} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors">
                <Share2 className="w-4 h-4" aria-hidden />
                {t.quick.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
