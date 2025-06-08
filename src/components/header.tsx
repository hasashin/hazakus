import React from 'react'
import { Link } from 'react-router'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Spacer } from '@/components/spacer'

type HeaderProps = { children: React.ReactNode }
export function Header({ children }: HeaderProps) {
  return (
    <div className="h-header min-w-screen top-auto items-center-safe">
      <div className="flex w-5xl mt-3 mx-auto items-left">
        <Button variant="ghost" className=""><Link to="/" className="text-4xl text-primary!">ඞ</Link></Button>
        <div className="flex flex-col items-start justify-center">
          { children }
        </div>
        <Spacer flex />
        <ModeToggle />
      </div>
    </div>
  )
}
