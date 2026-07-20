import { cn } from '@/lib/utils'
import type { StrapiComponentSpacer } from '@/types/component'

const spacerSizes = {
  xs: 'h-4',
  sm: 'h-8',
  md: 'h-12',
  lg: 'h-20',
  xl: 'h-32',
} as const

export type SpacerSize = keyof typeof spacerSizes

type SpacerProps = {
  spacerData?: StrapiComponentSpacer
  className?: string
}

export function Spacer({ spacerData, className }: SpacerProps) {
  let size = spacerData?.size ?? 'md' as SpacerSize
  return (
    <div
      aria-hidden="true"
      className={cn('w-full shrink-0', spacerSizes[size], className)}
    />
  )
}
