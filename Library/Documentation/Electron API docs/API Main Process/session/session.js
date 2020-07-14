//  <https://www.electronjs.org/docs/api/session>

// Includes:
// http cache
// Cookies
// localStorage
// IndexedDB
// by default, electron creates a session for us, which is shared between all browser instance windows
// this called the default session
// we can access the default session directly on our main window web contents
// access it by mainWindow.webContents.session, its a storage of
// open dev tools in electron window, switch to application tab, list of storage is on side nav, go to local storage, add a key value pair: "name": electron (no quotes)
// now, exit and restart app, that key value pair has persisted in the local Storage file
// you can use session from the electron app, the session.defaultSession, or you can create custom sessions, ie for syncing between multiple devices
// however, by default the custom session values do not persist between sessions
// to persist a custom session, there are 2 steps:
// add prefix 'persist:' ie, const customSes = session.fromPartition('persist:part1');
// in new browser-window creation webPreferences, add: partition: 'persist:part1'
// if you wanna clear storage:
