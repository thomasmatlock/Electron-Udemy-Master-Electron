// Modules
// pull some modules off the electron package: app is the app itself(nodejs main process, and BrowserWindow is the Renderer)
const { app, BrowserWindow } = require('electron');

// this checks if its ready after 2 secs
// setTimeout(() => {
//     console.log(`Checking ready: ${app.isReady()}`); // logs whether app is ready or not
// }, 2000);

let mainWindow; // Keep a global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.

// Create a new BrowserWindow when `app` is ready // nodeIntegration set to true allows us to access nodejs process in renderer
// with node integration, we can also set node js to run in the browser window, through scripts, using nodes require function in the html document
// we require in renderer.js, which allows JS to run in browser window, which is no different from standard JS in a standard browser, except for having access to node.js
function createWindow() {
    // console.log('creating window...again');

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html'); // Load index.html into the new BrowserWindow

    mainWindow.webContents.openDevTools(); // Open DevTools - Remove for PRODUCTION!

    // Listen for window being closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('before-quit', event => {
    console.log('Preventing app from quitting');
    event.preventDefault(); // if you wanna save a users work, check out section 8 of class. this is supposed to make the thing not close but Ctrl Q doesnt seem to work
});
// app.on('browser-window-blur', () => {
//     console.log('App unfocused');
// });
// quits if unfocused
app.on('browser-window-blur', () => {
    // console.log('App unfocused');
    setTimeout(() => {
        app.quit();
    }, 500);
});
app.on('browser-window-focus', () => {
    console.log('App focused');
});

// Electron `app` is ready
app.on('ready', () => {
    console.log('App is ready');
    console.log(app.getPath('home')); // https://www.electronjs.org/docs/api/app#appgetpathname for more
    console.log(app.getPath('userData')); // default storage location for all user stored data, json files, etc. you have a consistent path and wont run into permission issues
    createWindow();
}); // this is app/nodejs main process listening for the app to ready event, then creates a window (renderer) instance

// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
    if (mainWindow === null) createWindow();
});

// console.log(`hello`);
