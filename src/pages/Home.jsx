import SEOHead from '../components/shared/SEOHead'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import WhyIAQ from '../components/home/WhyIAQ'
import HowItWorks from '../components/home/HowItWorks'
import ScienceSection from '../components/home/ScienceSection'
import ResidentialCommercial from '../components/home/ResidentialCommercial'
import AssessmentCTA from '../components/home/AssessmentCTA'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'

export default function Home() {
  return (
    <>
      <SEOHead
        canonical="/"
        title="Pure Air Solutions — Mesa Arizona Air Purification Specialists"
        description="Mesa, AZ's authorized Air Scrubber by ActivePure dealer. NASA-origin technology that eliminates 99.9% of viruses, bacteria, and mold from your Arizona home. Free air quality assessment."
      />
      <Hero />
      <TrustBar />
      <WhyIAQ />
      <HowItWorks />
      <ScienceSection />
      <ResidentialCommercial />
      <AssessmentCTA />
      <Testimonials />
      <FAQ />
    </>
  )
}
