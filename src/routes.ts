import { route, index } from '@react-router/dev/routes'
import type { RouteConfig } from '@react-router/dev/routes'

export default [
  route('/', './App.tsx', [
    index('./pages/index.tsx'),
    route(':subpage', './pages/subpage.tsx'),
  ]),
  route('*', './ErrorPage.tsx'),
] satisfies RouteConfig
