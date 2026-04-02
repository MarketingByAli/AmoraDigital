import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Newspaper,
  Star,
  BarChart3,
  Globe,
  Search,
  Users,
  Shield,
  RefreshCw,
  ExternalLink,
  Code2,
  MessageSquare,
  Scale,
  BookOpen,
  Settings,
  Share2,
  Crown,
  Bell,
  ListChecks
} from 'lucide-react'

const features = [
  {
    icon: Newspaper,
    title: 'Latest Industry News',
    description: 'Timely updates on operators, regulation, product launches, and market trends so readers stay informed.'
  },
  {
    icon: Star,
    title: 'Expert Reviews',
    description: 'Structured, editorial reviews that break down games, bonuses, usability, and trust signals in plain language.'
  },
  {
    icon: MessageSquare,
    title: 'Community Review System',
    description: 'User feedback and ratings alongside editorial content for a fuller picture of each product and brand.'
  },
  {
    icon: ListChecks,
    title: 'Comparison Tools',
    description: 'Side-by-side views of key features, offers, and criteria to help readers evaluate options efficiently.'
  },
  {
    icon: Bell,
    title: 'Always Fresh Content',
    description: 'Regularly refreshed pages and news so information reflects the current landscape, not outdated snapshots.'
  },
  {
    icon: Search,
    title: 'Powerful Discovery',
    description: 'Search, categories, and filters that make it easy to find reviews, guides, and updates that matter.'
  },
  {
    icon: Shield,
    title: 'Responsible Focus',
    description: 'Clear messaging on safer play, age restrictions, and where to get help—aligned with responsible publishing.'
  },
  {
    icon: Globe,
    title: 'Built for Scale',
    description: 'Fast, mobile-friendly experience with SEO-friendly structure so content reaches the right audience.'
  }
]

const benefits = [
  {
    title: 'One Hub for Research',
    description: 'News, deep-dive reviews, and community input live together so visitors do not need to jump between sites.',
    stat: '360°',
    statLabel: 'Coverage'
  },
  {
    title: 'Editorial + Community',
    description: 'Professional reviews paired with a structured review system give both expertise and real-user perspective.',
    stat: '2×',
    statLabel: 'Perspectives'
  },
  {
    title: 'Updated, Not Stale',
    description: 'Ongoing updates to news and product pages keep the platform relevant as offers and products change.',
    stat: 'Live',
    statLabel: 'Updates'
  }
]

const useCases = [
  'Operator & brand reviews',
  'Game & product spotlights',
  'Bonus & offer roundups',
  'Regulatory & market news',
  'Beginner guides',
  'Comparison articles',
  'User ratings & comments',
  'Newsletter & alerts',
  'Mobile readers',
  'SEO & organic discovery',
  'Affiliate-ready structure',
  'Editorial workflows'
]

const advancedFeatures = [
  { name: 'Editorial CMS', description: 'Workflow-friendly publishing for news and long-form reviews', icon: BookOpen },
  { name: 'Review Schema', description: 'Consistent scoring and criteria across products', icon: Scale },
  { name: 'Engagement Analytics', description: 'Understand what content and tools drive the most interest', icon: BarChart3 },
  { name: 'Modular Layouts', description: 'Flexible templates for hubs, listings, and detail pages', icon: Settings }
]

const projectNote = {
  quote:
    'We built Royal Casino Hub to combine timely industry news, structured expert reviews, and a community review layer—so visitors get both professional analysis and real-user signals in one trusted hub.',
  attribution: 'Amora Digital',
  role: 'Product & development team'
}

