/* eslint-disable no-new */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-delete-var */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
// https://www.electronjs.org/docs/api/menu-item#new-menuitemoptions
// Add items to native application menus and context menus.

new MenuItem({ options }) // all options below can be used in options object

click // Function(optional) - Will be called with click(menuItem, browserWindow, event) when the menu item is clicked. options: {    menuItem MenuItem,    browserWindow BrowserWindow | undefined - This will not be defined if no window is open.,    event KeyboardEvent}
role // String(optional) - Can be undo, redo, cut, copy, paste, pasteAndMatchStyle, delete, selectAll, reload, forceReload, toggleDevTools, resetZoom, zoomIn, zoomOut, togglefullscreen, window, minimize, close, help, about, services, hide, hideOthers, unhide, quit, startSpeaking, stopSpeaking, zoom, front, appMenu, fileMenu, editMenu, viewMenu, recentDocuments, toggleTabBar, selectNextTab, selectPreviousTab, mergeAllWindows, clearRecentDocuments, moveTabToNewWindow or windowMenu - Define the action of the menu item, when specified the click property will be ignored.See roles.
type // String (optional) - Can be normal, separator, submenu, checkbox or radio.
label // String(optional)
sublabel // String(optional)
toolTip // String(optional) macOS - Hover text for this menu item.
accelerator // Accelerator(optional)
icon // (NativeImage | String)(optional)
enabled // Boolean(optional) - If false, the menu item will be greyed out and unclickable.
acceleratorWorksWhenHidden //Boolean(optional) macOS - default is true, and when false will prevent the accelerator from triggering the item if the item is not visible`.
visible //Boolean (optional) - If false, the menu item will be entirely hidden.
checked //Boolean (optional) - Should only be specified for checkbox or radio type menu items.
registerAccelerator //Boolean (optional) Linux Windows - If false, the accelerator won't be registered with the system, but it will still be displayed. Defaults to true.
submenu // (MenuItemConstructorOptions[] | Menu) (optional) - Should be specified for submenu type menu items. If submenu is specified, the type: 'submenu' can be omitted. If the value is not a Menu then it will be automatically converted to one using Menu.buildFromTemplate.
id // String (optional) - Unique within a single menu. If defined then it can be used as a reference to this item by the position attribute.
before // String[] (optional) - Inserts this item before the item with the specified label. If the referenced item doesn't exist the item will be inserted at the end of the menu. Also implies that the menu item in question should be placed in the same “group” as the item.
after // String[] (optional) - Inserts this item after the item with the specified label. If the referenced item doesn't exist the item will be inserted at the end of the menu.
beforeGroupContaining // String[] (optional) - Provides a means for a single context menu to declare the placement of their containing group before the containing group of the item with the specified label.
afterGroupContaining // String[] (optional) - Provides a means for a single context menu to declare the placement of their containing group after the containing group of the item with the specified label.