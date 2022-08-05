<!--
 * @Author: luo_h603
 * @Date: 2022-08-04 15:42:43
 * @LastEditTime: 2022-08-05 14:01:43
 * @LastEditors: luo_h603
 * @Description: 结构布局
 * God help those who help themselves
-->
<template>
  <!-- 顶部 -->
  <AppNavbar></AppNavbar>
  <!-- 头部 -->
  <AppHeader></AppHeader>
  <!-- 中间容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from "@/components/app-navbar.vue";
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";
import { useStore } from "vuex";

export default {
  name: "Layout",
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
  },
  setup() {
    // 获取分类列表
    const store = useStore();
    store.dispatch("category/getList");
  },
};
</script>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
