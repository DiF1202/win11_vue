<!--
 * @Author: your name
 * @Date: 2021-11-13 14:06:23
 * @LastEditTime: 2021-11-13 16:18:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\views\desktop.vue
-->
<template>
  <div class="desktop">
    <div class="main"></div>
    <div class="taskBar"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.desktop {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url('../assets/img/wallpapers/light.jpg');
  background-position: center;
  background-size: cover;
  overflow: hidden;
  .main {
    flex: 1;
    // background-color: green;
  }
  .taskBar {
    height: 40px;
    width: 100%;
    background-color: red;
    display: flex;
    align-self: flex-end;
  }
}
</style>
