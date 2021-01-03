<template>
  <hot-table :settings="hotSettings">
    <hot-column title="ID" data="id" read-only="true">
    </hot-column>
    <hot-column title="Name" data="name">
    </hot-column>
    <hot-column title="Units" data="unit">
    </hot-column>
    <hot-column title="Price" data="payment.price">
    </hot-column>
    <hot-column title="Currency" data="payment.currency">
    </hot-column>
  </hot-table>
</template>


<script>

import {HotTable, HotColumn} from '@handsontable/vue';
// import Handsontable from 'handsontable';

export default {
  name: "HandSonTable",
  data: function () {
    return {
      hotData: [
        {id: 1, name: 'Table tennis racket', unit: 5, payment: {price: 13, currency: 'PLN'}},
        {id: 2, name: 'Outdoor game ball', unit: 5, payment: {price: 14, currency: 'USD'}},
        {id: 3, name: 'Mountain bike', unit: 5, payment: {price: 300, currency: 'USD'}}
      ],
      actionSetting: {
        title: 'Delete',
      },
      hotSettings: {
        // data: Handsontable.helper.createSpreadsheetData(1000, 7),
        data: [
          {id: 1, name: 'Table tennis racket', unit: 5, payment: {price: 13, currency: 'PLN'}},
          {id: 2, name: 'Outdoor game ball', unit: 5, payment: {price: 14, currency: 'USD'}},
          {id: 3, name: 'Mountain bike', unit: 5, payment: {price: 300, currency: 'USD'}}
        ],
        colWidths: 100,
        width: '100%',
        height: 520,
        rowHeights: 25,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        dropdownMenu: ['filter_by_condition', 'filter_action_bar'],
        columnSorting: {
          sortEmptyCells: true,
          initialConfig: {
            column: 0,
            sortOrder: 'asc'
          }
        },
        minSpareRows: 1,
        fillHandle: false,
        copyPaste: false,
        licenseKey: 'non-commercial-and-evaluation',
      },
    };
  },
  components: {
    HotTable,
    HotColumn,
  }
}
</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
