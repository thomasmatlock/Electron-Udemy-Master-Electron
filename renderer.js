// This file is required by the index.html file and will be executed in the renderer process for that window. All of the Node.js APIs are available in this process.

//////////////////////////////////////////////////////////////////////////////////////////////////
// desktopCapture allows us to access screens/monitors, and application windows
// ---
// const { desktopCapturer } = require('electron');

// here we add a button with an id, add event listener, then call the desktopCapturer when its clicked, which then inserts the thumbnail into our page directly
// document.getElementById('screenshot-button').addEventListener('click', () => {
// gets thumbnail
// desktopCapturer
//     .getSources({
//         types: ['screen'],
//         thumbnailSize: { width: 1920, height: 1080 }
//     }) // use screen or window here    desktopCapturer

// .then(sources => {
//         document.getElementById(
//             'screenshot'
//         ).src = sources[0].thumbnail.toDataURL();
//         console.log(sources);
//     })
//     .catch(err => console.log(err));
// this is for how many active windows you have going, it does the same thing, except it doesnt capture your screen, it captures an array of your open applications
//     desktopCapturer
//         .getSources({
//             types: ['window'],
//             thumbnailSize: { width: 1920, height: 1080 }
//         }) // use screen or window here    desktopCapturer

//     .then(sources => {
//             console.log(sources);
//             document.getElementById(
//                 'screenshot'
//             ).src = sources[1].thumbnail.toDataURL();
//         })
//         .catch(err => console.log(err));
// });

//////////////////////////////////////////////////////////////////////////////////////////////////
// ipcMain and ipcRenderer
// ---
// const { ipcRenderer } = require('electron');

// document.getElementById('talk').addEventListener('click', e => {
//     // async send
//     // ipcRenderer.send('channel1', 'Hello from main window'); // async send
//     //sync send
//     let response = ipcRenderer.sendSync(
//         'sync-message',
//         'Waiting for response...'
//     ); // sync send
//     console.log(response);
// });
// // ipcRenderer listener for communications from main process
// ipcRenderer.on('channel1-response', (e, args) => {
//     console.log(args);
// });
// ipcRenderer.on('mailbox', (e, args) => {
//     console.log(args);
//     // console.log(Object.getOwnPropertyNames(args));
// });

//////////////////////////////////////////////////////////////////////////////////////////////////
// remote module
// ---
// const { remote } = require('electron'); // require remote module which has a ton of get methods
// const { dialog, BrowserWindow } = remote; // pull the dialog module (object ) off the remote module

// setTimeout(() => {
// user dialog
// dialog
//     .showMessageBox({
//         message: 'Dialog from renderer',
//         buttons: ['Download Audio', 'Download video', 'Three']
//     })
//     .then(res => {
//         console.log(res.response); // the response seems to be an array, and will log it accordingly
//     });
// user dialog

// new window stuff
// let win = new BrowserWindow({ x: 50, y: 50, width: 300, height: 300 });
// win.loadFile('main.html');
// setTimeout(() => {
//     // remote.app.quit(); // here we call the remote instance app to quit
// }, 1500);
// new window stuff

//getCurrentWindow and manipulate it
//     let mainWindow = remote.getCurrentWindow();
//     mainWindow.maximize();
// }, 2000);
// console.log(remote);

// console.log('hello from renderer.js'); // this is integrated into the browser window via html doc, and runs this JS there in the browser. I think NodeIntegration is important here

//////////////////////////////////////////////////////////////////////////////////////////////////
//  ipcInvoke & Handle;
// THE IDEAL METHOD to talk between the browser and main processes.
// ---
// const { ipcRenderer } = require('electron');
// document.getElementById('ask').addEventListener('click', e => {
//     // ipcRenderer.send('ask-fruit');
//     ipcRenderer.invoke('ask-fruit').then(answer => {
//         console.log(answer);
//     }); // this invokes the handler on the main process, rather than listening on a channel and sending back and forth
// });
// old below
// ipcRenderer.on('answer-fruit', (e, args) => {
//     console.log(args);
// });
// old above

//////////////////////////////////////////////////////////////////////////////////////////////////
// nativeImage
// weve used nativeImage before, making tray icons, and screenCapture module taking screenshots of the screen and applications
// nativeImage is an instance of electrons nativeImage class
// nativeImage allows us to better work w images inside of our application
// each nativeImage instance represents a single image

//////////////////////////////////////////////////////////////////////////////////////////////////
// Features & Techniques: Offscreen rendering
// means to load and render content into a browser on a separate thread.
// this means because it happens while not visible, it is faster and uses less resources
// perfect solution for rendering a page onto a canvas element or even a 3d context
// 2 modes to run offscreen rendering:
// default, using GPU, or 2) using CPU only
// if your css doesnt have any 3d elements, disabling GPU to be CPU rendered only is the faster option