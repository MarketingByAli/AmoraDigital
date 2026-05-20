import { Link, useLocation } from 'react-router-dom'
import { Globe } from 'lucide-react'
import { LOCALES, localeFromPath, swapLocale, type Locale } from '../i18n/routes'
import { UI } from '../i18n/ui'

type Variant = 'header' | 'footer'

type Props = {
  variant?: Variant
}

/**
 * Locale switcher that points each language at the equivalent translated
 * page (e.g. `/marketing/seo-services` ↔ `/nl/marketing/seo-diensten`).
 * Falls back to that locale's home when the current path can't be mapped.
 */
export default function LanguageSwitcher({ variant = 'header' }: Props) {
  const { pathname } = useLocation()
  const current: Locale = localeFromPath(pathname)
  const ui = UI[current].switcher

  const baseClass =
    variant === 'header'
      ? 'inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-1 py-1 text-xs font-semibold text-slate-700'
      : 'inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800/60 px-1 py-1 text-xs font-semibold text-slate-200'

  const activeClass =
    variant === 'header'
      ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white'
      : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'

  const inactiveClass =
    variant === 'header'
      ? 'text-slate-600 hover:text-primary-600'
      : 'text-slate-300 hover:text-white'

  return (
    <div className={baseClass} role="group" aria-label={ui.label}>
      <Globe className="w-3.5 h-3.5 mx-1 text-slate-400" aria-hidden />
      {LOCALES.map((locale) => {
        const target = swapLocale(pathname, locale)
        const isActive = locale === current
        const label = locale === 'en' ? ui.english : ui.dutch
        const short = locale === 'en' ? 'EN' : 'NL'
        return (
          <Link
            key={locale}
            to={target}
            hrefLang={locale}
            aria-current={isActive ? 'true' : undefined}
            aria-label={label}
            className={`px-2.5 py-1 rounded-full transition-all ${
              isActive ? activeClass : inactiveClass
            }`}
          >
            {short}
          </Link>
        )
      })}
    </div>
  )
}
