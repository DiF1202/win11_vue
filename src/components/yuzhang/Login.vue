<template>
  <div class="bg">
    <div class="mask"></div>
    <div id="log">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="100"></el-avatar>
      <div id="username">Yuki</div>
      <div class="el-input--suffix el-input">
        <input type="text" @keyup="keyEvent" autocomplete="off" :placeholder="content" class="el-input__inner" /><span
          class="el-input__suffix"><span class="el-input__suffix-inner"><img @click="goDeskTop" height="40" width="40"
              src="../../assets/img/login/rightrow.png" /></span></span>
      </div>
      <div class="fgmypw">
        忘记密码<br />
        <br />
        <br />
        登录选项
        <br />
      </div>
      <div class="logimg">
        <a href="javascript:void(0);"><img :class="a" @click="changeBorderA"
            src="../../assets/img/login/pinlock.png" /></a>
        <span width="10px"></span>
        <a href="javascript:void(0);">
          <img :class="b" @click="changeBorderB" src="../../assets/img/login/passkey.png" /></a>
      </div>
    </div>
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
    keyEvent(e) {
      if(e.keyCode == 13) this.$router.push('/deskTop');
    },
    goDeskTop() {
      this.$router.push('/deskTop')
    }
  },
};
</script>

<style scoped>
.bg {
  height: 100vh;
  width: 100vw;
  z-index: -2;
  background-size: cover;
  background-color: black;
  background-image: url(../../assets/img/login/lock.jpg);
}

#log {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 300px;
}
.mask {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 11 93 / 49%);
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
  position: absolute;
  left: 50%;
  top: 500px;
  margin-left: -61px;
}
.logimg img {
  width: 38px;
  border-radius: 2px;
  margin: 10px;
}
.logimg img:focus {
  border-style: dashed;
}
#username {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-weight: 600;
  position: absolute;
  top: 310px;
  left: 50%;
  color: rgb(255, 255, 255);
  font-size: 25px;
  margin-left: -30px;
}
.fgmypw {
  position: absolute;
  color: rgba(240, 248, 255, 0.671);
  font-size: 10px;
  top: 420px;
  left: 50%;
  margin-left: -27px;
}
.el-input {
  width: 250px;
  position: absolute;
  top: 350px;
  left: 50%;
  margin-left: -125px;
  --el-input-border-radius: 0;
  --el-input-background-color: #0d0d0d8f;
  --el-border-base: var(--el-border-width-base) var(--el-border-style-base)
    #434343;
}

.el-avatar {
  --el-avatar-large-size: 165px;
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -82.5px;
}
</style>