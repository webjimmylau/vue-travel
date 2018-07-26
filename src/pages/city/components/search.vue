<template>
  <div class="search">
    <input type="text" placeholder="搜索城市">
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .12rem
    background: $bgColor
    input
      box-sizing: border-box
      width: 100%
      height: .6rem
      padding 0 .1rem
      line-height: .6rem
      text-align: center
      border-radius: .04rem
</style>
