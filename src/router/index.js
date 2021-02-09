// index.js
// @/router/index.js
// vue router配置文件
// 存放页面path
// 

//导入
import { createRouter, createWebHistory } from 'vue-router'
import Manager from '../views/manager/Xposed.vue'
import Login from '../views/Login.vue'
import pageNotFound from '../views/404.vue'
import sub01 from '../views/manager/sub01.vue'

// 定义routes 
// 存放页面path,name,component
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/manager",
    name: "manager",
    component: Manager,
    children: [{
      path:"/manager/sub01",
      name:"Sub01",
      components: {
        content:sub01
      }
    }]
  }, {
    path: '/404',
    component: pageNotFound,
  }
]
// 定义routes end

// 定义router
// 配置router相关设置
const router = createRouter({
  mode: 'history',
  history: createWebHistory("/"),
  routes,
})
// 定义router end

//导出
export default router
