<template>
  <Main :routes="routes">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </Main>
</template>

<script>
import router from './router'
import Main from 'component/layout/main'
import routes from './routes'

export default {
  router,
  components: {
    Main
  },
  data () {
    return {
      routes
    }
  }
}
</script>
