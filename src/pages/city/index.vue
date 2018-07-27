<template>
  <div class="city">
    <city-head></city-head>
    <city-search></city-search>
    <city-list></city-list>
    <city-bar></city-bar>
  </div>
</template>

<script>
  import CityHead from './components/head'
  import CitySearch from './components/search'
  import CityList from './components/list'
  import CityBar from './components/bar'

  export default {
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
