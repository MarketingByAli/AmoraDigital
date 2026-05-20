/**
 * Static HTML pre-renderer.
 *
 * After `vite build` has produced `index.html` and hashed `/assets/*`, this
 * script spins up a local static server, launches headless Chromium and
 * visits every indexable route in the SPA. For each route it captures the
 * fully hydrated HTML (meta tags, canonical, JSON-LD, body content) and
 * saves it to `<route>/index.html` so crawlers and social scrapers get the
 * complete, content-rich document on first response.
 *
 * Keeps `index.html` at the root as the SPA fallback for dynamic routes.
 */

import http from 'node:http'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import serveHandler from 'serve-handler'
import puppeteer from 'puppeteer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')

/**
 * Bilingual route table. Must stay in sync with `src/i18n/routes.ts`.
 * English keeps the original URLs; Dutch lives under `/nl/...` with
 * translated slugs so each locale has its own crawlable static document.
 */
const EN_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/marketing',
  '/marketing/website-design',
  '/marketing/crm-solutions',
  '/marketing/social-media-marketing',
  '/marketing/paid-advertising',
  '/marketing/seo-services',
  '/marketing/ai-seo',
  '/marketing/local-seo',
  '/marketing/email-marketing',
  '/marketing/conversion-optimization',
  '/marketing/brand-strategy',
  '/development',
  '/development/react',
  '/development/php',
  '/development/java',
  '/development/mobile-apps',
  '/development/ecommerce',
  '/development/ai-automation',
  '/development/full-stack',
  '/development/web-applications',
  '/products/auto-form-builder',
  '/products/auto-form-crm',
  '/products/hi-fan',
  '/products/pinkpeck',
  '/products/unbox-deal',
  '/products/royal-casino-hub'
]

const NL_ROUTES = [
  '/nl',
  '/nl/over-ons',
  '/nl/contact',
  '/nl/privacybeleid',
  '/nl/marketing',
  '/nl/marketing/webdesign',
  '/nl/marketing/crm-oplossingen',
  '/nl/marketing/social-media-marketing',
  '/nl/marketing/online-adverteren',
  '/nl/marketing/seo-diensten',
  '/nl/marketing/ai-seo',
  '/nl/marketing/lokale-seo',
  '/nl/marketing/e-mailmarketing',
  '/nl/marketing/conversie-optimalisatie',
  '/nl/marketing/merkstrategie',
  '/nl/ontwikkeling',
  '/nl/ontwikkeling/react-development',
  '/nl/ontwikkeling/php-development',
  '/nl/ontwikkeling/java-development',
  '/nl/ontwikkeling/mobiele-apps',
  '/nl/ontwikkeling/e-commerce',
  '/nl/ontwikkeling/ai-automatisering',
  '/nl/ontwikkeling/full-stack',
  '/nl/ontwikkeling/webapplicaties',
  '/nl/producten/auto-form-builder',
  '/nl/producten/auto-form-crm',
  '/nl/producten/hi-fan',
  '/nl/producten/pinkpeck',
  '/nl/producten/unbox-deal',
  '/nl/producten/royal-casino-hub'
]

const ROUTES = [...EN_ROUTES, ...NL_ROUTES]

const PORT = 5178
const RENDER_TIMEOUT_MS = 25000
const POST_NAV_WAIT_MS = 600

async function startServer() {
  const server = http.createServer((req, res) =>
    serveHandler(req, res, {
      public: ROOT,
      cleanUrls: false,
      rewrites: [{ source: '**', destination: '/index.html' }]
    })
  )
  await new Promise((resolve) => server.listen(PORT, resolve))
  return server
}

/** Minor HTML post-processing for crawler-friendly output. */
function postProcessHtml(html) {
  // Strip the Vite dev HMR snippet if any survives (defensive).
  return html.replace(/<script[^>]*vite\/client[^>]*><\/script>/g, '')
}

async function renderRoute(browser, route) {
  const page = await browser.newPage()
  try {
    await page.setUserAgent(
      'Mozilla/5.0 (compatible; AmoraDigitalPrerender/1.0; +https://amoradigital.nl)'
    )
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: RENDER_TIMEOUT_MS
    })
    await page.waitForSelector('#root > *', { timeout: 10000 })
    await new Promise((r) => setTimeout(r, POST_NAV_WAIT_MS))

    const html = await page.content()
    return postProcessHtml(html)
  } finally {
    await page.close()
  }
}

function outputPathFor(route) {
  if (route === '/') return path.join(ROOT, 'index.html')
  // For Dutch routes, the root `/nl` folder also needs an `index.html`.
  const dir = path.join(ROOT, route.replace(/^\//, ''))
  fs.mkdirSync(dir, { recursive: true })
  return path.join(dir, 'index.html')
}

async function main() {
  if (!fs.existsSync(path.join(ROOT, 'index.html'))) {
    throw new Error('index.html not found at project root. Run `vite build` first.')
  }

  const server = await startServer()
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  console.log(`[prerender] rendering ${ROUTES.length} routes...`)
  let ok = 0
  let failed = 0
  for (const route of ROUTES) {
    try {
      const html = await renderRoute(browser, route)
      const outPath = outputPathFor(route)
      fs.writeFileSync(outPath, html, 'utf8')
      const rel = path.relative(ROOT, outPath).replace(/\\/g, '/')
      console.log(`[prerender]  ✓ ${route.padEnd(42)} -> ${rel}`)
      ok += 1
    } catch (err) {
      console.error(`[prerender]  ✗ ${route}`, err?.message || err)
      failed += 1
    }
  }

  await browser.close()
  await new Promise((resolve) => server.close(resolve))
  console.log(`[prerender] done. ok=${ok} failed=${failed}`)
  if (failed > 0) process.exitCode = 1
}

main().catch((err) => {
  console.error('[prerender] fatal', err)
  process.exitCode = 1
})
