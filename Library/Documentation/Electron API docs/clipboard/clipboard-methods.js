# <https://www.electronjs.org/docs/api/clipboard#methods>
// Methods
// The clipboard module has the following methods:

clipboard.readText([type]) //, Returns String - The content in the clipboard as plain text. 
clipboard.writeText(text[, type]) //, Writes the text into the clipboard as plain text.
clipboard.readHTML([type]) //,Returns String - The content in the clipboard as markup.
clipboard.writeHTML(markup[, type]) //,Writes markup to the clipboard.
clipboard.readImage([type]) //,Returns NativeImage - The image content in the clipboard.
clipboard.writeImage(image[, type]) //,Writes image to the clipboard.
clipboard.readRTF([type]) //,Returns String - The content in the clipboard as RTF.
clipboard.writeRTF(text[, type]) //,Writes the text into the clipboard in RTF.
clipboard.readBookmark() //,Returns an Object containing title and url keys representing the bookmark in the clipboard. The title and url values will be empty strings when the bookmark is unavailable.
clipboard.writeBookmark(title, url[, type]) //,Writes the title and url into the clipboard as a bookmark.
clipboard.readFindText() //,Returns String - The text on the find pasteboard, which is the pasteboard that holds information about the current state of the active application’s find panel.
clipboard.writeFindText(text) //,Writes the text into the find pasteboard (the pasteboard that holds information about the current state of the active application’s find panel) // as plain text.
clipboard.clear([type]) //,Clears the clipboard content.
clipboard.availableFormats([type]) //,Returns String[] - An array of supported formats for the clipboard type.
clipboard.has(format[, type]) //,Returns Boolean - Whether the clipboard supports the specified format.
clipboard.read(format) //,Returns String - Reads format type from the clipboard.
clipboard.readBuffer(format) //,Returns Buffer - Reads format type from the clipboard.
clipboard.writeBuffer(format, buffer[, type]) //,Writes the buffer into the clipboard as format.
clipboard.write(data[, type]) //,Writes data to the clipboard.
