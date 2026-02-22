import { language } from '@/lib/languages'
import { strapiGet } from '@/lib/utils'
import type { Route } from './+types/portfolio'
import { Hazaksus } from '@/components/hazaksus'
import { ContentParser } from '@/components/contentParser'
import type { StrapiSingularResponse } from '@/types/common'
import type { StrapiPageSingle } from '@/types/single'

export async function clientLoader() {
  const rawContent = await strapiGet('portfolio', { locale: language })
  let content = null
  if (rawContent) {
    content = (rawContent as StrapiSingularResponse).data
  }
  return {
    pageContent: content ? content : undefined,
    children: content ? undefined : <Hazaksus />,
  }
}

export default function PortfolioPage({ loaderData }: Route.ComponentProps) {
  const { pageContent, children } = loaderData
  return (
    <ContentParser content={pageContent as StrapiPageSingle}>
      { children }
    </ContentParser>
  )
}
