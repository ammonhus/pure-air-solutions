import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'
import { motion } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', prefix = '', label, sublabel, light = false, decimals = 0 }) {
  const { ref, inView } = useScrollReveal({ threshold: 0.3 })
  const count = useAnimatedCounter(value, 2200, 0, inView)

  const displayValue = decimals > 0
    ? (count / Math.pow(10, decimals)).toFixed(decimals)
    : count

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold ${light ? 'text-white' : 'text-navy-700'}`}
      >
        {prefix}{displayValue}{suffix}
      </motion.div>
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-2 font-semibold text-lg ${light ? 'text-cream-200' : 'text-navy-600'}`}
        >
          {label}
        </motion.p>
      )}
      {sublabel && (
        <p className={`mt-1 text-sm ${light ? 'text-white/60' : 'text-gray-500'}`}>{sublabel}</p>
      )}
    </div>
  )
}
