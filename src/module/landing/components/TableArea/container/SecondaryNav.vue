<template>
  <div class="secondary-nav pl-lg pr-lg d-flex justify-between">
    <div class="start-icon d-flex justify-between flex-1" v-if="isLargeView">
      <div class="icon-button pointer">
        <i class="material-icons icons-light">
          dehaze
        </i>
      </div>
      <div class="icon-button pointer" v-if="$store.state.landing.isCloseSmallView" @click="changeLayout(false)">
        <i class="material-icons icons-light">
          dashboard
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondaryNav",
  props: {
    isLargeView: Boolean
  },
  methods: {
    changeLayout(val) {
      this.$store.dispatch('setIsCloseSmallView', val)
    }
  }
}
</script>

<style scoped>

</style>