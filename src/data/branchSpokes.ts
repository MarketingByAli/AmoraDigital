/**
 * Spoke services per industry hub in the /branches SEO silo.
 * Hubs map over these arrays; spoke pages are linked now and built later.
 */
import type { Locale } from '../i18n/routes'

export type LocalizedString = Record<Locale, string>

export type BranchSpoke = {
  slug: string
  name: LocalizedString
  benefit: LocalizedString
}

export const BRANCH_SPOKES: Record<string, readonly BranchSpoke[]> = {
  restaurants: [
    {
      slug: 'website-laten-maken',
      name: {
        en: 'Website design for restaurants',
        nl: 'Website laten maken voor restaurants'
      },
      benefit: {
        en: 'A fast, mobile-friendly site with menu, reservations and clear calls to action that turn visitors into guests.',
        nl: 'Een snelle, mobielvriendelijke site met menu, reserveringen en duidelijke call-to-actions die gasten tot actie aanzetten.'
      }
    },
    {
      slug: 'lokale-seo',
      name: {
        en: 'Local SEO for restaurants',
        nl: 'Lokale SEO voor restaurants'
      },
      benefit: {
        en: 'Get found for “restaurant near me” and local search terms, including Google Business Profile optimisation.',
        nl: 'Word gevonden op “restaurant bij mij in de buurt” en lokale zoektermen, inclusief Google Bedrijfsprofiel-optimalisatie.'
      }
    },
    {
      slug: 'social-media',
      name: {
        en: 'Social media management for restaurants',
        nl: 'Social media beheer voor restaurants'
      },
      benefit: {
        en: 'Stay consistently visible with content that shares atmosphere, offers and events — and drives traffic to reservations.',
        nl: 'Consistent zichtbaar met content die sfeer, aanbiedingen en events deelt — en verkeer naar reserveringen stuurt.'
      }
    },
    {
      slug: 'google-ads',
      name: {
        en: 'Google Ads for restaurants',
        nl: 'Google Ads voor restaurants'
      },
      benefit: {
        en: 'Targeted campaigns for lunch, dinner, delivery or events so you win guests when demand is highest.',
        nl: 'Gerichte campagnes voor lunch, diner, bezorgen of events, zodat je sneller gasten binnenhaalt wanneer het ertoe doet.'
      }
    }
  ],
  tandartsen: [
    {
      slug: 'website-laten-maken',
      name: {
        en: 'Website design for dentists',
        nl: 'Website laten maken voor tandartsen'
      },
      benefit: {
        en: 'A clear, mobile-friendly practice site with treatments, team and booking CTAs that turn visitors into patients.',
        nl: 'Een duidelijke, mobielvriendelijke praktijkwebsite met behandelingen, team en boekings-CTA’s die bezoekers omzetten in patiënten.'
      }
    },
    {
      slug: 'lokale-seo',
      name: {
        en: 'Local SEO for dentists',
        nl: 'Lokale SEO voor tandartsen'
      },
      benefit: {
        en: 'Get found for “dentist near me” and local search terms, including Google Business Profile optimisation.',
        nl: 'Word gevonden op “tandarts bij mij in de buurt” en lokale zoektermen, inclusief Google Bedrijfsprofiel-optimalisatie.'
      }
    },
    {
      slug: 'google-ads',
      name: {
        en: 'Google Ads for dentists',
        nl: 'Google Ads voor tandartsen'
      },
      benefit: {
        en: 'Targeted campaigns for new patients, implants or emergency care so your agenda fills when demand is high.',
        nl: 'Gerichte campagnes voor nieuwe patiënten, implantaten of spoedzorg, zodat je agenda sneller volloopt.'
      }
    },
    {
      slug: 'social-media',
      name: {
        en: 'Social media for dentists',
        nl: 'Social media beheer voor tandartsen'
      },
      benefit: {
        en: 'Build trust with consistent content about care, tips and your team — and drive traffic to bookings.',
        nl: 'Bouw vertrouwen met consistente content over zorg, tips en je team — en stuur verkeer naar afspraken.'
      }
    }
  ],
  fysiotherapeuten: [
    {
      slug: 'website-laten-maken',
      name: {
        en: 'Website design for physiotherapists',
        nl: 'Website laten maken voor fysiotherapeuten'
      },
      benefit: {
        en: 'A clear, mobile-friendly practice site with treatments, team and booking CTAs that turn visitors into clients.',
        nl: 'Een duidelijke, mobielvriendelijke praktijkwebsite met behandelingen, team en boekings-CTA’s die bezoekers omzetten in cliënten.'
      }
    },
    {
      slug: 'lokale-seo',
      name: {
        en: 'Local SEO for physiotherapists',
        nl: 'Lokale SEO voor fysiotherapeuten'
      },
      benefit: {
        en: 'Get found for “physiotherapist near me” and local search terms, including Google Business Profile optimisation.',
        nl: 'Word gevonden op “fysiotherapeut bij mij in de buurt” en lokale zoektermen, inclusief Google Bedrijfsprofiel-optimalisatie.'
      }
    },
    {
      slug: 'google-ads',
      name: {
        en: 'Google Ads for physiotherapists',
        nl: 'Google Ads voor fysiotherapie'
      },
      benefit: {
        en: 'Targeted campaigns for new clients, sports injuries or specific treatments so your agenda fills when demand is high.',
        nl: 'Gerichte campagnes voor nieuwe cliënten, sportblessures of specifieke behandelingen, zodat je agenda sneller volloopt.'
      }
    }
  ],
  'kappers-schoonheidssalons': [
    {
      slug: 'website-laten-maken',
      name: {
        en: 'Website design for hair & beauty salons',
        nl: 'Website laten maken voor kappers & salons'
      },
      benefit: {
        en: 'A stylish, mobile-friendly salon site with services, portfolio and booking CTAs that turn visitors into appointments.',
        nl: 'Een stijlvolle, mobielvriendelijke salonwebsite met diensten, portfolio en boekings-CTA’s die bezoekers omzetten in afspraken.'
      }
    },
    {
      slug: 'lokale-seo',
      name: {
        en: 'Local SEO for hair & beauty salons',
        nl: 'Lokale SEO voor kappers & salons'
      },
      benefit: {
        en: 'Get found for “hairdresser near me” and local search on Google Maps, including Google Business Profile optimisation.',
        nl: 'Word gevonden op “kapper bij mij in de buurt” en lokaal op Google Maps, inclusief Google Bedrijfsprofiel-optimalisatie.'
      }
    },
    {
      slug: 'social-media',
      name: {
        en: 'Social media for hair & beauty salons',
        nl: 'Social media beheer voor kappers & salons'
      },
      benefit: {
        en: 'Show your work and fill the chair with consistent Instagram and social content that drives bookings.',
        nl: 'Laat je werk zien en vul de stoelen met consistente Instagram- en social content die afspraken oplevert.'
      }
    }
  ],
  makelaars: [
    {
      slug: 'website-laten-maken',
      name: {
        en: 'Website design for real estate agents',
        nl: 'Website laten maken voor makelaars'
      },
      benefit: {
        en: 'A fast, mobile-friendly agency site with listings, valuations and clear CTAs that turn visitors into seller and buyer leads.',
        nl: 'Een snelle, mobielvriendelijke kantoorsite met woningen, taxaties en duidelijke CTA’s die bezoekers omzetten in verkoper- en koperleads.'
      }
    },
    {
      slug: 'lokale-seo',
      name: {
        en: 'Local SEO for real estate agents',
        nl: 'Lokale SEO voor makelaars'
      },
      benefit: {
        en: 'Rank for “estate agent [city]” and local search terms, including Google Business Profile optimisation.',
        nl: 'Scoor op “makelaar [stad]” en lokale zoektermen, inclusief Google Bedrijfsprofiel-optimalisatie.'
      }
    },
    {
      slug: 'google-ads',
      name: {
        en: 'Google Ads for real estate agents',
        nl: 'Google Ads voor makelaars'
      },
      benefit: {
        en: 'Targeted campaigns for valuations, sellers and buyers so high-intent leads reach your inbox faster.',
        nl: 'Gerichte campagnes voor taxaties, verkopers en kopers, zodat leads met hoge intentie sneller binnenkomen.'
      }
    },
    {
      slug: 'social-media',
      name: {
        en: 'Social media for real estate agents',
        nl: 'Social media beheer voor makelaars'
      },
      benefit: {
        en: 'Build authority with listings, neighbourhood content and proof that drives valuations and viewings.',
        nl: 'Bouw autoriteit met woningen, buurtcontent en social proof die taxaties en bezichtigingen opleveren.'
      }
    }
  ]
}
