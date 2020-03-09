<template>
  <select class="lang" v-model="lang">
    <option value="zh-CN">🇨🇳 简体中文</option>
    <option value="en-US">🇺🇸 English</option>
  </select>
</template>

<script>
import { getLang } from 'i18n'

export default {
  data () {
    return {
      lang: this.$store.state.lang
    }
  },
  watch: {
    lang (v) {
      this.handleChangeLang(v)
    }
  },
  methods: {
    handleChangeLang (lang) {
      if (lang === this.$store.state.lang) return
      getLang(lang)
    }
  }
}
</script>
