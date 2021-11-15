<template>
  <div class="desktop">
    <div class="main" @click="closeClick" @contextmenu.prevent="rightClick">
      <!-- 鼠标右键出现的列表 -->
      <Click></Click>
      <!-- 桌面图标列表组件 -->
      <AppList :displayMode="displayMode" :sortMethod="sortMethod"></AppList>
      <!-- Edge应用窗口 -->
      <EdgeApp
        :winMax="winMax['edge']"
        :winHide="winHide['edge']"
        :winSize="winSize['edge']"
      ></EdgeApp>
    </div>
    <TaskBar></TaskBar>
  </div>
</template>

<script>
import TaskBar from '../components/dfhe/taskBar';
import AppList from '../components/dssun/DesktopAppList.vue';
import Click from '../components/panzhou/click.vue';

import EdgeApp from '../components/dssun/EdgeApp.vue';

export default {
  name: 'desktop',
  components: {
    TaskBar,
    AppList,
    Click,
    EdgeApp,
  },
  data() {
    return {
      //#region  dss 控制的 data
      displayMode: 'small', // 控制桌面图标大小：small 小图标（默认） middle 中图标 big 大图标
      sortMethod: 'date', // 控制图标排序方式：size 按大小 date 按时间 name 按名称
      winMax: {
        // 窗口是否最大化：false 否 true 是
        // 通过改变对应 app 的该数组项来控制窗口的**最小化和显示**：
        // * true -> false : 从显示状态最小化
        // * false -> true : 从最小化状态显示窗口
        edge: 'true',
      },
      winHide: {
        // 窗口是否隐藏：false 否 true 是
        // 通过改变对应 app 的该数组项来控制窗口的**打开和关闭**：
        // * true -> false : 从关闭状态到打开
        // * false -> true : 从打开状态到关闭
        edge: 'true',
      },
      winSize: {
        // 窗口尺寸：normal 还原窗口 max 最大化窗口
        // 通过改变对应 app 的该数组项来控制窗口的**最大化和还原**：
        // * normal -> max : 从还原状态到最大化
        // * max -> normal : 从最大化状态到还原
        edge: 'max',
      },
      //#endregion
    };
  },
  methods: {

    //#region  panzhou控制的 method
    // 1. 鼠标右键点击出现 小弹框
    rightClick(e) {
      const {
        clientX,
        clientY
      } = e;
      this.$store.commit('setClick', {
        clientX,
        clientY,
        vis: true
      })
    },
    // 2. 鼠标左键点击关闭小弹框
    closeClick() {
      this.$store.commit('setClick', {
        vis: false
      })
    }
    //#endregion
  }
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
