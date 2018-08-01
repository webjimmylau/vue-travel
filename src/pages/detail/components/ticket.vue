<template>
  <div class="ticket">
    <div
      class="ticket-item border-bottom"
      v-for="(item, index) in list"
      :key="index">
      <div>
        <span class="iconfont icon-ticket">&#xe601;</span>{{item.title}}
      </div>
      <div>
        <detail-ticket :list="item.children"></detail-ticket>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailTicket',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
.ticket
  .ticket-item
    padding 0 .2rem
    margin: 0 .2rem
    line-height .8rem
    .icon-ticket
      margin-right: .1rem
      color: $bgColor
</style>
