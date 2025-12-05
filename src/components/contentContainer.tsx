import React from 'react'

export interface ContentContainerProps {
  children?: React.ReactNode
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div className="grow items-center align-middle justify-center">
      { children }
    </div>
  )
}
