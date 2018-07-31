<template>
  <div class="home">
    <home-head></home-head>
    <home-banner :list="bannerList"></home-banner>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend title="热门推荐" :list="recommendList"></home-recommend>
    <home-weekend title="周末去哪儿" :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHead from './components/head'
  import HomeBanner from './components/banner'
  import HomeIcons from './components/icons'
  import HomeRecommend from './components/recommend'
  import HomeWeekend from './components/weekend'

  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        lastCity: '',
        bannerList: [],
        iconsList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getDataInfo() {
        this.lastCity = this.city;
        this.$ajax.get('/api/index.json?city=' + this.city)
          .then(this.getDataInfoSucc)
      },
      getDataInfoSucc(res) {
        const resData = res.data;
        if (resData.ret && resData.data) {
          const data = resData.data;
          this.bannerList = data.bannerList;
          this.iconsList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      }
    },
    computed: {
      ...mapState(['city'])
    },
    mounted() {
      this.getDataInfo();
    },
    activated(){
      if(this.lastCity == this.city) return;
      this.getDataInfo();
    },
    components: {
      HomeHead,
      HomeBanner,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    background: #f5f5f5
</style>
