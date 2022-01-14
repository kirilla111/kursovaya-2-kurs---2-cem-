import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import admin from '../views/admin.vue'
import Food from '../views/Food'
import Cart from '../views/Cart'
import Check from '../views/Check'
import aboutCouriers from '../views/aboutCouriers'
import courierPage from '../views/courierPage'
import userPage from '../views/userPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/courierPage',
    name: 'courierPage',
    component: courierPage
  },
  {
    path: '/userPage',
    name: 'userPage',
    component: userPage
  },
  {
    path: '/aboutCouriers',
    name: 'aboutCouriers',
    component: aboutCouriers
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/check',
    name: 'Check',
    component: Check
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
