const {app, BrowserWindow} = require('electron')

function createWindow() {
  let window = new BrowserWindow({width: 800, height: 600})
  window.loadFile('index.html')

  window.webContents.openDevTools()
  
  // // For closing a single window. 
  // // Not needed, because there will only be one window.
  // window.on('closed', () => {
  //   window = null
  // })
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

