import { cn } from '../../lib/utils'  // Changed from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Container({ 
  children, 
  className,
  size = 'lg'
}: ContainerProps) {
  const maxWidth = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  }
  
  return (
    <div className={cn('w-full px-4 sm:px-6 lg:px-8 mx-auto', maxWidth[size], className)}>
      {children}
    </div>
  )
}