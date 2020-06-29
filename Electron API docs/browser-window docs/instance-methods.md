https://www.electronjs.org/docs/api/browser-window#instance-methods
Objects created with new BrowserWindow have the following instance methods:

Instance Methods Objects created with new BrowserWindow have the following instance methods: Note: Some methods are only available on specific operating systems and are labeled as such.
win.destroy() Force closing the window, the unload and beforeunload event won't be emitted for the web page, and close event will also not be emitted for this window, but it guarantees the closed event will be emitted.
win.close() Try to close the window. This has the same effect as a user manually clicking the close button of the window. The web page may cancel the close though. See the close event.
win.focus() Focuses on the window.
win.blur() Removes focus from the window.
win.isFocused() Returns Boolean - Whether the window is focused.
win.isDestroyed() Returns Boolean - Whether the window is destroyed.
win.show() Shows and gives focus to the window.
win.showInactive() Shows the window but doesn't focus on it.
win.hide() Hides the window.
win.isVisible() Returns Boolean - Whether the window is visible to the user.
win.isModal() Returns Boolean - Whether current window is a modal window.
win.maximize() Maximizes the window. This will also show (but not focus) the window if it isn't being displayed already.
win.unmaximize() Unmaximizes the window.
win.isMaximized() Returns Boolean - Whether the window is maximized.
win.minimize() Minimizes the window. On some platforms the minimized window will be shown in the Dock.
win.restore() Restores the window from minimized state to its previous state.
win.isMinimized() Returns Boolean - Whether the window is minimized.
win.setFullScreen(flag) flag Boolean Sets whether the window should be in fullscreen mode.
win.isFullScreen() Returns Boolean - Whether the window is in fullscreen mode.
win.setSimpleFullScreen(flag) macOS flag Boolean Enters or leaves simple fullscreen mode. Simple fullscreen mode emulates the native fullscreen behavior found in versions of macOS prior to Lion (10.7).
win.isSimpleFullScreen() macOS Returns Boolean - Whether the window is in simple (pre-Lion) fullscreen mode.
win.isNormal() Returns Boolean - Whether the window is in normal state (not maximized, not minimized, not in fullscreen mode).
win.setAspectRatio(aspectRatio[, extraSize]) macOS Linux aspectRatio Float - The aspect ratio to maintain for some portion of the content view. extraSize Size (optional) macOS - The extra size not to be included while maintaining the aspect ratio. This will make a window maintain an aspect ratio. The extra size allows a developer to have space, specified in pixels, not included within the aspect ratio calculations. This API already takes into account the difference between a window's size and its content size. Consider a normal window with an HD video player and associated controls. Perhaps there are 15 pixels of controls on the left edge, 25 pixels of controls on the right edge and 50 pixels of controls below the player. In order to maintain a 16:9 aspect ratio (standard aspect ratio for HD @1920x1080) within the player itself we would call this function with arguments of 16/9 and { width: 40, height: 50 }. The second argument doesn't care where the extra width and height are within the content view--only that they exist. Sum any extra width and height areas you have within the overall content view.
win.setBackgroundColor(backgroundColor) backgroundColor String - Window's background color as a hexadecimal value, like #66CD00 or #FFF or #80FFFFFF (alpha is supported if transparent is true). Default is #FFF (white). Sets the background color of the window. See Setting backgroundColor.
win.previewFile(path[, displayName]) macOS path String - The absolute path to the file to preview with QuickLook. This is important as Quick Look uses the file name and file extension on the path to determine the content type of the file to open. displayName String (optional) - The name of the file to display on the Quick Look modal view. This is purely visual and does not affect the content type of the file. Defaults to path. Uses Quick Look to preview a file at a given path.
win.closeFilePreview() macOS Closes the currently open Quick Look panel.
win.setBounds(bounds[, animate]) bounds Partial<Rectangle> animate Boolean (optional) macOS Resizes and moves the window to the supplied bounds. Any properties that are not supplied will default to their current values. const { BrowserWindow } = require('electron') const win = new BrowserWindow() // set all bounds properties win.setBounds({ x: 440, y: 225, width: 800, height: 600 }) // set a single bounds property win.setBounds({ width: 100 }) // { x: 440, y: 225, width: 100, height: 600 } console.log(win.getBounds()) Copy
win.getBounds() Returns Rectangle - The bounds of the window as Object.
win.getBackgroundColor() Returns String - Gets the background color of the window. See Setting backgroundColor.
win.setContentBounds(bounds[, animate]) bounds Rectangle animate Boolean (optional) macOS Resizes and moves the window's client area (e.g. the web page) to the supplied bounds.
win.getContentBounds() Returns Rectangle - The bounds of the window's client area as Object.
win.getNormalBounds() Returns Rectangle - Contains the window bounds of the normal state Note: whatever the current state of the window : maximized, minimized or in fullscreen, this function always returns the position and size of the window in normal state. In normal state, getBounds and getNormalBounds returns the same Rectangle.
win.setEnabled(enable) enable Boolean Disable or enable the window.
win.isEnabled() Returns Boolean - whether the window is enabled.
win.setSize(width, height[, animate]) width Integer height Integer animate Boolean (optional) macOS Resizes the window to width and height. If width or height are below any set minimum size constraints the window will snap to its minimum size.
win.getSize() Returns Integer[] - Contains the window's width and height.
win.setContentSize(width, height[, animate]) width Integer height Integer animate Boolean (optional) macOS Resizes the window's client area (e.g. the web page) to width and height.
win.getContentSize() Returns Integer[] - Contains the window's client area's width and height.
win.setMinimumSize(width, height) width Integer height Integer Sets the minimum size of window to width and height.
win.getMinimumSize() Returns Integer[] - Contains the window's minimum width and height.
win.setMaximumSize(width, height) width Integer height Integer Sets the maximum size of window to width and height.
win.getMaximumSize() Returns Integer[] - Contains the window's maximum width and height.
win.setResizable(resizable) resizable Boolean Sets whether the window can be manually resized by the user.
win.isResizable() Returns Boolean - Whether the window can be manually resized by the user.
win.setMovable(movable) macOS Windows movable Boolean Sets whether the window can be moved by user. On Linux does nothing.
win.isMovable() macOS Windows Returns Boolean - Whether the window can be moved by user. On Linux always returns true.
win.setMinimizable(minimizable) macOS Windows minimizable Boolean Sets whether the window can be manually minimized by user. On Linux does nothing.
win.isMinimizable() macOS Windows Returns Boolean - Whether the window can be manually minimized by the user. On Linux always returns true.
win.setMaximizable(maximizable) macOS Windows maximizable Boolean Sets whether the window can be manually maximized by user. On Linux does nothing.
win.isMaximizable() macOS Windows Returns Boolean - Whether the window can be manually maximized by user. On Linux always returns true.
win.setFullScreenable(fullscreenable) fullscreenable Boolean Sets whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.
win.isFullScreenable() Returns Boolean - Whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.
win.setClosable(closable) macOS Windows closable Boolean Sets whether the window can be manually closed by user. On Linux does nothing.
win.isClosable() macOS Windows Returns Boolean - Whether the window can be manually closed by user. On Linux always returns true.
win.setAlwaysOnTop(flag[, level][, relativelevel]) flag Boolean level String (optional) macOS Windows - Values include normal, floating, torn-off-menu, modal-panel, main-menu, status, pop-up-menu, screen-saver, and dock (Deprecated). The default is floating when flag is true. The level is reset to normal when the flag is false. Note that from floating to status included, the window is placed below the Dock on macOS and below the taskbar on Windows. From pop-up-menu to a higher it is shown above the Dock on macOS and above the taskbar on Windows. See the macOS docs for more details. relativeLevel Integer (optional) macOS - The number of layers higher to set this window relative to the given level. The default is 0. Note that Apple discourages setting levels higher than 1 above screen-saver. Sets whether the window should show always on top of other windows. After setting this, the window is still a normal window, not a toolbox window which can not be focused on.
win.isAlwaysOnTop() Returns Boolean - Whether the window is always on top of other windows.
" win.moveAbove(mediaSourceId) mediaSourceId String - Window id in the format of DesktopCapturerSource's id. For example ""window:1869:0"". Moves window above the source window in the sense of z-order. If the mediaSourceId is not of type window or if the window does not exist then this method throws an error. "
win.moveTop() Moves window to top(z-order) regardless of focus
win.center() Moves window to the center of the screen.
win.setPosition(x, y[, animate]) x Integer y Integer animate Boolean (optional) macOS Moves window to x and y.
win.getPosition() Returns Integer[] - Contains the window's current position.
win.setTitle(title) title String Changes the title of native window to title.
win.getTitle() Returns String - The title of the native window. Note: The title of the web page can be different from the title of the native window.
win.setSheetOffset(offsetY[, offsetX]) macOS offsetY Float offsetX Float (optional) Changes the attachment point for sheets on macOS. By default, sheets are attached just below the window frame, but you may want to display them beneath a HTML-rendered toolbar. For example: const { BrowserWindow } = require('electron') let win = new BrowserWindow() let toolbarRect = document.getElementById('toolbar').getBoundingClientRect() win.setSheetOffset(toolbarRect.height) Copy
win.flashFrame(flag) flag Boolean Starts or stops flashing the window to attract user's attention.
win.setSkipTaskbar(skip) skip Boolean Makes the window not show in the taskbar.
win.setKiosk(flag) flag Boolean Enters or leaves kiosk mode.
win.isKiosk() Returns Boolean - Whether the window is in kiosk mode.
" win.getMediaSourceId() Returns String - Window id in the format of DesktopCapturerSource's id. For example ""window🔢0"". More precisely the format is window:id:other_id where id is HWND on Windows, CGWindowID (uint64_t) on macOS and Window (unsigned long) on Linux. other_id is used to identify web contents (tabs) so within the same top level window. "
win.getNativeWindowHandle() Returns Buffer - The platform-specific handle of the window. The native type of the handle is HWND on Windows, NSView* on macOS, and Window (unsigned long) on Linux.
win.hookWindowMessage(message, callback) Windows message Integer callback Function Hooks a windows message. The callback is called when the message is received in the WndProc.
win.isWindowMessageHooked(message) Windows message Integer Returns Boolean - true or false depending on whether the message is hooked.
win.unhookWindowMessage(message) Windows message Integer Unhook the window message.
win.unhookAllWindowMessages() Windows Unhooks all of the window messages.
win.setRepresentedFilename(filename) macOS filename String Sets the pathname of the file the window represents, and the icon of the file will show in window's title bar.
win.getRepresentedFilename() macOS Returns String - The pathname of the file the window represents.
win.setDocumentEdited(edited) macOS edited Boolean Specifies whether the window’s document has been edited, and the icon in title bar will become gray when set to true.
win.isDocumentEdited() macOS Returns Boolean - Whether the window's document has been edited.
win.focusOnWebView()
win.blurWebView()
win.capturePage([rect]) rect Rectangle (optional) - The bounds to capture Returns Promise<NativeImage> - Resolves with a NativeImage Captures a snapshot of the page within rect. Omitting rect will capture the whole visible page.
" win.loadURL(url[, options]) url String options Object (optional) httpReferrer (String | Referrer) (optional) - An HTTP Referrer URL. userAgent String (optional) - A user agent originating the request. extraHeaders String (optional) - Extra headers separated by ""\n"" postData (UploadRawData[] | UploadFile[] | UploadBlob[]) (optional) baseURLForDataURL String (optional) - Base URL (with trailing path separator) for files to be loaded by the data URL. This is needed only if the specified url is a data URL and needs to load other files. Returns Promise<void> - the promise will resolve when the page has finished loading (see did-finish-load), and rejects if the page fails to load (see did-fail-load). Same as webContents.loadURL(url[, options]). The url can be a remote address (e.g. http://) or a path to a local HTML file using the file:// protocol. To ensure that file URLs are properly formatted, it is recommended to use Node's url.format method: let url = require('url').format({ protocol: 'file', slashes: true, pathname: require('path').join(\_\_dirname, 'index.html') }) win.loadURL(url) Copy You can load a URL using a POST request with URL-encoded data by doing the following: win.loadURL('http://localhost:8000/post', { postData: [{ type: 'rawData', bytes: Buffer.from('hello=world') }], extraHeaders: 'Content-Type: application/x-www-form-urlencoded' }) Copy "
win.loadFile(filePath[, options]) filePath String options Object (optional) query Record<String, String> (optional) - Passed to url.format(). search String (optional) - Passed to url.format(). hash String (optional) - Passed to url.format(). Returns Promise<void> - the promise will resolve when the page has finished loading (see did-finish-load), and rejects if the page fails to load (see did-fail-load). Same as webContents.loadFile, filePath should be a path to an HTML file relative to the root of your application. See the webContents docs for more information.
win.reload() Same as webContents.reload.
win.setMenu(menu) Linux Windows menu Menu | null Sets the menu as the window's menu bar.
win.removeMenu() Linux Windows Remove the window's menu bar.
win.setProgressBar(progress[, options]) progress Double options Object (optional) mode String Windows - Mode for the progress bar. Can be none, normal, indeterminate, error or paused. Sets progress value in progress bar. Valid range is [0, 1.0]. Remove progress bar when progress < 0; Change to indeterminate mode when progress > 1. On Linux platform, only supports Unity desktop environment, you need to specify the *.desktop file name to desktopName field in package.json. By default, it will assume {app.name}.desktop. On Windows, a mode can be passed. Accepted values are none, normal, indeterminate, error, and paused. If you call setProgressBar without a mode set (but with a value within the valid range), normal will be assumed.
win.setOverlayIcon(overlay, description) Windows overlay NativeImage | null - the icon to display on the bottom right corner of the taskbar icon. If this parameter is null, the overlay is cleared description String - a description that will be provided to Accessibility screen readers Sets a 16 x 16 pixel overlay onto the current taskbar icon, usually used to convey some sort of application status or to passively notify the user.
win.setHasShadow(hasShadow) hasShadow Boolean Sets whether the window should have a shadow.
win.hasShadow() Returns Boolean - Whether the window has a shadow.
win.setOpacity(opacity) Windows macOS opacity Number - between 0.0 (fully transparent) and 1.0 (fully opaque) Sets the opacity of the window. On Linux, does nothing. Out of bound number values are clamped to the [0, 1] range.
win.getOpacity() Returns Number - between 0.0 (fully transparent) and 1.0 (fully opaque). On Linux, always returns 1.
win.setShape(rects) Windows Linux Experimental rects Rectangle[] - Sets a shape on the window. Passing an empty list reverts the window to being rectangular. Setting a window shape determines the area within the window where the system permits drawing and user interaction. Outside of the given region, no pixels will be drawn and no mouse events will be registered. Mouse events outside of the region will not be received by that window, but will fall through to whatever is behind the window.
win.setThumbarButtons(buttons) Windows buttons ThumbarButton[] Returns Boolean - Whether the buttons were added successfully Add a thumbnail toolbar with a specified set of buttons to the thumbnail image of a window in a taskbar button layout. Returns a Boolean object indicates whether the thumbnail has been added successfully. The number of buttons in thumbnail toolbar should be no greater than 7 due to the limited room. Once you setup the thumbnail toolbar, the toolbar cannot be removed due to the platform's limitation. But you can call the API with an empty array to clean the buttons. The buttons is an array of Button objects: Button Object icon NativeImage - The icon showing in thumbnail toolbar. click Function tooltip String (optional) - The text of the button's tooltip. flags String[](optional) - Control specific states and behaviors of the button. By default, it is ['enabled']. The flags is an array that can include following Strings: enabled - The button is active and available to the user. disabled - The button is disabled. It is present, but has a visual state indicating it will not respond to user action. dismissonclick - When the button is clicked, the thumbnail window closes immediately. nobackground - Do not draw a button border, use only the image. hidden - The button is not shown to the user. noninteractive - The button is enabled but not interactive; no pressed button state is drawn. This value is intended for instances where the button is used in a notification.  
 win.setThumbnailClip(region) Windows region Rectangle - Region of the window Sets the region of the window to show as the thumbnail image displayed when hovering over the window in the taskbar. You can reset the thumbnail to be the entire window by specifying an empty region: { x: 0, y: 0, width: 0, height: 0 }.
