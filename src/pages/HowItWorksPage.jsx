import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '../components/shared/SEOHead'
import ScrollReveal from '../components/shared/ScrollReveal'

const phases = [
  {
    num: '01',
    color: 'bg-navy-700',
    title: 'Free Air Quality Assessment',
    time: 'Day 0 — Before We Install Anything',
    icon: '🔬',
    steps: [
      'Our certified technician visits your home or business at no charge.',
      'We measure particulate matter (PM2.5 & PM10), VOC levels, and humidity.',
      'We inspect your existing HVAC system for compatibility.',
      'You receive a written report showing exactly what\'s in your air.',
      'We provide an honest recommendation — only if the Air Scrubber is right for your situation.',
    ],
  },
  {
    num: '02',
    color: 'bg-green-600',
    title: 'Professional Installation',
    time: 'Day 1 — Takes 1–2 Hours',
    icon: '🔧',
    steps: [
      'Our tech mounts the Air Scrubber unit inside your ductwork near the air handler.',
      'The unit is wired to your system\'s power supply — no separate outlet needed.',
      'UV-C lamp is installed and tested — it glows blue when active.',
      'We run a full system test to confirm proper airflow and function.',
      'You get a walkthrough of the unit, the warranty, and what to expect.',
    ],
  },
  {
    num: '03',
    color: 'bg-navy-500',
    title: 'ActivePure® Goes to Work',
    time: 'Immediately — Every Time Your HVAC Runs',
    icon: '⚡',
    steps: [
      'When your HVAC fan activates, the Air Scrubber\'s UV-C light energizes the catalytic process.',
      'ActivePure® molecules — Hydroxyl Radicals and Superoxide Ions — are generated.',
      'These molecules travel out through your vents into every room of your home.',
      'They attach to and neutralize viruses, bacteria, mold spores, and VOCs on contact.',
      'Odor molecules are broken down at a molecular level — not masked.',
    ],
  },
  {
    num: '04',
    color: 'bg-green-500',
    title: '24/7 Continuous Protection',
    time: 'Every Day — Silent & Automatic',
    icon: '🛡️',
    steps: [
      'No filters to change. No cartridges to buy. No apps to manage.',
      'The Air Scrubber works automatically whenever your HVAC fan runs.',
      'Particle counts in your home drop within days of installation.',
      'Allergen levels continue declining over the first 2–4 weeks.',
      'UV lamp replacement recommended every 2 years — a quick service call.',
    ],
  },
]

const techPoints = [
  {
    title: 'Hydroxyl Radicals',
    body: 'The same powerful oxidant found in Earth\'s upper atmosphere. Hydroxyl Radicals (·OH) react with and break apart the protein chains of viruses and bacteria, rendering them inert.',
    icon: '🌿',
  },
  {
    title: 'Superoxide Ions',
    body: 'Generated alongside Hydroxyl Radicals, Superoxide Ions (O₂⁻) disrupt the cellular membranes of pathogens and attack VOC molecules in the air and on surfaces.',
    icon: '⚡',
  },
  {
    title: 'UV-C Photocatalysis',
    body: 'The UV-C lamp energizes a titanium dioxide catalytic plate coated with ActivePure\'s proprietary formula — initiating the continuous generation of scrubbing molecules.',
    icon: '☀️',
  },
  {
    title: 'Proactive Distribution',
    body: 'Unlike passive HEPA filters that wait for air to pass through them, ActivePure molecules travel outward through your ducts — actively seeking contaminants in every room.',
    icon: '🌀',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <SEOHead
        title="How Air Scrubber by ActivePure Works"
        description="See exactly how the Air Scrubber by ActivePure works — from free air quality assessment to 24/7 continuous purification. NASA-origin technology explained simply."
        canonical="/how-it-works"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">How It Works</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5 leading-tight">
              From Assessment<br/>to Cleaner Air in One Day
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              A simple, non-invasive process that upgrades your existing HVAC into a whole-home air purification system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-pad bg-cream-100">
        <div className="container-pad">
          <ScrollReveal variant="fadeUp" className="text-center mb-14">
            <h2 className="section-heading mb-4">Your Path to Pure Air</h2>
            <p className="section-subheading mx-auto">Four phases — from your first call to ongoing protection.</p>
          </ScrollReveal>

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.num} variant="fadeUp" delay={i * 0.1}>
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    {/* Number Panel */}
                    <div className={`${phase.color} p-8 flex flex-col items-center justify-center text-center`}>
                      <div className="text-6xl mb-3">{phase.icon}</div>
                      <div className="text-white/40 font-serif text-5xl font-bold leading-none">{phase.num}</div>
                      <div className="text-white font-serif font-bold text-xl mt-2 leading-snug">{phase.title}</div>
                      <div className="text-white/60 text-xs mt-2 font-medium">{phase.time}</div>
                    </div>
                    {/* Steps */}
                    <div className="md:col-span-3 p-8">
                      <ul className="space-y-3">
                        {phase.steps.map((step, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                              {j + 1}
                            </div>
                            <span className="text-gray-700 leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Technology */}
      <section className="section-pad bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container-pad relative z-10">
          <ScrollReveal variant="fadeUp" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">The Science Behind the Magic</h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto">
              ActivePure® technology mimics how nature cleans outdoor air — and brings that process inside your home.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techPoints.map((t, i) => (
              <ScrollReveal key={t.title} variant="fadeUp" delay={i * 0.1}>
                <div className="glass-card p-6 border border-white/10 h-full">
                  <div className="text-4xl mb-4">{t.icon}</div>
                  <h3 className="font-serif font-bold text-white text-xl mb-2">{t.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{t.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-green-600">
        <div className="container-pad text-center">
          <ScrollReveal variant="scaleUp">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Schedule your free air quality assessment today. We'll tell you exactly what's in your air — no pressure, no obligation.
            </p>
            <Link to="/assessment" className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-cream-100 transition-colors shadow-xl text-lg">
              Schedule Free Assessment →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
