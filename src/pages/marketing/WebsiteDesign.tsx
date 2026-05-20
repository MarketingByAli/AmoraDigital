import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  Globe,
  CheckCircle2,
  Zap,
  Smartphone,
  Search,
  Gauge,
  Shield,
  Palette,
  MousePointerClick,
  Layers,
  Star,
  Phone,
  Mail,
  Monitor,
  Tablet,
  ShoppingCart,
  FileText,
  Settings
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home',
    crumbMarketing: 'Marketing',
    crumbCurrent: 'Website Design',
    headPre: 'Websites That ',
    headHighlight: 'Convert Visitors',
    headPost: ' Into Customers',
    sub: 'Beautiful, fast, and conversion-focused websites designed to grow your business. Every pixel is crafted to turn visitors into leads and customers.',
    ctaQuote: 'Get Free Quote',
    ctaWork: 'View Our Work',
    floatSpeed: '98 Speed Score',
    floatConv: '+127% Conversions',
    stats: [
      { value: '200+', label: 'Websites Built' },
      { value: '3x', label: 'Avg. Conversion Lift' },
      { value: '<2s', label: 'Load Time Target' },
      { value: '100%', label: 'Mobile Responsive' }
    ],
    features: {
      badge: 'Why Choose Us',
      headPre: 'Websites Built for ',
      headHighlight: 'Performance',
      sub: 'Every website we build is optimized for speed, conversions, and search engines.',
      items: [
        { title: 'Custom Design', description: 'Unique, brand-aligned designs that stand out from templates and competitors.' },
        { title: 'Mobile-First', description: 'Responsive designs that look stunning on all devices, from phones to desktops.' },
        { title: 'Lightning Fast', description: 'Optimized for speed with sub-2 second load times for better conversions.' },
        { title: 'SEO Ready', description: 'Built with SEO best practices to help you rank higher in search results.' },
        { title: 'Conversion Focused', description: 'Strategic layouts designed to turn visitors into leads and customers.' },
        { title: 'Secure & Reliable', description: 'SSL certificates, regular backups, and enterprise-grade security.' }
      ]
    },
    types: {
      badge: 'What We Build',
      headPre: 'Website Solutions for ',
      headHighlight: 'Every Need',
      sub: 'From simple landing pages to complex web applications, we have got you covered.',
      items: [
        {
          title: 'Business Websites',
          description: 'Professional websites that establish credibility and generate leads for your business.',
          features: ['About & Services Pages', 'Contact Forms', 'Blog Integration', 'Analytics Setup']
        },
        {
          title: 'E-Commerce Stores',
          description: 'Online stores that sell 24/7 with seamless checkout and inventory management.',
          features: ['Product Catalogs', 'Secure Payments', 'Inventory Management', 'Order Tracking']
        },
        {
          title: 'Landing Pages',
          description: 'High-converting landing pages designed to capture leads and drive action.',
          features: ['A/B Testing Ready', 'Lead Capture Forms', 'Analytics Integration', 'Fast Loading']
        },
        {
          title: 'Web Applications',
          description: 'Custom web apps with complex functionality tailored to your business needs.',
          features: ['User Dashboards', 'Database Integration', 'API Connections', 'Custom Features']
        }
      ]
    },
    process: {
      badge: 'Our Process',
      headPre: 'From Concept to ',
      headHighlight: 'Launch',
      sub: 'A proven process that delivers results on time and on budget.',
      items: [
        { step: '01', title: 'Discovery', description: 'We learn about your business, goals, target audience, and competitors to create a solid strategy.' },
        { step: '02', title: 'Design', description: 'Our designers create stunning mockups that align with your brand and convert visitors.' },
        { step: '03', title: 'Development', description: 'We build your website with clean code, fast loading times, and mobile responsiveness.' },
        { step: '04', title: 'Launch & Optimize', description: 'We launch your site, monitor performance, and continuously optimize for results.' }
      ]
    },
    testimonial: {
      quote:
        '"Amora Digital transformed our outdated website into a modern, high-converting machine. Our leads increased by 200% within the first month!"',
      author: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.'
    },
    lead: {
      heading: 'Ready for a Website That Converts?',
      sub: "Get a free consultation and quote for your project. We'll discuss your goals and show you how we can help.",
      bullets: ['Free consultation & quote', 'Custom design mockup', 'SEO & speed optimization', 'Ongoing support included'],
      title: 'Get Your Free Quote',
      subject: 'Website Design Quote Request',
      button: 'Get My Free Quote',
      footnote: "We'll respond within 24 hours. No spam, ever.",
      first: 'First Name',
      firstPh: 'John',
      last: 'Last Name',
      lastPh: 'Doe',
      email: 'Email',
      emailPh: 'john@company.com',
      project: 'Project Type',
      projectPh: 'Select a project type',
      projectOpts: ['Business Website', 'E-Commerce Store', 'Landing Page', 'Web Application', 'Website Redesign'],
      message: 'Tell us about your project',
      messagePh: 'Describe your project goals...'
    },
    quick: {
      heading: 'Have questions about your project?',
      sub: "Let's discuss your website goals today.",
      email: 'Email Us'
    }
  },
  nl: {
    crumbHome: 'Home',
    crumbMarketing: 'Marketing',
    crumbCurrent: 'Webdesign',
    headPre: 'Websites die ',
    headHighlight: 'bezoekers omzetten',
    headPost: ' in klanten',
    sub: 'Mooie, snelle en conversiegerichte websites om je bedrijf te laten groeien. Elke pixel is ontworpen om bezoekers in leads en klanten te veranderen.',
    ctaQuote: 'Gratis offerte',
    ctaWork: 'Bekijk ons werk',
    floatSpeed: '98 snelheidsscore',
    floatConv: '+127% conversie',
    stats: [
      { value: '200+', label: 'Gebouwde websites' },
      { value: '3x', label: 'Gem. conversiestijging' },
      { value: '<2s', label: 'Laadtijddoel' },
      { value: '100%', label: 'Mobielvriendelijk' }
    ],
    features: {
      badge: 'Waarom kiezen voor ons',
      headPre: 'Websites gebouwd voor ',
      headHighlight: 'prestaties',
      sub: 'Elke website die we bouwen is geoptimaliseerd voor snelheid, conversie en zoekmachines.',
      items: [
        { title: 'Maatwerk design', description: 'Uniek, merkgericht ontwerp dat opvalt tegenover templates en concurrenten.' },
        { title: 'Mobile-first', description: 'Responsive design dat er prachtig uitziet op elk apparaat, van telefoon tot desktop.' },
        { title: 'Razendsnel', description: 'Geoptimaliseerd voor snelheid met laadtijden onder de 2 seconden voor hogere conversie.' },
        { title: 'SEO-klaar', description: 'Gebouwd volgens SEO best practices zodat je hoger scoort in Google.' },
        { title: 'Conversiegericht', description: 'Strategische layouts die bezoekers omzetten in leads en klanten.' },
        { title: 'Veilig & betrouwbaar', description: 'SSL-certificaten, regelmatige back-ups en enterprise-grade beveiliging.' }
      ]
    },
    types: {
      badge: 'Wat we bouwen',
      headPre: 'Website-oplossingen voor ',
      headHighlight: 'elke behoefte',
      sub: 'Van eenvoudige landingspagina tot complexe webapplicatie \u2014 wij regelen het.',
      items: [
        {
          title: 'Zakelijke websites',
          description: 'Professionele websites die geloofwaardigheid uitstralen en leads genereren voor je bedrijf.',
          features: ['Over- & dienstenpagina\u2019s', 'Contactformulieren', 'Blogintegratie', 'Analytics-installatie']
        },
        {
          title: 'E-commerce webshops',
          description: 'Webshops die 24/7 verkopen, met soepele checkout en voorraadbeheer.',
          features: ['Productcatalogi', 'Veilige betalingen', 'Voorraadbeheer', 'Order tracking']
        },
        {
          title: 'Landingspagina\u2019s',
          description: 'Hoog converterende landingspagina\u2019s om leads te vangen en actie te stimuleren.',
          features: ['Klaar voor A/B-tests', 'Leadformulieren', 'Analytics-integratie', 'Snel laden']
        },
        {
          title: 'Webapplicaties',
          description: 'Maatwerk webapps met complexe functionaliteit, afgestemd op jouw bedrijf.',
          features: ['Gebruikersdashboards', 'Database-integratie', 'API-koppelingen', 'Maatwerk functies']
        }
      ]
    },
    process: {
      badge: 'Onze werkwijze',
      headPre: 'Van concept tot ',
      headHighlight: 'lancering',
      sub: 'Een bewezen werkwijze die resultaat oplevert, op tijd en binnen budget.',
      items: [
        { step: '01', title: 'Ontdekking', description: 'We leren je bedrijf, doelen, doelgroep en concurrenten kennen om een solide strategie te maken.' },
        { step: '02', title: 'Ontwerp', description: 'Onze designers maken sterke mockups die passen bij jouw merk en bezoekers laten converteren.' },
        { step: '03', title: 'Ontwikkeling', description: 'We bouwen je website met schone code, snelle laadtijden en mobiele responsiveness.' },
        { step: '04', title: 'Lancering & optimalisatie', description: 'We lanceren je site, monitoren performance en optimaliseren continu voor betere resultaten.' }
      ]
    },
    testimonial: {
      quote:
        '"Amora Digital heeft onze verouderde website omgetoverd tot een moderne, conversiegerichte machine. Onze leads stegen met 200% in de eerste maand!"',
      author: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.'
    },
    lead: {
      heading: 'Klaar voor een website die converteert?',
      sub: 'Vraag een gratis adviesgesprek en offerte aan. We bespreken je doelen en laten zien hoe we kunnen helpen.',
      bullets: ['Gratis advies & offerte', 'Maatwerk design-mockup', 'SEO- & snelheidsoptimalisatie', 'Doorlopende support inbegrepen'],
      title: 'Vraag je gratis offerte',
      subject: 'Offerteaanvraag webdesign',
      button: 'Vraag mijn offerte',
      footnote: 'We reageren binnen 24 uur. Geen spam, ooit.',
      first: 'Voornaam',
      firstPh: 'Jan',
      last: 'Achternaam',
      lastPh: 'Jansen',
      email: 'E-mail',
      emailPh: 'jan@bedrijf.nl',
      project: 'Type project',
      projectPh: 'Kies een type',
      projectOpts: ['Zakelijke website', 'Webshop', 'Landingspagina', 'Webapplicatie', 'Website-herontwerp'],
      message: 'Vertel ons over je project',
      messagePh: 'Beschrijf je projectdoelen...'
    },
    quick: {
      heading: 'Vragen over je project?',
      sub: 'Laten we vandaag je websitedoelen bespreken.',
      email: 'Mail ons'
    }
  }
} as const

