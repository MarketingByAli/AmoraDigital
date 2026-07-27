import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getMetaForPath } from '../routeMeta'
import {
  DEFAULT_OG_IMAGE,
  GA_MEASUREMENT_ID,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_CANONICAL_ORIGIN,
  SITE_NAME
} from '../siteConfig'
import { buildGraph } from '../seo/schema'
import { resolvePageSchema } from '../seo/pageSchema'
import {
  DEFAULT_LOCALE,
  LOCALE_HREFLANG,
  LOCALE_HTML_LANG,
  LOCALE_OG,
  ROUTES,
  getRouteKey,
  isIndexablePath,
  localeFromPath,
  normalizePathname,
  type Locale
} from '../i18n/routes'

const PAGE_SCHEMA_ID = 'amora-page-schema'

function setMetaName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function removeMetaName(name: string) {
  document.querySelectorAll<HTMLMetaElement>(`meta[name="${name}"]`).forEach((el) => el.remove())
}

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

function clearAlternateLinks() {
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
}

function appendAlternate(hreflang: string, href: string) {
  const link = document.createElement('link')
  link.setAttribute('rel', 'alternate')
  link.setAttribute('hreflang', hreflang)
  link.setAttribute('href', href)
  document.head.appendChild(link)
}

function clearOgLocaleAlternates() {
  document
    .querySelectorAll('meta[property="og:locale:alternate"]')
    .forEach((el) => el.remove())
}

function setHtmlLang(lang: string) {
  document.documentElement.setAttribute('lang', lang)
}

function setPageJsonLd(schema: object | null) {
  const existing = document.getElementById(PAGE_SCHEMA_ID)
  if (existing) existing.remove()
  if (!schema) return
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = PAGE_SCHEMA_ID
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}

/**
 * Absolute canonical for a slashless ROUTES path.
 * Home (`/`) keeps a trailing slash to match the sitemap; every other route
 * (including `/nl`) has no trailing slash.
 */
function canonicalForRoutePath(routePath: string): string {
  return `${SITE_CANONICAL_ORIGIN}${routePath === '/' ? '/' : routePath}`
}

export default function DocumentMeta() {
  const { pathname } = useLocation()
  const skipNextGtagConfig = useRef(true)

  useEffect(() => {
    const path = normalizePathname(pathname)
    const locale: Locale = localeFromPath(path)
    const key = getRouteKey(path)
    const meta = getMetaForPath(path, locale)
    const { title, description, ogImage, keywords } = meta
    // Prefer ROUTES[key] so canonicals never inherit a trailing slash from the bar.
    const routePath = key ? ROUTES[key][locale] : path
    const canonicalUrl = canonicalForRoutePath(routePath)
    const image = ogImage ?? DEFAULT_OG_IMAGE
    const indexable = isIndexablePath(path)

    setHtmlLang(LOCALE_HTML_LANG[locale])

    document.title = title
    setMetaName('description', description)
    if (keywords && keywords.length > 0) {
      setMetaName('keywords', keywords.join(', '))
    } else {
      removeMetaName('keywords')
    }
    setMetaName(
      'robots',
      indexable
        ? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        : 'noindex, nofollow'
    )
    setMetaName('googlebot', indexable ? 'index, follow' : 'noindex, nofollow')
    setMetaName('bingbot', indexable ? 'index, follow' : 'noindex, nofollow')
    setMetaName('author', SITE_NAME)
    setMetaName('publisher', SITE_NAME)
    setMetaName('application-name', SITE_NAME)
    setMetaName('format-detection', 'telephone=yes,email=yes,address=yes')
    setMetaName('theme-color', '#6c2bd9')
    setMetaName('referrer', 'strict-origin-when-cross-origin')

    setCanonical(canonicalUrl)

    // Hreflang cluster — only emit when the page has a known mapping in both
    // locales. `x-default` points to the English version for international
    // search audiences.
    clearAlternateLinks()
    if (key) {
      const enUrl = canonicalForRoutePath(ROUTES[key].en)
      const nlUrl = canonicalForRoutePath(ROUTES[key].nl)
      appendAlternate(LOCALE_HREFLANG.en, enUrl)
      appendAlternate(LOCALE_HREFLANG.nl, nlUrl)
      appendAlternate('x-default', enUrl)
    }

    setMetaProperty('og:type', 'website')
    setMetaProperty('og:site_name', SITE_NAME)
    setMetaProperty('og:locale', LOCALE_OG[locale])
    clearOgLocaleAlternates()
    if (key) {
      const alternateLocale: Locale = locale === 'en' ? 'nl' : 'en'
      const alt = document.createElement('meta')
      alt.setAttribute('property', 'og:locale:alternate')
      alt.setAttribute('content', LOCALE_OG[alternateLocale])
      document.head.appendChild(alt)
    }
    setMetaProperty('og:title', title)
    setMetaProperty('og:description', description)
    setMetaProperty('og:url', canonicalUrl)
    setMetaProperty('og:image', image)
    setMetaProperty('og:image:secure_url', image)
    setMetaProperty('og:image:alt', title)
    setMetaProperty('og:image:width', String(OG_IMAGE_WIDTH))
    setMetaProperty('og:image:height', String(OG_IMAGE_HEIGHT))
    setMetaProperty('og:image:type', 'image/png')

    setMetaName('twitter:card', 'summary_large_image')
    setMetaName('twitter:title', title)
    setMetaName('twitter:description', description)
    setMetaName('twitter:image', image)
    setMetaName('twitter:image:alt', title)
    setMetaName('twitter:url', canonicalUrl)

    setMetaName('geo.region', 'NL')
    setMetaName('geo.placename', 'Netherlands')
    setMetaName('geo.position', '52.3676;4.9041')
    setMetaName('ICBM', '52.3676, 4.9041')

    const pageNodes = indexable ? resolvePageSchema(routePath, { title, description, image }) : []
    if (pageNodes.length > 0) {
      setPageJsonLd(buildGraph(pageNodes))
    } else {
      setPageJsonLd(null)
    }

    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
    if (skipNextGtagConfig.current) {
      skipNextGtagConfig.current = false
    } else {
      gtag?.('config', GA_MEASUREMENT_ID, { page_path: routePath, page_title: title })
    }
  }, [pathname])

  // Reference DEFAULT_LOCALE to keep the import meaningful for future tooling
  // and avoid an unused-import lint when this component grows.
  void DEFAULT_LOCALE
  return null
}
