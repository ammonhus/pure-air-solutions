import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Stethoscope, UtensilsCrossed, Building2, GraduationCap, BedDouble, Scissors, ShoppingBag, HardHat } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import ScrollReveal from '../components/shared/ScrollReveal'

const verticals = [
  { icon: <Stethoscope className="w-8 h-8 text-green-700" />, title: 'Medical & Dental Offices', body: 'HIPAA-compliant air quality for patient rooms, waiting areas, and procedure spaces. FDA Class II clearance makes the Air Scrubber the natural choice for healthcare.', badge: 'Healthcare' },
  { icon: <UtensilsCrossed className="w-8 h-8 text-green-700" />, title: 'Restaurants & Food Service', body: 'Eliminate cooking odors, reduce airborne pathogens, and create a more pleasant dining environment. Health department compliant and customer-approved.', badge: 'Food Service' },
  { icon: <Building2 className="w-8 h-8 text-green-700" />, title: 'Office Spaces', body: 'Reduce employee sick days, improve cognitive performance with better air quality, and demonstrate your commitment to staff wellbeing. ROI in reduced absenteeism alone.', badge: 'Corporate' },
  { icon: <GraduationCap className="w-8 h-8 text-green-700" />, title: 'Schools & Childcare', body: 'Children are more susceptible to airborne pathogens. Protect students and staff with continuous air purification in classrooms, gyms, and common areas.', badge: 'Education' },
  { icon: <BedDouble className="w-8 h-8 text-green-700" />, title: 'Hotels & Short-Term Rentals', body: 'Ensure pristine air quality between guests. Eliminate odors, allergens, and pathogens — and earn 5-star reviews for a fresh, clean environment.', badge: 'Hospitality' },
  { icon: <Scissors className="w-8 h-8 text-green-700" />, title: 'Salons, Gyms & Spas', body: 'Chemical fumes from beauty services, body odor from gyms, and shared equipment create significant air quality challenges. ActivePure® handles all of it.', badge: 'Personal Services' },
  { icon: <ShoppingBag className="w-8 h-8 text-green-700" />, title: 'Retail & Showrooms', body: 'Create a more pleasant shopping environment, reduce employee illness, and protect merchandise from VOCs and particulates. Customers stay longer when the air is clean.', badge: 'Retail' },
  { icon: <HardHat className="w-8 h-8 text-green-700" />, title: 'New Construction & Renovation', body: 'Construction VOCs, off-gassing from new materials, and concrete dust are severe indoor air hazards. Protect workers and future occupants from day one.', badge: 'Construction' },
]

const roi = [
  { metric: '40–50%', label: 'Reduction in Employee Sick Days', source: 'Observed in commercial installations' },
  { metric: '60.9%', label: 'Fewer Healthcare Infections', source: 'AJIC peer-reviewed study' },
  { metric: '99.9%', label: 'Airborne Pathogen Reduction', source: '3rd party independent lab' },
  { metric: '$0', label: 'Monthly Consumable Cost', source: 'No filters or cartridges to replace' },
]

export default function CommercialPage() {
  return (
    <>
      <SEOHead
        title="Commercial Air Purification — Arizona Businesses"
        description="Protect your Arizona business, customers, and employees with Air Scrubber by ActivePure. Offices, medical facilities, restaurants. Mesa & Phoenix Valley."
        canonical="/commercial"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-green-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container-pad relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Commercial</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
                Healthier Air is<br/>Good for Business
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                Customers notice. Employees notice. Reduce sick days, improve the customer experience, and demonstrate your commitment to health — all with a single HVAC upgrade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/assessment" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-green-700 font-bold rounded-xl hover:bg-cream-100 transition-colors shadow-lg">
                  Get Commercial Quote
                </Link>
                <a href="tel:+14805550100" className="btn-ghost">Call (480) 555-0100</a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {roi.map(item => (
                <div key={item.label} className="glass-card p-5 text-center border border-white/10">
                  <div className="text-3xl font-serif font-bold text-white mb-1">{item.metric}</div>
                  <div className="text-white/70 text-sm leading-tight">{item.label}</div>
                  <div className="text-white/40 text-xs mt-1">{item.source}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="section-pad bg-cream-100">
        <div className="container-pad">
          <ScrollReveal variant="fadeUp" className="text-center mb-12">
            <h2 className="section-heading mb-4">Industries We Serve</h2>
            <p className="section-subheading mx-auto">Every type of commercial space has unique air quality challenges. We've solved them all.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {verticals.map((v, i) => (
              <ScrollReveal key={v.title} variant="fadeUp" delay={i * 0.07}>
                <div className="card p-6 h-full">
                  <div className="mb-3">{v.icon}</div>
                  <span className="inline-block text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full mb-3">{v.badge}</span>
                  <h3 className="font-serif font-bold text-navy-800 text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability */}
      <section className="section-pad bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container-pad relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fadeLeft">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">Scales to Any Size Space</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Whether you have a 500 sq ft medical exam room or a 50,000 sq ft warehouse, we design a system that covers your entire space. Multiple units can be installed across multiple air handlers for complete coverage.
              </p>
              <div className="space-y-4">
                {[
                  { range: 'Up to 3,000 sq ft', desc: 'Single-unit residential or small office' },
                  { range: '3,000–10,000 sq ft', desc: 'Multi-unit commercial solution' },
                  { range: '10,000+ sq ft', desc: 'Custom multi-handler enterprise design' },
                ].map(item => (
                  <div key={item.range} className="flex items-center gap-4 glass-card p-4 border border-white/10">
                    <div className="w-2 h-10 bg-green-400 rounded-full" />
                    <div>
                      <div className="text-white font-semibold">{item.range}</div>
                      <div className="text-white/50 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <div className="glass-card p-8 border border-white/10">
                <h3 className="font-serif font-bold text-white text-xl mb-5">Request a Commercial Quote</h3>
                <p className="text-white/60 text-sm mb-6">Tell us about your space and we'll provide a custom proposal — typically within 24 hours.</p>
                <div className="space-y-3">
                  <Link to="/assessment" className="flex items-center justify-center w-full gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-colors">
                    Request Commercial Quote
                  </Link>
                  <a href="tel:+14805550100" className="flex items-center justify-center w-full gap-2 border border-white/20 text-white/80 hover:text-white px-6 py-3 rounded-xl transition-colors text-sm">
                    Call (480) 555-0100
                  </a>
                  <a href="mailto:commercial@pureairsolutionsaz.com" className="flex items-center justify-center w-full gap-2 border border-white/10 text-white/50 hover:text-white px-6 py-3 rounded-xl transition-colors text-sm">
                    Email Our Commercial Team
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
