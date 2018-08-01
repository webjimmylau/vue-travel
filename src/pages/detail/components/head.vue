<template>
  <div class="header">
    <router-link
      v-show="!isShowHeadBar"
      class="header-back"
      tag="div"
      to="/">
      <span class="iconfont icon-cont-back">&#xe600;</span>
    </router-link>
    <div class="header-bar" v-show="isShowHeadBar" :style="addStyle">
      <router-link
        class="header-back"
        tag="div"
        to="/">
        <span class="iconfont icon-back">&#xe600;</span>
      </router-link>
      <div class="header-cont-title">商品详情</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShowHeadBar: false,
        addStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll(){
        const sTop = document.body.scrollTop;
        if(sTop > 40){
          const opacity = (sTop - 40) / 40;
          this.addStyle.opacity = opacity > 1 ? 1 : opacity;
          this.isShowHeadBar = true;
        }else{
          this.isShowHeadBar = false;
        }
      }
    },
    activated(){
      window.addEventListener('scroll', this.handleScroll);
    },
    deactivated(){
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: absolute
    top: 0
    left: 0
    width: 100%
    z-index: 9
    height: .8rem
    .header-back
      position: absolute
      top: .1rem
      left: .1rem
      width: .6rem
      height: .6rem
      line-height: .6rem
      text-align: center
      text-indent: .1rem
      color: #fff
      background #333
      border-radius: .3rem
      .icon-back
        font-size: .36rem
    .header-bar
      position: fixed
      top: 0
      left: 0
      right: 0
      height: .8rem
      line-height .8rem
      text-align: center
      color: #fff
      background: $bgColor
      .header-back
        background: transparent
</style>
