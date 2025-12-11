import type { BlocksContent } from '@strapi/blocks-react-renderer'
import type { StrapiStandardFields } from './common'
import type { StrapiComponentCapability } from './component'

export type StrapiPageIndex = StrapiStandardFields & {
  intro: BlocksContent
  capabilities: StrapiComponentCapability[]
}

export type StrapiPageBio = StrapiStandardFields & {
  intro: BlocksContent
}

export type StrapiPagePortfolio = StrapiStandardFields & {
  intro: BlocksContent
}

export type StrapiPageContact = StrapiStandardFields & {
  intro: BlocksContent
}
