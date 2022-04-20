import { createApp } from 'vue'


import App from './app.vue'

import router from './router/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import AntDesign from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import store from './store'

// import axios from 'axios'



// 5. 创建并挂载根实例
const app = createApp(App)

// app.prototype.$axios = axios

//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router).use(store).use(ElementPlus).use(AntDesign).mount('#app')

// 现在，应用已经启动了！