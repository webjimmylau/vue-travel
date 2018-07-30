<template>
  <div class="search">
    <div class="search-head">
      <input
        type="text"
        placeholder="搜索城市"
        v-model="keyword">
    </div>
    <div
      class="search-cont"
      v-if="hasKeyword"
      ref="searchCont">
      <div
        class="search-no-data"
        v-if="hasNoCityData">沒有符合搜索的数据
      </div>
      <div class="search-list" v-else>
        <div
          class="search-item border-bottom"
          v-for="item in result"
          @click="handleClickCity(item.name)">{{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    props: {
      cities: Object
    },
    data() {
      return {
        keyword: '',
        result: []
      }
    },
    computed: {
      hasKeyword() {
        return !!this.keyword.length;
      },
      hasNoCityData() {
        return !this.result.length;
      }
    },
    methods: {
      handleClickCity(city) {
        this.changeCity(city);
        this.$router.push('/');

      },
      ...mapMutations(['changeCity'])
    },
    watch: {
      keyword() {
        this.result = [];
        if (!this.keyword.length) {
          return;
        }
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              this.result.push(item);
            }
          })
        }
      }
    },
    updated() {
      if (this.$refs.searchCont) {
        this.scroll = new this.$scroll(this.$refs.searchCont);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .12rem
    background: $bgColor
    .search-head
      input
        box-sizing: border-box
        width: 100%
        height: .6rem
        padding 0 .1rem
        line-height: .6rem
        text-align: center
        border-radius: .04rem
    .search-cont
      position: absolute;
      top: 1.6rem
      right: 0
      bottom: 0
      left: 0
      background: $bgColorGray
      overflow hidden
      z-index: 1
      .search-no-data
        display: flex
        justify-content: center
        align-items: center
        height: 100%
      .search-list
        .search-item
          text-indent: .2rem
          line-height: .6rem
          background: #fff
</style>
