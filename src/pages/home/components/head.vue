<template>
  <div class="head">
    <div class="head-left">
      <span class="iconfont back-icon">&#xe600;</span>
    </div>
    <div class="head-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city" tag="div" class="head-right">
      {{this.city}}<span class="iconfont arrow-icon">&#xe6a4;</span>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .head
    display: flex
    height: $headHeight
    line-height: $headHeight
    background: $bgColor
    color: #fff
    .head-left
      float: left
      padding 0 .12rem
      .back-icon
        font-size: .36rem
    .head-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin: .12rem
      padding-left: .12rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .head-right
      float: right
      min-width: 1.04rem
      padding 0 .12rem
      text-align: right
      color: #fff
      .arrow-icon
        vertical-align: middle
        font-size: .4rem
</style>
