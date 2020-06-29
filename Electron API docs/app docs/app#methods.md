https://www.electronjs.org/docs/api/app#methods
The app object has the following methods:

app.quit(),Try to close all windows. The before-quit event will be emitted first. If all windows are successfully closed, the will-quit event will be emitted and by default the application will terminate.

app.exit([exitCode]), Exits immediately with exitCode. exitCode defaults to 0.
app.relaunch([options]),Relaunches the app when current instance exits.

app.isReady(),
app.whenReady(),
app.focus([options]),
app.hide(),
app.show(),
app.setAppLogsPath([path]),
app.getAppPath(),
app.getPath(name),
app.getFileIcon(path[, options]),
app.setPath(name, path),
app.getVersion(),
app.getName(),
app.setName(name),
app.getLocale(),
app.getLocaleCountryCode(),
app.addRecentDocument(path),
app.clearRecentDocuments(),
app.setAsDefaultProtocolClient(protocol[, path, args]),
app.removeAsDefaultProtocolClient(protocol[, path, args]),
app.isDefaultProtocolClient(protocol[, path, args]),
app.getApplicationNameForProtocol(url),
app.setUserTasks(tasks),
app.getJumpListSettings(),
app.setJumpList(categories),
app.requestSingleInstanceLock(),
app.hasSingleInstanceLock(),
app.releaseSingleInstanceLock(),
app.setUserActivity(type, userInfo[, webpageURL]),
app.getCurrentActivityType(),
app.invalidateCurrentActivity(),
app.resignCurrentActivity(),
app.updateCurrentActivity(type, userInfo),
app.setAppUserModelId(id),
app.setActivationPolicy(policy),
app.importCertificate(options, callback),
app.disableHardwareAcceleration(),
app.disableDomainBlockingFor3DAPIs(),
app.getAppMetrics(),
app.getGPUFeatureStatus(),
app.getGPUInfo(infoType),
app.setBadgeCount(count),
app.getBadgeCount(),
app.isUnityRunning(),
app.getLoginItemSettings([options]),
app.setLoginItemSettings(settings),
app.isAccessibilitySupportEnabled(),
app.setAccessibilitySupportEnabled(enabled),
app.showAboutPanel(),
app.setAboutPanelOptions(options),
app.isEmojiPanelSupported(),
app.showEmojiPanel(),
app.startAccessingSecurityScopedResource(bookmarkData),
app.enableSandbox(),
app.isInApplicationsFolder(),
app.moveToApplicationsFolder([options]),
app.accessibilitySupportEnabled,
app.applicationMenu,
app.badgeCount,
app.commandLine,
app.dock,
app.isPackaged,
app.name,
app.userAgentFallback,
app.allowRendererProcessReuse,

