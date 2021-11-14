<!--
 * @Author: your name
 * @Date: 2021-11-14 09:33:51
 * @LastEditTime: 2021-11-14 09:38:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\views\desktop.vue
-->
<template>
  <div class="desktop">
    <div class="main" @contextmenu.prevent="rightClick">
      <!-- 鼠标右键出现的列表 -->
      <Click ref="clickRef" v-if="visClick"></Click>
      <!-- 桌面图标列表组件 -->
      <AppList :displayMode="displayMode"></AppList>
    </div>
    <TaskBar></TaskBar>
  </div>
</template>

<script>
import TaskBar from '../components/dfhe/TaskBar';
import AppList from '../components/dssun/DesktopAppList.vue';
import Click from '../components/panzhou/click.vue';
export default {
  name: 'desktop',
  components: {
    TaskBar,
    AppList,
    Click,
  },
  data() {
    return {
      visClick: true,
      displayMode: 'small', // 控制桌面图标大小：small 小图标（默认） middle 中图标 big 大图标
    };
  },
  methods: {
    rightClick(e) {
      console.log(this.$refs);
      const { clientX, clientY } = e;
    },
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
  position: relative;
  .main {
    flex: 1;
    // background-color: green;
    height: calc(100vh - 40px);
  }
}
</style>
