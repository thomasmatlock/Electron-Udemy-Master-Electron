<https://www.electronjs.org/docs/api/browser-window#instance-methods>
// Objects created with new BrowserWindow have the following instance methods: Note: Some methods are only available on specific operating systems and are labeled as such.

win.destroy() //  Force closing the window, the unload and beforeunload event won't be emitted for the web page, and close event will also not be emitted for this window, but it guarantees the closed event will be emitted.
win.close() //  Try to close the window. This has the same effect as a user manually clicking the close button of the window. The web page may cancel the close though. See the close event.
win.focus() //  Focuses on the window.
win.blur() //  Removes focus from the window.
win.isFocused() //  Returns Boolean - Whether the window is focused.
win.isDestroyed() //  Returns Boolean - Whether the window is destroyed.
win.show() //  Shows and gives focus to the window.
win.showInactive() //  Shows the window but doesn't focus on it.
win.hide() //  Hides the window.
win.isVisible() //  Returns Boolean - Whether the window is visible to the user.
win.isModal() //  Returns Boolean - Whether current window is a modal window.
win.maximize() //  Maximizes the window. This will also show (but not focus) //  the window if it isn't being displayed already.
win.unmaximize() //  Unmaximizes the window.
win.isMaximized() //  Returns Boolean - Whether the window is maximized.
win.minimize() //  Minimizes the window. On some platforms the minimized window will be shown in the Dock.
win.restore() //  Restores the window from minimized state to its previous state.
win.isMinimized() //  Returns Boolean - Whether the window is minimized.
win.setFullScreen(flag) //  flag Boolean Sets whether the window should be in fullscreen mode.
win.isFullScreen() //  Returns Boolean - Whether the window is in fullscreen mode.
win.setSimpleFullScreen(flag) //  macOS flag Boolean Enters or leaves simple fullscreen mode. Simple fullscreen mode emulates the native fullscreen behavior found in versions of macOS prior to Lion (10.7) // .
win.isSimpleFullScreen() //  macOS Returns Boolean - Whether the window is in simple (pre-Lion) //  fullscreen mode.
win.isNormal() //  Returns Boolean - Whether the window is in normal state (not maximized, not minimized, not in fullscreen mode) // .
win.setAspectRatio(aspectRatio[, extraSize]) //  <https://www.electronjs.org/docs/api/browser-window#winsetaspectratioaspectratio-extrasize-macos-linux>
win.setBackgroundColor(backgroundColor) //  backgroundColor String - Window's background color as a hexadecimal value, like #66CD00 or #FFF or #80FFFFFF (alpha is supported if transparent is true) // . Default is #FFF (white) // .
win.previewFile(path[, displayName]) //  <https://www.electronjs.org/docs/api/browser-window#winpreviewfilepath-displayname-macos>
win.closeFilePreview() //  macOS Closes the currently open Quick Look panel.
win.setBounds(bounds[, animate]) // , <https://www.electronjs.org/docs/api/browser-window#winsetboundsbounds-animate>
win.getBounds() //  Returns Rectangle - The bounds of the window as Object.
win.getBackgroundColor() //  Returns String - Gets the background color of the window. See Setting backgroundColor.
win.setContentBounds(bounds[, animate]) //  bounds Rectangle animate Boolean (optional) //  macOS Resizes and moves the window's client area (e.g. the web page) //  to the supplied bounds.
win.getContentBounds() //  Returns Rectangle - The bounds of the window's client area as Object.
win.getNormalBounds() //  Returns Rectangle - Contains the window bounds of the normal state, regardless of if window is max, min, or user-scaled
win.setEnabled(enable) //  enable Boolean Disable or enable the window.
win.isEnabled() //  Returns Boolean - whether the window is enabled.
win.setSize(width, height[, animate]) //  width Integer height Integer animate Boolean (optional) //  macOS Resizes the window to width and height.
win.getSize() //  Returns Integer[] - Contains the window's width and height.
win.setContentSize(width, height[, animate]) //  width Integer height Integer animate Boolean (optional) //  macOS Resizes the window's client area (e.g. the web page) //  to width and height.
win.getContentSize() //  Returns Integer[] - Contains the window's client area's width and height.
win.setMinimumSize(width, height) //  width Integer height Integer Sets the minimum size of window to width and height.
win.getMinimumSize() //  Returns Integer[] - Contains the window's minimum width and height.
win.setMaximumSize(width, height) //  width Integer height Integer Sets the maximum size of window to width and height.
win.getMaximumSize() //  Returns Integer[] - Contains the window's maximum width and height.
win.setResizable(resizable) //  resizable Boolean Sets whether the window can be manually resized by the user.
win.isResizable() //  Returns Boolean - Whether the window can be manually resized by the user.
win.setMovable(movable) //  macOS Windows movable Boolean Sets whether the window can be moved by user. On Linux does nothing.
win.isMovable() //  macOS Windows Returns Boolean - Whether the window can be moved by user. On Linux always returns true.
win.setMinimizable(minimizable) //  macOS Windows minimizable Boolean Sets whether the window can be manually minimized by user. On Linux does nothing.
win.isMinimizable() //  macOS Windows Returns Boolean - Whether the window can be manually minimized by the user. On Linux always returns true.
win.setMaximizable(maximizable) //  macOS Windows maximizable Boolean Sets whether the window can be manually maximized by user. On Linux does nothing.
win.isMaximizable() //  macOS Windows Returns Boolean - Whether the window can be manually maximized by user. On Linux always returns true.
win.setFullScreenable(fullscreenable) //  fullscreenable Boolean Sets whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.
win.isFullScreenable() //  Returns Boolean - Whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.
win.setClosable(closable) //  macOS Windows closable Boolean Sets whether the window can be manually closed by user. On Linux does nothing.
win.isClosable() //  macOS Windows Returns Boolean - Whether the window can be manually closed by user. On Linux always returns true.
win.setAlwaysOnTop(flag[, level][, relativelevel]) //  <https://www.electronjs.org/docs/api/browser-window#winsetalwaysontopflag-level-relativelevel>
win.isAlwaysOnTop() //  Returns Boolean - Whether the window is always on top of other windows.
win.moveAbove(mediaSourceId) //  mediaSourceId String - Window id in the format of DesktopCapturerSource's id. For example ""window:1869:0"". Moves window above the source window in the sense of z-order.
win.moveTop() //  Moves window to top(z-order) //  regardless of focus
win.center() //  Moves window to the center of the screen.
win.setPosition(x, y[, animate]) //  x Integer y Integer animate Boolean (optional) //  macOS Moves window to x and y.
win.getPosition() //  Returns Integer[] - Contains the window's current position.
win.setTitle(title) //  title String Changes the title of native window to title.
win.getTitle() //  Returns String - The title of the native window. Note: The title of the web page can be different from the title of the native window.
win.setSheetOffset(offsetY[, offsetX]) //  macOS offsetY Float offsetX Float (optional) //  <https://www.electronjs.org/docs/api/browser-window#winsetsheetoffsetoffsety-offsetx-macossetSheetOffset(toolbarRect.height>) //  Copy
win.flashFrame(flag) //  flag Boolean Starts or stops flashing the window to attract user's attention.
win.setSkipTaskbar(skip) //  skip Boolean Makes the window not show in the taskbar.
win.setKiosk(flag) //  flag Boolean Enters or leaves kiosk mode.
win.isKiosk() //  Returns Boolean - Whether the window is in kiosk mode.
win.getMediaSourceId() //  Returns String - Window id in the format of DesktopCapturerSource's id. <https://www.electronjs.org/docs/api/browser-window#wingetmediasourceid>
win.getNativeWindowHandle() //  Returns Buffer - The platform-specific handle of the window. The native type of the handle is HWND on Windows, NSView\* on macOS, and Window (unsigned long) //  on Linux.
win.hookWindowMessage(message, callback) //  Windows message Integer callback Function Hooks a windows message. The callback is called when the message is received in the WndProc.
win.isWindowMessageHooked(message) //  Windows message Integer Returns Boolean - true or false depending on whether the message is hooked.
win.unhookWindowMessage(message) //  Windows message Integer Unhook the window message.
win.unhookAllWindowMessages() //  Windows Unhooks all of the window messages.
win.setRepresentedFilename(filename) //  macOS filename String Sets the pathname of the file the window represents, and the icon of the file will show in window's title bar.
win.getRepresentedFilename() //  macOS Returns String - The pathname of the file the window represents.
win.setDocumentEdited(edited) //  macOS edited Boolean Specifies whether the window’s document has been edited, and the icon in title bar will become gray when set to true.
win.isDocumentEdited() //  macOS Returns Boolean - Whether the window's document has been edited.
win.focusOnWebView() // 
win.blurWebView() // 
win.capturePage([rect]) //  rect Rectangle (optional) //  - The bounds to capture Returns Promise<NativeImage> - <https://www.electronjs.org/docs/api/browser-window#wincapturepagerect>
win.loadURL(url[, options]) //  url String options Object (optional) //  httpReferrer (String | Referrer) //  (optional) //  - <https://www.electronjs.org/docs/api/browser-window#winloadurlurl-options>
win.loadFile(filePath[, options]) //  filePath String options Object (optional) //  query Record<String, String> (optional) //  - <https://www.electronjs.org/docs/api/browser-window#winloadfilefilepath-options>
win.reload() //  Same as webContents.reload.
win.setMenu(menu) //  Linux Windows menu Menu | null Sets the menu as the window's menu bar.
win.removeMenu() //  Linux Windows Remove the window's menu bar.
win.setProgressBar(progress[, options]) //  progress Double options Object (optional) //  mode String Windows - <https://www.electronjs.org/docs/api/browser-window#winsetprogressbarprogress-options>
win.setOverlayIcon(overlay, description) //  Windows overlay NativeImage | null - the icon to display on the bottom right corner of the taskbar icon.
win.setHasShadow(hasShadow) //  hasShadow Boolean Sets whether the window should have a shadow.
win.hasShadow() //  Returns Boolean - Whether the window has a shadow.
win.setOpacity(opacity) //  Windows macOS opacity Number - between 0.0 (fully transparent) //  and 1.0 (fully opaque) //  Sets the opacity of the window. Out of bound number values are clamped to the [0, 1] range.
win.getOpacity() //  Returns Number - between 0.0 (fully transparent) //  and 1.0 (fully opaque) // . On Linux, always returns 1.
win.setShape(rects) //  <https://www.electronjs.org/docs/api/browser-window#winsetshaperects-windows-linux-experimental>
win.setThumbarButtons(buttons) //  <https://www.electronjs.org/docs/api/browser-window#winsetthumbarbuttonsbuttons-windows>
win.setThumbnailClip(region) //  Windows region Rectangle - Region of the window Sets the region of the window to show as the thumbnail image displayed when hovering over the window in the taskbar.
win.setThumbnailToolTip(toolTip) //  Windows toolTip String Sets the toolTip that is displayed when hovering over the window thumbnail in the taskbar.
win.setAppDetails(options) //  <https://www.electronjs.org/docs/api/browser-window#winsetappdetailsoptions-windows>
win.showDefinitionForSelection() //  macOS Same as webContents.showDefinitionForSelection() // .
win.setIcon(icon) //  Windows Linux icon NativeImage | String Changes window icon.
win.setWindowButtonVisibility(visible) //  macOS visible Boolean Sets whether the window traffic light buttons should be visible. This cannot be called when titleBarStyle is set to customButtonsOnHover.
win.setAutoHideMenuBar(hide) //  hide Boolean Sets whether the window menu bar should hide itself automatically. <https://www.electronjs.org/docs/api/browser-window#winsetautohidemenubarhide>
win.isMenuBarAutoHide() //  Returns Boolean - Whether menu bar automatically hides itself.
win.setMenuBarVisibility(visible) //  Windows Linux visible Boolean Sets whether the menu bar should be visible. If the menu bar is auto-hide, users can still bring up the menu bar by pressing the single Alt key.
win.isMenuBarVisible() //  Returns Boolean - Whether the menu bar is visible.
win.setVisibleOnAllWorkspaces(visible) //  visible Boolean Sets whether the window should be visible on all workspaces. Note: This API does nothing on Windows.
win.isVisibleOnAllWorkspaces() //  Returns Boolean - Whether the window is visible on all workspaces. Note: This API always returns false on Windows.
win.setIgnoreMouseEvents(ignore[, options]) //  ignore Boolean options Object (optional) //  forward Boolean (optional) //  macOS Windows - <https://www.electronjs.org/docs/api/browser-window#winsetignoremouseeventsignore-options>
win.setContentProtection(enable) //  macOS Windows enable Boolean Prevents the window contents from being captured by other apps.
win.setFocusable(focusable) //  macOS Windows focusable Boolean Changes whether the window can be focused. On macOS it does not remove the focus from the window.
win.setParentWindow(parent) //  parent BrowserWindow | null Sets parent as current window's parent window, passing null will turn current window into a top-level window.
win.getParentWindow() //  Returns BrowserWindow - The parent window.
win.getChildWindows() //  Returns BrowserWindow[] - All child windows.
win.setAutoHideCursor(autoHide) //  macOS autoHide Boolean Controls whether to hide cursor when typing.
win.selectPreviousTab() //  macOS Selects the previous tab when native tabs are enabled and there are other tabs in the window.
win.selectNextTab() //  macOS Selects the next tab when native tabs are enabled and there are other tabs in the window.
win.mergeAllWindows() // , macOS Merges all open windows into one window with multiple tabs when native tabs are enabled
win.moveTabToNewWindow() // , macOS Moves the current tab into a new window if native tabs are enabled and there is more than one tab in the current window.
win.toggleTabBar() //  macOS Toggles the visibility of the tab bar if native tabs are enabled and there is only one tab in the current window.
win.addTabbedWindow(browserWindow) //  macOS browserWindow BrowserWindow Adds a window as a tab on this window, after the tab for the window instance.
win.setVibrancy(type) //  macOS type String | null - <https://www.electronjs.org/docs/api/browser-window#winsetvibrancytype-macos>
win.setTrafficLightPosition(position) //  macOS position Point Set a custom position for the traffic light buttons. Can only be used with titleBarStyle set to hidden.
win.getTrafficLightPosition() //  macOS Returns Point - The current position for the traffic light buttons. Can only be used with titleBarStyle set to hidden.
win.setTouchBar(touchBar) //  macOS Experimental touchBar TouchBar | null Sets the touchBar layout for the current window. <https://www.electronjs.org/docs/api/browser-window#winsettouchbartouchbar-macos-experimental>
win.setBrowserView(browserView) //  Experimental browserView BrowserView | null - Attach browserView to win. If there are other BrowserViews attached, they will be removed from this window.
win.getBrowserView() //  Experimental Returns BrowserView | null - The BrowserView attached to win. Returns null if one is not attached. Throws an error if multiple BrowserViews are attached.
win.addBrowserView(browserView) //  Experimental browserView BrowserView Replacement API for setBrowserView supporting work with multi browser views.
win.removeBrowserView(browserView) //  Experimental browserView BrowserView
win.getBrowserViews() //  Experimental Returns BrowserView[] - an array of all BrowserViews that have been attached with addBrowserView or setBrowserView.
