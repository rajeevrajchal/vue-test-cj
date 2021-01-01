<template>
  <div class="content-table-area flex-2 mr-lg">
    <SecondaryNav :isLargeView="true" :is-close="isSmallContentClose"/>
    <div class="content-value card bg-light h-100 mt-md">
      <p>value</p>
    </div>
  </div>
</template>

<script>
import SecondaryNav from "@/module/landing/container/SecondaryNav";
export default {
name: "TableArea",
  components: {SecondaryNav},
  props:{
    isSmallContentClose: Boolean
  }
}
</script>

<style scoped>

</style>