/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable one-var */
// Modules
// pull some modules off the electron package: app is the app itself(nodejs main process, and BrowserWindow is the Renderer)
const electron = require('electron');

const {
    app,
    BrowserWindow,
    clipboard,
    dialog,
    DownloadItem,
    globalShortcut,
    ipcMain,
    Menu,
    MenuItem,
    powerMonitor,
    screen,
    session,
    Tray,
    remote,
    webContents,
} = electron;
const mainMenu = require('./js/mainMenu');
const DisplayController = require('./js/system/displayController');
const readItem = require('./readItem');
const appMenu = require('./menu');

let mainWindow, displays, tray, test; // Keep a global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.

// Project: Listen for new item request
ipcMain.on('new-item', (e, itemURL) => {
    // console.log(itemURL);
    readItem(itemURL, (item) => {
        e.sender.send('new-item-success', item);
    });
});

function createWindow() {
    ////////////////////////////
    // ipcInvoke & Handle
    // allows similar communication to remote without actually using remote
    // lets say we want to invoke a dialog from the browser instance , but we have a strict policy to not use the remote module
    // remember only stuff from the app.js logged from console actually logs to the application, everything else we log is logged to node node console
    // setTimeout(() => {
    //     askFruit().then(answer => {
    //         console.log(answer);
    //      });
    // }, 2000);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Shell
    // ---
    // shell allows the application to open resources on a users machine with the default application for that type of resource
    // resources are files or URL's

    mainWindow = new BrowserWindow({
        width: displays.coords.width,
        height: displays.coords.height,
        // minWidth: 640, // min width so you cant shrink window too small
        // minHeight: 480,
        minWidth: 450,
        maxWidth: 650,
        minHeight: 300,
        x: displays.coords.x,
        y: displays.coords.y,

        darkTheme: false,
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
            // preload: __dirname + '/js/preload.js', // this allows us to set nodeIntegration false but still run scripts from the preload file
            // worldSafeExecuteJavaScript: true, // removes Electron Security Warning (Insecure Content-Security-Policy)
            enableRemoteModule: true, // this allows us an insecure, yet handy method to talk between node and browser instances. it mimics ipcMain/renderer without all the channels
        },
    });

    // Create main app menu
    appMenu(mainWindow.webContents);

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

    mainWindow.loadFile('./renderer/main.html'); // Load index.html into the new BrowserWindow
    // mainWindow.loadURL(urls[1]); // use this to test offscreen rendering

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  browser-window-instance LISTENERS
    mainWindow.on('ready-to-show', () => {
        // console.log('mainWindow ready');
    });
    mainWindow.on('closed', () => {
        // mainWindow = null;
    });

    const wc = mainWindow.webContents;
    // wc.openDevTools(); // Open DevTools - Remove for PRODUCTION!

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
    wc.on('did-finish-load', (e) => {
        console.log();
        wc.send('mailbox', {
            first: 'Tom',
            money: 100,
            list: ['bed', 'chair', 'couch'],
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
    wc.on('did-start-navigation', (e) => {
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
    displays = new DisplayController();
    createWindow();
});
app.on('before-quit', (event) => {
    // console.log('Preventing app from quitting');
    // event.preventDefault(); // if you wanna save a users work, check out section 8 of class. this is supposed to make the thing not close but Ctrl Q doesn't seem to work
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit(); // Quit when all windows are closed - (Not macOS - Darwin)
});
app.on('activate', () => {
    if (mainWindow === null) createWindow(); // When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
});