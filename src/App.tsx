import { Outlet, useRevalidator } from 'react-router'
import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/header'
import { Body } from './components/body'
import { Footer } from './components/footer'
import { getPages, type PagesList } from './lib/pages'
import React from 'react'
import { GravityStarsBackground } from './components/animate-ui/components/backgrounds/gravity-stars'
import LoadingPage from './LoadingPage'
import { FadeOut } from './components/animate-ui/primitives/effects/fadeOut'
import { useTranslation } from 'react-i18next'

export default function App() {
  const { i18n } = useTranslation()
  const revalidator = useRevalidator()
  const [headerPages, setHeaderPages] = React.useState<PagesList>([])

  React.useEffect(() => {
    let active = true

    const refreshPages = async () => {
      const fetchedPages = await getPages()
      if (active) {
        setHeaderPages(fetchedPages)
      }
      revalidator.revalidate()
    }

    refreshPages()

    return () => {
      active = false
    }
  }, [i18n.language, revalidator])

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
