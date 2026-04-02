import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  ShoppingCart,
  CreditCard,
  Package,
  Truck,
  BarChart3,
  Shield,
  Star,
  Phone,
  Mail,
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  Settings,
  Layers,
  RefreshCw
} from 'lucide-react'

const services = [
  {
    icon: ShoppingCart,
    title: 'Custom E-Commerce',
    description: 'Fully custom online stores built from scratch to match your unique business requirements.'
  },
  {
    icon: Globe,
    title: 'WooCommerce',
    description: 'Powerful WordPress-based stores with unlimited customization possibilities.'
  },
  {
    icon: Layers,
    title: 'Shopify Development',
    description: 'Custom Shopify themes and apps for a premium shopping experience.'
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Secure payment gateways including Stripe, PayPal, iDEAL, and more.'
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Real-time stock tracking, automated reordering, and warehouse integration.'
  },
  {
    icon: Truck,
    title: 'Shipping & Fulfillment',
    description: 'Automated shipping rates, tracking, and fulfillment integrations.'
  }
]

const stats = [
  { value: '€10M+', label: 'Sales Generated', description: 'For our clients' },
  { value: '150+', label: 'Stores Built', description: 'Successfully launched' },
  { value: '3x', label: 'Avg. Sales Increase', description: 'After optimization' },
  { value: '99.9%', label: 'Uptime', description: 'Store reliability' }
]

const platforms = [
  { name: 'WooCommerce', description: 'WordPress-powered flexibility', color: 'from-purple-500 to-purple-600' },
  { name: 'Shopify', description: 'Hosted simplicity', color: 'from-green-500 to-green-600' },
  { name: 'Magento', description: 'Enterprise power', color: 'from-orange-500 to-orange-600' },
  { name: 'Custom Built', description: 'Total control', color: 'from-blue-500 to-blue-600' },
]

const features = [
  { icon: Smartphone, title: 'Mobile-First Design', description: '70% of shoppers buy on mobile' },
  { icon: Search, title: 'SEO Optimized', description: 'Built-in search visibility' },
  { icon: Zap, title: 'Lightning Fast', description: 'Speed = more conversions' },
  { icon: Shield, title: 'Secure Checkout', description: 'PCI compliant & SSL secured' },
  { icon: TrendingUp, title: 'Conversion Focused', description: 'Optimized for sales' },
  { icon: RefreshCw, title: 'Easy Management', description: 'User-friendly admin panel' },
]

const ecommerceFeatures = [
  'Product catalog management',
  'Shopping cart & checkout',
  'Customer accounts',
  'Order management',
  'Discount & coupon codes',
  'Wishlist functionality',
  'Product reviews & ratings',
  'Multi-currency support',
  'Tax calculation',
  'Shipping integrations',
  'Email notifications',
  'Analytics dashboard'
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyze your products, target audience, and business goals to plan the perfect store.'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create beautiful, conversion-optimized designs that reflect your brand.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build your store with all features, integrations, and customizations.'
  },
  {
    step: '04',
    title: 'Launch & Grow',
    description: 'Go live with ongoing optimization to maximize sales and growth.'
  }
]

const integrations = [
  { name: 'Stripe', category: 'Payment' },
  { name: 'PayPal', category: 'Payment' },
  { name: 'iDEAL', category: 'Payment' },
  { name: 'Klarna', category: 'Payment' },
  { name: 'PostNL', category: 'Shipping' },
  { name: 'DHL', category: 'Shipping' },
  { name: 'Mailchimp', category: 'Marketing' },
  { name: 'Klaviyo', category: 'Marketing' },
  { name: 'Google Analytics', category: 'Analytics' },
  { name: 'Facebook Pixel', category: 'Analytics' },
  { name: 'Exact Online', category: 'Accounting' },
  { name: 'Lightspeed', category: 'POS' },
]

