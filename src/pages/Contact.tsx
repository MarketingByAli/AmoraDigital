import { useState, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mail, Phone, MapPinned, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../i18n/routes'

type Status = 'idle' | 'loading' | 'success' | 'error'

const T = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumb: 'Contact',
    heroTitle: 'Get in touch',
    heroSub: 'Tell us about your project. We typically reply within one business day.',
    contactDetails: 'Contact details',
    contactDetailsSub:
      'Prefer to reach out directly? Use phone or email \u2014 or use the form and we will get back to you.',
    labels: { phone: 'Phone', email: 'Email', kvk: 'KvK' },
    formTitle: 'Send a message',
    successTitle: 'Message sent successfully!',
    successBody: 'Thank you for reaching out. We typically reply within one business day.',
    errorTitle: 'Failed to send message',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    phoneLabel: 'Phone',
    phonePlaceholder: 'Optional',
    companyLabel: 'Company',
    companyPlaceholder: 'Optional',
    messageLabel: 'Message',
    messagePlaceholder: 'How can we help?',
    sending: 'Sending\u2026',
    sendMessage: 'Send message',
    privacyHintPre: 'By sending, you agree we may reply regarding your inquiry. See our ',
    privacyHintLink: 'Privacy Policy',
    privacyHintPost: '.',
    fallbackError: 'Something went wrong. Please try again.',
    networkError: 'Network error. Please check your connection and try again.',
    subject: 'Website inquiry from'
  },
  nl: {
    breadcrumbHome: 'Home',
    breadcrumb: 'Contact',
    heroTitle: 'Neem contact op',
    heroSub: 'Vertel ons over je project. Wij reageren doorgaans binnen één werkdag.',
    contactDetails: 'Contactgegevens',
    contactDetailsSub:
      'Liever direct contact? Bel of mail ons \u2014 of vul het formulier in, dan nemen wij contact op.',
    labels: { phone: 'Telefoon', email: 'E-mail', kvk: 'KvK' },
    formTitle: 'Stuur een bericht',
    successTitle: 'Bericht succesvol verzonden!',
    successBody: 'Bedankt voor je bericht. We reageren doorgaans binnen één werkdag.',
    errorTitle: 'Bericht versturen mislukt',
    nameLabel: 'Naam',
    namePlaceholder: 'Je naam',
    emailLabel: 'E-mail',
    emailPlaceholder: 'jij@bedrijf.com',
    phoneLabel: 'Telefoon',
    phonePlaceholder: 'Optioneel',
    companyLabel: 'Bedrijf',
    companyPlaceholder: 'Optioneel',
    messageLabel: 'Bericht',
    messagePlaceholder: 'Waar kunnen we mee helpen?',
    sending: 'Versturen\u2026',
    sendMessage: 'Bericht versturen',
    privacyHintPre:
      'Door te versturen ga je akkoord dat we contact opnemen over je vraag. Zie ons ',
    privacyHintLink: 'Privacybeleid',
    privacyHintPost: '.',
    fallbackError: 'Er ging iets mis. Probeer het later opnieuw.',
    networkError: 'Netwerkfout. Controleer je verbinding en probeer het opnieuw.',
    subject: 'Aanvraag via de website van'
  }
} as const

export default function Contact() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', '74b3d9d7-367c-4c9b-b82e-09d0f0d701b7')
    formData.append('subject', `${t.subject} ${form.name}`)
    formData.append('from_name', 'Amora Digital Website')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', company: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.message || t.fallbackError)
      }
    } catch {
      setStatus('error')
      setErrorMsg(t.networkError)
    }
  }

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
              {t.breadcrumbHome}
            </Link>
            <span className="text-white/40" aria-hidden>/</span>
            <span className="text-white">{t.breadcrumb}</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t.heroTitle}</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{t.heroSub}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4">{t.contactDetails}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{t.contactDetailsSub}</p>
              </div>

              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+31625580415"
                    className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/80 hover:border-primary-200 hover:bg-primary-50/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 group-hover:bg-primary-200 transition-colors">
                      <Phone className="w-5 h-5 text-primary-600" aria-hidden />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">{t.labels.phone}</div>
                      <div className="text-slate-900 font-medium">+31 6 25580415</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@amoradigital.nl"
                    className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/80 hover:border-secondary-200 hover:bg-secondary-50/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center shrink-0 group-hover:bg-secondary-200 transition-colors">
                      <Mail className="w-5 h-5 text-secondary-600" aria-hidden />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">{t.labels.email}</div>
                      <div className="text-slate-900 font-medium">info@amoradigital.nl</div>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/80">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                    <MapPinned className="w-5 h-5 text-slate-600" aria-hidden />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">{t.labels.kvk}</div>
                    <div className="text-slate-900 font-medium">99536811</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 shadow-sm">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-6">{t.formTitle}</h2>

                {status === 'success' && (
                  <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" aria-hidden />
                    <div>
                      <p className="font-semibold">{t.successTitle}</p>
                      <p className="text-emerald-700 mt-0.5">{t.successBody}</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" aria-hidden />
                    <div>
                      <p className="font-semibold">{t.errorTitle}</p>
                      <p className="text-red-700 mt-0.5">{errorMsg}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t.nameLabel} <span className="text-secondary-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-shadow"
                        placeholder={t.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t.emailLabel} <span className="text-secondary-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-shadow"
                        placeholder={t.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t.phoneLabel}
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-shadow"
                        placeholder={t.phonePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t.companyLabel}
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-shadow"
                        placeholder={t.companyPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t.messageLabel} <span className="text-secondary-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-shadow resize-y min-h-[120px]"
                      placeholder={t.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full hover:from-primary-700 hover:to-secondary-600 transition-all shadow-lg shadow-primary-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" aria-hidden />
                        {t.sendMessage}
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500">
                    {t.privacyHintPre}
                    <Link to={ROUTES.privacy[locale]} className="text-primary-600 hover:underline">
                      {t.privacyHintLink}
                    </Link>
                    {t.privacyHintPost}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
