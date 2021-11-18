<template>
  <div class="root" @click.stop="" v-if="this.$store.getters.getClick.iconVis"
    :style="{left:this.$store.getters.getClick.clientX+'px',top:this.$store.getters.getClick.clientY+'px'}">
    <div class="main">
      <div class="view" @click="iconEmit(0)">打开(O)</div>
      <div class="sort">打开文件夹所在位置(l)</div>
      <div class="refresh"><i></i>以管理员身份运行(A)</div>
      <div class="git">剪切(T)</div>
      <div class="new">复制(C)</div>
      <div class="changeBg">删除(D)</div>
      <div class="setting">重命名(M)</div>
      <div class="personal">属性(R)</div>
    </div>
    <div class="br1"></div>
    <div class="br2"></div>
    <div class="br3"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    // 通过给父组件传值确定操作信息
    iconEmit(idx) {
      this.$emit('iconMenu',idx)
      this.$store.commit('Click',{iconVis:false});
    }
  },
  created(){

  }
};
</script>
<style lang="scss" scoped>
    .root {
      position: absolute;
      width: 3.8rem;
      height: 4.7rem;
      border-radius: .133333rem;
      background-color: rgb(239,250,250);
      padding: .026667rem;

      .main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        font-size: 13px;

        div:nth-child(n) {
          width: 98%;
          height: .5rem;
          line-height: .5rem;
          border-radius: .066667rem;
          text-indent: .533333rem;
          position: relative;

          i {
            position: absolute;
            left: 0.1rem;
            top: 0.115rem;
            width: .266667rem;
            height: .266667rem;
            background-size: 100% 100%;
          }
        }

        div:nth-child(n):hover {
          background-color: rgb(207, 215, 230);
        }

        .refresh i {
          background: url('../../assets/img/menuIcons/shield.png') 0 0;
        }
      }

      .br1,
      .br2,
      .br3 {
        position: absolute;
        background-color: rgb(219, 216, 216);
        left: 0rem;
        width: 99%;
        height: .026667rem;
      }

      .br1 {
        top: 1.2rem;
      }

      .br2 {
        top: 1.77rem;
      }

      .br3 {
        top: 3.53rem;
      }
    }
</style>