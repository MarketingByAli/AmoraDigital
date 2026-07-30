import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import ScrollProgress from './components/ScrollProgress'
import RouteScrollAndFocus from './components/RouteScrollAndFocus'
import DocumentMeta from './components/DocumentMeta'
import RelatedServices from './components/RelatedServices'
import FaqSection from './components/FaqSection'
import { isIndexablePath, ROUTES, localeFromPath } from './i18n/routes'
import { UI } from './i18n/ui'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const NotFound = lazy(() => import('./pages/NotFound'))

const MarketingSolutions = lazy(() => import('./pages/MarketingSolutions'))
const WebsiteDesign = lazy(() => import('./pages/marketing/WebsiteDesign'))
const CRMSolutions = lazy(() => import('./pages/marketing/CRMSolutions'))
const SocialMediaMarketing = lazy(() => import('./pages/marketing/SocialMediaMarketing'))
const PaidAdvertising = lazy(() => import('./pages/marketing/PaidAdvertising'))
const SEOServices = lazy(() => import('./pages/marketing/SEOServices'))
const AISEO = lazy(() => import('./pages/marketing/AISEO'))
const LocalSEO = lazy(() => import('./pages/marketing/LocalSEO'))
const EmailMarketing = lazy(() => import('./pages/marketing/EmailMarketing'))
const ConversionOptimization = lazy(() => import('./pages/marketing/ConversionOptimization'))
const BrandStrategy = lazy(() => import('./pages/marketing/BrandStrategy'))

const DevelopmentServices = lazy(() => import('./pages/DevelopmentServices'))
const ReactDevelopment = lazy(() => import('./pages/development/ReactDevelopment'))
const PHPDevelopment = lazy(() => import('./pages/development/PHPDevelopment'))
const JavaDevelopment = lazy(() => import('./pages/development/JavaDevelopment'))
const MobileAppDevelopment = lazy(() => import('./pages/development/MobileAppDevelopment'))
const ECommerceSolutions = lazy(() => import('./pages/development/ECommerceSolutions'))
const AIAutomation = lazy(() => import('./pages/development/AIAutomation'))
const FullStackDevelopment = lazy(() => import('./pages/development/FullStackDevelopment'))
const WebApplications = lazy(() => import('./pages/development/WebApplications'))

