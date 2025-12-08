import type { StrapiI18nLocale, StrapiPage } from './plural'
import type {
  StrapiPageIndex,
  StrapiPageBio,
} from './single'

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

type StrapiSingularData = StrapiPageIndex | StrapiPageBio

export type StrapiPluralResponse = {
  data: StrapiPluralData
  meta: StrapiMeta
}

export type StrapiSingularResponse = {
  data: StrapiSingularData
  meta: unknown
}

export type StrapiResponse = StrapiPluralResponse | StrapiSingularResponse | StrapiI18nLocale[] | null
