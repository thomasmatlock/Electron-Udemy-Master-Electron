/* eslint-disable one-var */
// Modules
// pull some modules off the electron package: app is the app itself(nodejs main process, and BrowserWindow is the Renderer)
const {
    app,
    BrowserWindow,
    session,
    screen,
    webContents,
    DownloadItem,
    dialog
} = require('electron');
const windowStateKeeper = require('electron-window-state'); // our browser-window always reopens in same position/size unless we manage it by this simple package, we can save past positions or sizes and use them. it applies only for active sessions, unless you persist elsewhere through local storage

// let mainWindow, secWindow; // Keep a global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    const displays = screen.getAllDisplays();
    const screenArr = [displays[0], displays[1], displays[2]];
    const [screenC, screenR, screenL] = screenArr; // destructure screens pulled off screenArr
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
    mainWindow.loadFile('index.html'); // Load index.html into the new BrowserWindow
    // mainWindow.loadURL('https://warpdownload.com'); //alternate: 'https://httpbin.org/basic-auth/user/passwd'
    // mainWindow.loadURL('https://particle-love.com/'); //alternate: 'https://httpbin.org/basic-auth/user/passwd'

    ////////////////////////////////////////////////////////////////////
    //  browser-window-instance LISTENERS
    mainWindow.on('ready-to-show', () => {
        // console.log('mainWindow ready');
    });

    const wc = mainWindow.webContents;
    // wc.openDevTools(); // Open DevTools - Remove for PRODUCTION!

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

// winState
// const winState = windowStateKeeper({
//     defaultWidth: 1600,
//     defaultHeight: 900,
//     x: 4000,
//     y: 400
// });
// winState.manage(mainWindow); // manages user set location/size of window

//  browser-window-instance LISTENERS
// mainWindow.on('focus', () => {
//     // console.log('MainWindow focused');
// });
// mainWindow.on('maximize', () => {
//     // console.log('MainWindow maximized');
// });
// mainWindow.on('minimize', () => {
//     // console.log('MainWindow minimized');
// });
// mainWindow.on('closed', () => {
//     mainWindow = null; // Listen for window being closed and garbage collects it
// });

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

// close secondary window after a brief wait
// setTimeout(() => {
//     // secWindow.show();
//     setTimeout(() => {
//         // secWindow.hide(); // hides window without destroying it
//         // secWindow.close(); // closes window and destroys it
//         // secWindow = null;
//     }, 2000);
// }, 1000);

////////////////////////////////////////////////////////////////////
// APP LISTENERS (main node process)
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
// secWindow.on('closed', () => {
//     secWindow = null; // Listen for window being closed and garbage collects it
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

// SESSION
// const ses = session.defaultSession; // this is default session
// const customSes = session.fromPartition('persist:part1'); // create custom session from session obj, pass it a name, and in browser window creation webPreferences: set session: customSes
// const ses = mainWindow.webContents.session; // this is default session
// const ses = mainWindow.webContents.session; // this persists throughout all browser instances
// const defaultSes = session.defaultSession; // basically just the default session
// console.log(Object.is(ses, customSes)); // checks if sessions between different browsers are same. Object.is = Returns true if the values are the same value, false otherwise. this shows that the session is the same
// ses.clearStorageData(); // clear session storage
// customSes.clearStorageData();

// COOKIES
// // here we create a cookie obj with an expiration date to make it persist throughout sessions
// const cookie = {
//     url: 'https://myappdomain.com',
//     name: 'cookie1',
//     value: 'electron',
//     expirationDate: 1625540817.817365
// };

// // set cookie - note, this doesn't persist throughout sessions without an expiration date, which you add to cookie creation object
// ses.cookies.set(cookie, err => {
//     console.log('cookie1 set');
// });
// ses.cookies.remove('http://myappdomain.com', 'cookie1', err => {
//     console.log('Cookie removed');
// }); // 2 args: url, name

// // note, getCookies with an empty filter object passed to the get method, will return ALL cookies. pass a keyvalue pair to it to return a specific cookie
// const getCookies = () => {
//     // console.log('logging cookies');
//     ses.cookies
//         // .get({ name: 'cookie1' })
//         .get({})
//         .then(cookies => {
//             console.log(cookies);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };

// mainWindow.webContents.on('did-finish-load', e => {
//     // console.log('Finished load, running getCookies()');
//     getCookies();
// });

// session:DownloadItem
// // this uses session to listen for download initializes
// ses.on('will-download', (e, downloadItem, webContents) => {
//     console.log('Download started...');
//     const fileName = downloadItem.getFilename();
//     const fileSize = downloadItem.getTotalBytes();
//     downloadItem.setSavePath(`${app.getPath('desktop')}\\${fileName}`); // set save dir to desktop
//     // downloadItem.setSaveDialogOptions(options);
//     // downloadItem.cancel();
//     // console.log(downloadItem.getState());
//     // PROGRESS FOR DOWNLOADS
//     downloadItem.on('updated', (e, state) => {
//         const received = downloadItem.getReceivedBytes();
//         // console.log(received);
//         if (state === 'progressing' && received) {
//             // if received is true AND state is 'progressing' it will log the download progress
//             const progress = Math.round((received / fileSize) * 100); // received / fileSize is percentage, rounded, multipled
//             // here we make make a progress visual, so cool!
//             webContents.executeJavaScript(
//                 `window.progress.value = ${progress}`
//             );
//             // console.log(progress);
//         }
//     });
// });
// ses = session.defaultSession;

// DIALOG
// // to make a dialiag window as its own standalone window, simply specify the window as arg1. otherwise, its a child to the parent window
// // IMPORTANT, course has a callback? but its a then/catch block
// // please note all the stuff in course DOES NOT  work without then/catch blocks. he uses callbacks, but none of them worked
// wc.on('did-finish-load', () => {
//     //
//     // dialog
//     //     .showOpenDialog(
//     //         // mainWindow, // attached to window/app
//     //         {
//     //             defaultPath: app.getPath('desktop'),
//     //             buttonLabel: 'Select a photo',
//     //             properties: [
//     //                 'multiSelections',
//     //                 'createDirectory',
//     //                 'openFile'
//     //                 // 'openDirectory'
//     //             ]
//     //         }
//     //     )
//     //     .then(result => {
//     //         if (result.canceled) {
//     //             console.log('Dialog canceled');
//     //         } else {
//     //             console.log(result.filePaths);
//     //             // console.log(result.canceled);
//     //         }
//     //     })
//     //     .catch(err => console.log(err));
//     //
//     // dialog.showSaveDialog({}, filename => {
//     //     console.log(filename);
//     // });
//     //
//     const answers = ['Yeah', 'Naw', 'Maybe'];
//     dialog
//         .showMessageBox({
//             title: 'The Big Message Box Title',
//             message: 'This is a message',
//             detail: 'Message details',
//             buttons: answers
//         })
//         .then(response => {
//             const res = answers[response.response];
//             console.log(res);
//         })
//         .catch(err => console.log(err));
// });
