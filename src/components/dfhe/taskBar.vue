<!--
 * @Author: your name
 * @Date: 2021-11-13 12:03:20
 * @LastEditTime: 2021-11-14 14:45:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\components\HeDiFei\test.vue
-->
<template>
  <div class="taskBar">
    <div class="taskcont">
      <!-- 任务栏中间侧 -->
      <div class="tasksCont"></div>
      <!-- 任务栏右侧 -->
      <div class="taskRight">
        <ul>
          <li></li>
        </ul>
        <div class="taskDate">
          <ul class="dateDiv" @click="showdateBox">
            <li>{{ today.date }}</li>
            <li>{{ today.time }}</li>
          </ul>
        </div>
      </div>

      <!-- 时间日历弹框 -->
      <transition name="el-zoom-in-bottom">
        <div v-show="dateBoxShow" class="dateBox" @click.stop>
          <!-- <el-calendar></el-calendar> -->
          <calendar></calendar>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import calendar from './calendar.vue';
export default {
  name: 'task-bar',
  components: {
    calendar,
  },
  data() {
    return {
      dateBoxShow: true,
      timer: null,
      today: {
        date: '',
        time: '',
        dateBoxShow: false,
      },
    };
  },
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
  background-color: rgb(207, 225, 245);
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
      .taskDate {
        height: 100%;
        width: 60px;
        display: flex;
        padding: 3px 4px 4px 4px;
        font-size: 13px;
        flex-direction: column;
        margin-right: 15px;
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
    .dateBox {
      box-sizing: border-box;
      width: 300px;
      position: absolute;
      right: 12px;
      top: -430px;
      border-radius: 8px;
      overflow: hidden;
      ::v-deep(.el-calendar__header) {
        display: flex;
        flex-direction: column;
        // height: 50px;
      }
      ::v-deep(.el-calendar__title) {
        // padding: 12px 20px 0;
        font-size: 15px;
      }
      ::v-deep(.el-button-group) {
        padding-top: 10px;
        // display: flex;
        // justify-content: center;
        // align-items: center;
      }
      ::v-deep(.el-calendar__body) {
        padding: 12px 20px 5px;
        font-size: 10px;
        height: 290px;
      }
      ::v-deep(.el-calendar-table) {
        transition: none;
        .el-calendar-day {
          height: 52px;
          &:hover {
            background-color: rgb(201, 196, 201) !important;
          }
        }
        // td.is-selected {
        //   background-color: rgb(201, 196, 201) !important;
        // }
      }
    }
  }
}
</style>
