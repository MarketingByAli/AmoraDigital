import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import ScrollProgress from './components/ScrollProgress'
import RouteScrollAndFocus from './components/RouteScrollAndFocus'
import DocumentMeta from './components/DocumentMeta'

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
  return (
    <div className="min-h-[50vh] flex items-center justify-center" aria-busy="true" aria-label="Loading page">
      <div
        className="h-10 w-10 rounded-full border-2 border-primary-600 border-t-transparent animate-spin"
        aria-hidden
      />
    </div>
  )
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
              <Route path="/" element={<HomePage />} />

              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              <Route path="/marketing" element={<MarketingSolutions />} />
              <Route path="/marketing/website-design" element={<WebsiteDesign />} />
              <Route path="/marketing/crm-solutions" element={<CRMSolutions />} />
              <Route path="/marketing/social-media-marketing" element={<SocialMediaMarketing />} />
              <Route path="/marketing/paid-advertising" element={<PaidAdvertising />} />
              <Route path="/marketing/seo-services" element={<SEOServices />} />
              <Route path="/marketing/ai-seo" element={<AISEO />} />
              <Route path="/marketing/local-seo" element={<LocalSEO />} />
              <Route path="/marketing/email-marketing" element={<EmailMarketing />} />
              <Route path="/marketing/conversion-optimization" element={<ConversionOptimization />} />
              <Route path="/marketing/brand-strategy" element={<BrandStrategy />} />

              <Route path="/development" element={<DevelopmentServices />} />
              <Route path="/development/react" element={<ReactDevelopment />} />
              <Route path="/development/php" element={<PHPDevelopment />} />
              <Route path="/development/java" element={<JavaDevelopment />} />
              <Route path="/development/mobile-apps" element={<MobileAppDevelopment />} />
              <Route path="/development/ecommerce" element={<ECommerceSolutions />} />
              <Route path="/development/ai-automation" element={<AIAutomation />} />
              <Route path="/development/full-stack" element={<FullStackDevelopment />} />
              <Route path="/development/web-applications" element={<WebApplications />} />

              <Route path="/products/auto-form-builder" element={<AutoFormBuilder />} />
              <Route path="/products/auto-form-crm" element={<AutoFormCRM />} />
              <Route path="/products/hi-fan" element={<HiFan />} />
              <Route path="/products/pinkpeck" element={<PinkPeck />} />
              <Route path="/products/unbox-deal" element={<UnboxDeal />} />
              <Route path="/products/royal-casino-hub" element={<RoyalCasinoHub />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App
