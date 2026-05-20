import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Sparkles, Newspaper, Star, BarChart3, Globe, Search, Users,
  Shield, RefreshCw, ExternalLink, Code2, MessageSquare, Scale, BookOpen, Settings, Share2,
  Crown, Bell, ListChecks
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbProducts: 'Products', crumbCurrent: 'Royal Casino Hub',
    badge: 'Casino Review & News Platform',
    headPre: 'The Hub for ', headHighlight: 'Reviews, News & Insight',
    sub: 'Royal Casino Hub is a casino review and editorial platform developed by Amora Digital. It combines up-to-date news, in-depth reviews, and a structured community review system so visitors can research products with confidence.',
    ctaVisit: 'Visit Royal Casino Hub', ctaOverview: 'Platform overview',
    trust1: 'Editorial quality', trust2: 'Built by Amora Digital',
    card: { title: 'Royal Casino Hub', sub: 'Reviews \u00b7 News \u00b7 Community', latest: 'Latest news', live: 'Live', avg: 'Avg. review', articles: 'Articles', userReviews: 'User reviews & ratings' },
    floats: { fresh: 'Fresh updates', news: 'Industry news', system: 'Review system', community: 'Community' },
    benefitsSection: { badge: 'Why Royal Casino Hub', headPre: 'News, Reviews & Community ', headHighlight: 'In One Place', sub: 'Built for readers who want current information, clear evaluations, and space for real user perspectives.' },
    benefits: [
      { title: 'One Hub for Research', description: 'News, deep-dive reviews, and community input live together so visitors do not need to jump between sites.', stat: '360\u00b0', statLabel: 'Coverage' },
      { title: 'Editorial + Community', description: 'Professional reviews paired with a structured review system give both expertise and real-user perspective.', stat: '2\u00d7', statLabel: 'Perspectives' },
      { title: 'Updated, Not Stale', description: 'Ongoing updates to news and product pages keep the platform relevant as offers and products change.', stat: 'Live', statLabel: 'Updates' }
    ],
    capSection: { badge: 'Platform capabilities', headPre: 'Everything You Expect from a ', headHighlight: 'Modern Review Hub', sub: 'From breaking news to structured reviews and user-generated input, the platform is designed for clarity and ongoing maintenance.' },
    features: [
      { title: 'Latest Industry News', description: 'Timely updates on operators, regulation, product launches, and market trends so readers stay informed.' },
      { title: 'Expert Reviews', description: 'Structured, editorial reviews that break down games, bonuses, usability, and trust signals in plain language.' },
      { title: 'Community Review System', description: 'User feedback and ratings alongside editorial content for a fuller picture of each product and brand.' },
      { title: 'Comparison Tools', description: 'Side-by-side views of key features, offers, and criteria to help readers evaluate options efficiently.' },
      { title: 'Always Fresh Content', description: 'Regularly refreshed pages and news so information reflects the current landscape, not outdated snapshots.' },
      { title: 'Powerful Discovery', description: 'Search, categories, and filters that make it easy to find reviews, guides, and updates that matter.' },
      { title: 'Responsible Focus', description: 'Clear messaging on safer play, age restrictions, and where to get help\u2014aligned with responsible publishing.' },
      { title: 'Built for Scale', description: 'Fast, mobile-friendly experience with SEO-friendly structure so content reaches the right audience.' }
    ],
    advSection: { badge: 'Under the hood', headPre: 'Built for Editors & ', headHighlight: 'Growth', sub: 'Solid foundations for publishing at scale, consistent review formats, and insight into what your audience engages with.' },
    advFeatures: [
      { name: 'Editorial CMS', description: 'Workflow-friendly publishing for news and long-form reviews' },
      { name: 'Review Schema', description: 'Consistent scoring and criteria across products' },
      { name: 'Engagement Analytics', description: 'Understand what content and tools drive the most interest' },
      { name: 'Modular Layouts', description: 'Flexible templates for hubs, listings, and detail pages' }
    ],
    casesSection: { badge: 'Coverage & use cases', headPre: 'Content That ', headHighlight: 'Fits the Mission' },
    useCases: [
      'Operator & brand reviews', 'Game & product spotlights', 'Bonus & offer roundups', 'Regulatory & market news',
      'Beginner guides', 'Comparison articles', 'User ratings & comments', 'Newsletter & alerts',
      'Mobile readers', 'SEO & organic discovery', 'Affiliate-ready structure', 'Editorial workflows'
    ],
    teamSection: { headPre: 'From the ', headHighlight: 'Amora Digital Team' },
    projectNote: { quote: 'We built Royal Casino Hub to combine timely industry news, structured expert reviews, and a community review layer\u2014so visitors get both professional analysis and real-user signals in one trusted hub.', attribution: 'Amora Digital', role: 'Product & development team' },
    cta1: { heading: 'Explore Royal Casino Hub', sub: 'See the live platform\u2014latest news, reviews, and the community review experience in action.', button: 'Visit royalcasinohub.com', footnote: 'Developed by Amora Digital' },
    cta2: { heading: 'Need a Similar Review or Media Hub?', sub: 'We design and build content-heavy platforms with reviews, news, memberships, and SEO-ready architecture tailored to your niche.', bullets: ['Custom review & rating flows', 'Editorial workflows & CMS', 'Performance and mobile-first UX', 'Ongoing support and iteration'], button: 'Discuss your project' },
    quick: { heading: 'Questions about Royal Casino Hub?', sub: 'Visit the site or talk to us about a comparable build.', visit: 'Visit site', contact: 'Contact us' }
  },
  nl: {
    crumbHome: 'Home', crumbProducts: 'Producten', crumbCurrent: 'Royal Casino Hub',
    badge: 'Casino-review- & news-platform',
    headPre: 'De hub voor ', headHighlight: 'reviews, nieuws & inzicht',
    sub: 'Royal Casino Hub is een casino-review- en redactioneel platform ontwikkeld door Amora Digital. Het combineert actueel nieuws, diepgaande reviews en een gestructureerd community-review-systeem zodat bezoekers met vertrouwen onderzoek kunnen doen.',
    ctaVisit: 'Bezoek Royal Casino Hub', ctaOverview: 'Platform-overzicht',
    trust1: 'Redactionele kwaliteit', trust2: 'Gebouwd door Amora Digital',
    card: { title: 'Royal Casino Hub', sub: 'Reviews \u00b7 nieuws \u00b7 community', latest: 'Laatste nieuws', live: 'Live', avg: 'Gem. review', articles: 'Artikelen', userReviews: 'User-reviews & beoordelingen' },
    floats: { fresh: 'Verse updates', news: 'Branchenieuws', system: 'Review-systeem', community: 'Community' },
    benefitsSection: { badge: 'Waarom Royal Casino Hub', headPre: 'Nieuws, reviews & community ', headHighlight: 'op één plek', sub: 'Gebouwd voor lezers die actuele info, heldere beoordelingen én ruimte voor échte gebruikersmeningen willen.' },
    benefits: [
      { title: 'Eén hub voor onderzoek', description: 'Nieuws, diepgaande reviews en community-input staan samen \u2014 geen gespring meer tussen sites.', stat: '360\u00b0', statLabel: 'Dekking' },
      { title: 'Redactie + community', description: 'Professionele reviews én een gestructureerd review-systeem geven samen expertise plus échte gebruikersperspectieven.', stat: '2\u00d7', statLabel: 'Perspectieven' },
      { title: 'Up-to-date, niet verouderd', description: 'Doorlopende updates van nieuws en productpagina\u2019s houden het platform relevant terwijl aanbod en producten veranderen.', stat: 'Live', statLabel: 'Updates' }
    ],
    capSection: { badge: 'Platform-capabilities', headPre: 'Alles wat je verwacht van een ', headHighlight: 'moderne review-hub', sub: 'Van breaking news tot gestructureerde reviews en user-generated input: het platform is ontworpen voor helderheid én doorlopend onderhoud.' },
    features: [
      { title: 'Laatste branchenieuws', description: 'Tijdige updates over operators, regelgeving, productlanceringen en markttrends zodat lezers altijd up-to-date zijn.' },
      { title: 'Expert-reviews', description: 'Gestructureerde redactionele reviews die spellen, bonussen, usability en trust-signalen helder uitleggen.' },
      { title: 'Community-review-systeem', description: 'Gebruikersfeedback en beoordelingen naast redactionele content voor een vollediger beeld van elk product en merk.' },
      { title: 'Vergelijkingstools', description: 'Side-by-side-overzichten van features, aanbiedingen en criteria om opties efficiënt te wegen.' },
      { title: 'Altijd verse content', description: 'Regelmatig vernieuwde pagina\u2019s en nieuws \u2014 de info weerspiegelt het huidige landschap, geen verouderde snapshots.' },
      { title: 'Krachtige discovery', description: 'Zoekfunctie, categorieën en filters om eenvoudig relevante reviews, gidsen en updates te vinden.' },
      { title: 'Verantwoorde focus', description: 'Heldere boodschap over veilig spelen, leeftijdsrestricties en waar hulp beschikbaar is \u2014 in lijn met verantwoorde publicatie.' },
      { title: 'Gebouwd om te schalen', description: 'Snelle, mobile-friendly-ervaring met SEO-vriendelijke structuur zodat content het juiste publiek bereikt.' }
    ],
    advSection: { badge: 'Onder de motorkap', headPre: 'Gebouwd voor redacties & ', headHighlight: 'groei', sub: 'Solide fundering voor publiceren op schaal, consistente review-formats en inzicht in waar je publiek zich mee verbindt.' },
    advFeatures: [
      { name: 'Redactioneel CMS', description: 'Workflow-vriendelijk publiceren voor nieuws en long-form-reviews' },
      { name: 'Review-schema', description: 'Consistente scores en criteria over alle producten' },
      { name: 'Engagement-analytics', description: 'Begrijp welke content en tools de meeste interesse opwekken' },
      { name: 'Modulaire layouts', description: 'Flexibele templates voor hubs, listings en detailpagina\u2019s' }
    ],
    casesSection: { badge: 'Dekking & use cases', headPre: 'Content die ', headHighlight: 'past bij de missie' },
    useCases: [
      'Operator- & merkreviews', 'Spel- & product-spotlights', 'Bonus- & aanbod-overzichten', 'Regelgeving & marktnieuws',
      'Beginnersgidsen', 'Vergelijkingsartikelen', 'Gebruikersbeoordelingen & reacties', 'Nieuwsbrief & alerts',
      'Mobiele lezers', 'SEO & organische discovery', 'Affiliate-klare structuur', 'Redactionele workflows'
    ],
    teamSection: { headPre: 'Van het ', headHighlight: 'Amora Digital-team' },
    projectNote: { quote: 'We bouwden Royal Casino Hub om tijdig branchenieuws, gestructureerde expert-reviews en een community-review-laag te combineren \u2014 zodat bezoekers in één vertrouwde hub zowel professionele analyse als echte gebruikerssignalen krijgen.', attribution: 'Amora Digital', role: 'Product- & development-team' },
    cta1: { heading: 'Ontdek Royal Casino Hub', sub: 'Bekijk het live platform \u2014 het laatste nieuws, reviews en de community-review-ervaring in actie.', button: 'Bezoek royalcasinohub.com', footnote: 'Ontwikkeld door Amora Digital' },
    cta2: { heading: 'Een soortgelijke review- of media-hub nodig?', sub: 'Wij ontwerpen en bouwen content-rijke platforms met reviews, nieuws, memberships en SEO-klare architectuur op maat van jouw niche.', bullets: ['Custom review- & rating-flows', 'Redactionele workflows & CMS', 'Performance en mobile-first-UX', 'Doorlopende support en iteratie'], button: 'Bespreek je project' },
    quick: { heading: 'Vragen over Royal Casino Hub?', sub: 'Bezoek de site of praat met ons over een vergelijkbare build.', visit: 'Bezoek site', contact: 'Contact' }
  }
} as const

