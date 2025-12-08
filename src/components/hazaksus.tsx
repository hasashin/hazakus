import { cn } from '@/lib/utils'

export interface HazaksusProps {
  variant?: 'default' | 'loading'
}

export function Hazaksus({ variant = 'default' }: HazaksusProps) {
  return (
    <p className={
      cn(
        'text-center text-primary text-5xl mt-40',
        variant === 'loading' ? 'motion-safe:animate-bounce' : '')
    }
    >
      hazak.ඞ
    </p>
  )
}
