<!--
 * @Author: your name
 * @Date: 2021-11-15 10:12:50
 * @LastEditTime: 2021-11-15 10:24:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\views\open.vue
-->
<template>
  
    <login   v-if="clock" class="a"></login>
 
  <bootscreen  v-else></bootscreen>
</template>

<script>
import Bootscreen from '../components/yuzhang/Bootscreen.vue';
import Login from '../components/yuzhang/Login.vue';
export default {
  name: 'open',
  data() {
    return {
      clock: false,
    };
  },
  components: {
    Login,
    Bootscreen,
  },
  mounted: function () {
    console.log('sss');
    setTimeout(() => {
      this.clock = true;
    }, 5000);
  },
};
</script>

<style scoped>

</style>