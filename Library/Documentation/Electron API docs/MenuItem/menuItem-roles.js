/* eslint-disable no-restricted-globals */
/* eslint-disable no-delete-var */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
// https://www.electronjs.org/docs/api/menu-item#roles
// Roles allow menu items to have predefined behaviors.
// It is best to specify role for any menu item that matches a standard role, rather than trying to manually implement the behavior in a click function.The built -in role behavior will give the best native experience.
// The label and accelerator values are optional when using a role and will default to appropriate values for each platform.
// Every menu item must have either a role, label, or in the case of a separator a type.
// The role property can have following values:

undo;
about; // Trigger a native about panel(custom message box on Window, which does not provide its own).
redo;
cut;
copy;
paste;
pasteAndMatchStyle;
selectAll;
delete minimize; // Minimize current window.
close; // Close current window.
quit; // Quit the application.
reload; // Reload the current window.
forceReload; // Reload the current window ignoring the cache.
toggleDevTools; // Toggle developer tools in the current window.
togglefullscreen; // Toggle full screen mode on the current window.
resetZoom; // Reset the focused page's zoom level to the original size.
zoomIn; // Zoom in the focused page by 10 %.
zoomOut; // Zoom out the focused page by 10 %.
fileMenu; // Whole default ""File"" menu (Close / Quit)"
editMenu; // Whole default ""Edit"" menu (Undo, Copy, etc.)."
viewMenu; // Whole default ""View"" menu (Reload, Toggle Developer Tools, etc.)"
windowMenu; // Whole default ""Window"" menu (Minimize, Zoom, etc.)."
