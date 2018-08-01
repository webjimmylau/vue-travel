<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="area-title border-topbottom">当前城市</div>
        <div class="area-cont button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">热门城市</div>
        <div class="area-cont button-list">
          <div
            class="button-wrapper"
            v-for="item in hotCities"
            :key="item.id">
            <div
              class="button"
              @click="handleClickCity(item.name)">{{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="(list, key, index) in cities"
        :key="key"
        :ref="key"
        class="area">
        <div
          class="area-title border-topbottom">{{key}}
        </div>
        <div class="area-cont item-list">
          <div
            class="item border-bottom"
            v-for="item in list"
            :key="item.id"
            @click="handleClickCity(item.name)">{{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    props: {
      hotCities: Array,
      cities: Object,
      letter: String
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      handleClickCity(city) {
        this.changeCity(city);
        this.$router.push('/');
      },
      ...mapMutations(['changeCity'])
    },
    mounted() {
      this.scroll = new this.$scroll(this.$refs.wrapper);
    },
    watch: {
      letter() {
        if (this.letter) {
          let element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element);
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'

  .list
    position: absolute
    top: 1.6rem
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
    .area
      .area-title
        padding-left .2rem
        line-height .6rem
        color: #666
        background: $bgColorGray
      .area-cont
        overflow hidden
        &.button-list
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
