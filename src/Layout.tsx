import { Outlet } from 'react-router'
import { ThemeProvider } from '@/components/theme-provider'
import { Body } from '@/components/body'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export function Layout() {
  return (
    <ThemeProvider>
      <Header />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </ThemeProvider>
  )
}
