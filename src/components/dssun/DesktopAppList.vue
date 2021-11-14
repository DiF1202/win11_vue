<template>
  <div class="desktopContainer">
    <Item
      v-for="(ap, index) in sortedAppsList"
      :appName="ap.appName"
      :imgUrl="require('@/assets/img/appIcons/' + ap.description + '.png')"
      :displayMode="displayMode"
      :key="index"
      @click="openApp"
      :id="ap.description"
    ></Item>
  </div>
</template>

<script>
import Item from "./DesktopAppItem.vue";

export default {
  name: "desktop-app-list",
  props: {
    displayMode: String, // 图标显示模式：big 大图标 middle 中图标 small 小图标
    sortMethod: String, // 图标排序方式：size 按大小 date 按时间 name 按名称
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
          date: "2020-01-02",
        },
        {
          appName: "回收站",
          description: "bin",
          size: 0,
          date: "2020-01-03",
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
  computed: {
    sortedAppsList() {
      let k;
      if (this.sortMethod === "name") k = "appName";
      else k = this.sortMethod;
      this.appsList.sort(function (a, b) {
        if (a[k] > b[k]) return 1;
        else if (a[k] < b[k]) return -1;
        else return 0;
      });
      return this.appsList;
    },
  },
  methods: {
    openApp(e) {
      let tar = e.target;
      let i = 0;
      while (!tar.id && i < 5) {
        tar = tar.parentNode;
        ++i;
      }
      if (i >= 5) return;
      this.$emit("winStateChange", tar.id, 4);
    },
  },
};
</script>

<style scoped>
/* 上层容器使用：
height: calc(100vh - 任务栏高度); */

.desktopContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 0;
  height: 100%;
}
</style>
