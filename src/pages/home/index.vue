<template>
  <div class="home">
    <home-head></home-head>
    <home-banner></home-banner>
    <home-icons></home-icons>
    <home-recommend :list="recommendList" title="热门推荐"></home-recommend>
  </div>
</template>

<script>
  import HomeHead from './components/head'
  import HomeBanner from './components/banner'
  import HomeIcons from './components/icons'
  import HomeRecommend from './components/recommend'

  export default {
    name: 'Home',
    components: {
      HomeHead,
      HomeBanner,
      HomeIcons,
      HomeRecommend,
    },
    data(){
      return {
        recommendList: [
          {
            id: '00001',
            imgUrl: 'https://imgs.qunarzz.com/sight/p0/1607/6c/6ce376cd5775ce6fb4.img.jpg_200x200_7ed7ce79.jpg',
            name: '九道谷漂流',
            comment: '23',
            price: 120,
            address: '九道谷',
          },
          {
            id: '00002',
            imgUrl: 'https://imgs.qunarzz.com/sight/p0/1707/fd/fd38ff549c0ee891a3.img.jpg_200x200_52e7f8b4.jpg',
            name: '佛山游得酷水上乐园',
            comment: '186',
            price: 160,
            address: '顺德区',
          },
          {
            id: '00003',
            imgUrl: 'https://imgs.qunarzz.com/sight/p0/1708/67/67b574e957302bb2a3.water.jpg_200x200_c4d09d8d.jpg',
            name: '西樵平沙岛水上乐园',
            comment: '37',
            price: 100,
            address: '南海平沙',
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    background: #f5f5f5
</style>
