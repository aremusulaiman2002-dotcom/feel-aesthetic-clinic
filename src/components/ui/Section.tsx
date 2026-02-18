import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  background?: 'white' | 'cream' | 'sage-light' | 'sage-soft' | 'none'
}

export function Section({ 
  children, 
  className,
  containerClassName,
  id,
  spacing = 'lg',
  background = 'none'
}: SectionProps) {
  
  const spacingClasses = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-24'
  }

  const backgroundClasses = {
    white: 'bg-white',
    cream: 'bg-background',
    'sage-light': 'bg-primary/5',
    'sage-soft': 'bg-primary/10',
    none: ''
  }

  return (
    <section 
      id={id} 
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      <div className={cn(
        'container-narrow',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  )
}