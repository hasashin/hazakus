import { ThemeProvider } from '@/components/theme-provider'
import { Body } from '@/components/body'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MainMenu } from '@/components/mainMenu'

function App() {
  return (
    <ThemeProvider>
      <Header>
        <h1 className="text-primary text-5xl">Dominik Hażak</h1>
        <p className="text-foreground text-3xl">Rozwiązania IT</p>
      </Header>
      <Body>
        <MainMenu pages={[
          { url: '/', title: 'Informacje' },
          { url: '/bio', title: 'Życiorys' },
        ]}
        />
        <p className="text-foreground text-2xl">
          Witaj na mojej stronie! Tutaj znajdziesz informacje o moich projektach i usługach.
        </p>
        <p className="text-foreground text-xl">
          Skontaktuj się ze mną, aby dowiedzieć się więcej o tym, jak mogę Ci pomóc.
        </p>
      </Body>
      <Footer />
    </ThemeProvider>
  )
}

export default App
