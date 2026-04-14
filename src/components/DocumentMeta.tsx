import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getMetaForPath, INDEXABLE_PATHS } from '../routeMeta'
import { SITE_CANONICAL_ORIGIN } from '../siteConfig'

const DEFAULT_OG_IMAGE = `${SITE_CANONICAL_ORIGIN}/og-image.png`
const OG_IMAGE_WIDTH = '1200'
const OG_IMAGE_HEIGHT = '630'

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

function setMetaRobots(content: string) {
  setMetaName('robots', content)
}

export default function DocumentMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title, description, ogImage } = getMetaForPath(pathname)
    const canonicalUrl = `${SITE_CANONICAL_ORIGIN}${pathname === '/' ? '' : pathname}`
    const image = ogImage ?? DEFAULT_OG_IMAGE
    const indexable = INDEXABLE_PATHS.has(pathname)

    // Basic
    document.title = title
    setMetaName('description', description)
    setMetaRobots(indexable ? 'index, follow' : 'noindex, nofollow')

    // Canonical (avoid double slash for home)
    setCanonical(canonicalUrl)

    // Open Graph
    setMetaProperty('og:type', 'website')
    setMetaProperty('og:locale', 'en_US')
    setMetaProperty('og:title', title)
    setMetaProperty('og:description', description)
    setMetaProperty('og:url', canonicalUrl)
    setMetaProperty('og:image', image)
    if (!ogImage) {
      setMetaProperty('og:image:width', OG_IMAGE_WIDTH)
      setMetaProperty('og:image:height', OG_IMAGE_HEIGHT)
    }

    // Twitter Card
    setMetaName('twitter:card', 'summary_large_image')
    setMetaName('twitter:title', title)
    setMetaName('twitter:description', description)
    setMetaName('twitter:image', image)
    setMetaName('twitter:image:alt', title)
  }, [pathname])

  return null
}
