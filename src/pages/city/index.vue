<template>
  <div class="city">
    <city-head></city-head>
    <city-search
      :cities="cities"></city-search>
    <city-list
      :hotCities="hotCities"
      :cities="cities"
      :letter="letter"></city-list>
    <city-bar
      :cities="cities"
      @change="handleChangeLetter"></city-bar>
  </div>
</template>

<script>

  import CityHead from './components/head'
  import CitySearch from './components/search'
  import CityList from './components/list'
  import CityBar from './components/bar'

  export default {
    data() {
      return {
        hotCities: [],
        cities: {},
        letter: ''
      }
    },
    methods: {
      fetchCityInfo() {
        this.$ajax.get('/api/city.json')
          .then(this.getCityInfo)
      },
      getCityInfo(res) {
        const resData = res.data;
        if (resData.ret && resData.data) {
          const data = resData.data;
          this.hotCities = data.hotCities;
          this.cities = data.cities;
        }
      },
      handleChangeLetter(letter) {
        this.letter = letter
      }
    },
    mounted() {
      this.fetchCityInfo();
    },
    components: {
      CityHead,
      CitySearch,
      CityList,
      CityBar
    }
  }
</script>

<style lang="stylus" scoped>

</style>
