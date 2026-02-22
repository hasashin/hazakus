import type { StrapiI18nLocale, StrapiPage } from './plural'
import type { StrapiPageSingle } from './single'

export type StrapiStandardFields = {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type StrapiMeta = {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

type StrapiPluralData = StrapiPage[]

// Left for future use, in case of more complex single types
type StrapiSingularData = StrapiPageSingle

export type StrapiPluralResponse = {
  data: StrapiPluralData
  meta: StrapiMeta
}

export type StrapiSingularResponse = {
  data: StrapiSingularData
  meta: unknown
}

export type StrapiResponse = StrapiPluralResponse | StrapiSingularResponse | StrapiI18nLocale[] | null
