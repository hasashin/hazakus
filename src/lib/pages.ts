import { strapiGet } from './utils'
import type { CommonPlural } from '../types/common'

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
  const content = await strapiGet('pages', {});
  (content as CommonPlural).data.map((elem) => {
    pages.push({
      url: elem.url,
      title: elem.title,
      isIndex: elem.isIndex,
    });
  });
  return pages;
}

export let pages = await getPages()

export const refreshPages = async () => {
  pages = await getPages();
}