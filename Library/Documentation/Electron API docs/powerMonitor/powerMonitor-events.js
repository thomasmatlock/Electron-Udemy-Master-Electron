/* eslint-disable no-restricted-globals */
/* eslint-disable no-delete-var */
/* eslint-disable no-undef */
//www.electronjs.org/docs/api/power-monitor#events
// The powerMonitor module emits the following events:

'suspend'; // Emitted when the system is suspending.
'resume'; // Emitted when system is resuming.
'on - ac'; // Emitted when the system changes to AC power.
'on - battery'; // Emitted when system changes to battery power.
'shutdown'; // Emitted when the system is about to reboot or shut down.If the event handler invokes e.preventDefault(), Electron will attempt to delay system shutdown in order for the app to exit cleanly.If e.preventDefault() is called, the app should exit as soon as possible by calling something like app.quit().
'lock - screen'; // Emitted when the system is about to lock the screen.
'unlock - screen'; // Emitted as soon as the systems screen is unlocked.
