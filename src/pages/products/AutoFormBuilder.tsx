import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Zap, Sparkles, MousePointerClick, Mail, Download, Shield,
  Smartphone, BarChart3, FileType, Settings, Eye, Palette, Filter, Globe, ExternalLink,
  Code2, Star
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbProducts: 'Products', crumbCurrent: 'Auto Form Builder',
    badge: 'WordPress Plugin',
    headPre: 'Forms That Convert, ', headHighlight: 'Not Complicate',
    sub: 'Build professional WordPress forms in minutes, not hours. Drag, drop, done. The most intuitive form builder for WordPress\u2014powerful yet simple.',
    ctaPro: 'Get Pro Version', ctaFree: 'Download Free',
    trust1: '5-Star Reviews', trust2: 'Free Forever Version',
    preview: { title: 'Form Builder', name: 'Full Name', email: 'Email Address', msg: 'Message', submit: 'Submit Form' },
    floats: { preview: 'Real-time Preview', fast: '5 Min Setup', mobile: 'Mobile Ready', secure: 'Secure' },
    benefitsSection: { badge: 'Why Choose Auto Form Builder', headPre: 'From Frustration to ', headHighlight: '5-Minute Forms', sub: 'Stop wrestling with complicated form plugins. Auto Form Builder gives you professional power with consumer simplicity.' },
    benefits: [
      { title: 'Save Hours of Development Time', description: 'Build forms in 5 minutes instead of hours. No more wrestling with complex form plugins or custom coding.', stat: '95%', statLabel: 'Faster Setup' },
      { title: 'Increase Conversion Rates', description: 'Beautiful, responsive forms that work flawlessly on all devices lead to higher completion rates.', stat: '2.5x', statLabel: 'More Conversions' },
      { title: 'Never Lose a Lead', description: 'All submissions stored securely in your database with instant email notifications and easy export.', stat: '100%', statLabel: 'Lead Capture' }
    ],
    featuresSection: { badge: 'Powerful Features', headPre: 'Everything You Need to Build ', headHighlight: 'Amazing Forms', sub: 'From simple contact forms to advanced multi-step lead generators\u2014Auto Form Builder delivers all the tools you need.' },
    features: [
      { title: 'Drag & Drop Builder', description: 'Create professional forms with an intuitive visual builder. See your form take shape in real-time with instant preview.' },
      { title: '25+ Field Types', description: 'Text, email, file uploads, date pickers, address fields, dropdowns, checkboxes, and more\u2014everything you need.' },
      { title: 'Conditional Logic', description: 'Show or hide fields based on user responses. Create intelligent forms that adapt dynamically.' },
      { title: 'Mobile Responsive', description: 'Forms look perfect on every device\u2014desktop, tablet, and mobile\u2014automatically optimized.' },
      { title: 'Submission Management', description: 'View, search, filter, and manage all submissions from one powerful dashboard. Export as CSV or JSON.' },
      { title: 'Email Notifications', description: 'Get instant notifications when someone submits a form. Never miss a lead again.' },
      { title: 'Custom Styling', description: 'Match your brand perfectly. Customize colors, fonts, spacing, and button styles without writing CSS.' },
      { title: 'Enterprise Security', description: 'Built-in file validation, spam protection, and secure data handling. GDPR compliant out of the box.' }
    ],
    casesSection: { badge: 'Use Cases', headPre: 'Perfect For Every ', headHighlight: 'Form Type' },
    useCases: [
      'Contact Forms', 'Lead Generation', 'Registration Forms', 'Survey Forms',
      'Order Forms', 'Quote Requests', 'Application Forms', 'Feedback Forms',
      'Multi-Step Forms', 'File Upload Forms', 'Payment Forms', 'Booking Forms'
    ],
    techSection: { badge: 'Built Right', headPre: 'WordPress Standards, ', headHighlight: 'Enterprise Quality', sub: 'Built with WordPress best practices and trusted by thousands of users worldwide.' },
    techFeatures: [
      { name: 'WordPress.org Standards', description: 'Built with WordPress best practices' },
      { name: 'Lightweight & Fast', description: 'Optimized for performance' },
      { name: 'Translation Ready', description: 'Available in 13+ languages' },
      { name: 'Developer Friendly', description: 'Hooks and filters for customization' }
    ],
    testimonial: {
      quote: '"Auto Form Builder made building WordPress forms genuinely fast and smooth. The visual drag-and-drop editor with real-time preview helped me put together forms in minutes. Conditional logic keeps longer forms clean and user-friendly."',
      author: 'Sarah M.', role: 'Marketing Manager'
    },
    cta1: { heading: 'Ready to Build Better Forms?', sub: 'Download Auto Form Builder free from WordPress.org or get Pro features for advanced functionality.', button: 'Visit Auto Form Builder', footnote: 'Free forever. No credit card required.' },
    cta2: { heading: 'Need a Custom WordPress Plugin?', sub: 'We built Auto Form Builder, and we can build custom WordPress plugins tailored to your specific business needs.', bullets: ['Custom functionality', 'WordPress best practices', 'Ongoing support & updates', 'Performance optimized'], button: 'Develop Your Own WordPress Plugin' },
    quick: { heading: 'Questions about Auto Form Builder?', sub: "We're here to help you build better forms.", visit: 'Visit Website', contact: 'Contact Us' }
  },
  nl: {
    crumbHome: 'Home', crumbProducts: 'Producten', crumbCurrent: 'Auto Form Builder',
    badge: 'WordPress-plugin',
    headPre: 'Formulieren die converteren, ', headHighlight: 'niet die complex zijn',
    sub: 'Bouw professionele WordPress-formulieren in minuten, niet uren. Drag, drop, klaar. De meest intuïtieve formulierbouwer voor WordPress \u2014 krachtig én simpel.',
    ctaPro: 'Pro-versie kopen', ctaFree: 'Gratis downloaden',
    trust1: '5-sterren-reviews', trust2: 'Altijd-gratis-versie',
    preview: { title: 'Formulierbouwer', name: 'Volledige naam', email: 'E-mailadres', msg: 'Bericht', submit: 'Versturen' },
    floats: { preview: 'Realtime preview', fast: '5 min opzet', mobile: 'Mobielklaar', secure: 'Veilig' },
    benefitsSection: { badge: 'Waarom Auto Form Builder', headPre: 'Van frustratie naar ', headHighlight: 'formulieren in 5 minuten', sub: 'Stop met worstelen met ingewikkelde formulierplugins. Auto Form Builder geeft je professionele kracht met de eenvoud van een consumentenapp.' },
    benefits: [
      { title: 'Bespaar uren ontwikkeltijd', description: 'Bouw formulieren in 5 minuten in plaats van uren. Geen gevecht meer met complexe plugins of maatwerk-code.', stat: '95%', statLabel: 'Snellere opzet' },
      { title: 'Verhoog je conversie', description: 'Mooie, responsive formulieren die overal feilloos werken leiden tot hogere voltooiingspercentages.', stat: '2,5x', statLabel: 'Meer conversies' },
      { title: 'Verlies nooit een lead', description: 'Alle inzendingen veilig in je database opgeslagen, met directe e-mail-notificaties en eenvoudige export.', stat: '100%', statLabel: 'Lead-capture' }
    ],
    featuresSection: { badge: 'Krachtige features', headPre: 'Alles wat je nodig hebt om ', headHighlight: 'geweldige formulieren te bouwen', sub: 'Van simpele contactformulieren tot geavanceerde multi-step-leadgenerators \u2014 Auto Form Builder biedt alle tools die je nodig hebt.' },
    features: [
      { title: 'Drag & drop-builder', description: 'Bouw professionele formulieren met een intuïtieve visuele editor. Zie je formulier vorm krijgen met directe preview.' },
      { title: '25+ veldtypes', description: 'Tekst, e-mail, file-uploads, datumkiezers, adresvelden, dropdowns, checkboxes en meer \u2014 alles wat je nodig hebt.' },
      { title: 'Conditionele logica', description: 'Toon of verberg velden op basis van antwoorden. Maak slimme formulieren die zich dynamisch aanpassen.' },
      { title: 'Mobiel responsive', description: 'Formulieren zien er perfect uit op elk device \u2014 desktop, tablet en mobiel \u2014 automatisch geoptimaliseerd.' },
      { title: 'Inzendingen-beheer', description: 'Bekijk, zoek, filter en beheer alle inzendingen vanuit één krachtig dashboard. Exporteer naar CSV of JSON.' },
      { title: 'E-mail-notificaties', description: 'Krijg direct een notificatie als iemand een formulier verstuurt. Mis nooit meer een lead.' },
      { title: 'Custom styling', description: 'Match je merk perfect. Pas kleuren, fonts, spacing en knopstijlen aan zonder code te schrijven.' },
      { title: 'Enterprise-security', description: 'Ingebouwde bestandsvalidatie, spam-protectie en veilige dataverwerking. AVG-conform out of the box.' }
    ],
    casesSection: { badge: 'Use cases', headPre: 'Perfect voor elk ', headHighlight: 'soort formulier' },
    useCases: [
      'Contactformulieren', 'Lead-generatie', 'Registratieformulieren', 'Enquêtes',
      'Bestelformulieren', 'Offerte-aanvragen', 'Sollicitatieformulieren', 'Feedback-formulieren',
      'Multi-step-formulieren', 'File-upload-formulieren', 'Betaalformulieren', 'Reserveringsformulieren'
    ],
    techSection: { badge: 'Goed gebouwd', headPre: 'WordPress-standaarden, ', headHighlight: 'enterprise-kwaliteit', sub: 'Gebouwd volgens WordPress-best-practices en vertrouwd door duizenden gebruikers wereldwijd.' },
    techFeatures: [
      { name: 'WordPress.org-standaarden', description: 'Volgens WordPress-best-practices' },
      { name: 'Lichtgewicht & snel', description: 'Geoptimaliseerd voor performance' },
      { name: 'Vertaal-klaar', description: 'Beschikbaar in 13+ talen' },
      { name: 'Developer-vriendelijk', description: 'Hooks en filters voor customization' }
    ],
    testimonial: {
      quote: '"Auto Form Builder maakt het bouwen van WordPress-formulieren echt snel en soepel. De visuele drag-and-drop-editor met realtime preview hielp me formulieren in minuten te maken. Conditionele logica houdt langere formulieren netjes en gebruiksvriendelijk."',
      author: 'Sarah M.', role: 'Marketing Manager'
    },
    cta1: { heading: 'Klaar om betere formulieren te bouwen?', sub: 'Download Auto Form Builder gratis vanaf WordPress.org of haal de Pro-versie voor geavanceerde functies.', button: 'Bezoek Auto Form Builder', footnote: 'Altijd gratis. Geen creditcard nodig.' },
    cta2: { heading: 'Een eigen WordPress-plugin nodig?', sub: 'Wij hebben Auto Form Builder zelf gebouwd \u2014 en we bouwen ook custom WordPress-plugins op maat van jouw business.', bullets: ['Functionaliteit op maat', 'WordPress-best-practices', 'Doorlopende support & updates', 'Performance-geoptimaliseerd'], button: 'Bouw je eigen WordPress-plugin' },
    quick: { heading: 'Vragen over Auto Form Builder?', sub: 'Wij helpen je graag bij betere formulieren.', visit: 'Bezoek website', contact: 'Contact' }
  }
} as const

