import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Rocket, Building2, CheckCircle } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import ScrollReveal from '../components/shared/ScrollReveal'
import AnimatedCounter from '../components/shared/AnimatedCounter'

const studies = [
  {
    journal: 'AJIC',
    year: '2022',
    badge: 'Healthcare Infections',
    color: 'border-navy-400',
    bgColor: 'bg-navy-700',
    title: 'Reduction of Healthcare-Associated Infections in Acute Care Settings',
    authors: 'Kenyon, C. et al.',
    publication: 'American Journal of Infection Control',
    url: 'https://www.ajicjournal.org',
    keyFinding: '60.9% reduction in healthcare-associated infections',
    details: 'A prospective study conducted across multiple hospital units in which Air Scrubber by ActivePure® was installed in HVAC systems. The study tracked infection rates before and after installation, finding a statistically significant reduction in HAIs including MRSA, C. difficile, and VAP over a 12-month period.',
    methodology: 'Prospective observational study, 12-month follow-up, multiple acute care units',
    tags: ['Hospital-Acquired Infections', 'MRSA', 'C. difficile', 'ICU', 'Acute Care'],
  },
  {
    journal: 'AJIC',
    year: '2023',
    badge: 'Viral Pathogens',
    color: 'border-green-500',
    bgColor: 'bg-green-700',
    title: 'Efficacy of ActivePure® Technology Against SARS-CoV-2, RSV, and Monkeypox',
    authors: 'Harding, A. et al.',
    publication: 'American Journal of Infection Control',
    url: 'https://www.ajicjournal.org',
    keyFinding: '>99.9% SARS-CoV-2 surrogate reduction within 3 minutes',
    details: 'Laboratory testing of ActivePure® technology against multiple viral pathogens of public health significance. Testing was conducted in controlled chamber environments using validated surrogate viruses. Results demonstrated rapid and comprehensive inactivation across all tested pathogens.',
    methodology: 'Controlled laboratory study, BSL-2/3 conditions, validated viral surrogates',
    tags: ['COVID-19', 'SARS-CoV-2', 'RSV', 'Monkeypox', 'Viral Inactivation'],
  },
  {
    journal: 'PLOS ONE',
    year: '2021',
    badge: 'Safety Study',
    color: 'border-amber-400',
    bgColor: 'bg-amber-700',
    title: 'Safety Profile of ActivePure® Technology: Mammalian Exposure Study',
    authors: 'Wang, L. et al.',
    publication: 'PLOS ONE — Public Library of Science',
    url: 'https://journals.plos.org',
    keyFinding: 'No adverse physiological effects in mammals after extended exposure',
    details: 'A comprehensive safety study examining potential adverse effects of extended ActivePure® technology exposure in mammalian subjects. Histological analysis, blood panels, and behavioral assessments were conducted over multiple exposure periods. No statistically significant adverse findings were observed.',
    methodology: 'Controlled mammalian study, multiple exposure durations, histological analysis',
    tags: ['Safety', 'Biocompatibility', 'Mammalian Study', 'Toxicology', 'Long-term Exposure'],
  },
]

const labStats = [
  { value: 999, decimals: 1, suffix: '%', prefix: '>', label: 'RNA Virus Reduction', sub: '60 min, 3rd party lab certified', color: 'text-navy-700' },
  { value: 999, decimals: 1, suffix: '%', prefix: '>', label: 'Bacteria Eliminated', sub: '60 min, independent testing', color: 'text-green-600' },
  { value: 9999, decimals: 2, suffix: '%', prefix: '>', label: 'Fungal Mold Spores', sub: '60 min, 3rd party lab certified', color: 'text-navy-700' },
  { value: 609, decimals: 1, suffix: '%', prefix: '', label: 'Hospital Infection Drop', sub: 'AJIC peer-reviewed study', color: 'text-green-600' },
]

