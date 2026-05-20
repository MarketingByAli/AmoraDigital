import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, Mail, Send, Users, BarChart3, Target, TrendingUp, Clock,
  Sparkles, FileText, MousePointer2, Calendar, RefreshCw, Star, Phone, Settings, Layers, Bot,
  Heart, ShoppingCart, UserPlus, Gift
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'Email Marketing',
    headPre: 'Turn Subscribers Into ', headHighlight: 'Loyal Customers',
    sub: "Email marketing delivers the highest ROI of any channel. We'll help you build automated email systems that nurture leads, drive sales, and keep customers coming back.",
    ctaStrategy: 'Get Email Strategy', ctaAutomations: 'See Automations',
    quickStat1: { value: '4,200%', label: 'Avg. ROI' }, quickStat2: { value: '42%', label: 'Open Rate' },
    dash: { title: 'Campaign Performance', period: 'This Month', recent: 'Summer Sale Campaign', sent: 'Sent 2 hours ago • 45% opened' },
    metrics: [
      { label: 'Emails Sent', value: '2.4M', change: '+18%' },
      { label: 'Open Rate', value: '42.3%', change: '+8%' },
      { label: 'Click Rate', value: '6.8%', change: '+12%' },
      { label: 'Revenue', value: '€127K', change: '+34%' }
    ],
    floats: { delivered: 'Delivered!', clicks: '+234 Clicks', sales: '€2.4K Sales', subs: '+89 Subs' },
    stats: [
      { value: '4,200%', label: 'Average ROI', description: 'On email marketing' },
      { value: '42%', label: 'Avg. Open Rate', description: 'Our client average' },
      { value: '€36', label: 'Revenue Per Email', description: 'For every €1 spent' },
      { value: '3x', label: 'More Conversions', description: 'Than social media' }
    ],
    why: { badge: 'Why Email Marketing', headPre: 'The Highest ROI Channel ', headHighlight: 'You Own' },
    whyBody: "Unlike social media where algorithms control your reach, email gives you direct access to your audience. It is the one marketing channel you truly own.",
    whyPoints: [
      { title: 'Direct Access', text: "Land directly in your customer's inbox, no algorithm in the way" },
      { title: 'Highest ROI', text: 'Email generates €36 for every €1 spent on average' },
      { title: 'Works 24/7', text: 'Automated emails nurture and sell while you sleep' },
      { title: 'Build Relationships', text: 'Personal, targeted messages that build loyalty' }
    ],
    emailPreview: {
      from: 'Your Brand', address: 'hello@yourbrand.com', subject: '🎉 Exclusive: 30% Off Just for You!',
      greeting: 'Hi Sarah,', body: "We noticed you've been eyeing our new collection. Here's an exclusive 30% discount just for you...",
      cta: 'Shop Now & Save 30%'
    },
    servicesSection: { badge: 'Our Services', headPre: 'Full-Service ', headHighlight: 'Email Marketing', sub: 'From strategy to execution, we handle everything to make email your best-performing channel.' },
    services: [
      { title: 'Email Strategy', description: 'Data-driven email marketing strategies aligned with your business goals and customer journey.' },
      { title: 'Email Design', description: 'Beautiful, mobile-responsive email templates that reflect your brand and drive action.' },
      { title: 'Automation', description: 'Set up automated email sequences that nurture leads and drive conversions 24/7.' },
      { title: 'List Management', description: 'Grow, segment, and maintain healthy email lists for maximum deliverability.' },
      { title: 'A/B Testing', description: 'Continuous testing of subject lines, content, and timing to optimize performance.' },
      { title: 'Analytics & Reporting', description: 'Detailed reporting on opens, clicks, conversions, and revenue attribution.' }
    ],
    automationsSection: { badge: 'Email Automations', headPre: 'Automated Emails That ', headHighlight: 'Sell 24/7', sub: 'Set up once, profit forever. These automation sequences work around the clock.' },
    automations: [
      { name: 'Welcome Series', description: 'Onboard new subscribers with a sequence that builds trust and drives first purchase.', emails: '3-5 emails' },
      { name: 'Abandoned Cart', description: 'Recover lost sales with timely reminders and incentives.', emails: '2-3 emails' },
      { name: 'Re-engagement', description: "Win back inactive subscribers before they're gone forever.", emails: '3-4 emails' },
      { name: 'Post-Purchase', description: 'Delight customers and encourage reviews, referrals, and repeat purchases.', emails: '4-6 emails' },
      { name: 'Birthday/Anniversary', description: 'Celebrate special occasions with personalized offers.', emails: '1-2 emails' },
      { name: 'Lead Nurture', description: 'Guide prospects through the buyer journey with valuable content.', emails: '5-7 emails' }
    ],
    platformsSection: { badge: 'Platforms', headPre: 'We Work With ', headHighlight: 'All Major Platforms' },
    campaignsSection: { badge: 'Campaign Types', headPre: 'Every Email Campaign ', headHighlight: 'You Need' },
    campaignTypes: [
      'Welcome sequences', 'Newsletter campaigns', 'Promotional emails', 'Product launches',
      'Abandoned cart recovery', 'Win-back campaigns', 'Event invitations', 'Survey/feedback requests',
      'Seasonal campaigns', 'Loyalty programs', 'Referral campaigns', 'Transactional emails'
    ],
    process: { badge: 'Our Process', headPre: 'How We ', headHighlight: 'Build Your Email Machine' },
    processItems: [
      { step: '01', title: 'Audit & Strategy', description: 'We analyze your current emails, list health, and develop a winning strategy.' },
      { step: '02', title: 'Setup & Design', description: 'We set up your email platform and create beautiful, branded templates.' },
      { step: '03', title: 'Automation Build', description: 'We build automated sequences that work around the clock.' },
      { step: '04', title: 'Optimize & Scale', description: 'We continuously test and optimize for better results.' }
    ],
    testimonial: {
      quote: '"Our email revenue went from nearly nothing to €45K per month. The automations they built just keep generating sales on autopilot."',
      author: 'Sophie de Jong', role: 'E-commerce Director, BeautyBox NL'
    },
    lead: {
      heading: 'Ready to Build Your Email Revenue Machine?',
      sub: 'Get a free email marketing audit and discover how to turn your subscriber list into a consistent revenue generator.',
      bullets: ['Email list health check', 'Automation opportunities', 'Revenue potential analysis', 'Custom strategy roadmap'],
      title: 'Get Your Free Email Audit', subject: 'Email Marketing Audit Request',
      button: 'Get My Free Email Audit', footnote: 'Free audit. Discover your email revenue potential.',
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com',
      listSize: 'Email List Size', listSizePh: 'Select list size',
      listOpts: ['0 - 1,000 subscribers', '1,000 - 5,000 subscribers', '5,000 - 25,000 subscribers', '25,000+ subscribers'],
      platform: 'Current Email Platform', platformPh: 'Select platform',
      platformOpts: ['Mailchimp', 'Klaviyo', 'HubSpot', 'ActiveCampaign', 'Other', 'Not using any']
    },
    quick: { heading: 'Ready to maximize your email ROI?', sub: "Let's discuss your email marketing goals today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'E-mailmarketing',
    headPre: 'Maak van abonnees ', headHighlight: 'trouwe klanten',
    sub: 'E-mailmarketing levert de hoogste ROI van elk kanaal. We helpen je geautomatiseerde e-mailflows op te zetten die leads nurtureren, omzet genereren en klanten laten terugkomen.',
    ctaStrategy: 'Vraag e-mailstrategie', ctaAutomations: 'Bekijk automatiseringen',
    quickStat1: { value: '4.200%', label: 'Gem. ROI' }, quickStat2: { value: '42%', label: 'Open rate' },
    dash: { title: 'Campagneprestatie', period: 'Deze maand', recent: 'Summer Sale-campagne', sent: '2 uur geleden verstuurd • 45% geopend' },
    metrics: [
      { label: 'Verstuurde e-mails', value: '2.4M', change: '+18%' },
      { label: 'Open rate', value: '42,3%', change: '+8%' },
      { label: 'Click-rate', value: '6,8%', change: '+12%' },
      { label: 'Omzet', value: '€127K', change: '+34%' }
    ],
    floats: { delivered: 'Bezorgd!', clicks: '+234 clicks', sales: '€2,4K omzet', subs: '+89 abonnees' },
    stats: [
      { value: '4.200%', label: 'Gem. ROI', description: 'Op e-mailmarketing' },
      { value: '42%', label: 'Gem. open rate', description: 'Onze klantgemiddelde' },
      { value: '€36', label: 'Omzet per e-mail', description: 'Voor elke €1 die je uitgeeft' },
      { value: '3x', label: 'Meer conversies', description: 'Dan social media' }
    ],
    why: { badge: 'Waarom e-mailmarketing', headPre: 'Het hoogste-ROI-kanaal ', headHighlight: 'dat van jou is' },
    whyBody: 'Anders dan social media \u2014 waar algoritmes je bereik bepalen \u2014 geeft e-mail je direct toegang tot je publiek. Het is het marketingkanaal dat je écht zelf bezit.',
    whyPoints: [
      { title: 'Direct contact', text: 'Beland direct in de inbox van je klant, zonder algoritme ertussen' },
      { title: 'Hoogste ROI', text: 'E-mail levert gemiddeld €36 per geïnvesteerde euro op' },
      { title: 'Werkt 24/7', text: 'Geautomatiseerde e-mails nurturen en verkopen terwijl jij slaapt' },
      { title: 'Bouw relaties', text: 'Persoonlijke, gerichte berichten die loyaliteit kweken' }
    ],
    emailPreview: {
      from: 'Jouw merk', address: 'hallo@jouwmerk.nl', subject: '🎉 Exclusief: 30% korting voor jou!',
      greeting: 'Hi Sarah,', body: 'We zagen dat je onze nieuwe collectie hebt bekeken. Hier is een exclusieve korting van 30% \u2014 alleen voor jou...',
      cta: 'Shop nu & bespaar 30%'
    },
    servicesSection: { badge: 'Onze diensten', headPre: 'Volledige ', headHighlight: 'e-mailmarketing', sub: 'Van strategie tot uitvoering \u2014 wij regelen alles, zodat e-mail je best presterende kanaal wordt.' },
    services: [
      { title: 'E-mailstrategie', description: 'Datagedreven e-mailstrategieën afgestemd op je doelen en customer journey.' },
      { title: 'E-mailontwerp', description: 'Mooie, mobile-responsive templates die je merk uitstralen en actie uitlokken.' },
      { title: 'Automation', description: 'Geautomatiseerde e-mailflows die leads nurturen en 24/7 converteren.' },
      { title: 'Lijstbeheer', description: 'Laat je lijst groeien, segmenteer en houd hem gezond voor maximale deliverability.' },
      { title: 'A/B-testen', description: 'Continu testen van onderwerpregels, content en timing voor betere prestaties.' },
      { title: 'Analytics & rapportage', description: 'Diepe rapportages op opens, clicks, conversies en omzettoewijzing.' }
    ],
    automationsSection: { badge: 'E-mailautomatiseringen', headPre: 'Automatische e-mails die ', headHighlight: '24/7 verkopen', sub: 'Eén keer instellen, voor altijd verdienen. Deze flows draaien dag en nacht.' },
    automations: [
      { name: 'Welkomstreeks', description: 'Onboard nieuwe abonnees met een reeks die vertrouwen kweekt en de eerste aankoop stimuleert.', emails: '3-5 e-mails' },
      { name: 'Achtergelaten winkelwagen', description: 'Win verloren omzet terug met tijdige herinneringen en incentives.', emails: '2-3 e-mails' },
      { name: 'Re-engagement', description: 'Win inactieve abonnees terug voordat ze voor altijd verdwijnen.', emails: '3-4 e-mails' },
      { name: 'Na aankoop', description: 'Verras klanten en stimuleer reviews, referrals en herhaalaankopen.', emails: '4-6 e-mails' },
      { name: 'Verjaardag/jubileum', description: 'Vier speciale momenten met persoonlijke aanbiedingen.', emails: '1-2 e-mails' },
      { name: 'Lead nurture', description: 'Begeleid prospects door de buyer journey met waardevolle content.', emails: '5-7 e-mails' }
    ],
    platformsSection: { badge: 'Platforms', headPre: 'We werken met ', headHighlight: 'alle grote platforms' },
    campaignsSection: { badge: 'Campagnetypes', headPre: 'Elke e-mailcampagne ', headHighlight: 'die je nodig hebt' },
    campaignTypes: [
      'Welkomstreeksen', 'Nieuwsbriefcampagnes', 'Promotie-e-mails', 'Productlanceringen',
      'Achtergelaten winkelwagen', 'Win-back-campagnes', 'Eventuitnodigingen', 'Enquête- of feedbackverzoeken',
      'Seizoenscampagnes', 'Loyaltyprogramma\u2019s', 'Referralcampagnes', 'Transactionele e-mails'
    ],
    process: { badge: 'Onze werkwijze', headPre: 'Zo bouwen we ', headHighlight: 'jouw e-mailmachine' },
    processItems: [
      { step: '01', title: 'Audit & strategie', description: 'We analyseren huidige e-mails, de gezondheid van je lijst en ontwikkelen een winnende strategie.' },
      { step: '02', title: 'Opzet & ontwerp', description: 'We zetten je e-mailplatform op en maken mooie, merkgerichte templates.' },
      { step: '03', title: 'Automation bouwen', description: 'We bouwen geautomatiseerde flows die dag en nacht draaien.' },
      { step: '04', title: 'Optimaliseren & opschalen', description: 'We blijven continu testen en optimaliseren voor betere resultaten.' }
    ],
    testimonial: {
      quote: '"Onze e-mailomzet ging van bijna niets naar €45K per maand. De automatiseringen die ze bouwden blijven gewoon verkopen op de automatische piloot."',
      author: 'Sophie de Jong', role: 'E-commerce Director, BeautyBox NL'
    },
    lead: {
      heading: 'Klaar om je e-mailomzetmachine te bouwen?',
      sub: 'Vraag een gratis e-mailmarketing-audit aan en ontdek hoe je je abonneelijst omzet in een stabiele omzetbron.',
      bullets: ['Health check van je lijst', 'Kansen voor automation', 'Analyse van omzetpotentieel', 'Strategie-roadmap op maat'],
      title: 'Vraag je gratis e-mailaudit', subject: 'Aanvraag e-mailmarketing-audit',
      button: 'Vraag mijn audit', footnote: 'Gratis audit. Ontdek je e-mailomzet-potentieel.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      listSize: 'Omvang e-maillijst', listSizePh: 'Kies omvang',
      listOpts: ['0 - 1.000 abonnees', '1.000 - 5.000 abonnees', '5.000 - 25.000 abonnees', '25.000+ abonnees'],
      platform: 'Huidig e-mailplatform', platformPh: 'Kies platform',
      platformOpts: ['Mailchimp', 'Klaviyo', 'HubSpot', 'ActiveCampaign', 'Anders', 'Nog geen platform']
    },
    quick: { heading: 'Klaar om je e-mail-ROI te maximaliseren?', sub: 'Laten we vandaag je e-maildoelen bespreken.', email: 'Mail ons' }
  }
} as const

