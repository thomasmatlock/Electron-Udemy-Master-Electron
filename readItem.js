/* eslint-disable no-restricted-syntax */
/* eslint-disable no-labels */
const { BrowserWindow } = require('electron');

//Offscreen browser window
let offscreenWindow;

//electronjs.orghttps://electronjs.orghttps://electronjs.org

// Exported readItem function
https: module.exports = (url, callback) => {
    // Create  offscreen window
    offscreenWindow = new BrowserWindow({
        width: 500,
        height: 500,
        show: false,
        webPreferences: {
            offscreen: true
        }
    });
    // Load item url
    offscreenWindow.loadURL(url);

    // wait for content to finish loading
    offscreenWindow.webContents.on('did-finish-load', e => {
        // Get page title
        let title = offscreenWindow.getTitle();
        // get screenshot for content thumbnail
        offscreenWindow.webContents.capturePage().then(image => {
            // Get image as a dataURL
            let screenshot = image.toDataURL();

            // Execute callback with new item object
            callback({ title, screenshot, url });

            // Clean up offscreen window
            offscreenWindow.close();
            offscreenWindow = null;
        });
    });
};