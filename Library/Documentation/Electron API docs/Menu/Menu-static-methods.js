/* eslint-disable no-undef */
// https://www.electronjs.org/docs/api/menu#static-methods
// Create native application menus and context menus.

Menu.setApplicationMenu(menu); // Sets menu as the application menu on macOS. On Windows and Linux, the menu will be set as each window's top menu. //
Menu.getApplicationMenu(); // Returns Menu | null - The application menu, if set, or null, if not set. //
Menu.sendActionToFirstResponder(action); //Sends the action to the first responder of application. This is used for emulating default macOS menu behaviors. //
Menu.buildFromTemplate(template); // Returns Menu. Generally, the template is an array of options for constructing a MenuItem.The usage can be referenced above.//
