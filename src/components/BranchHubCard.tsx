import { ArrowRight, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  getLiveBranchHub,
  isLiveBranchHub,
  type BranchIndustry
} from '../data/branches'
import { ROUTES, type Locale } from '../i18n/routes'

type BranchHubCardProps = {
  industry: BranchIndustry
  locale: Locale
  ctaLabel: string
  comingSoonLabel: string
}

/**
 * Renders an industry hub as a link when live, or a muted non-clickable card when not.
 * Liveness comes solely from LIVE_BRANCH_HUBS in data/branches.ts.
 */
export default function BranchHubCard({
  industry,
  locale,
  ctaLabel,
  comingSoonLabel
}: BranchHubCardProps) {
  const live = isLiveBranchHub(industry.slug)
  const hub = getLiveBranchHub(industry.slug)

  const body = (
    <>
      {live ? null : (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-4">
          {comingSoonLabel}
        </span>
      )}
      <div
        className={
          live
            ? 'w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform'
            : 'w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-4'
        }
      >
        <Building2 className={`w-6 h-6 ${live ? 'text-white' : 'text-slate-500'}`} aria-hidden />
      </div>
      <h3
        className={
          live
            ? 'text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors'
            : 'text-xl font-bold text-slate-700 mb-2'
        }
      >
        {industry.name[locale]}
      </h3>
      <p
        className={
          live
            ? 'text-slate-600 text-sm leading-relaxed mb-6'
            : 'text-slate-500 text-sm leading-relaxed'
        }
      >
        {industry.benefit[locale]}
      </p>
      {live ? (
        <div className="flex items-center gap-2 text-sm font-medium text-primary-600">
          <span>{ctaLabel}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
        </div>
      ) : null}
    </>
  )

  if (live && hub) {
    return (
      <Link to={ROUTES[hub.routeKey][locale]} className="card group p-6 lg:p-8 hover:-translate-y-1">
        {body}
      </Link>
    )
  }

  return (
    <div className="card p-6 lg:p-8 opacity-80 cursor-default" aria-disabled="true">
      {body}
    </div>
  )
}
