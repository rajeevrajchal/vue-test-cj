<template>
  <div class="content-small-view flex-1">
    <SecondaryNav :isLargeView="false"/>
    <div class="content-value card bg-light h-100 mt-md">
      <p>value</p>
    </div>
  </div>
</template>

<script>
import SecondaryNav from "@/module/landing/container/SecondaryNav";
export default {
name: "SmallTableArea",
  components: {SecondaryNav}
}
</script>
