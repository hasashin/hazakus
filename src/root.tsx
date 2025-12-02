import { StrictMode } from 'react'
import { Outlet, Scripts } from 'react-router'
import './index.css'
import { resources, languages } from './lib/languages'
import type { Route } from './+types/root'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18next from 'i18next'

export async function loader() {
  const browserLocale = navigator.language.split('-')[0]
  const initLocale = languages.find(language => language.code === browserLocale)?.code ?? 'pl'
  return initLocale
}

export default function Root({ initLocale }: Route.ComponentProps) {
  i18next.use(initReactI18next).init({
    resources,
    lng: initLocale,
    fallbackLng: ['pl', 'dev'],
    interpolation: {
      escapeValue: false,
    },
  })
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dominik Hażak</title>
      </head>
      <body>
        <StrictMode>
          <I18nextProvider i18n={i18next}>
            <Outlet />
            <Scripts />
          </I18nextProvider>
        </StrictMode>
      </body>
    </html>
  )
}
