import { ThemeProvider } from '@/components/theme-provider'
import { Body } from '@/components/body'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from './components/ui/button'
import { Link } from 'react-router'
import { ContentContainer } from '@/components/contentContainer'

export default function ErrorPage() {
  return (
    <ThemeProvider>
      <Header pages={[]} />
      <Body>
        <ContentContainer>
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
        </ContentContainer>
      </Body>
      <Footer />
    </ThemeProvider>
  )
}
