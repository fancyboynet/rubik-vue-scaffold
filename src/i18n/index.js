import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from 'store'
import TYPES from 'store/types'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: store.state.lang,
  fallbackLocale: 'zh-CN'
})

export default i18n

export function getLangJson (lang) {
  return import(/* webpackChunkName: "i18n/[request]" */ `i18n/${lang}.json`)
}

export function getLang (lang) {
  return getLangJson(lang).then((messages) => {
    i18n.locale = lang
    i18n.setLocaleMessage(lang, messages.default)
    store.commit(TYPES.CHANGE_LANG, lang)
  })
}
