/**
 * Build-time sitemap generator.
 *
 * Emits `sitemap.xml` at project root AND `public/sitemap.xml`. Runs before
 * prerender in `npm run build`. Omits `<lastmod>` unless we track real content
 * changes — Google ignores inaccurate lastmod values.
 *
 * Pathnames are loaded from `src/i18n/routes.ts` (via loadRoutesFromTs).
 * This file only owns changefreq / priority / OG image hints.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadRoutesFromTs } from './lib/loadRoutesFromTs.mjs'

const __filename = fileURLToPath(import.meta.url)
const ROOT = path.resolve(path.dirname(__filename), '..')
const ORIGIN = 'https://amoradigital.nl'

/**
 * Per-page metadata. `key` must match a RouteKey in `src/i18n/routes.ts`.
 * Paths (en/nl) are resolved from that table at build time.
 */
const PAGE_META = [
  { key: 'home', changefreq: 'weekly', priority: '1.0' },
  { key: 'about', changefreq: 'monthly', priority: '0.8' },
  { key: 'contact', changefreq: 'monthly', priority: '0.8' },
  { key: 'privacy', changefreq: 'yearly', priority: '0.3' },

  { key: 'marketing', changefreq: 'monthly', priority: '0.9' },
  { key: 'website-design', changefreq: 'monthly', priority: '0.8' },
  { key: 'crm-solutions', changefreq: 'monthly', priority: '0.8' },
  { key: 'social-media-marketing', changefreq: 'monthly', priority: '0.8' },
  { key: 'paid-advertising', changefreq: 'monthly', priority: '0.8' },
  { key: 'seo-services', changefreq: 'monthly', priority: '0.9' },
  { key: 'ai-seo', changefreq: 'monthly', priority: '0.9' },
  { key: 'local-seo', changefreq: 'monthly', priority: '0.8' },
  { key: 'email-marketing', changefreq: 'monthly', priority: '0.8' },
  { key: 'conversion-optimization', changefreq: 'monthly', priority: '0.8' },
  { key: 'brand-strategy', changefreq: 'monthly', priority: '0.8' },

  { key: 'development', changefreq: 'monthly', priority: '0.9' },
  { key: 'react', changefreq: 'monthly', priority: '0.8' },
  { key: 'php', changefreq: 'monthly', priority: '0.8' },
  { key: 'java', changefreq: 'monthly', priority: '0.8' },
  { key: 'mobile-apps', changefreq: 'monthly', priority: '0.8' },
  { key: 'ecommerce', changefreq: 'monthly', priority: '0.8' },
  { key: 'ai-automation', changefreq: 'monthly', priority: '0.8' },
  { key: 'full-stack', changefreq: 'monthly', priority: '0.8' },
  { key: 'web-applications', changefreq: 'monthly', priority: '0.8' },

  { key: 'auto-form-builder', changefreq: 'monthly', priority: '0.7' },
  { key: 'auto-form-crm', changefreq: 'monthly', priority: '0.7' },
  { key: 'hi-fan', changefreq: 'monthly', priority: '0.7' },
  { key: 'pinkpeck', changefreq: 'monthly', priority: '0.7' },
  { key: 'unbox-deal', changefreq: 'monthly', priority: '0.7' },
  { key: 'royal-casino-hub', changefreq: 'monthly', priority: '0.7' },

  { key: 'branches', changefreq: 'weekly', priority: '0.9' },
  { key: 'branches-restaurants', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-tandartsen', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-fysiotherapeuten', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-kappers-schoonheidssalons', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-makelaars', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-aannemers', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-installateurs', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-advocaten-notarissen', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-boekhouders', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-autobedrijven', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-webshops', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-sportscholen', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-schoonmaakbedrijven', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-eventplanners', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-eventplanners-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-eventplanners-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-fotografen', changefreq: 'weekly', priority: '0.85' },
  { key: 'branches-schoonmaakbedrijven-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-schoonmaakbedrijven-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-sportscholen-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-sportscholen-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-webshops-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-webshops-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-autobedrijven-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-autobedrijven-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-boekhouders-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-boekhouders-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-advocaten-notarissen-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-advocaten-notarissen-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-installateurs-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-installateurs-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-aannemers-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-aannemers-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-restaurants-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-restaurants-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-restaurants-social-media', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-tandartsen-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-tandartsen-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-fysiotherapeuten-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-fysiotherapeuten-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-kappers-schoonheidssalons-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-kappers-schoonheidssalons-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-makelaars-website-laten-maken', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-makelaars-lokale-seo', changefreq: 'weekly', priority: '0.8' },
  { key: 'branches-makelaars-social-media', changefreq: 'weekly', priority: '0.8' }
]

