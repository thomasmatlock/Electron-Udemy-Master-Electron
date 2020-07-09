// https://www.electronjs.org/docs/api/web-contents#methods
// These methods can be accessed from the webContents module:

- webContents.getAllWebContents() // Returns WebContents[] - An array of all WebContents instances. 
- webContents.getFocusedWebContents() // Returns WebContents - The web contents that is focused in this application // otherwise returns null.
- webContents.fromId(id) // Returns WebContents - A WebContents instance with the given ID.
