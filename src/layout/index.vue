<!--
 * @Author: luo_h603
 * @Date: 2022-08-04 15:42:43
 * @LastEditTime: 2022-08-04 16:57:45
 * @LastEditors: luo_h603
 * @Description: 结构布局
 * God help those who help themselves
-->
<template>
  <!-- 顶部 -->
  <nav>顶部内容</nav>
  <!-- 头部 -->
  <header>头部内容</header>
  <!-- 中间容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部 -->
  <footer>底部内容</footer>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style lang="less" scope></style>
