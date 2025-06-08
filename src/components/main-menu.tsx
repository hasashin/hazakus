import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router'
import { Separator } from '@/components/ui/separator'

export interface MainMenuProps {
  pages: { url: string, title: string }[]
}

export function MainMenu(pages: MainMenuProps) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {pages.pages.map(page => (
          <NavigationMenuItem key={page.url}>
            <Separator orientation="vertical" />
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to={page.url} className="text-primary!">{page.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
