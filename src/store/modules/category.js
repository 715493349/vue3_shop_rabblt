/*
 * @Author: luo_h603
 * @Date: 2022-08-03 18:47:57
 * @LastEditTime: 2022-08-05 15:43:05
 * @LastEditors: luo_h603
 * @Description: 分类模块
 * God help those who help themselves
 */

// 存储的分类数据
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
    namespaced: true,
    state() {
        return {
            // 分类信息集合，依赖topCategory重新设置，保证初始化时候的数据，不会丢失白屏
            list: topCategory.map(item => ({ name: item }))
        }
    },
    // 修改分类函数
    mutations: {
        setList(state, headCategory) {
            state.list = headCategory
        },
        // 定义show和hide函数，控制当前分类的二级分类显示和隐藏
        // show(state, id) {
        //     const currCategory = state.list.find(item => item.id === id)
        //     currCategory.open = true
        // },
        // hide(state, id) {
        //     const currCategory = state.list.find(item => item.id === id)
        //     currCategory.open = false
        // }
    },
    // 获取分类数据
    actions: {
        // 获取分类数据
        async getList({ commit }) {
            const { result } = await findAllCategory()
                // 给一级分类加上一个控制二级分类显示隐藏的数据open
                // result.forEach(item => { item.open = false })
                // 修改分类数据
            commit('setList', result)
        }
    }
}