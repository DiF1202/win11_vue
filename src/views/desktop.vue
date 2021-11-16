<template>
  <div class="desktop">
    <div class="main" @click="closeClick" @contextmenu.prevent="rightClick">
      <!-- 鼠标右键出现的列表 -->
      <Click></Click>
      <!-- 桌面图标列表组件 -->
      <AppList
        :displayMode="displayMode"
        :sortMethod="sortMethod"
        @winStateChange="winStateChange" 
        @changeDeskIconSize="changeDeskIconSize"
      ></AppList>
      <!-- Edge应用窗口 -->
      <EdgeApp
        :winMax="winMax['edge']"
        :winHide="winHide['edge']"
        :winSize="winSize['edge']"
        @winStateChange="winStateChange"
      ></EdgeApp>
      <!-- Markdown应用窗口 -->
      <MarkdownApp
        :winMax="winMax['markdown']"
        :winHide="winHide['markdown']"
        :winSize="winSize['markdown']"
        @winStateChange="winStateChange"
      ></MarkdownApp>
    </div>
    <BarTask></BarTask>
  </div>
</template>

<script>
import BarTask from '../components/dfhe/BarTask.vue';
import AppList from '../components/dssun/DesktopAppList.vue';
import Click from '../components/panzhou/click.vue';
import EdgeApp from '../components/dssun/EdgeApp.vue';
import MarkdownApp from '../components/xhli/MarkdownApp.vue';

export default {
  name: 'desktop',
  components: {
    AppList,
    Click,
    EdgeApp,
    MarkdownApp
  },
  data() {
    return {
      //#region  dssun 控制的 data
      displayMode: 'small', // 控制桌面图标大小：small 小图标（默认） middle 中图标 big 大图标
      sortMethod: 'date', // 控制图标排序方式：size 按大小 date 按时间 name 按名称
      winMax: {
        // 窗口是否最大化：false 否 true 是
        // 通过改变对应 app 的该数组项来控制窗口的**最小化和显示**：
        // * true -> false : 从显示状态最小化
        // * false -> true : 从最小化状态显示窗口
        edge: 'true',
        markdown: 'true',
      },
      winHide: {
        // 窗口是否隐藏：false 否 true 是
        // 通过改变对应 app 的该数组项来控制窗口的**打开和关闭**：
        // * true -> false : 从关闭状态到打开
        // * false -> true : 从打开状态到关闭
        edge: 'true',
        markdown: 'true',
      },
      winSize: {
        // 窗口尺寸：normal 还原窗口 max 最大化窗口
        // 通过改变对应 app 的该数组项来控制窗口的**最大化和还原**：
        // * normal -> max : 从还原状态到最大化
        // * max -> normal : 从最大化状态到还原
        edge: 'max',
        markdown: 'normal',
      },
      //#endregion
    };
  },
  methods: {
    //#region  panzhou控制的 method
    // 1. 鼠标右键点击出现 小弹框
    rightClick(e) {
      const { clientX, clientY } = e;
      this.$store.commit('setClick', {
        clientX,
        clientY,
        vis: true,
      });
    },
    // 2. 鼠标左键点击关闭小弹框
    closeClick() {
      this.$store.commit('setClick', {
        vis: false,
      });
    },
    //#endregion

    //#region dssun 回调函数

    // 1 提供给**窗口子组件**的回调函数
    // 请在窗口子组件的右上角三个按钮的事件函数中使用 $emit 调用该函数以调整窗口状态
    winStateChange(appname, e) {
      console.log(appname)
      console.log(e)
      // appname 应用名称的唯一标识符
      // e 事件编码：0 关闭按钮被按下 1 最小化按钮被按下 2 最大化/还原按钮被按下 3 任务栏图标被按下 4 桌面图标被按下
      if (e === 0) {
        this.winHide[appname] = 'true';
      } else if (e === 1) {
        this.winMax[appname] = 'false';
      } else if (e === 2) {
        if (this.winSize[appname] === 'normal') this.winSize[appname] = 'max';
        else this.winSize[appname] = 'normal';
      } else if (e === 3) {
        if (this.winMax[appname] === 'false') this.winMax[appname] = 'true';
        else this.winMax[appname] = 'false';
      } else {
        this.winHide[appname] = "false";
        console.log('this.winHide', this.winHide[appname])
      }
    },

    // 2 提供给**右键菜单**子组件的回调函数
    // 请在右键菜单子组件的切换大中小图标的事件函数中使用 $emit 调用该函数以调整桌面图标大小
    changeDeskIconSize(iconSize) {
      // iconSize 要切换成的图标尺寸：0 小图标 1 中图标 2 大图标
      if(iconSize === 0) this.displayMode = "small";
      else if(iconSize === 1) this.displayMode = "middle";
      else this.displayMode = "big";
    }

    //#endregion 
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
