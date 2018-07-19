// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import fastClick from 'fastclick'

import 'styles/reset.css' // 将所有html标签的默认样式统一化
import 'styles/border.css' // 为解决不同的像素密度，1px在各种设备下表现不同的问题
import 'styles/iconfont.css' // iconfong图标

fastClick.attach(document.body) // 为消除移动端浏览器，从物理触摸到触发点击事件之间的300ms延时的问题

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
