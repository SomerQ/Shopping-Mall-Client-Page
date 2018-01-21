import Vue from 'vue'
import Router from 'vue-router'
import Mall from '../components/mall/Mall'
import Login from '@/components/login/Login'
import Footer from '../components/mall/common/Footer'
import Header from '@/components/mall/common/Header'
import GoodsList from '@/components/mall/goods/GoodsList'
import GoodsDetail from '@/components/mall/goods/GoodsDetail.vue'
import Cart from '../components/mall/cart/Cart.vue'
import Commit from '../components/mall/order/Commit.vue'
import Pay from '../components/mall/order/Pay.vue'

import beforeEach from './bfeach'

Vue.use(Router)

let mallChidren = [{
    path: 'goods/list',
    name: 'goodsList',
    component: GoodsList
  },
  {
    path: 'goods/detail/:id',
    name: 'goodsDetail',
    component: GoodsDetail
  },
  {
    path: 'cart',
    name: 'cart',
    component: Cart
  },
  {
    path: 'order/commit',
    name: 'Commit',
    component: Commit
  },
  {
    path: 'order/pay',
    name: 'pay',
    component: Pay
  },
];

var router = new Router({
  routes: [{
      path: '/',
      name: 'index',
      redirect: '/goods/list',
      component: Mall,
      children: mallChidren
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

  ]
})

router.beforeEach(beforeEach)

export default router
