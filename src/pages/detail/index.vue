<template>
  <div class="detail">
    <detail-head></detail-head>
    <detail-banner :data="bannerData"></detail-banner>
    <detail-ticket :list="categoryList"></detail-ticket>
    <div class="detail-cont"></div>
  </div>
</template>

<script>
  import DetailHead from './components/head'
  import DetailBanner from './components/banner'
  import DetailTicket from './components/ticket'

  export default {
    name: 'Detail',
    data(){
      return {
        bannerData: {
          sightName: '',
          bannerImg: '',
          commentsNum: '',
          gallaryImgs: []
        },
        categoryList: []
      }
    },
    methods: {
      getDetailInfo(){
        this.$ajax
          .get('/api/detail.json', {
            params: {
              id: this.$route.params.id
            }
          })
          .then((res)=>{
            const resData = res.data;
            if(resData.ret && resData.data){
              const data = resData.data;
              this.bannerData.sightName = data.sightName;
              this.bannerData.bannerImg = data.bannerImg;
              this.bannerData.gallaryImgs = data.gallaryImgs;
              this.categoryList = data.categoryList;
            }
          })

      }
    },
    mounted(){
      this.getDetailInfo();
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
