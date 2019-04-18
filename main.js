const {app, BrowserWindow, ipcMain} = require('electron')

function createWindow() {
  let window = new BrowserWindow({title: 'The Spectre', width: 800, height: 600})
  window.loadFile('index.html')

  // // Opens dev tools (inspect page)
  // window.webContents.openDevTools()
  
  // // For closing a single window. 
  // // Not needed, because there will only be one window.
  // window.on('closed', () => {
  //   window = null
  // })

  window.on('ready-to-show', () => {
    window.show()
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // Explicitly close the program if on macOS
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// This should not need to run, because program 
// should not be running if there are no windows.
app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})

