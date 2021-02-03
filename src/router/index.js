import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Manager from '../views/manager/Xposed.vue'
import Login from '../views/Login.vue'
import pageNotFound from '../components/404.vue'

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: '/home',
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
    path: "/manager",
    name: "manager",
    component: Manager,
    children: []
  }, {
    path: '/404',
    component: pageNotFound,
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory("/"),
  routes,
})
export default router
