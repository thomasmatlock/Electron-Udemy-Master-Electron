/* eslint-disable no-undef */
// https://www.electronjs.org/docs/api/ipc-renderer#methods
// The ipcRenderer module has the following method to listen for events and send messages:

ipcRenderer.on(channel, listener); //Listens to channel, when a new message arrives listener would be called with listener(event, args...).
ipcRenderer.once(channel, listener); //Adds a one time listener function for the event.This listener is invoked only the next time a message is sent to channel, after which it is removed.
ipcRenderer.removeListener(channel, listener); //Removes the specified listener from the listener array for the specified channel.
ipcRenderer.removeAllListeners(channel); //Removes all listeners, or those of the specified channel.
ipcRenderer.send(channel, ...args); //Send an asynchronous message to the main process via channel, along with arguments.Arguments will be serialized with the Structured Clone Algorithm, just like window.postMessage, so prototype chains will not be included.Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.
ipcRenderer.invoke(channel, ...args); //Returns Promise < any > - Resolves with the response from the main process.
ipcRenderer.sendSync(channel, ...args); //Send a message to the main process via channel and expect a result asynchronously.Arguments will be serialized with the Structured Clone Algorithm, just like window.postMessage, so prototype chains will not be included.Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.
ipcRenderer.postMessage(channel, message, [transfer]); //Send a message to the main process via channel and expect a result synchronously.Arguments will be serialized with the Structured Clone Algorithm, just like window.postMessage, so prototype chains will not be included.Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.
ipcRenderer.sendTo(webContentsId, channel, ...args); //Sends a message to a window with webContentsId via channel.
ipcRenderer.sendToHost(channel, ...args); //Like ipcRenderer.send but the event will be sent to the < webview > element in the host page instead of the main process.
