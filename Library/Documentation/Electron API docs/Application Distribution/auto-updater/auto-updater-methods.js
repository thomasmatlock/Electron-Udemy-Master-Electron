<https://www.electronjs.org/docs/api/auto-updater#methods>
// The autoUpdater object has the following methods:

autoUpdater.setFeedURL(options) // <https://www.electronjs.org/docs/api/auto-updater#autoupdatersetfeedurloptions>
autoUpdater.getFeedURL() // Returns String The current update feed URL.
autoUpdater.checkForUpdates() // Asks the server whether there is an update. You must call setFeedURL before using this API.
autoUpdater.quitAndInstall() // Restarts the app and installs the update after it has been downloaded. It should only be called after update-downloaded has been emitted.
