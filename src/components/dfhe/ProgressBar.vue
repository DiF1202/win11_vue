<template>
  <div class="progress-bar" @click="onClick">
    <div class="bar-inner">
      <div class="progress" ref="progress" :style="progressStyle"></div>
      <div
        class="progress-btn-wrapper"
        :style="btnStyle"
        @mousedown="onMousedown"
        @mousemove="onMousemove"
        @mouseup="onMouseup"
      >
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
const progressBtnWidth = 16;
export default {
  name: 'progress-bar',
  emits: ['progress-changing', 'progress-changed'],
  data() {
    return {
      progress: 0,
      offset: 0,
    };
  },
  computed: {
    progressStyle() {
      return `width:${this.offset}px`;
    },
    btnStyle() {
      return `transform:translate3d(${this.offset}px,0,0)`;
    },
  },
  watch: {
    offset(newoffset) {
      console.log(newoffset);
    },
  },
  created() {
    this.touch = {};
  },
  methods: {
    onMousedown(e) {
      //获取一开始横坐标的位置
      this.touch.x1 = e.pageX;
      //拿到进度条的初始宽度
      this.touch.beginWidth = this.$refs.progress.clientWidth;
    },
    onMousemove(e) {
      //拿到偏移量
      const delta = e.pageX - this.touch.x1;
      //位移过后 进度条的宽度
      const tempWidth = this.touch.beginWidth + delta;
      //整个进度条的宽度
      const barWidth = this.$el.clientWidth - progressBtnWidth;
      //比例值
      const progress = Math.min(1, Math.max(tempWidth / barWidth, 0));
      //拿到offset偏移值
      this.offset = barWidth * progress;
      this.$emit('progress-changing', progress);
    },
    onMouseup() {
      //整个进度条的宽度
      const barWidth = this.$el.clientWidth - progressBtnWidth;
      //拿到progress
      const progress = this.$refs.progress.clientWidth / barWidth;
      this.$emit('progress-changed', progress);
    },
    onClick(e) {
      //获取进度条
      const rect = this.$el.getBoundingClientRect();
      //获取偏移量
      const offsetWidth = e.pageX - rect.left;
      //整个进度条的宽度
      const barWidth = this.$el.clientWidth - progressBtnWidth;
      //计算比例
      const progress = offsetWidth / barWidth;
      //提交
      this.$emit('progress-changed', progress);
    },
    setOffset(progress) {
      const barWidth = this.$el.clientWidth - progressBtnWidth;
      this.offset = barWidth * progress;
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  height: 30px;
  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);
    .progress {
      position: absolute;
      height: 100%;
      background: rgb(219, 205, 200);
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -8px;
      top: -13px;
      width: 30px;
      height: 30px;
      .progress-btn {
        position: relative;
        top: 7px;
        left: 7px;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border: 3px solid rgb(219, 205, 200);
        border-radius: 50%;
        background: rgb(219, 205, 200);
      }
    }
  }
}
</style>
