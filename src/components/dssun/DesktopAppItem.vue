<template>
  <div
    class="dskApp"
    :class="displayMode"
    @mousedown="dskAppMouseDown"
    @mouseup="dskAppMouseUp"
    @mouseleave="dskAppMouseLeave"
  >
    <div class="deskAppIcon">
      <img :class="imgClass" :src="imgUrl" :alt="appName" />
    </div>
    <div class="appName">{{ appName }}</div>
  </div>
</template>

<script>
export default {
  name: "desktop-app-item",
  props: {
    appName: String, // 应用名称：显示在桌面图标下方
    imgUrl: String, // 应用图标URL
    displayMode: String, // 显式模式：大/中/小图标
  },
  data() {
    return {
      imgClass: "normal",
    };
  },
  methods: {
    dskAppMouseDown() {
      this.imgClass = "smaller";
    },
    dskAppMouseUp() {
      setTimeout(() => (this.imgClass = "normal"), 200);
    },
    dskAppMouseLeave() {
      setTimeout(() => (this.imgClass = "normal"), 200);
    },
  },
};
</script>

<style scoped>
.dskApp {
  margin: 4px;
  padding: 12px 18px 24px;

  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  transition: all 0.2s ease-in-out;

  border: rgba(233, 233, 233, 0) solid 1px;
  text-align: center;

  display: grid;
}
.dskApp:hover {
  background-color: rgba(233, 233, 233, 0.4);
  border: rgba(233, 233, 233, 0.4) solid 1px;
}

.deskAppIcon > img {
  -webkit-user-drag: none;
  transition: all 0.2s;
}

.small {
  height: 66px;
  width: 36px;
  border-radius: 3px;
}
.middle {
  height: 80px;
  width: 43px;
  border-radius: 5px;
}
.big {
  height: 94px;
  width: 54px;
  border-radius: 7px;
}

.small .normal {
  width: 36px;
}
.middle .normal {
  width: 43px;
}
.big .normal {
  width: 54px;
}

.small .deskAppIcon {
  width: 36px;
  height: 36px;
}
.middle .deskAppIcon {
  width: 43px;
  height: 43px;
}
.big .deskAppIcon {
  width: 54px;
  height: 54px;
}

.small .smaller {
  width: 28px;
}
.middle .smaller {
  width: 34px;
}
.big .smaller {
  width: 43px;
}

.deskAppIcon {
  text-align: center;

  /* flex */
  display: flex;
  align-items: center;
  justify-content: center;
}

.appName {
  color: #fafafa;
  margin-top: 2px;
  margin-left: -30%;
  height: 30%;
  width: 160%;

  text-shadow: 0 0 4px rgb(0 0 0 / 60%);
  font-size: 12px;

  cursor: default;
  user-select: none;
}
</style>
