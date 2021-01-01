<template>
  <main class="landing d-flex flex-column">
    <Navbar/>
    <div class="content-area flex-1 d-flex flex-column pl-lg pr-lg pb-lg">
      <div class="content d-flex flex-1 flex-wrap">
        <TableArea v-if="!$store.state.landing.isFullScreenSmallView"/>
        <SmallTableArea v-if="!$store.state.landing.isCloseSmallView"/>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from './container/Navbar'
import TableArea from './components/TableArea/index'
import SmallTableArea from './components/SmallTableArea/index'

export default {
  name: 'Landing',
  components: {
    Navbar,
    TableArea,
    SmallTableArea
  },
}
</script>

<style lang="scss">
@import './landing.scss';
</style>