import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'

const pathHome = '/'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉路由的“#”
  routes: [
    {
      path: pathHome,
      component: Home
    }
  ]
})
