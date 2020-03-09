import axios from 'axios'
import CONFIG from 'config/env'
import { UNAUTHORIZED } from '../config/code'
import store from 'store/index'
import TYPES from 'store/types'
axios.defaults.withCredentials = false
axios.defaults.baseURL = CONFIG.API

axios.interceptors.response.use(
  res => {
    const data = res.data
    return data
  },
  error => {
    if (error.response.status === UNAUTHORIZED) {
      handleTokenInvalid()
    }
    const message = error.response.data ? error.response.data.message : error.message
    return Promise.reject(new Error(message))
  }
)

function handleTokenInvalid () {
  store.commit(TYPES.REMOVE_TOKEN)
  window.location.replace('/login')
}

export default axios
