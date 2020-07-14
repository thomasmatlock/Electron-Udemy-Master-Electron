/* eslint-disable no-restricted-globals */
/* eslint-disable no-delete-var */
/* eslint-disable no-undef */
// https://www.electronjs.org/docs/api/tray#new-trayimage-guid
// Creates a new tray icon associated with the image.
new Tray(image, [guid]); // image(NativeImage | String), guid String(optional) Windows - Assigns a GUID to the tray icon.If the executable is signed and the signature contains an organization in the subject line then the GUID is permanently associated with that signature.OS level settings like the position of the tray icon in the system tray will persist even if the path to the executable changes.If the executable is not code - signed then the GUID is permanently associated with the path to the executable.Changing the path to the executable will break the creation of the tray icon and a new GUID must be used.However, it is highly recommended to use the GUID parameter only in conjunction with code - signed executable.If an App defines multiple tray icons then each icon must use a separate GUID.
