/*
 * @Author: yhl
 * @Date: 2023-01-18 13:59:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-18 15:49:13
 * @FilePath: /electron-vite/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { devPlugin, getReplacer } from "./plugins/devPlugin"
import { buildPlugin } from "./plugins/buildPlugin"
import optimizer from "vite-plugin-optimizer"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [optimizer(getReplacer()), devPlugin(), vue()],
  build: {
    rollupOptions: {
        plugins: [buildPlugin()]
    }
  }
})
