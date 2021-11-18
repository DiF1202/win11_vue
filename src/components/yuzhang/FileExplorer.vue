<template>
  <div
    class="explorer floatTab dpShadow"
    :style="zIndex"
    :win-size="winSize"
    :win-max="winMax"
    :win-hide="winHide"
  >
    <!--标题栏-->
    <div class="toolbar">
      <div class="icon" hidden>
        <img width="14" src="../../assets/img/appIcons/explorer.png" />
      </div>
      <div class="topfont">文件资源管理器</div>
      <span></span>
      <div class="actbtns">
        <div class="minbtn" @click="clickMinBtn">
          <img width="8" src="../../assets/img/appIcons/minimize.png" alt="" />
        </div>
        <div class="maxbtn" @click="clickMaxBtn">
          <img width="8" src="../../assets/img/appIcons/maximize.png" alt="" />
        </div>
        <div class="closebtn" @click="clickCloseBtn">
          <img width="8" src="../../assets/img/appIcons/close.png" alt="" />
        </div>
      </div>
    </div>
    <!--操作栏-->
    <div class="operate">
      <div class="op4">
        <div><img src="../../assets/img/fileexplorer/省略.png" alt="" /></div>
      </div>
      <div class="op3">
        <div>
          <img src="../../assets/img/fileexplorer/排序.png" />

          <select>
            <option>排序</option>
          </select>
          <span>
            <img src="../../assets/img/fileexplorer/图片列表.png" />
            <select>
              <option>查看</option>
            </select>
          </span>
        </div>
      </div>
      <div class="op2">
        <div>
          <img src="../../assets/img/fileexplorer/剪切.png" alt="" />
          <img src="../../assets/img/fileexplorer/复制.png" alt="" />
          <img src="../../assets/img/fileexplorer/粘贴.png" alt="" />
          <img src="../../assets/img/fileexplorer/重命名.png" alt="" />
          <img src="../../assets/img/fileexplorer/分享.png" alt="" />
          <img src="../../assets/img/fileexplorer/删除.png" alt="" />
        </div>
      </div>
      <div class="op1">
        <div>
          <div>
            <img src="../../assets/img/fileexplorer/加.png" />
            <select>
              <option>新建</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!--内容物-->
    <div class="filecontent">
      <!--url-->
      <div class="co1">
        <img src="../../assets/img/fileexplorer/左.png" alt="" />
        <img src="../../assets/img/fileexplorer/右.png" alt="" />
        <img src="../../assets/img/fileexplorer/下.png" alt="" />
        <img src="../../assets/img/fileexplorer/上.png" alt="" />
        <input
          class="Input p1"
          placeholder="                 快速访问"
          type="text"
          style="border-width: 1px"
        />
        <input
          class="Input p2"
          placeholder="            搜索“快速访问”"
          type="text"
          style="border-width: 1px"
        />
        <div class="inPut input1">
          <img src="../../assets/img/fileexplorer/五角星.png" alt="" />
          <img src="../../assets/img/fileexplorer/向右.png" alt="" />
        </div>
        <div class="inPut input2">
          <img src="../../assets/img/fileexplorer/下.png" alt="" />
          <img src="../../assets/img/fileexplorer/刷新.png" alt="" />
        </div>
        <div class="inPut input3">
          <img src="../../assets/img/fileexplorer/搜索.png" alt="" />
        </div>
      </div>
      <!--内容-->
    </div>

    <span class="part2">
      <el-divider></el-divider>
      <p
        style="
          color: #01589b;
          width: 87px;
          position: absolute;
          left: 0px;
          top: 10px;
          font-size: 20px;
          background-color: white;
          padding-left: 35px;
          padding-right: 10px;
        "
      >
        文件夹(7)
      </p>
      <img
        src="../../assets/img/fileexplorer/下.png"
        style="width: 20px; position: absolute; left: 6px; top: 15px"
      /><br />
      <div class="files">
        <template v-for="(item, index) in FilesData" :key="index">
          <div class="files-item">
            <img
              :src="
                require('@/assets/img/fileexplorer/' + item.picname + '.png')
              "
              alt="item.name"
            />
            <div class="files-name">
              <p>{{ item.name }}</p>
              <p>{{ item.path }}</p>
            </div>
          </div>
        </template>
      </div>

      <el-divider style="position: absolute; top: 350px"></el-divider>
      <div>
        <p
          style="
            color: #01589b;
            width: 192px;
            position: absolute;
            left: 0px;
            top: 360px;
            font-size: 20px;
            background-color: white;
            padding-left: 35px;
            padding-right: 10px;
          "
        >
          最近使用的文件（0）
        </p>
        <img
          src="../../assets/img/fileexplorer/下.png"
          style="width: 20px; position: absolute; left: 6px; top: 365px"
        />
      </div>
    </span>
    <span class="part1">
      <ul>
        <li style="background-color: rgb(223, 223, 223)">
          <img src="../../assets/img/fileexplorer/向右.png" alt="" /><img
            src="../../assets/img/fileexplorer/五角星.png"
            alt=""
          />
          <div style="float: left; padding-left: 5px">快速访问</div>
        </li>
        <li>
          <img src="../../assets/img/fileexplorer/向右.png" alt="" /><img
            src="../../assets/img/fileexplorer/此电脑.png"
            alt=""
          />
          <div style="float: left; padding-left: 5px">此电脑</div>
        </li>
        <li>
          <img src="../../assets/img/fileexplorer/向右.png" alt="" /><img
            src="../../assets/img/fileexplorer/网络.png"
            alt=""
          />
          <div style="float: left; padding-left: 5px">网络</div>
        </li>
        <li>
          <img src="../../assets/img/fileexplorer/向右.png" alt="" /><img
            src="../../assets/img/fileexplorer/OneDrive.png"
            alt=""
          />
          <div style="float: left; padding-left: 5px">OneDrive</div>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
