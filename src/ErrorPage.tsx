import { ThemeProvider } from '@/components/theme-provider'
import { Body } from '@/components/body'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from './components/ui/button'
import { Link } from 'react-router'

export function ErrorPage() {
  return (
    <ThemeProvider>
      <Header />
      <Body>
        <div className="flex-grow items-center align-middle justify-center">
          <p className="text-center text-primary text-9xl mt-40">
            ඞ
          </p>
          <p className="text-center text-primary text-5xl mt-2">
            That's sus, this shouldn't have happened.
          </p>
          <div className="text-center mt-10">
            <Button variant="outline" className="p-5">
              <Link to="/" className="text-primary!">
                Let's get back to main page
              </Link>
            </Button>
          </div>
        </div>
      </Body>
      <Footer />
    </ThemeProvider>
  )
}
