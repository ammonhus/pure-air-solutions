import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HandshakeIcon, FlaskConical, MapPin, ShieldCheck } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import ScrollReveal from '../components/shared/ScrollReveal'

const serviceAreas = [
  'Mesa', 'Chandler', 'Gilbert', 'Tempe',
  'Scottsdale', 'Phoenix', 'Queen Creek', 'Ahwatukee',
  'Fountain Hills', 'Apache Junction', 'Sun Lakes', 'Gold Canyon',
]

const values = [
  { icon: <HandshakeIcon className="w-8 h-8 text-navy-600" />, title: 'Honest Recommendations', body: 'We only recommend the Air Scrubber when we genuinely believe it will improve your air quality. Our free assessments sometimes result in "you\'re already doing great" — and that\'s fine with us.' },
  { icon: <FlaskConical className="w-8 h-8 text-navy-600" />, title: 'Science, Not Sales', body: 'We invest in educating customers about the peer-reviewed research and lab data behind ActivePure® technology. You should understand exactly what you\'re buying and why.' },
  { icon: <MapPin className="w-8 h-8 text-navy-600" />, title: 'Real Local Business', body: 'We\'re not a franchise. Not a national call center. We\'re Mesa residents serving our own community. When you call, you talk to someone who knows your neighborhood.' },
  { icon: <ShieldCheck className="w-8 h-8 text-navy-600" />, title: 'Warranty That Means Something', body: 'We back every installation with a 1-year labor warranty. If something isn\'t right, we come back and fix it — no runaround, no service tickets.' },
]

const milestones = [
  { year: '2022', event: 'Pure Air Solutions founded in Mesa, AZ' },
  { year: '2022', event: 'First 50 residential installations in East Mesa' },
  { year: '2023', event: 'Expanded to commercial clients — first dental practice & restaurant' },
  { year: '2023', event: 'Certified by ActivePure Technologies as authorized dealer' },
  { year: '2024', event: 'Reached 200+ installations across the Phoenix Valley' },
  { year: '2024', event: 'Expanded service area to include West Phoenix & Scottsdale' },
]

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Pure Air Solutions — Mesa, Arizona"
        description="Pure Air Solutions is a locally-owned authorized Air Scrubber by ActivePure dealer serving Mesa and the Phoenix Valley since 2022. Real people, real science, real results."
        canonical="/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream-100">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-navy-700/10 text-navy-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">About Us</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-700 mb-5 leading-tight">
                Mesa Locals on a Mission<br/>for Cleaner Air
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Pure Air Solutions was founded in 2022 by Mesa residents who were frustrated by the disconnect between the clean air technology available to hospitals and what was available to Arizona homeowners.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We're not a national franchise or a faceless online retailer. We're your neighbors — and we believe every Arizona family deserves access to the same air quality protection used in hospitals and NASA facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/assessment" className="btn-primary">Get Free Assessment</Link>
                <Link to="/contact" className="btn-secondary">Contact Us</Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Team photo placeholder */}
              <div className="bg-navy-700 rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-900" />
                <div className="relative z-10 text-center">
                  <div className="text-8xl mb-4">👥</div>
                  <p className="text-white/70 font-medium">Team Photo</p>
                  <p className="text-white/40 text-sm">Pure Air Solutions Team · Mesa, AZ</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 bg-navy-900/50 backdrop-blur-sm p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold text-sm">Authorized ActivePure® Dealer</div>
                      <div className="text-white/50 text-xs">Certified since 2022</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="fadeUp" className="text-center mb-10">
              <h2 className="section-heading mb-4">Why We Started Pure Air Solutions</h2>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-5">
                <p>
                  When our founder's daughter was diagnosed with severe asthma, the family started researching everything they could about indoor air quality in Arizona. What they found was alarming: sealed HVAC systems, monsoon mold, wildfire smoke, and desert allergens were creating indoor air up to 5 times more polluted than outdoor air.
                </p>
                <p>
                  After discovering ActivePure® technology and seeing the peer-reviewed research behind it, the decision was made to bring this hospital-grade air purification to Arizona homeowners — not as a luxury, but as an accessible health solution for every family.
                </p>
                <p>
                  What started as installing systems for family and neighbors has grown into a full-service company serving hundreds of homes and businesses across the Phoenix Valley. But our approach hasn't changed: honest assessments, science-backed recommendations, and work we're genuinely proud of.
                </p>
                <p>
                  We're not trying to be the biggest air quality company in Arizona. We're trying to be the most trusted one in Mesa.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-cream-100">
        <div className="container-pad">
          <ScrollReveal variant="fadeUp" className="text-center mb-12">
            <h2 className="section-heading mb-4">What We Stand For</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} variant="fadeUp" delay={i * 0.1}>
                <div className="card p-7 h-full">
                  <div className="mb-4">{v.icon}</div>
                  <h3 className="font-serif font-bold text-navy-800 text-xl mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container-pad relative z-10">
          <ScrollReveal variant="fadeUp" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Journey</h2>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <ScrollReveal key={i} variant="fadeLeft" delay={i * 0.08}>
                <div className="flex items-start gap-5 mb-6 last:mb-0">
                  <div className="flex-shrink-0 text-right w-12">
                    <span className="text-green-300 font-mono text-sm font-bold">{m.year}</span>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-4 h-4 rounded-full bg-green-400 border-2 border-green-300 z-10 relative" />
                    {i < milestones.length - 1 && (
                      <div className="absolute top-4 left-1.5 w-px h-full bg-white/10" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-white/85 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <ScrollReveal variant="fadeUp" className="text-center mb-10">
            <h2 className="section-heading mb-4">Our Service Area</h2>
            <p className="section-subheading mx-auto">We serve Mesa and the entire Phoenix Valley — same-week appointments available for most locations.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {serviceAreas.map((city, i) => (
              <ScrollReveal key={city} variant="scaleUp" delay={i * 0.04}>
                <div className="bg-navy-700/8 border border-navy-700/15 rounded-xl px-4 py-3 text-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mx-auto mb-2" />
                  <span className="text-navy-700 font-medium text-sm">{city}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal variant="fadeUp" delay={0.3} className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-4">Not on the list? We likely serve your area. Call us to confirm.</p>
            <Link to="/contact" className="btn-secondary">Check Your Area</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
