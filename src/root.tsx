import { StrictMode } from 'react'
import { Outlet, Scripts } from 'react-router'
import './index.css'
import { resources, setLanguage, getLanguages } from './lib/languages'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18next from 'i18next'

const browserLocale = navigator.language.split('-')[0]
let initLocale = 'pl'
getLanguages().then((fetchedLanguages) => {
  const destLang = fetchedLanguages.find(language => language.code === browserLocale)?.code
  if (destLang) {
    initLocale = destLang
  }
})
i18next.use(initReactI18next).init({
  resources,
  lng: initLocale,
  fallbackLng: ['pl', 'dev'],
  interpolation: {
    escapeValue: false,
  },
})
setLanguage(initLocale)

export default function Root() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dominik Hażak</title>
      </head>
      <body>
        <div id="root">
          <StrictMode>
            <I18nextProvider i18n={i18next}>
              <Outlet />
              <Scripts />
            </I18nextProvider>
          </StrictMode>
        </div>
      </body>
    </html>
  )
}
