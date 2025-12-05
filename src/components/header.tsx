import { Link } from 'react-router'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Spacer } from '@/components/spacer'
import { MainMenu } from '@/components/main-menu'
import { LanguageSwitcher } from '@/components/language-switcher'
import type { PagesList } from '@/lib/pages'

export interface HeaderProps {
  pages: PagesList
}

export function Header({ pages }: HeaderProps) {
  return (
    <div className="h-header min-w-screen top-auto items-center-safe">
      <div className="flex w-screen lg:w-5xl mt-3 lg:mx-auto items-left">
        <div className="pl-2 md:pl-0">
          <Button variant="ghost">
            <Link to="/" className="text-4xl text-primary!">
              ඞ
            </Link>
          </Button>
        </div>
        <div className="hidden md:flex items-left w-full">
          <MainMenu pages={pages} />
          <Spacer />
          <ModeToggle />
          <LanguageSwitcher />
        </div>
        <div className="flex md:hidden items-left w-full pr-2">
          <Spacer />
          <MainMenu pages={pages} variant="mobile" />
        </div>
      </div>
    </div>
  )
}
