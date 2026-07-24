/**
 * Load localized pathnames from `src/i18n/routes.ts`.
 *
 * Node cannot import that TypeScript module without a transpile step, so build
 * scripts parse the ROUTES object from source. Paths stay single-sourced in
 * routes.ts — sitemap and prerender cannot drift from the SPA table.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const ROUTES_FILE = path.join(ROOT, 'src/i18n/routes.ts')

/**
 * @returns {Record<string, { en: string, nl: string }>}
 */
export function loadRoutesFromTs() {
  const src = fs.readFileSync(ROUTES_FILE, 'utf8')
  const marker = 'export const ROUTES'
  const start = src.indexOf(marker)
  if (start < 0) throw new Error(`ROUTES export not found in ${ROUTES_FILE}`)

  const braceStart = src.indexOf('{', start)
  if (braceStart < 0) throw new Error('ROUTES object opening brace not found')

  let depth = 0
  let end = -1
  for (let i = braceStart; i < src.length; i++) {
    const ch = src[i]
    if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0) {
        end = i
        break
      }
    }
  }
  if (end < 0) throw new Error('ROUTES object closing brace not found')

  const body = src.slice(braceStart, end + 1)
  /** @type {Record<string, { en: string, nl: string }>} */
  const routes = {}
  const entryRe =
    /(?:'([^']+)'|([A-Za-z_][\w-]*))\s*:\s*\{\s*en:\s*'([^']*)'\s*,\s*nl:\s*'([^']*)'\s*\}/g
  let m
  while ((m = entryRe.exec(body))) {
    const key = m[1] || m[2]
    routes[key] = { en: m[3], nl: m[4] }
  }

  if (!routes.home || !routes.branches) {
    throw new Error('Failed to parse core ROUTES entries from routes.ts')
  }

  return routes
}

/** @returns {{ en: string[], nl: string[] }} */
export function loadAllPathsFromTs() {
  const routes = loadRoutesFromTs()
  const keys = Object.keys(routes)
  return {
    en: keys.map((k) => routes[k].en),
    nl: keys.map((k) => routes[k].nl)
  }
}
