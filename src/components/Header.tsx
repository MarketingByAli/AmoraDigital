import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  Globe,
  Users,
  Megaphone,
  Target,
  Search,
  Sparkles,
  MapPin,
  Mail,
  TrendingUp,
  Palette,
  Code2,
  Database,
  Smartphone,
  Server,
  ShoppingCart,
  Bot,
  Layers,
  ArrowRight,
  Menu,
  X,
  Zap,
  FileText,
  Heart,
  Feather,
  Package,
  Crown
} from 'lucide-react'

const marketingServices = [
  { icon: Globe, name: 'Website Design', description: 'Conversion-focused websites', path: '/marketing/website-design' },
  { icon: Users, name: 'CRM Solutions', description: 'Customer relationship management', path: '/marketing/crm-solutions' },
  { icon: Megaphone, name: 'Social Media Marketing', description: 'Build your brand presence', path: '/marketing/social-media-marketing' },
  { icon: Target, name: 'Paid Advertising', description: 'Google & Meta Ads', path: '/marketing/paid-advertising' },
  { icon: Search, name: 'SEO Services', description: 'Dominate search rankings', path: '/marketing/seo-services' },
  { icon: Sparkles, name: 'AI SEO', description: 'AI-powered optimization', path: '/marketing/ai-seo' },
  { icon: MapPin, name: 'Local SEO', description: 'Get found locally', path: '/marketing/local-seo' },
  { icon: Mail, name: 'Email Marketing', description: 'Nurture leads effectively', path: '/marketing/email-marketing' },
  { icon: TrendingUp, name: 'Conversion Optimization', description: 'Turn visitors into customers', path: '/marketing/conversion-optimization' },
  { icon: Palette, name: 'Brand Strategy', description: 'Build powerful brand identity', path: '/marketing/brand-strategy' },
]

const developmentServices = [
  { icon: Code2, name: 'React Development', description: 'Modern web applications', path: '/development/react' },
  { icon: Server, name: 'PHP Development', description: 'Laravel, WordPress & more', path: '/development/php' },
  { icon: Database, name: 'Java Development', description: 'Enterprise solutions', path: '/development/java' },
  { icon: Smartphone, name: 'Mobile App Development', description: 'iOS & Android apps', path: '/development/mobile-apps' },
  { icon: ShoppingCart, name: 'E-Commerce Solutions', description: 'Online stores & payments', path: '/development/ecommerce' },
  { icon: Bot, name: 'AI & Automation', description: 'Intelligent solutions', path: '/development/ai-automation' },
  { icon: Layers, name: 'Full-Stack Development', description: 'End-to-end development', path: '/development/full-stack' },
  { icon: Globe, name: 'Web Applications', description: 'Custom SaaS & portals', path: '/development/web-applications' },
]

const products = [
  { icon: FileText, name: 'Auto Form Builder', description: 'Create forms effortlessly', path: '/products/auto-form-builder' },
  { icon: Users, name: 'Auto Form CRM', description: 'Manage leads automatically', path: '/products/auto-form-crm' },
  { icon: Heart, name: 'Hi.Fan', description: 'Fan engagement platform', path: '/products/hi-fan' },
  { icon: Feather, name: 'PinkPeck', description: 'Content creation tool', path: '/products/pinkpeck' },
  { icon: Package, name: 'Unbox.deal', description: 'Unboxing deals at 50% off', path: '/products/unbox-deal' },
  { icon: Crown, name: 'Royal Casino Hub', description: 'Casino reviews & industry news', path: '/products/royal-casino-hub' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              {/* Logo placeholder */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl font-bold text-slate-900">Amora</span>
                <span className="font-display text-xl font-bold gradient-text">Digital</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Marketing Solutions */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('marketing')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/marketing" className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
                Marketing Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'marketing' ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Mega Menu */}
              {activeDropdown === 'marketing' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-[600px] animate-fade-in">
                    <Link to="/marketing" className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-100 hover:opacity-80 transition-opacity">
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Marketing Solutions</h3>
                        <p className="text-xs text-slate-500">Grow your business online</p>
                      </div>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      {marketingServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900 group-hover:text-primary-600 transition-colors">{service.name}</div>
                            <div className="text-xs text-slate-500">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Development Services */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('development')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/development" className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
                Development Services
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'development' ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Mega Menu */}
              {activeDropdown === 'development' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-[550px] animate-fade-in">
                    <Link to="/development" className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-100 hover:opacity-80 transition-opacity">
                      <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-accent-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Development Services</h3>
                        <p className="text-xs text-slate-500">Custom software solutions</p>
                      </div>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      {developmentServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900 group-hover:text-accent-600 transition-colors">{service.name}</div>
                            <div className="text-xs text-slate-500">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-72 animate-fade-in">
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
                      <div className="w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-secondary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Our Products</h3>
                        <p className="text-xs text-slate-500">Ready-to-use solutions</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          to={product.path}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <product.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900 group-hover:text-secondary-600 transition-colors">{product.name}</div>
                            <div className="text-xs text-slate-500">{product.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full hover:from-primary-700 hover:to-secondary-600 transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100 animate-fade-in">
            {/* Marketing Solutions */}
            <div className="mb-2">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'marketing-mobile' ? null : 'marketing-mobile')}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Marketing Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'marketing-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'marketing-mobile' && (
                <div className="ml-4 mt-2 space-y-1">
                  {marketingServices.map((service) => (
                    <Link key={service.name} to={service.path} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      <service.icon className="w-4 h-4" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Development Services */}
            <div className="mb-2">
              <div className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg">
                <Link to="/development" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-600">
                  Development Services
                </Link>
                <button onClick={() => setActiveDropdown(activeDropdown === 'development-mobile' ? null : 'development-mobile')}>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'development-mobile' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {activeDropdown === 'development-mobile' && (
                <div className="ml-4 mt-2 space-y-1">
                  {developmentServices.map((service) => (
                    <Link key={service.name} to={service.path} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-accent-600 hover:bg-slate-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      <service.icon className="w-4 h-4" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products */}
            <div className="mb-4">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'products-mobile' ? null : 'products-mobile')}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'products-mobile' && (
                <div className="ml-4 mt-2 space-y-1">
                  {products.map((product) => (
                    <Link key={product.name} to={product.path} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-secondary-600 hover:bg-slate-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      <product.icon className="w-4 h-4" />
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="px-4 pt-4 border-t border-slate-100">
              <Link 
                to="/contact" 
                className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
