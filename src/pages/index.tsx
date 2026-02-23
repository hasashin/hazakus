import { language } from '@/lib/languages'
import { strapiGet } from '@/lib/utils'
import type { Route } from './+types/index'
import { Hazaksus } from '@/components/hazaksus'
import { ContentParser } from '@/components/contentParser'
import type { StrapiSingularResponse } from '@/types/common'

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
  return (
    <>
      { pageContent ? <ContentParser content={pageContent} /> : children}
    </>
  )
}
