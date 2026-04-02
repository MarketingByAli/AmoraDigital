import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-slate-200/50">
      <div 
        className="h-full bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 transition-all duration-150 ease-out shadow-sm shadow-primary-500/50"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
