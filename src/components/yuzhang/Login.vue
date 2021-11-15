<template >
  <div class="bg">
    <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      size="100"
    ></el-avatar>
    <div id="username">Yuki</div>
    <div class="el-input--suffix el-input">
      <!----><input
        type="text"
        autocomplete="off"
        :placeholder="content"
        class="el-input__inner"
      /><!----><span class="el-input__suffix"
        ><span class="el-input__suffix-inner"
          ><a href="#"
            ><img
              height="40"
              width="40"
              src="../../assets/img/login/rightrow.png" /></a
          ><!----><!----><!----></span
        ><!----></span
      ><!----><!---->
    </div>
  </div>
  <div class="fgmypw">
    忘记密码<br />
    <br />
    <br />
    登录选项
    <br />
  </div>
  <div class="logimg">
    <a href="#"
      ><img
        :class="a"
        @click="changeBorderA"
        src="../../assets/img/login/pinlock.png"
    /></a>
    &emsp;<a href="#"
      ><img
        :class="b"
        @click="changeBorderB"
        src="../../assets/img/login/passkey.png"
    /></a>
  </div>
</template>

<script>
export default {
  name: 'Name',
  data() {
    return {
      input: '',
      a: '',
      b: 'active',
      content: '密码',
    };
  },
  beforeCreate() {
    undefined;
    document
      .querySelector('body')
      .setAttribute(
        'style',
        'margin: 0 auto; width: 100%; max-width: 750px;min-width: 300px; background:#171b2a; overflow-x: hidden;height: 100%;'
      );
  },
  methods: {
    changeBorderA() {
      this.a = 'active';
      this.b = '';
      this.content = 'Pin';
    },
    changeBorderB() {
      this.b = 'active';
      this.a = '';
      this.content = '密码';
    },
  },
};
</script>

<style scoped>
.bg {
  background-image: url(../../assets/img/wallpapers/light.jpg);
}

a {
  text-decoration: none;
}
a:hover,
a:visited,
a:link,
a:active {
  color: rgba(255, 255, 255, 0.575);
}
.active {
  border-style: solid;
  border-color: rgb(175, 175, 175);
  border-width: thin;
}
.logimg {
  position: fixed;
  left: 50%;
  top: 58%;
  margin-left: -50px;
}
.logimg img {
  width: 38px;
  border-radius: 2px;
}
.logimg img:focus {
  border-style: dashed;
}
#username {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-weight: 600;
  position: fixed;
  top: 39%;
  left: 50%;
  color: rgb(255, 255, 255);
  font-size: 25px;
  margin-left: -30px;
}
.fgmypw {
  position: fixed;
  color: rgba(240, 248, 255, 0.671);
  font-size: 10px;
  top: 50%;
  left: 50%;
  margin-left: -27px;
}
.el-input {
  width: 250px;
  position: fixed;
  top: 45%;
  left: 50%;
  margin-left: -125px;
  --el-input-border-radius: 0;
  --el-input-background-color: #0d0d0d8f;
  --el-border-base: var(--el-border-width-base) var(--el-border-style-base)
    #434343;
}

.el-avatar {
  --el-avatar-large-size: 165px;
  position: fixed;
  top: 20%;
  left: 50%;
  margin-left: -82.5px;
}
</style>