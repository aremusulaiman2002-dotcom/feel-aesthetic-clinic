import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { TreatmentsSection } from '@/components/sections/TreatmentsSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>        
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </>
  )
}