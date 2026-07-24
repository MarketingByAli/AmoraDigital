/**
 * Spoke services per industry hub in the /branches SEO silo.
 * Copy lives here for all planned spokes; only entries in LIVE_BRANCH_SPOKES
 * get routed/linked. Add a slug to LIVE_BRANCH_SPOKES when that page ships.
 *
 * `slug` is a stable internal id (Dutch form). URLs come only from RouteKey →
 * ROUTES — never concatenate hubPath + slug.
 */
import type { Locale, RouteKey } from '../i18n/routes'

export type LocalizedString = Record<Locale, string>

export type BranchSpoke = {
  /** Stable internal id — not a URL segment. */
  slug: string
  name: LocalizedString
  benefit: LocalizedString
}

/** Live spoke slugs per industry. Add a slug here when the spoke page ships. */
export const LIVE_BRANCH_SPOKES: Readonly<Record<string, readonly string[]>> = {
  restaurants: ['website-laten-maken', 'lokale-seo', 'social-media'],
  tandartsen: ['website-laten-maken', 'lokale-seo'],
  fysiotherapeuten: ['website-laten-maken', 'lokale-seo'],
  'kappers-schoonheidssalons': ['website-laten-maken', 'lokale-seo'],
  makelaars: ['website-laten-maken', 'lokale-seo', 'social-media'],
  aannemers: ['website-laten-maken', 'lokale-seo'],
  installateurs: ['website-laten-maken', 'lokale-seo'],
  'advocaten-notarissen': []
}

/**
 * Spoke RouteKeys for industries that have them registered in `ROUTES`.
 * Add an entry when the spoke RouteKey is created — independent of liveness.
 */
export const BRANCH_SPOKE_ROUTE_KEYS: Readonly<
  Record<string, Readonly<Partial<Record<string, RouteKey>>>>
> = {
  restaurants: {
    'website-laten-maken': 'branches-restaurants-website-laten-maken',
    'lokale-seo': 'branches-restaurants-lokale-seo',
    'social-media': 'branches-restaurants-social-media'
  },
  tandartsen: {
    'website-laten-maken': 'branches-tandartsen-website-laten-maken',
    'lokale-seo': 'branches-tandartsen-lokale-seo'
  },
  fysiotherapeuten: {
    'website-laten-maken': 'branches-fysiotherapeuten-website-laten-maken',
    'lokale-seo': 'branches-fysiotherapeuten-lokale-seo'
  },
  'kappers-schoonheidssalons': {
    'website-laten-maken': 'branches-kappers-schoonheidssalons-website-laten-maken',
    'lokale-seo': 'branches-kappers-schoonheidssalons-lokale-seo'
  },
  makelaars: {
    'website-laten-maken': 'branches-makelaars-website-laten-maken',
    'lokale-seo': 'branches-makelaars-lokale-seo',
    'social-media': 'branches-makelaars-social-media'
  },
  aannemers: {
    'website-laten-maken': 'branches-aannemers-website-laten-maken',
    'lokale-seo': 'branches-aannemers-lokale-seo'
  },
  installateurs: {
    'website-laten-maken': 'branches-installateurs-website-laten-maken',
    'lokale-seo': 'branches-installateurs-lokale-seo'
  },
  /**
   * Planned spoke RouteKeys (EN: website-design / local-seo / google-ads).
   * Cast until each spoke’s ROUTES entry + page ship — keeps muted cards link-safe
   * without registering indexable paths early.
   */
  'advocaten-notarissen': {
    'website-laten-maken':
      'branches-advocaten-notarissen-website-laten-maken' as RouteKey,
    'lokale-seo': 'branches-advocaten-notarissen-lokale-seo' as RouteKey,
    'google-ads': 'branches-advocaten-notarissen-google-ads' as RouteKey
  }
}

export function isLiveBranchSpoke(industrySlug: string, slug: string): boolean {
  return (LIVE_BRANCH_SPOKES[industrySlug] ?? []).includes(slug)
}

