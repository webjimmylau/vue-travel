<template>
  <div class="head">
    <div class="head-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="head-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city" class="head-right">
      {{city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Head',
    props: {
      city: String
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
      width: .64rem
      text-align: center
      .back-icon
        font-size: .4rem
    .head-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin: .12rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .head-right
      float: right
      min-width: 1.04rem
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
