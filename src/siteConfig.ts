/**
 * Central site configuration used across SEO, schema.org structured data,
 * meta tags and analytics. Keep values in sync with `public/robots.txt`,
 * `public/sitemap.xml`, `index.html` and hosting redirects.
 */

export const SITE_CANONICAL_ORIGIN = 'https://amoradigital.nl'

export const SITE_NAME = 'Amora Digital'
export const SITE_LEGAL_NAME = 'Amora Digital'

export const SITE_SLOGAN = 'Digital Marketing & Custom Development'
export const SITE_DESCRIPTION =
  'Amora Digital is a Netherlands-based digital marketing and custom development agency. We help businesses grow with SEO, AI SEO, paid advertising, web design, React, PHP and Java development.'

export const GA_MEASUREMENT_ID = 'G-LF7H7MVWRJ'

export const CONTACT_EMAIL = 'info@amoradigital.nl'
export const CONTACT_PHONE_E164 = '+31625580415'
export const CONTACT_PHONE_DISPLAY = '+31 6 25580415'

export const BUSINESS_KVK = '99536811'
export const BUSINESS_COUNTRY = 'NL'
export const BUSINESS_REGION = 'Netherlands'
export const BUSINESS_GEO_POSITION = '52.3676;4.9041'

export const BUSINESS_FOUNDING_DATE = '2024-01-01'

export const DEFAULT_LOCALE = 'nl_NL'
export const ALTERNATE_LOCALE = 'en_US'
export const CONTENT_LANGUAGE = 'en'

export const LOGO_URL = 'https://amoradigital.nl/asset/Amora-Logo.svg'
export const LOGO_LIGHT_URL = 'https://amoradigital.nl/asset/amora-logo-light.svg'
export const FAVICON_URL = 'https://amoradigital.nl/asset/amora-icon.svg'
export const DEFAULT_OG_IMAGE = `${SITE_CANONICAL_ORIGIN}/og-image.png`
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

export const SOCIAL_PROFILES: readonly string[] = [
  'https://www.linkedin.com/company/amoradigital',
  'https://www.facebook.com/amoradigital',
  'https://www.instagram.com/amoradigital'
]

export const SITE_KEYWORDS: readonly string[] = [
  'digital marketing agency',
  'SEO agency Netherlands',
  'AI SEO',
  'paid advertising',
  'Google Ads',
  'Meta Ads',
  'web design Netherlands',
  'React development',
  'PHP development',
  'Java development',
  'custom software',
  'ecommerce development',
  'AI automation'
]
