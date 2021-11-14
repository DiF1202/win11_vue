<!--
 * @Author: your name
 * @Date: 2021-11-13 12:03:20
 * @LastEditTime: 2021-11-14 09:34:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\components\HeDiFei\test.vue
-->
<template>
  <div class="taskBar">
    <div class="taskcont">
      <div class="tasksCont"></div>
      <div class="taskRight">
        <ul>
          <li></li>
        </ul>
        <div class="taskDate">
          <ul class="dateDiv">
            <li>{{ today.date }}</li>
            <li>{{ today.time }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task-bar',
  data() {
    return {
      today: {
        date: '',
        time: '',
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
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
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
        width: 55px;
        display: flex;
        padding: 3px 4px 4px 4px;
        font-size: 13px;
        flex-direction: column;
        margin-right: 15px;
        .dateDiv {
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
