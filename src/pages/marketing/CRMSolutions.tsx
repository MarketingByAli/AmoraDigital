import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, Users, Database, BarChart3, Mail, Phone, Settings, Target,
  TrendingUp, Clock, Shield, Workflow, MessageSquare, Calendar, PieChart, Star, Headphones,
  RefreshCw, Layers, Bot, FileText, Bell
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'CRM Solutions',
    headPre: 'Turn Leads Into ', headHighlight: 'Loyal Customers',
    sub: 'Stop losing leads in spreadsheets. We implement and optimize CRM systems that help you track every customer, automate follow-ups, and close more deals.',
    ctaConsult: 'Get CRM Consultation', ctaPlatforms: 'View Platforms',
    pipeline: { title: 'Sales Pipeline', stage1: 'Proposal Sent', stage2: 'Negotiation', stage3: 'Won!', value: '€245K' },
    floats: { newLead: 'New Lead!', autoSent: 'Auto-sent', quote: 'Quote Ready', sales: '+47% Sales' },
    stats: [
      { value: '47%', label: 'Sales Increase', description: 'Average for clients' },
      { value: '3.5x', label: 'ROI', description: 'Within first year' },
      { value: '65%', label: 'Time Saved', description: 'On admin tasks' },
      { value: '99%', label: 'Client Satisfaction', description: 'Successful implementations' }
    ],
    benefits: [
      { title: 'Never Lose a Lead', description: 'Capture and track every lead automatically' },
      { title: 'Save Hours Daily', description: 'Automate repetitive tasks and follow-ups' },
      { title: 'Data-Driven Decisions', description: 'Real-time insights into your sales and marketing' },
      { title: 'Protect Customer Data', description: 'Secure, centralized data management' }
    ],
    benefitsSection: { badge: 'Why CRM', headPre: 'Stop Losing Leads, ', headHighlight: 'Start Closing Deals', sub: 'A properly implemented CRM transforms how you manage customer relationships and grow revenue.' },
    features: [
      { title: 'Contact Management', description: 'Centralize all customer data, interactions, and history in one place for your entire team.' },
      { title: 'Sales Pipeline', description: 'Visual pipeline management to track deals from lead to close with automation.' },
      { title: 'Marketing Automation', description: 'Automated email sequences, lead scoring, and nurture campaigns that run 24/7.' },
      { title: 'Analytics & Reporting', description: 'Real-time dashboards and custom reports to track performance and ROI.' },
      { title: 'Communication Hub', description: 'Email, SMS, and call tracking integrated into customer records automatically.' },
      { title: 'Task & Calendar', description: 'Never miss a follow-up with integrated task management and calendar sync.' }
    ],
    featuresSection: { badge: 'CRM Features', headPre: 'Everything You Need to ', headHighlight: 'Manage Customers' },
    platformsSection: { badge: 'CRM Platforms', headPre: 'We Work With ', headHighlight: 'Leading CRMs', sub: "Whether you need HubSpot, Salesforce, or a custom solution, we've got you covered." },
    platforms: [
      { name: 'HubSpot', description: 'All-in-one marketing, sales, and service platform' },
      { name: 'Salesforce', description: 'Enterprise-grade CRM for scaling businesses' },
      { name: 'Zoho CRM', description: 'Affordable and feature-rich for growing teams' },
      { name: 'Pipedrive', description: 'Sales-focused CRM with intuitive interface' },
      { name: 'Monday CRM', description: 'Flexible work OS with CRM capabilities' },
      { name: 'Custom CRM', description: 'Tailored solutions built for your specific needs' }
    ],
    services: [
      { title: 'CRM Implementation', description: 'Full setup and configuration of your CRM system tailored to your business processes.' },
      { title: 'Data Migration', description: 'Secure migration of your existing data from spreadsheets or other systems.' },
      { title: 'Integration', description: 'Connect your CRM with email, website, accounting, and other business tools.' },
      { title: 'Workflow Automation', description: 'Set up automated workflows to eliminate manual tasks and improve efficiency.' },
      { title: 'Training & Support', description: 'Comprehensive training for your team and ongoing support when you need it.' },
      { title: 'Optimization', description: 'Continuous improvement of your CRM setup based on usage data and feedback.' }
    ],
    servicesSection: { badge: 'Our Services', headPre: 'End-to-End ', headHighlight: 'CRM Services', sub: 'From selection to implementation to ongoing optimization, we handle it all.' },
    automationsSection: { badge: 'Automation', headPre: 'Automations That ', headHighlight: 'Work While You Sleep', sub: 'Set it once, let it run forever. These automations save hours every week.' },
    automations: [
      'Lead capture from website forms', 'Automatic lead assignment', 'Welcome email sequences', 'Follow-up reminders',
      'Deal stage automation', 'Task creation triggers', 'Birthday/anniversary emails', 'Re-engagement campaigns',
      'Quote/proposal generation', 'Invoice reminders', 'Customer feedback surveys', 'Reporting automation'
    ],
    process: { badge: 'Our Process', headPre: 'How We ', headHighlight: 'Implement Your CRM' },
    processItems: [
      { step: '01', title: 'Discovery', description: 'We analyze your current processes, pain points, and goals to design the perfect CRM solution.' },
      { step: '02', title: 'Setup & Configuration', description: 'We implement your CRM, configure fields, pipelines, and automations to match your workflow.' },
      { step: '03', title: 'Migration & Integration', description: 'We migrate your data and connect your CRM with other tools you use daily.' },
      { step: '04', title: 'Training & Launch', description: 'We train your team and provide ongoing support to ensure successful adoption.' }
    ],
    testimonial: {
      quote: '"Before the CRM, leads were falling through the cracks. Now we track everything, follow up automatically, and our close rate has improved by 40%."',
      author: 'Mark van Dijk', role: 'Sales Director, GrowthFirst B.V.'
    },
    lead: {
      heading: 'Ready to Transform Your Sales Process?',
      sub: 'Get a free CRM consultation and discover how the right system can help you close more deals and grow your business.',
      bullets: ['Free CRM needs assessment', 'Platform recommendation', 'ROI projection', 'Implementation roadmap'],
      title: 'Get Your Free CRM Consultation', subject: 'CRM Solutions Inquiry', button: 'Get Free Consultation',
      footnote: 'Free consultation. No obligation.',
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com', company: 'Company', companyPh: 'Your Company',
      crm: 'Current CRM Situation', crmPh: 'Select your situation',
      crmOpts: ['No CRM - Using spreadsheets', 'Basic CRM - Need upgrade', 'Have CRM - Need optimization', 'Need custom solution']
    },
    quick: { heading: 'Ready to streamline your sales?', sub: "Let's discuss your CRM needs today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbMarketing: 'Marketing', crumbCurrent: 'CRM-oplossingen',
    headPre: 'Maak van leads ', headHighlight: 'trouwe klanten',
    sub: 'Stop met leads kwijtraken in Excel. We implementeren en optimaliseren CRM-systemen waarmee je elke klant volgt, opvolging automatiseert en meer deals sluit.',
    ctaConsult: 'Vraag CRM-advies aan', ctaPlatforms: 'Bekijk platforms',
    pipeline: { title: 'Sales-pipeline', stage1: 'Offerte verstuurd', stage2: 'Onderhandeling', stage3: 'Gewonnen!', value: '€245K' },
    floats: { newLead: 'Nieuwe lead!', autoSent: 'Automatisch verstuurd', quote: 'Offerte klaar', sales: '+47% omzet' },
    stats: [
      { value: '47%', label: 'Meer omzet', description: 'Gemiddeld bij klanten' },
      { value: '3.5x', label: 'ROI', description: 'Binnen het eerste jaar' },
      { value: '65%', label: 'Tijd bespaard', description: 'Op administratie' },
      { value: '99%', label: 'Klanttevredenheid', description: 'Succesvolle implementaties' }
    ],
    benefits: [
      { title: 'Geen lead meer kwijt', description: 'Vang en volg elke lead automatisch' },
      { title: 'Dagelijks uren besparen', description: 'Automatiseer repetitieve taken en opvolging' },
      { title: 'Datagedreven beslissingen', description: 'Real-time inzicht in je sales en marketing' },
      { title: 'Klantdata beschermd', description: 'Veilig, centraal databeheer' }
    ],
    benefitsSection: { badge: 'Waarom CRM', headPre: 'Stop met leads verliezen, ', headHighlight: 'sluit meer deals', sub: 'Een goed geïmplementeerd CRM verandert hoe je klantrelaties beheert en omzet laat groeien.' },
    features: [
      { title: 'Contactbeheer', description: 'Centraliseer alle klantdata, contactmomenten en historie op één plek voor het hele team.' },
      { title: 'Sales-pipeline', description: 'Visueel pipeline-beheer om deals te volgen van lead tot afsluiting, met automatisering.' },
      { title: 'Marketing-automation', description: 'Geautomatiseerde e-mailflows, leadscoring en nurture-campagnes die 24/7 draaien.' },
      { title: 'Analytics & rapportages', description: 'Real-time dashboards en maatwerk rapportages voor prestaties en ROI.' },
      { title: 'Communicatie-hub', description: 'E-mail, sms en gespreksregistratie automatisch gekoppeld aan klantkaarten.' },
      { title: 'Taken & agenda', description: 'Mis nooit meer een opvolging met geïntegreerd takenbeheer en agendasync.' }
    ],
    featuresSection: { badge: 'CRM-functies', headPre: 'Alles wat je nodig hebt om ', headHighlight: 'klanten te beheren' },
    platformsSection: { badge: 'CRM-platforms', headPre: 'Wij werken met ', headHighlight: 'toonaangevende CRM\u2019s', sub: 'Of je nu HubSpot, Salesforce of een maatwerkoplossing nodig hebt \u2014 wij regelen het.' },
    platforms: [
      { name: 'HubSpot', description: 'All-in-one marketing-, sales- en serviceplatform' },
      { name: 'Salesforce', description: 'Enterprise-CRM voor opschalende bedrijven' },
      { name: 'Zoho CRM', description: 'Betaalbaar en rijk aan functies voor groeiende teams' },
      { name: 'Pipedrive', description: 'Sales-gericht CRM met intuïtieve interface' },
      { name: 'Monday CRM', description: 'Flexibele work-OS met CRM-mogelijkheden' },
      { name: 'Maatwerk-CRM', description: 'Oplossingen op maat van jouw specifieke behoeften' }
    ],
    services: [
      { title: 'CRM-implementatie', description: 'Volledige inrichting en configuratie van je CRM, afgestemd op je bedrijfsprocessen.' },
      { title: 'Datamigratie', description: 'Veilige migratie van bestaande data uit Excel of andere systemen.' },
      { title: 'Integratie', description: 'Koppel je CRM aan e-mail, website, boekhouding en andere tools.' },
      { title: 'Workflow-automation', description: 'Stel workflows in die handmatige taken elimineren en efficiëntie verhogen.' },
      { title: 'Training & support', description: 'Volledige training voor je team en doorlopende support wanneer nodig.' },
      { title: 'Optimalisatie', description: 'Doorlopende verbetering van je CRM op basis van gebruiksdata en feedback.' }
    ],
    servicesSection: { badge: 'Onze diensten', headPre: 'End-to-end ', headHighlight: 'CRM-diensten', sub: 'Van selectie en implementatie tot doorlopende optimalisatie \u2014 wij doen het allemaal.' },
    automationsSection: { badge: 'Automatisering', headPre: 'Automatiseringen die ', headHighlight: 'werken terwijl jij slaapt', sub: 'Eén keer instellen, voor altijd laten draaien. Deze automatiseringen besparen elke week uren.' },
    automations: [
      'Leadcapture vanuit webformulieren', 'Automatische leadtoewijzing', 'Welkomstmailreeksen', 'Opvolgherinneringen',
      'Automatisering van dealfases', 'Triggers voor takencreatie', 'Verjaardags-/jubileummails', 'Re-engagement-campagnes',
      'Genereren van offertes/voorstellen', 'Factuurherinneringen', 'Klanttevredenheidsenquêtes', 'Automatische rapportages'
    ],
    process: { badge: 'Onze werkwijze', headPre: 'Zo ', headHighlight: 'implementeren we je CRM' },
    processItems: [
      { step: '01', title: 'Ontdekking', description: 'We analyseren huidige processen, pijnpunten en doelen om de perfecte CRM-oplossing te ontwerpen.' },
      { step: '02', title: 'Inrichting & configuratie', description: 'We implementeren je CRM, configureren velden, pipelines en automatiseringen die bij je workflow passen.' },
      { step: '03', title: 'Migratie & integratie', description: 'We migreren je data en koppelen je CRM met andere dagelijks gebruikte tools.' },
      { step: '04', title: 'Training & livegang', description: 'We trainen je team en bieden doorlopende support voor een succesvolle adoptie.' }
    ],
    testimonial: {
      quote: '"Voorheen vielen leads tussen wal en schip. Nu volgen we alles, sturen automatisch op, en is onze sluitingsratio met 40% gestegen."',
      author: 'Mark van Dijk', role: 'Sales Director, GrowthFirst B.V.'
    },
    lead: {
      heading: 'Klaar om je salesproces te transformeren?',
      sub: 'Vraag een gratis CRM-adviesgesprek en ontdek hoe het juiste systeem je helpt meer deals te sluiten en je bedrijf te laten groeien.',
      bullets: ['Gratis CRM-behoefteanalyse', 'Platformadvies', 'ROI-prognose', 'Implementatie-roadmap'],
      title: 'Vraag je gratis CRM-advies', subject: 'CRM-aanvraag', button: 'Gratis adviesgesprek',
      footnote: 'Gratis advies. Vrijblijvend.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl', company: 'Bedrijf', companyPh: 'Jouw bedrijf',
      crm: 'Huidige CRM-situatie', crmPh: 'Kies je situatie',
      crmOpts: ['Geen CRM \u2014 we gebruiken Excel', 'Basis-CRM \u2014 toe aan upgrade', 'Hebben CRM \u2014 wil optimaliseren', 'Maatwerkoplossing nodig']
    },
    quick: { heading: 'Klaar om sales te stroomlijnen?', sub: 'Laten we vandaag je CRM-wensen bespreken.', email: 'Mail ons' }
  }
} as const

