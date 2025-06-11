import { Routes, Route } from 'react-router'
import pages from '@/lib/pages'
import { Layout } from '@/Layout'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resources } from '@/lib/languages'

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.split('-')[0],
  fallbackLng: ['pl', 'dev'],
  interpolation: {
    escapeValue: false,
  },
})

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {
          pages.map((page) => {
            if (page.url === '/') {
              return (
                <Route index element={<page.element />} />
              )
            }
            return (
              <Route path={page.url} element={<page.element />} />
            )
          })
        }
      </Route>
    </Routes>
  )
}

export default App
