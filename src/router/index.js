import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import City from '@/pages/city'

const pathHome = '/'
const pathCity = '/city'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉路由的“#”
  routes: [
    {
      path: pathHome,
      component: Home
    },
    {
      path: pathCity,
      component: City
    }
  ]
})
