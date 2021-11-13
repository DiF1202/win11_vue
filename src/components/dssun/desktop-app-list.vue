<template>
  <div class="desktopContainer">
    <Item
      v-for="(ap, index) in appsList"
      :appName="ap.appName"
      :imgUrl="require('@/assets/img/appIcons/' + ap.description + '.png')"
      :displayMode="displayMode"
      :key="index"
    ></Item>
  </div>
</template>

<script>
import Item from "./desktop-app-item.vue";

export default {
  name: "desktop-app-list",
  props: {
    displayMode: String, // 图标显示模式：big 大图标 middle 中图标 small 小图标
  },
  components: { Item },
  data() {
    return {
      appsList: [
        {
          appName: "计算机",
          description: "computer",
          size: 0,
          date: "2020-01-01",
        },
        {
          appName: "资源管理器",
          description: "explorer",
          size: 0,
          date: "2020-01-01",
        },
        {
          appName: "回收站",
          description: "bin",
          size: 0,
          date: "2020-01-01",
        },
        {
          appName: "浏览器",
          description: "edge",
          size: 1,
          date: "2021-11-09",
        },
        {
          appName: "应用商店",
          description: "store",
          size: 1,
          date: "2021-11-10",
        },
        {
          // appName: "Visual Studio Code",
          appName: "VSCode",
          description: "vscode",
          size: 2,
          date: "2021-11-11",
        },
        {
          appName: "GitHub",
          description: "github",
          size: 1,
          date: "2021-11-12",
        },
      ],
    };
  },
};
</script>

<style>
/* 上层容器使用：
height: calc(100vh - 任务栏高度); */

.desktopContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 0;
  height: 100%;
  background-color: lightblue;
}
</style>
