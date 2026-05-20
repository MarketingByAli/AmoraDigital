import { Link, useLocation } from 'react-router-dom'
import {
  Lock,
  Eye,
  Database,
  Cookie,
  Mail,
  Globe,
  UserCheck,
  FileText,
  AlertCircle
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../i18n/routes'

const T = {
  en: {
    breadcrumb: 'Privacy Policy',
    title: 'Privacy Policy',
    lastUpdatedLabel: 'Last updated:',
    lastUpdated: 'February 1, 2026',
    quickNav: 'Quick Navigation',
    navItems: {
      info: 'Information We Collect',
      use: 'How We Use Your Data',
      protection: 'Data Protection',
      cookies: 'Cookies Policy',
      rights: 'Your Rights (GDPR)',
      contact: 'Contact Us'
    },
    intro: [
      'At Amora Digital ("we", "our", or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website amoradigital.nl or use our services.',
      'We comply with the General Data Protection Regulation (GDPR) and Dutch data protection laws. By using our website and services, you consent to the practices described in this policy.'
    ],
    sec1: {
      title: '1. Information We Collect',
      providedHeading: 'Personal Information You Provide',
      providedLead: 'When you interact with our website or services, you may provide us with:',
      providedItems: [
        'Name and contact information (email address, phone number)',
        'Company name and job title',
        'Billing and payment information',
        'Messages and communications you send to us',
        'Information submitted through contact forms'
      ],
      autoHeading: 'Information Collected Automatically',
      autoLead: 'When you visit our website, we automatically collect:',
      autoItems: [
        'IP address and location data',
        'Browser type and version',
        'Device information and operating system',
        'Pages visited and time spent on each page',
        'Referring website or source',
        'Cookies and similar tracking technologies'
      ]
    },
    sec2: {
      title: '2. How We Use Your Data',
      lead: 'We use the information we collect for the following purposes:',
      items: [
        ['Provide Services:', 'To deliver the services you request, including marketing, development, and consulting services'],
        ['Communication:', 'To respond to your inquiries, send project updates, and provide customer support'],
        ['Marketing:', 'To send promotional materials and newsletters (with your consent)'],
        ['Improvement:', 'To analyze website usage and improve our services and user experience'],
        ['Legal Compliance:', 'To comply with legal obligations and protect our rights'],
        ['Security:', 'To detect and prevent fraud, abuse, and security incidents']
      ]
    },
    sec3: {
      title: '3. Data Protection & Security',
      lead:
        'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:',
      items: [
        'SSL/TLS encryption for data transmission',
        'Secure data storage with access controls',
        'Regular security assessments and updates',
        'Employee training on data protection',
        'Limited access to personal data on a need-to-know basis'
      ],
      outro:
        'While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.'
    },
    sec4: {
      title: '4. Cookies Policy',
      lead:
        'Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device.',
      essentialTitle: 'Essential Cookies',
      essentialBody: 'Required for the website to function properly. Cannot be disabled.',
      analyticsTitle: 'Analytics Cookies',
      analyticsBody: 'Help us understand how visitors interact with our website (e.g., Google Analytics).',
      marketingTitle: 'Marketing Cookies',
      marketingBody: 'Used to deliver relevant advertisements and track campaign effectiveness.',
      outro:
        'You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.'
    },
    sec5: {
      title: '5. Third-Party Services',
      lead: 'We may use third-party services that collect and process data on our behalf:',
      items: [
        ['Google Analytics:', 'Website traffic analysis'],
        ['Google Ads:', 'Advertising and remarketing'],
        ['Meta (Facebook) Pixel:', 'Advertising and conversion tracking'],
        ['Email Service Providers:', 'Email marketing and automation'],
        ['Payment Processors:', 'Secure payment handling']
      ],
      outro:
        'These third parties have their own privacy policies. We encourage you to review their policies to understand how they handle your data.'
    },
    sec6: {
      title: '6. Your Rights (GDPR)',
      lead: 'Under the GDPR and Dutch data protection laws, you have the following rights:',
      rights: [
        { title: 'Right to Access', desc: 'Request a copy of your personal data we hold' },
        { title: 'Right to Rectification', desc: 'Request correction of inaccurate data' },
        { title: 'Right to Erasure', desc: 'Request deletion of your personal data' },
        { title: 'Right to Restrict', desc: 'Request limitation of data processing' },
        { title: 'Right to Portability', desc: 'Receive your data in a portable format' },
        { title: 'Right to Object', desc: 'Object to processing of your data' }
      ],
      outro:
        'To exercise any of these rights, please contact us using the information below. We will respond to your request within 30 days.'
    },
    sec7: {
      title: '7. Data Retention',
      lead:
        'We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.',
      items: [
        'Contact form submissions: 2 years',
        'Client project data: Duration of relationship + 7 years',
        'Marketing data: Until consent is withdrawn',
        'Analytics data: 26 months',
        'Financial records: 7 years (legal requirement)'
      ]
    },
    sec8: {
      title: '8. Policy Updates',
      body: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting a notice on our website or sending you an email.',
        'We encourage you to review this policy periodically to stay informed about how we protect your information.'
      ]
    },
    sec9: {
      title: '9. Contact Us',
      lead:
        'If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:',
      company: 'Amora Digital',
      role: 'Data Controller',
      email: 'Email:',
      phone: 'Phone:',
      website: 'Website:',
      authority:
        'You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) if you believe your rights have been violated.'
    },
    backHome: '\u2190 Back to Home'
  },
  nl: {
    breadcrumb: 'Privacybeleid',
    title: 'Privacybeleid',
    lastUpdatedLabel: 'Laatst bijgewerkt:',
    lastUpdated: '1 februari 2026',
    quickNav: 'Snelle navigatie',
    navItems: {
      info: 'Welke gegevens we verzamelen',
      use: 'Hoe wij je gegevens gebruiken',
      protection: 'Gegevensbescherming',
      cookies: 'Cookiebeleid',
      rights: 'Jouw rechten (AVG)',
      contact: 'Neem contact op'
    },
    intro: [
      'Bij Amora Digital ("wij", "ons" of "onze") hechten we veel waarde aan jouw privacy en de bescherming van je persoonsgegevens. Dit privacybeleid legt uit hoe wij gegevens verzamelen, gebruiken, delen en beschermen wanneer je amoradigital.nl bezoekt of onze diensten afneemt.',
      'Wij houden ons aan de Algemene Verordening Gegevensbescherming (AVG/GDPR) en de Nederlandse privacywetgeving. Door onze website en diensten te gebruiken, ga je akkoord met de werkwijze die in dit beleid wordt beschreven.'
    ],
    sec1: {
      title: '1. Welke gegevens we verzamelen',
      providedHeading: 'Persoonsgegevens die je zelf verstrekt',
      providedLead: 'Wanneer je onze website of diensten gebruikt, kun je het volgende met ons delen:',
      providedItems: [
        'Naam en contactgegevens (e-mailadres, telefoonnummer)',
        'Bedrijfsnaam en functietitel',
        'Factuur- en betaalgegevens',
        'Berichten en communicatie die je naar ons stuurt',
        'Informatie ingediend via contactformulieren'
      ],
      autoHeading: 'Automatisch verzamelde gegevens',
      autoLead: 'Wanneer je onze website bezoekt verzamelen we automatisch:',
      autoItems: [
        'IP-adres en locatiegegevens',
        'Browsertype en -versie',
        'Apparaatinformatie en besturingssysteem',
        'Bezochte pagina’s en tijd per pagina',
        'Verwijzende website of bron',
        'Cookies en vergelijkbare technologieën'
      ]
    },
    sec2: {
      title: '2. Hoe wij je gegevens gebruiken',
      lead: 'We gebruiken de verzamelde gegevens voor de volgende doelen:',
      items: [
        ['Dienstverlening:', 'Het leveren van de diensten die je aanvraagt, waaronder marketing, ontwikkeling en consultancy'],
        ['Communicatie:', 'Reageren op je vragen, projectupdates en klantenservice'],
        ['Marketing:', 'Versturen van promotionele berichten en nieuwsbrieven (met jouw toestemming)'],
        ['Verbetering:', 'Analyseren van websitegebruik en verbeteren van onze diensten en gebruikerservaring'],
        ['Wettelijke verplichtingen:', 'Voldoen aan wettelijke vereisten en bescherming van onze rechten'],
        ['Beveiliging:', 'Het opsporen en voorkomen van fraude, misbruik en beveiligingsincidenten']
      ]
    },
    sec3: {
      title: '3. Gegevensbescherming & beveiliging',
      lead:
        'Wij nemen passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen ongeoorloofde toegang, wijziging, openbaarmaking of vernietiging. Deze maatregelen omvatten:',
      items: [
        'SSL/TLS-encryptie voor dataverkeer',
        'Veilige opslag met toegangscontroles',
        'Reguliere security audits en updates',
        'Training van medewerkers op gegevensbescherming',
        'Beperkte toegang op need-to-know basis'
      ],
      outro:
        'Hoewel wij ons inzetten om je gegevens te beschermen, is geen enkele methode van transmissie of opslag 100% veilig. We kunnen geen absolute veiligheid garanderen.'
    },
    sec4: {
      title: '4. Cookiebeleid',
      lead:
        'Onze website gebruikt cookies en vergelijkbare technologieën om je gebruikservaring te verbeteren. Cookies zijn kleine tekstbestanden die op je apparaat worden opgeslagen.',
      essentialTitle: 'Essentiële cookies',
      essentialBody: 'Nodig voor het functioneren van de website. Kan niet worden uitgeschakeld.',
      analyticsTitle: 'Analytische cookies',
      analyticsBody: 'Helpen begrijpen hoe bezoekers de website gebruiken (bijv. Google Analytics).',
      marketingTitle: 'Marketing cookies',
      marketingBody: 'Gebruikt voor relevante advertenties en het meten van campagne-effectiviteit.',
      outro:
        'Je kunt cookievoorkeuren beheren via je browserinstellingen. Let op: bepaalde cookies uitschakelen kan de functionaliteit beïnvloeden.'
    },
    sec5: {
      title: '5. Externe partijen',
      lead: 'We maken mogelijk gebruik van externe partijen die namens ons gegevens verwerken:',
      items: [
        ['Google Analytics:', 'Verkeersanalyse van de website'],
        ['Google Ads:', 'Advertenties en remarketing'],
        ['Meta (Facebook) Pixel:', 'Advertenties en conversiemeting'],
        ['E-mailproviders:', 'E-mailmarketing en automatisering'],
        ['Betaalproviders:', 'Veilige betalingen']
      ],
      outro:
        'Deze externe partijen hebben hun eigen privacybeleid. We raden je aan hun beleid te lezen om te begrijpen hoe zij met je gegevens omgaan.'
    },
    sec6: {
      title: '6. Jouw rechten (AVG)',
      lead: 'Op grond van de AVG en Nederlandse privacywetgeving heb je de volgende rechten:',
      rights: [
        { title: 'Recht op inzage', desc: 'Een kopie opvragen van je persoonsgegevens' },
        { title: 'Recht op rectificatie', desc: 'Corrigeren van onjuiste gegevens' },
        { title: 'Recht op verwijdering', desc: 'Verwijderen van je persoonsgegevens' },
        { title: 'Recht op beperking', desc: 'Beperken van de verwerking' },
        { title: 'Recht op dataportabiliteit', desc: 'Je gegevens in een overdraagbaar formaat ontvangen' },
        { title: 'Recht van bezwaar', desc: 'Bezwaar maken tegen verwerking van je gegevens' }
      ],
      outro:
        'Om gebruik te maken van deze rechten, neem contact op via de onderstaande gegevens. Wij reageren binnen 30 dagen.'
    },
    sec7: {
      title: '7. Bewaartermijnen',
      lead:
        'Wij bewaren je persoonsgegevens niet langer dan nodig is voor de doelen in dit beleid, tenzij een langere bewaartermijn wettelijk verplicht is.',
      items: [
        'Inzendingen contactformulier: 2 jaar',
        'Projectgegevens van klanten: looptijd van de samenwerking + 7 jaar',
        'Marketinggegevens: tot toestemming wordt ingetrokken',
        'Analytics-data: 26 maanden',
        'Financiële administratie: 7 jaar (wettelijk verplicht)'
      ]
    },
    sec8: {
      title: '8. Wijzigingen in dit beleid',
      body: [
        'We kunnen dit privacybeleid van tijd tot tijd aanpassen op basis van wijzigingen in onze praktijk of wetgeving. Belangrijke wijzigingen worden via een melding op de website of per e-mail aangekondigd.',
        'We raden aan dit beleid regelmatig te raadplegen om op de hoogte te blijven van hoe we je gegevens beschermen.'
      ]
    },
    sec9: {
      title: '9. Neem contact op',
      lead:
        'Heb je vragen over dit privacybeleid of wil je een van je rechten uitoefenen? Neem contact op:',
      company: 'Amora Digital',
      role: 'Verwerkingsverantwoordelijke',
      email: 'E-mail:',
      phone: 'Telefoon:',
      website: 'Website:',
      authority:
        'Je hebt ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens als je vindt dat je rechten zijn geschonden.'
    },
    backHome: '\u2190 Terug naar home'
  }
} as const