const AutoFormBuilder = lazy(() => import('./pages/products/AutoFormBuilder'))
const AutoFormCRM = lazy(() => import('./pages/products/AutoFormCRM'))
const HiFan = lazy(() => import('./pages/products/HiFan'))
const PinkPeck = lazy(() => import('./pages/products/PinkPeck'))
const UnboxDeal = lazy(() => import('./pages/products/UnboxDeal'))
const RoyalCasinoHub = lazy(() => import('./pages/products/RoyalCasinoHub'))
const Branches = lazy(() => import('./pages/Branches'))
const BranchesRestaurants = lazy(() => import('./pages/branches/Restaurants'))
const BranchesTandartsen = lazy(() => import('./pages/branches/Tandartsen'))
const BranchesFysiotherapeuten = lazy(() => import('./pages/branches/Fysiotherapeuten'))
const BranchesKappersSchoonheidssalons = lazy(() => import('./pages/branches/KappersSchoonheidssalons'))
const BranchesMakelaars = lazy(() => import('./pages/branches/Makelaars'))
const BranchesAannemers = lazy(() => import('./pages/branches/Aannemers'))
const BranchesInstallateurs = lazy(() => import('./pages/branches/Installateurs'))
const BranchesAdvocatenNotarissen = lazy(() => import('./pages/branches/AdvocatenNotarissen'))
const BranchesBoekhouders = lazy(() => import('./pages/branches/Boekhouders'))
const BranchesAutobedrijven = lazy(() => import('./pages/branches/Autobedrijven'))
const BranchesWebshops = lazy(() => import('./pages/branches/Webshops'))
const BranchesSportscholen = lazy(() => import('./pages/branches/Sportscholen'))
const BranchesSchoonmaakbedrijven = lazy(() => import('./pages/branches/Schoonmaakbedrijven'))
const BranchesSchoonmaakbedrijvenWebsiteLatenMaken = lazy(
  () => import('./pages/branches/schoonmaakbedrijven/WebsiteLatenMaken')
)
const BranchesSchoonmaakbedrijvenLokaleSeo = lazy(
  () => import('./pages/branches/schoonmaakbedrijven/LokaleSeo')
)
const BranchesSportscholenWebsiteLatenMaken = lazy(
  () => import('./pages/branches/sportscholen/WebsiteLatenMaken')
)
const BranchesSportscholenLokaleSeo = lazy(
  () => import('./pages/branches/sportscholen/LokaleSeo')
)
const BranchesWebshopsWebsiteLatenMaken = lazy(
  () => import('./pages/branches/webshops/WebsiteLatenMaken')
)
const BranchesWebshopsLokaleSeo = lazy(
  () => import('./pages/branches/webshops/LokaleSeo')
)
const BranchesAutobedrijvenWebsiteLatenMaken = lazy(
  () => import('./pages/branches/autobedrijven/WebsiteLatenMaken')
)
const BranchesAutobedrijvenLokaleSeo = lazy(
  () => import('./pages/branches/autobedrijven/LokaleSeo')
)
const BranchesBoekhoudersWebsiteLatenMaken = lazy(
  () => import('./pages/branches/boekhouders/WebsiteLatenMaken')
)
const BranchesBoekhoudersLokaleSeo = lazy(
  () => import('./pages/branches/boekhouders/LokaleSeo')
)
const BranchesAdvocatenWebsiteLatenMaken = lazy(
  () => import('./pages/branches/advocaten-notarissen/WebsiteLatenMaken')
)
const BranchesAdvocatenLokaleSeo = lazy(
  () => import('./pages/branches/advocaten-notarissen/LokaleSeo')
)
const BranchesInstallateursWebsiteLatenMaken = lazy(
  () => import('./pages/branches/installateurs/WebsiteLatenMaken')
)
const BranchesInstallateursLokaleSeo = lazy(
  () => import('./pages/branches/installateurs/LokaleSeo')
)
const BranchesAannemersWebsiteLatenMaken = lazy(
  () => import('./pages/branches/aannemers/WebsiteLatenMaken')
)
const BranchesAannemersLokaleSeo = lazy(
  () => import('./pages/branches/aannemers/LokaleSeo')
)
const BranchesRestaurantsWebsiteLatenMaken = lazy(
  () => import('./pages/branches/restaurants/WebsiteLatenMaken')
)
const BranchesRestaurantsLokaleSeo = lazy(
  () => import('./pages/branches/restaurants/LokaleSeo')
)
const BranchesRestaurantsSocialMedia = lazy(
  () => import('./pages/branches/restaurants/SocialMedia')
)
const BranchesTandartsenWebsiteLatenMaken = lazy(
  () => import('./pages/branches/tandartsen/WebsiteLatenMaken')
)
const BranchesTandartsenLokaleSeo = lazy(
  () => import('./pages/branches/tandartsen/LokaleSeo')
)
const BranchesFysiotherapeutenWebsiteLatenMaken = lazy(
  () => import('./pages/branches/fysiotherapeuten/WebsiteLatenMaken')
)
const BranchesFysiotherapeutenLokaleSeo = lazy(
  () => import('./pages/branches/fysiotherapeuten/LokaleSeo')
)
const BranchesKappersWebsiteLatenMaken = lazy(
  () => import('./pages/branches/kappers-schoonheidssalons/WebsiteLatenMaken')
)
const BranchesKappersLokaleSeo = lazy(
  () => import('./pages/branches/kappers-schoonheidssalons/LokaleSeo')
)
const BranchesMakelaarsWebsiteLatenMaken = lazy(
  () => import('./pages/branches/makelaars/WebsiteLatenMaken')
)
const BranchesMakelaarsLokaleSeo = lazy(
  () => import('./pages/branches/makelaars/LokaleSeo')
)
const BranchesMakelaarsSocialMedia = lazy(
  () => import('./pages/branches/makelaars/SocialMedia')
)

