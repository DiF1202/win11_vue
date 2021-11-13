const baseSize = 32;

// 设置rem 函数
function setRem() {
  // 设计稿通常是二倍图 750，每份font-size: 32, 开发视图375，每份font-size: 16
  const scale = document.documentElement.clientWidth / 750;
  // 给根元素设置font-size
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px';
}

// 初始化
setRem();

window.onresize = function () {
  setRem();
}