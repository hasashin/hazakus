import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

i18next.init({
  interpolation: { escapeValue: false },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>,
)
