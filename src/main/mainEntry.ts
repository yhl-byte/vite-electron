/*
 * @Author: yhl
 * @Date: 2023-01-18 14:22:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-18 16:06:38
 * @FilePath: /electron-vite/src/main/mainEntry.ts
 */
import { app, BrowserWindow } from "electron"
import { CustomScheme } from './CustomScheme'
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
let mainWindow: BrowserWindow

app.whenReady().then(() => {
  let config = {
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
      contextIsolation: false,
      webviewTag: true,
      spellcheck: false,
      disableHtmlFullscreenWindowResize: true
    }
  }
  mainWindow = new BrowserWindow(config)
  
  if (process.argv[2]) {
    mainWindow.loadURL(process.argv[2])
    mainWindow.webContents.openDevTools({ mode: "undocked" })
  } else {
    CustomScheme.registerScheme()
    mainWindow.loadURL(`app://index.html`)
  }
})