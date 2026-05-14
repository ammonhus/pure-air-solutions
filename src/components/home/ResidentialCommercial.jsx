import { Link } from 'react-router-dom'
import ScrollReveal from '../shared/ScrollReveal'

export default function ResidentialCommercial() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <ScrollReveal variant="fadeUp" className="text-center mb-14">
          <span className="inline-block bg-navy-700/10 text-navy-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Who We Serve
          </span>
          <h2 className="section-heading mb-4">Residential & Commercial Solutions</h2>
          <p className="section-subheading mx-auto">
            One technology, two tailored approaches — whether you're protecting your family or your customers.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Residential */}
          <ScrollReveal variant="fadeLeft">
            <div className="group relative overflow-hidden rounded-3xl bg-navy-700 h-full min-h-[480px] flex flex-col justify-end p-8">
              {/* BG illustration */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900" />
                <svg className="absolute top-6 right-6 w-48 h-48 opacity-10 group-hover:opacity-15 transition-opacity" viewBox="0 0 200 200" fill="none">
                  <path d="M100 20 L180 80 L180 180 L20 180 L20 80 Z" fill="white"/>
                  <rect x="80" y="120" width="40" height="60" fill="#1B4F8A"/>
                  <rect x="30" y="90" width="50" height="70" fill="#1B4F8A" opacity="0.5"/>
                  <rect x="120" y="90" width="50" height="70" fill="#1B4F8A" opacity="0.5"/>
                </svg>
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-white/20 animate-float"
                    style={{
                      top: `${15 + i * 10}%`,
                      left: `${10 + i * 11}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${4 + i * 0.5}s`,
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full mb-4">Residential</div>
                <h3 className="font-serif font-bold text-white text-3xl mb-3 leading-tight">
                  Protect Your Family<br/>Year-Round
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Arizona families face unique air quality challenges — monsoon mold, wildfire smoke, desert allergens, and dust storms. Our residential systems provide continuous 24/7 protection for your home.
                </p>
                <ul className="space-y-2 mb-7">
                  {['Whole-home HVAC integration', 'Eliminates pet dander & odors', 'Protects children & allergy sufferers', 'Works with all HVAC brands'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-white/80 text-sm">
                      <div className="w-5 h-5 rounded-full bg-green-500/30 border border-green-400/50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-green-300" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/residential"
                  className="inline-flex items-center gap-2 bg-white text-navy-700 font-bold px-6 py-3 rounded-xl hover:bg-cream-100 transition-colors shadow-lg"
                >
                  Residential Solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Commercial */}
          <ScrollReveal variant="fadeRight">
            <div className="group relative overflow-hidden rounded-3xl bg-green-600 h-full min-h-[480px] flex flex-col justify-end p-8">
              {/* BG illustration */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-800" />
                <svg className="absolute top-6 right-6 w-48 h-48 opacity-10 group-hover:opacity-15 transition-opacity" viewBox="0 0 200 200" fill="none">
                  <rect x="20" y="40" width="160" height="140" fill="white" rx="4"/>
                  <rect x="30" y="50" width="30" height="40" fill="#4A7C59"/>
                  <rect x="70" y="50" width="30" height="40" fill="#4A7C59" opacity="0.7"/>
                  <rect x="110" y="50" width="30" height="40" fill="#4A7C59" opacity="0.5"/>
                  <rect x="150" y="50" width="20" height="40" fill="#4A7C59" opacity="0.4"/>
                </svg>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-white/20 animate-float"
                    style={{
                      top: `${15 + i * 10}%`,
                      left: `${10 + i * 11}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${5 + i * 0.5}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="inline-block bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full mb-4">Commercial</div>
                <h3 className="font-serif font-bold text-white text-3xl mb-3 leading-tight">
                  Protect Your Customers<br/>& Your Reputation
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Offices, restaurants, medical facilities, and retail spaces trust Pure Air Solutions to create healthier environments. Reduce employee sick days and show customers you care.
                </p>
                <ul className="space-y-2 mb-7">
                  {['Scalable for any square footage', 'Reduces employee sick days', 'Restaurant & food service certified', 'Medical offices & dental practices'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-white/80 text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/commercial"
                  className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-cream-100 transition-colors shadow-lg"
                >
                  Commercial Solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
