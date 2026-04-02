import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
      <div className="text-center max-w-lg">
        <p className="text-6xl sm:text-7xl font-display font-bold gradient-text mb-4">404</p>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Page not found</h1>
        <p className="text-slate-600 mb-8">
          The page you are looking for does not exist or has been moved. Check the URL or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full hover:from-primary-700 hover:to-secondary-600 transition-all shadow-lg shadow-primary-500/25"
          >
            <Home className="w-5 h-5" />
            Back to home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
