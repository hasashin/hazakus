import { useTheme } from '@/components/theme-provider'
import { Moon, Sun } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

export function ModeToggle() {
  const { setTheme } = useTheme()
  const changeTheme = () => {
    const currentTheme = localStorage.getItem('vite-ui-theme') || 'dark'
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  return (
    <Toggle variant="default" className="m-auto" onClick={() => changeTheme()}>
      <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  )
}
