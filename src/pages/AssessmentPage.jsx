import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { CloudRain, Tornado, Flame, Biohazard, Microscope, Thermometer, Droplets, ClipboardList } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import ScrollReveal from '../components/shared/ScrollReveal'

const urgencyItems = [
  { icon: <CloudRain className="w-5 h-5 text-blue-500" />, season: 'Monsoon Season', months: 'June–September', desc: 'Peak mold spore season in Arizona. Humidity spikes drive mold growth inside your HVAC system and ductwork.' },
  { icon: <Tornado className="w-5 h-5 text-yellow-600" />, season: 'Dust Season', months: 'July–September', desc: 'Haboob season pushes fine particulates into every corner of your home. PM2.5 levels can spike 10x normal.' },
  { icon: <Flame className="w-5 h-5 text-orange-500" />, season: 'Wildfire Season', months: 'April–June', desc: 'Arizona wildfires push carcinogenic PM2.5 smoke particles through gaps in your home — staying indoors isn\'t always protection.' },
  { icon: <Biohazard className="w-5 h-5 text-purple-500" />, season: 'Cold & Flu Season', months: 'Oct–March', desc: 'Sealed homes in winter concentrate viral particles. ActivePure® is most impactful when you need it most.' },
]

const assessmentIncludes = [
  { icon: <Microscope className="w-5 h-5 text-green-300" />, title: 'Particle Count Analysis', desc: 'We measure PM2.5 and PM10 levels — the fine particles that bypass your lungs\' natural defenses.' },
  { icon: <Thermometer className="w-5 h-5 text-green-300" />, title: 'VOC Concentration Test', desc: 'Volatile organic compounds from furniture, paint, cleaning products, and building materials are measured.' },
  { icon: <Droplets className="w-5 h-5 text-green-300" />, title: 'Humidity & Mold Risk', desc: 'We assess moisture levels and identify HVAC zones at risk for mold growth — critical in monsoon season.' },
  { icon: <ClipboardList className="w-5 h-5 text-green-300" />, title: 'HVAC System Review', desc: 'Our tech inspects your existing system for compatibility, maintenance issues, and airflow problems.' },
  { icon: <ClipboardList className="w-5 h-5 text-green-300" />, title: 'Written Report', desc: 'You receive a clear, written summary of findings with an honest recommendation — even if that\'s "you don\'t need us."' },
]

const steps = ['Your Info', 'Property Details', 'Schedule', 'Confirm']

