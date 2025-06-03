import React from 'react'

type HeaderProps = { children: React.ReactNode }
export function Header({ children }: HeaderProps) {
  return (
    <div className="flex top-0 w-4xl mx-auto items-center justify-between">
      { children }
    </div>
  )
}
