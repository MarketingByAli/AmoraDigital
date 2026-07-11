import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Heart,
  Target,
  Eye,
  Rocket,
  Users,
  Award,
  Globe,
  Lightbulb,
  BookOpen,
  Sparkles,
  CheckCircle2
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../i18n/routes'

const T = {
  en: {
    hero: {
      badge: 'About Amora Digital',
      headPre: 'Crafting Digital ',
      headHighlight: 'Success Stories',
      sub:
        'Founded by two passionate digital professionals, Amora Digital combines decades of marketing expertise with innovative development to help businesses thrive in the digital landscape.'
    },
    founders: {
      badge: 'Our Founders',
      headPre: 'Meet the Minds Behind ',
      headHighlight: 'Amora Digital',
      sub:
        'Two visionary leaders united by a shared passion for digital excellence and helping businesses reach their full potential.',
      ali: {
        role: 'Co-Founder & Digital Marketing Strategist',
        name: 'Ali Ghasemirad',
        bio1:
          'With over two decades of experience in digital marketing, Ali has transformed the online presence of hundreds of businesses worldwide. His data-driven approach and deep expertise across SEO, paid advertising, analytics, and content marketing have delivered measurable results for clients ranging from ambitious startups to established enterprises.',
        bio2Pre: 'Ali is the author of ',
        bio2Book: '"Beyond Pixels: Unveiling Digital Marketing Wonders"',
        bio2Post:
          ', sharing his years of strategic insights with the wider marketing community. His portfolio spans over 500 successful projects, and he holds certifications from leading digital marketing institutions.',
        certs: [
          'Search Marketing Specialist',
          'E-Commerce Marketing',
          'Content Marketing',
          'Direct-Response Copywriting',
          'Google Analytics (Advanced)',
          'Customer Acquisition'
        ],
        stats: [
          { value: '20+', label: 'Years Experience' },
          { value: '1500+', label: 'Projects Delivered' },
          { value: '1', label: 'Published Book' }
        ]
      },
      morassa: {
        role: 'Co-Founder & Business Strategy Director',
        name: 'Morassa Bigdeli',
        bio1:
          "Morassa brings a unique blend of strategic vision and operational excellence to Amora Digital. With a sharp eye for business growth opportunities and a passion for building meaningful client relationships, she ensures every project aligns with both the client's goals and the highest standards of quality.",
        bio2:
          "Her expertise in project management, business development, and creative strategy has been instrumental in shaping Amora Digital's client-first approach. Morassa believes that true digital success comes from understanding the heart of each business and crafting solutions that resonate with their audience.",
        skills: [
          'Business Development',
          'Strategic Planning',
          'Client Relations',
          'Project Management',
          'Creative Direction',
          'Brand Consulting'
        ],
        stats: [
          { value: '100%', label: 'Client Focus' },
          { value: '360°', label: 'Strategic Vision' }
        ]
      }
    },
    mvg: {
      badge: 'What Drives Us',
      headPre: 'Our Purpose & ',
      headHighlight: 'Direction',
      items: [
        {
          title: 'Our Mission',
          description:
            'To empower businesses of all sizes with cutting-edge digital marketing and development solutions that drive measurable growth, build lasting online presence, and create genuine connections with their audiences.'
        },
        {
          title: 'Our Vision',
          description:
            "To be the most trusted digital partner in the Netherlands and beyond — a company known for combining technical innovation with heartfelt dedication to every client's success."
        },
        {
          title: 'Our Goal',
          description:
            'To help 1,000+ businesses transform their digital presence by delivering transparent, results-driven strategies that turn visitors into loyal customers and investments into tangible returns.'
        }
      ]
    },
    values: {
      heading: 'Our Core Values',
      sub: 'The principles that guide every project, every strategy, and every relationship we build.',
      items: [
        {
          title: 'Client-Centric',
          description: "Every decision we make starts with our client's success in mind. Your goals become our goals."
        },
        {
          title: 'Innovation-Driven',
          description: 'We stay ahead of digital trends to bring you the latest strategies and technologies.'
        },
        {
          title: 'Transparency',
          description:
            'Clear communication, honest reporting, and no hidden surprises. You always know where you stand.'
        },
        {
          title: 'Excellence',
          description:
            'We hold ourselves to the highest standards in everything from code quality to campaign performance.'
        }
      ]
    },
    cta: {
      heading: 'Ready to Work With Us?',
      sub:
        'Let Ali, Morassa, and the Amora Digital team help you build the digital presence your business deserves. Reach out for a free strategy consultation.',
      button: 'Get in Touch',
      footnote: 'No commitment required. 100% free consultation.'
    }
  },
  nl: {
    hero: {
      badge: 'Over Amora Digital',
      headPre: 'Wij maken digitale ',
      headHighlight: 'succesverhalen',
      sub:
        'Opgericht door twee gepassioneerde digitale professionals combineert Amora Digital tientallen jaren marketingervaring met innovatieve softwareontwikkeling om bedrijven online te laten groeien.'
    },
    founders: {
      badge: 'Onze oprichters',
      headPre: 'De koppen achter ',
      headHighlight: 'Amora Digital',
      sub:
        'Twee leiders met een gedeelde passie voor digitaal vakmanschap en het laten groeien van bedrijven.',
      ali: {
        role: 'Mede-oprichter & digital marketing strateeg',
        name: 'Ali Ghasemirad',
        bio1:
          'Met meer dan twintig jaar ervaring in digitale marketing heeft Ali honderden bedrijven wereldwijd online getransformeerd. Zijn datagedreven aanpak en diepgaande expertise in SEO, online adverteren, analytics en contentmarketing leveren meetbare resultaten voor zowel ambitieuze startups als gevestigde organisaties.',
        bio2Pre: 'Ali is de auteur van ',
        bio2Book: '"Beyond Pixels: Unveiling Digital Marketing Wonders"',
        bio2Post:
          ', waarin hij zijn jarenlange strategische inzichten deelt met de marketingcommunity. Zijn portfolio omvat ruim 500 succesvolle projecten en hij is gecertificeerd door toonaangevende marketinginstituten.',
        certs: [
          'Search Marketing Specialist',
          'E-Commerce Marketing',
          'Content Marketing',
          'Direct-Response Copywriting',
          'Google Analytics (Advanced)',
          'Customer Acquisition'
        ],
        stats: [
          { value: '20+', label: 'jaar ervaring' },
          { value: '1500+', label: 'opgeleverde projecten' },
          { value: '1', label: 'gepubliceerd boek' }
        ]
      },
      morassa: {
        role: 'Mede-oprichter & business strategy director',
        name: 'Morassa Bigdeli',
        bio1:
          'Morassa combineert strategische visie met operationele uitmuntendheid bij Amora Digital. Met scherp oog voor groeikansen en een passie voor betekenisvolle klantrelaties zorgt zij dat elk project aansluit op de doelen van de klant én de hoogste kwaliteit.',
        bio2:
          'Haar expertise in projectmanagement, business development en creatieve strategie heeft de klantgerichte aanpak van Amora Digital gevormd. Morassa gelooft dat digitaal succes begint bij het begrijpen van het hart van elk bedrijf en oplossingen die hun doelgroep raken.',
        skills: [
          'Business development',
          'Strategische planning',
          'Klantrelaties',
          'Projectmanagement',
          'Creative direction',
          'Merkadvies'
        ],
        stats: [
          { value: '100%', label: 'Klantfocus' },
          { value: '360°', label: 'Strategische visie' }
        ]
      }
    },
    mvg: {
      badge: 'Wat ons drijft',
      headPre: 'Onze purpose & ',
      headHighlight: 'koers',
      items: [
        {
          title: 'Onze missie',
          description:
            'Bedrijven van elke omvang versterken met state-of-the-art digitale marketing en softwareontwikkeling, voor meetbare groei, blijvende online aanwezigheid en oprechte verbinding met hun publiek.'
        },
        {
          title: 'Onze visie',
          description:
            'De meest vertrouwde digitale partner in Nederland en daarbuiten zijn — bekend om de combinatie van technische innovatie en oprechte toewijding aan klantsucces.'
        },
        {
          title: 'Ons doel',
          description:
            '1.000+ bedrijven helpen hun digitale aanwezigheid te transformeren met transparante, resultaatgerichte strategieën die bezoekers omzetten in trouwe klanten en investeringen in tastbaar rendement.'
        }
      ]
    },
    values: {
      heading: 'Onze kernwaarden',
      sub: 'De principes die elk project, elke strategie en elke samenwerking sturen.',
      items: [
        {
          title: 'Klantgericht',
          description: 'Elke beslissing begint bij het succes van onze klant. Jouw doelen worden onze doelen.'
        },
        {
          title: 'Innovatie',
          description: 'We blijven de digitale trends voor en brengen je de nieuwste strategieën en technologieën.'
        },
        {
          title: 'Transparantie',
          description:
            'Heldere communicatie, eerlijke rapportages en geen verrassingen. Je weet altijd waar je staat.'
        },
        {
          title: 'Excellentie',
          description:
            'We leggen de lat hoog, van codekwaliteit tot campagneprestaties.'
        }
      ]
    },
    cta: {
      heading: 'Klaar om met ons te werken?',
      sub:
        'Laat Ali, Morassa en het Amora Digital-team helpen bij de digitale aanwezigheid die jouw bedrijf verdient. Plan een gratis strategiegesprek.',
      button: 'Neem contact op',
      footnote: 'Geen verplichtingen. 100% gratis adviesgesprek.'
    }
  }
} as const

