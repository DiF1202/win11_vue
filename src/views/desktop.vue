<template>
  <div class="desktop">
    <div class="main" @contextmenu.prevent="rightClick">
      <!-- 鼠标右键出现的列表 -->
      <Click ref="clickRef" v-if="visClick"></Click>
      <!-- 桌面图标列表组件 -->
      <AppList :displayMode="displayMode" :sortMethod="sortMethod"></AppList>
    </div>
    <taskBar></taskBar>
  </div>
</template>

<script>
import taskBar from "../components/dfhe/taskBar.vue";
import AppList from "../components/dssun/DesktopAppList.vue";
import Click from "../components/panzhou/click.vue";
export default {
  name: "desktop",
  components: {
    taskBar,
    AppList,
    Click,
  },
  data() {
    return {
      visClick: true,
      displayMode: "small", // 控制桌面图标大小：small 小图标（默认） middle 中图标 big 大图标
      sortMethod: "date", // 控制图标排序方式：size 按大小 date 按时间 name 按名称
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
  background-image: url("../assets/img/wallpapers/light.jpg");
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
