<template>
  <div class="recommend" v-if="hasRecommend">
    <div class="recommend-title" v-if="title">{{title}}</div>
    <div class="recommend-cont">
      <router-link
        class="recommend-item"
        tag="div"
        v-for="item in list"
        :key="item.id"
        :to="'/detail/' + item.id">
        <div class="recommend-img">
          <img :src="item.imgUrl">
        </div>
        <div class="recommend-info">
          <div class="info-box">
            <h1 class="info-name">{{item.name}}</h1>
            <div class="info-item">
              <span class="info-address">{{item.address}}</span>
              <span class="info-comment"><span>{{item.comment}}</span>条评论</span>
            </div>
            <div class="info-item info-bottom">
              <span class="info-price"><i class="price-symbol"></i><span>{{item.price}}</span></span>
              <router-link class="info-link" to="">查看详情</router-link>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      list: Array
    },
    computed: {
      hasRecommend() {
        return this.list.length;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .recommend
    margin-top: .16rem
    background: #fff
    .recommend-title
      padding-top .16rem
      font-size: .36rem
      line-height: 2
      text-indent: .16rem
    .recommend-cont
      .recommend-item
        display flex
        padding .16rem
        border-bottom: $borderDefault
        .recommend-img
          width: 2rem
          img
            width: 100%
        .recommend-info
          flex: 1
          padding-left .16rem
          .info-box
            position: relative
            height: 2rem
            .info-bottom
              position: absolute
              bottom: 0
              width: 100%
          .info-item
            display: -webkit-flex;
            justify-content: space-between;
            margin-top: .16rem
          .info-name
            font-size: .3rem
            line-height: 1.5
            max-height: .9rem
            overflow: hidden
          .info-comment span
            margin-right: .04rem
            color: $orange
          .info-price
            align-self: flex-end
            span
              font-size: .36rem
              color: $orangeRed
          .price-symbol:after
            content: '¥'
            color: $orangeRed
          .info-link
            display inline-block
            padding: .12rem
            color: #fff
            background $orange
            border-radius: $borderRadius
</style>
