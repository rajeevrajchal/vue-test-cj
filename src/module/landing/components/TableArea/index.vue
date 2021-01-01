<template>
  <div class="content-table-area flex-2 mr-lg">
    <SecondaryNav :isLargeView="true"/>
    <div class="content-value card bg-light h-100 mt-md pl-md pt-md pr-md">
      <p>value</p>
    </div>
  </div>
</template>

<script>
import SecondaryNav from "@/module/landing/components/TableArea/container/SecondaryNav";

export default {
  name: "TableArea",
  components: {SecondaryNav}
}
</script>

<style scoped>

</style>