This method guarantees that all beforeunload and unload event handlers are correctly executed. It is possible that a window cancels the quitting by returning false in the beforeunload event handler.
All windows will be closed immediately without asking the user, and the before-quit and will-quit events will not be emitted.
By default, the new instance will use the same working directory and command line arguments with current instance. When args is specified, the args will be passed as command line arguments instead. When execPath is specified, the execPath will be executed for relaunch instead of current app.
Note that this method does not quit the app when executed, you have to call app.quit or app.exit after calling app.relaunch to make the app restart.
When app.relaunch is called for multiple times, multiple instances will be started after current instance exited.
An example of restarting current instance immediately and adding a new command line argument to the new instance:
Returns Boolean - true if Electron has finished initializing, false otherwise. See also app.whenReady().
Returns Promise<void> - fulfilled when Electron is initialized. May be used as a convenient alternative to checking app.isReady() and subscribing to the ready event if the app is not ready yet.
On Linux, focuses on the first visible window. On macOS, makes the application the active app. On Windows, focuses on the application's first window.
You should seek to use the steal option as sparingly as possible.
Hides all application windows without minimizing them.
Shows application windows after they were hidden. Does not automatically focus them.
Sets or creates a directory your app's logs which can then be manipulated with app.getPath() or app.setPath(pathName, newPath).
Calling app.setAppLogsPath() without a path parameter will result in this directory being set to ~/Library/Logs/YourAppName on macOS, and inside the userData directory on Linux and Windows.
Returns String - The current application directory.
Returns String - A path to a special directory or file associated with name. On failure, an Error is thrown.
If app.getPath('logs') is called without called app.setAppLogsPath() being called first, a default log directory will be created equivalent to calling app.setAppLogsPath() without a path parameter.
Returns Promise<NativeImage> - fulfilled with the app's icon, which is a NativeImage.
Fetches a path's associated icon.
On Windows, there a 2 kinds of icons:
On Linux and macOS, icons depend on the application associated with file mime type.
Overrides the path to a special directory or file associated with name. If the path specifies a directory that does not exist, an Error is thrown. In that case, the directory should be created with fs.mkdirSync or similar.
You can only override paths of a name defined in app.getPath.
By default, web pages' cookies and caches will be stored under the userData directory. If you want to change this location, you have to override the userData path before the ready event of the app module is emitted.
Returns String - The version of the loaded application. If no version is found in the application's package.json file, the version of the current bundle or executable is returned.
Returns String - The current application's name, which is the name in the application's package.json file.
Usually the name field of package.json is a short lowercase name, according to the npm modules spec. You should usually also specify a productName field, which is your application's full capitalized name, and which will be preferred over name by Electron.
Overrides the current application's name.
Note: This function overrides the name used internally by Electron; it does not affect the name that the OS uses.
Returns String - The current application locale. Possible return values are documented here.
To set the locale, you'll want to use a command line switch at app startup, which may be found here.
Note: When distributing your packaged app, you have to also ship the locales folder.
Note: On Windows, you have to call it after the ready events gets emitted.
Returns String - User operating system's locale two-letter ISO 3166 country code. The value is taken from native OS APIs.
Note: When unable to detect locale country code, it returns empty string.
Adds path to the recent documents list.
This list is managed by the OS. On Windows, you can visit the list from the task bar, and on macOS, you can visit it from dock menu.
Clears the recent documents list.
Returns Boolean - Whether the call succeeded.
Sets the current executable as the default handler for a protocol (aka URI scheme). It allows you to integrate your app deeper into the operating system. Once registered, all links with your-protocol:// will be opened with the current executable. The whole link, including protocol, will be passed to your application as a parameter.
Note: On macOS, you can only register protocols that have been added to your app's info.plist, which cannot be modified at runtime. However, you can change the file during build time via Electron Forge, Electron Packager, or by editing info.plist with a text editor. Please refer to Apple's documentation for details.
Note: In a Windows Store environment (when packaged as an appx) this API will return true for all calls but the registry key it sets won't be accessible by other applications. In order to register your Windows Store application as a default protocol handler you must declare the protocol in your manifest.
The API uses the Windows Registry and LSSetDefaultHandlerForURLScheme internally.
Returns Boolean - Whether the call succeeded.
This method checks if the current executable as the default handler for a protocol (aka URI scheme). If so, it will remove the app as the default handler.
Returns Boolean - Whether the current executable is the default handler for a protocol (aka URI scheme).
Note: On macOS, you can use this method to check if the app has been registered as the default protocol handler for a protocol. You can also verify this by checking ~/Library/Preferences/com.apple.LaunchServices.plist on the macOS machine. Please refer to Apple's documentation for details.
The API uses the Windows Registry and LSCopyDefaultHandlerForURLScheme internally.
Returns String - Name of the application handling the protocol, or an empty string if there is no handler. For instance, if Electron is the default handler of the URL, this could be Electron on Windows and Mac. However, don't rely on the precise format which is not guaranteed to remain unchanged. Expect a different format on Linux, possibly with a .desktop suffix.
This method returns the application name of the default handler for the protocol (aka URI scheme) of a URL.
Adds tasks to the Tasks category of the Jump List on Windows.
tasks is an array of Task objects.
Returns Boolean - Whether the call succeeded.
Note: If you'd like to customize the Jump List even more use app.setJumpList(categories) instead.
Returns Object:
Sets or removes a custom Jump List for the application, and returns one of the following strings:
If categories is null the previously set custom Jump List (if any) will be replaced by the standard Jump List for the app (managed by Windows).
Note: If a JumpListCategory object has neither the type nor the name property set then its type is assumed to be tasks. If the name property is set but the type property is omitted then the type is assumed to be custom.
Note: Users can remove items from custom categories, and Windows will not allow a removed item to be added back into a custom category until after the next successful call to app.setJumpList(categories). Any attempt to re-add a removed item to a custom category earlier than that will result in the entire custom category being omitted from the Jump List. The list of removed items can be obtained using app.getJumpListSettings().
Here's a very simple example of creating a custom Jump List:
Returns Boolean
The return value of this method indicates whether or not this instance of your application successfully obtained the lock. If it failed to obtain the lock, you can assume that another instance of your application is already running with the lock and exit immediately.
I.e. This method returns true if your process is the primary instance of your application and your app should continue loading. It returns false if your process should immediately quit as it has sent its parameters to another instance that has already acquired the lock.
On macOS, the system enforces single instance automatically when users try to open a second instance of your app in Finder, and the open-file and open-url events will be emitted for that. However when users start your app in command line, the system's single instance mechanism will be bypassed, and you have to use this method to ensure single instance.
An example of activating the window of primary instance when a second instance starts:
Returns Boolean
This method returns whether or not this instance of your app is currently holding the single instance lock. You can request the lock with app.requestSingleInstanceLock() and release with app.releaseSingleInstanceLock()
Releases all locks that were created by requestSingleInstanceLock. This will allow multiple instances of the application to once again run side by side.
Creates an NSUserActivity and sets it as the current activity. The activity is eligible for Handoff to another device afterward.
Returns String - The type of the currently running activity.
Invalidates the current Handoff user activity.
Marks the current Handoff user activity as inactive without invalidating it.
Updates the current activity if its type matches type, merging the entries from userInfo into its current userInfo dictionary.
Changes the Application User Model ID to id.
Sets the activation policy for a given app.
Activation policy types:
Imports the certificate in pkcs12 format into the platform certificate store. callback is called with the result of import operation, a value of 0 indicates success while any other value indicates failure according to Chromium net_error_list.
Disables hardware acceleration for current app.
This method can only be called before app is ready.
By default, Chromium disables 3D APIs (e.g. WebGL) until restart on a per domain basis if the GPU processes crashes too frequently. This function disables that behavior.
This method can only be called before app is ready.
Returns ProcessMetric[]: Array of ProcessMetric objects that correspond to memory and CPU usage statistics of all the processes associated with the app.
Returns GPUFeatureStatus - The Graphics Feature Status from chrome://gpu/.
Note: This information is only usable after the gpu-info-update event is emitted.
Returns Promise<unknown>
For infoType equal to complete: Promise is fulfilled with Object containing all the GPU Information as in chromium's GPUInfo object. This includes the version and driver information that's shown on chrome://gpu page.
For infoType equal to basic: Promise is fulfilled with Object containing fewer attributes than when requested with complete. Here's an example of basic response:
Using basic should be preferred if only basic information like vendorId or driverId is needed.
Returns Boolean - Whether the call succeeded.
Sets the counter badge for current app. Setting the count to 0 will hide the badge.
On macOS, it shows on the dock icon. On Linux, it only works for Unity launcher.
Note: Unity launcher requires the existence of a .desktop file to work, for more information please read Desktop Environment Integration.
Returns Integer - The current value displayed in the counter badge.
Returns Boolean - Whether the current desktop environment is Unity launcher.
If you provided path and args options to app.setLoginItemSettings, then you need to pass the same arguments here for openAtLogin to be set correctly.
Returns Object:
Set the app's login item settings.
To work with Electron's autoUpdater on Windows, which uses Squirrel, you'll want to set the launch path to Update.exe, and pass arguments that specify your application name. For example:
Returns Boolean - true if Chrome's accessibility support is enabled, false otherwise. This API will return true if the use of assistive technologies, such as screen readers, has been detected. See chromium.org/developers/design-documents/accessibility for more details.
Manually enables Chrome's accessibility support, allowing to expose accessibility switch to users in application settings. See Chromium's accessibility docs for more details. Disabled by default.
This API must be called after the ready event is emitted.
Note: Rendering accessibility tree can significantly affect the performance of your app. It should not be enabled by default.
Show the app's about panel options. These options can be overridden with app.setAboutPanelOptions(options).
Set the about panel options. This will override the values defined in the app's .plist file on macOS. See the Apple docs for more details. On Linux, values must be set in order to be shown; there are no defaults.
"If you do not set credits but still wish to surface them in your app, AppKit will look for a file named ""Credits.html"", ""Credits.rtf"", and ""Credits.rtfd"", in that order, in the bundle returned by the NSBundle class method main. The first file found is used, and if none is found, the info area is left blank. See Apple documentation for more information."
Returns Boolean - whether or not the current OS version allows for native emoji pickers.
Show the platform's native emoji picker.
Returns Function - This function must be called once you have finished accessing the security scoped file. If you do not remember to stop accessing the bookmark, kernel resources will be leaked and your app will lose its ability to reach outside the sandbox completely, until your app is restarted.
Start accessing a security scoped resource. With this method Electron applications that are packaged for the Mac App Store may reach outside their sandbox to access files chosen by the user. See Apple's documentation for a description of how this system works.
Enables full sandbox mode on the app.
This method can only be called before app is ready.
Returns Boolean - Whether the application is currently running from the systems Application folder. Use in combination with app.moveToApplicationsFolder()
Returns Boolean - Whether the move was successful. Please note that if the move is successful, your application will quit and relaunch.
No confirmation dialog will be presented by default. If you wish to allow the user to confirm the operation, you may do so using the dialog API.
NOTE: This method throws errors if anything other than the user causes the move to fail. For instance if the user cancels the authorization dialog, this method returns false. If we fail to perform the copy, then this method will throw an error. The message in the error should be informative and tell you exactly what went wrong.
By default, if an app of the same name as the one being moved exists in the Applications directory and is not running, the existing app will be trashed and the active app moved into its place. If it is running, the pre-existing running app will assume focus and the the previously active app will quit itself. This behavior can be changed by providing the optional conflict handler, where the boolean returned by the handler determines whether or not the move conflict is resolved with default behavior. i.e. returning false will ensure no further action is taken, returning true will result in the default behavior and the method continuing.
For example:
Would mean that if an app already exists in the user directory, if the user chooses to 'Continue Move' then the function would continue with its default behavior and the existing app will be trashed and the active app moved into its place.
A Boolean property that's true if Chrome's accessibility support is enabled, false otherwise. This property will be true if the use of assistive technologies, such as screen readers, has been detected. Setting this property to true manually enables Chrome's accessibility support, allowing developers to expose accessibility switch to users in application settings.
See Chromium's accessibility docs for more details. Disabled by default.
This API must be called after the ready event is emitted.
Note: Rendering accessibility tree can significantly affect the performance of your app. It should not be enabled by default.
A Menu | null property that returns Menu if one has been set and null otherwise. Users can pass a Menu to set this property.
An Integer property that returns the badge count for current app. Setting the count to 0 will hide the badge.
On macOS, setting this with any nonzero integer shows on the dock icon. On Linux, this property only works for Unity launcher.
Note: Unity launcher requires the existence of a .desktop file to work, for more information please read Desktop Environment Integration.
A CommandLine object that allows you to read and manipulate the command line arguments that Chromium uses.
A Dock | undefined object that allows you to perform actions on your app icon in the user's dock on macOS.
A Boolean property that returns true if the app is packaged, false otherwise. For many apps, this property can be used to distinguish development and production environments.
A String property that indicates the current application's name, which is the name in the application's package.json file.
Usually the name field of package.json is a short lowercase name, according to the npm modules spec. You should usually also specify a productName field, which is your application's full capitalized name, and which will be preferred over name by Electron.
A String which is the user agent string Electron will use as a global fallback.
This is the user agent that will be used when no user agent is set at the webContents or session level. It is useful for ensuring that your entire app has the same user agent. Set to a custom value as early as possible in your app's initialization to ensure that your overridden value is used.
A Boolean which when true disables the overrides that Electron has in place to ensure renderer processes are restarted on every navigation. The current default value for this property is true.
The intention is for these overrides to become disabled by default and then at some point in the future this property will be removed. This property impacts which native modules you can use in the renderer process. For more information on the direction Electron is going with renderer process restarts and usage of native modules in the renderer process please check out this Tracking Issue.
