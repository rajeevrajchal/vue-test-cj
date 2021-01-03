<template>
  <i class="material-icon">delete</i>
</template>

<script>
import Vue from "vue";

class ButtonRender extends Vue {
  hotInstance = null;
  row = null;
  col = null;

  deleteRow(id) {
    console.log(id)
  }

}

export default ButtonRender;
export {ButtonRender};
</script>

<style scoped>

</style>