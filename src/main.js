/*
 * @Author: your name
 * @Date: 2021-11-13 23:50:48
 * @LastEditTime: 2021-11-19 19:15:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\main.js
 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "@/utils/px2rem.js"; // px转rem
import "element-plus/dist/index.css";
import "./assets/scss/reset.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale: zhCn })
  .mount("#app");
