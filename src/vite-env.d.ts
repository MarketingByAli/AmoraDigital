/// <reference types="vite/client" />

/**
 * Injected by Vite `define` at build time (see vite.config.ts). Contains
 * today's date in `YYYY-MM-DD` form. Used to stamp `dateModified` on every
 * WebPage JSON-LD so search engines and AI crawlers see a fresh signal on
 * every deploy.
 */
declare const __BUILD_DATE__: string
