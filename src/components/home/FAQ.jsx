import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../shared/ScrollReveal'

const faqs = [
  {
    q: 'What exactly is ActivePure® technology?',
    a: 'ActivePure® is a patented air and surface purification technology originally developed for NASA\'s International Space Station. It generates Hydroxyl Radicals and Superoxide Ions — the same molecules nature uses to clean outdoor air — and sends them proactively through your home\'s HVAC system. Unlike passive filters, ActivePure goes out to find and neutralize contaminants.',
  },
  {
    q: 'How is the Air Scrubber different from a regular air purifier?',
    a: 'Standard air purifiers are passive — they wait for air to pass through a filter. The Air Scrubber by ActivePure® is active: it releases scrubbing molecules through your ducts that proactively seek out viruses, bacteria, mold, and VOCs on surfaces and in the air throughout your entire home. It also integrates directly into your HVAC system, so it works continuously without taking up floor or counter space.',
  },
  {
    q: 'Is it safe for my family and pets?',
    a: 'Yes — and this has been rigorously tested. A peer-reviewed study published in PLOS ONE confirmed no adverse effects in mammals exposed to ActivePure® technology over extended periods. The Air Scrubber is also cleared as an FDA Class II medical device. It produces no harmful ozone and operates safely in occupied spaces 24/7.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most residential installations take 1 to 2 hours. Our certified technician mounts the Air Scrubber unit directly into your existing ductwork near the air handler. There\'s no major renovation required — no new ductwork, no major electrical work. Your home is operational and purifying air the same day.',
  },
  {
    q: 'Does it work with my current HVAC system?',
    a: 'The Air Scrubber is compatible with virtually all central HVAC systems, including split systems, heat pumps, and package units. During your free air quality assessment, our technician will inspect your system and confirm compatibility. We\'ve installed units on every major HVAC brand in the Phoenix Valley.',
  },
  {
    q: 'What maintenance does it require?',
    a: 'Very little. The UV-C lamp inside the Air Scrubber needs to be replaced approximately once every 2 years — a quick, inexpensive service call. Otherwise, the unit operates continuously with no filter changes and no ongoing maintenance beyond what your HVAC system already needs.',
  },
  {
    q: 'How soon will I notice a difference?',
    a: 'Many customers report noticing improved air quality within the first week — particularly pet odor reduction and a "fresher" smell throughout the home. For allergy and asthma sufferers, symptom improvement typically begins within 2 to 4 weeks as airborne allergen levels drop. The particle count reduction begins immediately.',
  },
  {
    q: 'Do you offer any warranty?',
    a: 'Yes. The Air Scrubber by ActivePure® comes with a manufacturer\'s warranty, and we back all of our installations with a 1-year labor warranty. If anything is wrong with our work, we\'ll fix it — no questions asked.',
  },
  {
    q: 'What does the free air quality assessment include?',
    a: 'Our certified technician visits your home and measures: (1) Particulate matter levels — PM2.5 and PM10 particles, (2) VOC concentrations from household chemicals and building materials, (3) Humidity levels and mold risk assessment, and (4) A review of your current HVAC setup. You\'ll receive a written report and honest recommendations — even if that recommendation is that you don\'t need our product.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className={`font-medium text-base leading-snug transition-colors ${isOpen ? 'text-navy-700' : 'text-gray-800 group-hover:text-navy-700'}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
            isOpen ? 'bg-navy-700 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-navy-700/10 group-hover:text-navy-700'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-sm leading-relaxed pb-5">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(prev => prev === i ? -1 : i)

  const half = Math.ceil(faqs.length / 2)
  const left = faqs.slice(0, half)
  const right = faqs.slice(half)

  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <ScrollReveal variant="fadeUp" className="text-center mb-14">
          <span className="inline-block bg-navy-700/10 text-navy-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Common Questions
          </span>
          <h2 className="section-heading mb-4">Everything You Need to Know</h2>
          <p className="section-subheading mx-auto">
            We believe in transparency. Here are honest answers to the questions we hear most often.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          <ScrollReveal variant="fadeLeft">
            <div className="bg-gray-50/50 rounded-2xl px-6">
              {left.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeRight" delay={0.1}>
            <div className="bg-gray-50/50 rounded-2xl px-6">
              {right.map((faq, i) => (
                <FAQItem
                  key={i + half}
                  faq={faq}
                  isOpen={openIndex === i + half}
                  onToggle={() => toggle(i + half)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fadeUp" delay={0.3} className="text-center mt-12">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a href="tel:+14805550100" className="btn-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Directly
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
