<template>
  <div class="content-small-view flex-1">
    <SmallTANav/>
    <div class="content-value card bg-light h-100 mt-md pl-md pt-md pr-md">
      <HandSonTable2 />
    </div>
  </div>
</template>

<script>
import SmallTANav from "@/module/landing/components/SmallTableArea/container/SmallTANav";
import HandSonTable2 from "@/common/HandSonTable2";
export default {
  name: "SmallTableArea",
  components: {SmallTANav,HandSonTable2},
}
</script>
