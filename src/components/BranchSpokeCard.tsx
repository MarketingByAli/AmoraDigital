import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { isLiveBranchSpoke, type BranchSpoke } from '../data/branchSpokes'
import type { Locale } from '../i18n/routes'

type BranchSpokeCardProps = {
  industrySlug: string
  hubPath: string
  spoke: BranchSpoke
  locale: Locale
  ctaLabel: string
  /** Hub service cards show an icon; sibling cards on spokes do not. */
  icon?: LucideIcon
  variant?: 'hub' | 'sibling'
}

/**
 * Renders a spoke as a link when live, or a muted non-clickable card when not.
 * Liveness comes solely from LIVE_BRANCH_SPOKES in data/branchSpokes.ts.
 */
export default function BranchSpokeCard({
  industrySlug,
  hubPath,
  spoke,
  locale,
  ctaLabel,
  icon: Icon,
  variant = 'sibling'
}: BranchSpokeCardProps) {
  const live = isLiveBranchSpoke(industrySlug, spoke.slug)
  const isHub = variant === 'hub'
  const titleClass = isHub
    ? 'text-xl font-bold text-slate-900 mb-2'
    : 'text-lg font-bold text-slate-900 mb-2'
  const paddingClass = isHub ? 'card p-6 lg:p-8' : 'card p-6'
  const benefitClass = isHub
    ? 'text-slate-600 text-sm leading-relaxed mb-6'
    : 'text-slate-600 text-sm leading-relaxed mb-4'

  const body = (
    <>
      {Icon ? (
        <div
          className={
            live
              ? 'w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform'
              : 'w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-4'
          }
        >
          <Icon className={`w-6 h-6 ${live ? 'text-white' : 'text-slate-500'}`} aria-hidden />
        </div>
      ) : null}
      <h3
        className={
          live
            ? `${titleClass} group-hover:text-primary-600 transition-colors`
            : `${titleClass} text-slate-700`
        }
      >
        {spoke.name[locale]}
      </h3>
      <p className={live ? benefitClass : `${benefitClass} text-slate-500`}>{spoke.benefit[locale]}</p>
      {live ? (
        <div className="flex items-center gap-2 text-sm font-medium text-primary-600">
          <span>{ctaLabel}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
        </div>
      ) : null}
    </>
  )

  if (live) {
    return (
      <Link
        to={`${hubPath}/${spoke.slug}`}
        className={`${paddingClass} group hover:-translate-y-1`}
      >
        {body}
      </Link>
    )
  }

  return (
    <div className={`${paddingClass} opacity-80 cursor-default`} aria-disabled="true">
      {body}
    </div>
  )
}
