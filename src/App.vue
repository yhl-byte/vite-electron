<!--
 * @Author: yhl
 * @Date: 2023-01-18 13:59:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-18 14:57:05
 * @FilePath: /electron-vite/src/App.vue
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import fs from "fs"
import { ipcRenderer } from "electron"
import { onMounted } from "vue"
onMounted(() => {
  console.log(fs.writeFileSync)
  console.log(ipcRenderer)
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    111111
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
