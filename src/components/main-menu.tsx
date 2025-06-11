import { Link } from 'react-router'
import { Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useTranslation } from 'react-i18next'
import type { PagesList } from '@/lib/pages'
import type { TFunction } from 'i18next'

export interface MainMenuProps {
  pages: PagesList
  variant?: 'regular' | 'mobile'
}

const regularMenu = function (pages: PagesList, t: TFunction) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {pages.map(page => (
          <NavigationMenuItem key={page.url} className="hidden md:flex">
            <Separator orientation="vertical" className="h-6 mx-1" />
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to={page.url} className="text-primary!">{t(page.title)}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const mobileMenu = function (pages: PagesList, t: TFunction) {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t('menu_title')}</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <div className="flex flex-col gap-2 items-start">
          {pages.map(page => (
            <SheetClose key={page.url} asChild className="p-3">
              <Link to={page.url} className="text-primary!">{t(page.title)}</Link>
            </SheetClose>
          ))}
          <div className="position-self-end">
            <ModeToggle />
          </div>
          <div className="w-full p-2">
            <LanguageSwitcher />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function MainMenu({ pages, variant = 'regular' }: MainMenuProps) {
  const { t } = useTranslation()
  switch (variant) {
    case 'regular':
      return regularMenu(pages, t)
    case 'mobile':
      return mobileMenu(pages, t)
    default:
      return regularMenu(pages, t)
  }
}
