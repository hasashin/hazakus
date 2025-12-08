import { language } from '@/lib/languages'
import { strapiGet } from '@/lib/utils'
import type { Route } from './+types/index'
import { Hazaksus } from '@/components/hazaksus'
import { ContentParser } from '@/components/contentParser'
import type { StrapiSingularResponse } from '@/types/common'
import { CardsParser } from '@/components/cardsParser'
import type { StrapiPageIndex } from '@/types/single'

export async function clientLoader() {
  const rawContent = await strapiGet('index', { locale: language, populate: '*' })
  let content = null
  if (rawContent) {
    content = (rawContent as StrapiSingularResponse).data
  }
  return {
    pageContent: content ? content : undefined,
    children: content ? undefined : <Hazaksus />,
  }
}

export default function IndexPage({ loaderData }: Route.ComponentProps) {
  const { pageContent, children } = loaderData
  const { intro, capabilities } = pageContent as StrapiPageIndex
  return (
    <>
      <ContentParser content={intro}>
        { children }
      </ContentParser>
      <CardsParser content={capabilities} />
    </>
  )
}
