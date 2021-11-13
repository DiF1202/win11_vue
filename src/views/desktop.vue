<!--
 * @Author: your name
 * @Date: 2021-11-13 14:06:23
 * @LastEditTime: 2021-11-13 22:00:51
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
    <taskBar></taskBar>
  </div>
</template>

<script>
import taskBar from '../components/dfhe/taskBar.vue';
import AppList from '../components/dssun/desktop-app-list.vue';
export default {
  data() {
    return {
      displayMode: 'small', // 控制桌面图标大小：small 小图标（默认） middle 中图标 big 大图标
    };
  },
  name: 'desktop',
  components: {
    taskBar,
    AppList,
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
  background-image: url('../assets/img/wallpapers/light.jpg');
  background-position: center;
  background-size: cover;
  overflow: hidden;
  user-select: none;
  .main {
    flex: 1;
    // background-color: green;
    height: calc(100vh - 40px);
  }
}
</style>
