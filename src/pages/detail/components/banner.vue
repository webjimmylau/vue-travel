<template>
  <div class="banner">
    <div class="banner-cont" @click="handleClick">
      <div class="banner-img">
        <img src="http://img1.qunarzz.com/sight/p0/1807/77/77570cc3ebf7d9d8a3.img.jpg_600x330_ca3cdd3a.jpg">
      </div>
      <div class="banner-info">
        <div class="banner-title">长鹿休闲度假农庄(AAAAA景区)</div>
        <div class="banner-num">
          <span class="iconfont icon-img">&#xe716;</span>
          <span>82</span>
        </div>
      </div>
    </div>
    <common-gallery :show="isShowGallery" @change="handleChange"></common-gallery>
  </div>
</template>

<script>
  import CommonGallery from 'common/gallery'
  export default {
    data(){
      return {
        isShowGallery: false
      }
    },
    methods: {
      handleClick(){
        this.isShowGallery = true;
      },
      handleChange(val){
        console.log(val)
        this.isShowGallery = val;
      }
    },
    components: {
      CommonGallery
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
