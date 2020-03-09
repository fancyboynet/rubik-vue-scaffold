<template>
  <div class="menu">
    <router-link :to="{name: route.name}" v-for="route in validRoutes" :key="route.name">
      <span>{{ getRouteText(route) }}</span>
    </router-link>
  </div>
</template>

<script>
import { getRouteText } from 'lib/util'

export default {
  props: ['routes'],
  data () {
    return {}
  },
  computed: {
    names () {
      return this.$routes.map(x => x.name)
    },
    validRoutes () {
      if (!this.routes) {
        return []
      }
      return this.routes.filter(route => {
        if (!route.name || route.meta.hideInMenu) return false
        return true
      })
    }
  },
  watch: {
    $route: {
      handler (v) {
        if (!v.name) {
          return
        }
        this.parseSelectedKeys()
      },
      immediate: true
    }
  },
  methods: {
    getRouteText,
    parseSelectedKeys () {
      const parents = this.$route.meta._parents
      const name = this.$route.name
      if (!parents) {
        this.selectedKeys = [name]
        return
      }
      const matParent = this.names.find(x => parents.includes(x))
      this.selectedKeys = matParent ? [matParent] : [name]
    }
  }
}
</script>

<style scoped lang="less">
.menu {
  display: inline;
  a{
    margin: 0 1em;
  }
}
</style>
