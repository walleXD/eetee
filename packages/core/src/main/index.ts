import { app, BrowserWindow } from "electron"
import windowState from "electron-window-state"
import * as path from "path"
import { format as formatUrl } from "url"

const isDevelopment = process.env.NODE_ENV !== "production"

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow: any

function createMainWindow() {
  const mainWindowState = windowState({
    defaultHeight: 800,
    defaultWidth: 1000
  })
  const window = new BrowserWindow({
    height: mainWindowState.height,
    titleBarStyle: "hiddenInset",
    width: mainWindowState.width,
    x: mainWindowState.x,
    y: mainWindowState.y
  })
  mainWindowState.manage(window)

  if (isDevelopment) {
    window.webContents.openDevTools()

    require("devtron").install()
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS
    } = require("electron-devtools-installer")
    installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
      .then((name: string) => console.log(`Added Extension:  ${name}`)) // tslint:disable-line:no-console
      .catch((err: string) => console.log("An error occurred: ", err)) // tslint:disable-line:no-console
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    window.loadURL(
      formatUrl({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
      })
    )
  }

  window.on("closed", () => {
    mainWindow = null
  })

  window.webContents.on("devtools-opened", () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// quit application when all windows are closed
app.on("window-all-closed", () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

// create main BrowserWindow when electron is ready
app.on("ready", () => {
  mainWindow = createMainWindow()
})