export default function SciencePage() {
  return (
    <>
      <SEOHead
        title="The Science — Peer-Reviewed Research on ActivePure"
        description="Read the peer-reviewed science behind Air Scrubber by ActivePure. Published in AJIC and PLOS ONE. 99.9% pathogen reduction confirmed by independent labs."
        canonical="/science"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-green-500/20 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Peer-Reviewed Science
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5 leading-tight">
              This Isn't Marketing.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-400">It's Published Science.</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              ActivePure® technology has been independently tested, peer-reviewed, and published in respected scientific journals. Here's the evidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lab Stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container-pad">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {labStats.map((s, i) => (
              <ScrollReveal key={s.label} variant="scaleUp" delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <AnimatedCounter value={s.value} decimals={s.decimals} suffix="%" prefix={s.prefix} label={s.label} sublabel={s.sub} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studies */}
      <section className="section-pad bg-cream-100">
        <div className="container-pad">
          <ScrollReveal variant="fadeUp" className="text-center mb-14">
            <h2 className="section-heading mb-4">Published Research Studies</h2>
            <p className="section-subheading mx-auto">Three peer-reviewed studies. Three independent confirmations.</p>
          </ScrollReveal>

          <div className="space-y-8">
            {studies.map((s, i) => (
              <ScrollReveal key={s.title} variant="fadeUp" delay={i * 0.1}>
                <div className={`bg-white rounded-3xl shadow-sm border-l-4 ${s.color} overflow-hidden`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Journal panel */}
                    <div className={`${s.bgColor} p-8 flex flex-col justify-between`}>
                      <div>
                        <div className="inline-block bg-white/15 text-white text-xs px-2.5 py-1 rounded-full mb-4">{s.badge}</div>
                        <div className="text-5xl font-serif font-bold text-white leading-none">{s.journal}</div>
                        <div className="text-white/60 text-sm mt-2">{s.publication}</div>
                        <div className="text-white/40 text-xs mt-1">{s.year}</div>
                      </div>
                      <div>
                        <div className="bg-white/10 rounded-xl p-4 mt-6">
                          <div className="text-white/60 text-xs mb-1">Key Finding</div>
                          <div className="text-white font-semibold text-sm leading-snug">{s.keyFinding}</div>
                        </div>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors"
                        >
                          View Journal ↗
                        </a>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <h3 className="font-serif font-bold text-navy-800 text-xl mb-3 leading-snug">{s.title}</h3>
                      <p className="text-gray-500 text-sm mb-4">{s.authors}</p>
                      <p className="text-gray-600 leading-relaxed mb-5">{s.details}</p>
                      <div className="mb-5">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Methodology</div>
                        <p className="text-gray-600 text-sm">{s.methodology}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map(tag => (
                          <span key={tag} className="text-xs bg-navy-700/8 text-navy-700 border border-navy-700/15 px-2.5 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NASA Origin */}
      <section className="section-pad bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container-pad relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fadeLeft">
              <span className="inline-block bg-white/10 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4">Origin Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5 leading-tight">
                Born on the International Space Station
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                NASA faced a unique challenge: how do you maintain clean air in a completely sealed environment with no natural ventilation? The answer became ActivePure® — a technology that generates the same natural scrubbing molecules found in Earth's atmosphere.
              </p>
              <p className="text-white/70 leading-relaxed mb-5">
                The Space Station technology was adapted by ActivePure Technologies for use in homes, offices, and healthcare settings. Today, it's installed in over 2 million locations worldwide.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-7 h-7 text-purple-300" />
                </div>
                <div>
                  <div className="text-white font-semibold">International Space Station</div>
                  <div className="text-white/50 text-sm">Origin Technology · Adapted for Earth</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <div className="glass-card p-8 border border-white/10">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-blue-300" />
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-white text-2xl">FDA Class II Medical Device</h3>
                  <p className="text-white/60 text-sm mt-2">510(k) Cleared</p>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  The Air Scrubber by ActivePure® holds FDA Class II clearance — the same classification as many hospital diagnostic devices. This means it has been reviewed and cleared by the U.S. Food and Drug Administration as safe and effective.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Independent Safety Testing', 'Hospital-Grade Standards', '510(k) FDA Cleared', 'No Harmful Ozone'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-white/70 text-xs">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-green-600">
        <div className="container-pad text-center">
          <ScrollReveal variant="scaleUp">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">Seen Enough? Let's Test Your Air.</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Free air quality assessment — particle count, VOCs, and humidity — at no charge and no obligation.
            </p>
            <Link to="/assessment" className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-cream-100 transition-colors shadow-xl text-lg">
              Get My Free Assessment →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
