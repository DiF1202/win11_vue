<template>
  <div
    class="notepad floatTab dpShadow"
    :win-size="winSize"
    :win-max="winMax"
    :win-hide="winHide"
    @click="closeFileMenu"
  >
    <!-- 标题栏 -->
    <div class="toolbar">
      <!-- 标题信息 -->
      <div class="topInfo">
        <div class="icon" hidden>
          <img src="../../assets/img/appIcons/notepad.png" alt="" />
        </div>
        <div class="appFullName">
          {{ isContentChanged ? "*" : " " }} {{ currentFile ? currentFile.fileName : "无标题" }} - 记事本
        </div>
      </div>
      <!-- 窗口按钮 -->
      <div class="actbtns">
        <div class="minbtn" @click="clickMinBtn">
          <img width="8" src="../../assets/img/appIcons/minimize.png" alt="" />
        </div>
        <div class="maxbtn" @click="clickMaxBtn">
          <img width="8" src="../../assets/img/appIcons/maximize.png" alt="" />
        </div>
        <div class="closebtn" @click="clickCloseBtn">
          <img width="8" src="../../assets/img/appIcons/close.png" alt="" />
        </div>
      </div>
    </div>
    <!-- Notepad主内容 -->
    <div class="notepadMain">
      <div class="menuBar">
        <div class="menuItem" @click.stop="ifFileMenuShow = !ifFileMenuShow">
          文件(F)
        </div>
        <div class="menuItem">编辑(E)</div>
        <div class="menuItem">格式(O)</div>
        <div class="menuItem">查看(V)</div>
        <div class="menuItem">帮助(H)</div>
      </div>
      <div class="fileMenu" v-show="ifFileMenuShow">
        <div class="fileMenuItem">新建(N)</div>
        <div class="fileMenuItem">新窗口(W)</div>
        <div class="fileMenuItem">打开(O)...</div>
        <div class="fileMenuItem" @click="saveBtnClick">保存(S)</div>
        <div class="fileMenuItem">另存为(A)...</div>
        <div class="newGroup"></div>
        <div class="fileMenuItem">页面设置(U)...</div>
        <div class="fileMenuItem">打印(P)...</div>
        <div class="newGroup"></div>
        <div class="fileMenuItem" @click="clickCloseBtn">退出(X)</div>
      </div>
      <textarea
        name=""
        id=""
        v-model="content"
        @input="contentChange"
      ></textarea>
      <div class="stateBar">
        <div class="stateItem" style="width: 80px">UTF-8</div>
        <div class="stateItem">Windows(CRLF)</div>
        <div class="stateItem">100%</div>
        <div class="stateItem" style="width: 100px">
          共{{ content.length }}个字符
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notepad-app",
  props: {
    winSize: String, // 窗口尺寸：normal 还原窗口 max 最大化窗口
    winMax: String, // 窗口是否最大化：false 否 true 是
    winHide: String, // 窗口是否隐藏：false 否 true 是
    noteCurContent: String, // 文本内容
    currentFile: Object, // 文件
  },
  data() {
    return {
      isContentChanged: false,
      ifFileMenuShow: false,
      content: "",
    };
  },
  watch: {
    currentFile(nvar) {
      if (nvar.content) {
        this.content = nvar.content;
      } else {
        this.content = "";
      }
    },
  },
  methods: {
    // 按钮点击事件
    clickMinBtn() {
      this.$emit("winStateChange", "notepad", 1);
    },
    clickMaxBtn() {
      this.$emit("winStateChange", "notepad", 2);
    },
    clickCloseBtn() {
      this.$emit("winStateChange", "notepad", 0);
    },
    saveBtnClick() {
      if(this.isContentChanged) {
        this.$emit("saveTxtFile", this.currentFile.fileName, this.content);
        this.isContentChanged = false;
      }
    },
    // 点击其他区域关闭菜单
    closeFileMenu() {
      if (this.ifFileMenuShow === true) this.ifFileMenuShow = false;
    },
    contentChange() {
      this.isContentChanged = true;
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "../../assets/scss/_window.scss";

.toolbar {
  background: white;
  display: flex;
  width: 100%;
  height: 26px;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.actbtns {
  height: 100%;
  align-items: center;
  display: flex;
}
.actbtns .minbtn,
.actbtns .maxbtn,
.actbtns .closebtn {
  transition: all 60ms ease-in-out;
  height: 100%;
  padding: 0 14px;
  position: relative;
  display: grid;
  place-items: center;
}
.minbtn:hover,
.maxbtn:hover {
  background-color: rgb(80, 80, 80);
}
.closebtn:hover {
  background-color: rgb(255, 65, 65);
}

.topInfo {
  flex-grow: 1;
  align-items: center;
  display: flex;
}

.icon {
  margin: 0 10px 0 6px;
  position: relative;
  display: grid;
  place-items: center;
}
.icon img {
  -webkit-transform-origin: center;
  transform-origin: center;
  transition: 0.4s ease-in-out;
  width: 14px;
}

.appFullName {
  color: black;
  font-size: 12px;
}

.notepadMain {
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.menuBar,
.stateBar {
  display: flex;
  height: 22px;
}
.menuBar {
  flex-direction: row;
  border-top: rgb(230, 230, 230) solid 1px;
  background-color: white;
}
.stateBar {
  flex-direction: row-reverse;
  background-color: rgb(241, 241, 241);
}

.menuItem,
.stateItem {
  font-size: 12px;
  line-height: 22px;
  display: inline-block;
  height: 100%;
}
.menuItem {
  width: 60px;
  box-sizing: border-box;
  border: white solid 1px;
  text-align: center;
  transform: all 0.1s;
}
.menuItem:hover {
  border: rgb(204, 232, 255) solid 1px;
  background-color: rgb(229, 243, 255);
}
.stateItem {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  border-left: rgb(221, 221, 221) solid 1px;
}

.fileMenu {
  position: absolute;
  top: 49px;
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 240, 240);
  border: rgb(211, 211, 211) solid 1px;
  box-shadow: 1px 1px 2px gray;
  width: 150px;
  font-size: 12px;
}
.fileMenuItem {
  padding: 5px 0px 5px 30px;
}
.fileMenuItem:hover {
  background-color: rgb(144, 200, 246);
}

.newGroup {
  padding: 3px 0px 3px 25px;
  height: 1px;
  background-color: rgb(190, 190, 190);
  background-clip: content-box;
}

textarea {
  padding: 5px;
  resize: none;
  border: rgb(230, 230, 230) solid 1px;
  overflow-x: hidden;
  overflow-y: scroll;
  font-size: 18px;
  line-height: 120%;
  flex-grow: 1;
}
</style>
