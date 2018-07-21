<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
  import HomeHeader from './components/header'
  import HomeSwiper from './components/swiper'
  import HomeIcons from './components/icons'

  export default {
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
    }
  }
</script>

<style lang="stylus" scoped>
</style>
