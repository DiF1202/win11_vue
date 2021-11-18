<template>
  <div
    class="store floatTab dpShadow"
    :style="zIndex"
    :win-size="winSize"
    :win-max="winMax"
    :win-hide="winHide"
  >
    <!--标题栏-->
    <div class="toolbar">
      <div class="icon" hidden>
        <img width="14" src="../../assets/img/appIcons/store.png" />
      </div>
      <div class="topfont">Store</div>
      <span></span>
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
    <div class="ss">
      <el-carousel
        height="100%"
        direction="vertical"
        :autoplay="false"
        trigger="click"
      >
        <el-carousel-item v-for="item in img" :key="item">
          <img class="imgsize" :src="(item.name)" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreApp",
  data() {
    return{
      img:[
        {id:1,name:require('../../assets/img/store/a.png')},
        {id:2,name:require('../../assets/img/store/b.png')},
        {id:3,name:require('../../assets/img/store/c.png')},
        {id:4,name:require('../../assets/img/store/c.png')},
        {id:5,name:require('../../assets/img/store/d.png')}

      ]
    }

  },
  props: {
    winSize: String, // 窗口尺寸：normal 还原窗口 max 最大化窗口
    winMax: String, // 窗口是否最大化：false 否 true 是
    winHide: String, // 窗口是否隐藏：false 否 true 是
    zIndex: Object,
  },
  methods: {
    // 按钮点击事件
    clickMinBtn() {
      this.$emit("winStateChange", "store", 1);
    },
    clickMaxBtn() {
      this.$emit("winStateChange", "store", 2);
    },
    clickCloseBtn() {
      this.$emit("winStateChange", "store", 0);
    },
    clickLeft() {
      if (this.historyUrl.length) {
        this.goTo(this.historyUrl.pop(), true);
      }
    },
  },
};
</script>


<style  lang="scss" scoped>
@import "../../assets/scss/_window.scss";
.store {
  background-color: rgb(248, 248, 248);
}
.toolbar {
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.icon {
  margin: 0 10px 0 6px;
  position: relative;
  display: grid;
  place-items: center;
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
  padding: 0 18px;
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
.topfont {
  font-size: 12px;
  position: absolute;
  left: 30px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgb(248, 248, 248);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgb(248, 248, 248);
}
.ss {
  height: 100%;
}
.ss ::v-deep .el-carousel__indicators--vertical {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  left: 0px;
  top: 50%;
  width: 40px;
  height: 100%;
  background-color: rgb(248, 248, 248);
  border-right: solid #9999992e 1px;
  justify-content: flex-start;
}

::v-deep .el-carousel__indicator:nth-child(1) button {
  position: relative;
  height: 18px;
  width: 18px;
  left: 0px;
  background-image: url("../../assets/img/store/home.png");
  background-size: cover;
    margin-bottom: 20px;
}

::v-deep .el-carousel__indicator:nth-child(2) button {
  position: relative;
  height: 18px;
  width: 18px;
  left: 0px;
  background-image: url("../../assets/img/store/windows.png");
  background-size: cover;
    margin-bottom: 20px;
}
::v-deep .el-carousel__indicator:nth-child(3) button {
  position: relative;
  height: 18px;
  width: 18px;
  left: 0px;
  background-image: url("../../assets/img/store/game.png");
  background-size: cover;
    margin-bottom: 20px;
}
::v-deep .el-carousel__indicator:nth-child(4) button {
  position: relative;
  height: 18px;
  width: 18px;
  left: 0px;
  background-image: url("../../assets/img/store/movie.png");
  background-size: cover;
    margin-bottom: 20px;
}
::v-deep .el-carousel__indicator:nth-child(5) button {
  position: relative;
  height: 18px;
  width: 18px;
  left: 0px;
  background-image: url("../../assets/img/store/download.png");
  background-size: cover;
    margin-bottom: 20px;
}

::v-deep .el-carousel__indicator.is-active{
  border-left:solid #0a72fa 5px;
}
::v-deep .el-carousel {
  height: 100%;
}
::v-deep .el-carousel__button {
  background-color: #f1f1f200;
}
.imgsize{
  width: 99%;
  height: 99%;
  padding:10px 0px 10px 40px;
  border-radius: 100px;
}
</style>
