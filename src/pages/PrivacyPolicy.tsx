import { Link } from 'react-router-dom'
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

export default function PrivacyPolicy() {
  const lastUpdated = 'February 1, 2026'

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-secondary-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm mb-8">
            <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-lg text-white/70">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Navigation */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-12">
            <h2 className="font-semibold text-slate-900 mb-4">Quick Navigation</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { icon: Eye, label: 'Information We Collect', href: '#information-collect' },
                { icon: Database, label: 'How We Use Your Data', href: '#how-we-use' },
                { icon: Lock, label: 'Data Protection', href: '#data-protection' },
                { icon: Cookie, label: 'Cookies Policy', href: '#cookies' },
                { icon: UserCheck, label: 'Your Rights (GDPR)', href: '#your-rights' },
                { icon: Mail, label: 'Contact Us', href: '#contact' },
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                >
                  <item.icon className="w-5 h-5 text-primary-600" />
                  <span className="text-sm text-slate-700 group-hover:text-primary-600">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">
              At Amora Digital ("we", "our", or "us"), we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website amoradigital.nl or use our services.
            </p>
            <p className="text-slate-600">
              We comply with the General Data Protection Regulation (GDPR) and Dutch data protection laws. 
              By using our website and services, you consent to the practices described in this policy.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div id="information-collect" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
            </div>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Personal Information You Provide</h3>
                <p>When you interact with our website or services, you may provide us with:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Billing and payment information</li>
                  <li>Messages and communications you send to us</li>
                  <li>Information submitted through contact forms</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Information Collected Automatically</h3>
                <p>When you visit our website, we automatically collect:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Referring website or source</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: How We Use Your Data */}
          <div id="how-we-use" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center">
                <Database className="w-5 h-5 text-secondary-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">2. How We Use Your Data</h2>
            </div>
            
            <div className="space-y-4 text-slate-600">
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Provide Services:</strong> To deliver the services you request, including marketing, development, and consulting services</li>
                <li><strong>Communication:</strong> To respond to your inquiries, send project updates, and provide customer support</li>
                <li><strong>Marketing:</strong> To send promotional materials and newsletters (with your consent)</li>
                <li><strong>Improvement:</strong> To analyze website usage and improve our services and user experience</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Data Protection */}
          <div id="data-protection" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Lock className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">3. Data Protection & Security</h2>
            </div>
            
            <div className="space-y-4 text-slate-600">
              <p>
                We implement appropriate technical and organizational measures to protect your personal data 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Limited access to personal data on a need-to-know basis</li>
              </ul>
              <p>
                While we strive to protect your personal information, no method of transmission over the 
                Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Section 4: Cookies */}
          <div id="cookies" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">4. Cookies Policy</h2>
            </div>
            
            <div className="space-y-4 text-slate-600">
              <p>
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. 
                Cookies are small text files stored on your device.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Essential Cookies</h4>
                  <p className="text-sm">Required for the website to function properly. Cannot be disabled.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Analytics Cookies</h4>
                  <p className="text-sm">Help us understand how visitors interact with our website (e.g., Google Analytics).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Marketing Cookies</h4>
                  <p className="text-sm">Used to deliver relevant advertisements and track campaign effectiveness.</p>
                </div>
              </div>
              
              <p>
                You can control cookie preferences through your browser settings. Note that disabling certain 
                cookies may affect website functionality.
              </p>
            </div>
          </div>

          {/* Section 5: Third-Party Services */}
          <div id="third-party" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">5. Third-Party Services</h2>
            </div>
            
            <div className="space-y-4 text-slate-600">
              <p>We may use third-party services that collect and process data on our behalf:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                <li><strong>Google Ads:</strong> Advertising and remarketing</li>
                <li><strong>Meta (Facebook) Pixel:</strong> Advertising and conversion tracking</li>
                <li><strong>Email Service Providers:</strong> Email marketing and automation</li>
                <li><strong>Payment Processors:</strong> Secure payment handling</li>
              </ul>
              <p>
                These third parties have their own privacy policies. We encourage you to review their policies 
                to understand how they handle your data.
              </p>
            </div>
          </div>

          {/* Section 6: Your Rights (GDPR) */}
          <div id="your-rights" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">6. Your Rights (GDPR)</h2>
            </div>
            
            <div className="space-y-4 text-slate-600">
              <p>Under the GDPR and Dutch data protection laws, you have the following rights:</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Right to Access', desc: 'Request a copy of your personal data we hold' },
                  { title: 'Right to Rectification', desc: 'Request correction of inaccurate data' },
                  { title: 'Right to Erasure', desc: 'Request deletion of your personal data' },
                  { title: 'Right to Restrict', desc: 'Request limitation of data processing' },
                  { title: 'Right to Portability', desc: 'Receive your data in a portable format' },
                  { title: 'Right to Object', desc: 'Object to processing of your data' },
                ].map((right) => (
                  <div key={right.title} className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-1">{right.title}</h4>
                    <p className="text-sm">{right.desc}</p>
                  </div>
                ))}
              </div>
              
              <p>
                To exercise any of these rights, please contact us using the information below. 
                We will respond to your request within 30 days.
              </p>
            </div>
          </div>

          {/* Section 7: Data Retention */}
          <div id="data-retention" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-slate-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">7. Data Retention</h2>
            </div>
            
            <div className="space-y-4 text-slate-600">
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes 
                outlined in this policy, unless a longer retention period is required by law.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Contact form submissions: 2 years</li>
                <li>Client project data: Duration of relationship + 7 years</li>
                <li>Marketing data: Until consent is withdrawn</li>
                <li>Analytics data: 26 months</li>
                <li>Financial records: 7 years (legal requirement)</li>
              </ul>
            </div>
          </div>

          {/* Section 8: Updates */}
          <div id="updates" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">8. Policy Updates</h2>
            </div>
            
            <div className="space-y-4 text-slate-600">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or legal requirements. We will notify you of any significant changes by posting a notice 
                on our website or sending you an email.
              </p>
              <p>
                We encourage you to review this policy periodically to stay informed about how we protect 
                your information.
              </p>
            </div>
          </div>

          {/* Section 9: Contact */}
          <div id="contact" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">9. Contact Us</h2>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <p className="text-slate-600 mb-6">
                If you have any questions about this Privacy Policy or wish to exercise your rights, 
                please contact us:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900">Amora Digital</h4>
                  <p className="text-slate-600">Data Controller</p>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p><strong>Email:</strong> privacy@amoradigital.nl</p>
                  <p><strong>Phone:</strong> +31 6 25580415</p>
                  <p><strong>Website:</strong> amoradigital.nl</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  You also have the right to lodge a complaint with the Dutch Data Protection Authority 
                  (Autoriteit Persoonsgegevens) if you believe your rights have been violated.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
