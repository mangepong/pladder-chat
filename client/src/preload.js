// window.ipcRenderer = require('electron').ipcRenderer;
// window.remote = require('electron/remote')
const { getCurrentWindow } = require('@electron/remote')
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'remote', {
        getWindow: () => getCurrentWindow(),
        maximize: () => getCurrentWindow().maximize(),
        minimize: () => getCurrentWindow().minimize(),
        isMaximized: () => getCurrentWindow().isMaximized(),
        unmaximize: () => getCurrentWindow().unmaximize(),
    }
  )