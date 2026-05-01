import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { getBreadcrumbs } from '../seo/pageSchema'

type BreadcrumbsProps = {
  /** Force a specific path instead of reading from the router. */
  path?: string
  /** Visual variant. Dark hero backgrounds use `light`, white/slate use `dark`. */
  variant?: 'light' | 'dark'
  /** Extra classes for the container (margins etc.). */
  className?: string
}

/**
 * Accessible breadcrumb trail with visual rendering. The corresponding
 * BreadcrumbList schema is injected by `DocumentMeta` via `resolvePageSchema`
 * so this component does not output JSON-LD itself.
 */
export default function Breadcrumbs({ path, variant = 'light', className = '' }: BreadcrumbsProps) {
  const { pathname } = useLocation()
  const items = getBreadcrumbs(path ?? pathname)

  if (items.length <= 1) return null

  const base =
    variant === 'light'
      ? { link: 'text-white/60 hover:text-white', current: 'text-white', sep: 'text-white/40' }
      : { link: 'text-slate-500 hover:text-primary-600', current: 'text-slate-900', sep: 'text-slate-300' }

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.path + index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className={`w-3.5 h-3.5 ${base.sep}`} aria-hidden="true" />}
              {isLast ? (
                <span className={`${base.current} font-medium`} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`${base.link} transition-colors inline-flex items-center gap-1.5`}
                >
                  {index === 0 && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
