/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable one-var */
// Modules
// pull some modules off the electron package: app is the app itself(nodejs main process, and BrowserWindow is the Renderer)
const electron = require('electron');
const fs = require('fs');
const urls = require('./url-list');
const {
    app,
    BrowserWindow,
    session,
    screen,
    clipboard,
    webContents,
    DownloadItem,
    ipcMain,
    dialog,
    globalShortcut,
    Menu,
    MenuItem,
    Tray,
    powerMonitor,
    remote
} = electron; // we have to do this weird require electron twice if we use powerMonitor, then we can use powerMonitor directly from the electron module/ object
// const windowStateKeeper = require('electron-window-state'); // our browser-window always reopens in same position/size unless we manage it by this simple package, we can save past positions or sizes and use them. it applies only for active sessions, unless you persist elsewhere through local storage
const mainMenu = require('./mainMenu');
const DisplayController = require('./displayController');

//////////////////////////////////////////////////////////////////////////////////////////////////
// nativeImage
// ---
ipcMain.handle('app-path', () => {
    // let path = app.getPath('desktop');
    // console.log(path);
    return app.getPath('desktop');
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// clipboard
// ---
clipboard.writeText('Hello from the main process');

// let mainWindow, secWindow; // Keep a global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.
// let mainWindow, displays, devScreen, tray, test;.
let mainWindow, displays, tray, test;
// let displays = null;

app.setAppUserModelId(process.execPath); // for notifications to work in dev mode

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Features & Techniques: Offscreen rendering
// ---
// app.disableHardwareAcceleration();
// also set offscreen: true in webPreferences
// also use loadURL instead of a local file
// set show: false in mainWindow
// mainWindow.close() on 'did-finish-load'

// this way we retrieve the windowTitle, without ever showing the window. This is essentially a method for doing something invisibly
// But 99% of use cases of offscreen rendering is to get rendered versions of the content
// listen for 'paint' event to do this

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ipcInvoke & Handle
// ---
// async function askFruit() {
//     let fruits = ['apple', 'banana', 'orange'];
//     let choice = await dialog.showMessageBox({
//         message: 'Pick a fruit',
//         buttons: fruits
//     });
//     return fruits[choice.response];
// }

// ipcMain.handle('ask-fruit', e => {
// dont use
//     // listener method
//     // askFruit().then(answer => {
//     //     e.reply('answer-fruit', answer);
//     // });

// use
//     // handler method
//     // return askFruit(); // returns a promise  to the renderer, so we handle the promise in the renderer side of things
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Process
// ---
// console.log(process.type);
// console.log(process.getCPUUsage());

const trayMenu = Menu.buildFromTemplate([
    { label: 'Item 1' },
    { role: 'quit' },
    { role: 'quit' }
]);

function createTray() {
    tray = new Tray('./build/favicon2_blue_1024x1024.png'); // you can prefix Template (mac only) or suffix @2x/@3x for icons, see docs
    tray.setToolTip('Tray details'); // hover toolTip
    tray.on('click', e => {
        if (e.shiftKey) {
            app.quit();
        } else {
            mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
        }
    });
    tray.setContextMenu(trayMenu);
}

function setupDisplays() {
    displays = screen.getAllDisplays();
    // console.log(displays);
    test = 1;
    if (displays.length == 1) {
        devScreen = displays[0];
    } else {
        devScreen = displays[1];
    }
}

function createWindow() {
    // console.log(displays.winDefaults.widthByScreen);
    console.log(displays.usePrimaryMonitor);

    // let usePrimaryMonitor;
    // devScreen.size.height >= 1080 ?
    //     (usePrimaryMonitor = false) :
    //     (usePrimaryMonitor = true);
    // const xAdditive = usePrimaryMonitor ? 0 : 2500;
    // const yAdditive = usePrimaryMonitor ? 0 : 250;
    // const winDefaults = {
    //     height: Math.round(devScreen.bounds.height * 0.8),
    //     widthByScreen: Math.round(devScreen.bounds.width * 0.7),
    //     x: Math.round(devScreen.bounds.width * 0.3) + xAdditive,
    //     y: Math.round(devScreen.bounds.height * 0.1) + yAdditive
    // };
    // console.log(devScreen );

    ////////////////////////////
    // ipcInvoke & Handle
    // allows similar communication to remote without actually using remote
    // lets say we want to invoke a dialog from the browser instance , but we have a strict policy to not use the remote module
    // remember only stuff from the renderer.js logged from console actually logs to the application, everything else we log is logged to node node console
    // setTimeout(() => {
    //     askFruit().then(answer => {
    //         console.log(answer);
    //     });
    // }, 2000);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Shell
    // ---
    // shell allows the application to open resources on a users machine with the default application for that type of resource
    // resources are files or URL's

    mainWindow = new BrowserWindow({
        // width: winState.width,
        // height: winState.height,
        // width: winDefaults.widthMain,
        width: displays.winDefaults.widthByScreen,
        height: displays.winDefaults.height,
        minWidth: 640, // min width so you cant shrink window too small
        minHeight: 480,
        x: displays.winDefaults.x,
        y: displays.winDefaults.y,
        // x: winDefaults.x,
        // y: winState.y,
        darkTheme: true,
        // show: false, // use for offscreen rendering
        // skipTaskbar: true, // REMOVE FOR PRODUCTION (DEV MODE ONLY)
        // frame: false, // this eliminates frame around window, like min,max,close etc. however, this makes it difficult to drag the window around. however putting         <body style="user-select: none; -webkit-app-region: drag;"> in the html, makes nothing in the html selectable. before you just tried to drag and the stuff got highlighted
        // titleBarStyle: 'hidden', // if we dont want to remove everything of the window frame, we could just remove the titlebar
        // backgroundColor: '#ff8500' // use the same color as your html file is, the main window will display this until html fully loads. This is a little better than making your app hang for a second until the html loads, then displaying the window
        // show: false // this holds showing the window instance until the html file is loaded and ready-to-show event fires
        webPreferences: {
            // offscreen: true, // this is only used in conjunction with app.disableHardwareAcceleration()
            nodeIntegration: true, // this allows us to use node commands, regardless of being in a browser environment
            // nodeIntegration: false, // false only for preload scripts section.
            // preload: __dirname + '/preload.js', // this allows us to set nodeIntegration false but still run scripts from the preload file
            // worldSafeExecuteJavaScript: true, // removes Electron Security Warning (Insecure Content-Security-Policy)
            enableRemoteModule: true // this allows us an insecure, yet handy method to talk between node and browser instances. it mimics ipcMain/renderer without all the channels
        }
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Progress Bar
    // make sure skipTaskbar is false for this to work
    // this is very useful for displaying to user the download progress on taskbar
    // ---
    let progress = 0.01;
    let progressInterval = setInterval(() => {
        mainWindow.setProgressBar(progress); // arg1 is 0-1
        if (progress <= 1) {
            progress += 0.01;
        } else {
            mainWindow.setProgressBar(-1); // arg1 if negative, removes the progress bar
            clearInterval(progressInterval);
        }
    }, 15);

    mainWindow.loadFile('main.html'); // Load index.html into the new BrowserWindow
    // mainWindow.loadURL(urls[1]); // use this to test offscreen rendering

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  browser-window-instance LISTENERS
    mainWindow.on('ready-to-show', () => {
        // console.log('mainWindow ready');
    });
    mainWindow.on('closed', () => {
        // mainWindow = null;
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Main Process API, PowerMonitor
    electron.powerMonitor.on('resume', e => {
        if (!mainWindow) {
            console.log('Resume');
            createWindow();
        }
    });
    electron.powerMonitor.on('suspend', e => {
        console.log('Saving some data before computer suspends operation....');
    });

    const wc = mainWindow.webContents;
    wc.openDevTools(); // Open DevTools - Remove for PRODUCTION!

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // offscreen rendering
    // ---
    // paint is an event that fires multiple times during a page load, each time the content rendering changes
    // for exmaple, paint fires multiple times when loading content
    // dirty is the size and bounds of the event that was rendered offscreen
    // image is a nativeimage of the offscreen rendered content

    // let i = 1; // counter set to 1
    // wc.on('paint', (e, dirty, image) => {
    // let screenshot = image.toPNG();
    // fs.writeFile(
    //     app.getPath('desktop') + `/screenshot_${i}.png`,
    //     screenshot,
    //     console.log
    // ); // arg1 path, arg2 file, arg3 error callback (just pass it console.log, guess that works)
    // i++; // increment each iteration
    // });
    // wc.on('did-finish-load', e => {
    // console.log(mainWindow.getTitle());

    // mainWindow.close();
    // mainWindow = null;
    // });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Shared API: Process
    // here are able to listen for a crash then reboot the webContents
    // wow this is actually really useful. This basically prevents us ever having a crashing app. Allthough its better to debug, cuz method is crude and last resort, good code is still important
    // ---
    // wc.on('crashed', () => {
    //     setTimeout(() => {
    //         mainWindow.reload();
    //     }, 1000);
    // });

    // Menu.setApplicationMenu(mainMenu); // set the menu object we created to the menu
    // webframe:
    // this is easy browserWindow is the browser window instance, webContents are the contents displayed within it
    // webFrame is the "frame" in which the browser loads its web contents
    // browserWindow is the instance itself, the renderer process itself, and is responsbile for everything we see when opening the window, and is controlled by the main process
    // everything inside the browserWindow, like the webFrame and webContents, are controlled by the browserWindow instance
    // meaning the browserWindow instance creates the webFrame in wihch to load its webContents
    // webFrame is less used than webContents, but nonetheless can be used to affect the user experience
    // some webFrame methods are webFrame.setZoomLevel, setZoomFactor, insert || remove CSS, etc

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ipcMain and ipcRenderer
    // here we can send a message to our webContents instance, but just make it finishes loading first
    //---
    wc.on('did-finish-load', e => {
        console.log();
        wc.send('mailbox', {
            first: 'Tom',
            money: 100,
            list: ['bed', 'chair', 'couch']
        });
    });

    wc.on('dom-ready', () => {
        // console.log('MainWindow finished loading'); //  listening for webContents events firing
    });
    wc.on('page-title-updated', () => {
        const url = wc.getURL();
        console.log(`Navigated to ${url}`);
        if (!url) {
            asd;
        }
    });
    wc.on('before-input-event', (e, input) => {
        // console.log(`${input.key} : ${input.type}`); // e.preventDefault();
    });
    wc.on('did-start-navigation', e => {
        // console.log(`${input.key} : ${input.type}`); // e.preventDefault();
    });
    wc.on('context-menu', (e, params) => {
        // console.log(params.mediaFlags.isPaused); // damn, super cool
        // console.log(`User selected text: ${params.selectionText}`);
        // console.log(`Selection can be copied: ${params.editFlags.canCopy}`);
        contextMenu.popup({}); // for right clicks
        // const selectedText = params.selectionText;
        // wc.executeJavaScript(`alert("${selectedText}")`); // executeJavaScript is actually super useful. you can use any frontend/browser javascript with this
    });
    wc.on('closed', () => {
        mainWindow = null;
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// APP LISTENERS (main node process)
app.on('ready', () => {
    // console.log(app.getPath('home')); // https://www.electronjs.org/docs/api/app#appgetpathname for more
    // console.log(app.getPath('userData')); // default storage location for all user stored data, json files, etc. you have a consistent path and wont run into permission issues
    // setupDisplays();
    displays = new DisplayController();
    // console.log(displays.winDefaults.widthByScreen);
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ipc LISTENERS (main node process)
// async messages
ipcMain.on('channel1', (e, args) => {
    console.log(args);
    // send a response back. the sender here is the webContents instance of the sending renderer process.
    e.sender.send(
        'channel1-response',
        'Message received on channel1, thank you.'
    ); // the sender is attached to the event. you can respond with this, and pick the channel to send through
});
// sync messages (sync messages block the entire renderer process until its it receives a response)
ipcMain.on('sync-message', (e, args) => {
    console.log(args);
    e.returnValue = 'A sync response from the main process';
});

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
// some of the frame stuff needed for dragging window around, while still retaining input element interactivity and so, you need to add <style=" -webkit-app-region: no-drag;"> into the html to each element to prevent them being included in the draggability

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// APP LISTENERS (main node process)
// app.on('browser-window-blur', () => {
//     console.log('App unfocused');
// });

// mainWindow.once('ready-to-show', mainWindow.show); // displays window once html loads and is ready to show. prevents any blank judder displaying before html is fully loaded

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
//     callback('user', 'password'); // invoke callback and pass 2 basic strings to login
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
//             const progress = Math.round((received / fileSize) * 100); // received / fileSize is percentage, rounded, multiplied
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
// // to make a dialog window as its own standalone window, simply specify the window as arg1. otherwise, its a child to the parent window
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

// globalShortcut + accelerator
// // 2 args, arg1 is kb combo shortcut (the accelerator), and then the callback function to run on pressdown
// const shortcut = 'CommandOrControl+G';
// globalShortcut.register(shortcut, () => {
//     console.log(`You pressed a global shortcut, ${shortcut}`);
//     globalShortcut.unregisterAll(); // clears all global shortcuts
// });

// CONTEXT MENU
// const contextMenu = Menu.buildFromTemplate([
//     { label: 'item 1' },
//     { role: 'editMenu' }
// ]);
// wc.on('context-menu', (e) => {
//     contextMenu.popup({}); // for right clicks
// });

// TRAY