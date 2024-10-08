const { app, BrowserWindow } = require('electron');

  function createWindow() {
      const win = new BrowserWindow({
          width: 800,
          height: 600,
          webPreferences: {
              preload: path.join(__dirname, 'preload.js')
          }
      });
      win.loadFile('public/index.html');
  }

  app.whenReady().then(createWindow);