import { Link } from 'react-router-dom'
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

export default function AboutUs() {
  return (
    <>
      <HeroSection />
      <FoundersSection />
      <MissionVisionSection />
      <ValuesSection />
      <CTASection />
    </>
  )
}

function HeroSection() {
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
            <Sparkles className="w-4 h-4" />
            <span>About Amora Digital</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Crafting Digital{' '}
            <span className="gradient-text">Success Stories</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Founded by two passionate digital professionals, Amora Digital combines decades of marketing expertise 
            with innovative development to help businesses thrive in the digital landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

function FoundersSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-700 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Our Founders</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">
            Meet the Minds Behind{' '}
            <span className="gradient-text">Amora Digital</span>
          </h2>
          <p className="section-subheading mx-auto">
            Two visionary leaders united by a shared passion for digital excellence 
            and helping businesses reach their full potential.
          </p>
        </div>

        <div className="space-y-32 lg:space-y-40">
          {/* Ali Ghasemirad */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
                <img
                  src="https://amoradigital.nl/asset/Ali_Ghasemirad.jpg"
                  alt="Ali Ghasemirad - Co-Founder & Digital Marketing Strategist"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-medium mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Co-Founder & Digital Marketing Strategist</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Ali Ghasemirad
              </h3>

              <p className="text-lg text-slate-600 mb-6">
                With over two decades of experience in digital marketing, Ali has transformed 
                the online presence of hundreds of businesses worldwide. His data-driven approach 
                and deep expertise across SEO, paid advertising, analytics, and content marketing 
                have delivered measurable results for clients ranging from ambitious startups to 
                established enterprises.
              </p>

              <p className="text-slate-600 mb-6">
                Ali is the author of <span className="font-semibold text-slate-800">"Beyond Pixels: Unveiling Digital Marketing Wonders"</span>, 
                sharing his years of strategic insights with the wider marketing community. 
                His portfolio spans over 500 successful projects, and he holds certifications from 
                leading digital marketing institutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Search Marketing Specialist',
                  'E-Commerce Marketing',
                  'Content Marketing',
                  'Direct-Response Copywriting',
                  'Google Analytics (Advanced)',
                  'Customer Acquisition'
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="text-center px-4 py-3 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="text-2xl font-bold text-primary-700">20+</div>
                  <div className="text-xs text-slate-500">Years Experience</div>
                </div>
                <div className="text-center px-4 py-3 rounded-xl bg-secondary-50 border border-secondary-100">
                  <div className="text-2xl font-bold text-secondary-700">500+</div>
                  <div className="text-xs text-slate-500">Projects Delivered</div>
                </div>
                <div className="text-center px-4 py-3 rounded-xl bg-accent-50 border border-accent-100">
                  <div className="text-2xl font-bold text-accent-700">1</div>
                  <div className="text-xs text-slate-500">Published Book</div>
                </div>
              </div>
            </div>
          </div>

          {/* Morassa Bigdeli */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
                <img
                  src="https://amoradigital.nl/asset/Morassa.jpg"
                  alt="Morassa Bigdeli - Co-Founder & Business Strategy Director"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-xs font-medium mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Co-Founder & Business Strategy Director</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Morassa Bigdeli
              </h3>

              <p className="text-lg text-slate-600 mb-6">
                Morassa brings a unique blend of strategic vision and operational excellence to 
                Amora Digital. With a sharp eye for business growth opportunities and a passion for 
                building meaningful client relationships, she ensures every project aligns with 
                both the client's goals and the highest standards of quality.
              </p>

              <p className="text-slate-600 mb-6">
                Her expertise in project management, business development, and creative strategy 
                has been instrumental in shaping Amora Digital's client-first approach. Morassa 
                believes that true digital success comes from understanding the heart of each 
                business and crafting solutions that resonate with their audience.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Business Development',
                  'Strategic Planning',
                  'Client Relations',
                  'Project Management',
                  'Creative Direction',
                  'Brand Consulting'
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="text-center px-4 py-3 rounded-xl bg-secondary-50 border border-secondary-100">
                  <div className="text-2xl font-bold text-secondary-700">100%</div>
                  <div className="text-xs text-slate-500">Client Focus</div>
                </div>
                <div className="text-center px-4 py-3 rounded-xl bg-accent-50 border border-accent-100">
                  <div className="text-2xl font-bold text-accent-700">360°</div>
                  <div className="text-xs text-slate-500">Strategic Vision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionVisionSection() {
  const items = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses of all sizes with cutting-edge digital marketing and development solutions that drive measurable growth, build lasting online presence, and create genuine connections with their audiences.',
      color: 'primary'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted digital partner in the Netherlands and beyond — a company known for combining technical innovation with heartfelt dedication to every client\'s success.',
      color: 'secondary'
    },
    {
      icon: Rocket,
      title: 'Our Goal',
      description: 'To help 1,000+ businesses transform their digital presence by delivering transparent, results-driven strategies that turn visitors into loyal customers and investments into tangible returns.',
      color: 'accent'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: 'bg-primary-100',
        icon: 'text-primary-600',
        gradient: 'from-primary-500 to-primary-600',
        border: 'border-primary-100'
      },
      secondary: {
        bg: 'bg-secondary-100',
        icon: 'text-secondary-600',
        gradient: 'from-secondary-500 to-secondary-600',
        border: 'border-secondary-100'
      },
      accent: {
        bg: 'bg-accent-100',
        icon: 'text-accent-600',
        gradient: 'from-accent-500 to-accent-600',
        border: 'border-accent-100'
      }
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>What Drives Us</span>
          </div>
          <h2 className="section-heading text-slate-900 mb-4">
            Our Purpose &{' '}
            <span className="gradient-text">Direction</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => {
            const colorClasses = getColorClasses(item.color)
            return (
              <div 
                key={item.title}
                className={`card p-8 border-2 border-transparent hover:border-${item.color}-200 group relative overflow-hidden`}
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${colorClasses.gradient} opacity-5 rounded-full group-hover:opacity-10 transition-opacity`} />
                
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
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

function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Every decision we make starts with our client\'s success in mind. Your goals become our goals.'
    },
    {
      icon: Globe,
      title: 'Innovation-Driven',
      description: 'We stay ahead of digital trends to bring you the latest strategies and technologies.'
    },
    {
      icon: BookOpen,
      title: 'Transparency',
      description: 'Clear communication, honest reporting, and no hidden surprises. You always know where you stand.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in everything from code quality to campaign performance.'
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The principles that guide every project, every strategy, and every relationship we build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 group-hover:bg-white/20 transition-colors">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Let Ali, Morassa, and the Amora Digital team help you build the digital presence 
              your business deserves. Reach out for a free strategy consultation.
            </p>

            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-lg group"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="mt-6 text-sm text-white/70">
              No commitment required. 100% free consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
