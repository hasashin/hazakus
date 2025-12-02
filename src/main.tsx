import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './lib/routes'
import './index.css'
import { setLocale, resources, locale } from './lib/languages'

import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18next from 'i18next'

const browserLocale = navigator.language.split('-')[0]
setLocale(browserLocale)

i18next.use(initReactI18next).init({
  resources,
  lng: locale,
  fallbackLng: ['pl', 'dev'],
  interpolation: {
    escapeValue: false,
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>,
)
