/* eslint-disable one-var */
// Modules
// pull some modules off the electron package: app is the app itself(nodejs main process, and BrowserWindow is the Renderer)
const {
    app,
    BrowserWindow,
    session,
    screen,
    webContents
} = require('electron');
const windowStateKeeper = require('electron-window-state'); // our browser-window always reopens in same position/size unless we manage it by this simple package, we can save past positions or sizes and use them. it applies only for active sessions, unless you persist elsewhere through local storage

let mainWindow, secWindow; // Keep a global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.

function createWindow() {
    // const customSes = session.fromPartition('persist:part1'); // create custom session from session obj, pass it a name, and in browser window creation webPreferences: set session: customSes
    const ses = session.defaultSession; // this is default session

    const getCookies = () => {
        ses.cookies.get({}, (err, cookies) => {
            console.log(cookies);
        });
    };

    const displays = screen.getAllDisplays();
    const screenArr = [displays[0], displays[1], displays[2]];
    const [screenC, screenR, screenL] = screenArr; // destructure screens off screenArr
    const winState = windowStateKeeper({
        defaultWidth: 1600,
        defaultHeight: 900,
        x: 4000,
        y: 400
    });
    const winDefaults = {
        height: 800,
        widthMain: 1000,
        widthSec: 800,
        widthByScreen: screenR.bounds.width * 0.6
    };

    mainWindow = new BrowserWindow({
        // width: winState.width,
        // height: winState.height,
        // width: winDefaults.widthMain,
        width: winDefaults.widthByScreen,
        height: winDefaults.height,
        minWidth: 640, // min width so you cant shrink window too small
        minHeight: 480,
        x: 3200,
        y: 400,
        // x: winState.x,
        // y: winState.y,
        darkTheme: true,
        // frame: false, // this eliminates frame around window, like min,max,close etc. however, this makes it difficult to drag the window arouind. however putting         <body style="user-select: none; -webkit-app-region: drag;"> in the html, makes nothing in the html selectable. before you just tried to drag and the stuff got highlighted
        // titleBarStyle: 'hidden', // if we dont want to remove everything of the window frame, we could just remove the titlebar
        // backgroundColor: '#ff8500' // use the same color as your html file is, the main window will display this until html fully loads. This is a little better than making your app hang for a second until the html loads, then displaying the window
        // show: false // this holds showing the window instance until the html file is loaded and ready-to-show event fires
        webPreferences: {
            nodeIntegration: true
        }
    });
    // secWindow = new BrowserWindow({
    //     // width: winDefaults.widthMain,
    //     width: winDefaults.widthByScreen,
    //     height: winDefaults.height,
    //     x: 4200,
    //     y: 400,
    //     parent: mainWindow, // this sets this as a child of the main window, ie, close the main window, and the child closes too
    //     // modal: true, // this makes the parent window unusable until the child window is dealt with
    //     // backgroundColor: '#ff8500', // use the same color as your html file is, the main window will display this until html fully loads. This is a little better than making your app hang for a second until the html loads, then displaying the window
    //     // show: false // this holds showing the window instance until the html file is loaded and ready-to-show event fires
    //     webPreferences: {
    //         nodeIntegration: true,
    //         partition: 'persist:part1' // this is step 2 to session persisting aka for syncing between devices. step 1 is creating it
    //     }
    // });

    // mainWindow.loadFile('index.html'); // Load index.html into the new BrowserWindow
    // mainWindow.loadURL('https://httpbin.org/basic-auth/user/passwd');
    mainWindow.loadURL('https://github.com');
    // secWindow.loadFile('index.html'); // Load index.html into the new BrowserWindow

    // getCookies()

    // winState.manage(mainWindow); // manages user set location/size of window

    ////////////////////////////////////////////////////////////////////
    //  browser-window-instance LISTENERS
    // mainWindow.on('did-finish-load', e => {
    //     console.log('Running getCookies()');
    //     getCookies(e);
    // });
    mainWindow.webContents.on('did-finish-load', e => {
        console.log('Running getCookies()');
        getCookies();
    });
    mainWindow.on('ready-to-show', () => {
        // console.log('mainWindow ready');
    });
    mainWindow.on('focus', () => {
        // console.log('MainWindow focused');
    });
    mainWindow.on('maximize', () => {
        // console.log('MainWindow maximized');
    });
    mainWindow.on('minimize', () => {
        // console.log('MainWindow minimized');
    });
    mainWindow.on('closed', () => {
        mainWindow = null; // Listen for window being closed and garbage collects it
    });
    // secWindow.on('closed', () => {
    //     secWindow = null; // Listen for window being closed and garbage collects it
    // });

    mainWindow.webContents.openDevTools(); // Open DevTools - Remove for PRODUCTION!
    // secWindow.webContents.openDevTools(); // Open DevTools - Remove for PRODUCTION!

    // const ses = mainWindow.webContents.session; // this persists throughout all browser instances
    // const defaultSes = session.defaultSession; // basically just the default session
    // console.log(Object.is(ses, customSes)); // checks if sessions between different browsers are same. Object.is = Returns true if the values are the same value, false otherwise. this shows that the session is the same
    // ses.clearStorageData(); // clear session storage
    // customSes.clearStorageData();

    const wc = mainWindow.webContents;

    wc.on('dom-ready', () => {
        // console.log('MainWindow finished loading'); //  listening for webContents events firing
    });
    wc.on('before-input-event', (e, input) => {
        // console.log(`${input.key} : ${input.type}`); // e.preventDefault();
    });
    wc.on('context-menu', (e, params) => {
        // console.log(params.mediaFlags.isPaused); // damn, super cool
        // console.log(`User selected text: ${params.selectionText}`);
        // console.log(`Selection can be copied: ${params.editFlags.canCopy}`);
        const selectedText = params.selectionText;
        wc.executeJavaScript(`alert("${selectedText}")`); // executeJavaScript is actually super useful. you can use any frontend/browser javascript with this
    });
}

