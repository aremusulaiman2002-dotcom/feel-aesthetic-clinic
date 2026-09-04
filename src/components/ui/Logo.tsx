import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md'
  className?: string
  onClick?: () => void
}

export function Logo({ size = 'sm', className, onClick }: LogoProps) {
  const circleSize = size === 'sm' ? 'w-8 h-8 md:w-10 md:h-10' : 'w-10 h-10 md:w-12 md:h-12'
  const circleText = size === 'sm' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
  const nameText = size === 'sm' ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
  const taglineText = size === 'sm' ? 'text-xs' : 'text-xs md:text-sm'

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn('flex items-center gap-2 md:gap-3', className)}
    >
      <div className={cn(circleSize, 'bg-black rounded-full flex items-center justify-center flex-shrink-0')}>
        <span className={cn('text-white font-serif font-bold', circleText)}>F</span>
      </div>
      <div>
        <div className={cn('font-serif font-bold tracking-tight text-black', nameText)}>
          Feel
        </div>
        <div className={cn('tracking-widest text-light-gray', taglineText)}>
          AESTHETIC CLINIC
        </div>
      </div>
    </Link>
  )
}