const BENEFIT_ICONS = [Target, Clock, PieChart, Shield]
const FEATURE_ICONS = [Users, Workflow, Bot, BarChart3, MessageSquare, Calendar]
const SERVICE_ICONS = [Settings, RefreshCw, Layers, Workflow, Headphones, TrendingUp]
const PLATFORM_COLORS = [
  'from-orange-500 to-orange-600',
  'from-blue-500 to-blue-600',
  'from-red-500 to-red-600',
  'from-green-500 to-green-600',
  'from-purple-500 to-purple-600',
  'from-primary-500 to-primary-600'
]

export default function CRMSolutions() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white">
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
                {t.headPre}<span className="text-cyan-300">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-indigo-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaConsult}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#platforms" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaPlatforms}
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">
                {t.benefits.slice(0, 2).map((benefit, i) => {
                  const Icon = BENEFIT_ICONS[i]
                  return (
                    <div key={benefit.title} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyan-300" aria-hidden />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{benefit.title}</div>
                        <div className="text-xs text-white/60">{benefit.description}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-5 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">{t.pipeline.title}</h4>
                    <span className="text-xs text-cyan-300 font-medium">{t.pipeline.value}</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 h-2 rounded-full bg-blue-400/50" />
                    <div className="flex-1 h-2 rounded-full bg-indigo-400/50" />
                    <div className="flex-1 h-2 rounded-full bg-violet-400/50" />
                    <div className="flex-1 h-2 rounded-full bg-purple-400/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-xs font-bold text-white">TC</div>
                        <div>
                          <div className="text-sm font-medium text-white">TechCorp Deal</div>
                          <div className="text-xs text-white/60">{t.pipeline.stage1}</div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-cyan-300">€45K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xs font-bold text-white">AB</div>
                        <div>
                          <div className="text-sm font-medium text-white">ABC Industries</div>
                          <div className="text-xs text-white/60">{t.pipeline.stage2}</div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-cyan-300">€78K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-xs font-bold text-white">NL</div>
                        <div>
                          <div className="text-sm font-medium text-white">NewLead Co.</div>
                          <div className="text-xs text-green-300">{t.pipeline.stage3}</div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-green-300">€32K</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Bell className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.newLead}</span>
                </div>
              </div>
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Mail className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.autoSent}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <FileText className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.quote}</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-cyan-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.sales}</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.benefitsSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.benefitsSection.headPre}<span className="gradient-text">{t.benefitsSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.benefitsSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, i) => {
              const Icon = BENEFIT_ICONS[i]
              return (
                <div key={benefit.title} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-indigo-50 hover:shadow-lg transition-all border border-transparent hover:border-indigo-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Database className="w-4 h-4" aria-hidden />
              <span>{t.featuresSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.featuresSection.headPre}<span className="gradient-text">{t.featuresSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div key={feature.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section id="platforms" className="py-20 lg:py-28 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
              <span>{t.platformsSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.platformsSection.headPre}<span className="text-cyan-300">{t.platformsSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.platformsSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.platforms.map((platform, i) => (
              <div key={platform.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${PLATFORM_COLORS[i]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Database className="w-6 h-6 text-white" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-white/70">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
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
                <div key={service.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              <Bot className="w-4 h-4" aria-hidden />
              <span>{t.automationsSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.automationsSection.headPre}<span className="gradient-text">{t.automationsSection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.automationsSection.sub}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {t.automations.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" aria-hidden />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Workflow className="w-4 h-4" aria-hidden />
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
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-indigo-100 mb-4">{step.step}</div>
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600" />
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
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t.lead.heading}</h2>
                <p className="text-lg text-white/90 mb-8">{t.lead.sub}</p>
                <ul className="space-y-3">
                  {t.lead.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="crm-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="crm-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="crm-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="crm-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="crm-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="crm-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="crm-company" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.company}</label>
                  <input type="text" id="crm-company" name="company" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder={t.lead.companyPh} />
                </div>
                <div>
                  <label htmlFor="crm-state" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.crm}</label>
                  <select id="crm-state" name="crm" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors">
                    <option value="">{t.lead.crmPh}</option>
                    {t.lead.crmOpts.map((opt) => (
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
