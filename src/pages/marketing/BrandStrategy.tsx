import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, Palette, Target, Heart, Users, Sparkles, Eye, MessageSquare,
  Lightbulb, Compass, Crown, Star, Phone, Mail, FileText, Layers, PenTool, Type, Image,
  BookOpen, TrendingUp, Award
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'Brand Strategy',
    headPre: 'Build a Brand ', headHighlight: 'People Remember',
    sub: "Your brand is more than a logo. It's the feeling people get when they interact with your business. We'll help you create a brand that resonates, differentiates, and drives growth.",
    ctaStart: 'Start Your Brand Journey', ctaProcess: 'Our Process',
    trust1: '50+ Brands Built', trust2: 'Award-Winning Design',
    visualBadges: { typography: 'Typography', voice: 'Bold & Confident', values: 'Trust & Innovation' },
    stats: [
      { value: '89%', label: 'Brand Recognition', description: 'Increase for clients' },
      { value: '3.5x', label: 'Customer Trust', description: 'With consistent branding' },
      { value: '23%', label: 'Revenue Increase', description: 'From strong branding' },
      { value: '50+', label: 'Brands Built', description: 'Successful projects' }
    ],
    whySection: { badge: 'Why Brand Strategy', headPre: 'Why Invest in ', headHighlight: 'Brand Strategy?', sub: "A strong brand is your most valuable business asset. It's what makes customers choose you." },
    whyBranding: [
      { title: 'Command Premium Prices', description: 'Strong brands can charge 20-25% more than competitors for the same product or service.' },
      { title: 'Build Customer Loyalty', description: 'Consistent branding creates emotional connections that turn customers into advocates.' },
      { title: 'Attract Top Talent', description: 'A compelling brand attracts employees who believe in your mission and values.' },
      { title: 'Stand Out From Competition', description: 'A unique brand identity makes you memorable in a crowded marketplace.' }
    ],
    elementsSection: { badge: 'Brand Foundation', headPre: 'The Elements of a ', headHighlight: 'Strong Brand', sub: 'We develop every aspect of your brand to create a cohesive, compelling identity.' },
    brandElements: [
      { name: 'Brand Purpose', description: 'Why your brand exists beyond profit' },
      { name: 'Brand Values', description: 'Core beliefs that guide your brand' },
      { name: 'Brand Personality', description: 'Human traits your brand embodies' },
      { name: 'Brand Voice', description: 'How your brand communicates' },
      { name: 'Brand Promise', description: 'What customers can always expect' },
      { name: 'Brand Experience', description: 'How people feel interacting with you' }
    ],
    servicesSection: { badge: 'Our Services', headPre: 'Complete Brand ', headHighlight: 'Strategy Services' },
    services: [
      { title: 'Brand Discovery', description: 'Deep dive into your business, audience, and competitors to uncover your unique positioning.' },
      { title: 'Brand Positioning', description: 'Define where your brand fits in the market and how it stands apart from competitors.' },
      { title: 'Brand Messaging', description: 'Craft compelling brand voice, taglines, and key messages that resonate with your audience.' },
      { title: 'Visual Identity', description: 'Design logos, color palettes, typography, and visual elements that capture your brand essence.' },
      { title: 'Brand Guidelines', description: 'Comprehensive style guides ensuring consistency across all touchpoints.' },
      { title: 'Brand Activation', description: 'Strategies to bring your brand to life across marketing channels.' }
    ],
    visualSection: { badge: 'Visual Identity', headPre: 'Visual Identity ', headHighlight: 'Design', sub: 'We design every visual element to create a cohesive brand experience.' },
    visualIdentity: [
      { name: 'Logo Design', description: 'Memorable mark that represents your brand' },
      { name: 'Color Palette', description: 'Strategic colors that evoke the right emotions' },
      { name: 'Typography', description: 'Fonts that reflect your brand personality' },
      { name: 'Photography Style', description: 'Visual direction for imagery and photos' },
      { name: 'Graphic Elements', description: 'Icons, patterns, and visual motifs' },
      { name: 'Templates', description: 'Consistent layouts for all materials' }
    ],
    processSection: { badge: 'Our Process', headPre: 'How We ', headHighlight: 'Build Your Brand' },
    process: [
      { step: '01', title: 'Discovery', description: 'We immerse ourselves in your business, audience, and industry to understand the landscape.' },
      { step: '02', title: 'Strategy', description: 'We define your brand positioning, messaging, and personality framework.' },
      { step: '03', title: 'Identity Design', description: 'We create the visual elements that bring your brand strategy to life.' },
      { step: '04', title: 'Implementation', description: 'We deliver comprehensive guidelines and help you roll out the new brand.' }
    ],
    deliverablesSection: { badge: 'Deliverables', headPre: "What You'll ", headHighlight: 'Receive' },
    deliverables: [
      'Brand strategy document', 'Positioning statement', 'Mission & vision', 'Brand values',
      'Brand personality', 'Messaging framework', 'Logo & variations', 'Color palette',
      'Typography system', 'Photography guidelines', 'Brand guidelines PDF', 'Asset library'
    ],
    testimonial: {
      quote: '"Our rebrand transformed everything. Customers now instantly recognize us, we\'re attracting better clients, and we\'ve been able to raise our prices by 30%."',
      author: 'David Vermeer', role: 'Founder, Vermeer Consulting'
    },
    lead: {
      heading: 'Ready to Build a Brand That Stands Out?',
      sub: 'Get a free brand consultation and discover how a strategic rebrand can transform your business.',
      bullets: ['Brand audit & assessment', 'Competitor analysis', 'Positioning opportunities', 'Custom strategy proposal'],
      title: 'Get Your Free Brand Consultation', subject: 'Brand Strategy Inquiry',
      button: 'Get Free Consultation', footnote: "Free consultation. Let's discuss your brand vision.",
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com',
      company: 'Company Name', companyPh: 'Your Company',
      project: 'Project Type', projectPh: 'Select project type',
      projectOpts: ['New Brand (Starting from scratch)', 'Rebrand (Refresh existing brand)', 'Visual Identity Only', 'Brand Strategy Only']
    },
    quick: { heading: 'Ready to build your brand?', sub: "Let's discuss your brand strategy today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'Merkstrategie',
    headPre: 'Bouw een merk dat ', headHighlight: 'mensen onthouden',
    sub: 'Je merk is meer dan een logo. Het is het gevoel dat mensen krijgen bij contact met je bedrijf. We helpen je een merk te bouwen dat resoneert, zich onderscheidt en groei stimuleert.',
    ctaStart: 'Start je merktraject', ctaProcess: 'Onze werkwijze',
    trust1: '50+ merken gebouwd', trust2: 'Bekroond ontwerp',
    visualBadges: { typography: 'Typografie', voice: 'Krachtig & zelfverzekerd', values: 'Vertrouwen & innovatie' },
    stats: [
      { value: '89%', label: 'Merkherkenning', description: 'Stijging voor klanten' },
      { value: '3,5x', label: 'Klantvertrouwen', description: 'Bij consistente branding' },
      { value: '23%', label: 'Omzetgroei', description: 'Door sterke branding' },
      { value: '50+', label: 'Merken gebouwd', description: 'Succesvolle projecten' }
    ],
    whySection: { badge: 'Waarom merkstrategie', headPre: 'Waarom investeren in ', headHighlight: 'merkstrategie?', sub: 'Een sterk merk is je waardevolste bedrijfsmiddel. Het is wat klanten voor jou laat kiezen.' },
    whyBranding: [
      { title: 'Vraag premium prijzen', description: 'Sterke merken kunnen 20-25% meer rekenen dan concurrenten voor hetzelfde product of dezelfde dienst.' },
      { title: 'Bouw klantloyaliteit', description: 'Consistente branding creëert emotionele connecties die klanten in ambassadeurs veranderen.' },
      { title: 'Trek toptalent aan', description: 'Een meeslepend merk trekt medewerkers aan die in je missie en waarden geloven.' },
      { title: 'Val op tussen concurrenten', description: 'Een unieke merkidentiteit maakt je onvergetelijk in een drukke markt.' }
    ],
    elementsSection: { badge: 'Merkfundament', headPre: 'De elementen van een ', headHighlight: 'sterk merk', sub: 'We ontwikkelen elk aspect van je merk voor een coherente, krachtige identiteit.' },
    brandElements: [
      { name: 'Merkdoel', description: 'Waarom je merk bestaat \u2014 buiten winst om' },
      { name: 'Merkwaarden', description: 'Kernovertuigingen die je merk sturen' },
      { name: 'Merkpersoonlijkheid', description: 'Menselijke trekken die je merk belichaamt' },
      { name: 'Merkstem', description: 'Hoe je merk communiceert' },
      { name: 'Merkbelofte', description: 'Wat klanten altijd kunnen verwachten' },
      { name: 'Merkbeleving', description: 'Hoe mensen zich voelen in contact met je merk' }
    ],
    servicesSection: { badge: 'Onze diensten', headPre: 'Complete ', headHighlight: 'merkstrategie-diensten' },
    services: [
      { title: 'Brand discovery', description: 'Diep duiken in je bedrijf, publiek en concurrenten om je unieke positionering bloot te leggen.' },
      { title: 'Brand positioning', description: 'Bepalen waar je merk in de markt past en hoe het zich onderscheidt.' },
      { title: 'Brand messaging', description: 'Krachtige merkstem, taglines en kernboodschappen creëren die resoneren met je publiek.' },
      { title: 'Visuele identiteit', description: 'Logo\'s, kleurpaletten, typografie en visuele elementen die je merkessentie vatten.' },
      { title: 'Brand guidelines', description: 'Uitgebreide stijlgidsen voor consistentie op alle touchpoints.' },
      { title: 'Brand activation', description: 'Strategieën om je merk tot leven te brengen op alle marketingkanalen.' }
    ],
    visualSection: { badge: 'Visuele identiteit', headPre: 'Visuele identiteit ', headHighlight: 'ontwerp', sub: 'We ontwerpen elk visueel element voor een coherente merkbeleving.' },
    visualIdentity: [
      { name: 'Logo-ontwerp', description: 'Een onvergetelijk merk dat je merk vertegenwoordigt' },
      { name: 'Kleurenpalet', description: 'Strategische kleuren die de juiste emoties oproepen' },
      { name: 'Typografie', description: 'Lettertypes die je merkpersoonlijkheid uitstralen' },
      { name: 'Fotografiestijl', description: 'Visuele richting voor beeld en foto\'s' },
      { name: 'Grafische elementen', description: 'Iconen, patronen en visuele motieven' },
      { name: 'Templates', description: 'Consistente layouts voor al je materialen' }
    ],
    processSection: { badge: 'Onze werkwijze', headPre: 'Zo bouwen we ', headHighlight: 'jouw merk' },
    process: [
      { step: '01', title: 'Discovery', description: 'We duiken in je bedrijf, publiek en branche om het landschap te begrijpen.' },
      { step: '02', title: 'Strategie', description: 'We definiëren je merkpositionering, boodschappen en persoonlijkheid.' },
      { step: '03', title: 'Identiteitsontwerp', description: 'We creëren de visuele elementen die je merkstrategie tot leven brengen.' },
      { step: '04', title: 'Implementatie', description: 'We leveren uitgebreide richtlijnen en helpen je het nieuwe merk uit te rollen.' }
    ],
    deliverablesSection: { badge: 'Wat je krijgt', headPre: 'Wat je ', headHighlight: 'ontvangt' },
    deliverables: [
      'Merkstrategie-document', 'Positioneringsstatement', 'Missie & visie', 'Merkwaarden',
      'Merkpersoonlijkheid', 'Messaging framework', 'Logo & varianten', 'Kleurenpalet',
      'Typografiesysteem', 'Fotografierichtlijnen', 'Brand guidelines PDF', 'Asset library'
    ],
    testimonial: {
      quote: '"Onze rebrand heeft alles veranderd. Klanten herkennen ons nu meteen, we trekken betere opdrachtgevers aan en konden onze prijzen met 30% verhogen."',
      author: 'David Vermeer', role: 'Founder, Vermeer Consulting'
    },
    lead: {
      heading: 'Klaar om een merk te bouwen dat opvalt?',
      sub: 'Vraag een gratis merkconsult aan en ontdek hoe een strategische rebrand je bedrijf kan transformeren.',
      bullets: ['Merkaudit & assessment', 'Concurrentieanalyse', 'Positioneringskansen', 'Strategie-voorstel op maat'],
      title: 'Vraag je gratis merkconsult', subject: 'Aanvraag merkstrategie',
      button: 'Vraag gratis consult', footnote: 'Gratis consult. Laten we je merkvisie bespreken.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      company: 'Bedrijfsnaam', companyPh: 'Jouw bedrijf',
      project: 'Type project', projectPh: 'Kies projecttype',
      projectOpts: ['Nieuw merk (vanaf nul)', 'Rebrand (bestaand merk vernieuwen)', 'Alleen visuele identiteit', 'Alleen merkstrategie']
    },
    quick: { heading: 'Klaar om je merk te bouwen?', sub: 'Laten we vandaag je merkstrategie bespreken.', email: 'Mail ons' }
  }
} as const

