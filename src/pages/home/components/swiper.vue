<template>
    <div class="swiper">
        <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data(){
        return {
            swiperList: [
                {
                    id: '00001',
                    imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'
                },
                {
                    id: '00002',
                    imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
                }
            ],
            swiperOption: {
                pagination: '.swiper-pagination',
                autoplay : 5000,
                loop : true,
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.swiper
    height: 2rem;
    background #eee;
    .swiper-img
        width: 100%;
    & >>> .swiper-pagination-bullet-active
        background: white;
</style>


