import type { StrapiComponentCapability } from '@/types/component'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import { DynamicIcon, iconNames, type IconName } from 'lucide-react/dynamic'

export interface CardsParserProps {
  content?: StrapiComponentCapability[]
}

function ParseCards(items: StrapiComponentCapability[]) {
  const cards = items.map(item => (
    <Card className="max-w-sm min-h-40">
      <CardHeader>
        <CardTitle>{ item.title }</CardTitle>
      </CardHeader>
      { item.iconName && item.iconName in iconNames
        ? (
            <CardAction>
              <Button variant="link"><DynamicIcon name={item.iconName as IconName} /></Button>
            </CardAction>
          )
        : null }
      <CardContent>
        <CardDescription>{ item.description }</CardDescription>
      </CardContent>
    </Card>
  ))
  return cards
}

export function CardsParser({ content }: CardsParserProps) {
  return (
    <div className="grow items-center align-middle justify-around flex flex-wrap gap-4">
      { content
        ? (
            ParseCards(content)
          )
        : null }
    </div>
  )
}
