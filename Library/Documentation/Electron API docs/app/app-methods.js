/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// <https://www.electronjs.org/docs/api/app#methods>
// The app object has the following methods:

app.quit(), // Try to close all windows. The before-quit event will be emitted first. If all windows are successfully closed, //  the will-quit event will be emitted and by default the application will terminate.
app.exit([exitCode]), //  Exits immediately with exitCode. exitCode defaults to 0.
app.relaunch([options]), // Relaunches the app when current instance exits.
app.isReady(), // Returns Boolean - true if Electron has finished initializing, //  false otherwise. See also app.whenReady().
app.whenReady(), // Returns Promise<void> - fulfilled when Electron is initialized. May be used as a convenient alternative to checking app.isReady() and subscribing to the ready event if the app is not ready yet.
app.focus([options]), // On Linux, //  focuses on the first visible window. On macOS, //  makes the application the active app. On Windows, //  focuses on the application's first window.
app.hide(), // Hides all application windows without minimizing them.
app.show(), // Shows application windows after they were hidden. Does not automatically focus them.
app.setAppLogsPath([path]), // Sets or creates a directory your app's logs which can then be manipulated with app.getPath() or app.setPath(pathName, //  newPath).
app.getAppPath(), // Returns String - The current application directory.
app.getPath(name), // Returns String - A path to a special directory or file associated with name. On failure, //  an Error is thrown.
app.getFileIcon(path[, //  options]), // Returns Promise<NativeImage> - fulfilled with the app's icon, //  which is a NativeImage.
app.setPath(name, //  path), // Overrides the path to a special directory or file associated with name. If the path specifies a directory that does not exist, //  an Error is thrown.
app.getVersion(), // Returns String - The version of the loaded application. If no version is found in the application's package.json file, //  the version of the current bundle or executable is returned.
app.getName(), //  Returns String - The current application's name, //  which is the name in the application's package.json file.
app.setName(name), // Overrides the current application's name.
app.getLocale(), // Returns String - The current application locale. Possible return values are documented here.
app.getLocaleCountryCode(), // Returns String - User operating system's locale two-letter ISO 3166 country code. The value is taken from native OS APIs.
app.addRecentDocument(path), // Adds path to the recent documents list.
app.clearRecentDocuments(), // Clears the recent documents list.
app.setAsDefaultProtocolClient(protocol[, //  path, //  args]), // Returns Boolean - Whether the call succeeded. <https://www.electronjs.org/docs/api/app#appsetasdefaultprotocolclientprotocol-path-args>
app.removeAsDefaultProtocolClient(protocol[, //  path, //  args]), // Returns Boolean - Whether the call succeeded. <https://www.electronjs.org/docs/api/app#appremoveasdefaultprotocolclientprotocol-path-args-macos-windows>
app.isDefaultProtocolClient(protocol[, //  path, //  args]), //  Returns Boolean - Whether the current executable is the default handler for a protocol (aka URI scheme).
app.getApplicationNameForProtocol(url), //  Returns String - Name of the application handling the protocol, //  or an empty string if there is no handler.
app.setUserTasks(tasks), //  Adds tasks to the Tasks category of the Jump List on Windows. tasks is an array of Task objects.
app.getJumpListSettings(), //  <https://www.electronjs.org/docs/api/app#appgetjumplistsettings-windows>
app.setJumpList(categories), //  Sets or removes a custom Jump List for the application, //  <https://www.electronjs.org/docs/api/app#appsetjumplistcategories-windows>
app.requestSingleInstanceLock(), //  Returns Boolean. The return value of this method indicates whether or not this instance of your application successfully obtained the lock.
app.hasSingleInstanceLock(), //  Returns Boolean. This method returns whether or not this instance of your app is currently holding the single instance lock.
app.releaseSingleInstanceLock(), //  Releases all locks that were created by requestSingleInstanceLock. This will allow multiple instances of the application to once again run side by side.
app.setUserActivity(type, //  userInfo[, //  webpageURL]), //  <https://www.electronjs.org/docs/api/app#appsetuseractivitytype-userinfo-webpageurl-macos>
app.getCurrentActivityType(), //  Returns String - The type of the currently running activity.
app.invalidateCurrentActivity(), //  Invalidates the current Handoff user activity.
app.resignCurrentActivity(), //  Marks the current Handoff user activity as inactive without invalidating it.
app.updateCurrentActivity(type, //  userInfo), //  <https://www.electronjs.org/docs/api/app#appupdatecurrentactivitytype-userinfo-macos>
app.setAppUserModelId(id), //  id String, //  Changes the Application User Model ID to id.
app.setActivationPolicy(policy), //  Sets the activation policy for a given app.
app.importCertificate(options, //  callback), //  <https://www.electronjs.org/docs/api/app#appimportcertificateoptions-callback-linux>
app.disableHardwareAcceleration(), //  Disables hardware acceleration for current app. This method can only be called before app is ready.
app.disableDomainBlockingFor3DAPIs(), //  <https://www.electronjs.org/docs/api/app#appdisabledomainblockingfor3dapis>
app.getAppMetrics(), //  Returns ProcessMetric[]: Array of ProcessMetric objects that correspond to memory and CPU usage statistics of all the processes associated with the app.
app.getGPUFeatureStatus(), //  Returns GPUFeatureStatus - The Graphics Feature Status from chrome://gpu/.
app.getGPUInfo(infoType), //  <https://www.electronjs.org/docs/api/app#appgetgpuinfoinfotype>
app.setBadgeCount(count), //  count Integer, //  Returns Boolean - Whether the call succeeded.
app.getBadgeCount(), //  Returns Integer - The current value displayed in the counter badge.
app.isUnityRunning(), //  Returns Boolean - Whether the current desktop environment is Unity launcher.
app.getLoginItemSettings([options]), //  <https://www.electronjs.org/docs/api/app#appgetloginitemsettingsoptions-macos-windows>
app.setLoginItemSettings(settings), //  <https://www.electronjs.org/docs/api/app#appsetloginitemsettingssettings-macos-windows>
app.isAccessibilitySupportEnabled(), //  Returns Boolean - true if Chrome's accessibility support is enabled, //  false otherwise.
app.setAccessibilitySupportEnabled(enabled), //  <https://www.electronjs.org/docs/api/app#appsetaccessibilitysupportenabledenabled-macos-windows>
app.showAboutPanel(), //  Show the app's about panel options. These options can be overridden with app.setAboutPanelOptions(options).
app.setAboutPanelOptions(options), //  <https://www.electronjs.org/docs/api/app#appsetaboutpaneloptionsoptions>
app.isEmojiPanelSupported(), //  Returns Boolean - whether or not the current OS version allows for native emoji pickers.
app.showEmojiPanel(), //  Show the platform's native emoji picker.
app.startAccessingSecurityScopedResource(bookmarkData), //  <https://www.electronjs.org/docs/api/app#appstartaccessingsecurityscopedresourcebookmarkdata-mas>
app.enableSandbox(), //  Enables full sandbox mode on the app. This method can only be called before app is ready.
app.isInApplicationsFolder(), //  Returns Boolean - Whether the application is currently running from the systems Application folder. Use in combination with app.moveToApplicationsFolder()
app.moveToApplicationsFolder([options]), //  <https://www.electronjs.org/docs/api/app#appmovetoapplicationsfolderoptions-macos>
app.accessibilitySupportEnabled, //  <https://www.electronjs.org/docs/api/app#appaccessibilitysupportenabled-macos-windows>
app.applicationMenu, //  A Menu | null property that returns Menu if one has been set and null otherwise. Users can pass a Menu to set this property.
app.badgeCount, //  An Integer property that returns the badge count for current app. Setting the count to 0 will hide the badge.
app.commandLine, //  A CommandLine object that allows you to read and manipulate the command line arguments that Chromium uses.
app.dock, //  A Dock | undefined object that allows you to perform actions on your app icon in the user's dock on macOS.
app.isPackaged, //  A Boolean property that returns true if the app is packaged, //  false otherwise. For many apps, //  this property can be used to distinguish development and production environments.
app.name, //  A String property that indicates the current application's name, //  which is the name in the application's package.json file.
app.userAgentFallback, //  A String which is the user agent string Electron will use as a global fallback.
app.allowRendererProcessReuse, //  <https://www.electronjs.org/docs/api/app#appallowrendererprocessreuse>