import { ArrowRight, Clock, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { treatments } from '@/data/treatments'

export function TreatmentsSection() {
  const popularTreatments = treatments.filter(t => t.isPopular).slice(0, 3)

  return (
    <section className="section bg-background">
      <div className="container-narrow">
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-3 lg:mb-4">
            <TrendingUp className="w-4 h-4" />
            Popular Treatments
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
            Expert Aesthetic Treatments
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Discover our most sought-after treatments, carefully curated to deliver natural-looking 
            results with the highest standards of medical safety.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {popularTreatments.map((treatment) => (
            <div 
              key={treatment.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Treatment Header */}
              <div className="p-6 lg:p-8">
                <div className="mb-4 lg:mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors leading-tight">
                    {treatment.title}
                  </h3>
                  <div className="flex items-center gap-4 text-base lg:text-lg">
                    <span className="font-bold text-primary text-xl lg:text-2xl">
                      {typeof treatment.pricing === 'string' ? treatment.pricing : `From ${treatment.pricing[0].price}`}
                    </span>
                    {treatment.duration && (
                      <span className="flex items-center gap-2 text-text-light">
                        <Clock className="w-4 h-4 lg:w-5 lg:h-5" />
                        {treatment.duration}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-text-secondary mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                  {treatment.description}
                </p>

                {/* Compliance Note if exists */}
                {treatment.complianceNote && (
                  <div className="mb-4 lg:mb-6 p-3 lg:p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm lg:text-base text-text-secondary italic leading-relaxed">
                      {treatment.complianceNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                <Link 
                  href={`/treatments/${treatment.slug}`}
                  className="btn btn-outline btn-md lg:btn-lg w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Preview */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 border border-border mb-8 lg:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { name: 'Dermal Fillers', count: '8+ Treatments', color: 'primary' },
              { name: 'Botox', count: '6 Areas', color: 'accent' },
              { name: 'Skin Treatments', count: '4 Facials', color: 'secondary' },
              { name: 'Packages', count: '5 Options', color: 'primary' },
            ].map((category, index) => (
              <div 
                key={index} 
                className="group p-4 lg:p-5 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
                style={{ 
                  background: `linear-gradient(135deg, var(--color-${category.color})/5, var(--color-${category.color})/10)`,
                }}
              >
                <div className="flex justify-between items-center mb-2 lg:mb-3">
                  <h4 className="font-bold text-text-primary text-base lg:text-lg">{category.name}</h4>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-text-light group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm lg:text-base text-text-secondary">{category.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/treatments" 
            className="btn btn-primary btn-lg lg:btn-lg inline-flex items-center px-8 lg:px-10"
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