const FEATURE_ICONS = [Newspaper, Star, MessageSquare, ListChecks, Bell, Search, Shield, Globe]
const ADV_ICONS = [BookOpen, Scale, BarChart3, Settings]

export default function RoyalCasinoHub() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-800 to-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-violet-500/20 rounded-full blur-3xl" />
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
                {t.headPre}<span className="text-amber-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://royalcasinohub.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-amber-900 bg-white rounded-xl hover:bg-amber-50 transition-all shadow-lg group">
                  {t.ctaVisit}
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#platform" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaOverview}
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-300 fill-current" aria-hidden />
                    ))}
                  </div>
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-amber-300" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                  <div className="bg-gradient-to-br from-amber-600 to-slate-900 p-6 text-center">
                    <Crown className="w-10 h-10 text-amber-200 mx-auto mb-3" aria-hidden />
                    <h3 className="text-lg font-bold text-white mb-1">{t.card.title}</h3>
                    <p className="text-sm text-white/75">{t.card.sub}</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{t.card.latest}</span>
                      <span className="font-semibold text-amber-700">{t.card.live}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-amber-500 to-amber-700" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                        <div className="text-lg font-bold text-slate-900">4.8</div>
                        <div className="text-xs text-slate-600">{t.card.avg}</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-lg font-bold text-slate-900">120+</div>
                        <div className="text-xs text-slate-600">{t.card.articles}</div>
                      </div>
                    </div>
                    <div className="h-12 bg-slate-100 rounded-xl flex items-center justify-center text-sm font-medium text-slate-700">{t.card.userReviews}</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.fresh}</span>
                </div>
              </div>
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 backdrop-blur-sm">
                  <Newspaper className="w-4 h-4 text-violet-200" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.news}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/25 border border-amber-400/40 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-amber-200" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.system}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/30 border border-slate-400/30 backdrop-blur-sm">
                  <Users className="w-4 h-4 text-slate-200" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.community}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-900 text-sm font-medium mb-4">
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
              <div key={benefit.title} className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all group">
                <div className="text-5xl font-bold text-amber-800 mb-4 group-hover:text-amber-700 transition-colors">{benefit.stat}</div>
                <div className="text-sm font-semibold text-amber-800 uppercase tracking-wide mb-3">{benefit.statLabel}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-800 text-sm font-medium mb-4">
              <RefreshCw className="w-4 h-4" aria-hidden />
              <span>{t.capSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.capSection.headPre}<span className="gradient-text">{t.capSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.capSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div key={feature.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-600 to-slate-800 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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
              {t.advSection.headPre}<span className="text-amber-400">{t.advSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.advSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.advFeatures.map((feature, i) => {
              const Icon = ADV_ICONS[i]
              return (
                <div key={feature.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center flex-shrink-0 mb-4">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-4">
              <Newspaper className="w-4 h-4" aria-hidden />
              <span>{t.casesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.casesSection.headPre}<span className="gradient-text">{t.casesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {t.useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 hover:bg-amber-50 hover:border-amber-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" aria-hidden />
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
              {t.teamSection.headPre}<span className="gradient-text">{t.teamSection.headHighlight}</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100">
              <div className="flex gap-1 mb-6 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed text-center md:text-left">"{t.projectNote.quote}"</blockquote>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-slate-800 flex-shrink-0" />
                <div className="text-center md:text-left">
                  <div className="font-semibold text-slate-900">{t.projectNote.attribution}</div>
                  <div className="text-sm text-slate-600">{t.projectNote.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-amber-600 via-amber-800 to-slate-900 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <Crown className="w-12 h-12 text-amber-200 mb-6" aria-hidden />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t.cta1.heading}</h3>
                <p className="text-lg text-white/90 mb-8">{t.cta1.sub}</p>
                <a href="https://royalcasinohub.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-amber-900 bg-white rounded-xl hover:bg-amber-50 transition-all shadow-lg group">
                  {t.cta1.button}
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <p className="mt-6 text-sm text-white/70">{t.cta1.footnote}</p>
              </div>
            </div>

            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 md:p-12 overflow-hidden border border-slate-700">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <Code2 className="w-12 h-12 text-amber-400 mb-6" aria-hidden />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t.cta2.heading}</h3>
                <p className="text-lg text-slate-300 mb-8">{t.cta2.sub}</p>
                <ul className="space-y-3 mb-8">
                  {t.cta2.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={ROUTES.contact[locale]} className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl hover:from-amber-700 hover:to-amber-900 transition-all shadow-lg group">
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
              <a href="https://royalcasinohub.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
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
