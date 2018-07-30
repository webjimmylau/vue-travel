<template>
  <div class="recommend" v-if="hasWeekend">
    <div class="recommend-title" v-if="title">{{title}}</div>
    <div class="recommend-cont">
      <div class="recommend-item" v-for="item in list" :key="item.id">
        <div class="recommend-img">
          <img :src="item.imgUrl">
        </div>
        <div class="recommend-info">
          <div class="info-box">
            <h1 class="info-name">{{item.name}}</h1>
            <div class="info-item">
              <span class="info-comment">{{item.desc}}</span>
            </div>
          </div>
        </div>
      </div>
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
      hasWeekend() {
        return this.list.length;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .recommend
    margin-top: .16rem
    .recommend-title
      padding-top .16rem
      font-size: .36rem
      line-height: 2
      text-indent: .16rem
    .recommend-cont
      .recommend-item
        margin: .16rem 0
        background: #fff
        .recommend-img
          img
            width: 100%
        .recommend-info
          padding: .16rem
          .info-box
            .info-item
              display: -webkit-flex;
              justify-content: space-between;
              margin-top: .16rem
            .info-name
              font-size: .3rem
              line-height: 1.5
              max-height: .9rem
              overflow: hidden
</style>
