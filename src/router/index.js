import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/home'
import Cart from '@/components/pages/cart'
import Order from '@/components/pages/order'

const pathHome = '/'
const pathCart = '/cart'
const pathOrder = '/order'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉路由的“#”
  routes: [
    {
      path: pathHome,
      component: Home
    },
    {
      path: pathCart,
      component: Cart
    },
    {
      path: pathOrder,
      component: Order
    }
  ]
})
