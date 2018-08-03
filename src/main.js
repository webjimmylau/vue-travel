// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'
import BScroll from 'better-scroll'

import fastClick from 'fastclick' // 为消除移动端浏览器，从物理触摸到触发点击事件之间的300ms延时的问题
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播插件
import 'babel-polyfill' // 解决低版本浏览器出现的一些白屏问题，ie9和一些低版本的高级浏览器对es6新语法并不支持

import 'styles/reset.css' // 将所有html标签的默认样式统一化
import 'styles/border.css' // 为解决不同的像素密度，1px在各种设备下表现不同的问题
import 'styles/iconfont.css' // iconfong图标
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.$ajax = axios // $ajax调用接口
Vue.prototype.$scroll = BScroll // 滚动

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
