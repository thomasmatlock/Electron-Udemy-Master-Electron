// https://www.electronjs.org/docs/api/ipc-main
// Communicate asynchronously from the main process to renderer processes.
// The ipcMain module is an Event Emitter.When used in the main process, it handles asynchronous and synchronous messages sent from a renderer process(web page).Messages sent from a renderer will be emitted to this module.

// Sending Messages
// It is also possible to send messages from the main process to the renderer process, see webContents.send for more information.
// When sending a message, the event name is the channel.
// To reply to a synchronous message, you need to set event.returnValue.
// To send an asynchronous message back to the sender, you can use event.reply(...).This helper method will automatically handle messages coming from frames that aren't the main frame (e.g. iframes) whereas event.sender.send(...) will always send to the main frame.
// An example of sending and handling messages between the render and main processes:

// In main process.
const { ipcMain } = require('electron');

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg); // prints "ping"
    event.reply('asynchronous-reply', 'pong');
});

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg); // prints "ping"
    event.returnValue = 'pong';
});
Copy;
// In renderer process (web page).
const { ipcRenderer } = require('electron');

console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg); // prints "pong"
});
ipcRenderer.send('asynchronous-message', 'ping');
