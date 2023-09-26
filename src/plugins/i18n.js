import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { createI18n } from 'vue-i18n-composable'
import en from '@locales/en'
import it from '@locales/it'
import es from '@locales/es'

Vue.use(VueI18n)

const i18n = createI18n({
  locale: 'it',
  globalInjection: true,
  fallbackLocale: 'it',
  messages: {
    en,
    it,
    es,
  },
})

export default i18n
