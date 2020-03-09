import Vue from 'vue'
import VueRouter from 'vue-router'
import state from 'store/state'
import routes from './routes'
import { intersection } from 'lodash'
import { getRouteText } from 'lib/util'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})

function hasAccess (router) {
  const access = router.meta && router.meta.access
  if (!access || !access.length) {
    return true
  }
  if (!state.user || !state.user.access || !state.user.access.length) {
    return false
  }
  return !!intersection(access, state.user.access).length
}

function needLogin (router) {
  const requireAuth = router.meta && router.meta.requireAuth
  if (!requireAuth) {
    return false
  }
  return !state.token
}

router.beforeEach((to, from, next) => {
  if (needLogin(to)) {
    window.location.replace('/login')
    return
  }
  if (!hasAccess(to)) {
    alert('没有访问权限')
    return
  }
  next()
})

router.afterEach((to, from) => {
  document.title = getRouteText(to)
})

export default router
