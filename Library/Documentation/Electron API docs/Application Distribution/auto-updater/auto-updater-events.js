<https://www.electronjs.org/docs/api/auto-updater#events>
// The autoUpdater object emits the following events:

'error' // Emitted when there is an error while updating.
'checking-for-update' // Emitted when checking if an update has started.
'update-available' // Emitted when there is an available update. The update is downloaded automatically.
'update-not-available' // Emitted when there is no available update.
'update-downloaded' // <https://www.electronjs.org/docs/api/auto-updater#event-update-downloaded>
'before-quit-for-update' // This event is emitted after a user calls quitAndInstall().