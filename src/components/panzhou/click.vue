<template>
  <div class="root" @click.stop="" v-if="this.$store.getters.getClick.vis" @mouseleave="closeItem"
    :style="{left:this.$store.getters.getClick.clientX+'px',top:this.$store.getters.getClick.clientY+'px'}">
    <div class="main">
      <div class="view" @mouseenter="stayItem(0)"><i></i>查看<span></span></div>
      <div class="sort" @mouseenter="stayItem(1)"><i></i>排序<span></span></div>
      <div class="refresh"><i></i>刷新</div>
      <div class="git"><i></i>Git Bash Here</div>
      <div class="new" @mouseenter="stayItem(4)"><i></i>新建<span></span></div>
      <div class="changeBg" @mouseenter="stayItem(5)" @click.stop="tryEmit(false)"><i></i>更换背景</div>
      <div class="setting"><i></i>设置</div>
      <div class="personal"><i></i>个性化</div>
    </div>
    <div class="detail" v-if="itemVis" :style="{top:detailTop+'rem'}">
      <div  v-for="(item,index) in detail" :key='index' class="item" @click.stop="tryEmit(index)">
          {{item}}
      </div>
    </div>
    <div class="br1"></div>
    <div class="br2"></div>
    <div class="br3"></div>
    
  </div>
</template>

<script>
export default {
  name: 'click',
  data(){
    return {
      itemVis:false,
      cur: 0, // 指定 item 的索引，方便事件传递的时候判断
      detailTop: 0, // 确定好 item 列表的位置
      details: [
        ['小图标', '中图标', '大图标', '显示'],
        ['名称', '大小', '项目类型', '修改时间'],
        ['文件夹', '快捷方式', '文本文档', 'markdowm']
      ],
      detail: [],
    }
  },
  methods:{
    // menu停留显示单选项
    stayItem(val) {
      this.itemVis = true;
      if(val == 5) this.itemVis = false;
      this.cur = val; // 确定当前是哪一个 Item
      this.detail = this.details[val];
      switch(val) {
        case 0 :
          this.detailTop = 0.1;
          break;
        case 1 :
          this.detailTop = 0.85;
          break;
        case 4 :
          this.detailTop = 2.73;
          this.detail = ['文件夹', '快捷方式', '文本文档', 'markdowm']; // 这里的映射有点问题哈
          break;    
      }
    },
    // 关闭单选项
    closeItem() {
      this.itemVis = false;
    },
    // 通过给父组件传值确定操作信息
    tryEmit(idx) {
      this.$emit('clickMenu',[this.cur,idx])
      this.itemVis = false;
      this.$store.commit('setClick',{vis:false});
    }
  },
  created(){

  }
};
</script>
<style lang="scss" scoped>
    .root {
      position: absolute;
      width: 4.75rem;
      height: 5.066667rem;
      border-radius: .133333rem;
      background-color: rgb(225, 230, 250);
      padding: .026667rem;

      .main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        font-size: 14px;

        div:nth-child(n) {
          width: 98%;
          height: .5rem;
          line-height: .5rem;
          border-radius: .066667rem;
          text-indent: .533333rem;
          position: relative;

          i {
            position: absolute;
            left: 0.1rem;
            top: 0.115rem;
            width: .266667rem;
            height: .266667rem;
            background-size: 100% 100%;
          }

          span {
            position: absolute;
            right: 0.2rem;
            top: 0.13rem;
            width: .186667rem;
            height: .186667rem;
            background: url('../../assets/img/menuIcons/shot.png') 0 0;
            background-size: 100% 100%;
          }
        }

        div:nth-child(n):hover {
          background-color: rgb(207, 215, 230);
        }

        .view i {
          background: url('../../assets/img/menuIcons/view.png') 0 0;
        }

        .sort i {
          background: url('../../assets/img/menuIcons/sort.png') 0 0;
        }

        .refresh i {
          background: url('../../assets/img/menuIcons/refresh.png') 0 0;
        }

        .new i {
          background: url('../../assets/img/menuIcons/new.png') 0 0;
        }

        .setting i {
          background: url('../../assets/img/menuIcons/setting.png') 0 0;
        }

        .git i {
          background: url('../../assets/img/menuIcons/git.png') 0 0;
        }

        .changeBg i {
          background: url('../../assets/img/menuIcons/change.png') 0 0;
        }

        .personal i {
          background: url('../../assets/img/menuIcons/personalize.png') 0 0;
        }
      }

      .br1,
      .br2,
      .br3 {
        position: absolute;
        background-color: rgb(219, 216, 216);
        left: 0rem;
        width: 99%;
        height: .026667rem;
      }

      .br1 {
        top: 1.91rem;
      }

      .br2 {
        top: 2.55rem;
      }

      .br3 {
        top: 3.18rem;
      }

      .detail {
          position: absolute;
          left: 4.6rem;
          width: 2.666667rem;
          height: 2.3rem;
          border-radius: .106667rem;
          background-color: rgb(228,236,249);
          opacity: 0.97;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-end;
          font-size: 13px;
          .item {
            width: 97%;
            height: .5rem;
            line-height: .5rem;
            border-radius: .066667rem;
            text-indent: .333333rem;
          }

          .item:hover {
            background-color: rgb(207, 218, 235);
          }

        }
    }
</style>