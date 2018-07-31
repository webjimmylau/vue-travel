<template>
  <div class="head">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe600;</span>
    </router-link>
    选择城市
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .head
    position: relative
    height: $headHeight
    line-height: $headHeight
    text-align center
    font-size: .32rem
    color: #fff
    background: $bgColor
    .back-icon
      position absolute
      top: 0;
      left: 0
      width: .6rem
      font-size .36rem
      color: #fff
</style>
