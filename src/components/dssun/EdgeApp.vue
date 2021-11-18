<template>
  <div
    class="edgeBrowser floatTab dpShadow"
    :style="zIndex"
    :win-size="winSize"
    :win-max="winMax"
    :win-hide="winHide"
  >
    <!-- 标题栏 -->
    <div class="toolbar">
      <!-- 图标与标题 -->
      <div class="topInfo">
        <div class="icon" hidden>
          <img src="../../assets/img/appIcons/edge.png" alt="" />
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
    <div class="edgeScreen">
      <!-- 标签栏 -->
      <div class="overTool">
        <!-- 浏览器图标 -->
        <div class="icon">
          <img src="../../assets/img/appIcons/edge.png" alt="" />
        </div>
        <!-- 页面标签 -->
        <div class="pageTab">
          <div>{{ pageTitle }}</div>
          <div class="svg">
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
              style="width: 10px; height: 10px"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 浏览器主屏 -->
      <div class="restWindow">
        <!-- 工具栏 -->
        <div class="addressBar">
          <!-- 后退按钮 -->
          <div class="edgenavicon" @click="clickLeft">
            <img src="../../assets/img/appIcons/left.png" alt="" />
          </div>
          <!-- 前进按钮 -->
          <div class="edgenavicon">
            <img src="../../assets/img/appIcons/right.png" alt="" />
          </div>
          <!-- 刷新按钮 -->
          <div class="edgenavicon">
            <img src="../../assets/img/appIcons/refresh.png" alt="" />
          </div>
          <!-- 主页按钮 -->
          <div class="edgenavicon" @click="clickHome">
            <img height="16" src="../../assets/img/appIcons/index.png" alt="" />
          </div>
          <!-- 地址栏 -->
          <div class="addCont">
            <input
              type="text"
              :value="frameURL"
              @keyup.enter="submitInput"
              id="urlin"
            />
            <div class="enter" @click="clickEnterBtn">
              <img src="../../assets/img/appIcons/enter.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 收藏栏 -->
        <div class="bookbar">
          <div
            v-for="(book, index) in books"
            :key="index"
            class="bookhander"
            @click="clickBook"
            :id="'book' + index"
          >
            <div class="bookicon">
              <img :src="bookIconUrl(book.tittle, book.Url)" alt="" />
            </div>
            <div class="text-xs">{{ book.tittle }}</div>
          </div>
        </div>
        <!-- 页面内容 -->
        <div class="siteFrame">
          <iframe
            :src="frameURL"
            class="frame"
            frameborder="0"
            id="isite"
          ></iframe>
        </div>
      </div>
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
    zIndex: Object,
  },
  data() {
    return {
      frameURL: "", // 页面URL
      pageTitle: "新标签页", // 页面标题
      historyUrl: [], // URL历史
      books: [
        {
          tittle: "必应",
          Url: "https://cn.bing.com/",
        },
        {
          tittle: "哔哩哔哩",
          Url: "https://www.bilibili.com/",
        },
        {
          tittle: "淘宝网",
          Url: "https://www.taobao.com/",
        },
        {
          tittle: "力扣",
          Url: "https://leetcode-cn.com/",
        },
        {
          tittle: "掘金",
          Url: "https://juejin.cn/",
        },
        {
          tittle: "Vue.js",
          Url: "https://vuejs.org/",
        },
        {
          tittle: "React",
          Url: "https://react.docschina.org/",
        },
        {
          tittle: "Win11 in Vue",
          Url: "/",
        },
      ],
    };
  },
  watch: {
    // 监视浏览器首次打开，在首次打开时再加载页面
    winHide(nvalue) {
      if (nvalue === "false" && this.frameURL === "") this.goHome();
    },
  },
  methods: {
    // 按钮点击事件
    clickMinBtn() {
      this.$emit("winStateChange", "edge", 1);
    },
    clickMaxBtn() {
      this.$emit("winStateChange", "edge", 2);
    },
    clickCloseBtn() {
      this.$emit("winStateChange", "edge", 0);
    },
    clickLeft() {
      if (this.historyUrl.length) {
        this.goTo(this.historyUrl.pop(), true);
      }
    },
    clickHome() {
      this.goHome();
      this.historyUrl.push("https://cn.bing.com/");
    },
    clickEnterBtn() {
      console.log("hhh");
      let url = document.getElementById("urlin").value;
      this.goTo(url);
    },
    // 收藏标签点击事件
    clickBook(e) {
      let tar = e.target;
      let i = 0;
      while (!tar.id && i < 5) {
        tar = tar.parentNode;
        ++i;
      }
      if (i >= 5) return;
      let book = this.books[parseInt(tar.id.split("k")[1])];
      this.goTo(book.Url);
      this.pageTitle = book.tittle;
    },
    // 地址栏键盘监听
    submitInput() {
      let url = document.getElementById("urlin").value;
      this.goTo(url);
    },
    // 跳转函数
    goTo(url, mark) {
      this.frameURL = url;
      if (!mark) this.historyUrl.push(url);
    },
    goHome() {
      this.frameURL = "https://cn.bing.com/";
      this.pageTitle = "必应";
    },
    // 图标URL生成
    bookIconUrl(title, url) {
      if (title === "Vue.js") return "favicon.ico";
      return url + "favicon.ico";
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
