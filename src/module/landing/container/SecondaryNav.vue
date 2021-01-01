<template>
  <div class="secondary-nav pl-lg pr-lg d-flex justify-between">
    <div class="start-icon d-flex justify-between flex-1" v-if="isLargeView">
      <div class="icon-button pointer">
        <i class="material-icons icons-light">
          dehaze
        </i>
      </div>
      <div class="icon-button pointer" v-if="isClose">
        <i class="material-icons icons-light">
          dashboard
        </i>
      </div>
    </div>
    <div class="end-icon d-flex  justify-between align-center item-center flex-1" v-if="!isLargeView">
      <div class="icon-button pointer">
        <i class="material-icons icons-light">
          dashboard
        </i>
      </div>
      <div class="end d-flex item-center align-center">
        <div class="icon-button mr-md pointer">
          <i class="material-icons icons-light">
            filter_none
          </i>
        </div>
        <div class="close-icon icons-light pointer">
          X
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SecondaryNav",
  props: {
    isLargeView: Boolean,
    isClose:Boolean
  }
}
</script>

<style scoped>

</style>