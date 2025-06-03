import React from 'react'
import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'

type HeaderProps = { children: React.ReactNode }
export function Header({ children }: HeaderProps) {
  return (
    <div className="min-w-screen top-auto items-center-safe">
      <div className="flex w-4xl mx-auto items-left">
        <img src="/logo.svg" className="w-32 h-32 m-2" />
        <Separator orientation="vertical" />
        <div className="flex flex-col items-start justify-center">
          { children }
        </div>
      </div>
      <ModeToggle />
    </div>
  )
}
