<template>
  <div id="app">
    <Landing msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Landing from './module/landing'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/theme';
</style>
