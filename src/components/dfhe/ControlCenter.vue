<!--
 * @Author: your name
 * @Date: 2021-11-15 16:26:10
 * @LastEditTime: 2021-11-18 11:50:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\components\dfhe\ControlCenter.vue
-->
<template>
  <div class="container-box">
    <div class="container-main">
      <div class="control-center">
        <div
          class="control-center-btn"
          v-for="(item, index) in controls"
          :key="index"
          @click="
            item.active = !item.active;
            item.click();
          "
          :class="{
            isActive: item.active,
          }"
        >
          <img
            :src="
              require('@/assets/img/controlsIcons/' + item.description + '.png')
            "
            width="14"
            :class="{ imgAcive: item.active }"
          />
          <span>{{ item.controlsName }}</span>
        </div>
      </div>
      <div class="control-ProgressBar">
        <div class="sliderCont">
          <img
            src="../../assets/img/taskbarIcons/brightness.png"
            alt=""
            width="20"
          />
          <input
            class="sliders"
            type="range"
            min="10"
            max="100"
            defaultValue="100"
            v-model="Lightness"
          />
        </div>
        <div class="sliderCont">
          <img
            src="../../assets/img/taskbarIcons/audio3.png"
            alt=""
            width="20"
          />
          <input
            class="sliders"
            type="range"
            min="0"
            max="100"
            defaultValue="100"
            v-model="volumeSize"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import ProgressBar from './ProgressBar.vue';
export default {
  name: 'control-center',
  // components: {
  //   ProgressBar,
  // },
  emits: ['toggleLightMode', 'changeLightnesss'],
  data() {
    return {
      controls: [],
      OpenLightMode: false,
      Lightness: 100,
      volumeSize: 100,
    };
  },
  watch: {
    Lightness() {
      this.$emit('changeLightnesss', this.Lightness);
    },
  },
  computed: {},

  methods: {
    toggleNightLight() {
      this.OpenLightMode = !this.OpenLightMode;
      this.$emit('toggleLightMode', this.OpenLightMode);
    },
    none() {},
    initItems() {
      this.controls = [
        {
          controlsName: '位置',
          description: 'location',
          active: false,
          click: this.none,
        },
        {
          controlsName: '节电模式',
          description: 'battery-saver',
          active: true,
          click: this.none,
        },
        {
          controlsName: '夜间模式',
          description: 'night-light',
          active: this.nightLight,
          click: this.toggleNightLight,
        },
        {
          controlsName: '蓝牙',
          description: 'bluetooth',
          active: true,
          click: this.none,
        },
        {
          controlsName: '飞行模式',
          description: 'offline-mode',
          active: false,
          click: this.none,
        },
        {
          controlsName: '本地电脑',
          description: 'connect',
          active: false,
          click: this.none,
        },
        {
          controlsName: '本地电脑',
          description: 'project',
          active: false,
          click: this.none,
        },
        {
          controlsName: 'WiFi',
          description: 'network',
          active: false,
          click: this.none,
        },
        {
          controlsName: '在线分享',
          description: 'sharing',
          active: false,
          click: this.none,
        },
        {
          controlsName: '账户安全',
          description: 'tablet-mode',
          active: false,
          click: this.none,
        },
        {
          controlsName: '账户安全',
          description: 'security',
          active: false,
          click: this.none,
        },
        {
          controlsName: '切换模式',
          description: 'focus-assist',
          active: this.false,
          click: this.none,
        },
      ];
    },
  },
  mounted() {
    this.initItems();
  },
};
</script>

<style lang="scss">
.container-box {
  width: 360px;
  height: 420px;
  box-shadow: -6px 0 6px #0001;
  bottom: 50px;
  right: 10px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  transition-duration: 150ms;
  backdrop-filter: blur(16px);
  border-radius: 10px;
  .container-main {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 20px 20px;
    .control-center {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      .control-center-btn {
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        padding: 8px 4px 4px 4px;
        transition-duration: 150ms;
        border: 1px solid transparent;
        background-color: rgb(255, 255, 255);
        span {
          font-size: 9px;
        }
      }
    }
    .control-ProgressBar {
      width: 100%;
      height: 108px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .sliderCont {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
      }
    }
  }
}

.isActive {
  background-color: rgba(37, 99, 235) !important;
  color: white;
  border-color: rgba(37, 99, 235);
}
.imgAcive {
  filter: invert(100%) !important;
  filter: grayscale(50%);
}

.sliders {
  width: 280px;
  height: 4px;
  --track-color: linear-gradient(90deg, var(--clrPrm) 100%, #888888 100%);
  -webkit-appearance: none;
  background-color: transparent;
  --clrPrm: #0067c0;
  --bg1: rgba(249, 249, 249, 0.9);
}

.sliders[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  background: var(--track-color);
  border-radius: 10px;
  border: 0;
}
.sliders[type='range']::-webkit-slider-thumb {
  border: 4px solid var(--bg1);
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: var(--clrPrm);
  -webkit-appearance: none;
  margin-top: -9px;
}
.sliders[type='range']:focus::-webkit-slider-runnable-track {
  background: var(--track-color);
}
</style>