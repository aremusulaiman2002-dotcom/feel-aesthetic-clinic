import { Container } from '@/components/ui/Container'
import { treatments, categories } from '@/data/treatments'
import { TreatmentsContent } from './TreatmentsContent'
import { Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Our Treatments | Feel Aesthetic Clinic',
  description: 'Expert aesthetic treatments performed by Nurse Practitioner Funmi. Natural, subtle results with medical precision.',
}

export default function TreatmentsPage() {
  // Group treatments by category (server-side)
  const treatmentsByCategory = categories.map(category => ({
    ...category,
    treatments: treatments.filter(t => t.category === category.id)
  })).filter(cat => cat.treatments.length > 0)

  // Get package treatments (server-side)
  const packageTreatments = treatments.filter(t => t.category === 'packages' && t.isPopular).slice(0, 4)

  return (
    <>
      {/* Hero Section - Server Component */}
      <section className="bg-gradient-to-b from-white to-off-white border-b border-border">
        <Container>
          <div className="section-lg text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-off-white text-dark-gray rounded-full px-4 py-2 text-sm font-medium mb-6 border border-border">
              <Sparkles className="w-4 h-4" />
              Our Treatments
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              Expert Aesthetic Treatments
            </h1>
            <p className="text-lg lg:text-xl text-medium-gray leading-relaxed">
              All treatments are performed by Nurse Practitioner Funmi, ensuring the highest standards 
              of medical safety and natural-looking results.
            </p>
          </div>
        </Container>
      </section>

      {/* Client Component with Interactivity */}
      <TreatmentsContent 
        categories={categories}
        treatmentsByCategory={treatmentsByCategory}
        packageTreatments={packageTreatments}
      />
    </>
  )
}