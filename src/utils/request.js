/*
 * @Author: luo_h603
 * @Date: 2022-08-03 19:23:50
 * @LastEditTime: 2022-08-05 15:00:31
 * @LastEditors: luo_h603
 * @Description: 封装axios请求
 * God help those who help themselves
 */

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 创建axios实例
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net' // 导出基准地址，不用axios的接口可以直接使用
const instance = axios.create({
    baseURL,
    timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    const { profile } = store.state.user // 获取用户信息
    if (profile.token) { // 判断用户是否登录
        config.headers.Authorization = `Bearer ${profile.token}` // 设置请求头
    }
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(
    res => {
        // 对响应数据做点什么
        return res.data
    }, error => {
        // 对响应错误做点什么
        // 401 状态码：未登录
        if (error.response && error.response.status === 401) {
            store.commit('user/setUser', {}) // 清空无效用户信息
            const fullPath = encodeURIComponent(router.currentRoute.value.fullPath) // 跳转到登录页面
            router.push('/login?redirect=' + fullPath) // 转换uri编码
        }
        return Promise.reject(error)
    }
)

// 请求工具函数
export default (url, method, submitData) => {
    return instance({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}