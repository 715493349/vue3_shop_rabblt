/*
 * @Author: luo_h603
 * @Date: 2022-07-21 11:30:33
 * @LastEditTime: 2022-07-21 14:02:11
 * @LastEditors: luo_h603
 * @Description:
 * God help those who help themselves
 */
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

// 创建仓库
// vue2：new Vuex.Store({})
// vue3：createStore({})
export default createStore({
  modules: {
    user,
    cart,
    category
  },
  // 持久化
  plugins: [createPersistedState({
    // 本地存储key:存储数据的键名
    key: 'erabbit-cient-pc-124-store',
    // 指定存储模块
    paths: ['user', 'cart']
  })]
})
