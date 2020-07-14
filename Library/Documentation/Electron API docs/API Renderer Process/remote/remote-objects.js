// https://www.electronjs.org/docs/api/remote#remote-objects
// Each object(including functions) returned by the remote module represents an object in the main process(we call it a remote object or remote function).
// When you invoke methods of a remote object, call a remote function, or create a new object with the remote constructor(function), you are actually sending synchronous inter - process messages.

// Lifetime of Remote Objects
// Electron makes sure that as long as the remote object in the renderer process lives(in other words, has not been garbage collected), the corresponding object in the main process will not be released.
// When the remote object has been garbage collected, the corresponding object in the main process will be dereferenced.