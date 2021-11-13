<!--
 * @Author: your name
 * @Date: 2021-11-13 14:06:23
 * @LastEditTime: 2021-11-13 18:31:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\views\desktop.vue
-->
<template>
  <div class="desktop">
    <div class="main"></div>
    <taskBar></taskBar>
  </div>
</template>

<script>
import taskBar from '../components/dfhe/taskBar.vue';
export default {
  name: 'desktop',
  components: {
    taskBar,
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
  .main {
    flex: 1;
    // background-color: green;
  }
}
</style>
