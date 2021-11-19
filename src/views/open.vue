<!--
 * @Author: your name
 * @Date: 2021-11-15 10:12:50
 * @LastEditTime: 2021-11-15 10:24:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\views\open.vue
-->
<template>
  <div >
    <bootscreen v-show="!clock"></bootscreen>
   
      <transition name="el-fade-in-linear">
        <secpage
          v-show="clock && !showout"
          class="transition-box"
          @click="clickshow"
        ></secpage>
      </transition>
      <transition name="el-fade-in-linear">
        <login v-show="showout" class="transition-box"></login>
      </transition>
    </div>

</template>

<script>
import Bootscreen from "../components/yuzhang/Bootscreen.vue";
import Login from "../components/yuzhang/Login.vue";
import Secpage from "../components/yuzhang/Secpage.vue";
import preLoad from '../utils/preLoad'

export default {
  name: "open",
  data() {
    return {
      clock: false,
      showout: false,
    };
  },
  components: {
    Login,
    Bootscreen,
    Secpage,
  },
  methods: {
    clickshow() {
      this.showout = true;
    },
  },
  mounted: function () {
    // 图片预加载完成后 2 s执行本地加载
    preLoad().then(res=>{
      setTimeout(()=>{
        this.clock = true;
      },2000)
    })
    
  },
};
</script>

<style scoped>

</style>