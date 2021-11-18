<template>
  <div class="dskApp" :class="displayMode">
    <div class="deskAppIcon">
      <img
        :class="imgClass"
        :src="require('@/assets/img/appIcons/' + fileType + '.png')"
        :alt="appName"
      />
    </div>
    <div class="textareaCon">
      <textarea
        type="text"
        name=""
        v-model="appName"
        ref="appNameInput"
        @blur="inputSubmit"
        @keydown.enter.prevent="inputEnter"
        :style="{ height: calHeight + 'px' }"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "desktop-app-item",
  props: {
    fileType: String, // folder 或 txt
    displayMode: String, // 显式模式：大/中/小图标
  },
  data() {
    let appName;
    if (this.fileType === "folder") appName = "新建文件夹";
    else appName = "新建 txt 文件.txt";
    return {
      appName,
      imgClass: "normal",
    };
  },
  methods: {
    inputSubmit() {
      this.nameSubmit = true;
      this.$emit("newItemCallback", this.fileType, this.appName);
    },
    inputEnter() {
      this.$refs["appNameInput"].blur();
    },
  },
  computed: {
    calHeight() {
      if (this.displayMode === "small" || this.displayMode === "middle") {
        return (Math.floor(this.appName.length / 5) + 1) * 14;
      } else {
        return (Math.floor(this.appName.length / 6) + 1) * 14;
      }
    },
  },
  mounted: function () {
    this.$refs.appNameInput.select();
  },
};
</script>

<style scoped>
.dskApp {
  margin: 4px;
  padding: 12px 18px 24px;

  align-items: center;
  font-size: 0.8em;
  transition: all 0.2s ease-in-out;

  border: rgba(233, 233, 233, 0) solid 1px;
  text-align: center;

  display: flex;
  flex-direction: column;
}
.dskApp:hover {
  background-color: rgba(233, 233, 233, 0.4);
  border: rgba(233, 233, 233, 0.4) solid 1px;
}
.dskApp.big {
  padding-top: 17px;
  padding-bottom: 19px;
}
.dskApp.middle {
  padding-top: 16px;
  padding-bottom: 20px;
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

  display: flex;
  align-items: center;
  justify-content: center;
}

.textareaCon {
  display: flex;
  align-items: center;
  width: 180%;
  margin-top: 12px;
}

textarea {
  resize: none;
  overflow: hidden;
  text-align: center;
}
</style>
