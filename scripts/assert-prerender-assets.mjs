/**
 * Post-prerender build guard.
 *
 * Scans every generated HTML file for `/assets/*` references and fails the
 * build if any referenced file is missing on disk. Prevents shipping
 * prerendered pages that point at deleted hashed CSS/JS after a clean.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

/** Top-level trees that contain prerendered HTML (mirrors clean.mjs TARGETS). */
const HTML_ROOTS = [
  'about',
  'contact',
  'privacy-policy',
  'marketing',
  'development',
  'products',
  'industries',
  'branches',
  'nl'
]

/**
 * @param {string} dir
 * @param {string[]} out
 */
function collectHtmlFiles(dir, out) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      // Skip source / tooling dirs if somehow nested.
      if (entry.name === 'node_modules' || entry.name === 'src' || entry.name === 'public') continue
      collectHtmlFiles(full, out)
    } else if (entry.isFile() && entry.name === 'index.html') {
      out.push(full)
    }
  }
}

function listPrerenderHtml() {
  /** @type {string[]} */
  const files = []
  const rootIndex = path.join(ROOT, 'index.html')
  if (fs.existsSync(rootIndex)) files.push(rootIndex)
  for (const name of HTML_ROOTS) {
    collectHtmlFiles(path.join(ROOT, name), files)
  }
  return files
}

/** @param {string} html */
function extractAssetRefs(html) {
  const refs = new Set()
  const re = /\/assets\/[A-Za-z0-9._@-]+/g
  let m
  while ((m = re.exec(html))) {
    refs.add(m[0])
  }
  return [...refs]
}

function main() {
  const htmlFiles = listPrerenderHtml()
  if (htmlFiles.length === 0) {
    console.error('[assert-assets] no prerendered HTML found')
    process.exitCode = 1
    return
  }

  /** @type {{ file: string, asset: string }[]} */
  const missing = []
  let checkedRefs = 0

  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8')
    const refs = extractAssetRefs(html)
    for (const ref of refs) {
      checkedRefs += 1
      const onDisk = path.join(ROOT, ref.replace(/^\//, ''))
      if (!fs.existsSync(onDisk)) {
        missing.push({
          file: path.relative(ROOT, file).replace(/\\/g, '/'),
          asset: ref
        })
      }
    }
  }

  if (missing.length > 0) {
    console.error(
      `[assert-assets] FAIL: ${missing.length} missing asset reference(s) across ${htmlFiles.length} HTML file(s)`
    )
    for (const row of missing) {
      console.error(`  - ${row.file} → ${row.asset}`)
    }
    process.exitCode = 1
    return
  }

  console.log(
    `[assert-assets] ✓ ${htmlFiles.length} HTML file(s), ${checkedRefs} asset ref(s) — all present on disk`
  )
}

main()
