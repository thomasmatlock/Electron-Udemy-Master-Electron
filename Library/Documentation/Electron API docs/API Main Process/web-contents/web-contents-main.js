// https://www.electronjs.org/docs/api/web-contents#webcontents
// Render and control web pages.
// Process: Main

// webContents is an EventEmitter. It is responsible for rendering and controlling a web page and is a property of the BrowserWindow object. An example of accessing the webContents object:

const { BrowserWindow } = require('electron')

let win = new BrowserWindow({ width: 800, height: 1500 })
win.loadURL('http://github.com')

let contents = win.webContents
console.log(contents)