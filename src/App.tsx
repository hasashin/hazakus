import { Outlet } from 'react-router'
import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/header'
import { Body } from './components/body'
import { Footer } from './components/footer'
import { pages, getPages, type PagesList } from './lib/pages'
import type { Route } from './+types/App'
import React from 'react'

export async function clientAction() {
  const pages = await getPages()
  return { pages: pages }
}

export default function App({ actionData }: Route.ComponentProps) {
  const [headerPages, setHeaderPages] = React.useState<PagesList>(pages)
  if (actionData?.pages) {
    if (actionData.pages !== headerPages) {
      setHeaderPages(actionData.pages)
    }
  }
  return (
    <ThemeProvider>
      <Header pages={headerPages} />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </ThemeProvider>
  )
}
