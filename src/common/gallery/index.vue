<template>
  <div class="gallery" v-if="show" @click="handleChangeClick">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in galleryData" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      show: Boolean
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          autoplay: 5000,
        },
        galleryData: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/77/77570cc3ebf7d9d8a3.img.jpg_r_800x800_95763221.jpg'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/29/29bd2b91ce0b1e0ea3.water.jpg_r_800x800_a742c8be.jpg'
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/4b/4bc18f98357e98eda3.water.jpg_r_800x800_04e943d4.jpg'
          }
        ]
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
    .swiper-slide
      display: flex
      align-items: center
      .swiper-img
        width: 100%
    .swiper-pagination
      bottom: 1rem

</style>
