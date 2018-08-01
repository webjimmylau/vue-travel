<template>
  <div class="detail">
    <detail-head></detail-head>
    <detail-banner></detail-banner>
    <detail-ticket :list="ticketData"></detail-ticket>
    <div class="detail-cont"></div>
  </div>
</template>

<script>
  import DetailHead from './components/head'
  import DetailBanner from './components/banner'
  import DetailTicket from './components/ticket'

  export default {
    data(){
      return {
        ticketData: [
          {title: '成人票', children: [{title: '1人', children: [{title: '1人'}, {title: '2人'}, {title: '3人'}]}, {title: '2人'}, {title: '3人'}]},
          {title: '学生票', children: [{title: '1人'}, {title: '2人'}, {title: '3人'}]},
          {title: '儿童票', children: [{title: '1人'}, {title: '2人'}, {title: '3人'}]},
          {title: '特惠票', children: [{title: '1人'}, {title: '2人'}, {title: '3人'}]},
        ]
      }
    },
    components: {
      DetailHead,
      DetailBanner,
      DetailTicket
    }
  }
</script>

<style lang="stylus" scoped>
  .detail-cont
    height: 50rem
</style>
