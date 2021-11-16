<template>
  <div
    class="vscode floatTab dpShadow"
    :win-size="winSize"
    :win-max="winMax"
    :win-hide="winHide"
  >
  <!-- 标题栏 -->
    <div class="toolbar">
      <!-- 标题信息 -->
      <div class="topInfo">
        <div class="icon" hidden>
          <img src="../../assets/img/appIcons/vscode.png" alt="" />
        </div>
        <div class="appFullName">Visual Studio Code</div>
      </div>
      <!-- 窗口按钮 -->
      <div class="actbtns">
        <div class="minbtn" @click="clickMinBtn">
          <img
            width="8"
            src="../../assets/img/appIcons/minimize_light.png"
            alt=""
          />
        </div>
        <div class="maxbtn" @click="clickMaxBtn">
          <img
            width="8"
            src="../../assets/img/appIcons/maximize_light.png"
            alt=""
          />
        </div>
        <div class="closebtn" @click="clickCloseBtn">
          <img
            width="8"
            src="../../assets/img/appIcons/close_light.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- Frame -->
    <div class="vscodeScreen">
      <iframe :src="frameURL" class="vscodeFrame" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "vscode-app",
  props: {
    winSize: String, // 窗口尺寸：normal 还原窗口 max 最大化窗口
    winMax: String, // 窗口是否最大化：false 否 true 是
    winHide: String, // 窗口是否隐藏：false 否 true 是
  },
  data() {
    return {
      frameURL: "",
    };
  },
  watch: {
    // 监视浏览器首次打开，在首次打开时再加载页面
    winHide(nvalue) {
      if (nvalue === "false" && this.frameURL === "")
        this.frameURL = "https://github1s.com/DiF1202/win11_vue/";
    },
  },
  methods: {
    // 按钮点击事件
    clickMinBtn() {
      this.$emit("winStateChange", "vscode", 1);
    },
    clickMaxBtn() {
      this.$emit("winStateChange", "vscode", 2);
    },
    clickCloseBtn() {
      this.$emit("winStateChange", "vscode", 0);
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "../../assets/scss/_window.scss";

.toolbar {
  background: rgb(28, 28, 28);
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
  color: #fefefe;
  font-size: 12px;
}

.vscodeScreen {
  background-color: rgb(28, 28, 28);
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  scroll-behavior: smooth;
  overflow: hidden;
}

.vscodeFrame {
  width: 100%;
  height: 100%;
}
</style>