export default function AssessmentPage() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm()

  const next = async () => {
    const fields = [
      ['firstName', 'lastName', 'email', 'phone'],
      ['propertyType', 'address', 'city', 'squareFootage'],
      ['preferredTime', 'preferredDay', 'notes'],
    ]
    const valid = await trigger(fields[step])
    if (valid) setStep(s => s + 1)
  }

  const onSubmit = (data) => {
    console.log('Assessment form submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100 pt-20">
        <SEOHead title="Assessment Scheduled — Pure Air Solutions" noIndex />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full mx-4 bg-white rounded-3xl shadow-xl p-10 text-center"
        >
          <div className="text-7xl mb-4">✅</div>
          <h2 className="font-serif font-bold text-navy-700 text-3xl mb-3">You're On the List!</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We'll call you within one business day to confirm your free air quality assessment appointment. Questions? Call us directly at (480) 555-0100.
          </p>
          <div className="bg-cream-100 rounded-2xl p-5 text-left mb-6">
            <h4 className="font-semibold text-navy-700 mb-3">What to expect on assessment day:</h4>
            <ul className="space-y-2">
              {['Our tech arrives in a Pure Air Solutions vehicle', '60-minute assessment including testing & HVAC review', 'Written report emailed same day', 'Zero pressure — we only recommend what you actually need'].map(item => (
                <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a href="/" className="btn-primary w-full justify-center">Back to Home</a>
        </motion.div>
      </div>
    )
  }

  return (
    <>
      <SEOHead
        title="Free Air Quality Assessment — Book Now"
        description="Schedule your free indoor air quality assessment in Mesa, AZ. We measure particle count, VOCs, humidity, and mold risk — no charge, no obligation."
        canonical="/assessment"
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-green-500/20 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">100% Free · No Obligation</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Free Air Quality Assessment</h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">Find out exactly what's in your air — before deciding if you need us.</p>
          </motion.div>
        </div>
      </section>

      <div className="section-pad bg-cream-100">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Progress */}
              <div className="flex items-center gap-2 mb-8">
                {steps.map((s, i) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      i < step ? 'bg-green-500 text-white' : i === step ? 'bg-navy-700 text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                      {i < step ? '✓' : i + 1}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block ${i === step ? 'text-navy-700' : 'text-gray-400'}`}>{s}</span>
                    {i < steps.length - 1 && <div className={`flex-1 h-px ${i < step ? 'bg-green-400' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="step0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                      <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <h2 className="font-serif font-bold text-navy-700 text-2xl mb-6">Tell Us About Yourself</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label">First Name *</label>
                            <input {...register('firstName', { required: 'Required' })} className="input-field" placeholder="Jane" />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                          </div>
                          <div>
                            <label className="label">Last Name *</label>
                            <input {...register('lastName', { required: 'Required' })} className="input-field" placeholder="Smith" />
                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                          </div>
                          <div>
                            <label className="label">Email Address *</label>
                            <input {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' } })} type="email" className="input-field" placeholder="jane@example.com" />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                          </div>
                          <div>
                            <label className="label">Phone Number *</label>
                            <input {...register('phone', { required: 'Required', pattern: { value: /^[\d\s\-\(\)]+$/, message: 'Invalid phone' } })} type="tel" className="input-field" placeholder="(480) 555-1234" />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                      <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <h2 className="font-serif font-bold text-navy-700 text-2xl mb-6">Property Details</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="sm:col-span-2">
                            <label className="label">Property Type *</label>
                            <select {...register('propertyType', { required: 'Required' })} className="input-field">
                              <option value="">Select property type</option>
                              <option value="single-family">Single Family Home</option>
                              <option value="townhome">Townhome / Condo</option>
                              <option value="multi-family">Multi-Family / Apartment</option>
                              <option value="office">Office / Commercial</option>
                              <option value="restaurant">Restaurant / Food Service</option>
                              <option value="medical">Medical / Dental</option>
                              <option value="retail">Retail / Showroom</option>
                              <option value="other">Other</option>
                            </select>
                            {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType.message}</p>}
                          </div>
                          <div className="sm:col-span-2">
                            <label className="label">Street Address *</label>
                            <input {...register('address', { required: 'Required' })} className="input-field" placeholder="1234 E Main St" />
                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                          </div>
                          <div>
                            <label className="label">City *</label>
                            <input {...register('city', { required: 'Required' })} className="input-field" placeholder="Mesa" />
                            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                          </div>
                          <div>
                            <label className="label">Approx. Square Footage *</label>
                            <select {...register('squareFootage', { required: 'Required' })} className="input-field">
                              <option value="">Select range</option>
                              <option value="under-1000">Under 1,000 sq ft</option>
                              <option value="1000-2000">1,000–2,000 sq ft</option>
                              <option value="2000-3000">2,000–3,000 sq ft</option>
                              <option value="3000-5000">3,000–5,000 sq ft</option>
                              <option value="5000-plus">5,000+ sq ft</option>
                            </select>
                            {errors.squareFootage && <p className="text-red-500 text-xs mt-1">{errors.squareFootage.message}</p>}
                          </div>
                          <div className="sm:col-span-2">
                            <label className="label">Primary Concern (optional)</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              {['Allergies', 'Mold', 'Pet Odors', 'Wildfire Smoke', 'Viruses/Illness', 'VOCs/Chemicals'].map(concern => (
                                <label key={concern} className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-navy-400 cursor-pointer transition-colors">
                                  <input type="checkbox" {...register('concerns')} value={concern} className="w-4 h-4 text-navy-700 rounded" />
                                  <span className="text-sm text-gray-700">{concern}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                      <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <h2 className="font-serif font-bold text-navy-700 text-2xl mb-6">When Works Best for You?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label">Preferred Day *</label>
                            <select {...register('preferredDay', { required: 'Required' })} className="input-field">
                              <option value="">Select preference</option>
                              <option value="weekday-morning">Weekday Morning</option>
                              <option value="weekday-afternoon">Weekday Afternoon</option>
                              <option value="saturday">Saturday</option>
                              <option value="flexible">I'm flexible</option>
                            </select>
                            {errors.preferredDay && <p className="text-red-500 text-xs mt-1">{errors.preferredDay.message}</p>}
                          </div>
                          <div>
                            <label className="label">Best Time to Call *</label>
                            <select {...register('preferredTime', { required: 'Required' })} className="input-field">
                              <option value="">Select time</option>
                              <option value="morning">Morning (8am–12pm)</option>
                              <option value="afternoon">Afternoon (12pm–5pm)</option>
                              <option value="evening">Early Evening (5pm–7pm)</option>
                              <option value="anytime">Anytime is fine</option>
                            </select>
                            {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime.message}</p>}
                          </div>
                          <div className="sm:col-span-2">
                            <label className="label">Anything else we should know? (optional)</label>
                            <textarea {...register('notes')} rows={3} className="input-field resize-none" placeholder="Specific concerns, health conditions, pet details, recent renovations..." />
                          </div>
                          <div className="sm:col-span-2 bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                            <span className="text-2xl">⚠️</span>
                            <div>
                              <p className="text-amber-800 font-semibold text-sm">Arizona Seasonal Alert</p>
                              <p className="text-amber-700 text-xs mt-0.5">
                                We're currently in high-demand season. Assessment slots book out 5–7 days. Book today to secure your spot before the season peaks.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                      <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <h2 className="font-serif font-bold text-navy-700 text-2xl mb-2">Confirm Your Request</h2>
                        <p className="text-gray-500 text-sm mb-6">We'll call within 1 business day to confirm your appointment.</p>
                        <div className="space-y-3 mb-6">
                          {[
                            { label: 'Contact', value: `${watch('firstName')} ${watch('lastName')} · ${watch('phone')}` },
                            { label: 'Address', value: `${watch('address')}, ${watch('city')}` },
                            { label: 'Property', value: watch('propertyType') },
                            { label: 'Schedule', value: `${watch('preferredDay')} · ${watch('preferredTime')}` },
                          ].map(item => (
                            <div key={item.label} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                              <span className="text-gray-400 text-xs font-semibold w-20 flex-shrink-0 pt-0.5">{item.label}</span>
                              <span className="text-gray-700 text-sm">{item.value}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3 mb-6">
                          <span className="text-2xl">✅</span>
                          <p className="text-green-800 text-sm">
                            <strong>100% free, zero obligation.</strong> Our certified technician will test your air and give you an honest written report — even if that means recommending you don't need our product.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(s => s - 1)}
                    className={`px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors ${step === 0 ? 'invisible' : ''}`}
                  >
                    ← Back
                  </button>
                  {step < 3 ? (
                    <button type="button" onClick={next} className="btn-primary px-8 py-3">
                      Continue →
                    </button>
                  ) : (
                    <button type="submit" className="btn-accent px-8 py-3 text-base">
                      🗓️ Book My Free Assessment
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal variant="fadeRight">
                <div className="bg-navy-700 rounded-2xl p-6">
                  <h3 className="font-serif font-bold text-white text-lg mb-4">What's Included</h3>
                  <div className="space-y-4">
                    {assessmentIncludes.map(item => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                        <div>
                          <div className="text-white font-medium text-sm">{item.title}</div>
                          <div className="text-white/55 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeRight" delay={0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif font-bold text-navy-700 text-lg mb-4">⚠️ Arizona Seasonal Urgency</h3>
                  <div className="space-y-3">
                    {urgencyItems.map(item => (
                      <div key={item.season} className="p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 mb-1">
                          {item.icon}
                          <span className="font-semibold text-gray-800 text-sm">{item.season}</span>
                          <span className="text-gray-400 text-xs ml-auto">{item.months}</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
