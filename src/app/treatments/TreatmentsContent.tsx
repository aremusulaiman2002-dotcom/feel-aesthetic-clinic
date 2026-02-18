'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { TreatmentCard } from '@/components/treatments/TreatmentCard'
import { TreatmentFilter } from '@/components/treatments/TreatmentFilter'
import { PriceDisplay } from '@/components/treatments/PriceDisplay'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Icon mapping - BLACK & WHITE ONLY
const categoryIcons: Record<string, React.ReactNode> = {
  'Sparkles': <span className="text-base">✨</span>,
  'Zap': <span className="text-base">⚡</span>,
  'Droplet': <span className="text-base">💧</span>,
  'Activity': <span className="text-base">📊</span>,
  'Syringe': <span className="text-base">💉</span>,
  'Droplets': <span className="text-base">💦</span>,
  'Flame': <span className="text-base">🔥</span>,
  'Leaf': <span className="text-base">🌿</span>,
  'Gift': <span className="text-base">🎁</span>
}

interface TreatmentsContentProps {
  categories: any[]
  treatmentsByCategory: any[]
  packageTreatments: any[]
}

export function TreatmentsContent({ 
  categories, 
  treatmentsByCategory, 
  packageTreatments 
}: TreatmentsContentProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    
    // Scroll to category section
    if (categoryId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(categoryId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Filter Section - REDESIGNED */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-sm border-b border-border">
        <Container>
          <div className="py-6">
            <TreatmentFilter 
              categories={categories.map(cat => ({
                ...cat,
                icon: categoryIcons[cat.icon]
              }))}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </Container>
      </section>

      {/* Treatments by Category */}
      <Section background="white">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {treatmentsByCategory.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
                  <div className="p-3 bg-off-white rounded-xl text-black border border-border">
                    {categoryIcons[category.icon]}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-black">{category.name}</h2>
                    <p className="text-medium-gray">
                      {category.count} {category.count === 1 ? 'treatment' : 'treatments'} available
                    </p>
                  </div>
                </div>

                {/* Treatments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.treatments.map((treatment: any) => (
                    <TreatmentCard key={treatment.id} treatment={treatment} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Packages Highlight */}
      <section className="bg-off-white border-y border-border">
        <Container>
          <div className="section-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-off-white text-dark-gray rounded-full px-4 py-2 text-sm font-medium mb-6 border border-border">
                  <span className="text-base">🎁</span>
                  Value Packages
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  Curated Treatment Packages
                </h2>
                <p className="text-lg text-medium-gray mb-8">
                  Our packages combine complementary treatments for comprehensive facial balancing 
                  and enhanced results at exceptional value.
                </p>
                <Link 
                  href="/packages" 
                  className="btn btn-primary btn-lg inline-flex items-center gap-2"
                >
                  View All Packages
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              {/* Package Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {packageTreatments.map((pkg: any) => (
                  <div 
                    key={pkg.id} 
                    className="bg-white rounded-xl p-4 border border-border hover:border-black transition-all duration-300 group"
                  >
                    <div className="text-xs font-semibold text-dark-gray mb-1 tracking-wider uppercase">
                      PACKAGE
                    </div>
                    <h3 className="font-bold text-black mb-1 group-hover:text-black transition-colors">
                      {pkg.title}
                    </h3>
                    
                    <div className="text-lg font-bold text-black mb-2">
                      <PriceDisplay treatment={pkg} variant="compact" />
                    </div>
                    
                    <p className="text-xs text-medium-gray line-clamp-2">
                      {pkg.shortDescription || pkg.description}
                    </p>
                    
                    <Link 
                      href={`/treatments/${pkg.slug}`}
                      className="inline-flex items-center gap-1 text-xs text-dark-gray font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Consultation CTA */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Not Sure Which Treatment is Right for You?
            </h2>
            <p className="text-lg text-medium-gray mb-8">
              Book a consultation with Nurse Practitioner Funmi for a comprehensive assessment 
              and personalized treatment recommendation.
            </p>
            <Link 
              href="/booking" 
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              Book Your Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-light-gray text-sm mt-4">
              All treatments require an initial consultation
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}