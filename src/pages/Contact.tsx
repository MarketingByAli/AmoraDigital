import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPinned, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', '74b3d9d7-367c-4c9b-b82e-09d0f0d701b7')
    formData.append('subject', `Website inquiry from ${form.name}`)
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
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
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
          <nav className="flex items-center justify-center gap-2 text-sm mb-8">
            <Link to="/" className="text-white/60 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Contact</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">Get in touch</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Tell us about your project. We typically reply within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4">Contact details</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Prefer to reach out directly? Use phone or email — or use the form and we will get back to you.
                </p>
              </div>

              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+31625580415"
                    className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/80 hover:border-primary-200 hover:bg-primary-50/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 group-hover:bg-primary-200 transition-colors">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Phone</div>
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
                      <Mail className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email</div>
                      <div className="text-slate-900 font-medium">info@amoradigital.nl</div>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/80">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                    <MapPinned className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">KVK</div>
                    <div className="text-slate-900 font-medium">99536811</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 shadow-sm">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-6">Send a message</h2>

                {status === 'success' && (
                  <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-emerald-700 mt-0.5">Thank you for reaching out. We typically reply within one business day.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
                    <div>
                      <p className="font-semibold">Failed to send message</p>
                      <p className="text-red-700 mt-0.5">{errorMsg}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot spam protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Name <span className="text-secondary-600">*</span>
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
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email <span className="text-secondary-600">*</span>
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
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-shadow"
                        placeholder="Optional"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-shadow"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-secondary-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-shadow resize-y min-h-[120px]"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full hover:from-primary-700 hover:to-secondary-600 transition-all shadow-lg shadow-primary-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send message
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500">
                    By sending, you agree we may reply regarding your inquiry. See our{' '}
                    <Link to="/privacy-policy" className="text-primary-600 hover:underline">
                      Privacy Policy
                    </Link>
                    .
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