const FEATURE_ICONS = [MousePointerClick, FileType, Filter, Smartphone, BarChart3, Mail, Palette, Shield]
const TECH_ICONS = [Code2, Zap, Globe, Settings]

export default function AutoFormBuilder() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 text-white">
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
                {t.headPre}<span className="text-purple-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://autoformbuilder.com/pricing/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaPro}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="https://wordpress.org/plugins/auto-form-builder/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  <Download className="mr-2 w-5 h-5" aria-hidden />
                  {t.ctaFree}
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
                  <CheckCircle2 className="w-5 h-5 text-purple-300" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                  <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 border-b border-slate-200">
                    <MousePointerClick className="w-5 h-5 text-purple-600" aria-hidden />
                    <span className="font-semibold text-slate-900">{t.preview.title}</span>
                    <div className="ml-auto flex items-center gap-2">
                      <Eye className="w-4 h-4 text-slate-400" aria-hidden />
                      <Settings className="w-4 h-4 text-slate-400" aria-hidden />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.preview.name}</label>
                      <div className="h-10 bg-slate-100 rounded-lg border border-slate-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.preview.email}</label>
                      <div className="h-10 bg-slate-100 rounded-lg border border-slate-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.preview.msg}</label>
                      <div className="h-20 bg-slate-100 rounded-lg border border-slate-200" />
                    </div>
                    <button type="button" className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg">
                      {t.preview.submit}
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.preview}</span>
                </div>
              </div>
              <div className="absolute top-20 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.fast}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <Smartphone className="w-4 h-4 text-cyan-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.mobile}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-400/30 backdrop-blur-sm">
                  <Shield className="w-4 h-4 text-rose-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.secure}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
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
              <div key={benefit.title} className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-purple-200 hover:shadow-xl transition-all group">
                <div className="text-5xl font-bold text-purple-100 mb-4 group-hover:text-purple-200 transition-colors">{benefit.stat}</div>
                <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-3">{benefit.statLabel}</div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <FileType className="w-4 h-4" aria-hidden />
              <span>{t.casesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.casesSection.headPre}<span className="gradient-text">{t.casesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {t.useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 hover:bg-purple-50 hover:border-purple-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" aria-hidden />
                <span className="text-sm text-slate-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" aria-hidden />
              <span>{t.techSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.techSection.headPre}<span className="text-purple-400">{t.techSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.techSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.techFeatures.map((tech, i) => {
              const Icon = TECH_ICONS[i]
              return (
                <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center flex-shrink-0 mb-4">
                    <Icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-white/70">{tech.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 mb-8 leading-relaxed">{t.testimonial.quote}</blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-900">{t.testimonial.author}</div>
                <div className="text-slate-600 text-sm">{t.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <MousePointerClick className="w-12 h-12 text-purple-200 mb-6" aria-hidden />
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t.cta1.heading}</h3>
                <p className="text-lg text-white/90 mb-8">{t.cta1.sub}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://autoformbuilder.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-purple-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                    {t.cta1.button}
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                  </a>
                </div>
                <p className="mt-6 text-sm text-white/70">{t.cta1.footnote}</p>
              </div>
            </div>

            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 md:p-12 overflow-hidden border border-slate-700">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
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
                <Link to={ROUTES.contact[locale]} className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl hover:from-purple-700 hover:to-violet-700 transition-all shadow-lg group">
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
              <a href="https://autoformbuilder.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4" aria-hidden />
                {t.quick.visit}
              </a>
              <Link to={ROUTES.contact[locale]} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors">
                <Mail className="w-4 h-4" aria-hidden />
                {t.quick.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
