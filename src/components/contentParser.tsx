import React from 'react'
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer'

export interface ContentParserProps {
  children?: React.ReactNode
  content?: BlocksContent
}

export function ContentParser({ children, content }: ContentParserProps) {
  return (
    <div className="grow items-center align-middle justify-center">
      { children }
      { content
        ? (
            <BlocksRenderer
              content={content}
              blocks={{
                paragraph: ({ children }) => <p className="mb-4 text-base leading-5">{ children }</p>,
                heading: ({ children, level }) => {
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
              }}
            />
          )
        : null }
    </div>
  )
}
