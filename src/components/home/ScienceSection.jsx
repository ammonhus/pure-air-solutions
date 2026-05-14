import { Link } from 'react-router-dom'
import { Rocket, Building2 } from 'lucide-react'
import ScrollReveal from '../shared/ScrollReveal'
import AnimatedCounter from '../shared/AnimatedCounter'

const studies = [
  {
    journal: 'AJIC',
    fullName: 'American Journal of Infection Control',
    badge: 'Healthcare Study',
    title: 'Reduction of Healthcare-Associated Infections in Hospital Settings',
    finding: '60.9% reduction in hospital-acquired infections after Air Scrubber installation.',
    url: 'https://www.ajicjournal.org',
    color: 'border-navy-400/30',
  },
  {
    journal: 'AJIC',
    fullName: 'American Journal of Infection Control',
    badge: 'COVID-19 Study',
    title: 'Efficacy Against COVID-19, RSV, and Monkeypox Viruses',
    finding: '>99.9% reduction of airborne COVID-19 surrogate virus achieved in laboratory testing.',
    url: 'https://www.ajicjournal.org',
    color: 'border-green-400/30',
  },
  {
    journal: 'PLOS ONE',
    fullName: 'Public Library of Science ONE',
    badge: 'Safety Study',
    title: 'Safety Profile Confirmed — Peer-Reviewed Mammalian Study',
    finding: 'No adverse effects observed in mammals exposed to ActivePure® technology over extended periods.',
    url: 'https://journals.plos.org',
    color: 'border-cream-300/40',
  },
]

const stats = [
  { value: 999, decimals: 1, suffix: '%', prefix: '>', label: 'RNA Virus Reduction', sublabel: 'Within 60 min, 3rd party lab' },
  { value: 999, decimals: 1, suffix: '%', prefix: '>', label: 'Bacteria Eliminated', sublabel: 'Within 60 min, 3rd party lab' },
  { value: 9999, decimals: 2, suffix: '%', prefix: '>', label: 'Fungal Mold Spores', sublabel: 'Within 60 min, 3rd party lab' },
  { value: 609, decimals: 1, suffix: '%', prefix: '', label: 'Hospital Infection Drop', sublabel: 'Clinical AJIC study' },
]

export default function ScienceSection() {
  return (
    <section className="section-pad bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />

      <div className="container-pad relative z-10">
        {/* Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-16">
          <span className="inline-block bg-green-500/20 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Backed by Real Science
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Published Research. Proven Results.
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            ActivePure® technology has been independently tested by third-party labs and published in peer-reviewed journals. This isn't marketing — it's science.
          </p>
        </ScrollReveal>

        {/* Stat Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} variant="scaleUp" delay={i * 0.1}>
              <div className="glass-card p-6 text-center border border-white/10">
                <AnimatedCounter value={s.value} decimals={s.decimals} suffix={s.suffix} prefix={s.prefix} label={s.label} sublabel={s.sublabel} light />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {studies.map((s, i) => (
            <ScrollReveal key={s.title} variant="fadeUp" delay={i * 0.1}>
              <div className={`glass-card border-t-2 ${s.color} p-6 h-full flex flex-col`}>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="inline-block bg-white/10 text-white/70 text-xs px-2.5 py-1 rounded-full mb-2">{s.badge}</div>
                    <div className="text-2xl font-serif font-bold text-white leading-none">{s.journal}</div>
                    <div className="text-white/40 text-xs mt-1">{s.fullName}</div>
                  </div>
                  <svg className="w-8 h-8 text-white/20 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-serif text-white font-semibold text-base leading-snug mb-3">{s.title}</h3>
                <p className="text-green-300 text-sm font-medium leading-relaxed flex-1">{s.finding}</p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors group"
                >
                  View Journal
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* NASA + FDA callout */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 flex items-center gap-5 border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-7 h-7 text-purple-300" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-lg mb-1">NASA-Origin Technology</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Originally developed for the International Space Station to scrub the air in a sealed environment. Now available for your home.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-center gap-5 border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-7 h-7 text-blue-300" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-lg mb-1">FDA Class II Medical Device</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  The Air Scrubber is a cleared Class II medical device — held to the same safety standards as hospital-grade equipment.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.3} className="text-center mt-10">
          <Link to="/science" className="btn-ghost">
            Explore All Research →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
