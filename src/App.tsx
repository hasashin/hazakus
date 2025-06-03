import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <Header>
          <h1>Dominik hażak</h1>
        </Header>
        <div className="flex min-h-svh flex-col items-center justify-center">
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <Button onClick={() => setCount(count => count + 1)}>
              count is&nbsp;
              {count}
            </Button>
            <ModeToggle />
            <p>
              Edit&nbsp;
              <code>src/App.tsx</code>
              &nbsp;and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
