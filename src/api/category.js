/*
 * @Author: luo_h603
 * @Date: 2022-08-05 10:46:25
 * @LastEditTime: 2022-08-05 14:43:58
 * @LastEditors: luo_h603
 * @Description: 定义首页需要的接口函数
 * God help those who help themselves
 */

import request from '@/utils/request'

/**
 * 获取首页头部分类数据
 */
export function findAllCategory() {
    return request('/home/category/head', 'get')
}