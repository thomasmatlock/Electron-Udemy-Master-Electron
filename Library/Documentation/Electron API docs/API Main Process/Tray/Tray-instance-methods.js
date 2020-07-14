/* eslint-disable no-restricted-globals */
/* eslint-disable no-delete-var */
/* eslint-disable no-undef */
//www.electronjs.org/docs/api/tray#instance-methods
// The Tray class has the following methods:

tray.destroy(); // Destroys the tray icon immediately.
tray.setImage(image); // Sets the image associated with this tray icon.
tray.setPressedImage(image); // Sets the image associated with this tray icon when pressed on macOS.
tray.setToolTip(toolTip); // Sets the hover text for this tray icon.
tray.setTitle(title); // Sets the title displayed next to the tray icon in the status bar(Support ANSI colors).
tray.getTitle(); // Returns String - the title displayed next to the tray icon in the status bar
tray.setIgnoreDoubleClickEvents(ignore); // Sets the option to ignore double click events.Ignoring these events allows you to detect every individual click of the tray icon.
tray.getIgnoreDoubleClickEvents(); // Returns Boolean - Whether double click events will be ignored.
tray.displayBalloon(options); // Displays a tray balloon.
tray.removeBalloon(); // Removes a tray balloon.
tray.focus(); // Returns focus to the taskbar notification area.Notification area icons should use this message when they have completed their UI operation.For example, if the icon displays a shortcut menu, but the user presses ESC to cancel it, use tray.focus() to return focus to the notification area.
tray.popUpContextMenu([menu, position]); // Pops up the context menu of the tray icon.When menu is passed, the menu will be shown instead of the tray icon's context menu.
tray.closeContextMenu(); // Closes an open context menu, as set by tray.setContextMenu().
tray.setContextMenu(menu); // Sets the context menu for this icon.
tray.getBounds(); // The bounds of this tray icon as Object.
tray.isDestroyed(); // Returns Boolean - Whether the tray icon is destroyed.
