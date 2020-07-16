/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// https://www.electronjs.org/docs/api/remote#methods
// The remote module provides a simple way to do inter - process communication(IPC) between the renderer process(web page) and the main process.

// In Electron, GUI - related modules(such as dialog, menu etc.) are only available in the main process, not in the renderer process.
// In order to use them from the renderer process, the ipc module is necessary to send inter - process messages to the main process.
// With the remote module, you can invoke methods of the main process object without explicitly sending inter - process messages, similar to Java's RMI. An example of creating a browser window from a renderer process:
// the remote module allows us access to all main process modules, ie everything weve covered upto section 24
// IMPORTANT, it allows us main process modules IN THE RENDERER process
// remote module just communicates with the main process from the browser instance
// this means everything we use from the main process, will persist there, which is important
const { BrowserWindow } = require('electron').remote;

const win = new BrowserWindow({ width: 800, height: 600 });
win.loadURL('https://github.com');