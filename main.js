const{app,BrowserWindow,Menu,ipcMain,} = require('electron')
ipcMain.on("msg",(event,data)=>{
    console.warn(data)
    event.reply("msg","Thank you for the Data")
})

console.warn("main process")

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