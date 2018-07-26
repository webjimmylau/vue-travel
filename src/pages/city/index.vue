<template>
  <div class="city">
    <city-head></city-head>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
  import CityHead from './components/head'
  import CitySearch from './components/search'
  import CityList from './components/list'
  export default {
    name: 'City',
    components: {
      CityHead,
      CitySearch,
      CityList
    }
  }
</script>

<style lang="stylus" scoped>

</style>
