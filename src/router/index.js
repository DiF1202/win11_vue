/*
 * @Author: your name
 * @Date: 2021-11-13 14:06:23
 * @LastEditTime: 2021-11-13 17:39:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \win11_vue\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/desktop",
  },
  {
    path: "/desktop",
    name: "desktop",
    component: () => import("../views/desktop.vue"),
  },
  {
    path: "/open",
    name: "open",
    component: () => import("../views/open.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