const SERVICE_ICONS = [Compass, Target, MessageSquare, Palette, BookOpen, TrendingUp]
const BRAND_ELEMENT_ICONS = [Crown, Heart, Users, MessageSquare, Eye, Sparkles]
const VISUAL_ICONS = [PenTool, Palette, Type, Image, Layers, FileText]
const WHY_ICONS = [TrendingUp, Heart, Users, Award]

export default function BrandStrategy() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-700 text-white">
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
                {t.headPre}<span className="text-fuchsia-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaStart}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#process" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaProcess}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-fuchsia-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-fuchsia-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-fuchsia-400 to-purple-600 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">A</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 left-8 animate-float z-20">
                <div className="flex gap-1 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="w-8 h-8 rounded bg-fuchsia-500" />
                  <div className="w-8 h-8 rounded bg-purple-600" />
                  <div className="w-8 h-8 rounded bg-indigo-700" />
                </div>
              </div>

              <div className="absolute top-16 right-4 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="text-xs text-white/60 mb-1">{t.visualBadges.typography}</div>
                  <div className="text-lg font-bold text-white">Aa Bb Cc</div>
                </div>
              </div>

              <div className="absolute bottom-24 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                  <MessageSquare className="w-4 h-4 text-fuchsia-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.visualBadges.voice}</span>
                </div>
              </div>

              <div className="absolute bottom-16 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                  <Heart className="w-4 h-4 text-pink-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.visualBadges.values}</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-16 animate-float z-20" style={{ animationDelay: '2s' }}>
                <div className="w-24 h-14 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transform rotate-6 shadow-lg" />
                <div className="w-24 h-14 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-lg transform -rotate-3 -mt-10 ml-2 shadow-lg" />
              </div>

              <div className="absolute top-1/3 left-4 animate-float z-20" style={{ animationDelay: '0.75s' }}>
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <Sparkles className="w-6 h-6 text-fuchsia-300" aria-hidden />
                </div>
              </div>

              <div className="absolute top-1/3 right-12 animate-float z-20" style={{ animationDelay: '1.25s' }}>
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <Palette className="w-6 h-6 text-purple-300" aria-hidden />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.whySection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.whySection.headPre}<span className="gradient-text">{t.whySection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.whySection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyBranding.map((item, i) => {
              const Icon = WHY_ICONS[i]
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-fuchsia-50 hover:shadow-lg transition-all border border-transparent hover:border-fuchsia-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4" aria-hidden />
              <span>{t.elementsSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.elementsSection.headPre}<span className="gradient-text">{t.elementsSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.elementsSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.brandElements.map((element, i) => {
              const Icon = BRAND_ELEMENT_ICONS[i]
              return (
                <div key={element.name} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-100 hover:shadow-lg hover:border-purple-100 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{element.name}</h3>
                    <p className="text-sm text-slate-600">{element.description}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Palette className="w-4 h-4" aria-hidden />
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
                <div key={service.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section className="py-20 lg:py-28 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <PenTool className="w-4 h-4" aria-hidden />
              <span>{t.visualSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.visualSection.headPre}<span className="text-fuchsia-300">{t.visualSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.visualSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.visualIdentity.map((item, i) => {
              const Icon = VISUAL_ICONS[i]
              return (
                <div key={item.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <Icon className="w-10 h-10 text-fuchsia-300 mb-4" aria-hidden />
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-medium mb-4">
              <Compass className="w-4 h-4" aria-hidden />
              <span>{t.processSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.processSection.headPre}<span className="gradient-text">{t.processSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < t.process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-fuchsia-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-fuchsia-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <FileText className="w-4 h-4" aria-hidden />
              <span>{t.deliverablesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.deliverablesSection.headPre}<span className="gradient-text">{t.deliverablesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {t.deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-slate-100 hover:border-fuchsia-200 hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-fuchsia-500 flex-shrink-0" aria-hidden />
                <span className="text-sm text-slate-700">{item}</span>
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600" />
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
          <div className="relative rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-700 p-8 md:p-12 lg:p-16 overflow-hidden">
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
                      <CheckCircle2 className="w-5 h-5 text-fuchsia-200 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 shadow-lg shadow-fuchsia-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="bs-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="bs-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="bs-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="bs-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="bs-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="bs-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="bs-company" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.company}</label>
                  <input type="text" id="bs-company" name="company" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors" placeholder={t.lead.companyPh} />
                </div>
                <div>
                  <label htmlFor="bs-project" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.project}</label>
                  <select id="bs-project" name="project" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors">
                    <option value="">{t.lead.projectPh}</option>
                    {t.lead.projectOpts.map((opt) => (
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
