import { Link } from 'react-router-dom'
import {
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
  Phone,
  MapPinned,
  ArrowRight,
  Heart
} from 'lucide-react'

const marketingServices = [
  { name: 'Website Design', path: '/marketing/website-design', icon: Globe },
  { name: 'CRM Solutions', path: '/marketing/crm-solutions', icon: Users },
  { name: 'Social Media Marketing', path: '/marketing/social-media-marketing', icon: Megaphone },
  { name: 'Paid Advertising', path: '/marketing/paid-advertising', icon: Target },
  { name: 'SEO Services', path: '/marketing/seo-services', icon: Search },
  { name: 'AI SEO', path: '/marketing/ai-seo', icon: Sparkles },
  { name: 'Local SEO', path: '/marketing/local-seo', icon: MapPin },
  { name: 'Email Marketing', path: '/marketing/email-marketing', icon: Mail },
  { name: 'Conversion Optimization', path: '/marketing/conversion-optimization', icon: TrendingUp },
  { name: 'Brand Strategy', path: '/marketing/brand-strategy', icon: Palette },
]

const developmentServices = [
  { name: 'React Development', path: '/development/react', icon: Code2 },
  { name: 'PHP Development', path: '/development/php', icon: Server },
  { name: 'Java Development', path: '/development/java', icon: Database },
  { name: 'Mobile App Development', path: '/development/mobile-apps', icon: Smartphone },
  { name: 'E-Commerce Solutions', path: '/development/ecommerce', icon: ShoppingCart },
  { name: 'AI & Automation', path: '/development/ai-automation', icon: Bot },
  { name: 'Full-Stack Development', path: '/development/full-stack', icon: Layers },
  { name: 'Web Applications', path: '/development/web-applications', icon: Globe },
]

const products = [
  { name: 'Auto Form Builder', path: '/products/auto-form-builder' },
  { name: 'Auto Form CRM', path: '/products/auto-form-crm' },
  { name: 'Hi.Fan', path: '/products/hi-fan' },
  { name: 'PinkPeck', path: '/products/pinkpeck' },
  { name: 'Unbox.deal', path: '/products/unbox-deal' },
  { name: 'Royal Casino Hub', path: '/products/royal-casino-hub' },
]

const companyLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">Amora</span>
                <span className="font-display text-xl font-bold gradient-text">Digital</span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Your trusted partner in digital marketing and custom development. We transform ideas into digital success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+31625580415" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+31 6 25580415</span>
              </a>
              <a href="mailto:info@amoradigital.nl" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@amoradigital.nl</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <MapPinned className="w-4 h-4" />
                </div>
                <span className="text-sm">KVK: 99536811</span>
              </div>
            </div>
          </div>

          {/* Marketing Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Marketing Solutions
            </h3>
            <ul className="space-y-2.5">
              {marketingServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <service.icon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Development Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              Development Services
            </h3>
            <ul className="space-y-2.5">
              {developmentServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors flex items-center gap-2 group"
                  >
                    <service.icon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
              Products
            </h3>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.name}>
                  <Link 
                    to={product.path}
                    className="text-sm text-slate-400 hover:text-secondary-400 transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Company Links */}
            <h3 className="font-semibold text-white mb-4 mt-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
              Let's Work Together
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Ready to grow your business? Get in touch for a free consultation.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full hover:from-primary-700 hover:to-secondary-600 transition-all shadow-lg shadow-primary-500/25 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            
            {/* Social proof */}
            <div className="mt-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-primary-500 border-2 border-slate-900" />
                  <div className="w-6 h-6 rounded-full bg-secondary-500 border-2 border-slate-900" />
                  <div className="w-6 h-6 rounded-full bg-accent-500 border-2 border-slate-900" />
                </div>
                <span className="text-xs text-slate-400">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-slate-400 ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} Amora Digital. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-700">|</span>
              <p className="text-sm text-slate-500 flex items-center gap-1">
                Made with <Heart className="w-3.5 h-3.5 text-secondary-500 fill-current" /> in Netherlands
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
