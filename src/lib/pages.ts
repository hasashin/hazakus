import { IndexPage } from '@/pages/index'
import { PortfolioPage } from '@/pages/portfolio'
import { BioPage } from '@/pages/bio'
import { ContactPage } from '@/pages/contact'

export default [
  {
    url: '/',
    title: 'Informacje',
    element: IndexPage,
  },
  {
    url: 'portfolio',
    title: 'Portfolio',
    element: PortfolioPage,
  },
  {
    url: 'bio',
    title: 'Życiorys',
    element: BioPage,
  },
  {
    url: 'contact',
    title: 'Kontakt',
    element: ContactPage,
  },
]
