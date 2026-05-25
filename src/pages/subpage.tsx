import { language } from '@/lib/languages'
import { strapiGet } from '@/lib/utils'
import type { Route } from './+types/subpage'
import { Hazaksus } from '@/components/hazaksus'
import { ContentParser } from '@/components/contentParser'
import type { StrapiSingularResponse } from '@/types/common'

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const rawContent = await strapiGet(params.subpage, { locale: language, populate: '*' })
  let content = null
  let layoutDefined = false
  if (rawContent) {
    content = (rawContent as StrapiSingularResponse).data
    layoutDefined = content.pageLayout && content.pageLayout.length > 0
  }
  return {
    pageContent: layoutDefined ? content : undefined,
    children: layoutDefined ? undefined : <Hazaksus />,
  }
}

export default function SubPage({ loaderData }: Route.ComponentProps) {
  const { pageContent, children } = loaderData
  return (
    <>
      { pageContent ? <ContentParser content={pageContent} /> : children}
    </>
  )
}
