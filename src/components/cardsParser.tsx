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
import { DynamicIcon, iconNames } from 'lucide-react/dynamic'
import type { IconName } from 'lucide-react/dynamic'

export type CardElement = StrapiComponentCapability

export interface CardsParserProps {
  content?: CardElement[]
}

function ParseCards(items: CardElement[]) {
  const cards = items.map((item, index) => (
    <Card key={index} className="max-w-sm min-h-40">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">{ item.title }</CardTitle>
        { item.iconName &&  iconNames.includes(item.iconName as IconName)
          ? (
              <CardAction>
                <Button variant="link"><DynamicIcon name={item.iconName as IconName} /></Button>
              </CardAction>
            )
          : null }
      </CardHeader>
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