/** Resolve a spoke's RouteKey for ROUTES lookup, or undefined when unregistered. */
export function getBranchSpokeRouteKey(
  industrySlug: string,
  spokeSlug: string
): RouteKey | undefined {
  return BRANCH_SPOKE_ROUTE_KEYS[industrySlug]?.[spokeSlug]
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
        nl: 'Social media voor restaurants'
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
        en: 'Social media management for real estate agents',
        nl: 'Social media voor makelaars'
      },
      benefit: {
        en: 'Build authority with listings, neighbourhood content and proof that drives valuations and viewings.',
        nl: 'Bouw autoriteit met woningen, buurtcontent en social proof die taxaties en bezichtigingen opleveren.'
      }
    }
  ],
  aannemers: [
    {
      slug: 'website-laten-maken',
      name: {
        en: 'Website design for contractors',
        nl: 'Website laten maken voor aannemers'
      },
      benefit: {
        en: 'A project-led site with before/after work, services and a clear quote form so homeowners ask you first.',
        nl: 'Een projectgerichte site met voor/na-werk, diensten en een duidelijk offerteformulier, zodat huiseigenaren jou eerst benaderen.'
      }
    },
    {
      slug: 'lokale-seo',
      name: {
        en: 'Local SEO for contractors',
        nl: 'Lokale SEO voor aannemers'
      },
      benefit: {
        en: 'Show up for “contractor near me” and trade + city searches, including Google Business Profile setup.',
        nl: 'Zichtbaar op “aannemer bij mij” en vak + stad-zoekopdrachten, inclusief Google Bedrijfsprofiel-opzet.'
      }
    },
    {
      slug: 'google-ads',
      name: {
        en: 'Google Ads for contractors',
        nl: 'Google Ads voor aannemers'
      },
      benefit: {
        en: 'Campaigns for urgent renovations and planned builds so quote requests hit your inbox when demand spikes.',
        nl: 'Campagnes voor spoedklusjes en geplande verbouwingen, zodat offerteaanvragen binnenkomen wanneer de vraag piekt.'
      }
    }
  ],
  installateurs: [
    {
      slug: 'website-laten-maken',
      name: {
        en: 'Website design for installers',
        nl: 'Website laten maken voor installateurs'
      },
      benefit: {
        en: 'A call-ready site with emergency contact, services and clear CTAs so homeowners reach you when a boiler fails or a fuse board trips.',
        nl: 'Een belklare site met spoedcontact, diensten en duidelijke CTA’s, zodat huiseigenaren je bereiken bij een defecte cv of doorgeslagen groepenkast.'
      }
    },
    {
      slug: 'lokale-seo',
      name: {
        en: 'Local SEO for installers',
        nl: 'Lokale SEO voor installateurs'
      },
      benefit: {
        en: 'Show up for “plumber near me”, “electrician [city]” and installation searches, including Google Business Profile setup.',
        nl: 'Zichtbaar op “loodgieter bij mij”, “elektricien [stad]” en installatiezoekopdrachten, inclusief Google Bedrijfsprofiel-opzet.'
      }
    },
    {
      slug: 'google-ads',
      name: {
        en: 'Google Ads for installers',
        nl: 'Google Ads voor installateurs'
      },
      benefit: {
        en: 'Campaigns for emergency call-outs and planned installs so phones ring when someone needs heat, power or a heat pump quote.',
        nl: 'Campagnes voor spoedritten en geplande installaties, zodat de telefoon gaat wanneer iemand warmte, stroom of een warmtepompofferte nodig heeft.'
      }
    }
  ],
  'advocaten-notarissen': [
    {
      slug: 'website-laten-maken',
      name: {
        en: 'Website design for law firms',
        nl: 'Website laten maken voor advocaten'
      },
      benefit: {
        en: 'A discreet, authoritative site that presents practice areas clearly and turns stressed visitors into consultation requests.',
        nl: 'Een discrete, gezaghebbende site die rechtsgebieden helder presenteert en gestreste bezoekers omzet in consultaanvragen.'
      }
    },
    {
      slug: 'lokale-seo',
      name: {
        en: 'Local SEO for law firms',
        nl: 'Lokale SEO voor advocaten'
      },
      benefit: {
        en: 'Show up for practice area + city searches — family law, employment, notarial deeds — including Google Business Profile setup.',
        nl: 'Zichtbaar op rechtsgebied + stad-zoekopdrachten — familierecht, arbeidsrecht, notariële aktes — inclusief Google Bedrijfsprofiel-opzet.'
      }
    },
    {
      slug: 'google-ads',
      name: {
        en: 'Google Ads for law firms',
        nl: 'Google Ads voor advocaten'
      },
      benefit: {
        en: 'Campaigns around high-intent legal moments so qualified case and deed enquiries reach the right desk.',
        nl: 'Campagnes rond juridische momenten met hoge intentie, zodat gekwalificeerde zaak- en akteaanvragen het juiste bureau bereiken.'
      }
    }
  ]
}
