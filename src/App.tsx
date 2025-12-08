import { Outlet } from 'react-router'
import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/header'
import { Body } from './components/body'
import { Footer } from './components/footer'
import { getPages, type PagesList } from './lib/pages'
import type { Route } from './+types/App'
import React from 'react'
import { GravityStarsBackground } from './components/animate-ui/components/backgrounds/gravity-stars'
import LoadingPage from './LoadingPage'
import { FadeOut } from './components/animate-ui/primitives/effects/fadeOut'

export async function clientAction() {
  const pages = await getPages()
  return { pages: pages }
}

export default function App({ actionData }: Route.ComponentProps) {
  const [headerPages, setHeaderPages] = React.useState<PagesList>([])
  if (headerPages.length === 0) {
    getPages().then((fetchedPages) => {
      setHeaderPages(fetchedPages)
    })
  }
  if (actionData?.pages) {
    if (actionData.pages !== headerPages) {
      setHeaderPages(actionData.pages)
    }
  }
  return (
    <ThemeProvider>
      <FadeOut><LoadingPage /></FadeOut>
      <GravityStarsBackground className="absolute flex items-center justify-center -z-10 bg-background" />
      <Header pages={headerPages} />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </ThemeProvider>
  )
}