function buildPages() {
  const routes = loadRoutesFromTs()
  return PAGE_META.map((meta) => {
    const pair = routes[meta.key]
    if (!pair) {
      throw new Error(`[sitemap] RouteKey "${meta.key}" missing from src/i18n/routes.ts`)
    }
    return { ...meta, en: pair.en, nl: pair.nl }
  })
}

/** Match OG image paths used in `src/routeMeta.ts` → `ogImageForKey`. */
function resolveOgImage(page) {
  const { key, en } = page
  if (key === 'home' || key === 'about' || key === 'contact' || key === 'privacy') {
    return '/og/Home.png'
  }
  if (key === 'branches' || key.startsWith('branches-')) {
    if (key.endsWith('-website-laten-maken')) return '/og/website-design.png'
    if (key.endsWith('-lokale-seo')) return '/og/local-seo.png'
    if (key.endsWith('-social-media')) return '/og/social-media-marketing.png'
    return '/og/marketing.png'
  }
  if (key === 'marketing') return '/og/marketing.png'
  if (key === 'development') return '/og/development.png'
  const segment = en.slice(en.lastIndexOf('/') + 1)
  return `/og/${segment}.png`
}

function xmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function buildSitemap(pages) {
  const parts = []
  parts.push('<?xml version="1.0" encoding="UTF-8"?>')
  parts.push(
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
  )
  for (const page of pages) {
    const enUrl = `${ORIGIN}${page.en}`
    const nlUrl = `${ORIGIN}${page.nl}`
    const imagePath = resolveOgImage(page)
    const imgBlock = `\n    <image:image><image:loc>${ORIGIN}${imagePath}</image:loc></image:image>`

    for (const url of [enUrl, nlUrl]) {
      parts.push(`  <url>`)
      parts.push(`    <loc>${xmlEscape(url)}</loc>`)
      parts.push(`    <changefreq>${page.changefreq}</changefreq>`)
      parts.push(`    <priority>${page.priority}</priority>`)
      parts.push(`    <xhtml:link rel="alternate" hreflang="en" href="${xmlEscape(enUrl)}" />`)
      parts.push(`    <xhtml:link rel="alternate" hreflang="nl" href="${xmlEscape(nlUrl)}" />`)
      parts.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(enUrl)}" />`)
      parts.push(`   ${imgBlock}`)
      parts.push(`  </url>`)
    }
  }
  parts.push('</urlset>')
  parts.push('')
  return parts.join('\n')
}

function main() {
  const pages = buildPages()
  const xml = buildSitemap(pages)
  const rootPath = path.join(ROOT, 'sitemap.xml')
  const publicDir = path.join(ROOT, 'public')
  const publicPath = path.join(publicDir, 'sitemap.xml')

  fs.writeFileSync(rootPath, xml, 'utf8')
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(publicPath, xml, 'utf8')
  }

  console.log(`[sitemap]  ✓ ${pages.length * 2} URLs (${pages.length} EN + ${pages.length} NL)`)
  console.log(`[sitemap]  ✓ wrote ${path.relative(ROOT, rootPath).replace(/\\/g, '/')}`)
  if (fs.existsSync(publicDir)) {
    console.log(`[sitemap]  ✓ wrote ${path.relative(ROOT, publicPath).replace(/\\/g, '/')}`)
  }
}

main()
