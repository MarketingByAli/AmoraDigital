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
import { INDEXABLE_PATHS, ROUTES, localeFromPath } from './i18n/routes'
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
  if (!INDEXABLE_PATHS.has(pathname)) return null
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
