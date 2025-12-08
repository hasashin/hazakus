import { ThemeProvider } from '@/components/theme-provider'
import { Body } from '@/components/body'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from './components/ui/button'
import { Link } from 'react-router'
import { ContentParser } from '@/components/contentParser'

export default function ErrorPage({ error }: { error: unknown }) {
  return (
    <ThemeProvider>
      <Header pages={[]} />
      <Body>
        <ContentParser>
          <p className="text-center text-primary text-9xl mt-40">
            ඞ
          </p>
          <p className="text-center text-primary text-5xl mt-2">
            That's sus, this shouldn't have happened.
          </p>
          { error instanceof Error
            ? (
                <p className="text-center text-secondary text-xl mt-4">
                  { error.message }
                </p>
              )
            : null }
          <div className="text-center mt-10">
            <Button variant="outline" className="p-5">
              <Link to="/" className="text-primary!">
                Let's get back to main page
              </Link>
            </Button>
          </div>
        </ContentParser>
      </Body>
      <Footer />
    </ThemeProvider>
  )
}