export default function RoyalCasinoHub() {
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
              <nav className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                <span className="text-white/40">/</span>
                <span className="text-white/60">Products</span>
                <span className="text-white/40">/</span>
                <span className="text-white">Royal Casino Hub</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Casino Review & News Platform</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                The Hub for{' '}
                <span className="text-amber-200">Reviews, News & Insight</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Royal Casino Hub is a casino review and editorial platform developed by Amora Digital. It combines
                up-to-date news, in-depth reviews, and a structured community review system so visitors can research
                products with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://royalcasinohub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-amber-900 bg-white rounded-xl hover:bg-amber-50 transition-all shadow-lg group"
                >
                  Visit Royal Casino Hub
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#platform"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  Platform overview
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-300 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-white/70">Editorial quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-amber-300" />
                  <span className="text-sm text-white/70">Built by Amora Digital</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                  <div className="bg-gradient-to-br from-amber-600 to-slate-900 p-6 text-center">
                    <Crown className="w-10 h-10 text-amber-200 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white mb-1">Royal Casino Hub</h3>
                    <p className="text-sm text-white/75">Reviews · News · Community</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Latest news</span>
                      <span className="font-semibold text-amber-700">Live</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-amber-500 to-amber-700" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                        <div className="text-lg font-bold text-slate-900">4.8</div>
                        <div className="text-xs text-slate-600">Avg. review</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-lg font-bold text-slate-900">120+</div>
                        <div className="text-xs text-slate-600">Articles</div>
                      </div>
                    </div>
                    <div className="h-12 bg-slate-100 rounded-xl flex items-center justify-center text-sm font-medium text-slate-700">
                      User reviews & ratings
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Fresh updates</span>
                </div>
              </div>

              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 backdrop-blur-sm">
                  <Newspaper className="w-4 h-4 text-violet-200" />
                  <span className="text-sm font-medium text-white">Industry news</span>
                </div>
              </div>

              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/25 border border-amber-400/40 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-amber-200" />
                  <span className="text-sm font-medium text-white">Review system</span>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/30 border border-slate-400/30 backdrop-blur-sm">
                  <Users className="w-4 h-4 text-slate-200" />
                  <span className="text-sm font-medium text-white">Community</span>
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
              <Sparkles className="w-4 h-4" />
              <span>Why Royal Casino Hub</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              News, Reviews & Community{' '}
              <span className="gradient-text">In One Place</span>
            </h2>
            <p className="section-subheading mx-auto">
              Built for readers who want current information, clear evaluations, and space for real user perspectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all group"
              >
                <div className="text-5xl font-bold text-amber-800 mb-4 group-hover:text-amber-700 transition-colors">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-amber-800 uppercase tracking-wide mb-3">
                  {benefit.statLabel}
                </div>
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
              <RefreshCw className="w-4 h-4" />
              <span>Platform capabilities</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Everything You Expect from a{' '}
              <span className="gradient-text">Modern Review Hub</span>
            </h2>
            <p className="section-subheading mx-auto">
              From breaking news to structured reviews and user-generated input, the platform is designed for clarity and
              ongoing maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-600 to-slate-800 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Under the hood</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built for Editors &{' '}
              <span className="text-amber-400">Growth</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Solid foundations for publishing at scale, consistent review formats, and insight into what your audience
              engages with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature) => (
              <div
                key={feature.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center flex-shrink-0 mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{feature.name}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-4">
              <Newspaper className="w-4 h-4" />
              <span>Coverage & use cases</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Content That{' '}
              <span className="gradient-text">Fits the Mission</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 hover:bg-amber-50 hover:border-amber-200 border border-slate-100 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
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
              From the{' '}
              <span className="gradient-text">Amora Digital Team</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100">
              <div className="flex gap-1 mb-6 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed text-center md:text-left">
                "{projectNote.quote}"
              </blockquote>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-slate-800 flex-shrink-0" />
                <div className="text-center md:text-left">
                  <div className="font-semibold text-slate-900">{projectNote.attribution}</div>
                  <div className="text-sm text-slate-600">{projectNote.role}</div>
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
                <Crown className="w-12 h-12 text-amber-200 mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Explore Royal Casino Hub
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  See the live platform—latest news, reviews, and the community review experience in action.
                </p>
                <a
                  href="https://royalcasinohub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-amber-900 bg-white rounded-xl hover:bg-amber-50 transition-all shadow-lg group"
                >
                  Visit royalcasinohub.com
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="mt-6 text-sm text-white/70">Developed by Amora Digital</p>
              </div>
            </div>

            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 md:p-12 overflow-hidden border border-slate-700">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
              </div>

              <div className="relative">
                <Code2 className="w-12 h-12 text-amber-400 mb-6" />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Need a Similar Review or Media Hub?
                </h3>
                <p className="text-lg text-slate-300 mb-8">
                  We design and build content-heavy platforms with reviews, news, memberships, and SEO-ready architecture
                  tailored to your niche.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Custom review & rating flows',
                    'Editorial workflows & CMS',
                    'Performance and mobile-first UX',
                    'Ongoing support and iteration'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl hover:from-amber-700 hover:to-amber-900 transition-all shadow-lg group"
                >
                  Discuss your project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              <h3 className="text-xl font-bold text-white mb-1">Questions about Royal Casino Hub?</h3>
              <p className="text-slate-400">Visit the site or talk to us about a comparable build.</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://royalcasinohub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Visit site
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
