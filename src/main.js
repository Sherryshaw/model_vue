import { createApp } from 'vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import Login from './views/Login.vue';
import ManagerHome from './views/manager/Home'
import axios from 'axios';

const app = createApp(ManagerHome)
app.use(store)
app.use(router)
app.use(Antd)
axios.defaults.baseURL = '/projectname'
app.mount('#app')
