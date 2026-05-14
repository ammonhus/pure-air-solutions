import { motion } from 'framer-motion'
import { Building2, Rocket, FlaskConical, ShieldCheck, Microscope, Leaf, Award, MapPin } from 'lucide-react'

const items = [
  { icon: <Building2 className="w-4 h-4" />, label: 'FDA Class II Medical Device' },
  { icon: <Rocket className="w-4 h-4" />, label: 'NASA Space Station Technology' },
  { icon: <FlaskConical className="w-4 h-4" />, label: 'Peer-Reviewed & Published' },
  { icon: <ShieldCheck className="w-4 h-4" />, label: '99.9% Virus Reduction' },
  { icon: <Microscope className="w-4 h-4" />, label: '99.9% Bacteria Elimination' },
  { icon: <Leaf className="w-4 h-4" />, label: '99.99% Mold & Fungal Spores' },
  { icon: <Award className="w-4 h-4" />, label: 'ActivePure® Authorized Dealer' },
  { icon: <MapPin className="w-4 h-4" />, label: 'Serving Mesa & Phoenix Valley' },
]

export default function TrustBar() {
  return (
    <div className="bg-navy-700 py-4 overflow-hidden">
      <div className="flex">
        {[0, 1].map(copy => (
          <motion.div
            key={copy}
            className="flex items-center gap-0 flex-shrink-0"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {items.map(item => (
              <div key={item.label} className="flex items-center gap-2.5 px-8 whitespace-nowrap">
                <span className="text-white/70">{item.icon}</span>
                <span className="text-white/90 text-sm font-medium tracking-wide">{item.label}</span>
                <span className="text-white/30 mx-2">•</span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
