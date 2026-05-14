import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../shared/ScrollReveal'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Mesa, AZ',
    stars: 5,
    text: 'We installed the Air Scrubber last monsoon season and the difference was night and day. My daughter\'s asthma attacks dropped significantly and our home doesn\'t smell musty after heavy rains anymore. Best investment we\'ve made in our home.',
    context: 'Family with asthma',
  },
  {
    name: 'Robert K.',
    location: 'Gilbert, AZ',
    stars: 5,
    text: 'I was skeptical about the price at first, but after the free air quality assessment showed our VOC levels were off the charts from new carpet we\'d installed, I was convinced. It\'s been three months and I genuinely sleep better knowing the air is clean.',
    context: 'New construction home',
  },
  {
    name: 'Linda & Tom P.',
    location: 'Chandler, AZ',
    stars: 5,
    text: 'We have three dogs and a cat. The pet odors used to be embarrassing when guests came over. Within two weeks of installation, friends started asking what we did — they said our house finally smelled like nothing. Pure Air Solutions is the real deal.',
    context: 'Multi-pet household',
  },
  {
    name: 'Dr. Maria Flores',
    location: 'Scottsdale, AZ',
    stars: 5,
    text: 'I run a dental practice and indoor air quality is critical for my patients and staff. Pure Air Solutions installed four units throughout our office. Staff sick days dropped by almost half that winter. I recommend them to every business owner I know.',
    context: 'Dental practice owner',
  },
  {
    name: 'James T.',
    location: 'Tempe, AZ',
    stars: 5,
    text: 'During the 2023 wildfires, our neighbors were buying air purifiers from every store in town. We had nothing to worry about — our Air Scrubber handled it completely. The technician from Pure Air Solutions was professional, fast, and genuinely knowledgeable.',
    context: 'Wildfire smoke concern',
  },
  {
    name: 'The Nguyen Family',
    location: 'Phoenix, AZ',
    stars: 5,
    text: 'Our son has severe dust allergies — living in Arizona is hard enough for him. After the Pure Air installation, his allergy symptoms during dust season dropped dramatically. His allergist actually asked what changed. We told her about ActivePure and she was impressed.',
    context: 'Child with allergies',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir) => {
    setDirection(dir)
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length)
  }

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section className="section-pad bg-cream-100">
      <div className="container-pad">
        <ScrollReveal variant="fadeUp" className="text-center mb-14">
          <span className="inline-block bg-navy-700/10 text-navy-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Real Customers, Real Results
          </span>
          <h2 className="section-heading mb-4">What Arizona Families Are Saying</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-gray-600 font-medium">5.0 average · 80+ reviews</span>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visible.map((t, i) => (
              <AnimatePresence key={`${current}-${i}`} mode="wait">
                <motion.div
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`card p-6 ${i === 0 ? 'md:col-span-1 border-t-4 border-green-500' : ''}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <StarRating count={t.stars} />
                      <div className="mt-2">
                        <span className="font-semibold text-navy-800">{t.name}</span>
                        <span className="text-gray-400 text-sm ml-2">— {t.location}</span>
                      </div>
                      <span className="inline-block mt-1 text-xs text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">
                        {t.context}
                      </span>
                    </div>
                    <svg className="w-8 h-8 text-gray-100 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-navy-200 text-navy-700 hover:bg-navy-700 hover:text-white hover:border-navy-700 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-navy-700 w-6' : 'bg-navy-200 hover:bg-navy-400'}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-navy-200 text-navy-700 hover:bg-navy-700 hover:text-white hover:border-navy-700 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
