import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { Camera } from 'lucide-react'

export const metadata = {
  title: 'Before & After Gallery | Feel Aesthetic Clinic',
  description: 'View natural, subtle results from our nurse-led aesthetic treatments. All results achieved by Nurse Practitioner Funmi.',
}

// Mock gallery data - replace with actual images
const galleryItems = [
  {
    id: 1,
    beforeImage: '/images/gallery/lip-filler-before.jpg',
    afterImage: '/images/gallery/lip-filler-after.jpg',
    treatmentName: 'Lip Filler - 1ml',
    category: 'lip-filler',
    categoryName: 'Lip Enhancement'
  },
  {
    id: 2,
    beforeImage: '/images/gallery/botox-before.jpg',
    afterImage: '/images/gallery/botox-after.jpg',
    treatmentName: 'Anti-Wrinkle - Forehead',
    category: 'botox',
    categoryName: 'Anti-Wrinkle'
  },
  {
    id: 3,
    beforeImage: '/images/gallery/cheek-filler-before.jpg',
    afterImage: '/images/gallery/cheek-filler-after.jpg',
    treatmentName: 'Cheek Filler - 1ml',
    category: 'filler',
    categoryName: 'Dermal Fillers'
  },
  {
    id: 4,
    beforeImage: '/images/gallery/jaw-filler-before.jpg',
    afterImage: '/images/gallery/jaw-filler-after.jpg',
    treatmentName: 'Jawline Contouring',
    category: 'filler',
    categoryName: 'Dermal Fillers'
  },
  {
    id: 5,
    beforeImage: '/images/gallery/nose-filler-before.jpg',
    afterImage: '/images/gallery/nose-filler-after.jpg',
    treatmentName: 'Liquid Rhinoplasty',
    category: 'filler',
    categoryName: 'Dermal Fillers'
  },
  {
    id: 6,
    beforeImage: '/images/gallery/under-eye-before.jpg',
    afterImage: '/images/gallery/under-eye-after.jpg',
    treatmentName: 'Tear Trough',
    category: 'filler',
    categoryName: 'Under Eye'
  }
]

// Get unique categories
const categories = [
  { id: 'all', name: 'All', count: galleryItems.length },
  { id: 'lip-filler', name: 'Lip Enhancement', count: galleryItems.filter(i => i.category === 'lip-filler').length },
  { id: 'botox', name: 'Anti-Wrinkle', count: galleryItems.filter(i => i.category === 'botox').length },
  { id: 'filler', name: 'Dermal Fillers', count: galleryItems.filter(i => i.category === 'filler').length },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-off-white border-b border-border">
        <Container>
          <div className="section-lg text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-off-white text-dark-gray rounded-full px-4 py-2 text-sm font-medium mb-6 border border-border">
              <Camera className="w-4 h-4" />
              Before & After Gallery
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              Real Results, Real Patients
            </h1>
            <p className="text-lg lg:text-xl text-medium-gray leading-relaxed">
              Every result reflects our commitment to natural, subtle enhancements. 
              All treatments performed by Nurse Practitioner Funmi.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <Section background="white">
        <Container>
          <GalleryGrid items={galleryItems} categories={categories} />
        </Container>
      </Section>

      {/* Medical Disclaimer */}
      <section className="bg-off-white border-y border-border">
        <Container>
          <div className="py-8 text-center">
            <p className="text-sm text-medium-gray max-w-2xl mx-auto">
              Individual results may vary. All images show real patients of Feel Aesthetic Clinic 
              with their consent. Results are not guaranteed and depend on various factors.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}