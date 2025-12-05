import translationEN from '../locales/en/strings.json'
import translationPL from '../locales/pl/strings.json'
import translationDEV from '../locales/dev/strings.json'
import type { LocalePlural } from '@/types/common'
import { strapiGet } from './utils'
import i18n from 'i18next'

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

export type LanguageElem = {
  code: string,
  name: string
}
export type LanguagesList = LanguageElem[]

export async function getLanguages(){
  let languages: LanguagesList = [];
    const content = await strapiGet('i18n/locales', {});
    (content as LocalePlural).map((elem) => {
      languages.push({
        code: elem.code,
        name: elem.name,
      });
    });
    return languages;
}

export const languages = await getLanguages()

export let language = i18n.language

export const setLanguage = (newLocale: string) => {
  i18n.changeLanguage(newLocale)
  language = i18n.language
}