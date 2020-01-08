'use strict';

if (require.main !== module) {
    require('update-electron-app')({
        logger: require('electron-log')
    })
}

const path = require('path')
const { app, BrowserWindow } = require('electron')

const debug = /--debug/.test(process.argv[2])

if (process.mas) app.setName('application')

let mainWindow = null

function initialize () {
    
    function createWindow () {
        const windowOptions = {
            width: 768,
            minWidth: 320,
            height: 600,
            center: true,
            resizable: false,
            title: 'application'
        }

        if (process.platform === 'linux') {
            windowOptions.icon = path.join(__dirname, '/')
        }

        mainWindow = new BrowserWindow(windowOptions)
        mainWindow.setMenuBarVisibility(false)
        mainWindow.loadURL(path.join('file://', __dirname, '/src/public/index.html'))

        if (debug) {
            mainWindow.webContents.openDevTools()
            mainWindow.maximize()
            require('devtron').install()
        }

        mainWindow.on('closed', () => mainWindow = null)
    }

    app.on('ready', () => createWindow())
    
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })
    
    app.on('activate', () => {
        if (mainWindow === null) createWindow()
    })
}

initialize()