<template>
  <div class="bar">
    <div
      class="item"
      v-for="(item, key, index) in cities"
      @click="handleClickLetter">{{key}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      cities: Object
    },
    methods: {
      handleClickLetter(e){
        const letter = e.target.innerText;
        this.$emit('change', letter);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .bar
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.6rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    text-align: center;
    color: $bgColor
    .item
      line-height: .36rem
</style>
