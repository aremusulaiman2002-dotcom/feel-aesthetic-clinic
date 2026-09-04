import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { TreatmentsSection } from '@/components/sections/TreatmentsSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/Footer'
import { SITE_URL } from '@/lib/site'

const clinicJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Feel Aesthetic Clinic',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: '+447576027243',
  email: 'anuaminu7@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1 Great Carleton Square',
    addressLocality: 'Edinburgh',
    postalCode: 'EH16 4TW',
    addressCountry: 'GB',
  },
  founder: {
    '@type': 'Person',
    name: 'Nurse Practitioner Funmi',
    jobTitle: 'Founder & Nurse Practitioner',
  },
  employee: {
    '@type': 'Person',
    name: 'Nurse Practitioner Funmi',
    jobTitle: 'Nurse Practitioner',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
      />
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