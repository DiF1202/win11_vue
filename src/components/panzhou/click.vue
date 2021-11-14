<template>
  <div class="root" 
  @click.stop="fn" 
  v-if="this.$store.getters.getClick.vis" 
  :style="{left:this.$store.getters.getClick.clientX+'px',top:this.$store.getters.getClick.clientY+'px'}">

  </div>
</template>

<script>
export default {
  name: 'click',
  methods:{
    fn(){
      console.log(1);
    }
  }
};
</script>
<style lang="scss" scoped>
    .root {
      position: absolute;
      width: 4.8rem;
      height: 5.066667rem;
      border-radius: .133333rem;
      background-color: rgb(225,230,250);
      display: flex;
      flex-direction: column;
    }
</style>
