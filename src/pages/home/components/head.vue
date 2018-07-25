<template>
  <div class="head">
    <div class="head-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="head-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="head-right">
      {{city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
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
    line-height: $headHeight
    background: $bgColor
    color: #fff
    .head-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .head-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .head-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
