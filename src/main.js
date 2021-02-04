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
VueMarkdownEditor.use(vuepressTheme);

//404页面配置
router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.matched.length !== 0) {
        next()
    } else {
        next({ path: '/404' })
    }
});
//app配置
const app = createApp(App)
app.use(store)
app.use(router)
app.use(Antd)
app.use(VueMarkdownEditor);
axios.defaults.baseURL = '/projectname'
app.mount('#app')