const SERVICE_ICONS = [FileText, Sparkles, Bot, Users, BarChart3, TrendingUp]
const AUTOMATION_ICONS = [UserPlus, ShoppingCart, Heart, Gift, Calendar, TrendingUp]
const WHY_ICONS = [Target, TrendingUp, Clock, Heart]
const PLATFORMS = [
  { name: 'Mailchimp', color: 'from-yellow-400 to-yellow-500' },
  { name: 'Klaviyo', color: 'from-green-500 to-emerald-600' },
  { name: 'HubSpot', color: 'from-orange-500 to-orange-600' },
  { name: 'ActiveCampaign', color: 'from-blue-500 to-blue-600' },
  { name: 'Brevo', color: 'from-indigo-500 to-indigo-600' },
  { name: 'ConvertKit', color: 'from-red-500 to-red-600' }
]

export default function EmailMarketing() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 text-white">
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
                {t.headPre}<span className="text-cyan-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cyan-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaStrategy}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#automations" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaAutomations}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cyan-200" aria-hidden />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{t.quickStat1.value}</div>
                    <div className="text-xs text-white/60">{t.quickStat1.label}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MousePointer2 className="w-5 h-5 text-cyan-200" aria-hidden />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{t.quickStat2.value}</div>
                    <div className="text-xs text-white/60">{t.quickStat2.label}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-5 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">{t.dash.title}</h4>
                    <span className="text-xs text-cyan-300 font-medium">{t.dash.period}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {t.metrics.map((metric) => (
                      <div key={metric.label} className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-white/60">{metric.label}</span>
                          <span className="text-xs text-green-300">{metric.change}</span>
                        </div>
                        <div className="text-lg font-bold text-white">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <Send className="w-5 h-5 text-white" aria-hidden />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{t.dash.recent}</div>
                        <div className="text-xs text-white/60">{t.dash.sent}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.delivered}</span>
                </div>
              </div>
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <MousePointer2 className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.clicks}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <ShoppingCart className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.sales}</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <UserPlus className="w-4 h-4 text-cyan-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.subs}</span>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" aria-hidden />
                <span>{t.why.badge}</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                {t.why.headPre}<span className="gradient-text">{t.why.headHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">{t.whyBody}</p>

              <div className="space-y-4">
                {t.whyPoints.map((item, i) => {
                  const Icon = WHY_ICONS[i]
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyan-600" aria-hidden />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">{t.emailPreview.from}</div>
                      <div className="text-xs text-slate-500">{t.emailPreview.address}</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{t.emailPreview.subject}</div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-slate-600 mb-4">{t.emailPreview.greeting}</div>
                  <div className="text-sm text-slate-600 mb-4">{t.emailPreview.body}</div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold text-sm">{t.emailPreview.cta}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" aria-hidden />
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
                <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section id="automations" className="py-20 lg:py-28 bg-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Bot className="w-4 h-4" aria-hidden />
              <span>{t.automationsSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.automationsSection.headPre}<span className="text-cyan-300">{t.automationsSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.automationsSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.automations.map((automation, i) => {
              const Icon = AUTOMATION_ICONS[i]
              return (
                <div key={automation.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" aria-hidden />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{automation.name}</h3>
                        <span className="text-xs text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded-full">{automation.emails}</span>
                      </div>
                      <p className="text-sm text-white/70">{automation.description}</p>
                    </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
              <span>{t.platformsSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.platformsSection.headPre}<span className="gradient-text">{t.platformsSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PLATFORMS.map((platform) => (
              <div key={platform.name} className="bg-slate-50 rounded-xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-3`}>
                  <Mail className="w-6 h-6 text-white" aria-hidden />
                </div>
                <span className="font-medium text-slate-700">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              <Send className="w-4 h-4" aria-hidden />
              <span>{t.campaignsSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.campaignsSection.headPre}<span className="gradient-text">{t.campaignsSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {t.campaignTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" aria-hidden />
                <span className="text-sm text-slate-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <RefreshCw className="w-4 h-4" aria-hidden />
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
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-cyan-100 mb-4">{step.step}</div>
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
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">{t.testimonial.quote}</blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600" />
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
          <div className="relative rounded-3xl bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 p-8 md:p-12 lg:p-16 overflow-hidden">
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
                      <CheckCircle2 className="w-5 h-5 text-cyan-200 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 shadow-lg shadow-cyan-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="em-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="em-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="em-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="em-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="em-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="em-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="em-list" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.listSize}</label>
                  <select id="em-list" name="listSize" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors">
                    <option value="">{t.lead.listSizePh}</option>
                    {t.lead.listOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="em-platform" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.platform}</label>
                  <select id="em-platform" name="emailPlatform" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors">
                    <option value="">{t.lead.platformPh}</option>
                    {t.lead.platformOpts.map((opt) => (
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
