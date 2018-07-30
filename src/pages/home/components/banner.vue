<template>
  <div class="banner">
    <swiper :options="swiperOption" v-if="hasBanner">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          autoplay: 5000,
          loop: true,
        }
      }
    },
    computed: {
      hasBanner() {
        return this.list.length;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .banner
    height: 0
    padding-bottom: 31.25%
    background $bgColorGray
    overflow: hidden
    .swiper-img
      width: 100%
    & >>> .swiper-pagination-bullet-active
      background: white
</style>