win.setThumbnailToolTip(toolTip) Windows toolTip String Sets the toolTip that is displayed when hovering over the window thumbnail in the taskbar.
win.setAppDetails(options) Windows options Object appId String (optional) - Window's App User Model ID. It has to be set, otherwise the other options will have no effect. appIconPath String (optional) - Window's Relaunch Icon. appIconIndex Integer (optional) - Index of the icon in appIconPath. Ignored when appIconPath is not set. Default is 0. relaunchCommand String (optional) - Window's Relaunch Command. relaunchDisplayName String (optional) - Window's Relaunch Display Name. Sets the properties for the window's taskbar button. Note: relaunchCommand and relaunchDisplayName must always be set together. If one of those properties is not set, then neither will be used.
win.showDefinitionForSelection() macOS Same as webContents.showDefinitionForSelection().
win.setIcon(icon) Windows Linux icon NativeImage | String Changes window icon.
win.setWindowButtonVisibility(visible) macOS visible Boolean Sets whether the window traffic light buttons should be visible. This cannot be called when titleBarStyle is set to customButtonsOnHover.
win.setAutoHideMenuBar(hide) hide Boolean Sets whether the window menu bar should hide itself automatically. Once set the menu bar will only show when users press the single Alt key. If the menu bar is already visible, calling setAutoHideMenuBar(true) won't hide it immediately.
win.isMenuBarAutoHide() Returns Boolean - Whether menu bar automatically hides itself.
win.setMenuBarVisibility(visible) Windows Linux visible Boolean Sets whether the menu bar should be visible. If the menu bar is auto-hide, users can still bring up the menu bar by pressing the single Alt key.
win.isMenuBarVisible() Returns Boolean - Whether the menu bar is visible.
win.setVisibleOnAllWorkspaces(visible) visible Boolean Sets whether the window should be visible on all workspaces. Note: This API does nothing on Windows.
win.isVisibleOnAllWorkspaces() Returns Boolean - Whether the window is visible on all workspaces. Note: This API always returns false on Windows.
win.setIgnoreMouseEvents(ignore[, options]) ignore Boolean options Object (optional) forward Boolean (optional) macOS Windows - If true, forwards mouse move messages to Chromium, enabling mouse related events such as mouseleave. Only used when ignore is true. If ignore is false, forwarding is always disabled regardless of this value. Makes the window ignore all mouse events. All mouse events happened in this window will be passed to the window below this window, but if this window has focus, it will still receive keyboard events.
win.setContentProtection(enable) macOS Windows enable Boolean Prevents the window contents from being captured by other apps. On macOS it sets the NSWindow's sharingType to NSWindowSharingNone. On Windows it calls SetWindowDisplayAffinity with WDA_MONITOR.
win.setFocusable(focusable) macOS Windows focusable Boolean Changes whether the window can be focused. On macOS it does not remove the focus from the window.
win.setParentWindow(parent) parent BrowserWindow | null Sets parent as current window's parent window, passing null will turn current window into a top-level window.
win.getParentWindow() Returns BrowserWindow - The parent window.
win.getChildWindows() Returns BrowserWindow[] - All child windows.
win.setAutoHideCursor(autoHide) macOS autoHide Boolean Controls whether to hide cursor when typing.
win.selectPreviousTab() macOS Selects the previous tab when native tabs are enabled and there are other tabs in the window.
win.selectNextTab() macOS Selects the next tab when native tabs are enabled and there are other tabs in the window.
win.mergeAllWindows() macOS Merges all windows into one window with multiple tabs when native tabs are enabled and there is more than one open window.
win.moveTabToNewWindow() macOS Moves the current tab into a new window if native tabs are enabled and there is more than one tab in the current window.
win.toggleTabBar() macOS Toggles the visibility of the tab bar if native tabs are enabled and there is only one tab in the current window.
win.addTabbedWindow(browserWindow) macOS browserWindow BrowserWindow Adds a window as a tab on this window, after the tab for the window instance.
win.setVibrancy(type) macOS type String | null - Can be appearance-based, light, dark, titlebar, selection, menu, popover, sidebar, medium-light, ultra-dark, header, sheet, window, hud, fullscreen-ui, tooltip, content, under-window, or under-page. See the macOS documentation for more details. Adds a vibrancy effect to the browser window. Passing null or an empty string will remove the vibrancy effect on the window. Note that appearance-based, light, dark, medium-light, and ultra-dark have been deprecated and will be removed in an upcoming version of macOS.
win.setTrafficLightPosition(position) macOS position Point Set a custom position for the traffic light buttons. Can only be used with titleBarStyle set to hidden.
win.getTrafficLightPosition() macOS Returns Point - The current position for the traffic light buttons. Can only be used with titleBarStyle set to hidden.
win.setTouchBar(touchBar) macOS Experimental touchBar TouchBar | null Sets the touchBar layout for the current window. Specifying null or undefined clears the touch bar. This method only has an effect if the machine has a touch bar and is running on macOS 10.12.1+. Note: The TouchBar API is currently experimental and may change or be removed in future Electron releases.
win.setBrowserView(browserView) Experimental browserView BrowserView | null - Attach browserView to win. If there are other BrowserViews attached, they will be removed from this window.  
 win.getBrowserView() Experimental Returns BrowserView | null - The BrowserView attached to win. Returns null if one is not attached. Throws an error if multiple BrowserViews are attached.
win.addBrowserView(browserView) Experimental browserView BrowserView Replacement API for setBrowserView supporting work with multi browser views.
win.removeBrowserView(browserView) Experimental browserView BrowserView  
 win.getBrowserViews() Experimental Returns BrowserView[] - an array of all BrowserViews that have been attached with addBrowserView or setBrowserView. Note: The BrowserView API is currently experimental and may change or be removed in future Electron releases.
