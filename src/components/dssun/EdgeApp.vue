<template>
  <div
    class="edgeBrowser floatTab dpShadow"
    :win-size="winSize"
    :win-max="winMax"
    :win-hide="winHide"
  ></div>
</template>

<script>
export default {
  name: "edge-app",
  props: {
    winSize: String, // 窗口尺寸：normal 还原窗口 max 最大化窗口
    winMax: String, // 窗口是否最大化：false 否 true 是
    winHide: String, // 窗口是否隐藏：false 否 true 是
  },
};
</script>

<style  lang="scss" scoped>
@import "../../assets/scss/_window.scss";
.edgeBrowser {
  --bg0: #e7eaec;
  --bg1: #f7fafc;
  --ipbar: #fefefe;
  --shd: rgba(80, 80, 80, 0.2);
  background: var(--bg0);
}
</style>