/*
 * @Author: luo_h603
 * @Date: 2022-07-21 11:30:33
 * @LastEditTime: 2022-07-21 14:22:41
 * @LastEditors: luo_h603
 * @Description:
 * God help those who help themselves
 */
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.join(__dirname, './src/assets/styles/variables.less'),
                path.join(__dirname, './src/assets/styles/mixins.less')
            ]
        }
    }
})