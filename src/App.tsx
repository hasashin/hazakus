import { Outlet } from 'react-router'
import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/header'
import { Body } from './components/body'
import { Footer } from './components/footer'

function App() {
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

export default App
