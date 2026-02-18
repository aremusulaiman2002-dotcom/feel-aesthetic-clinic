import { Treatment } from '@/data/treatments'
import { cn } from '@/lib/utils'

interface PriceDisplayProps {
  treatment: Treatment
  className?: string
  variant?: 'default' | 'compact' | 'large'
}

export function PriceDisplay({ treatment, className, variant = 'default' }: PriceDisplayProps) {
  
  const sizeClasses = {
    default: 'text-xl',
    compact: 'text-lg',
    large: 'text-2xl lg:text-3xl'
  }

  // Handle string pricing (single price)
  if (typeof treatment.pricing === 'string') {
    return (
      <span className={cn('font-bold text-primary', sizeClasses[variant], className)}>
        {treatment.pricing}
      </span>
    )
  }

  // Handle array pricing (multiple options)
  if (Array.isArray(treatment.pricing)) {
    if (variant === 'compact') {
      return (
        <span className={cn('font-bold text-primary', sizeClasses[variant], className)}>
          From {treatment.pricing[0].price}
        </span>
      )
    }

    return (
      <div className={cn('space-y-1', className)}>
        <span className="text-xs text-text-light block">Starting from</span>
        {treatment.pricing.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-4 text-sm">
            <span className="text-text-secondary">{item.option}</span>
            <span className="font-semibold text-primary">{item.price}</span>
          </div>
        ))}
      </div>
    )
  }

  return null
}