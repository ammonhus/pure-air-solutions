import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import SEOHead from '../components/shared/SEOHead'
import ScrollReveal from '../components/shared/ScrollReveal'

const serviceAreas = [
  'Mesa', 'Chandler', 'Gilbert', 'Tempe',
  'Scottsdale', 'Phoenix', 'Queen Creek', 'Ahwatukee',
  'Fountain Hills', 'Apache Junction',
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Contact form submitted:', data)
    setSent(true)
  }

  return (
    <>
      <SEOHead
        title="Contact Pure Air Solutions — Mesa, AZ"
        description="Contact Pure Air Solutions in Mesa, AZ. Call (480) 555-0100 or send a message. Serving Mesa, Chandler, Gilbert, Tempe, Scottsdale & Phoenix Valley."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">We'd Love to Hear from You</h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">Real people. Quick responses. No call centers.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal variant="fadeLeft">
                <div className="bg-navy-700 rounded-2xl p-7 text-white">
                  <h3 className="font-serif font-bold text-xl mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <a href="tel:+14805550100" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                        <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/50 text-xs mb-0.5">Phone</div>
                        <div className="text-white font-semibold group-hover:text-green-300 transition-colors">(480) 555-0100</div>
                      </div>
                    </a>
                    <a href="mailto:hello@pureairsolutionsaz.com" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                        <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/50 text-xs mb-0.5">Email</div>
                        <div className="text-white font-semibold text-sm group-hover:text-green-300 transition-colors">hello@pureairsolutionsaz.com</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/50 text-xs mb-0.5">Location</div>
                        <div className="text-white font-semibold">Mesa, AZ 85201</div>
                        <div className="text-white/50 text-xs">Serving the Phoenix Valley</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/50 text-xs mb-0.5">Hours</div>
                        <div className="text-white font-semibold text-sm">Mon–Fri: 8am–6pm</div>
                        <div className="text-white/70 text-sm">Saturday: 9am–3pm</div>
                        <div className="text-white/50 text-xs">Sunday: Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeLeft" delay={0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="font-serif font-bold text-navy-700 mb-3">Service Areas</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map(city => (
                      <div key={city} className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                        {city}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs mt-3">+ surrounding East Valley communities</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form + Map */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map placeholder */}
              <ScrollReveal variant="fadeRight">
                <div className="bg-navy-800 rounded-2xl overflow-hidden h-56 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
                  <div className="relative z-10 text-center">
                    <div className="text-5xl mb-2">📍</div>
                    <p className="text-white/70 font-medium">Mesa, Arizona 85201</p>
                    <p className="text-white/40 text-sm">Serving the Phoenix Valley</p>
                    <a
                      href="https://maps.google.com/?q=Mesa,+AZ+85201"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-green-300 hover:text-green-200 text-sm transition-colors"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal variant="fadeRight" delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  {sent ? (
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">✅</div>
                      <h3 className="font-serif font-bold text-navy-700 text-2xl mb-2">Message Sent!</h3>
                      <p className="text-gray-500">We'll get back to you within 1 business day. Or call us at (480) 555-0100 for faster help.</p>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-serif font-bold text-navy-700 text-xl mb-6">Send Us a Message</h3>
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label">Name *</label>
                            <input {...register('name', { required: 'Required' })} className="input-field" placeholder="Your name" />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                          </div>
                          <div>
                            <label className="label">Phone</label>
                            <input {...register('phone')} type="tel" className="input-field" placeholder="(480) 555-1234" />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="label">Email *</label>
                            <input {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' } })} type="email" className="input-field" placeholder="you@example.com" />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                          </div>
                          <div className="sm:col-span-2">
                            <label className="label">Subject</label>
                            <select {...register('subject')} className="input-field">
                              <option value="">Select a topic</option>
                              <option value="assessment">Schedule Free Assessment</option>
                              <option value="quote">Get a Quote</option>
                              <option value="service">Existing Customer Service</option>
                              <option value="commercial">Commercial Inquiry</option>
                              <option value="other">Other Question</option>
                            </select>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="label">Message *</label>
                            <textarea {...register('message', { required: 'Required' })} rows={4} className="input-field resize-none" placeholder="Tell us what's on your mind..." />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                          </div>
                        </div>
                        <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
                          Send Message →
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
