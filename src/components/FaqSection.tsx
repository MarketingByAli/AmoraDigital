import { useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { getFaqsForPath } from '../seo/pageSchema'
import { INDEXABLE_PATHS } from '../routeMeta'

/**
 * Visible FAQ block — content must match FAQPage JSON-LD in DocumentMeta exactly.
 * Sourced from pageSeoConfig via getFaqsForPath (single source of truth).
 */
export default function FaqSection() {
  const { pathname } = useLocation()
  if (!INDEXABLE_PATHS.has(pathname)) return null

  const faqs = getFaqsForPath(pathname)
  if (faqs.length === 0) return null

  return (
    <section
      id="faq"
      className="py-16 lg:py-20 bg-slate-50 border-t border-slate-100"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="faq-heading"
            className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Expert answers on SEO, AI SEO, Local SEO and digital growth from Amora Digital.
          </p>
        </div>

        <div className="space-y-3" role="list">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              role="listitem"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-slate-900 hover:bg-slate-50 transition-colors [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <ChevronDown
                  className="w-5 h-5 text-primary-600 flex-shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
