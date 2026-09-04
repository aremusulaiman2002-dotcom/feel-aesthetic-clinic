import { ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import { treatments } from '@/data/treatments'
import { cn } from '@/lib/utils'

export function TreatmentsSection() {
  const popularTreatments = treatments.filter(t => t.isPopular).slice(0, 3)

  return (
    <section className="section bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl lg:max-w-4xl mb-8 lg:mb-12">
          <p className="text-sm font-medium text-primary-deep mb-3 lg:mb-4">
            Popular Treatments
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
            Expert Aesthetic Treatments
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Discover our most sought-after treatments, carefully curated to deliver natural-looking
            results with the highest standards of medical safety.
          </p>
        </div>

        {/* Treatments List */}
        <div className="mb-8 lg:mb-12">
          {popularTreatments.map((treatment, index) => (
            <div key={treatment.id} className={cn('group py-6 lg:py-8', index !== 0 && 'divider')}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                <div className="md:flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-primary-deep transition-colors leading-tight">
                      {treatment.title}
                    </h3>
                    <span className="font-bold text-primary-deep text-lg lg:text-xl">
                      {typeof treatment.pricing === 'string' ? treatment.pricing : `From ${treatment.pricing[0].price}`}
                    </span>
                    {treatment.duration && (
                      <span className="flex items-center gap-2 text-text-light text-sm">
                        <Clock className="w-4 h-4" />
                        {treatment.duration}
                      </span>
                    )}
                  </div>

                  <p className="text-text-secondary leading-relaxed">
                    {treatment.description}
                  </p>

                  {treatment.complianceNote && (
                    <p className="text-sm text-text-secondary italic leading-relaxed mt-2">
                      {treatment.complianceNote}
                    </p>
                  )}
                </div>

                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="inline-flex items-center gap-2 font-medium text-text-primary hover:text-primary-deep transition-colors flex-shrink-0"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Preview */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-8 lg:mb-12 text-sm lg:text-base">
          {[
            { name: 'Dermal Fillers', count: '8+ Treatments' },
            { name: 'Botox', count: '6 Areas' },
            { name: 'Skin Treatments', count: '4 Facials' },
            { name: 'Packages', count: '5 Options' },
          ].map((category, index) => (
            <span key={index} className="text-text-secondary">
              <span className="font-semibold text-text-primary">{category.name}</span>
              {' '}· {category.count}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            href="/treatments"
            className="btn btn-primary btn-lg inline-flex items-center px-8 lg:px-10"
          >
            <span className="text-base lg:text-lg">View All Treatments</span>
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 ml-2" />
          </Link>
          <p className="text-text-light text-sm lg:text-base mt-3 lg:mt-4">
            Consultation required for all prescription treatments
          </p>
        </div>
      </div>
    </section>
  )
}
