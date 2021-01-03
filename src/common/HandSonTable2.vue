<template>
<div class="handson-table">
  <hot-table :settings="hotSettings"/>
</div>
</template>

<script>
import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';

const table = Handsontable.helper.createSpreadsheetData(2, 2)

export default {
  name: "HandSonTable2",
  data: () => {
    return{
      table,
      hotSettings: {
        data: table,
        colHeaders: true,
        minSpareRows: 1,
        licenseKey: 'non-commercial-and-evaluation',
      }
    }
  },
  components: {
    HotTable
  },
}
</script>
<style src="../../node_modules/handsontable/dist/handsontable.full.css" ></style>