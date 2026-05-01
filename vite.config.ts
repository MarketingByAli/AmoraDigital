import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite config. Build outputs directly to project root (hosted deploy layout).
 * Public assets (robots.txt, sitemap.xml, .htaccess, favicon.svg) are copied
 * from `public/` into the root at build time.
 *
 * Post-build, `scripts/prerender.mjs` generates per-route `index.html` files
 * so crawlers see fully rendered HTML (titles, meta, JSON-LD, body content)
 * on first response, bypassing the client-side rendering pitfall.
 */
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '.',
    emptyOutDir: false,
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // Predictable chunking so long-term caching works after rebuilds.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) return 'vendor-react'
            if (id.includes('react-router')) return 'vendor-router'
            if (id.includes('lucide-react')) return 'vendor-icons'
            return 'vendor'
          }
          return undefined
        }
      }
    }
  }
})
