import { Outlet } from 'react-router'
import { ThemeProvider } from '@/components/theme-provider'
import { Body } from '@/components/body'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MainMenu } from '@/components/main-menu'
import pages from '@/lib/pages'

export function Layout() {
  return (
    <ThemeProvider>
      <Header>
        <MainMenu pages={pages} />
      </Header>
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </ThemeProvider>
  )
}
