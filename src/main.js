// main.js
// @/main.js
// 项目启动配置js
// 

//导入
import { createApp } from 'vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import axios from 'axios';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';


// 配置axios默认baseurl
axios.defaults.baseURL = '/projectname'

// markdown配置
VueMarkdownEditor.use(vuepressTheme);

// vue router全局配置
router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.matched.length !== 0) {
        next()
    } else {
        // 404页面配置
        next({ path: '/404' })
    }
});
// vue router全局配置 end
// app配置
const app = createApp(App)
// 使用vue store
app.use(store)
// 使用vue router
app.use(router)
// 使用Antd Design of Vue
app.use(Antd)
// 使用markdown编辑器
app.use(VueMarkdownEditor);
// 注入至#app
app.mount('#app')
// app配置end
