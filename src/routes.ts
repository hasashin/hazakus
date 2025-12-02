import { pages } from './lib/pages'
import { route, index, layout } from '@react-router/dev/routes'
import type { RouteConfigEntry, RouteConfig } from '@react-router/dev/routes'

export const getRoutes = async (): Promise<RouteConfigEntry[]> => {
  const childRoutes: RouteConfigEntry[] = []
  for (const page of pages) {
    if (page.isIndex) {
      childRoutes.push(index('./pages/index.tsx'))
    }
    else {
      childRoutes.push(route(page.url, `./pages/${page.url}.tsx`))
    }
  }
  return childRoutes
}

export default [
  layout('./App.tsx', [
    ...(await getRoutes()),
  ]),
  route('*', './ErrorPage.tsx'),
] satisfies RouteConfig
