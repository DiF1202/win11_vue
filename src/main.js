/*
 * @Author: your name
 * @Date: 2021-11-13 14:06:23
 * @LastEditTime: 2021-11-13 21:21:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import {VuePlugin} from 'vuera'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/scss/reset.scss";
import "./assets/scss/tailwind.css";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
