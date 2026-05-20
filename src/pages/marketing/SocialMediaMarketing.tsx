import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, Heart, MessageCircle, Users, TrendingUp, Calendar, Camera, Video,
  BarChart3, Target, Share2, Star, Phone, Mail, Instagram, Facebook, Linkedin, Twitter, Play
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'Social Media',
    headPre: 'Build a Brand ', headHighlight: 'People Love', headPost: ' to Follow',
    sub: 'Turn your social media into a lead-generating machine. We create scroll-stopping content that builds community, drives engagement, and converts followers into customers.',
    ctaStrategy: 'Get Social Strategy', ctaPackages: 'View Packages',
    weManage: 'We manage:',
    yourBrand: 'yourbrand',
    floats: { likes: '2.5K Likes', followers: '+500 Followers', reach: '+340% Reach', comments: '89 Comments' },
    results: [
      { value: '500%', label: 'Avg. Reach Increase', description: 'Across all platforms' },
      { value: '10x', label: 'Engagement Growth', description: 'Likes, comments, shares' },
      { value: '300%', label: 'Follower Growth', description: 'Organic & targeted' },
      { value: '5x', label: 'Lead Generation', description: 'From social channels' }
    ],
    servicesSection: { badge: 'What We Do', headPre: 'Full-Service Social Media ', headHighlight: 'Management', sub: 'From strategy to execution, we handle everything so you can focus on running your business.' },
    services: [
      { title: 'Content Strategy', description: 'Data-driven content calendars that keep your audience engaged and coming back for more.' },
      { title: 'Content Creation', description: 'Scroll-stopping graphics, photos, and copy that capture attention and drive action.' },
      { title: 'Video Production', description: 'Engaging Reels, Stories, and video content that boosts reach and engagement.' },
      { title: 'Community Management', description: 'Active engagement with your audience to build loyalty and trust.' },
      { title: 'Paid Social Ads', description: 'Targeted advertising campaigns that reach your ideal customers and drive conversions.' },
      { title: 'Analytics & Reporting', description: 'Detailed insights and reports to track growth and optimize performance.' }
    ],
    platformsSection: { headPre: 'Platforms We ', headHighlight: 'Dominate', sub: "We are experts on all major social platforms, tailoring strategies to each one's unique strengths." },
    process: { badge: 'Our Process', headPre: 'How We ', headHighlight: 'Grow Your Brand' },
    processItems: [
      { step: '01', title: 'Audit & Strategy', description: 'We analyze your current presence, competitors, and audience to create a winning strategy.' },
      { step: '02', title: 'Content Planning', description: 'We develop a content calendar with themes, formats, and posting schedules.' },
      { step: '03', title: 'Create & Publish', description: 'Our team creates engaging content and publishes at optimal times.' },
      { step: '04', title: 'Engage & Grow', description: 'We actively engage with your community and optimize for continuous growth.' }
    ],
    packagesSection: { badge: 'Pricing', headPre: 'Social Media ', headHighlight: 'Packages', sub: 'Flexible packages designed to fit your business needs and budget.' },
    packages: [
      { name: 'Starter', description: 'Perfect for small businesses getting started with social media.', features: ['2 Platforms', '12 Posts/Month', 'Basic Graphics', 'Monthly Report', 'Community Response'], highlight: false },
      { name: 'Growth', description: 'For businesses ready to scale their social presence.', features: ['4 Platforms', '20 Posts/Month', 'Custom Graphics & Video', 'Weekly Reports', 'Daily Engagement', 'Paid Ad Management', 'Influencer Outreach'], highlight: true },
      { name: 'Enterprise', description: 'Full-service social media management for maximum impact.', features: ['All Platforms', 'Unlimited Posts', 'Premium Content Production', 'Real-time Dashboard', '24/7 Management', 'Advanced Ad Campaigns', 'Brand Partnerships', 'Dedicated Manager'], highlight: false }
    ],
    popular: 'Most Popular', getStarted: 'Get Started',
    packagesNote: 'All packages include strategy consultation. Custom packages available upon request.',
    testimonial: {
      quote: '"Our Instagram following grew from 2K to 50K in just 6 months. The engagement and leads we are getting now is incredible!"',
      author: 'Michael Chen', role: 'Founder, StyleHub Fashion'
    },
    lead: {
      heading: 'Ready to Go Viral?',
      sub: "Let's create a social media strategy that turns followers into customers. Get a free consultation and custom proposal.",
      bullets: ['Free social media audit', 'Custom content strategy', 'Competitor analysis', 'Growth roadmap'],
      title: 'Get Your Free Strategy', subject: 'Social Media Marketing Inquiry',
      button: 'Get My Free Strategy', footnote: 'Free consultation. No commitment required.',
      name: 'Full Name', namePh: 'John Doe',
      email: 'Email', emailPh: 'john@company.com',
      ig: 'Instagram Handle (optional)', igPh: '@yourbrand',
      goals: 'What are your social media goals?', goalsPh: 'Tell us about your goals...'
    },
    quick: { heading: 'Ready to grow your social presence?', sub: "Let's discuss your social media goals today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'Social media',
    headPre: 'Bouw een merk ', headHighlight: 'dat mensen graag volgen', headPost: '',
    sub: 'Maak van je social media een lead-genererende machine. We maken scroll-stopping content die community, engagement en conversies oplevert.',
    ctaStrategy: 'Vraag social-strategie', ctaPackages: 'Bekijk pakketten',
    weManage: 'Wij beheren:',
    yourBrand: 'jouwmerk',
    floats: { likes: '2.5K likes', followers: '+500 volgers', reach: '+340% bereik', comments: '89 reacties' },
    results: [
      { value: '500%', label: 'Gem. bereiktoename', description: 'Op alle platforms' },
      { value: '10x', label: 'Engagementgroei', description: 'Likes, reacties, shares' },
      { value: '300%', label: 'Volgersgroei', description: 'Organisch & gericht' },
      { value: '5x', label: 'Leadgeneratie', description: 'Vanuit social media' }
    ],
    servicesSection: { badge: 'Wat we doen', headPre: 'Volledig social-media-', headHighlight: 'beheer', sub: 'Van strategie tot uitvoering \u2014 wij regelen alles, zodat jij je op je business kunt focussen.' },
    services: [
      { title: 'Contentstrategie', description: 'Datagedreven contentkalenders die je publiek geboeid en betrokken houden.' },
      { title: 'Contentcreatie', description: 'Scroll-stopping visuals, foto\u2019s en teksten die aandacht trekken en actie uitlokken.' },
      { title: 'Videoproductie', description: 'Boeiende Reels, Stories en videocontent die bereik en engagement verhogen.' },
      { title: 'Communitymanagement', description: 'Actieve interactie met je publiek om loyaliteit en vertrouwen op te bouwen.' },
      { title: 'Betaalde social ads', description: 'Gerichte advertentiecampagnes die je ideale klant bereiken en converteren.' },
      { title: 'Analytics & rapportage', description: 'Diepe inzichten en rapportages om groei te meten en performance te optimaliseren.' }
    ],
    platformsSection: { headPre: 'Platforms die we ', headHighlight: 'domineren', sub: 'We zijn expert in alle grote social-platformen en stemmen de strategie af op de kracht van elk kanaal.' },
    process: { badge: 'Onze werkwijze', headPre: 'Zo ', headHighlight: 'laten we je merk groeien' },
    processItems: [
      { step: '01', title: 'Audit & strategie', description: 'We analyseren je huidige aanwezigheid, concurrenten en publiek voor een winnende strategie.' },
      { step: '02', title: 'Contentplanning', description: 'We ontwikkelen een contentkalender met thema\u2019s, formats en postschema\u2019s.' },
      { step: '03', title: 'Creëren & publiceren', description: 'Ons team maakt boeiende content en publiceert op het beste moment.' },
      { step: '04', title: 'Engagen & groeien', description: 'We engageren actief met je community en optimaliseren voor doorlopende groei.' }
    ],
    packagesSection: { badge: 'Prijzen', headPre: 'Social-media-', headHighlight: 'pakketten', sub: 'Flexibele pakketten afgestemd op je business en budget.' },
    packages: [
      { name: 'Starter', description: 'Perfect voor kleine bedrijven die starten met social media.', features: ['2 platforms', '12 posts/maand', 'Basisvisuals', 'Maandrapport', 'Community-reacties'], highlight: false },
      { name: 'Growth', description: 'Voor bedrijven klaar om hun social-aanwezigheid op te schalen.', features: ['4 platforms', '20 posts/maand', 'Maatwerk visuals & video', 'Weekrapportages', 'Dagelijkse engagement', 'Beheer betaalde ads', 'Influencer-outreach'], highlight: true },
      { name: 'Enterprise', description: 'Volledig social-media-beheer voor maximale impact.', features: ['Alle platforms', 'Onbeperkt aantal posts', 'Premium contentproductie', 'Real-time dashboard', '24/7 beheer', 'Geavanceerde advertentiecampagnes', 'Brand partnerships', 'Vaste contactpersoon'], highlight: false }
    ],
    popular: 'Meest gekozen', getStarted: 'Start nu',
    packagesNote: 'Alle pakketten zijn inclusief strategie-adviesgesprek. Maatwerkpakketten op aanvraag.',
    testimonial: {
      quote: '"Onze Instagram-volgers groeiden in 6 maanden van 2K naar 50K. De engagement en leads die we nu binnenkrijgen zijn ongelooflijk!"',
      author: 'Michael Chen', role: 'Oprichter, StyleHub Fashion'
    },
    lead: {
      heading: 'Klaar om viral te gaan?',
      sub: 'Laten we een social-strategie maken die volgers in klanten omzet. Vraag een gratis adviesgesprek en voorstel op maat aan.',
      bullets: ['Gratis social-media-audit', 'Contentstrategie op maat', 'Concurrentieanalyse', 'Groei-roadmap'],
      title: 'Vraag je gratis strategie', subject: 'Aanvraag social-media-marketing',
      button: 'Vraag mijn strategie', footnote: 'Gratis advies. Geen verplichting.',
      name: 'Volledige naam', namePh: 'Jan Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      ig: 'Instagram-handle (optioneel)', igPh: '@jouwmerk',
      goals: 'Wat zijn je social-media-doelen?', goalsPh: 'Vertel ons over je doelen...'
    },
    quick: { heading: 'Klaar om je social-aanwezigheid te laten groeien?', sub: 'Laten we vandaag je social-doelen bespreken.', email: 'Mail ons' }
  }
} as const

