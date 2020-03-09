import Cookies from 'js-cookie'
import { TOKEN } from 'config/cookie-name'
import { LOCAL_STORE_LANG } from 'config'
export default {
  token: Cookies.get(TOKEN),
  lang: window.localStorage.getItem(LOCAL_STORE_LANG) || window.navigator.language
}
