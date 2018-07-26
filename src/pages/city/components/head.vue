<template>
  <div class="head">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe624;</span>
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
    color: #fff
    background: $bgColor
    .back-icon
      position absolute
      top: 0;
      left: 0
      width: .64rem
      font-size .4rem
      color: #fff
</style>
