import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Link } from '@radix-ui/react-navigation-menu'

export interface MainMenuProps {
  pages: { url: string, title: string }[]
}

export function MainMenu(pages: MainMenuProps) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {pages.pages.map(page => (
          <NavigationMenuItem key={page.url}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href={page.url} className="text-primary">{page.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
