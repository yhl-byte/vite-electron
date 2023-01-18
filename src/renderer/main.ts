/*
 * @Author: yhl
 * @Date: 2023-01-18 13:59:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-18 16:45:34
 * @FilePath: /electron-vite/src/renderer/main.ts
 */
import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { router } from "./router"

const app = createApp(App)
app.use(router)
app.mount('#app')