export default {
  name: 'FileExplorer',
  props: {
    winSize: String, // 窗口尺寸：normal 还原窗口 max 最大化窗口
    winMax: String, // 窗口是否最大化：false 否 true 是
    winHide: String, // 窗口是否隐藏：false 否 true 是
    zIndex: Object,
  },
  data() {
    return {
      FilesData: [
        {
          picname: 'desktop',
          name: '桌面',
          path: '此电脑',
        },
        {
          picname: 'picture',
          name: '图片',
          path: '此电脑',
        },
        {
          picname: 'download',
          name: '下载',
          path: '此电脑',
        },
        {
          picname: 'file',
          name: '文档',
          path: '此电脑',
        },
        {
          picname: 'folder',
          name: '照片',
          path: '此电脑',
        },
        {
          picname: 'folder',
          name: '学习资料',
          path: 'D:\\勿点\\',
        },
        {
          picname: 'folder',
          name: 'win11_vue',
          path: 'E:\\win11\\',
        },
      ],
    };
  },
  methods: {
    // 按钮点击事件
    clickMinBtn() {
      this.$emit('winStateChange', 'explorer', 1);
    },
    clickMaxBtn() {
      this.$emit('winStateChange', 'explorer', 2);
    },
    clickCloseBtn() {
      this.$emit('winStateChange', 'explorer', 0);
    },
    clickLeft() {
      if (this.historyUrl.length) {
        this.goTo(this.historyUrl.pop(), true);
      }
    },
  },
};
</script>

