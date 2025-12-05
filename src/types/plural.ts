import type { StrapiStandardFields } from './common'

export type StrapiPage = StrapiStandardFields & {
  url: string
  title: string
  isIndex: boolean
  locale: string
}

export type StrapiI18nLocale = StrapiStandardFields & {
  name: string
  code: string
  isDefault: boolean
}
