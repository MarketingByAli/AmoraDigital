import { useEffect } from 'react'
import { buildGraph, buildOrganizationSchema, buildWebSiteSchema } from '../seo/schema'

const SITEWIDE_SCHEMA_ID = 'amora-sitewide-schema'

/**
 * Injects the sitewide Organization + WebSite JSON-LD graph into the
 * document head once on mount. This gives Google, ChatGPT, Perplexity and
 * other AI crawlers the entity definitions every other page schema
 * references via `@id`.
 */
export default function SiteSchema() {
  useEffect(() => {
    if (document.getElementById(SITEWIDE_SCHEMA_ID)) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = SITEWIDE_SCHEMA_ID
    script.textContent = JSON.stringify(
      buildGraph([buildOrganizationSchema(), buildWebSiteSchema()])
    )
    document.head.appendChild(script)
  }, [])

  return null
}