<style  lang="scss" scoped>
@import '../../assets/scss/_window.scss';
.explorer {
  background-color: #f3f3f3;
  font-size: 12px;
}
.toolbar {
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.icon {
  margin: 0 10px 0 6px;
  position: relative;
  display: grid;
  place-items: center;
}
.actbtns {
  height: 100%;
  align-items: center;
  display: flex;
}
.actbtns .minbtn,
.actbtns .maxbtn,
.actbtns .closebtn {
  transition: all 60ms ease-in-out;
  height: 100%;
  padding: 0 18px;
  position: relative;
  display: grid;
  place-items: center;
}
.minbtn:hover,
.maxbtn:hover {
  background-color: rgba(212, 214, 216, 1);
}
.closebtn:hover {
  background-color: rgb(255, 65, 65);
}
.topfont {
  font-size: 12px;
  position: absolute;
  left: 30px;
}
.operate {
  height: 48px;
  border-bottom: solid rgb(223, 223, 223);
  border-width: 1px;
}
.operate div {
  position: absolute;
  top: 27px;
  left: 0;
}
.operate img {
  padding: 15px;
  width: 17px;
}
.operate img:hover {
  background-color: rgba(0, 0, 0, 0.137);

  border-radius: 2px;
}
select {
  position: absolute;
  top: 10px;
  height: 25px;
  /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
  border: solid 0px #000;
  /*很关键：将默认的select选择框样式清除*/
  font-size: 13px;
  color: rgb(94, 94, 94);
  /*将背景改为红色*/
  background: rgba(255, 255, 255, 0);
  /*加padding防止文字覆盖*/
  padding-right: 6px;
}
select:hover {
  background-color: rgba(0, 0, 0, 0.137);
  border-radius: 2px;
}
.op1 {
  height: 40px;
  width: 109px;
  border-right: solid rgb(223, 223, 223);
  border-width: 1px;
}
.op1 div {
  width: 50px;
  position: absolute;
  top: -1px;
  left: 0;
}

.op2 {
  height: 40px;
  width: 400px;
  border-right: solid rgb(223, 223, 223);
  border-width: 1px;
}
.op2 div {
  width: 300px;
  position: absolute;
  top: -1px;
  left: 107px;
}
.op2 img {
  padding: 15px;
}
.op3 {
  height: 40px;
  width: 640px;
  border-right: solid rgb(223, 223, 223);
  border-width: 1px;
}

.op3 div {
  width: 300px;
  position: absolute;
  top: -1px;
  left: 407px;
}
.op3 img {
  padding: 15px;
}
.op3 span {
  position: absolute;
  left: 110px;
}
.op4 {
  height: 40px;
  width: 700px;
}
.op4 div {
  width: 300px;
  position: absolute;
  top: -1px;
  left: 644px;
}
.op4 img {
  padding: 15px;
}
.filecontent {
  background-color: white;
  height: 50px;
}
.filecontent img {
  padding: 11px;
  width: 17px;
}
.filecontent img:hover {
  background-color: rgba(0, 0, 0, 0.137);

  border-radius: 2px;
}
.co1 {
  position: absolute;
}
.inPut {
  position: absolute;
  width: 100px;
  top: 6px;
}
.Input {
  top: 3px;
  height: 30px;
  width: 600px;
  position: absolute;
  border: solid rgb(216, 215, 215);
}
.Input.p1 {
  left: 160px;
  width: 600px;
}
.Input.p2 {
  width: 400px;
  left: 800px;
}
.inPut img {
  height: 17px;
  padding: 5px;
  padding-left: 0px;
  padding-right: 5px;
}
.input1 {
  left: 173px;
}
.input2 {
  left: 716px;
}
.input3 {
  left: 814px;
}

.part1 {
  position: absolute;
  top: 129px;
  width: 230px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-right: solid #cfcfcf50;
  border-width: 1px;
}
.part1 ul {
  left: 10px;
  position: absolute;
  top: 50px;
}
.part1 li {
  width: 200px;
  padding-bottom: 30px;
  padding-top: 10px;
}
.part1 li:hover {
  background-color: rgba(16, 155, 230, 0.228);
}
.part1 img {
  float: left;
  width: 17px;
}

.part2 {
  position: absolute;
  top: 129px;
  left: 230px;
  width: calc(100% - 230px);
  height: 100%;
  background-color: #ffffff;
}
.files {
  display: flex;
  flex-wrap: wrap;
  .files-item {
    width: 220px;
    display: flex;
    img {
      width: 70px;
      padding: 14px 0px 14px 54px;
    }
    .files-name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
      margin-left: 8px;
    }
  }
}

.mouseupp:hover {
  background-color: rgba(16, 155, 230, 0.228);
}
</style>