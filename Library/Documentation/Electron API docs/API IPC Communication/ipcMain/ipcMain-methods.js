//www.electronjs.org/docs/api/ipc-main#methods
// The ipcMain module has the following method to listen for events:

ipcMain.on(channel, listener); //Listens to channel, when a new message arrives listener would be called with listener(event, args...).
ipcMain.once(channel, listener); //Adds a one time listener function for the event.This listener is invoked only the next time a message is sent to channel, after which it is removed.
ipcMain.removeListener(channel, listener); //Removes the specified listener from the listener array for the specified channel.
ipcMain.removeAllListeners([channel]); //Removes listeners of the specified channel.
ipcMain.handle(channel, listener); //Adds a handler for an invokeable IPC.This handler will be called whenever a renderer calls ipcRenderer.invoke(channel, ...args).
ipcMain.handleOnce(channel, listener); //Handles a single invokeable IPC message, then removes the listener.See ipcMain.handle(channel, listener).
ipcMain.removeHandler(channel); //Removes any handler for channel, if present.
