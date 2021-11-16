<!--
 * @Author: your name
 * @Date: 2021-11-13 12:03:20
 * @LastEditTime: 2021-11-15 23:05:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\components\HeDiFei\test.vue
-->
<template>
  <div class="taskBar">
    <div class="taskcont">
      <div class="tasksCont"></div>
      <div class="taskRight">
        <ul class="taskiconul" @click="iSshowControlsCenter">
          <li class="taskiconli">
            <img :src="imgUrl.arrowupImg" alt="arrowup" />
          </li>
          <li class="taskiconli">
            <img :src="imgUrl.wifiImg" alt="wifi" />
          </li>
          <li class="taskiconli">
            <img :src="imgUrl.audio3Img" alt="audio" />
          </li>
          <li class="taskiconli">
            <img :src="imgUrl.batteryImg" alt="battery" />
          </li>
        </ul>
        <div class="taskDate">
          <ul class="dateDiv" @click="showdateBox">
            <li>{{ today.date }}</li>
            <li>{{ today.time }}</li>
          </ul>
        </div>
      </div>
      <transition name="el-fade-in">
        <div v-show="dateBoxShow">
          <calendar></calendar>
        </div>
      </transition>
      <!-- <transition name="el-fade-in">
        <div v-show="controlCenterShow">
          <ControlCenter></ControlCenter>
        </div>
      </transition> -->
    </div>
  </div>
</template>

<script>
import calendar from './BestCalendar.vue';
// import ControlCenter from './ControlCenter.vue';
export default {
  name: 'task-bar',
  components: { calendar },
  data() {
    return {
      dateBoxShow: false,
      controlCenterShow: false,
      timer: null,
      today: {
        date: '',
        time: '',
        dateBoxShow: false,
      },
      imgUrl: {
        wifiImg: require('../../assets/img/taskbarIcons/wifi.png'),
        batteryImg: require('../../assets/img/taskbarIcons/battery.png'),
        audio3Img: require('../../assets/img/taskbarIcons/audio3.png'),
        arrowupImg: require('../../assets/img/taskbarIcons/arrowup.png'),
      },
    };
  },
  emits:['showControls'],
  methods: {
    updateTime() {
      this.today = {
        date: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        }),
        time: new Date().toLocaleDateString('en-US', {
          year: '2-digit',
          month: '2-digit',
          day: 'numeric',
        }),
      };
    },
    showdateBox() {
      this.dateBoxShow = !this.dateBoxShow;
    },
    iSshowControlsCenter() {
      this.controlCenterShow = !this.controlCenterShow;
      this.$emit('showControls',this.controlCenterShow);
    },
  },
  created() {
    this.updateTime();
    this.timer = setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.taskBar {
  height: 39px;
  width: 100%;
  background-color: rgba(243, 243, 243, 0.83);
  backdrop-filter: blur(16px);
  display: flex;
  align-self: flex-end;
  .taskcont {
    position: relative;
    width: 100%;
    height: 100%;
    .tasksCont {
      display: block;
    }
    .taskRight {
      position: absolute;
      top: 0;
      right: 0;
      width: auto;
      height: 100%;
      margin-left: 10px;
      display: flex;
      .taskiconul {
        &:hover {
          background-color: rgb(209, 213, 219);
        }
        padding: 10px 3px 10px 3px;
        cursor: pointer;
        display: flex;
        font-size: 14px;
        .taskiconli {
          width: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 17px;
            height: 16px;
          }
        }
      }
      .taskDate {
        height: 100%;
        width: 60px;
        display: flex;
        padding: 3px 4px 4px 4px;
        font-size: 13px;
        flex-direction: column;
        margin-right: 10px;
        .dateDiv {
          &:hover {
            background-color: rgb(209, 213, 219);
          }
          cursor: pointer;
          width: 100%;
          height: 100%;
          padding: 3px 3px 3px 3px;
          text-align: center;
          font-weight: 400;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
