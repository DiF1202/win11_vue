<template>
  <div class="desktopContainer">
    <Item
      v-for="(ap, index) in sortedAppsList"
      :appName="ap.appName"
      :imgUrl="imgUrl(ap.description)"
      :displayMode="displayMode"
      :key="index"
      @click="openApp"
      :id="ap.description"
    ></Item>
    <NewItem
      :fileType="newFileType"
      :displayMode="displayMode"
      v-if="ifNewFile"
      @newItemCallback="newItemCallback"
    ></NewItem>
    <!-- 测试 -->
    <div class="testdiv">
      <div class="test">当前可以点的图标：</div>
      <div class="test">VSCode（窗口组件完成）</div>
      <div class="test">GitHub（链接）</div>
      <div class="test">浏览器（窗口组件完成）</div>
      <button @click="test1" class="test">测试新建文件夹</button>
      <button @click="test2" class="test">测试新建txt</button>
      <button @click="test3" class="test">测试大小图标切换</button>
    </div>
  </div>
</template>

<script>
import Item from "./DesktopAppItem.vue";
import NewItem from "./DesktopNewItem.vue";

export default {
  name: "desktop-app-list",
  props: {
    displayMode: String, // 图标显示模式：big 大图标 middle 中图标 small 小图标
    sortMethod: String, // 图标排序方式：size 按大小 date 按时间 name 按名称
  },
  components: { Item, NewItem },
  data() {
    return {
      ifNewFile: false,
      newFileType: "txt",
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
      appUrl: {
        edge: "",
        vscode: "",
        github: "https://github.com/",
      },
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
    imgUrl(imgName) {
      if (imgName.indexOf("/") + 1) {
        if (imgName.split("/")[0][0] === "t")
          return require("@/assets/img/appIcons/txt.png");
        else return require("@/assets/img/appIcons/folder.png");
      } else return require("@/assets/img/appIcons/" + imgName + ".png");
    },
    openApp(e) {
      let tar = e.target;
      let i = 0;
      while (!tar.id && i < 5) {
        tar = tar.parentNode;
        ++i;
      }
      if (i >= 5) return;
      if (typeof this.appUrl[tar.id] == "undefined") return;
      if (this.appUrl[tar.id]) window.open(this.appUrl[tar.id]);
      else this.$emit("winStateChange", tar.id, 4);
    },
    createNewItem(fileType) {
      this.ifNewFile = true;
      this.newFileType = fileType;
    },
    newItemCallback(fileType, fileName) {
      this.ifNewFile = false;
      this.appsList.push({
        appName: fileName,
        description: fileType + "/" + fileName,
        size: 1,
        date: "2021-11-12",
      });
    },
    // 测试函数
    test1() {
      this.createNewItem("folder");
    },
    test2() {
      this.createNewItem("txt");
    },
    test3() {
      if (this.displayMode === "small") this.$emit("changeDeskIconSize", 1);
      else if (this.displayMode === "middle")
        this.$emit("changeDeskIconSize", 2);
      else this.$emit("changeDeskIconSize", 0);
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

/* 测试 */
.test {
  text-align: center;
  width: 240px;
  font-size: 14px;
  color: black;
  display: block;
  margin: 10px;
}
.testdiv {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 240px;
  padding: 10px;
  border: crimson solid 1px;
}
</style>
