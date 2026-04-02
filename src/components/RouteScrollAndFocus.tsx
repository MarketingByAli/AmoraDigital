import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to top and moves focus to the main content landmark on SPA navigation
 * so keyboard/screen-reader users notice the page change.
 */
export default function RouteScrollAndFocus() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const main = document.getElementById('main-content')
    main?.focus({ preventScroll: true })
  }, [pathname])

  return null
}
