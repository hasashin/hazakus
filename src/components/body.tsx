import React from 'react'

type BodyProps = { children?: React.ReactNode }
export function Body({ children }: BodyProps) {
  return (
    <div className="min-h-calc-hf bg-background">
      <div className="flex max-w-4xl p-6 m-auto">
        { children }
      </div>
    </div>
  )
}
