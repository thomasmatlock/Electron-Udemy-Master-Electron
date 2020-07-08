/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// https://www.w3schools.com/jsref/obj_window.asp
// The window object represents an open window in a browser.
// If a document contain frames(<iframe> tags), the browser creates one window object for the HTML document, and one additional window object for each frame.

Window Object Properties
Property // Description // URL
closed // Returns a Boolean value indicating whether a window has been closed or not // https://www.w3schools.com/jsref/prop_win_closed.asp
console // Returns a reference to the Console object, which provides methods for logging information to the browser's console ( See Console object ) // https://www.w3schools.com/jsref/obj_console.asp
defaultStatus // Sets or returns the default text in the statusbar of a window // https://www.w3schools.com/jsref/prop_win_defaultstatus.asp
document // Returns the Document object for the window ( See Document object ) // https://www.w3schools.com/jsref/dom_obj_document.asp
frameElement // Returns the <iframe> element in which the current window is inserted // https://www.w3schools.com/jsref/prop_win_frameElement.asp
frames // Returns all <iframe> elements in the current window // https://www.w3schools.com/jsref/prop_win_frames.asp
history // Returns the History object for the window ( See History object ) // https://www.w3schools.com/jsref/obj_history.asp
innerHeight // Returns the height of the window's content area (viewport) including     scrollbars // https://www.w3schools.com/jsref/prop_win_innerheight.asp
innerWidth // Returns the width of a window's content area (viewport) including     scrollbars // https://www.w3schools.com/jsref/prop_win_innerheight.asp
length // Returns the number of <iframe> elements in the current window // https://www.w3schools.com/jsref/prop_win_length.asp
localStorage // Allows to save key/value pairs in a web browser. Stores the data with no expiration date // https://www.w3schools.com/jsref/prop_win_localstorage.asp
location // Returns the Location object for the window ( See Location object ) // https://www.w3schools.com/jsref/obj_location.asp
name // Sets or returns the name of a window // https://www.w3schools.com/jsref/prop_win_name.asp
navigator // Returns the Navigator object for the window ( See Navigator object ) // https://www.w3schools.com/jsref/obj_navigator.asp
opener // Returns a reference to the window that created the window // https://www.w3schools.com/jsref/prop_win_opener.asp
outerHeight // Returns the height of the browser window, including toolbars/scrollbars // https://www.w3schools.com/jsref/prop_win_outerheight.asp
outerWidth // Returns the width of the browser window, including toolbars/scrollbars // https://www.w3schools.com/jsref/prop_win_outerheight.asp
pageXOffset // Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window // https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
pageYOffset // Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window // https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
parent // Returns the parent window of the current window // https://www.w3schools.com/jsref/prop_win_parent.asp
screen // Returns the Screen object for the window (See Screen object) // https://www.w3schools.com/jsref/obj_screen.asp
screenLeft // Returns the horizontal coordinate of the window relative to the screen // https://www.w3schools.com/jsref/prop_win_screenleft.asp
screenTop // Returns the vertical coordinate of the window relative to the screen // https://www.w3schools.com/jsref/prop_win_screenleft.asp
screenX // Returns the horizontal coordinate of the window relative to the screen // https://www.w3schools.com/jsref/prop_win_screenx.asp
screenY // Returns the vertical coordinate of the window relative to the screen // https://www.w3schools.com/jsref/prop_win_screenx.asp
sessionStorage // Allows to save key/value pairs in a web browser. Stores the data for one     session // https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
scrollX // An alias of pageXOffset // https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
scrollY // An alias of pageYOffset // https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
self // Returns the current window // https://www.w3schools.com/jsref/prop_win_self.asp
status // Sets or returns the text in the statusbar of a window // https://www.w3schools.com/jsref/prop_win_status.asp
top // Returns the topmost browser window // https://www.w3schools.com/jsref/prop_win_top.asp

Window Object Methods
Method // Description
alert() // Displays an alert box with a message and an OK button // https://www.w3schools.com/jsref/met_win_alert.asp
atob() // Decodes a base-64 encoded string // https://www.w3schools.com/jsref/met_win_atob.asp
blur() // Removes focus from the current window // https://www.w3schools.com/jsref/met_win_blur.asp
btoa() // Encodes a string in base-64 // https://www.w3schools.com/jsref/met_win_btoa.asp
clearInterval() // Clears a timer set with setInterval() // https://www.w3schools.com/jsref/met_win_clearinterval.asp
clearTimeout() // Clears a timer set with setTimeout() // https://www.w3schools.com/jsref/met_win_cleartimeout.asp
close() // Closes the current window // https://www.w3schools.com/jsref/met_win_close.asp
confirm() // Displays a dialog box with a message and an OK and a Cancel button // https://www.w3schools.com/jsref/met_win_confirm.asp
focus() // Sets focus to the current window // https://www.w3schools.com/jsref/met_win_focus.asp
getComputedStyle() // Gets the current computed CSS styles applied to an element // https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
getSelection() // Returns a Selection object representing the range of text selected by the user
matchMedia() // Returns a MediaQueryList object representing the specified CSS media query string // https://www.w3schools.com/jsref/met_win_matchmedia.asp
moveBy() // Moves a window relative to its current position // https://www.w3schools.com/jsref/met_win_moveby.asp
moveTo() // Moves a window to the specified position // https://www.w3schools.com/jsref/met_win_moveto.asp
open() // Opens a new browser window // https://www.w3schools.com/jsref/met_win_open.asp
print() // Prints the content of the current window // https://www.w3schools.com/jsref/met_win_print.asp
prompt() // Displays a dialog box that prompts the visitor for input // https://www.w3schools.com/jsref/met_win_prompt.asp
requestAnimationFrame() // Requests the browser to call a function to update an animation before     the next repaint
resizeBy() // Resizes the window by the specified pixels // https://www.w3schools.com/jsref/met_win_resizeby.asp
resizeTo() // Resizes the window to the specified width and height // https://www.w3schools.com/jsref/met_win_resizeto.asp
scroll() // Deprecated. This method has been replaced by the scrollTo() method. // https://www.w3schools.com/jsref/met_win_scrollto.asp
scrollBy() // Scrolls the document by the specified number of pixels // https://www.w3schools.com/jsref/met_win_scrollby.asp
scrollTo() // Scrolls the document to the specified coordinates // https://www.w3schools.com/jsref/met_win_scrollto.asp
setInterval() // Calls a function or evaluates an expression at specified intervals (in milliseconds) // https://www.w3schools.com/jsref/met_win_setinterval.asp
setTimeout() // Calls a function or evaluates an expression after a specified number of milliseconds // https://www.w3schools.com/jsref/met_win_settimeout.asp
stop() // Stops the window from loading // https://www.w3schools.com/jsref/met_win_stop.asp