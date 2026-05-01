import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getMetaForPath, INDEXABLE_PATHS } from '../routeMeta'
import {
  CONTENT_LANGUAGE,
  DEFAULT_OG_IMAGE,
  GA_MEASUREMENT_ID,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_CANONICAL_ORIGIN,
  SITE_NAME
} from '../siteConfig'
import { buildGraph, OG_ALTERNATE_LOCALE, OG_LOCALE } from '../seo/schema'
import { resolvePageSchema } from '../seo/pageSchema'

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

function setAlternateLink(hreflang: string, href: string) {
  let link = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', hreflang)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
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

export default function DocumentMeta() {
  const { pathname } = useLocation()
  const skipNextGtagConfig = useRef(true)

  useEffect(() => {
    const meta = getMetaForPath(pathname)
    const { title, description, ogImage, keywords } = meta
    // Canonical for home is `${origin}/` (with trailing slash) to match
    // the sitemap and avoid Google treating `/` and `` as different URLs.
    const canonicalUrl = `${SITE_CANONICAL_ORIGIN}${pathname === '/' ? '/' : pathname}`
    const image = ogImage ?? DEFAULT_OG_IMAGE
    const indexable = INDEXABLE_PATHS.has(pathname)

    setHtmlLang(CONTENT_LANGUAGE)

    document.title = title
    setMetaName('description', description)
    if (keywords && keywords.length > 0) {
      setMetaName('keywords', keywords.join(', '))
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
    setAlternateLink('en', canonicalUrl)
    setAlternateLink('nl', canonicalUrl)
    setAlternateLink('x-default', canonicalUrl)

    setMetaProperty('og:type', 'website')
    setMetaProperty('og:site_name', SITE_NAME)
    setMetaProperty('og:locale', OG_LOCALE)
    setMetaProperty('og:locale:alternate', OG_ALTERNATE_LOCALE)
    setMetaProperty('og:title', title)
    setMetaProperty('og:description', description)
    setMetaProperty('og:url', canonicalUrl)
    setMetaProperty('og:image', image)
    setMetaProperty('og:image:secure_url', image)
    setMetaProperty('og:image:alt', title)
    if (!ogImage) {
      setMetaProperty('og:image:width', String(OG_IMAGE_WIDTH))
      setMetaProperty('og:image:height', String(OG_IMAGE_HEIGHT))
      setMetaProperty('og:image:type', 'image/png')
    }

    setMetaName('twitter:card', 'summary_large_image')
    setMetaName('twitter:site', '@amoradigital')
    setMetaName('twitter:creator', '@amoradigital')
    setMetaName('twitter:title', title)
    setMetaName('twitter:description', description)
    setMetaName('twitter:image', image)
    setMetaName('twitter:image:alt', title)
    setMetaName('twitter:url', canonicalUrl)

    setMetaName('geo.region', 'NL')
    setMetaName('geo.placename', 'Netherlands')
    setMetaName('geo.position', '52.3676;4.9041')
    setMetaName('ICBM', '52.3676, 4.9041')

    const pageNodes = indexable ? resolvePageSchema(pathname, { title, description, image }) : []
    if (pageNodes.length > 0) {
      setPageJsonLd(buildGraph(pageNodes))
    } else {
      setPageJsonLd(null)
    }

    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
    if (skipNextGtagConfig.current) {
      skipNextGtagConfig.current = false
    } else {
      gtag?.('config', GA_MEASUREMENT_ID, { page_path: pathname, page_title: title })
    }
  }, [pathname])

  return null
}