export default function ECommerceSolutions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                <span className="text-white/40">/</span>
                <Link to="/development" className="text-white/60 hover:text-white transition-colors">Development</Link>
                <span className="text-white/40">/</span>
                <span className="text-white">E-Commerce</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Online Stores That{' '}
                <span className="text-emerald-200">Sell</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Build a powerful online store that converts visitors into customers. 
                From WooCommerce to Shopify to fully custom solutions—we create e-commerce 
                experiences that drive revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-green-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Start Your Store
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#platforms" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Platforms
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-200" />
                  <span className="text-sm text-white/70">€10M+ Sales Generated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-200" />
                  <span className="text-sm text-white/70">Secure & PCI Compliant</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Store Mockup */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl" />
              
              {/* Store mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                  {/* Browser header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="flex-1 mx-4 px-3 py-1 bg-white/10 rounded text-xs text-white/60">yourstore.com</div>
                  </div>
                  {/* Store content */}
                  <div className="p-4">
                    {/* Product grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="h-16 bg-white/20 rounded mb-2" />
                        <div className="h-2 bg-white/30 rounded w-3/4 mb-1" />
                        <div className="text-xs text-emerald-300 font-bold">€49.99</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="h-16 bg-white/20 rounded mb-2" />
                        <div className="h-2 bg-white/30 rounded w-3/4 mb-1" />
                        <div className="text-xs text-emerald-300 font-bold">€79.99</div>
                      </div>
                    </div>
                    {/* Cart button */}
                    <div className="flex items-center justify-between p-3 bg-emerald-500/30 rounded-lg border border-emerald-400/30">
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4 text-white" />
                        <span className="text-sm text-white">2 items</span>
                      </div>
                      <span className="text-sm font-bold text-emerald-200">€129.98</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-0 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Order Placed!</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <CreditCard className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">Secure Pay</span>
                </div>
              </div>
              
              <div className="absolute bottom-24 left-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Truck className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">Fast Shipping</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  <span className="text-sm font-medium text-white">5-Star Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-white/90">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Why Us</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              E-Commerce Built for{' '}
              <span className="gradient-text">Success</span>
            </h2>
            <p className="section-subheading mx-auto">
              Every store we build is optimized for conversions, speed, and growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:shadow-lg transition-all border border-transparent hover:border-emerald-100">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              E-Commerce{' '}
              <span className="gradient-text">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 lg:py-28 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Platforms</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Choose Your{' '}
              <span className="text-emerald-300">Platform</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We work with all major e-commerce platforms. Pick what works best for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-white/70">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce Features List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
                <Package className="w-4 h-4" />
                <span>Features</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                Everything You Need to{' '}
                <span className="gradient-text">Sell Online</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our e-commerce solutions come packed with all the features you need 
                to run a successful online store, from day one.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {ecommerceFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sales mockup */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h4 className="font-bold text-slate-900 mb-6">Your Sales Dashboard</h4>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-500">Today's Revenue</span>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">+23%</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">€4,892.50</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-sm text-slate-500 mb-1">Orders</div>
                    <div className="text-xl font-bold text-slate-900">47</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-sm text-slate-500 mb-1">Visitors</div>
                    <div className="text-xl font-bold text-slate-900">1,284</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm text-slate-500 mb-2">Conversion Rate</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-[3.7%] h-full bg-emerald-500 rounded-full" style={{ width: '37%' }} />
                    </div>
                    <span className="text-sm font-bold text-emerald-600">3.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <RefreshCw className="w-4 h-4" />
              <span>Integrations</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Connect With Your{' '}
              <span className="gradient-text">Favorite Tools</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration) => (
              <div key={integration.name} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-md hover:border-emerald-200 transition-all text-center">
                <div className="text-sm font-medium text-slate-900">{integration.name}</div>
                <div className="text-xs text-slate-500">{integration.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We Build Your{' '}
              <span className="gradient-text">Online Store</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-emerald-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              "Our new WooCommerce store increased our online sales by 340%. 
              The checkout process is smooth and we get far fewer abandoned carts."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Maria Bakker</div>
                <div className="text-slate-400 text-sm">Owner, Dutch Fashion Store</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Sell Online?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Let's build an online store that grows your business. 
                  Get a free consultation and store proposal.
                </p>
                <ul className="space-y-3">
                  {['Free e-commerce consultation', 'Platform recommendation', 'Feature planning', 'No obligation quote'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-emerald-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Start Your Online Store</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="platform" className="block text-sm font-medium text-slate-700 mb-1">Preferred Platform</label>
                    <select 
                      id="platform"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select platform</option>
                      <option value="woocommerce">WooCommerce</option>
                      <option value="shopify">Shopify</option>
                      <option value="magento">Magento</option>
                      <option value="custom">Custom Built</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="products" className="block text-sm font-medium text-slate-700 mb-1">Number of Products</label>
                    <select 
                      id="products"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1 - 50 products</option>
                      <option value="51-200">51 - 200 products</option>
                      <option value="201-1000">201 - 1,000 products</option>
                      <option value="1000+">1,000+ products</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 group"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-500 text-center">
                  Free consultation. We'll respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Ready to start selling online?</h3>
              <p className="text-slate-400">Let's discuss your e-commerce project today.</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+31625580415"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +31 6 25580415
              </a>
              <a 
                href="mailto:info@amoradigital.nl"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
