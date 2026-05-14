import ScrollReveal from '../shared/ScrollReveal'

const threats = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="10" fill="#1B4F8A" fillOpacity="0.15" stroke="#1B4F8A" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="4" fill="#1B4F8A" fillOpacity="0.8"/>
        {[0,45,90,135,180,225,270,315].map((deg,i)=>{
          const r=(deg*Math.PI)/180; const x=24+14*Math.cos(r); const y=24+14*Math.sin(r)
          return <line key={i} x1={24+10*Math.cos(r)} y1={24+10*Math.sin(r)} x2={x} y2={y} stroke="#1B4F8A" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
        })}
      </svg>
    ),
    title: 'Viruses & Bacteria',
    body: 'Common cold, flu, COVID-19, RSV, and strep thrive in indoor air — especially in Arizona homes with sealed HVAC systems running year-round.',
    stat: '99.9% eliminated',
    color: 'border-navy-200',
    statColor: 'text-navy-700',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 8 C18 12 10 16 10 24 C10 34 17 40 24 40 C31 40 38 34 38 24 C38 16 30 12 24 8Z" fill="#4A7C59" fillOpacity="0.15" stroke="#4A7C59" strokeWidth="1.5"/>
        <path d="M24 16 C21 18 18 21 18 24 C18 27.3 21 30 24 30 C27 30 30 27.3 30 24 C30 21 27 18 24 16Z" fill="#4A7C59" fillOpacity="0.6"/>
      </svg>
    ),
    title: 'Mold & Mildew',
    body: 'Arizona\'s monsoon season and poor ventilation create perfect conditions for mold growth. Mold spores trigger respiratory issues and structural damage.',
    stat: '99.99% reduced',
    color: 'border-green-200',
    statColor: 'text-green-600',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M14 38 L24 8 L34 38" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
        <path d="M10 38 L20 18 L24 8 L28 18 L38 38" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4"/>
        <circle cx="24" cy="30" r="3" fill="#D97706" fillOpacity="0.7"/>
      </svg>
    ),
    title: 'VOCs & Chemicals',
    body: 'Volatile organic compounds from paint, cleaning products, building materials, and wildfire smoke cause headaches, fatigue, and long-term health risks.',
    stat: 'Up to 97% removed',
    color: 'border-amber-200',
    statColor: 'text-amber-600',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {[8,12,16,20,24,28,32,36,40].map((cx,i)=>(
          <circle key={i} cx={cx} cy={16+((i%3)*8)} r="2.5" fill="#7C3AED" fillOpacity={0.3+i*0.07}/>
        ))}
        <path d="M8 36 Q18 28 28 36 Q38 44 48 36" stroke="#7C3AED" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: 'Allergens & Dust',
    body: 'Arizona is notorious for dust, pollen, and pet dander. Indoor allergen levels are often higher than outdoors, triggering asthma and allergy flares.',
    stat: 'Continuous capture',
    color: 'border-purple-200',
    statColor: 'text-purple-600',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 10 C20 14 16 18 16 22 C16 26.4 19.6 30 24 30 C28.4 30 32 26.4 32 22 C32 18 28 14 24 10Z" fill="#EF4444" fillOpacity="0.15" stroke="#EF4444" strokeWidth="1.5"/>
        <path d="M24 18 C22 20 20 22 20 24 C20 26.2 21.8 28 24 28 C26.2 28 28 26.2 28 24 C28 22 26 20 24 18Z" fill="#EF4444" fillOpacity="0.5"/>
        <path d="M18 36 Q24 32 30 36" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4"/>
      </svg>
    ),
    title: 'Pet Odors & Smoke',
    body: 'Cooking, pets, and wildfire smoke leave odor molecules embedded in your air. ActivePure\'s Hydroxyl Radical technology neutralizes odors at the molecular level.',
    stat: 'Neutralized at source',
    color: 'border-red-200',
    statColor: 'text-red-600',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="10" y="20" width="28" height="18" rx="2" fill="#0891B2" fillOpacity="0.15" stroke="#0891B2" strokeWidth="1.5"/>
        <path d="M16 20 V16 C16 12.7 18.7 10 22 10 H26 C29.3 10 32 12.7 32 16 V20" stroke="#0891B2" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="24" cy="29" r="3" fill="#0891B2" fillOpacity="0.7"/>
        <rect x="22.5" y="29" width="3" height="5" rx="1.5" fill="#0891B2" fillOpacity="0.7"/>
      </svg>
    ),
    title: 'Wildfire Smoke',
    body: 'Arizona wildfires push fine particulate matter (PM2.5) through every gap in your home. These ultra-fine particles bypass standard filters and damage lung tissue.',
    stat: 'PM2.5 captured',
    color: 'border-cyan-200',
    statColor: 'text-cyan-700',
  },
]

export default function WhyIAQ() {
  return (
    <section className="section-pad bg-cream-100">
      <div className="container-pad">
        {/* Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-6">
          <span className="inline-block bg-navy-700/10 text-navy-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Did You Know?
          </span>
          <h2 className="section-heading mb-4">
            Your Indoor Air May Be the <br className="hidden md:block"/>
            <em className="not-italic text-red-600">Biggest Health Risk</em> in Your Home
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1} className="text-center mb-14">
          <p className="section-subheading mx-auto">
            The EPA reports indoor air is <strong className="text-navy-700">2 to 5 times more polluted</strong> than outdoor air.
            In Arizona, sealed HVAC systems, dust storms, and monsoon humidity compound the problem year-round.
          </p>
        </ScrollReveal>

        {/* EPA Stat Banner */}
        <ScrollReveal variant="scaleUp" delay={0.15} className="mb-14">
          <div className="bg-navy-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-lg">
            <div className="flex-shrink-0">
              <div className="text-6xl md:text-7xl font-serif font-bold text-white leading-none">2–5×</div>
              <div className="text-green-300 font-semibold text-sm mt-1">More Polluted Indoors</div>
            </div>
            <div className="w-px h-16 bg-white/20 hidden md:block" />
            <div>
              <p className="text-white/90 text-lg font-medium leading-relaxed">
                "People spend approximately 90% of their time indoors, where the concentrations of some pollutants are often 2 to 5 times higher than typical outdoor concentrations."
              </p>
              <p className="text-white/50 text-sm mt-2">— U.S. Environmental Protection Agency (EPA)</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Threat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {threats.map((t, i) => (
            <ScrollReveal key={t.title} variant="fadeUp" delay={i * 0.07}>
              <div className={`card h-full border-t-4 ${t.color} p-6`}>
                <div className="mb-4">{t.icon}</div>
                <h3 className="font-serif font-bold text-navy-800 text-xl mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.body}</p>
                <div className={`inline-block text-sm font-semibold ${t.statColor} bg-gray-50 border border-gray-100 px-3 py-1 rounded-full`}>
                  {t.stat}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
