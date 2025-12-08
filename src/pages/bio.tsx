import { language } from '@/lib/languages'
import { strapiGet } from '@/lib/utils'
import type { Route } from './+types/bio'
import { Hazaksus } from '@/components/hazaksus'
import { ContentParser } from '@/components/contentParser'
import type { StrapiSingularResponse } from '@/types/common'
import type { StrapiPageBio } from '@/types/single'

export async function clientLoader() {
  const rawContent = await strapiGet('bio', { locale: language })
  let content = null
  if (rawContent) {
    content = (rawContent as StrapiSingularResponse).data
  }
  return {
    pageContent: content ? content : undefined,
    children: content ? undefined : <Hazaksus />,
  }
}

export default function BioPage({ loaderData }: Route.ComponentProps) {
  const { pageContent, children } = loaderData
  const { content } = pageContent as StrapiPageBio
  return (
    <ContentParser content={content}>
      { children }
    </ContentParser>
  )
}
