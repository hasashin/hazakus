import React from 'react'

type BodyProps = { children?: React.ReactNode }
export function Body({ children }: BodyProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-auto max-w-4xl p-6">
        { children }
      </div>
    </div>
  )
}
