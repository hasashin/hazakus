import { language } from '@/lib/languages'
import { readPageContent, strapiGet } from '@/lib/utils'
import type { Route } from './+types/portfolio'
import { Hazaksus } from '@/components/hazaksus'
import { ContentContainer } from '@/components/contentContainer'

export async function clientLoader() {
  const rawContent = await strapiGet('portfolio', { locale: language })
  const content = rawContent ? await readPageContent(rawContent) : <Hazaksus />
  return { content: content }
}

export default function PortfolioPage({ loaderData }: Route.ComponentProps) {
  const { content } = loaderData
  return (
    <ContentContainer>
      { content }
    </ContentContainer>
  )
}
