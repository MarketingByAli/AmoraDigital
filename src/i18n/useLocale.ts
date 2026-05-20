import { useLocation } from 'react-router-dom'
import { localeFromPath, type Locale } from './routes'

/**
 * Hook returning the current locale based on the current URL.
 * Pages under `/nl` are Dutch; everything else is English.
 */
export function useLocale(): Locale {
  const { pathname } = useLocation()
  return localeFromPath(pathname)
}
