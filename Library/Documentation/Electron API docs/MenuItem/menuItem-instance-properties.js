/* eslint-disable no-restricted-globals */
/* eslint-disable no-delete-var */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
// https://www.electronjs.org/docs/api/menu-item#instance-properties
// The following properties are available on instances of MenuItem:
menuItem.id; //A String indicating the item's unique id, this property can be dynamically changed.
menuItem.label; //A String indicating the item's visible label.
menuItem.click; //A Function that is fired when the MenuItem receives a click event. It can be called with menuItem.click(event, focusedWindow, focusedWebContents).
menuItem.submenu; //A Menu (optional) containing the menu item's submenu, if present.
menuItem.type; //A String indicating the type of the item. Can be normal, separator, submenu, checkbox or radio.
menuItem.role; // A String (optional) indicating the item's role, if set. Can be undo, redo, cut, copy, paste, pasteAndMatchStyle, delete, selectAll, reload, forceReload, toggleDevTools, resetZoom, zoomIn, zoomOut, togglefullscreen, window, minimize, close, help, about, services, hide, hideOthers, unhide, quit, startSpeaking, stopSpeaking, zoom, front, appMenu, fileMenu, editMenu, viewMenu, recentDocuments, toggleTabBar, selectNextTab, selectPreviousTab, mergeAllWindows, clearRecentDocuments, moveTabToNewWindow or windowMenu
menuItem.accelerator; //A Accelerator (optional) indicating the item's accelerator, if set.
menuItem.icon; //A NativeImage | String (optional) indicating the item's icon, if set.
menuItem.sublabel; //A String indicating the item's sublabel.
menuItem.toolTip; //A String indicating the item's hover text.
menuItem.enabled; //A Boolean indicating whether the item is enabled, this property can be dynamically changed.
menuItem.visible; //A Boolean indicating whether the item is visible, this property can be dynamically changed.
menuItem.checked; //A Boolean indicating whether the item is checked, this property can be dynamically changed. A checkbox menu item will toggle the checked property on and off when selected. A radio menu item will turn on its checked property when clicked, and will turn off that property for all adjacent items in the same menu. You can add a click function for additional behavior.
menuItem.registerAccelerator; // A Boolean indicating if the accelerator should be registered with the system or just displayed.
menuItem.commandId; // A Number indicating an item's sequential unique id.
menuItem.menu; //A Menu that the item is a part of.
