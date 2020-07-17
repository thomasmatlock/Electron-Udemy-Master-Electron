/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// https://www.w3schools.com/jsref/obj_window.asp
// The window object represents an open window in a browser.
// If a document contain frames(<iframe> tags), the browser creates one window object for the HTML document, and one additional window object for each frame.

// Window Object Properties
// Property // Description // URL
window.closed; // Returns a Boolean value indicating whether a window has been closed or not // https://www.w3schools.com/jsref/prop_win_closed.asp
window.console; // Returns a reference to the Console object, which provides methods for logging information to the browser's console ( See Console object ) // https://www.w3schools.com/jsref/obj_console.asp
window.defaultStatus; // Sets or returns the default text in the statusbar of a window // https://www.w3schools.com/jsref/prop_win_defaultstatus.asp
window.document; // Returns the Document object for the window ( See Document object ) // https://www.w3schools.com/jsref/dom_obj_document.asp
window.frameElement; // Returns the <iframe> element in which the current window is inserted // https://www.w3schools.com/jsref/prop_win_frameElement.asp
window.frames; // Returns all <iframe> elements in the current window // https://www.w3schools.com/jsref/prop_win_frames.asp
window.history; // Returns the History object for the window ( See History object ) // https://www.w3schools.com/jsref/obj_history.asp
window.innerHeight; // Returns the height of the window's content area (viewport) including     scrollbars // https://www.w3schools.com/jsref/prop_win_innerheight.asp
window.innerWidth; // Returns the width of a window's content area (viewport) including     scrollbars // https://www.w3schools.com/jsref/prop_win_innerheight.asp
window.length; // Returns the number of <iframe> elements in the current window // https://www.w3schools.com/jsref/prop_win_length.asp
window.localStorage; // Allows to save key/value pairs in a web browser. Stores the data with no expiration date // https://www.w3schools.com/jsref/prop_win_localstorage.asp
window.location; // Returns the Location object for the window ( See Location object ) // https://www.w3schools.com/jsref/obj_location.asp
window.name; // Sets or returns the name of a window // https://www.w3schools.com/jsref/prop_win_name.asp
window.navigator; // Returns the Navigator object for the window ( See Navigator object ) // https://www.w3schools.com/jsref/obj_navigator.asp
window.opener; // Returns a reference to the window that created the window // https://www.w3schools.com/jsref/prop_win_opener.asp
window.outerHeight; // Returns the height of the browser window, including toolbars/scrollbars // https://www.w3schools.com/jsref/prop_win_outerheight.asp
window.outerWidth; // Returns the width of the browser window, including toolbars/scrollbars // https://www.w3schools.com/jsref/prop_win_outerheight.asp
window.pageXOffset; // Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window // https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
window.pageYOffset; // Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window // https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
window.parent; // Returns the parent window of the current window // https://www.w3schools.com/jsref/prop_win_parent.asp
window.screen; // Returns the Screen object for the window (See Screen object) // https://www.w3schools.com/jsref/obj_screen.asp
window.screenLeft; // Returns the horizontal coordinate of the window relative to the screen // https://www.w3schools.com/jsref/prop_win_screenleft.asp
window.screenTop; // Returns the vertical coordinate of the window relative to the screen // https://www.w3schools.com/jsref/prop_win_screenleft.asp
window.screenX; // Returns the horizontal coordinate of the window relative to the screen // https://www.w3schools.com/jsref/prop_win_screenx.asp
window.screenY; // Returns the vertical coordinate of the window relative to the screen // https://www.w3schools.com/jsref/prop_win_screenx.asp
window.sessionStorage; // Allows to save key/value pairs in a web browser. Stores the data for one     session // https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
window.scrollX; // An alias of pageXOffset // https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
window.scrollY; // An alias of pageYOffset // https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
window.self; // Returns the current window // https://www.w3schools.com/jsref/prop_win_self.asp
window.status; // Sets or returns the text in the statusbar of a window // https://www.w3schools.com/jsref/prop_win_status.asp
window.top; // Returns the topmost browser window // https://www.w3schools.com/jsref/prop_win_top.asp

// Window Object Methods
// Method // Description
window.alert(); // Displays an alert box with a message and an OK button // https://www.w3schools.com/jsref/met_win_alert.asp
window.atob(); // Decodes a base-64 encoded string // https://www.w3schools.com/jsref/met_win_atob.asp
window.blur(); // Removes focus from the current window // https://www.w3schools.com/jsref/met_win_blur.asp
window.btoa(); // Encodes a string in base-64 // https://www.w3schools.com/jsref/met_win_btoa.asp
window.clearInterval(); // Clears a timer set with setInterval() // https://www.w3schools.com/jsref/met_win_clearinterval.asp
window.clearTimeout(); // Clears a timer set with setTimeout() // https://www.w3schools.com/jsref/met_win_cleartimeout.asp
window.close(); // Closes the current window // https://www.w3schools.com/jsref/met_win_close.asp
window.confirm(); // Displays a dialog box with a message and an OK and a Cancel button // https://www.w3schools.com/jsref/met_win_confirm.asp
window.focus(); // Sets focus to the current window // https://www.w3schools.com/jsref/met_win_focus.asp
window.getComputedStyle(); // Gets the current computed CSS styles applied to an element // https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
window.getSelection(); // Returns a Selection object representing the range of text selected by the user
window.matchMedia(); // Returns a MediaQueryList object representing the specified CSS media query string // https://www.w3schools.com/jsref/met_win_matchmedia.asp
window.moveBy(); // Moves a window relative to its current position // https://www.w3schools.com/jsref/met_win_moveby.asp
window.moveTo(); // Moves a window to the specified position // https://www.w3schools.com/jsref/met_win_moveto.asp
window.open(); // Opens a new browser window // https://www.w3schools.com/jsref/met_win_open.asp
window.print(); // Prints the content of the current window // https://www.w3schools.com/jsref/met_win_print.asp
window.prompt(); // Displays a dialog box that prompts the visitor for input // https://www.w3schools.com/jsref/met_win_prompt.asp
window.requestAnimationFrame(); // Requests the browser to call a function to update an animation before     the next repaint
window.resizeBy(); // Resizes the window by the specified pixels // https://www.w3schools.com/jsref/met_win_resizeby.asp
window.resizeTo(); // Resizes the window to the specified width and height // https://www.w3schools.com/jsref/met_win_resizeto.asp
window.scroll(); // Deprecated. This method has been replaced by the scrollTo() method. // https://www.w3schools.com/jsref/met_win_scrollto.asp
window.scrollBy(); // Scrolls the document by the specified number of pixels // https://www.w3schools.com/jsref/met_win_scrollby.asp
window.scrollTo(); // Scrolls the document to the specified coordinates // https://www.w3schools.com/jsref/met_win_scrollto.asp
window.setInterval(); // Calls a function or evaluates an expression at specified intervals (in milliseconds) // https://www.w3schools.com/jsref/met_win_setinterval.asp
window.setTimeout(); // Calls a function or evaluates an expression after a specified number of milliseconds // https://www.w3schools.com/jsref/met_win_settimeout.asp
window.stop(); // Stops the window from loading // https://www.w3schools.com/jsref/met_win_stop.asp