export default function AboutUs() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  return (
    <>
      <HeroSection locale={locale} />
      <FoundersSection locale={locale} />
      <MissionVisionSection locale={locale} />
      <ValuesSection locale={locale} />
      <CTASection locale={locale} />
    </>
  )
}

function HeroSection({ locale }: { locale: Locale }) {
  const t = T[locale].hero
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-secondary-200/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 right-1/3 w-[300px] h-[300px] bg-accent-200/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" aria-hidden />
            <span>{t.badge}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            {t.headPre}
            <span className="gradient-text">{t.headHighlight}</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto text-balance">{t.sub}</p>
        </div>
      </div>
    </section>
  )
}

function FoundersSection({ locale }: { locale: Locale }) {
  const t = T[locale].founders
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-700 text-sm font-medium mb-4">
            <Users className="w-4 h-4" aria-hidden />
            <span>{t.badge}</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">
            {t.headPre}
            <span className="gradient-text">{t.headHighlight}</span>
          </h2>
          <p className="section-subheading mx-auto">{t.sub}</p>
        </div>

        <div className="space-y-32 lg:space-y-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
                <img
                  src="https://amoradigital.nl/asset/Ali_Ghasemirad.jpg"
                  alt={`${t.ali.name} - ${t.ali.role}`}
                  className="w-full h-auto object-cover"
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-medium mb-4">
                <Award className="w-3.5 h-3.5" aria-hidden />
                <span>{t.ali.role}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t.ali.name}</h3>
              <p className="text-lg text-slate-600 mb-6">{t.ali.bio1}</p>
              <p className="text-slate-600 mb-6">
                {t.ali.bio2Pre}
                <span className="font-semibold text-slate-800">{t.ali.bio2Book}</span>
                {t.ali.bio2Post}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {t.ali.certs.map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" aria-hidden />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                {t.ali.stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`text-center px-4 py-3 rounded-xl border ${
                      i === 0
                        ? 'bg-primary-50 border-primary-100'
                        : i === 1
                        ? 'bg-secondary-50 border-secondary-100'
                        : 'bg-accent-50 border-accent-100'
                    }`}
                  >
                    <div
                      className={`text-2xl font-bold ${
                        i === 0 ? 'text-primary-700' : i === 1 ? 'text-secondary-700' : 'text-accent-700'
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
                <img
                  src="https://amoradigital.nl/asset/Morassa.jpg"
                  alt={`${t.morassa.name} - ${t.morassa.role}`}
                  className="w-full h-auto object-cover"
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-xs font-medium mb-4">
                <Award className="w-3.5 h-3.5" aria-hidden />
                <span>{t.morassa.role}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t.morassa.name}</h3>
              <p className="text-lg text-slate-600 mb-6">{t.morassa.bio1}</p>
              <p className="text-slate-600 mb-6">{t.morassa.bio2}</p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {t.morassa.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 flex-shrink-0" aria-hidden />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                {t.morassa.stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`text-center px-4 py-3 rounded-xl border ${
                      i === 0 ? 'bg-secondary-50 border-secondary-100' : 'bg-accent-50 border-accent-100'
                    }`}
                  >
                    <div className={`text-2xl font-bold ${i === 0 ? 'text-secondary-700' : 'text-accent-700'}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionVisionSection({ locale }: { locale: Locale }) {
  const t = T[locale].mvg
  const icons = [Target, Eye, Rocket]
  const colors = ['primary', 'secondary', 'accent'] as const

  const getColorClasses = (color: string) => {
    const c = {
      primary: { gradient: 'from-primary-500 to-primary-600' },
      secondary: { gradient: 'from-secondary-500 to-secondary-600' },
      accent: { gradient: 'from-accent-500 to-accent-600' }
    }
    return c[color as keyof typeof c]
  }

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4" aria-hidden />
            <span>{t.badge}</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">
            {t.headPre}
            <span className="gradient-text">{t.headHighlight}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((item, idx) => {
            const Icon = icons[idx]
            const color = colors[idx]
            const c = getColorClasses(color)
            return (
              <div
                key={item.title}
                className={`card p-8 border-2 border-transparent hover:border-${color}-200 group relative overflow-hidden`}
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${c.gradient} opacity-5 rounded-full group-hover:opacity-10 transition-opacity`} />

                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" aria-hidden />
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ValuesSection({ locale }: { locale: Locale }) {
  const t = T[locale].values
  const icons = [Heart, Globe, BookOpen, Award]
  return (
    <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading text-white mb-4">{t.heading}</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((value, idx) => {
            const Icon = icons[idx]
            return (
              <div key={value.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 group-hover:bg-white/20 transition-colors">
                  <Icon className="w-8 h-8 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CTASection({ locale }: { locale: Locale }) {
  const t = T[locale].cta
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t.heading}</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">{t.sub}</p>

            <Link
              to={ROUTES.contact[locale]}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-lg group"
            >
              {t.button}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
            </Link>

            <p className="mt-6 text-sm text-white/70">{t.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