////////////////////////////////////////////////////////////////////
// APP LISTENERS (main node process)
app.on('ready', () => {
    // console.log('App is ready'); // Electron `app` is ready
    // console.log(app.getPath('home')); // https://www.electronjs.org/docs/api/app#appgetpathname for more
    // console.log(app.getPath('userData')); // default storage location for all user stored data, json files, etc. you have a consistent path and wont run into permission issues
    createWindow();
}); // this is app/nodejs main process listening for the app to ready event, then creates a window (renderer) instance
app.on('before-quit', event => {
    // console.log('Preventing app from quitting');
    // event.preventDefault(); // if you wanna save a users work, check out section 8 of class. this is supposed to make the thing not close but Ctrl Q doesn't seem to work
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit(); // Quit when all windows are closed - (Not macOS - Darwin)
});
app.on('activate', () => {
    if (mainWindow === null) createWindow(); // When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
});

////////////////////////////////////////////////////////////////////
// DEACTIVATED

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

// see https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions for all the options you can add to the window
// some of the frame stuff needed for dragging window around, while still retaining input element interactivity and so, you need to add <style=" -webkit-app-region: no-drag;"> into the html to each element to prevent them being included in the dragibility

// Create a new BrowserWindow when `app` is ready // nodeIntegration set to true allows us to access nodejs process in renderer
// with node integration, we can also set node js to run in the browser window, through scripts, using nodes require function in the html document
// we require in renderer.js, which allows JS to run in browser window, which is no different from standard JS in a standard browser, except for having access to node.js
// in this function, we assign a new electron browser window (chromium) to the main window variable which has been initialized but never declared

// webContents is what gets loaded into our window, or Chromium browser instance (browserWindow.webContents)

// do not use outdated loadURL, loadFile is the newer correct version

// secWindow = new BrowserWindow({
//     width: 640,
//     height: 480,
//     x: 4200,
//     y: 400,
//     webPreferences: {
//         nodeIntegration: true
//     },
//     parent: mainWindow, // this sets this as a child of the main window, ie, close the main window, and the child closes too
//     modal: true, // this makes the parent window unusable until the child window is dealt with
//     show: false,
//     backgroundColor: '#ff8500' // use the same color as your html file is, the main window will display this until html fully loads. This is a little better than making your app hang for a second until the html loads, then displaying the window
//     // show: false // this holds showing the window instance until the html file is loaded and ready-to-show event fires
// });

// close secondary window after a brief wait
// setTimeout(() => {
//     // secWindow.show();
//     setTimeout(() => {
//         // secWindow.hide(); // hides window without destroying it
//         // secWindow.close(); // closes window and destroys it
//         // secWindow = null;
//     }, 2000);
// }, 1000);

// app.on('browser-window-blur', () => {
//     console.log('App unfocused');
// });

// mainWindow.once('ready-to-show', mainWindow.show); // displays window once html loads and is ready to show. prevents any blank jutter displaying before html is fully loaded

// secondary window playing around
// secWindow.on('focus', () => {
//     console.log('secWindow focused');
// });
// secWindow.on('closed', () => {
//     // mainWindow.maximize();
// });

// app.on('browser-window-focus', () => {
//     console.log('App focused');
// });
// app.on('maximize', () => {
//     console.log('App maximized');
// });
// // quits if unfocused
// app.on('browser-window-blur', () => {
//     console.log('App unfocused');
//     setTimeout(() => {
//         app.quit();
//     }, 500);
// });
// app.on('browser-window-focus', () => {
//     console.log('App focused');
// });

// console.log(webContents.getAllWebContents()); // instead of webcontents from an instance, it returns an array  of all webcontents of all instances
// this is cool, you can list for webcontents events to fire, here we do a simple new blank window event
// wc.on('new-window', (e, url) => {
//     console.log(`Preventing new window for ${url}`);
//     e.preventDefault();
// });
// wc.on('login', (e, request, authInfo, callback) => {
//     console.log('Logging in...');
//     // this is great for basic auth if you want it, refer back to section 14, timestamp 13:35
//     callback('user', 'passwd'); // invoke callback and pass 2 basic strings to login
// });

// wc.on('did-navigate', (e, url, statusCode, message) => {
//     console.log(`Navigated to ${url}, with response code: ${statusCode}`);
//     console.log(message);
// });
// wc.on('media-started-playing', () => {
//     console.log('Video started.');
// });
// wc.on('media-paused', () => {
//     console.log('Video paused.');
// });
