import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import admin from '../views/Admin.vue'
import Food from '../views/Food'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
