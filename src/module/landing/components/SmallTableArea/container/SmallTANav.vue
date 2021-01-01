<template>
  <div
      v-if="!$store.state.landing.isCloseSmallView"
      class="end-icon d-flex justify-end align-center item-center flex-1 pl-lg pr-lg"
  >
    <div class="end d-flex item-center align-center">
      <div class="icon-button mr-md pointer" @click="enLargeSmallView">
        <i class="material-icons icons-light">
          {{ $store.state.landing.isFullScreenSmallView ? "fullscreen_exit" : "fullscreen"}}
        </i>
      </div>
      <div class="close-icon icons-light pointer" @click="closeSmallView(true)">
        X
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SmallTANav",
  methods: {
    closeSmallView(val) {
      this.$store.dispatch('setIsCloseSmallView', val)
    },
    enLargeSmallView() {
      this.$store.dispatch('setIsFullScreenSmallView')
    }
  }
}
</script>

<style scoped>

</style>