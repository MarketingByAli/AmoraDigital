import { useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

interface LeadFormProps {
  title: string
  subject: string
  buttonText: string
  buttonClass: string
  footnote: string
  children: ReactNode
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function LeadForm({ title, subject, buttonText, buttonClass, footnote, children }: LeadFormProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', '74b3d9d7-367c-4c9b-b82e-09d0f0d701b7')
    formData.append('subject', subject)
    formData.append('from_name', 'Amora Digital Website')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()

      if (data.success) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-2xl">
        <h3 className="text-xl font-bold text-slate-900 mb-6">{title}</h3>
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-4" />
          <p className="font-semibold text-slate-900 text-lg">Message sent successfully!</p>
          <p className="text-slate-500 text-sm mt-2">Thank you for reaching out. We typically reply within one business day.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 text-sm text-primary-600 hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      <h3 className="text-xl font-bold text-slate-900 mb-6">{title}</h3>

      {status === 'error' && (
        <div className="mb-4 flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-900 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
          <p>{errorMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
        {children}
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full py-4 px-6 text-base font-semibold text-white bg-gradient-to-r ${buttonClass} rounded-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              {buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
      <p className="mt-4 text-xs text-slate-500 text-center">{footnote}</p>
    </div>
  )
}
