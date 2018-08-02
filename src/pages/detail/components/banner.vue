<template>
  <div class="banner">
    <div class="banner-cont" @click="handleClick">
      <div class="banner-img">
        <img :src="data.bannerImg">
      </div>
      <div class="banner-info">
        <div class="banner-title">{{data.sightName}}</div>
        <div class="banner-num">
          <span class="iconfont icon-img">&#xe716;</span>
          <span>{{gallaryImgsLen}}</span>
        </div>
      </div>
    </div>
    <common-fade>
      <common-gallery v-if="isShowGallery" :list="data.gallaryImgs" @close="handleClose"></common-gallery>
    </common-fade>
  </div>
</template>

<script>
  import CommonGallery from 'common/gallery'
  import CommonFade from 'common/fade'

  export default {
    props: {
      data: Object
    },
    data(){
      return {
        isShowGallery: false
      }
    },
    computed: {
      gallaryImgsLen(){
        return this.data.gallaryImgs.length;
      }
    },
    methods: {
      handleClick(){
        this.isShowGallery = true;
      },
      handleClose(){
        this.isShowGallery = false;
      }
    },
    components: {
      CommonGallery,
      CommonFade
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .banner
    .banner-cont
      position relative
      .banner-img
        height: 0
        padding-bottom: 55%
        overflow: hidden
        img
          width: 100%
      .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .6rem
        line-height: .6rem
        color: #fff
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title
          flex: 1
          padding-left .12rem
        .banner-num
          height: .4rem
          line-height: .4rem
          margin: .1rem .12rem 0 0
          padding: 0 .2rem
          background: $bgColor
          border-radius: .2rem
          .icon-img
            vertical-align: top
</style>
