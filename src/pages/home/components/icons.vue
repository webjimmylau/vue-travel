<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, i) in iconPages" :key="i">
        <div class="icon-item" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl">
          </div>
          <div class="icon-name">{{item.desc}}</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        iconList: [
          {
            id: "00001",
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc: '景点门票'
          },
          {
            id: "00002",
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
            desc: '游乐场'
          },
          {
            id: "00003",
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png",
            desc: '国艺影视城'
          },
          {
            id: "00004",
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
            desc: '温泉'
          },
          {
            id: "00005",
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
            desc: '水上乐园'
          },
          {
            id: "00006",
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
            desc: '亲子游'
          },
          {
            id: "00007",
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
            desc: '一日游'
          },
          {
            id: "00008",
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
            desc: '玩转长隆'
          },
          {
            id: "00009",
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
            desc: '自然风光'
          },
          {
            id: "00010",
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
            desc: '全部玩乐'
          }
        ],
        swiperOption: {
          pagination: '.swiper-pagination',
        }
      }
    },
    computed: {
      iconPages() {
        let pages = [];
        this.iconList.forEach((item, index) => {
          let page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .icons
    & >>> .swiper-container
      height: 0
      padding-bottom: 50%
      overflow: hidden
    & >>> .swiper-pagination-bullet
      width: 20px
      height: 3px
      border-radius: 0
    .icon-item
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 22%
      .icon-img
        position: absolute
        top: 0
        right: 0
        bottom: 0.54rem
        left: 0
        text-align: center
        img
          box-sizing: border-box
          padding-top: .18rem
          height: 100%
      .icon-name
        position: absolute
        right: 0
        bottom: 0
        left: 0
        height: 0.54rem
        line-height: 0.54rem
        text-align: center
        ellipsis()
</style>


