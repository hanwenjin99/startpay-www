import { createI18n } from "vue-i18n"

import zh from './package/zh-cn'
import en from './package/en'


const message = {
  zh,
  en
}

const i18n = createI18n({
  locale: 'zh',
  legacy: false,
  globalInjection: true,
  messages: message
})

export default i18n
