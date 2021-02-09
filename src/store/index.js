// index.js
// @/store/index.js
// vue store配置文件
// 

//导入
import { createStore } from 'vuex'
import config from "../../package.json";

//导出
export default createStore({
  // 全局state
  state: {
    // 项目名称
    projectName: config.name,
    // 项目版本
    version: config.version,
    // 作者
    author: config.author,
  },
  // 全局state end
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
