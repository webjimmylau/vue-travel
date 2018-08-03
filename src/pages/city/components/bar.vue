<template>
  <div class="bar" ref="bar">
    <div
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleClickLetter"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">{{item}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      cities: Object
    },
    data() {
      return {
        lettersLen: 0,
        letterFirstHeight: 0,
        letterFirstDistanceTop: 0,
        isTouchLetter: false,
        timer: Function
      }
    },
    computed: {
      letters() {
        const letters = [];
        for (let i in this.cities) {
          letters.push(i);
        }
        return letters;
      }
    },
    updated() {
      this.getBarDefaultInfo();
    },
    methods: {
      getBarDefaultInfo() {
        let letterFirst = this.letters[0];
        let letterFirstElement = this.$refs[letterFirst][0];
        let barDistanceTop = this.$refs.bar.offsetTop;
        let letterFirstDistanceBar = letterFirstElement.offsetTop;
        this.lettersLen = this.letters.length;
        this.letterFirstHeight = letterFirstElement.clientHeight;
        this.letterFirstDistanceTop = barDistanceTop + letterFirstDistanceBar; // 首字母距离顶部位置
      },
      handleClickLetter(e) {
        const letter = e.target.innerText;
        this.$emit('change', letter);
      },
      handleTouchStart() {
        this.isTouchLetter = true;
      },
      handleTouchMove(e) {
        if (this.isTouchLetter) {
          if (this.timer) clearTimeout(this.timer); // 性能优化 避免重复执行
          this.timer = setTimeout(() => {
            let touchDistanceTop = e.touches[0].clientY; // 触摸点距离顶部位置
            let touchNum = touchDistanceTop - this.letterFirstDistanceTop; // 触摸点距离首字母位置
            let touchLetterIndex = Math.floor(touchNum / this.letterFirstHeight); // 当前字母下标
            if (touchLetterIndex >= 0 && touchLetterIndex < this.lettersLen) {
              let touchLetter = this.letters[touchLetterIndex]; // 当前字母名称
              this.$emit('change', touchLetter);
            }
          }, 16);
        }
      },
      handleTouchEnd() {
        this.isTouchLetter = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .bar
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.6rem
    right: 0
    bottom: 0
    width: .4rem
    text-align: center
    color: $bgColor
    .item
      line-height: .36rem
</style>
