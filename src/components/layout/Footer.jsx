import { Link } from 'react-router-dom'
import { Building2, Rocket, FlaskConical, CheckCircle2 } from 'lucide-react'

const serviceAreas = [
  'Mesa', 'Chandler', 'Gilbert', 'Tempe',
  'Scottsdale', 'Phoenix', 'Queen Creek', 'Ahwatukee',
  'Fountain Hills', 'Apache Junction',
]

const quickLinks = [
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'The Science', to: '/science' },
  { label: 'Residential', to: '/residential' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Free Assessment', to: '/assessment' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="container-pad py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-navy-700 flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                  <circle cx="16" cy="16" r="6" fill="white" opacity="0.9"/>
                  <circle cx="16" cy="6" r="2.5" fill="white" opacity="0.6"/>
                  <circle cx="16" cy="26" r="2.5" fill="white" opacity="0.6"/>
                  <circle cx="6" cy="16" r="2.5" fill="white" opacity="0.6"/>
                  <circle cx="26" cy="16" r="2.5" fill="white" opacity="0.6"/>
                </svg>
              </div>
              <div>
                <span className="font-serif font-bold text-lg leading-none block text-white">Pure Air Solutions</span>
                <span className="text-xs font-medium tracking-wider uppercase text-green-400">Mesa, Arizona</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Authorized dealer of Air Scrubber by ActivePure® technology. Serving Mesa and the greater Phoenix Valley since 2022.
            </p>
            <div className="space-y-2">
              <a href="tel:+14805550100" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors group">
                <svg className="w-4 h-4 text-green-400 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (480) 555-0100
              </a>
              <a href="mailto:hello@pureairsolutionsaz.com" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors group">
                <svg className="w-4 h-4 text-green-400 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@pureairsolutionsaz.com
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mesa, AZ 85201
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {serviceAreas.map(city => (
                <li key={city} className="text-white/60 text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>
                  {city}
                </li>
              ))}
            </ul>
            <p className="text-white/40 text-xs mt-4">& surrounding East Valley communities</p>
          </div>

          {/* Trust + CTA */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5">Certified & Trusted</h4>
            <div className="space-y-3 mb-6">
              {[
                { icon: <Building2 className="w-4 h-4 text-blue-300" />, label: 'FDA Class II Cleared' },
                { icon: <Rocket className="w-4 h-4 text-purple-300" />, label: 'NASA-Origin Technology' },
                { icon: <FlaskConical className="w-4 h-4 text-green-300" />, label: 'Peer-Reviewed Science' },
                { icon: <CheckCircle2 className="w-4 h-4 text-green-300" />, label: 'ActivePure® Authorized Dealer' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-white/70 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              Get Free Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-pad py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Pure Air Solutions LLC. All rights reserved. Mesa, Arizona.
          </p>
          <p className="text-white/40 text-xs">
            Air Scrubber by ActivePure® is a registered trademark of ActivePure Technologies, LLC.
          </p>
        </div>
      </div>
    </footer>
  )
}