const SERVICE_ICONS = [Calendar, Camera, Video, Users, Target, BarChart3]
const PLATFORMS = [
  { Icon: Instagram, name: 'Instagram', color: 'from-pink-500 to-purple-600' },
  { Icon: Facebook, name: 'Facebook', color: 'from-blue-600 to-blue-700' },
  { Icon: Linkedin, name: 'LinkedIn', color: 'from-blue-700 to-blue-800' },
  { Icon: Twitter, name: 'Twitter/X', color: 'from-slate-700 to-slate-900' }
]

export default function SocialMediaMarketing() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-primary-700 text-white">
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
                {t.headPre}<span className="text-pink-200">{t.headHighlight}</span>{t.headPost}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaStrategy}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#packages" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaPackages}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <span className="text-sm text-white/60">{t.weManage}</span>
                <div className="flex gap-3">
                  {PLATFORMS.map(({ Icon, name }) => (
                    <div key={name} className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors" title={name}>
                      <Icon className="w-5 h-5 text-white" aria-hidden />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-64 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 p-3 shadow-2xl">
                  <div className="w-20 h-6 bg-black/50 rounded-full mx-auto mb-3" />
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-2xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                        <div className="text-xs text-white font-medium">{t.yourBrand}</div>
                      </div>
                      <div className="h-24 bg-white/10 rounded-lg mb-2" />
                      <div className="flex items-center gap-4">
                        <Heart className="w-4 h-4 text-pink-300" aria-hidden />
                        <MessageCircle className="w-4 h-4 text-white/70" aria-hidden />
                        <Share2 className="w-4 h-4 text-white/70" aria-hidden />
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                        <div className="text-xs text-white font-medium">{t.yourBrand}</div>
                      </div>
                      <div className="h-16 bg-white/10 rounded-lg flex items-center justify-center">
                        <Play className="w-8 h-8 text-white/50" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/30 border border-pink-400/30 backdrop-blur-sm">
                  <Heart className="w-4 h-4 text-pink-300 fill-current" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.likes}</span>
                </div>
              </div>
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/30 border border-blue-400/30 backdrop-blur-sm">
                  <Users className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.followers}</span>
                </div>
              </div>
              <div className="absolute bottom-24 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/30 border border-green-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.reach}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-4 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/30 border border-purple-400/30 backdrop-blur-sm">
                  <MessageCircle className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.results.map((stat) => (
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-4">
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
                <div key={service.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-slate-900 mb-4">
              {t.platformsSection.headPre}<span className="gradient-text">{t.platformsSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.platformsSection.sub}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PLATFORMS.map(({ Icon, name, color }) => (
              <div key={name} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" aria-hidden />
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
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-pink-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-pink-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.packagesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.packagesSection.headPre}<span className="gradient-text">{t.packagesSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.packagesSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.packages.map((pkg) => (
              <div key={pkg.name} className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all hover:shadow-xl ${pkg.highlight ? 'border-pink-500 shadow-pink-500/10' : 'border-slate-100 hover:border-slate-200'}`}>
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-500 text-white text-xs font-semibold">
                      <Star className="w-3 h-3 fill-current" aria-hidden />
                      <span>{t.popular}</span>
                    </div>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact-form" className={`block w-full py-3 px-6 text-center font-semibold rounded-lg transition-all ${pkg.highlight ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-pink-500/25' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                  {t.getStarted}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-slate-500">{t.packagesNote}</p>
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
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
          <div className="relative rounded-3xl bg-gradient-to-br from-pink-500 via-purple-600 to-primary-700 p-8 md:p-12 lg:p-16 overflow-hidden">
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
                      <CheckCircle2 className="w-5 h-5 text-pink-300 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-pink-500/25"
                footnote={t.lead.footnote}
              >
                <div>
                  <label htmlFor="sm-name" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.name}</label>
                  <input type="text" id="sm-name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors" placeholder={t.lead.namePh} />
                </div>
                <div>
                  <label htmlFor="sm-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="sm-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="sm-ig" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.ig}</label>
                  <input type="text" id="sm-ig" name="instagram" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors" placeholder={t.lead.igPh} />
                </div>
                <div>
                  <label htmlFor="sm-goals" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.goals}</label>
                  <textarea id="sm-goals" name="goals" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors" placeholder={t.lead.goalsPh} />
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
