<template>
  <div class="bar" ref="bar">
    <div
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleClickLetter"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">{{item}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      cities: Object
    },
    data(){
      return {
        isTouchLetter: false
      }
    },
    computed: {
      letters(){
        const letters = [];
        for(let i in this.cities){
          letters.push(i);
        }
        return letters;
      }
    },
    methods: {
      handleClickLetter(e){
        const letter = e.target.innerText;
        this.$emit('change', letter);
      },
      handleTouchStart(){
        this.isTouchLetter = true;
      },
      handleTouchMove(e){
        if(this.isTouchLetter){
          let len = this.letters.length;
          let letterFirst = this.letters[0];
          let letterFirstElement = this.$refs[letterFirst][0];
          let letterFirstHeight = letterFirstElement.clientHeight; // 字母高度
          let touchY = e.touches[0].clientY; // 触屏位置
          let letterFirstStartY = letterFirstElement.offsetTop; // 首字母距离bar位置
          let barHeight = this.$refs.bar.offsetTop; // bar位置
          let touchNum = touchY -letterFirstStartY - barHeight; // 触屏位置与首字母距离
          let toucuLetterIndex = Math.floor(touchNum / letterFirstHeight); // 当前字母下标
          if(toucuLetterIndex >=0 && toucuLetterIndex < len){
            let touchLetter = this.letters[toucuLetterIndex]; // 当前字母名称
            this.$emit('change', touchLetter);
          }
        }
      },
      handleTouchEnd(){
        this.isTouchLetter = false
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
