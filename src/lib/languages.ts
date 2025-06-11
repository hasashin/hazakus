import translationEN from '@/locales/en/strings.json'
import translationPL from '@/locales/pl/strings.json'
import translationDEV from '@/locales/dev/strings.json'

export const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
  dev: {
    translation: translationDEV,
  }
}

export const languages = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'pl',
    name: 'Polski',
  },
]