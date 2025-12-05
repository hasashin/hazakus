import { language } from '@/lib/languages'
import { readPageContent, strapiGet } from '@/lib/utils'
import type { Route } from './+types/index'
import { Hazaksus } from '@/components/hazaksus'
import { ContentContainer } from '@/components/contentContainer'

export async function clientLoader() {
  const rawContent = await strapiGet('index', { locale: language })
  const content = rawContent ? await readPageContent(rawContent) : <Hazaksus />
  return { content: content }
}

export default function IndexPage({ loaderData }: Route.ComponentProps) {
  const { content } = loaderData
  return (
    <ContentContainer>
      { content }
    </ContentContainer>
  )
}
