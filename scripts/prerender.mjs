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
import { loadAllPathsFromTs } from './lib/loadRoutesFromTs.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')

/**
 * Pathnames loaded from `src/i18n/routes.ts` so prerender cannot drift from
 * the SPA route table (including localized EN/NL industry slugs).
 */
const { en: EN_ROUTES, nl: NL_ROUTES } = loadAllPathsFromTs()
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
