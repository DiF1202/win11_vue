<!--
 * @Author: 张羽
 * @Date: 2021-11-13 12:03:20
 * @LastEditTime: 2021-11-15 10:16:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\components\HeDiFei\test.vue
-->
<template>
  <div  id="roll">
    <img height="270" src="../../assets/img/login/rootscreen.png" />
    <div id="box">
      <div class="loading">
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bootscreen',
  data() {
    return {
      fullscreenLoading: false,
    };
  },
 
};
</script>

<style scoped>
/* 这个 我reset过啦  margin:0这些*/
#roll{
  height: 100vh;
  width: 100vw;
  background-color: black;
}
#box {
  position: fixed;
  left: 50%;
  top: 550px;
  margin-left: -100px;
}
img {
  position: fixed;
  left: 50%;
  top: 250px;
  margin-left: -243px;
}

.loading div {
  margin: auto;
  position: fixed;
  width: 60px;
  height: 60px;
  display: block;
  z-index: 1;
}

.loading span {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 50%;
}

.loading span:after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 8px;
  height: 8px;
  background: var(--main, #adacac88);
  border-radius: 50%;
}

.loading span:nth-child(1) {
  animation: i1 5.5s 0.2s infinite;
}

.loading span:nth-child(2) {
  animation: i2 5.5s 0.4s infinite;
}

.loading span:nth-child(3) {
  animation: i3 5.5s 0.6s infinite;
}

.loading span:nth-child(4) {
  animation: i4 5.5s 0.8s infinite;
}

.loading span:nth-child(5) {
  animation: i5 5.5s 1s infinite;
}

.loading span:nth-child(6) {
  animation: i6 5.5s 1.2s infinite;
}

@keyframes i1 {
  0% {
    opacity: 1;
    transform: rotate(190deg);
    animation-timing-function: cubic-bezier(0.29, 0.44, 0.32, 0.74);
  }
  7% {
    opacity: 1;
    transform: rotate(300deg);
    animation-timing-function: linear;
  }
  30% {
    opacity: 1;
    transform: rotate(450deg);
    animation-timing-function: cubic-bezier(0.53, 0.27, 0.37, 0.81);
  }
  39% {
    opacity: 1;
    transform: rotate(645deg);
    animation-timing-function: linear;
  }
  63% {
    opacity: 1;
    transform: rotate(800deg);
    animation-timing-function: cubic-bezier(0.5, 0.32, 0.82, 0.54);
  }
  68% {
    opacity: 1;
    transform: rotate(920deg);
    animation-timing-function: ease-in;
  }
  69% {
    opacity: 0;
    transform: rotate(930deg);
  }
}
@keyframes i2 {
  0% {
    opacity: 1;
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.29, 0.44, 0.32, 0.74);
  }
  7% {
    opacity: 1;
    transform: rotate(300deg);
    animation-timing-function: linear;
  }
  30% {
    opacity: 1;
    transform: rotate(450deg);
    animation-timing-function: cubic-bezier(0.53, 0.27, 0.37, 0.81);
  }
  39% {
    opacity: 1;
    transform: rotate(645deg);
    animation-timing-function: linear;
  }
  63% {
    opacity: 1;
    transform: rotate(800deg);
    animation-timing-function: cubic-bezier(0.5, 0.32, 0.82, 0.54);
  }
  68% {
    opacity: 1;
    transform: rotate(910deg);
    animation-timing-function: ease-in;
  }
  69% {
    opacity: 0;
    transform: rotate(920deg);
  }
}
@keyframes i3 {
  0% {
    opacity: 1;
    transform: rotate(170deg);
    animation-timing-function: cubic-bezier(0.29, 0.44, 0.32, 0.74);
  }
  7% {
    opacity: 1;
    transform: rotate(300deg);
    animation-timing-function: linear;
  }
  30% {
    opacity: 1;
    transform: rotate(450deg);
    animation-timing-function: cubic-bezier(0.53, 0.27, 0.37, 0.81);
  }
  39% {
    opacity: 1;
    transform: rotate(645deg);
    animation-timing-function: linear;
  }
  63% {
    opacity: 1;
    transform: rotate(800deg);
    animation-timing-function: cubic-bezier(0.5, 0.32, 0.82, 0.54);
  }
  68% {
    opacity: 1;
    transform: rotate(900deg);
    animation-timing-function: ease-in;
  }
  69% {
    opacity: 0;
    transform: rotate(910deg);
  }
}
@keyframes i4 {
  0% {
    opacity: 1;
    transform: rotate(160deg);
    animation-timing-function: cubic-bezier(0.29, 0.44, 0.32, 0.74);
  }
  7% {
    opacity: 1;
    transform: rotate(300deg);
    animation-timing-function: linear;
  }
  30% {
    opacity: 1;
    transform: rotate(450deg);
    animation-timing-function: cubic-bezier(0.53, 0.27, 0.37, 0.81);
  }
  39% {
    opacity: 1;
    transform: rotate(645deg);
    animation-timing-function: linear;
  }
  63% {
    opacity: 1;
    transform: rotate(800deg);
    animation-timing-function: cubic-bezier(0.5, 0.32, 0.82, 0.54);
  }
  68% {
    opacity: 1;
    transform: rotate(890deg);
    animation-timing-function: ease-in;
  }
  69% {
    opacity: 0;
    transform: rotate(900deg);
  }
}
@keyframes i5 {
  0% {
    opacity: 1;
    transform: rotate(150deg);
    animation-timing-function: cubic-bezier(0.29, 0.44, 0.32, 0.74);
  }
  7% {
    opacity: 1;
    transform: rotate(300deg);
    animation-timing-function: linear;
  }
  30% {
    opacity: 1;
    transform: rotate(450deg);
    animation-timing-function: cubic-bezier(0.53, 0.27, 0.37, 0.81);
  }
  39% {
    opacity: 1;
    transform: rotate(645deg);
    animation-timing-function: linear;
  }
  63% {
    opacity: 1;
    transform: rotate(800deg);
    animation-timing-function: cubic-bezier(0.5, 0.32, 0.82, 0.54);
  }
  68% {
    opacity: 1;
    transform: rotate(880deg);
    animation-timing-function: ease-in;
  }
  69% {
    opacity: 0;
    transform: rotate(880deg);
  }
}
@keyframes i6 {
  0% {
    opacity: 1;
    transform: rotate(140deg);
    animation-timing-function: cubic-bezier(0.29, 0.44, 0.32, 0.74);
  }
  7% {
    opacity: 1;
    transform: rotate(300deg);
    animation-timing-function: linear;
  }
  30% {
    opacity: 1;
    transform: rotate(450deg);
    animation-timing-function: cubic-bezier(0.53, 0.27, 0.37, 0.81);
  }
  39% {
    opacity: 1;
    transform: rotate(645deg);
    animation-timing-function: linear;
  }
  63% {
    opacity: 1;
    transform: rotate(800deg);
    animation-timing-function: cubic-bezier(0.5, 0.32, 0.82, 0.54);
  }
  68% {
    opacity: 1;
    transform: rotate(870deg);
    animation-timing-function: ease-in;
  }
  69% {
    opacity: 0;
    transform: rotate(880deg);
  }
}
</style>