function PageLoader() {
  const { pathname } = useLocation()
  const locale = localeFromPath(pathname)
  const label = UI[locale].pageLoader
  return (
    <div
      className="min-h-[50vh] flex items-center justify-center"
      aria-busy="true"
      aria-label={label}
    >
      <div
        className="h-10 w-10 rounded-full border-2 border-primary-600 border-t-transparent animate-spin"
        aria-hidden
      />
    </div>
  )
}

/**
 * Internal-linking footer strip shown on every indexable page. Displays a
 * curated set of related services so Googlebot, ChatGPT and users all get
 * strong contextual links with keyword-rich anchor text.
 * Skipped on Contact (already a CTA page) and Privacy Policy (legal).
 */
function PageInternalLinks() {
  const { pathname } = useLocation()
  if (
    pathname === ROUTES.contact.en ||
    pathname === ROUTES.contact.nl ||
    pathname === ROUTES.privacy.en ||
    pathname === ROUTES.privacy.nl
  ) {
    return null
  }
  if (!isIndexablePath(pathname)) return null
  return <RelatedServices />
}

function App() {
  return (
    <Router>
      <DocumentMeta />
      <RouteScrollAndFocus />
      <div className="min-h-screen bg-white flex flex-col">
        <ScrollProgress />
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="pt-20 flex-grow outline-none focus:outline-none"
        >
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* English routes */}
              <Route path={ROUTES.home.en} element={<HomePage />} />
              <Route path={ROUTES.about.en} element={<AboutUs />} />
              <Route path={ROUTES.contact.en} element={<Contact />} />
              <Route path={ROUTES.privacy.en} element={<PrivacyPolicy />} />

              <Route path={ROUTES.marketing.en} element={<MarketingSolutions />} />
              <Route path={ROUTES['website-design'].en} element={<WebsiteDesign />} />
              <Route path={ROUTES['crm-solutions'].en} element={<CRMSolutions />} />
              <Route path={ROUTES['social-media-marketing'].en} element={<SocialMediaMarketing />} />
              <Route path={ROUTES['paid-advertising'].en} element={<PaidAdvertising />} />
              <Route path={ROUTES['seo-services'].en} element={<SEOServices />} />
              <Route path={ROUTES['ai-seo'].en} element={<AISEO />} />
              <Route path={ROUTES['local-seo'].en} element={<LocalSEO />} />
              <Route path={ROUTES['email-marketing'].en} element={<EmailMarketing />} />
              <Route path={ROUTES['conversion-optimization'].en} element={<ConversionOptimization />} />
              <Route path={ROUTES['brand-strategy'].en} element={<BrandStrategy />} />

              <Route path={ROUTES.development.en} element={<DevelopmentServices />} />
              <Route path={ROUTES.react.en} element={<ReactDevelopment />} />
              <Route path={ROUTES.php.en} element={<PHPDevelopment />} />
              <Route path={ROUTES.java.en} element={<JavaDevelopment />} />
              <Route path={ROUTES['mobile-apps'].en} element={<MobileAppDevelopment />} />
              <Route path={ROUTES.ecommerce.en} element={<ECommerceSolutions />} />
              <Route path={ROUTES['ai-automation'].en} element={<AIAutomation />} />
              <Route path={ROUTES['full-stack'].en} element={<FullStackDevelopment />} />
              <Route path={ROUTES['web-applications'].en} element={<WebApplications />} />

              <Route path={ROUTES['auto-form-builder'].en} element={<AutoFormBuilder />} />
              <Route path={ROUTES['auto-form-crm'].en} element={<AutoFormCRM />} />
              <Route path={ROUTES['hi-fan'].en} element={<HiFan />} />
              <Route path={ROUTES.pinkpeck.en} element={<PinkPeck />} />
              <Route path={ROUTES['unbox-deal'].en} element={<UnboxDeal />} />
              <Route path={ROUTES['royal-casino-hub'].en} element={<RoyalCasinoHub />} />
              <Route path={ROUTES.branches.en} element={<Branches />} />
              <Route path={ROUTES['branches-restaurants'].en} element={<BranchesRestaurants />} />
              <Route path={ROUTES['branches-tandartsen'].en} element={<BranchesTandartsen />} />
              <Route path={ROUTES['branches-fysiotherapeuten'].en} element={<BranchesFysiotherapeuten />} />
              <Route path={ROUTES['branches-kappers-schoonheidssalons'].en} element={<BranchesKappersSchoonheidssalons />} />
              <Route path={ROUTES['branches-makelaars'].en} element={<BranchesMakelaars />} />
              <Route path={ROUTES['branches-aannemers'].en} element={<BranchesAannemers />} />
              <Route path={ROUTES['branches-installateurs'].en} element={<BranchesInstallateurs />} />
              <Route
                path={ROUTES['branches-advocaten-notarissen'].en}
                element={<BranchesAdvocatenNotarissen />}
              />
              <Route
                path={ROUTES['branches-boekhouders'].en}
                element={<BranchesBoekhouders />}
              />
              <Route
                path={ROUTES['branches-autobedrijven'].en}
                element={<BranchesAutobedrijven />}
              />
              <Route
                path={ROUTES['branches-webshops'].en}
                element={<BranchesWebshops />}
              />
              <Route
                path={ROUTES['branches-sportscholen'].en}
                element={<BranchesSportscholen />}
              />
              <Route
                path={ROUTES['branches-schoonmaakbedrijven'].en}
                element={<BranchesSchoonmaakbedrijven />}
              />
              <Route
                path={ROUTES['branches-schoonmaakbedrijven-website-laten-maken'].en}
                element={<BranchesSchoonmaakbedrijvenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-schoonmaakbedrijven-lokale-seo'].en}
                element={<BranchesSchoonmaakbedrijvenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-sportscholen-website-laten-maken'].en}
                element={<BranchesSportscholenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-sportscholen-lokale-seo'].en}
                element={<BranchesSportscholenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-webshops-website-laten-maken'].en}
                element={<BranchesWebshopsWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-webshops-lokale-seo'].en}
                element={<BranchesWebshopsLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-autobedrijven-website-laten-maken'].en}
                element={<BranchesAutobedrijvenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-autobedrijven-lokale-seo'].en}
                element={<BranchesAutobedrijvenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-boekhouders-website-laten-maken'].en}
                element={<BranchesBoekhoudersWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-boekhouders-lokale-seo'].en}
                element={<BranchesBoekhoudersLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-advocaten-notarissen-website-laten-maken'].en}
                element={<BranchesAdvocatenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-advocaten-notarissen-lokale-seo'].en}
                element={<BranchesAdvocatenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-installateurs-website-laten-maken'].en}
                element={<BranchesInstallateursWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-installateurs-lokale-seo'].en}
                element={<BranchesInstallateursLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-aannemers-website-laten-maken'].en}
                element={<BranchesAannemersWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-aannemers-lokale-seo'].en}
                element={<BranchesAannemersLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-restaurants-website-laten-maken'].en}
                element={<BranchesRestaurantsWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-restaurants-lokale-seo'].en}
                element={<BranchesRestaurantsLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-restaurants-social-media'].en}
                element={<BranchesRestaurantsSocialMedia />}
              />
              <Route
                path={ROUTES['branches-tandartsen-website-laten-maken'].en}
                element={<BranchesTandartsenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-tandartsen-lokale-seo'].en}
                element={<BranchesTandartsenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-fysiotherapeuten-website-laten-maken'].en}
                element={<BranchesFysiotherapeutenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-fysiotherapeuten-lokale-seo'].en}
                element={<BranchesFysiotherapeutenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-kappers-schoonheidssalons-website-laten-maken'].en}
                element={<BranchesKappersWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-kappers-schoonheidssalons-lokale-seo'].en}
                element={<BranchesKappersLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-makelaars-website-laten-maken'].en}
                element={<BranchesMakelaarsWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-makelaars-lokale-seo'].en}
                element={<BranchesMakelaarsLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-makelaars-social-media'].en}
                element={<BranchesMakelaarsSocialMedia />}
              />

              {/* Dutch routes (/nl/...) */}
              <Route path={ROUTES.home.nl} element={<HomePage />} />
              <Route path={ROUTES.about.nl} element={<AboutUs />} />
              <Route path={ROUTES.contact.nl} element={<Contact />} />
              <Route path={ROUTES.privacy.nl} element={<PrivacyPolicy />} />

              <Route path={ROUTES.marketing.nl} element={<MarketingSolutions />} />
              <Route path={ROUTES['website-design'].nl} element={<WebsiteDesign />} />
              <Route path={ROUTES['crm-solutions'].nl} element={<CRMSolutions />} />
              <Route path={ROUTES['social-media-marketing'].nl} element={<SocialMediaMarketing />} />
              <Route path={ROUTES['paid-advertising'].nl} element={<PaidAdvertising />} />
              <Route path={ROUTES['seo-services'].nl} element={<SEOServices />} />
              <Route path={ROUTES['ai-seo'].nl} element={<AISEO />} />
              <Route path={ROUTES['local-seo'].nl} element={<LocalSEO />} />
              <Route path={ROUTES['email-marketing'].nl} element={<EmailMarketing />} />
              <Route path={ROUTES['conversion-optimization'].nl} element={<ConversionOptimization />} />
              <Route path={ROUTES['brand-strategy'].nl} element={<BrandStrategy />} />

              <Route path={ROUTES.development.nl} element={<DevelopmentServices />} />
              <Route path={ROUTES.react.nl} element={<ReactDevelopment />} />
              <Route path={ROUTES.php.nl} element={<PHPDevelopment />} />
              <Route path={ROUTES.java.nl} element={<JavaDevelopment />} />
              <Route path={ROUTES['mobile-apps'].nl} element={<MobileAppDevelopment />} />
              <Route path={ROUTES.ecommerce.nl} element={<ECommerceSolutions />} />
              <Route path={ROUTES['ai-automation'].nl} element={<AIAutomation />} />
              <Route path={ROUTES['full-stack'].nl} element={<FullStackDevelopment />} />
              <Route path={ROUTES['web-applications'].nl} element={<WebApplications />} />

              <Route path={ROUTES['auto-form-builder'].nl} element={<AutoFormBuilder />} />
              <Route path={ROUTES['auto-form-crm'].nl} element={<AutoFormCRM />} />
              <Route path={ROUTES['hi-fan'].nl} element={<HiFan />} />
              <Route path={ROUTES.pinkpeck.nl} element={<PinkPeck />} />
              <Route path={ROUTES['unbox-deal'].nl} element={<UnboxDeal />} />
              <Route path={ROUTES['royal-casino-hub'].nl} element={<RoyalCasinoHub />} />
              <Route path={ROUTES.branches.nl} element={<Branches />} />
              <Route path={ROUTES['branches-restaurants'].nl} element={<BranchesRestaurants />} />
              <Route path={ROUTES['branches-tandartsen'].nl} element={<BranchesTandartsen />} />
              <Route path={ROUTES['branches-fysiotherapeuten'].nl} element={<BranchesFysiotherapeuten />} />
              <Route path={ROUTES['branches-kappers-schoonheidssalons'].nl} element={<BranchesKappersSchoonheidssalons />} />
              <Route path={ROUTES['branches-makelaars'].nl} element={<BranchesMakelaars />} />
              <Route path={ROUTES['branches-aannemers'].nl} element={<BranchesAannemers />} />
              <Route path={ROUTES['branches-installateurs'].nl} element={<BranchesInstallateurs />} />
              <Route
                path={ROUTES['branches-advocaten-notarissen'].nl}
                element={<BranchesAdvocatenNotarissen />}
              />
              <Route
                path={ROUTES['branches-boekhouders'].nl}
                element={<BranchesBoekhouders />}
              />
              <Route
                path={ROUTES['branches-autobedrijven'].nl}
                element={<BranchesAutobedrijven />}
              />
              <Route
                path={ROUTES['branches-webshops'].nl}
                element={<BranchesWebshops />}
              />
              <Route
                path={ROUTES['branches-sportscholen'].nl}
                element={<BranchesSportscholen />}
              />
              <Route
                path={ROUTES['branches-schoonmaakbedrijven'].nl}
                element={<BranchesSchoonmaakbedrijven />}
              />
              <Route
                path={ROUTES['branches-schoonmaakbedrijven-website-laten-maken'].nl}
                element={<BranchesSchoonmaakbedrijvenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-schoonmaakbedrijven-lokale-seo'].nl}
                element={<BranchesSchoonmaakbedrijvenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-sportscholen-website-laten-maken'].nl}
                element={<BranchesSportscholenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-sportscholen-lokale-seo'].nl}
                element={<BranchesSportscholenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-webshops-website-laten-maken'].nl}
                element={<BranchesWebshopsWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-webshops-lokale-seo'].nl}
                element={<BranchesWebshopsLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-autobedrijven-website-laten-maken'].nl}
                element={<BranchesAutobedrijvenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-autobedrijven-lokale-seo'].nl}
                element={<BranchesAutobedrijvenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-boekhouders-website-laten-maken'].nl}
                element={<BranchesBoekhoudersWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-boekhouders-lokale-seo'].nl}
                element={<BranchesBoekhoudersLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-advocaten-notarissen-website-laten-maken'].nl}
                element={<BranchesAdvocatenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-advocaten-notarissen-lokale-seo'].nl}
                element={<BranchesAdvocatenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-installateurs-website-laten-maken'].nl}
                element={<BranchesInstallateursWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-installateurs-lokale-seo'].nl}
                element={<BranchesInstallateursLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-aannemers-website-laten-maken'].nl}
                element={<BranchesAannemersWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-aannemers-lokale-seo'].nl}
                element={<BranchesAannemersLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-restaurants-website-laten-maken'].nl}
                element={<BranchesRestaurantsWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-restaurants-lokale-seo'].nl}
                element={<BranchesRestaurantsLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-restaurants-social-media'].nl}
                element={<BranchesRestaurantsSocialMedia />}
              />
              <Route
                path={ROUTES['branches-tandartsen-website-laten-maken'].nl}
                element={<BranchesTandartsenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-tandartsen-lokale-seo'].nl}
                element={<BranchesTandartsenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-fysiotherapeuten-website-laten-maken'].nl}
                element={<BranchesFysiotherapeutenWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-fysiotherapeuten-lokale-seo'].nl}
                element={<BranchesFysiotherapeutenLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-kappers-schoonheidssalons-website-laten-maken'].nl}
                element={<BranchesKappersWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-kappers-schoonheidssalons-lokale-seo'].nl}
                element={<BranchesKappersLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-makelaars-website-laten-maken'].nl}
                element={<BranchesMakelaarsWebsiteLatenMaken />}
              />
              <Route
                path={ROUTES['branches-makelaars-lokale-seo'].nl}
                element={<BranchesMakelaarsLokaleSeo />}
              />
              <Route
                path={ROUTES['branches-makelaars-social-media'].nl}
                element={<BranchesMakelaarsSocialMedia />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <FaqSection />
          <PageInternalLinks />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App
