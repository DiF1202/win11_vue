<template>
  <div class="desktop-shade" :style="{ '--opacity': Lightness }">
    <div class="desktop" :class="{ 'night-light': isOpenLightmode }">
      <div class="main" @click="closeClick" @contextmenu.prevent="rightClick">
        <!-- 鼠标右键出现的列表 -->
        <Click @clickMenu="menuJudge"></Click>

        <!-- 桌面图标列表组件 -->
        <AppList
          :displayMode="displayMode"
          :sortMethod="sortMethod"
          @winStateChange="winStateChange"
          @changeDeskIconSize="changeDeskIconSize"
          @openTxtFile="openTxtFile"
          @newTxtFile="newTxtFile"
          ref="appList"
        ></AppList>
        <!-- Edge应用窗口 -->
        <EdgeApp
          :winMax="winMax['edge']"
          :winHide="winHide['edge']"
          :winSize="winSize['edge']"
          @winStateChange="winStateChange"
        ></EdgeApp>
        <!-- VSCode应用窗口 -->
        <VscodeApp
          :winMax="winMax['vscode']"
          :winHide="winHide['vscode']"
          :winSize="winSize['vscode']"
          @winStateChange="winStateChange"
        ></VscodeApp>
        <!-- Notepad应用窗口 -->
        <NotepadApp
          :winMax="winMax['notepad']"
          :winHide="winHide['notepad']"
          :winSize="winSize['notepad']"
          :currentFile="currentFile"
          @winStateChange="winStateChange"
          @saveTxtFile="saveTxtFile"
        ></NotepadApp>
        <!-- Markdown应用窗口 -->
        <MarkdownApp
          :winMax="winMax['markdown']"
          :winHide="winHide['markdown']"
          :winSize="winSize['markdown']"
          @winStateChange="winStateChange"
        ></MarkdownApp>
        <!-- Computer应用窗口 -->
        <ComputerApp
          :winMax="winMax['computer']"
          :winHide="winHide['computer']"
          :winSize="winSize['computer']"
          @winStateChange="winStateChange"
        ></ComputerApp>
        <!-- Explorer应用窗口 -->
        <ExplorerApp
          :winMax="winMax['explorer']"
          :winHide="winHide['explorer']"
          :winSize="winSize['explorer']"
          @winStateChange="winStateChange"
        ></ExplorerApp>
        <!-- Bin应用窗口 -->
        <BinApp
          :winMax="winMax['bin']"
          :winHide="winHide['bin']"
          :winSize="winSize['bin']"
          @winStateChange="winStateChange"
        />
      </div>

      <!-- 状态栏弹框+护眼模式 -->
      <transition name="el-fade-in">
        <div v-show="isShowControls">
          <ControlCenter
            @toggleLightMode="toggleLightMode"
            @changeLightnesss="getLightnesss"
          ></ControlCenter>
        </div>
      </transition>
      <!-- 任务栏 -->
      <BarTask @showControls="showControls"></BarTask>
    </div>
  </div>
</template>

<script>
import BarTask from '../components/dfhe/BarTask.vue';
import ControlCenter from '../components/dfhe/ControlCenter.vue';
import AppList from '../components/dssun/DesktopAppList.vue';
import Click from '../components/panzhou/click.vue';
import EdgeApp from '../components/dssun/EdgeApp.vue';
import VscodeApp from '../components/dssun/VscodeApp.vue';
import NotepadApp from '../components/dssun/NotepadApp.vue';
import MarkdownApp from '../components/xhli/MarkdownApp.vue';
import BinApp from '../components/xhli/BinApp.vue';

import ExplorerApp from '../components/yuzhang/FileExplorer.vue';

