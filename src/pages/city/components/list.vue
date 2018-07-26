<template>
  <div class="list">
    <div class="area">
      <div class="area-title border-topbottom">当前城市</div>
      <div class="area-cont m-b-0">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="area-title border-topbottom">热门城市</div>
      <div class="area-cont m-b-0">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="area-title border-topbottom">A</div>
      <div class="area-cont">
        <div class="item border-bottom">阿拉蕾</div>
        <div class="item border-bottom">阿拉蕾</div>
        <div class="item border-bottom">阿拉蕾</div>
        <div class="item border-bottom">阿拉蕾</div>
        <div class="item border-bottom">阿拉蕾</div>
        <div class="item border-bottom">阿拉蕾</div>
        <div class="item border-bottom">阿拉蕾</div>
        <div class="item border-bottom">阿拉蕾</div>
        <div class="item border-bottom">阿拉蕾</div>
        <div class="item border-bottom">阿拉蕾</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before, &:after
      border-bottom-color: #ddd
  .border-bottom
    &:before
      border-bottom-color: #ddd
  .area
    .area-title
      padding-left .2rem
      line-height .6rem
      color: #666
      background: #f8f8f8
    .area-cont
      overflow hidden
      &.m-b-0
        margin: .2rem .6rem 0 0
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: 0 0 .2rem .2rem
          line-height .48rem
          text-align: center
          border: 1px solid #ddd
          border-radius: .04rem
      .item
        line-height .64rem
        text-indent: .2rem

</style>
