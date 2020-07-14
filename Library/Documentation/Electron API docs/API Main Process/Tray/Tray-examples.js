/* eslint-disable no-restricted-globals */
/* eslint-disable no-delete-var */
/* eslint-disable no-undef */
// https://www.electronjs.org/docs/api/tray
// Process: Main
// Tray is an EventEmitter.
// example:
const { app, Menu, Tray } = require('electron');

let tray = null;
app.whenReady().then(() => {
    tray = new Tray('/path/to/my/icon');
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ]);
    tray.setToolTip('This is my application.');
    tray.setContextMenu(contextMenu);
});
// Platform limitations:
// On Linux the app indicator will be used if it is supported, otherwise GtkStatusIcon will be used instead.
// On Linux distributions that only have app indicator support, you have to install libappindicator1 to make the tray icon work.
// App indicator will only be shown when it has a context menu.
// When app indicator is used on Linux, the click event is ignored.
// On Linux in order for changes made to individual MenuItems to take effect, you have to call setContextMenu again.For example:
// example:
const { app, Menu, Tray } = require('electron')

let appIcon = null
app.whenReady().then(() => {
    appIcon = new Tray('/path/to/my/icon')
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' }
    ])

    // Make a change to the context menu
    contextMenu.items[1].checked = false

    // Call this again for Linux because we modified the context menu
    appIcon.setContextMenu(contextMenu)
})
// On Windows it is recommended to use ICO icons to get best visual effects.
// If you want to keep exact same behaviors on all platforms, you should not rely on the click event and always attach a context menu to the tray icon.