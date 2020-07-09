<https://www.electronjs.org/docs/api/browser-window#instance-events>
// INSTANCE EVENTS (browser window events you can listen for)
Objects created with new BrowserWindow emit the following events:

'page-title-updated' // , Emitted when the document changed its title' // , calling event.preventDefault() will prevent the native window's title from changing. explicitSet is false when title is synthesized from file URL.
'close' // , Emitted when the window is going to be closed. It's emitted before the beforeunload and unload event of the DOM.Calling event.preventDefault() will cancel the close.
'closed' // , Emitted when the window is closed. After you have received this event you should remove the reference to the window and avoid using it any more.
'session-end' // , Emitted when window session is going to end due to force shutdown or machine restart or session log off.
'unresponsive' // , Emitted when the web page becomes unresponsive.
'responsive' // , Emitted when the unresponsive web page becomes responsive again.
'blur' // , Emitted when the window loses focus.
'focus' // , Emitted when the window gains focus.
'show' // , Emitted when the window is shown.
'hide' // , Emitted when the window is hidden.
'ready-to-show' // , Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
'maximize' // ,Emitted when window is maximized.
'unmaximize' // ,Emitted when the window exits from a maximized state.
'minimize' // ,Emitted when the window is minimized.
'restore' // ,Emitted when the window is restored from a minimized state.
'will-resize' // ,Emitted before the window is resized. Calling event.preventDefault() will prevent the window from being resized.
'resize' // ,Emitted after the window has been resized.
'will-move' // ,Emitted before the window is moved. On Windows' // , calling event.preventDefault() will prevent the window from being moved.
'move' // ,Emitted when the window is being moved to a new position.
'moved' // ,Emitted once when the window is moved to a new position.
'enter-full-screen' // ,Emitted when the window enters a full-screen state.
'leave-full-screen' // ,Emitted when the window leaves a full-screen state.
'enter-html-full-screen' // ,Emitted when the window enters a full-screen state triggered by HTML API.
'leave-html-full-screen' // ,Emitted when the window leaves a full-screen state triggered by HTML API.
'always-on-top-changed' // ,Emitted when the window is set or unset to show always on top of other windows.
'app-command' // ,"Emitted when an App Command is invoked. These are typically related to keyboard media keys or browser commands' // , as well as the ""Back"" button built into some mice on Windows."
'scroll-touch-begin' // ,Emitted when scroll wheel event phase has begun.
'scroll-touch-end' // ,Emitted when scroll wheel event phase has ended.
'scroll-touch-edge' // ,Emitted when scroll wheel event phase filed upon reaching the edge of element.
'swipe' // ,Emitted on 3-finger swipe. Possible directions are up' // , right' // , down' // , left.
'rotate-gesture' // ,Emitted on trackpad rotation gesture. Continually emitted until rotation gesture is ended.
'sheet-begin' // ,Emitted when the window opens a sheet.
'sheet-end' // ,Emitted when the window has closed a sheet.
'new-window-for-tab' // ,Emitted when the native new tab button is clicked.