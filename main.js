/* eslint-disable one-var */
// Modules
// pull some modules off the electron package: app is the app itself(nodejs main process, and BrowserWindow is the Renderer)
const { app, BrowserWindow } = require('electron');

///////////////////////////
// const test = require('./test');
// const Nav = require('./renderer');
// console.log(test.module.testName);
// console.log(Nav.updateActiveNav_A);
// const navController = new Nav();
// console.log(navController);
// navController.updateActiveNav_A(1);
///////////////////////////

// this checks if its ready after 2 secs
// setTimeout(() => {
//     console.log(`Checking ready: ${app.isReady()}`); // logs whether app is ready or not
// }, 2000);

let mainWindow, secondaryWindow; // Keep a global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.

// Create a new BrowserWindow when `app` is ready // nodeIntegration set to true allows us to access nodejs process in renderer
// with node integration, we can also set node js to run in the browser window, through scripts, using nodes require function in the html document
// we require in renderer.js, which allows JS to run in browser window, which is no different from standard JS in a standard browser, except for having access to node.js
// in this function, we assign a new electron browser window (chromium) to the main window variable which has been initialized but never declared

function createWindow() {
    // console.log('creating window...again');

    // see https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions for all the options you can add to the window
    // some of the frame stuff needed for dragging window around, while still retaining input element interactivity and so, you need to add <style=" -webkit-app-region: no-drag;"> into the html to each element to prevent them being included in the dragibility
    mainWindow = new BrowserWindow({
        width: 1200,
        minWidth: 640, // min width so you cant shrink window too small
        minHeight: 480,
        height: 800,
        x: 3000,
        y: 400,
        darkTheme: true,
        // frame: false, // this eliminates frame around window, like min,max,close etc. however, this makes it difficult to drag the window arouind. however putting         <body style="user-select: none; -webkit-app-region: drag;"> in the html, makes nothing in the html selectable. before you just tried to drag and the stuff got highlighted
        // titleBarStyle: 'hidden', // if we dont want to remove everything of the window frame, we could just remove the titlebar
        webPreferences: {
            nodeIntegration: true
        }
        // backgroundColor: '#ff8500' // use the same color as your html file is, the main window will display this until html fully loads. This is a little better than making your app hang for a second until the html loads, then displaying the window
        // show: false // this holds showing the window instance until the html file is loaded and ready-to-show event fires
    });
    secondaryWindow = new BrowserWindow({
        width: 640,
        height: 480,
        x: 4200,
        y: 400,
        webPreferences: {
            nodeIntegration: true
        },
        parent: mainWindow, // this sets this as a child of the main window, ie, close the main window, and the child closes too
        modal: true, // this makes the parent window unusable until the child window is dealt with
        show: false,
        backgroundColor: '#ff8500' // use the same color as your html file is, the main window will display this until html fully loads. This is a little better than making your app hang for a second until the html loads, then displaying the window
        // show: false // this holds showing the window instance until the html file is loaded and ready-to-show event fires
    });

    // do not use loadURL because its outdated, loadFile is the newer correct version
    // loadFile is used for any content that is local to our app, ie an html file, however, because the browser instance is in fact, still a webbrowser, were not limited to local content
    mainWindow.loadFile('index.html'); // Load index.html into the new BrowserWindow
    secondaryWindow.loadFile('secondary.html'); // Load index.html into the new BrowserWindow
    // mainWindow.loadURL('https://youtube.com'); // Load index.html into the new BrowserWindow

    // close secondary window after a brief wait
    setTimeout(() => {
        secondaryWindow.show();
        setTimeout(() => {
            // secondaryWindow.hide(); // hides window without destroying it
            secondaryWindow.close(); // closes window and destroys it
            secondaryWindow = null;
        }, 2000);
    }, 1000);

    // mainWindow.webContents.openDevTools(); // Open DevTools - Remove for PRODUCTION!

    // mainWindow.once('ready-to-show', mainWindow.show); // displays window once html loads and is ready to show. prevents any blank jutter displaying before html is fully loaded

    mainWindow.on('focus', () => {
        console.log('MainWindow focused');
    });

    secondaryWindow.on('focus', () => {
        console.log('secondaryWindow focused');
    });

    app.on('browser-window-focus', () => {
        console.log('App focused');
    });

    // Listen for window being closed and garbage collects it
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('before-quit', event => {
    console.log('Preventing app from quitting');
    event.preventDefault(); // if you wanna save a users work, check out section 8 of class. this is supposed to make the thing not close but Ctrl Q doesn't seem to work
});
// app.on('browser-window-blur', () => {
//     console.log('App unfocused');
// });
// quits if unfocused
app.on('browser-window-blur', () => {
    // console.log('App unfocused');
    // setTimeout(() => {
    //     app.quit();
    // }, 500);
});
app.on('browser-window-focus', () => {
    // console.log('App focused');
});

// Electron `app` is ready
app.on('ready', () => {
    console.log('App is ready');
    // console.log(app.getPath('home')); // https://www.electronjs.org/docs/api/app#appgetpathname for more
    // console.log(app.getPath('userData')); // default storage location for all user stored data, json files, etc. you have a consistent path and wont run into permission issues
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
