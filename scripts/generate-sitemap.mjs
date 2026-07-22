/**
 * Build-time sitemap generator.
 *
 * Emits `sitemap.xml` at project root AND `public/sitemap.xml` with a fresh
 * `<lastmod>` set to today (UTC). Runs before prerender in `npm run build`
 * so Google/Bing see up-to-date crawl signals on every deploy.
 *
 * Route table + per-route priority/changefreq is the SINGLE source of truth
 * for the sitemap. Must stay in sync with `src/i18n/routes.ts` and
 * `scripts/prerender.mjs`.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const ROOT = path.resolve(path.dirname(__filename), '..')
const ORIGIN = 'https://amoradigital.nl'

/**
 * Per-page metadata. `key` is a logical page id used to pair the English and
 * Dutch URLs into an hreflang cluster.
 */
const PAGES = [
  { key: 'home',    en: '/',                            nl: '/nl',                                 changefreq: 'weekly',  priority: '1.0', image: '/og/Home.png' },
  { key: 'about',   en: '/about',                       nl: '/nl/over-ons',                        changefreq: 'monthly', priority: '0.8' },
  { key: 'contact', en: '/contact',                     nl: '/nl/contact',                         changefreq: 'monthly', priority: '0.8' },
  { key: 'privacy', en: '/privacy-policy',              nl: '/nl/privacybeleid',                   changefreq: 'yearly',  priority: '0.3' },

  { key: 'marketing',       en: '/marketing',                            nl: '/nl/marketing',                            changefreq: 'monthly', priority: '0.9' },
  { key: 'website-design',  en: '/marketing/website-design',             nl: '/nl/marketing/webdesign',                  changefreq: 'monthly', priority: '0.8' },
  { key: 'crm-solutions',   en: '/marketing/crm-solutions',              nl: '/nl/marketing/crm-oplossingen',            changefreq: 'monthly', priority: '0.8' },
  { key: 'social-media',    en: '/marketing/social-media-marketing',     nl: '/nl/marketing/social-media-marketing',     changefreq: 'monthly', priority: '0.8' },
  { key: 'paid-ads',        en: '/marketing/paid-advertising',           nl: '/nl/marketing/online-adverteren',          changefreq: 'monthly', priority: '0.8' },
  { key: 'seo-services',    en: '/marketing/seo-services',               nl: '/nl/marketing/seo-diensten',               changefreq: 'monthly', priority: '0.9' },
  { key: 'ai-seo',          en: '/marketing/ai-seo',                     nl: '/nl/marketing/ai-seo',                     changefreq: 'monthly', priority: '0.9' },
  { key: 'local-seo',       en: '/marketing/local-seo',                  nl: '/nl/marketing/lokale-seo',                 changefreq: 'monthly', priority: '0.8' },
  { key: 'email-marketing', en: '/marketing/email-marketing',            nl: '/nl/marketing/e-mailmarketing',            changefreq: 'monthly', priority: '0.8' },
  { key: 'cro',             en: '/marketing/conversion-optimization',    nl: '/nl/marketing/conversie-optimalisatie',    changefreq: 'monthly', priority: '0.8' },
  { key: 'brand-strategy',  en: '/marketing/brand-strategy',             nl: '/nl/marketing/merkstrategie',              changefreq: 'monthly', priority: '0.8' },

  { key: 'development',      en: '/development',                          nl: '/nl/ontwikkeling',                         changefreq: 'monthly', priority: '0.9' },
  { key: 'react',            en: '/development/react',                    nl: '/nl/ontwikkeling/react-development',       changefreq: 'monthly', priority: '0.8' },
  { key: 'php',              en: '/development/php',                      nl: '/nl/ontwikkeling/php-development',         changefreq: 'monthly', priority: '0.8' },
  { key: 'java',             en: '/development/java',                     nl: '/nl/ontwikkeling/java-development',        changefreq: 'monthly', priority: '0.8' },
  { key: 'mobile-apps',      en: '/development/mobile-apps',              nl: '/nl/ontwikkeling/mobiele-apps',            changefreq: 'monthly', priority: '0.8' },
  { key: 'ecommerce',        en: '/development/ecommerce',                nl: '/nl/ontwikkeling/e-commerce',              changefreq: 'monthly', priority: '0.8' },
  { key: 'ai-automation',    en: '/development/ai-automation',            nl: '/nl/ontwikkeling/ai-automatisering',       changefreq: 'monthly', priority: '0.8' },
  { key: 'full-stack',       en: '/development/full-stack',               nl: '/nl/ontwikkeling/full-stack',              changefreq: 'monthly', priority: '0.8' },
  { key: 'web-applications', en: '/development/web-applications',         nl: '/nl/ontwikkeling/webapplicaties',          changefreq: 'monthly', priority: '0.8' },

  { key: 'auto-form-builder', en: '/products/auto-form-builder', nl: '/nl/producten/auto-form-builder', changefreq: 'monthly', priority: '0.7' },
  { key: 'auto-form-crm',     en: '/products/auto-form-crm',     nl: '/nl/producten/auto-form-crm',     changefreq: 'monthly', priority: '0.7' },
  { key: 'hi-fan',            en: '/products/hi-fan',            nl: '/nl/producten/hi-fan',            changefreq: 'monthly', priority: '0.7' },
  { key: 'pinkpeck',          en: '/products/pinkpeck',          nl: '/nl/producten/pinkpeck',          changefreq: 'monthly', priority: '0.7' },
  { key: 'unbox-deal',        en: '/products/unbox-deal',        nl: '/nl/producten/unbox-deal',        changefreq: 'monthly', priority: '0.7' },
  { key: 'royal-casino-hub',  en: '/products/royal-casino-hub',  nl: '/nl/producten/royal-casino-hub',  changefreq: 'monthly', priority: '0.7' },

  { key: 'branches', en: '/branches', nl: '/nl/branches', changefreq: 'weekly', priority: '0.9', image: '/og/Home.png' },
  {
    key: 'branches-restaurants',
    en: '/branches/restaurants',
    nl: '/nl/branches/restaurants',
    changefreq: 'weekly',
    priority: '0.85',
    image: '/og/Home.png'
  },
  {
    key: 'branches-tandartsen',
    en: '/branches/tandartsen',
    nl: '/nl/branches/tandartsen',
    changefreq: 'weekly',
    priority: '0.85',
    image: '/og/Home.png'
  },
  {
    key: 'branches-fysiotherapeuten',
    en: '/branches/fysiotherapeuten',
    nl: '/nl/branches/fysiotherapeuten',
    changefreq: 'weekly',
    priority: '0.85',
    image: '/og/Home.png'
  },
  {
    key: 'branches-kappers-schoonheidssalons',
    en: '/branches/kappers-schoonheidssalons',
    nl: '/nl/branches/kappers-schoonheidssalons',
    changefreq: 'weekly',
    priority: '0.85',
    image: '/og/Home.png'
  },
  {
    key: 'branches-makelaars',
    en: '/branches/makelaars',
    nl: '/nl/branches/makelaars',
    changefreq: 'weekly',
    priority: '0.85',
    image: '/og/Home.png'
  },
  {
    key: 'branches-restaurants-website-laten-maken',
    en: '/branches/restaurants/website-laten-maken',
    nl: '/nl/branches/restaurants/website-laten-maken',
    changefreq: 'weekly',
    priority: '0.8',
    image: '/og/Home.png'
  },
  {
    key: 'branches-restaurants-lokale-seo',
    en: '/branches/restaurants/lokale-seo',
    nl: '/nl/branches/restaurants/lokale-seo',
    changefreq: 'weekly',
    priority: '0.8',
    image: '/og/Home.png'
  },
  {
    key: 'branches-tandartsen-website-laten-maken',
    en: '/branches/tandartsen/website-laten-maken',
    nl: '/nl/branches/tandartsen/website-laten-maken',
    changefreq: 'weekly',
    priority: '0.8',
    image: '/og/Home.png'
  },
  {
    key: 'branches-tandartsen-lokale-seo',
    en: '/branches/tandartsen/lokale-seo',
    nl: '/nl/branches/tandartsen/lokale-seo',
    changefreq: 'weekly',
    priority: '0.8',
    image: '/og/Home.png'
  },
  {
    key: 'branches-fysiotherapeuten-website-laten-maken',
    en: '/branches/fysiotherapeuten/website-laten-maken',
    nl: '/nl/branches/fysiotherapeuten/website-laten-maken',
    changefreq: 'weekly',
    priority: '0.8',
    image: '/og/Home.png'
  },
  {
    key: 'branches-fysiotherapeuten-lokale-seo',
    en: '/branches/fysiotherapeuten/lokale-seo',
    nl: '/nl/branches/fysiotherapeuten/lokale-seo',
    changefreq: 'weekly',
    priority: '0.8',
    image: '/og/Home.png'
  },
  {
    key: 'branches-kappers-schoonheidssalons-website-laten-maken',
    en: '/branches/kappers-schoonheidssalons/website-laten-maken',
    nl: '/nl/branches/kappers-schoonheidssalons/website-laten-maken',
    changefreq: 'weekly',
    priority: '0.8',
    image: '/og/Home.png'
  },
  {
    key: 'branches-kappers-schoonheidssalons-lokale-seo',
    en: '/branches/kappers-schoonheidssalons/lokale-seo',
    nl: '/nl/branches/kappers-schoonheidssalons/lokale-seo',
    changefreq: 'weekly',
    priority: '0.8',
    image: '/og/Home.png'
  },
  {
    key: 'branches-makelaars-website-laten-maken',
    en: '/branches/makelaars/website-laten-maken',
    nl: '/nl/branches/makelaars/website-laten-maken',
    changefreq: 'weekly',
    priority: '0.8',
    image: '/og/Home.png'
  },
  {
    key: 'branches-makelaars-lokale-seo',
    en: '/branches/makelaars/lokale-seo',
    nl: '/nl/branches/makelaars/lokale-seo',
    changefreq: 'weekly',
    priority: '0.8',
    image: '/og/Home.png'
  }
]

function xmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function buildSitemap(today) {
  const parts = []
  parts.push('<?xml version="1.0" encoding="UTF-8"?>')
  parts.push(
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
  )
  for (const page of PAGES) {
    const enUrl = `${ORIGIN}${page.en}`
    const nlUrl = `${ORIGIN}${page.nl}`
    const imgBlock = page.image
      ? `\n    <image:image><image:loc>${ORIGIN}${page.image}</image:loc></image:image>`
      : ''

    for (const url of [enUrl, nlUrl]) {
      parts.push(`  <url>`)
      parts.push(`    <loc>${xmlEscape(url)}</loc>`)
      parts.push(`    <lastmod>${today}</lastmod>`)
      parts.push(`    <changefreq>${page.changefreq}</changefreq>`)
      parts.push(`    <priority>${page.priority}</priority>`)
      parts.push(`    <xhtml:link rel="alternate" hreflang="en" href="${xmlEscape(enUrl)}" />`)
      parts.push(`    <xhtml:link rel="alternate" hreflang="nl" href="${xmlEscape(nlUrl)}" />`)
      parts.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(enUrl)}" />`)
      if (imgBlock) parts.push(`   ${imgBlock}`)
      parts.push(`  </url>`)
    }
  }
  parts.push('</urlset>')
  parts.push('')
  return parts.join('\n')
}

function main() {
  const today = new Date().toISOString().slice(0, 10)
  const xml = buildSitemap(today)
  const rootPath = path.join(ROOT, 'sitemap.xml')
  const publicDir = path.join(ROOT, 'public')
  const publicPath = path.join(publicDir, 'sitemap.xml')

  fs.writeFileSync(rootPath, xml, 'utf8')
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(publicPath, xml, 'utf8')
  }

  console.log(`[sitemap]  ✓ ${PAGES.length * 2} URLs (${PAGES.length} EN + ${PAGES.length} NL), lastmod=${today}`)
  console.log(`[sitemap]  ✓ wrote ${path.relative(ROOT, rootPath).replace(/\\/g, '/')}`)
  if (fs.existsSync(publicDir)) {
    console.log(`[sitemap]  ✓ wrote ${path.relative(ROOT, publicPath).replace(/\\/g, '/')}`)
  }
}

main()
