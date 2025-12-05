import type { StrapiI18nLocale, StrapiPage } from './plural'

export type StrapiStandardFields = {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type StrapiResponse = {
  data: [StrapiPage]
}

export type LocalePlural = StrapiI18nLocale[]
