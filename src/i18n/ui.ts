/**
 * Shared UI strings used by chrome components (header, footer, forms,
 * breadcrumbs, FAQ block, NotFound, etc.). Page-level copy lives in each
 * page's own `.i18n.ts` file.
 */

import type { Locale } from './routes'

type UIStrings = {
  // Nav / chrome
  nav: {
    marketing: string
    marketingTagline: string
    development: string
    developmentTagline: string
    products: string
    productsTagline: string
    productsHeading: string
    productsSubheading: string
    cta: string
    skipToContent: string
  }
  switcher: {
    label: string
    english: string
    dutch: string
  }
  footer: {
    tagline: string
    contactKvkLabel: string
    marketing: string
    development: string
    products: string
    company: string
    letsWork: string
    letsWorkBlurb: string
    getStarted: string
    happyClients: string
    rating: string
    rightsReserved: string
    privacyPolicy: string
    madeIn: string
  }
  related: {
    title: string
    subtitle: string
    learnMore: (name: string) => string
  }
  faq: {
    heading: string
    subheading: string
  }
  breadcrumbs: {
    home: string
    products: string
  }
  form: {
    sending: string
    success: string
    successBody: string
    sendAnother: string
    networkError: string
    fallbackError: string
  }
  notFound: {
    title: string
    body: string
    backHome: string
    contactUs: string
  }
  pageLoader: string
}

export const UI: Record<Locale, UIStrings> = {
  en: {
    nav: {
      marketing: 'Marketing Solutions',
      marketingTagline: 'Grow your business online',
      development: 'Development Services',
      developmentTagline: 'Custom software solutions',
      products: 'Products',
      productsTagline: 'Ready-to-use solutions',
      productsHeading: 'Our Products',
      productsSubheading: 'Ready-to-use solutions',
      cta: "Let's Talk",
      skipToContent: 'Skip to main content'
    },
    switcher: {
      label: 'Change language',
      english: 'English',
      dutch: 'Nederlands'
    },
    footer: {
      tagline:
        'Your trusted partner in digital marketing and custom development. We transform ideas into digital success.',
      contactKvkLabel: 'KVK',
      marketing: 'Marketing Solutions',
      development: 'Development Services',
      products: 'Products',
      company: 'Company',
      letsWork: "Let's Work Together",
      letsWorkBlurb: 'Ready to grow your business? Get in touch for a free consultation.',
      getStarted: 'Get Started',
      happyClients: '1500+ Happy Clients',
      rating: '4.9/5 Rating',
      rightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      madeIn: 'Made with'
    },
    related: {
      title: 'Related services you might need',
      subtitle: 'Get more out of your investment by combining complementary services.',
      learnMore: (name: string) => `Learn more about ${name.toLowerCase()}`
    },
    faq: {
      heading: 'Frequently Asked Questions',
      subheading:
        'Expert answers on SEO, AI SEO, Local SEO and digital growth from Amora Digital.'
    },
    breadcrumbs: {
      home: 'Home',
      products: 'Products'
    },
    form: {
      sending: 'Sending…',
      success: 'Message sent successfully!',
      successBody:
        'Thank you for reaching out. We typically reply within one business day.',
      sendAnother: 'Send another message',
      networkError: 'Network error. Please check your connection and try again.',
      fallbackError: 'Something went wrong. Please try again.'
    },
    notFound: {
      title: 'Page not found',
      body: 'The page you are looking for does not exist or has been moved. Check the URL or return to the homepage.',
      backHome: 'Back to home',
      contactUs: 'Contact us'
    },
    pageLoader: 'Loading page'
  },
  nl: {
    nav: {
      marketing: 'Marketingoplossingen',
      marketingTagline: 'Laat je bedrijf online groeien',
      development: 'Softwareontwikkeling',
      developmentTagline: 'Maatwerk softwareoplossingen',
      products: 'Producten',
      productsTagline: 'Direct inzetbare oplossingen',
      productsHeading: 'Onze producten',
      productsSubheading: 'Direct inzetbare oplossingen',
      cta: 'Plan een gesprek',
      skipToContent: 'Direct naar inhoud'
    },
    switcher: {
      label: 'Taal wijzigen',
      english: 'English',
      dutch: 'Nederlands'
    },
    footer: {
      tagline:
        'Jouw vaste partner in digitale marketing en softwareontwikkeling. Wij vertalen ideeën naar online succes.',
      contactKvkLabel: 'KvK',
      marketing: 'Marketingoplossingen',
      development: 'Softwareontwikkeling',
      products: 'Producten',
      company: 'Bedrijf',
      letsWork: 'Samen werken',
      letsWorkBlurb:
        'Klaar om te groeien? Neem contact op voor een gratis adviesgesprek.',
      getStarted: 'Aan de slag',
      happyClients: '1500+ tevreden klanten',
      rating: '4.9/5 beoordeling',
      rightsReserved: 'Alle rechten voorbehouden.',
      privacyPolicy: 'Privacybeleid',
      madeIn: 'Gemaakt met'
    },
    related: {
      title: 'Aanvullende diensten die je verder helpen',
      subtitle:
        'Haal meer rendement uit je investering door diensten slim te combineren.',
      learnMore: (name: string) => `Meer over ${name.toLowerCase()}`
    },
    faq: {
      heading: 'Veelgestelde vragen',
      subheading:
        'Heldere antwoorden over SEO, AI SEO, lokale SEO en online groei door Amora Digital.'
    },
    breadcrumbs: {
      home: 'Home',
      products: 'Producten'
    },
    form: {
      sending: 'Versturen…',
      success: 'Bericht succesvol verzonden!',
      successBody:
        'Bedankt voor je bericht. We reageren doorgaans binnen één werkdag.',
      sendAnother: 'Nog een bericht versturen',
      networkError:
        'Netwerkfout. Controleer je verbinding en probeer het opnieuw.',
      fallbackError: 'Er ging iets mis. Probeer het later opnieuw.'
    },
    notFound: {
      title: 'Pagina niet gevonden',
      body: 'De pagina die je zoekt bestaat niet of is verplaatst. Controleer de URL of ga terug naar de homepage.',
      backHome: 'Terug naar home',
      contactUs: 'Neem contact op'
    },
    pageLoader: 'Pagina laden'
  }
}
