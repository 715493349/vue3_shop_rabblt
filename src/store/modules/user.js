/*
 * @Author: luo_h603
 * @Date: 2022-08-03 18:47:35
 * @LastEditTime: 2022-08-04 19:27:52
 * @LastEditors: luo_h603
 * @Description: 用户模块
 * God help those who help themselves
 */
export default {
    namespaced: true,
    state() {
        return {
            // 用户信息
            profile: {
                id: '', // 用户id
                avatar: '', // 头像
                nickname: '', // 昵称
                account: '', // 账号
                mobile: '', // 手机号
                token: '' // token
            }
        }
    },
    mutations: {
        // 设置用户信息,payload：用户信息
        setUser(state, payload) {
            state.profile = payload
        }
    }
}