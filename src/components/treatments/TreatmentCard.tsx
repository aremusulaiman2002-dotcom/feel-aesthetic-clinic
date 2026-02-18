import Link from 'next/link'
import { Clock, ArrowRight, Award, AlertCircle } from 'lucide-react'
import { Treatment } from '@/data/treatments'
import { PriceDisplay } from './PriceDisplay'

interface TreatmentCardProps {
  treatment: Treatment
  variant?: 'default' | 'compact'
}

export function TreatmentCard({ treatment, variant = 'default' }: TreatmentCardProps) {
  const isCompact = variant === 'compact'

  return (
    <div className="group bg-white rounded-2xl border border-border hover:border-black hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Card Header */}
      <div className={`${isCompact ? 'p-5' : 'p-6'} flex-1`}>
        {/* Popular Badge */}
        {treatment.isPopular && (
          <div className="flex items-center gap-1.5 mb-3">
            <span className="inline-flex items-center gap-1 bg-off-white text-dark-gray text-xs font-medium px-2 py-1 rounded-full border border-border">
              <Award className="w-3 h-3" />
              Most Popular
            </span>
            {treatment.isNew && (
              <span className="inline-flex items-center gap-1 bg-off-white text-dark-gray text-xs font-medium px-2 py-1 rounded-full border border-border">
                New
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className={`font-bold text-black group-hover:text-black transition-colors ${
          isCompact ? 'text-lg mb-2' : 'text-xl lg:text-2xl mb-3'
        }`}>
          <Link href={`/treatments/${treatment.slug}`} className="hover:underline">
            {treatment.title}
          </Link>
        </h3>

        {/* Price & Duration */}
        <div className="flex items-center gap-4 mb-3">
          <PriceDisplay treatment={treatment} variant={isCompact ? 'compact' : 'default'} />
          
          {treatment.duration && (
            <span className="flex items-center gap-1 text-light-gray text-sm">
              <Clock className="w-4 h-4" />
              {treatment.duration}
            </span>
          )}
        </div>

        {/* Description */}
        <p className={`text-medium-gray ${
          isCompact ? 'text-sm mb-4' : 'text-base mb-5'
        }`}>
          {treatment.shortDescription || treatment.description}
        </p>

        {/* Compliance Note */}
        {treatment.complianceNote && (
          <div className="mb-4 p-3 bg-off-white rounded-lg border border-border">
            <p className="text-xs text-medium-gray italic flex items-start gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-dark-gray flex-shrink-0 mt-0.5" />
              {treatment.complianceNote}
            </p>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className={`${isCompact ? 'px-5 pb-5' : 'px-6 pb-6'} mt-auto`}>
        <Link
          href={`/treatments/${treatment.slug}`}
          className="btn btn-outline w-full group-hover:bg-black group-hover:text-white transition-all duration-300 border-black text-black hover:bg-black hover:text-white"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}