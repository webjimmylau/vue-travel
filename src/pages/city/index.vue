<template>
  <div class="city">
    <city-head></city-head>
    <city-search></city-search>
  </div>
</template>

<script>
  import CityHead from './components/head'
  import CitySearch from './components/search'
  export default {
    name: 'City',
    components: {
      CityHead,
      CitySearch
    }
  }
</script>

<style lang="stylus" scoped>

</style>
