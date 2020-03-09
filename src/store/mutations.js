import TYPES from './types'
import Cookies from 'js-cookie'
import { TOKEN } from 'config/cookie-name'
import { TOKEN_EXPIRES, LOCAL_STORE_LANG } from 'config'

export default {
  [TYPES.SAVE_TOKEN] (state, {
    token,
    remember = true
  } = {}) {
    if (!token) return
    state.token = token
    Cookies.set(TOKEN, token, {
      expires: remember ? TOKEN_EXPIRES : undefined
    })
  },
  [TYPES.REMOVE_TOKEN] (state) {
    state.token = undefined
    Cookies.remove(TOKEN)
  },
  [TYPES.CHANGE_LANG] (state, v) {
    state.lang = v
    window.localStorage.setItem(LOCAL_STORE_LANG, v)
  }
}
