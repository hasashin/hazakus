import type { BlocksContent } from '@strapi/blocks-react-renderer'
import type { StrapiStandardFields } from './common'
import type { StrapiComponentCapability } from './component'

export type StrapiPageIndex = StrapiStandardFields & {
  intro: BlocksContent
  capabilities: StrapiComponentCapability[]
}

export type StrapiPageBio = StrapiStandardFields & {
  content: BlocksContent
}
