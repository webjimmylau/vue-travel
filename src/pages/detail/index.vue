<template>
  <div class="detail">
    <detail-head></detail-head>
    <detail-banner></detail-banner>
    <div class="detail-cont"></div>
  </div>
</template>

<script>
  import DetailHead from './components/head'
  import DetailBanner from './components/banner'

  export default {
    components: {
      DetailHead,
      DetailBanner
    }
  }
</script>

<style lang="stylus" scoped>
  .detail-cont
    height: 50rem
</style>
