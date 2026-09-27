const { contextBridge, ipcMain } = require('electron');

// Безопасное предоставление API для renderer процесса
contextBridge.exposeInMainWorld('electronAPI', {
  // Работа с файлами
  openFile: async () => {
    return new Promise((resolve) => {
      ipcMain.once('file-opened', (event, data) => {
        resolve(data);
      });
    });
  },

  // Работа с системой
  getAppVersion: () => {
    const { app } = require('electron');
    return app.getVersion();
  },

  // Запуск девтулс
  openDevTools: () => {
    const { BrowserWindow } = require('electron');
    const win = BrowserWindow.getFocusedWindow();
    if (win) win.webContents.openDevTools();
  },

  // Минимизация окна
  minimizeWindow: () => {
    const { BrowserWindow } = require('electron');
    const win = BrowserWindow.getFocusedWindow();
    if (win) win.minimize();
  },

  // Максимизация окна
  maximizeWindow: () => {
    const { BrowserWindow } = require('electron');
    const win = BrowserWindow.getFocusedWindow();
    if (win) {
      if (win.isMaximized()) {
        win.unmaximize();
      } else {
        win.maximize();
      }
    }
  },

  // Закрытие окна
  closeWindow: () => {
    const { BrowserWindow } = require('electron');
    const win = BrowserWindow.getFocusedWindow();
    if (win) win.close();
  },

  // Проверка платформы
  getPlatform: () => {
    return process.platform;
  }
});
