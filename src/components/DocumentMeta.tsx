import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getMetaForPath } from '../routeMeta'

const SITE_URL = 'https://amoradigital.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

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

export default function DocumentMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title, description, ogImage } = getMetaForPath(pathname)
    const canonicalUrl = `${SITE_URL}${pathname}`
    const image = ogImage ?? DEFAULT_OG_IMAGE

    // Basic
    document.title = title
    setMetaName('description', description)

    // Canonical
    setCanonical(canonicalUrl)

    // Open Graph
    setMetaProperty('og:title', title)
    setMetaProperty('og:description', description)
    setMetaProperty('og:url', canonicalUrl)
    setMetaProperty('og:image', image)

    // Twitter Card
    setMetaName('twitter:title', title)
    setMetaName('twitter:description', description)
    setMetaName('twitter:image', image)
  }, [pathname])

  return null
}
