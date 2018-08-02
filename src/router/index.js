import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import City from '@/pages/city'
import Detail from '@/pages/detail'

const pathHome = '/';
const pathCity = '/city';
const pathDetail = '/detail/:id';

Vue.use(Router);

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
    },
    {
      path: pathDetail,
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
