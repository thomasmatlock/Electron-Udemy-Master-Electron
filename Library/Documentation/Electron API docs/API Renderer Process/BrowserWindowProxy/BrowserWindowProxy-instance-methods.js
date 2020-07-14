/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// https://www.electronjs.org/docs/api/browser-window-proxy#instance-methods

// The BrowserWindowProxy object has the following instance methods:
win.blur(); // Removes focus from the child window.
win.close(); // Forcefully closes the child window without calling its unload event.
win.eval(code); // Evaluates the code in the child window.
win.focus(); // Focuses the child window(brings the window to front).
win.print(); // Invokes the print dialog on the child window.
win.postMessage(message, targetOrigin); // Sends a message to the child window with the specified origin or * for no origin preference.
