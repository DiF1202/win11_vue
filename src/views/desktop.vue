<!--
 * @Author: your name
 * @Date: 2021-11-13 14:06:23
 * @LastEditTime: 2021-11-13 17:37:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\views\desktop.vue
-->
<template>
  <div class="desktop">
    <div class="main">
      <!-- 桌面图标列表组件 -->
      <AppList :displayMode="displayMode"></AppList>
    </div>
    <div class="taskBar"></div>
  </div>
</template>

<script>
// 导入桌面图标列表组件
import AppList from "../components/dssun/desktop-app-list.vue";

export default {
  components: { AppList },
  data() {
    return {
      displayMode: "small", // 控制桌面图标大小：small 小图标（默认） middle 中图标 big 大图标
    };
  },
};
</script>

<style lang="scss" scoped>
.desktop {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/wallpapers/light.jpg");
  background-position: center;
  background-size: cover;
  overflow: hidden;
  user-select: none;
  .main {
    flex: 1;
    // background-color: green;
    height: calc(100vh - 40px);
  }
  .taskBar {
    height: 40px;
    width: 100%;
    background-color: red;
    display: flex;
    align-self: flex-end;
  }
}
</style>
