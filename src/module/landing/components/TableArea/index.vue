<template>
  <div class="content-table-area flex-2 mr-lg">
    <SecondaryNav :isLargeView="true"/>
    <div class="content-value card bg-light h-100 mt-md pl-md pt-md pr-md">
      <HandSonTable/>
    </div>
  </div>
</template>

<script>
import SecondaryNav from "@/module/landing/components/TableArea/container/SecondaryNav";
import HandSonTable from "@/common/HandSonTable";

export default {
  name: "TableArea",
  components: {HandSonTable, SecondaryNav}
}
</script>

<style scoped>

</style>