export default function PrivacyPolicy() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  const navItems = [
    { icon: Eye, label: t.navItems.info, href: '#information-collect' },
    { icon: Database, label: t.navItems.use, href: '#how-we-use' },
    { icon: Lock, label: t.navItems.protection, href: '#data-protection' },
    { icon: Cookie, label: t.navItems.cookies, href: '#cookies' },
    { icon: UserCheck, label: t.navItems.rights, href: '#your-rights' },
    { icon: Mail, label: t.navItems.contact, href: '#contact' }
  ]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-secondary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link to={ROUTES.home[locale]} className="text-white/60 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40" aria-hidden>/</span>
            <span className="text-white">{t.breadcrumb}</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t.title}</h1>
          <p className="text-lg text-white/70">
            {t.lastUpdatedLabel} {t.lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-6 mb-12">
            <h2 className="font-semibold text-slate-900 mb-4">{t.quickNav}</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                >
                  <item.icon className="w-5 h-5 text-primary-600" aria-hidden />
                  <span className="text-sm text-slate-700 group-hover:text-primary-600">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">{t.intro[0]}</p>
            <p className="text-slate-600">{t.intro[1]}</p>
          </div>

          <div id="information-collect" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-600" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t.sec1.title}</h2>
            </div>
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">{t.sec1.providedHeading}</h3>
                <p>{t.sec1.providedLead}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {t.sec1.providedItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">{t.sec1.autoHeading}</h3>
                <p>{t.sec1.autoLead}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {t.sec1.autoItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div id="how-we-use" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center">
                <Database className="w-5 h-5 text-secondary-600" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t.sec2.title}</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>{t.sec2.lead}</p>
              <ul className="list-disc list-inside space-y-2">
                {t.sec2.items.map(([label, body]) => (
                  <li key={label}>
                    <strong>{label}</strong> {body}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="data-protection" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Lock className="w-5 h-5 text-green-600" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t.sec3.title}</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>{t.sec3.lead}</p>
              <ul className="list-disc list-inside space-y-2">
                {t.sec3.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{t.sec3.outro}</p>
            </div>
          </div>

          <div id="cookies" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-orange-600" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t.sec4.title}</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>{t.sec4.lead}</p>
              <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t.sec4.essentialTitle}</h4>
                  <p className="text-sm">{t.sec4.essentialBody}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t.sec4.analyticsTitle}</h4>
                  <p className="text-sm">{t.sec4.analyticsBody}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t.sec4.marketingTitle}</h4>
                  <p className="text-sm">{t.sec4.marketingBody}</p>
                </div>
              </div>
              <p>{t.sec4.outro}</p>
            </div>
          </div>

          <div id="third-party" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Globe className="w-5 h-5 text-purple-600" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t.sec5.title}</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>{t.sec5.lead}</p>
              <ul className="list-disc list-inside space-y-2">
                {t.sec5.items.map(([label, body]) => (
                  <li key={label}>
                    <strong>{label}</strong> {body}
                  </li>
                ))}
              </ul>
              <p>{t.sec5.outro}</p>
            </div>
          </div>

          <div id="your-rights" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-blue-600" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t.sec6.title}</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>{t.sec6.lead}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.sec6.rights.map((right) => (
                  <div key={right.title} className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-1">{right.title}</h4>
                    <p className="text-sm">{right.desc}</p>
                  </div>
                ))}
              </div>
              <p>{t.sec6.outro}</p>
            </div>
          </div>

          <div id="data-retention" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-slate-600" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t.sec7.title}</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>{t.sec7.lead}</p>
              <ul className="list-disc list-inside space-y-2">
                {t.sec7.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div id="updates" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-600" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t.sec8.title}</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              {t.sec8.body.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>

          <div id="contact" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-600" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t.sec9.title}</h2>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <p className="text-slate-600 mb-6">{t.sec9.lead}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900">{t.sec9.company}</h4>
                  <p className="text-slate-600">{t.sec9.role}</p>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p><strong>{t.sec9.email}</strong> privacy@amoradigital.nl</p>
                  <p><strong>{t.sec9.phone}</strong> +31 6 25580415</p>
                  <p><strong>{t.sec9.website}</strong> amoradigital.nl</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500">{t.sec9.authority}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <Link
              to={ROUTES.home[locale]}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              {t.backHome}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
