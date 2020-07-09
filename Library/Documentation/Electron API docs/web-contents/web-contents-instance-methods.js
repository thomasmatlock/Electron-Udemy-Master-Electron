Instance Methods, https://www.electronjs.org/docs/api/web-contents#instance-methods

contents.loadURL(url[, options]) //, https://www.electronjs.org/docs/api/web-contents#contentsloadurlurl-options
contents.loadFile(filePath[, options]) //, https://www.electronjs.org/docs/api/web-contents#contentsloadfilefilepath-options
contents.downloadURL(url) //, Initiates a download of the resource at url without navigating. The will-download event of session will be triggered.
contents.getURL() //, Returns String - The URL of the current web page.
contents.getTitle() //, Returns String - The title of the current web page.
contents.isDestroyed() //, Returns Boolean - Whether the web page is destroyed.
contents.focus() //, Focuses the web page.
contents.isFocused() //, Returns Boolean - Whether the web page is focused.
contents.isLoading() //, Returns Boolean - Whether web page is still loading resources.
contents.isLoadingMainFrame() //, Returns Boolean - Whether the main frame (and not just iframes or frames within it) // is still loading.
contents.isWaitingForResponse() //, Returns Boolean - Whether the web page is waiting for a first-response from the main resource of the page.
contents.stop() //, Stops any pending navigation.
contents.reload() //, Reloads the current web page.
contents.reloadIgnoringCache() //, Reloads current page and ignores cache.
contents.canGoBack() //, Returns Boolean - Whether the browser can go back to previous web page.
contents.canGoForward() //, Returns Boolean - Whether the browser can go forward to next web page.
contents.canGoToOffset(offset) //, Returns Boolean - Whether the web page can go to offset.
contents.clearHistory() //, Clears the navigation history.
contents.goBack() //, Makes the browser go back a web page.
contents.goForward() //, Makes the browser go forward a web page.
contents.goToIndex(index) //, Navigates browser to the specified absolute web page index.
contents.goToOffset(offset) //, Navigates to the specified offset from the "current entry".
contents.isCrashed() //, Returns Boolean - Whether the renderer process has crashed.
contents.setUserAgent(userAgent) //, Overrides the user agent for this web page.
contents.getUserAgent() //, Returns String - The user agent for this web page.
contents.insertCSS(css[, options]) //, Returns Promise<String> - A promise that resolves with a key for the inserted CSS that can later be used to remove the CSS via contents.removeInsertedCSS(key) //.
contents.removeInsertedCSS(key) //, Removes the inserted CSS from the current web page. The stylesheet is identified by its key, which is returned from contents.insertCSS(css) //.
contents.executeJavaScript(code[, userGesture]) //, Evaluates code in page.
contents.executeJavaScriptInIsolatedWorld(worldId, scripts[, userGesture]) //, Works like executeJavaScript but evaluates scripts in an isolated context.
contents.setIgnoreMenuShortcuts(ignore) //, Ignore application menu shortcuts while this web contents is focused.
contents.setAudioMuted(muted) //, Mute the audio on the current web page.
contents.isAudioMuted() //, Returns Boolean - Whether this page has been muted.
contents.isCurrentlyAudible() //, Returns Boolean - Whether audio is currently playing.
contents.setZoomFactor(factor) //, Changes the zoom factor to the specified factor. Zoom factor is zoom percent divided by 100, so 300% = 3.0.
contents.getZoomFactor() //, Returns Number - the current zoom factor.
contents.setZoomLevel(level) //, Changes the zoom level to the specified level. The original size is 0 and each increment above or below represents zooming 20% larger or smaller to default limits of 300% and 50% of original size, respectively. The formula for this is scale := 1.2 ^ level.
contents.getZoomLevel() //, Returns Number - the current zoom level.
contents.setVisualZoomLevelLimits(minimumLevel, maximumLevel) //, Sets the maximum and minimum pinch-to-zoom level.
contents.undo() //, Executes the editing command undo in web page.
contents.redo() //, Executes the editing command redo in web page.
contents.cut() //, Executes the editing command cut in web page.
contents.copy() //, Executes the editing command copy in web page.
contents.copyImageAt(x, y) //, Copy the image at the given position to the clipboard.
contents.paste() //, Executes the editing command paste in web page.
contents.pasteAndMatchStyle() //, Executes the editing command pasteAndMatchStyle in web page.
contents.delete() //, Executes the editing command delete in web page.
contents.selectAll() //, Executes the editing command selectAll in web page.
contents.unselect() //, Executes the editing command unselect in web page.
contents.replace(text) //, Executes the editing command replace in web page.
contents.replaceMisspelling(text) //, Executes the editing command replaceMisspelling in web page.
contents.insertText(text) //, Inserts text to the focused element.
contents.findInPage(text[, options]) //, Starts a request to find all matches for the text in the web page. The result of the request can be obtained by subscribing to found-in-page event.
contents.stopFindInPage(action) //, Stops any findInPage request for the webContents with the provided action.
contents.capturePage([rect]) //, Captures a snapshot of the page within rect. Omitting rect will capture the whole visible page.
contents.isBeingCaptured() //, Returns Boolean - Whether this page is being captured. It returns true when the capturer count is large then 0.
contents.incrementCapturerCount([size, stayHidden]) //, Increase the capturer count by one. The page is considered visible when its browser window is hidden and the capturer count is non-zero. If you would like the page to stay hidden, you should ensure that stayHidden is set to true.
contents.decrementCapturerCount([stayHidden]) //, Decrease the capturer count by one. The page will be set to hidden or occluded state when its browser window is hidden or occluded and the capturer count reaches zero. If you want to decrease the hidden capturer count instead you should set stayHidden to true.
contents.getPrinters() //, Get the system printer list.
contents.print([options], [callback]) //, Prints window's web page. When silent is set to true, Electron will pick the system's default printer if deviceName is empty and the default settings for printing.
contents.printToPDF(options) //, Prints window's web page as PDF with Chromium's preview printing custom settings.
contents.addWorkSpace(path) //, Adds the specified path to DevTools workspace. Must be used after DevTools creation:
contents.removeWorkSpace(path) //, Removes the specified path from DevTools workspace.
contents.setDevToolsWebContents(devToolsWebContents) //, Uses the devToolsWebContents as the target WebContents to show devtools.
contents.openDevTools([options]) //, Opens the devtools.
contents.closeDevTools() //, Closes the devtools.
contents.isDevToolsOpened() //, Returns Boolean - Whether the devtools is opened.
contents.isDevToolsFocused() //, Returns Boolean - Whether the devtools view is focused .
contents.toggleDevTools() //, Toggles the developer tools.
contents.inspectElement(x, y) //, Starts inspecting element at position (x, y) //.
contents.inspectSharedWorker() //, Opens the developer tools for the shared worker context.
contents.inspectSharedWorkerById(workerId) //, Inspects the shared worker based on its ID.
contents.getAllSharedWorkers() //, Returns SharedWorkerInfo[] - Information about all Shared Workers.
contents.inspectServiceWorker() //, Opens the developer tools for the service worker context.
contents.send(channel, ...args) //, Send an asynchronous message to the renderer process via channel, along with arguments. Arguments will be serialized with the Structured Clone Algorithm, just like postMessage, so prototype chains will not be included. Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.
contents.sendToFrame(frameId, channel, ...args) //, Send an asynchronous message to a specific frame in a renderer process via channel, along with arguments. Arguments will be serialized with the Structured Clone Algorithm, just like postMessage, so prototype chains will not be included. Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.
contents.enableDeviceEmulation(parameters) //, Enable device emulation with the given parameters.
contents.disableDeviceEmulation() //, Disable device emulation enabled by webContents.enableDeviceEmulation.
contents.sendInputEvent(inputEvent) //, Sends an input event to the page. Note: The BrowserWindow containing the contents needs to be focused for sendInputEvent() // to work.
contents.beginFrameSubscription([onlyDirty,]callback) //, Begin subscribing for presentation events and captured frames, the callback will be called with callback(image, dirtyRect) // when there is a presentation event.
contents.endFrameSubscription() //, End subscribing for frame presentation events.
contents.startDrag(item) //, Sets the item as dragging item for current drag-drop operation, file is the absolute path of the file to be dragged, and icon is the image showing under the cursor when dragging.
contents.savePage(fullPath, saveType) //, Returns Promise<void> - resolves if the page is saved.
contents.showDefinitionForSelection() //, Shows pop-up dictionary that searches the selected word on the page.
contents.isOffscreen() //, Returns Boolean - Indicates whether offscreen rendering is enabled.
contents.startPainting() //, If offscreen rendering is enabled and not painting, start painting.
contents.stopPainting() //, If offscreen rendering is enabled and painting, stop painting.
contents.isPainting() //, Returns Boolean - If offscreen rendering is enabled returns whether it is currently painting.
contents.setFrameRate(fps) //, If offscreen rendering is enabled sets the frame rate to the specified number. Only values between 1 and 60 are accepted.
contents.getFrameRate() //, Returns Integer - If offscreen rendering is enabled returns the current frame rate.
contents.invalidate() //, Schedules a full repaint of the window this web contents is in.
contents.getWebRTCIPHandlingPolicy() //, Returns String - Returns the WebRTC IP Handling Policy.
contents.setWebRTCIPHandlingPolicy(policy) //, Setting the WebRTC IP handling policy allows you to control which IPs are exposed via WebRTC. See BrowserLeaks for more details.
contents.getOSProcessId() //, Returns Integer - The operating system pid of the associated renderer process.
contents.getProcessId() //, Returns Integer - The Chromium internal pid of the associated renderer.
contents.takeHeapSnapshot(filePath) //, Takes a V8 heap snapshot and saves it to filePath.
contents.setBackgroundThrottling(allowed) //, Controls whether or not this WebContents will throttle animations and timers when the page becomes backgrounded. This also affects the Page Visibility API.
contents.getType() //, Returns String - the type of the webContent. Can be backgroundPage, window, browserView, remote, webview or offscreen.
contents.audioMuted// , A Boolean property that determines whether this page is muted.
contents.userAgent //, A String property that determines the user agent for this web page.
contents.zoomLevel //, A Number property that determines the zoom level for this web contents.The original size is 0 and each increment above or below represents zooming 20 % larger or smaller to default limits of 300 % and 50 % of original size, respectively.The formula for this is scale := 1.2 ^ level.
contents.zoomFactor //, A Number property that determines the zoom factor for this web contents.The zoom factor is the zoom percent divided by 100, so 300 % = 3.0.
contents.frameRate //, An Integer property that sets the frame rate of the web contents to the specified number.Only values between 1 and 60 are accepted.
contents.id //, A Integer representing the unique ID of this WebContents.Each ID is unique among all WebContents instances of the entire Electron application.
contents.session //, A Session used by this webContents.
contents.hostWebContents //, A WebContents instance that might own this WebContents.
contents.devToolsWebContents //, A WebContents | null property that represents the of DevTools WebContents associated with a given WebContents.
contents.debugger // , A Debugger instance for this webContents.
