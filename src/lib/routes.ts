import { createBrowserRouter, type RouteObject } from 'react-router'
import { pages } from './pages'
import App from '../App'
import { contentLoader, pagesLoader } from './utils';
import { ErrorPage } from '@/ErrorPage';

export const getRoutes = (): RouteObject[] => {
  let childRoutes: RouteObject[] = [];
  for(let page of pages){
    childRoutes.push({
      path: page.url,
      Component: page.element,
      index: page.isIndex,
      loader: contentLoader,
    });
  }
  return [{
      path: '/',
      Component: App,
      children: childRoutes,
      errorElement: ErrorPage(),
      loader: pagesLoader,
  }];
}

export const router = createBrowserRouter(getRoutes())