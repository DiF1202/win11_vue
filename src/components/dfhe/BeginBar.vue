<template>
  <div class="start-menu" v-show="isShowStartMenu">
    <div class="start-container">
      <div class="start-appIcons">
        <div class="start-appIcons-header">
          <div style="font-size: 12px;line-height:16px;font-weight: 600"
            >已固定
          </div>
        </div>
        <div class="start-appIcons-container">
          <div
            v-for="(item, index) in apps"
            :key="index"
            class="start-appIcons-items"
            @click="item.click(item.openkey);"
          >
            <img :src="item.icon" width="24" />
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>

      <div class="recommend-appIcons">
        <div style="padding: 0px 24px 17px 24px">
          <div style="font-size: 12px; line-height: 16px; font-weight: 600"
            >推荐应用</div
          >
        </div>

        <div class="recommend-container">
          <div
            v-for="(item, index) in recommendedApps"
            :key="index"
            class="recommend-item"
             @click="item.click(item.openkey);"
          >
            <img :src="item.icon" width="24" />
            <span
              style="font-size: 12px; line-height: 25px; font-weight: 600"
              >{{ item.name }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="start-user">
      <div class="user">
        <img
          src="@/assets/img/appIcons/power.png"
          style="border-radius: 999px"
          width="26"
        />
        <span
          style="font-size: 10.4px; line-height: 12.8px; color: rgb(31, 41, 55)"
          >重生之我是尤vue溪</span
        >
        <div class="flex-grow"></div>
        <img
          src="@/assets/img/appIcons/power.png"
          style="border-radius: 999px"
          width="14"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartMenu',
  emits: ['winStateChange','showStartmenu'],
  props:{
      isShowStartMenu:Boolean,
  },
  methods: {
    none() {},
    openApp(openkey){
        console.log(openkey)
        // this.$emit('openApp', appname);
        // appname="edge"
        this.$emit("winStateChange", openkey, 4);
        this.$emit('showStartmenu')
    }
  },
  data() {
    return {
      apps: [
        {
          name: 'Edge',
          icon: require('@/assets/img/appIcons/edge.png'),
          active: false,
          click: this.openApp,
          openkey:"edge"
        },
        {
          name: 'Word',
          icon: require('@/assets/img/appIcons/word.png'),
          active: false,
          click: this.none,
        },
        {
          name: 'PowerPoint',
          icon: require('@/assets/img/appIcons/powerpoint.png'),
          active: false,
          click: this.none,
        },
        {
          name: '邮件',
          icon: require('@/assets/img/appIcons/mail.png'),
          active: false,
          click: this.none,
        },
        {
          name: '应用商店',
          icon: require('@/assets/img/appIcons/store.png'),
          active: false,
          click: this.none,
        },
        {
          name: '照片',
          icon: require('@/assets/img/appIcons/photos.png'),
          active: false,
          click: this.none,
        },
        {
          name: 'VS Code',
          icon: require('@/assets/img/appIcons/vscode.png'),
          active: false,
          click: this.openApp,
           openkey:"vscode"
        },
        {
          name: 'GitHub',
          icon: require('@/assets/img/appIcons/github.png'),
          active: false,
          click: this.openApp,
          openkey:"GitHub"
        },
        {
          name: 'MarkDown',
          icon: require('@/assets/img/appIcons/markdown.png'),
          active: false,
          click: this.openApp,
          openkey:"markdown"
        },
        {
          name: 'PDF',
          icon: require('@/assets/img/appIcons/pdf.png'),
          active: false,
          click: this.openApp,
          openkey: 'pdf',
        },
      ],

      recommendedApps: [
        {
          name: 'Edge',
          subLabel: '17min ago',
          icon: require('@/assets/img/appIcons/edge.png'),
          active: false,
          click: this.openApp,
          openkey:"edge"
        },
                {
          name: 'VS Code',
          subLabel: 'Yesterday at 4:24 PM',
          icon: require('@/assets/img/appIcons/vscode.png'),
          active: false,
          click: this.openApp,
           openkey:"vscode"
        },
        {
          name: 'GitHub',
          subLabel: '1h ago',
          icon: require('@/assets/img/appIcons/github.png'),
          active: false,
          click: this.none,
        },
        {
          name: 'MarkDown',
          subLabel: '12h ago',
          icon: require('@/assets/img/appIcons/markdown.png'),
          active: false,
          click: this.openApp,
          openkey:"markdown"
        },
        {
          name: '应用商店',
          subLabel: '1h ago',
          icon: require('@/assets/img/appIcons/store.png'),
          active: false,
          click: this.none,
        },
        {
          name: 'PDF',
          subLabel: 'Last week',
          icon: require('@/assets/img/appIcons/pdf.png'),
          active: false,
          click: this.openApp,
          openkey: 'pdf',
        },
      ],
    };
  },

};
</script>

<style lang="scss" >
.start-menu {
  position: absolute;
  left: 50%;
  width: 520px;
  height: 530px;
  bottom: -100px;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  bottom: 50px;
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) scale(1);
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  border-radius: 6px;
  transition-duration: 200ms;
  backdrop-filter: blur(16px);
  .start-container {
    display: flex;
    flex-direction: column;
    padding: 6px;
    flex-grow: 1;
    .start-appIcons {
      flex-grow: 1;
      .start-appIcons-header {
        display:flex;
        align-items: center;
        padding: 16px 24px;
      }
      .start-appIcons-container {
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        .start-appIcons-items {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          padding: 8px 0;
          border-radius: 2px;
          transition-duration: 150ms;
          &:hover {
            background-color: rgb(231, 234, 243);
          }
          &:active {
            background-color: rgba(225, 225, 225, 0.3);
          }
          span {
            font-size: 10.4px;
            line-height: 12.8px;
            font-weight: 500;
            color: rgb(31, 41, 55);
            text-align: center;
          }
        }
      }
    }
    .recommend-appIcons {
      flex-grow: 1;
      .recommend-container {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        .recommend-item {
          display: flex;
          gap: 12px;
          padding: 12px 24px;
          &:hover {
            background-color: rgb(231, 234, 243);
          }
          &:active {
            background-color: rgba(225, 225, 225, 0.3);
          }
        }
      }
    }
  }
}
.start-user {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 16px 48px;
  .user {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>