export default {
  name: 'desktop',
  components: {
    AppList,
    Click,
    EdgeApp,
    BarTask,
    VscodeApp,
    ControlCenter,
    NotepadApp,
    MarkdownApp,
    BinApp,
    // ComputerApp,
    ExplorerApp,
  },
  data() {
    return {
      //#region  dssun 控制的 data
      displayMode: 'small', // 控制桌面图标大小：small 小图标（默认） middle 中图标 big 大图标
      sortMethod: 'date', // 控制图标排序方式：size 按大小 date 按时间 name 按名称
      currentFile: {}, // 记事本当前文件
      noteFiles: {
        // 记事本保存的内容
        'Todo List.txt': {
          fileName: 'Todo List.txt',
          content: '重生之我是尤Vue溪\n\n' + 
                   '正在进行的任务：\n* 右键菜单-刷新、图标排序、新建文件/文件夹（攀攀）\n* 开始菜单、搜索栏、资讯栏（小斐）\n* 任务栏（大森）\n* 手风琴（心慧）\n* 计算机、文件资源管理器窗口组件（羽羽）\n\n' + 
                   '未开始的组件开发：\n* 应用商店\n* 更换桌面壁纸\n* 计算器\n* 音乐播放器（可选）\n* 终端（可选）\n',
        },
      },
      winMax: {
        // 窗口是否最大化：false 否 true 是
        // 通过改变对应 app 的该数组项来控制窗口的**最小化和显示**：
        // * true -> false : 从显示状态最小化
        // * false -> true : 从最小化状态显示窗口
        edge: 'true',
        vscode: 'true',
        markdown: 'true',
        notepad: 'true',
        computer: 'true',
        explorer: 'true',
        bin: 'true',
      },
      winHide: {
        // 窗口是否隐藏：false 否 true 是
        // 通过改变对应 app 的该数组项来控制窗口的**打开和关闭**：
        // * true -> false : 从关闭状态到打开
        // * false -> true : 从打开状态到关闭
        edge: 'true',
        vscode: 'true',
        markdown: 'true',
        notepad: 'true',
        computer: 'true',
        explorer: 'true',
        bin: 'true',
      },
      winSize: {
        // 窗口尺寸：normal 还原窗口 max 最大化窗口
        // 通过改变对应 app 的该数组项来控制窗口的**最大化和还原**：
        // * normal -> max : 从还原状态到最大化
        // * max -> normal : 从最大化状态到还原
        edge: "max",
        vscode: "max",
        markdown: "normal",
        notepad: "normal",
        computer: "normal",
        explorer: "normal",
        bin: "normal",
      },
      //#endregion

      isShowControls: false, //是否展示状态栏
      isOpenLightmode: false, //是否开启夜间模式
      Lightness: 0, //亮度
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
    // 3. clickMenu的事件回调
    menuJudge(arr) {
      const type = arr[0];
      const idx = arr[1];
      console.log(type, idx);
      switch (type) {
        case 0:
          this.changeDeskIconSize(idx); // 切换图标
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
        case 7:
          break;
      }
    },
    //#endregion

    //#region dssun 回调函数
    // 1 提供给**窗口子组件**的回调函数
    // 请在窗口子组件的右上角三个按钮的事件函数中使用 $emit 调用该函数以调整窗口状态
    winStateChange(appname, e) {
      // appname 应用名称的唯一标识符
      // e 事件编码：0 关闭按钮被按下 1 最小化按钮被按下 2 最大化/还原按钮被按下 
      //            3 任务栏图标被按下 4 桌面图标或开始菜单被按下
      if (e === 0) {
        this.winHide[appname] = 'true';
        if(appname==='notepad') this.currentFile = {};
      } else if (e === 1) {
        this.winMax[appname] = 'false';
      } else if (e === 2) {
        if (this.winSize[appname] === 'normal') this.winSize[appname] = 'max';
        else this.winSize[appname] = 'normal';
      } else if (e === 3) {
        if (this.winMax[appname] === 'false') this.winMax[appname] = 'true';
        else this.winMax[appname] = 'false';
      } else {
        this.winHide[appname] = 'false';
      }
    },

    // 2 提供给**右键菜单**子组件的回调函数
    // 请在右键菜单子组件的切换大中小图标的事件函数中使用 $emit 调用该函数以调整桌面图标大小
    changeDeskIconSize(iconSize) {
      // iconSize 要切换成的图标尺寸：0 小图标 1 中图标 2 大图标
      if (iconSize === 0) this.displayMode = 'small';
      else if (iconSize === 1) this.displayMode = 'middle';
      else this.displayMode = 'big';
    },
    // 请在右键菜单子组件的切换图标排列方式的事件函数中使用 $emit 调用该函数以调整桌面图标排列方式
    changeDeskIconSort(sortMethod) {
      // sortMethod 要切换成的图标排序方式：0 按时间 1 按名称 2 按大小
      if (sortMethod === 0) this.sortMethod = 'date';
      else if (sortMethod === 1) this.displayMode = 'name';
      else this.displayMode = 'size';
    },
    // 请在右键菜单子组件的新建文件、文件夹的事件函数中使用 $emit 调用该函数
    newFile(fileType) {
      // fileType 新建的文件类型："folder" 文件夹 "txt" txt文件
      this.$refs['appList'].createNewItem(fileType);
    },

    // 3 提供给桌面图标列表的回调函数
    openTxtFile(filename) {
      this.currentFile = this.noteFiles[filename];
    },
    newTxtFile(filename) {
      this.noteFiles[filename] = {
        fileName: filename,
        content: "",
      }
    },

    // 4 提供给记事本的回调函数
    saveTxtFile(filename, filecontent) {
      this.noteFiles[filename].content = filecontent;
      this.$refs['appList'].alterTxtFileSize(filename, filecontent.length);
    },

    //#endregion

    //以下为dfHe开发的
    //是否出现状态栏
    showControls(isShow) {
      this.isShowControls = isShow;
    },
    //切换护眼模式
    toggleLightMode(isOpen) {
      this.isOpenLightmode = isOpen;
    },
    //获取亮度
    getLightnesss(Lightness) {
      this.Lightness = 1 - Lightness / 100;
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
.desktop::after {
  content: '';
  background: rgba(255, 0, 0, 0.15);
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  pointer-events: none;
  transition: 2s;
}

.desktop.night-light::after {
  opacity: 1;
}

.desktop-shade {
  --opacity: 0;
}
.desktop-shade::after {
  content: '';
  background: black;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  pointer-events: none;
  transition: 0.5s;
}

.desktop-shade::after {
  opacity: var(--opacity);
}
</style>
