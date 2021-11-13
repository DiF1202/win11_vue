/*
 * @Author: your name
 * @Date: 2021-11-13 14:06:23
 * @LastEditTime: 2021-11-13 15:19:50
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/open",
  },
  {
    path: "/open",
    name: "open",
    component: () => import("../views/open.vue"),
  },
  {
    path: "/desktop",
    name: "desktop",
    component: () => import("../views/desktop.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
