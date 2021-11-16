<template>
  <div class="calendar-show calendar">
    <div class="datetoday-header">
      <span class="datespan">{{ currentDate.format('dddd, MMMM D') }}日</span>
    </div>
    <div class="datetoday-middle">
      <div class="datetoday-middle-span">
        <span style="width: auto; display: block; text-align: left">
          {{ this.date.format('MMMM') + ' ' + this.date.format('YYYY') }}</span
        >
      </div>
      <div class="datetoday-middle-btn" @click="addMonth()">
        <img class="imgContainer" :src="imgsurl.arrowup" alt="arrowup" />
      </div>
      <div class="datetoday-middle-btn" @click="subtractMonth()">
        <img class="imgContainer" :src="imgsurl.arrowdown" alt="arrowup" />
      </div>
    </div>
    <div class="datetoday-main">
      <div
        v-for="(day, index) in weekDays"
        :key="'day_' + index"
        class="weekDays"
      >
        {{ day }}
      </div>
      <div
        v-for="(day, index) in days"
        :key="'date_' + index"
        class="everyDays"
        :class="getClasses(day)"
      >
        {{ day.day }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Calendar',
  data() {
    return {
      weekDays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      currentDate: moment().locale('zh-cn'),
      date: moment().locale('zh-cn'),
      days: [],
      imgsurl: {
        arrowup: require('../../assets/img/taskbarIcons/triangleUp.png'),
        arrowdown: require('../../assets/img/taskbarIcons/triangleDown.png'),
      },
    };
  },
  methods: {
    getClasses(date) {
      return {
        Dayshoverclass: date.state === 0 && !date.today,
        Todayclass: date.today,
      };
    },
    addMonth() {
      this.date.add('1', 'months');
      this.updateTime();
    },
    subtractMonth() {
      this.date.subtract('1', 'months');
      this.updateTime();
    },
    updateTime() {
      const firstDay = this.date.startOf('month').day();
      const daysNumber = this.date.daysInMonth();
      let daysObject = {};

      for (let i = 0; i < 42; i++) {
        if (i < firstDay) {
          daysObject[i] = {
            day: this.date
              .clone()
              .subtract(firstDay - i, 'days')
              .format('D'),
            state: -1,
            today: false,
          };
        } else if (i < daysNumber + firstDay) {
          daysObject[i] = {
            day: i - firstDay + 1,
            state: 0,
            today:
              this.currentDate.date() === i - firstDay + 1 &&
              this.currentDate.month() === this.date.month(),
          };
        } else {
          daysObject[i] = {
            day: this.date
              .clone()
              .add(i - daysNumber - firstDay, 'days')
              .format('D'),
            state: 1,
            today: false,
          };
        }
      }

      this.days = daysObject;
    },
  },
  mounted() {
    this.updateTime();
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  position: absolute !important;
  right: 10px;
  bottom: -100px;
  width: 290px;
  height: 400px;
  transform: scale(0.9);
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 6px;
  transition-duration: 200ms;
  overflow: hidden;
  bottom: 50px;
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
  .datetoday-header {
    display: flex;
    align-items: center;
    background-color: (242, 242, 242);
    padding: 16px 24px;
    background-color: rgba(0, 0, 0, 0.05);
    .datespan {
      font-size: 14px;
      line-height: 20px;
      color: rgb(55, 65, 81);
      flex-grow: 1;
      width: auto;
      display: block;
      text-align: left;
    }
    .datebtn {
      background-color: rgba(156, 163, 175, 0.1);
      border-width: 1px;
      border: 1px solid rgba(156, 163, 175, 0.2);
      border-radius: 6px;
      padding: 6px;
    }
  }

  .datetoday-middle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 4px 24px 0 24px;
    .datetoday-middle-span {
      color: (55, 65, 81);
      font-size: 14px;
      line-height: 20px;
      flex-grow: 1;
    }
    .datetoday-middle-btn {
      &:hover {
        background-color: rgba(75, 85, 99, 0.1);
      }
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      transition-duration: 150ms;
      margin-right: 4px;
      .imgContainer {
        padding: 8px;
        width: 10px;
        height: 20px;
      }
    }
  }

  .datetoday-main {
    flex-grow: 1;
    display: grid;
    align-items: center;
    grid-template-rows: repeat(6, minmax(0, 1fr));
    grid-template-columns: repeat(7, minmax(0, 1fr));
    padding: 16px;
    gap: 8px;
    .weekDays {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      line-height: 20px;
      color: rgba(75, 85, 99);
    }
    .everyDays {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      line-height: 20px;
      border-radius: 999px;
      width: 32px;
      height: 32px;
      transition-duration: 150ms;
    }
  }
}
.Dayshoverclass {
  color: rgba(75, 85, 99);
  background-color: transparent;
  &:hover {
    background-color: rgba(75, 85, 99, 0.1);
  }
}
.Todayclass {
  background-color: rgb(96, 165, 250);
  color: white;
}
</style>