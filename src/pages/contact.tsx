import { language } from '@/lib/languages'
import { strapiGet } from '@/lib/utils'
import type { Route } from './+types/index'
import { Hazaksus } from '@/components/hazaksus'
import { ContentParser } from '@/components/contentParser'
import type { StrapiSingularResponse } from '@/types/common'
import type { StrapiPageContact } from '@/types/single'

export async function clientLoader() {
  const rawContent = await strapiGet('contact', { locale: language })
  let content = null
  if (rawContent) {
    content = (rawContent as StrapiSingularResponse).data
  }
  return {
    pageContent: content ? content : undefined,
    children: content ? undefined : <Hazaksus />,
  }
}

export default function ContactPage({ loaderData }: Route.ComponentProps) {
  const { pageContent, children } = loaderData
  const { intro } = pageContent as StrapiPageContact
  return (
    <ContentParser content={intro}>
      { children }
    </ContentParser>
  )
}
