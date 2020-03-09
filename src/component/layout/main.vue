<template>
  <div class="main">
    <Header v-bind="$attrs" />
    <div class="content">
        <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from 'component/header'
import Footer from 'component/footer'
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  > .content{
      flex: 1;
  }
}
</style>
