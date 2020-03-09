<template>
  <div class="header">
    <Menu v-bind="$attrs"/>
    <Lang v-if="ENABLE_I18N" />
  </div>
</template>

<script>
import Menu from './menu'
import Lang from './lang'
import { ENABLE_I18N } from 'config'
export default {
  components: {
    Menu,
    Lang
  },
  data () {
    return {
      ENABLE_I18N
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  display: flex;
  background: #ccc;
  height: 50px;
  justify-content: center;
  align-items: center;
}
</style>
