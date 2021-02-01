import { createStore } from 'vuex'
import config from "../../package.json";

export default createStore({
  state: {
    projectName: config.name,
    version: config.version,
    author: config.author,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
