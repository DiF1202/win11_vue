<template>
  <div
    class="edgeBrowser floatTab dpShadow"
    :win-size="winSize"
    :win-max="winMax"
    :win-hide="winHide"
  >
 <div class="toolbar">
      <!-- 图标与标题 -->
      <div class="topInfo">
        <div class="icon" hidden>
          <img src="../../assets/img/appIcons/pdf.png" alt="" />
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
    
    <!-- 浏览器内容 -->
  <div style="height:100%;">
        <embed width="100%" height="100%"  src="http://101.200.127.178/kiss.pdf">
    </div>
  </div>
</template>

<script>
export default {
  name: "edge-app",
  props: {
    winSize: String, // 窗口尺寸：normal 还原窗口 max 最大化窗口
    winMax: String, // 窗口是否最大化：false 否 true 是
    winHide: String, // 窗口是否隐藏：false 否 true 是
  },
  
  methods: {
    // 按钮点击事件
    clickMinBtn() {
      this.$emit("winStateChange", "pdf", 1);
    },
    clickMaxBtn() {
      this.$emit("winStateChange", "pdf", 2);
    },
    clickCloseBtn() {
      this.$emit("winStateChange", "pdf", 0);
    },

  },
};
</script>

<style  lang="scss" scoped>
@import "../../assets/scss/_window.scss";

.edgeBrowser {
  background: #e7eaec;
}

.toolbar {
  display: flex;
  width: 100%;
  height: 26px;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.topIfo {
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
  background-color: rgba(212, 214, 216, 1);
}
.closebtn:hover {
  background-color: rgb(255, 65, 65);
}

.edgeScreen {
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
}

.overTool {
  position: absolute;
  top: 0;
  width: auto;
  height: 26px;
  display: flex;
}

.pageTab {
  width: 176px;
  height: 26px;
  margin: 0 4px;
  background: #f7fafc;
  border-radius: 4px 4px 0 0;
  box-shadow: 2px 0 2px rgba(80, 80, 80, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  font-size: 12px;
  font-weight: normal;
}
.svg {
  color: black;
  position: relative;
  display: grid;
  place-items: center;
}

.restWindow {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  flex-grow: 1;
  scroll-behavior: smooth;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
}

.addressBar {
  background: #f7fafc;
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
}

.edgenavicon {
  margin-left: 2px;
  position: relative;
  display: grid;
  place-items: center;
  cursor: pointer;
}
.edgenavicon img {
  -webkit-transform-origin: center;
  transform-origin: center;
  transition: 0.4s ease-in-out;
  margin: 0px 8px;
  pointer-events: none;
  width: 14px;
}

.addCont {
  width: 85%;
  position: relative;
  align-items: center;
  display: flex;
}
.addCont input {
  box-sizing: border-box;
  background: #fefefe;
  border-radius: 4px;
  border: 1px solid rgb(211, 211, 211);
  width: 100%;
  margin-left: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
  padding-bottom: 4px;
  font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue";
  outline: none;
}

.enter {
  margin-left: 5px;
  position: relative;
  display: grid;
  place-items: center;
  cursor: pointer;
}
.enter img {
  -webkit-transform-origin: center;
  transform-origin: center;
  margin: 0px 8px;
  pointer-events: none;
  width: 20px;
}

.bookbar {
  background: #f7fafc;
  width: 100%;
  padding-bottom: 5px;
  display: flex;
}
.bookhander {
  margin-left: 4px;
  margin-right: 2px;
  align-items: center;
  display: flex;
  cursor: pointer;
}
.bookicon {
  margin: 0 3px 0 8px;
  position: relative;
  display: grid;
  place-items: center;
}
.bookicon img {
  width: 14px;
}
.text-xs {
  font-size: 12px;
  font-weight: normal;
  pointer-events: none;
}

.siteFrame {
  overflow: hidden;
  flex-grow: 1;
}
.frame {
  width: 100%;
  height: 100%;
}
</style>
