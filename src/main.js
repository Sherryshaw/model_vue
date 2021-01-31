import { createApp } from 'vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Login from './views/Login.vue';

createApp(Login).use(store).use(router).use(Antd).mount('#app')
