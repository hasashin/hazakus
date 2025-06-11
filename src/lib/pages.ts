import { IndexPage } from '@/pages/index'
import { PortfolioPage } from '@/pages/portfolio'
import { BioPage } from '@/pages/bio'
import { ContactPage } from '@/pages/contact'

type Page = { 
  url: string
  title: string
  element: React.ComponentType
}

export type PagesList = Page[]

export default [
  {
    url: '/',
    title: 'menu_home',
    element: IndexPage,
  },
  {
    url: 'portfolio',
    title: 'menu_portfolio',
    element: PortfolioPage,
  },
  {
    url: 'bio',
    title: 'menu_bio',
    element: BioPage,
  },
  {
    url: 'contact',
    title: 'menu_contact',
    element: ContactPage,
  },
]
