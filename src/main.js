/*
 * @Author: luo_h603
 * @Date: 2022-07-21 11:30:33
 * @LastEditTime: 2022-08-04 18:41:35
 * @LastEditors: luo_h603
 * @Description: 
 * God help those who help themselves
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 重置样式
import 'normalize.css'
import './assets/styles/common.less'

createApp(App).use(store).use(router).mount('#app')