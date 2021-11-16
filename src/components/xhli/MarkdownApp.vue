<template>
  <div  
    class="markdown floatTab dpShadow"
    :win-size="winSize"
    :win-max="winMax"
    :win-hide="winHide"
  >
    <!-- 标题栏 -->
    <div class="markdown-toolbar">
      <!-- 图标与标题 -->
      <div class="markdown-toolbar-icon">
        <img src="../../assets/img/appIcons/markdown_icon.png" alt="" />
        <div>markdown</div>
      </div>
      <!-- 窗口按钮 -->
      <div class="markdown-toolbar-actbtn">
        <div @click="clickMinBtn">
          <img width="8" src="../../assets/img/appIcons/minimize.png"/>
        </div>
        <div @click="clickMaxBtn">
          <img width="8" src="../../assets/img/appIcons/maximize.png"/>
        </div>
        <div @click="clickCloseBtn">
          <img width="8" src="../../assets/img/appIcons/close.png"/>
        </div>

      </div>
    </div>
    <!-- 菜单栏 -->
    <div class="markdown-menu">
      <div>文件(<span>F</span>)</div>
      <div>编辑(<span>E</span>)</div>
      <div>段落(<span>P</span>)</div>
      <div>视图(<span>V</span>)</div>
      <div>主题(<span>T</span>)</div>
      <div>帮助(<span>H</span>)</div>
    </div>
    <!-- markdown工作区 -->
    <div class="markdown-main">
      <md-editor 
        class="markdown-editor"
        v-model="text" 
        :toolbarsExclude="toolbarsExclude"
        />
    </div>
    
    
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

export default {
  name: 'MarkdownApp',
  props: {
    winSize: String, // 窗口尺寸：normal 还原窗口 max 最大化窗口
    winMax: String, // 窗口是否最大化：false 否 true 是
    winHide: String, // 窗口是否隐藏：false 否 true 是
  },
  components: {
    MdEditor
  },
  data() {
    return { 
      text: '',
      toobars: ['bold', 'underline', 'italic', 'strikeThrough',
      'sub','sup','quote','unorderedList', 'orderedList', 'codeRow',
      'code', 'link', 'image', 'table', 'revoke',
      'next', 'save', 'pageFullscreen', 'fullscreen',
      'preview', 'htmlPreview'],
      toolbarsExclude: ['github'] 
      };
  },
  methods: {
    // 标题栏按钮点击事件
    clickMinBtn() {
      this.$emit("winStateChange", "markdown", 1);
    },
    clickMaxBtn() {
      this.$emit("winStateChange", "markdown", 2)
    },
    clickCloseBtn() {
      this.$emit("winStateChange", "markdown", 0)
    },

    // markdown 处理
    // handleChange(v) {
    //   value = v;
    // },
    
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_window.scss";

.markdown {
  --bg0: #e7eaec;
  background: var(--bg0);
}

.markdown-toolbar {
  position: relative;
  width: 100%;
  height: 26px;
  display: flex;
}

.markdown-toolbar-icon {
  // background-color: red;
  top: 2px;
  left: 3px;
  height: 100%;
  display: flex;
  margin: 2px 0 0 3px;
  align-items: center;
  column-gap: 5px;
}

.markdown-toolbar-icon div {
  color: #000;
  font-size: 12px;
}

.markdown-toolbar-actbtn {
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
}

.markdown-toolbar-actbtn div {
  transition: all 60ms ease-out;
  height: 100%;
  padding: 0 14px;
  display: grid;
  place-items: center;
}

.markdown-toolbar-actbtn div:nth-child(1):hover,
.markdown-toolbar-actbtn div:nth-child(2):hover {
  background-color: rgba(212, 214, 216, 1);
}

.markdown-toolbar-actbtn div:nth-child(3):hover {
  background-color: rgb(255,65,65);
}

.markdown-menu {
  width: 100%;
  height: 26px;
  display: flex;
  column-gap: 7px;
  font-size: 12px;
  // background-color: red;
  align-items: center;
  margin: 0 5px;
}

.markdown-menu div:hover {
  background-color: rgba(212, 214, 216, 1);
}

.markdown-menu div span {
  text-decoration: underline;
}

.markdown-main {
  color: #000;
  font-size: 12px;
  height: calc(100% - 26px - 26px);
}
.markdown-editor {
  height: 100%;
}

</style>
