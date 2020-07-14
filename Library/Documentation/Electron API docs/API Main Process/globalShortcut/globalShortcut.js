https://www.electronjs.org/docs/api/global-shortcut
// The globalShortcut module can register / unregister a global keyboard shortcut with the operating system so that you can customize the operations for various shortcuts.
//to setup up keyboard shortcuts before tying them to functions, see accelerator
// Example
const { app, globalShortcut } = require('electron')

app.whenReady().then(() => {
    // Register a 'CommandOrControl+X' shortcut listener.
    const ret = globalShortcut.register('CommandOrControl+X', () => {
        console.log('CommandOrControl+X is pressed')
    })

    if (!ret) {
        console.log('registration failed')
    }

    // Check whether a shortcut is registered.
    console.log(globalShortcut.isRegistered('CommandOrControl+X'))
})

app.on('will-quit', () => {
    // Unregister a shortcut.
    globalShortcut.unregister('CommandOrControl+X')

    // Unregister all shortcuts.
    globalShortcut.unregisterAll()
})

// globalShortcut Methods
globalShortcut.register(accelerator, callback) // Registers a global shortcut of accelerator. The callback is called when the registered shortcut is pressed by the user. // https://www.electronjs.org/docs/api/global-shortcut#globalshortcutregisteraccelerator-callback
globalShortcut.registerAll(accelerators, callback) // Registers a global shortcut of all accelerator items in accelerators. The callback is called when any of the registered shortcuts are pressed by the user. // https://www.electronjs.org/docs/api/global-shortcut#globalshortcutregisterallaccelerators-callback
globalShortcut.isRegistered(accelerator) // Returns Boolean - Whether this application has registered accelerator. // https://www.electronjs.org/docs/api/global-shortcut#globalshortcutisregisteredaccelerator
globalShortcut.unregister(accelerator) // Unregisters the global shortcut of accelerator. // https://www.electronjs.org/docs/api/global-shortcut#globalshortcutunregisteraccelerator
globalShortcut.unregisterAll() // Unregisters all of the global shortcuts. // https://www.electronjs.org/docs/api/global-shortcut#globalshortcutunregisterall
