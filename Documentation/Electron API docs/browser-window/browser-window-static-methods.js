# <https://www.electronjs.org/docs/api/browser-window#static-methods>
The BrowserWindow class has the following static methods:

BrowserWindow.getAllWindows() // , Returns BrowserWindow[] - An array of all opened browser windows.
BrowserWindow.getFocusedWindow() // , Returns BrowserWindow | null - The window that is focused in this application // , otherwise returns null.
BrowserWindow.fromWebContents(webContents) // , Returns BrowserWindow | null - The window that owns the given webContents or null if the contents are not owned by a window.
BrowserWindow.fromBrowserView(browserView) // , Returns BrowserWindow | null - The window that owns the given browserView. If the given view is not attached to any window // , returns null.
BrowserWindow.fromId(id) // , Returns BrowserWindow - The window with the given id.
BrowserWindow.addExtension(path) // , Adds Chrome extension located at path // , and returns extension's name.
BrowserWindow.removeExtension(name) // , Remove a Chrome extension by name.
BrowserWindow.getExtensions() // , Note: This method is deprecated. Instead // , use ses.getAllExtensions().
BrowserWindow.addDevToolsExtension(path) // , Adds DevTools extension located at path // , and returns extension's name. Note: This method is deprecated. Instead // , use ses.loadExtension(path).
BrowserWindow.removeDevToolsExtension(name) // , Remove a DevTools extension by name. Note: This method is deprecated. Instead // , use ses.removeExtension(extension_id).
BrowserWindow.getDevToolsExtensions() // , Returns Record<string // , ExtensionInfo> - The keys are the extension names and each value is an Object containing name and version properties.
