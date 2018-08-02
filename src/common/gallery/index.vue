<template>
  <div class="gallery" @click="handleChangeClick">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in list" :key="index">
        <img class="swiper-img" :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array,
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          autoplay: 5000,
        }
      }
    },
    methods: {
      handleChangeClick(){
        this.$emit('close');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .gallery >>>
  .swiper-container
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    color: #fff
    background: #000
    z-index: 99
    .swiper-slide
      display: flex
      align-items: center
      .swiper-img
        width: 100%
    .swiper-pagination
      bottom: 1rem

</style>
