import 'style/common.less'
import Vue from 'vue'
import store from 'store'
import i18n, { getLang } from 'i18n'
import { ENABLE_I18N } from 'config'
import App from './app.vue'

if (ENABLE_I18N) {
  getLang(store.state.lang)
}
const app = new Vue({
  store,
  i18n,
  render: h => h(App)
})
app.$mount('#app')
