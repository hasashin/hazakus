import React from 'react'

type BodyProps = { children?: React.ReactNode }
export function Body({ children }: BodyProps) {
  return (
    <div className="min-h-calc-hf">
      <div className="flex max-w-4xl p-6 m-auto flex-col">
        { children }
      </div>
    </div>
  )
}
