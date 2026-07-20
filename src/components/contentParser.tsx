import React from 'react'
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer'
import type { StrapiPageSingle } from '@/types/single'
import { CardsParser, type CardElement } from './cardsParser'
import { CarouselBuilder, type CarouselElement } from './carouselBuilder'
import { Spacer } from './spacer'
import type { StrapiComponentSpacer } from '@/types/component'

export interface ContentParserProps {
  children?: React.ReactNode
  content?: StrapiPageSingle
}

const blockRenderers = {
  paragraph: ({ children }: { children?: React.ReactNode }) => {
    return <p className="mb-4 text-base leading-5">{ children }</p>
  },
  heading: ({ children, level }: { children?: React.ReactNode, level: 1 | 2 | 3 | 4 | 5 | 6 }) => {
    switch (level) {
      case 1:
        return <h1 className="text-4xl font-bold mb-6 mt-10">{children}</h1>
      case 2:
        return <h2 className="text-3xl font-bold mb-5 mt-8">{children}</h2>
      case 3:
        return <h3 className="text-2xl font-bold mb-4 mt-6">{children}</h3>
      case 4:
        return <h4 className="text-xl font-bold mb-3 mt-5">{children}</h4>
      case 5:
        return <h5 className="text-lg font-bold mb-2 mt-4">{children}</h5>
      default:
        return <h6 className="text-base font-bold mb-1 mt-3">{children}</h6>
    }
  },
}

function ParseContent(content: StrapiPageSingle) {
  const translatedContent: React.ReactNode[] = []
  for (const elem of content.pageLayout) {
    switch (elem.Type) {
      case 'richText':
        translatedContent.push(
          <BlocksRenderer content={content[elem.Name] as BlocksContent} blocks={blockRenderers} />,
        )
        break
      case 'cards':
        translatedContent.push(
          <CardsParser content={content[elem.Name] as CardElement[]} />,
        )
        break
      case 'carousel':
        translatedContent.push(
          <CarouselBuilder content={content[elem.Name] as CarouselElement[]} />
        )
        break
      case 'spacer':
        translatedContent.push(
          <Spacer spacerData={content[elem.Name] as StrapiComponentSpacer} />
        )
        break
      case 'markdown':
        translatedContent.push(
          <div className="prose max-w-none">
            {content[elem.Name] as string}
          </div>
        )
        break
      case 'json':
        translatedContent.push(
          <div>
            {content[elem.Name] as string}
          </div>
        )
      default:
        break
    }
  }
  return translatedContent
}

export function ContentParser({ children, content }: ContentParserProps) {
  const translatedContent = content ? ParseContent(content) : []
  return (
    <div className="grow items-center align-middle justify-center">
      { children }
      { translatedContent }
    </div>
  )
}
