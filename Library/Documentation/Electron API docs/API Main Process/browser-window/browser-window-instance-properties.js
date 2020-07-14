# <https://www.electronjs.org/docs/api/browser-window#instance-properties>

// Objects created with new BrowserWindow have the following properties:
win.webContents // Readonly A WebContents object this window owns.All web page related events and operations will be done via it.See the webContents documentation for its methods and events.
win.id // Readonly A Integer property representing the unique ID of the window.Each ID is unique among all BrowserWindow instances of the entire Electron application.
win.autoHideMenuBar // A Boolean property that determines whether the window menu bar should hide itself automatically.Once set, the menu bar will only show when users press the single Alt key.If the menu bar is already visible, setting this property to true won't hide it immediately.
win.simpleFullScreen // A Boolean property that determines whether the window is in simple(pre - Lion) fullscreen mode.
win.fullScreen // A Boolean property that determines whether the window is in fullscreen mode.
win.visibleOnAllWorkspaces // A Boolean property that determines whether the window is visible on all workspaces.Note: Always returns false on Windows.
win.shadow // A Boolean property that determines whether the window has a shadow.
win.menuBarVisible Windows Linux // A Boolean property that determines whether the menu bar should be visible.Note: If the menu bar is auto - hide, users can still bring up the menu bar by pressing the single Alt key.
win.kiosk // A Boolean property that determines whether the window is in kiosk mode.
win.documentEdited // macOS A Boolean property that specifies whether the window’s document has been edited.The icon in title bar will become gray when set to true.
win.representedFilename // macOS A String property that determines the pathname of the file the window represents, and the icon of the file will show in window's title bar.
win.title // A String property that determines the title of the native window.Note: The title of the web page can be different from the title of the native window.
win.minimizable // A Boolean property that determines whether the window can be manually minimized by user.On Linux the setter is a no - op, although the getter returns true.
win.maximizable//  A Boolean property that determines whether the window can be manually maximized by user.On Linux the setter is a no - op, although the getter returns true.
win.fullScreenable // A Boolean property that determines whether the maximize / zoom window button toggles fullscreen mode or maximizes the window.
win.resizable // A Boolean property that determines whether the window can be manually resized by user.
win.closable // A Boolean property that determines whether the window can be manually closed by user.On Linux the setter is a no - op, although the getter returns true.
win.movable // A Boolean property that determines Whether the window can be moved by user.On Linux the setter is a no - op, although the getter returns true.
win.excludedFromShownWindowsMenu // macOS A Boolean property that determines whether the window is excluded from the application’s Windows menu.false by default.const win = new BrowserWindow({ height: 600, width: 600 }) const template = [{ role: 'windowmenu' }] win.excludedFromShownWindowsMenu = true const menu = Menu.buildFromTemplate(template) Menu.setApplicationMenu(menu) Copy
win.accessibleTitle // A String property that defines an alternative title provided only to accessibility tools such as screen readers.This string is not directly visible to users.
