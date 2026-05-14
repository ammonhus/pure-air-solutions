import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, FlaskConical, Rocket, CheckCircle2 } from 'lucide-react'

// ─── Particle Field ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let connections = []
    let W = 0, H = 0

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    class Particle {
      constructor() { this.reset(true) }
      reset(initial = false) {
        this.x = Math.random() * W
        this.y = initial ? Math.random() * H : -10
        this.r = Math.random() * 2.5 + 0.8
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = Math.random() * 0.25 + 0.1
        this.alpha = Math.random() * 0.5 + 0.15
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.02 + 0.005
        this.color = Math.random() > 0.7 ? '#4A7C59' : '#5b9bd5'
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.pulse += this.pulseSpeed
        if (this.y > H + 10) this.reset()
        if (this.x < -10) this.x = W + 10
        if (this.x > W + 10) this.x = -10
      }
      draw() {
        const a = this.alpha * (0.7 + 0.3 * Math.sin(this.pulse))
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = a
        ctx.fill()
        // glow
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r * 2.5, 0, Math.PI * 2)
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 2.5)
        g.addColorStop(0, this.color + '40')
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.globalAlpha = a * 0.4
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Build initial particles
    for (let i = 0; i < 90; i++) particles.push(new Particle())

    // Neutralization bursts — random "zap" effects
    const bursts = []
    const addBurst = () => {
      const x = Math.random() * W
      const y = Math.random() * H
      bursts.push({ x, y, t: 0, maxT: 40 })
    }
    const burstInterval = setInterval(addBurst, 2400)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = '#5b9bd5'
            ctx.globalAlpha = (1 - dist / 100) * 0.12
            ctx.lineWidth = 0.5
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      particles.forEach(p => { p.update(); p.draw() })

      // Draw bursts
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i]
        b.t++
        const progress = b.t / b.maxT
        const radius = progress * 30
        const alpha = (1 - progress) * 0.6
        ctx.beginPath()
        ctx.arc(b.x, b.y, radius, 0, Math.PI * 2)
        ctx.strokeStyle = '#4A7C59'
        ctx.globalAlpha = alpha
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.globalAlpha = 1
        if (b.t >= b.maxT) bursts.splice(i, 1)
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      clearInterval(burstInterval)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} id="particle-canvas" aria-hidden="true" />
}

// ─── Breathing Orb ───────────────────────────────────────────────────────────
function BreathingOrb() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
      {/* Outer rings */}
      {[1, 2, 3].map(i => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-white/10"
          animate={{ scale: [1, 1.15 + i * 0.08, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
          style={{ margin: `-${i * 20}px` }}
        />
      ))}
      {/* Core glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(74,124,89,0.4) 0%, rgba(27,79,138,0.3) 50%, transparent 70%)' }}
        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Core circle */}
      <motion.div
        className="absolute inset-8 rounded-full border-2 border-white/20 flex items-center justify-center"
        style={{ background: 'radial-gradient(circle, rgba(91,155,213,0.3) 0%, rgba(27,79,138,0.5) 100%)' }}
        animate={{ scale: [0.97, 1.03, 0.97] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Inner molecule */}
        <svg viewBox="0 0 100 100" className="w-32 h-32 opacity-60">
          <circle cx="50" cy="50" r="12" fill="white" fillOpacity="0.9" />
          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const x2 = 50 + 28 * Math.cos(rad)
            const y2 = 50 + 28 * Math.sin(rad)
            return (
              <g key={i}>
                <line x1="50" y1="50" x2={x2} y2={y2} stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle cx={x2} cy={y2} r="6" fill="white" fillOpacity="0.7" />
              </g>
            )
          })}
        </svg>
        {/* Active purification text */}
        <div className="absolute bottom-5 left-0 right-0 text-center">
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-white/70 tracking-widest uppercase font-medium"
          >
            Active
          </motion.div>
        </div>
      </motion.div>

      {/* Orbiting particles */}
      {[0, 120, 240].map((startDeg, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="absolute w-3 h-3 rounded-full bg-green-400"
            style={{
              top: '10%',
              left: '50%',
              transform: `translateX(-50%) rotate(${startDeg}deg)`,
              boxShadow: '0 0 8px rgba(74,124,89,0.8)',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

// ─── Trust Badges ─────────────────────────────────────────────────────────────
const badges = [
  { icon: <Building2 className="w-5 h-5 text-blue-300" />, label: 'FDA Class II', sub: 'Medical Device Cleared' },
  { icon: <FlaskConical className="w-5 h-5 text-green-300" />, label: 'Peer-Reviewed', sub: 'Published Science' },
  { icon: <Rocket className="w-5 h-5 text-purple-300" />, label: 'NASA-Origin', sub: 'Space Station Tech' },
  { icon: <CheckCircle2 className="w-5 h-5 text-green-300" />, label: '99.9% Proven', sub: 'Pathogen Reduction' },
]

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient bg-hero-pattern">
      <ParticleCanvas />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-transparent to-navy-950/60 pointer-events-none" />

      <div className="container-pad relative z-10 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div>
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Now Serving Mesa & Phoenix Valley</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6"
            >
              Breathe Air So
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-400">
                Clean, You'll Feel It.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              We install Air Scrubber by ActivePure® — NASA-origin technology that continuously eliminates viruses, bacteria, mold, and VOCs from your Arizona home or business. Proven by peer-reviewed science.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                to="/assessment"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-green-500 hover:bg-green-400 text-white font-bold text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-glow-green hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Get Free Air Quality Assessment
              </Link>
              <Link
                to="/science"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/30 text-white font-semibold text-base rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                See the Science
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {badges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-card px-3 py-2.5 text-center"
                >
                  <div className="flex justify-center mb-1">{b.icon}</div>
                  <div className="text-white font-semibold text-xs">{b.label}</div>
                  <div className="text-white/50 text-xs">{b.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Orb Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex justify-center"
          >
            <BreathingOrb />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
