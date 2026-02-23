import type { StrapiStandardFields } from './common'
import type { StrapiComponentPageLayout } from './component'

type StrapiPageGeneric = {
  [key: string]: unknown
}

export type StrapiPageSingle = StrapiStandardFields & {
  pageLayout: [StrapiComponentPageLayout]
} & StrapiPageGeneric
