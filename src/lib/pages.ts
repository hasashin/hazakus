import { strapiGet } from './utils'
import type { StrapiResponse } from '../types/common'
import { language } from './languages'

type Page = { 
  url: string
  title: string
  isIndex: boolean
}

export type PagesList = Page[]

export interface RouteListParams {
  loaderData: {
    pages: PagesList
  }
}

export async function getPages() : Promise<PagesList> {
  let pages: PagesList = [];
  const lang = language ?? 'pl'
  const content = await strapiGet('pages', {locale: lang});
  (content as StrapiResponse).data.map((elem) => {
    pages.push({
      url: elem.url,
      title: elem.title,
      isIndex: elem.isIndex,
    });
  });
  return pages;
}

export function usePages() : PagesList {
  let pages: PagesList = [];
  getPages().then((fetchedPages) => {
    pages = fetchedPages;
  })
  return pages;
}