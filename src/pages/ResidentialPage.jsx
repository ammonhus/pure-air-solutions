import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Baby, Wind, PawPrint, UserCheck, Flame, CloudRain, Tornado, Biohazard, Droplets } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import ScrollReveal from '../components/shared/ScrollReveal'

const useCases = [
  { icon: <Baby className="w-8 h-8 text-navy-600" />, title: 'Young Children & Babies', body: 'Children breathe more air per body weight than adults. Protect developing lungs from allergens, bacteria, and VOCs from furniture and paint.' },
  { icon: <Wind className="w-8 h-8 text-navy-600" />, title: 'Allergy & Asthma Sufferers', body: 'Arizona is a top allergen state. ActivePure® reduces pollen, dust mites, mold spores, and pet dander — the primary triggers for Arizona allergy sufferers.' },
  { icon: <PawPrint className="w-8 h-8 text-navy-600" />, title: 'Pet Owners', body: 'Pet dander, odors, and bacteria from litter boxes accumulate in HVAC-circulated air. The Air Scrubber neutralizes odors at the molecular level — not just masks them.' },
  { icon: <UserCheck className="w-8 h-8 text-navy-600" />, title: 'Seniors & Immunocompromised', body: 'Older adults and those with weakened immune systems benefit most from pathogen reduction. A cleaner air environment means fewer respiratory infections.' },
  { icon: <Flame className="w-8 h-8 text-navy-600" />, title: 'Wildfire Smoke', body: 'Arizona\'s wildfire seasons push PM2.5 particles through every gap in your home. ActivePure® captures fine particulate matter that standard filters miss.' },
  { icon: <CloudRain className="w-8 h-8 text-navy-600" />, title: 'Monsoon Season', body: 'Arizona\'s summer monsoons flood homes with humid outdoor air. That humidity spike — often from single-digit to 60%+ RH in hours — is the trigger that activates dormant spores throughout your HVAC system.' },
  { icon: <Droplets className="w-8 h-8 text-navy-600" />, title: 'Mold Growth Areas', body: 'Mold colonizes HVAC ducts, attic decking, crawl spaces, and drywall within 24–48 hours of a moisture event. The Air Scrubber continuously eliminates airborne spores before they find a surface to colonize.' },
]

const features = [
  'Installs in 1–2 hours into most central HVAC systems',
  'Covers up to 3,000 sq ft per unit (stackable for larger homes)',
  'Works silently — no noise, no visible footprint',
  '99.9% virus and bacteria reduction, continuously',
  'No filters to change or cartridges to buy',
  'Works with all major HVAC brands',
  'UV lamp replacement every ~2 years (inexpensive)',
  '2-year labor warranty + manufacturer warranty',
]

const arizonaSeasons = [
  { season: 'Summer Monsoon', months: 'June–September', threat: 'Mold & Humidity', color: 'bg-blue-50 border-blue-200', iconBg: 'bg-blue-100', icon: <CloudRain className="w-7 h-7 text-blue-600" /> },
  { season: 'Wildfire Season', months: 'April–June', threat: 'Smoke & PM2.5', color: 'bg-orange-50 border-orange-200', iconBg: 'bg-orange-100', icon: <Flame className="w-7 h-7 text-orange-600" /> },
  { season: 'Dust Season', months: 'July–September', threat: 'Haboobs & Allergens', color: 'bg-yellow-50 border-yellow-200', iconBg: 'bg-yellow-100', icon: <Tornado className="w-7 h-7 text-yellow-600" /> },
  { season: 'Cold & Flu Season', months: 'October–March', threat: 'Viruses & Bacteria', color: 'bg-purple-50 border-purple-200', iconBg: 'bg-purple-100', icon: <Biohazard className="w-7 h-7 text-purple-600" /> },
]

export default function ResidentialPage() {
  return (
    <>
      <SEOHead
        title="Residential Air Purification — Arizona Homes"
        description="Protect your Arizona family from mold, wildfire smoke, allergens, and viruses. Air Scrubber by ActivePure installs into your home HVAC. Mesa & Phoenix Valley."
        canonical="/residential"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container-pad relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Residential</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
                Your Home Deserves<br/>Hospital-Grade Air
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                Arizona's sealed homes and year-round HVAC use trap pollutants at dangerously high levels. ActivePure® technology proactively eliminates what your current filters can't touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/assessment" className="btn-accent">Schedule Free Assessment</Link>
                <a href="tel:+14805550100" className="btn-ghost">Call (480) 555-0100</a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { val: '99.9%', label: 'Virus Reduction' },
                { val: '24/7', label: 'Continuous' },
                { val: '1–2 hr', label: 'Installation' },
                { val: 'No HEPA', label: 'Filter Changes' },
              ].map(item => (
                <div key={item.label} className="glass-card p-6 text-center border border-white/10">
                  <div className="text-3xl font-serif font-bold text-white">{item.val}</div>
                  <div className="text-white/60 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Arizona Seasons */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <ScrollReveal variant="fadeUp" className="text-center mb-12">
            <h2 className="section-heading mb-4">Arizona Has 4 Air Quality Threats Per Year</h2>
            <p className="section-subheading mx-auto">Most states have one or two. Arizona has four distinct seasons of indoor air quality challenges.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {arizonaSeasons.map((s, i) => (
              <ScrollReveal key={s.season} variant="fadeUp" delay={i * 0.1}>
                <div className={`card border ${s.color} p-6 text-center`}>
                  <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>{s.icon}</div>
                  <h3 className="font-serif font-bold text-navy-800 text-lg mb-1">{s.season}</h3>
                  <p className="text-gray-500 text-xs mb-3">{s.months}</p>
                  <div className="font-medium text-gray-700 text-sm">{s.threat}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-pad bg-cream-100">
        <div className="container-pad">
          <ScrollReveal variant="fadeUp" className="text-center mb-12">
            <h2 className="section-heading mb-4">When Cleaner Air Matters Most</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u, i) => (
              <ScrollReveal key={u.title} variant="fadeUp" delay={i * 0.07} className={i === useCases.length - 1 && useCases.length % 3 === 1 ? 'sm:col-span-2 sm:w-[calc(50%-12px)] sm:mx-auto lg:col-span-1 lg:w-auto lg:mx-0 lg:col-start-2' : ''}>
                <div className="card p-6 h-full">
                  <div className="mb-4">{u.icon}</div>
                  <h3 className="font-serif font-bold text-navy-800 text-lg mb-2">{u.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{u.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container-pad relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fadeLeft">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Everything That Comes With Your Installation</h2>
              <ul className="space-y-3">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-white/85">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <div className="glass-card p-8 border border-white/10 text-center">
                <h3 className="font-serif font-bold text-white text-2xl mb-4">Start with a Free Assessment</h3>
                <p className="text-white/65 mb-6">See what's actually in your air before committing to anything. No pressure. No obligation.</p>
                <Link to="/assessment" className="inline-flex items-center justify-center w-full gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-colors">
                  Book Free Assessment
                </Link>
                <a href="tel:+14805550100" className="inline-flex items-center justify-center w-full gap-2 mt-3 border border-white/20 text-white/80 hover:text-white px-6 py-3 rounded-xl transition-colors text-sm">
                  Or call (480) 555-0100
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
