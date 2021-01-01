<template>
  <div class="content-small-view flex-1">
    <SmallTANav/>
    <div class="content-value card bg-light h-100 mt-md pl-md pt-md pr-md">
      <p>value</p>
    </div>
  </div>
</template>

<script>
import SmallTANav from "@/module/landing/components/SmallTableArea/container/SmallTANav";

export default {
  name: "SmallTableArea",
  components: {SmallTANav},
}
</script>
