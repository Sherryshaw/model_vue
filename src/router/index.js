import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Xposed from '../views/manager/Xposed.vue'
import Login from '../views/Login.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/manager/xposed",
    name: "Xposed",
    component: Xposed
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory("/"),
  routes
})

export default router
