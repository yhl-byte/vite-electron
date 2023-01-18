/*
 * @Author: yhl
 * @Date: 2023-01-18 16:44:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-18 16:52:32
 * @FilePath: /electron-vite/src/renderer/router.ts
 */
import * as VueRouter from "vue-router";
//路由规则描述数组
const routes = [
  { path: "/", redirect: "/WindowMain/Chat" },
  {
    path: "/WindowMain",
    component: () => import("./window/WindowMain.vue"),
    children: [
      { path: "Chat", component: () => import("./window/WindowMain/Chat.vue") },
      { path: "Contact", component: () => import("./window/WindowMain/Contact.vue") },
      { path: "Collection", component: () => import("./window/WindowMain/Collection.vue") },
    ],
  },
  {
    path: "/WindowSetting",
    component: () => import("./window/WindowSetting.vue"),
    children: [{ path: "AccountSetting", component: () => import("./window/WindowSetting/AccountSetting.vue") }],
  },
  {
    path: "/WindowUserInfo",
    component: () => import("./window/WindowUserInfo.vue"),
  },
];
//导出路由对象
export let router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});