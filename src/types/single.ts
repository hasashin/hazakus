import type { StrapiStandardFields } from './common'

export interface StrapiPageElement {
  type: string
  children: StrapiPageElementText[]
}

export type StrapiPageElementText = StrapiPageElement & {
  type: 'text'
  text: string
  bold?: boolean
}

export type StrapiPageElementParagraph = StrapiPageElement & {
  type: 'paragraph'
  children: StrapiPageElementText[]
}

export type StrapiPage = StrapiStandardFields & {
  content: StrapiPageElement[]
}
