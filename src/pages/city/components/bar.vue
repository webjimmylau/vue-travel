<template>
  <div class="bar">
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .bar
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.6rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    text-align: center;
    color: $bgColor
    .item
      line-height: .4rem
</style>
