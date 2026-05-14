import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Microscope, Thermometer, Droplets } from 'lucide-react'
import ScrollReveal from '../shared/ScrollReveal'

export default function AssessmentCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/5"
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container-pad relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal variant="fadeUp">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-sm font-medium">Limited Slots — Book This Week</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-5 leading-tight">
              Find Out What's Really<br/>
              <em className="not-italic text-green-200">Floating in Your Air</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              Our certified technician visits your home, measures particle counts, VOC levels, and humidity — then gives you a complete picture of your indoor air quality. <strong className="text-white">100% free. No obligation.</strong>
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scaleUp" delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: <Microscope className="w-7 h-7 text-white/80" />, label: 'Particle Count Test', sub: 'PM2.5 & PM10 levels' },
                { icon: <Thermometer className="w-7 h-7 text-white/80" />, label: 'VOC Measurement', sub: 'Chemical pollutants' },
                { icon: <Droplets className="w-7 h-7 text-white/80" />, label: 'Humidity Analysis', sub: 'Mold risk assessment' },
              ].map(item => (
                <div key={item.label} className="bg-white/10 border border-white/15 rounded-2xl px-4 py-4 text-center">
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <div className="text-white font-semibold text-sm">{item.label}</div>
                  <div className="text-white/60 text-xs mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/assessment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-xl hover:bg-cream-100 transition-all duration-200 shadow-xl hover:-translate-y-0.5"
              >
                Schedule Free Assessment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href="tel:+14805550100" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Or call (480) 555-0100
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
