<https://www.electronjs.org/docs/api/web-contents#instance-events>
Render and control the contents of a BrowserWindow instance.
Process: Main

 'did-finish-load' //, Emitted when the navigation is done' //, i.e. the spinner of the tab has stopped spinning' //, and the onload event was dispatched.
'did-fail-load' //, This event is like did-finish-load but emitted when the load failed. The full list of error codes and their meaning is available here.
'did-fail-provisional-load' //, This event is like did-fail-load but emitted when the load was cancelled (e.g. window.stop() was invoked).
'did-frame-finish-load' //, Emitted when a frame has done navigation.
'did-start-loading' //, Corresponds to the points in time when the spinner of the tab started spinning.
'did-stop-loading' //, Corresponds to the points in time when the spinner of the tab stopped spinning.
'dom-ready' //, Emitted when the document in the given frame is loaded.
'page-title-updated' //, Fired when page title is set during navigation. explicitSet is false when title is synthesized from file url.
'page-favicon-updated' //, Emitted when page receives favicon urls.
'new-window' //, Emitted when the page requests to open a new window for a url. <https://www.electronjs.org/docs/api/web-contents#event-new-window>
'will-navigate' //, Emitted when a user or the page wants to start navigation. It can happen when the window.location object is changed or a user clicks a link in the page.
'did-start-navigation' //, Emitted when any frame (including main) starts navigating. isInplace will be true for in-page navigations.
'will-redirect' //, Emitted as a server side redirect occurs during navigation. For example a 302 redirect.
'did-redirect-navigation' //, Emitted as a server side redirect occurs during navigation. For example a 302 redirect.
'did-navigate' //, Emitted when a main frame navigation is done.
'did-frame-navigate' //, Emitted when any frame navigation is done.
'did-navigate-in-page' //, Emitted when an in-page navigation happened in any frame.
'will-prevent-unload' //, Emitted when a beforeunload event handler is attempting to cancel a page unload.
'crashed' //, Emitted when the renderer process crashes or is killed.
'unresponsive' //, Emitted when the web page becomes unresponsive.
'responsive' //, Emitted when the unresponsive web page becomes responsive again.
'plugin-crashed' //, Emitted when a plugin process has crashed.
'destroyed' //, Emitted when webContents is destroyed.
'before-input-event' //, Emitted before dispatching the keydown and keyup events in the page. Calling event.preventDefault will prevent the page keydown/keyup events and the menu shortcuts.
'enter-html-full-screen' //, Emitted when the window enters a full-screen state triggered by HTML API.
'leave-html-full-screen' //, Emitted when the window leaves a full-screen state triggered by HTML API.
'zoom-changed' //, Emitted when the user is requesting to change the zoom level using the mouse wheel.
'devtools-opened' //, Emitted when DevTools is opened.
'devtools-closed' //, Emitted when DevTools is closed.
'devtools-focused' //, Emitted when DevTools is focused / opened.
'certificate-error' //, Emitted when failed to verify the certificate for url.
'select-client-certificate' //, Emitted when a client certificate is requested.
'login' //, Emitted when webContents wants to do basic auth.
'found-in-page' //, Emitted when a result is available for [webContents.findInPage] request.
'media-started-playing' //, Emitted when media starts playing.
'media-paused' //, Emitted when media is paused or done playing.
'did-change-theme-color' //, Emitted when a page's theme color changes. This is usually due to encountering a meta tag:
'update-target-url' //, Emitted when mouse moves over a link or the keyboard moves the focus to a link.
'cursor-changed' //, Emitted when the cursor's type changes.
'context-menu' //, Emitted when there is a new context menu that needs to be handled. <https://www.electronjs.org/docs/api/web-contents#event-context-menu>
'select-bluetooth-device' //, Emitted when bluetooth device needs to be selected on call to navigator.bluetooth.requestDevice. To use navigator.bluetooth api webBluetooth should be enabled. If event.preventDefault is not called' //, first available device will be selected. callback should be called with deviceId to be selected' //, passing empty string to callback will cancel the request.
'paint' //, Emitted when a new frame is generated. Only the dirty area is passed in the buffer.
'devtools-reload-page' //, Emitted when the devtools window instructs the webContents to reload
'will-attach-webview' //, Emitted when a <webview>'s web contents is being attached to this web contents. Calling event.preventDefault() will destroy the guest page.
'did-attach-webview' //, Emitted when a <webview> has been attached to this web contents.
'console-message' //, Emitted when the associated window logs a console message.
'preload-error' //, Emitted when the preload script preloadPath throws an unhandled exception error.
'ipc-message' //, Emitted when the renderer process sends an asynchronous message via ipcRenderer.send().
'ipc-message-sync' //, Emitted when the renderer process sends a synchronous message via ipcRenderer.sendSync().
'desktop-capturer-get-sources' //, Emitted when desktopCapturer.getSources() is called in the renderer process. Calling event.preventDefault() will make it return empty sources.
'remote-require' //, Emitted when remote.require() is called in the renderer process. Calling event.preventDefault() will prevent the module from being returned. Custom value can be returned by setting event.returnValue.
'remote-get-global' //, Emitted when remote.getGlobal() is called in the renderer process. Calling event.preventDefault() will prevent the global from being returned. Custom value can be returned by setting event.returnValue.
'remote-get-builtin' //, Emitted when remote.getBuiltin() is called in the renderer process. Calling event.preventDefault() will prevent the module from being returned. Custom value can be returned by setting event.returnValue.
'remote-get-current-window' //, Emitted when remote.getCurrentWindow() is called in the renderer process. Calling event.preventDefault() will prevent the object from being returned. Custom value can be returned by setting event.returnValue.
'remote-get-current-web-contents' //, Emitted when remote.getCurrentWebContents() is called in the renderer process. Calling event.preventDefault() will prevent the object from being returned. Custom value can be returned by setting event.returnValue.