<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="hasIcons">
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
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
        }
      }
    },
    computed: {
      hasIcons() {
        return this.list.length;
      },
      iconPages() {
        let pages = [];
        this.list.forEach((item, index) => {
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
      padding-bottom: .36rem
    & >>> .swiper-pagination-bullet
      width: 20px
      height: 3px
      border-radius: 0

  .icons
    background: #fff
    .icon-item
      position: relative
      float: left
      width: 25%
      padding .2rem 0
      .icon-img
        text-align: center
        img
          box-sizing: border-box
          width: 1rem
          height: 1rem
      .icon-name
        padding-top .1rem
        text-align: center
        ellipsis()
</style>


