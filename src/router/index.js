/*
 * @Author: luo_h603
 * @Date: 2022-07-21 11:30:33
 * @LastEditTime: 2022-08-05 15:43:22
 * @LastEditors: luo_h603
 * @Description:
 * God help those who help themselves
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    // 一级路由布局容器
    {
        path: '/',
        component: () =>
            import ('@/layout/index.vue'),
        children: [{
                path: '/',
                component: () =>
                    import ('@/views/home/index.vue')
            }
            // {
            //     path: '/category/:id',
            //     component: () =>
            //         import ('@/views/category/index.vue')
            // },
            // {
            //     path: '/category/sub/:id',
            //     component: () =>
            //         import ('@/views/category/sub.vue')
            // },
        ]
    }
]

// 创建路由实例、路由配置
// vue2: new createRouter({})
// vue3: createRouter({})
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router