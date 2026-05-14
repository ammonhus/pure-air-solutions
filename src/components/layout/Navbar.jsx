import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'The Science', to: '/science' },
  { label: 'Residential', to: '/residential' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isLight = location.pathname === '/' && !scrolled

  return (
    <>
      <motion.header
        initial={false}
        animate={scrolled
          ? { backgroundColor: 'rgba(255,255,255,0.97)', boxShadow: '0 2px 20px rgba(27,79,138,0.1)' }
          : isLight
            ? { backgroundColor: 'rgba(14,45,80,0)', boxShadow: '0 0 0 rgba(0,0,0,0)' }
            : { backgroundColor: 'rgba(255,255,255,0.97)', boxShadow: '0 2px 20px rgba(27,79,138,0.08)' }
        }
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      >
        <div className="container-pad">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                scrolled || !isLight ? 'bg-navy-700' : 'bg-white/20'
              }`}>
                <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                  <circle cx="16" cy="16" r="6" fill="white" opacity="0.9"/>
                  <circle cx="16" cy="6" r="2.5" fill="white" opacity="0.6"/>
                  <circle cx="16" cy="26" r="2.5" fill="white" opacity="0.6"/>
                  <circle cx="6" cy="16" r="2.5" fill="white" opacity="0.6"/>
                  <circle cx="26" cy="16" r="2.5" fill="white" opacity="0.6"/>
                  <line x1="16" y1="10" x2="16" y2="12" stroke="white" strokeWidth="1.5" opacity="0.4"/>
                  <line x1="16" y1="20" x2="16" y2="22" stroke="white" strokeWidth="1.5" opacity="0.4"/>
                  <line x1="10" y1="16" x2="12" y2="16" stroke="white" strokeWidth="1.5" opacity="0.4"/>
                  <line x1="20" y1="16" x2="22" y2="16" stroke="white" strokeWidth="1.5" opacity="0.4"/>
                </svg>
              </div>
              <div>
                <span className={`font-serif font-bold text-lg leading-none block transition-colors duration-300 ${
                  scrolled || !isLight ? 'text-navy-700' : 'text-white'
                }`}>
                  Pure Air
                </span>
                <span className={`text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
                  scrolled || !isLight ? 'text-green-500' : 'text-green-300'
                }`}>
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? scrolled || !isLight
                          ? 'bg-navy-700/10 text-navy-700'
                          : 'bg-white/15 text-white'
                        : scrolled || !isLight
                          ? 'text-gray-600 hover:text-navy-700 hover:bg-navy-700/5'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/assessment"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Free Assessment
              </Link>

              <button
                onClick={() => setMenuOpen(v => !v)}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                  scrolled || !isLight
                    ? 'text-navy-700 hover:bg-navy-700/10'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                <motion.svg
                  animate={menuOpen ? 'open' : 'closed'}
                  className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    variants={{
                      closed: { d: 'M4 6h16M4 12h16M4 18h16' },
                      open: { d: 'M6 18L18 6M6 6l12 12' },
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="font-serif font-bold text-navy-700 text-lg">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-navy-700 hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-3.5 rounded-xl mb-1 font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-navy-700/10 text-navy-700'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-navy-700'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-100">
                <Link
                  to="/assessment"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                >
                  Free Air Quality Assessment
                </Link>
                <a href="tel:+14805550100" className="flex items-center justify-center gap-2 mt-3 px-5 py-3 border border-navy-700/20 text-navy-700 font-medium rounded-xl hover:bg-navy-700/5 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (480) 555-0100
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
