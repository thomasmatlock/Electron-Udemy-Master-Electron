// This file is required by the index.html file and will be executed in the renderer process for that window. All of the Node.js APIs are available in this process.

/////////////////////////////////////////////////
// desktopCapture allows us to access screens/monitors, and application windows
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

/////////////////////////////////////////////////
// ipcMain and ipcRenderer
const { ipcRenderer } = require('electron');

document.getElementById('talk').addEventListener('click', e => {
    // async send
    // ipcRenderer.send('channel1', 'Hello from main window'); // async send
    //sync send
    let response = ipcRenderer.sendSync(
        'sync-message',
        'Waiting for response...'
    ); // sync send
    console.log(response);
});
// ipcRenderer listener for communications from main process
ipcRenderer.on('channel1-response', (e, args) => {
    console.log(args);
});
ipcRenderer.on('mailbox', (e, args) => {
    console.log(args);
    // console.log(Object.getOwnPropertyNames(args));
});
// ipcMain and ipcRenderer
/////////////////////////////////////////////////

/////////////////////////////////////////////////

// console.log('hello from renderer.js'); // this is integrated into the browser window via html doc, and runs this JS there in the browser. I think NodeIntegration is important here