const FEATURE_ICONS = [Palette, Smartphone, Gauge, Search, MousePointerClick, Shield]
const TYPE_ICONS = [Globe, ShoppingCart, FileText, Layers]

export default function WebsiteDesign() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
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
                {t.headPre}
                <span className="text-accent-300">{t.headHighlight}</span>
                {t.headPost}
              </h1>

              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaQuote}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaWork}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/10 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/10 rounded-lg px-3 py-1.5 text-xs text-white/60">yourwebsite.com</div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-8 bg-white/20 rounded-lg w-3/4" />
                    <div className="h-4 bg-white/10 rounded w-full" />
                    <div className="h-4 bg-white/10 rounded w-5/6" />
                    <div className="h-24 bg-white/10 rounded-lg" />
                    <div className="flex gap-3">
                      <div className="h-10 bg-accent-400/50 rounded-lg flex-1" />
                      <div className="h-10 bg-white/20 rounded-lg flex-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Gauge className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-green-300">{t.floatSpeed}</span>
                </div>
              </div>

              <div className="absolute top-20 left-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <Monitor className="w-5 h-5 text-white" aria-hidden />
                </div>
              </div>

              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <Tablet className="w-5 h-5 text-white" aria-hidden />
                </div>
              </div>

              <div className="absolute bottom-12 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <Smartphone className="w-5 h-5 text-white" aria-hidden />
                </div>
              </div>

              <div className="absolute bottom-4 left-1/3 animate-float z-20" style={{ animationDelay: '2s' }}>
                <div className="px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-400/30 backdrop-blur-sm">
                  <span className="text-sm font-medium text-secondary-300">{t.floatConv}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.features.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.features.headPre}
              <span className="gradient-text">{t.features.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.features.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div key={feature.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
              <span>{t.types.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.types.headPre}
              <span className="gradient-text">{t.types.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.types.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.types.items.map((type, i) => {
              const Icon = TYPE_ICONS[i]
              return (
                <div key={type.title} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" aria-hidden />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600 mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" aria-hidden />
              <span>{t.process.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.process.headPre}
              <span className="gradient-text">{t.process.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.process.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.items.map((step, index) => (
              <div key={step.step} className="relative">
                {index < t.process.items.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-primary-100 mb-4">{step.step}</div>
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
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              {t.testimonial.quote}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500" />
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
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 p-8 md:p-12 lg:p-16 overflow-hidden">
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
                      <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 shadow-lg shadow-primary-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="wd-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="wd-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="wd-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="wd-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="wd-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="wd-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="wd-project" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.project}</label>
                  <select id="wd-project" name="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                    <option value="">{t.lead.projectPh}</option>
                    {t.lead.projectOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="wd-message" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.message}</label>
                  <textarea id="wd-message" name="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder={t.lead.messagePh} />
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
