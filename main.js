const{app,BrowserWindow,Menu,ipcMain,} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width:1100,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    })
    win.loadFile("index.html");
    win.webContents.openDevTools();
}
app.whenReady().then(createWindow)
