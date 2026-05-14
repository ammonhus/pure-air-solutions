import { motion } from 'framer-motion'
import ScrollReveal from '../shared/ScrollReveal'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <rect x="8" y="18" width="40" height="24" rx="4" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
        <rect x="14" y="24" width="12" height="8" rx="2" fill="white" fillOpacity="0.5"/>
        <path d="M34 28 H44" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 24 H40" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
        <path d="M34 32 H42" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
        <path d="M28 12 V18 M28 42 V48" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
    title: 'Professional HVAC Installation',
    body: 'Our certified technician mounts the Air Scrubber unit directly into your existing ductwork — no major renovation needed. Installation takes 1–2 hours.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <circle cx="28" cy="28" r="14" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
        <path d="M22 28 L28 22 L34 28 L28 34 Z" fill="white" fillOpacity="0.8"/>
        {[0,60,120,180,240,300].map((deg,i)=>{
          const r=(deg*Math.PI)/180; const x=28+20*Math.cos(r); const y=28+20*Math.sin(r)
          return <circle key={i} cx={x} cy={y} r="3" fill="white" fillOpacity="0.5"/>
        })}
      </svg>
    ),
    title: 'UV-C & ActivePure® Activation',
    body: 'When your HVAC runs, the Air Scrubber\'s UV-C light and ActivePure® catalytic cells generate powerful Hydroxyl Radicals and Superoxide Ions.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <circle cx="28" cy="28" r="6" fill="white" fillOpacity="0.9"/>
        {[12,18,24].map((r,i)=>(
          <circle key={i} cx="28" cy="28" r={r} fill="none" stroke="white" strokeWidth="1" strokeOpacity={0.5-i*0.12} strokeDasharray="3 2"/>
        ))}
        {['↗','→','↘','↓','↙','←','↖','↑'].map((_, i) => {
          const deg = i * 45; const rad = (deg * Math.PI) / 180
          const x = 28 + 26 * Math.cos(rad); const y = 28 + 26 * Math.sin(rad)
          return <circle key={i} cx={x} cy={y} r="2.5" fill="white" fillOpacity="0.6"/>
        })}
      </svg>
    ),
    title: 'Active Molecule Distribution',
    body: 'Unlike passive filters that wait for air to pass through, ActivePure® sends scrubbing molecules out through your vents into every room — proactive purification.',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <path d="M14 28 C14 20.3 20.3 14 28 14 C35.7 14 42 20.3 42 28 C42 35.7 35.7 42 28 42 C20.3 42 14 35.7 14 28Z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
        <path d="M21 28 L26 33 L35 23" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 8 V14 M28 42 V48 M8 28 H14 M42 28 H48" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
    title: '24/7 Continuous Protection',
    body: 'Your home stays protected around the clock. The Air Scrubber works silently whenever your HVAC system operates, with no ongoing maintenance required.',
  },
]

export default function HowItWorks() {
  const { ref: lineRef, inView: lineInView } = useScrollReveal({ threshold: 0.3 })

  return (
    <section className="section-pad bg-navy-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-navy-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-pad relative z-10">
        <ScrollReveal variant="fadeUp" className="text-center mb-16">
          <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            How Air Scrubber Works
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From installation to continuous protection — here's exactly what happens when we upgrade your HVAC system.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative" ref={lineRef}>
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-white/10" />
          <motion.div
            className="hidden lg:block absolute top-16 left-0 h-px bg-gradient-to-r from-green-400/60 to-green-300/20"
            initial={{ width: '0%' }}
            animate={lineInView ? { width: '100%' } : { width: '0%' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} variant="fadeUp" delay={i * 0.12}>
                <div className="glass-card p-6 h-full group hover:bg-white/10 transition-colors duration-300 cursor-default">
                  {/* Number + Icon */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-navy-600 border border-white/15 flex items-center justify-center group-hover:border-green-400/30 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{i + 1}</span>
                      </div>
                    </div>
                    <span className="text-white/20 font-serif font-bold text-4xl leading-none mt-1">{step.num}</span>
                  </div>

                  <h3 className="font-serif font-semibold text-white text-lg mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {step.body}
                  </p>

                  {/* Active indicator */}
                  <div className="mt-5 flex items-center gap-2">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-green-400"
                      animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                    <span className="text-green-400/70 text-xs font-medium">Active</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal variant="fadeUp" delay={0.4} className="text-center mt-14">
          <p className="text-white/60 mb-4">Ready to see it in action?</p>
          <a href="/how-it-works" className="btn-ghost">
            Full Walkthrough →
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
