/**
 * 有效路由一定要配置name，并且必须唯一
 * meta配置说明:
 *  hideInMenu: true 菜单不显示该页面选项
 *  access: ['admin', 'root'] 访问权限
 *  requireAuth: false 是否需要登录
 *  text: '' 菜单显示文本，如果开启多语言，会优先显示i18n
 *  i18n: '' 翻译ID
 */

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('./router/home.vue'),
    meta: {
      text: 'home',
      i18n: 1
    }
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('./router/about.vue'),
    meta: {
      text: 'about',
      i18n: 2
    }
  },
  {
    path: '*', redirect: '/'
  }
]

function bindParentsRoute (route) {
  if (route.children) {
    route.children.forEach((child) => {
      child.meta._parents = route.meta._parents ? route.meta._parents.concat([route.name]) : [route.name]
      bindParentsRoute(child)
    })
  }
}

// 子路由保存父路由name
routes.forEach((route) => {
  bindParentsRoute(route)
})

export default routes
